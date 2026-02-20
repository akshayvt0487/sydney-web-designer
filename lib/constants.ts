// Portfolio Projects
export interface PortfolioProject {
  id: string;
  name: string;
  industry: string;
  description: string;
  services: string[];
  image: string;
  images?: string[]; // Multiple images for carousel
  websiteUrl?: string;
  caseStudyUrl?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  // New Portfolio Items - 2026 (Ordered as requested)
  {
    id: "adl99",
    name: "ADL99 - Advance Defense Layer",
    industry: "Cybersecurity",
    description: "Cybersecurity firm providing defensive technology solutions to protect organizations against digital threats and attacks",
    services: ["Web Design", "Branding"],
    image: "/images/Sydney Web Designer Portfolio images/ADL99.png",
    websiteUrl: "https://adl99.fractional-cmo.com.au",
  },
  {
    id: "demore-lending",
    name: "Demore Lending",
    industry: "Finance",
    description: "Professional lending services providing comprehensive mortgage and finance solutions",
    services: ["Web Design", "Branding"],
    image: "/images/Sydney Web Designer Portfolio images/Demore-Lending.png",
    websiteUrl: "https://www.demorelending.com",
  },
  {
    id: "headway-abi-australia",
    name: "Headway ABI Australia",
    industry: "Disability Services",
    description: "Not-for-profit NDIS-registered organization delivering personalized support for individuals with acquired brain injuries",
    services: ["Web Design", "Branding"],
    image: "/images/Sydney Web Designer Portfolio images/Headway-ABI-Australia.png",
    websiteUrl: "https://headwayabiaustralia.org",
  },
  {
    id: "vigilant-co-security",
    name: "Vigilant & Co Security Services",
    industry: "Security Services",
    description: "Comprehensive security solutions including corporate protection, event security, and 24/7 monitoring across Australia",
    services: ["Web Design", "Branding"],
    image: "/images/Sydney Web Designer Portfolio images/Vigilant-Co-Security-Services.png",
    websiteUrl: "https://vigilantsecurityservices.com.au",
  },
  {
    id: "cyberguard",
    name: "CyberGuard",
    industry: "Cybersecurity",
    description: "Modern cybersecurity services with sleek professional design and comprehensive digital protection",
    services: ["Web Design", "Branding"],
    image: "/images/Sydney Web Designer Portfolio images/CyberGuard.png",
  },
  {
    id: "removalists-sydney",
    name: "Sydney Removalist",
    industry: "Moving & Relocation",
    description: "Trusted moving company offering residential, commercial relocations, and storage with 15+ years experience",
    services: ["Web Design", "SEO"],
    image: "/images/Sydney Web Designer Portfolio images/Removalists-Sydney.png",
    websiteUrl: "https://www.sydneyremovalist.com.au",
  },
  {
    id: "actuate-property",
    name: "Actuate Property",
    industry: "Property Buyers Agent",
    description: "Modern website design with clean branding for Sydney's trusted property buyers agent",
    services: ["Web Design", "Branding"],
    image: "/images/portfolio-carousel/actuate-1.png",
    images: [
      "/images/portfolio-carousel/actuate-1.png",
      "/images/portfolio-carousel/actuate-2.jpg",
      "/images/portfolio-carousel/actuate-3.jpg",
      "/images/portfolio-carousel/actuate-4.jpg",
    ],
    websiteUrl: "https://actuateproperty.com.au",
  },
  {
    id: "aj-engineering",
    name: "AJ Engineering Consultancy",
    industry: "Structural Engineering",
    description: "Structural, civil, and pre-purchase building inspection services specializing in residential and commercial assessments",
    services: ["Web Design", "Branding"],
    image: "/images/Sydney Web Designer Portfolio images/AJ-Engineering-Consultancy.png",
    websiteUrl: "https://www.ajengcon.com.au",
  },
  {
    id: "care-remedy-disability",
    name: "Care Remedy Disability & Aged Care",
    industry: "NDIS & Aged Care",
    description: "Personalized disability and aged care services including in-home support and daily assistance in Sydney",
    services: ["Web Design", "Branding"],
    image: "/images/Sydney Web Designer Portfolio images/Care-Remedy-Disability.png",
    websiteUrl: "https://www.careremedy.com.au",
  },
  {
    id: "zee-care",
    name: "Zee Care Disability & Aged Care",
    industry: "NDIS Provider",
    description: "Personalized support services including in-home care, disability accommodation, and respite care in Western Sydney",
    services: ["Web Design"],
    image: "/images/Sydney Web Designer Portfolio images/Zee-Care.png",
    websiteUrl: "https://zeecare.com.au",
  },
  {
    id: "sync-support-care",
    name: "Sync Support Care",
    industry: "NDIS Support Services",
    description: "Personalized support services for individuals with disabilities including daily activities and community participation",
    services: ["Web Design", "Branding"],
    image: "/images/Sydney Web Designer Portfolio images/Sync-Support-Care.png",
    websiteUrl: "https://syncsupportcare.com.au",
  },
  {
    id: "gps-vehicle-inspections",
    name: "GPS Vehicle Inspections",
    industry: "Automotive Inspection",
    description: "Mobile pre-purchase vehicle inspection services with experienced mechanics delivering comprehensive reports within 24 hours",
    services: ["Branding", "Web Design", "SEO", "Google Ads", "Social Media"],
    image: "/images/Sydney Web Designer Portfolio images/GPS-Vehicle-Inspections.png",
    websiteUrl: "https://www.gpsvehicleinspections.com.au",
  },
  {
    id: "rmb-construction",
    name: "RMB Construction Pty Ltd",
    industry: "Custom Home Construction",
    description: "Architectural design and construction company specializing in custom homes, duplexes, and knockdown-rebuild projects",
    services: ["Web Design", "Branding"],
    image: "/images/Sydney Web Designer Portfolio images/RMB-Construction.png",
    websiteUrl: "http://www.rmbconstructionsydney.com.au",
  },
  {
    id: "ui-disability-services",
    name: "U & I Disability Services",
    industry: "Disability & Aged Care",
    description: "Specialized support through NDIS services, aged care, and disability accommodation focusing on independence",
    services: ["Web Design", "Branding"],
    image: "/images/Sydney Web Designer Portfolio images/U-I-Disability-Services.png",
    websiteUrl: "https://unidisability.com.au",
  },
  {
    id: "mighty-steps",
    name: "Mighty Steps",
    industry: "Behavioral Therapy",
    description: "Evidence-based therapy including ABA, autism therapy, and early intervention for children ages 2-9",
    services: ["Web Design", "Branding"],
    image: "/images/Sydney Web Designer Portfolio images/Mighty-Steps.png",
    websiteUrl: "https://therapy.mightysteps.com.au",
  },
  {
    id: "best-masonry",
    name: "Best Masonry",
    industry: "Bricklaying & Masonry",
    description: "Professional bricklaying services for residential and commercial projects including retaining walls",
    services: ["Web Design"],
    image: "/images/Sydney Web Designer Portfolio images/Best-Masonry.png",
    websiteUrl: "https://bestmasonry.com.au",
  },
  {
    id: "perth-carpet-cleaners",
    name: "Perth Carpet Steam Cleaners",
    industry: "Cleaning Services",
    description: "Comprehensive cleaning solutions including carpet steam cleaning, upholstery restoration, and water damage services",
    services: ["Web Design", "SEO"],
    image: "/images/Sydney Web Designer Portfolio images/Perth-Professional-Carpet-Steam-Cleaners.png",
    websiteUrl: "https://carpetscleaningperth.com.au",
  },
  {
    id: "polar-pest",
    name: "Polar Pest",
    industry: "Pest Control",
    description: "Comprehensive termite inspection, treatment, and prevention services backed by 15+ years of experience",
    services: ["Web Design"],
    image: "/images/Sydney Web Designer Portfolio images/Polar-Pest.png",
    websiteUrl: "https://termiteinspectionsydney.com",
  },

