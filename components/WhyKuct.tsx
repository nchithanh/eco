"use client";

import { AccentText, BrandText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const REASON_IDS = [
  "experience",
  "delivery",
  "process",
  "support",
] as const;

type ReasonId = (typeof REASON_IDS)[number];

function WhyArt({ id }: { id: ReasonId }) {
  const common = "h-full w-full text-[var(--kuct-accent)]";

  if (id === "experience") {
    return (
      <svg viewBox="0 0 96 72" className={common} fill="none" aria-hidden>
        <path
          d="M8 42c12-18 34-28 58-24 14 2 24 8 30 4 2 6-2 12-10 14-16 6-34 10-52 4-10-3-18-6-24-2-4 2-6-2-2-6z"
          fill="currentColor"
          opacity="0.22"
        />
        <path
          d="M68 28c8-10 16-14 24-14 2 0 3 2 2 4-4 8-10 14-18 18-2 1-5 0-6-2-1-2 0-4-2-6z"
          fill="currentColor"
          opacity="0.28"
        />
        <circle cx="28" cy="36" r="2" fill="currentColor" opacity="0.45" />
        <path
          d="M40 22l1.2 3.2L44.5 26.5l-3.3 1.1L40 31l-1.2-3.4L35.5 26.5l3.3-1.3L40 22z"
          fill="currentColor"
          opacity="0.5"
        />
        <path
          d="M52 14l0.9 2.4L55.5 17.5l-2.6.9L52 21l-.9-2.6L48.5 17.5l2.6-.9L52 14z"
          fill="currentColor"
          opacity="0.35"
        />
      </svg>
    );
  }

  if (id === "delivery") {
    return (
      <svg viewBox="0 0 96 72" className={common} fill="none" aria-hidden>
        <path
          d="M6 50c4-2 10-8 18-18 6-8 14-14 24-12 8 2 12 8 20 10 8 2 14 0 20-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="3 4"
          opacity="0.28"
        />
        <path
          d="M12 40c10-14 28-22 48-18 12 2 20 8 26 4 1 5-3 10-10 12-14 4-30 8-46 2-8-3-14-4-18 0"
          fill="currentColor"
          opacity="0.22"
        />
        <circle cx="78" cy="22" r="3.5" fill="currentColor" opacity="0.4" />
        <path
          d="M78 16v-4M78 32v-4M72 22h-4M88 22h-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
    );
  }

  if (id === "process") {
    return (
      <svg viewBox="0 0 96 72" className={common} fill="none" aria-hidden>
        <path
          d="M14 44c10-16 30-24 50-20 12 2 20 8 26 4 1 5-2 11-10 13-16 5-34 8-50 2-8-3-14-4-16 1"
          fill="currentColor"
          opacity="0.2"
        />
        <circle cx="30" cy="24" r="5" stroke="currentColor" strokeWidth="1.6" opacity="0.4" />
        <circle cx="48" cy="18" r="5" stroke="currentColor" strokeWidth="1.6" opacity="0.35" />
        <circle cx="66" cy="24" r="5" stroke="currentColor" strokeWidth="1.6" opacity="0.3" />
        <path
          d="M35 24h8M53 20h8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.3"
        />
        <circle cx="30" cy="24" r="1.6" fill="currentColor" opacity="0.45" />
        <circle cx="48" cy="18" r="1.6" fill="currentColor" opacity="0.45" />
        <circle cx="66" cy="24" r="1.6" fill="currentColor" opacity="0.45" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 96 72" className={common} fill="none" aria-hidden>
      <path
        d="M10 46c10-14 28-22 46-18 10 2 18 8 24 4 1 5-2 10-9 12-14 4-30 7-44 2-8-3-14-4-17 0"
        fill="currentColor"
        opacity="0.22"
      />
      <path
        d="M58 38c6-8 16-12 26-10 2 0 3 2 2 4-3 7-9 12-16 14-2 1-5 0-6-2-1-2 0-4-6-6z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M28 28c0-8 6-14 14-14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.35"
      />
      <circle cx="46" cy="14" r="3" fill="currentColor" opacity="0.4" />
      <path
        d="M22 52c6 4 14 6 24 6s18-2 24-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.25"
      />
    </svg>
  );
}

export function WhyKuct() {
  const { t } = useLocale();
  const { reasons } = t.why;

  return (
    <section
      id="why"
      className="scroll-mt-20 py-24"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
            <BrandText size="xs">{t.why.eyebrow}</BrandText>
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            <AccentText>{t.why.title}</AccentText>
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--kuct-muted)]">
            {t.why.support}
          </p>
        </Reveal>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {reasons.map((reason, index) => {
            const artId = REASON_IDS[index] ?? "experience";

            return (
              <Reveal
                as="li"
                key={reason.title}
                delay={index * 70}
                className="group kuct-glass kuct-card-hover relative overflow-hidden rounded-2xl p-6"
              >
                <div className="relative z-10 max-w-[calc(100%-5.5rem)]">
                  <h3 className="font-display text-xl font-medium text-[var(--kuct-text)]">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                    {reason.body}
                  </p>
                </div>
                <div
                  className="pointer-events-none absolute -bottom-1 -right-1 size-[5.75rem] opacity-90 transition duration-300 group-hover:opacity-100 sm:size-28"
                  aria-hidden
                >
                  <WhyArt id={artId} />
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
