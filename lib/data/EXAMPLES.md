# Usage Examples

This file contains practical examples of how to use the centralized data structures in your components.

## Example 1: Hero Section Component

```typescript
import { getHero } from '@/lib/data';
import type { HeroConfig } from '@/lib/data';

interface HeroSectionProps {
  heroId: string;
}

export default function HeroSection({ heroId }: HeroSectionProps) {
  const hero = getHero(heroId);

  if (!hero) return null;

  return (
    <section className="hero-section">
      {/* Badge */}
      {hero.badge && (
        <div className="badge">
          {hero.badge.icon && <i className={hero.badge.icon} />}
          {hero.badge.showPulse && <span className="pulse" />}
          <span>{hero.badge.text}</span>
        </div>
      )}

      {/* Heading */}
      <h1>
        {hero.heading}
        {hero.subheading && (
          <span className="gradient-text">{hero.subheading}</span>
        )}
      </h1>

      {/* Description */}
      <p>{hero.description}</p>

      {/* Buttons */}
      <div className="buttons">
        {hero.buttons.map((button, index) => (
          button.href ? (
            <a
              key={index}
              href={button.href}
              className={`btn btn-${button.variant}`}
            >
              {button.text}
            </a>
          ) : (
            <button
              key={index}
              data-popup={button.dataPopup}
              className={`btn btn-${button.variant}`}
            >
              {button.text}
            </button>
          )
        ))}
      </div>
    </section>
  );
}

// Usage in page
<HeroSection heroId="homepage" />
```

## Example 2: Stats Grid Component

```typescript
import { getStatsGroup } from '@/lib/data';

interface StatsGridProps {
  statsId: string;
  columns?: 2 | 3 | 4;
}

export default function StatsGrid({ statsId, columns = 4 }: StatsGridProps) {
  const statsGroup = getStatsGroup(statsId);

  if (!statsGroup) return null;

  return (
    <section className="stats-section">
      {statsGroup.title && <h2>{statsGroup.title}</h2>}

      <div className={`grid grid-cols-${columns}`}>
        {statsGroup.stats.map((stat, index) => (
          <div key={index} className="stat-card">
            {stat.icon && <i className={`fas ${stat.icon}`} />}
            <div className="value">{stat.value}</div>
            <div className="label">{stat.label}</div>
            {stat.description && <p>{stat.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

// Usage in page
<StatsGrid statsId="homepageHero" columns={4} />
<StatsGrid statsId="seoSydney" columns={4} />
```

## Example 3: Features Grid Component

```typescript
import { getFeatureGroup } from '@/lib/data';
import Link from 'next/link';

interface FeaturesGridProps {
  featuresId: string;
  columns?: 2 | 3 | 4;
  showLinks?: boolean;
}

export default function FeaturesGrid({
  featuresId,
  columns = 3,
  showLinks = false
}: FeaturesGridProps) {
  const featureGroup = getFeatureGroup(featuresId);

  if (!featureGroup) return null;

  return (
    <section className="features-section">
      {featureGroup.title && <h2>{featureGroup.title}</h2>}
      {featureGroup.description && <p>{featureGroup.description}</p>}

      <div className={`grid grid-cols-${columns}`}>
        {featureGroup.features.map((feature, index) => {
          const content = (
            <>
              <i className={`fas ${feature.icon}`} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </>
          );

          return (
            <div key={index} className="feature-card">
              {showLinks && feature.link ? (
                <Link href={feature.link}>{content}</Link>
              ) : (
                content
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Usage in page
<FeaturesGrid featuresId="webDesignServices" columns={3} />
<FeaturesGrid featuresId="homepageServices" columns={3} showLinks={true} />
```

## Example 4: FAQ Accordion Component

```typescript
'use client';

import { getFAQGroup } from '@/lib/data';
import { useState } from 'react';

interface FAQAccordionProps {
  faqId: string;
}

export default function FAQAccordion({ faqId }: FAQAccordionProps) {
  const faqGroup = getFAQGroup(faqId);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqGroup) return null;

  return (
    <section className="faq-section">
      {faqGroup.title && <h2>{faqGroup.title}</h2>}
      {faqGroup.description && <p>{faqGroup.description}</p>}

      <div className="faq-list">
        {faqGroup.faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="faq-question"
            >
              <span>{faq.question}</span>
              <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'}`} />
            </button>

            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// Usage in page
<FAQAccordion faqId="webDesign" />
<FAQAccordion faqId="seo" />
```

## Example 5: Process Steps Component

```typescript
import { getProcessFlow } from '@/lib/data';

