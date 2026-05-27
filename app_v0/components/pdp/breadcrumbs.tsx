import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Kruimelpad" className="py-4">
      <ol className="flex items-center flex-wrap gap-1">
        <li>
          <Link
            href="/"
            className="inline-flex items-center text-brown-muted hover:text-brown transition-colors"
            aria-label="Home"
          >
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1">
              <ChevronRight
                className="w-3 h-3 text-brown-muted/50 flex-shrink-0"
                aria-hidden="true"
              />
              {isLast || !item.href ? (
                <span
                  className="font-sans text-xs text-brown/70"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="font-sans text-xs text-brown-muted hover:text-brown transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
