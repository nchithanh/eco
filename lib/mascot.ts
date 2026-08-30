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

/** Public mascot path (violet default). Theme overrides can wrap this later. */
export function mascotSrc(kind: MascotKind, _theme?: string): string {
  return MASCOT[kind];
}
