"use client";

import { useId, useMemo, useState } from "react";
import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useQuote } from "@/components/QuoteProvider";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Dictionary } from "@/lib/i18n/types";
import { getPackageDisplayPrices } from "@/lib/pricing-fx";

const ZALO_URL = "https://zalo.me/0779937633";

const DETAIL_KEYS = [
  "ui",
  "seo",
  "admin",
  "measure",
  "warranty",
  "highlight",
] as const;

type DetailKey = (typeof DETAIL_KEYS)[number];
type PackageItem = Dictionary["popularServices"]["packages"][number];

function defaultPackageId(packages: PackageItem[]): string {
  return packages.find((pkg) => pkg.featured)?.id ?? packages[0]?.id ?? "landing";
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
      className={
        embedded
          ? "scroll-mt-20 border-t border-[var(--kuct-border)] py-12 sm:py-16"
          : "scroll-mt-20 py-16 sm:py-20 lg:py-24"
      }
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal
          delay={40}
          className="overflow-hidden rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.94)] shadow-[0_28px_70px_rgba(0,0,0,0.38)] backdrop-blur-md sm:rounded-[1.75rem]"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left — section intro */}
            <div className="flex flex-col justify-between border-b border-[var(--kuct-border)] px-4 py-6 sm:px-8 sm:py-10 lg:border-b-0 lg:border-r lg:px-10 lg:py-12">
              <Reveal variant="title">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
                  {eyebrow}
                </p>
                <h2 className="mt-3 max-w-[18ch] font-display text-[1.65rem] font-semibold leading-[1.15] tracking-tight sm:mt-4 sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]">
                  <AccentText>{title}</AccentText>
                </h2>
                <p className="mt-3 max-w-[42ch] text-sm leading-[1.65] text-[var(--kuct-muted)] sm:mt-5 sm:text-base sm:leading-[1.7]">
                  {support}
                </p>
              </Reveal>

              <a
                href={ZALO_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex text-sm font-medium text-[var(--kuct-muted)] transition hover:text-[var(--kuct-accent)] sm:mt-10 lg:mt-16"
              >
                {consultPrompt}
              </a>
            </div>

            {/* Right — tabs top + detail */}
            <div className="relative flex flex-col bg-[rgba(8,8,18,0.55)] lg:min-h-[22rem]">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.2]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(var(--kuct-accent-rgb) / 0.12) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--kuct-accent-rgb) / 0.12) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                  maskImage:
                    "radial-gradient(ellipse at 80% 0%, black 12%, transparent 72%)",
                }}
                aria-hidden
              />

              <div
                role="radiogroup"
                aria-label={title.replace(/\[\[|\]\]/g, "")}
                className="relative z-[1] grid grid-cols-2 gap-1.5 border-b border-[var(--kuct-border)] p-2 sm:gap-2 sm:p-2.5 lg:flex lg:overflow-x-auto lg:touch-[pan-x_pan-y]"
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
                          ? "relative rounded-xl bg-[rgba(var(--kuct-accent-rgb),0.16)] px-2.5 py-2.5 text-left ring-1 ring-[var(--kuct-accent)]/40 transition sm:px-3 sm:py-3 lg:min-w-0 lg:flex-1"
                          : "relative rounded-xl px-2.5 py-2.5 text-left transition hover:bg-[rgba(255,255,255,0.04)] sm:px-3 sm:py-3 lg:min-w-0 lg:flex-1"
                      }
                    >
                      <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                        <h3 className="font-display text-[0.8rem] font-semibold leading-snug tracking-tight text-[var(--kuct-text)] sm:text-sm">
                          {pkg.title}
                        </h3>
                        {pkg.featured ? (
                          <span className="inline-flex rounded-full border border-[var(--kuct-accent)]/40 bg-[rgba(var(--kuct-accent-rgb),0.16)] px-1.5 py-0.5 text-[8px] font-semibold tracking-[0.08em] text-[var(--kuct-accent)] uppercase">
                            {pkg.badge}
                          </span>
                        ) : null}
                      </div>
                      <p
                        className={
                          pkg.priceFocus
                            ? "mt-1 font-display text-xs font-semibold tabular-nums text-[var(--kuct-accent)] sm:mt-1.5 sm:text-sm"
                            : "mt-1 font-display text-xs font-semibold tabular-nums text-[var(--kuct-text)] sm:mt-1.5 sm:text-sm"
                        }
                      >
                        {price}
                      </p>
                      {isSelected ? (
                        <span
                          className="absolute bottom-2 right-2 size-2 rounded-full bg-[var(--kuct-accent)] shadow-[0_0_0.4rem_rgb(var(--kuct-accent-rgb)/0.75)]"
                          aria-hidden
                        />
                      ) : null}
                    </button>
                  );
                })}
              </div>

              {selected && selectedPrices ? (
                <div
                  id={`${groupId}-panel`}
                  role="region"
                  aria-labelledby={`${groupId}-${selected.id}`}
                  className="relative z-[1] flex flex-1 flex-col px-4 py-4 sm:px-6 sm:py-6"
                >
                  <p className="text-[10px] font-semibold tracking-[0.14em] text-[var(--kuct-muted)] uppercase sm:text-[11px] sm:tracking-[0.16em]">
                    {selected.timeline}
                    <span className="mx-1.5 text-[var(--kuct-border)]" aria-hidden>
                      ·
                    </span>
                    <span className="normal-case tracking-normal text-[var(--kuct-muted)]">
                      {selected.fit}
                    </span>
                  </p>

                  <ul className="mt-3 flex-1 space-y-0 sm:mt-4">
                    {DETAIL_KEYS.map((key, index) => (
                      <li
                        key={key}
                        className="flex items-start justify-between gap-3 border-b border-[var(--kuct-border)]/70 py-2.5 first:pt-0 last:border-b-0 sm:items-center sm:gap-4 sm:py-3"
                      >
                        <div className="flex min-w-0 items-baseline gap-2.5 sm:gap-3">
                          <span className="shrink-0 font-display text-[0.7rem] font-semibold tabular-nums text-[var(--kuct-accent)] sm:text-xs">
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

                  <ul className="mt-3 flex flex-col gap-1.5 sm:mt-4 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
                    {commitments.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-1.5 text-xs text-[var(--kuct-muted)] sm:text-sm"
                      >
                        <span className="text-[var(--kuct-accent)]" aria-hidden>
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-col gap-3 border-t border-[var(--kuct-border)] pt-4 sm:mt-5 sm:flex-row sm:items-end sm:justify-between sm:gap-4 sm:pt-5">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.16em] text-[var(--kuct-muted)] uppercase">
                        {priceBundleLabel}
                      </p>
                      <p
                        className={
                          selected.priceFocus
                            ? "mt-1 font-display text-xl font-semibold tracking-tight text-[var(--kuct-accent)] sm:text-2xl"
                            : "mt-1 font-display text-xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-2xl"
                        }
                      >
                        {selectedPrices.price}
                      </p>
                      <p className="mt-1 text-[10px] font-semibold tracking-[0.12em] text-[var(--kuct-muted)] uppercase">
                        {noHiddenLabel}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={openQuote}
                      className="kuct-btn-primary inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-[0_0_0_1px_rgb(var(--kuct-accent-rgb)/0.35),0_12px_36px_rgb(var(--kuct-accent-rgb)/0.28)] sm:w-auto"
                    >
                      {selected.cta}
                      <span className="ml-1.5" aria-hidden>
                        →
                      </span>
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
