import type { ReactNode } from "react";

interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
  points?: string[];
}

interface ServiceFeaturesSectionProps {
  title: ReactNode;
  description?: string;
  features: ServiceFeature[];
}

export default function ServiceFeaturesSection({
  title,
  description,
  features,
}: ServiceFeaturesSectionProps) {
  return (
    <section className="service-paper-section service-detail-features paper-grain">
      <div className="container">
        <div className="service-paper-heading service-paper-heading--center">
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>

        <div className="service-detail-features__grid">
          {features.map((feature, index) => (
            <article key={feature.title} className="service-detail-feature">
              <div className="service-detail-feature__top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i className={feature.icon} aria-hidden="true" />
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>

              {feature.points && feature.points.length > 0 && (
                <ul>
                  {feature.points.map((point) => (
                    <li key={point}>
                      <i className="fas fa-check" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

