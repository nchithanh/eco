import { permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import { assetPath } from "@/lib/asset";
import { buildPageMetadata } from "@/lib/seo";

const canonical = "/demo/tam-the/";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Tam Thể — Demo | Dolphin Software",
    description: "Redirect to /demo/tam-the/.",
    path: canonical,
    noIndex: true,
  }),
  title: { absolute: "Tam Thể — Demo | Dolphin Software" },
  robots: { index: false, follow: false },
};

export default function DemoIndexRedirectPage() {
  permanentRedirect(assetPath(canonical));
}
