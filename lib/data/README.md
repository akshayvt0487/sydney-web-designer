# Data Structures Documentation

This directory contains centralized data structures for the website architecture refactoring plan.

## Overview

All page content data (heroes, features, stats, FAQs, processes) is now centralized in typed TypeScript files, making content management easier and more maintainable.

## Files

### `heroes.ts`
Hero section configurations for all pages.

**Usage:**
```typescript
import { heroes, getHero } from '@/lib/data';

// Get homepage hero
const homepageHero = getHero('homepage');

// Or access directly
const hero = heroes.homepage;
```

**Structure:**
- `badge`: Optional badge with icon and text
- `heading`: Main heading text
- `subheading`: Optional subheading (colored/gradient)
- `description`: Hero description
- `buttons`: Array of CTA buttons
- `theme`: Visual theme ('dark' | 'light' | 'gradient')
- `showScrollIndicator`: Whether to show scroll indicator

### `stats.ts`
Statistics groups for different pages and sections.

**Usage:**
```typescript
import { statsGroups, getStatsGroup } from '@/lib/data';

// Get homepage hero stats
const stats = getStatsGroup('homepageHero');

// Render stats
stats.stats.map(stat => (
  <div>
    <i className={`fas ${stat.icon}`} />
    <div>{stat.value}</div>
    <div>{stat.label}</div>
  </div>
))
```

**Available Groups:**
- `homepageHero`: Homepage hero section stats
- `webDesignPage`: Web design page stats
- `webDesignPerformance`: Performance metrics
- `seoSydney`: SEO service stats
- `companyOverview`: General company stats
- `results`: Results-focused stats

### `features.ts`
Feature lists categorized by page/service.

**Usage:**
```typescript
import { featureGroups, getFeatureGroup } from '@/lib/data';

// Get web design services
const features = getFeatureGroup('webDesignServices');

// Render features
features.features.map(feature => (
  <div>
    <i className={`fas ${feature.icon}`} />
    <h3>{feature.title}</h3>
    <p>{feature.description}</p>
  </div>
))
```

**Available Groups:**
- `homepageServices`: Homepage service cards
- `homepageBenefits`: Why choose us benefits
- `webDesignServices`: Web design service features
- `webDesignIncluded`: Standard features included
- `seoServices`: SEO service features
- `responsiveDevices`: Responsive design features

### `faqs.ts`
FAQ groups categorized by topic.

**Usage:**
```typescript
import { faqGroups, getFAQGroup, searchFAQs } from '@/lib/data';

// Get web design FAQs
const faqs = getFAQGroup('webDesign');

// Search FAQs
const results = searchFAQs('mobile');

// Render FAQs
faqs.faqs.map(faq => (
  <div>
    <h3>{faq.question}</h3>
    <p>{faq.answer}</p>
  </div>
))
```

**Available Groups:**
- `webDesign`: Web design related FAQs
- `seo`: SEO service FAQs
- `general`: General business FAQs
- `ecommerce`: E-commerce FAQs
- `pricing`: Pricing and payment FAQs

### `processes.ts`
Process step flows by service type.

**Usage:**
```typescript
import { processFlows, getProcessFlow } from '@/lib/data';

// Get web design process
const process = getProcessFlow('webDesign');

// Render process steps
process.steps.map(step => (
  <div>
    <div>{step.step}</div>
    <i className={`fas ${step.icon}`} />
    <h3>{step.title}</h3>
    <p>{step.description}</p>
  </div>
))
```

**Available Flows:**
- `homepage`: General homepage process
- `webDesign`: Web design process (6 steps)
- `seo`: SEO process (4 steps)
- `branding`: Branding process
- `digitalMarketing`: Marketing process
- `ecommerce`: E-commerce process
- `redesign`: Website redesign process

### `index.ts`
Central export file for all data structures.

**Usage:**
```typescript
// Import everything from one place
import {
  heroes,
  statsGroups,
  featureGroups,
  faqGroups,
  processFlows
} from '@/lib/data';

// Or import specific items
import { getHero, getStatsGroup } from '@/lib/data';

// Import types
import type { HeroConfig, Feature, FAQ } from '@/lib/data';
```

## Benefits

1. **Single Source of Truth**: All content in one place
2. **Type Safety**: Full TypeScript typing prevents errors
3. **Easy Updates**: Change content without touching components
4. **Reusability**: Use the same data across multiple pages
5. **Scalability**: Easy to add new content groups
6. **Consistency**: Enforced structure across all content

## Next Steps (Phase 2)

1. Update page components to use these data structures
2. Create reusable components that consume this data
3. Add testimonials and portfolio data structures
4. Implement content validation and testing

## Migration Guide

To migrate existing pages:

1. Identify hardcoded content in page component
2. Find or create appropriate data structure
3. Import data from `@/lib/data`
4. Replace hardcoded content with data
5. Test thoroughly

**Example:**

```typescript
// Before
<h1>Sydney's Premier Web Design Agency</h1>

// After
import { getHero } from '@/lib/data';
const hero = getHero('homepage');
<h1>{hero.heading} <span>{hero.subheading}</span></h1>
```

## Validation

All data structures include:
- TypeScript interfaces for type checking
- Helper functions for easy access
- Proper typing for IDE autocomplete
- Const assertions for immutability

## Support

For questions or issues with these data structures, contact the development team or refer to the main architecture refactoring plan documentation.
