"use client";

import Link from "next/link";
import { AccentText } from "@/components/BrandName";
import type { PastelArtId } from "@/components/PastelPlatformArt";
import { PastelPlatformSplit } from "@/components/PastelPlatformCards";
import { routePath } from "@/lib/asset";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const AI_EDGE_ART: Record<string, PastelArtId> = {
  agent: "agents",
  action: "actions",
  human: "checkpoint",
};

export function AiEdge() {
  const { t } = useLocale();
  const copy = t.aiEdge;
  const detailHref = routePath("/dolphin-intelligence/");
  const transformHref = routePath("/ai-transform/");

  return (
    <section
      id="ai-edge"
      className="scroll-mt-20 py-24"
      aria-labelledby="home-ai-edge-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <PastelPlatformSplit
          eyebrow={
            <>
              {copy.eyebrow}
              <span className="mx-1.5 opacity-40" aria-hidden>
                ·
              </span>
              {copy.badge}
            </>
          }
          headingId="home-ai-edge-heading"
          title={<AccentText>{copy.title}</AccentText>}
          support={copy.support}
          tone="lavender"
          actions={
            <>
              <Link
                href={detailHref}
                className="kuct-btn-primary inline-flex items-center rounded-[10px] px-5 py-3 text-sm"
              >
                {copy.ctaPrimary}
              </Link>
              <Link
                href={transformHref}
                className="kuct-btn-ghost inline-flex items-center self-center"
              >
                {copy.ctaSecondary}
              </Link>
            </>
          }
          items={copy.items.map((item) => ({
            key: item.id,
            title: item.title,
            body: item.body,
            tag: item.tag,
            href: detailHref,
            art: AI_EDGE_ART[item.id] ?? "agents",
          }))}
        />
      </div>
    </section>
  );
}
