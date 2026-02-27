# Quick Start Guide - Section Components

Get started with the new section components in 5 minutes.

## Installation

Components are already installed in `/components/sections/`. No additional setup needed.

## Basic Usage

### 1. Import Components

```tsx
import {
  HeroSection,
  FeaturesGrid,
  ProcessSteps,
  FAQSection
} from '@/components/sections';
```

### 2. Import Data

```tsx
import { heroes } from '@/lib/data/heroes';
import { featureGroups } from '@/lib/data/features';
import { processFlows } from '@/lib/data/processes';
import { faqGroups } from '@/lib/data/faqs';
```

### 3. Use in Your Page

```tsx
export default function MyPage() {
  return (
    <>
      <HeroSection data={heroes.webDesign} />
      <FeaturesGrid data={featureGroups.webDesignServices} columns={3} />
      <ProcessSteps data={processFlows.webDesign} />
      <FAQSection data={faqGroups.webDesign} />
    </>
  );
}
```

That's it! You now have a complete, professional-looking page.

---

## Common Recipes

### Service Page

```tsx
import {
  HeroSection,
  FeaturesGrid,
  ProcessSteps,
  FAQSection
} from '@/components/sections';
import { heroes, featureGroups, processFlows, faqGroups } from '@/lib/data';
import CTASection from '@/components/CTASection';

export default function ServicePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection data={heroes.webDesign} />

      {/* Main features */}
      <FeaturesGrid
        data={featureGroups.webDesignServices}
        columns={3}
        centerHeader={true}
      />

      {/* What's included */}
      <FeaturesGrid
        data={featureGroups.webDesignIncluded}
        columns={4}
        className="bg-secondary"
      />

      {/* Process */}
      <ProcessSteps
        data={processFlows.webDesign}
        centerHeader={true}
      />

      {/* CTA */}
      <CTASection
        heading="Ready to Get Started?"
        description="Let's build something amazing"
        buttonText="Get Your Free Quote"
        buttonPopup="contact"
      />

      {/* FAQs */}
      <FAQSection
        data={faqGroups.webDesign}
        className="bg-secondary"
      />
    </>
  );
}
```

### Landing Page

```tsx
export default function LandingPage() {
  return (
    <>
      <HeroSection data={heroes.homepage} />
      <FeaturesGrid
        data={featureGroups.homepageBenefits}
        columns={3}
        centerHeader={true}
      />
      <ProcessSteps
        data={processFlows.homepage}
        variant="icon"
        className="bg-secondary"
      />
    </>
  );
}
```

### Homepage

```tsx
export default function HomePage() {
  return (
    <>
      <HeroSection
        data={heroes.homepage}
        stats={[
          { number: '13+', label: 'Years Experience' },
          { number: '500+', label: 'Happy Clients' },
          { number: '98%', label: 'Satisfaction' }
        ]}
      />
      <FeaturesGrid
        data={featureGroups.homepageServices}
        columns={3}
        centerHeader={true}
      />
      <ProcessSteps
        data={processFlows.homepage}
        className="bg-secondary"
        centerHeader={true}
      />
      <FAQSection
        data={faqGroups.general}
        limit={5}
      />
    </>
  );
}
```

---

## Customization

### Change Column Layout

```tsx
<FeaturesGrid data={featureGroups.services} columns={2} />  // 2 columns
<FeaturesGrid data={featureGroups.services} columns={3} />  // 3 columns (default)
<FeaturesGrid data={featureGroups.services} columns={4} />  // 4 columns
```

### Add Background Color

```tsx
<FeaturesGrid
  data={featureGroups.services}
  className="bg-secondary"  // Light gray background
/>
```

### Center Header

```tsx
<FeaturesGrid
  data={featureGroups.services}
  centerHeader={true}  // Centers title and description
/>
```

### Hide Header

```tsx
<FeaturesGrid
  data={featureGroups.services}
  showHeader={false}  // Hides title and description
/>
```

### Process Variants

```tsx
<ProcessSteps data={processFlows.webDesign} variant="numbered" />  // Default
<ProcessSteps data={processFlows.webDesign} variant="icon" />       // Icons only
```

