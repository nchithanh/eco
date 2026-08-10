import type { ReactNode } from "react";
import { DemoGate } from "@/components/demos/DemoGate";
import "./demos.css";

export default function DemosLayout({ children }: { children: ReactNode }) {
  return <DemoGate>{children}</DemoGate>;
}
