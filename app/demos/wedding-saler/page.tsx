import type { Metadata } from "next";
import { WeddingSalerLanding } from "@/components/demos/WeddingSalerLanding";
import { weddingSalerDemoCopy } from "@/lib/demos/wedding-saler-copy";
import { buildPageMetadata } from "@/lib/seo";
import "./wedding-saler.css";

const path = "/demos/wedding-saler/";
const c = weddingSalerDemoCopy;

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path,
    noIndex: true,
  }),
  title: { absolute: c.metaTitle },
};

export default function WeddingSalerDemoPage() {
  return <WeddingSalerLanding />;
}
