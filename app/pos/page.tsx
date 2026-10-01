import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PosHubContent } from "@/components/PosHubContent";
import { getPosHubCopy } from "@/lib/i18n/pos-copy";
import { breadcrumbListJsonLd, buildPageMetadata } from "@/lib/seo";

const hub = getPosHubCopy();
const path = "/pos/";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: hub.metaTitle,
    description: hub.metaDescription,
    path,
  }),
  title: { absolute: hub.metaTitle },
};

export default function PosIndexPage() {
  return (
    <>
      <JsonLd
        id="pos-hub-jsonld"
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: hub.metaTitle,
            description: hub.metaDescription,
            url: "https://dolphin-software.io.vn/pos/",
            isPartOf: {
              "@type": "WebSite",
              name: "Dolphin Software",
              url: "https://dolphin-software.io.vn/",
            },
            inLanguage: "vi",
          },
          breadcrumbListJsonLd([
            { name: "Trang chủ", path: "/" },
            { name: "POS", path },
          ]),
        ]}
      />
      <PosHubContent />
    </>
  );
}
