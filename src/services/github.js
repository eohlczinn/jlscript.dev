import { githubReleaseUrl, runtimeConfig } from "../config/runtime";

const DEFAULT_CACHE_TIME = 5 * 60 * 1000;
const DEFAULT_TIMEOUT = 10_000;

let cachedRelease = null;
let cacheExpiresAt = 0;

/* =========================================================
   UTILITÁRIOS
========================================================= */

function normalizeAssetName(name = "") {
  return String(name).trim().toLowerCase();
}

function formatBytes(bytes = 0) {
  if (!Number.isFinite(bytes) || bytes <= 0) {
    return "0 B";
  }

  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1,
  );

  const value = bytes / 1024 ** index;

  return `${value.toFixed(index === 0 ? 0 : 2)} ${units[index]}`;
}

function normalizeVersion(tag = "") {
  return String(tag).trim().replace(/^v/i, "");
}

/* =========================================================
   PLATAFORMA
========================================================= */

export function platformForAsset(name = "") {
  const value = normalizeAssetName(name);

  if (/termux/.test(value)) {
    return "termux";
  }

  if (/android|\.apk$/.test(value)) {
    return "android";
  }

  if (/windows|win32|win64|\.exe$|\.msi$/.test(value)) {
    return "windows";
  }

  if (/macos|darwin|osx|\.dmg$/.test(value)) {
    return "macos";
  }

  if (/linux|\.appimage$/.test(value)) {
    return "linux";
  }

  return "other";
}

/* =========================================================
   ARQUITETURA
========================================================= */

export function architectureForAsset(name = "") {
  const value = normalizeAssetName(name);

  if (/arm64|aarch64|apple[-_ ]?silicon/.test(value)) {
    return "arm64";
  }

  if (/armv7|arm32/.test(value)) {
    return "arm32";
  }

  if (/x64|amd64|x86[-_ ]?64/.test(value)) {
    return "x64";
  }

  if (/x86|i386|i686/.test(value)) {
    return "x86";
  }

  return "unknown";
}

/* =========================================================
   TIPO DE PACOTE
========================================================= */

export function packageTypeForAsset(name = "") {
  const value = normalizeAssetName(name);

  if (/setup|installer|install/.test(value)) {
    return "installer";
  }

  if (/portable/.test(value)) {
    return "portable";
  }

  if (/\.msi$/.test(value)) {
    return "msi";
  }

  if (/\.exe$/.test(value)) {
    return "executable";
  }

  if (/\.apk$/.test(value)) {
    return "apk";
  }

  if (/\.appimage$/.test(value)) {
    return "appimage";
  }

  if (/\.zip$|\.tar\.gz$|\.tgz$|\.tar$/.test(value)) {
    return "archive";
  }

  if (/sha256|checksum/.test(value)) {
    return "checksum";
  }

  return "file";
}

/* =========================================================
   NORMALIZAÇÃO DE ASSET
========================================================= */

function normalizeAsset(asset = {}) {
  const name = asset.name || "";

  return {
    id: asset.id ?? null,

    name,

    size: Number(asset.size) || 0,

    sizeLabel: formatBytes(Number(asset.size) || 0),

    contentType: asset.content_type || "",

    downloadCount: Number(asset.download_count) || 0,

    createdAt: asset.created_at || "",

    updatedAt: asset.updated_at || "",

    downloadUrl: asset.browser_download_url || "",

    platform: platformForAsset(name),

    architecture: architectureForAsset(name),

    packageType: packageTypeForAsset(name),
  };
}

/* =========================================================
   NORMALIZAÇÃO DA RELEASE
========================================================= */

export function normalizeRelease(release = {}) {
  const tag = release.tag_name || "";

  const version = normalizeVersion(tag);

  const assets = Array.isArray(release.assets)
    ? release.assets
        .map(normalizeAsset)
        .filter((asset) => asset.name && asset.downloadUrl)
    : [];

  return {
    id: release.id ?? null,

    tag,

    version,

    name: release.name || (version ? `JLScript ${version}` : "JLScript"),

    publishedAt: release.published_at || release.created_at || "",

    createdAt: release.created_at || "",

    updatedAt: release.updated_at || "",

    notes: release.body?.trim() || "Sem notas de versão publicadas.",

    url:
      release.html_url ||
      `https://github.com/${runtimeConfig.githubRepository}/releases`,

    prerelease: Boolean(release.prerelease),

    draft: Boolean(release.draft),

    stable: !release.prerelease && !release.draft,

    assets,

    assetCount: assets.length,

    totalDownloads: assets.reduce(
      (total, asset) => total + asset.downloadCount,
      0,
    ),
  };
}

