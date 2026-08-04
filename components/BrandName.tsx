import type { ReactNode } from "react";
import { assetPath } from "@/lib/asset";
import { BRAND_DISPLAY_NAME } from "@/components/Logo";

type BrandNameProps = {
 className?: string;
 size?: "xs" | "sm" | "md";
 /** Light mark for dark / gradient surfaces (announcement bar). */
 onDark?: boolean;
};

const LOGO_SRC = "/brand/logo-dolphin.webp";

const sizeClass = {
 xs: {
 logo: "h-[1.05em]",
 word: "text-[0.95em]",
 gap: "gap-1",
 },
 sm: {
 logo: "h-[1.15em]",
 word: "text-[1em]",
 gap: "gap-1.5",
 },
 md: {
 logo: "h-[1.25em]",
 word: "text-[1.05em]",
 gap: "gap-2",
 },
} as const;

/** Text-only brand for inline copy (no logo image). */
function BrandWord({
 size = "sm",
 onDark = false,
}: Pick<BrandNameProps, "size" | "onDark">) {
 const wordClass = {
 xs: "text-[0.95em]",
 sm: "text-[1em]",
 md: "text-[1.05em]",
 } as const;

 return (
 <span
 className={`font-display font-bold leading-none tracking-tight ${wordClass[size]} ${
 onDark ? "text-white" : "text-current"
 }`}
 >
 {BRAND_DISPLAY_NAME}
 </span>
 );
}

/** Logo + wordmark lockup for Nav, Hero, Footer. */
export function BrandName({
 className = "",
 size = "sm",
 onDark = false,
}: BrandNameProps) {
 const s = sizeClass[size];

 return (
 <span
 className={`inline-flex items-center ${s.gap} align-middle ${className}`}
 aria-label={BRAND_DISPLAY_NAME}
 >
 <img
 src={assetPath(LOGO_SRC)}
 alt=""
 className={`${s.logo} w-auto object-contain`}
 width={size === "xs" ? 20 : size === "sm" ? 24 : 28}
 height={size === "xs" ? 20 : size === "sm" ? 24 : 28}
 />
 <span
 className={`font-display font-bold leading-none tracking-tight ${s.word} ${
 onDark ? "text-white" : "text-current"
 }`}
 >
 {BRAND_DISPLAY_NAME}
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

const BRAND_SPLIT = /(Dolphin Software|Dolphin Kick|Dolphin Kich|KU THANH)/g;

/** Replaces brand phrases in a string with the logo-style BrandName. */
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
 if (
 part === "Dolphin Software" ||
 part === "Dolphin Kick" ||
 part === "Dolphin Kich" ||
 part === "KU THANH"
 ) {
 return (
 <BrandWord key={`brand-${index}`} size={size} onDark={onDark} />
 );
 }
 return part || null;
 })}
 </span>
 );
}

export function hasBrand(text: string): boolean {
 return (
 text.includes("Dolphin Software") ||
 text.includes("Dolphin Kick") ||
 text.includes("Dolphin Kich") ||
 text.includes("KU THANH")
 );
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
