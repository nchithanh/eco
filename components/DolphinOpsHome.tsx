"use client";

import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { OpsHeroDemo } from "@/components/DolphinOpsDemos";
import { Reveal } from "@/components/Reveal";
import { useQuote } from "@/components/QuoteProvider";
import { routePath } from "@/lib/asset";
import {
  getDolphinOpsCopy,
  getDolphinOpsHomeCopy,
} from "@/lib/i18n/dolphin-ops-copy";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function DolphinOpsHome() {
  const { locale } = useLocale();
  const { openQuote } = useQuote();
  const c = getDolphinOpsHomeCopy(locale);
  const demo = getDolphinOpsCopy(locale);

  return (
    <section
      id="dolphin-ops"
      className="kuct-section-wash scroll-mt-20 py-20 sm:py-24"
      aria-labelledby="home-ops-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
        <div className="min-w-0">
          <Reveal variant="title" className="max-w-xl">
            <p className="kuct-type-eyebrow text-[11px] sm:text-xs">{c.eyebrow}</p>
            <h2
              id="home-ops-heading"
              className="kuct-type-h2 mt-4 text-3xl text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem]"
            >
              <AccentText>{c.title}</AccentText>
            </h2>
            <p className="kuct-type-body mt-5 max-w-[46ch] text-base">{c.support}</p>
            <p className="mt-3 text-sm font-medium text-[var(--kuct-text)]">
              {c.quote}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)]">
              {c.vsCare}
            </p>
          </Reveal>

          <Reveal delay={60}>
            <ul className="mt-8 grid gap-3 sm:mt-9">
              {c.benefits.map((benefit) => (
                <li
                  key={benefit.title}
                  className="kuct-surface-card flex items-start gap-3 px-4 py-3"
                >
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold leading-snug text-[var(--kuct-text)]">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
                      {benefit.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={90} className="mt-7">
            <p className="kuct-type-eyebrow text-[11px] text-[var(--kuct-muted)]">
              {c.wedgeLabel}
            </p>
            <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
              {c.wedge.map((item) => (
                <li key={item} className="kuct-badge text-[var(--kuct-text)]">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={140} className="mt-8 sm:mt-9">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href={routePath("/dolphin-ops/")}
                className="kuct-btn-primary inline-flex w-full items-center justify-center rounded-lg px-5 py-3.5 text-sm font-semibold sm:w-auto"
              >
                {c.cta}
              </Link>
              <button
                type="button"
                onClick={openQuote}
                className="kuct-btn-ghost inline-flex w-full items-center justify-center self-center sm:w-auto"
              >
                {c.ctaSecondary}
              </button>
            </div>
            <p className="mt-4 text-sm text-[var(--kuct-muted)]">{c.trust}</p>
          </Reveal>
        </div>

        <Reveal delay={100} className="min-w-0 lg:justify-self-stretch">
          <OpsHeroDemo copy={demo} />
        </Reveal>
      </div>
    </section>
  );
}
