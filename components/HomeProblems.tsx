"use client";

import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { routePath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";

function ProblemIcon({ index }: { index: number }) {
  const cls = "size-10 shrink-0";
  if (index === 0) {
    /* Clock + cupped hands — automation / manual work */
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
        <circle cx="12" cy="10" r="5.25" stroke="currentColor" strokeWidth="1.55" />
        <path
          d="M12 7.4V10l2 1.2"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 18.2c1.4-2.2 3.4-3.3 7-3.3s5.6 1.1 7 3.3"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
        <path
          d="M3.8 20.2c.9-1.1 2.2-1.7 3.7-1.7M20.2 20.2c-.9-1.1-2.2-1.7-3.7-1.7"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (index === 1) {
    /* Chat + person — CRM / Care */
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
        <path
          d="M4.5 8.8c0-2 1.9-3.6 4.3-3.6h2.4c2.4 0 4.3 1.6 4.3 3.6S13.6 12.4 11.2 12.4H9.5L7 14.2v-2.1c-.9-.5-1.5-1.5-1.5-2.6z"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinejoin="round"
        />
        <circle cx="17.2" cy="14.2" r="2.1" stroke="currentColor" strokeWidth="1.55" />
        <path
          d="M13.8 19.2c.5-1.4 1.7-2.2 3.4-2.2s2.9.8 3.4 2.2"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
        <path
          d="M14.8 11.6c.9.9 2.1 1.4 3.5 1.4"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (index === 2) {
    /* Browser + bars — website */
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
        <rect
          x="3.5"
          y="4.5"
          width="17"
          height="15"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.55"
        />
        <path d="M3.5 8.2h17" stroke="currentColor" strokeWidth="1.55" />
        <circle cx="6.2" cy="6.35" r="0.7" fill="currentColor" />
        <circle cx="8.4" cy="6.35" r="0.7" fill="currentColor" />
        <path
          d="M8 16.2v-3.2M12 16.2V10.8M16 16.2v-2.2"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (index === 3) {
    /* Connected nodes — integrations */
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
        <rect
          x="3.2"
          y="3.2"
          width="6.2"
          height="6.2"
          rx="1.3"
          stroke="currentColor"
          strokeWidth="1.55"
        />
        <rect
          x="14.6"
          y="3.2"
          width="6.2"
          height="6.2"
          rx="1.3"
          stroke="currentColor"
          strokeWidth="1.55"
        />
        <rect
          x="3.2"
          y="14.6"
          width="6.2"
          height="6.2"
          rx="1.3"
          stroke="currentColor"
          strokeWidth="1.55"
        />
        <rect
          x="14.6"
          y="14.6"
          width="6.2"
          height="6.2"
          rx="1.3"
          stroke="currentColor"
          strokeWidth="1.55"
        />
        <path
          d="M9.4 6.3h5.2M6.3 9.4v5.2M17.7 9.4v5.2M9.4 17.7h5.2"
          stroke="currentColor"
          strokeWidth="1.55"
        />
      </svg>
    );
  }
  if (index === 4) {
    /* Three people — human dependency */
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
        <circle cx="8" cy="7.2" r="2.2" stroke="currentColor" strokeWidth="1.55" />
        <circle cx="16" cy="7.2" r="2.2" stroke="currentColor" strokeWidth="1.55" />
        <circle cx="12" cy="13.2" r="2.2" stroke="currentColor" strokeWidth="1.55" />
        <path
          d="M4.2 17.8c.6-1.7 2-2.7 3.8-2.7M19.8 17.8c-.6-1.7-2-2.7-3.8-2.7M9 16.8c.7-.5 1.7-.8 3-.8s2.3.3 3 .8"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
        <path
          d="M4.2 20.2c.4-.9 1.2-1.4 2.2-1.4M19.8 20.2c-.4-.9-1.2-1.4-2.2-1.4"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  /* AI + sparkles */
  return (
    <span className="relative inline-flex size-10 items-end justify-center" aria-hidden>
      <svg viewBox="0 0 24 24" className="absolute inset-0 size-10" fill="none">
        <path
          d="M12 2.8l.85 2.4L15.25 6l-2.4.85L12 9.25l-.85-2.4L8.75 6l2.4-.8L12 2.8z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M18.6 9.2l.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5 1.4-.5.5-1.4z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
        <path
          d="M5 10l.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5 1.4-.5.5-1.4z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
      </svg>
      <span className="relative mb-0.5 text-sm font-bold leading-none tracking-tight text-current">
        AI
      </span>
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="size-4 shrink-0"
      fill="none"
    >
      <path
        d="M5 12h12M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Six operational pains → product/service URLs (Jasper white cards + violet accent). */
export function HomeProblems() {
  const { t } = useLocale();
  const problems = t.problems;
  if (!problems) return null;

  return (
    <section
      id="problems"
      className="scroll-mt-20 py-20 sm:py-24"
      aria-labelledby="home-problems-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal variant="title" className="mx-auto max-w-2xl text-center">
          <p className="kuct-section-eyebrow">{problems.eyebrow}</p>
          <h2
            id="home-problems-heading"
            className="mx-auto mt-4 max-w-xl font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]"
          >
            <AccentText>{problems.title}</AccentText>
          </h2>
          <p className="mx-auto mt-4 max-w-[64ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
            {problems.support}
          </p>
        </Reveal>

        <ul className="kuct-problems-grid mt-12 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {problems.items.map((item, i) => {
            const href = routePath(
              item.href.endsWith("/") ? item.href : `${item.href}/`,
            );
            return (
              <Reveal as="li" key={item.title} delay={i * 30} className="h-full">
                <article className="h-full">
                  <a
                    href={href}
                    className="kuct-problem-card group flex h-full flex-col no-underline"
                  >
                    <div className="relative z-[1] flex flex-1 flex-col py-6 pr-6 pl-5 sm:pl-5">
                      <span className="kuct-problem-card__icon self-start text-[var(--kuct-accent)]">
                        <ProblemIcon index={i} />
                      </span>
                      <p className="mt-4 text-[10px] font-semibold tracking-[0.16em] text-[var(--kuct-accent)] uppercase">
                        {item.solution}
                      </p>
                      <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-[var(--kuct-text)] sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
                        {item.body}
                      </p>
                      <span className="mt-5 self-end text-[var(--kuct-accent)]">
                        <ArrowIcon />
                      </span>
                    </div>
                  </a>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
