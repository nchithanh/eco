import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkDetailView } from "@/components/WorkDetailView";
import { getWorkDetail, WORK_SLUGS, isWorkSlug } from "@/lib/works-details";
import { buildPageMetadata, SEO_LOCALE } from "@/lib/seo";

export function generateStaticParams() {
  return WORK_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isWorkSlug(slug)) {
    return { title: "Works" };
  }
  const detail = getWorkDetail(SEO_LOCALE, slug);
  return buildPageMetadata({
    title: detail.title,
    description: detail.intro,
    path: `/works/${slug}/`,
    image: detail.image,
  });
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isWorkSlug(slug)) {
    notFound();
  }

  return <WorkDetailView slug={slug} />;
}
