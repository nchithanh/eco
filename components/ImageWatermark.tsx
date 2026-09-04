import { ThemedLogoImg } from "@/components/ThemedLogoImg";

/** Subtle Dolphin logo overlay for content images (top-right). */
export function ImageWatermark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`kuct-img-watermark ${className}`.trim()}
    >
      <ThemedLogoImg
        width={28}
        height={28}
        className="h-6 w-auto object-contain sm:h-7"
      />
    </span>
  );
}
