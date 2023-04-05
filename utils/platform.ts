export const isIOS =
  typeof navigator !== "undefined" &&
  (/iPad|iPhone|iPod/.test(navigator.userAgent || "") ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)); // iPad iOS 13

export const isAndroid =
  typeof navigator !== "undefined" && /Android/.test(navigator.userAgent || "");
