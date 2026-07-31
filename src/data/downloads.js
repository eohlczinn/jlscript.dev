export const VERSION = "2.1.0";
export const RELEASE_BASE = "https://github.com/eohlczinn/JLScript/releases/latest/download";

export const downloads = [
  { id: "windows-x64", icon: "⊞", name: "Windows x64", detail: "Windows 10 e 11 (Intel/AMD)", asset: "JLScript-Setup-win-x64.exe" },
  { id: "windows-arm64", icon: "⊞", name: "Windows ARM", detail: "Windows em ARM64", asset: "JLScript-Setup-win-arm64.exe" },
  { id: "linux-x64", icon: "◒", name: "Linux x64", detail: "Distribuicoes 64 bits", asset: "jls-linux-x64.tar.gz" },
  { id: "linux-arm64", icon: "◒", name: "Linux ARM", detail: "ARM64 e SBCs", asset: "jls-linux-arm64.tar.gz" },
  { id: "macos-x64", icon: "⌘", name: "macOS Intel", detail: "Intel x64", asset: "jls-macos-x64.tar.gz" },
  { id: "macos-arm64", icon: "⌘", name: "macOS Apple Silicon", detail: "M1, M2, M3 e M4", asset: "jls-macos-arm64.tar.gz" },
  { id: "termux-arm64", icon: "▣", name: "Android (Termux)", detail: "Termux em ARM64", asset: "jls-termux-arm64.tar.gz" }
];

export const assetUrl = (asset) => `${RELEASE_BASE}/${asset}`;

export function detectDownload() {
  const ua = navigator.userAgent.toLowerCase();
  const arm = /aarch64|arm64|\barm\b/.test(`${navigator.platform} ${ua}`.toLowerCase());
  if (/android/.test(ua)) return downloads.find((item) => item.id === "termux-arm64");
  if (/win/.test(navigator.platform.toLowerCase())) return downloads.find((item) => item.id === (arm ? "windows-arm64" : "windows-x64"));
  if (/mac/.test(navigator.platform.toLowerCase())) return downloads.find((item) => item.id === (arm ? "macos-arm64" : "macos-x64"));
  return downloads.find((item) => item.id === (arm ? "linux-arm64" : "linux-x64"));
}
