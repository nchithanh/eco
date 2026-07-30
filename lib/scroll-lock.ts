/**
 * Nested-safe page scroll lock for overlays (loader, modals, mobile chat).
 * Avoids restoring a stale `overflow: hidden` after another lock releases.
 */

let lockCount = 0;
let loadingClassCount = 0;

function applyDomLock() {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  const body = document.body;
  html.style.overflow = "hidden";
  body.style.overflow = "hidden";
}

function clearDomLock() {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  const body = document.body;
  html.style.overflow = "";
  body.style.overflow = "";
  html.style.touchAction = "";
  body.style.touchAction = "";
}

function applyLoadingClass(on: boolean) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("kuct-loading", on);
}

export type ScrollLockOptions = {
  /** Applies `html.kuct-loading` (touch-action: none). Loader only. */
  loadingClass?: boolean;
};

/** Acquire a scroll lock. Pair with `releasePageScroll` exactly once per acquire. */
export function acquirePageScroll(opts: ScrollLockOptions = {}) {
  if (typeof document === "undefined") return;
  lockCount += 1;
  if (opts.loadingClass) {
    loadingClassCount += 1;
    applyLoadingClass(true);
  }
  applyDomLock();
}

/** Release one scroll lock acquired earlier. */
export function releasePageScroll(opts: ScrollLockOptions = {}) {
  if (typeof document === "undefined") return;
  if (opts.loadingClass) {
    loadingClassCount = Math.max(0, loadingClassCount - 1);
    if (loadingClassCount === 0) applyLoadingClass(false);
  }
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) clearDomLock();
}

/** Emergency clear — e.g. loader safety / bfcache restore. */
export function forceUnlockPageScroll() {
  if (typeof document === "undefined") return;
  lockCount = 0;
  loadingClassCount = 0;
  applyLoadingClass(false);
  clearDomLock();
}

/** Test helper */
export function getPageScrollLockCount() {
  return lockCount;
}

/** Test helper — reset module state between cases. */
export function resetPageScrollLockForTests() {
  lockCount = 0;
  loadingClassCount = 0;
  if (typeof document !== "undefined") {
    applyLoadingClass(false);
    clearDomLock();
  }
}
