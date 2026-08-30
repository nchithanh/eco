"use client";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { FitSection } from "@/components/FitSection";
import { HomeProblems } from "@/components/HomeProblems";
import { WhyKuct } from "@/components/WhyKuct";
import { Capabilities } from "@/components/Capabilities";
import { WorksShowcase } from "@/components/WorksShowcase";
import { AgentDolphinHome } from "@/components/AgentDolphinHome";
import { DolphinOpsHome } from "@/components/DolphinOpsHome";
import { Technology } from "@/components/Technology";
import { AiEdge } from "@/components/AiEdge";
import { TechStack } from "@/components/TechStack";
import { Process } from "@/components/Process";
import { PopularServices } from "@/components/PopularServices";
import { HomeNews } from "@/components/HomeNews";
import { Faq } from "@/components/Faq";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

/**
 * Homepage story (pain-first):
 * Hero → Fit → Problems → Why (4 steps) → Solutions → Care → Ops → Works →
 * Process → Website packages → Stack → Ops AI → News → FAQ → CTA
 */
export function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <FitSection />
      <HomeProblems />
      <WhyKuct />
      <Capabilities />
      <AgentDolphinHome />
      <DolphinOpsHome />
      <WorksShowcase />
      <Process />
      <PopularServices />
      <TechStack />
      <Technology />
      <AiEdge />
      <HomeNews />
      <Faq />
      <ContactForm />
      <Footer />
    </main>
  );
}
