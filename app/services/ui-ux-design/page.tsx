import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema, generateLocalBusinessSchema, generateFAQSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import FAQAccordion from "@/components/FAQAccordion";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(service.name, service.heroDescription)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      {/* Hero Section */}
      <ServiceHeroSection
        h1="UI UX Designer Sydney"
        badge={{
          icon: `fas ${service.icon}`,
          text: service.name
        }}
        heading="UI/UX Design That Creates Intuitive Digital Experiences"
        description="Craft beautiful, user-friendly interfaces backed by research and best practices in user experience. Design that users love and that drives business results."
        buttons={{
          primary: {
            text: "Start Your UX Project",
            dataPopup: "contact"
          },
          secondary: {
            text: "View UX Portfolio",
            href: "/portfolio"
          }
        }}
      />

      {/* Stats Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <StatsGrid stats={stats} columns={4} />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
              Complete UI/UX Design <span className="text-primary-orange">Services</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-slate-600 md:text-xl">
              From research to implementation, we cover every aspect of user experience design.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center sm:items-start sm:text-left rounded-2xl border border-slate-200 bg-white p-10 shadow-sm transition-all hover:border-primary-orange/30 hover:shadow-card-hover">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-orange/10 text-primary-orange">
                  <i className={`${feature.icon} text-2xl`} />
                </div>
                <h3 className="mb-3 font-heading text-2xl font-bold text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-50 py-24 md:py-32" id="process">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
              Our UI/UX Design <span className="text-primary-orange">Process</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 md:text-xl">
              User-centered methodology that delivers exceptional experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {process.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-primary-orange/30 hover:shadow-md">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xl font-bold text-white shadow-md">
                  {item.step}
                </div>
                <div>
                  <h3 className="mb-2 font-heading text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {webProjects.length > 0 && (
        <section className="bg-white py-24 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-6 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
                UI/UX Design <span className="text-primary-orange">Portfolio</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600 md:text-xl">
                User-centered designs that deliver exceptional experiences.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {webProjects.slice(0, 6).map((project) => (
                <PortfolioCard key={project.id} project={project} />
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link href="/portfolio" className="btn btn-primary btn-lg rounded-lg shadow-sm">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
              What Our Clients <span className="text-primary-orange">Say</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 md:text-xl">
              Businesses succeeding with user-centered design.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {webReviews.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/testimonials" className="btn btn-primary btn-lg rounded-lg shadow-sm">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
              Frequently Asked <span className="text-primary-orange">Questions</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 md:text-xl">
              Common questions about UI/UX design services.
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Improve Your User Experience?"
        description="Create intuitive, user-friendly designs that delight your users and drive business results."
        primaryButtonText="Start Your UX Project"
        primaryButtonAction="contact"
      />
    </>
  );
}