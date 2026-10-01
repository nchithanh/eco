"use client";

import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export function ContactPageContent() {
  return (
    <main>
      <Nav />
      <ContactForm variant="page" />
      <Footer />
    </main>
  );
}
