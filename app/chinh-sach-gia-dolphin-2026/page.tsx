import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PricingPolicy2026Content } from "@/components/PricingPolicy2026Content";
import { buildPageMetadata } from "@/lib/seo";
import {
  PRICING_POLICY_META,
  PRICING_POLICY_PATH,
} from "@/lib/pricing/dolphin-pricing-policy-2026";

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
      <Nav />
      <PricingPolicy2026Content />
      <Footer />
    </main>
  );
}
