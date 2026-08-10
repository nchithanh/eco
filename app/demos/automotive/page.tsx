import type { Metadata } from "next";
import { AutomotiveLanding } from "@/components/demos/AutomotiveLanding";
import { automotiveDemoCopy } from "@/lib/demos/automotive-copy";
import { buildPageMetadata } from "@/lib/seo";
import "./automotive.css";

const path = "/demos/automotive/";
const c = automotiveDemoCopy;

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path,
    noIndex: true,
  }),
  title: { absolute: c.metaTitle },
};

export default function AutomotiveDemoPage() {
  return <AutomotiveLanding />;
}
