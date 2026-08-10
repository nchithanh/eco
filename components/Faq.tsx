"use client";

import { useId, useState } from "react";
import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Faq() {
 const { t } = useLocale();
 const f = t.faq;
 const baseId = useId();
 const [openIndex, setOpenIndex] = useState<number | null>(0);

 return (
 <section id="faq" className="scroll-mt-20 py-24">
 <div className="mx-auto max-w-6xl px-6">
 <Reveal variant="title" className="mx-auto max-w-2xl text-center">
 <p className="kuct-type-eyebrow">
 {f.eyebrow}
 </p>
 <h2 className="kuct-type-h2 mt-4 font-display text-3xl text-[var(--kuct-text)] sm:text-[2.15rem] lg:text-[2.35rem]">
 <AccentText>{f.title}</AccentText>
 </h2>
 <p className="kuct-type-body mx-auto mt-5 max-w-[68ch] sm:whitespace-nowrap">
 {f.support}
 </p>
 </Reveal>

 <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3 sm:mt-14">
 {f.items.map((item, index) => {
 const panelId = `${baseId}-panel-${index}`;
 const buttonId = `${baseId}-btn-${index}`;
 const open = openIndex === index;

 return (
 <Reveal
 key={item.q}
 delay={Math.min(index, 6) * 40}
 className={
 open
 ? "overflow-hidden rounded-xl bg-[var(--kuct-panel)] backdrop-blur-md"
 : "overflow-hidden rounded-xl bg-[var(--kuct-panel)] backdrop-blur-md transition duration-300 "
 }
 >
 <h3>
 <button
 type="button"
 id={buttonId}
 aria-expanded={open}
 aria-controls={panelId}
 className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[var(--kuct-text)] transition hover:text-[var(--kuct-accent)] sm:px-6 sm:text-base"
 onClick={() =>
 setOpenIndex((current) =>
 current === index ? null : index,
 )
 }
 >
 <span>{item.q}</span>
 <span
 aria-hidden
 className="grid size-8 shrink-0 place-items-center rounded-[10px] bg-[var(--kuct-menu-hover)] text-sm text-[var(--kuct-accent)]"
 >
 {open ? "−" : "+"}
 </span>
 </button>
 </h3>
 <div
 id={panelId}
 role="region"
 aria-labelledby={buttonId}
 hidden={!open}
 className="px-5 py-4 text-sm leading-[1.7] text-[var(--kuct-muted)] sm:px-6"
 >
 {item.a}
 </div>
 </Reveal>
 );
 })}
 </div>
 </div>
 </section>
 );
}
