import type { ReactNode } from "react";
import { assetPath } from "@/lib/asset";

const PATH_RE =
 /(\/(?:services\/[\w-]+|about|careers|dolphin-care|dolphin-ops|ai-transform|works\/[\w-]+)\/?)/g;

/** Turn plain `/path/` mentions in FAQ answers into real anchors. */
export function FaqAnswerText({
 text,
 className = "font-medium text-[var(--kuct-accent)] underline-offset-2 transition hover:underline",
}: {
 text: string;
 className?: string;
}) {
 const nodes: ReactNode[] = [];
 let last = 0;
 let match: RegExpExecArray | null;
 let key = 0;
 const re = new RegExp(PATH_RE.source, "g");

 while ((match = re.exec(text))) {
 if (match.index > last) {
 nodes.push(text.slice(last, match.index));
 }
 const raw = match[1];
 const path = raw.endsWith("/") ? raw : `${raw}/`;
 nodes.push(
 <a key={`faq-link-${key++}`} href={assetPath(path)} className={className}>
 {raw}
 </a>,
 );
 last = match.index + match[0].length;
 }

 if (last < text.length) {
 nodes.push(text.slice(last));
 }

 return <>{nodes.length ? nodes : text}</>;
}
