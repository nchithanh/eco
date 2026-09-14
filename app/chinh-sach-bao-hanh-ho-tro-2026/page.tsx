import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WarrantyPolicy2026Content } from "@/components/WarrantyPolicy2026Content";
import { buildPageMetadata } from "@/lib/seo";
import {
  WARRANTY_POLICY_META,
  WARRANTY_POLICY_PATH,
} from "@/lib/pricing/dolphin-warranty-policy-2026";
import "../chinh-sach-gia-dolphin-2026/pricing-policy.css";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: WARRANTY_POLICY_META.title,
    description: WARRANTY_POLICY_META.description,
    path: WARRANTY_POLICY_PATH,
  }),
  title: { absolute: WARRANTY_POLICY_META.title },
};

export default function WarrantyPolicy2026Page() {
  return (
    <main>
      <Nav />
      <WarrantyPolicy2026Content />
      <Footer />
    </main>
  );
}
