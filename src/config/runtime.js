const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();

export const runtimeConfig = Object.freeze({
  apiUrl: configuredApiUrl ? configuredApiUrl.replace(/\/$/, "") : "",
  githubRepository: import.meta.env.VITE_GITHUB_REPOSITORY || "eohlczinn/JLScript",
});

export const githubReleaseUrl = `https://api.github.com/repos/${runtimeConfig.githubRepository}/releases/latest`;
