// Complete OG metadata configuration for all pages

export interface PageOGMetadata {
  title: string;
  description: string;
  type: string;
  keywords: string;
  canonicalUrl: string;
}

const baseUrl = 'https://sydneywebdesigner.com.au';

export const pageMetadata: Record<string, PageOGMetadata> = {
  // Home Page
  home: {
    title: 'Sydney Web Designer',
    description: 'Premium web design and digital marketing agency in Sydney. Expert web development, SEO services, and Google Ads management to grow your business online.',
    type: 'Website',
    keywords: 'web design sydney, digital marketing sydney, seo services, google ads, web development',
    canonicalUrl: baseUrl,
  },

  // About Page
  about: {
    title: 'About Us',
    description: 'Learn about DSIGNS - Sydney\'s premier web design and digital marketing agency. Since 2013, delivering exceptional results for Australian businesses.',
    type: 'About',
    keywords: 'web design agency sydney, digital marketing agency, about dsigns',
    canonicalUrl: `${baseUrl}/about`,
  },

  // Portfolio Page
  portfolio: {
    title: 'Our Portfolio',
    description: 'View our portfolio of stunning websites and successful digital marketing campaigns. 65+ projects delivered for businesses across Australia.',
    type: 'Portfolio',
    keywords: 'web design portfolio, website examples, case studies sydney',
    canonicalUrl: `${baseUrl}/portfolio`,
  },

  // Contact Page
  contact: {
    title: 'Contact Us',
    description: 'Get in touch with Sydney Web Designer for a free consultation. Let\'s discuss your web design, SEO, or digital marketing project today.',
    type: 'Contact',
    keywords: 'contact web designer sydney, free consultation, get quote',
    canonicalUrl: `${baseUrl}/contact`,
  },

  // Testimonials Page
  testimonials: {
    title: 'Client Testimonials',
    description: 'Read what our clients say about our web design and digital marketing services. Real reviews from satisfied businesses across Sydney.',
    type: 'Reviews',
    keywords: 'web design reviews sydney, client testimonials, customer feedback',
    canonicalUrl: `${baseUrl}/testimonials`,
  },

  // Blog Page
  blog: {
    title: 'Web Design & Digital Marketing Blog',
    description: 'Expert insights on web design, SEO, digital marketing, and online business growth. Tips and strategies from Sydney\'s leading agency.',
    type: 'Blog',
    keywords: 'web design blog, seo tips, digital marketing insights',
    canonicalUrl: `${baseUrl}/blog`,
  },

  // Careers Page
  careers: {
    title: 'Careers',
    description: 'Join the DSIGNS team! Explore career opportunities in web design, development, SEO, and digital marketing at Sydney\'s leading agency.',
    type: 'Careers',
    keywords: 'web design jobs sydney, digital marketing careers, join our team',
    canonicalUrl: `${baseUrl}/careers`,
  },

  // Services - Web Design
  'services/custom-web-design': {
    title: 'Custom Web Design Sydney',
    description: 'Professional custom web design services in Sydney. Bespoke websites tailored to your business needs with stunning design and powerful functionality.',
    type: 'Service',
    keywords: 'custom web design sydney, bespoke website design, professional web designer',
    canonicalUrl: `${baseUrl}/services/custom-web-design`,
  },

  'services/responsive-web-design': {
    title: 'Responsive Web Design',
    description: 'Mobile-first responsive web design services. Beautiful websites that work perfectly on all devices - desktop, tablet, and mobile.',
    type: 'Service',
    keywords: 'responsive web design, mobile website design, adaptive design',
    canonicalUrl: `${baseUrl}/services/responsive-web-design`,
  },

  'services/wordpress-development': {
    title: 'WordPress Development',
    description: 'Expert WordPress development services in Sydney. Custom themes, plugins, and maintenance for powerful, scalable WordPress websites.',
    type: 'Service',
    keywords: 'wordpress development sydney, custom wordpress, wordpress website',
    canonicalUrl: `${baseUrl}/services/wordpress-development`,
  },

  'services/ecommerce-web-design': {
    title: 'E-commerce Web Design',
    description: 'Professional e-commerce website design and development. Build a powerful online store with WooCommerce, Shopify, or custom solutions.',
    type: 'Service',
    keywords: 'ecommerce website design, online store development, shopify development',
    canonicalUrl: `${baseUrl}/services/ecommerce-web-design`,
  },

  'services/high-performance-landing-pages': {
    title: 'High Performance Landing Pages',
    description: 'Conversion-optimized landing page design. Fast-loading, persuasive pages designed to convert visitors into customers.',
    type: 'Service',
    keywords: 'landing page design, conversion optimization, high converting pages',
    canonicalUrl: `${baseUrl}/services/high-performance-landing-pages`,
  },

  // Services - SEO
  'services/seo-sydney': {
    title: 'SEO Services Sydney',
    description: 'Professional SEO services to rank your website higher on Google. Comprehensive SEO strategies that drive organic traffic and leads.',
    type: 'Service',
    keywords: 'seo services sydney, search engine optimization, google ranking',
    canonicalUrl: `${baseUrl}/services/seo-sydney`,
  },

  'services/local-seo': {
    title: 'Local SEO Sydney',
    description: 'Dominate local search results with our local SEO services. Get found by customers in your area with Google My Business optimization.',
    type: 'Service',
    keywords: 'local seo sydney, google my business, local search optimization',
    canonicalUrl: `${baseUrl}/services/local-seo`,
  },

  'services/mobile-seo': {
    title: 'Mobile SEO',
    description: 'Mobile-first SEO optimization services. Ensure your website ranks well on mobile search and provides excellent mobile user experience.',
    type: 'Service',
    keywords: 'mobile seo, mobile search optimization, mobile-first indexing',
    canonicalUrl: `${baseUrl}/services/mobile-seo`,
  },

  'services/ecommerce-seo': {
    title: 'E-commerce SEO',
    description: 'Specialized SEO for online stores. Product page optimization, category structure, and technical SEO to increase online sales.',
    type: 'Service',
    keywords: 'ecommerce seo, online store optimization, product seo',
    canonicalUrl: `${baseUrl}/services/ecommerce-seo`,
  },

  'services/pay-on-performance-seo': {
    title: 'Pay on Performance SEO',
    description: 'Results-driven SEO with pay-on-performance model. Only pay when we achieve agreed rankings and traffic targets.',
    type: 'Service',
    keywords: 'performance-based seo, pay per result seo, guaranteed rankings',
    canonicalUrl: `${baseUrl}/services/pay-on-performance-seo`,
  },

  'services/seo-copywriting': {
    title: 'SEO Copywriting',
    description: 'Professional SEO copywriting services. Engaging content that ranks well on Google and converts visitors into customers.',
    type: 'Service',
    keywords: 'seo copywriting, content writing, seo content creation',
    canonicalUrl: `${baseUrl}/services/seo-copywriting`,
  },

  'services/link-building': {
    title: 'Link Building Services',
    description: 'White-hat link building services to boost your website authority. Quality backlinks from relevant, high-authority websites.',
    type: 'Service',
    keywords: 'link building, backlink services, seo link building',
    canonicalUrl: `${baseUrl}/services/link-building`,
  },

  'services/digital-pr': {
    title: 'Digital PR',
    description: 'Strategic digital PR services to build brand awareness and earn quality backlinks. Media outreach and content promotion.',
    type: 'Service',
    keywords: 'digital pr, online pr services, media outreach',
    canonicalUrl: `${baseUrl}/services/digital-pr`,
  },

  // Services - Paid Advertising
  'services/google-ads': {
    title: 'Google Ads Management',
    description: 'Expert Google Ads management services in Sydney. PPC campaigns that deliver high ROI and qualified leads for your business.',
    type: 'Service',
    keywords: 'google ads management sydney, ppc services, google adwords',
    canonicalUrl: `${baseUrl}/services/google-ads`,
  },

  'services/search-ads': {
    title: 'Google Search Ads',
    description: 'Targeted Google Search Ads campaigns. Appear at the top of search results when customers are looking for your services.',
    type: 'Service',
    keywords: 'google search ads, search advertising, ppc search',
    canonicalUrl: `${baseUrl}/services/search-ads`,
  },

  'services/display-ads': {
    title: 'Google Display Ads',
    description: 'Eye-catching display advertising campaigns. Reach your audience across millions of websites in the Google Display Network.',
    type: 'Service',
    keywords: 'google display ads, banner advertising, display network',
    canonicalUrl: `${baseUrl}/services/display-ads`,
  },

  'services/meta-ads': {
    title: 'Meta Ads (Facebook & Instagram)',
    description: 'Professional Meta Ads management for Facebook and Instagram. Targeted social media advertising that drives engagement and sales.',
    type: 'Service',
    keywords: 'meta ads, facebook ads, instagram advertising',
    canonicalUrl: `${baseUrl}/services/meta-ads`,
  },

  // Services - Content & Marketing
  'services/content-marketing': {
    title: 'Content Marketing',
    description: 'Strategic content marketing services to attract and engage your audience. Blogs, articles, and resources that drive traffic and leads.',
    type: 'Service',
    keywords: 'content marketing, content strategy, blog writing',
    canonicalUrl: `${baseUrl}/services/content-marketing`,
  },

  'services/social-media-marketing': {
    title: 'Social Media Marketing',
    description: 'Professional social media marketing services. Build your brand and engage customers on Facebook, Instagram, LinkedIn, and more.',
    type: 'Service',
    keywords: 'social media marketing, social media management, smm services',
    canonicalUrl: `${baseUrl}/services/social-media-marketing`,
  },

  'services/email-marketing': {
    title: 'Email Marketing',
    description: 'Effective email marketing campaigns that convert. Newsletter design, automation, and strategy to nurture leads and drive sales.',
    type: 'Service',
    keywords: 'email marketing, newsletter campaigns, email automation',
    canonicalUrl: `${baseUrl}/services/email-marketing`,
  },

  // Legal Pages
  'privacy-policy': {
    title: 'Privacy Policy',
    description: 'Sydney Web Designer privacy policy. Learn how we collect, use, and protect your personal information.',
    type: 'Legal',
    keywords: 'privacy policy, data protection, gdpr compliance',
    canonicalUrl: `${baseUrl}/privacy-policy`,
  },

  'terms-conditions': {
    title: 'Terms & Conditions',
    description: 'Terms and conditions for using Sydney Web Designer services. Service agreements and policies.',
    type: 'Legal',
    keywords: 'terms and conditions, service terms, legal',
    canonicalUrl: `${baseUrl}/terms-conditions`,
  },
};

// Helper function to generate OG image URL
export function getOGImageUrl(title: string, description: string, type: string): string {
  const params = new URLSearchParams({
    title,
    description: description.slice(0, 100), // Truncate for URL
    type,
  });
  return `${baseUrl}/api/og?${params.toString()}`;
}

// Helper function to get metadata for a page
export function getPageMetadata(pageKey: string): PageOGMetadata | null {
  return pageMetadata[pageKey] || null;
}
