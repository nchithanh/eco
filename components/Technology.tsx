"use client";

import { useEffect, useRef, useState } from "react";
import { AccentText } from "@/components/BrandName";
import { Reveal } from "@/components/Reveal";
import { assetPath } from "@/lib/asset";
import { getAiTransformCopy } from "@/lib/i18n/ai-transform-copy";
import { useLocale } from "@/lib/i18n/LocaleProvider";

/** Demo series for Activity bars (px within h-14 / 56px track). */
const ACTIVITY_BARS = [22, 38, 28, 48, 34, 44, 26, 40, 30, 46] as const;

/**
 * System Pulse samples (y in viewBox 0–36; lower y = taller peak).
 * Dense series → continuous wave + filled area.
 */
const PULSE_Y = [24, 18, 22, 10, 16, 8, 14, 6, 12, 9, 20, 11, 7, 15, 5, 13, 8, 18, 12, 6] as const;

/** Smooth cubic path through evenly spaced samples (viewBox width 120). */
function pulseWavePath(ys: readonly number[], w = 120, close = false, h = 36): string {
  const n = ys.length;
  if (n < 2) return "";
  const step = w / (n - 1);
  const pts = ys.map((y, i) => [i * step, y] as const);
  let d = `M${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < n - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(n - 1, i + 2)];
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${cp1x} ${cp1y} ${cp2x} ${cp2y} ${p2[0]} ${p2[1]}`;
  }
  if (close) d += ` L${w} ${h} L0 ${h} Z`;
  return d;
}

/**
 * Dense neural mesh on/around the globe (viewBox 200×200).
 * Core hub last — used for pulse emphasis.
 */
const GLOBE_NODES = [
  /* Rim / near-surface */
  { x: 100, y: 34, r: 2.1 },
  { x: 128, y: 42, r: 1.8 },
  { x: 148, y: 58, r: 2.0 },
  { x: 162, y: 82, r: 2.2 },
  { x: 166, y: 108, r: 1.9 },
  { x: 158, y: 134, r: 2.1 },
  { x: 138, y: 154, r: 1.8 },
  { x: 112, y: 164, r: 2.0 },
  { x: 86, y: 162, r: 1.7 },
  { x: 62, y: 148, r: 2.0 },
  { x: 42, y: 124, r: 1.9 },
  { x: 36, y: 98, r: 2.2 },
  { x: 42, y: 72, r: 1.8 },
  { x: 58, y: 50, r: 2.0 },
  { x: 78, y: 38, r: 1.7 },
  /* Interior land / ocean */
  { x: 92, y: 62, r: 1.6 },
  { x: 118, y: 70, r: 1.7 },
  { x: 140, y: 92, r: 1.8 },
  { x: 132, y: 118, r: 1.6 },
  { x: 108, y: 138, r: 1.7 },
  { x: 78, y: 128, r: 1.6 },
  { x: 64, y: 98, r: 1.8 },
  { x: 76, y: 76, r: 1.5 },
  { x: 100, y: 88, r: 1.6 },
  { x: 116, y: 104, r: 1.5 },
  /* Slightly outside sphere — halo mesh */
  { x: 100, y: 22, r: 1.5 },
  { x: 172, y: 64, r: 1.4 },
  { x: 178, y: 120, r: 1.5 },
  { x: 148, y: 172, r: 1.4 },
  { x: 52, y: 170, r: 1.5 },
  { x: 22, y: 110, r: 1.4 },
  { x: 28, y: 54, r: 1.5 },
  /* Core hub */
  { x: 100, y: 100, r: 3.6 },
] as const;

