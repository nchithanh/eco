import { notFound } from "next/navigation";
import { CustomAgentPage } from "@/components/CustomAgentContent";
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

  if (slug === "custom-agent") {
    return <CustomAgentPage />;
  }

  return <ServiceDetailView slug={slug} />;
}
