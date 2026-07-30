"use client";

import { BrandText } from "@/components/BrandName";
import { LocaleTimezone } from "@/components/LocaleTimezone";
import { assetPath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const BANNER_FALLBACK = {
  aria: "Announcement",
  text: "Dolphin Software is hiring freelancers — Sales is urgent priority, 50% deal commission. Apply today!",
  cta: "Apply now",
} as const;

export function AnnouncementBar() {
  const { t } = useLocale();
  const b = t.banner ?? BANNER_FALLBACK;
  const careersHref = assetPath("/careers/");

  return (
    <div
      className="kuct-banner relative z-[60]"
      role="region"
      aria-label={b.aria}
    >
          <div className="mx-auto flex max-w-6xl flex-col items-stretch gap-1 px-4 py-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-1">
        <p className="min-w-0 flex-1 text-center text-[10px] leading-snug font-medium text-white/95 sm:text-left sm:text-[11px] md:text-xs">
          <BrandText size="xs" onDark>
            {b.text}
          </BrandText>
        </p>
        <div className="flex shrink-0 items-center justify-center gap-1.5 sm:justify-end">
          <LocaleTimezone />
          <a
            href={careersHref}
            className="kuct-banner-cta inline-flex items-center rounded-full px-2.5 py-1 text-[9px] font-semibold tracking-[0.06em] uppercase sm:text-[10px]"
          >
            {b.cta}
          </a>
        </div>
      </div>
    </div>
  );
}
