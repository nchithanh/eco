"use client";

import { useState } from "react";
import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { PosAppStage } from "@/components/PosAppStage";
import { Reveal } from "@/components/Reveal";
import { useQuote } from "@/components/QuoteProvider";
import { routePath } from "@/lib/asset";
import { getPosPageCopy } from "@/lib/i18n/pos-copy";
import { getPosHomeCopy } from "@/lib/i18n/pos-home-copy";
import { useLocale } from "@/lib/i18n/LocaleProvider";

/** Homepage POS — ElevenLabs Agents-style: 2-col header + stage + 3 feature tabs. */
export function HomePos() {
  const { locale } = useLocale();
  const { openQuote } = useQuote();
  const c = getPosHomeCopy(locale);
  const stageDemo = getPosPageCopy(c.stageSlug);
  const [active, setActive] = useState(0);

  return (
    <section
      id="dolphin-pos"
      className="scroll-mt-20 py-20 sm:py-24"
      aria-labelledby="home-pos-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal variant="title">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-14">
            <div>
              <p className="kuct-section-eyebrow">{c.eyebrow}</p>
              <h2
                id="home-pos-heading"
                className="mt-4 max-w-[18ch] font-display text-[1.75rem] font-semibold leading-[1.1] tracking-tight text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem]"
              >
                <AccentText>{c.title}</AccentText>
              </h2>
            </div>
            <p className="m-0 max-w-[40ch] text-base leading-[1.7] text-[var(--kuct-muted)] lg:pt-10 lg:justify-self-end">
              {c.support}
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={60} className="mt-10 sm:mt-12">
        <PosAppStage slug={c.stageSlug} demo={stageDemo} />
      </Reveal>

      <div className="mx-auto mt-10 max-w-7xl px-6 sm:mt-12">
        <Reveal delay={80}>
          <ul
            className="m-0 grid list-none grid-cols-1 gap-8 p-0 sm:grid-cols-3 sm:gap-6 lg:gap-10"
            role="tablist"
            aria-label={c.eyebrow}
          >
            {c.features.map((feature, index) => {
              const isActive = active === index;
              return (
                <li key={feature.title}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className="w-full border-0 bg-transparent p-0 text-left"
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                  >
                    <span
                      aria-hidden
                      className={`mb-4 block h-0.5 w-full rounded-full transition-colors ${
                        isActive
                          ? "bg-[var(--kuct-accent)]"
                          : "bg-[var(--kuct-border)]"
                      }`}
                    />
                    <h3
                      className={`m-0 font-display text-base font-semibold tracking-tight sm:text-lg ${
                        isActive
                          ? "text-[var(--kuct-text)]"
                          : "text-[var(--kuct-muted)]"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p className="mt-2 m-0 text-sm leading-[1.7] text-[var(--kuct-muted)]">
                      {feature.body}
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={100} className="mt-10 flex flex-wrap items-center gap-3 sm:mt-12">
          <Link
            href={routePath("/pos/")}
            className="kuct-btn-primary inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold no-underline"
          >
            {c.cta}
          </Link>
          <button
            type="button"
            onClick={openQuote}
            className="kuct-btn-outline inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
          >
            {c.ctaSecondary}
          </button>
          <p className="w-full text-sm text-[var(--kuct-muted)] sm:ml-2 sm:w-auto">
            {c.trustMicro}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
