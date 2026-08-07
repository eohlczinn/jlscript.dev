export const downloads = [
  { id: "windows-x64", icon: "⊞", name: "Windows x64", detail: "Windows 10 e 11 (Intel/AMD)", platform: "windows", architecture: "x64" },
  { id: "windows-arm64", icon: "⊞", name: "Windows ARM", detail: "Windows em ARM64", platform: "windows", architecture: "arm64" },
  { id: "linux-x64", icon: "◒", name: "Linux x64", detail: "Distribuições 64 bits", platform: "linux", architecture: "x64" },
  { id: "linux-arm64", icon: "◒", name: "Linux ARM", detail: "ARM64 e SBCs", platform: "linux", architecture: "arm64" },
  { id: "macos-x64", icon: "⌘", name: "macOS Intel", detail: "Intel x64", platform: "macos", architecture: "x64" },
  { id: "macos-arm64", icon: "⌘", name: "macOS Apple Silicon", detail: "M1, M2, M3 e M4", platform: "macos", architecture: "arm64" },
  { id: "termux-arm64", icon: "▣", name: "Android (Termux)", detail: "Termux em ARM64", platform: "termux", architecture: "arm64" },
];

export function detectDownload() {
  const ua = navigator.userAgent.toLowerCase();
  const arm = /aarch64|arm64|\barm\b/.test(`${navigator.platform} ${ua}`.toLowerCase());
  if (/android/.test(ua)) return downloads.find((item) => item.id === "termux-arm64");
  if (/win/.test(navigator.platform.toLowerCase())) return downloads.find((item) => item.id === (arm ? "windows-arm64" : "windows-x64"));
  if (/mac/.test(navigator.platform.toLowerCase())) return downloads.find((item) => item.id === (arm ? "macos-arm64" : "macos-x64"));
  return downloads.find((item) => item.id === (arm ? "linux-arm64" : "linux-x64"));
}
