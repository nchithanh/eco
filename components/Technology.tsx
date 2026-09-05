"use client";

import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import type { PastelArtId } from "@/components/PastelPlatformArt";
import { PastelPlatformSplit } from "@/components/PastelPlatformCards";
import { Reveal } from "@/components/Reveal";
import { routePath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const TECH_ART: Record<string, PastelArtId> = {
  agents: "agents",
  automation: "pipeline",
  integration: "orbit",
};

export function Technology() {
  const { t } = useLocale();
  const tech = t.technology;
  const transformHref = routePath("/ai-transform/");

  return (
    <section
      id="technology"
      className="relative scroll-mt-20 overflow-hidden py-24"
      aria-labelledby="home-technology-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <PastelPlatformSplit
          eyebrow={tech.eyebrow}
          headingId="home-technology-heading"
          title={<AccentText>{tech.title}</AccentText>}
          subline={tech.roadmap}
          support={tech.support}
          tone="lavender"
          actions={
            <>
              <Link
                href={transformHref}
                className="kuct-btn-primary inline-flex items-center justify-center rounded-[10px] px-5 py-3 text-sm"
              >
                {tech.ctaPrimary}
              </Link>
              <Link
                href={transformHref}
                className="kuct-btn-ghost inline-flex items-center justify-center rounded-[10px] px-4 py-3 text-sm font-semibold"
              >
                {tech.ctaSecondary}
              </Link>
            </>
          }
          items={tech.items.map((item) => ({
            key: item.id,
            title: item.title,
            body: item.body,
            tag: item.tag,
            href: transformHref,
            art: TECH_ART[item.id] ?? "agents",
          }))}
        />

        <Reveal delay={120} className="mt-10 max-w-xl lg:ml-[calc(34%+3.5rem)]">
          <p className="text-sm leading-relaxed text-[var(--kuct-muted)]">
            {tech.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
