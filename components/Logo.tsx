import { ThemedLogoImg } from "@/components/ThemedLogoImg";
export { BRAND_LOGO_ORANGERED_SRC, BRAND_LOGO_SRC } from "@/lib/brand-logo";

export const BRAND_DISPLAY_NAME = "Dolphin Software";
export const BRAND_TAGLINE = "Since 2026";
/** Canonical motto — English, do not translate. Pair with the Dolphin logo. */
export const BRAND_MOTTO = "Dreams come true when you don't sleep";

type LogoProps = {
 className?: string;
 imageClassName?: string;
 variant?: "full" | "mark";
 /** Logo image + wordmark (Nav, Hero). */
 showWordmark?: boolean;
 wordmarkClassName?: string;
 wordmarkTaglineClassName?: string;
};

const defaultImageClass = "h-9 w-auto sm:h-10";
const defaultWordmarkClass =
 "font-display text-base font-bold leading-none tracking-tight text-[var(--kuct-text)] sm:text-lg";
const defaultTaglineClass =
 "text-[9px] font-medium tracking-[0.34em] text-[var(--kuct-muted)] uppercase sm:text-[10px]";

/** Dolphin Software logo image with optional wordmark. */
export function Logo({
 className,
 imageClassName,
 variant = "full",
 showWordmark = false,
 wordmarkClassName,
 wordmarkTaglineClassName,
}: LogoProps) {
 const imgClass =
 imageClassName ??
 className ??
 (variant === "mark" ? "h-8 w-auto" : defaultImageClass);

 const image = (
 <ThemedLogoImg
 className={`shrink-0 object-contain ${imgClass}`}
 width={variant === "mark" ? 32 : 40}
 height={variant === "mark" ? 32 : 40}
 />
 );

 if (!showWordmark || variant === "mark") {
 return image;
 }

 return (
 <span className="inline-flex min-w-0 max-w-full items-center gap-2">
 {image}
 <span className="hidden min-w-0 flex-col leading-none sm:flex">
 <span className={`truncate ${wordmarkClassName ?? defaultWordmarkClass}`}>
 {BRAND_DISPLAY_NAME}
 </span>
 <span
 className={`mt-1 truncate ${wordmarkTaglineClassName ?? defaultTaglineClass}`}
 >
 {BRAND_TAGLINE}
 </span>
 </span>
 </span>
 );
}
