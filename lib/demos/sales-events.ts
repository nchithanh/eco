import eventsJson from "@/lib/demos/sales-events.json";

export type SalesEvent = {
  id: string;
  titleVi: string;
  titleEn: string;
  placeVi: string;
  placeEn: string;
  /** Inclusive start, YYYY-MM-DD. */
  start: string;
  /** Inclusive end, YYYY-MM-DD. */
  end: string;
  hours?: string;
  url?: string;
  overviewVi?: string;
  overviewEn?: string;
  targetVi?: string;
  targetEn?: string;
};

export const SALES_EVENTS: SalesEvent[] = eventsJson;

export type EventBucket = "live" | "upcoming" | "past";

function calendarDay(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function bucketSalesEvent(
  event: Pick<SalesEvent, "start" | "end">,
  today = new Date(),
): EventBucket {
  const day = calendarDay(today);
  if (day < event.start) return "upcoming";
  if (day > event.end) return "past";
  return "live";
}
