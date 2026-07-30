"use client";

import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useQuote } from "@/components/QuoteProvider";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Dictionary } from "@/lib/i18n/types";
import { getPackageDisplayPrices } from "@/lib/pricing-fx";

const ZALO_URL = "https://zalo.me/0779937633";

const FEATURE_KEYS = [
  "ui",
  "seo",
  "admin",
  "measure",
  "warranty",
] as const;

type FeatureKey = (typeof FEATURE_KEYS)[number];
type PackageItem = Dictionary["popularServices"]["packages"][number];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 size-3.5 shrink-0 text-[var(--kuct-accent)]"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M3.5 8.2 6.4 11l6.1-6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg
      className="mt-0.5 size-3.5 shrink-0 text-[var(--kuct-accent)]"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M9 1.5 3.5 9h4L7 14.5 12.5 7h-4L9 1.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PopularServices() {
  const { locale, t } = useLocale();
  const { openQuote } = useQuote();
  const {
    eyebrow,
    title,
    support,
    categoryLabel,
    rowLabels,
    priceNote,
    fromPrefix,
    footerNote,
    footerCta,
    packages,
  } = t.popularServices;

  return (
    <section id="popular-services" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]">
            <AccentText>{title}</AccentText>
          </h2>
          <p className="mt-5 max-w-[46ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
            {support}
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-12">
          <div className="overflow-x-auto touch-[pan-x_pan-y] pb-2 [-ms-overflow-style:none] [scrollbar-width:thin]">
            <div className="min-w-[56rem] overflow-hidden rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.92)] shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <div
                className="grid"
                style={{ gridTemplateColumns: `9.5rem repeat(${packages.length}, minmax(0, 1fr))` }}
              >
                {/* Header */}
                <div className="border-b border-[var(--kuct-border)] bg-[rgba(10,10,22,0.65)] px-4 py-5">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-[var(--kuct-muted)] uppercase">
                    {categoryLabel}
                  </p>
                </div>
                {packages.map((pkg) => (
                  <div
                    key={`h-${pkg.id}`}
                    className={
                      pkg.featured
                        ? "relative border-b border-[var(--kuct-border)] border-l border-l-[var(--kuct-border)] bg-[rgba(var(--kuct-accent-rgb),0.08)] px-4 py-5 ring-1 ring-inset ring-[var(--kuct-accent)]/30"
                        : "border-b border-[var(--kuct-border)] border-l border-l-[var(--kuct-border)] px-4 py-5"
                    }
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-base font-semibold tracking-tight text-[var(--kuct-text)] sm:text-lg">
                        {pkg.title}
                      </h3>
                    </div>
                    <span
                      className={
                        pkg.featured
                          ? "mt-2 inline-flex rounded-full border border-[var(--kuct-accent)]/40 bg-[rgba(var(--kuct-accent-rgb),0.16)] px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[var(--kuct-accent)] uppercase"
                          : "mt-2 inline-flex rounded-full border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.7)] px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[var(--kuct-muted)] uppercase"
                      }
                    >
                      {pkg.badge}
                    </span>
                  </div>
                ))}

                {/* Price */}
                <RowLabel>{rowLabels.price}</RowLabel>
                {packages.map((pkg) => {
                  const { priceWas, price } = getPackageDisplayPrices(
                    locale,
                    pkg.id,
                    fromPrefix,
                  );
                  return (
                  <div
                    key={`p-${pkg.id}`}
                    className={cellClass(pkg.featured, true)}
                  >
                    <p className="text-xs text-[var(--kuct-muted)] line-through">
                      {priceWas}
                    </p>
                    <p
                      className={
                        pkg.priceFocus
                          ? "mt-1 font-display text-2xl font-semibold tracking-tight text-[var(--kuct-accent)] sm:text-[1.75rem] [text-shadow:0_0_24px_rgb(var(--kuct-accent-rgb)/0.35)]"
                          : "mt-1 font-display text-xl font-semibold tracking-tight text-[var(--kuct-text)]"
                      }
                    >
                      {price}
                    </p>
                    {pkg.saveBadge ? (
                      <span
                        className={
                          pkg.priceFocus
                            ? "mt-2 inline-flex rounded-full border border-[var(--kuct-accent)]/45 bg-[rgba(var(--kuct-accent-rgb),0.18)] px-2 py-0.5 text-[10px] font-semibold tracking-wide text-[var(--kuct-accent)] uppercase"
                            : "mt-2 inline-flex rounded-full border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.75)] px-2 py-0.5 text-[10px] font-semibold tracking-wide text-[var(--kuct-muted)] uppercase"
                        }
                      >
                        {pkg.saveBadge}
                      </span>
                    ) : null}
                    <p className="mt-2 text-[11px] leading-snug text-[var(--kuct-muted)]">
                      {priceNote}
                    </p>
                  </div>
                  );
                })}

                {/* Timeline */}
                <RowLabel muted>{rowLabels.timeline}</RowLabel>
                {packages.map((pkg) => (
                  <div key={`t-${pkg.id}`} className={cellClass(pkg.featured, false)}>
                    <p className="text-sm font-medium text-[var(--kuct-text)]">{pkg.timeline}</p>
                  </div>
                ))}

                {/* Fit */}
                <RowLabel>{rowLabels.fit}</RowLabel>
                {packages.map((pkg) => (
                  <div key={`f-${pkg.id}`} className={cellClass(pkg.featured, true)}>
                    <p className="text-sm leading-relaxed text-[var(--kuct-muted)]">{pkg.fit}</p>
                  </div>
                ))}

                {/* Feature rows */}
                {FEATURE_KEYS.map((key, index) => (
                  <FeatureRow
                    key={key}
                    label={rowLabels[key as FeatureKey]}
                    packages={packages}
                    field={key}
                    zebra={index % 2 === 1}
                  />
                ))}

                {/* Highlight */}
                <RowLabel>{rowLabels.highlight}</RowLabel>
                {packages.map((pkg) => (
                  <div key={`hi-${pkg.id}`} className={cellClass(pkg.featured, true)}>
                    <p className="flex gap-2 text-sm leading-snug text-[var(--kuct-text)]">
                      <BoltIcon />
                      <span>{pkg.highlight}</span>
                    </p>
                  </div>
                ))}

                {/* CTA */}
                <div className="bg-[rgba(10,10,22,0.45)] px-4 py-4" />
                {packages.map((pkg) => (
                  <div
                    key={`c-${pkg.id}`}
                    className={
                      pkg.featured
                        ? "border-l border-l-[var(--kuct-border)] bg-[rgba(var(--kuct-accent-rgb),0.08)] px-4 py-4 ring-1 ring-inset ring-[var(--kuct-accent)]/30"
                        : "border-l border-l-[var(--kuct-border)] px-4 py-4"
                    }
                  >
                    <button
                      type="button"
                      onClick={openQuote}
                      className={
                        pkg.featured || pkg.priceFocus
                          ? "kuct-btn-primary inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold"
                          : "inline-flex w-full items-center justify-center rounded-full border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.85)] px-4 py-2.5 text-sm font-semibold text-[var(--kuct-text)] transition hover:border-[var(--kuct-accent)]/40 hover:text-[var(--kuct-accent)]"
                      }
                    >
                      {pkg.cta}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6">
            <p className="max-w-2xl text-sm leading-relaxed text-[var(--kuct-muted)]">
              {footerNote}
            </p>
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noreferrer"
              className="kuct-btn-primary inline-flex shrink-0 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              {footerCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function cellClass(featured: boolean | undefined, zebra: boolean) {
  if (featured) {
    return zebra
      ? "border-b border-[var(--kuct-border)] border-l border-l-[var(--kuct-border)] bg-[rgba(var(--kuct-accent-rgb),0.1)] px-4 py-4 ring-1 ring-inset ring-[var(--kuct-accent)]/30"
      : "border-b border-[var(--kuct-border)] border-l border-l-[var(--kuct-border)] bg-[rgba(var(--kuct-accent-rgb),0.08)] px-4 py-4 ring-1 ring-inset ring-[var(--kuct-accent)]/30";
  }
  return zebra
    ? "border-b border-[var(--kuct-border)] border-l border-l-[var(--kuct-border)] bg-[rgba(10,10,22,0.35)] px-4 py-4"
    : "border-b border-[var(--kuct-border)] border-l border-l-[var(--kuct-border)] px-4 py-4";
}

function RowLabel({
  children,
  muted = false,
}: {
  children: string;
  muted?: boolean;
}) {
  return (
    <div
      className={
        muted
          ? "border-b border-[var(--kuct-border)] bg-[rgba(10,10,22,0.35)] px-4 py-4"
          : "border-b border-[var(--kuct-border)] px-4 py-4"
      }
    >
      <p className="text-xs font-semibold tracking-wide text-[var(--kuct-muted)] uppercase">
        {children}
      </p>
    </div>
  );
}

function FeatureRow({
  label,
  packages,
  field,
  zebra,
}: {
  label: string;
  packages: PackageItem[];
  field: FeatureKey;
  zebra: boolean;
}) {
  return (
    <>
      <RowLabel muted={zebra}>{label}</RowLabel>
      {packages.map((pkg) => (
        <div key={`${field}-${pkg.id}`} className={cellClass(pkg.featured, zebra)}>
          <p className="flex gap-2 text-sm leading-snug text-[var(--kuct-text)]/90">
            <CheckIcon />
            <span>{pkg[field]}</span>
          </p>
        </div>
      ))}
    </>
  );
}