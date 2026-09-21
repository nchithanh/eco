import { permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import { assetPath } from "@/lib/asset";
import { buildPageMetadata } from "@/lib/seo";

const canonical = "/demos/admin/contract/hop-dong-ma/";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Hợp đồng dịch vụ phần mềm — MA Dance",
    description: "Redirect to /demos/admin/contract/hop-dong-ma/.",
    path: canonical,
    noIndex: true,
  }),
  title: { absolute: "Hợp đồng MA Dance | Dolphin Software" },
  robots: { index: false, follow: false },
};

export default function HopDongMaVaultRedirectPage() {
  permanentRedirect(assetPath(canonical));
}
