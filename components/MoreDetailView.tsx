"use client";

import Link from "next/link";
import { LazyImage } from "@/components/LazyImage";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { usePagePreview } from "@/components/PagePreviewProvider";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import {
 getMoreDetail,
 getMoreDetailUi,
 type MoreSlug,
} from "@/lib/more-details";
import { themeAsset } from "@/lib/asset";
import { useTheme } from "@/lib/theme";

export function MoreDetailContent({
 slug,
 embedded = false,
}: {
 slug: MoreSlug;
 embedded?: boolean;
}) {
 const { locale } = useLocale();
 const { theme } = useTheme();
 const { close } = usePagePreview();
 const detail = getMoreDetail(locale, slug);
 const ui = getMoreDetailUi(locale);

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
 href="/"
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
 src={themeAsset(detail.image, theme)}
 alt={detail.title}
 fill
 className="object-cover"
 sizes="(max-width: 768px) 100vw, 48rem"
 />
 <span className="absolute left-4 top-4 rounded-full bg-[var(--kuct-panel)] px-3 py-1 text-[0.65rem] font-semibold tracking-[0.12em] text-[var(--kuct-text)] uppercase shadow-sm backdrop-blur-md">
 {detail.tag}
 </span>
 </div>
 </Reveal>
 <Reveal>
 <h1 className="mt-6 max-w-3xl font-display text-3xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-4xl md:text-5xl">
 {detail.title}
 </h1>
 <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--kuct-muted)] sm:text-lg">
 {detail.intro}
 </p>
 </Reveal>
 </div>
 </section>

 <section className={embedded ? "py-10 sm:py-12" : "py-16 sm:py-20"}>
 <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2 lg:items-stretch">
 <Reveal className="h-full">
 <div className="kuct-glass h-full rounded-xl p-6">
 <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
 {ui.highlightsTitle}
 </h2>
 <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
 {detail.highlights.map((item) => (
 <li key={item}>{item}</li>
 ))}
 </ul>
 </div>
 </Reveal>
 <Reveal delay={60} className="h-full">
 <div className="kuct-glass h-full rounded-xl p-6">
 <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
 {ui.processTitle}
 </h2>
 <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
 {detail.process.map((item) => (
 <li key={item}>{item}</li>
 ))}
 </ul>
 </div>
 </Reveal>
 </div>

 <div className="mx-auto mt-10 max-w-6xl px-6">
 <Reveal>
 <div className="kuct-glass rounded-xl p-6">
 <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
 {ui.notesTitle}
 </h2>
 <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
 {detail.notes.map((item) => (
 <li key={item}>{item}</li>
 ))}
 </ul>
 </div>
 </Reveal>
 </div>

 <Reveal className="mx-auto mt-12 max-w-6xl px-6">
 <Link
 href="/#contact"
 className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold"
 onClick={() => {
 if (embedded) close();
 }}
 >
 {ui.cta}
 </Link>
 </Reveal>
 </section>
 </div>
 );
}

export function MoreDetailView({ slug }: { slug: MoreSlug }) {
 return (
 <main>
 <Nav />
 <MoreDetailContent slug={slug} />
 <Footer />
 </main>
 );
}