/** Dense link pairs — rim ring + spokes + outer halo. */
const GLOBE_LINKS = [
  /* Rim cycle */
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 12],
  [12, 13],
  [13, 14],
  [14, 0],
  /* Interior mesh */
  [15, 16],
  [16, 17],
  [17, 18],
  [18, 19],
  [19, 20],
  [20, 21],
  [21, 22],
  [22, 15],
  [15, 23],
  [23, 24],
  [24, 18],
  [21, 23],
  /* Spokes to core */
  [0, 32],
  [3, 32],
  [7, 32],
  [11, 32],
  [16, 32],
  [20, 32],
  [23, 32],
  /* Cross chords */
  [1, 16],
  [2, 17],
  [5, 18],
  [6, 19],
  [9, 20],
  [12, 22],
  [13, 15],
  [4, 24],
  [10, 21],
  /* Outer halo */
  [25, 0],
  [25, 1],
  [26, 2],
  [26, 3],
  [27, 4],
  [27, 5],
  [28, 6],
  [28, 7],
  [29, 8],
  [29, 9],
  [30, 10],
  [30, 11],
  [31, 12],
  [31, 13],
  [25, 26],
  [26, 27],
  [27, 28],
  [28, 29],
  [29, 30],
  [30, 31],
  [31, 25],
] as const;

/** Quadratic arc bulging outward from sphere center. */
function dataArcPath(x1: number, y1: number, x2: number, y2: number): string {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = mx - 100;
  const dy = my - 100;
  const len = Math.hypot(dx, dy) || 1;
  const bulge = 10;
  const cx = mx + (dx / len) * bulge;
  const cy = my + (dy / len) * bulge;
  return `M${x1} ${y1} Q${cx} ${cy} ${x2} ${y2}`;
}

function useDesktopLg() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return isDesktop;
}

/** Skip mounting the animated globe below lg — heavy SVG/CSS lags on mobile/tablet. */
function DesktopNeuralSphere() {
  const isDesktop = useDesktopLg();
  if (!isDesktop) return null;
  return <NeuralSphere />;
}

