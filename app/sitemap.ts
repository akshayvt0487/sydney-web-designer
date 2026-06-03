import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.sydneywebdesigner.com.au";

  /*
    Important:
    This currently marks included pages as modified on generation/build.
    It is acceptable while the site is being redesigned and redeployed.
    After launch, change lastModified only when pages actually change.
  */
  const lastModified = new Date();

  /* ------------------------------------------------------------------------
     Main public pages
     ------------------------------------------------------------------------ */
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/web-design`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/web-design-plans`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/growth-marketing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  /* ------------------------------------------------------------------------
     Service pages
     Includes all pages currently linked in your desktop mega menus.
     ------------------------------------------------------------------------ */
  const serviceSlugs = [
    // Web Design
    "custom-web-design",
    "wordpress-development",
    "ecommerce-websites",
    "responsive-design",
    "website-redesign",
    "landing-pages",
    "high-performance-landing-pages",
    "ui-ux-design",
    "vibe-code-website",

    // Growth Marketing / SEO
    "seo-sydney",
    "local-seo",
    "mobile-seo",
    "ecommerce-seo",
    "pay-on-performance-seo",
    "seo-copywriting",
    "link-building",
    "digital-pr",

    // Paid, Social and Conversion
    "google-ads",
    "meta-ads",
    "social-media-marketing",
    "content-marketing",
    "email-marketing",
    "conversion-optimization",

    // Branding
    "brand-identity",
    "logo-design",
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  /* ------------------------------------------------------------------------
     Blog posts
     These match the visible folders inside app/blog.
     ------------------------------------------------------------------------ */
  const blogSlugs = [
    "branding-mistakes-small-businesses",
    "content-marketing-strategy-guide",
    "conversion-rate-optimization-strategies",
    "customer-reviews-online-reputation",
    "digital-marketing-budget-planning",
    "ecommerce-website-best-practices",
    "email-marketing-automation-guide",
    "google-ads-vs-facebook-ads",
    "google-my-business-optimization-guide",
    "how-to-choose-web-designer-sydney",
    "local-seo-sydney-complete-guide",
    "mobile-app-vs-mobile-website",
    "seo-tips-sydney-businesses",
    "social-media-marketing-sydney-businesses",
    "video-marketing-small-business",
    "web-design-trends-2026",
    "website-analytics-guide-beginners",
    "website-hosting-guide-australia",
    "website-redesign-checklist-2024",
    "website-security-essential-tips",
    "website-speed-optimization-tips",
    "wordpress-vs-custom-website-development",
  ];

  const blogPosts: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPosts];
}