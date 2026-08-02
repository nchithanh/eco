import type { Dictionary, Locale } from "./types";
import { homepageLangVi, type HomepageLang } from "./homepage_lang_vi";

/**
 * Per-locale homepage overlays.
 * Add `homepage_lang_en.ts` etc. and register here — do not expand all locales in dictionaries for homepage chrome.
 */
const homepageLangByLocale: Partial<Record<Locale, HomepageLang>> = {
  vi: homepageLangVi,
  // en: homepageLangEn,
  // ja: homepageLangJa,
};

export function applyHomepageLang(
  locale: Locale,
  dict: Dictionary,
): Dictionary {
  const overlay = homepageLangByLocale[locale];
  if (!overlay) return dict;

  return {
    ...dict,
    hero: overlay.hero ?? dict.hero,
    capabilities: overlay.capabilities ?? dict.capabilities,
    siteOutcomes: overlay.siteOutcomes ?? dict.siteOutcomes,
    why: overlay.why ?? dict.why,
    technology: overlay.technology ?? dict.technology,
    aiEdge: overlay.aiEdge ?? dict.aiEdge,
    process: overlay.process ?? dict.process,
    popularServices: overlay.popularServicesChrome
      ? { ...dict.popularServices, ...overlay.popularServicesChrome }
      : dict.popularServices,
    works: overlay.works ?? dict.works,
    fit: overlay.fit ?? dict.fit,
    faq: overlay.faq ?? dict.faq,
    contact: overlay.contactChrome
      ? { ...dict.contact, ...overlay.contactChrome }
      : dict.contact,
  };
}
