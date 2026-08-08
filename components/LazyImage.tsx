"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { ImageWatermark } from "@/components/ImageWatermark";
import { useLocale } from "@/lib/i18n/LocaleProvider";

type LazyImageProps = Omit<ImageProps, "loading"> & {
 loading?: ImageProps["loading"];
 /** Extra classes for the loading overlay shell. */
 overlayClassName?: string;
 /** Show Dolphin logo watermark (default true for content images). */
 watermark?: boolean;
};

function srcKey(src: ImageProps["src"]): string {
 return typeof src === "string" ? src : "src" in src ? src.src : String(src);
}

function MediaLoading({ label }: { label: string }) {
 return (
 <div
 className="flex flex-col items-center justify-center gap-2 px-3"
 role="status"
 aria-live="polite"
 aria-busy="true"
 aria-label={label}
 >
 <div
 aria-hidden
 className="size-8 animate-spin rounded-full border-t-[var(--kuct-accent)] sm:size-9"
 />
 <div
 aria-hidden
 className="h-1 w-24 overflow-hidden rounded-full bg-white/70 ring-1 ring-white/80 sm:w-28"
 >
 <div className="h-full w-1/2 animate-kuct-glow rounded-full bg-gradient-to-r from-[#5b21b6] via-[#7c3aed] to-[#a78bfa]" />
 </div>
 </div>
 );
}

export function LazyImage({
 className,
 overlayClassName,
 onLoad,
 src,
 alt,
 loading = "lazy",
 watermark = true,
 priority,
 ...props
}: LazyImageProps) {
 const { t } = useLocale();
 const key = srcKey(src);
 const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
 const loaded = loadedSrc === key;
 const label = t.preview.loading;
 // Next.js: `priority` implies eager load — do not also pass loading="lazy"
 const loadingProp = priority ? undefined : loading;

 return (
 <>
 {!loaded ? (
 <div
 className={`pointer-events-none absolute inset-0 z-[1] flex items-center justify-center bg-gradient-to-br from-[#faf5ff]/90 via-white/75 to-[#ede9fe]/85 ${overlayClassName ?? ""}`}
 >
 <MediaLoading label={label} />
 </div>
 ) : null}
 <Image
 {...props}
 src={src}
 alt={alt}
 priority={priority}
 loading={loadingProp}
 className={`${className ?? ""} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
 onLoad={(event) => {
 setLoadedSrc(key);
 onLoad?.(event);
 }}
 />
 {watermark ? <ImageWatermark /> : null}
 </>
 );
}
