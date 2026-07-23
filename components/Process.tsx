const steps = [
  { name: "Discovery", detail: "Hiểu bài toán & phạm vi" },
  { name: "Estimate", detail: "Báo giá + milestone" },
  { name: "Build", detail: "Sprint, demo định kỳ" },
  { name: "Handover", detail: "UAT, deploy, chuyển giao" },
] as const;

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Quy trình gọn</h2>
        <ol className="mt-14 grid gap-8 md:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.name}>
              <span className="text-xs font-medium tracking-widest text-[var(--yega-accent)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-medium">{step.name}</h3>
              <p className="mt-2 text-sm text-[var(--yega-muted)]">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
