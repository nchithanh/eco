import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SchemaHomepageIndexContent } from "@/components/SchemaHomepageIndexContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Schema · Homepage — Dolphin Software",
    description: "Danh sách section homepage + JSON schema từng khối.",
    path: "/schema/homepage/",
    noIndex: true,
  }),
  title: { absolute: "Schema · Homepage — Dolphin Software" },
};

export default function SchemaHomepageIndexPage() {
  return (
    <main>
      <Nav />
      <SchemaHomepageIndexContent />
      <Footer />
    </main>
  );
}
