"use client";

import { assetPath } from "@/lib/asset";
import { brandLogoSrc } from "@/lib/brand-logo";
import { useTheme } from "@/lib/theme";

type ThemedLogoImgProps = {
  className?: string;
  width: number;
  height: number;
  alt?: string;
};

/** Dolphin mark that follows `data-theme` (violet default; orangered archive). */
export function ThemedLogoImg({
  className,
  width,
  height,
  alt = "",
}: ThemedLogoImgProps) {
  const { theme } = useTheme();
  return (
    <img
      src={assetPath(brandLogoSrc(theme))}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
}
