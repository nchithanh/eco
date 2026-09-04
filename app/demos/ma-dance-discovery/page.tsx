import type { Metadata } from "next";
import { MaDanceDiscovery } from "@/components/demos/MaDanceDiscovery";
import { maDanceDiscoveryCopy } from "@/lib/demos/ma-dance-discovery-copy";
import { buildPageMetadata } from "@/lib/seo";
import "./ma-dance-discovery.css";

const path = "/demos/ma-dance-discovery/";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: `${maDanceDiscoveryCopy.title} | Dolphin Software`,
    description: maDanceDiscoveryCopy.metaDescription,
    path,
    noIndex: true,
  }),
  title: { absolute: `${maDanceDiscoveryCopy.title} | Dolphin Software` },
};

export default function MaDanceDiscoveryPage() {
  return <MaDanceDiscovery />;
}
