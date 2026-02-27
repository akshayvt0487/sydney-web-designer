/**
 * HeroSection Component
 *
 * Enhanced generic hero section that consolidates functionality from ServiceHeroSection.
 * Supports badges, flexible button configurations, stats display, and different themes.
 *
 * @example
 * ```tsx
 * import { heroes } from '@/lib/data/heroes';
 * import HeroSection from '@/components/sections/HeroSection';
 *
 * <HeroSection
 *   data={heroes.webDesign}
 * />
 * ```
 *
 * @example With stats
 * ```tsx
 * <HeroSection
 *   data={heroes.homepage}
 *   stats={[
 *     { number: '13+', label: 'Years Experience' },
 *     { number: '500+', label: 'Projects Completed' },
 *     { number: '98%', label: 'Client Satisfaction' }
 *   ]}
 * />
 * ```
 */

import Link from 'next/link';
import type { HeroConfig } from '@/lib/data/heroes';

export interface HeroStat {
  number: string;
  label: string;
  description?: string;
}

export interface HeroSectionProps {
  /** Hero configuration data */
  data: HeroConfig;
  /** Optional stats to display below the hero content */
  stats?: HeroStat[];
  /** Additional CSS classes for the section */
  className?: string;
}

/**
 * Displays a hero section with badge, heading, description, and action buttons.
 * Supports optional stats display and maintains consistent branding across pages.
 */
export default function HeroSection({
  data,
  stats,
  className = '',
}: HeroSectionProps) {
  // Determine theme classes
  const themeClasses =
    data.theme === 'light'
      ? 'bg-white text-primary-navy'
      : data.theme === 'gradient'
      ? 'bg-gradient-to-br from-[#1e293b] via-[#2d3b4f] to-[#1e293b] text-white'
      : 'bg-gradient-to-br from-[#1e293b] via-[#2d3b4f] to-[#1e293b] text-white';

  return (
    <section
      className={`relative ${themeClasses} py-24 overflow-hidden ${className}`}
    >
      {/* Background decorative elements */}
      {data.theme !== 'light' && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-orange rounded-full blur-3xl"></div>
        </div>
      )}

      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          {data.badge && (
            <div className="inline-flex items-center gap-2 bg-primary-orange/10 border border-primary-orange/30 text-primary-orange px-5 py-2.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
              {data.badge.showPulse && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-orange"></span>
                </span>
              )}
              {data.badge.icon && <i className={data.badge.icon}></i>}
              <span>{data.badge.text}</span>
            </div>
          )}

          {/* Heading with optional subheading */}
          {data.subheading ? (
            <h1
              className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${
                data.theme === 'light' ? 'text-primary-navy' : 'text-white'
              }`}
            >
              {data.heading}
              <span className="block text-primary-orange">{data.subheading}</span>
            </h1>
          ) : (
            <h1
              className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${
                data.theme === 'light' ? 'text-primary-navy' : 'text-white'
              }`}
            >
              {data.heading}
            </h1>
          )}

          {/* Description */}
          <p
            className={`text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl ${
              data.theme === 'light' ? 'text-text-light' : 'text-gray-300'
            }`}
          >
            {data.description}
          </p>

          {/* Buttons */}
          {data.buttons && data.buttons.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {data.buttons.map((button, index) => {
                // Determine button classes based on variant
                const btnClass =
                  button.variant === 'primary'
                    ? 'btn btn-primary btn-lg'
                    : 'btn btn-white btn-lg';

                // Handle different button types
                if (button.dataPopup) {
                  return (
                    <button
                      key={index}
                      data-popup={button.dataPopup}
                      className={btnClass}
                    >
                      {button.text}
                    </button>
                  );
                } else if (button.href) {
                  return (
                    <Link key={index} href={button.href} className={btnClass}>
                      {button.text}
                    </Link>
                  );
                }

                return null;
              })}
            </div>
          )}

          {/* Scroll Indicator */}
          {data.showScrollIndicator && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
              <div className="flex flex-col items-center gap-2 text-gray-400">
                <span className="text-sm font-medium">Scroll to explore</span>
                <i className="fas fa-chevron-down text-xl"></i>
              </div>
            </div>
          )}
        </div>

        {/* Optional Stats Display */}
        {stats && stats.length > 0 && (
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`text-4xl md:text-5xl font-bold mb-2 ${
                    data.theme === 'light'
                      ? 'text-primary-orange'
                      : 'text-primary-orange'
                  }`}
                >
                  {stat.number}
                </div>
                <div
                  className={`text-sm md:text-base font-semibold mb-1 ${
                    data.theme === 'light' ? 'text-primary-navy' : 'text-white'
                  }`}
                >
                  {stat.label}
                </div>
                {stat.description && (
                  <p
                    className={`text-xs md:text-sm ${
                      data.theme === 'light' ? 'text-text-light' : 'text-gray-400'
                    }`}
                  >
                    {stat.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
