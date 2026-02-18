import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sydneywebdesigner.com.au'

  // Service pages
  const servicePages = [
    'custom-web-design',
    'wordpress-development',
    'ecommerce-websites',
    'responsive-design',
    'website-redesign',
    'landing-pages',
    'ui-ux-design',
    'logo-design',
    'brand-identity',
    'brand-strategy',
    'graphic-design',
    'business-cards',
    'marketing-materials',
    'seo-sydney',
    'google-ads',
    'social-media-marketing',
    'content-marketing',
    'email-marketing',
    'local-seo',
    'conversion-optimization',
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog posts
  const blogPosts = [
    'web-design-trends-2026',
    'seo-tips-sydney-businesses',
    'how-to-choose-web-designer-sydney',
    'branding-mistakes-small-businesses',
    'content-marketing-strategy-guide',
    'conversion-rate-optimization-strategies',
    'customer-reviews-online-reputation',
    'digital-marketing-budget-planning',
    'ecommerce-website-best-practices',
    'email-marketing-automation-guide',
    'google-ads-vs-facebook-ads',
    'google-my-business-optimization-guide',
    'local-seo-sydney-complete-guide',
    'mobile-app-vs-mobile-website',
    'social-media-marketing-sydney-businesses',
    'video-marketing-small-business',
    'website-analytics-guide-beginners',
    'website-hosting-guide-australia',
    'website-redesign-checklist-2024',
    'website-security-essential-tips',
    'website-speed-optimization-tips',
    'wordpress-vs-custom-website-development',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Static pages
  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/portfolio`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/testimonials`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/careers`, priority: 0.5, changeFrequency: 'monthly' as const },

    { url: `${baseUrl}/privacy-policy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/terms-conditions`, priority: 0.3, changeFrequency: 'yearly' as const },
  ].map((page) => ({
    ...page,
    lastModified: new Date(),
  }))

  return [...staticPages, ...servicePages, ...blogPosts]
}
