"use client";

import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useQuote } from "@/components/QuoteProvider";
import { assetPath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";

function OutcomeCheckIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      className="mt-0.5 size-4 shrink-0 text-[var(--kuct-accent)]"
      fill="none"
    >
      <path
        d="M16.5 5.5 8.25 14 3.5 9.25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OutcomeCardIcon({ index }: { index: number }) {
  const common = {
    "aria-hidden": true as const,
    viewBox: "0 0 24 24",
    className: "size-6 text-[var(--kuct-accent)]",
    fill: "none" as const,
  };
  const stroke = {
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (index % 6) {
    case 0:
      return (
        <svg {...common}>
          <path d="M4 19V5h10l6 7-6 7H4Z" {...stroke} />
          <path d="M8 9h5M8 13h3" {...stroke} />
        </svg>
      );
    case 1:
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="15" rx="2" {...stroke} />
          <path d="M8 3v4M16 3v4M4 10h16" {...stroke} />
        </svg>
      );
    case 2:
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.25" {...stroke} />
          <path d="M5 19c1.6-3.2 4-4.8 7-4.8s5.4 1.6 7 4.8" {...stroke} />
        </svg>
      );
    case 3:
      return (
        <svg {...common}>
          <path d="M5 19V5h9l5 5v9H5Z" {...stroke} />
          <path d="M14 5v5h5M8 13h6M8 16h4" {...stroke} />
        </svg>
      );
    case 4:
      return (
        <svg {...common}>
          <rect x="3.5" y="6" width="17" height="12" rx="2" {...stroke} />
          <path d="M3.5 10h17M8 14h3" {...stroke} />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" {...stroke} />
          <path d="M12 8v4l2.5 2.5" {...stroke} />
        </svg>
      );
  }
}

export function SiteOutcomes() {
  const { t } = useLocale();
  const { openQuote } = useQuote();
  const {
    eyebrow,
    title,
    support,
    ctaPrimary,
    ctaSecondary,
    ctaSecondaryHref,
    learnMore,
    items,
  } = t.siteOutcomes;

  const secondaryHref = ctaSecondaryHref.startsWith("#")
    ? ctaSecondaryHref
    : assetPath(ctaSecondaryHref);

  return (
    <section
      id="stats"
      className="scroll-mt-20 py-24"
      aria-labelledby="home-outcomes-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          {/* Left: sticky while right cards scroll */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal variant="title">
              <p className="kuct-type-eyebrow inline-flex items-center gap-2 text-[11px] sm:text-xs">
                <span
                  aria-hidden
                  className="inline-block size-1.5 rounded-full bg-[var(--kuct-accent)]"
                />
                {eyebrow}
              </p>
              <h2
                id="home-outcomes-heading"
                className="kuct-type-h2 mt-5 max-w-[22ch] text-3xl sm:text-[2.15rem] lg:text-[2.35rem]"
              >
                <AccentText>{title}</AccentText>
              </h2>
              <p className="kuct-type-body mt-5 max-w-[40ch] text-base">
                {support}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={openQuote}
                  className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3 text-sm"
                >
                  {ctaPrimary}
                </button>
                <a
                  href={secondaryHref}
                  className="kuct-btn-ghost inline-flex items-center self-center"
                >
                  {ctaSecondary}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: stacked cards — section height drives sticky pin */}
          <ul className="flex list-none flex-col gap-4 p-0 sm:gap-5">
            {items.map((item, index) => {
              const href = item.href.startsWith("#")
                ? item.href
                : assetPath(item.href);

              return (
                <Reveal as="li" key={item.title} delay={Math.min(index * 40, 160)}>
                  <article className="kuct-surface-card p-5 sm:p-6">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-[10px] border border-[var(--kuct-border)] bg-white">
                        <OutcomeCardIcon index={index} />
                      </span>
                      <h3 className="pt-1.5 font-display text-lg font-semibold leading-snug text-[var(--kuct-text)] sm:text-xl">
                        {item.title}
                      </h3>
                    </div>

                    <ul className="mt-4 space-y-2.5 pl-0 sm:mt-5">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex list-none items-start gap-2.5 text-sm leading-relaxed text-[var(--kuct-text)]"
                        >
                          <OutcomeCheckIcon />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 border-t border-dashed border-[var(--kuct-border)] pt-4">
                      <a
                        href={href}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--kuct-text)] transition hover:text-[var(--kuct-accent)]"
                      >
                        {learnMore}
                        <span aria-hidden>→</span>
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
