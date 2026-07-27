import { notFound } from "next/navigation";
import { MoreDetailView } from "@/components/MoreDetailView";
import { MORE_SLUGS, isMoreSlug } from "@/lib/more-details";

export function generateStaticParams() {
  return MORE_SLUGS.map((slug) => ({ slug }));
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
