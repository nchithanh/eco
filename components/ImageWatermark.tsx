import { assetPath } from "@/lib/asset";

const WATERMARK_LOGO = "/brand/logo-dolphin.webp";

/** Subtle Dolphin logo overlay for content images (top-right). */
export function ImageWatermark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`kuct-img-watermark ${className}`.trim()}
    >
      <img
        src={assetPath(WATERMARK_LOGO)}
        alt=""
        width={28}
        height={28}
        className="h-6 w-auto object-contain sm:h-7"
      />
    </span>
  );
}