  // Previous Portfolio Items
  {
    id: "satisfinance",
    name: "Satisfinance",
    industry: "Financial Services",
    description: "Professional branding and website for financial services provider",
    services: ["Branding", "Web Design"],
    image: "http://www.leadweb.com.au/wp-content/uploads/2023/03/Satisfinance.png",
    websiteUrl: "https://satisfinance.com.au",
  },
  {
    id: "rmb-constructions-old",
    name: "RMB Constructions",
    industry: "Construction",
    description: "Professional construction company website with project showcase",
    services: ["Web Design"],
    image: "/images/portfolio-carousel/rmb-1.png",
    images: ["/images/portfolio-carousel/rmb-1.png"],
    websiteUrl: "https://builderssydney.com.au",
  },
  {
    id: "advanced-tree-lopping",
    name: "Advanced Tree Lopping",
    industry: "Tree Services",
    description: "Complete branding and web design for tree care specialists",
    services: ["Branding", "Web Design"],
    image: "/images/portfolio-carousel/tree-1.png",
    images: [
      "/images/portfolio-carousel/tree-1.png",
      "/images/portfolio-carousel/tree-2.png",
    ],
    websiteUrl: "https://advancedtreelopping.com.au",
  },
  {
    id: "osan-ability",
    name: "OSAN Ability",
    industry: "NDIS Provider",
    description: "Full-service digital marketing including branding, website, SEO, and advertising",
    services: ["Branding", "Web Design", "Google Ads", "SEO", "Social Media"],
    image: "/images/portfolio-carousel/osan-1.jpg",
    images: [
      "/images/portfolio-carousel/osan-1.jpg",
      "/images/portfolio-carousel/osan-2.jpg",
    ],
    websiteUrl: "https://osanability.com.au",
  },
  {
    id: "tente",
    name: "Tente",
    industry: "Industrial Equipment",
    description: "Industrial equipment website with SEO optimization for better visibility",
    services: ["Web Design", "SEO"],
    image: "/images/portfolio-carousel/tente-1.jpg",
    images: ["/images/portfolio-carousel/tente-1.jpg"],
    websiteUrl: "https://tente.com.au",
  },
  {
    id: "castor-master",
    name: "Castor Master",
    industry: "Industrial Equipment",
    description: "Complete digital solution with branding, website, SEO, and Google Ads",
    services: ["Branding", "Web Design", "SEO", "Google Ads"],
    image: "/images/portfolio-carousel/castor-1.png",
    images: ["/images/portfolio-carousel/castor-1.png"],
    websiteUrl: "https://castormaster.com.au",
  },
  {
    id: "two-brothers-removalist",
    name: "Two Brothers Removalist",
    industry: "Removalist Services",
    description: "SEO-optimized website driving leads for Sydney removalist services",
    services: ["Web Design", "SEO"],
    image: "/images/portfolio-carousel/brothers-1.jpg",
    images: [
      "/images/portfolio-carousel/brothers-1.jpg",
      "/images/portfolio-carousel/brothers-2.png",
    ],
    websiteUrl: "https://2brothersremovalist.com.au",
    caseStudyUrl: "/portfolio/two-brothers",
  },
  {
    id: "deepslice-pizza",
    name: "Deepslice Pizza",
    industry: "Hospitality",
    description: "Bold branding and web design for authentic pizza restaurant",
    services: ["Branding", "Web Design"],
    image: "/images/portfolio-carousel/deepslice-1.png",
    images: ["/images/portfolio-carousel/deepslice-1.png"],
    websiteUrl: "https://deepslicepizza.com.au",
  },
];

