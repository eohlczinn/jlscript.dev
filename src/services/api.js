import { runtimeConfig } from "../config/runtime";

export async function apiRequest(path, options = {}) {
  if (!runtimeConfig.apiUrl) throw new Error("API oficial não configurada.");
  const response = await fetch(`${runtimeConfig.apiUrl}${path}`, {
    ...options,
    headers: { Accept: "application/json", ...options.headers },
  });
  const payload = response.headers.get("content-type")?.includes("application/json") ? await response.json() : null;
  if (!response.ok) throw new Error(payload?.error || "A API oficial não está disponível.");
  return payload;
}
