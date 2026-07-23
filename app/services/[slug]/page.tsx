import { notFound } from "next/navigation";
import { ServiceDetailView } from "@/components/ServiceDetailView";
import {
  SERVICE_SLUGS,
  isServiceSlug,
} from "@/lib/i18n/service-details";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isServiceSlug(slug)) {
    notFound();
  }

  return <ServiceDetailView slug={slug} />;
}
