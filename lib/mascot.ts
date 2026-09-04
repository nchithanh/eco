/**
 * Homepage / product signature mascots (Phase 3).
 * Use by context — do not mix casually.
 */
export const MASCOT_KINDS = ["eco", "chat", "contact"] as const;
export type MascotKind = (typeof MASCOT_KINDS)[number];

export const MASCOT: Record<MascotKind, string> = {
  eco: "/mascot/dolphin-eco.webp",
  chat: "/mascot/dolphin-chat.webp",
  contact: "/mascot/dolphin-contact.webp",
};

const MASCOT_ORANGERED: Record<MascotKind, string> = {
  eco: "/mascot/dolphin-eco-orangered.webp",
  chat: "/mascot/dolphin-chat-orangered.webp",
  contact: "/mascot/dolphin-contact-orangered.webp",
};

/** Public mascot path — violet default; orangered archive when that theme is set. */
export function mascotSrc(kind: MascotKind, theme?: string): string {
  if (theme === "orangered") return MASCOT_ORANGERED[kind];
  return MASCOT[kind];
}
