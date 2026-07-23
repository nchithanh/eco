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

/** Replaces every "KU THANH" in a string with the logo-style BrandName. */
export function BrandText({
  children,
  className,
  size = "sm",
  onDark = false,
}: BrandTextProps) {
  const parts = children.split(/(KU THANH)/g);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part === "KU THANH") {
          return (
            <span key={`brand-${index}`}>
              {"\u00A0"}
              <BrandName size={size} onDark={onDark} />
            </span>
          );
        }
        // Trim trailing space before brand — BrandName supplies its own.
        const cleaned =
          parts[index + 1] === "KU THANH" ? part.replace(/\s+$/, "") : part;
        return cleaned ? <span key={`text-${index}`}>{cleaned}</span> : null;
      })}
    </span>
  );
}

export function hasBrand(text: string): boolean {
  return text.includes("KU THANH");
}

export function renderMaybeBrand(
  text: string,
  opts?: Pick<BrandTextProps, "size" | "onDark" | "className">,
): ReactNode {
  if (!hasBrand(text)) return text;
  return <BrandText {...opts}>{text}</BrandText>;
}
