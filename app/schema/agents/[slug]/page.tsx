import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SchemaJsonView } from "@/components/SchemaJsonView";
import {
 SCHEMA_AGENT_SLUGS,
 isSchemaAgentSlug,
 schemaAgentsBySlug,
} from "@/lib/schema/catalog";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
 return SCHEMA_AGENT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
 params,
}: {
 params: Promise<{ slug: string }>;
}): Promise<Metadata> {
 const { slug } = await params;
 if (!isSchemaAgentSlug(slug)) {
 return { title: "Schema · Agent" };
 }
 return {
 ...buildPageMetadata({
 title: `Schema · Agent · ${slug} — Dolphin Software`,
 description: `JSON detail cho agent ${slug}.`,
 path: `/schema/agents/${slug}/`,
 noIndex: true,
 }),
 title: {
 absolute: `Schema · Agent · ${slug} — Dolphin Software`,
 },
 };
}

export default async function SchemaAgentDetailPage({
 params,
}: {
 params: Promise<{ slug: string }>;
}) {
 const { slug } = await params;
 if (!isSchemaAgentSlug(slug)) notFound();

 const data = schemaAgentsBySlug[slug];

 return (
 <main>
 <Nav />
 <SchemaJsonView
 eyebrow="Schema · Agent"
 title={slug}
 description="Chi tiết agent product. Raw:"
 data={data}
 rawPath={`/schema/agents/${slug}.json`}
 crumbs={[
 { href: "/schema/", label: "schema" },
 { href: "/schema/agents/", label: "agents" },
 { href: `/schema/agents/${slug}/`, label: slug },
 ]}
 />
 <Footer />
 </main>
 );
}
