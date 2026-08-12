"use client";

import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { routePath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";

function CardIcon({ id }: { id: "agent" | "action" | "human" }) {
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

  if (id === "agent") {
    return (
      <svg {...common}>
        <path
          d="M12 4.5 13.2 8h3.8l-3.1 2.2 1.2 3.7L12 12.8 8.9 14l1.2-3.7L7 8h3.8L12 4.5Z"
          {...stroke}
          strokeWidth={1.4}
        />
        <path d="M5 18h14M8 21h8" {...stroke} />
      </svg>
    );
  }
  if (id === "action") {
    return (
      <svg {...common}>
        <circle cx="6" cy="7" r="2" {...stroke} />
        <circle cx="18" cy="7" r="2" {...stroke} />
        <circle cx="12" cy="17" r="2" {...stroke} />
        <path d="M8 7h8M7.5 8.5 3.5 15M16.5 8.5 20.5 15" {...stroke} />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M9 11.5 11 13.5 15.5 9" {...stroke} />
      <rect x="4.5" y="4.5" width="15" height="15" rx="3" {...stroke} />
    </svg>
  );
}

export function AiEdge() {
  const { t } = useLocale();
  const copy = t.aiEdge;
  const detailHref = routePath("/dolphin-intelligence/");

  return (
    <section
      id="ai-edge"
      className="scroll-mt-20 py-24"
      aria-labelledby="home-ai-edge-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal variant="title">
              <p className="kuct-type-eyebrow inline-flex items-center gap-2 text-[11px] sm:text-xs">
                <span
                  aria-hidden
                  className="inline-block size-1.5 rounded-full bg-[var(--kuct-accent)]"
                />
                {copy.eyebrow}
              </p>
              <p className="mt-3 inline-flex rounded-[10px] bg-[rgba(var(--kuct-accent-rgb),0.1)] px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[var(--kuct-accent)] uppercase">
                {copy.badge}
              </p>
              <h2
                id="home-ai-edge-heading"
                className="kuct-type-h2 mt-5 max-w-[22ch] text-3xl sm:text-[2.15rem] lg:text-[2.35rem]"
              >
                <AccentText>{copy.title}</AccentText>
              </h2>
              <p className="kuct-type-body mt-5 max-w-[40ch] text-base">
                {copy.support}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={detailHref}
                  className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3 text-sm"
                >
                  {copy.ctaPrimary}
                </Link>
                <Link
                  href={routePath("/ai-transform/")}
                  className="kuct-btn-ghost inline-flex items-center self-center"
                >
                  {copy.ctaSecondary}
                </Link>
              </div>
            </Reveal>
          </div>

          <ul className="flex list-none flex-col gap-4 p-0 sm:gap-5">
            {copy.items.map((item, index) => (
              <Reveal
                as="li"
                key={item.id}
                delay={Math.min(index * 40, 160)}
              >
                <article className="kuct-surface-card p-5 sm:p-6">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-[10px] border border-[var(--kuct-border)] bg-white">
                      <CardIcon id={item.id} />
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <p className="text-[10px] font-semibold tracking-wide text-[var(--kuct-muted)] uppercase">
                        {item.tag}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-[var(--kuct-text)] sm:text-xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--kuct-text)] sm:mt-5">
                    {item.body}
                  </p>

                  <div className="mt-5 border-t border-dashed border-[var(--kuct-border)] pt-4">
                    <Link
                      href={detailHref}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--kuct-text)] transition hover:text-[var(--kuct-accent)]"
                    >
                      {copy.learnMore}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
