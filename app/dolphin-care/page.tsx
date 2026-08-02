import type { Metadata } from "next";
import { AgentDolphinPage } from "@/components/AgentDolphinContent";
import { JsonLd } from "@/components/JsonLd";
import { getAgentDolphinCopy } from "@/lib/i18n/agent-dolphin-copy";
import {
  buildPageMetadata,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/seo";

/** VI meta for social share (FB/Zalo posts are VN-first). */
const c = getAgentDolphinCopy("vi");
const path = "/dolphin-care/";
const ogImage = "/og-dolphin-care.png";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path,
    image: ogImage,
    imageAlt: "Dolphin Care — AI chăm sóc khách hàng trên website",
  }),
  title: { absolute: c.metaTitle },
};

export default function Page() {
  return (
    <>
      <JsonLd
        id="dolphin-care-jsonld"
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
