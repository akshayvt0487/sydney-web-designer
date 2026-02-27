# Section Components

Reusable, production-ready section components that consume centralized data structures from `/lib/data/`.

## Components

### 1. FeaturesGrid

A flexible grid component for displaying features with icons, titles, and descriptions.

**Features:**
- Supports 2, 3, or 4 column layouts
- Responsive design (automatically stacks on mobile)
- Optional header with title and description
- Hover effects with orange theme
- Automatic linking when features have URLs
- Icon-based design with consistent spacing

**Usage:**

```tsx
import { featureGroups } from '@/lib/data/features';
import { FeaturesGrid } from '@/components/sections';

// Basic usage
<FeaturesGrid data={featureGroups.webDesignServices} />

// With custom columns
<FeaturesGrid
  data={featureGroups.homepageServices}
  columns={3}
/>

// Without header, centered
<FeaturesGrid
  data={featureGroups.webDesignIncluded}
  columns={4}
  showHeader={false}
/>

// Custom styling
<FeaturesGrid
  data={featureGroups.responsiveDevices}
  columns={3}
  centerHeader={true}
  className="bg-secondary"
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data | FeatureGroup | required | Feature group data from `/lib/data/features.ts` |
| columns | 2 \| 3 \| 4 | 3 | Number of columns in the grid |
| className | string | '' | Additional CSS classes for the section |
| showHeader | boolean | true | Show title and description |
| centerHeader | boolean | false | Center align the header text |

---

### 2. ProcessSteps

A vertical process flow component with numbered steps or icon-based steps.

**Features:**
- Numbered or icon-based variants
- Optional connecting lines between steps
- Hover animations on step indicators
- Responsive typography
- Maximum width constraint for optimal readability
- Gradient step numbers for visual appeal

**Usage:**

```tsx
import { processFlows } from '@/lib/data/processes';
import { ProcessSteps } from '@/components/sections';

// Basic usage with numbered steps
<ProcessSteps data={processFlows.webDesign} />

// Icon-based variant
<ProcessSteps
  data={processFlows.seo}
  variant="icon"
/>

// Without connectors
<ProcessSteps
  data={processFlows.branding}
  showConnectors={false}
/>

// Centered header on colored background
<ProcessSteps
  data={processFlows.homepage}
  centerHeader={true}
  className="bg-secondary"
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data | ProcessFlow | required | Process flow data from `/lib/data/processes.ts` |
| variant | 'numbered' \| 'icon' | 'numbered' | Visual style for step indicators |
| showConnectors | boolean | true | Show connecting lines between steps |
| className | string | '' | Additional CSS classes for the section |
| showHeader | boolean | true | Show title and description |
| centerHeader | boolean | false | Center align the header text |

---

### 3. FAQSection

A simple, scannable FAQ list component (non-accordion format).

**Features:**
- Clean list format with question icons
- Bold questions, readable answers
- Border separators between FAQs
- Optional limit for partial display
- Responsive typography
- Maximum width for optimal reading experience

**Usage:**

```tsx
import { faqGroups } from '@/lib/data/faqs';
import { FAQSection } from '@/components/sections';

// Basic usage
<FAQSection data={faqGroups.webDesign} />

// Show only first 5 FAQs
<FAQSection
  data={faqGroups.seo}
  limit={5}
/>

// Centered header
<FAQSection
  data={faqGroups.general}
  centerHeader={true}
/>

// Without header section
<FAQSection
  data={faqGroups.pricing}
  showHeader={false}
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data | FAQGroup | required | FAQ group data from `/lib/data/faqs.ts` |
| className | string | '' | Additional CSS classes for the section |
| showHeader | boolean | true | Show title and description |
| centerHeader | boolean | false | Center align the header text |
| limit | number | 0 | Maximum FAQs to display (0 = show all) |

---

### 4. HeroSection

Enhanced hero section that consolidates ServiceHeroSection functionality with additional features.

**Features:**
- Flexible badge with optional pulse animation and icon
- Support for heading + subheading format
- Multiple button configurations (primary/secondary)
- Optional stats display below hero content
- Dark, light, and gradient themes
- Background decorative elements
- Optional scroll indicator
- Responsive design

**Usage:**

```tsx
import { heroes } from '@/lib/data/heroes';
import { HeroSection } from '@/components/sections';

// Basic usage
<HeroSection data={heroes.webDesign} />

