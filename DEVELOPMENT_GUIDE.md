# Development Guide - Sydney Web Designer

## Quick Reference

### Running the Project

```bash
# Development mode (with hot reload)
npm run dev

# Production build
npm run build
npm start

# Linting
npm run lint
```

Access the site at: **http://localhost:3000**

## Adding New Pages

### 1. Create a New Page

```typescript
// app/about/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sydney Web Designer",
  description: "Learn about DSIGNS Australia...",
};

export default function AboutPage() {
  return (
    <section className="py-20">
      <div className="container">
        <h1>About Us</h1>
        {/* Your content */}
      </div>
    </section>
  );
}
```

### 2. Add Schema Markup

```typescript
import { generateLocalBusinessSchema } from "@/lib/schemas";

export default function YourPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />
      {/* Your content */}
    </>
  );
}
```

## Using Components

### Popup Forms

Trigger any of the 4 popup forms from buttons/links:

```html
<!-- Contact Form -->
<button data-popup="contact">Get Quote</button>

<!-- SEO Audit Form -->
<button data-popup="seoAudit">Free SEO Audit</button>

<!-- Google Ads Audit -->
<button data-popup="adsAudit">Free Ads Audit</button>

<!-- Consultation -->
<button data-popup="consultation">Book Consultation</button>
```

### Stats Grid

```typescript
import StatsGrid from "@/components/StatsGrid";

<StatsGrid
  stats={[
    { number: "500+", label: "Websites", description: "Delivered" },
    { number: "13+", label: "Years", description: "Experience" },
    { number: "98%", label: "Satisfaction", description: "Rating" },
    { number: "50+", label: "Industries", description: "Served" },
  ]}
  columns={4}
/>
```

### Testimonial Cards

```typescript
import TestimonialCard from "@/components/TestimonialCard";
import { googleReviews } from "@/lib/constants";

{googleReviews.map((review) => (
  <TestimonialCard key={review.id} review={review} compact={false} />
))}
```

### Service Cards

```typescript
import ServiceCard from "@/components/ServiceCard";

<ServiceCard
  icon="🎨"
  title="Web Design"
  description="Custom websites..."
  link="/services/web-design"
  features={[
    "Mobile responsive",
    "SEO optimized",
    "Fast loading",
    "Modern design"
  ]}
/>
```

### Portfolio Cards

```typescript
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioProjects } from "@/lib/constants";

{portfolioProjects.map((project) => (
  <PortfolioCard key={project.id} project={project} />
))}
```

### CTA Section

```typescript
import CTASection from "@/components/CTASection";

<CTASection
  title="Ready to Get Started?"
  description="Contact us for a free consultation"
  primaryButtonText="Get Free Quote"
  primaryButtonAction="contact"
  secondaryButtonText="Call Now"
  secondaryButtonAction="consultation"
  gradient={true}
/>
```

## Styling Guide

### Using Tailwind Classes

```html
<!-- Containers -->
<div className="container">Content with max-width and padding</div>
<div className="container-wide">Wider container for full layouts</div>

<!-- Grids -->
<div className="grid-2">2 column grid</div>
<div className="grid-3">3 column grid</div>
<div className="grid-4">4 column grid</div>

<!-- Cards -->
<div className="card">Card with hover effect</div>

<!-- Buttons -->
<button className="btn btn-primary">Primary Button</button>
<button className="btn btn-secondary">Secondary Button</button>
<button className="btn btn-white">White Button</button>

<!-- Forms -->
<div className="form-group">
  <label className="form-label">Label</label>
  <input className="form-input" />
</div>

<!-- Sections -->
<section className="py-20">Section with vertical padding</section>
<section className="gradient-navy-orange">Navy to orange gradient</section>
<section className="gradient-navy">Navy gradient</section>
<section className="gradient-orange">Orange gradient</section>
```

### Custom Colors

```css
/* Use in className */
bg-primary-navy     /* #1e293b */
bg-primary-orange   /* #f59e0b */
bg-dark-navy        /* #0f172a */
bg-mid-navy         /* #334155 */
text-primary-navy
text-primary-orange
```

## Data Management

### Adding Portfolio Projects

Edit `lib/constants.ts`:

```typescript
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "project-slug",
    name: "Client Name",
    industry: "Industry Type",
    services: ["Service 1", "Service 2"],
    image: "/images/portfolio/project.webp",
    caseStudyUrl: "/portfolio/project-slug", // optional
  },
  // ... more projects
];
```

### Adding Services

```typescript
export const services: Service[] = [
  {
    id: "service-id",
    name: "Service Name",
    category: "web-design", // or "branding" or "digital-marketing"
    slug: "service-slug",
    icon: "🎨",
    shortDescription: "Brief description...",
    heroDescription: "Longer description for hero section...",
  },
  // ... more services
];
```

### Adding Reviews

