/** Dolphin sale compensation — SoT for admin HR + Worker. */

export const SALE_COMP = {
  commissionRate: 0.2,
  bonusStep: 10_000_000,
  bonusPerStep: 1_000_000,
  bonusMaxSteps: 6,
  revenueStages: ["won", "deliver", "expand"] as const,
} as const;

export type SalesComp = {
  revenue: number;
  wonCount: number;
  commission: number;
  bonus: number;
  bonusSteps: number;
  kpiPct: number | null;
  payout: number;
  milestones: { amount: number; hit: boolean }[];
};

export function isRevenueStage(stage: string): boolean {
  return (SALE_COMP.revenueStages as readonly string[]).includes(stage);
}

export function computeSalesComp(
  revenue: number,
  wonCount: number,
  salary: number,
  kpiTarget: number,
): SalesComp {
  const safeRevenue = Number.isFinite(revenue) && revenue > 0 ? revenue : 0;
  const safeWon = Number.isFinite(wonCount) && wonCount > 0 ? Math.round(wonCount) : 0;
  const safeSalary = Number.isFinite(salary) && salary > 0 ? salary : 0;
  const safeKpi = Number.isFinite(kpiTarget) && kpiTarget > 0 ? kpiTarget : 0;
  const bonusSteps = Math.min(
    SALE_COMP.bonusMaxSteps,
    Math.floor(safeRevenue / SALE_COMP.bonusStep),
  );
  const commission = safeRevenue * SALE_COMP.commissionRate;
  const bonus = bonusSteps * SALE_COMP.bonusPerStep;
  const milestones = Array.from({ length: SALE_COMP.bonusMaxSteps }, (_, i) => {
    const amount = SALE_COMP.bonusStep * (i + 1);
    return { amount, hit: safeRevenue >= amount };
  });
  return {
    revenue: safeRevenue,
    wonCount: safeWon,
    commission,
    bonus,
    bonusSteps,
    kpiPct: safeKpi > 0 ? Math.round((safeRevenue / safeKpi) * 100) : null,
    payout: safeSalary + commission + bonus,
    milestones,
  };
}
