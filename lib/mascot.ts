import type { ThemeId } from "@/lib/theme";

export const MASCOT_KINDS = ["eco", "chat", "contact"] as const;
export type MascotKind = (typeof MASCOT_KINDS)[number];

const MASCOT_VIOLET: Record<MascotKind, string> = {
  eco: "/mascot/dolphin-eco.webp",
  chat: "/mascot/dolphin-chat.webp",
  contact: "/mascot/dolphin-contact.webp",
};

const MASCOT_ORANGERED: Record<MascotKind, string> = {
  eco: "/mascot/dolphin-eco-orangered.webp",
  chat: "/mascot/dolphin-chat-orangered.webp",
  contact: "/mascot/dolphin-contact-orangered.webp",
};

/**
 * Homepage / product signature mascots (Phase 3).
 * Default paths = violet. Use `mascotSrc` when theme-aware.
 */
export const MASCOT = MASCOT_VIOLET;

export function mascotSrc(kind: MascotKind, theme: ThemeId = "violet"): string {
  return theme === "orangered" ? MASCOT_ORANGERED[kind] : MASCOT_VIOLET[kind];
}
