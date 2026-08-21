import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SchemaJsonView } from "@/components/SchemaJsonView";
import { schemaAgentsIndex } from "@/lib/schema/catalog";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
 ...buildPageMetadata({
 title: "Schema · Agents — Dolphin Software",
 description: "Index JSON agent products: Dolphin Care, Dolphin Ops, AI transform, Intelligence.",
 path: "/schema/agents/",
 noIndex: true,
 }),
 title: { absolute: "Schema · Agents — Dolphin Software" },
};

export default function SchemaAgentsIndexPage() {
 return (
 <main>
 <Nav />
 <SchemaJsonView
 eyebrow="Schema · Agents"
 title="Agents index"
 description="Danh sách agent schema. Chi tiết: /schema/agents/[slug]/. Raw:"
 data={schemaAgentsIndex}
 rawPath="/schema/agents/index.json"
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