// Services
export interface Service {
  id: string;
  name: string;
  category: "web-design" | "branding" | "digital-marketing";
  slug: string;
  icon: string;
  shortDescription: string;
  heroDescription: string;
}

export const services: Service[] = [
  // Web Design Services
  {
    id: "custom-web-design",
    name: "Custom Web Design",
    category: "web-design",
    slug: "custom-web-design",
    icon: 'fa-palette',
    shortDescription: "Bespoke website designs tailored to your brand and business goals.",
    heroDescription: "Create a stunning, unique website that captures your brand essence and converts visitors into customers.",
  },
  {
    id: "wordpress-development",
    name: "WordPress Development",
    category: "web-design",
    slug: "wordpress-development",
    icon: 'fa-wordpress',
    shortDescription: "Professional WordPress websites with custom functionality and easy content management.",
    heroDescription: "Build powerful, scalable WordPress websites with custom themes and plugins designed for your specific needs.",
  },
  {
    id: "ecommerce-websites",
    name: "E-commerce Websites",
    category: "web-design",
    slug: "ecommerce-websites",
    icon: 'fa-shopping-cart',
    shortDescription: "Online stores designed to sell more products and grow your revenue.",
    heroDescription: "Launch a high-converting online store with seamless checkout, inventory management, and payment integration.",
  },
  {
    id: "responsive-design",
    name: "Responsive Design",
    category: "web-design",
    slug: "responsive-design",
    icon: 'fa-mobile-alt',
    shortDescription: "Mobile-friendly websites that look perfect on all devices and screen sizes.",
    heroDescription: "Ensure your website delivers a flawless experience across smartphones, tablets, and desktops.",
  },
  {
    id: "website-redesign",
    name: "Website Redesign",
    category: "web-design",
    slug: "website-redesign",
    icon: 'fa-sync',
    shortDescription: "Modernize your outdated website with fresh design and improved functionality.",
    heroDescription: "Transform your aging website into a modern, high-performing digital asset that drives results.",
  },
  {
    id: "landing-pages",
    name: "Landing Pages",
    category: "web-design",
    slug: "landing-pages",
    icon: 'fa-file-alt',
    shortDescription: "High-converting landing pages optimized for lead generation and sales.",
    heroDescription: "Design focused landing pages that turn traffic into leads with compelling copy and strategic CTAs.",
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    category: "web-design",
    slug: "ui-ux-design",
    icon: 'fa-wand-magic-sparkles',
    shortDescription: "User-centered design that creates intuitive and engaging digital experiences.",
    heroDescription: "Craft beautiful, user-friendly interfaces backed by research and best practices in user experience.",
  },

  // Branding Services
  {
    id: "logo-design",
    name: "Logo Design",
    category: "branding",
    slug: "logo-design",
    icon: 'fa-pen-nib',
    shortDescription: "Professional logo design that makes your brand instantly recognizable.",
    heroDescription: "Create a memorable visual identity with a custom logo that captures your brand's personality.",
  },
  {
    id: "brand-identity",
    name: "Brand Identity",
    category: "branding",
    slug: "brand-identity",
    icon: 'fa-fingerprint',
    shortDescription: "Complete brand identity systems including colors, typography, and visual elements.",
    heroDescription: "Develop a cohesive brand identity that sets you apart and resonates with your target audience.",
  },
  {
    id: "brand-strategy",
    name: "Brand Strategy",
    category: "branding",
    slug: "brand-strategy",
    icon: 'fa-lightbulb',
    shortDescription: "Strategic brand positioning and messaging that connects with your customers.",
    heroDescription: "Define your brand's unique value proposition and create a roadmap for consistent growth.",
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    category: "branding",
    slug: "graphic-design",
    icon: 'fa-image',
    shortDescription: "Eye-catching graphics for digital and print marketing materials.",
    heroDescription: "Design compelling visual content that communicates your message and engages your audience.",
  },
  {
    id: "business-cards",
    name: "Business Cards",
    category: "branding",
    slug: "business-cards",
    icon: 'fa-address-card',
    shortDescription: "Professional business cards that make a lasting first impression.",
    heroDescription: "Create memorable business cards that reflect your brand and help you network effectively.",
  },
  {
    id: "marketing-materials",
    name: "Marketing Materials",
    category: "branding",
    slug: "marketing-materials",
    icon: 'fa-newspaper',
    shortDescription: "Brochures, flyers, and promotional materials that drive results.",
    heroDescription: "Design persuasive marketing collateral that showcases your offerings and generates interest.",
  },

  // Digital Marketing Services
  {
    id: "seo-services",
    name: "SEO Services",
    category: "digital-marketing",
    slug: "seo-sydney",
    icon: 'fa-search',
    shortDescription: "Search engine optimization to rank higher and attract more organic traffic.",
    heroDescription: "Dominate search results and drive qualified traffic with comprehensive SEO strategies.",
  },
  {
    id: "google-ads",
    name: "Google Ads Management",
    category: "digital-marketing",
    slug: "google-ads",
    icon: 'fa-bullhorn',
    shortDescription: "PPC campaigns that deliver quality leads and maximize your ROI.",
    heroDescription: "Generate instant traffic and leads with expertly managed Google Ads campaigns.",
  },
  {
    id: "social-media-marketing",
    name: "Social Media Marketing",
    category: "digital-marketing",
    slug: "social-media-marketing",
    icon: 'fa-hashtag',
    shortDescription: "Engage your audience and grow your brand on social media platforms.",
    heroDescription: "Build a strong social media presence and connect with customers where they spend time.",
  },
  {
    id: "content-marketing",
    name: "Content Marketing",
    category: "digital-marketing",
    slug: "content-marketing",
    icon: 'fa-pen-fancy',
    shortDescription: "Strategic content creation that attracts, engages, and converts your audience.",
    heroDescription: "Create valuable content that establishes authority and drives customer action.",
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    category: "digital-marketing",
    slug: "email-marketing",
    icon: 'fa-envelope',
    shortDescription: "Targeted email campaigns that nurture leads and increase sales.",
    heroDescription: "Build customer relationships and drive repeat business with effective email marketing.",
  },
  {
    id: "local-seo",
    name: "Local SEO",
    category: "digital-marketing",
    slug: "local-seo",
    icon: 'fa-map-marker-alt',
    shortDescription: "Optimize your online presence to attract local customers and dominate local search.",
    heroDescription: "Get found by customers in your area with targeted local SEO strategies.",
  },
  {
    id: "conversion-optimization",
    name: "Conversion Optimization",
    category: "digital-marketing",
    slug: "conversion-optimization",
    icon: 'fa-chart-line',
    shortDescription: "Improve your website's ability to convert visitors into customers.",
    heroDescription: "Maximize your marketing ROI by optimizing every step of your customer journey.",
  },
];

