import type { Metadata } from "next";
import { AiTransformPage } from "@/components/AiTransformContent";
import { JsonLd } from "@/components/JsonLd";
import { getAiTransformCopy } from "@/lib/i18n/ai-transform-copy";
import {
  buildPageMetadata,
  faqPageJsonLd,
  SEO_LOCALE,
  serviceJsonLd,
} from "@/lib/seo";

const c = getAiTransformCopy(SEO_LOCALE);
const path = "/ai-transform/";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path,
  }),
  title: { absolute: c.metaTitle },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: c.eyebrow || "AI Transformation",
            description: c.metaDescription,
            path,
          }),
          faqPageJsonLd(c.faqItems),
        ]}
      />
      <AiTransformPage />
    </>
  );
}
