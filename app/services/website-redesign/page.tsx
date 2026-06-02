import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema, generateLocalBusinessSchema } from "@/lib/schemas";
import CTASection from "@/components/CTASection";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import ServiceStatsSection from "@/components/service-page/ServiceStatsSection";
import ServiceFeaturesSection from "@/components/service-page/ServiceFeaturesSection";
import ServiceProcessSection from "@/components/service-page/ServiceProcessSection";
import ServicePortfolioSection from "@/components/service-page/ServicePortfolioSection";
import ServiceTestimonialsSection from "@/components/service-page/ServiceTestimonialsSection";
import ServiceFAQSection from "@/components/service-page/ServiceFAQSection";

export const metadata = generateMetadata({
  title: "Website Redesign Sydney | Modernize Your Outdated Website",
  description: "Professional website redesign services in Sydney. Transform your outdated website into a modern, high-performing asset. Average 185% traffic increase and 220% conversion boost.",
  keywords: "website redesign sydney, website refresh sydney, website makeover, modernize website sydney, website update services, site redesign sydney",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/services/website-redesign",
  ogImage: "/images/og/services.svg",
});

export default function WebsiteRedesignPage() {
  const service = services.find((s) => s.slug === "website-redesign")!;

  const breadcrumbs = [
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Services", url: "https://www.sydneywebdesigner.com.au/services" },
    { name: "Website Redesign", url: "https://www.sydneywebdesigner.com.au/services/website-redesign" }
  ];
  const webProjects = portfolioProjects.filter((p) => p.services.includes("Web Design"));
  const webReviews = googleReviews.slice(3, 6);

  const stats = [
    { label: "Websites Redesigned", number: "100+" },
    { label: "Avg. Traffic Increase", number: "185%" },
    { label: "Avg. Conversion Boost", number: "220%" },
    { label: "Client Satisfaction", number: "97%" },
  ];

  const features = [
    {
      title: "Modern Design",
      description: "Fresh, contemporary design that reflects current trends and best practices.",
      icon: "fas fa-sparkles",
    },
    {
      title: "Improved UX",
      description: "Enhanced user experience with intuitive navigation and clear calls-to-action.",
      icon: "fas fa-bullseye",
    },
    {
      title: "Mobile Responsive",
      description: "Full responsive design optimized for all devices and screen sizes.",
      icon: "fas fa-mobile-alt",
    },
    {
      title: "Faster Loading",
      description: "Performance optimization for faster page loads and better user engagement.",
      icon: "fas fa-bolt",
    },
    {
      title: "SEO Enhanced",
      description: "Updated technical SEO and on-page optimization for better rankings.",
      icon: "fas fa-search",
    },
    {
      title: "Content Migration",
      description: "Seamless migration of existing content with improvements and optimization.",
      icon: "fas fa-clipboard-list",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Audit & Analysis",
      description: "Comprehensive review of current site performance, design, and user experience.",
    },
    {
      step: 2,
      title: "Strategy & Design",
      description: "Develop redesign strategy and create modern mockups aligned with your goals.",
    },
    {
      step: 3,
      title: "Build & Migrate",
      description: "Develop new site and migrate content while preserving SEO value.",
    },
    {
      step: 4,
      title: "Launch & Monitor",
      description: "Deploy redesigned website and monitor performance improvements.",
    },
  ];

  const faqs = [
    {
      question: "How do I know if my website needs a redesign?",
      answer: "Signs include outdated design (3+ years old), not mobile-friendly, slow loading, high bounce rates, low conversions, difficult to update, or negative customer feedback about usability. If your website doesn't represent your brand well, it&apos;s time for a redesign.",
    },
    {
      question: "Will I lose my Google rankings during redesign?",
      answer: "Not if done correctly! We implement proper redirects, preserve URL structures where possible, and follow SEO best practices during migration. Many clients actually see improved rankings due to better technical SEO and user experience.",
    },
    {
      question: "Can I keep my existing domain and content?",
      answer: "Absolutely! We redesign on your existing domain and migrate all your content. We can also improve and reorganize content for better clarity and SEO performance while maintaining your brand voice and key messages.",
    },
    {
      question: "How long does a website redesign take?",
      answer: "Most redesigns take 6-10 weeks depending on site size and complexity. This includes planning, design, development, content migration, testing, and launch. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What happens to my old website during the redesign?",
      answer: "Your current website stays live and functional throughout the entire redesign process. We build the new site in a development environment and only switch over once everything is tested and approved.",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(service.name, service.heroDescription)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }} />

      <Breadcrumbs items={breadcrumbs} />

      <ServiceHeroSection
        h1="Website Redesign Services"
        badge={{ icon: `fas ${service.icon}`, text: service.name }}
        heading="Transform Your Outdated Website Into a Modern Digital Asset"
        description="Modernize your website with fresh design, improved functionality, and better performance. Turn your aging site into a high-converting marketing tool."
        buttons={{
          primary: { text: "Start Your Redesign", dataPopup: "contact" },
          secondary: { text: "View Redesign Projects", href: "/portfolio" },
        }}
      />

      <ServiceStatsSection stats={stats.map((stat) => ({ value: stat.number, text: stat.label }))} />

      <ServiceFeaturesSection
        title={<>What&apos;s Included in Website <span>Redesign</span></>}
        description="Complete transformation that addresses design, functionality, and performance."
        features={features}
      />

      <ServiceProcessSection
        title={<>Our Redesign <span>Process</span></>}
        description="Strategic approach to modernizing your website without disrupting your business."
        columns={4}
        steps={process.map((step) => ({ number: String(step.step), title: step.title, description: step.description }))}
      />

      <ServicePortfolioSection
        title={<>Website Redesign <span>Portfolio</span></>}
        description="Before and after transformations that drive real business results."
        projects={webProjects.slice(0, 6)}
        buttonText="View All Projects"
      />

      <ServiceTestimonialsSection
        title={<>What Our Clients <span>Say</span></>}
        description="Businesses thriving after their website redesign."
        testimonials={webReviews.map((review) => ({ text: review.text, name: review.name, detail: review.company, rating: review.rating }))}
      />

      <div className="service-inline-action service-inline-action--paper">
        <Link href="/testimonials" className="paper-button paper-button--rust">Read More Reviews<i className="fas fa-arrow-right" aria-hidden="true" /></Link>
      </div>

      <ServiceFAQSection title={<>Frequently Asked <span>Questions</span></>} description="Common questions about website redesign services." faqs={faqs} />

      <CTASection
        title="Ready to Modernize Your Website?"
        description="Transform your outdated website into a modern, high-performing digital asset that drives results."
        primaryButtonText="Start Your Redesign"
        primaryButtonAction="contact"
      />
    </>
  );
}
