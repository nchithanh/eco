"use client";

import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { routePath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";

function CardIcon({ id }: { id: "chat" | "workflow" | "agent" }) {
 const common = "size-5 text-[var(--kuct-accent)]";
 if (id === "chat") {
 return (
 <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
 <path
 d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5V14a2.5 2.5 0 0 1-2.5 2.5H10l-3.5 3v-3H7.5A2.5 2.5 0 0 1 5 14V6.5Z"
 stroke="currentColor"
 strokeWidth="1.5"
 strokeLinejoin="round"
 />
 <path d="M8.5 9.5h7M8.5 12.5h4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
 </svg>
 );
 }
 if (id === "workflow") {
 return (
 <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
 <circle cx="6" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
 <circle cx="18" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
 <circle cx="12" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
 <path d="M8 7h8M7.5 8.5 3.5 15M16.5 8.5 20.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
 </svg>
 );
 }
 return (
 <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
 <path
 d="M12 4.5 13.2 8h3.8l-3.1 2.2 1.2 3.7L12 12.8 8.9 14l1.2-3.7L7 8h3.8L12 4.5Z"
 stroke="currentColor"
 strokeWidth="1.4"
 strokeLinejoin="round"
 />
 <path d="M5 18h14M8 21h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
 </svg>
 );
}

export function AiEdge() {
 const { t } = useLocale();
 const copy = t.aiEdge;

 return (
 <section id="ai-edge" className="scroll-mt-20 py-24">
 <div className="mx-auto max-w-6xl px-6">
 <Reveal variant="title">
 <div className="flex flex-wrap items-center gap-3">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
 {copy.eyebrow}
 </p>
 <span className="rounded-[10px] bg-[rgba(var(--kuct-accent-rgb),0.1)] px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[var(--kuct-accent)] uppercase">
 {copy.badge}
 </span>
 </div>
 <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]">
 <AccentText>{copy.title}</AccentText>
 </h2>
 <p className="mt-5 max-w-[46ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
 {copy.support}
 </p>
 </Reveal>

 <ul className="mt-12 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-3">
 {copy.items.map((item, index) => (
 <Reveal
 as="li"
 key={item.id}
 delay={index * 55}
 className="flex flex-col rounded-xl bg-[var(--kuct-panel)] p-5 backdrop-blur-md transition duration-300 hover:shadow-[0_16px_40px_rgb(26_21_32/0.06)]"
 >
 <div className="flex items-start justify-between gap-3">
 <span className="grid size-10 place-items-center rounded-lg bg-[var(--kuct-panel-2)]">
 <CardIcon id={item.id} />
 </span>
 <span className="rounded-[10px] bg-[var(--kuct-panel-2)] px-2 py-0.5 text-[10px] font-semibold tracking-wide text-[var(--kuct-muted)] uppercase">
 {item.tag}
 </span>
 </div>
 <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-[var(--kuct-text)]">
 {item.title}
 </h3>
 <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--kuct-muted)]">
 {item.body}
 </p>
 </Reveal>
 ))}
 </ul>

 <Reveal delay={120} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
 <Link
 href={routePath("/ai-transform/")}
 className="kuct-btn-primary inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold shadow-[0_10px_28px_rgb(26_21_32/0.18)]"
 >
 {copy.ctaTransform}
 </Link>
 <Link
 href={routePath("/dolphin-care/")}
 className="kuct-btn-ghost inline-flex items-center "
 >
 {copy.ctaAgent}
 </Link>
 </Reveal>
 </div>
 </section>
 );
}
