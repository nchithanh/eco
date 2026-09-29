import {
  bucketSalesEvent,
  SALES_EVENTS,
  type SalesEvent,
} from "@/lib/demos/sales-events";
import type { DolphinSalesCopy, SalesLocale } from "@/lib/demos/dolphin-sales-copy";

function formatRange(event: SalesEvent, locale: SalesLocale): string {
  const tag = locale === "vi" ? "vi-VN" : "en-US";
  const fmt = new Intl.DateTimeFormat(tag, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const start = fmt.format(new Date(`${event.start}T12:00:00`));
  if (event.start === event.end) return start;
  const end = fmt.format(new Date(`${event.end}T12:00:00`));
  return `${start} – ${end}`;
}

function EventCard({
  event,
  locale,
  badge,
  badgeClass,
  placeLabel,
  overviewLabel,
  targetLabel,
  focused,
}: {
  event: SalesEvent;
  locale: SalesLocale;
  badge: string;
  badgeClass: string;
  placeLabel: string;
  overviewLabel: string;
  targetLabel: string;
  focused: boolean;
}) {
  const title = locale === "vi" ? event.titleVi : event.titleEn;
  const place = locale === "vi" ? event.placeVi : event.placeEn;
  const overview = locale === "vi" ? event.overviewVi : event.overviewEn;
  const target = locale === "vi" ? event.targetVi : event.targetEn;
  const className = `block rounded-[10px] border p-4 transition-colors duration-200 ${
    focused
      ? "border-green-400 bg-green-200 hover:bg-green-300 [&_h3]:text-green-950 [&_.text-df-muted]:text-green-900 [&_.text-df-faint]:text-green-800 [&_.text-df-ok]:text-green-800"
      : "border-df-border bg-df-card hover:bg-df-elev"
  }`;
  const body = (
    <>
      <p className={`text-xs font-bold ${badgeClass}`}>{badge}</p>
      <h3 className="mt-1 text-base font-semibold text-df-text">{title}</h3>
      <p className="mt-2 text-sm text-df-muted">
        <time dateTime={event.start}>
          {formatRange(event, locale)}
          {event.hours ? ` · ${event.hours}` : ""}
        </time>
      </p>
      <p className="mt-1 text-sm text-df-muted">
        <span className="text-df-faint">{placeLabel}: </span>
        {place}
      </p>
      {overview ? (
        <p className="mt-2 text-sm text-df-muted">
          <span className="text-df-faint">{overviewLabel}: </span>
          {overview}
        </p>
      ) : null}
      {target ? (
        <p className="mt-1 text-sm text-df-muted">
          <span className="text-df-faint">{targetLabel}: </span>
          {target}
        </p>
      ) : null}
      {event.url ? (
        <p className="mt-2 text-sm font-semibold text-df-accent">
          SECC
        </p>
      ) : null}
    </>
  );
  if (!event.url) return <article className={className}>{body}</article>;
  return (
    <a
      href={event.url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {body}
    </a>
  );
}

function EventGroup({
  id,
  heading,
  empty,
  events,
  locale,
  badgeClass,
  placeLabel,
  overviewLabel,
  targetLabel,
  focusIds,
}: {
  id: string;
  heading: string;
  empty: string;
  events: SalesEvent[];
  locale: SalesLocale;
  badgeClass: string;
  placeLabel: string;
  overviewLabel: string;
  targetLabel: string;
  focusIds: Set<string>;
}) {
  return (
    <section className="grid gap-3" aria-labelledby={id}>
      <h2 id={id} className="text-sm font-bold text-df-text">
        {heading}
        <span className="ml-2 text-df-faint">{events.length}</span>
      </h2>
      {events.length === 0 ? (
        <p className="rounded-[10px] border border-dashed border-df-border-strong bg-df-elev px-4 py-3 text-sm text-df-muted">
          {empty}
        </p>
      ) : (
        <div className="grid gap-3">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              locale={locale}
              badge={heading}
              badgeClass={badgeClass}
              placeLabel={placeLabel}
              overviewLabel={overviewLabel}
              targetLabel={targetLabel}
              focused={focusIds.has(event.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export function SalesEventsPanel({
  copy,
  locale,
}: {
  copy: DolphinSalesCopy;
  locale: SalesLocale;
}) {
  const live = SALES_EVENTS.filter((event) => bucketSalesEvent(event) === "live");
  const upcoming = SALES_EVENTS.filter(
    (event) => bucketSalesEvent(event) === "upcoming",
  ).sort((a, b) => a.start.localeCompare(b.start));
  const past = SALES_EVENTS.filter((event) => bucketSalesEvent(event) === "past").sort(
    (a, b) => b.start.localeCompare(a.start),
  );
  const nearestStart = upcoming[0]?.start;
  const focusIds = new Set(
    [
      ...live,
      ...upcoming.filter((event) => event.start === nearestStart),
    ].map((event) => event.id),
  );
  const page = copy.eventsPage;

  return (
    <div className="df-panel">
      <EventGroup
        id="df-events-live"
        heading={page.live}
        empty={page.emptyLive}
        events={live}
        locale={locale}
        badgeClass="text-df-ok"
        placeLabel={page.place}
        overviewLabel={page.overview}
        targetLabel={page.target}
        focusIds={focusIds}
      />
      <EventGroup
        id="df-events-upcoming"
        heading={page.upcoming}
        empty={page.emptyUpcoming}
        events={upcoming}
        locale={locale}
        badgeClass="text-df-accent"
        placeLabel={page.place}
        overviewLabel={page.overview}
        targetLabel={page.target}
        focusIds={focusIds}
      />
      {past.length > 0 ? (
        <EventGroup
          id="df-events-past"
          heading={page.past}
          empty=""
          events={past}
          locale={locale}
          badgeClass="text-df-faint"
          placeLabel={page.place}
          overviewLabel={page.overview}
          targetLabel={page.target}
          focusIds={focusIds}
        />
      ) : null}
    </div>
  );
}
