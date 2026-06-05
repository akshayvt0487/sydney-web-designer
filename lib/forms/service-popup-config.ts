import type { FormType } from "./form-configs";

export type ServiceQuestionType = "text" | "textarea" | "select";

export type ServiceGroup = "web-design" | "growth-marketing" | "branding";

export interface ServiceQuestion {
  name: string;
  label: string;
  type: ServiceQuestionType;
  required?: boolean;
  placeholder?: string;
  options?: string[];
}

export interface ServiceOption {
  slug: string;
  name: string;
}

export interface PopupLaunchContext {
  formType: FormType;
  serviceSlug?: string;
  serviceName?: string;
  serviceGroup?: ServiceGroup | string;
  planName?: string;
  planDescription?: string;
  planFeatures?: string[];
  sourceLabel?: string;
}

const YES_NO_NOT_SURE = ["Yes", "No", "Not sure"];

const PROJECT_BUDGET = [
  "Under $1,000",
  "$1,000 - $3,000",
  "$3,000 - $7,500",
  "$7,500 - $10,000",
  "$15,000+",
  "Not sure",
];

const MONTHLY_BUDGET = [
  "Under $1,000/month",
  "$1,000 - $3,000/month",
  "$3,000 - $7,500/month",
  "$7,500 - $15,000/month",
  "$15,000+/month",
  "Not sure",
];

const TIMELINE = [
  "ASAP",
  "2 - 4 weeks",
  "1 - 2 months",
  "3+ months",
  "No fixed deadline",
];

/* =========================================================
   SERVICE OPTIONS BY MEGA MENU GROUP
   ========================================================= */

export const WEB_DESIGN_SERVICE_OPTIONS: ServiceOption[] = [
  { slug: "web-design", name: "Web Design Overview" },
  { slug: "web-design-plans", name: "Web Design Plans" },
  { slug: "custom-web-design", name: "Custom Web Design" },
  { slug: "website-redesign", name: "Website Redesign" },
  { slug: "ui-ux-design", name: "UI / UX Design" },
  { slug: "responsive-design", name: "Responsive Design" },
  { slug: "landing-pages", name: "Landing Pages" },
  { slug: "wordpress-development", name: "WordPress Development" },
  { slug: "ecommerce-websites", name: "E-commerce Websites" },
  {
    slug: "high-performance-landing-pages",
    name: "High Performance Landing Pages",
  },
  { slug: "vibe-code-website", name: "Vibe Code Website" },
];

export const GROWTH_MARKETING_SERVICE_OPTIONS: ServiceOption[] = [
  { slug: "seo-sydney", name: "SEO Sydney" },
  { slug: "local-seo", name: "Local SEO" },
  { slug: "ecommerce-seo", name: "E-commerce SEO" },
  { slug: "mobile-seo", name: "Mobile SEO" },
  { slug: "pay-on-performance-seo", name: "Pay on Performance SEO" },
  { slug: "seo-copywriting", name: "SEO Copywriting" },
  { slug: "link-building", name: "Link Building" },
  { slug: "digital-pr", name: "Digital PR" },
  { slug: "content-marketing", name: "Content Marketing" },
  { slug: "google-ads", name: "Google Ads" },
  { slug: "meta-ads", name: "Meta Ads" },
  { slug: "social-media-marketing", name: "Social Media Marketing" },
  { slug: "email-marketing", name: "Email Marketing" },
  { slug: "conversion-optimization", name: "Conversion Optimization" },
  { slug: "digital-marketing", name: "Growth Marketing Strategy" },
];

export const BRANDING_SERVICE_OPTIONS: ServiceOption[] = [
  { slug: "brand-identity", name: "Brand Identity" },
  { slug: "logo-design", name: "Logo Design" },
  { slug: "branding", name: "Full Branding Project" },
];

export const GENERIC_SERVICE_OPTIONS: ServiceOption[] = [
  ...WEB_DESIGN_SERVICE_OPTIONS,
  ...GROWTH_MARKETING_SERVICE_OPTIONS,
  ...BRANDING_SERVICE_OPTIONS,
  { slug: "other", name: "Other Enquiry" },
];

