import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { PricingPolicy2026Content } from "@/components/PricingPolicy2026Content";
import {
  breadcrumbListJsonLd,
  buildPageMetadata,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import {
  PRICING_FAQ_ITEMS,
  PRICING_POLICY_META,
  PRICING_POLICY_PATH,
} from "@/lib/pricing/dolphin-pricing-policy-2026";
import { POS_FAQ_ITEMS } from "@/lib/pricing/dolphin-pos-policy-2026";
import "./pricing-policy.css";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: PRICING_POLICY_META.title,
    description: PRICING_POLICY_META.description,
    path: PRICING_POLICY_PATH,
  }),
  title: { absolute: PRICING_POLICY_META.title },
};

export default function PricingPolicy2026Page() {
  return (
    <main>
      <JsonLd
        id="pricing-policy-jsonld"
        data={[
          webPageJsonLd({
            name: PRICING_POLICY_META.title,
            description: PRICING_POLICY_META.description,
            path: PRICING_POLICY_PATH,
          }),
          breadcrumbListJsonLd([
            { name: "Trang chủ", path: "/" },
            { name: "Chính sách giá 2026", path: PRICING_POLICY_PATH },
          ]),
          faqPageJsonLd([...PRICING_FAQ_ITEMS, ...POS_FAQ_ITEMS]),
        ]}
      />
      <Nav />
      <PricingPolicy2026Content />
      <Footer />
    </main>
  );
}
