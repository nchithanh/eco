"use client";

import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { routePath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";

/** Six operational pains → existing product/service URLs (DI Why grid style). */
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
        <Reveal variant="title" className="mx-auto max-w-3xl text-center">
          <p className="kuct-section-eyebrow">{problems.eyebrow}</p>
          <h2
            id="home-problems-heading"
            className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]"
          >
            <AccentText>{problems.title}</AccentText>
          </h2>
          <p className="mx-auto mt-4 max-w-[64ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
            {problems.support}
          </p>
        </Reveal>

        <ul className="mt-12 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {problems.items.map((item, i) => {
            const href = routePath(
              item.href.endsWith("/") ? item.href : `${item.href}/`,
            );
            return (
              <Reveal as="li" key={item.title} delay={i * 30} className="h-full">
                <article className="h-full">
                  <a
                    href={href}
                    className="flex h-full flex-col rounded-[10px] border border-[var(--kuct-border)] bg-[var(--kuct-surface)] p-6 no-underline transition hover:border-[var(--kuct-accent)]/50"
                  >
                    <p className="text-xs font-semibold tracking-wide text-[var(--kuct-accent)] uppercase">
                      {item.solution}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-[var(--kuct-text)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
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
