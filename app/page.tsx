import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Capabilities } from "@/components/Capabilities";
import { Process } from "@/components/Process";
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
      <SecondaryServices />
      <ContactForm />
      <Footer />
    </main>
  );
}
