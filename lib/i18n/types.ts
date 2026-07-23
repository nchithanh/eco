export type Locale = "vi" | "en" | "ja" | "de";

export const LOCALES: { code: Locale; label: string; name: string }[] = [
  { code: "vi", label: "VI", name: "Tiếng Việt" },
  { code: "en", label: "EN", name: "English" },
  { code: "ja", label: "JA", name: "日本語" },
  { code: "de", label: "DE", name: "Deutsch" },
];

export const DEFAULT_LOCALE: Locale = "vi";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    ariaMain: string;
    ariaMobile: string;
    openMenu: string;
    closeMenu: string;
    services: string;
    process: string;
    stack: string;
    careers: string;
    contact: string;
  };
  banner: {
    aria: string;
    text: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    support: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    support: string;
    filterAll: string;
    learnMore: string;
    items: {
      id: string;
      category: string;
      title: string;
      body: string;
      tags: string[];
    }[];
  };
  process: {
    eyebrow: string;
    title: string;
    support: string;
    steps: { name: string; detail: string }[];
  };
  stack: {
    eyebrow: string;
    titleLead: string;
    titleHighlight: string;
    support: string;
    logos: string[];
  };
  why: {
    eyebrow: string;
    title: string;
    support: string;
    reasons: { title: string; body: string }[];
  };
  cofounder: {
    eyebrow: string;
    role: string;
    name: string;
    description: string;
  };
  secondary: {
    eyebrow: string;
    title: string;
    support: string;
    architectureTitle: string;
    architectureBody: string;
    stockTitle: string;
    stockBody: string;
    learnMore: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    support: string;
    name: string;
    contact: string;
    message: string;
    submit: string;
    sent: string;
    mailSubject: string;
    mailBodyName: string;
    mailBodyContact: string;
    errors: {
      name: string;
      contact: string;
      message: string;
    };
  };
  careers: {
    meta: { title: string; description: string };
    hero: {
      eyebrow: string;
      headline: string;
      support: string;
    };
    roles: {
      eyebrow: string;
      title: string;
      support: string;
    };
    engagement: string;
    comp: string;
    applyCta: string;
    jobs: {
      id: "frontend" | "mobile" | "backend" | "design" | "sales";
      title: string;
      summary: string;
      bullets: string[];
      tags: string[];
      /** Overrides careers.comp when set (e.g. sales commission). */
      comp?: string;
      /** Urgent / priority tab label when hiring is time-sensitive. */
      priority?: string;
    }[];
    apply: {
      eyebrow: string;
      title: string;
      support: string;
      name: string;
      contact: string;
      portfolio: string;
      role: string;
      message: string;
      submit: string;
      sent: string;
      mailSubject: string;
      mailBodyName: string;
      mailBodyContact: string;
      mailBodyPortfolio: string;
      mailBodyRole: string;
      errors: {
        name: string;
        contact: string;
        portfolio: string;
        role: string;
        message: string;
      };
    };
  };
  footer: {
    disclaimer: string;
  };
};
