/**
 * Replaces Next.js polyfill-module for modern browsers (see package.json browserslist).
 * Keeps URL.canParse only — required for Safari 16.4, unsupported in that release.
 */
if (typeof URL !== "undefined" && !("canParse" in URL)) {
  URL.canParse = function (url, base) {
    try {
      return !!new URL(url, base);
    } catch {
      return false;
    }
  };
}
