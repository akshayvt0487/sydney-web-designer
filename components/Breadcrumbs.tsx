import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="service-paper-breadcrumbs paper-grain">
      <div className="container">
        <ol className="service-paper-breadcrumbs__list">
          {items.map((item, index) => (
            <li key={`${item.name}-${index}`} className="service-paper-breadcrumbs__item">
              {index > 0 && (
                <svg
                  className="service-paper-breadcrumbs__chevron"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}

              {index === items.length - 1 ? (
                <span className="service-paper-breadcrumbs__current" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.url} className="service-paper-breadcrumbs__link">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
