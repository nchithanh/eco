/** VND display + input: 100000 → 100.000 (dấu chấm nghìn). */

export function formatVnd(amount: number): string {
  const n = Number.isFinite(amount) ? Math.round(amount) : 0;
  const sign = n < 0 ? "−" : "";
  const grouped = String(Math.abs(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${sign}${grouped}₫`;
}

export function formatVndInput(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return "";
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function parseVndInput(raw: string): number {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return 0;
  const n = Number(digits);
  return Number.isFinite(n) ? n : 0;
}
