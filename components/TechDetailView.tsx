"use client";

import Link from "next/link";
import { LazyImage } from "@/components/LazyImage";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
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
 ? "relative overflow-hidden py-10 sm:py-12"
 : "relative overflow-hidden py-16 sm:py-20"
 }
 >
 <div className="pointer-events-none absolute inset-0 kuct-hero-wash" aria-hidden />
 <div className="relative mx-auto max-w-6xl px-6">
 {!embedded ? (
 <Link
 href="/#stack"
 className="kuct-link inline-flex text-sm font-medium text-[var(--kuct-muted)]"
 >
 {ui.back}
 </Link>
 ) : null}
 <Reveal delay={80} variant="right">
 <div
 className={`${embedded ? "mt-0" : "mt-6"} relative aspect-[16/9] max-w-3xl overflow-hidden rounded-xl shadow-[0_1rem_2.5rem_rgba(139,92,246,0.12)]`}
 >
 <LazyImage
 src={hero}
 alt={detail.name}
 fill
 className="object-cover"
 sizes="(max-width: 768px) 100vw, 48rem"
 />
 </div>
 </Reveal>
 <Reveal>
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
 </Reveal>
 </div>
 </section>

 <section className={embedded ? "py-10 sm:py-12" : "py-16 sm:py-20"}>
 <div className="mx-auto max-w-6xl px-6">
 <Reveal>
 <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
 {ui.highlightsTitle}
 </h2>
 <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
 {detail.highlights.map((item) => (
 <li key={item}>{item}</li>
 ))}
 </ul>
 </Reveal>

 <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
 <Reveal className="h-full">
 <div className="kuct-glass h-full rounded-xl p-6">
 <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
 {xui.whenToUseTitle}
 </h2>
 <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--kuct-muted)]">
 {extras.whenToUse.map((item) => (
 <li key={item}>{item}</li>
 ))}
 </ul>
 </div>
 </Reveal>
 <Reveal delay={60} className="h-full">
 <div className="kuct-glass h-full rounded-xl p-6">
 <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
 {xui.stackFitTitle}
 </h2>
 <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
 {extras.stackFit}
 </p>
 </div>
 </Reveal>
 </div>

 <Reveal>
 <h2 className="mt-10 font-display text-lg font-semibold text-[var(--kuct-text)]">
 {ui.featuresTitle}
 </h2>
 </Reveal>
 <ul className="mt-6 grid gap-4 sm:grid-cols-3">
 {detail.features.map((feature, index) => (
 <Reveal
 key={feature.title}
 as="li"
 delay={40 + index * 40}
 className="kuct-glass kuct-card-hover rounded-xl p-5"
 >
 <h3 className="font-display text-base font-semibold text-[var(--kuct-text)]">
 {feature.title}
 </h3>
 <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
 {feature.body}
 </p>
 </Reveal>
 ))}
 </ul>

 <Reveal className="mt-10">
 <a
 href={detail.officialUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold"
 >
 {ui.visitOfficial}
 </a>
 </Reveal>
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
