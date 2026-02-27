# Section Components - Usage Examples

Real-world examples showing how to use the section components in different scenarios.

## Example 1: Complete Service Page

A full service page using all four section components:

```tsx
// app/services/example-service/page.tsx
import {
  HeroSection,
  FeaturesGrid,
  ProcessSteps,
  FAQSection
} from '@/components/sections';
import { heroes } from '@/lib/data/heroes';
import { featureGroups } from '@/lib/data/features';
import { processFlows } from '@/lib/data/processes';
import { faqGroups } from '@/lib/data/faqs';
import CTASection from '@/components/CTASection';

export default function ExampleServicePage() {
  return (
    <>
      {/* Hero with stats */}
      <HeroSection
        data={heroes.webDesign}
        stats={[
          { number: '13+', label: 'Years Experience' },
          { number: '500+', label: 'Projects Completed' },
          { number: '98%', label: 'Client Satisfaction' },
        ]}
      />

      {/* Main services/features */}
      <FeaturesGrid
        data={featureGroups.webDesignServices}
        columns={3}
        centerHeader={true}
      />

      {/* What's included - compact 4-col grid */}
      <FeaturesGrid
        data={featureGroups.webDesignIncluded}
        columns={4}
        className="bg-secondary"
      />

      {/* Process workflow */}
      <ProcessSteps
        data={processFlows.webDesign}
        variant="numbered"
        centerHeader={true}
      />

      {/* Call to action */}
      <CTASection
        heading="Ready to Get Started?"
        description="Let's build something amazing together"
        buttonText="Get Your Free Quote"
        buttonPopup="contact"
      />

      {/* FAQs at the bottom */}
      <FAQSection
        data={faqGroups.webDesign}
        className="bg-secondary"
      />
    </>
  );
}
```

---

## Example 2: Landing Page

A focused landing page with limited sections:

```tsx
// app/landing/web-design-promo/page.tsx
import { HeroSection, FeaturesGrid, ProcessSteps } from '@/components/sections';
import { heroes, featureGroups, processFlows } from '@/lib/data';

export default function LandingPage() {
  return (
    <>
      {/* Hero with scroll indicator */}
      <HeroSection
        data={{
          id: 'promo',
          badge: {
            text: 'Limited Time Offer',
            showPulse: true,
          },
          heading: 'Professional Website Design',
          subheading: 'For Just $2,999',
          description: 'Get a stunning, conversion-optimized website with everything you need to succeed online.',
          buttons: [
            { text: 'Claim This Offer', dataPopup: 'contact', variant: 'primary' },
            { text: 'See Examples', href: '/portfolio', variant: 'secondary' },
          ],
          theme: 'dark',
          showScrollIndicator: true,
        }}
      />

      {/* Quick benefits - 3 column */}
      <FeaturesGrid
        data={featureGroups.homepageBenefits}
        columns={3}
        centerHeader={true}
      />

      {/* Simple process - icon variant */}
      <ProcessSteps
        data={processFlows.homepage}
        variant="icon"
        className="bg-secondary"
        centerHeader={true}
      />
    </>
  );
}
```

---

## Example 3: Homepage

Using sections throughout the homepage:

