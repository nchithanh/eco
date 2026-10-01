import type { Metadata } from "next";
import { CaseStudiesHubContent } from "@/components/CaseStudiesHubContent";
import { JsonLd } from "@/components/JsonLd";
import { getCaseStudiesHubCopy } from "@/lib/i18n/case-studies-copy";
import {
  absoluteUrl,
  breadcrumbListJsonLd,
  buildPageMetadata,
} from "@/lib/seo";

const hub = getCaseStudiesHubCopy();
const path = "/case-studies/";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: hub.metaTitle,
    description: hub.metaDescription,
    path,
  }),
  title: { absolute: hub.metaTitle },
};

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        id="case-studies-hub-jsonld"
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: hub.metaTitle,
            description: hub.metaDescription,
            url: absoluteUrl(path),
            isPartOf: {
              "@type": "WebSite",
              name: "Dolphin Software",
              url: absoluteUrl("/"),
            },
            inLanguage: "vi",
            hasPart: hub.cards.map((card) => ({
              "@type": "WebPage",
              name: card.title,
              description: card.summary,
              url: absoluteUrl(card.href),
            })),
          },
          breadcrumbListJsonLd([
            { name: "Trang chủ", path: "/" },
            { name: "Case studies", path },
          ]),
        ]}
      />
      <CaseStudiesHubContent />
    </>
  );
}
