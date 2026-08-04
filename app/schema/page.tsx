import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SchemaIndexContent } from "@/components/SchemaIndexContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
 ...buildPageMetadata({
 title: "Schema — Dolphin Software",
 description:
 "Danh mục schema JSON: company overview, services, agents.",
 path: "/schema/",
 noIndex: true,
 }),
 title: { absolute: "Schema — Dolphin Software" },
};

export default function SchemaIndexPage() {
 return (
 <main>
 <Nav />
 <SchemaIndexContent />
 <Footer />
 </main>
 );
}
