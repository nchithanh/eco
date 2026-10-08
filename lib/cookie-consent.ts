/**
 * Bump on every commit / push / Pages build so returning visitors see the
 * cookie banner again (localStorage + cookie keys include this revision).
 * See `.cursor/rules/cookie-consent-bump.mdc`.
 */
export const COOKIE_CONSENT_REVISION = "20261009a";

export const COOKIE_CONSENT_STORAGE_KEY = `kuct-cookie-consent-${COOKIE_CONSENT_REVISION}`;
export const COOKIE_CONSENT_COOKIE_NAME = `kuct_cookie_consent_${COOKIE_CONSENT_REVISION}`;

export const COOKIE_CONSENT_EVENT = "kuct-cookie-consent";

export type CookieConsentValue = "accepted" | "declined";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 400; // ~13 months

export function isCookieConsentValue(
  value: string | null | undefined,
): value is CookieConsentValue {
  return value === "accepted" || value === "declined";
}

export function readCookieConsentFromDocument(): CookieConsentValue | null {
  if (typeof document === "undefined") return null;
  try {
    const match = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${COOKIE_CONSENT_COOKIE_NAME}=`));
    if (!match) return null;
    const value = decodeURIComponent(match.split("=").slice(1).join("="));
    return isCookieConsentValue(value) ? value : null;
  } catch {
    return null;
  }
}

export function readStoredCookieConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (isCookieConsentValue(stored)) return stored;
  } catch {
    // ignore quota / private mode
  }
  return readCookieConsentFromDocument();
}

export function writeCookieConsentCookie(value: CookieConsentValue) {
  if (typeof document === "undefined") return;
  try {
    const secure =
      typeof location !== "undefined" && location.protocol === "https:"
        ? "; Secure"
        : "";
    document.cookie = `${COOKIE_CONSENT_COOKIE_NAME}=${encodeURIComponent(value)}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
  } catch {
    // ignore
  }
}

export function persistCookieConsent(value: CookieConsentValue) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
  } catch {
    // ignore quota / private mode
  }
  writeCookieConsentCookie(value);
  try {
    window.dispatchEvent(
      new CustomEvent(COOKIE_CONSENT_EVENT, { detail: { value } }),
    );
  } catch {
    // ignore
  }
}

/** Optional analytics (GA4) only when the visitor accepted non-essential cookies. */
export function hasAnalyticsConsent(): boolean {
  return readStoredCookieConsent() === "accepted";
}
