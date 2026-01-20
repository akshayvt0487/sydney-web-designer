# Sydney Web Designer - DSIGNS AUSTRALIA

Professional web design and digital marketing services website built with Next.js 14+, TypeScript, and Tailwind CSS.

## Features

- **Modern Next.js 14+ with App Router** - Latest Next.js features for optimal performance
- **TypeScript** - Type-safe code throughout the application
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **Responsive Design** - Mobile-first approach, works on all devices
- **SEO Optimized** - Schema markup, meta tags, semantic HTML
- **Form System** - 4 popup form types for lead generation
- **Mega Menu** - Advanced navigation with 20 services
- **Performance Optimized** - Fast loading, Core Web Vitals optimized

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` file (copy from `.env.example`):

```bash
cp .env.example .env.local
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with Header/Footer
│   ├── page.tsx                 # Homepage
│   ├── about/                   # About Us page
│   ├── services/                # Service pages
│   ├── portfolio/               # Portfolio & case studies
│   ├── blog/                    # Blog system
│   └── ...                      # Other pages
├── components/                   # Reusable React components
│   ├── Header.tsx               # Main header with navigation
│   ├── MegaMenu.tsx             # Services mega menu
│   ├── Footer.tsx               # Footer component
│   ├── PopupForm.tsx            # Popup form system
│   └── ...                      # Other components
├── lib/                          # Utilities and data
│   ├── constants.ts             # Data (portfolio, services, reviews)
│   ├── schemas.ts               # Schema markup generators
│   └── utils.ts                 # Helper functions
└── public/                       # Static assets
    └── images/                  # Images and graphics
```

## Key Pages

### Phase 1 (Launch)
- ✅ Homepage - Complete with all 10 sections
- ✅ About Us
- ✅ 5 Priority Services (SEO, Google Ads, Web Design, Logo Design, Social Media)
- ✅ Web Design Plans
- ✅ Growth Plans
- ✅ Contact
- ✅ Privacy Policy & Terms

### Phase 2
- Portfolio pages
- Remaining 15 service pages
- Blog posts
- Testimonials page
- Careers system

### Phase 3
- Location pages (6 regions, 30+ suburbs)
- Additional blog content
- Case studies

## Popup Form System

The website includes 4 popup form types that can be triggered from any button/link:

```html
<!-- Contact/Quote Form -->
<button data-popup="contact">Get Quote</button>

<!-- SEO Audit Form -->
<button data-popup="seoAudit">Get SEO Audit</button>

<!-- Google Ads Audit Form -->
<button data-popup="adsAudit">Get Ads Audit</button>

<!-- Consultation Form -->
<button data-popup="consultation">Book Consultation</button>
```

## Design System

### Colors
- **Primary Navy**: `#1e293b`
- **Primary Orange**: `#f59e0b`
- **Dark Navy**: `#0f172a`
- **Mid Navy**: `#334155`

### Typography
- Font: System UI sans-serif stack
- H1: 2.5rem (40px)
- H2: 2rem (32px)
- H3: 1.5rem (24px)

### Components
- Cards: 15px border radius, hover lift effect
- Buttons: Primary (orange), Secondary (navy outline), White
- Shadows: Card shadow with enhanced hover state

## Build & Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

```bash
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Environment Variables

```
NEXT_PUBLIC_SITE_URL=https://sydneywebdesigner.com.au
RESEND_API_KEY=your_resend_api_key
GOOGLE_ANALYTICS_ID=GA-XXXXX
```

## SEO Features

- Schema markup (LocalBusiness, Service, FAQ, Breadcrumb)
- Optimized meta tags
- Semantic HTML structure
- Image alt tags
- Internal linking strategy
- Sitemap generation
- Fast loading times

## Contact Information

- **Company**: DSIGNS AUSTRALIA PTY LIMITED
- **Email**: hello@dsigns.com.au
- **Phone**: 02 9191 8049
- **Address**: Suite 611, Level 6, 150 George Street, Parramatta NSW 2150

## License

© 2025 DSIGNS AUSTRALIA PTY LIMITED. All rights reserved.
