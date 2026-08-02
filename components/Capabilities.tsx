"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { usePagePreview } from "@/components/PagePreviewProvider";
import { useQuote } from "@/components/QuoteProvider";
import { useLocale } from "@/lib/i18n/LocaleProvider";

function IconLanding() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 9h16M8 13h5M8 16h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconBusiness() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
      <path
        d="M4 19V9.5L12 5l8 4.5V19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 19v-5h6v5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function IconShop() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
      <path
        d="M5 9h14l-1.2 9.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 9z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8 9V7.5A4 4 0 0 1 12 3.5 4 4 0 0 1 16 7.5V9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconWebApp() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 9h18" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6.2" cy="7" r="0.7" fill="currentColor" />
      <circle cx="8.4" cy="7" r="0.7" fill="currentColor" />
      <rect x="7" y="12" width="5" height="3.5" rx="0.8" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

const OFFER_ICONS: Record<string, ReactNode> = {
  landing: <IconLanding />,
  business: <IconBusiness />,
  shop: <IconShop />,
  webapp: <IconWebApp />,
};

export function Capabilities() {
  const { t } = useLocale();
  const { openHref } = usePagePreview();
  const { openQuote } = useQuote();
  const c = t.capabilities;

  const onNav = (href: string, event: MouseEvent<HTMLElement>) => {
    openHref(href, event);
  };

  return (
    <section id="capabilities" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
            {c.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]">
            <AccentText>{c.title}</AccentText>
          </h2>
          <p className="mt-5 max-w-[46ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
            {c.support}
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {c.offers.map((offer, index) => (
            <Reveal as="li" key={offer.id} delay={index * 60} className="h-full">
              <Link
                href={offer.href}
                onClick={(event) => onNav(offer.href, event)}
                className="group kuct-glass flex h-full flex-col rounded-2xl border border-[var(--kuct-border)] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition duration-200 hover:border-[var(--kuct-accent)]/45 hover:bg-[rgba(var(--kuct-accent-rgb),0.04)]"
              >
                <div className="grid size-10 place-items-center rounded-xl bg-[rgba(var(--kuct-accent-rgb),0.1)] text-[var(--kuct-accent)] ring-1 ring-[var(--kuct-accent)]/25">
                  {OFFER_ICONS[offer.id] ?? <IconLanding />}
                </div>
                <h3 className="mt-4 font-display text-[0.95rem] font-semibold leading-snug text-[var(--kuct-text)] transition group-hover:text-[var(--kuct-accent)] sm:text-base">
                  {offer.title}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {offer.body}
                </p>
                <p className="mt-4 text-[11px] font-medium tracking-wide text-[var(--kuct-muted)]">
                  {offer.meta}
                </p>
                <span className="mt-3 inline-flex w-fit items-center gap-1 text-sm font-semibold text-[var(--kuct-accent)] transition group-hover:gap-1.5">
                  {c.learnMore}
                  <span aria-hidden>→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        {c.moreServices.length > 0 ? (
          <Reveal delay={200} className="mt-6 flex flex-wrap gap-2 sm:mt-7">
            {c.moreServices.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => onNav(item.href, event)}
                className="rounded-full border border-[var(--kuct-border)] px-3 py-1.5 text-xs font-medium text-[var(--kuct-muted)] transition hover:border-[var(--kuct-accent)]/45 hover:text-[var(--kuct-text)]"
              >
                {item.label}
              </Link>
            ))}
          </Reveal>
        ) : null}

        <Reveal delay={240} className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
          <button
            type="button"
            onClick={openQuote}
            className="kuct-btn-primary inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold sm:w-auto"
          >
            {c.ctaPrimary}
          </button>
          <a
            href="#popular-services"
            className="inline-flex w-full items-center justify-center rounded-full border border-[var(--kuct-border)] px-6 py-3 text-sm font-medium text-[var(--kuct-muted)] transition duration-200 hover:border-[var(--kuct-accent)]/45 hover:bg-[var(--kuct-accent)]/10 hover:text-[var(--kuct-text)] sm:w-auto"
          >
            {c.ctaSecondary}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
