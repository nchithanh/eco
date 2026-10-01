import type { Metadata } from "next";
import { IndustriesHubContent } from "@/components/IndustriesHubContent";
import { JsonLd } from "@/components/JsonLd";
import { getIndustriesHubCopy } from "@/lib/i18n/industries-copy";
import {
  breadcrumbListJsonLd,
  buildPageMetadata,
} from "@/lib/seo";

const hub = getIndustriesHubCopy();
const path = "/industries/";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: hub.metaTitle,
    description: hub.metaDescription,
    path,
  }),
  title: { absolute: hub.metaTitle },
};

export default function IndustriesIndexPage() {
  return (
    <>
      <JsonLd
        id="industries-hub-jsonld"
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: hub.metaTitle,
            description: hub.metaDescription,
            url: "https://dolphin-software.io.vn/industries/",
            isPartOf: {
              "@type": "WebSite",
              name: "Dolphin Software",
              url: "https://dolphin-software.io.vn/",
            },
            inLanguage: "vi",
          },
          breadcrumbListJsonLd([
            { name: "Trang chủ", path: "/" },
            { name: "Ngành", path },
          ]),
        ]}
      />
      <IndustriesHubContent />
    </>
  );
}
