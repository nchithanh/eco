/**
 * Bump on every commit / push / Pages build so returning visitors see the
 * cookie banner again (localStorage + cookie keys include this revision).
 * See `.cursor/rules/cookie-consent-bump.mdc`.
 */
export const COOKIE_CONSENT_REVISION = "20260821e";

export const COOKIE_CONSENT_STORAGE_KEY = `kuct-cookie-consent-${COOKIE_CONSENT_REVISION}`;
export const COOKIE_CONSENT_COOKIE_NAME = `kuct_cookie_consent_${COOKIE_CONSENT_REVISION}`;
