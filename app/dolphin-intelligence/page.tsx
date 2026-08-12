import type { Metadata } from "next";
import { DolphinIntelligencePage } from "@/components/DolphinIntelligenceContent";
import { JsonLd } from "@/components/JsonLd";
import { getDolphinIntelligenceCopy } from "@/lib/i18n/dolphin-intelligence-copy";
import {
  buildPageMetadata,
  faqPageJsonLd,
  SEO_LOCALE,
  serviceJsonLd,
} from "@/lib/seo";

const c = getDolphinIntelligenceCopy(SEO_LOCALE);
const path = "/dolphin-intelligence/";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path,
  }),
  title: { absolute: c.metaTitle },
};

export default function Page() {
  return (
    <>
      <JsonLd
        id="dolphin-intelligence-jsonld"
        data={[
          serviceJsonLd({
            name: "Dolphin Intelligence",
            description: c.metaDescription,
            path,
          }),
          faqPageJsonLd(c.faqItems),
        ]}
      />
      <DolphinIntelligencePage />
    </>
  );
}
