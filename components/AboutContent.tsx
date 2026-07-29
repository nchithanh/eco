"use client";

import { AccentText } from "@/components/BrandName";
import { LazyImage } from "@/components/LazyImage";
import { Reveal } from "@/components/Reveal";
import { useQuote } from "@/components/QuoteProvider";
import { assetPath } from "@/lib/asset";
import { getAboutCopy } from "@/lib/i18n/about-copy";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const CONTACTS = {
  email: "mailto:nchithanh9999@gmail.com",
  zalo: "https://zalo.me/0779937633",
  github: "https://github.com/nchithanh",
  linkedin: "https://www.linkedin.com/in/thanh-chi-372343246/",
} as const;

export function AboutContent() {
  const { locale } = useLocale();
  const a = getAboutCopy(locale);
  const { openQuote } = useQuote();

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-[var(--kuct-border)] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(var(--kuct-accent-rgb),0.1)] via-transparent to-[rgba(var(--kuct-accent-rgb),0.04)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <Reveal variant="left">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
              {a.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[var(--kuct-text)] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
              {a.name}
            </h1>
            <p className="mt-2 text-sm font-medium tracking-wide text-[var(--kuct-muted)]">
              {a.role} · {a.location}
            </p>
            <p className="mt-6 max-w-[28ch] font-display text-xl font-semibold leading-snug tracking-tight text-[var(--kuct-text)] sm:text-2xl">
              <AccentText>{a.motto}</AccentText>
            </p>
            <p className="mt-5 max-w-[48ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
              {a.support}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={openQuote}
                className="kuct-btn-primary inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold"
              >
                {a.ctaPrimary}
              </button>
              <a
                href={CONTACTS.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-[var(--kuct-border)] px-6 py-3 text-sm font-medium text-[var(--kuct-muted)] transition hover:border-[var(--kuct-accent)]/45 hover:text-[var(--kuct-text)]"
              >
                {a.ctaSecondary}
              </a>
            </div>
            <ul className="mt-6 flex list-none flex-wrap gap-x-4 gap-y-2 p-0 text-sm text-[var(--kuct-muted)]">
              <li>
                <a
                  href={CONTACTS.email}
                  className="transition hover:text-[var(--kuct-accent)]"
                >
                  {a.links.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACTS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[var(--kuct-accent)]"
                >
                  {a.links.github}
                </a>
              </li>
              <li>
                <a
                  href={CONTACTS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[var(--kuct-accent)]"
                >
                  {a.links.linkedin}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal variant="right" delay={100} className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] ring-1 ring-[var(--kuct-accent)]/20">
              <div className="pointer-events-none absolute inset-[18%] rounded-full opacity-50 blur-3xl kuct-glow-orb" />
              <LazyImage
                src={assetPath("/avatar.png")}
                alt={`${a.name} — ${a.role}`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 24rem, 28rem"
                watermark={false}
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
              {a.mindsetEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem]">
              <AccentText>{a.mindsetTitle}</AccentText>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {a.mindset.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 60}
                className={
                  index === 2
                    ? "rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] p-5 ring-1 ring-[var(--kuct-accent)]/25 backdrop-blur-md sm:p-6"
                    : "rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.72)] p-5 backdrop-blur-md sm:p-6"
                }
              >
                <p className="font-display text-sm font-semibold tracking-wide text-[var(--kuct-text)]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-20 border-t border-[var(--kuct-border)] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
              {a.experienceEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem]">
              <AccentText>{a.experienceTitle}</AccentText>
            </h2>
            <p className="mt-5 max-w-[48ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
              {a.experienceSupport}
            </p>
          </Reveal>

          <ol className="relative mt-12 list-none space-y-5 p-0">
            <span
              aria-hidden
              className="pointer-events-none absolute top-3 bottom-3 left-[1.05rem] hidden w-px bg-[rgba(var(--kuct-accent-rgb),0.28)] sm:block sm:left-[1.15rem]"
            />
            {a.experiences.map((exp, index) => (
              <Reveal
                as="li"
                key={exp.company}
                delay={index * 50}
                className="relative sm:pl-14"
              >
                <span
                  aria-hidden
                  className="absolute top-5 left-0 hidden size-8 place-items-center rounded-full border border-[var(--kuct-border)] bg-[rgba(8,8,16,0.95)] text-[0.65rem] font-semibold tabular-nums text-[var(--kuct-accent)] sm:grid"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <article
                  className={
                    index === 0
                      ? "rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] p-5 ring-1 ring-[var(--kuct-accent)]/20 backdrop-blur-md sm:p-6"
                      : "rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.72)] p-5 backdrop-blur-md sm:p-6"
                  }
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
                      {exp.company}
                    </h3>
                    <p className="text-xs font-medium tabular-nums text-[var(--kuct-muted)]">
                      {exp.period}
                    </p>
                  </div>
                  <p className="mt-1 text-sm font-medium text-[var(--kuct-accent)]/90">
                    {exp.role}
                  </p>
                  <p className="mt-1 text-xs tracking-wide text-[var(--kuct-muted)]">
                    {exp.focus}
                  </p>
                  <ul className="mt-4 list-none space-y-2 p-0">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-2.5 text-sm leading-relaxed text-[var(--kuct-muted)]"
                      >
                        <span
                          aria-hidden
                          className="mt-2 size-1 shrink-0 rounded-full bg-[var(--kuct-accent)]/70"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
                    {exp.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.75)] px-2.5 py-1 text-[11px] font-semibold text-[var(--kuct-muted)]"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="scroll-mt-20 border-t border-[var(--kuct-border)] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
              {a.focusEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem]">
              <AccentText>{a.focusTitle}</AccentText>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {a.focusItems.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 50}
                className="rounded-2xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.72)] p-5 backdrop-blur-md sm:p-6"
              >
                <p className="font-display text-sm font-semibold tracking-wide text-[var(--kuct-text)]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-[var(--kuct-muted)] uppercase">
              {a.skillsLabel}
            </p>
            <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
              {a.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-[var(--kuct-border)] bg-[rgba(10,10,22,0.75)] px-3 py-1.5 text-xs font-semibold text-[var(--kuct-muted)]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="scroll-mt-20 border-t border-[var(--kuct-border)] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="rounded-[1.75rem] border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] px-6 py-10 text-center ring-1 ring-[var(--kuct-accent)]/15 backdrop-blur-md sm:px-10 sm:py-12">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
              {a.ctaEyebrow}
            </p>
            <h2 className="mx-auto mt-4 max-w-[22ch] font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem]">
              <AccentText>{a.ctaTitle}</AccentText>
            </h2>
            <p className="mx-auto mt-5 max-w-[40ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
              {a.ctaSupport}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={openQuote}
                className="kuct-btn-primary inline-flex items-center rounded-full px-8 py-3.5 text-sm font-semibold"
              >
                {a.ctaPrimary}
              </button>
              <a
                href={CONTACTS.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-[var(--kuct-border)] px-6 py-3 text-sm font-medium text-[var(--kuct-muted)] transition hover:border-[var(--kuct-accent)]/45 hover:text-[var(--kuct-text)]"
              >
                {a.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
