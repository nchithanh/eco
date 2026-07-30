import type { Locale } from "@/lib/i18n/types";

/**
 * Reference FX as of 2026-07-30 (bank / market mid used for marketing display).
 * Base currency for package list prices is VND.
 */
export const FX_AS_OF = "2026-07-30";

export const FX_VND_PER_UNIT = {
  USD: 26_300,
  EUR: 30_100,
  JPY: 161,
  CNY: 3_900,
} as const;

export type PackagePriceId = "landing" | "business" | "shop" | "webapp";

/** Canonical package amounts in VND. */
export const PACKAGE_PRICES_VND: Record<
  PackagePriceId,
  { was: number; now: number; from?: boolean }
> = {
  landing: { was: 3_000_000, now: 1_000_000 },
  business: { was: 8_000_000, now: 5_000_000 },
  shop: { was: 15_000_000, now: 10_000_000 },
  webapp: { was: 20_000_000, now: 10_000_000, from: true },
};

type DisplayCurrency = "VND" | "USD" | "EUR" | "JPY" | "CNY";

const LOCALE_CURRENCY: Record<Locale, DisplayCurrency> = {
  vi: "VND",
  en: "USD",
  ja: "JPY",
  de: "EUR",
  zh: "CNY",
};

function convertFromVnd(amountVnd: number, currency: DisplayCurrency): number {
  if (currency === "VND") return amountVnd;
  const rate = FX_VND_PER_UNIT[currency];
  const raw = amountVnd / rate;
  if (currency === "JPY") return Math.round(raw / 100) * 100;
  if (currency === "CNY") return Math.round(raw / 10) * 10;
  return Math.round(raw);
}

function formatAmount(amount: number, currency: DisplayCurrency, locale: Locale): string {
  if (currency === "VND") {
    return `${amount.toLocaleString("vi-VN")}đ`;
  }
  if (currency === "USD") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  }
  if (currency === "EUR") {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(amount);
  }
  if (currency === "JPY") {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      maximumFractionDigits: 0,
    }).format(amount);
  }
  // CNY — use zh-CN; avoid colliding with JPY yen glyph alone in mixed UIs
  return new Intl.NumberFormat(locale === "zh" ? "zh-CN" : "en-US", {
    style: "currency",
    currency: "CNY",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPackageMoney(
  locale: Locale,
  amountVnd: number,
  opts?: { from?: boolean; fromPrefix?: string },
): string {
  const currency = LOCALE_CURRENCY[locale];
  const converted = convertFromVnd(amountVnd, currency);
  const formatted = formatAmount(converted, currency, locale);
  if (!opts?.from) return formatted;

  // JP/ZH usually mark “from” as a suffix
  if (locale === "ja") return `${formatted}〜`;
  if (locale === "zh") return `${formatted}起`;

  const prefix = opts.fromPrefix?.trim();
  return prefix ? `${prefix} ${formatted}` : formatted;
}

export function getPackageDisplayPrices(
  locale: Locale,
  id: PackagePriceId,
  fromPrefix: string,
) {
  const pkg = PACKAGE_PRICES_VND[id];
  const opts = { from: Boolean(pkg.from), fromPrefix };
  return {
    priceWas: formatPackageMoney(locale, pkg.was, opts),
    price: formatPackageMoney(locale, pkg.now, opts),
  };
}

export type MillionVndRange = { min: number; max: number };

function formatMillionVndPart(value: number, locale: Locale): string {
  const rounded =
    Math.abs(value - Math.round(value)) < 0.05
      ? Math.round(value)
      : Math.round(value * 10) / 10;
  const intl =
    locale === "vi"
      ? "vi-VN"
      : locale === "ja"
        ? "ja-JP"
        : locale === "de"
          ? "de-DE"
          : locale === "zh"
            ? "zh-CN"
            : "en-US";
  return new Intl.NumberFormat(intl, { maximumFractionDigits: 1 }).format(rounded);
}

/** Quote estimator amounts are stored in millions of VND. */
export function formatQuoteEstimateRange(
  locale: Locale,
  range: MillionVndRange,
): string {
  if (LOCALE_CURRENCY[locale] === "VND") {
    return `${formatMillionVndPart(range.min, locale)} – ${formatMillionVndPart(range.max, locale)} triệu VNĐ`;
  }

  const currency = LOCALE_CURRENCY[locale];
  const min = formatAmount(
    convertFromVnd(range.min * 1_000_000, currency),
    currency,
    locale,
  );
  const max = formatAmount(
    convertFromVnd(range.max * 1_000_000, currency),
    currency,
    locale,
  );
  return `${min} – ${max}`;
}

export function formatQuoteHintRange(
  locale: Locale,
  range: MillionVndRange,
): string {
  if (locale === "vi") {
    return `~${formatMillionVndPart(range.min, locale)}–${formatMillionVndPart(range.max, locale)} triệu`;
  }
  return `~${formatQuoteEstimateRange(locale, range)}`;
}
