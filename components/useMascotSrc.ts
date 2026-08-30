"use client";

import { assetPath } from "@/lib/asset";
import { mascotSrc, type MascotKind } from "@/lib/mascot";
import { useTheme } from "@/lib/theme";

/** Public mascot URL for the active site theme. */
export function useMascotSrc(kind: MascotKind): string {
  const { theme } = useTheme();
  return assetPath(mascotSrc(kind, theme));
}
