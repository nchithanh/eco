"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useQuote } from "@/components/QuoteProvider";
import { assetPath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Dictionary } from "@/lib/i18n/types";
import { getPackageDisplayPrices } from "@/lib/pricing-fx";

const ZALO_URL = "https://zalo.me/0779937633";

const DETAIL_KEYS = [
  "stack",
  "booking",
  "ai",
  "report",
  "payment",
  "highlight",
] as const;

type DetailKey = (typeof DETAIL_KEYS)[number];
type PackageItem = Dictionary["popularServices"]["packages"][number];

function defaultPackageId(packages: PackageItem[]): string {
  return packages.find((pkg) => pkg.featured)?.id ?? packages[0]?.id ?? "crm-care-12";
}

export function PopularServices({
  embedded = false,
  sectionId = "popular-services",
}: {
  embedded?: boolean;
  sectionId?: string;
}) {
  const { locale, t } = useLocale();
  const { openQuote } = useQuote();
  const {
    eyebrow,
    title,
    support,
    fromPrefix,
    includedLabel,
    consultPrompt,
    commitments,
    priceBundleLabel,
    noHiddenLabel,
    footerNote,
    footerCta,
    packages,
  } = t.popularServices;

  const groupId = useId();
  const [selectedId, setSelectedId] = useState(() => defaultPackageId(packages));

  const selected =
    packages.find((pkg) => pkg.id === selectedId) ?? packages[0] ?? null;

  const selectedPrices = useMemo(() => {
    if (!selected) return null;
    return getPackageDisplayPrices(locale, selected.id, fromPrefix);
  }, [fromPrefix, locale, selected]);

  return (
    <section
      id={sectionId}
      aria-labelledby="home-popular-heading"
      className={
        embedded
          ? "scroll-mt-20 py-12 sm:py-16"
          : "scroll-mt-20 py-16 sm:py-20 lg:py-24"
      }
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal variant="title" className="mx-auto max-w-3xl text-center">
          <p className="kuct-section-eyebrow">{eyebrow}</p>
          <h2
            id="home-popular-heading"
            className="mt-3 font-display text-[1.65rem] font-semibold leading-[1.15] tracking-tight sm:mt-4 sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]"
          >
            <AccentText>{title}</AccentText>
          </h2>
          <p className="mx-auto mt-3 max-w-[52ch] text-sm leading-[1.65] text-[var(--kuct-muted)] sm:mt-5 sm:text-base sm:leading-[1.7]">
            {support}
          </p>
          <Link
            href={assetPath("/chinh-sach-gia-dolphin-2026/")}
            className="mt-4 inline-flex text-sm font-medium text-[var(--kuct-muted)] transition hover:text-[var(--kuct-accent)]"
          >
            {consultPrompt}
          </Link>
        </Reveal>

        <Reveal delay={40} className="mt-10 sm:mt-12">
          <div
            role="radiogroup"
            aria-label={title.replace(/\[\[|\]\]/g, "")}
            className="grid grid-cols-2 overflow-hidden rounded-none border border-[var(--kuct-border)] bg-[var(--kuct-surface)] sm:grid-cols-4"
          >
            {packages.map((pkg) => {
              const { price } = getPackageDisplayPrices(
                locale,
                pkg.id,
                fromPrefix,
              );
              const isSelected = pkg.id === selected?.id;
              return (
                <button
                  key={pkg.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  aria-controls={`${groupId}-panel`}
                  id={`${groupId}-${pkg.id}`}
                  onClick={() => setSelectedId(pkg.id)}
                  className={
                    isSelected
                      ? "rounded-none bg-[var(--kuct-surface-muted)] px-3 py-3.5 text-left sm:px-4 sm:py-4"
                      : "rounded-none bg-[var(--kuct-surface)] px-3 py-3.5 text-left transition hover:bg-[var(--kuct-surface-muted)]/60 sm:px-4 sm:py-4"
                  }
                >
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h3
                      className={
                        isSelected
                          ? "font-display text-[0.8rem] font-semibold leading-snug tracking-tight text-[var(--kuct-text)] sm:text-sm"
                          : "font-display text-[0.8rem] font-medium leading-snug tracking-tight text-[var(--kuct-muted)] sm:text-sm"
                      }
                    >
                      {pkg.title}
                    </h3>
                    {pkg.featured || pkg.badge ? (
                      <span
                        className={
                          pkg.featured
                            ? "inline-flex rounded-none bg-[var(--kuct-text)] px-1.5 py-0.5 text-[8px] font-semibold tracking-[0.06em] text-[var(--kuct-on-accent)] uppercase"
                            : "inline-flex rounded-none bg-[var(--kuct-surface-muted)] px-1.5 py-0.5 text-[8px] font-semibold tracking-[0.06em] text-[var(--kuct-muted)] uppercase"
                        }
                      >
                        {pkg.badge}
                      </span>
                    ) : null}
                  </div>
                  <p
                    className={
                      isSelected
                        ? "mt-1.5 font-display text-xs font-semibold tabular-nums text-[var(--kuct-text)] sm:text-sm"
                        : "mt-1.5 font-display text-xs font-medium tabular-nums text-[var(--kuct-muted)] sm:text-sm"
                    }
                  >
                    {price}
                  </p>
                </button>
              );
            })}
          </div>

          {selected && selectedPrices ? (
            <div
              id={`${groupId}-panel`}
              role="region"
              aria-labelledby={`${groupId}-${selected.id}`}
              className="mt-6 grid gap-8 sm:mt-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-10"
            >
              <div>
                <p className="text-[10px] font-semibold tracking-[0.14em] text-[var(--kuct-muted)] uppercase sm:text-[11px]">
                  {selected.timeline}
                  <span className="mx-1.5 text-[var(--kuct-border)]" aria-hidden>
                    ·
                  </span>
                  <span className="normal-case tracking-normal text-[var(--kuct-muted)]">
                    {selected.fit}
                  </span>
                </p>

                <ul className="mt-4 list-none space-y-0 p-0 sm:mt-5">
                  {DETAIL_KEYS.map((key, index) => (
                    <li
                      key={key}
                      className="flex items-start justify-between gap-3 py-2.5 first:pt-0 sm:items-center sm:gap-4 sm:py-3"
                    >
                      <div className="flex min-w-0 items-baseline gap-2.5 sm:gap-3">
                        <span className="shrink-0 font-display text-[0.7rem] font-semibold tabular-nums text-[var(--kuct-muted)] sm:text-xs">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[0.8125rem] font-medium leading-snug text-[var(--kuct-text)] sm:text-sm">
                          {selected[key as DetailKey]}
                        </span>
                      </div>
                      <span className="hidden shrink-0 text-[10px] font-semibold tracking-[0.14em] text-[var(--kuct-muted)] uppercase sm:inline">
                        {includedLabel}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between bg-[var(--kuct-surface-muted)] px-5 py-5 sm:px-6 sm:py-6">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.16em] text-[var(--kuct-muted)] uppercase">
                    {priceBundleLabel}
                  </p>
                  <p className="mt-1 font-display text-2xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-[1.75rem]">
                    {selectedPrices.price}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold tracking-[0.12em] text-[var(--kuct-muted)] uppercase">
                    {noHiddenLabel}
                  </p>
                  <ul className="mt-4 flex list-none flex-col gap-1.5 p-0">
                    {commitments.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-1.5 text-xs text-[var(--kuct-muted)] sm:text-sm"
                      >
                        <span className="text-[var(--kuct-text)]" aria-hidden>
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={openQuote}
                    className="kuct-btn-primary inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold"
                  >
                    {selected.cta}
                    <span className="ml-1.5" aria-hidden>
                      →
                    </span>
                  </button>
                  <a
                    href={ZALO_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full border border-[var(--kuct-border)] px-4 py-2.5 text-sm font-medium text-[var(--kuct-text)] transition hover:bg-[var(--kuct-surface)]"
                  >
                    {footerCta}
                  </a>
                </div>
              </div>
            </div>
          ) : null}
        </Reveal>

        <p className="mx-auto mt-6 max-w-[56ch] text-center text-sm leading-relaxed text-[var(--kuct-muted)]">
          {footerNote}
        </p>
      </div>
    </section>
  );
}
