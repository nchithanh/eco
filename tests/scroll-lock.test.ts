import { afterEach, describe, expect, it } from "vitest";
import {
  acquirePageScroll,
  forceUnlockPageScroll,
  getPageScrollLockCount,
  releasePageScroll,
  resetPageScrollLockForTests,
} from "@/lib/scroll-lock";

describe("scroll-lock", () => {
  afterEach(() => {
    resetPageScrollLockForTests();
  });

  it("locks overflow and unlocks when count hits zero", () => {
    acquirePageScroll();
    expect(getPageScrollLockCount()).toBe(1);
    expect(document.body.style.overflow).toBe("hidden");
    expect(document.documentElement.style.overflow).toBe("hidden");

    releasePageScroll();
    expect(getPageScrollLockCount()).toBe(0);
    expect(document.body.style.overflow).toBe("");
    expect(document.documentElement.style.overflow).toBe("");
  });

  it("keeps scroll locked while nested locks remain", () => {
    acquirePageScroll({ loadingClass: true });
    acquirePageScroll();
    expect(document.documentElement.classList.contains("kuct-loading")).toBe(
      true,
    );

    releasePageScroll({ loadingClass: true });
    expect(getPageScrollLockCount()).toBe(1);
    expect(document.body.style.overflow).toBe("hidden");
    expect(document.documentElement.classList.contains("kuct-loading")).toBe(
      false,
    );

    releasePageScroll();
    expect(getPageScrollLockCount()).toBe(0);
    expect(document.body.style.overflow).toBe("");
  });

  it("does not restore a stale hidden overflow after nested release", () => {
    // Simulates old bug: loader sets hidden, modal saves prev=hidden, loader
    // clears to "", modal close restores "hidden".
    acquirePageScroll({ loadingClass: true });
    acquirePageScroll();
    releasePageScroll({ loadingClass: true });
    releasePageScroll();
    expect(document.body.style.overflow).toBe("");
    expect(document.documentElement.classList.contains("kuct-loading")).toBe(
      false,
    );
  });

  it("forceUnlock clears everything", () => {
    acquirePageScroll({ loadingClass: true });
    acquirePageScroll();
    forceUnlockPageScroll();
    expect(getPageScrollLockCount()).toBe(0);
    expect(document.body.style.overflow).toBe("");
    expect(document.documentElement.classList.contains("kuct-loading")).toBe(
      false,
    );
  });
});
