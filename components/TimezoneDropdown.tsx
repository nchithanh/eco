"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Locale } from "@/lib/i18n/types";

type Zone = {
  id: string;
  timeZone: string;
  city: Record<Locale, string>;
  country: Record<Locale, string>;
  localeHint: Locale;
};

const ZONES: Zone[] = [
  {
    id: "vn",
    timeZone: "Asia/Ho_Chi_Minh",
    city: {
      vi: "Hồ Chí Minh",
      en: "Ho Chi Minh",
      ja: "ホーチミン",
      de: "Ho-Chi-Minh-Stadt",
    },
    country: {
      vi: "Việt Nam",
      en: "Vietnam",
      ja: "ベトナム",
      de: "Vietnam",
    },
    localeHint: "vi",
  },
  {
    id: "us",
    timeZone: "America/New_York",
    city: {
      vi: "New York",
      en: "New York",
      ja: "ニューヨーク",
      de: "New York",
    },
    country: {
      vi: "Hoa Kỳ",
      en: "United States",
      ja: "アメリカ",
      de: "USA",
    },
    localeHint: "en",
  },
  {
    id: "jp",
    timeZone: "Asia/Tokyo",
    city: {
      vi: "Tokyo",
      en: "Tokyo",
      ja: "東京",
      de: "Tokio",
    },
    country: {
      vi: "Nhật Bản",
      en: "Japan",
      ja: "日本",
      de: "Japan",
    },
    localeHint: "ja",
  },
  {
    id: "de",
    timeZone: "Europe/Berlin",
    city: {
      vi: "Berlin",
      en: "Berlin",
      ja: "ベルリン",
      de: "Berlin",
    },
    country: {
      vi: "Đức",
      en: "Germany",
      ja: "ドイツ",
      de: "Deutschland",
    },
    localeHint: "de",
  },
];

function formatTime(date: Date, timeZone: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale, {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

function formatOffset(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "shortOffset",
  }).formatToParts(date);
  return parts.find((part) => part.type === "timeZoneName")?.value ?? "";
}

export function TimezoneDropdown({
  variant = "default",
}: {
  variant?: "default" | "banner";
}) {
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const [now, setNow] = useState(() => new Date());
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const isBanner = variant === "banner";

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const primary =
    ZONES.find((zone) => zone.localeHint === locale) ?? ZONES[0];

  const rows = useMemo(
    () =>
      ZONES.map((zone) => ({
        ...zone,
        time: formatTime(now, zone.timeZone, locale),
        offset: formatOffset(now, zone.timeZone),
      })),
    [now, locale],
  );

  const primaryTime = formatTime(now, primary.timeZone, locale);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className={
          isBanner
            ? "inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/25 px-2.5 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:bg-black/40 hover:shadow-[0_8px_18px_rgba(0,0,0,0.2)]"
            : "inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/40 px-2.5 py-1 text-xs font-semibold tracking-wide text-[var(--kuct-text)] backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-[var(--kuct-accent)] hover:bg-white/70 hover:shadow-[0_8px_18px_rgba(139,92,246,0.12)]"
        }
        aria-label="Timezones"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        <span
          className={
            isBanner
              ? "hidden text-white/80 sm:inline"
              : "hidden text-[var(--kuct-muted)] sm:inline"
          }
        >
          {primary.country[locale]}
        </span>
        <span
          className={
            isBanner
              ? "tabular-nums text-white"
              : "tabular-nums text-[var(--kuct-accent)]"
          }
        >
          {primaryTime}
        </span>
        <span
          aria-hidden
          className={isBanner ? "text-white/70" : "text-[var(--kuct-muted)]"}
        >
          {open ? "▴" : "▾"}
        </span>
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label="Timezones"
          className="absolute right-0 z-[70] mt-2 min-w-[14rem] overflow-hidden rounded-xl border border-white/70 bg-white/95 py-1 text-[var(--kuct-text)] shadow-[0_12px_30px_rgba(139,92,246,0.14)] backdrop-blur-xl"
        >
          {rows.map((row) => (
            <li
              key={row.id}
              role="option"
              aria-selected={row.id === primary.id}
              className={
                row.id === primary.id
                  ? "kuct-menu-item flex items-center justify-between gap-4 bg-[#faf5ff] px-3 py-2.5"
                  : "kuct-menu-item flex cursor-default items-center justify-between gap-4 px-3 py-2.5"
              }
            >
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-[var(--kuct-text)]">
                  {row.country[locale]}
                </p>
                <p className="truncate text-[10px] text-[var(--kuct-muted)]">
                  {row.city[locale]} · {row.offset}
                </p>
              </div>
              <p className="shrink-0 tabular-nums text-sm font-semibold text-[var(--kuct-accent)]">
                {row.time}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
