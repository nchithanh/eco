/** Subtle KU mark overlay for content images (top-right). */
export function ImageWatermark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`kuct-img-watermark ${className}`.trim()}
    >
      <svg
        viewBox="0 0 34 28"
        className="h-6 w-auto sm:h-7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="34" height="28" rx="6" fill="var(--kuct-accent)" />
        <text
          x="17"
          y="19"
          textAnchor="middle"
          fill="var(--kuct-on-accent)"
          className="font-display"
          style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.02em" }}
        >
          KU
        </text>
      </svg>
    </span>
  );
}