const SERVICE_NAMES: Record<string, string> = {
  "web-design": "Web Design Overview",
  "web-design-plans": "Web Design Plans",
  "custom-web-design": "Custom Web Design",
  "wordpress-development": "WordPress Development",
  "ecommerce-websites": "E-commerce Websites",
  "website-redesign": "Website Redesign",
  "responsive-design": "Responsive Design",
  "landing-pages": "Landing Pages",
  "high-performance-landing-pages": "High Performance Landing Pages",
  "ui-ux-design": "UI / UX Design",
  "vibe-code-website": "Vibe Code Website",

  seo: "SEO Services",
  "seo-sydney": "SEO Sydney",
  "local-seo": "Local SEO",
  "mobile-seo": "Mobile SEO",
  "ecommerce-seo": "E-commerce SEO",
  "pay-on-performance-seo": "Pay on Performance SEO",
  "seo-copywriting": "SEO Copywriting",
  "link-building": "Link Building",
  "digital-pr": "Digital PR",

  "google-ads": "Google Ads",
  "meta-ads": "Meta Ads",
  "social-media-marketing": "Social Media Marketing",
  "content-marketing": "Content Marketing",
  "email-marketing": "Email Marketing",
  "conversion-optimization": "Conversion Optimization",

  "brand-identity": "Brand Identity",
  "logo-design": "Logo Design",
  branding: "Branding",

  "digital-marketing": "Growth Marketing",
  "growth-plan": "Growth Marketing",
  ecommerce: "E-commerce Websites",
  other: "General Enquiry",
};

/* =========================================================
   WEB DESIGN QUESTIONS
   ========================================================= */

const generalWebQuestions: ServiceQuestion[] = [
  {
    name: "websiteStatus",
    label: "Do you already have a website?",
    type: "select",
    required: true,
    options: [
      "No, this is a new website",
      "Yes, it needs a redesign",
      "Yes, it needs improvements",
      "Yes, it needs migration",
      "Not sure",
    ],
  },
  {
    name: "mainGoal",
    label: "What is the main goal of your website?",
    type: "select",
    required: true,
    options: [
      "Generate enquiries",
      "Sell products online",
      "Improve professional image",
      "Improve SEO visibility",
      "Promote a service",
      "Not sure",
    ],
  },
  {
    name: "requiredPages",
    label: "How many pages do you roughly need?",
    type: "select",
    required: true,
    options: [
      "1 - 5 pages",
      "6 - 10 pages",
      "11 - 20 pages",
      "20+ pages",
      "Not sure",
    ],
  },
  {
    name: "timeline",
    label: "When would you like the website ready?",
    type: "select",
    options: TIMELINE,
  },
  {
    name: "budget",
    label: "What is your approximate project budget?",
    type: "select",
    options: PROJECT_BUDGET,
  },
];

const basicPlanQuestions: ServiceQuestion[] = [
  {
    name: "businessType",
    label: "What type of business is this website for?",
    type: "text",
    required: true,
    placeholder: "For example: café, consultant, tradie, startup...",
  },
  {
    name: "websiteStatus",
    label: "Is this a new website or a replacement?",
    type: "select",
    required: true,
    options: ["New website", "Replacing an old website", "Not sure"],
  },
  {
    name: "requiredPages",
    label: "Which pages do you need?",
    type: "textarea",
    required: true,
    placeholder: "For example: Home, About, Services, Contact...",
  },
  {
    name: "contentStatus",
    label: "Do you already have your text and images ready?",
    type: "select",
    options: [
      "Yes, everything is ready",
      "Some content is ready",
      "I need help with content",
      "Not sure",
    ],
  },
  {
    name: "timeline",
    label: "When do you need the website?",
    type: "select",
    options: TIMELINE,
  },
];

