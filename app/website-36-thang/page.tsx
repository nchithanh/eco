import type { Metadata } from "next";
import { Website36ThangPage } from "@/components/Website36ThangContent";
import { JsonLd } from "@/components/JsonLd";
import { getWebsite36ThangCopy } from "@/lib/i18n/website-36-thang-copy";
import {
  buildPageMetadata,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/seo";

const c = getWebsite36ThangCopy();
const path = "/website-36-thang/";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path,
    image: c.images.hero.src,
    imageAlt: c.images.hero.alt,
  }),
  title: { absolute: c.metaTitle },
};

export default function Page() {
  return (
    <>
      <JsonLd
        id="website-36-thang-jsonld"
        data={[
          serviceJsonLd({
            name: "Thiết kế website doanh nghiệp + bảo hành 36 tháng",
            description: c.metaDescription,
            path,
          }),
          faqPageJsonLd(c.faq.items),
        ]}
      />
      <Website36ThangPage />
    </>
  );
}