// Google Reviews
export interface Review {
  id: string;
  name: string;
  company?: string;
  rating: number;
  text: string;
  date: string;
}

export const googleReviews: Review[] = [
  {
    id: "1",
    name: "Michael Chen",
    company: "GPS Vehicle Inspections",
    rating: 5,
    text: "Sydney Web Designer completely transformed our online presence. The new website looks amazing and we've seen a 300% increase in inquiries. Basheer and his team are true professionals.",
    date: "2025-01-15",
  },
  {
    id: "2",
    name: "Sarah Thompson",
    company: "Actuate Property",
    rating: 5,
    text: "Outstanding service from start to finish. They created a beautiful brand identity and website that perfectly represents our business. Highly recommend!",
    date: "2025-01-10",
  },
  {
    id: "3",
    name: "David Martinez",
    company: "Two Brothers Removalist",
    rating: 5,
    text: "The SEO results have been incredible. We're now ranking #1 for multiple keywords and getting more calls than ever before. Best investment we've made!",
    date: "2024-12-28",
  },
  {
    id: "4",
    name: "Emma Wilson",
    company: "The Tspoon Cafe",
    rating: 5,
    text: "Basheer designed our logo and complete brand identity. We get compliments on it daily. The branding has really helped us stand out in a competitive market.",
    date: "2024-12-20",
  },
  {
    id: "5",
    name: "James Patterson",
    company: "RMB Constructions",
    rating: 5,
    text: "Professional, responsive, and delivered exactly what we needed. Our new website has helped us win several major contracts. Worth every penny!",
    date: "2024-12-15",
  },
  {
    id: "6",
    name: "Lisa Kumar",
    company: "OSAN Ability",
    rating: 5,
    text: "The team at Sydney Web Designer handles all our digital marketing. From Google Ads to social media, everything is managed perfectly. Our client base has grown significantly.",
    date: "2024-12-10",
  },
  {
    id: "7",
    name: "Robert Chang",
    company: "Castor Master",
    rating: 5,
    text: "We've worked with several web design companies, but Sydney Web Designer is by far the best. Great communication, creative solutions, and excellent results.",
    date: "2024-12-05",
  },
  {
    id: "8",
    name: "Amanda Foster",
    company: "Advanced Tree Lopping",
    rating: 5,
    text: "Basheer created our website and has been managing our SEO for over a year. We consistently get leads from Google and the website looks fantastic.",
    date: "2024-11-30",
  },
  {
    id: "9",
    name: "Tom Anderson",
    company: "Jabbs Excavations",
    rating: 5,
    text: "Simple process, great communication, and a website that actually brings in business. Couldn't ask for more!",
    date: "2024-11-25",
  },
  {
    id: "10",
    name: "Rachel Green",
    company: "Satisfinance",
    rating: 5,
    text: "The branding and website Sydney Web Designer created for us is exactly what we envisioned. They took the time to understand our business and delivered beyond expectations.",
    date: "2024-11-20",
  },
  {
    id: "11",
    name: "Daniel Park",
    company: "Tente",
    rating: 5,
    text: "Our website traffic has tripled since working with Sydney Web Designer. The SEO work they've done is exceptional. Very happy with the ongoing support as well.",
    date: "2024-11-15",
  },
  {
    id: "12",
    name: "Sophie Miller",
    company: "Deepslice Pizza",
    rating: 5,
    text: "Love our new brand! The logo is perfect and the website makes ordering so easy for our customers. Great work by the Sydney Web Designer team!",
    date: "2024-11-10",
  },
];

