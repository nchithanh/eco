"use client";

import {
  PosSolutionScene,
  type PosSolutionArtId,
} from "@/components/PosSceneArt";

export type PosBentoCard = {
  title: string;
  body: string;
  art: PosSolutionArtId;
};

/** ElevenLabs Creative-style feature cards: visual inset + title/body footer. */
export function PosFeatureBento({
  eyebrow,
  title,
  support,
  cards,
}: {
  eyebrow: string;
  title: string;
  support: string;
  cards: PosBentoCard[];
}) {
  return (
    <section
      className="border-t border-[var(--kuct-border)] py-16 sm:py-20 lg:py-24"
      aria-labelledby="pos-bento-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-12">
          <div>
            <p className="kuct-section-eyebrow">{eyebrow}</p>
            <h2
              id="pos-bento-heading"
              className="mt-3 max-w-[18ch] font-display text-[1.65rem] font-semibold leading-[1.12] tracking-tight text-[var(--kuct-text)] sm:text-[2.1rem]"
            >
              {title}
            </h2>
          </div>
          <p className="max-w-[42ch] text-base leading-relaxed text-[var(--kuct-muted)] lg:justify-self-end lg:text-right">
            {support}
          </p>
        </div>

        <ul className="mt-10 m-0 grid list-none grid-cols-1 gap-4 p-0 sm:mt-12 sm:grid-cols-2 lg:gap-5">
          {cards.map((card) => (
            <li key={card.title}>
              <article className="flex h-full flex-col overflow-hidden rounded-[10px] border border-[var(--kuct-border)] bg-[var(--kuct-surface-muted)]">
                <div
                  className="flex flex-1 items-center justify-center px-5 py-8 sm:py-10"
                  aria-hidden
                >
                  <div className="w-full max-w-[16rem] rounded-[10px] border border-[var(--kuct-border)] bg-white px-4 py-5 shadow-[0_8px_24px_rgb(0_0_0/0.04)]">
                    <PosSolutionScene id={card.art} />
                  </div>
                </div>
                <div className="border-t border-[var(--kuct-border)] bg-white px-5 py-4 sm:px-6 sm:py-5">
                  <h3 className="m-0 font-display text-base font-semibold text-[var(--kuct-text)] sm:text-lg">
                    {card.title}
                  </h3>
                  <p className="mt-2 m-0 text-sm leading-relaxed text-[var(--kuct-muted)]">
                    {card.body}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
