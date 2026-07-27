type LogoProps = {
  className?: string;
  variant?: "full" | "mark";
};

/** Accent KU mark + THANH wordmark. */
export function Logo({ className, variant = "full" }: LogoProps) {
  if (variant === "mark") {
    return (
      <svg
        className={className}
        viewBox="0 0 34 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="KU THANH"
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
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 230 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="KU THANH"
    >
      <rect x="2" y="8" width="34" height="28" rx="6" fill="var(--kuct-accent)" />
      <text
        x="19"
        y="27"
        textAnchor="middle"
        fill="var(--kuct-on-accent)"
        className="font-display"
        style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.02em" }}
      >
        KU
      </text>

      <text
        x="46"
        y="24"
        fill="currentColor"
        className="font-display"
        style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.12em" }}
      >
        THANH
      </text>
      <text
        x="46"
        y="40"
        fill="currentColor"
        className="font-display"
        style={{ fontSize: 9, fontWeight: 500, letterSpacing: "0.38em", opacity: 0.75 }}
      >
        SINCE 2026
      </text>
    </svg>
  );
}
