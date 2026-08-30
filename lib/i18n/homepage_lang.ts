import type { Dictionary, Locale } from "./types";
import { homepageLangEn } from "./homepage_lang_en";
import { homepageLangJa } from "./homepage_lang_ja";
import { homepageLangVi, type HomepageLang } from "./homepage_lang_vi";

/**
 * Per-locale homepage overlays (VI SoT; EN/JA synced).
 * Keep homepage chrome here — do not expand all locales in dictionaries.
 */
const homepageLangByLocale: Partial<Record<Locale, HomepageLang>> = {
  vi: homepageLangVi,
  en: homepageLangEn,
  ja: homepageLangJa,
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
    problems: overlay.problems ?? dict.problems,
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
