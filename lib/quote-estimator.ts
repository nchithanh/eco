export type ProjectType = "web" | "ai" | "both";
export type ScaleId = "landing" | "smb" | "complex";
export type PagesId = "p5" | "p15" | "p15p";
export type FeatureId =
  | "cms"
  | "booking"
  | "payment"
  | "i18n"
  | "admin"
  | "api";
export type AiFeatureId = "faq" | "agent" | "mcp" | "opsDash";
export type DesignId = "template" | "custom" | "system";
export type TimelineId = "normal" | "rush";

export type QuoteSelection = {
  projectType: ProjectType;
  scale: ScaleId;
  pages: PagesId;
  features: FeatureId[];
  aiFeatures: AiFeatureId[];
  design: DesignId;
  timeline: TimelineId;
};

export type PriceRange = { min: number; max: number };

const BASE: Record<ProjectType, PriceRange> = {
  web: { min: 2, max: 5 },
  ai: { min: 10, max: 16 },
  both: { min: 12, max: 18 },
};

const SCALE_ADD: Record<ScaleId, PriceRange> = {
  landing: { min: 0, max: 1 },
  smb: { min: 1, max: 2.5 },
  complex: { min: 2.5, max: 4 },
};

const PAGES_ADD: Record<PagesId, PriceRange> = {
  p5: { min: 0, max: 0.5 },
  p15: { min: 0.5, max: 1.5 },
  p15p: { min: 1.5, max: 3 },
};

const FEATURE_ADD: Record<FeatureId, PriceRange> = {
  cms: { min: 0.5, max: 1.2 },
  booking: { min: 0.8, max: 2 },
  payment: { min: 1, max: 2.5 },
  i18n: { min: 0.5, max: 1.5 },
  admin: { min: 0.8, max: 2 },
  api: { min: 1, max: 2.2 },
};

const AI_ADD: Record<AiFeatureId, PriceRange> = {
  faq: { min: 0, max: 2 },
  agent: { min: 2, max: 5 },
  mcp: { min: 2, max: 6 },
  opsDash: { min: 1, max: 3 },
};

const DESIGN_ADD: Record<DesignId, PriceRange> = {
  template: { min: 0, max: 0.8 },
  custom: { min: 1, max: 2.5 },
  system: { min: 2, max: 4 },
};

const TIMELINE_ADD: Record<TimelineId, PriceRange> = {
  normal: { min: 0, max: 0 },
  rush: { min: 1, max: 3 },
};

export const CAP: Record<ProjectType, PriceRange> = {
  web: { min: 2, max: 10 },
  ai: { min: 10, max: 30 },
  both: { min: 12, max: 38 },
};

function add(a: PriceRange, b: PriceRange): PriceRange {
  return { min: a.min + b.min, max: a.max + b.max };
}

function clamp(range: PriceRange, cap: PriceRange): PriceRange {
  const min = Math.min(Math.max(range.min, cap.min), cap.max);
  const max = Math.min(Math.max(range.max, min), cap.max);
  return {
    min: Math.round(min * 10) / 10,
    max: Math.round(max * 10) / 10,
  };
}

export const DEFAULT_QUOTE_SELECTION: QuoteSelection = {
  projectType: "web",
  scale: "smb",
  pages: "p15",
  features: [],
  aiFeatures: [],
  design: "custom",
  timeline: "normal",
};

export function estimateQuote(selection: QuoteSelection): PriceRange {
  let range = BASE[selection.projectType];
  range = add(range, SCALE_ADD[selection.scale]);
  range = add(range, PAGES_ADD[selection.pages]);
  for (const id of selection.features) {
    range = add(range, FEATURE_ADD[id]);
  }
  if (selection.projectType === "ai" || selection.projectType === "both") {
    for (const id of selection.aiFeatures) {
      range = add(range, AI_ADD[id]);
    }
  }
  range = add(range, DESIGN_ADD[selection.design]);
  range = add(range, TIMELINE_ADD[selection.timeline]);
  return clamp(range, CAP[selection.projectType]);
}

export function formatMillionVnd(value: number, locale: string): string {
  const rounded =
    Math.abs(value - Math.round(value)) < 0.05
      ? Math.round(value)
      : Math.round(value * 10) / 10;
  try {
    return new Intl.NumberFormat(locale, {
      maximumFractionDigits: 1,
    }).format(rounded);
  } catch {
    return String(rounded);
  }
}

export function toggleInList<T extends string>(list: T[], id: T): T[] {
  return list.includes(id) ? list.filter((item) => item !== id) : [...list, id];
}
