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
  title: "Responsive Web Design Sydney | Mobile-Friendly Websites",
  description: "Professional responsive web design services in Sydney. Mobile-first designs that work flawlessly on smartphones, tablets, and desktops. 65% of traffic is mobile - get optimized today!",
  keywords: "responsive web design sydney, mobile friendly website, mobile-first design sydney, responsive website developer, mobile web design sydney",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/services/responsive-design",
  ogImage: "/images/og/services.svg",
});

export default function ResponsiveDesignPage() {
  const service = services.find((s) => s.slug === "responsive-design")!;

  const breadcrumbs = [
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Services", url: "https://www.sydneywebdesigner.com.au/services" },
    { name: "Responsive Design", url: "https://www.sydneywebdesigner.com.au/services/responsive-design" }
  ];
  const webProjects = portfolioProjects.filter((p) => p.services.includes("Web Design"));
  const webReviews = googleReviews.slice(0, 3);

  const stats = [
    { label: "Mobile Traffic", number: "65%" },
    { label: "Responsive Sites Built", number: "200+" },
    { label: "Devices Tested", number: "50+" },
    { label: "Mobile Conversion Lift", number: "180%" },
  ];

  const features = [
    {
      title: "Mobile-First Design",
      description: "Prioritize mobile experience with designs that work beautifully on smartphones first.",
      icon: "fas fa-mobile-alt",
    },
    {
      title: "Flexible Layouts",
      description: "Fluid grids that automatically adapt to any screen size for perfect display.",
      icon: "fas fa-palette",
    },
    {
      title: "Touch Optimized",
      description: "Buttons and navigation optimized for touch interaction on mobile devices.",
      icon: "fas fa-hand-pointer",
    },
    {
      title: "Fast Loading",
      description: "Optimized images and code for quick loading on mobile networks.",
      icon: "fas fa-bolt",
    },
    {
      title: "Cross-Browser",
      description: "Consistent experience across all major browsers and operating systems.",
      icon: "fas fa-globe",
    },
    {
      title: "Future-Proof",
      description: "Designs that adapt to new devices and screen sizes as they emerge.",
      icon: "fas fa-rocket",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Mobile Analysis",
      description: "Analyze your current mobile traffic and identify user behavior patterns.",
    },
    {
      step: 2,
      title: "Responsive Strategy",
      description: "Plan breakpoints, layouts, and interactions for different device sizes.",
    },
    {
      step: 3,
      title: "Design & Develop",
      description: "Create mobile-first designs and build with responsive frameworks.",
    },
    {
      step: 4,
      title: "Test & Optimize",
      description: "Test on real devices and optimize for performance across all screen sizes.",
    },
  ];

  const faqs = [
    {
      question: "Why is responsive design important?",
      answer: "Over 65% of web traffic now comes from mobile devices. Google also prioritizes mobile-friendly sites in search rankings. A responsive website ensures all visitors have a great experience regardless of their device.",
    },
    {
      question: "What&apos;s the difference between responsive and mobile site?",
      answer: "A responsive website adapts to any screen size using one codebase, while a separate mobile site requires maintaining two different websites. Responsive design is more cost-effective and recommended by Google.",
    },
    {
      question: "Will my existing website content work on mobile?",
      answer: "Most content will work, but we may recommend adjustments to headlines, paragraph length, and image sizing for better mobile readability. We'll guide you through any necessary content optimizations.",
    },
    {
      question: "How do you test responsive designs?",
      answer: "We test on real devices including iPhones, iPads, Android phones and tablets, as well as desktop browsers. We also use browser developer tools and responsive testing platforms to ensure perfect display across all screen sizes.",
    },
    {
      question: "Can you make my existing website responsive?",
      answer: "Yes! We can retrofit existing websites with responsive design. Depending on your current site's structure, this may involve redesigning certain elements or rebuilding the site with a responsive framework.",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(service.name, service.heroDescription)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }} />

      <Breadcrumbs items={breadcrumbs} />

      <ServiceHeroSection
        h1="Mobile Responsive Website Design"
        badge={{ icon: `fas ${service.icon}`, text: service.name }}
        heading="Responsive Design That Works Perfectly On Every Device"
        description="Ensure your website delivers a flawless experience across smartphones, tablets, and desktops. Mobile-first approach that captures all your visitors."
        buttons={{
          primary: { text: "Get Mobile-Friendly Website", dataPopup: "contact" },
          secondary: { text: "View Responsive Designs", href: "/portfolio" },
        }}
      />

      <ServiceStatsSection stats={stats.map((stat) => ({ value: stat.number, text: stat.label }))} />

      <ServiceFeaturesSection
        title={<>Complete Responsive <span>Solutions</span></>}
        description="Every element optimized for perfect display on any screen size."
        features={features}
      />

      <ServiceProcessSection
        title={<>Our Responsive Design <span>Process</span></>}
        description="Mobile-first methodology for maximum reach and engagement."
        columns={4}
        steps={process.map((step) => ({ number: String(step.step), title: step.title, description: step.description }))}
      />

      <ServicePortfolioSection
        title={<>Responsive Design <span>Portfolio</span></>}
        description="Websites that look perfect on every device and screen size."
        projects={webProjects.slice(0, 6)}
        buttonText="View All Projects"
      />

      <ServiceTestimonialsSection
        title={<>What Our Clients <span>Say</span></>}
        description="Businesses reaching more customers with responsive design."
        testimonials={webReviews.map((review) => ({ text: review.text, name: review.name, detail: review.company, rating: review.rating }))}
      />

      <div className="service-inline-action service-inline-action--paper">
        <Link href="/testimonials" className="paper-button paper-button--rust">Read More Reviews<i className="fas fa-arrow-right" aria-hidden="true" /></Link>
      </div>

      <ServiceFAQSection title={<>Frequently Asked <span>Questions</span></>} description="Common questions about responsive web design." faqs={faqs} />

      <CTASection
        title="Ready for a Mobile-Friendly Website?"
        description="Capture every visitor with a responsive website that works perfectly on all devices."
        primaryButtonText="Get Mobile-Friendly Website"
        primaryButtonAction="contact"
      />
    </>
  );
}
