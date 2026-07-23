import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Capabilities } from "@/components/Capabilities";
import { Process } from "@/components/Process";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Capabilities />
      <Process />
    </main>
  );
}
