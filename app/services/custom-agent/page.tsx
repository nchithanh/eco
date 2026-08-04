import { permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import { getAiTransformCopy } from "@/lib/i18n/ai-transform-copy";
import { assetPath } from "@/lib/asset";
import { buildPageMetadata } from "@/lib/seo";

const c = getAiTransformCopy("vi");
const canonical = "/ai-transform/";
const redirectTo = assetPath(canonical);

/** Legacy /services/custom-agent/ — prefer /ai-transform/. */
export const metadata: Metadata = {
 ...buildPageMetadata({
 title: c.metaTitle,
 description: c.metaDescription,
 path: canonical,
 noIndex: true,
 }),
 title: { absolute: c.metaTitle },
 robots: { index: false, follow: true },
};

export default function Page() {
 permanentRedirect(redirectTo);
}