```tsx
// app/page.tsx
import {
  HeroSection,
  FeaturesGrid,
  ProcessSteps,
  FAQSection
} from '@/components/sections';
import { heroes } from '@/lib/data/heroes';
import { featureGroups } from '@/lib/data/features';
import { processFlows } from '@/lib/data/processes';
import { faqGroups } from '@/lib/data/faqs';
import PortfolioCarousel from '@/components/PortfolioCarousel';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <>
      {/* Main hero with company stats */}
      <HeroSection
        data={heroes.homepage}
        stats={[
          { number: '13+', label: 'Years Experience', description: 'Since 2013' },
          { number: '500+', label: 'Happy Clients', description: 'And counting' },
          { number: '12+', label: 'Industries', description: 'We serve' },
          { number: '98%', label: 'Satisfaction', description: 'Client rating' },
        ]}
      />

      {/* Our main services */}
      <FeaturesGrid
        data={featureGroups.homepageServices}
        columns={3}
        centerHeader={true}
      />

      {/* Portfolio showcase */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="section-title text-center mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Our Recent Work
            </h2>
            <p className="text-lg text-text-light">
              See how we've helped businesses like yours succeed online
            </p>
          </div>
          <PortfolioCarousel />
        </div>
      </section>

      {/* Why choose us */}
      <FeaturesGrid
        data={featureGroups.homepageBenefits}
        columns={4}
      />

      {/* Our process */}
      <ProcessSteps
        data={processFlows.homepage}
        variant="numbered"
        className="bg-secondary"
        centerHeader={true}
      />

      {/* CTA before FAQs */}
      <CTASection
        heading="Ready to Transform Your Online Presence?"
        description="Get a free consultation and quote for your project"
        buttonText="Get Started Today"
        buttonPopup="contact"
      />

      {/* General FAQs */}
      <FAQSection
        data={faqGroups.general}
        limit={5}
        className="bg-secondary"
      />
    </>
  );
}
```

---

## Example 4: Comparison - Before & After

### Before (Old Approach)

```tsx
// ❌ Old way - repetitive, hard to maintain
export default function WebDesignPage() {
  return (
    <>
      <ServiceHeroSection
        badge={{ icon: 'fas fa-palette', text: 'Web Design' }}
        heading="Professional Web Design Sydney"
        description="Transform your online presence..."
        buttons={{
          primary: { text: 'Get Quote', dataPopup: 'contact' },
          secondary: { text: 'View Work', href: '/portfolio' }
        }}
      />

      <section className="py-16">
        <div className="container">
          <div className="section-title text-center mx-auto">
            <h2>Our Services</h2>
            <p>Everything you need for success</p>
          </div>
          <div className="grid-3">
            <div className="card">
              <div className="mb-5">
                <div className="w-14 h-14 rounded-xl bg-primary-orange/10...">
                  <i className="fas fa-paint-brush"></i>
                </div>
              </div>
              <h3>Custom Design</h3>
              <p>Unique, tailor-made designs...</p>
            </div>
            {/* Repeat for each feature... */}
          </div>
        </div>
      </section>

      {/* More manual sections... */}
    </>
  );
}
```

### After (New Approach)

```tsx
// ✅ New way - clean, maintainable, reusable
import { HeroSection, FeaturesGrid } from '@/components/sections';
import { heroes, featureGroups } from '@/lib/data';

export default function WebDesignPage() {
  return (
    <>
      <HeroSection data={heroes.webDesign} />
      <FeaturesGrid
        data={featureGroups.webDesignServices}
        columns={3}
        centerHeader={true}
      />
    </>
  );
}
```

**Benefits:**
- 80% less code
- Content managed in centralized data files
- Easy to update across all pages
- Type-safe with TypeScript
- Consistent design automatically applied

---

## Example 5: Custom Data (Advanced)

For one-off pages or testing, you can still pass custom data:

```tsx
import { FeaturesGrid } from '@/components/sections';
import type { FeatureGroup } from '@/lib/data/features';

export default function CustomPage() {
  // Custom data structure matching the interface
  const customFeatures: FeatureGroup = {
    id: 'custom-features',
    title: 'Special Features',
    description: 'Limited time promotional features',
    features: [
      {
        icon: 'fa-star',
        title: 'Premium Support',
        description: '24/7 dedicated support for the first 3 months',
      },
      {
        icon: 'fa-gift',
        title: 'Free Hosting',
        description: 'One year of free premium hosting included',
      },
      {
        icon: 'fa-rocket',
        title: 'Priority Launch',
        description: 'Fast-track your project to go live in 2 weeks',
      },
    ],
  };

  return (
    <FeaturesGrid
      data={customFeatures}
      columns={3}
      centerHeader={true}
    />
  );
}
```

---

## Example 6: Mixing Component Variants

Different sections can use different configurations:

