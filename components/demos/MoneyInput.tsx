"use client";

import type { KeyboardEvent } from "react";
import { formatVndInput, parseVndInput } from "@/lib/demos/money-format";

export function MoneyInput({
  value,
  onChange,
  disabled,
  required,
  id,
  autoFocus,
  className,
  onBlur,
  onKeyDown,
  "aria-label": ariaLabel,
}: {
  value: string;
  onChange: (next: string) => void;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  autoFocus?: boolean;
  className?: string;
  onBlur?: () => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  "aria-label"?: string;
}) {
  return (
    <span className={`df-money-input${className ? ` ${className}` : ""}`}>
      <input
        id={id}
        inputMode="numeric"
        autoComplete="off"
        required={required}
        disabled={disabled}
        autoFocus={autoFocus}
        aria-label={ariaLabel}
        value={value}
        onChange={(e) => onChange(formatVndInput(e.target.value))}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
      <em aria-hidden>₫</em>
    </span>
  );
}

export function moneyFieldValue(amount: number | string): string {
  if (typeof amount === "number") return formatVndInput(String(Math.round(amount)));
  return formatVndInput(amount);
}

export { parseVndInput };
