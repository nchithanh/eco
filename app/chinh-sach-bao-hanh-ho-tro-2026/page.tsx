import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { WarrantyPolicy2026Content } from "@/components/WarrantyPolicy2026Content";
import {
  breadcrumbListJsonLd,
  buildPageMetadata,
  webPageJsonLd,
} from "@/lib/seo";
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
      <JsonLd
        id="warranty-policy-jsonld"
        data={[
          webPageJsonLd({
            name: WARRANTY_POLICY_META.title,
            description: WARRANTY_POLICY_META.description,
            path: WARRANTY_POLICY_PATH,
          }),
          breadcrumbListJsonLd([
            { name: "Trang chủ", path: "/" },
            { name: "Bảo hành & Hỗ trợ 2026", path: WARRANTY_POLICY_PATH },
          ]),
        ]}
      />
      <Nav />
      <WarrantyPolicy2026Content />
      <Footer />
    </main>
  );
}
