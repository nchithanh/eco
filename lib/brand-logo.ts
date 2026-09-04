/** Default site mark (violet). */
export const BRAND_LOGO_SRC = "/brand/logo-dolphin.webp";

/** Archive mark when `data-theme="orangered"`. */
export const BRAND_LOGO_ORANGERED_SRC = "/brand/logo-dolphin-orangered.webp";

/** Public logo path for SEO / JSON-LD / UI (follows theme when provided). */
export function brandLogoSrc(theme?: string): string {
  if (theme === "orangered") return BRAND_LOGO_ORANGERED_SRC;
  return BRAND_LOGO_SRC;
}
