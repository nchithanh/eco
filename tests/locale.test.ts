import { afterEach, describe, expect, it } from "vitest";
import {
  detectBrowserLocale,
  resolveClientLocale,
} from "@/lib/i18n/LocaleProvider";
import { DEFAULT_LOCALE } from "@/lib/i18n/types";

describe("detectBrowserLocale", () => {
  it("returns DEFAULT when languages are empty", () => {
    expect(detectBrowserLocale(undefined)).toBe(DEFAULT_LOCALE);
    expect(detectBrowserLocale([])).toBe(DEFAULT_LOCALE);
  });

  it("maps primary tags and prefers earlier navigator entries", () => {
    expect(detectBrowserLocale(["vi-VN", "en-US"])).toBe("vi");
    expect(detectBrowserLocale(["en-GB"])).toBe("en");
    expect(detectBrowserLocale(["ja"])).toBe("ja");
    expect(detectBrowserLocale(["de-DE"])).toBe(DEFAULT_LOCALE);
    expect(detectBrowserLocale(["zh-CN", "en"])).toBe("en");
    expect(detectBrowserLocale(["fr-FR", "en-US"])).toBe("en");
  });

  it("falls back to DEFAULT when no supported language matches", () => {
    expect(detectBrowserLocale(["fr-FR", "es-ES"])).toBe(DEFAULT_LOCALE);
  });
});

describe("resolveClientLocale", () => {
  afterEach(() => {
    document.documentElement.removeAttribute("data-locale");
    window.localStorage.removeItem("kuct-locale");
  });

  it("prefers data-locale from the boot script over storage", () => {
    document.documentElement.setAttribute("data-locale", "en");
    window.localStorage.setItem("kuct-locale", "vi");
    expect(resolveClientLocale()).toBe("en");
  });

  it("uses stored locale when data-locale is absent", () => {
    window.localStorage.setItem("kuct-locale", "en");
    expect(resolveClientLocale()).toBe("en");
  });

  it("uses DEFAULT in test when nothing is stored", () => {
    window.localStorage.removeItem("kuct-locale");
    expect(resolveClientLocale()).toBe(DEFAULT_LOCALE);
  });
});
