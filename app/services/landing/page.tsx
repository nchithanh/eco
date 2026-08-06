import type { Metadata } from "next";
import { LandingPageContent } from "@/components/LandingPageContent";
import { JsonLd } from "@/components/JsonLd";
import { getLandingCopy } from "@/lib/i18n/landing-copy";
import { formatPackageMoney, PACKAGE_PRICES_VND } from "@/lib/pricing-fx";
import {
  buildPageMetadata,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/seo";

/** VI meta for Google / GEO (landing is VN-first ICP). */
const c = getLandingCopy("vi");
const path = "/services/landing/";
const landingPriceVi = formatPackageMoney("vi", PACKAGE_PRICES_VND.landing.now);
const faqForLd = c.faqItems.map((item) => ({
  q: item.q,
  a: item.a.replaceAll("{{landingPrice}}", landingPriceVi),
}));

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path,
  }),
  title: { absolute: c.metaTitle },
};

export default function LandingServicePage() {
  return (
    <>
      <JsonLd
        id="landing-service-jsonld"
        data={[
          serviceJsonLd({
            name: c.title,
            description: c.metaDescription,
            path,
          }),
          faqPageJsonLd(faqForLd),
        ]}
      />
      <LandingPageContent />
    </>
  );
}
