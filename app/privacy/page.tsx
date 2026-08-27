import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PrivacyContent } from "@/components/PrivacyContent";
import { buildPageMetadata } from "@/lib/seo";
import { getPrivacyCopy } from "@/lib/i18n/privacy-copy";

const c = getPrivacyCopy("vi");
const path = "/privacy/";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path,
  }),
  title: { absolute: c.metaTitle },
};

export default function PrivacyPage() {
  return (
    <main>
      <Nav />
      <PrivacyContent />
      <Footer />
    </main>
  );
}
