"use client";

import { AccentText, BrandText, hasBrand } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const REASON_IDS = [
  "experience",
  "delivery",
  "process",
  "support",
] as const;

type ReasonId = (typeof REASON_IDS)[number];

function WhyIcon({ id }: { id: ReasonId }) {
  const common = {
    "aria-hidden": true as const,
    viewBox: "0 0 24 24",
    className: "size-5 text-[var(--kuct-accent)]",
    fill: "none" as const,
  };
  const stroke = {
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (id === "experience") {
    return (
      <svg {...common}>
        <path d="M12 3l2.2 4.5L19 8.2l-3.5 3.4.8 4.9L12 14.2 7.7 16.5l.8-4.9L5 8.2l4.8-.7L12 3Z" {...stroke} />
      </svg>
    );
  }

  if (id === "delivery") {
    return (
      <svg {...common}>
        <path d="M4 7h11l5 5v5H4V7Z" {...stroke} />
        <path d="M15 7v5h5" {...stroke} />
      </svg>
    );
  }

  if (id === "process") {
    return (
      <svg {...common}>
        <circle cx="6" cy="12" r="2.25" {...stroke} />
        <circle cx="12" cy="12" r="2.25" {...stroke} />
        <circle cx="18" cy="12" r="2.25" {...stroke} />
        <path d="M8.3 12h1.4M14.3 12h1.4" {...stroke} />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 20v-7" {...stroke} />
      <path d="M7 9a5 5 0 0 1 10 0c0 3-2.5 4.5-5 6.5C9.5 13.5 7 12 7 9Z" {...stroke} />
    </svg>
  );
}

export function WhyKuct() {
  const { t } = useLocale();
  const { eyebrow, title, support, promise, reasons } = t.why;

  return (
    <section
      id="why"
      className="scroll-mt-20 py-24"
      aria-labelledby="home-why-heading"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal variant="title">
          <p className="kuct-type-eyebrow text-[11px] sm:text-xs">
            {hasBrand(eyebrow) ? (
              <BrandText size="xs">{eyebrow}</BrandText>
            ) : (
              eyebrow
            )}
          </p>
          <h2
            id="home-why-heading"
            className="kuct-type-h2 mt-4 max-w-3xl text-3xl sm:text-[2.15rem] lg:text-[2.35rem]"
          >
            <AccentText>{title}</AccentText>
          </h2>
          <p className="kuct-type-body mt-5 max-w-[52ch] text-base">
            {support}
          </p>
          {promise ? (
            <p className="mt-6 max-w-3xl text-sm font-medium tracking-wide text-[var(--kuct-text)]">
              {promise}
            </p>
          ) : null}
        </Reveal>

        <ul className="mt-12 grid list-none grid-cols-1 gap-0 divide-y divide-[var(--kuct-border)] border-y border-[var(--kuct-border)] p-0 sm:mt-14 sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
          {reasons.map((reason, index) => {
            const artId = REASON_IDS[index % REASON_IDS.length] ?? "experience";

            return (
              <Reveal
                as="li"
                key={reason.title}
                delay={index * 40}
                className="group flex flex-col gap-3 px-0 py-6 sm:px-5 sm:py-7 lg:px-4 xl:px-5"
              >
                <span
                  className="grid size-9 place-items-center rounded-[10px] border border-[var(--kuct-border)] bg-[var(--kuct-surface)]"
                  aria-hidden
                >
                  <WhyIcon id={artId} />
                </span>
                <h3 className="font-display text-base font-semibold leading-snug text-[var(--kuct-text)] sm:text-lg">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {reason.body}
                </p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
