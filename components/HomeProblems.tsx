"use client";

import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { routePath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";

function ProblemIcon({ index }: { index: number }) {
  const cls = "size-9 shrink-0";
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
        <circle cx="12" cy="10" r="5.25" stroke="currentColor" strokeWidth="1.35" />
        <path
          d="M12 7.4V10l2 1.2"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 18.2c1.4-2.2 3.4-3.3 7-3.3s5.6 1.1 7 3.3"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
        <path
          d="M4.5 8.8c0-2 1.9-3.6 4.3-3.6h2.4c2.4 0 4.3 1.6 4.3 3.6S13.6 12.4 11.2 12.4H9.5L7 14.2v-2.1c-.9-.5-1.5-1.5-1.5-2.6z"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinejoin="round"
        />
        <circle cx="17.2" cy="14.2" r="2.1" stroke="currentColor" strokeWidth="1.35" />
        <path
          d="M13.8 19.2c.5-1.4 1.7-2.2 3.4-2.2s2.9.8 3.4 2.2"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
        <rect
          x="3.5"
          y="4.5"
          width="17"
          height="15"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.35"
        />
        <path d="M3.5 8.2h17" stroke="currentColor" strokeWidth="1.35" />
        <path
          d="M8 16.2v-3.2M12 16.2V10.8M16 16.2v-2.2"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (index === 3) {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
        <rect
          x="3.2"
          y="3.2"
          width="6.2"
          height="6.2"
          rx="1.3"
          stroke="currentColor"
          strokeWidth="1.35"
        />
        <rect
          x="14.6"
          y="3.2"
          width="6.2"
          height="6.2"
          rx="1.3"
          stroke="currentColor"
          strokeWidth="1.35"
        />
        <rect
          x="3.2"
          y="14.6"
          width="6.2"
          height="6.2"
          rx="1.3"
          stroke="currentColor"
          strokeWidth="1.35"
        />
        <rect
          x="14.6"
          y="14.6"
          width="6.2"
          height="6.2"
          rx="1.3"
          stroke="currentColor"
          strokeWidth="1.35"
        />
        <path
          d="M9.4 6.3h5.2M6.3 9.4v5.2M17.7 9.4v5.2M9.4 17.7h5.2"
          stroke="currentColor"
          strokeWidth="1.35"
        />
      </svg>
    );
  }
  if (index === 4) {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
        <circle cx="8" cy="7.2" r="2.2" stroke="currentColor" strokeWidth="1.35" />
        <circle cx="16" cy="7.2" r="2.2" stroke="currentColor" strokeWidth="1.35" />
        <circle cx="12" cy="13.2" r="2.2" stroke="currentColor" strokeWidth="1.35" />
        <path
          d="M4.2 17.8c.6-1.7 2-2.7 3.8-2.7M19.8 17.8c-.6-1.7-2-2.7-3.8-2.7M9 16.8c.7-.5 1.7-.8 3-.8s2.3.3 3 .8"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={cls} fill="none" aria-hidden>
      <path
        d="M12 2.8l.85 2.4L15.25 6l-2.4.85L12 9.25l-.85-2.4L8.75 6l2.4-.8L12 2.8z"
        stroke="currentColor"
        strokeWidth="1.35"
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
      <path
        d="M9.5 14.5h5M12 12v5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Six operational pains — ElevenLabs-style: title + pill CTA, 2-col icon rows (no cards). */
export function HomeProblems() {
  const { t } = useLocale();
  const problems = t.problems;
  if (!problems) return null;

  return (
    <section
      id="problems"
      className="kuct-cv-auto scroll-mt-20 py-16 sm:py-20 lg:py-24"
      aria-labelledby="home-problems-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal variant="title">
          <div className="max-w-xl">
            <h2
              id="home-problems-heading"
              className="max-w-[18ch] font-display text-[1.65rem] font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]"
            >
              <AccentText>{problems.title}</AccentText>
            </h2>
            <a
              href="#contact"
              className="kuct-btn-primary mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold no-underline sm:mt-7"
            >
              {problems.cta}
            </a>
            <p className="sr-only">{problems.support}</p>
          </div>
        </Reveal>

        <ul className="mt-14 grid list-none grid-cols-1 gap-x-16 gap-y-12 p-0 sm:mt-16 sm:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
          {problems.items.map((item, i) => {
            const href = routePath(
              item.href.endsWith("/") ? item.href : `${item.href}/`,
            );
            return (
              <Reveal as="li" key={item.title} delay={i * 30}>
                <article>
                  <a
                    href={href}
                    className="group block max-w-[36ch] no-underline"
                  >
                    <span className="inline-flex text-[var(--kuct-muted)] transition group-hover:text-[var(--kuct-text)]">
                      <ProblemIcon index={i} />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-tight text-[var(--kuct-text)] sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.7] text-[var(--kuct-muted)] sm:text-[0.95rem]">
                      {item.body}
                    </p>
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
