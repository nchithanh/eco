import type { Metadata } from "next";
import { EnglishTeacherLanding } from "@/components/demos/EnglishTeacherLanding";
import { englishTeacherDemoCopy } from "@/lib/demos/english-teacher-copy";
import { buildPageMetadata } from "@/lib/seo";
import "./english-teacher.css";

const path = "/demos/english-teacher/";
const c = englishTeacherDemoCopy;

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path,
    noIndex: true,
  }),
  title: { absolute: c.metaTitle },
};

export default function EnglishTeacherDemoPage() {
  return <EnglishTeacherLanding />;
}
