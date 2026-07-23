"use client";

import Link from "next/link";
import { BrandText } from "@/components/BrandName";
import { TimezoneDropdown } from "@/components/TimezoneDropdown";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const BANNER_FALLBACK = {
  aria: "Announcement",
  text: "KU THANH is hiring freelancers — Sales is urgent priority, 50% deal commission. Apply today!",
  cta: "Apply now",
} as const;

export function AnnouncementBar() {
  const { t } = useLocale();
  const b = t.banner ?? BANNER_FALLBACK;

  return (
    <div
      className="relative z-[60] bg-gradient-to-r from-[#c026d3] via-[#a855f7] to-[#f43f5e] text-white"
      role="region"
      aria-label={b.aria}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-stretch gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6">
        <p className="min-w-0 flex-1 text-center text-[11px] leading-snug font-medium sm:text-left sm:text-xs md:text-sm">
          <BrandText size="xs" onDark>
            {b.text}
          </BrandText>
        </p>
        <div className="flex shrink-0 items-center justify-center gap-2 sm:justify-end">
          <TimezoneDropdown variant="banner" />
          <Link
            href="/careers"
            className="inline-flex items-center rounded-lg bg-[#7c3aed] px-3 py-1.5 text-[10px] font-bold tracking-wide text-white uppercase shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#6d28d9] hover:shadow-[0_8px_18px_rgba(109,40,217,0.35)] sm:text-[11px]"
          >
            {b.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}
