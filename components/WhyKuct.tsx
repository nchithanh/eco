"use client";

import { AccentText, BrandText, hasBrand } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const REASON_IDS = [
 "experience",
 "delivery",
 "process",
 "support",
] as const;

type ReasonId = (typeof REASON_IDS)[number];

function WhyArt({ id }: { id: ReasonId }) {
 const common = "h-full w-full text-[var(--kuct-accent)]";

 if (id === "experience") {
 return (
 <svg viewBox="0 0 96 72" className={common} fill="none" aria-hidden>
 <path
 d="M8 42c12-18 34-28 58-24 14 2 24 8 30 4 2 6-2 12-10 14-16 6-34 10-52 4-10-3-18-6-24-2-4 2-6-2-2-6z"
 fill="currentColor"
 opacity="0.22"
 />
 <path
 d="M68 28c8-10 16-14 24-14 2 0 3 2 2 4-4 8-10 14-18 18-2 1-5 0-6-2-1-2 0-4-2-6z"
 fill="currentColor"
 opacity="0.28"
 />
 <circle cx="28" cy="36" r="2" fill="currentColor" opacity="0.45" />
 <path
 d="M40 22l1.2 3.2L44.5 26.5l-3.3 1.1L40 31l-1.2-3.4L35.5 26.5l3.3-1.3L40 22z"
 fill="currentColor"
 opacity="0.5"
 />
 </svg>
 );
 }

 if (id === "delivery") {
 return (
 <svg viewBox="0 0 96 72" className={common} fill="none" aria-hidden>
 <path
 d="M6 50c4-2 10-8 18-18 6-8 14-14 24-12 8 2 12 8 20 10 8 2 14 0 20-6"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeDasharray="3 4"
 opacity="0.28"
 />
 <circle cx="78" cy="22" r="3.5" fill="currentColor" opacity="0.4" />
 </svg>
 );
 }

 if (id === "process") {
 return (
 <svg viewBox="0 0 96 72" className={common} fill="none" aria-hidden>
 <circle cx="30" cy="24" r="5" stroke="currentColor" strokeWidth="1.6" opacity="0.4" />
 <circle cx="48" cy="18" r="5" stroke="currentColor" strokeWidth="1.6" opacity="0.35" />
 <circle cx="66" cy="24" r="5" stroke="currentColor" strokeWidth="1.6" opacity="0.3" />
 <path
 d="M35 24h8M53 20h8"
 stroke="currentColor"
 strokeWidth="1.4"
 strokeLinecap="round"
 opacity="0.3"
 />
 </svg>
 );
 }

 return (
 <svg viewBox="0 0 96 72" className={common} fill="none" aria-hidden>
 <path
 d="M28 28c0-8 6-14 14-14"
 stroke="currentColor"
 strokeWidth="1.6"
 strokeLinecap="round"
 opacity="0.35"
 />
 <circle cx="46" cy="14" r="3" fill="currentColor" opacity="0.4" />
 <path
 d="M22 52c6 4 14 6 24 6s18-2 24-6"
 stroke="currentColor"
 strokeWidth="1.5"
 strokeLinecap="round"
 opacity="0.25"
 />
 </svg>
 );
}

export function WhyKuct() {
 const { t } = useLocale();
 const { eyebrow, title, support, reasons } = t.why;
 const lastIndex = reasons.length - 1;

 return (
 <section id="why" className="scroll-mt-20 py-24">
 <div className="relative mx-auto max-w-6xl px-6">
 <Reveal variant="title">
 <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
 {hasBrand(eyebrow) ? (
 <BrandText size="xs">{eyebrow}</BrandText>
 ) : (
 eyebrow
 )}
 </p>
 <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]">
 <AccentText>{title}</AccentText>
 </h2>
 <p className="mt-5 max-w-[52ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
 {support}
 </p>
 </Reveal>

 <ul className="mt-12 grid list-none grid-cols-1 gap-5 p-0 sm:mt-14 sm:grid-cols-2">
 {reasons.map((reason, index) => {
 const artId = REASON_IDS[index % REASON_IDS.length] ?? "experience";
 const isLead = index === 0 || index === lastIndex;

 return (
 <Reveal
 as="li"
 key={reason.title}
 delay={index * 50}
 className={
 isLead
 ? "group relative overflow-hidden rounded-xl bg-[var(--kuct-panel)] p-5 backdrop-blur-md transition duration-300 sm:p-6"
 : "group relative overflow-hidden rounded-xl bg-[var(--kuct-panel)] p-5 backdrop-blur-md transition duration-300 sm:p-6"
 }
 >
 <div className="relative z-10 max-w-[calc(100%-4rem)]">
 <h3 className="font-display text-lg font-semibold leading-snug text-[var(--kuct-text)]">
 {reason.title}
 </h3>
 <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
 {reason.body}
 </p>
 </div>
 <div
 className="pointer-events-none absolute -right-1 -bottom-1 size-14 opacity-40 transition duration-300 group-hover:opacity-55 sm:size-16"
 aria-hidden
 >
 <WhyArt id={artId} />
 </div>
 </Reveal>
 );
 })}
 </ul>
 </div>
 </section>
 );
}
