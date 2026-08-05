"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const DESKTOP_MQ = "(min-width: 1024px)";
const REDUCE_MQ = "(prefers-reduced-motion: reduce)";

/**
 * Desktop-only Lenis smooth wheel/trackpad scroll.
 * Skipped below lg and when prefers-reduced-motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;

    const desktop = window.matchMedia(DESKTOP_MQ);
    const reduce = window.matchMedia(REDUCE_MQ);
    let lenis: Lenis | null = null;

    const teardown = () => {
      lenis?.destroy();
      lenis = null;
    };

    const sync = () => {
      teardown();
      if (!desktop.matches || reduce.matches) return;

      lenis = new Lenis({
        autoRaf: true,
        smoothWheel: true,
        anchors: true,
        stopInertiaOnNavigate: true,
      });
    };

    sync();
    desktop.addEventListener("change", sync);
    reduce.addEventListener("change", sync);

    return () => {
      desktop.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
      teardown();
    };
  }, []);

  return null;
}
