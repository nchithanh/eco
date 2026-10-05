"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useQuote } from "@/components/QuoteProvider";
import { routePath } from "@/lib/asset";
import { getAgentDolphinHomeCopy } from "@/lib/i18n/agent-dolphin-copy";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useDesktopMotion } from "@/lib/motion";

function CareHomeChatShell() {
  return (
    <div
      className="flex min-h-[18rem] flex-col overflow-hidden rounded-[10px] bg-[var(--kuct-panel)] shadow-[0_18px_48px_rgb(26_21_32/0.07)] sm:min-h-[22rem] lg:min-h-[26rem]"
      aria-hidden
    >
      <div className="h-12 animate-pulse bg-[var(--kuct-surface-muted)]" />
      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <div className="ml-auto h-10 w-2/3 animate-pulse rounded-[10px] bg-[var(--kuct-surface-muted)]" />
        <div className="h-14 w-3/4 animate-pulse rounded-[10px] bg-[var(--kuct-surface-muted)]" />
        <div className="h-10 w-1/2 animate-pulse rounded-[10px] bg-[var(--kuct-surface-muted)]" />
      </div>
    </div>
  );
}

const CareHomeChatDemo = dynamic(
  () =>
    import("@/components/AgentDolphinHomeChat").then((m) => m.CareHomeChatDemo),
  {
    loading: () => <CareHomeChatShell />,
    ssr: false,
  },
);

function IconReply() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden>
      <path
        d="M5 12h11M12 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconHandsFree() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden>
      <path
        d="M8 14V9a4 4 0 1 1 8 0v5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M6 14h12v2.5a4.5 4.5 0 0 1-4.5 4.5h-3A4.5 4.5 0 0 1 6 16.5V14z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconEfficiency() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden>
      <path
        d="M4 16l5-5 3.5 3.5L20 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7h6v6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const BENEFIT_ICONS: ReactNode[] = [
  <IconReply key="reply" />,
  <IconHandsFree key="hands" />,
  <IconEfficiency key="eff" />,
];

export function AgentDolphinHome() {
  const { locale } = useLocale();
  const { openQuote } = useQuote();
  const c = getAgentDolphinHomeCopy(locale);
  const motion = useDesktopMotion();

  return (
    <section
      id="dolphin-care"
      className="kuct-cv-auto kuct-section-soft scroll-mt-20 py-20 sm:py-24"
      aria-labelledby="home-care-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
        <div className="min-w-0">
          <Reveal variant="title" className="max-w-xl">
            <p className="kuct-section-eyebrow">{c.eyebrow}</p>
            <h2
              id="home-care-heading"
              className="kuct-type-h2 mt-4 text-3xl text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem]"
            >
              <AccentText>{c.title}</AccentText>
            </h2>
            <p className="kuct-type-body mt-5 max-w-[46ch] text-base">
              {c.support}
            </p>
          </Reveal>

          <Reveal delay={60}>
            <ul className="mt-8 grid gap-3 sm:mt-9">
              {c.benefits.map((benefit, index) => (
                <li
                  key={benefit.title}
                  className="kuct-surface-card flex items-start gap-3 px-4 py-3"
                >
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-[10px] bg-white text-[var(--kuct-accent)] shadow-[0_1px_3px_rgb(26_22_37/0.06)]">
                    {BENEFIT_ICONS[index] ?? BENEFIT_ICONS[0]}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-snug text-[var(--kuct-text)]">
                      {benefit.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
                      {benefit.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {c.situations && c.situations.length > 0 ? (
            <Reveal delay={90} className="mt-7">
              <p className="kuct-type-eyebrow text-[11px] text-[var(--kuct-muted)]">
                {c.situationsLabel}
              </p>
              <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
                {c.situations.map((item) => (
                  <li key={item} className="kuct-badge text-[var(--kuct-text)]">
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}

          {c.industries && c.industries.length > 0 ? (
            <Reveal delay={110} className="mt-6">
              <p className="kuct-type-eyebrow text-[11px] text-[var(--kuct-muted)]">
                {c.industriesLabel}
              </p>
              <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
                {c.industries.map((item) => (
                  <li
                    key={item}
                    className="rounded-[10px] px-3 py-1 text-xs font-medium text-[var(--kuct-muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}

          <Reveal delay={140} className="mt-8 sm:mt-9">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href={routePath("/dolphin-care/")}
                className="kuct-btn-primary inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold sm:w-auto"
              >
                {c.cta}
              </Link>
              <button
                type="button"
                onClick={openQuote}
                className="kuct-btn-outline inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm sm:w-auto"
              >
                {c.ctaSecondary}
              </button>
            </div>
            <p className="mt-4 text-sm text-[var(--kuct-muted)]">{c.trustMicro}</p>
          </Reveal>
        </div>

        <Reveal delay={100} className="min-w-0 lg:justify-self-stretch">
          <div className="kuct-product-panel">
            <CareHomeChatDemo
              card={c.card}
              agentName={c.agentName}
              online={c.online}
              inputPlaceholder={c.inputPlaceholder}
              animate={motion}
            />
            {c.pipeline && c.pipeline.length > 0 ? (
              <div className="mt-4 rounded-[10px] bg-[var(--kuct-surface)] px-4 py-3.5 shadow-[0_0.35rem_1rem_rgb(26_22_37/0.05)]">
                <p className="kuct-section-eyebrow text-[10px] tracking-[0.16em]">
                  {c.pipelineLabel}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {c.pipeline.join(" → ")}
                </p>
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
