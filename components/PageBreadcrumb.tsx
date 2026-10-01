import Link from "next/link";
import { assetPath } from "@/lib/asset";

export type BreadcrumbItem = {
  name: string;
  /** Omit on the current (last) crumb */
  href?: string;
};

/** Visible trail — keep in sync with `breadcrumbListJsonLd` on the same page. */
export function PageBreadcrumb({ items }: { items: BreadcrumbItem[] }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-[var(--kuct-muted)]">
      <ol className="m-0 flex list-none flex-wrap items-center gap-1.5 p-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-1.5">
              {index > 0 ? <span aria-hidden>/</span> : null}
              {item.href && !isLast ? (
                <Link
                  href={assetPath(item.href)}
                  className="no-underline transition hover:text-[var(--kuct-text)]"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-[var(--kuct-text)]" aria-current={isLast ? "page" : undefined}>
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
