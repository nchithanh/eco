/**
 * Cloudflare Turnstile — marketing chat + lead forms bot protection.
 * Site key is public; secret verification belongs on the Worker.
 */
export const DEFAULT_TURNSTILE_SITE_KEY = "0x4AAAAAAE_hebZJmu2c62Pp";

export const TURNSTILE_SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js";

export function getTurnstileSiteKey(): string {
  const fromEnv = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();
  return fromEnv || DEFAULT_TURNSTILE_SITE_KEY;
}

export type TurnstileApi = {
  render: (
    container: HTMLElement | string,
    options: {
      sitekey: string;
      theme?: "light" | "dark" | "auto";
      size?: "normal" | "compact" | "flexible";
      callback?: (token: string) => void;
      "error-callback"?: () => void;
      "expired-callback"?: () => void;
    },
  ) => string;
  getResponse: (widgetId?: string) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId?: string) => void;
  ready: (callback: () => void) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export function getTurnstileToken(widgetId?: string | null): string {
  if (typeof window === "undefined" || !window.turnstile) return "";
  try {
    return (
      (widgetId
        ? window.turnstile.getResponse(widgetId)
        : window.turnstile.getResponse()) || ""
    ).trim();
  } catch {
    return "";
  }
}

export function resetTurnstile(widgetId?: string | null): void {
  if (typeof window === "undefined" || !window.turnstile || !widgetId) return;
  try {
    window.turnstile.reset(widgetId);
  } catch {
    /* widget may already be gone */
  }
}
