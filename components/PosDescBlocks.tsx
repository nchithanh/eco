import { AccentText } from "@/components/BrandName";

export type PosDescCard = {
  title: string;
  body: string;
  emoji?: string;
};

/** Short scannable cards — breaks up long POS landing copy. */
export function PosDescGrid({
  id,
  title,
  lead,
  cards,
  muted,
}: {
  id: string;
  title: string;
  lead?: string;
  cards: readonly PosDescCard[];
  muted?: boolean;
}) {
  return (
    <section
      className={
        muted
          ? "border-t border-[var(--kuct-border)] bg-[var(--kuct-surface-muted)] py-14 sm:py-16"
          : "border-t border-[var(--kuct-border)] bg-white py-14 sm:py-16"
      }
      aria-labelledby={id}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2
          id={id}
          className="max-w-[20ch] font-display text-[1.65rem] font-semibold tracking-tight sm:text-[2rem]"
        >
          <AccentText>{title}</AccentText>
        </h2>
        {lead ? (
          <p className="mt-3 max-w-[44ch] text-sm leading-relaxed text-[var(--kuct-muted)] sm:text-base">
            {lead}
          </p>
        ) : null}
        <ul
          className={`mt-8 m-0 grid list-none gap-3 p-0 sm:grid-cols-2 ${
            cards.length >= 3 ? "lg:grid-cols-3" : ""
          } ${cards.length >= 4 ? "lg:grid-cols-4" : ""}`}
        >
          {cards.map((card) => (
            <li
              key={card.title}
              className={
                muted
                  ? "rounded-[10px] border border-[var(--kuct-border)] bg-white px-4 py-4"
                  : "rounded-[10px] border border-[var(--kuct-border)] bg-[var(--kuct-surface-muted)] px-4 py-4"
              }
            >
              {card.emoji ? (
                <span className="text-xl" aria-hidden>
                  {card.emoji}
                </span>
              ) : null}
              <h3
                className={`m-0 text-sm font-semibold text-[var(--kuct-text)] ${
                  card.emoji ? "mt-2" : ""
                }`}
              >
                {card.title}
              </h3>
              <p className="mt-1.5 m-0 text-sm leading-relaxed text-[var(--kuct-muted)]">
                {card.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PosDayStrip({
  id,
  title,
  steps,
}: {
  id: string;
  title: string;
  steps: readonly { label: string; detail: string }[];
}) {
  return (
    <section
      className="border-t border-[var(--kuct-border)] py-14 sm:py-16"
      aria-labelledby={id}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2
          id={id}
          className="font-display text-[1.65rem] font-semibold tracking-tight sm:text-[2rem]"
        >
          <AccentText>{title}</AccentText>
        </h2>
        <ol className="mt-8 m-0 flex list-none flex-col gap-3 p-0 sm:flex-row sm:flex-wrap sm:gap-3">
          {steps.map((step, index) => (
            <li
              key={step.label}
              className="flex min-w-0 flex-1 items-start gap-3 rounded-[10px] border border-[var(--kuct-border)] bg-white px-4 py-4 sm:min-w-[10rem]"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                {index + 1}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-[var(--kuct-text)]">
                  {step.label}
                </span>
                <span className="mt-1 block text-sm text-[var(--kuct-muted)]">
                  {step.detail}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
