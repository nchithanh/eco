import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TechDetailView } from "@/components/TechDetailView";
import { getTechDetail, TECH_SLUGS, isTechSlug } from "@/lib/tech-stack";
import { buildPageMetadata, SEO_LOCALE } from "@/lib/seo";

export function generateStaticParams() {
 return TECH_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
 params,
}: {
 params: Promise<{ slug: string }>;
}): Promise<Metadata> {
 const { slug } = await params;
 if (!isTechSlug(slug)) {
 return { title: "Tech" };
 }
 const detail = getTechDetail(SEO_LOCALE, slug);
 return buildPageMetadata({
 title: detail.name,
 description: detail.intro || detail.tagline,
 path: `/tech/${slug}/`,
 });
}

export default async function TechPage({
 params,
}: {
 params: Promise<{ slug: string }>;
}) {
 const { slug } = await params;
 if (!isTechSlug(slug)) {
 notFound();
 }

 return <TechDetailView slug={slug} />;
}
