import { CONTACTS } from "@/lib/contacts";

/** Default hotline (founder) — digits only. */
export const PROFILE_DEFAULT_PHONE_DIGITS = CONTACTS.phone;

/** Display form for default hotline. */
export const PROFILE_DEFAULT_PHONE_DISPLAY = "0779 937 633";

/**
 * Resolve `?sdt=` for company-profile contact.
 * Empty / invalid → founder default. Digits only kept from the query.
 */
export function resolveProfileContactPhone(
  sdt: string | null | undefined,
): { digits: string; display: string } {
  const digits = (sdt ?? "").replace(/\D/g, "");
  if (!digits) {
    return {
      digits: PROFILE_DEFAULT_PHONE_DIGITS,
      display: PROFILE_DEFAULT_PHONE_DISPLAY,
    };
  }
  return { digits, display: formatProfilePhoneDisplay(digits) };
}

/** Light grouping for VN mobiles; otherwise return digits as-is. */
export function formatProfilePhoneDisplay(digits: string): string {
  if (digits.length === 10 && digits.startsWith("0")) {
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  }
  if (digits.length === 11 && digits.startsWith("84")) {
    const local = `0${digits.slice(2)}`;
    return formatProfilePhoneDisplay(local);
  }
  return digits;
}