/* =========================================================
   CONTROLE DE CACHE
========================================================= */

export function clearReleaseCache() {
  cachedRelease = null;
  cacheExpiresAt = 0;
}

/* =========================================================
   FETCH COM TIMEOUT
========================================================= */

async function fetchRelease({ signal, timeout = DEFAULT_TIMEOUT } = {}) {
  const controller = new AbortController();

  let timeoutTriggered = false;

  const timeoutId = setTimeout(() => {
    timeoutTriggered = true;
    controller.abort();
  }, timeout);

  const abortFromParent = () => {
    controller.abort();
  };

  if (signal) {
    if (signal.aborted) {
      controller.abort();
    } else {
      signal.addEventListener("abort", abortFromParent, { once: true });
    }
  }

  try {
    const response = await fetch(githubReleaseUrl, {
      signal: controller.signal,

      headers: {
        Accept: "application/vnd.github+json",

        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    if (response.status === 404) {
      return null;
    }

    if (response.status === 403 || response.status === 429) {
      const remaining = response.headers.get("x-ratelimit-remaining");

      if (remaining === "0") {
        throw new Error(
          "O limite temporário de consultas ao GitHub foi atingido.",
        );
      }
    }

    if (!response.ok) {
      throw new Error(
        `Não foi possível consultar a release oficial. HTTP ${response.status}.`,
      );
    }

    const data = await response.json();

    return normalizeRelease(data);
  } catch (error) {
    if (timeoutTriggered) {
      throw new Error("A consulta da versão demorou demais e foi cancelada.");
    }

    if (signal?.aborted || error?.name === "AbortError") {
      const abortError = new Error("Consulta cancelada.");

      abortError.name = "AbortError";

      throw abortError;
    }

    if (error instanceof TypeError) {
      throw new Error(
        "Não foi possível conectar ao serviço de releases. Verifique sua conexão.",
      );
    }

    throw error;
  } finally {
    clearTimeout(timeoutId);

    signal?.removeEventListener("abort", abortFromParent);
  }
}

/* =========================================================
   ÚLTIMA RELEASE
========================================================= */

export async function getLatestRelease(signal, options = {}) {
  const {
    force = false,
    cacheTime = DEFAULT_CACHE_TIME,
    timeout = DEFAULT_TIMEOUT,
  } = options;

  const now = Date.now();

  if (!force && cachedRelease && now < cacheExpiresAt) {
    return cachedRelease;
  }

  const release = await fetchRelease({
    signal,
    timeout,
  });

  if (release) {
    cachedRelease = release;

    cacheExpiresAt = Date.now() + cacheTime;
  }

  return release;
}

/* =========================================================
   SCORE DE DOWNLOAD
========================================================= */

function scoreAsset(asset, platform, architecture) {
  let score = 0;

  if (asset.platform === platform) {
    score += 100;
  }

  if (architecture && asset.architecture === architecture) {
    score += 50;
  }

  if (asset.architecture === "unknown") {
    score += 10;
  }

  switch (asset.packageType) {
    case "installer":
      score += 30;
      break;

    case "msi":
      score += 25;
      break;

    case "executable":
      score += 20;
      break;

    case "portable":
      score += 15;
      break;

    case "appimage":
      score += 20;
      break;

    case "apk":
      score += 20;
      break;

    case "archive":
      score += 10;
      break;

    default:
      break;
  }

  return score;
}

/* =========================================================
   ESCOLHER MELHOR DOWNLOAD
========================================================= */

export function selectReleaseAsset(release, platform, architecture = "") {
  if (!release || !Array.isArray(release.assets)) {
    return null;
  }

  const candidates = release.assets.filter(
    (asset) => asset.platform === platform && asset.packageType !== "checksum",
  );

  if (!candidates.length) {
    return null;
  }

  return [...candidates].sort(
    (a, b) =>
      scoreAsset(b, platform, architecture) -
      scoreAsset(a, platform, architecture),
  )[0];
}

/* =========================================================
   LISTAR DOWNLOADS POR PLATAFORMA
========================================================= */

export function getAssetsForPlatform(release, platform) {
  if (!release || !Array.isArray(release.assets)) {
    return [];
  }

  return release.assets.filter(
    (asset) => asset.platform === platform && asset.packageType !== "checksum",
  );
}
