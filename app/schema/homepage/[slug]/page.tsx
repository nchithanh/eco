import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SchemaJsonView } from "@/components/SchemaJsonView";
import {
 SCHEMA_HOMEPAGE_SLUGS,
 isSchemaHomepageSlug,
 schemaHomepageBySlug,
} from "@/lib/schema/catalog";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
 return SCHEMA_HOMEPAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
 params,
}: {
 params: Promise<{ slug: string }>;
}): Promise<Metadata> {
 const { slug } = await params;
 if (!isSchemaHomepageSlug(slug)) {
 return { title: "Schema · Homepage" };
 }
 return {
 ...buildPageMetadata({
 title: `Schema · Homepage · ${slug} — Dolphin Software`,
 description: `JSON content section homepage: ${slug}.`,
 path: `/schema/homepage/${slug}/`,
 noIndex: true,
 }),
 title: {
 absolute: `Schema · Homepage · ${slug} — Dolphin Software`,
 },
 };
}

export default async function SchemaHomepageSectionPage({
 params,
}: {
 params: Promise<{ slug: string }>;
}) {
 const { slug } = await params;
 if (!isSchemaHomepageSlug(slug)) notFound();

 return (
 <main>
 <Nav />
 <SchemaJsonView
 eyebrow="Schema · Homepage"
 title={slug}
 description="JSON section homepage. Raw:"
 data={schemaHomepageBySlug[slug]}
 rawPath={`/schema/homepage/${slug}.json`}
 crumbs={[
 { href: "/schema/", label: "schema" },
 { href: "/schema/homepage/", label: "homepage" },
 { href: `/schema/homepage/${slug}/`, label: slug },
 ]}
 />
 <Footer />
 </main>
 );
}
