"use client";

import { useEffect, useState } from "react";

/** Matches repo CSS motion gate (`globals.css` / `useInView`). */
export const DESKTOP_MOTION_MQ = "(min-width: 1024px)";

/** True when JS-driven motion (typewriter, chat demos) may run. */
export function useDesktopMotion(): boolean {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      setEnabled(false);
      return;
    }
    const desktop = window.matchMedia(DESKTOP_MOTION_MQ);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(desktop.matches && !reduce.matches);
    sync();
    desktop.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    return () => {
      desktop.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
    };
  }, []);

  return enabled;
}
