"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsContent } from "@/components/NewsContent";

export default function NewsPage() {
  return (
    <main>
      <Nav />
      <NewsContent />
      <Footer />
    </main>
  );
}
