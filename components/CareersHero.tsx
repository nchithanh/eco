"use client";

import { BrandText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function CareersHero() {
 const { t } = useLocale();
 const h = t.careers.hero;

 return (
 <section className="relative overflow-hidden py-20 sm:py-28">
 <div className="pointer-events-none absolute inset-0 kuct-hero-wash" aria-hidden />
 <div className="relative mx-auto max-w-7xl px-6 text-left">
 <Reveal variant="title" className="max-w-5xl">
 <p className="kuct-type-eyebrow">
 {h.eyebrow}
 </p>
 <h1 className="kuct-type-h1 mt-3 max-w-[48rem] font-display text-4xl text-[var(--kuct-text)] sm:text-5xl">
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
