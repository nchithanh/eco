"use client";

import { BrandText } from "@/components/BrandName";
import { useAiChat } from "@/components/AiChatProvider";
import { useQuote } from "@/components/QuoteProvider";
import { assetPath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const BANNER_FALLBACK = {
  aria: "Announcement",
  text: "Dolphin Software is hiring freelancers — Sales is urgent priority, 40% deal commission. Apply today!",
  cta: "Apply now",
  ctaQuote: "Get a quote",
} as const;

function IconSparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 3.5l1.1 4.2c.15.55.58.98 1.13 1.13L18.5 10l-4.27 1.17c-.55.15-.98.58-1.13 1.13L12 16.5l-1.1-4.2a1.6 1.6 0 00-1.13-1.13L5.5 10l4.27-1.17c.55-.15.98-.58 1.13-1.13L12 3.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AnnouncementBar() {
  const { t } = useLocale();
  const { openQuote } = useQuote();
  const { openChat, open: chatOpen } = useAiChat();
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
        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <button
            type="button"
            onClick={openQuote}
            className="kuct-banner-cta inline-flex items-center rounded-lg px-2.5 py-1 text-[9px] font-semibold tracking-[0.06em] uppercase sm:px-3 sm:text-[10px]"
          >
            {b.ctaQuote}
          </button>
          <a
            href={careersHref}
            className="kuct-banner-cta-outline inline-flex items-center rounded-lg px-2.5 py-1 text-[9px] font-semibold tracking-[0.06em] uppercase sm:px-3 sm:text-[10px]"
          >
            {b.cta}
          </a>
          <button
            type="button"
            onClick={() => openChat()}
            aria-expanded={chatOpen}
            aria-haspopup="dialog"
            className="kuct-banner-cta-outline inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-[9px] font-semibold tracking-[0.06em] uppercase sm:px-3 sm:text-[10px]"
          >
            <IconSparkle className="size-3" />
            {t.nav.askAi}
          </button>
        </div>
      </div>
    </div>
  );
}
