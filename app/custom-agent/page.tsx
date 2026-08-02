import type { Metadata } from "next";
import { CustomAgentPage } from "@/components/CustomAgentContent";
import { JsonLd } from "@/components/JsonLd";
import { getCustomAgentCopy } from "@/lib/i18n/custom-agent-copy";
import {
  buildPageMetadata,
  faqPageJsonLd,
  SEO_LOCALE,
  serviceJsonLd,
} from "@/lib/seo";

const c = getCustomAgentCopy(SEO_LOCALE);
const path = "/custom-agent/";

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
        id="custom-agent-jsonld"
        data={[
          serviceJsonLd({
            name: c.eyebrow || "Custom AI Agent",
            description: c.metaDescription,
            path,
          }),
          faqPageJsonLd(c.faqItems),
        ]}
      />
      <CustomAgentPage />
    </>
  );
}
