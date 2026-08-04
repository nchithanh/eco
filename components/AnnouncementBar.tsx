"use client";

import { BrandText } from "@/components/BrandName";
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
 <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-1.5 sm:gap-4 sm:px-6 sm:py-2">
 <p className="min-w-0 flex-1 text-left text-[10px] leading-snug font-medium text-current sm:text-[11px] md:text-xs">
 <BrandText size="xs">{b.text}</BrandText>
 </p>
 <a
 href={careersHref}
 className="kuct-banner-cta inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-[9px] font-semibold tracking-[0.06em] uppercase sm:px-3 sm:text-[10px]"
 >
 {b.cta}
 </a>
 </div>
 </div>
 );
}
