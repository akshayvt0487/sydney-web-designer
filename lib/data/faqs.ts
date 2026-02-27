/**
 * FAQ Configurations
 * Centralized FAQ groups categorized by topic/page
 */

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQGroup {
  id: string;
  title?: string;
  description?: string;
  faqs: FAQ[];
}

export const faqGroups: Record<string, FAQGroup> = {
  // Web Design FAQs
  webDesign: {
    id: 'web-design',
    title: 'Frequently Asked Questions',
    description: 'Everything you need to know about our web design services',
    faqs: [
      {
        question: 'How much does a professional website cost?',
        answer: 'Website costs vary based on complexity and features. Basic websites start from around $3,000, while advanced e-commerce sites or custom applications can range higher. We provide transparent quotes with no hidden fees after understanding your specific requirements.',
      },
      {
        question: 'How long does it take to design and build a website?',
        answer: 'Timeline depends on project scope. A basic website typically takes 2-4 weeks, while more complex sites with custom features take 6-12 weeks. We\'ll provide a detailed timeline during our initial consultation based on your specific needs.',
      },
      {
        question: 'Will my website be mobile-friendly?',
        answer: 'Absolutely! Every website we create is fully responsive and mobile-optimized. With over 70% of users browsing on mobile devices, we ensure your site looks and works perfectly on smartphones, tablets, and desktops.',
      },
      {
        question: 'Can I update the website content myself?',
        answer: 'Yes! We build websites with user-friendly content management systems (CMS) that allow you to make updates easily. We provide training and documentation, or you can opt for our maintenance plans if you prefer us to handle updates.',
      },
      {
        question: 'Do you provide website hosting?',
        answer: 'While we don\'t provide hosting directly, we can recommend reliable hosting providers and handle the setup for you. We ensure your website is deployed on fast, secure servers optimized for performance.',
      },
      {
        question: 'Will my website be SEO-friendly?',
        answer: 'Yes! Search engine optimization is built into every website we create. We implement SEO best practices including proper heading structure, meta tags, fast loading speeds, mobile optimization, and clean code that search engines love.',
      },
      {
        question: 'What happens after my website launches?',
        answer: 'We provide post-launch support with every project. This includes fixing any bugs, answering questions, and making minor adjustments. We also offer ongoing maintenance plans for regular updates, security monitoring, and continuous optimization.',
      },
      {
        question: 'Do I own the website after it\'s built?',
        answer: 'Yes! Once final payment is complete, you own all rights to your website, including the code, content, and design files. We believe in complete transparency and client ownership.',
      },
      {
        question: 'Can you redesign my existing website?',
        answer: 'Absolutely! We specialize in website redesigns, modernizing outdated sites while preserving your SEO rankings and improving user experience. We\'ll audit your current site and create a strategic redesign plan.',
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment options. Standard arrangement is 50% deposit and 50% upon completion. For larger projects, we can arrange milestone-based payments or monthly installments to fit your budget.',
      },
    ],
  },

  // SEO FAQs
  seo: {
    id: 'seo',
    title: 'Frequently Asked Questions',
    description: 'Everything you need to know about our SEO services',
    faqs: [
      {
        question: 'How long does SEO take to show results?',
        answer: 'Most clients see initial improvements within 3-4 months, with significant results typically appearing after 6-12 months. SEO is a long-term investment that builds momentum over time.',
      },
      {
        question: 'What\'s included in your SEO services?',
        answer: 'Our comprehensive SEO includes technical optimization, keyword research, on-page SEO, content strategy, link building, local SEO (if applicable), and detailed monthly reporting.',
      },
      {
        question: 'Do you guarantee #1 rankings?',
        answer: 'No reputable SEO company can guarantee specific rankings as search algorithms constantly evolve. However, we focus on driving qualified traffic and measurable business results.',
      },
      {
        question: 'What\'s the difference between SEO and Google Ads?',
        answer: 'SEO is organic (free) traffic that builds over time, while Google Ads is paid traffic that starts immediately. We recommend both for maximum visibility and best results.',
      },
      {
        question: 'Will SEO work for my industry?',
        answer: 'Yes! We\'ve successfully delivered SEO results across diverse industries including property, construction, hospitality, healthcare, retail, and professional services.',
      },
    ],
  },

  // General Business FAQs
  general: {
    id: 'general',
    title: 'Frequently Asked Questions',
    description: 'Common questions about working with us',
    faqs: [
      {
        question: 'Where are you located?',
        answer: 'We are based in Sydney, Australia, but we serve clients across Australia and internationally. We can work remotely or meet in person for Sydney-based clients.',
      },
      {
        question: 'What industries do you work with?',
        answer: 'We have 13+ years of experience across 12+ industries including real estate, construction, healthcare, hospitality, professional services, retail, e-commerce, NDIS providers, and more.',
      },
      {
        question: 'Do you sign NDAs?',
        answer: 'Yes, we are happy to sign Non-Disclosure Agreements (NDAs) to protect your confidential information and business ideas.',
      },
      {
        question: 'What is your process for new projects?',
        answer: 'We start with a free consultation to understand your needs, then provide a detailed proposal. Once approved, we move through discovery, design, development, testing, and launch phases with regular updates.',
      },
      {
        question: 'Do you offer ongoing support after project completion?',
        answer: 'Yes! We offer maintenance plans and ongoing support packages to ensure your website continues to perform optimally and stay secure.',
      },
    ],
  },

  // E-commerce FAQs
  ecommerce: {
    id: 'ecommerce',
    title: 'E-commerce FAQs',
    description: 'Questions about online store development',
    faqs: [
      {
        question: 'Which e-commerce platform do you recommend?',
        answer: 'We work with multiple platforms including Shopify, WooCommerce, and custom solutions. The best choice depends on your specific needs, budget, and long-term goals.',
      },
      {
        question: 'Can you integrate payment gateways?',
        answer: 'Yes, we integrate all major payment gateways including Stripe, PayPal, Square, and Australian payment providers. We ensure secure, PCI-compliant payment processing.',
      },
      {
        question: 'Do you provide product photography?',
        answer: 'While we don\'t provide photography services directly, we can recommend professional photographers and handle all image optimization for your website.',
      },
      {
        question: 'Can you help with inventory management?',
        answer: 'Yes, we can set up and integrate inventory management systems that sync with your e-commerce platform, making it easy to track stock levels and fulfill orders.',
      },
    ],
  },

  // Pricing FAQs
  pricing: {
    id: 'pricing',
    title: 'Pricing & Payment FAQs',
    description: 'Questions about our pricing and payment terms',
    faqs: [
      {
        question: 'How do you charge for your services?',
        answer: 'We offer project-based pricing for websites and development work, and monthly retainers for ongoing services like SEO, maintenance, and marketing. All quotes are customized to your specific needs.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept bank transfers, credit cards, and can arrange payment plans for larger projects. Standard terms are 50% deposit and 50% upon completion.',
      },
      {
        question: 'Are there any hidden fees?',
        answer: 'No, we believe in complete transparency. All costs are outlined in our proposals, and we won\'t charge for anything without your approval.',
      },
      {
        question: 'Do you offer refunds?',
        answer: 'We have a satisfaction guarantee policy. If you\'re not happy with the initial design concepts, we\'ll work with you to get it right. Refunds are handled on a case-by-case basis for deposits.',
      },
    ],
  },
} as const;

/**
 * Helper function to get FAQ group by ID
 */
export function getFAQGroup(id: string): FAQGroup | undefined {
  return faqGroups[id];
}

/**
 * Helper function to get all FAQ group IDs
 */
export function getFAQGroupIds(): string[] {
  return Object.keys(faqGroups);
}

/**
 * Helper function to search FAQs by keyword
 */
export function searchFAQs(keyword: string): FAQ[] {
  const results: FAQ[] = [];
  const lowerKeyword = keyword.toLowerCase();

  Object.values(faqGroups).forEach((group) => {
    group.faqs.forEach((faq) => {
      if (
        faq.question.toLowerCase().includes(lowerKeyword) ||
        faq.answer.toLowerCase().includes(lowerKeyword)
      ) {
        results.push(faq);
      }
    });
  });

  return results;
}
