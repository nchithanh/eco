export type Locale = "vi" | "en" | "ja";

export const LOCALES: {
  code: Locale;
  label: string;
  name: string;
}[] = [
  { code: "vi", label: "VI", name: "Tiếng Việt" },
  { code: "en", label: "EN", name: "English" },
  { code: "ja", label: "JA", name: "日本語" },
];

export const DEFAULT_LOCALE: Locale = "en";

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
    web: string;
    serviceWeb: string;
    serviceLanding: string;
    serviceMobile: string;
    serviceBackend: string;
    serviceDesign: string;
    process: string;
    stack: string;
    templates: string;
    news: string;
    careers: string;
    about: string;
    agents: string;
    agentDolphin: string;
    aiTransform: string;
    contact: string;
    /** Opens site AI chat drawer */
    askAi: string;
  };
  banner: {
    aria: string;
    text: string;
    cta: string;
    /** Quote CTA on announcement bar */
    ctaQuote: string;
  };
  hero: {
    eyebrow: string;
    aiPill: string;
    headline: string;
    subhead: string;
    support: string;
    trustLine: string;
    ctaPrimary: string;
    ctaSecondary: string;
    /** Hero signature badges under eyebrow */
    tags: string[];
    /** Floating metrics on hero visual */
    metrics: { value: string; label: string }[];
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
  popularServices: {
    eyebrow: string;
    title: string;
    support: string;
    categoryLabel: string;
    rowLabels: {
      price: string;
      timeline: string;
      fit: string;
      ui: string;
      seo: string;
      admin: string;
      measure: string;
      warranty: string;
      highlight: string;
    };
    priceNote: string;
    fromPrefix: string;
    /** Right panel label next to each included feature */
    includedLabel: string;
    /** Left column footer prompt linking to Zalo */
    consultPrompt: string;
    /** Short trust chips under features */
    commitments: string[];
    priceBundleLabel: string;
    noHiddenLabel: string;
    footerNote: string;
    footerCta: string;
    packages: {
      id: "landing" | "business" | "shop" | "webapp";
      title: string;
      badge: string;
      /** Soft column highlight (recommended package) */
      featured?: boolean;
      /** Emphasize sale price visually (Landing) */
      priceFocus?: boolean;
      saveBadge?: string;
      timeline: string;
      fit: string;
      ui: string;
      seo: string;
      admin: string;
      measure: string;
      warranty: string;
      highlight: string;
      cta: string;
      detailHref: string;
    }[];
  };
  uiGallery: {
    eyebrow: string;
    title: string;
    support: string;
    filters: Record<
      "all" | "landing" | "business" | "webapp" | "ecommerce" | "corporate" | "portfolio" | "startup",
      string
    >;
    previewAlt: string;
    viewSample: string;
    ctaServices: string;
    ctaConsult: string;
    empty: string;
    items: Record<
      string,
      {
        label: string;
        title: string;
        body: string;
        badge?: string;
      }
    >;
  };
  aiEdge: {
    eyebrow: string;
    badge: string;
    title: string;
    support: string;
    items: {
      id: "chat" | "workflow" | "agent";
      tag: string;
      title: string;
      body: string;
    }[];
    ctaTransform: string;
    ctaAgent: string;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    support: string;
    ctaPrimary: string;
    ctaSecondary: string;
    /** Defaults to `#popular-services` when omitted */
    ctaSecondaryHref?: string;
    learnMore: string;
    prevPage: string;
    nextPage: string;
    /** Pause autoplay control (carousel) */
    pauseCarousel: string;
    /** Resume autoplay control (carousel) */
    playCarousel: string;
    offers: {
      id: string;
      title: string;
      body: string;
      meta: string;
      href: string;
    }[];
    moreServices: { label: string; href: string }[];
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
    /** Optional line before cards — owner pain framing (VI homepage) */
    painLead?: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaSecondaryHref: string;
    learnMore: string;
    items: {
      title: string;
      body: string;
      bullets: string[];
      href: string;
    }[];
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
    /** Optional line under CTA (owner invite) */
    ctaHint?: string;
    /** Industry chips — “họ từng làm ngành mình” */
    industries?: string[];
    problemLabel: string;
    scopeLabel: string;
    resultLabel: string;
    beforeLabel?: string;
    afterLabel?: string;
    items: {
      id: string;
      title: string;
      tag: string;
      problem: string;
      scope: string;
      result: string;
      before?: string;
      after?: string;
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
    /** Short controlled-path line under the title */
    roadmap: string;
    support: string;
    items: {
      id: "agents" | "automation" | "integration";
      tag: string;
      title: string;
      body: string;
    }[];
    note: string;
    ctaPrimary: string;
    ctaSecondary: string;
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
    /** Optional delivery promise strip under support */
    promise?: string;
    reasons: { title: string; body: string }[];
  };
  /** Optional homepage “fit” block (VI via homepage_lang). */
  fit?: {
    eyebrow: string;
    title: string;
    support: string;
    /** Legacy yes/no columns */
    noTitle?: string;
    noItems?: string[];
    yesTitle?: string;
    yesItems?: string[];
    /** SEO/GEO fit matrix (preferred when present) */
    matrix?: { profile: string; recommended: string; note: string }[];
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
    /** Optional “what you get after contact” list (VI homepage). */
    afterSubmitTitle?: string;
    afterSubmitItems?: string[];
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
    pageEyebrow: string;
    featuredLabel: string;
    homeEyebrow: string;
    homeTitle: string;
    homeCarouselEyebrow: string;
    homeCarouselTitle: string;
    homeCarouselSupport: string;
    viewAll: string;
    filterAll: string;
    readMore: string;
    readMinutes: string;
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
    emptyState: string;
  };
  careers: {
    meta: { title: string; description: string };
    hero: {
      eyebrow: string;
      headline: string;
      support: string;
    };
    model: {
      eyebrow: string;
      title: string;
      support: string;
      bullets: string[];
    };
    roles: {
      eyebrow: string;
      title: string;
      support: string;
    };
    closedRoles: {
      title: string;
      support: string;
    };
    howToApply: {
      eyebrow: string;
      title: string;
      support: string;
      steps: string[];
    };
    faq: {
      eyebrow: string;
      title: string;
      items: { q: string; a: string }[];
    };
    engagement: string;
    comp: string;
    applyCta: string;
    viewDetailCta: string;
    detailClose: string;
    share: string;
    shareCopied: string;
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
        | "marketing"
        | "ai-engineer"
        | "intern-fullstack"
        | "fresher-tester";
      title: string;
      summary: string;
      /** Overview bullets (optional); full copy may live in `detail`. */
      bullets: string[];
      tags: string[];
      /** Overrides careers.comp when set (e.g. sales commission). */
      comp?: string;
      /** Urgent / priority tab label when hiring is time-sensitive. */
      priority?: string;
      /** Rich sections for job detail popup (sales BD pack, etc.). */
      detail?: {
        sections: {
          title: string;
          paragraphs?: string[];
          bullets?: string[];
        }[];
      };
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
      sendError: string;
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
