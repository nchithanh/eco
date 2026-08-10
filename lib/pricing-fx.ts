import type { Locale } from "@/lib/i18n/types";

/**
 * Reference FX as of 2026-07-30 (bank / market mid used for marketing display).
 * Base currency for package list prices is VND.
 */
export const FX_AS_OF = "2026-07-30";

export const FX_VND_PER_UNIT = {
  USD: 26_300,
  JPY: 161,
} as const;

export type PackagePriceId = "landing" | "business" | "shop" | "webapp";

export type PackagePriceVnd = {
  /** Optional list / strike price (promo compare). */
  was?: number;
  /** Fixed price, or range minimum when `nowMax` is set. */
  now: number;
  /** Inclusive range maximum (VND). */
  nowMax?: number;
  /** Prefix with "Từ" / "From" / "〜" using `now` only (no range). */
  from?: boolean;
};

/** Canonical package amounts in VND. */
export const PACKAGE_PRICES_VND: Record<PackagePriceId, PackagePriceVnd> = {
  landing: { was: 3_000_000, now: 1_500_000 },
  business: { now: 4_000_000, nowMax: 10_000_000 },
  shop: { now: 7_000_000, nowMax: 15_000_000 },
  webapp: { was: 20_000_000, now: 10_000_000, from: true },
};

type DisplayCurrency = "VND" | "USD" | "JPY";

const LOCALE_CURRENCY: Record<Locale, DisplayCurrency> = {
  vi: "VND",
  en: "USD",
  ja: "JPY",
};

function convertFromVnd(amountVnd: number, currency: DisplayCurrency): number {
  if (currency === "VND") return amountVnd;
  const rate = FX_VND_PER_UNIT[currency];
  const raw = amountVnd / rate;
  if (currency === "JPY") return Math.round(raw / 100) * 100;
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
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
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

  if (locale === "ja") return `${formatted}〜`;

  const prefix = opts.fromPrefix?.trim();
  return prefix ? `${prefix} ${formatted}` : formatted;
}

function formatPackageRange(
  locale: Locale,
  minVnd: number,
  maxVnd: number,
): string {
  const currency = LOCALE_CURRENCY[locale];
  const min = formatAmount(convertFromVnd(minVnd, currency), currency, locale);
  const max = formatAmount(convertFromVnd(maxVnd, currency), currency, locale);
  return `${min} – ${max}`;
}

export function getPackageDisplayPrices(
  locale: Locale,
  id: PackagePriceId,
  fromPrefix: string,
) {
  const pkg = PACKAGE_PRICES_VND[id];
  const opts = { from: Boolean(pkg.from), fromPrefix };
  const priceWas =
    pkg.was != null ? formatPackageMoney(locale, pkg.was, opts) : "";

  if (pkg.nowMax != null) {
    return {
      priceWas,
      price: formatPackageRange(locale, pkg.now, pkg.nowMax),
    };
  }

  return {
    priceWas,
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
    locale === "vi" ? "vi-VN" : locale === "ja" ? "ja-JP" : "en-US";
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
