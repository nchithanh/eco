"use client";

import { useEffect, useState } from "react";

/** @deprecated Prefer reduced-motion only; kept for call-site compatibility. */
export const DESKTOP_MOTION_MQ = "(min-width: 1024px)";

/** True when JS-driven motion (typewriter, chat demos, etc.) may run. */
export function useDesktopMotion(): boolean {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      setEnabled(true);
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(!reduce.matches);
    sync();
    reduce.addEventListener("change", sync);
    return () => reduce.removeEventListener("change", sync);
  }, []);

  return enabled;
}
