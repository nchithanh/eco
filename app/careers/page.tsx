import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CareersContent } from "@/components/CareersContent";
import { JsonLd } from "@/components/JsonLd";
import { careersByLocale } from "@/lib/i18n/careers-copy";
import {
 JOB_HIRING,
 isJobAcceptingApplications,
} from "@/lib/careers-jobs";
import {
 buildPageMetadata,
 faqPageJsonLd,
 jobPostingJsonLd,
} from "@/lib/seo";

/** VI meta for Google / GEO (careers is VN-first ICP). */
const c = careersByLocale.vi;
const path = "/careers/";

export const metadata: Metadata = {
 ...buildPageMetadata({
 title: c.meta.title,
 description: c.meta.description,
 path,
 }),
 title: { absolute: c.meta.title },
};

export default function CareersPage() {
 const openJobs = c.jobs.filter((job) => {
 if (JOB_HIRING[job.id].kind === "closed") return false;
 return isJobAcceptingApplications(job.id);
 });

 return (
 <main>
 <JsonLd
 id="careers-jsonld"
 data={[
 faqPageJsonLd(c.faq.items),
 ...openJobs.map((job) =>
 jobPostingJsonLd({
 title: job.title,
 description: [job.summary, ...job.bullets].join(" "),
 path,
 }),
 ),
 ]}
 />
 <Nav />
 <CareersContent />
 <Footer />
 </main>
 );
}
