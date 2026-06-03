import Image from "next/image";
import { portfolioProjects } from "@/lib/constants";
import { generateMetadata } from "@/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateLocalBusinessSchema,
} from "@/lib/schemas";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import ServiceTrustStrip from "@/components/service-page/ServiceTrustStrip";
import ServiceStatsSection from "@/components/service-page/ServiceStatsSection";
import ServiceFeaturesSection from "@/components/service-page/ServiceFeaturesSection";
import ServiceProcessSection from "@/components/service-page/ServiceProcessSection";
import ServiceResultsSection from "@/components/service-page/ServiceResultsSection";
import ServiceTestimonialsSection from "@/components/service-page/ServiceTestimonialsSection";
import ServiceLeadPanel from "@/components/service-page/ServiceLeadPanel";
import ServiceInlineLeadForm from "@/components/service-page/ServiceInlineLeadForm";

export const metadata = generateMetadata({
  title: "WordPress Development Sydney | Custom WordPress Websites",
  description:
    "Professional WordPress development services in Sydney. Custom themes, plugins, and complete WooCommerce solutions. 13+ years experience with 200+ WordPress sites delivered.",
  keywords:
    "wordpress development sydney, custom wordpress sydney, wordpress developer, woocommerce sydney, wordpress website design, wordpress expert sydney",
  canonicalUrl:
    "https://www.sydneywebdesigner.com.au/services/wordpress-development",
  ogImage: "/images/og/services.svg",
});

const trustBadges = [
  {
    icon: "fa-trophy",
    text: "13+ Years Experience",
  },
  {
    icon: "fa-star",
    text: "50+ 5-Star Reviews",
  },
  {
    icon: "fa-check-circle",
    text: "Professional Service",
  },
  {
    icon: "fa-chart-bar",
    text: "Proven Results",
  },
];

const stats = [
  {
    value: "200+",
    label: "WordPress Sites",
  },
  {
    value: "98%",
    label: "Uptime",
  },
  {
    value: "50%",
    label: "Faster Loading",
  },
  {
    value: "13+",
    label: "Years Experience",
  },
];

const features = [
  {
    icon: "fa-palette",
    title: "Custom Themes",
    description: "Unique WordPress themes",
    points: ["Custom design", "Responsive", "Customization", "Optimized"],
  },
  {
    icon: "fa-plug",
    title: "Plugin Development",
    description: "Custom functionality",
    points: ["Custom plugins", "Integrations", "API connections", "Third-party"],
  },
  {
    icon: "fa-shopping-cart",
    title: "WooCommerce",
    description: "E-commerce solutions",
    points: [
      "Product catalogs",
      "Payment gateways",
      "Shipping",
      "Inventory",
    ],
  },
  {
    icon: "fa-bolt",
    title: "Performance",
    description: "Fast WordPress sites",
    points: ["Caching", "Image optimization", "Database", "CDN"],
  },
  {
    icon: "fa-lock",
    title: "Security",
    description: "Enterprise security",
    points: ["Security audits", "Malware protection", "SSL", "Backups"],
  },
  {
    icon: "fa-wrench",
    title: "Maintenance",
    description: "Ongoing support",
    points: [
      "Core updates",
      "Plugin updates",
      "Security monitoring",
      "Performance",
    ],
  },
];

const processSteps = [
  {
    number: "1",
    title: "Discovery",
    description: "Deep dive into your business, goals, and requirements",
  },
  {
    number: "2",
    title: "Strategy",
    description: "Develop custom strategy based on research and analysis",
  },
  {
    number: "3",
    title: "Planning",
    description: "Create detailed roadmap and project timeline",
  },
  {
    number: "4",
    title: "Execution",
    description: "Implement solution with attention to detail",
  },
  {
    number: "5",
    title: "Testing",
    description: "Thorough quality assurance and optimization",
  },
  {
    number: "6",
    title: "Launch & Support",
    description: "Deploy and provide ongoing support",
  },
];

