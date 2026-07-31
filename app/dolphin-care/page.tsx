import type { Metadata } from "next";
import { AgentDolphinPage } from "@/components/AgentDolphinContent";
import { JsonLd } from "@/components/JsonLd";
import { getAgentDolphinCopy } from "@/lib/i18n/agent-dolphin-copy";
import {
  buildPageMetadata,
  faqPageJsonLd,
  SEO_LOCALE,
  serviceJsonLd,
} from "@/lib/seo";

const c = getAgentDolphinCopy(SEO_LOCALE);
const path = "/dolphin-care/";

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
        data={[
          serviceJsonLd({
            name: "Dolphin Care",
            description: c.metaDescription,
            path,
          }),
          faqPageJsonLd(c.faqItems),
        ]}
      />
      <AgentDolphinPage />
    </>
  );
}
