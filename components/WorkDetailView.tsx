"use client";

import Link from "next/link";
import { useState } from "react";
import { DesignViewerModal } from "@/components/DesignViewerModal";
import { LazyImage } from "@/components/LazyImage";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { usePagePreview } from "@/components/PagePreviewProvider";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import {
 getWorkDetail,
 getWorkDetailUi,
 type WorkSlug,
} from "@/lib/works-details";
import { getDetailExtrasUi, getWorkExtras } from "@/lib/detail-extras";
import { themeAsset } from "@/lib/asset";
import { useTheme } from "@/lib/theme";

export function WorkDetailContent({
 slug,
 embedded = false,
}: {
 slug: WorkSlug;
 embedded?: boolean;
}) {
 const { locale } = useLocale();
 const { theme } = useTheme();
 const { close } = usePagePreview();
 const detail = getWorkDetail(locale, slug);
 const ui = getWorkDetailUi(locale);
 const extras = getWorkExtras(locale, slug);
 const xui = getDetailExtrasUi(locale);
 const [viewerOpen, setViewerOpen] = useState(false);
 const showDesign = slug === "billiard";

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
 <div className="relative mx-auto max-w-7xl px-6">
 {!embedded ? (
 <Link
 href="/#works"
 className="kuct-link inline-flex text-sm font-medium text-[var(--kuct-muted)]"
 >
 {ui.back}
 </Link>
 ) : null}
 <Reveal delay={80} variant="right">
 <div
 className={`${embedded ? "mt-0" : "mt-6"} relative aspect-[16/9] max-w-3xl overflow-hidden rounded-xl`}
 >
 <LazyImage
 src={themeAsset(detail.image, theme)}
 alt={detail.title}
 fill
 className="object-cover"
 sizes="(max-width: 768px) 100vw, 48rem"
 />
 <span className="kuct-badge absolute left-4 top-4">
 {detail.tag}
 </span>
 </div>
 </Reveal>
 <Reveal>
 <h1 className="kuct-type-h1 mt-6 max-w-3xl font-display text-3xl text-[var(--kuct-text)] sm:text-4xl md:text-5xl">
 {detail.title}
 </h1>
 <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--kuct-muted)] sm:text-lg">
 {detail.intro}
 </p>
 </Reveal>
 </div>
 </section>

 <section className={embedded ? "py-10 sm:py-12" : "py-16 sm:py-20"}>
 <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-3">
 <WorkDetailBlock index={0} title={ui.problemTitle}>
 {detail.problem}
 </WorkDetailBlock>
 <WorkDetailBlock index={1} title={ui.scopeTitle}>
 {detail.scope}
 </WorkDetailBlock>
 <WorkDetailBlock index={2} title={ui.outcomesTitle} list={detail.outcomes} />
 </div>

 <div className="mx-auto mt-10 max-w-7xl px-6">
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
 </div>

 <div className="mx-auto mt-10 grid max-w-7xl gap-6 px-6 lg:grid-cols-2 lg:items-stretch">
 <Reveal className="h-full">
 <div className="kuct-surface-card h-full rounded-xl p-6">
 <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
 {xui.timelineTitle}
 </h2>
 <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
 {extras.timeline}
 </p>
 </div>
 </Reveal>
 <Reveal delay={60} className="h-full">
 <div className="kuct-surface-card h-full rounded-xl p-6">
 <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
 {xui.stackTitle}
 </h2>
 <div className="mt-3 flex flex-wrap gap-2">
 {extras.stack.map((item) => (
 <span
 key={item}
 className="rounded-[10px] bg-[var(--kuct-panel)] px-3 py-1 text-xs font-semibold text-[var(--kuct-muted)]"
 >
 {item}
 </span>
 ))}
 </div>
 </div>
 </Reveal>
 </div>

 <Reveal className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center gap-3 px-6">
 {showDesign ? (
 <button
 type="button"
 onClick={() => setViewerOpen(true)}
 className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold"
 >
 {ui.viewDesign}
 </button>
 ) : null}
 <Link
 href="/#contact"
 className={
 showDesign
 ? "kuct-btn-ghost inline-flex items-center "
 : "kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold"
 }
 onClick={() => {
 if (embedded) close();
 }}
 >
 {ui.cta}
 </Link>
 </Reveal>
 </section>

 {showDesign ? (
 <DesignViewerModal
 open={viewerOpen}
 onClose={() => setViewerOpen(false)}
 />
 ) : null}
 </div>
 );
}

export function WorkDetailView({ slug }: { slug: WorkSlug }) {
 return (
 <main>
 <Nav />
 <WorkDetailContent slug={slug} />
 <Footer />
 </main>
 );
}

function WorkDetailBlock({
 index,
 title,
 children,
 list,
}: {
 index: number;
 title: string;
 children?: string;
 list?: string[];
}) {
 return (
 <Reveal delay={index * 40} className="kuct-surface-card rounded-xl p-6">
 <h2 className="font-display text-lg font-semibold text-[var(--kuct-text)]">
 {title}
 </h2>
 {list ? (
 <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
 {list.map((item) => (
 <li key={item}>{item}</li>
 ))}
 </ul>
 ) : (
 <p className="mt-3 text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
 {children}
 </p>
 )}
 </Reveal>
 );
}
