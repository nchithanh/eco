import type { ReactNode } from "react";

type BrandNameProps = {
  className?: string;
  size?: "xs" | "sm" | "md";
  /** Light mark for dark / gradient surfaces (announcement bar). */
  onDark?: boolean;
};

const sizeClass = {
  xs: {
    wrap: "gap-1",
    mark: "h-[1.05em] min-w-[1.35em] px-[0.28em] text-[0.68em]",
    word: "text-[0.95em] tracking-[0.14em]",
  },
  sm: {
    wrap: "gap-1.5",
    mark: "h-[1.15em] min-w-[1.5em] px-[0.32em] text-[0.72em]",
    word: "text-[1em] tracking-[0.14em]",
  },
  md: {
    wrap: "gap-2",
    mark: "h-[1.25em] min-w-[1.65em] px-[0.35em] text-[0.75em]",
    word: "text-[1.05em] tracking-[0.16em]",
  },
} as const;

/** Inline brand lockup matching the logo: purple KU mark + THANH. */
export function BrandName({
  className = "",
  size = "sm",
  onDark = false,
}: BrandNameProps) {
  const s = sizeClass[size];

  return (
    <span
      className={`inline-flex items-center ${s.wrap} align-middle ${className}`}
      aria-label="KU THANH"
    >
      <span
        className={`inline-flex items-center justify-center rounded-[0.28em] font-display font-bold leading-none ${s.mark} ${
          onDark
            ? "bg-white text-[#7c3aed]"
            : "bg-[var(--kuct-accent)] text-[var(--kuct-on-accent)]"
        }`}
      >
        KU
      </span>
      <span
        className={`font-display font-bold leading-none ${s.word} ${
          onDark ? "text-white" : "text-current"
        }`}
      >
        THANH
      </span>
    </span>
  );
}

type BrandTextProps = {
  children: string;
  className?: string;
  size?: BrandNameProps["size"];
  onDark?: boolean;
};

const BRAND_SPLIT = /(Dolphin Kick|KU THANH)/g;

/** Replaces brand phrases in a string with the logo-style BrandName (KU THANH). */
export function BrandText({
  children,
  className,
  size = "sm",
  onDark = false,
}: BrandTextProps) {
  const parts = children.split(BRAND_SPLIT);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part === "Dolphin Kick" || part === "KU THANH") {
          return (
            <span key={`brand-${index}`}>
              {"\u00A0"}
              <BrandName size={size} onDark={onDark} />
            </span>
          );
        }
        // Trim trailing space before brand — BrandName supplies its own.
        const next = parts[index + 1];
        const cleaned =
          next === "Dolphin Kick" || next === "KU THANH"
            ? part.replace(/\s+$/, "")
            : part;
        return cleaned ? <span key={`text-${index}`}>{cleaned}</span> : null;
      })}
    </span>
  );
}

export function hasBrand(text: string): boolean {
  return text.includes("Dolphin Kick") || text.includes("KU THANH");
}

export function renderMaybeBrand(
  text: string,
  opts?: Pick<BrandTextProps, "size" | "onDark" | "className">,
): ReactNode {
  if (!hasBrand(text)) return text;
  return <BrandText {...opts}>{text}</BrandText>;
}

/** Marks accent words in copy: `[[keyword]]` → serif gradient accent (TechStack-style). */
type AccentTextProps = {
  children: string;
  className?: string;
};

const ACCENT_TITLE_CLASS = "font-serif-accent font-normal";

/** Renders dictionary titles with optional `[[accent]]` markers. */
export function AccentText({ children, className }: AccentTextProps) {
  const nodes: ReactNode[] = [];
  const re = /\[\[(.+?)\]\]/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let accentIndex = 0;

  while ((match = re.exec(children)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(children.slice(lastIndex, match.index));
    }
    nodes.push(
      <span
        key={`accent-${accentIndex++}`}
        className={
          className ? `${ACCENT_TITLE_CLASS} ${className}` : ACCENT_TITLE_CLASS
        }
      >
        {match[1]}
      </span>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < children.length) {
    nodes.push(children.slice(lastIndex));
  }

  return <>{nodes}</>;
}

/** Strip `[[…]]` markers for plain-string comparisons / SEO. */
export function stripAccentMarks(text: string): string {
  return text.replace(/\[\[(.+?)\]\]/g, "$1");
}
