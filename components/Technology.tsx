"use client";

import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { routePath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";

function CardIcon({ id }: { id: "agents" | "automation" | "integration" }) {
  const common = "size-5 text-[var(--kuct-accent)]";
  if (id === "agents") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="9" cy="8" r="2.25" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M4.5 18.5c.6-2.4 2.6-3.8 4.5-3.8s3.9 1.4 4.5 3.8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M13.2 15.2c.7-.9 1.8-1.5 3-1.5 1.5 0 2.8.9 3.3 2.3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (id === "automation") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="6" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8 7h8M7.5 8.5 3.5 15M16.5 8.5 20.5 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 7h8v3.2l2.2 1.6V17H5.8v-5.2L8 10.2V7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10 7V5.5h4V7M9 17v2M15 17v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Technology() {
  const { t } = useLocale();
  const tech = t.technology;
  const transformHref = routePath("/ai-transform/");

  return (
    <section
      id="technology"
      className="relative scroll-mt-20 overflow-hidden py-24"
      aria-labelledby="home-technology-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal variant="title">
          <p className="kuct-type-eyebrow text-[11px] sm:text-xs">{tech.eyebrow}</p>
          <h2
            id="home-technology-heading"
            className="kuct-type-h2 mt-4 max-w-3xl text-3xl text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem]"
          >
            <AccentText>{tech.title}</AccentText>
          </h2>
          <p className="mt-3 max-w-[48ch] text-sm font-semibold tracking-wide text-[var(--kuct-accent)] sm:text-base">
            {tech.roadmap}
          </p>
          <p className="kuct-type-body mt-4 max-w-[52ch] text-base">{tech.support}</p>
        </Reveal>

        <ul className="mt-12 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-3">
          {tech.items.map((item, index) => (
            <Reveal
              as="li"
              key={item.id}
              delay={index * 55}
              className="kuct-surface-card flex flex-col p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="grid size-10 place-items-center rounded-lg bg-[var(--kuct-panel-2)]">
                  <CardIcon id={item.id} />
                </span>
                <span className="rounded-[10px] bg-[var(--kuct-panel-2)] px-2 py-0.5 text-[10px] font-semibold tracking-wide text-[var(--kuct-muted)] uppercase">
                  {item.tag}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-[var(--kuct-text)]">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
                {item.body}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120} className="mt-10 max-w-3xl">
          <p className="text-sm leading-relaxed text-[var(--kuct-muted)]">{tech.note}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={transformHref}
              className="kuct-btn-primary inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold"
            >
              {tech.ctaPrimary}
            </Link>
            <Link
              href={transformHref}
              className="kuct-btn-ghost inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold"
            >
              {tech.ctaSecondary}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