// Contact Information
export const contactInfo = {
  companyName: "Sydney Web Designer",
  tradingAs: "Sydney Web Designer",
  email: "hello@dsigns.com.au",
  phone: "02 9191 8049",
  phoneLink: "+61291918049",
  address: {
    suite: "Suite 611, Level 6",
    street: "150 George Street",
    suburb: "Parramatta",
    state: "NSW",
    postcode: "2150",
    country: "Australia",
  },
  social: {
    facebook: "https://facebook.com/dsignsaustralia",
    instagram: "https://instagram.com/dsignsaustralia",
    linkedin: "https://linkedin.com/company/dsigns-australia",
  },
  geo: {
    latitude: -33.8150,
    longitude: 151.0028,
  },
};

// Trust Badges
export const trustBadges = [
  {
    id: "experience",
    icon: "fa-star",
    title: "13+ Years",
    subtitle: "Experience",
  },
  {
    id: "reviews",
    icon: "fa-comments",
    title: "4.9/5 Rating",
    subtitle: "50+ Reviews",
  },
  {
    id: "professional",
    icon: "fa-trophy",
    title: "Professional",
    subtitle: "Certified Team",
  },
  {
    id: "results",
    icon: "fa-chart-line",
    title: "Proven",
    subtitle: "Results",
  },
];
