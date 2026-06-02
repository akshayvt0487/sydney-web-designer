import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema, generateLocalBusinessSchema, generateFAQSchema } from "@/lib/schemas";
import CTASection from "@/components/CTASection";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import ServiceStatsSection from "@/components/service-page/ServiceStatsSection";
import ServiceFeaturesSection from "@/components/service-page/ServiceFeaturesSection";
import ServiceProcessSection from "@/components/service-page/ServiceProcessSection";
import ServiceResultsSection from "@/components/service-page/ServiceResultsSection";
import ServiceTestimonialsSection from "@/components/service-page/ServiceTestimonialsSection";
import ServiceFAQSection from "@/components/service-page/ServiceFAQSection";

export const metadata = generateMetadata({
  title: "SEO Services Sydney | Professional Search Engine Optimization",
  description: "Expert SEO services in Sydney. Dominate search results with comprehensive strategies. Average 215% traffic increase, 1,500+ keywords ranked, 94% client retention. Free SEO audit!",
  keywords: "seo services sydney, search engine optimization sydney, seo company sydney, seo expert sydney, local seo sydney, seo consultant, organic seo sydney",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/services/seo-sydney",
  ogImage: "/images/og/services.svg",
});

export default function SEOServicesPage() {
  const service = services.find((s) => s.slug === "seo-sydney")!;

  const breadcrumbs = [
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Services", url: "https://www.sydneywebdesigner.com.au/services" },
    { name: "SEO Services", url: "https://www.sydneywebdesigner.com.au/services/seo-sydney" }
  ];
  const seoProjects = portfolioProjects.filter((p) => p.services.includes("SEO"));
  const seoReviews = googleReviews.slice(0, 3);

  const stats = [
    { label: "Avg. Traffic Increase", number: "215%" },
    { label: "Keywords Ranked", number: "1,500+" },
    { label: "SEO Projects", number: "80+" },
    { label: "Client Retention", number: "94%" },
  ];

  const features = [
    {
      title: "Technical SEO",
      description: "Optimize your website's technical foundation for better crawling and indexing.",
      icon: "fas fa-cog",
    },
    {
      title: "Keyword Research",
      description: "Target the right keywords that your customers are actually searching for.",
      icon: "fas fa-search",
    },
    {
      title: "On-Page SEO",
      description: "Optimize every page with strategic content, meta tags, and internal linking.",
      icon: "fas fa-file-alt",
    },
    {
      title: "Link Building",
      description: "Build high-quality backlinks that boost your domain authority and rankings.",
      icon: "fas fa-link",
    },
    {
      title: "Local SEO",
      description: "Dominate local search results and Google Maps for your service area.",
      icon: "fas fa-map-marker-alt",
    },
    {
      title: "SEO Reporting",
      description: "Track your rankings, traffic, and ROI with detailed monthly reports.",
      icon: "fas fa-chart-bar",
    },
  ];

  const process = [
    {
      step: 1,
      title: "SEO Audit",
      description: "Comprehensive analysis of your website's current SEO performance and opportunities.",
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "Custom SEO roadmap aligned with your business goals and target audience.",
    },
    {
      step: 3,
      title: "Implementation",
      description: "Execute on-page, technical, and off-page SEO improvements systematically.",
    },
    {
      step: 4,
      title: "Monitoring & Optimization",
      description: "Continuous tracking, testing, and refinement to maximize results.",
    },
  ];

  const faqs = [
    {
      question: "How long does SEO take to show results?",
      answer: "Most clients see initial improvements within 3-4 months, with significant results typically appearing after 6-12 months. SEO is a long-term investment that builds momentum over time.",
    },
    {
      question: "What's included in your SEO services?",
      answer: "Our comprehensive SEO includes technical optimization, keyword research, on-page SEO, content strategy, link building, local SEO (if applicable), and detailed monthly reporting.",
    },
    {
      question: "Do you guarantee #1 rankings?",
      answer: "No reputable SEO company can guarantee specific rankings as search algorithms constantly evolve. However, we focus on driving qualified traffic and measurable business results.",
    },
    {
      question: "What's the difference between SEO and Google Ads?",
      answer: "SEO is organic (free) traffic that builds over time, while Google Ads is paid traffic that starts immediately. We recommend both for maximum visibility and best results.",
    },
    {
      question: "Will SEO work for my industry?",
      answer: "Yes! We've successfully delivered SEO results across diverse industries including property, construction, hospitality, healthcare, retail, and professional services.",
    },
  ];

  const relatedServices = [
    {
      title: "Local SEO",
      description: "Dominate local search results and Google Maps for Sydney-based searches.",
      href: "/services/local-seo",
      icon: "fas fa-map-marker-alt"
    },
    {
      title: "Content Marketing",
      description: "Strategic content that attracts, engages, and converts your target audience.",
      href: "/services/content-marketing",
      icon: "fas fa-pen-nib"
    },
    {
      title: "Link Building",
      description: "High-quality backlinks that boost your domain authority and rankings.",
      href: "/services/link-building",
      icon: "fas fa-link"
    }
  ];

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
            generateServiceSchema(service.name, service.heroDescription)
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <ServiceHeroSection
        h1="SEO Sydney"
        badge={{
          icon: `fas ${service.icon}`,
          text: service.name,
        }}
        heading="SEO Services That Drive Real Results in Sydney"
        description="Dominate search results and drive qualified traffic with comprehensive SEO strategies. Get found by customers actively searching for your products and services."
        buttons={{
          primary: {
            text: "Get Free SEO Audit",
            dataPopup: "seoAudit",
          },
          secondary: {
            text: "View SEO Case Studies",
            href: "/portfolio",
          },
        }}
      />

      <ServiceStatsSection
        stats={stats.map((stat) => ({ value: stat.number, text: stat.label }))}
      />

      <ServiceFeaturesSection
        title={<>Comprehensive SEO <span>Services</span></>}
        description="Every aspect of SEO covered to maximize your online visibility and organic growth."
        features={features.map((feature) => ({
          icon: feature.icon,
          title: feature.title,
          description: feature.description,
        }))}
      />

      <ServiceProcessSection
        title={<>Our SEO <span>Process</span></>}
        description="A proven methodology that delivers consistent, measurable results."
        columns={4}
        steps={process.map((step) => ({
          number: String(step.step),
          title: step.title,
          description: step.description,
        }))}
      />

      {seoProjects.length > 0 && (
        <>
          <ServiceResultsSection
            title={<>SEO Success <span>Stories</span></>}
            projects={seoProjects.slice(0, 6).map((project) => ({
              name: project.name,
              industry: project.industry,
              description: project.description,
              image: project.images?.[0] || project.image,
              websiteUrl: project.websiteUrl,
            }))}
          />

          <div className="seo-section-action">
            <Link href="/portfolio" className="paper-button paper-button--rust">
              View All Projects
            </Link>
          </div>
        </>
      )}

      <ServiceTestimonialsSection
        title={<>What Our Clients <span>Say</span></>}
        description="Hear from businesses that have transformed their online presence with our SEO services."
        testimonials={seoReviews.map((review) => ({
          text: review.text,
          name: review.name,
          detail: review.company,
          rating: review.rating,
        }))}
      />

      <div className="seo-section-action">
        <Link href="/testimonials" className="paper-button paper-button--rust">
          Read More Reviews
        </Link>
      </div>

      <ServiceFAQSection
        title={<>Frequently Asked <span>Questions</span></>}
        faqs={faqs}
      />

      <RelatedServices services={relatedServices} />

      <CTASection
        title="Ready to Grow Your Organic Traffic?"
        description="Get a free SEO audit and discover exactly how we can improve your rankings, traffic, and revenue."
        primaryButtonText="Get Free SEO Audit"
        primaryButtonAction="seoAudit"
      />
    </>
  );
}
