import { notFound } from "next/navigation";
import { TechDetailView } from "@/components/TechDetailView";
import { TECH_SLUGS, isTechSlug } from "@/lib/tech-stack";

export function generateStaticParams() {
  return TECH_SLUGS.map((slug) => ({ slug }));
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
