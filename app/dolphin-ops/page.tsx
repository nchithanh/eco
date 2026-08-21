import type { Metadata } from "next";
import { DolphinOpsPage } from "@/components/DolphinOpsContent";
import { JsonLd } from "@/components/JsonLd";
import { getDolphinOpsCopy } from "@/lib/i18n/dolphin-ops-copy";
import {
  buildPageMetadata,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/seo";

/** VI meta for crawlers / social (product SoT is Vietnamese). */
const c = getDolphinOpsCopy("vi");
const path = "/dolphin-ops/";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path,
    imageAlt: c.metaTitle,
  }),
  title: { absolute: c.metaTitle },
};

export default function Page() {
  return (
    <>
      <JsonLd
        id="dolphin-ops-jsonld"
        data={[
          serviceJsonLd({
            name: "Dolphin Ops",
            description: c.metaDescription,
            path,
          }),
          faqPageJsonLd(c.faqItems),
        ]}
      />
      <DolphinOpsPage />
    </>
  );
}