const advancedPlanQuestions: ServiceQuestion[] = [
  {
    name: "websiteStatus",
    label: "Do you already have an existing website?",
    type: "select",
    required: true,
    options: [
      "No, this is a new website",
      "Yes, it needs redesigning",
      "Yes, it needs migrating",
      "Not sure",
    ],
  },
  {
    name: "businessGoal",
    label: "What should this website help your business achieve?",
    type: "select",
    required: true,
    options: [
      "Generate more leads",
      "Sell products online",
      "Build authority",
      "Improve rankings",
      "Launch a new brand",
      "Not sure",
    ],
  },
  {
    name: "ecommerceRequirement",
    label: "Do you need e-commerce functionality?",
    type: "select",
    required: true,
    options: [
      "Yes, up to 50 products",
      "Yes, more than 50 products",
      "No",
      "Not sure",
    ],
  },
  {
    name: "integrations",
    label: "Do you need any integrations or special features?",
    type: "textarea",
    placeholder:
      "For example: booking form, CRM, email marketing, payments, analytics...",
  },
  {
    name: "timeline",
    label: "When would you like to launch?",
    type: "select",
    options: TIMELINE,
  },
];

const premiumPlanQuestions: ServiceQuestion[] = [
  {
    name: "projectScope",
    label: "Briefly describe the website or digital platform you need.",
    type: "textarea",
    required: true,
    placeholder: "Describe the business, website scope and key requirements...",
  },
  {
    name: "customFeatures",
    label: "What advanced functionality do you need?",
    type: "textarea",
    required: true,
    placeholder:
      "For example: dashboards, multilingual content, APIs, portals, workflows...",
  },
  {
    name: "integrations",
    label: "Which systems must the website connect with?",
    type: "textarea",
    placeholder:
      "CRM, payment gateway, ERP, booking system, analytics, internal tools...",
  },
  {
    name: "decisionStage",
    label: "What stage is this project currently at?",
    type: "select",
    required: true,
    options: [
      "Researching options",
      "Ready to start",
      "Already have specifications",
      "Replacing an existing system",
      "Not sure",
    ],
  },
  {
    name: "timeline",
    label: "What is your preferred launch timeline?",
    type: "select",
    options: TIMELINE,
  },
];

const ecommerceQuestions: ServiceQuestion[] = [
  {
    name: "productCount",
    label: "How many products do you need to sell online?",
    type: "select",
    required: true,
    options: ["1 - 10", "11 - 50", "51 - 200", "200+", "Not sure"],
  },
  {
    name: "platformPreference",
    label: "Do you have a preferred e-commerce platform?",
    type: "select",
    options: ["Shopify", "WooCommerce", "Custom solution", "Not sure"],
  },
  {
    name: "existingStore",
    label: "Are you moving from an existing online store?",
    type: "select",
    required: true,
    options: YES_NO_NOT_SURE,
  },
  {
    name: "storeRequirements",
    label: "What payments, shipping or inventory features do you need?",
    type: "textarea",
    placeholder:
      "Tell us about products, delivery, payments, subscriptions or integrations...",
  },
];

const redesignQuestions: ServiceQuestion[] = [
  {
    name: "currentWebsite",
    label: "What is your current website URL?",
    type: "text",
    required: true,
    placeholder: "https://yourwebsite.com.au",
  },
  {
    name: "currentProblems",
    label: "What problems are you having with the current website?",
    type: "textarea",
    required: true,
    placeholder:
      "Design issues, slow loading, poor leads, difficult editing, SEO problems...",
  },
  {
    name: "keepContent",
    label: "Do you want to keep your current pages and content?",
    type: "select",
    options: YES_NO_NOT_SURE,
  },
  {
    name: "timeline",
    label: "When do you want the new website live?",
    type: "select",
    options: TIMELINE,
  },
];

const landingPageQuestions: ServiceQuestion[] = [
  {
    name: "campaignSource",
    label: "Where will traffic come from?",
    type: "select",
    required: true,
    options: [
      "Google Ads",
      "Meta Ads",
      "SEO",
      "Email Campaign",
      "Offline Campaign",
      "Not sure",
    ],
  },
  {
    name: "offer",
    label: "What service or offer should the landing page promote?",
    type: "text",
    required: true,
    placeholder: "Describe the service, product or offer...",
  },
  {
    name: "conversionGoal",
    label: "What action should visitors take?",
    type: "select",
    required: true,
    options: [
      "Submit a form",
      "Call your business",
      "Book an appointment",
      "Buy online",
      "Download a guide",
      "Other",
    ],
  },
  {
    name: "trackingRequired",
    label: "Do you need conversion tracking configured?",
    type: "select",
    options: YES_NO_NOT_SURE,
  },
];

