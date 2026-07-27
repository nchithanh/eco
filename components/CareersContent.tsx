"use client";

import { useState } from "react";
import { CareersHero } from "@/components/CareersHero";
import { CareersJobs } from "@/components/CareersJobs";
import { CareersApplyForm } from "@/components/CareersApplyForm";
import type { JobId } from "@/lib/careers-schema";

export function CareersContent({ embedded = false }: { embedded?: boolean }) {
  const [selectedRole, setSelectedRole] = useState<JobId | undefined>();

  const onApply = (role: JobId) => {
    setSelectedRole(role);
    document.getElementById("apply")?.scrollIntoView?.({ behavior: "smooth" });
  };

  return (
    <div className={embedded ? "pb-10" : undefined}>
      <CareersHero />
      <CareersJobs onApply={onApply} />
      <CareersApplyForm initialRole={selectedRole} />
    </div>
  );
}