interface ProcessStepsProps {
  processId: string;
  layout?: 'vertical' | 'horizontal' | 'grid';
}

export default function ProcessSteps({
  processId,
  layout = 'grid'
}: ProcessStepsProps) {
  const processFlow = getProcessFlow(processId);

  if (!processFlow) return null;

  return (
    <section className="process-section">
      {processFlow.title && <h2>{processFlow.title}</h2>}
      {processFlow.description && <p>{processFlow.description}</p>}

      <div className={`process-${layout}`}>
        {processFlow.steps.map((step, index) => (
          <div key={index} className="process-step">
            <div className="step-number">{step.step}</div>
            <i className={`fas ${step.icon}`} />
            <h3>{step.title}</h3>
            <p>{step.description}</p>

            {/* Connecting line (for vertical/horizontal layouts) */}
            {layout !== 'grid' && index < processFlow.steps.length - 1 && (
              <div className="connector" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// Usage in page
<ProcessSteps processId="webDesign" layout="vertical" />
<ProcessSteps processId="seo" layout="grid" />
```

## Example 6: Search FAQs Functionality

```typescript
'use client';

import { searchFAQs } from '@/lib/data';
import { useState } from 'react';

export default function FAQSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<FAQ[]>([]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.length > 2) {
      const foundFAQs = searchFAQs(searchQuery);
      setResults(foundFAQs);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="faq-search">
      <input
        type="text"
        placeholder="Search FAQs..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {results.length > 0 && (
        <div className="search-results">
          <h3>Found {results.length} results</h3>
          {results.map((faq, index) => (
            <div key={index} className="result-item">
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

## Example 7: Complete Page Implementation

```typescript
// app/web-design/page.tsx
import { getHero, getStatsGroup, getFeatureGroup, getProcessFlow, getFAQGroup } from '@/lib/data';

export default function WebDesignPage() {
  const hero = getHero('webDesign');
  const stats = getStatsGroup('webDesignPage');
  const services = getFeatureGroup('webDesignServices');
  const included = getFeatureGroup('webDesignIncluded');
  const process = getProcessFlow('webDesign');
  const faqs = getFAQGroup('webDesign');

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        {hero?.badge && (
          <div className="badge">
            {hero.badge.icon && <i className={hero.badge.icon} />}
            <span>{hero.badge.text}</span>
          </div>
        )}
        <h1>{hero?.heading}</h1>
        <p>{hero?.description}</p>
        <div className="buttons">
          {hero?.buttons.map((button, i) => (
            <button key={i} data-popup={button.dataPopup}>
              {button.text}
            </button>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="grid-4">
          {stats?.stats.map((stat, i) => (
            <div key={i}>
              <i className={`fas ${stat.icon}`} />
              <div>{stat.value}</div>
              <div>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>{services?.title}</h2>
        <p>{services?.description}</p>
        <div className="grid-3">
          {services?.features.map((feature, i) => (
            <div key={i}>
              <i className={`fas ${feature.icon}`} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <h2>{process?.title}</h2>
        {process?.steps.map((step, i) => (
          <div key={i}>
            <div>{step.step}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="faqs">
        <h2>{faqs?.title}</h2>
        {faqs?.faqs.map((faq, i) => (
          <div key={i}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>
    </>
  );
}
```

## Type Safety Examples

```typescript
import type { HeroConfig, Stat, Feature, FAQ, ProcessStep } from '@/lib/data';

// Type-safe component props
interface MyComponentProps {
  hero: HeroConfig;
  stats: Stat[];
  features: Feature[];
}

// Type-safe helper function
function formatStat(stat: Stat): string {
  return `${stat.value} ${stat.label}`;
}

// Type guards
function isHeroWithBadge(hero: HeroConfig): hero is HeroConfig & { badge: HeroBadge } {
  return hero.badge !== undefined;
}
```

## Best Practices

1. **Always use the getter functions** (`getHero`, `getStatsGroup`, etc.) for better error handling
2. **Check for null/undefined** before rendering data
3. **Use TypeScript types** for prop validation
4. **Keep components generic** - accept data IDs as props
5. **Create reusable components** that work with any data from these structures
6. **Use type imports** for better tree-shaking

## Performance Tips

1. Import only what you need:
   ```typescript
   import { getHero } from '@/lib/data';
   // Instead of
   import { heroes } from '@/lib/data';
   ```

2. Use static data for better performance (these are all const exports)

3. Consider memoization for expensive operations:
   ```typescript
   const hero = useMemo(() => getHero('homepage'), []);
   ```
