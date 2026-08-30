"use client";

import { AccentText, BrandText, hasBrand } from "@/components/BrandName";
import {
  PastelPlatformGrid,
  PastelPlatformHeader,
} from "@/components/PastelPlatformCards";
import type { PastelArtId } from "@/components/PastelPlatformArt";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const WHY_ART: PastelArtId[] = ["listen", "bottleneck", "build", "improve"];

export function WhyKuct() {
  const { t } = useLocale();
  const { eyebrow, title, support, promise, reasons } = t.why;

  return (
    <section
      id="why"
      className="scroll-mt-20 py-24"
      aria-labelledby="home-why-heading"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <PastelPlatformHeader
          eyebrow={
            hasBrand(eyebrow) ? (
              <BrandText size="xs">{eyebrow}</BrandText>
            ) : (
              eyebrow
            )
          }
          headingId="home-why-heading"
          title={<AccentText>{title}</AccentText>}
          support={support}
          footnote={promise}
        />

        <PastelPlatformGrid
          columns={4}
          items={reasons.map((reason, index) => ({
            key: reason.title,
            title: reason.title,
            body: reason.body,
            art: WHY_ART[index % WHY_ART.length] ?? "listen",
          }))}
        />
      </div>
    </section>
  );
}
