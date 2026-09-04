/**
 * Homepage copy — English overlay synced from VI SoT.
 */
import type { HomepageLang } from "./homepage_lang_vi";

export const homepageLangEn: HomepageLang = {
  hero: {
    eyebrow: "Dolphin Software",
    aiPill: "",
    headline: "Solve Business Problems with [[AI & Technology]]",
    subhead: "Understand the business first, find where technology actually pays off, then build only what you need.",
    support: "Dolphin helps growing businesses spot operational bottlenecks and build the right fix — website, AI agent, CRM, automation, or custom software.",
    trustLine: "We don't start with technology. We start with your problem.",
    ctaPrimary: "Talk about your business",
    ctaSecondary: "See solutions",
    tags: ["Problem first", "AI & technology", "Website is one solution"],
    metrics: [
      { value: "6+", label: "Cases on site" },
      { value: "Pain", label: "Start with the problem" },
    ],
    visual: {
      web: "Web & App",
      automation: "Automation",
      ai: "AI Integration"
    }
  },
  problems: {
    eyebrow: "What is slowing you down?",
    title: "What is [[slowing down]] your business?",
    support: "We don't open with a catalog. We open with the bottleneck — then pick the tool.",
    items: [
      {
        title: "Too much manual work",
        body: "The team spends hours on the same tasks every day.",
        href: "/ai-transform/",
        solution: "Automation",
      },
      {
        title: "Customers slip through",
        body: "Leads, follow-ups, and messages sit scattered — then go cold. CRM holds the book; Care covers the website.",
        href: "/dolphin-ops/",
        solution: "CRM / AI care",
      },
      {
        title: "The website doesn't grow the shop",
        body: "You have a page, but visitors don't call or leave details.",
        href: "/services/web/",
        solution: "Website",
      },
      {
        title: "Tools don't talk to each other",
        body: "Customers, sales, and ops live in separate systems.",
        href: "/services/integrations/",
        solution: "Integrations",
      },
      {
        title: "The business depends on a few people",
        body: "Process and customer knowledge live in staff heads.",
        href: "/services/software/",
        solution: "Systems / CRM",
      },
      {
        title: "Want AI, don't know where to start",
        body: "You know AI matters, not which use case actually pays off.",
        href: "/ai-transform/",
        solution: "AI solutions",
      },
    ],
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
    title: "We don't sell a [[pile of features]]",
    support: "Most businesses don't need a system with a hundred buttons. They need the bottleneck removed. Dolphin starts with the business — not the product.",
    promise: "We don't start with technology. We start with your problem.",
    reasons: [
      {
        title: "Understand",
        body: "Hear how you sell, care for customers, and run the shop — in business language."
      },
      {
        title: "Identify the bottleneck",
        body: "Point to where time, leads, or a single person is the choke point."
      },
      {
        title: "Build the right thing",
        body: "Website, AI, CRM, integrations, or custom software — only what matches the pain."
      },
      {
        title: "Measure and improve",
        body: "Handover so you can run it; adjust when reality shows up — not a dump-and-leave."
      }
    ]
  },
  capabilities: {
    eyebrow: "Solutions",
    title: "Solutions that follow how the business [[actually runs]]",
    support: "This is not seven separate agency services. These are the tools Dolphin uses to fix one operational problem.",
    ctaPrimary: "Talk about your business",
    ctaSecondary: "Talk about your business",
    ctaSecondaryHref: "#contact",
    learnMore: "Learn more",
    prevPage: "Previous",
    nextPage: "Next",
    pauseCarousel: "Pause carousel",
    playCarousel: "Play carousel",
    offers: [
      {
        id: "website",
        title: "Website",
        body: "Websites and web apps tied to a business goal — found, understood, and easy to contact.",
        meta: "Find & convert",
        href: "/services/web/"
      },
      {
        id: "ai",
        title: "AI solutions",
        body: "Practical AI: repeat work, classification, team support — once the pain is clear.",
        meta: "Where it pays",
        href: "/ai-transform/"
      },
      {
        id: "agents",
        title: "AI Agent",
        body: "Dolphin Care — website customer care, lead capture, after-hours help within knowledge scope.",
        meta: "On your site",
        href: "/dolphin-care/"
      },
      {
        id: "crm",
        title: "CRM & customers",
        body: "Dolphin Ops — customers, calendar, follow-up in one place — not scattered in chats.",
        meta: "Internal ops",
        href: "/dolphin-ops/"
      },
      {
        id: "automation",
        title: "Automation",
        body: "Cut manual steps on repeats: reminders, reports, data entry — once the process is clear.",
        meta: "Repeat work",
        href: "/ai-transform/"
      },
      {
        id: "integrations",
        title: "Integrations",
        body: "Connect payments, Zalo, CRM, and what you already run so information flows in one line.",
        meta: "Existing systems",
        href: "/services/integrations/"
      },
      {
        id: "custom",
        title: "Custom software & legacy",
        body: "Build internal systems when off-the-shelf doesn't fit — or upgrade what already runs, not rebuild by default.",
        meta: "By workflow",
        href: "/services/software/"
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
        id: "website",
        category: "Website",
        title: "Website",
        body: "Websites and web apps tied to a business goal — found, understood, and easy to contact.",
        tags: ["Find & convert"]
      },
      {
        id: "ai",
        category: "AI",
        title: "AI solutions",
        body: "Practical AI: repeat work, classification, team support — once the pain is clear.",
        tags: ["Where it pays"]
      },
      {
        id: "agents",
        category: "AI Agent",
        title: "AI Agent",
        body: "Dolphin Care — website customer care, lead capture, after-hours help within knowledge scope.",
        tags: ["On your site"]
      },
      {
        id: "crm",
        category: "CRM",
        title: "CRM & customers",
        body: "Dolphin Ops — customers, calendar, follow-up in one place — not scattered in chats.",
        tags: ["Internal ops"]
      },
      {
        id: "automation",
        category: "Automation",
        title: "Automation",
        body: "Cut manual steps on repeats: reminders, reports, data entry — once the process is clear.",
        tags: ["Repeat work"]
      },
      {
        id: "integrations",
        category: "Integrations",
        title: "Integrations",
        body: "Connect payments, Zalo, CRM, and what you already run so information flows in one line.",
        tags: ["Existing systems"]
      },
      {
        id: "custom",
        category: "Custom",
        title: "Custom software & legacy",
        body: "Build internal systems when off-the-shelf doesn't fit — or upgrade what already runs, not rebuild by default.",
        tags: ["By workflow"]
      }
    ]
  },
  works: {
    eyebrow: "Projects",
    title: "Real bottlenecks we [[unblocked]] — not just pretty shots",
    support: "Each case: the bottleneck → what we built → what changed after handoff. Tech stack sits below.",
    cta: "Talk about your bottleneck",
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
    eyebrow: "Ops AI",
    title: "AI solutions [[for operations]]",
    roadmap: "Controlled AI path: audit → pilot → scale",
    support:
      "Dolphin does not sell pie-in-the-sky AI. We review your real processes, pick the 1–2 jobs worth doing first, run a measured pilot — then scale.",
    items: [
      {
        id: "agents",
        tag: "Agents",
        title: "AI Agents — automate the right work",
        body: "Custom agents for each workflow and role — handle the repetitive work that burns team time.",
      },
      {
        id: "automation",
        tag: "Automation",
        title: "AI Automation — fewer manual steps",
        body: "Automate repeat ops steps: capture leads, follow-up reminders, report rollups.",
      },
      {
        id: "integration",
        tag: "Integration",
        title: "AI Integration — connect systems you already run",
        body: "Wire AI into CRM, chat, calendar, and current tools — no full rip-and-replace.",
      },
    ],
    note: "Dolphin runs AI agent workflows in-house — from coordination and content to design and software delivery.",
    ctaPrimary: "See the AI transformation path",
    ctaSecondary: "Explore use cases by team (Sales, Support, Operations)",
  },
  aiEdge: {
    eyebrow: "Dolphin Intelligence",
    badge: "AI Workflow",
    title: "Turn repeatable processes into [[automated AI workflows]]",
    support:
      "Dolphin Intelligence combines role-based AI agents, real-world actions, conditional logic, and human checkpoints — linked steps, not a one-shot chatbot.",
    items: [
      {
        id: "agent",
        tag: "Agent",
        title: "Role-based AI agents",
        body: "Research, Content, SEO, Review… each with context, instructions, and schema — consistent thinking inside the flow.",
      },
      {
        id: "action",
        tag: "Action · Logic",
        title: "Actions & orchestration logic",
        body: "APIs, CMS, email, publish; cron, branches, and loops — agents decide, actions execute on time.",
      },
      {
        id: "human",
        tag: "Human",
        title: "Human checkpoints where it matters",
        body: "People approve topics, SEO, or publish before the flow continues — control without a black box.",
      },
    ],
    ctaPrimary: "See Dolphin Intelligence",
    ctaSecondary: "AI transformation path",
    learnMore: "Learn more",
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
    exploreCta: "See who we fit",
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
    eyebrow: "Website packages",
    title: "Website packages when the problem is [[being found]] and converting",
    support: "Four packages when the pain is Google / landing / shop — not Dolphin's whole catalog. Pick a package, then request a quote or chat Zalo."
  },
  faq: {
    eyebrow: "FAQ",
    title: "[[Frequently asked]] questions",
    support: "Timeline · quotes · warranty · security — answered before starting.",
    items: [
      {
        q: "What does Dolphin Software do?",
        a: "Dolphin Software is an AI and technology solutions company. We start from the operational problem — then choose a website, AI agent, CRM, automation, integration, or custom software. Not sure which technology you need? Start by describing the bottleneck."
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
        a: "Describe the bottleneck via the Contact form or Zalo. You don't need to know 'website or AI' first — Dolphin proposes scope that matches the pain."
      }
    ]
  },
  contactChrome: {
    eyebrow: "Next step",
    title: "Talk about [[your business]]",
    support: "Not sure which technology you need — describe the bottleneck. Dolphin replies with an approach and the right scope, no package pushing.",
    nextHint: "Typically responds within business day.",
    afterSubmitTitle: "After you send the brief, you will receive:",
    afterSubmitItems: [
      "Initial approach for your problem",
      "Scope suggestions that match the pain: website · AI · CRM · integrations · custom software",
      "Timeline milestones and estimated cost range"
    ]
  },
  seo: {
    title: "Dolphin Software – AI & Technology Solutions for Business",
    description: "Dolphin Software helps businesses identify operational bottlenecks and build the right solution — website, AI agent, CRM, automation, integrations, and custom software. We start with the problem, not the product.",
    og_title: "Dolphin Software – AI & Technology Solutions for Business",
    og_description: "We don't start with technology. We start with your problem. Website, AI, CRM, automation, and custom software — only what the business actually needs.",
    canonical: "https://dolphin-software.io.vn/",
    keywords: [
      "AI and technology solutions for business",
      "custom website design",
      "CRM for small and medium businesses",
      "business process automation",
      "custom management software",
      "Dolphin Software",
      "Dolphin Care",
      "Dolphin Ops"
    ]
  }
};
