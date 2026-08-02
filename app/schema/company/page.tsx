import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SchemaJsonView } from "@/components/SchemaJsonView";
import { schemaCompany } from "@/lib/schema/catalog";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Schema · Company — Dolphin Software",
    description: "JSON overview: company, values, services map, Care, AI, FAQ.",
    path: "/schema/company/",
    noIndex: true,
  }),
  title: { absolute: "Schema · Company — Dolphin Software" },
};

export default function SchemaCompanyPage() {
  return (
    <main>
      <Nav />
      <SchemaJsonView
        eyebrow="Schema"
        title="Company overview"
        description="Tổng quan knowledge pack Dolphin. Raw:"
        data={schemaCompany}
        rawPath="/schema/company.json"
        crumbs={[
          { href: "/schema/", label: "schema" },
          { href: "/schema/company/", label: "company" },
          { href: "/schema/services/", label: "services" },
          { href: "/schema/agents/", label: "agents" },
        ]}
      />
      <Footer />
    </main>
  );
}
