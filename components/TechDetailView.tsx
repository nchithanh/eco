"use client";

import Link from "next/link";
import { LazyImage } from "@/components/LazyImage";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import {
  getTechDetail,
  getTechDetailUi,
  type TechSlug,
} from "@/lib/tech-stack";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import {
  getDetailExtrasUi,
  getTechExtras,
  techHero,
} from "@/lib/detail-extras";
import { useTheme } from "@/lib/theme";

export function TechDetailContent({
  slug,
  embedded = false,
}: {
  slug: TechSlug;
  embedded?: boolean;
}) {
  const { locale } = useLocale();
  const { theme } = useTheme();
  const detail = getTechDetail(locale, slug);
  const ui = getTechDetailUi(locale);
  const extras = getTechExtras(locale, slug);
  const xui = getDetailExtrasUi(locale);
  const hero = techHero(slug, theme);

  return (
    <div>
      <section
        className={
          embedded
            ? "relative overflow-hidden border-b border-[var(--kuct-border)] py-10 sm:py-12"
            : "relative overflow-hidden border-b border-[var(--kuct-border)] py-16 sm:py-20"
        }
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(var(--kuct-accent-rgb),0.08)] via-transparent to-[rgba(var(--kuct-accent-rgb),0.05)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          {!embedded ? (
            <Link
              href="/#stack"
              className="kuct-link inline-flex text-sm font-medium text-[var(--kuct-muted)]"
            >
              {ui.back}
            </Link>
          ) : null}
          <div
            className={`${embedded ? "mt-0" : "mt-6"} relative aspect-[16/9] max-w-3xl overflow-hidden rounded-2xl border border-[var(--kuct-border)] shadow-[0_1rem_2.5rem_rgba(139,92,246,0.12)]`}
          >
            <LazyImage
              src={hero}
              alt={detail.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 48rem"
            />
          </div>
          <p
            className="mt-6 text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: detail.color }}
          >
            {detail.name}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-4xl md:text-5xl">
            {detail.tagline}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--kuct-muted)] sm:text-lg">
            {detail.intro}
          </p>
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-[var(--kuct-muted)]/80">
            {ui.sourceNote}
          </p>
        </div>
      </section>

      <section className={embedded ? "py-10 sm:py-12" : "py-16 sm:py-20"}>
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
            {ui.highlightsTitle}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
            {detail.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="kuct-glass rounded-2xl p-6">
              <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
                {xui.whenToUseTitle}
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--kuct-muted)]">
                {extras.whenToUse.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="kuct-glass rounded-2xl p-6">
              <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
                {xui.stackFitTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
                {extras.stackFit}
              </p>
            </div>
          </div>

          <h2 className="mt-10 font-display text-lg font-semibold text-[var(--kuct-text)]">
            {ui.featuresTitle}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {detail.features.map((feature) => (
              <li
                key={feature.title}
                className="kuct-glass kuct-card-hover rounded-2xl p-5"
              >
                <h3 className="font-display text-base font-semibold text-[var(--kuct-text)]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
                  {feature.body}
                </p>
              </li>
            ))}
          </ul>

          <a
            href={detail.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="kuct-btn-primary mt-10 inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold"
          >
            {ui.visitOfficial}
          </a>
        </div>
      </section>
    </div>
  );
}

export function TechDetailView({ slug }: { slug: TechSlug }) {
  return (
    <main>
      <Nav />
      <TechDetailContent slug={slug} />
      <Footer />
    </main>
  );
}
