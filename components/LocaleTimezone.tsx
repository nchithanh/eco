"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Locale } from "@/lib/i18n/types";

const ZONE_BY_LOCALE: Record<
  Locale,
  { timeZone: string; label: Record<Locale, string> }
> = {
  vi: {
    timeZone: "Asia/Ho_Chi_Minh",
    label: {
      vi: "Việt Nam",
      en: "Vietnam",
      ja: "ベトナム",
      de: "Vietnam",
      zh: "越南",
    },
  },
  en: {
    timeZone: "America/New_York",
    label: {
      vi: "Hoa Kỳ",
      en: "United States",
      ja: "アメリカ",
      de: "USA",
      zh: "美国",
    },
  },
  ja: {
    timeZone: "Asia/Tokyo",
    label: {
      vi: "Nhật Bản",
      en: "Japan",
      ja: "日本",
      de: "Japan",
      zh: "日本",
    },
  },
  de: {
    timeZone: "Europe/Berlin",
    label: {
      vi: "Đức",
      en: "Germany",
      ja: "ドイツ",
      de: "Deutschland",
      zh: "德国",
    },
  },
  zh: {
    timeZone: "Asia/Shanghai",
    label: {
      vi: "Trung Quốc",
      en: "China",
      ja: "中国",
      de: "China",
      zh: "中国",
    },
  },
};

function formatTime(date: Date, timeZone: string, locale: Locale) {
  const localeTag =
    locale === "vi"
      ? "vi-VN"
      : locale === "ja"
        ? "ja-JP"
        : locale === "de"
          ? "de-DE"
          : locale === "zh"
            ? "zh-CN"
            : "en-US";

  return new Intl.DateTimeFormat(localeTag, {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

/** Live clock for the active language — display only, no picker. */
export function LocaleTimezone() {
  const { locale } = useLocale();
  const [now, setNow] = useState(() => new Date());
  const zone = ZONE_BY_LOCALE[locale];

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const time = formatTime(now, zone.timeZone, locale);
  const label = zone.label[locale];

  return (
    <span
      className="kuct-banner-chip inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.65rem] font-medium tracking-wide sm:text-[0.7rem]"
      title={`${label} (${zone.timeZone})`}
      aria-label={`${label} ${time}`}
    >
      <span className="opacity-90">{label}</span>
      <span className="tabular-nums opacity-95">{time}</span>
    </span>
  );
}
