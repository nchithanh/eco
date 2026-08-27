"use client";

import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { getPrivacyCopy } from "@/lib/i18n/privacy-copy";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function PrivacyContent() {
  const { locale } = useLocale();
  const c = getPrivacyCopy(locale);

  return (
    <section
      id="privacy"
      className="relative isolate overflow-hidden py-20 sm:py-24"
      aria-labelledby="privacy-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 kuct-hero-wash"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-6">
        <Reveal variant="title">
          <p className="kuct-type-eyebrow">{c.eyebrow}</p>
          <h1
            id="privacy-heading"
            className="kuct-type-h1 mt-4 font-display text-4xl text-[var(--kuct-text)] sm:text-5xl"
          >
            <AccentText>{c.title}</AccentText>
          </h1>
          <p className="mt-3 text-sm text-[var(--kuct-muted)]">{c.updated}</p>
          <p className="kuct-type-body mt-5">{c.intro}</p>
        </Reveal>

        {c.sections.map((section) => (
          <section
            key={section.id}
            id={`privacy-${section.id}`}
            className="mt-12"
            aria-labelledby={`privacy-${section.id}-heading`}
          >
            <h2
              id={`privacy-${section.id}-heading`}
              className="kuct-type-h2 font-display text-2xl"
            >
              {section.title}
            </h2>
            {section.body.map((para) => (
              <p key={para.slice(0, 48)} className="kuct-type-body mt-4">
                {para}
              </p>
            ))}
          </section>
        ))}
      </div>
    </section>
  );
}
