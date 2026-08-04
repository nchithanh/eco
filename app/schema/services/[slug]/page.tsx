import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SchemaJsonView } from "@/components/SchemaJsonView";
import {
 SCHEMA_SERVICE_SLUGS,
 isSchemaServiceSlug,
 schemaServicesBySlug,
} from "@/lib/schema/catalog";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
 return SCHEMA_SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
 params,
}: {
 params: Promise<{ slug: string }>;
}): Promise<Metadata> {
 const { slug } = await params;
 if (!isSchemaServiceSlug(slug)) {
 return { title: "Schema · Service" };
 }
 return {
 ...buildPageMetadata({
 title: `Schema · Service · ${slug} — Dolphin Software`,
 description: `JSON detail cho service ${slug}.`,
 path: `/schema/services/${slug}/`,
 noIndex: true,
 }),
 title: {
 absolute: `Schema · Service · ${slug} — Dolphin Software`,
 },
 };
}

export default async function SchemaServiceDetailPage({
 params,
}: {
 params: Promise<{ slug: string }>;
}) {
 const { slug } = await params;
 if (!isSchemaServiceSlug(slug)) notFound();

 const data = schemaServicesBySlug[slug];

 return (
 <main>
 <Nav />
 <SchemaJsonView
 eyebrow="Schema · Service"
 title={slug}
 description="Chi tiết service. Raw:"
 data={data}
 rawPath={`/schema/services/${slug}.json`}
 crumbs={[
 { href: "/schema/", label: "schema" },
 { href: "/schema/company/", label: "company" },
 { href: "/schema/services/", label: "services" },
 { href: `/schema/services/${slug}/`, label: slug },
 ]}
 />
 <Footer />
 </main>
 );
}
