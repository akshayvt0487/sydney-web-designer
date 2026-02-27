/**
 * Section Components
 *
 * Centralized exports for all reusable section components.
 * These components consume data from /lib/data/* and provide
 * consistent, production-ready UI patterns across the site.
 */

export { default as FeaturesGrid } from './FeaturesGrid';
export type { FeaturesGridProps } from './FeaturesGrid';

export { default as ProcessSteps } from './ProcessSteps';
export type { ProcessStepsProps } from './ProcessSteps';

export { default as FAQSection } from './FAQSection';
export type { FAQSectionProps } from './FAQSection';

export { default as HeroSection } from './HeroSection';
export type { HeroSectionProps, HeroStat } from './HeroSection';
