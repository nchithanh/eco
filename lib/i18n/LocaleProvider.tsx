"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getDictionary } from "./dictionaries";
import {
  DEFAULT_LOCALE,
  type Dictionary,
  type Locale,
} from "./types";

export const LOCALE_STORAGE_KEY = "kuct-locale";
export const LOCALE_PENDING_ATTR = "data-locale-pending";
export const LOCALE_BOOT_STYLE_ID = "kuct-locale-boot";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "vi" || value === "en" || value === "ja";
}

/** Map BCP-47 / navigator language tags to supported locales. */
export function detectBrowserLocale(
  languages: readonly string[] | undefined,
): Locale {
  if (!languages?.length) return DEFAULT_LOCALE;

  for (const raw of languages) {
    const tag = raw.toLowerCase();
    const primary = tag.split("-")[0] ?? tag;
    if (primary === "vi") return "vi";
    if (primary === "ja") return "ja";
    if (primary === "en") return "en";
  }
  return DEFAULT_LOCALE;
}

function readStoredLocale(): Locale | null {
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

/**
 * Resolve locale on the client: boot-script `data-locale` → localStorage →
 * navigator languages → DEFAULT_LOCALE.
 */
export function resolveClientLocale(): Locale {
  if (typeof document !== "undefined") {
    const fromDom = document.documentElement.getAttribute("data-locale");
    if (isLocale(fromDom)) return fromDom;
  }

  const stored = readStoredLocale();
  if (stored) return stored;

  // Vitest: keep DEFAULT_LOCALE when no preference is stored
  if (process.env.NODE_ENV === "test") return DEFAULT_LOCALE;

  return detectBrowserLocale(
    typeof navigator !== "undefined"
      ? navigator.languages?.length
        ? navigator.languages
        : [navigator.language]
      : undefined,
  );
}

function applyLocaleToDocument(locale: Locale) {
  document.documentElement.lang = locale;
  document.documentElement.setAttribute("data-locale", locale);
  document.documentElement.removeAttribute(LOCALE_PENDING_ATTR);
  document.getElementById(LOCALE_BOOT_STYLE_ID)?.remove();
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  // Always DEFAULT_LOCALE on first render so SSR HTML matches client hydration.
  // Real locale (boot script / localStorage / navigator) applies in useEffect.
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const resolved = resolveClientLocale();
    setLocaleState(resolved);
    applyLocaleToDocument(resolved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.setAttribute("data-locale", locale);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      // ignore private mode / blocked storage
    }
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: getDictionary(locale),
    }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
