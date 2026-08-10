/**
 * Homepage copy — English overlay synced from VI SoT.
 */
import type { HomepageLang } from "./homepage_lang_vi";

export const homepageLangEn: HomepageLang = {
  hero: {
    eyebrow: "Dolphin Software",
    aiPill: "",
    headline: "Don't let technology become a [[burden]] for your business",
    subhead: "Build websites · Modernize legacy systems · Integrate AI where it matters",
    support: "Dolphin Software helps small and medium businesses design custom websites, modernize legacy systems, and apply AI automation — saving time and genuinely improving operational efficiency.",
    trustLine: "Understand first · Clear quotes · No unnecessary upselling",
    ctaPrimary: "Get a quote",
    ctaSecondary: "View website services",
    tags: ["Automation", "Web & App", "AI where it fits"],
    metrics: [
      { value: "6+", label: "Cases on site" },
      { value: "Build", label: "SMB cold-first" },
    ],
    visual: {
      web: "Web & App",
      automation: "Automation",
      ai: "AI Integration"
    }
  },
  siteOutcomes: {
    eyebrow: "Outcomes",
    title: "After handoff, your business can [[run]] these operations independently",
    support:
      "Not a feature list — these are real outcomes after handoff: leads, bookings, content, payments, and operations all under your control.",
    painLead: "Operational results",
    ctaPrimary: "Get a quote",
    ctaSecondary: "View website services",
    ctaSecondaryHref: "#capabilities",
    learnMore: "Learn more",
    items: [
      {
        title: "Attract and convert leads",
        body: "Forms/CTAs and a short contact journey — visitors take action; your team can track the source.",
        bullets: [
          "Clear forms and CTAs on the page",
          "Short contact path — visitors act now",
          "Your team can track lead sources",
        ],
        href: "/services/landing/",
      },
      {
        title: "Stable booking without conflicts",
        body: "Display available slots, auto-confirm, and send reminders — fewer calls asking about availability and double-bookings.",
        bullets: [
          "Live available-slot display",
          "Auto confirm and reminders",
          "Fewer availability calls and double-books",
        ],
        href: "/services/web/",
      },
      {
        title: "Brand customers trust and remember",
        body: "Landing page or business website with focused content — responsive, readable, trust-building.",
        bullets: [
          "Focused landing or business site",
          "Responsive and easy to read",
          "Copy that builds trust quickly",
        ],
        href: "/services/landing/",
      },
      {
        title: "Team can update content themselves",
        body: "CMS/admin included in scope — edit posts, images, pricing without calling the studio back.",
        bullets: [
          "CMS/admin included in handoff scope",
          "Edit posts, images, prices without us",
          "Your team runs daily content",
        ],
        href: "/services/web/",
      },
      {
        title: "Payments and messaging in actual workflow",
        body: "Integrate MoMo / ZaloPay / VNPay / Zalo OA when needed — fewer operational errors than manual connections.",
        bullets: [
          "MoMo / ZaloPay / VNPay when needed",
          "Zalo OA in the contact flow",
          "Fewer errors than manual wiring",
        ],
        href: "/services/integrations/",
      },
      {
        title: "Cleaner internal operations",
        body: "Dashboard, business agent, or Collect → Manage loop — one picture instead of ten scattered tools.",
        bullets: [
          "Dashboard or business agent",
          "Collect → Manage loop",
          "One picture instead of ten tools",
        ],
        href: "/dolphin-care/",
      },
    ],
  },
  why: {
    eyebrow: "Why Dolphin",
    title: "Long-term partner, [[not just]] delivering code",
    support: "Clear timeline, committed scope, and post-handoff support — no technical fog.",
    promise: "Understand first · Clear quotes · Scope-true handoff",
    reasons: [
      {
        title: "Real-world experience",
        body: "7 years of operational practice — reliable, observant, end-to-end handoff for SMB businesses."
      },
      {
        title: "End-to-end handoff",
        body: "From discovery to deploy — one team accountable; structured for future expansion."
      },
      {
        title: "Transparent process",
        body: "Milestones, regular demos, scope-based quotes — measured by actual delivered product."
      },
      {
        title: "Post-handoff support",
        body: "Operations guide, agreed warranty for bugs, optimization when real-world needs emerge."
      }
    ]
  },
  capabilities: {
    eyebrow: "How we help",
    title: "Clear website, business can [[actually]] operate it",
    support: "A short brief is enough to start. Pick the closest outcome — Dolphin Software will propose an approach and a concrete quote.",
    ctaPrimary: "Get a quote",
    ctaSecondary: "View service packages",
    ctaSecondaryHref: "#popular-services",
    learnMore: "Learn more",
    prevPage: "Previous",
    nextPage: "Next",
    pauseCarousel: "Pause carousel",
    playCarousel: "Play carousel",
    offers: [
      {
        id: "build",
        title: "Build",
        body: "Custom websites and software for how you sell and operate — not brochure-only sites.",
        meta: "SMB first",
        href: "/services/web/"
      },
      {
        id: "modernize",
        title: "Modernize",
        body: "Upgrade, extend, and tune what you already run before rebuilding from scratch.",
        meta: "Living systems",
        href: "/services/software/"
      },
      {
        id: "automate",
        title: "Automate",
        body: "AI on repeatable work when it earns its keep — assist people, cut manual steps.",
        meta: "Repeat workflows",
        href: "/ai-transform/"
      },
      {
        id: "care",
        title: "Care",
        body: "Dolphin Care — website customer care, lead capture, after-hours help within knowledge scope.",
        meta: "On your site",
        href: "/dolphin-care/"
      }
    ],
    moreServices: [
      {
        label: "Landing Page",
        href: "/services/landing/"
      },
      {
        label: "Mobile App",
        href: "/services/mobile/"
      },
      {
        label: "UI/UX",
        href: "/services/design/"
      },
      {
        label: "Payment integration",
        href: "/services/integrations/"
      }
    ],
    items: [
      {
        id: "build",
        category: "Build",
        title: "Build",
        body: "Custom websites and software for how you sell and operate — not brochure-only sites.",
        tags: [
          "SMB first"
        ]
      },
      {
        id: "modernize",
        category: "Modernize",
        title: "Modernize",
        body: "Upgrade, extend, and tune what you already run before rebuilding from scratch.",
        tags: [
          "Living systems"
        ]
      },
      {
        id: "automate",
        category: "Automate",
        title: "Automate",
        body: "AI on repeatable work when it earns its keep — assist people, cut manual steps.",
        tags: [
          "Repeat workflows"
        ]
      },
      {
        id: "care",
        category: "Care",
        title: "Care",
        body: "Dolphin Care — website customer care, lead capture, after-hours help within knowledge scope.",
        tags: [
          "On your site"
        ]
      }
    ]
  },
  works: {
    eyebrow: "Projects",
    title: "Real websites we've deployed",
    support: "Each project below: problem → scope → measurable result.",
    cta: "Want a website like this?",
    ctaHint: "Talk to us — we analyze together before proposing solutions.",
    industries: [
      "Spa",
      "Restaurant",
      "Education",
      "Healthcare",
      "Retail",
      "Events"
    ],
    problemLabel: "Problem",
    scopeLabel: "Scope",
    resultLabel: "Result",
    beforeLabel: "Before",
    afterLabel: "After",
    items: [
      {
        id: "billiard",
        title: "Billiard ops management",
        tag: "Website · Booking",
        problem: "Paper/Excel: hard to see available tables; shift revenue got lost.",
        scope: "Table map, hourly timer, add-ons, shift summary on web/ops.",
        result: "Fewer missed shifts, faster onboarding, see shifts live.",
        before: "",
        after: ""
      },
      {
        id: "badminton",
        title: "Badminton court website",
        tag: "Booking",
        problem: "Customers call to ask; admins collide on slots.",
        scope: "Court intro, availability calendar, clear booking process.",
        result: "Fewer availability calls, more accurate time-slot bookings.",
        before: "",
        after: ""
      },
      {
        id: "tickets",
        title: "Ticket booking & conversion optimization",
        tag: "Booking · Convert",
        problem: "Customers view events but abandon before completing tickets.",
        scope: "Browse → Select → Checkout/Hold flow optimized for conversion.",
        result: "Fewer steps to book, higher booking completion rate.",
        before: "",
        after: ""
      },
      {
        id: "beauty",
        title: "Beauty appointment booking",
        tag: "Beauty",
        problem: "Missed appointments, double-bookings; hard to hold slots after hours.",
        scope: "Slot booking by nail/makeup/service + confirmation.",
        result: "Fewer missed appointments, more after-hours bookings.",
        before: "",
        after: ""
      },
      {
        id: "cafe",
        title: "QR ordering for cafe",
        tag: "QR · Order",
        problem: "Peak hours slow ordering, handwritten errors.",
        scope: "QR menu by table, cart, push orders to counter/kitchen.",
        result: "Faster ordering, fewer order mistakes, staff focus on service.",
        before: "",
        after: ""
      },
      {
        id: "clinic",
        title: "Clinic appointment booking",
        tag: "Clinic",
        problem: "Patients call to ask; easy to collide slots, forget follow-up reminders.",
        scope: "Schedule by doctor/slot + confirmation and reminders.",
        result: "Fewer availability calls, fewer double-bookings.",
        before: "",
        after: ""
      }
    ]
  },
  technology: {
    eyebrow: "AI Philosophy",
    title: "One console for signals [[scattered]] everywhere",
    support: "Before: Slack, Jira, and documents fragment real data. After applying: Collect → Standardize → Operate → Manage — entire picture in one transparent flow.",
    cta: "Learn more",
    live: "live",
    tabs: [
      "Overview",
      "Data",
      "Insight",
      "Alerts"
    ],
    widgets: {
      activity: "Activity",
      pulse: "System pulse",
      nodes: "Running nodes"
    },
    principles: [
      {
        title: "Process before tooling",
        body: ""
      },
      {
        title: "Measure with numbers",
        body: ""
      },
      {
        title: "Humans always in control",
        body: ""
      }
    ]
  },
  aiEdge: {
    eyebrow: "Ops AI",
    badge: "Automate",
    title: "Website as foundation — [[AI]] is the smart layer on top",
    support: "Web & app are Dolphin Software's core. When genuinely useful, we add chat, automation, and process agents — real-world, not science fiction.",
    items: [
      {
        id: "chat",
        tag: "On-site",
        title: "AI chat & FAQ on your website",
        body: "Answer common questions and capture leads right on your live website."
      },
      {
        id: "workflow",
        tag: "Automation",
        title: "Smart workflow & auto-forms",
        body: "Automate booking, quotes, and lead routing — reduce manual steps."
      },
      {
        id: "agent",
        tag: "Integration",
        title: "Agent connecting CRM / Zalo",
        body: "Business agent tied into real workflow, connects live systems — measurable results."
      }
    ],
    ctaTransform: "Enterprise AI transformation",
    ctaAgent: "See Dolphin Care"
  },
  process: {
    eyebrow: "Process",
    title: "5-step process with [[clear handoff]]",
    support: "From discovery to handoff — clear output at each step, no skipped stages.",
    deliverableLabel: "Deliverable",
    steps: [
      {
        name: "Listen & Discover",
        detail: "Clarify website/app goals along with budget and time constraints.",
        deliverable: "Aligned problem summary, goals, and constraints."
      },
      {
        name: "Plan & Quote",
        detail: "Break down features, milestones, costs, and handoff deliverables.",
        deliverable: "Proposal with clear scope, timeline, and quote."
      },
      {
        name: "Sprint development",
        detail: "Deliver UI, features, responsive, integrations — demo for early adjustments.",
        deliverable: "Sprint builds/demos for early review."
      },
      {
        name: "QA & UAT",
        detail: "Quality checks and acceptance testing with you before production.",
        deliverable: "UAT checklist and resolved bug list."
      },
      {
        name: "Handoff & Partner",
        detail: "Deploy, operations guide, documentation — plus technical support after going live.",
        deliverable: "Source code, domain/hosting & env, admin (if any), guide, and agreed warranty."
      }
    ]
  },
  fit: {
    eyebrow: "Fit",
    title: "Who is Dolphin Software [[best suited]] for?",
    support: "Dolphin Software is best suited for small and medium businesses (SMB) in Vietnam who need: custom website design from scratch, modernize legacy systems causing operational difficulties, or integrate AI automation into real-world workflow. If you're not tech-savvy — that's fine; the team works in business language and hands off until it's operational.",
    matrix: [
      {
        profile: "Business needs website they can operate",
        recommended: "Business Website or Web App",
        note: "Includes CMS, operations guide, and technical warranty."
      },
      {
        profile: "Startup needs quick launch with controlled budget",
        recommended: "Landing Page or MVP in stages",
        note: "Deliver MVP first, expand by milestone — control budget and validate early."
      },
      {
        profile: "Business wants to automate booking / lead / payment",
        recommended: "Web App + Payment integration + Dolphin Care",
        note: "Fits when current process relies on manual calls or Excel."
      },
      {
        profile: "Business wants to modernize legacy systems or add AI to existing infrastructure",
        recommended: "System modernization + AI roadmap",
        note: "Dolphin Software analyzes current system before quoting — doesn't push unnecessary features."
      }
    ]
  },
  popularServicesChrome: {
    eyebrow: "Solutions",
    title: "[[Popular]] services",
    support: "Compare four main packages — choose the fit, then request a quote or chat Zalo. Need custom scope, legacy system integration, or industry-specific SEO? Dolphin Software analyzes each item in detail before quoting."
  },
  faq: {
    eyebrow: "FAQ",
    title: "[[Frequently asked]] questions",
    support: "Timeline · quotes · warranty · security — answered before starting.",
    items: [
      {
        q: "What does Dolphin Software do?",
        a: "Dolphin Software helps small and medium businesses (SMB) go from business problem to operational system — website, mobile, automation, and AI. You just state the goal; Dolphin Software proposes the right scope."
      },
      {
        q: "Can non-technical businesses work with you?",
        a: "Yes. Most of Dolphin Software's clients don't code. You just share an idea or short brief — the team defines scope in business language, delivers end-to-end, and guides operations after completion."
      },
      {
        q: "How does the workflow happen?",
        a: "Clarify goals → Lock scope & estimate → Sprint with deliverables → UAT → Handoff & Support. You always know what's next."
      },
      {
        q: "How does quoting work? Any hidden fees?",
        a: "Send a short brief via Contact, 'Get a quote,' or Zalo. Dolphin Software responds with expected scope and next steps — no fees beyond agreed scope."
      },
      {
        q: "What's a typical timeline?",
        a: "Landing page: ~3–5 days. Business website: ~7–14 days. Shop / e-commerce: ~3–4 weeks. App / workflow: based on scope. Specific dates in quote after locking scope."
      },
      {
        q: "Does it include SEO and mobile?",
        a: "Responsive by default with clear heading/meta and foundational on-page SEO. Long-term SEO content or large ad campaigns can be added in separate scope."
      },
      {
        q: "Can you work remotely?",
        a: "Yes — chat/call, regular demos, and clear handoff documentation. Clients nationwide can collaborate."
      },
      {
        q: "How is post-handoff maintenance different from new features?",
        a: "After handoff: operations guide plus technical bug warranty (typically 3–6 months) within accepted scope. New features are separate — quoted first, not covered by warranty."
      },
      {
        q: "How are security and data handled?",
        a: "HTTPS, access control, environment variables, no committed secrets. Your data is yours. Audit / SSO / compliance can be added to scope."
      },
      {
        q: "Does scope balloon mid-project?",
        a: "Scope is locked at the quote step. Out-of-scope requests are logged, re-estimated, and only executed when you agree."
      },
      {
        q: "Do you do MVP in stages?",
        a: "Yes. Dolphin Software prioritizes MVP enough to run, then expands by milestone — validate early and control budget."
      },
      {
        q: "How is an AI agent different from a marketing chatbot?",
        a: "Marketing chatbots answer FAQ from scripts. Dolphin Software's agents tie into business workflow, tools, and internal context — support operations, not just sales chat."
      },
      {
        q: "How do I get started?",
        a: "Click 'Get a quote,' chat Zalo, or send Contact form with goal, deadline, and estimated budget if available."
      }
    ]
  },
  contactChrome: {
    eyebrow: "Next step",
    title: "Ready to build a website or [[automate]] workflow?",
    support: "Send a short brief — Dolphin Software responds with approach and right scope, no package pushing.",
    nextHint: "Typically responds within business day.",
    afterSubmitTitle: "After you send the brief, you will receive:",
    afterSubmitItems: [
      "Initial approach for your problem",
      "Scope suggestions: website · modernization · AI automation · Dolphin Care",
      "Timeline milestones and estimated cost range"
    ]
  },
  seo: {
    title: "Dolphin Software – Website Design & AI for Small and Medium Businesses",
    description: "Dolphin Software builds custom websites, modernizes legacy systems, and integrates AI automation for small and medium businesses in Vietnam. Transparent quotes, on-time handoff.",
    og_title: "Dolphin Software – Website Design · System Modernization · AI Automation",
    og_description: "We help SMB businesses build operational websites, modernize legacy systems, and apply AI where it matters — save time, increase operational efficiency.",
    canonical: "https://dolphin-software.io.vn/",
    keywords: [
      "custom website design",
      "modernize legacy systems",
      "AI automation for business",
      "website design for small and medium businesses",
      "Dolphin Software",
      "Dolphin Care",
      "AI integration for websites",
      "web design company Vietnam"
    ]
  }
};
