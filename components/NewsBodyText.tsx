import type { ReactNode } from "react";
import { assetPath } from "@/lib/asset";

const MD_LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;
const PATH_RE =
  /(\/(?:services\/[\w-]+|about|careers|dolphin-care|ai-transform|works\/[\w-]+|news\/[\w-]+)\/?|\/#[\w-]+)/g;

const linkClassName =
  "font-medium text-[var(--kuct-accent)] underline-offset-2 transition hover:underline";

function pushTextSegment(
  nodes: ReactNode[],
  segment: string,
  keyRef: { n: number },
) {
  if (!segment) return;
  let last = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(PATH_RE.source, "g");
  while ((match = re.exec(segment))) {
    if (match.index > last) {
      nodes.push(segment.slice(last, match.index));
    }
    const raw = match[1];
    const path = raw.startsWith("/#")
      ? raw
      : raw.endsWith("/")
        ? raw
        : `${raw}/`;
    nodes.push(
      <a key={`news-link-${keyRef.n++}`} href={assetPath(path)} className={linkClassName}>
        {raw}
      </a>,
    );
    last = match.index + match[0].length;
  }
  if (last < segment.length) {
    nodes.push(segment.slice(last));
  }
}

/** Parse inline markdown links and internal `/path/` mentions in news body copy. */
export function NewsBodyText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const keyRef = { n: 0 };
  let last = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(MD_LINK_RE.source, "g");

  while ((match = re.exec(text))) {
    if (match.index > last) {
      pushTextSegment(nodes, text.slice(last, match.index), keyRef);
    }
    const href = match[2];
    const isInternal = href.startsWith("/");
    nodes.push(
      <a
        key={`news-md-${keyRef.n++}`}
        href={isInternal ? assetPath(href) : href}
        className={linkClassName}
        {...(!isInternal ? { rel: "noopener noreferrer", target: "_blank" } : {})}
      >
        {match[1]}
      </a>,
    );
    last = match.index + match[0].length;
  }

  if (last < text.length) {
    pushTextSegment(nodes, text.slice(last), keyRef);
  }

  return <>{nodes.length ? nodes : text}</>;
}
