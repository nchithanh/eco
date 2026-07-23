"use client";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Capabilities } from "@/components/Capabilities";
import { Process } from "@/components/Process";
import { TechStack } from "@/components/TechStack";
import { WhyKuct } from "@/components/WhyKuct";
import { CoFounder } from "@/components/CoFounder";
import { SecondaryServices } from "@/components/SecondaryServices";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Capabilities />
      <Process />
      <TechStack />
      <WhyKuct />
      <CoFounder />
      <SecondaryServices />
      <ContactForm />
      <Footer />
    </main>
  );
}