/* =========================================================
   GROWTH MARKETING QUESTIONS
   ========================================================= */

const seoQuestions: ServiceQuestion[] = [
  {
    name: "websiteUrl",
    label: "What is your website URL?",
    type: "text",
    required: true,
    placeholder: "https://yourwebsite.com.au",
  },
  {
    name: "seoGoal",
    label: "What is your primary SEO goal?",
    type: "select",
    required: true,
    options: [
      "Increase website traffic",
      "Improve keyword rankings",
      "Rank locally on Google Maps",
      "Increase enquiries or sales",
      "Recover lost rankings",
      "Not sure",
    ],
  },
  {
    name: "targetLocations",
    label: "Which locations or suburbs do you want to target?",
    type: "text",
    placeholder: "For example: Parramatta, Sydney CBD, Western Sydney...",
  },
  {
    name: "seoHistory",
    label: "Have you previously invested in SEO?",
    type: "select",
    options: ["No", "Yes, currently", "Yes, previously", "Not sure"],
  },
  {
    name: "monthlyBudget",
    label: "What is your approximate monthly SEO budget?",
    type: "select",
    options: MONTHLY_BUDGET,
  },
];

const googleAdsQuestions: ServiceQuestion[] = [
  {
    name: "adsStatus",
    label: "Are you currently running paid advertising?",
    type: "select",
    required: true,
    options: [
      "No",
      "Yes, Google Ads",
      "Yes, Meta Ads",
      "Yes, multiple platforms",
      "Previously ran ads",
      "Not sure",
    ],
  },
  {
    name: "monthlySpend",
    label: "What is your approximate monthly advertising budget?",
    type: "select",
    required: true,
    options: MONTHLY_BUDGET,
  },
  {
    name: "promotedService",
    label: "What product or service do you want to advertise?",
    type: "text",
    required: true,
    placeholder: "Tell us what you are promoting...",
  },
  {
    name: "trackingInstalled",
    label: "Do you already have conversion tracking installed?",
    type: "select",
    options: YES_NO_NOT_SURE,
  },
];

const socialMediaQuestions: ServiceQuestion[] = [
  {
    name: "platforms",
    label: "Which platforms are most important to your business?",
    type: "select",
    required: true,
    options: [
      "Facebook",
      "Instagram",
      "LinkedIn",
      "TikTok",
      "Multiple platforms",
      "Not sure",
    ],
  },
  {
    name: "socialRequirement",
    label: "What do you need help with?",
    type: "select",
    required: true,
    options: [
      "Organic content",
      "Paid advertising",
      "Content creation",
      "Full management",
      "Strategy only",
      "Not sure",
    ],
  },
  {
    name: "socialGoal",
    label: "What is the main goal of your social media activity?",
    type: "select",
    options: [
      "Generate leads",
      "Increase awareness",
      "Grow followers",
      "Increase sales",
      "Recruitment",
      "Not sure",
    ],
  },
  {
    name: "currentActivity",
    label: "Tell us briefly about your current social media activity.",
    type: "textarea",
    placeholder: "Existing pages, posting frequency, challenges or goals...",
  },
];

const growthMarketingQuestions: ServiceQuestion[] = [
  {
    name: "businessGoal",
    label: "What is your main marketing goal right now?",
    type: "select",
    required: true,
    options: [
      "Generate more leads",
      "Improve online sales",
      "Grow brand awareness",
      "Improve customer retention",
      "Track performance better",
      "Not sure",
    ],
  },
  {
    name: "currentChannels",
    label: "Which marketing channels are you currently using?",
    type: "select",
    options: [
      "None",
      "SEO",
      "Google Ads",
      "Social Media",
      "Email / CRM",
      "Multiple channels",
      "Not sure",
    ],
  },
  {
    name: "mainProblem",
    label: "What is the biggest marketing challenge you are facing?",
    type: "textarea",
    required: true,
    placeholder: "Tell us what is not working or what you want to improve...",
  },
  {
    name: "monthlyBudget",
    label: "What is your approximate monthly marketing budget?",
    type: "select",
    options: MONTHLY_BUDGET,
  },
];

/* =========================================================
   BRANDING QUESTIONS
   ========================================================= */

