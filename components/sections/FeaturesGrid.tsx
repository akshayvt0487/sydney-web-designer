/**
 * FeaturesGrid Component
 *
 * A reusable component for displaying feature grids across the site.
 * Accepts feature data from centralized data structures and supports
 * flexible column layouts with consistent styling.
 *
 * @example
 * ```tsx
 * import { featureGroups } from '@/lib/data/features';
 * import FeaturesGrid from '@/components/sections/FeaturesGrid';
 *
 * <FeaturesGrid
 *   data={featureGroups.webDesignServices}
 *   columns={3}
 * />
 * ```
 */

import Link from 'next/link';
import type { FeatureGroup } from '@/lib/data/features';

export interface FeaturesGridProps {
  /** Feature group data containing title, description, and features */
  data: FeatureGroup;
  /** Number of columns in the grid (2, 3, or 4) */
  columns?: 2 | 3 | 4;
  /** Additional CSS classes for the section */
  className?: string;
  /** Show title and description */
  showHeader?: boolean;
  /** Center align the header text */
  centerHeader?: boolean;
}

/**
 * Displays a grid of features with icons, titles, and descriptions.
 * Supports 2, 3, and 4 column layouts with responsive behavior.
 */
export default function FeaturesGrid({
  data,
  columns = 3,
  className = '',
  showHeader = true,
  centerHeader = false,
}: FeaturesGridProps) {
  const gridClass = columns === 2 ? 'grid-2' : columns === 3 ? 'grid-3' : 'grid-4';
  const headerAlign = centerHeader ? 'text-center mx-auto' : '';

  return (
    <section className={`py-16 ${className}`}>
      <div className="container">
        {showHeader && (data.title || data.description) && (
          <div className={`section-title ${headerAlign}`}>
            {data.title && (
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
                {data.title}
              </h2>
            )}
            {data.description && (
              <p className="text-lg text-text-light max-w-3xl">
                {data.description}
              </p>
            )}
          </div>
        )}

        <div className={gridClass}>
          {data.features.map((feature, index) => {
            const content = (
              <>
                {/* Icon */}
                <div className="mb-5">
                  <div className="w-14 h-14 rounded-xl bg-primary-orange/10 flex items-center justify-center text-primary-orange text-2xl">
                    <i className={`fas ${feature.icon}`}></i>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary-navy mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                {feature.description && (
                  <p className="text-text-light leading-relaxed">
                    {feature.description}
                  </p>
                )}

                {/* Link indicator */}
                {feature.link && (
                  <div className="mt-4 inline-flex items-center text-primary-orange font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right ml-1.5 group-hover:translate-x-1 transition-transform duration-300"></i>
                  </div>
                )}
              </>
            );

            // Wrap in Link if feature has a link
            if (feature.link) {
              return (
                <Link
                  key={index}
                  href={feature.link}
                  className="card group hover:shadow-lg hover:border-primary-orange/20 transition-all duration-300 hover:-translate-y-1"
                >
                  {content}
                </Link>
              );
            }

            // Otherwise render as plain card
            return (
              <div
                key={index}
                className="card hover:shadow-lg hover:border-primary-orange/20 transition-all duration-300"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
