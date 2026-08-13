import company from "../../public/schema/company.json";
import servicesIndex from "../../public/schema/services/index.json";
import web from "../../public/schema/services/web.json";
import landing from "../../public/schema/services/landing.json";
import mobile from "../../public/schema/services/mobile.json";
import software from "../../public/schema/services/software.json";
import design from "../../public/schema/services/design.json";
import integrations from "../../public/schema/services/integrations.json";
import agentsService from "../../public/schema/services/agents.json";
import agentsIndex from "../../public/schema/agents/index.json";
import dolphinCare from "../../public/schema/agents/dolphin-care.json";
import aiTransform from "../../public/schema/agents/ai-transform.json";
import dolphinIntelligence from "../../public/schema/agents/dolphin-intelligence.json";
import homepageIndex from "../../public/schema/homepage/index.json";
import homepageHero from "../../public/schema/homepage/hero.json";
import homepageStats from "../../public/schema/homepage/stats.json";
import homepageWhy from "../../public/schema/homepage/why.json";
import homepageCapabilities from "../../public/schema/homepage/capabilities.json";
import homepageWorks from "../../public/schema/homepage/works.json";
import homepageDolphinCare from "../../public/schema/homepage/dolphin-care.json";
import homepageTechnology from "../../public/schema/homepage/technology.json";
import homepageAiEdge from "../../public/schema/homepage/ai-edge.json";
import homepageStack from "../../public/schema/homepage/stack.json";
import homepageProcess from "../../public/schema/homepage/process.json";
import homepageFit from "../../public/schema/homepage/fit.json";
import homepagePopular from "../../public/schema/homepage/popular-services.json";
import homepageFaq from "../../public/schema/homepage/faq.json";
import homepageContact from "../../public/schema/homepage/contact.json";

export const SCHEMA_SERVICE_SLUGS = [
  "web",
  "landing",
  "mobile",
  "software",
  "design",
  "integrations",
  "agents",
] as const;

export type SchemaServiceSlug = (typeof SCHEMA_SERVICE_SLUGS)[number];

export const SCHEMA_AGENT_SLUGS = [
  "dolphin-care",
  "ai-transform",
  "dolphin-intelligence",
] as const;

export type SchemaAgentSlug = (typeof SCHEMA_AGENT_SLUGS)[number];

export const SCHEMA_HOMEPAGE_SLUGS = [
  "hero",
  "stack",
  "stats",
  "why",
  "capabilities",
  "works",
  "dolphin-care",
  "technology",
  "ai-edge",
  "process",
  "fit",
  "popular-services",
  "faq",
  "contact",
] as const;

export type SchemaHomepageSlug = (typeof SCHEMA_HOMEPAGE_SLUGS)[number];

export function isSchemaServiceSlug(value: string): value is SchemaServiceSlug {
  return (SCHEMA_SERVICE_SLUGS as readonly string[]).includes(value);
}

export function isSchemaAgentSlug(value: string): value is SchemaAgentSlug {
  return (SCHEMA_AGENT_SLUGS as readonly string[]).includes(value);
}

export function isSchemaHomepageSlug(
  value: string,
): value is SchemaHomepageSlug {
  return (SCHEMA_HOMEPAGE_SLUGS as readonly string[]).includes(value);
}

export const schemaCompany = company;
export const schemaServicesIndex = servicesIndex;
export const schemaAgentsIndex = agentsIndex;
export const schemaHomepageIndex = homepageIndex;

export const schemaServicesBySlug: Record<SchemaServiceSlug, object> = {
  web,
  landing,
  mobile,
  software,
  design,
  integrations,
  agents: agentsService,
};

export const schemaAgentsBySlug: Record<SchemaAgentSlug, object> = {
  "dolphin-care": dolphinCare,
  "ai-transform": aiTransform,
  "dolphin-intelligence": dolphinIntelligence,
};

export const schemaHomepageBySlug: Record<SchemaHomepageSlug, object> = {
  hero: homepageHero,
  stats: homepageStats,
  why: homepageWhy,
  capabilities: homepageCapabilities,
  works: homepageWorks,
  "dolphin-care": homepageDolphinCare,
  technology: homepageTechnology,
  "ai-edge": homepageAiEdge,
  stack: homepageStack,
  process: homepageProcess,
  fit: homepageFit,
  "popular-services": homepagePopular,
  faq: homepageFaq,
  contact: homepageContact,
};