// With stats
<HeroSection
  data={heroes.homepage}
  stats={[
    { number: '13+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
  ]}
/>

// Light theme variant
<HeroSection
  data={heroes.serviceDefault}
  className="custom-class"
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data | HeroConfig | required | Hero configuration from `/lib/data/heroes.ts` |
| stats | HeroStat[] | undefined | Optional stats to display below content |
| className | string | '' | Additional CSS classes for the section |

**HeroStat Interface:**

```typescript
interface HeroStat {
  number: string;
  label: string;
  description?: string;
}
```

---

## Design System Integration

All components use the established design system:

### Colors
- Primary Orange: `#f59e0b` (for CTAs, icons, accents)
- Primary Navy: `#1e293b` (for headings, text)
- Text Light: `#64748b` (for body text, descriptions)
- Background: `#f8fafc` (for alternate sections)

### Buttons
- `.btn-primary` - Orange background with hover effects
- `.btn-secondary` - White background with orange border
- `.btn-white` - White background for dark sections
- `.btn-lg` - Larger button size for heroes

### Spacing
- Section padding: `py-16` (4rem vertical)
- Grid gaps: `gap-6` (1.5rem)
- Consistent margin-bottom for headings and text

### Responsive Behavior
- All grids stack to single column on mobile
- Typography scales with breakpoints
- Touch-friendly spacing on mobile devices

---

## Best Practices

### 1. Always use centralized data

```tsx
// ✅ Good - uses centralized data
import { featureGroups } from '@/lib/data/features';
<FeaturesGrid data={featureGroups.webDesignServices} />

// ❌ Bad - inline data
<FeaturesGrid data={{
  id: 'custom',
  features: [{ icon: 'fa-star', title: 'Feature', description: 'Text' }]
}} />
```

### 2. Maintain consistent section backgrounds

```tsx
// Alternate between white and light gray backgrounds
<FeaturesGrid data={featureGroups.services} /> {/* white bg */}
<ProcessSteps data={processFlows.webDesign} className="bg-secondary" />
<FAQSection data={faqGroups.webDesign} /> {/* white bg */}
```

### 3. Use appropriate column counts

- 2 columns: Large content blocks, detailed features
- 3 columns: Standard features, services (most common)
- 4 columns: Small items, icons, included features

### 4. Center headers for standalone sections

```tsx
// Standalone feature section - center the header
<FeaturesGrid
  data={featureGroups.benefits}
  centerHeader={true}
/>

// Section within a page flow - left-align (default)
<FeaturesGrid data={featureGroups.services} />
```

---

## Migration Guide

### Replacing ServiceHeroSection

**Before:**
```tsx
import ServiceHeroSection from '@/components/ServiceHeroSection';

<ServiceHeroSection
  badge={{ icon: 'fas fa-palette', text: 'Web Design' }}
  heading="Professional Web Design"
  description="Beautiful websites that convert"
  buttons={{
    primary: { text: 'Get Quote', dataPopup: 'contact' },
    secondary: { text: 'View Work', href: '/portfolio' }
  }}
/>
```

**After:**
```tsx
import { HeroSection } from '@/components/sections';
import { heroes } from '@/lib/data/heroes';

<HeroSection data={heroes.webDesign} />
```

### Creating Custom Sections

For new pages, add data to the centralized files first:

1. Add hero to `/lib/data/heroes.ts`
2. Add features to `/lib/data/features.ts`
3. Add process to `/lib/data/processes.ts`
4. Add FAQs to `/lib/data/faqs.ts`

Then use the components:

```tsx
import { HeroSection, FeaturesGrid, ProcessSteps, FAQSection } from '@/components/sections';
import { heroes } from '@/lib/data/heroes';
import { featureGroups } from '@/lib/data/features';
import { processFlows } from '@/lib/data/processes';
import { faqGroups } from '@/lib/data/faqs';

export default function MyServicePage() {
  return (
    <>
      <HeroSection data={heroes.myService} />
      <FeaturesGrid data={featureGroups.myServiceFeatures} />
      <ProcessSteps data={processFlows.myService} className="bg-secondary" />
      <FAQSection data={faqGroups.myService} />
    </>
  );
}
```

---

## Component Hierarchy

```
/components/sections/
├── index.ts              # Barrel export
├── README.md            # This file
├── FeaturesGrid.tsx     # Feature grid component
├── ProcessSteps.tsx     # Process flow component
├── FAQSection.tsx       # FAQ list component
└── HeroSection.tsx      # Enhanced hero component
```

---

## TypeScript Support

All components export their props interfaces for type safety:

```tsx
import type {
  FeaturesGridProps,
  ProcessStepsProps,
  FAQSectionProps,
  HeroSectionProps,
  HeroStat
} from '@/components/sections';
```

---

## Performance Considerations

- All components are server-side rendered by default
- No client-side JavaScript unless user interaction (buttons with onClick)
- Optimized CSS with Tailwind's JIT compiler
- Minimal re-renders due to prop-based rendering
- No external dependencies beyond Next.js/React

---

## Accessibility

All components follow accessibility best practices:

- Semantic HTML (`<section>`, `<h1>`-`<h6>`, etc.)
- Proper heading hierarchy
- ARIA labels where appropriate
- Keyboard navigation support
- Sufficient color contrast ratios
- Focus indicators on interactive elements

---

## Future Enhancements

Potential additions for Phase 3+:

1. **Accordion FAQ variant** - Collapsible FAQ items
2. **Grid variants** - Masonry layout, staggered animations
3. **Process horizontal layout** - For wide screens
4. **Hero video backgrounds** - Video/image support
5. **Stats counter animations** - Animate numbers on scroll
6. **Dark mode support** - Theme switching
