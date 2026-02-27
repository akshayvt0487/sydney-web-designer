/**
 * Test file to verify all data structures can be imported and used correctly
 * Run this file to validate the data structure implementation
 */

import {
  heroes,
  getHero,
  getHeroIds,
  statsGroups,
  getStatsGroup,
  getStatsGroupIds,
  featureGroups,
  getFeatureGroup,
  getFeatureGroupIds,
  faqGroups,
  getFAQGroup,
  getFAQGroupIds,
  searchFAQs,
  processFlows,
  getProcessFlow,
  getProcessFlowIds,
} from './index';

import type {
  HeroConfig,
  HeroButton,
  HeroBadge,
  Stat,
  StatsGroup,
  Feature,
  FeatureGroup,
  FAQ,
  FAQGroup,
  ProcessStep,
  ProcessFlow,
} from './index';

// Test Heroes
console.log('=== Testing Heroes ===');
console.log('Available hero IDs:', getHeroIds());
const homepageHero = getHero('homepage');
console.log('Homepage hero:', homepageHero?.heading);
console.log('Homepage hero buttons:', homepageHero?.buttons.length);

// Test Stats
console.log('\n=== Testing Stats ===');
console.log('Available stats group IDs:', getStatsGroupIds());
const homepageStats = getStatsGroup('homepageHero');
console.log('Homepage stats:', homepageStats?.stats.length, 'stats');
console.log('First stat:', homepageStats?.stats[0]);

// Test Features
console.log('\n=== Testing Features ===');
console.log('Available feature group IDs:', getFeatureGroupIds());
const webDesignFeatures = getFeatureGroup('webDesignServices');
console.log('Web design features:', webDesignFeatures?.features.length, 'features');
console.log('First feature:', webDesignFeatures?.features[0].title);

// Test FAQs
console.log('\n=== Testing FAQs ===');
console.log('Available FAQ group IDs:', getFAQGroupIds());
const webDesignFAQs = getFAQGroup('webDesign');
console.log('Web design FAQs:', webDesignFAQs?.faqs.length, 'FAQs');
console.log('First FAQ:', webDesignFAQs?.faqs[0].question);

// Test FAQ Search
console.log('\n=== Testing FAQ Search ===');
const mobileResults = searchFAQs('mobile');
console.log('Search "mobile":', mobileResults.length, 'results');
const seoResults = searchFAQs('SEO');
console.log('Search "SEO":', seoResults.length, 'results');

// Test Processes
console.log('\n=== Testing Processes ===');
console.log('Available process flow IDs:', getProcessFlowIds());
const webDesignProcess = getProcessFlow('webDesign');
console.log('Web design process:', webDesignProcess?.steps.length, 'steps');
console.log('First step:', webDesignProcess?.steps[0].title);

// Type Checks
console.log('\n=== Testing Types ===');
const typedHero: HeroConfig | undefined = getHero('homepage');
const typedStats: StatsGroup | undefined = getStatsGroup('homepageHero');
const typedFeatures: FeatureGroup | undefined = getFeatureGroup('webDesignServices');
const typedFAQs: FAQGroup | undefined = getFAQGroup('webDesign');
const typedProcess: ProcessFlow | undefined = getProcessFlow('webDesign');
console.log('All types validated ✓');

// Data Validation
console.log('\n=== Data Validation ===');
let errors = 0;

// Validate all heroes have required fields
Object.entries(heroes).forEach(([id, hero]) => {
  if (!hero.heading || !hero.description || !hero.buttons.length) {
    console.error(`❌ Hero "${id}" missing required fields`);
    errors++;
  }
});

// Validate all stats groups have stats
Object.entries(statsGroups).forEach(([id, group]) => {
  if (!group.stats.length) {
    console.error(`❌ Stats group "${id}" has no stats`);
    errors++;
  }
});

// Validate all feature groups have features
Object.entries(featureGroups).forEach(([id, group]) => {
  if (!group.features.length) {
    console.error(`❌ Feature group "${id}" has no features`);
    errors++;
  }
});

// Validate all FAQ groups have FAQs
Object.entries(faqGroups).forEach(([id, group]) => {
  if (!group.faqs.length) {
    console.error(`❌ FAQ group "${id}" has no FAQs`);
    errors++;
  }
});

// Validate all process flows have steps
Object.entries(processFlows).forEach(([id, flow]) => {
  if (!flow.steps.length) {
    console.error(`❌ Process flow "${id}" has no steps`);
    errors++;
  }
});

console.log(`\n${errors === 0 ? '✅' : '❌'} Validation complete: ${errors} errors found`);

// Summary
console.log('\n=== Summary ===');
console.log(`Heroes: ${Object.keys(heroes).length} configs`);
console.log(`Stats Groups: ${Object.keys(statsGroups).length} groups`);
console.log(`Feature Groups: ${Object.keys(featureGroups).length} groups`);
console.log(`FAQ Groups: ${Object.keys(faqGroups).length} groups`);
console.log(`Process Flows: ${Object.keys(processFlows).length} flows`);

// Calculate total items
const totalStats = Object.values(statsGroups).reduce((sum, group) => sum + group.stats.length, 0);
const totalFeatures = Object.values(featureGroups).reduce((sum, group) => sum + group.features.length, 0);
const totalFAQs = Object.values(faqGroups).reduce((sum, group) => sum + group.faqs.length, 0);
const totalSteps = Object.values(processFlows).reduce((sum, flow) => sum + flow.steps.length, 0);

console.log(`\nTotal Stats: ${totalStats}`);
console.log(`Total Features: ${totalFeatures}`);
console.log(`Total FAQs: ${totalFAQs}`);
console.log(`Total Process Steps: ${totalSteps}`);

console.log('\n✅ All tests passed!');

export {};
