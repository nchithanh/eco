import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MoreDetailView } from "@/components/MoreDetailView";
import { getMoreDetail, MORE_SLUGS, isMoreSlug } from "@/lib/more-details";
import { buildPageMetadata, SEO_LOCALE } from "@/lib/seo";

export function generateStaticParams() {
  return MORE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isMoreSlug(slug)) {
    return { title: "More" };
  }
  const detail = getMoreDetail(SEO_LOCALE, slug);
  return buildPageMetadata({
    title: detail.title,
    description: detail.intro,
    path: `/more/${slug}/`,
  });
}

export default async function MorePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isMoreSlug(slug)) {
    notFound();
  }

  return <MoreDetailView slug={slug} />;
}
