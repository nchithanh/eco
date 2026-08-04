"use client";

import { useMemo, useState } from "react";
import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useQuote } from "@/components/QuoteProvider";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import {
 UI_GALLERY_FILTERS,
 UI_GALLERY_ITEMS,
 uiGalleryImageUrl,
} from "@/lib/ui-gallery-data";

const ZALO_URL = "https://zalo.me/0779937633";

function ExternalIcon() {
 return (
 <svg className="size-3.5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
 <path
 d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
 stroke="currentColor"
 strokeWidth="1.8"
 strokeLinecap="round"
 strokeLinejoin="round"
 />
 </svg>
 );
}

export function UiGallery() {
 const { t } = useLocale();
 const { openQuote } = useQuote();
 const copy = t.uiGallery;
 const [active, setActive] = useState<(typeof UI_GALLERY_FILTERS)[number]>("all");

 const filtered = useMemo(() => {
 if (active === "all") return UI_GALLERY_ITEMS;
 return UI_GALLERY_ITEMS.filter((item) => item.categories.includes(active));
 }, [active]);

 return (
 <section id="ui-gallery" className="scroll-mt-20 py-24">
 <div className="mx-auto max-w-7xl px-6">
 <Reveal variant="title">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
 {copy.eyebrow}
 </p>
 <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]">
 <AccentText>{copy.title}</AccentText>
 </h2>
 <p className="mt-5 max-w-[46ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
 {copy.support}
 </p>
 </Reveal>

 <Reveal delay={60} className="mt-10">
 <div
 className="flex flex-wrap gap-2"
 role="tablist"
 aria-label={copy.eyebrow}
 >
 {UI_GALLERY_FILTERS.map((id) => {
 const selected = active === id;
 return (
 <button
 key={id}
 type="button"
 role="tab"
 aria-selected={selected}
 onClick={() => setActive(id)}
 className={
 selected
 ? "rounded-full bg-[rgb(26_21_32/0.08)] px-3 py-1.5 text-xs font-semibold text-[var(--kuct-text)] shadow-[0_0_20px_rgb(26_21_32/0.08)] sm:px-4 sm:py-2 sm:text-sm"
 : "rounded-full bg-[var(--kuct-panel-2)] px-3 py-1.5 text-xs font-medium text-[var(--kuct-muted)] transition hover:text-[var(--kuct-text)] sm:px-4 sm:py-2 sm:text-sm"
 }
 >
 {copy.filters[id]}
 </button>
 );
 })}
 </div>
 </Reveal>

 {filtered.length === 0 ? (
 <p className="mt-10 text-center text-sm text-[var(--kuct-muted)]">{copy.empty}</p>
 ) : (
 <ul className="mt-8 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
 {filtered.map((item, index) => {
 const meta = copy.items[item.id];
 const badge = meta.badge;
 const featured = item.featured;

 return (
 <Reveal
 as="li"
 key={item.id}
 delay={Math.min(index * 35, 280)}
 className={featured ? "sm:col-span-1" : undefined}
 >
 <a
 href={ZALO_URL}
 target="_blank"
 rel="noreferrer"
 className={
 featured
 ? "group flex h-full flex-col overflow-hidden rounded-lg bg-[var(--kuct-panel)] shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgb(26_21_32/0.08)]"
 : "group flex h-full flex-col overflow-hidden rounded-lg bg-[var(--kuct-panel)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgb(26_21_32/0.07)]"
 }
 >
 <div className="relative aspect-[4/3] overflow-hidden bg-[var(--kuct-panel-2)]">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img
 src={uiGalleryImageUrl(item.num)}
 alt={`${copy.previewAlt} ${item.num}`}
 loading="lazy"
 className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
 />
 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(4,4,12,0.85)] via-[rgba(4,4,12,0.15)] to-transparent opacity-70 transition duration-300 group-hover:opacity-100" />
 <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-2.5 opacity-90 transition group-hover:opacity-100 sm:p-3">
 <span className="text-[11px] font-semibold text-white/85">
 {copy.viewSample} {item.num}
 </span>
 <span className="text-white/55">
 <ExternalIcon />
 </span>
 </div>
 {badge ? (
 <span className="absolute top-2.5 left-2.5 rounded-full bg-[rgba(var(--kuct-accent-rgb),0.2)] px-2 py-0.5 text-[10px] font-semibold tracking-wide text-[var(--kuct-accent)] uppercase backdrop-blur-sm">
 {badge}
 </span>
 ) : null}
 </div>

 <div className="flex flex-1 flex-col gap-1.5 p-3 sm:p-3.5">
 <p className="text-[10px] font-semibold tracking-[0.14em] text-[var(--kuct-accent)]/80 uppercase">
 {meta.label}
 </p>
 <h3 className="font-display text-sm font-semibold leading-snug text-[var(--kuct-text)] sm:text-[0.9375rem]">
 {meta.title}
 </h3>
 <p className="line-clamp-2 text-xs leading-relaxed text-[var(--kuct-muted)]">
 {meta.body}
 </p>
 </div>
 </a>
 </Reveal>
 );
 })}
 </ul>
 )}

 <Reveal delay={120} className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
 <a
 href="#capabilities"
 className="kuct-btn-primary inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold shadow-[0_12px_32px_rgb(26_21_32/0.18)]"
 >
 {copy.ctaServices}
 </a>
 <button
 type="button"
 onClick={openQuote}
 className="kuct-btn-ghost inline-flex items-center justify-center "
 >
 {copy.ctaConsult}
 </button>
 </Reveal>
 </div>
 </section>
 );
}
