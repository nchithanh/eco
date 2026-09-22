"use client";

import { BrandText } from "@/components/BrandName";
import { useAiChat } from "@/components/AiChatProvider";
import { useQuote } from "@/components/QuoteProvider";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const BANNER_FALLBACK = {
  aria: "Announcement",
  text: "Free Website / Landing page with any Dolphin service",
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

function IconQuote({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M8 7h5v5.2c0 2.2-1.3 3.6-3.4 4.3L8.8 15c1.1-.4 1.7-1.2 1.7-2.3H8V7zm7.5 0H20.5v5.2c0 2.2-1.3 3.6-3.4 4.3L16.3 15c1.1-.4 1.7-1.2 1.7-2.3h-2.5V7z"
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

  return (
    <div
      className="kuct-banner relative z-[60]"
      role="region"
      aria-label={b.aria}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-1.5 sm:gap-4 sm:px-6 sm:py-2">
        <p className="min-w-0 flex-1 text-left text-[10px] leading-snug font-medium text-current sm:text-[11px] md:text-xs">
          <BrandText size="xs">{b.text}</BrandText>
        </p>
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={openQuote}
            className="kuct-banner-link inline-flex items-center gap-1.5 rounded-[10px] px-2 py-1 text-[0.875rem] font-semibold leading-none tracking-[-0.02em] text-[var(--kuct-text)] transition-colors hover:text-[var(--kuct-accent)]"
          >
            <IconQuote className="size-3.5 shrink-0" />
            <span>{b.ctaQuote}</span>
          </button>
          <button
            type="button"
            onClick={() => openChat()}
            aria-expanded={chatOpen}
            aria-haspopup="dialog"
            title={t.nav.askAiTooltip}
            className="kuct-banner-link inline-flex items-center gap-1.5 rounded-[10px] px-2 py-1 text-[0.875rem] font-semibold leading-none tracking-[-0.02em] text-[var(--kuct-text)] transition-colors hover:text-[var(--kuct-accent)]"
          >
            <IconSparkle className="size-3.5 shrink-0" />
            <span>{t.nav.askAi}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
