"use client";

import { AccentText, BrandName } from "@/components/BrandName";
import { LazyImage } from "@/components/LazyImage";
import { Reveal } from "@/components/Reveal";
import { useQuote } from "@/components/QuoteProvider";
import { assetPath } from "@/lib/asset";
import { getAboutCopy } from "@/lib/i18n/about-copy";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function AboutContent() {
  const { locale } = useLocale();
  const a = getAboutCopy(locale);
  const { openQuote } = useQuote();

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-[var(--kuct-border)] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(var(--kuct-accent-rgb),0.1)] via-transparent to-[rgba(var(--kuct-accent-rgb),0.04)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
              {a.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--kuct-text)] sm:text-5xl lg:text-[3.25rem]">
              <BrandName size="md" />
            </h1>
            <p className="mx-auto mt-6 max-w-[34ch] font-display text-xl font-semibold leading-snug tracking-tight text-[var(--kuct-text)] sm:text-2xl sm:max-w-[40ch]">
              <AccentText>{a.motto}</AccentText>
            </p>
            <p className="mx-auto mt-5 max-w-[48ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
              {a.support}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={openQuote}
                className="kuct-btn-primary inline-flex items-center rounded-full px-8 py-3.5 text-sm font-semibold"
              >
                {a.ctaPrimary}
              </button>
              <a
                href={assetPath("/#capabilities")}
                className="inline-flex items-center rounded-full border border-[var(--kuct-border)] px-6 py-3 text-sm font-medium text-[var(--kuct-muted)] transition hover:border-[var(--kuct-accent)]/45 hover:text-[var(--kuct-text)]"
              >
                {a.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
              {a.mindsetEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem]">
              <AccentText>{a.mindsetTitle}</AccentText>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {a.mindset.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 60}
                className={
                  index === 2
                    ? "rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] p-5 ring-1 ring-[var(--kuct-accent)]/25 backdrop-blur-md sm:p-6"
                    : "rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.72)] p-5 backdrop-blur-md sm:p-6"
                }
              >
                <p className="font-display text-sm font-semibold tracking-wide text-[var(--kuct-text)]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-20 border-t border-[var(--kuct-border)] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
              {a.buildEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem]">
              <AccentText>{a.buildTitle}</AccentText>
            </h2>
            <p className="mt-5 max-w-[48ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
              {a.buildSupport}
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {a.buildItems.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 50}
                className={
                  index === 0 || index === 3
                    ? "rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] p-5 ring-1 ring-[var(--kuct-accent)]/20 backdrop-blur-md sm:p-6"
                    : "rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.72)] p-5 backdrop-blur-md sm:p-6"
                }
              >
                <p className="text-[11px] font-semibold tabular-nums tracking-wide text-[var(--kuct-accent)]/80">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-display text-sm font-semibold tracking-wide text-[var(--kuct-text)]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-20 border-t border-[var(--kuct-border)] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
              {a.proofEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem]">
              <AccentText>{a.proofTitle}</AccentText>
            </h2>
            <p className="mt-5 max-w-[48ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
              {a.proofSupport}
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {a.proofs.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 50}
                className="rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.72)] p-5 backdrop-blur-md sm:p-6"
              >
                <p className="font-display text-sm font-semibold tracking-wide text-[var(--kuct-text)]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-20 border-t border-[var(--kuct-border)] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="grid items-center gap-10 rounded-[1.75rem] border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] p-8 backdrop-blur-md sm:p-10 lg:grid-cols-[220px_1fr] lg:gap-12 lg:p-12">
            <div className="relative mx-auto w-full max-w-[200px] lg:max-w-none">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[rgba(10,10,22,0.85)]">
                <LazyImage
                  src={assetPath("/about/founder.png")}
                  alt={`${a.founderName} — ${a.founderRole}`}
                  fill
                  className="object-cover object-top"
                  sizes="220px"
                  watermark={false}
                />
              </div>
            </div>
            <div className="min-w-0 text-left">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
                {a.founderEyebrow}
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-[1.75rem]">
                {a.founderTitle}
              </h2>
              <p className="mt-2 font-display text-lg font-semibold text-[var(--kuct-text)]">
                {a.founderName}
              </p>
              <p className="mt-1 text-sm text-[var(--kuct-muted)]">
                {a.founderRole}
              </p>
              <p className="mt-4 max-w-[52ch] text-sm leading-[1.7] text-[var(--kuct-muted)]">
                {a.founderBody}
              </p>
              <ul className="mt-5 flex list-none flex-wrap gap-2 p-0">
                {a.founderStack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.75)] px-3 py-1.5 text-xs font-semibold text-[var(--kuct-muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="scroll-mt-20 border-t border-[var(--kuct-border)] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="rounded-[1.75rem] border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] px-6 py-10 text-center ring-1 ring-[var(--kuct-accent)]/15 backdrop-blur-md sm:px-10 sm:py-12">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
              {a.ctaEyebrow}
            </p>
            <h2 className="mx-auto mt-4 max-w-[28ch] font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem]">
              <AccentText>{a.ctaTitle}</AccentText>
            </h2>
            <p className="mx-auto mt-5 max-w-[42ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
              {a.ctaSupport}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={openQuote}
                className="kuct-btn-primary inline-flex items-center rounded-full px-8 py-3.5 text-sm font-semibold"
              >
                {a.ctaPrimary}
              </button>
              <a
                href={assetPath("/#capabilities")}
                className="inline-flex items-center rounded-full border border-[var(--kuct-border)] px-6 py-3 text-sm font-medium text-[var(--kuct-muted)] transition hover:border-[var(--kuct-accent)]/45 hover:text-[var(--kuct-text)]"
              >
                {a.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
