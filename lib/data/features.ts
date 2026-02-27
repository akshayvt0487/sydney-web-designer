/**
 * Features Configurations
 * Centralized feature lists categorized by page/service
 */

export interface Feature {
  icon: string;
  title: string;
  description: string;
  link?: string;
  color?: string;
}

export interface FeatureGroup {
  id: string;
  title?: string;
  description?: string;
  features: Feature[];
}

export const featureGroups: Record<string, FeatureGroup> = {
  // Homepage Services
  homepageServices: {
    id: 'homepage-services',
    title: 'Our Services',
    description: "We don't just build websites — we engineer digital ecosystems where psychology meets infrastructure, and design meets systems thinking",
    features: [
      {
        icon: 'fa-palette',
        title: 'Web Design & Development',
        description: 'Strategic UX/UI design, semantic HTML architecture, accessibility compliance, Core Web Vitals optimization, and conversion-focused interfaces.',
        link: '/services/custom-web-design',
        color: 'from-primary-orange to-amber-500',
      },
      {
        icon: 'fa-bullhorn',
        title: 'Digital Marketing',
        description: 'Technical SEO, structured data, on-page optimization, conversion rate optimization, and data-driven growth strategies.',
        link: '/services/seo-sydney',
        color: 'from-purple-500 to-pink-500',
      },
      {
        icon: 'fa-pen-nib',
        title: 'Branding & Design',
        description: 'Brand positioning, design systems, visual hierarchy, typography discipline, and consistent component libraries.',
        link: '/services/brand-identity',
        color: 'from-orange-500 to-red-500',
      },
    ],
  },

  // Homepage Why Choose Us Benefits
  homepageBenefits: {
    id: 'homepage-benefits',
    title: "Sydney's Most Trusted Web Design Partner",
    description: "We don't just build websites — we create digital experiences that drive real business growth.",
    features: [
      {
        icon: 'fa-award',
        title: 'Award-Winning Design',
        description: 'Recognized for excellence in web design and digital innovation',
      },
      {
        icon: 'fa-clock',
        title: '13+ Years Experience',
        description: 'Over a decade serving Sydney businesses with proven results',
      },
      {
        icon: 'fa-headset',
        title: 'Dedicated Support',
        description: 'Local team providing ongoing support and maintenance',
      },
      {
        icon: 'fa-chart-line',
        title: 'Results-Driven',
        description: 'Focused on ROI, conversions, and measurable outcomes',
      },
    ],
  },

  // Web Design Services
  webDesignServices: {
    id: 'web-design-services',
    title: 'Comprehensive Web Design Services',
    description: 'Everything you need for a successful online presence',
    features: [
      {
        icon: 'fa-paint-brush',
        title: 'Custom Web Design',
        description: 'Unique, tailor-made designs that perfectly reflect your brand identity and business goals. No templates, just original creativity that sets you apart from competitors.',
      },
      {
        icon: 'fa-mobile-alt',
        title: 'Responsive Design',
        description: 'Mobile-first websites that look stunning on every device. With 70% of users browsing on mobile, we ensure perfect functionality across all screen sizes.',
      },
      {
        icon: 'fa-shopping-cart',
        title: 'E-commerce Websites',
        description: 'Powerful online stores built to sell. Secure payment integration, inventory management, and user-friendly shopping experiences that convert browsers into buyers.',
      },
      {
        icon: 'fa-wordpress',
        title: 'WordPress Development',
        description: 'Custom WordPress websites with easy-to-use content management. Update your site yourself or let us handle it - the choice is yours.',
      },
      {
        icon: 'fa-rocket',
        title: 'Landing Pages',
        description: 'High-converting landing pages designed for specific campaigns. Optimized for lead generation with clear calls-to-action and compelling design.',
      },
      {
        icon: 'fa-sync',
        title: 'Website Redesign',
        description: 'Modernize your outdated website with a fresh new look. We preserve your SEO rankings while giving you a contemporary design that drives results.',
      },
      {
        icon: 'fa-pencil-alt',
        title: 'UI/UX Design',
        description: 'Intuitive user interfaces and exceptional user experiences. We focus on creating websites that are not just beautiful, but easy to use and navigate.',
      },
      {
        icon: 'fa-code',
        title: 'Custom Development',
        description: 'Advanced functionality and custom features built to your specifications. From complex databases to API integrations, we make it happen.',
      },
      {
        icon: 'fa-headset',
        title: 'Ongoing Maintenance',
        description: 'Keep your website running smoothly with regular updates, security patches, and technical support. Focus on your business while we handle the tech.',
      },
    ],
  },

  // Web Design Standard Features Included
  webDesignIncluded: {
    id: 'web-design-included',
    title: 'Features Included in Every Website',
    description: 'Professional quality as standard, not as an extra',
    features: [
      { icon: 'fa-mobile-alt', title: 'Mobile Responsive Design', description: '' },
      { icon: 'fa-search', title: 'Search Engine Optimization', description: '' },
      { icon: 'fa-tachometer-alt', title: 'Fast Loading Speed', description: '' },
      { icon: 'fa-lock', title: 'SSL Security Certificate', description: '' },
      { icon: 'fa-envelope', title: 'Contact Form Integration', description: '' },
      { icon: 'fa-share-alt', title: 'Social Media Integration', description: '' },
      { icon: 'fa-chart-bar', title: 'Google Analytics Setup', description: '' },
      { icon: 'fa-map-marked-alt', title: 'Google Maps Integration', description: '' },
      { icon: 'fa-at', title: 'Email Configuration', description: '' },
      { icon: 'fa-edit', title: 'Content Management System', description: '' },
      { icon: 'fa-globe', title: 'Browser Compatibility', description: '' },
      { icon: 'fa-font', title: 'Professional Typography', description: '' },
      { icon: 'fa-images', title: 'Image Optimization', description: '' },
      { icon: 'fa-rocket', title: 'Performance Optimization', description: '' },
      { icon: 'fa-code', title: 'Clean, Semantic Code', description: '' },
      { icon: 'fa-shield-alt', title: 'GDPR Compliance', description: '' },
      { icon: 'fa-universal-access', title: 'Accessibility Standards', description: '' },
      { icon: 'fa-laptop-code', title: 'Cross-Device Testing', description: '' },
    ],
  },

  // SEO Services Features
  seoServices: {
    id: 'seo-services',
    title: 'Comprehensive SEO Services',
    description: 'Every aspect of SEO covered to maximize your online visibility and organic growth.',
    features: [
      {
        icon: 'fa-cog',
        title: 'Technical SEO',
        description: "Optimize your website's technical foundation for better crawling and indexing.",
      },
      {
        icon: 'fa-search',
        title: 'Keyword Research',
        description: 'Target the right keywords that your customers are actually searching for.',
      },
      {
        icon: 'fa-file-alt',
        title: 'On-Page SEO',
        description: 'Optimize every page with strategic content, meta tags, and internal linking.',
      },
      {
        icon: 'fa-link',
        title: 'Link Building',
        description: 'Build high-quality backlinks that boost your domain authority and rankings.',
      },
      {
        icon: 'fa-map-marker-alt',
        title: 'Local SEO',
        description: 'Dominate local search results and Google Maps for your service area.',
      },
      {
        icon: 'fa-chart-bar',
        title: 'SEO Reporting',
        description: 'Track your rankings, traffic, and ROI with detailed monthly reports.',
      },
    ],
  },

  // Responsive Design Device Features
  responsiveDevices: {
    id: 'responsive-devices',
    title: 'Perfect on Every Device',
    description: 'Responsive design that looks stunning across all screen sizes',
    features: [
      {
        icon: 'fa-desktop',
        title: 'Desktop',
        description: 'Immersive full-screen experiences with advanced features and layouts',
      },
      {
        icon: 'fa-tablet-alt',
        title: 'Tablet',
        description: 'Optimized touch interfaces that adapt perfectly to all tablet sizes',
      },
      {
        icon: 'fa-mobile-alt',
        title: 'Mobile',
        description: 'Fast-loading, thumb-friendly designs for on-the-go users',
      },
    ],
  },
} as const;

/**
 * Helper function to get feature group by ID
 */
export function getFeatureGroup(id: string): FeatureGroup | undefined {
  return featureGroups[id];
}

/**
 * Helper function to get all feature group IDs
 */
export function getFeatureGroupIds(): string[] {
  return Object.keys(featureGroups);
}
