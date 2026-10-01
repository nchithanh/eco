import { permanentRedirect } from "next/navigation";
import { assetPath } from "@/lib/asset";
import { isWorkSlug, WORK_SLUGS } from "@/lib/works-details";

export function generateStaticParams() {
  return WORK_SLUGS.map((slug) => ({ slug }));
}

/** GEO alias — detail stays canonical at /works/[slug]/. No ma-dance until approved facts. */
export default async function CaseStudyAliasPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isWorkSlug(slug)) {
    permanentRedirect(assetPath("/case-studies/"));
  }
  permanentRedirect(assetPath(`/works/${slug}/`));
}
