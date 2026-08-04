"use client";

import { useId, useState } from "react";
import { CareersHero } from "@/components/CareersHero";
import { CareersJobs } from "@/components/CareersJobs";
import { CareersApplyForm } from "@/components/CareersApplyForm";
import { AccentText } from "@/components/BrandName";
import { FaqAnswerText } from "@/components/FaqAnswerText";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { JobId } from "@/lib/careers-schema";

export function CareersContent({ embedded = false }: { embedded?: boolean }) {
 const { t } = useLocale();
 const c = t.careers;
 const [selectedRole, setSelectedRole] = useState<JobId | undefined>();
 const [openFaq, setOpenFaq] = useState<number | null>(0);
 const faqId = useId();

 const onApply = (role: JobId) => {
 setSelectedRole(role);
 document.getElementById("apply")?.scrollIntoView?.({ behavior: "smooth" });
 };

 return (
 <div className={embedded ? "pb-10" : undefined}>
 <CareersHero />

 <section
 id="freelance-model"
 className="scroll-mt-20 py-20 sm:py-24"
 >
 <div className="mx-auto max-w-6xl px-6">
 <Reveal variant="title" className="max-w-2xl">
 <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
 {c.model.eyebrow}
 </p>
 <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl">
 <AccentText>{c.model.title}</AccentText>
 </h2>
 <p className="mt-5 max-w-[52ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
 {c.model.support}
 </p>
 </Reveal>
 <ul className="mt-10 list-none space-y-3 p-0 sm:max-w-2xl">
 {c.model.bullets.map((item, index) => (
 <Reveal key={item} delay={index * 40} as="li">
 <div className="flex gap-3 rounded-lg bg-[var(--kuct-panel)] px-4 py-3.5">
 <span
 aria-hidden
 className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--kuct-accent)]/75"
 />
 <p className="text-sm leading-relaxed text-[var(--kuct-muted)]">
 {item}
 </p>
 </div>
 </Reveal>
 ))}
 </ul>
 </div>
 </section>

 <CareersJobs onApply={onApply} />

 <section
 id="how-to-apply"
 className="scroll-mt-20 py-20 sm:py-24"
 >
 <div className="mx-auto max-w-6xl px-6">
 <Reveal variant="title" className="max-w-2xl">
 <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
 {c.howToApply.eyebrow}
 </p>
 <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl">
 <AccentText>{c.howToApply.title}</AccentText>
 </h2>
 <p className="mt-5 text-base leading-[1.7] text-[var(--kuct-muted)]">
 {c.howToApply.support}
 </p>
 </Reveal>
 <ol className="mt-10 list-none space-y-3 p-0 sm:max-w-2xl">
 {c.howToApply.steps.map((step, index) => (
 <Reveal key={step} delay={index * 40} as="li">
 <div className="flex gap-3 rounded-lg bg-[var(--kuct-panel)] px-4 py-3.5">
 <span className="mt-0.5 shrink-0 text-[11px] font-semibold tabular-nums text-[var(--kuct-accent)]/80">
 {String(index + 1).padStart(2, "0")}
 </span>
 <p className="text-sm leading-relaxed text-[var(--kuct-muted)]">
 {step}
 </p>
 </div>
 </Reveal>
 ))}
 </ol>
 </div>
 </section>

 <CareersApplyForm initialRole={selectedRole} />

 <section
 id="careers-faq"
 className="scroll-mt-20 py-20 sm:py-24"
 >
 <div className="mx-auto max-w-6xl px-6">
 <Reveal variant="title" className="max-w-2xl">
 <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
 {c.faq.eyebrow}
 </p>
 <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl">
 <AccentText>{c.faq.title}</AccentText>
 </h2>
 </Reveal>
 <Reveal
 delay={60}
 className="mx-auto mt-10 max-w-3xl divide-y divide-[var(--kuct-border)] overflow-hidden rounded-xl bg-[var(--kuct-panel)] shadow-[0_1rem_2.5rem_rgb(26_21_32/0.08)] backdrop-blur-md"
 >
 {c.faq.items.map((item, index) => {
 const open = openFaq === index;
 const panelId = `${faqId}-panel-${index}`;
 const buttonId = `${faqId}-btn-${index}`;
 return (
 <div key={item.q}>
 <h3>
 <button
 type="button"
 id={buttonId}
 aria-expanded={open}
 aria-controls={panelId}
 className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[var(--kuct-text)] transition hover:bg-[rgba(var(--kuct-accent-rgb),0.12)] sm:px-6 sm:text-base"
 onClick={() =>
 setOpenFaq((cur) => (cur === index ? null : index))
 }
 >
 <span>{item.q}</span>
 <span aria-hidden className="text-[var(--kuct-accent)]">
 {open ? "−" : "+"}
 </span>
 </button>
 </h3>
 <div
 id={panelId}
 role="region"
 aria-labelledby={buttonId}
 hidden={!open}
 className="px-5 pb-4 text-sm leading-[1.7] text-[var(--kuct-muted)] sm:px-6"
 >
 <FaqAnswerText text={item.a} />
 </div>
 </div>
 );
 })}
 </Reveal>
 </div>
 </section>
 </div>
 );
}