```tsx
import {
  HeroSection,
  FeaturesGrid,
  ProcessSteps,
  FAQSection
} from '@/components/sections';

export default function VariedPage() {
  return (
    <>
      {/* Dark gradient hero */}
      <HeroSection data={heroes.seoSydney} />

      {/* White background, 3-col features */}
      <FeaturesGrid
        data={featureGroups.seoServices}
        columns={3}
        centerHeader={true}
      />

      {/* Gray background, 4-col compact features */}
      <FeaturesGrid
        data={featureGroups.responsiveDevices}
        columns={4}
        className="bg-secondary"
        centerHeader={true}
      />

      {/* White background, icon-based process */}
      <ProcessSteps
        data={processFlows.seo}
        variant="icon"
        showConnectors={false}
      />

      {/* Gray background, limited FAQs */}
      <FAQSection
        data={faqGroups.seo}
        limit={5}
        className="bg-secondary"
        centerHeader={true}
      />
    </>
  );
}
```

---

## Example 7: Component Composition

Building complex layouts by composing sections:

```tsx
export default function ComplexPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection data={heroes.webDesign} />

      {/* Two feature grids side by side */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">For Businesses</h2>
              <FeaturesGrid
                data={featureGroups.businessFeatures}
                columns={2}
                showHeader={false}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">For Agencies</h2>
              <FeaturesGrid
                data={featureGroups.agencyFeatures}
                columns={2}
                showHeader={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Standard process */}
      <ProcessSteps
        data={processFlows.webDesign}
        className="bg-secondary"
      />
    </>
  );
}
```

---

## Example 8: Dynamic Content

Loading data dynamically (for CMS integration):

```tsx
import { HeroSection, FeaturesGrid } from '@/components/sections';
import type { HeroConfig, FeatureGroup } from '@/lib/data';

// Simulating CMS data fetch
async function getPageData() {
  // In real app, this would fetch from CMS/API
  return {
    hero: heroes.webDesign,
    features: featureGroups.webDesignServices,
  };
}

export default async function DynamicPage() {
  const { hero, features } = await getPageData();

  return (
    <>
      <HeroSection data={hero} />
      <FeaturesGrid data={features} columns={3} />
    </>
  );
}
```

---

## Example 9: A/B Testing Setup

Easy to test different variants:

```tsx
import { HeroSection } from '@/components/sections';

export default function ABTestPage() {
  // In real app, this would be a proper A/B testing flag
  const variant = Math.random() > 0.5 ? 'A' : 'B';

  const heroA = {
    id: 'variant-a',
    heading: 'Professional Web Design',
    description: 'Transform your business online',
    // ... rest of config
  };

  const heroB = {
    id: 'variant-b',
    heading: 'Get More Customers Online',
    description: 'Convert visitors into paying customers',
    // ... rest of config
  };

  return (
    <HeroSection data={variant === 'A' ? heroA : heroB} />
  );
}
```

---

## Tips for Best Results

1. **Alternate backgrounds** for visual rhythm
2. **Use centerHeader** for standalone sections
3. **Limit FAQ count** on long pages (show top 5-10)
4. **Match column counts** to content density
5. **Add CTAs** between major sections
6. **Keep heroes simple** - one message, clear action
7. **Group related features** in the same grid
8. **Use descriptive IDs** in data files for easy reference

---

## Common Patterns

### Pattern: Service Page Template
Hero → Features → Included → Process → CTA → FAQs

### Pattern: Landing Page Template
Hero → Benefits → Process → CTA

### Pattern: Homepage Template
Hero + Stats → Services → Portfolio → Benefits → Process → CTA → FAQs

### Pattern: About Page Template
Hero → Mission (Features) → Team → Process → Values (Features)

---

## Troubleshooting

### Components not rendering?
- Check import paths match your project structure
- Verify data exists in `/lib/data/` files
- Check for TypeScript errors

### Styling looks wrong?
- Ensure `globals.css` is imported in layout
- Check Tailwind config includes component paths
- Verify Font Awesome is loaded

### TypeScript errors?
- Import types: `import type { FeatureGroup } from '@/lib/data/features'`
- Match interfaces exactly
- Use TypeScript's autocomplete for guidance

---

Ready to build amazing pages with minimal code!
