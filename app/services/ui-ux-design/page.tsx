import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema, generateLocalBusinessSchema, generateFAQSchema } from "@/lib/schemas";
import CTASection from "@/components/CTASection";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import ServiceStatsSection from "@/components/service-page/ServiceStatsSection";
import ServiceFeaturesSection from "@/components/service-page/ServiceFeaturesSection";
import ServiceProcessSection from "@/components/service-page/ServiceProcessSection";
import ServicePortfolioSection from "@/components/service-page/ServicePortfolioSection";
import ServiceTestimonialsSection from "@/components/service-page/ServiceTestimonialsSection";
import ServiceFAQSection from "@/components/service-page/ServiceFAQSection";

export const metadata = generateMetadata({
  title: "UI/UX Design Sydney | User Experience Design Services",
  description: "Professional UI/UX design services in Sydney. Create beautiful, user-friendly interfaces backed by research. Average 175% usability improvement with user-centered design.",
  keywords: "ui ux design sydney, user experience design, interface design sydney, ux designer sydney, user interface design, ux research sydney, usability testing sydney",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/services/ui-ux-design",
  ogImage: "/images/og/services.svg",
});

export default function UIUXDesignPage() {
  const service = services.find((s) => s.slug === "ui-ux-design")!;

  const breadcrumbs = [
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Services", url: "https://www.sydneywebdesigner.com.au/services" },
    { name: "UI/UX Design", url: "https://www.sydneywebdesigner.com.au/services/ui-ux-design" }
  ];
  const webProjects = portfolioProjects.filter((p) => p.services.includes("Web Design"));
  const webReviews = googleReviews.slice(0, 3);

  const stats = [
    { label: "UI/UX Projects", number: "120+" },
    { label: "User Tests Conducted", number: "300+" },
    { label: "Avg. Usability Improvement", number: "175%" },
    { label: "Client Satisfaction", number: "98%" },
  ];

  const features = [
    {
      title: "User Research",
      description: "In-depth research to understand your users' needs, behaviors, and pain points.",
      icon: "fas fa-search",
    },
    {
      title: "Wireframing",
      description: "Low-fidelity wireframes to establish structure and flow before visual design.",
      icon: "fas fa-drafting-compass",
    },
    {
      title: "Interface Design",
      description: "Beautiful, intuitive interfaces that are both aesthetically pleasing and functional.",
      icon: "fas fa-palette",
    },
    {
      title: "Prototyping",
      description: "Interactive prototypes to test and validate design decisions before development.",
      icon: "fas fa-wrench",
    },
    {
      title: "Usability Testing",
      description: "Real user testing to identify issues and optimize the user experience.",
      icon: "fas fa-users",
    },
    {
      title: "Design Systems",
      description: "Comprehensive design systems for consistency across all touchpoints.",
      icon: "fas fa-book",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Research & Discovery",
      description: "User research, competitive analysis, and stakeholder interviews to inform design.",
    },
    {
      step: 2,
      title: "Information Architecture",
      description: "Organize content and create user flows that make sense for your audience.",
    },
    {
      step: 3,
      title: "Design & Prototype",
      description: "Create wireframes, visual designs, and interactive prototypes for testing.",
    },
    {
      step: 4,
      title: "Test & Refine",
      description: "Conduct usability tests and refine designs based on user feedback.",
    },
  ];

  const faqs = [
    {
      question: "What's the difference between UI and UX design?",
      answer: "UX (User Experience) design focuses on how users interact with your product - the overall experience, flow, and functionality. UI (User Interface) design focuses on the visual elements - colors, typography, buttons, and layout. Both are essential for creating successful digital products.",
    },
    {
      question: "Do I need UI/UX design if I already have a website?",
      answer: "If users struggle to find information, have high bounce rates, or don't convert, UI/UX improvements can significantly boost performance. Even existing websites benefit from UX audits to identify friction points and optimization opportunities.",
    },
    {
      question: "How long does the UI/UX design process take?",
      answer: "Most projects take 4-8 weeks depending on complexity. This includes research, wireframing, design, prototyping, and testing. We'll provide a detailed timeline during our initial consultation based on your specific needs.",
    },
    {
      question: "Do you involve users in the design process?",
      answer: "Yes! We conduct user research, usability testing, and gather feedback throughout the process. Real user input ensures designs meet actual user needs rather than assumptions, resulting in better outcomes.",
    },
    {
      question: "Can you redesign just part of my website/app?",
      answer: "Absolutely! We can focus on specific areas like checkout flow, navigation, dashboards, or particular features. We'll ensure any redesigned sections maintain consistency with your existing design while improving user experience.",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(service.name, service.heroDescription)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }} />

      <Breadcrumbs items={breadcrumbs} />

      <ServiceHeroSection
        h1="UI UX Designer Sydney"
        badge={{ icon: `fas ${service.icon}`, text: service.name }}
        heading="UI/UX Design That Creates Intuitive Digital Experiences"
        description="Craft beautiful, user-friendly interfaces backed by research and best practices in user experience. Design that users love and that drives business results."
        buttons={{
          primary: { text: "Start Your UX Project", dataPopup: "contact" },
          secondary: { text: "View UX Portfolio", href: "/portfolio" },
        }}
      />

      <ServiceStatsSection stats={stats.map((stat) => ({ value: stat.number, text: stat.label }))} />

      <ServiceFeaturesSection
        title={<>Complete UI/UX Design <span>Services</span></>}
        description="From research to implementation, we cover every aspect of user experience design."
        features={features}
      />

      <ServiceProcessSection
        title={<>Our UI/UX Design <span>Process</span></>}
        description="User-centered methodology that delivers exceptional experiences."
        columns={4}
        steps={process.map((step) => ({ number: String(step.step), title: step.title, description: step.description }))}
      />

      <ServicePortfolioSection
        title={<>UI/UX Design <span>Portfolio</span></>}
        description="User-centered designs that deliver exceptional experiences."
        projects={webProjects.slice(0, 6)}
        buttonText="View All Projects"
      />

      <ServiceTestimonialsSection
        title={<>What Our Clients <span>Say</span></>}
        description="Businesses succeeding with user-centered design."
        testimonials={webReviews.map((review) => ({ text: review.text, name: review.name, detail: review.company, rating: review.rating }))}
      />

      <div className="service-inline-action service-inline-action--paper">
        <Link href="/testimonials" className="paper-button paper-button--rust">Read More Reviews<i className="fas fa-arrow-right" aria-hidden="true" /></Link>
      </div>

      <ServiceFAQSection title={<>Frequently Asked <span>Questions</span></>} description="Common questions about UI/UX design services." faqs={faqs} />

      <CTASection
        title="Ready to Improve Your User Experience?"
        description="Create intuitive, user-friendly designs that delight your users and drive business results."
        primaryButtonText="Start Your UX Project"
        primaryButtonAction="contact"
      />
    </>
  );
}
