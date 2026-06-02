/**
 * FeaturesGrid Component
 *
 * Visual markup is redesigned only. Feature data, titles, descriptions
 * and links continue to come from the existing centralized data object.
 */

import Link from "next/link";
import type { FeatureGroup } from "@/lib/data/features";

export interface FeaturesGridProps {
  data: FeatureGroup;
  columns?: 2 | 3 | 4;
  className?: string;
  showHeader?: boolean;
  centerHeader?: boolean;
}

export default function FeaturesGrid({
  data,
  columns = 3,
  className = "",
  showHeader = true,
  centerHeader = false,
}: FeaturesGridProps) {
  return (
    <section
      className={`service-paper-section service-paper-features paper-grain ${className}`}
    >
      <div className="container">
        {showHeader && (data.title || data.description) && (
          <div
            className={`service-paper-heading ${
              centerHeader ? "service-paper-heading--center" : ""
            }`}
          >
            {data.title && <h2>{data.title}</h2>}
            {data.description && <p>{data.description}</p>}
          </div>
        )}

        <div
          className={`service-paper-features__grid service-paper-features__grid--${columns}`}
        >
          {data.features.map((feature, index) => {
            const content = (
              <>
                <div className="service-paper-feature__top">
                  <span className="service-paper-feature__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <i className={`fas ${feature.icon}`} aria-hidden="true" />
                </div>

                <h3>{feature.title}</h3>

                {feature.description && <p>{feature.description}</p>}

                {feature.link && (
                  <span className="service-paper-feature__link">
                    Learn More
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </span>
                )}
              </>
            );

            if (feature.link) {
              return (
                <Link
                  key={`${feature.title}-${index}`}
                  href={feature.link}
                  className="service-paper-feature"
                >
                  {content}
                </Link>
              );
            }

            return (
              <article
                key={`${feature.title}-${index}`}
                className="service-paper-feature"
              >
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
