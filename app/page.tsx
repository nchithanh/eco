"use client";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { PopularServices } from "@/components/PopularServices";
import { UiGallery } from "@/components/UiGallery";
import { AiEdge } from "@/components/AiEdge";
import { Capabilities } from "@/components/Capabilities";
import { SiteOutcomes } from "@/components/SiteOutcomes";
import { WhatYouGet } from "@/components/WhatYouGet";
import { OpsLifecycle } from "@/components/OpsLifecycle";
import { WorksShowcase } from "@/components/WorksShowcase";
import { Process } from "@/components/Process";
import { TechStack } from "@/components/TechStack";
import { WhyKuct } from "@/components/WhyKuct";
import { CoFounder } from "@/components/CoFounder";
import { HomeNews } from "@/components/HomeNews";
import { Faq } from "@/components/Faq";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <PopularServices />
      <UiGallery />
      <AiEdge />
      <Capabilities />
      <SiteOutcomes />
      <WhatYouGet />
      <OpsLifecycle />
      <WorksShowcase />
      <Process />
      <TrustStrip />
      <TechStack />
      <WhyKuct />
      <CoFounder />
      <HomeNews />
      <Faq />
      <ContactForm />
      <Footer />
    </main>
  );
}
