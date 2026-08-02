"use client";

import { useState } from "react";
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

  const onApply = (role: JobId) => {
    setSelectedRole(role);
    document.getElementById("apply")?.scrollIntoView?.({ behavior: "smooth" });
  };

  return (
    <div className={embedded ? "pb-10" : undefined}>
      <CareersHero />

      <section
        id="freelance-model"
        className="scroll-mt-20 border-b border-[var(--kuct-border)] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
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
                <div className="flex gap-3 rounded-xl border border-[var(--kuct-border)] bg-[rgba(12,10,24,0.62)] px-4 py-3.5">
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
        className="scroll-mt-20 border-b border-[var(--kuct-border)] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
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
                <div className="flex gap-3 rounded-xl border border-[var(--kuct-border)] bg-[rgba(12,10,24,0.62)] px-4 py-3.5">
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
        className="scroll-mt-20 border-t border-[var(--kuct-border)] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--kuct-accent)] uppercase">
              {c.faq.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl">
              <AccentText>{c.faq.title}</AccentText>
            </h2>
          </Reveal>
          <ul className="mt-10 list-none space-y-3 p-0">
            {c.faq.items.map((item, index) => (
              <li key={item.q}>
                <Reveal delay={index * 40}>
                  <div className="rounded-2xl border border-[var(--kuct-border)] bg-[rgba(12,10,24,0.62)] px-4 py-4 sm:px-5 sm:py-5">
                    <h3 className="text-sm font-semibold text-[var(--kuct-text)]">
                      {item.q}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.7] text-[var(--kuct-muted)]">
                      <FaqAnswerText text={item.a} />
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
