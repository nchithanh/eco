/** Default site mark (violet). */
export const BRAND_LOGO_SRC = "/brand/logo-dolphin.webp";

/** Public logo path for SEO / JSON-LD (theme-agnostic default). */
export function brandLogoSrc(_theme?: string): string {
  return BRAND_LOGO_SRC;
}
