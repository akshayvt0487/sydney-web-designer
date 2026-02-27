/**
 * Process Step Configurations
 * Centralized process flows by service type
 */

export interface ProcessStep {
  step: number | string;
  icon: string;
  title: string;
  description: string;
}

export interface ProcessFlow {
  id: string;
  title?: string;
  description?: string;
  steps: ProcessStep[];
}

export const processFlows: Record<string, ProcessFlow> = {
  // Homepage - General Process
  homepage: {
    id: 'homepage',
    title: 'How We Work',
    description: 'A proven process that delivers exceptional results, every time',
    steps: [
      {
        step: '01',
        icon: 'fa-comments',
        title: 'Discovery & Strategy',
        description: 'We learn about your business, goals, and target audience to create a tailored strategy.',
      },
      {
        step: '02',
        icon: 'fa-pencil-ruler',
        title: 'Design & Development',
        description: 'Our team brings your vision to life with stunning design and robust development.',
      },
      {
        step: '03',
        icon: 'fa-rocket',
        title: 'Launch & Optimize',
        description: 'We launch your project and continuously optimize for peak performance.',
      },
      {
        step: '04',
        icon: 'fa-chart-line',
        title: 'Growth & Support',
        description: 'Ongoing maintenance, updates, and marketing to ensure continued success.',
      },
    ],
  },

  // Web Design Process (6 Steps)
  webDesign: {
    id: 'web-design',
    title: 'Our Web Design Process',
    description: 'A proven methodology that delivers outstanding results',
    steps: [
      {
        step: '01',
        icon: 'fa-search',
        title: 'Discovery & Strategy',
        description: 'We start by understanding your business, target audience, competitors, and goals. This research phase ensures we create a website that truly serves your needs and drives your business forward.',
      },
      {
        step: '02',
        icon: 'fa-palette',
        title: 'Design & Concept',
        description: 'Our designers create custom mockups and prototypes based on your brand guidelines. You\'ll see exactly how your website will look before we write a single line of code, with unlimited revisions until you\'re completely satisfied.',
      },
      {
        step: '03',
        icon: 'fa-code',
        title: 'Development & Testing',
        description: 'Our developers bring the design to life using modern, clean code. We build with performance, security, and SEO in mind. Rigorous testing across all devices ensures everything works perfectly.',
      },
      {
        step: '04',
        icon: 'fa-file-alt',
        title: 'Content & SEO',
        description: 'We optimize your content for search engines and user engagement. Proper heading structure, meta tags, alt text, and keyword optimization ensure your website ranks well on Google from day one.',
      },
      {
        step: '05',
        icon: 'fa-rocket',
        title: 'Launch & Training',
        description: 'After final approval, we launch your website and provide comprehensive training. You\'ll learn how to manage your content, or we can handle updates for you. Your success is our success.',
      },
      {
        step: '06',
        icon: 'fa-chart-line',
        title: 'Support & Growth',
        description: 'Our relationship doesn\'t end at launch. We provide ongoing support, monitor performance, and suggest improvements to help your website grow with your business.',
      },
    ],
  },

  // SEO Process (4 Steps)
  seo: {
    id: 'seo',
    title: 'Our SEO Process',
    description: 'A proven methodology that delivers consistent, measurable results.',
    steps: [
      {
        step: 1,
        icon: 'fa-search',
        title: 'SEO Audit',
        description: 'Comprehensive analysis of your website\'s current SEO performance and opportunities.',
      },
      {
        step: 2,
        icon: 'fa-map',
        title: 'Strategy Development',
        description: 'Custom SEO roadmap aligned with your business goals and target audience.',
      },
      {
        step: 3,
        icon: 'fa-cogs',
        title: 'Implementation',
        description: 'Execute on-page, technical, and off-page SEO improvements systematically.',
      },
      {
        step: 4,
        icon: 'fa-chart-line',
        title: 'Monitoring & Optimization',
        description: 'Continuous tracking, testing, and refinement to maximize results.',
      },
    ],
  },

  // Branding Process
  branding: {
    id: 'branding',
    title: 'Our Branding Process',
    description: 'Strategic brand development that sets you apart',
    steps: [
      {
        step: '01',
        icon: 'fa-lightbulb',
        title: 'Brand Discovery',
        description: 'Deep dive into your business values, target audience, competitors, and market positioning to define your unique brand identity.',
      },
      {
        step: '02',
        icon: 'fa-paint-brush',
        title: 'Visual Identity',
        description: 'Create your logo, color palette, typography, and visual elements that represent your brand personality.',
      },
      {
        step: '03',
        icon: 'fa-book',
        title: 'Brand Guidelines',
        description: 'Develop comprehensive brand guidelines to ensure consistent application across all touchpoints.',
      },
      {
        step: '04',
        icon: 'fa-rocket',
        title: 'Launch & Implementation',
        description: 'Roll out your new brand identity across all channels with a strategic launch plan.',
      },
    ],
  },

  // Digital Marketing Process
  digitalMarketing: {
    id: 'digital-marketing',
    title: 'Our Marketing Process',
    description: 'Data-driven strategies that deliver measurable growth',
    steps: [
      {
        step: '01',
        icon: 'fa-chart-bar',
        title: 'Audit & Analysis',
        description: 'Review your current marketing performance, identify opportunities, and benchmark against competitors.',
      },
      {
        step: '02',
        icon: 'fa-bullseye',
        title: 'Strategy Development',
        description: 'Create a customized marketing strategy aligned with your business goals and target audience.',
      },
      {
        step: '03',
        icon: 'fa-play',
        title: 'Campaign Launch',
        description: 'Execute multi-channel campaigns with optimized ad copy, targeting, and creative assets.',
      },
      {
        step: '04',
        icon: 'fa-sync',
        title: 'Optimize & Scale',
        description: 'Continuously test, refine, and scale successful campaigns for maximum ROI.',
      },
    ],
  },

  // E-commerce Process
  ecommerce: {
    id: 'ecommerce',
    title: 'Our E-commerce Process',
    description: 'Building online stores that sell',
    steps: [
      {
        step: '01',
        icon: 'fa-clipboard-list',
        title: 'Requirements & Planning',
        description: 'Define product catalog, payment gateways, shipping methods, and customer journey.',
      },
      {
        step: '02',
        icon: 'fa-shopping-cart',
        title: 'Platform Selection',
        description: 'Choose the right e-commerce platform (Shopify, WooCommerce, etc.) based on your needs.',
      },
      {
        step: '03',
        icon: 'fa-palette',
        title: 'Design & Development',
        description: 'Create a conversion-optimized store design and build secure, scalable functionality.',
      },
      {
        step: '04',
        icon: 'fa-box',
        title: 'Product Setup',
        description: 'Upload products, configure variants, set up inventory, and optimize product pages.',
      },
      {
        step: '05',
        icon: 'fa-credit-card',
        title: 'Payment & Shipping',
        description: 'Integrate payment gateways and configure shipping methods and tax calculations.',
      },
      {
        step: '06',
        icon: 'fa-rocket',
        title: 'Launch & Marketing',
        description: 'Launch your store and implement marketing strategies to drive traffic and sales.',
      },
    ],
  },

  // Website Redesign Process
  redesign: {
    id: 'redesign',
    title: 'Our Redesign Process',
    description: 'Modernizing your website while preserving SEO',
    steps: [
      {
        step: '01',
        icon: 'fa-stethoscope',
        title: 'Website Audit',
        description: 'Comprehensive analysis of current site performance, SEO, user experience, and conversion rates.',
      },
      {
        step: '02',
        icon: 'fa-lightbulb',
        title: 'Strategy & Planning',
        description: 'Define goals, create information architecture, and plan SEO preservation strategy.',
      },
      {
        step: '03',
        icon: 'fa-paint-brush',
        title: 'Modern Design',
        description: 'Create contemporary design that reflects your brand while improving user experience.',
      },
      {
        step: '04',
        icon: 'fa-code',
        title: 'Development & Migration',
        description: 'Build new site with modern technology, migrate content, and set up 301 redirects.',
      },
      {
        step: '05',
        icon: 'fa-rocket',
        title: 'Launch & Monitor',
        description: 'Carefully launch redesigned site and monitor rankings, traffic, and performance.',
      },
    ],
  },
} as const;

/**
 * Helper function to get process flow by ID
 */
export function getProcessFlow(id: string): ProcessFlow | undefined {
  return processFlows[id];
}

/**
 * Helper function to get all process flow IDs
 */
export function getProcessFlowIds(): string[] {
  return Object.keys(processFlows);
}
