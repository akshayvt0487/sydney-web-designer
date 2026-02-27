/**
 * Stats Configurations
 * Centralized statistics for different pages and sections
 */

export interface Stat {
  icon?: string;
  value: string;
  label: string;
  description?: string;
}

export interface StatsGroup {
  id: string;
  title?: string;
  stats: Stat[];
}

export const statsGroups: Record<string, StatsGroup> = {
  // Homepage Hero Stats
  homepageHero: {
    id: 'homepage-hero',
    stats: [
      {
        icon: 'fa-trophy',
        value: '500+',
        label: 'Projects Delivered',
      },
      {
        icon: 'fa-users',
        value: '98%',
        label: 'Client Satisfaction',
      },
      {
        icon: 'fa-star',
        value: '4.9',
        label: 'Google Rating',
      },
      {
        icon: 'fa-rocket',
        value: '12+',
        label: 'Industries Served',
      },
    ],
  },

  // Web Design Page Stats
  webDesignPage: {
    id: 'web-design-page',
    stats: [
      {
        icon: 'fa-award',
        value: '13+',
        label: 'Years',
        description: 'Industry experience delivering exceptional websites',
      },
      {
        icon: 'fa-laptop-code',
        value: '500+',
        label: 'Websites successfully delivered to happy clients',
      },
      {
        icon: 'fa-smile',
        value: '100%',
        label: 'Client satisfaction with ongoing support',
      },
      {
        icon: 'fa-industry',
        value: '12+',
        label: 'Industries served across Australia',
      },
    ],
  },

  // Web Design Performance Stats
  webDesignPerformance: {
    id: 'web-design-performance',
    title: 'Built for Performance & Results',
    stats: [
      {
        value: '< 2s',
        label: 'Loading Speed',
        description: 'Lightning-fast page loads keep visitors engaged',
      },
      {
        value: '95+',
        label: 'Performance Score',
        description: 'Google PageSpeed optimized for top rankings',
      },
      {
        value: '99.9%',
        label: 'Uptime',
        description: 'Reliable hosting keeps your site always accessible',
      },
      {
        value: 'SSL',
        label: 'Secure',
        description: 'Bank-level encryption protects your data',
      },
    ],
  },

  // SEO Sydney Stats
  seoSydney: {
    id: 'seo-sydney',
    stats: [
      {
        value: '215%',
        label: 'Avg. Traffic Increase',
      },
      {
        value: '1,500+',
        label: 'Keywords Ranked',
      },
      {
        value: '80+',
        label: 'SEO Projects',
      },
      {
        value: '94%',
        label: 'Client Retention',
      },
    ],
  },

  // Generic High-Level Company Stats
  companyOverview: {
    id: 'company-overview',
    stats: [
      {
        icon: 'fa-trophy',
        value: '500+',
        label: 'Projects Completed',
        description: 'Successful projects delivered across Australia',
      },
      {
        icon: 'fa-users',
        value: '98%',
        label: 'Client Satisfaction',
        description: 'Exceptional service and support',
      },
      {
        icon: 'fa-calendar',
        value: '13+',
        label: 'Years Experience',
        description: 'Over a decade of digital excellence',
      },
      {
        icon: 'fa-star',
        value: '4.9',
        label: 'Google Rating',
        description: 'Highly rated by our clients',
      },
    ],
  },

  // Results-Focused Stats
  results: {
    id: 'results',
    stats: [
      {
        value: '300%',
        label: 'Average ROI',
        description: 'Return on investment for our clients',
      },
      {
        value: '215%',
        label: 'Traffic Increase',
        description: 'Average organic traffic growth',
      },
      {
        value: '94%',
        label: 'Client Retention',
        description: 'Long-term partnerships',
      },
      {
        value: '99.9%',
        label: 'Uptime',
        description: 'Reliable and always accessible',
      },
    ],
  },
} as const;

/**
 * Helper function to get stats group by ID
 */
export function getStatsGroup(id: string): StatsGroup | undefined {
  return statsGroups[id];
}

/**
 * Helper function to get all stats group IDs
 */
export function getStatsGroupIds(): string[] {
  return Object.keys(statsGroups);
}
