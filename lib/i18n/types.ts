export type Locale = "vi" | "en" | "ja" | "de" | "zh";

export const LOCALES: {
  code: Locale;
  label: string;
  name: string;
}[] = [
  { code: "vi", label: "VI", name: "Tiếng Việt" },
  { code: "en", label: "EN", name: "English" },
  { code: "ja", label: "JA", name: "日本語" },
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "zh", label: "ZH", name: "中文" },
];

export const DEFAULT_LOCALE: Locale = "ja";

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
    news: string;
    careers: string;
    about: string;
    customAgent: string;
    customAgentItem: string;
    aiTransform: string;
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
    trustLine: string;
    ctaPrimary: string;
    ctaSecondary: string;
    visual: {
      web: string;
      automation: string;
      ai: string;
    };
  };
  trust: {
    aria: string;
    eyebrow: string;
    title: string;
    support: string;
    items: { value: string; label: string }[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    support: string;
    wheelTagline: string;
    filterAll: string;
    filterBuild: string;
    filterConnect: string;
    filterAi: string;
    learnMore: string;
    prevPage: string;
    nextPage: string;
    items: {
      id: string;
      category: string;
      title: string;
      body: string;
      tags: string[];
    }[];
  };
  siteOutcomes: {
    eyebrow: string;
    title: string;
    support: string;
    items: { title: string; body: string }[];
  };
  whatYouGet: {
    eyebrow: string;
    title: string;
    support: string;
    groupOwn: string;
    groupRun: string;
    items: { title: string; body: string }[];
  };
  ops: {
    eyebrow: string;
    title: string;
    support: string;
    cta: string;
    before: string;
    after: string;
    loopHint: string;
    steps: { name: string; detail: string }[];
    chips: string[];
  };
  works: {
    eyebrow: string;
    title: string;
    support: string;
    cta: string;
    problemLabel: string;
    scopeLabel: string;
    resultLabel: string;
    items: {
      id: string;
      title: string;
      tag: string;
      problem: string;
      scope: string;
      result: string;
    }[];
  };
  process: {
    eyebrow: string;
    title: string;
    support: string;
    deliverableLabel: string;
    steps: { name: string; detail: string; deliverable: string }[];
  };
  technology: {
    eyebrow: string;
    title: string;
    support: string;
    cta: string;
    live: string;
    tabs: string[];
    widgets: {
      activity: string;
      pulse: string;
      nodes: string;
    };
  };
  stack: {
    eyebrow: string;
    titleLead: string;
    titleHighlight: string;
    support: string;
    groups: {
      frontend: string;
      backend: string;
      infra: string;
      data: string;
    };
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
    stack: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    support: string;
    nextHint: string;
    ctaZalo: string;
    ctaEmail: string;
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
  news: {
    meta: { title: string; description: string };
    title: string;
    blurb: string;
    homeEyebrow: string;
    homeTitle: string;
    viewAll: string;
    filterAll: string;
    readMore: string;
    prevPage: string;
    nextPage: string;
    relatedTitle: string;
    cta: string;
    breadcrumbHome: string;
    breadcrumbNews: string;
    categories: {
      process: string;
      product: string;
      tech: string;
      studio: string;
      cases: string;
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
    hiring: {
      closed: string;
      expired: string;
      countdown: string;
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
    jobs: {
      id:
        | "frontend"
        | "mobile"
        | "backend"
        | "design"
        | "sales"
        | "ai-engineer"
        | "intern-fullstack"
        | "fresher-tester";
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
  faq: {
    eyebrow: string;
    title: string;
    support: string;
    items: { q: string; a: string }[];
  };
  footer: {
    disclaimer: string;
    groupExplore: string;
    groupStudio: string;
    groupUpdates: string;
    groupConnect: string;
  };
  loader: {
    aria: string;
    status: string;
    agents: {
      scout: string;
      plan: string;
      build: string;
      ship: string;
    };
  };
  contactFab: {
    open: string;
    close: string;
    zalo: string;
    phone: string;
    email: string;
  };
  cookie: {
    title: string;
    body: string;
    accept: string;
    decline: string;
  };
  preview: {
    close: string;
    viewFull: string;
    loading: string;
  };
  theme: {
    aria: string;
    violet: string;
    ocean: string;
    forest: string;
    coral: string;
    slate: string;
    black: string;
  };
};