```typescript
export const googleReviews: Review[] = [
  {
    id: "unique-id",
    name: "Client Name",
    company: "Company Name", // optional
    rating: 5,
    text: "Review text...",
    date: "2025-01-15",
  },
  // ... more reviews
];
```

## Creating Service Pages

Service pages should follow this structure:

```typescript
// app/services/[slug]/page.tsx
export default function ServicePage() {
  return (
    <>
      {/* Schema Markup */}
      <script type="application/ld+json" {...} />

      {/* 1. Hero Section */}
      <section className="gradient-navy-orange">
        <h1>Service Name Sydney</h1>
        <p>Value proposition</p>
        <div>CTA Buttons + Trust Badges</div>
      </section>

      {/* 2. Stats Grid */}
      <StatsGrid stats={[...]} columns={4} />

      {/* 3. Features Grid (6 features) */}
      <section>
        <ServiceCard ... />
      </section>

      {/* 4. Process Timeline (6 steps) */}
      <section>
        <div>Step 1</div>
        <div>Step 2</div>
        {/* ... */}
      </section>

      {/* 5. Case Studies (2) */}
      <section>
        <div>Case Study 1</div>
        <div>Case Study 2</div>
      </section>

      {/* 6. Testimonials (3) */}
      <section>
        <TestimonialCard ... />
      </section>

      {/* 7. Pricing Table (3 tiers) */}
      <section>
        <div>Starter / Growth / Enterprise</div>
      </section>

      {/* 8. Lead Capture Form */}
      <section>
        <form>...</form>
      </section>

      {/* 9. FAQs (7-8) */}
      <section>
        <details>Q&A</details>
      </section>

      {/* 10. Final CTA */}
      <CTASection ... />
    </>
  );
}
```

## SEO Best Practices

### Meta Tags

```typescript
export const metadata: Metadata = {
  title: "Page Title (50-65 chars) | Sydney Web Designer",
  description: "Meta description 150-165 characters that includes main keywords...",
  keywords: "keyword1, keyword2, keyword3",
  openGraph: {
    title: "OG Title",
    description: "OG Description",
    images: ['/og-image.jpg'],
  },
};
```

### Image Optimization

```typescript
import Image from "next/image";

<Image
  src="/images/hero.webp"
  alt="Descriptive alt text 80-125 chars"
  width={1200}
  height={600}
  priority={true} // For hero images
  loading="lazy" // For content images
/>
```

### Internal Linking

Link to related pages throughout content:

```typescript
import Link from "next/link";

<Link href="/services/seo-sydney">SEO Services</Link>
<Link href="/portfolio">View our portfolio</Link>
```

## Common Patterns

### Section with Title

```tsx
<section className="py-20">
  <div className="container">
    <div className="section-title">
      <h2>Section Title</h2>
      <p>Section description</p>
    </div>

    {/* Content */}
  </div>
</section>
```

### Alternating Background

```tsx
<section className="py-20">Section 1</section>
<section className="py-20 bg-gray-50">Section 2</section>
<section className="py-20">Section 3</section>
<section className="py-20 bg-gray-50">Section 4</section>
```

### Contact Info Display

```typescript
import { contactInfo } from "@/lib/constants";

<a href={`tel:${contactInfo.phoneLink}`}>{contactInfo.phone}</a>
<a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
```

## Debugging Tips

### Check TypeScript Errors

```bash
# Run TypeScript compiler
npx tsc --noEmit
```

### Check Console

Open browser DevTools (F12) and check:
- Console for JavaScript errors
- Network tab for failed requests
- Lighthouse for performance/SEO audit

### Common Issues

**Images not loading:**
- Check file path is correct
- Ensure file exists in `public/images/`
- Use `.webp` format for better performance

**Popup forms not opening:**
- Check `data-popup` attribute is correct
- Ensure PopupFormProvider wraps the content
- Check browser console for errors

**Styles not applying:**
- Clear Next.js cache: `rm -rf .next`
- Restart dev server
- Check Tailwind class names are correct

## Performance Optimization

### Image Guidelines
- Use WebP format (85% quality)
- Hero images: 1200x600px
- Content images: 800x500px
- Compress before uploading

### Code Splitting
- Use dynamic imports for large components
- Lazy load images below the fold
- Minimize initial bundle size

### Caching
- Static pages are automatically cached
- Use ISR for blog posts: `export const revalidate = 3600`

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy

Or use Vercel CLI:

```bash
vercel --prod
```

### Environment Variables

Set these in production:

```
NEXT_PUBLIC_SITE_URL=https://sydneywebdesigner.com.au
RESEND_API_KEY=re_xxxxx
GOOGLE_ANALYTICS_ID=GA-XXXXX
```

## Getting Help

### Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Project Files
- `README.md` - Project overview
- `PROJECT_STATUS.md` - Current progress and next steps
- `lib/constants.ts` - All data and configurations
- `lib/schemas.ts` - SEO schema generators

---

**Happy Coding!** 🚀
