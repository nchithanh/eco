import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SchemaJsonView } from "@/components/SchemaJsonView";
import { schemaServicesIndex } from "@/lib/schema/catalog";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
 ...buildPageMetadata({
 title: "Schema · Services — Dolphin Software",
 description: "Index JSON các dịch vụ Dolphin Software.",
 path: "/schema/services/",
 noIndex: true,
 }),
 title: { absolute: "Schema · Services — Dolphin Software" },
};

export default function SchemaServicesIndexPage() {
 return (
 <main>
 <Nav />
 <SchemaJsonView
 eyebrow="Schema · Services"
 title="Services index"
 description="Danh sách service schema. Chi tiết: /schema/services/[slug]/. Raw:"
 data={schemaServicesIndex}
 rawPath="/schema/services/index.json"
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