const logoQuestions: ServiceQuestion[] = [
  {
    name: "logoPackage",
    label: "Logo design package",
    type: "select",
    required: true,
    options: ["Logo Design - A$660 fixed price"],
  },
  {
    name: "businessStage",
    label: "Is this for a new business or existing business?",
    type: "select",
    required: true,
    options: [
      "New business",
      "Existing business",
      "Logo refresh only",
      "Rebrand with logo update",
      "Not sure",
    ],
  },
  {
    name: "businessType",
    label: "What type of business is the logo for?",
    type: "text",
    required: true,
    placeholder: "For example: café, NDIS provider, builder, consultant...",
  },
  {
    name: "logoUse",
    label: "Where will the logo be used most?",
    type: "select",
    required: true,
    options: [
      "Website and social media",
      "Business cards and stationery",
      "Vehicle, signage or uniform",
      "Packaging or products",
      "Everywhere",
    ],
  },
  {
    name: "stylePreference",
    label: "Any colours, styles, competitors or examples you like?",
    type: "textarea",
    placeholder:
      "Tell us what style you prefer, colours to use/avoid, and any examples...",
  },
  {
    name: "timeline",
    label: "When do you need the logo?",
    type: "select",
    options: TIMELINE,
  },
];

const brandingQuestions: ServiceQuestion[] = [
  {
    name: "brandRequirement",
    label: "What branding work do you need?",
    type: "select",
    required: true,
    options: [
      "Full brand identity",
      "Rebranding",
      "Brand guidelines",
      "Logo + brand identity",
      "Marketing collateral",
      "Not sure",
    ],
  },
  {
    name: "businessType",
    label: "What type of business is this for?",
    type: "text",
    required: true,
    placeholder: "Describe your business or industry...",
  },
  {
    name: "brandChallenge",
    label: "What should the new branding improve?",
    type: "textarea",
    required: true,
    placeholder:
      "Tell us about the current brand, audience and desired style...",
  },
  {
    name: "budget",
    label: "What is your approximate project budget?",
    type: "select",
    options: PROJECT_BUDGET,
  },
];

const defaultQuestions: ServiceQuestion[] = [
  {
    name: "requirement",
    label: "What service do you need help with?",
    type: "textarea",
    required: true,
    placeholder: "Tell us briefly what you are looking for...",
  },
  {
    name: "goal",
    label: "What outcome are you trying to achieve?",
    type: "textarea",
    required: true,
    placeholder: "Tell us about your goal...",
  },
  {
    name: "timeline",
    label: "When do you need this completed?",
    type: "select",
    options: TIMELINE,
  },
];

const SERVICE_QUESTIONS: Record<string, ServiceQuestion[]> = {
  "web-design": generalWebQuestions,
  "web-design-plans": generalWebQuestions,
  "custom-web-design": generalWebQuestions,
  "wordpress-development": generalWebQuestions,
  "responsive-design": generalWebQuestions,
  "ui-ux-design": generalWebQuestions,
  "vibe-code-website": generalWebQuestions,

  "ecommerce-websites": ecommerceQuestions,
  ecommerce: ecommerceQuestions,

  "website-redesign": redesignQuestions,

  "landing-pages": landingPageQuestions,
  "high-performance-landing-pages": landingPageQuestions,

  seo: seoQuestions,
  "seo-sydney": seoQuestions,
  "local-seo": seoQuestions,
  "mobile-seo": seoQuestions,
  "ecommerce-seo": seoQuestions,
  "pay-on-performance-seo": seoQuestions,
  "seo-copywriting": seoQuestions,
  "link-building": seoQuestions,
  "digital-pr": seoQuestions,

  "google-ads": googleAdsQuestions,
  "meta-ads": googleAdsQuestions,
  "conversion-optimization": googleAdsQuestions,

  "social-media-marketing": socialMediaQuestions,
  "content-marketing": growthMarketingQuestions,
  "email-marketing": growthMarketingQuestions,
  "digital-marketing": growthMarketingQuestions,
  "growth-plan": growthMarketingQuestions,

  "brand-identity": brandingQuestions,
  "logo-design": logoQuestions,
  branding: brandingQuestions,

  other: defaultQuestions,
};

/* =========================================================
   HELPERS
   ========================================================= */

