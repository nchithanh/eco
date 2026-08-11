"use client";

import { useId, useState } from "react";
import { AccentText, BrandName } from "@/components/BrandName";
import { AboutTeamSection } from "@/components/AboutTeamSection";
import { FaqAnswerText } from "@/components/FaqAnswerText";
import { Reveal } from "@/components/Reveal";
import { useQuote } from "@/components/QuoteProvider";
import { assetPath } from "@/lib/asset";
import { getAboutCopy } from "@/lib/i18n/about-copy";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function AboutContent() {
 const { locale } = useLocale();
 const a = getAboutCopy(locale);
 const { openQuote } = useQuote();
 const [openFaq, setOpenFaq] = useState<number | null>(0);
 const faqId = useId();

 return (
 <>
 <section className="relative isolate overflow-hidden py-20 sm:py-24">
 <div className="pointer-events-none absolute inset-0 kuct-hero-wash" aria-hidden />
 <div className="relative mx-auto max-w-6xl px-6">
 <Reveal variant="title" className="max-w-5xl text-left">
 <p className="kuct-type-eyebrow">
 {a.eyebrow}
 </p>
 <h1 className="kuct-type-h1 mt-4 font-display text-4xl text-[var(--kuct-text)] sm:text-5xl lg:text-[3.25rem]">
 <BrandName size="md" />
 </h1>
 <p className="mt-6 max-w-[60ch] font-display text-xl font-semibold leading-snug tracking-tight text-[var(--kuct-text)] sm:max-w-none sm:text-2xl lg:max-w-[48rem]">
 <AccentText>{a.motto}</AccentText>
 </p>
 <p className="kuct-type-body mt-5 max-w-[70ch] sm:max-w-[78ch] lg:max-w-4xl">
 {a.support}
 </p>
 <div className="mt-9 flex flex-wrap items-center justify-start gap-3">
 <button
 type="button"
 onClick={openQuote}
 className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3.5 text-sm font-semibold"
 >
 {a.ctaPrimary}
 </button>
 <a
 href={assetPath("/#capabilities")}
 className="kuct-btn-ghost inline-flex items-center self-center "
 >
 {a.ctaSecondary}
 </a>
 </div>
 </Reveal>
 </div>
 </section>

 <section className="scroll-mt-20 py-24">
 <div className="mx-auto max-w-6xl px-6">
 <Reveal variant="title" className="max-w-2xl">
 <p className="kuct-type-eyebrow">
 {a.mindsetEyebrow}
 </p>
 <h2 className="kuct-type-h2 mt-4 font-display text-3xl sm:text-[2.15rem]">
 <AccentText>{a.mindsetTitle}</AccentText>
 </h2>
 <p className="mt-5 max-w-[48ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
 {a.mindsetSupport}
 </p>
 </Reveal>
 <div className="mt-12 grid gap-4 md:grid-cols-3">
 {a.mindset.map((item, index) => (
 <Reveal
 key={item.title}
 delay={index * 60}
 className={
 index === 2
 ? "kuct-surface-card p-5 sm:p-6"
 : "kuct-surface-card p-5 sm:p-6"
 }
 >
 <h3 className="font-display text-sm font-semibold tracking-wide text-[var(--kuct-text)]">
 {item.title}
 </h3>
 <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
 {item.body}
 </p>
 </Reveal>
 ))}
 </div>
 </div>
 </section>

 <section className="scroll-mt-20 py-24">
 <div className="mx-auto max-w-6xl px-6">
 <Reveal variant="title" className="max-w-2xl">
 <p className="kuct-type-eyebrow">
 {a.buildEyebrow}
 </p>
 <h2 className="kuct-type-h2 mt-4 font-display text-3xl sm:text-[2.15rem]">
 <AccentText>{a.buildTitle}</AccentText>
 </h2>
 <p className="mt-5 max-w-[48ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
 {a.buildSupport}
 </p>
 </Reveal>
 <div className="mt-12 grid gap-4 sm:grid-cols-2">
 {a.buildItems.map((item, index) => (
 <Reveal
 key={item.title}
 delay={index * 50}
 className={
 index === 0 || index === 3
 ? "kuct-surface-card p-5 sm:p-6"
 : "kuct-surface-card p-5 sm:p-6"
 }
 >
 <p className="text-[11px] font-semibold tabular-nums tracking-wide text-[var(--kuct-accent)]/80">
 {String(index + 1).padStart(2, "0")}
 </p>
 <h3 className="mt-2 font-display text-sm font-semibold tracking-wide text-[var(--kuct-text)]">
 {item.href ? (
 <a
 href={assetPath(item.href)}
 className="transition hover:text-[var(--kuct-accent)]"
 >
 {item.title}
 </a>
 ) : (
 item.title
 )}
 </h3>
 <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
 {item.body}
 </p>
 </Reveal>
 ))}
 </div>
 </div>
 </section>

 <section className="scroll-mt-20 py-24">
 <div className="mx-auto max-w-6xl px-6">
 <Reveal variant="title" className="max-w-2xl">
 <p className="kuct-type-eyebrow">
 {a.proofEyebrow}
 </p>
 <h2 className="kuct-type-h2 mt-4 font-display text-3xl sm:text-[2.15rem]">
 <AccentText>{a.proofTitle}</AccentText>
 </h2>
 <p className="mt-5 max-w-[48ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
 {a.proofSupport}
 </p>
 </Reveal>
 <div className="mt-12 grid gap-4 md:grid-cols-2">
 {a.proofs.map((item, index) => (
 <Reveal
 key={item.title}
 delay={index * 50}
 className="kuct-surface-card p-5 sm:p-6"
 >
 <h3 className="font-display text-sm font-semibold tracking-wide text-[var(--kuct-text)]">
 {item.title}
 </h3>
 <p className="mt-2 text-sm leading-relaxed text-[var(--kuct-muted)]">
 {item.body}
 </p>
 </Reveal>
 ))}
 </div>
 </div>
 </section>

 <AboutTeamSection
 eyebrow={a.founderEyebrow}
 title={a.founderTitle}
 team={a.team}
 />

 <section
 id="about-faq"
 className="scroll-mt-20 py-24"
 >
 <div className="mx-auto max-w-6xl px-6">
 <Reveal variant="title" className="mx-auto max-w-2xl text-center">
 <p className="kuct-type-eyebrow">
 {a.faqEyebrow}
 </p>
 <h2 className="kuct-type-h2 mt-4 font-display text-3xl sm:text-[2.15rem]">
 <AccentText>{a.faqTitle}</AccentText>
 </h2>
 </Reveal>
 <Reveal
 delay={60}
 className="mx-auto mt-10 max-w-3xl divide-y divide-[var(--kuct-border)] overflow-hidden kuct-surface-card"
 >
 {a.faqItems.map((item, index) => {
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

 <section className="scroll-mt-20 py-24">
 <div className="mx-auto max-w-6xl px-6">
 <Reveal variant="title" className="kuct-surface-card px-6 py-10 text-center sm:px-10 sm:py-12">
 <p className="kuct-type-eyebrow">
 {a.ctaEyebrow}
 </p>
 <h2 className="mx-auto mt-4 max-w-[28ch] font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.15rem]">
 <AccentText>{a.ctaTitle}</AccentText>
 </h2>
 <p className="mx-auto mt-5 max-w-[42ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
 {a.ctaSupport}
 </p>
 <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
 <button
 type="button"
 onClick={openQuote}
 className="kuct-btn-primary inline-flex items-center rounded-lg px-5 py-3.5 text-sm font-semibold"
 >
 {a.ctaPrimary}
 </button>
 <a
 href={assetPath("/#capabilities")}
 className="kuct-btn-ghost inline-flex items-center self-center "
 >
 {a.ctaSecondary}
 </a>
 </div>
 </Reveal>
 </div>
 </section>
 </>
 );
}
