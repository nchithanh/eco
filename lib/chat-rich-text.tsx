import { Fragment, type ReactNode } from "react";
import { assetPath } from "@/lib/asset";

const LINK_RE = new RegExp(
  String.raw`(https?:\/\/[^\s<]+)|(\/(?:services|dolphin-care|dolphin-ops|dolphin-intelligence|ai-transform|news|about|careers|schema)[^\s<]*)`,
  "gi",
);

const TRAILING_PUNCT_RE = /[),.;:!?…」』】）]+$/;

function splitTrailingPunct(raw: string): { href: string; trailing: string } {
  const match = TRAILING_PUNCT_RE.exec(raw);
  if (!match) return { href: raw, trailing: "" };
  return {
    href: raw.slice(0, -match[0].length),
    trailing: match[0],
  };
}

function linkClassName(isUserBubble: boolean): string {
  return isUserBubble
    ? "underline underline-offset-2 decoration-white/70 hover:decoration-white"
    : "font-semibold text-[var(--kuct-accent)] underline underline-offset-2 decoration-[rgba(var(--kuct-accent-rgb),0.45)] hover:decoration-[var(--kuct-accent)]";
}

function renderLinkedPlain(
  text: string,
  keyPrefix: string,
  isUserBubble: boolean,
): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(LINK_RE.source, LINK_RE.flags);
  let i = 0;

  while ((match = re.exec(text)) !== null) {
    const raw = match[0];
    const start = match.index;
    if (start > last) {
      nodes.push(
        <Fragment key={`${keyPrefix}-t-${i++}`}>
          {text.slice(last, start)}
        </Fragment>,
      );
    }

    const { href: cleaned, trailing } = splitTrailingPunct(raw);
    if (!cleaned) {
      nodes.push(
        <Fragment key={`${keyPrefix}-t-${i++}`}>{raw}</Fragment>,
      );
      last = start + raw.length;
      continue;
    }

    const isAbsolute = /^https?:\/\//i.test(cleaned);
    const href = isAbsolute
      ? cleaned
      : assetPath(cleaned.startsWith("/") ? cleaned : `/${cleaned}`);

    nodes.push(
      <a
        key={`${keyPrefix}-a-${i++}`}
        href={href}
        className={`pointer-events-auto ${linkClassName(isUserBubble)}`}
        {...(isAbsolute
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {cleaned}
      </a>,
    );

    if (trailing) {
      nodes.push(
        <Fragment key={`${keyPrefix}-p-${i++}`}>{trailing}</Fragment>,
      );
    }

    last = start + raw.length;
  }

  if (last < text.length) {
    nodes.push(
      <Fragment key={`${keyPrefix}-t-${i++}`}>{text.slice(last)}</Fragment>,
    );
  }

  return nodes;
}

type RenderChatRichTextOptions = {
  /** User bubble uses light underline on accent background. */
  isUserBubble?: boolean;
};

/** Render chat text: `**bold**` + clickable http(s) and known site paths. */
export function renderChatRichText(
  text: string,
  options: RenderChatRichTextOptions = {},
): ReactNode {
  if (!text) return null;
  const isUserBubble = Boolean(options.isUserBubble);
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    const bold = /^\*\*([^*]+)\*\*$/.exec(part);
    if (bold) {
      return (
        <strong key={`b-${index}`} className="font-semibold">
          {renderLinkedPlain(bold[1], `b${index}`, isUserBubble)}
        </strong>
      );
    }
    return (
      <Fragment key={`p-${index}`}>
        {renderLinkedPlain(part, `p${index}`, isUserBubble)}
      </Fragment>
    );
  });
}
