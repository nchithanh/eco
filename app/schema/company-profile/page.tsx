import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SchemaJsonView } from "@/components/SchemaJsonView";
import { schemaCompanyProfile } from "@/lib/schema/catalog";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Schema · Company profile — Dolphin Software",
    description:
      "JSON hồ sơ năng lực 2026 — 18 tờ copy SoT (CRM & POS lõi).",
    path: "/schema/company-profile/",
    noIndex: true,
  }),
  title: { absolute: "Schema · Company profile — Dolphin Software" },
};

export default function SchemaCompanyProfilePage() {
  return (
    <main>
      <Nav />
      <SchemaJsonView
        eyebrow="Schema"
        title="Company profile"
        description="Hồ sơ năng lực 2026 (18 tờ). Runtime: /company-profile/. Raw:"
        data={schemaCompanyProfile}
        rawPath="/schema/company-profile.json"
        crumbs={[
          { href: "/schema/", label: "schema" },
          { href: "/schema/company/", label: "company" },
          { href: "/schema/company-profile/", label: "company-profile" },
        ]}
      />
      <Footer />
    </main>
  );
}
