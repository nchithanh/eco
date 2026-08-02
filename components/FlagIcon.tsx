import type { Locale } from "@/lib/i18n/types";

type FlagIconProps = {
  locale: Locale;
  className?: string;
};

/** Compact SVG flags — reliable on Windows where emoji flags often fail. */
export function FlagIcon({ locale, className = "size-4" }: FlagIconProps) {
  const common = {
    className: `${className} shrink-0 rounded-[2px] shadow-sm ring-1 ring-black/10`,
    viewBox: "0 0 24 16",
    "aria-hidden": true as const,
    focusable: false as const,
  };

  switch (locale) {
    case "vi":
      return (
        <svg {...common}>
          <rect width="24" height="16" fill="#DA251D" />
          <polygon
            fill="#FFFF00"
            points="12,3.2 13.2,6.9 17.1,6.9 13.95,9.2 15.15,12.9 12,10.55 8.85,12.9 10.05,9.2 6.9,6.9 10.8,6.9"
          />
        </svg>
      );
    case "en":
      return (
        <svg {...common}>
          <rect width="24" height="16" fill="#B22234" />
          <rect y="1.23" width="24" height="1.23" fill="#fff" />
          <rect y="3.69" width="24" height="1.23" fill="#fff" />
          <rect y="6.15" width="24" height="1.23" fill="#fff" />
          <rect y="8.62" width="24" height="1.23" fill="#fff" />
          <rect y="11.08" width="24" height="1.23" fill="#fff" />
          <rect y="13.54" width="24" height="1.23" fill="#fff" />
          <rect width="9.6" height="8.62" fill="#3C3B6E" />
        </svg>
      );
    case "ja":
      return (
        <svg {...common}>
          <rect width="24" height="16" fill="#fff" />
          <circle cx="12" cy="8" r="4.2" fill="#BC002D" />
        </svg>
      );
    default:
      return null;
  }
}
