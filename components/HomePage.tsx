"use client";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SiteOutcomes } from "@/components/SiteOutcomes";
import { WhyKuct } from "@/components/WhyKuct";
import { Capabilities } from "@/components/Capabilities";
import { WorksShowcase } from "@/components/WorksShowcase";
import { AgentDolphinHome } from "@/components/AgentDolphinHome";
import { Technology } from "@/components/Technology";
import { AiEdge } from "@/components/AiEdge";
import { Process } from "@/components/Process";
import { FitSection } from "@/components/FitSection";
import { PopularServices } from "@/components/PopularServices";
import { HomeNews } from "@/components/HomeNews";
import { Faq } from "@/components/Faq";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

/**
 * Homepage story (outcome-first):
 * Hero → Fit → Outcomes → Why → How we help → Projects → Care → Ops AI →
 * Process → Solutions → News → FAQ → CTA
 */
export function HomePage() {
 return (
 <main>
 <Nav />
 <Hero />
 <FitSection />
 <SiteOutcomes />
 <WhyKuct />
 <Capabilities />
 <WorksShowcase />
 <AgentDolphinHome />
 <Technology />
 <AiEdge />
 <Process />
 <PopularServices />
 <HomeNews />
 <Faq />
 <ContactForm />
 <Footer />
 </main>
 );
}
