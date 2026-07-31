import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CareersContent } from "@/components/CareersContent";
import { careersByLocale } from "@/lib/i18n/careers-copy";
import { buildPageMetadata, SEO_LOCALE } from "@/lib/seo";

const c = careersByLocale[SEO_LOCALE];

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: c.meta.title,
    description: c.meta.description,
    path: "/careers/",
  }),
  title: { absolute: c.meta.title },
};

export default function CareersPage() {
  return (
    <main>
      <Nav />
      <CareersContent />
      <Footer />
    </main>
  );
}
