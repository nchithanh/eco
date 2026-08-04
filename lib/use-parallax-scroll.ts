"use client";

import { useEffect, useState } from "react";

/**
 * Scroll Y for light parallax (all viewports).
 * Disabled only under prefers-reduced-motion.
 */
export function useParallaxScrollY(): number {
  const [y, setY] = useState(0);

  useEffect(() => {
    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;

    const sync = () => {
      raf = 0;
      if (reduceMq.matches) {
        setY(0);
        return;
      }
      setY(window.scrollY);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(sync);
    };

    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    reduceMq.addEventListener("change", sync);
    return () => {
      window.removeEventListener("scroll", onScroll);
      reduceMq.removeEventListener("change", sync);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return y;
}

/** Clamp scroll-driven translate in px. */
export function parallaxPx(scrollY: number, factor: number, max = 72): number {
  const raw = scrollY * factor;
  return Math.max(-max, Math.min(max, raw));
}
