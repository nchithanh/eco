"use client";

import { BrandText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function CareersHero() {
 const { t } = useLocale();
 const h = t.careers.hero;

 return (
 <section className="relative overflow-hidden py-20 sm:py-28">
 <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(var(--kuct-accent-rgb),0.08)] via-transparent to-[rgba(var(--kuct-accent-rgb),0.05)]" />
 <div className="relative mx-auto max-w-6xl px-6 text-left">
 <Reveal variant="title" className="max-w-5xl">
 <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
 {h.eyebrow}
 </p>
 <h1 className="mt-3 max-w-[48rem] font-display text-4xl font-semibold tracking-tight text-[var(--kuct-text)] sm:text-5xl">
 <BrandText size="md">{h.headline}</BrandText>
 </h1>
 <p className="mt-4 max-w-[78ch] text-base leading-[1.7] text-[var(--kuct-muted)] sm:text-lg lg:max-w-4xl">
 {h.support}
 </p>
 </Reveal>
 </div>
 </section>
 );
}
