"use client";

import { useId, useState } from "react";
import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function SiteOutcomes() {
 const { t } = useLocale();
 const { eyebrow, title, support, painLead, items } = t.siteOutcomes;
 const baseId = useId();
 const [openIndex, setOpenIndex] = useState<number | null>(null);

 return (
 <section id="stats" className="scroll-mt-20 py-24">
 <div className="mx-auto max-w-6xl px-6">
 <Reveal variant="title">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
 {eyebrow}
 </p>
 <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]">
 <AccentText>{title}</AccentText>
 </h2>
 <p className="mt-5 max-w-[48ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
 {support}
 </p>
 </Reveal>

 {painLead ? (
 <Reveal className="mt-10">
 <p className="max-w-[40ch] text-base font-medium leading-snug text-[var(--kuct-text)] sm:text-lg">
 {painLead}
 </p>
 </Reveal>
 ) : null}

 <ol className="mt-8 grid list-none grid-cols-1 gap-0 p-0 max-sm:rounded-xl max-sm:bg-[var(--kuct-panel)]/90 max-sm:px-4 max-sm:backdrop-blur-md max-sm:shadow-[inset_0_0_0_1px_rgb(0_0_0/0.04)] sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
 {items.map((item, index) => {
 const open = openIndex === index;
 const panelId = `${baseId}-panel-${index}`;
 const buttonId = `${baseId}-btn-${index}`;

 return (
 <Reveal
 as="li"
 key={item.title}
 delay={index * 50}
 className={[
 "max-sm:border-b max-sm:border-black/10 max-sm:last:border-b-0",
 "sm:rounded-xl sm:bg-[var(--kuct-panel)] sm:p-5 sm:backdrop-blur-md sm:transition sm:duration-300",
 ].join(" ")}
 >
 <div className="flex gap-3.5 max-sm:py-5 sm:gap-4">
 <span
 aria-hidden
 className="mt-1 shrink-0 font-display text-xs font-semibold tabular-nums tracking-wide text-[var(--kuct-accent)]/80"
 >
 {String(index + 1).padStart(2, "0")}
 </span>
 <div className="min-w-0 flex-1">
 <h3 className="font-display text-lg font-semibold leading-snug text-[var(--kuct-text)]">
 <button
 type="button"
 id={buttonId}
 aria-expanded={open}
 aria-controls={panelId}
 className="flex w-full items-start justify-between gap-3 text-left sm:hidden"
 onClick={() =>
 setOpenIndex((current) =>
 current === index ? null : index,
 )
 }
 >
 <span>{item.title}</span>
 <span
 aria-hidden
 className={`mt-0.5 shrink-0 text-sm text-[var(--kuct-muted)] transition-transform duration-300 ease-out ${
 open ? "rotate-180" : ""
 }`}
 >
 ▾
 </span>
 </button>
 <span className="hidden sm:inline">{item.title}</span>
 </h3>
 <div
 id={panelId}
 role="region"
 aria-labelledby={buttonId}
 className={`kuct-accordion-panel ${open ? "is-open" : ""}`}
 >
 <div className="kuct-accordion-panel__inner">
 <p
 className={`pt-2 text-sm leading-relaxed text-[var(--kuct-muted)] transition-opacity duration-300 ease-out max-sm:pb-1 ${
 open ? "opacity-100" : "opacity-0 sm:opacity-100"
 }`}
 >
 {item.body}
 </p>
 </div>
 </div>
 </div>
 </div>
 </Reveal>
 );
 })}
 </ol>
 </div>
 </section>
 );
}
