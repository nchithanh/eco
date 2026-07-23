"use client";

import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CareersHero } from "@/components/CareersHero";
import { CareersJobs } from "@/components/CareersJobs";
import { CareersApplyForm } from "@/components/CareersApplyForm";
import type { JobId } from "@/lib/careers-schema";

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<JobId | undefined>();

  const onApply = (role: JobId) => {
    setSelectedRole(role);
    document.getElementById("apply")?.scrollIntoView?.({ behavior: "smooth" });
  };

  return (
    <main>
      <Nav />
      <CareersHero />
      <CareersJobs onApply={onApply} />
      <CareersApplyForm initialRole={selectedRole} />
      <Footer />
    </main>
  );
}
