/**
 * Centralized Data Structures Index
 * Export all data structures from a single entry point
 */

// Heroes
export { heroes, getHero, getHeroIds } from './heroes';
export type { HeroConfig, HeroButton, HeroBadge } from './heroes';

// Stats
export { statsGroups, getStatsGroup, getStatsGroupIds } from './stats';
export type { Stat, StatsGroup } from './stats';

// Features
export { featureGroups, getFeatureGroup, getFeatureGroupIds } from './features';
export type { Feature, FeatureGroup } from './features';

// FAQs
export { faqGroups, getFAQGroup, getFAQGroupIds, searchFAQs } from './faqs';
export type { FAQ, FAQGroup } from './faqs';

// Processes
export { processFlows, getProcessFlow, getProcessFlowIds } from './processes';
export type { ProcessStep, ProcessFlow } from './processes';