### Limit FAQs

```tsx
<FAQSection data={faqGroups.webDesign} limit={5} />  // Show only first 5
```

---

## Adding New Content

### 1. Add to Data Files

Edit the appropriate file in `/lib/data/`:

**For a new service page:**

1. Add hero to `/lib/data/heroes.ts`:
```tsx
myService: {
  id: 'my-service',
  badge: { text: 'New Service', showPulse: true },
  heading: 'My Service Title',
  description: 'Service description here',
  buttons: [
    { text: 'Get Started', dataPopup: 'contact', variant: 'primary' },
    { text: 'Learn More', href: '/about', variant: 'secondary' }
  ],
  theme: 'dark'
}
```

2. Add features to `/lib/data/features.ts`:
```tsx
myServiceFeatures: {
  id: 'my-service-features',
  title: 'What We Offer',
  description: 'Comprehensive services',
  features: [
    {
      icon: 'fa-star',
      title: 'Feature 1',
      description: 'Description here'
    },
    // Add more features...
  ]
}
```

3. Add process to `/lib/data/processes.ts`:
```tsx
myService: {
  id: 'my-service',
  title: 'Our Process',
  description: 'How we work',
  steps: [
    {
      step: '01',
      icon: 'fa-comments',
      title: 'Step 1',
      description: 'Step description'
    },
    // Add more steps...
  ]
}
```

4. Add FAQs to `/lib/data/faqs.ts`:
```tsx
myService: {
  id: 'my-service',
  title: 'Frequently Asked Questions',
  faqs: [
    {
      question: 'Question here?',
      answer: 'Answer here.'
    },
    // Add more FAQs...
  ]
}
```

### 2. Use in Your Page

```tsx
import { HeroSection, FeaturesGrid, ProcessSteps, FAQSection } from '@/components/sections';
import { heroes, featureGroups, processFlows, faqGroups } from '@/lib/data';

export default function MyServicePage() {
  return (
    <>
      <HeroSection data={heroes.myService} />
      <FeaturesGrid data={featureGroups.myServiceFeatures} />
      <ProcessSteps data={processFlows.myService} />
      <FAQSection data={faqGroups.myService} />
    </>
  );
}
```

---

## Tips

1. **Alternate backgrounds** - Use `className="bg-secondary"` on every other section for visual rhythm
2. **Center standalone sections** - Use `centerHeader={true}` for sections that aren't part of a flow
3. **Use appropriate column counts**:
   - 2 columns: Large, detailed features
   - 3 columns: Standard (most common)
   - 4 columns: Small items, checkmarks, simple features
4. **Add CTAs** - Place `<CTASection />` between major sections
5. **Limit FAQs** - Show 5-10 FAQs on long pages, link to full FAQ page

---

## Troubleshooting

### Import errors?
Make sure you're importing from the correct path:
```tsx
import { HeroSection } from '@/components/sections';  // ✅ Correct
import HeroSection from '@/components/sections/HeroSection';  // ✅ Also works
```

### Data not found?
Check that you've added your data to the correct file in `/lib/data/`:
- Heroes → `/lib/data/heroes.ts`
- Features → `/lib/data/features.ts`
- Processes → `/lib/data/processes.ts`
- FAQs → `/lib/data/faqs.ts`

### Styling looks wrong?
Ensure:
- `globals.css` is imported in your layout
- Tailwind config includes `/components/**/*.tsx`
- Font Awesome is loaded in your layout

### TypeScript errors?
Import the types:
```tsx
import type { FeatureGroup } from '@/lib/data/features';
import type { HeroStat } from '@/components/sections';
```

---

## Getting Help

- **Full documentation:** See `README.md` in `/components/sections/`
- **Examples:** See `EXAMPLES.md` for real-world usage
- **Implementation details:** See `PHASE2_IMPLEMENTATION.md`
- **Test components:** Import `__tests__` to verify components work

---

## Next Steps

1. Try the examples above
2. Create your first page using the components
3. Add your own content to `/lib/data/` files
4. Experiment with different layouts and configurations
5. Read `README.md` for advanced usage

Happy building! 🚀