function normalizeServiceGroup(value?: string): ServiceGroup | null {
  const group = String(value || "").trim().toLowerCase();

  if (
    group === "web-design" ||
    group === "website-design" ||
    group === "web"
  ) {
    return "web-design";
  }

  if (
    group === "growth-marketing" ||
    group === "digital-marketing" ||
    group === "marketing" ||
    group === "seo" ||
    group === "google-ads"
  ) {
    return "growth-marketing";
  }

  if (
    group === "branding" ||
    group === "brand" ||
    group === "logo-branding" ||
    group === "logo-and-branding"
  ) {
    return "branding";
  }

  return null;
}

function getGroupByServiceSlug(slug?: string): ServiceGroup | null {
  if (!slug) {
    return null;
  }

  if (WEB_DESIGN_SERVICE_OPTIONS.some((option) => option.slug === slug)) {
    return "web-design";
  }

  if (GROWTH_MARKETING_SERVICE_OPTIONS.some((option) => option.slug === slug)) {
    return "growth-marketing";
  }

  if (BRANDING_SERVICE_OPTIONS.some((option) => option.slug === slug)) {
    return "branding";
  }

  return null;
}

export function getServiceName(
  slug?: string,
  fallback = "General Enquiry"
): string {
  if (!slug) {
    return fallback;
  }

  return SERVICE_NAMES[slug] || fallback;
}

export function getServiceGroupFromSlug(slug?: string): ServiceGroup | null {
  if (!slug) {
    return null;
  }

  if (WEB_DESIGN_SERVICE_OPTIONS.some((option) => option.slug === slug)) {
    return "web-design";
  }

  if (
    GROWTH_MARKETING_SERVICE_OPTIONS.some((option) => option.slug === slug)
  ) {
    return "growth-marketing";
  }

  if (BRANDING_SERVICE_OPTIONS.some((option) => option.slug === slug)) {
    return "branding";
  }

  return null;
}
export function getServiceOptionsForContext(
  context: PopupLaunchContext
): ServiceOption[] {
  const directGroup = normalizeServiceGroup(context.serviceGroup);

  if (directGroup === "web-design") {
    return WEB_DESIGN_SERVICE_OPTIONS;
  }

  if (directGroup === "growth-marketing") {
    return GROWTH_MARKETING_SERVICE_OPTIONS;
  }

  if (directGroup === "branding") {
    return BRANDING_SERVICE_OPTIONS;
  }

  const detectedGroup = getGroupByServiceSlug(context.serviceSlug);

  if (detectedGroup === "web-design") {
    return WEB_DESIGN_SERVICE_OPTIONS;
  }

  if (detectedGroup === "growth-marketing") {
    return GROWTH_MARKETING_SERVICE_OPTIONS;
  }

  if (detectedGroup === "branding") {
    return BRANDING_SERVICE_OPTIONS;
  }

  if (context.formType === "seoAudit" || context.formType === "adsAudit") {
    return GROWTH_MARKETING_SERVICE_OPTIONS;
  }

  if (context.planName) {
    return WEB_DESIGN_SERVICE_OPTIONS;
  }

  return GENERIC_SERVICE_OPTIONS;
}

export function getInitialService(
  context: PopupLaunchContext
): ServiceOption | null {
  if (context.serviceSlug) {
    return {
      slug: context.serviceSlug,
      name: context.serviceName || getServiceName(context.serviceSlug),
    };
  }

  if (context.formType === "seoAudit") {
    return {
      slug: "seo-sydney",
      name: "SEO Audit",
    };
  }

  if (context.formType === "adsAudit") {
    return {
      slug: "google-ads",
      name: "Google Ads Audit",
    };
  }

  return null;
}

export function getServiceQuestions(
  serviceSlug: string,
  planName?: string
): ServiceQuestion[] {
  if (serviceSlug === "web-design" || serviceSlug === "web-design-plans") {
    if (planName === "Basic Package") {
      return basicPlanQuestions;
    }

    if (planName === "Advanced Package") {
      return advancedPlanQuestions;
    }

    if (planName === "Premium Package") {
      return premiumPlanQuestions;
    }
  }

  return SERVICE_QUESTIONS[serviceSlug] || defaultQuestions;
}