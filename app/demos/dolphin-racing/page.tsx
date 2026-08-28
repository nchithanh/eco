import { permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import { assetPath } from "@/lib/asset";
import { buildPageMetadata } from "@/lib/seo";

const canonical = "/demo/dolphin-racing/";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Dolphin Racing — Demo | Dolphin Software",
    description: "Redirect to /demo/dolphin-racing/.",
    path: canonical,
    noIndex: true,
  }),
  title: { absolute: "Dolphin Racing — Demo | Dolphin Software" },
  robots: { index: false, follow: false },
};

export default function DolphinRacingVaultRedirectPage() {
  permanentRedirect(assetPath(canonical));
}