function NeuralSphere() {
  const tiltRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (svg) {
      svg.querySelectorAll<SVGGeometryElement>(".kuct-data-line").forEach((line) => {
        if (typeof line.getTotalLength !== "function") return;
        const length = line.getTotalLength();
        // Visible dash packet + gap (avoid offset=length which hid the arcs)
        const dash = Math.max(10, length / 5);
        const gap = Math.max(14, length / 4);
        line.style.strokeDasharray = `${dash} ${gap}`;
      });
    }

    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fineMq = window.matchMedia("(pointer: fine)");
    const tiltEl = tiltRef.current;

    const onMove = (e: MouseEvent) => {
      if (reduceMq.matches || !fineMq.matches || !tiltEl) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * -16;
      tiltEl.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    };

    const resetTilt = () => {
      if (tiltEl) tiltEl.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    if (reduceMq.matches) {
      resetTilt();
      return;
    }

    window.addEventListener("mousemove", onMove);
    const onReduceChange = () => {
      if (reduceMq.matches) resetTilt();
    };
    reduceMq.addEventListener("change", onReduceChange);

    return () => {
      window.removeEventListener("mousemove", onMove);
      reduceMq.removeEventListener("change", onReduceChange);
    };
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-[78%] max-w-[18rem]">
      {/* Soft accent bloom */}
      <div
        aria-hidden
        className="kuct-globe-bloom absolute inset-[-22%] rounded-full opacity-95"
      />
      <div
        aria-hidden
        className="kuct-globe-bloom kuct-globe-bloom--core absolute inset-[-6%] rounded-full"
      />
      <div className="kuct-globe-stage relative h-full w-full">
        <div ref={tiltRef} className="kuct-globe-tilt h-full w-full">
          <svg
            ref={svgRef}
            viewBox="0 0 200 200"
            className="kuct-globe-svg relative h-full w-full"
            aria-hidden
          >
            <defs>
              {/* Deep violet sphere + accent limb highlight */}
              <radialGradient id="kuct-tech-sphere" cx="32%" cy="28%" r="78%">
                <stop
                  offset="0%"
                  stopColor="color-mix(in srgb, var(--kuct-btn-mid) 52%, #2a1848)"
                />
                <stop
                  offset="42%"
                  stopColor="color-mix(in srgb, var(--kuct-accent) 32%, #1a1030)"
                />
                <stop
                  offset="78%"
                  stopColor="color-mix(in srgb, var(--kuct-accent) 14%, #0c0818)"
                />
                <stop
                  offset="100%"
                  stopColor="color-mix(in srgb, var(--kuct-accent) 6%, #06040e)"
                />
              </radialGradient>
              <radialGradient id="kuct-tech-core-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--kuct-accent)" stopOpacity="0.35" />
                <stop offset="50%" stopColor="var(--kuct-accent-2)" stopOpacity="0.1" />
                <stop offset="100%" stopColor="var(--kuct-accent)" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="kuct-tech-limb" cx="28%" cy="24%" r="70%">
                <stop offset="0%" stopColor="var(--kuct-accent-3)" stopOpacity="0.45" />
                <stop offset="55%" stopColor="var(--kuct-accent)" stopOpacity="0.08" />
                <stop offset="100%" stopColor="var(--kuct-accent)" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="kuct-tech-ring" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--kuct-btn-to)" />
                <stop offset="50%" stopColor="var(--kuct-btn-mid)" />
                <stop offset="100%" stopColor="var(--kuct-btn-from)" />
              </linearGradient>
              <filter
                id="kuct-tech-node-glow"
                x="-120%"
                y="-120%"
                width="340%"
                height="340%"
              >
                <feGaussianBlur stdDeviation="1.6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter
                id="kuct-tech-line-glow"
                x="-40%"
                y="-40%"
                width="180%"
                height="180%"
              >
                <feGaussianBlur stdDeviation="0.9" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <clipPath id="kuct-tech-globe-clip">
                <circle cx="100" cy="100" r="69.5" />
              </clipPath>
            </defs>

            {/* Sphere body (static) */}
            <circle cx="100" cy="100" r="68" className="kuct-sphere-base" />
            <circle cx="100" cy="100" r="68" fill="url(#kuct-tech-sphere)" />
            <circle cx="100" cy="100" r="52" fill="url(#kuct-tech-core-glow)" />
            <circle cx="100" cy="100" r="68" fill="url(#kuct-tech-limb)" />
            <circle
              cx="100"
              cy="100"
              r="68"
              fill="none"
              stroke="url(#kuct-tech-ring)"
              strokeWidth="1.6"
              opacity="0.9"
            />

            {/* Spinning wireframe + neural mesh */}
            <g className="kuct-globe">
              <g clipPath="url(#kuct-tech-globe-clip)" className="kuct-globe-wire">
                <ellipse cx="100" cy="100" rx="66" ry="17" />
                <ellipse className="kuct-globe-wire--mid" cx="100" cy="76" rx="58" ry="13" />
                <ellipse className="kuct-globe-wire--mid" cx="100" cy="124" rx="58" ry="13" />
                <ellipse className="kuct-globe-wire--soft" cx="100" cy="56" rx="40" ry="8.5" />
                <ellipse className="kuct-globe-wire--soft" cx="100" cy="144" rx="40" ry="8.5" />
                <ellipse cx="100" cy="100" rx="17" ry="66" />
                <ellipse className="kuct-globe-wire--mid" cx="100" cy="100" rx="40" ry="66" />
                <ellipse className="kuct-globe-wire--soft" cx="100" cy="100" rx="56" ry="66" />
                <ellipse
                  className="kuct-globe-wire--mid"
                  cx="100"
                  cy="100"
                  rx="40"
                  ry="66"
                  transform="rotate(32 100 100)"
                />
                <ellipse
                  className="kuct-globe-wire--mid"
                  cx="100"
                  cy="100"
                  rx="40"
                  ry="66"
                  transform="rotate(-32 100 100)"
                />
              </g>

              <g
                fill="none"
                strokeLinecap="round"
                filter="url(#kuct-tech-line-glow)"
              >
                {GLOBE_LINKS.map(([a, b]) => {
                  const n1 = GLOBE_NODES[a];
                  const n2 = GLOBE_NODES[b];
                  return (
                    <path
                      key={`${a}-${b}`}
                      className="kuct-data-line"
                      d={dataArcPath(n1.x, n1.y, n2.x, n2.y)}
                    />
                  );
                })}
              </g>

              <g filter="url(#kuct-tech-node-glow)">
                {GLOBE_NODES.map(({ x, y, r }, i) => {
                  const isCore = i === GLOBE_NODES.length - 1;
                  const isHalo = i >= 25 && i < 32;
                  return (
                    <circle
                      key={`${x}-${y}-${i}`}
                      className={
                        isCore
                          ? "kuct-node kuct-node--core"
                          : isHalo
                            ? "kuct-node kuct-node--halo"
                            : "kuct-node"
                      }
                      cx={x}
                      cy={y}
                      r={r}
                      strokeWidth={isCore ? 1.4 : 0.7}
                      style={{ animationDelay: `${(i % 7) * 0.28}s` }}
                    />
                  );
                })}
              </g>
            </g>

            {/* Outer elliptical orbits */}
            <g className="kuct-orbit">
              <ellipse
                className="kuct-orbit-ring"
                cx="100"
                cy="100"
                rx="88"
                ry="32"
                fill="none"
              />
              <ellipse
                className="kuct-orbit-ring kuct-orbit-ring--soft"
                cx="100"
                cy="100"
                rx="80"
                ry="26"
                fill="none"
                transform="rotate(55 100 100)"
              />
              <ellipse
                className="kuct-orbit-ring kuct-orbit-ring--soft"
                cx="100"
                cy="100"
                rx="84"
                ry="28"
                fill="none"
                transform="rotate(-40 100 100)"
              />
            </g>

            {/* Satellites */}
            <g className="kuct-satellite" filter="url(#kuct-tech-node-glow)">
              <circle cx="188" cy="100" r="2.6" fill="var(--kuct-accent-2)" />
              <circle
                cx="100"
                cy="74"
                r="2"
                fill="var(--kuct-accent-3)"
                transform="rotate(55 100 100)"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TechnologyDashboard({
  tabs,
  live,
  widgets,
}: {
  tabs: string[];
  live: string;
  widgets: { activity: string; pulse: string; nodes: string };
}) {
  const widgetClass =
    "kuct-tech-widget rounded-xl border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.9)] p-2.5 backdrop-blur-md sm:p-3";

  return (
    <div
      className="kuct-tech-dashboard relative overflow-hidden rounded-[1.5rem] border border-[var(--kuct-border)] p-4 sm:p-5 md:p-6"
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[var(--kuct-glow-1)] opacity-50 blur-3xl" />

      <div className="relative mb-4 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex flex-wrap gap-1 rounded-full border border-[var(--kuct-border)] bg-[rgba(4,4,12,0.75)] p-0.5">
          {tabs.map((tab, index) => (
            <span
              key={tab}
              className={
                index === 0
                  ? "rounded-full bg-[var(--kuct-accent)] px-2.5 py-1 text-[11px] font-semibold text-[var(--kuct-on-accent)]"
                  : "rounded-full px-2.5 py-1 text-[11px] font-medium text-[var(--kuct-muted)]"
              }
            >
              {tab}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--kuct-accent)]/25 bg-[rgba(8,8,16,0.85)] px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.14em] text-[var(--kuct-muted)] uppercase">
          <span className="size-1.5 rounded-full bg-[var(--kuct-accent)] shadow-[0_0_0.35rem_rgb(var(--kuct-accent-rgb)/0.55)]" />
          {live}
        </span>
      </div>

      <div className="relative touch-pan-y">
        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex">
          <DesktopNeuralSphere />
        </div>

        <div className="relative grid grid-cols-2 gap-2.5 lg:min-h-[19rem] lg:grid-cols-1 lg:gap-0">
          <div className={`${widgetClass} lg:absolute lg:left-0 lg:top-1 lg:w-[38%] lg:max-w-[9rem]`}>
            <p className="text-[0.6rem] font-semibold tracking-[0.12em] text-[var(--kuct-muted)] uppercase">
              {widgets.activity}
            </p>
            <div className="mt-2 flex h-11 items-end gap-0.5 sm:h-12 sm:gap-1">
              {ACTIVITY_BARS.map((h, i) => (
                <span
                  key={i}
                  className="min-w-0 flex-1 rounded-t-sm bg-gradient-to-t from-[var(--kuct-btn-from)] to-[var(--kuct-accent-3)] opacity-85"
                  style={{ height: `${Math.round(h * 0.85)}px` }}
                />
              ))}
            </div>
          </div>

          <div
            className={`${widgetClass} text-center lg:absolute lg:right-0 lg:top-0 lg:w-auto lg:px-3.5 lg:py-2.5`}
          >
            <p className="font-display text-2xl font-semibold leading-none text-[var(--kuct-accent)] sm:text-[1.65rem]">
              26
            </p>
            <p className="mt-1 text-[0.6rem] font-semibold tracking-[0.1em] text-[var(--kuct-muted)] uppercase">
              {widgets.nodes}
            </p>
          </div>

          <div className={`${widgetClass} col-span-2 sm:col-span-1 lg:absolute lg:bottom-1 lg:left-0 lg:w-[42%] lg:max-w-[10rem]`}>
            <p className="text-[0.6rem] font-semibold tracking-[0.12em] text-[var(--kuct-muted)] uppercase">
              {widgets.pulse}
            </p>
            <svg viewBox="0 0 120 36" className="mt-1.5 h-8 w-full" aria-hidden>
              <path
                d={pulseWavePath(PULSE_Y, 120, true)}
                fill="rgb(var(--kuct-accent-rgb) / 0.12)"
              />
              <path
                d={pulseWavePath(PULSE_Y)}
                fill="none"
                stroke="var(--kuct-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="col-span-2 flex items-center justify-end gap-1.5 sm:col-span-1 lg:absolute lg:bottom-2 lg:right-0 lg:flex-col lg:items-end lg:gap-1">
            {["API", "CI", "AI"].map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1 rounded-full border border-[var(--kuct-border)] bg-[rgba(6,6,14,0.88)] px-2 py-0.5 text-[0.6rem] font-medium tracking-wide text-[var(--kuct-muted)]"
              >
                <span className="size-1 rounded-full bg-[var(--kuct-accent)]/80" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Technology() {
  const { t, locale } = useLocale();
  const tech = t.technology;
  const ai = getAiTransformCopy(locale);

  return (
    <section
      id="technology"
      className="relative scroll-mt-20 overflow-hidden py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-20">
        <Reveal className="max-w-lg" variant="left">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--kuct-accent)] uppercase sm:text-xs">
            {ai.eyebrow}
          </p>
          <h2 className="mt-4 max-w-[16ch] font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:max-w-[18ch] sm:text-[2.15rem] lg:text-[2.35rem] lg:leading-[1.1]">
            <AccentText>{ai.headline}</AccentText>
          </h2>
          <p className="mt-5 max-w-[36ch] text-base leading-[1.7] text-[var(--kuct-muted)]">
            {ai.support}
          </p>
          <a
            href={assetPath("/ai-transform/")}
            className="kuct-btn-primary mt-8 inline-flex items-center rounded-full px-8 py-3.5 text-sm font-semibold shadow-[0_12px_32px_rgb(var(--kuct-accent-rgb)/0.38)]"
          >
            {tech.cta}
          </a>
          <p className="mt-4 max-w-md text-xs leading-relaxed tracking-wide text-[var(--kuct-muted)]/90">
            {ai.trustLine}
          </p>
        </Reveal>

        <Reveal variant="right" delay={100}>
          <TechnologyDashboard
            tabs={tech.tabs}
            live={tech.live}
            widgets={tech.widgets}
          />
        </Reveal>
      </div>
    </section>
  );
}
