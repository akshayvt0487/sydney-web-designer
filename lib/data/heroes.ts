/**
 * Hero Section Configurations
 * Centralized hero content for all pages
 */

export interface HeroButton {
  text: string;
  href?: string;
  dataPopup?: string;
  variant: 'primary' | 'secondary';
}

export interface HeroBadge {
  icon?: string;
  text: string;
  showPulse?: boolean;
}

export interface HeroConfig {
  id: string;
  badge?: HeroBadge;
  heading: string;
  subheading?: string;
  description: string;
  buttons: HeroButton[];
  theme?: 'dark' | 'light' | 'gradient';
  showScrollIndicator?: boolean;
}

export const heroes: Record<string, HeroConfig> = {
  // Homepage Hero
  homepage: {
    id: 'homepage',
    badge: {
      text: '13+ Years of Excellence',
      showPulse: true,
    },
    heading: "Sydney's Premier",
    subheading: 'Web Design Agency',
    description: 'Transform your digital presence with stunning websites that convert visitors into customers. Award-winning design meets cutting-edge technology.',
    buttons: [
      {
        text: 'Get Your Free Quote',
        dataPopup: 'contact',
        variant: 'primary',
      },
      {
        text: 'View Portfolio',
        href: '/portfolio',
        variant: 'secondary',
      },
    ],
    theme: 'dark',
    showScrollIndicator: true,
  },

  // Web Design Page Hero
  webDesign: {
    id: 'web-design',
    badge: {
      text: 'Since 2013 • DSIGNS Australia',
      showPulse: true,
    },
    heading: 'Professional Web Design Sydney',
    description: 'Transform your online presence with stunning, high-performance websites that drive real business results. Award-winning design meets cutting-edge technology.',
    buttons: [
      {
        text: 'Get Your Free Quote',
        dataPopup: 'contact',
        variant: 'primary',
      },
      {
        text: 'View Our Work',
        href: '/portfolio',
        variant: 'secondary',
      },
    ],
    theme: 'dark',
  },

  // SEO Sydney Page Hero
  seoSydney: {
    id: 'seo-sydney',
    badge: {
      icon: 'fas fa-search',
      text: 'SEO Services',
    },
    heading: 'SEO Services That Drive Real Results in Sydney',
    description: 'Dominate search results and drive qualified traffic with comprehensive SEO strategies. Get found by customers actively searching for your products and services.',
    buttons: [
      {
        text: 'Get Free SEO Audit',
        dataPopup: 'seoAudit',
        variant: 'primary',
      },
      {
        text: 'View SEO Case Studies',
        href: '/portfolio',
        variant: 'secondary',
      },
    ],
    theme: 'dark',
  },

  // Generic Service Hero Template
  serviceDefault: {
    id: 'service-default',
    badge: {
      text: 'Professional Services',
    },
    heading: 'Transform Your Business',
    description: 'Expert digital solutions tailored to your business needs. Drive growth and achieve your goals with our proven strategies.',
    buttons: [
      {
        text: 'Get Free Consultation',
        dataPopup: 'contact',
        variant: 'primary',
      },
      {
        text: 'View Our Work',
        href: '/portfolio',
        variant: 'secondary',
      },
    ],
    theme: 'dark',
  },
} as const;

/**
 * Helper function to get hero configuration by ID
 */
export function getHero(id: string): HeroConfig | undefined {
  return heroes[id];
}

/**
 * Helper function to get all hero IDs
 */
export function getHeroIds(): string[] {
  return Object.keys(heroes);
}
