import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  features?: string[];
}

export default function ServiceCard({
  icon,
  title,
  description,
  link,
  features,
}: ServiceCardProps) {
  return (
    <article className="service-index-card">
      <div className="service-index-card__top">
        <span className="service-index-card__icon">
          <i className={`fas ${icon}`} aria-hidden="true" />
        </span>

        <span className="service-index-card__line" aria-hidden="true" />
      </div>

      <h3 className="service-index-card__title">{title}</h3>

      <p className="service-index-card__description">{description}</p>

      {features && features.length > 0 && (
        <ul className="service-index-card__features">
          {features.map((feature, index) => (
            <li key={index}>
              <i className="fas fa-check" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <Link href={link} className="service-index-card__link">
        Learn More
        <i className="fas fa-arrow-right" aria-hidden="true" />
      </Link>
    </article>
  );
}