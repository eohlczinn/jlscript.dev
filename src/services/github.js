import { githubReleaseUrl, runtimeConfig } from "../config/runtime";

function platformForAsset(name) {
  const value = name.toLowerCase();
  if (/termux|android/.test(value)) return "termux";
  if (/windows|win/.test(value)) return "windows";
  if (/macos|darwin|osx/.test(value)) return "macos";
  if (/linux/.test(value)) return "linux";
  return "other";
}

function architectureForAsset(name) {
  const value = name.toLowerCase();
  if (/arm64|aarch64|apple-silicon/.test(value)) return "arm64";
  if (/x64|amd64|intel/.test(value)) return "x64";
  return "unknown";
}

export function normalizeRelease(release) {
  return {
    tag: release.tag_name || "",
    name: release.name || release.tag_name || "JLScript",
    publishedAt: release.published_at || release.created_at || "",
    notes: release.body || "Sem notas de versão publicadas.",
    url: release.html_url || `https://github.com/${runtimeConfig.githubRepository}/releases`,
    assets: Array.isArray(release.assets) ? release.assets.map((asset) => ({
      id: asset.id,
      name: asset.name,
      size: asset.size,
      updatedAt: asset.updated_at,
      downloadUrl: asset.browser_download_url,
      platform: platformForAsset(asset.name),
      architecture: architectureForAsset(asset.name),
    })) : [],
  };
}

export async function getLatestRelease(signal) {
  const response = await fetch(githubReleaseUrl, {
    signal,
    headers: { Accept: "application/vnd.github+json" },
  });

  if (response.status === 404) return null;
  if (!response.ok) throw new Error("Não foi possível consultar as Releases oficiais agora.");
  return normalizeRelease(await response.json());
}

export function selectReleaseAsset(release, platform, architecture = "") {
  if (!release) return null;
  const candidates = release.assets.filter((asset) => asset.platform === platform);
  if (!candidates.length) return null;
  return candidates.find((asset) => asset.architecture === architecture) || candidates.find((asset) => asset.architecture === "unknown") || candidates[0];
}