const testimonials = [
  {
    text: "Professional, responsive, and delivered exactly what we needed. The results have been fantastic and we've seen significant improvements.",
    name: "Sydney Business Owner",
    detail: "Professional Services",
  },
  {
    text: "The team at Sydney Web Designer took the time to understand our business. Their expertise and transparent approach made the entire process smooth.",
    name: "Local Business",
    detail: "Parramatta, NSW",
  },
  {
    text: "Highly recommend Sydney Web Designer for their professionalism and quality of work. They exceeded our expectations in every way.",
    name: "Sydney Client",
    detail: "Service Provider",
  },
];

export default function WordPressDevelopmentPage() {
  const breadcrumbs = [
    {
      name: "Home",
      url: "https://www.sydneywebdesigner.com.au",
    },
    {
      name: "Services",
      url: "https://www.sydneywebdesigner.com.au/services",
    },
    {
      name: "WordPress Development",
      url: "https://www.sydneywebdesigner.com.au/services/wordpress-development",
    },
  ];

  const serviceData = {
    name: "WordPress Development",
    description:
      "Expert WordPress development services including custom themes, plugin development, WooCommerce integration, and complete WordPress solutions for Sydney businesses. Fast, secure, and optimized.",
    provider: "Sydney Web Designer",
  };

  /*
   * Uses real project records already stored in portfolioProjects.
   * No fake project content or duplicate hard-coded image paths.
   */
  const resultProjects = portfolioProjects
    .filter((project) => {
      const projectIdentifier = `${project.id} ${project.name}`.toLowerCase();

      const isAdl99Project =
        projectIdentifier.includes("adl99") ||
        projectIdentifier.includes("ald99") ||
        projectIdentifier.includes("adl 99") ||
        projectIdentifier.includes("ald 99");

      const hasPreviewImage = Boolean(project.images?.[0] || project.image);

      return hasPreviewImage && !isAdl99Project;
    })
    .slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema(serviceData.name, serviceData.description)
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />

      <ServiceHeroSection
        h1="WordPress Developer Sydney"
        badge={{
          icon: "fab fa-wordpress",
          text: "WordPress Specialists",
        }}
        heading="WordPress Development Sydney"
        description="Expert WordPress development for Sydney businesses. Custom themes, plugins, and complete solutions tailored to your needs."
        buttons={{
          primary: {
            text: "Start WordPress Project",
            dataPopup: "contact",
          },
          secondary: {
            text: "Our Process",
            href: "#process",
          },
        }}
      />

      <ServiceTrustStrip badges={trustBadges} />

      <ServiceStatsSection
        title={<>Why Choose WordPress Development <span>Sydney</span>?</>}
        stats={stats.map((stat) => ({ value: stat.value, text: stat.label }))}
      />

      <ServiceFeaturesSection
        title={<>Our WordPress Development Sydney <span>Services</span></>}
        description="Comprehensive solutions designed to help your business succeed"
        features={features.map((feature) => ({
          icon: `fas ${feature.icon}`,
          title: feature.title,
          description: feature.description,
          points: feature.points,
        }))}
      />

      <ServiceProcessSection
        title={<>Our Proven <span>Process</span></>}
        description="A systematic approach to deliver outstanding results"
        steps={processSteps.map((step) => ({
          number: step.number,
          title: step.title,
          description: step.description,
        }))}
      />

      <ServiceResultsSection
        kicker="Results"
        title={<>Real Results for Sydney <span>Businesses</span></>}
        projects={resultProjects.map((project) => ({
          name: project.name,
          industry: project.industry,
          description: project.description,
          image: project.images?.[0] || project.image,
          websiteUrl: project.websiteUrl,
        }))}
      />

      <ServiceTestimonialsSection
        title={<>What Our Clients <span>Say</span></>}
        testimonials={testimonials.map((testimonial) => ({
          text: testimonial.text,
          name: testimonial.name,
          detail: testimonial.detail,
        }))}
      />

      <ServiceLeadPanel
        title="Get Your Free Consultation"
        description="Tell us about your project and we'll provide expert advice and a custom quote"
      >
        <ServiceInlineLeadForm
          service="wordpress-development"
          buttonText="Start WordPress Project"
        />
      </ServiceLeadPanel>
    </>
  );
}
