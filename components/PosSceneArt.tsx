import type { PosSlug } from "@/lib/pos/catalog";

/** Decorative POS scenes — ink stroke, aria-hidden. */

type SceneProps = { className?: string };

function stroke(w = 2) {
  return {
    stroke: "currentColor",
    strokeWidth: w,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

const sceneSvg = {
  "aria-hidden": true as const,
  viewBox: "0 0 200 160",
  fill: "none",
  className: "kuct-pos-scene",
};

const iconSvg = {
  "aria-hidden": true as const,
  viewBox: "0 0 24 24",
  fill: "none",
};

function FnbHero() {
  return (
    <svg {...sceneSvg}>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--a">
        <rect x="28" y="40" width="88" height="72" rx="10" {...stroke(2)} />
        <path d="M40 58h64M40 72h48M40 86h56" {...stroke(1.7)} />
        <circle cx="96" cy="98" r="7" {...stroke(1.8)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--b">
        <rect x="124" y="36" width="48" height="64" rx="8" {...stroke(2)} />
        <path d="M136 52h24M136 66h18M136 80h22" {...stroke(1.6)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--c">
        <path d="M52 124h96" {...stroke(2)} />
        <path d="M68 124v12M132 124v12" {...stroke(1.8)} />
      </g>
    </svg>
  );
}

function CafeHero() {
  return (
    <svg {...sceneSvg}>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--a">
        <path
          d="M70 48h48c6 0 12 8 12 18v28c0 14-12 26-36 26s-36-12-36-26V66c0-10 6-18 12-18Z"
          {...stroke(2)}
        />
        <path d="M130 70h14c8 0 14 6 14 14s-6 14-14 14h-10" {...stroke(2)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--b">
        <path d="M86 36c4 6 4 12 0 18M100 32c4 8 4 16 0 24M114 36c4 6 4 12 0 18" {...stroke(1.7)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--c">
        <rect x="36" y="118" width="128" height="18" rx="6" {...stroke(1.8)} />
        <path d="M52 127h40M108 127h40" {...stroke(1.5)} />
      </g>
    </svg>
  );
}

function TraSuaHero() {
  return (
    <svg {...sceneSvg}>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--a">
        <path d="M78 40h44l10 88H68Z" {...stroke(2)} />
        <path d="M84 72h32M88 92h24" {...stroke(1.6)} />
        <path d="M100 40V28" {...stroke(2)} />
        <circle cx="100" cy="24" r="4" {...stroke(1.8)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--b">
        <rect x="132" y="52" width="40" height="56" rx="8" {...stroke(2)} />
        <path d="M142 68h20M142 82h14M142 96h18" {...stroke(1.5)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--c">
        <circle cx="48" cy="100" r="16" {...stroke(1.8)} />
        <path d="M42 100h12M48 94v12" {...stroke(1.6)} />
      </g>
    </svg>
  );
}

function PetHero() {
  return (
    <svg {...sceneSvg}>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--a">
        <ellipse cx="100" cy="88" rx="36" ry="30" {...stroke(2)} />
        <circle cx="72" cy="56" r="12" {...stroke(1.8)} />
        <circle cx="128" cy="56" r="12" {...stroke(1.8)} />
        <circle cx="58" cy="80" r="10" {...stroke(1.8)} />
        <circle cx="142" cy="80" r="10" {...stroke(1.8)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--b">
        <rect x="36" y="118" width="128" height="22" rx="6" {...stroke(1.8)} />
        <path d="M48 129h36M96 129h56" {...stroke(1.5)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--c">
        <path d="M88 82h24M94 94h12" {...stroke(1.6)} />
      </g>
    </svg>
  );
}

function FashionHero() {
  return (
    <svg {...sceneSvg}>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--a">
        <path d="M40 44h120" {...stroke(2)} />
        <path d="M56 44v16M100 44v16M144 44v16" {...stroke(1.8)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--b">
        <path d="M56 60c8 4 16 4 24 0v52H56Z" {...stroke(2)} />
        <path d="M100 60c8 4 16 4 24 0v52h-24Z" {...stroke(2)} />
        <path d="M144 60c-6 4-12 4-18 0" {...stroke(1.8)} />
        <rect x="132" y="68" width="28" height="44" rx="4" {...stroke(1.8)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--c">
        <rect x="40" y="124" width="120" height="16" rx="5" {...stroke(1.7)} />
      </g>
    </svg>
  );
}

function RetailHero() {
  return (
    <svg {...sceneSvg}>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--a">
        <rect x="32" y="36" width="100" height="70" rx="10" {...stroke(2)} />
        <path d="M44 54h76M44 68h52M44 82h64" {...stroke(1.7)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--b">
        <rect x="124" y="52" width="44" height="70" rx="8" {...stroke(2)} />
        <circle cx="146" cy="78" r="10" {...stroke(1.8)} />
        <path d="M136 100h20M136 110h14" {...stroke(1.5)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--c">
        <path d="M48 120h64" {...stroke(2)} />
        <path d="M56 120v16M104 120v16" {...stroke(1.7)} />
      </g>
    </svg>
  );
}

export function PosHeroScene({
  slug,
  className = "w-full text-[var(--kuct-text)]",
}: {
  slug: PosSlug;
  className?: string;
}) {
  return (
    <div className={className} aria-hidden>
      {slug === "fnb" ? (
        <FnbHero />
      ) : slug === "cafe" ? (
        <CafeHero />
      ) : slug === "tra-sua" ? (
        <TraSuaHero />
      ) : slug === "pet" ? (
        <PetHero />
      ) : slug === "fashion" ? (
        <FashionHero />
      ) : (
        <RetailHero />
      )}
    </div>
  );
}

/** Problem row icons (24×24) — cycle by index. */
export function PosProblemIcon({
  index,
  className = "size-8",
}: {
  index: number;
  className?: string;
}) {
  const i = index % 3;
  if (i === 0) {
    return (
      <svg {...iconSvg} className={className}>
        <path d="M4 7h16v12H4Z" {...stroke(1.6)} />
        <path d="M8 7V5h8v2M8 12h8M8 15h5" {...stroke(1.5)} />
      </svg>
    );
  }
  if (i === 1) {
    return (
      <svg {...iconSvg} className={className}>
        <circle cx="12" cy="12" r="8" {...stroke(1.6)} />
        <path d="M12 8v4l3 2" {...stroke(1.6)} />
      </svg>
    );
  }
  return (
    <svg {...iconSvg} className={className}>
      <path d="M4 18V8l8-4 8 4v10" {...stroke(1.6)} />
      <path d="M9 18v-6h6v6" {...stroke(1.5)} />
    </svg>
  );
}

export type PosSolutionArtId = "counter" | "inventory" | "channels" | "plans";

function CounterScene({ className }: SceneProps) {
  return (
    <svg
      {...sceneSvg}
      className={`kuct-pos-scene kuct-pos-scene--card ${className ?? ""}`}
    >
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--a">
        <rect x="36" y="40" width="90" height="64" rx="9" {...stroke(2)} />
        <path d="M48 58h66M48 72h44M48 86h54" {...stroke(1.6)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--b">
        <circle cx="148" cy="72" r="18" {...stroke(2)} />
        <path d="M148 62v20M138 72h20" {...stroke(1.7)} />
      </g>
    </svg>
  );
}

function InventoryScene({ className }: SceneProps) {
  return (
    <svg
      {...sceneSvg}
      className={`kuct-pos-scene kuct-pos-scene--card ${className ?? ""}`}
    >
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--a">
        <rect x="40" y="36" width="48" height="88" rx="8" {...stroke(2)} />
        <path d="M50 52h28M50 68h28M50 84h20M50 100h24" {...stroke(1.5)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--b">
        <rect x="100" y="48" width="60" height="64" rx="8" {...stroke(2)} />
        <path d="M112 68h36M112 84h28M112 100h32" {...stroke(1.5)} />
      </g>
    </svg>
  );
}

function ChannelsScene({ className }: SceneProps) {
  return (
    <svg
      {...sceneSvg}
      className={`kuct-pos-scene kuct-pos-scene--card ${className ?? ""}`}
    >
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--a">
        <circle cx="70" cy="70" r="22" {...stroke(2)} />
        <circle cx="130" cy="70" r="22" {...stroke(2)} />
        <path d="M92 70h16" {...stroke(2)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--b">
        <rect x="56" y="108" width="88" height="24" rx="7" {...stroke(1.8)} />
        <path d="M70 120h60" {...stroke(1.5)} />
      </g>
    </svg>
  );
}

function PlansScene({ className }: SceneProps) {
  return (
    <svg
      {...sceneSvg}
      className={`kuct-pos-scene kuct-pos-scene--card ${className ?? ""}`}
    >
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--a">
        <rect x="32" y="48" width="40" height="72" rx="7" {...stroke(1.8)} />
        <rect x="80" y="36" width="40" height="84" rx="7" {...stroke(2)} />
        <rect x="128" y="56" width="40" height="64" rx="7" {...stroke(1.8)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--b">
        <path d="M40 72h24M40 88h18M88 56h24M88 72h20M136 76h24" {...stroke(1.5)} />
      </g>
    </svg>
  );
}

export function PosSolutionScene({
  id,
  className,
}: {
  id: PosSolutionArtId;
  className?: string;
}) {
  switch (id) {
    case "counter":
      return <CounterScene className={className} />;
    case "inventory":
      return <InventoryScene className={className} />;
    case "channels":
      return <ChannelsScene className={className} />;
    case "plans":
      return <PlansScene className={className} />;
    default:
      return <CounterScene className={className} />;
  }
}

/** Workflow step icons. */
export function PosWorkflowIcon({
  index,
  className = "size-7",
}: {
  index: number;
  className?: string;
}) {
  const i = index % 3;
  if (i === 0) {
    return (
      <svg {...iconSvg} className={className}>
        <rect x="4" y="5" width="16" height="14" rx="2" {...stroke(1.6)} />
        <path d="M8 10h8M8 14h5" {...stroke(1.5)} />
      </svg>
    );
  }
  if (i === 1) {
    return (
      <svg {...iconSvg} className={className}>
        <path d="M5 8h14v10H5Z" {...stroke(1.6)} />
        <path d="M9 8V6h6v2M12 12v4M10 14h4" {...stroke(1.5)} />
      </svg>
    );
  }
  return (
    <svg {...iconSvg} className={className}>
      <path d="M5 16 12 5l7 11Z" {...stroke(1.6)} />
      <path d="M12 10v3M12 15.5v.5" {...stroke(1.6)} />
    </svg>
  );
}
