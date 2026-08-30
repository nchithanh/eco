"use client";

/** Large multi-layer scenes for pastel platform cards (Jasper-style). */
export type PastelArtId =
  | "agents"
  | "pipeline"
  | "orbit"
  | "listen"
  | "bottleneck"
  | "build"
  | "improve"
  | "checkpoint"
  | "actions";

const svgProps = {
  "aria-hidden": true as const,
  viewBox: "0 0 200 160",
  fill: "none",
  className: "kuct-pastel-scene",
};

function stroke(w = 2) {
  return {
    stroke: "currentColor",
    strokeWidth: w,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

function AgentsScene() {
  return (
    <svg {...svgProps}>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--a">
        <rect x="28" y="36" width="72" height="58" rx="8" {...stroke(2)} />
        <path d="M40 50h48M40 62h36M40 74h28" {...stroke(1.8)} />
        <circle cx="88" cy="82" r="6" {...stroke(1.8)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--b">
        <rect x="92" y="22" width="64" height="48" rx="8" {...stroke(2)} />
        <circle cx="112" cy="40" r="8" {...stroke(1.8)} />
        <path d="M126 36h18M126 46h14" {...stroke(1.8)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--c">
        <rect x="108" y="78" width="58" height="44" rx="8" {...stroke(2)} />
        <path d="M120 94h34M120 106h24" {...stroke(1.8)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--d">
        <path d="M54 118l8 14 16-22" {...stroke(2.2)} />
        <path d="M158 48l10 6-4 12" {...stroke(2)} />
        <path d="M70 28l-6-10 12-2" {...stroke(2)} />
      </g>
    </svg>
  );
}

function PipelineScene() {
  return (
    <svg {...svgProps}>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--a">
        <rect x="24" y="28" width="44" height="32" rx="6" {...stroke(2)} />
        <path d="M34 40h24M34 50h16" {...stroke(1.7)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--b">
        <path d="M68 44h22" {...stroke(2)} />
        <path d="M84 38l8 6-8 6" {...stroke(2)} />
        <rect x="90" y="50" width="44" height="32" rx="6" {...stroke(2)} />
        <path d="M100 62h24M100 72h16" {...stroke(1.7)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--c">
        <path d="M112 82v16" {...stroke(2)} />
        <path d="M112 98l38 22V76Z" {...stroke(2.2)} />
        <circle cx="134" cy="98" r="4" fill="currentColor" opacity="0.35" />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--d">
        <rect x="36" y="96" width="36" height="28" rx="6" {...stroke(1.8)} />
        <path d="M54 96V82h36" {...stroke(1.8)} />
        <circle cx="164" cy="54" r="5" {...stroke(1.8)} />
      </g>
    </svg>
  );
}

function OrbitScene() {
  return (
    <svg {...svgProps}>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--orbit-a">
        <ellipse cx="100" cy="80" rx="62" ry="28" {...stroke(2)} />
        <circle cx="162" cy="80" r="5" {...stroke(1.8)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--orbit-b">
        <ellipse
          cx="100"
          cy="80"
          rx="62"
          ry="28"
          transform="rotate(70 100 80)"
          {...stroke(2)}
        />
        <circle cx="100" cy="18" r="5" {...stroke(1.8)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--c">
        <circle cx="100" cy="80" r="18" {...stroke(2.2)} />
        <ellipse cx="100" cy="80" rx="10" ry="14" {...stroke(1.8)} />
        <circle cx="100" cy="80" r="4" fill="currentColor" />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--d">
        <circle cx="128" cy="42" r="4" fill="currentColor" opacity="0.4" />
      </g>
    </svg>
  );
}

function ListenScene() {
  return (
    <svg {...svgProps}>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--a">
        <path
          d="M42 48h70a12 12 0 0 1 12 12v18a12 12 0 0 1-12 12H70l-18 16v-16H42a12 12 0 0 1-12-12V60a12 12 0 0 1 12-12Z"
          {...stroke(2)}
        />
        <path d="M48 68h46M48 80h32" {...stroke(1.8)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--b">
        <path
          d="M118 34h40a10 10 0 0 1 10 10v14a10 10 0 0 1-10 10h-8l-12 12v-12h-20a10 10 0 0 1-10-10V44a10 10 0 0 1 10-10Z"
          {...stroke(2)}
        />
        <path d="M126 50h28" {...stroke(1.8)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--c">
        <circle cx="64" cy="128" r="8" {...stroke(1.8)} />
        <circle cx="100" cy="128" r="8" {...stroke(1.8)} />
        <circle cx="136" cy="128" r="8" {...stroke(1.8)} />
        <path d="M72 128h20M108 128h20" {...stroke(1.8)} />
      </g>
    </svg>
  );
}

function BottleneckScene() {
  return (
    <svg {...svgProps}>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--a">
        <path d="M30 40h48v28H30z" {...stroke(2)} />
        <path d="M122 40h48v28h-48z" {...stroke(2)} />
        <path d="M78 54h44" {...stroke(2)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--b">
        <path d="M100 54v22" {...stroke(2)} />
        <path d="M78 88h44l-10 28H88Z" {...stroke(2.2)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--c">
        <path d="M88 128h24" {...stroke(2.4)} />
        <circle cx="100" cy="76" r="5" fill="currentColor" opacity="0.35" />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--d">
        <path d="M44 84l-8 12M156 84l8 12" {...stroke(1.8)} />
        <path d="M52 108h20M128 108h20" {...stroke(1.8)} opacity="0.7" />
      </g>
    </svg>
  );
}

function BuildScene() {
  return (
    <svg {...svgProps}>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--a">
        <rect x="46" y="78" width="108" height="44" rx="6" {...stroke(2)} />
        <path d="M64 78V58h36v20M110 78V48h28v30" {...stroke(2)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--b">
        <rect x="70" y="32" width="40" height="26" rx="4" {...stroke(1.9)} />
        <path d="M78 42h24M78 50h16" {...stroke(1.6)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--c">
        <path d="M34 122h132" {...stroke(2)} />
        <path d="M58 98v24M100 98v24M142 98v24" {...stroke(1.8)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--d">
        <path d="M150 36l12 8v14l-12 8-12-8V44Z" {...stroke(2)} />
        <circle cx="150" cy="51" r="3" fill="currentColor" />
      </g>
    </svg>
  );
}

function ImproveScene() {
  return (
    <svg {...svgProps}>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--a">
        <path d="M36 120V56l28 20 28-36 28 24 28-40v96Z" {...stroke(2)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--b">
        <path d="M36 120h112" {...stroke(2)} />
        <circle cx="64" cy="76" r="4" fill="currentColor" opacity="0.35" />
        <circle cx="92" cy="48" r="4" fill="currentColor" opacity="0.45" />
        <circle cx="120" cy="64" r="4" fill="currentColor" opacity="0.35" />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--c">
        <path d="M148 40l16-16M164 24h-14v14" {...stroke(2.2)} />
      </g>
    </svg>
  );
}

function CheckpointScene() {
  return (
    <svg {...svgProps}>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--a">
        <rect x="40" y="28" width="120" height="104" rx="12" {...stroke(2)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--b">
        <path d="M62 58h40" {...stroke(2)} />
        <path d="M118 52l12 12 22-26" {...stroke(2.4)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--c">
        <path d="M62 86h40" {...stroke(2)} />
        <path d="M118 80l12 12 22-26" {...stroke(2.4)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--d">
        <path d="M62 114h52" {...stroke(2)} opacity="0.55" />
        <circle cx="148" cy="114" r="8" {...stroke(1.8)} />
      </g>
    </svg>
  );
}

function ActionsScene() {
  return (
    <svg {...svgProps}>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--a">
        <circle cx="48" cy="48" r="14" {...stroke(2)} />
        <circle cx="152" cy="48" r="14" {...stroke(2)} />
        <circle cx="100" cy="118" r="14" {...stroke(2)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--b">
        <path d="M62 48h76" {...stroke(2)} />
        <path d="M56 58 92 108" {...stroke(2)} />
        <path d="M144 58 108 108" {...stroke(2)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--c">
        <path d="M100 48v28" {...stroke(1.8)} opacity="0.6" />
        <rect x="84" y="64" width="32" height="22" rx="5" {...stroke(1.8)} />
      </g>
      <g className="kuct-pastel-scene__g kuct-pastel-scene__g--d">
        <path d="M48 48l4-6M152 48l-4-6M100 118l6 4" {...stroke(1.8)} />
      </g>
    </svg>
  );
}

export function PastelPlatformArt({ id }: { id: PastelArtId }) {
  switch (id) {
    case "agents":
      return <AgentsScene />;
    case "pipeline":
      return <PipelineScene />;
    case "orbit":
      return <OrbitScene />;
    case "listen":
      return <ListenScene />;
    case "bottleneck":
      return <BottleneckScene />;
    case "build":
      return <BuildScene />;
    case "improve":
      return <ImproveScene />;
    case "checkpoint":
      return <CheckpointScene />;
    case "actions":
      return <ActionsScene />;
    default:
      return <AgentsScene />;
  }
}
