import type { Metadata } from "next";
import { FaqHubContent } from "@/components/FaqHubContent";
import { JsonLd } from "@/components/JsonLd";
import { faqHubJsonLdItems, getFaqHubCopy } from "@/lib/i18n/faq-hub";
import {
  breadcrumbListJsonLd,
  buildPageMetadata,
  faqPageJsonLd,
} from "@/lib/seo";

const hub = getFaqHubCopy();
const path = "/faq/";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: hub.metaTitle,
    description: hub.metaDescription,
    path,
  }),
  title: { absolute: hub.metaTitle },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        id="faq-hub-jsonld"
        data={[
          faqPageJsonLd(faqHubJsonLdItems(hub)),
          breadcrumbListJsonLd([
            { name: "Trang chủ", path: "/" },
            { name: "FAQ", path },
          ]),
        ]}
      />
      <FaqHubContent />
    </>
  );
}
