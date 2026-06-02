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
  title: "Landing Page Design Sydney | High-Converting Landing Pages",
  description: "Professional landing page design in Sydney. Create conversion-focused pages that turn traffic into leads. Average 12.5% conversion rate with strategic CTAs and compelling copy.",
  keywords: "landing page design sydney, high converting landing pages, landing page development, sales page design sydney, lead generation pages, conversion landing pages sydney",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/services/landing-pages",
  ogImage: "/images/og/services.svg",
});

export default function LandingPagesPage() {
  const service = services.find((s) => s.slug === "landing-pages")!;

  const breadcrumbs = [
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Services", url: "https://www.sydneywebdesigner.com.au/services" },
    { name: "Landing Pages", url: "https://www.sydneywebdesigner.com.au/services/landing-pages" }
  ];
  const webProjects = portfolioProjects.filter((p) => p.services.includes("Web Design"));
  const webReviews = googleReviews.slice(6, 9);

  const stats = [
    { label: "Landing Pages Built", number: "150+" },
    { label: "Avg. Conversion Rate", number: "12.5%" },
    { label: "Avg. Lead Increase", number: "285%" },
    { label: "A/B Tests Conducted", number: "500+" },
  ];

  const features = [
    {
      title: "Conversion Focused",
      description: "Strategic design elements that guide visitors toward taking action and converting.",
      icon: "fas fa-bullseye",
    },
    {
      title: "Clear Messaging",
      description: "Compelling headlines and copy that communicate value propositions instantly.",
      icon: "fas fa-comment-dots",
    },
    {
      title: "Strong CTAs",
      description: "Prominent, action-oriented calls-to-action that drive clicks and submissions.",
      icon: "fas fa-hand-pointer",
    },
    {
      title: "Fast Loading",
      description: "Optimized for speed to reduce bounce rates and maximize conversions.",
      icon: "fas fa-bolt",
    },
    {
      title: "Mobile Optimized",
      description: "Perfect display and functionality on all mobile devices for maximum reach.",
      icon: "fas fa-mobile-alt",
    },
    {
      title: "A/B Testing Ready",
      description: "Built for easy testing and optimization to continually improve conversion rates.",
      icon: "fas fa-chart-bar",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Goal Definition",
      description: "Define campaign goals, target audience, and desired conversion actions.",
    },
    {
      step: 2,
      title: "Design & Copy",
      description: "Create compelling design and persuasive copy focused on conversion.",
    },
    {
      step: 3,
      title: "Build & Integrate",
      description: "Develop landing page and integrate with analytics and marketing tools.",
    },
    {
      step: 4,
      title: "Test & Optimize",
      description: "Launch, monitor performance, and optimize for higher conversion rates.",
    },
  ];

  const faqs = [
    {
      question: "What&apos;s the difference between a landing page and a website?",
      answer: "A landing page is a single-page with one focused goal (like generating leads or sales), while a website has multiple pages for different purposes. Landing pages remove distractions and guide visitors toward a specific action, making them ideal for campaigns.",
    },
    {
      question: "How many landing pages do I need?",
      answer: "It depends on your campaigns. We recommend separate landing pages for different traffic sources, products, or audiences. This allows for targeted messaging and better conversion rates. Most businesses start with 2-5 landing pages.",
    },
    {
      question: "Do you write the copy for landing pages?",
      answer: "Yes! We can write conversion-focused copy based on your goals and value propositions. We apply proven copywriting principles including clear headlines, benefit-driven content, social proof, and compelling CTAs.",
    },
    {
      question: "Can I update the landing page myself?",
      answer: "Absolutely! We build landing pages on user-friendly platforms that allow easy updates to text, images, and CTAs. We provide training and documentation so you can make changes without technical knowledge.",
    },
    {
      question: "How do you measure landing page success?",
      answer: "We track conversion rate, bounce rate, time on page, and form submissions. We integrate Google Analytics and conversion tracking so you can see exactly how your landing pages perform and calculate ROI from your campaigns.",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(service.name, service.heroDescription)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }} />

      <Breadcrumbs items={breadcrumbs} />

      <ServiceHeroSection
        h1="Landing Page Design"
        badge={{ icon: `fas ${service.icon}`, text: service.name }}
        heading="High-Converting Landing Pages That Turn Traffic Into Leads"
        description="Design focused landing pages that maximize conversions with compelling copy, strategic CTAs, and conversion-optimized layouts."
        buttons={{
          primary: { text: "Get Your Landing Page", dataPopup: "contact" },
          secondary: { text: "View Landing Pages", href: "/portfolio" },
        }}
      />

      <ServiceStatsSection stats={stats.map((stat) => ({ value: stat.number, text: stat.label }))} />

      <ServiceFeaturesSection
        title={<>Landing Pages Built for <span>Conversions</span></>}
        description="Every element designed to maximize your conversion rate."
        features={features}
      />

      <ServiceProcessSection
        title={<>Our Landing Page <span>Process</span></>}
        description="Data-driven approach to building high-converting landing pages."
        columns={4}
        steps={process.map((step) => ({ number: String(step.step), title: step.title, description: step.description }))}
      />

      <ServicePortfolioSection
        title={<>Landing Page <span>Portfolio</span></>}
        description="Conversion-focused pages that generate leads and sales."
        projects={webProjects.slice(0, 6)}
        buttonText="View All Projects"
      />

      <ServiceTestimonialsSection
        title={<>What Our Clients <span>Say</span></>}
        description="Businesses generating more leads with optimized landing pages."
        testimonials={webReviews.map((review) => ({ text: review.text, name: review.name, detail: review.company, rating: review.rating }))}
      />

      <div className="service-inline-action service-inline-action--paper">
        <Link href="/testimonials" className="paper-button paper-button--rust">Read More Reviews<i className="fas fa-arrow-right" aria-hidden="true" /></Link>
      </div>

      <ServiceFAQSection title={<>Frequently Asked <span>Questions</span></>} description="Common questions about landing page design." faqs={faqs} />

      <CTASection
        title="Ready to Generate More Leads?"
        description="Create a high-converting landing page that turns your traffic into customers."
        primaryButtonText="Get Your Landing Page"
        primaryButtonAction="contact"
      />
    </>
  );
}
