import { notFound } from "next/navigation";
import { WorkDetailView } from "@/components/WorkDetailView";
import { WORK_SLUGS, isWorkSlug } from "@/lib/works-details";

export function generateStaticParams() {
  return WORK_SLUGS.map((slug) => ({ slug }));
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
