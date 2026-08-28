import type { Metadata } from "next";
import { DolphinRacingLanding } from "@/components/demos/DolphinRacingLanding";
import { dolphinRacingCopy } from "@/lib/demos/dolphin-racing-copy";
import { buildPageMetadata } from "@/lib/seo";
import "./dolphin-racing.css";

const path = "/demo/dolphin-racing/";
const c = dolphinRacingCopy;

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path,
    noIndex: true,
  }),
  title: { absolute: c.metaTitle },
};

export default function DolphinRacingDemoPage() {
  return <DolphinRacingLanding />;
}
