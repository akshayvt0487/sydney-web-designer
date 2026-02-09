import type { Metadata } from "next";
import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateServiceSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "UI/UX Design Sydney | User Experience Design Services",
  description: "Professional UI/UX design in Sydney. Craft beautiful, user-friendly interfaces backed by research and best practices in user experience. Design that delights users.",
};

export default function UIUXDesignPage() {
  const service = services.find((s) => s.slug === "ui-ux-design")!;
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
      icon: "🔍",
    },
    {
      title: "Wireframing",
      description: "Low-fidelity wireframes to establish structure and flow before visual design.",
      icon: "📐",
    },
    {
      title: "Interface Design",
      description: "Beautiful, intuitive interfaces that are both aesthetically pleasing and functional.",
      icon: "🎨",
    },
    {
      title: "Prototyping",
      description: "Interactive prototypes to test and validate design decisions before development.",
      icon: "🔧",
    },
    {
      title: "Usability Testing",
      description: "Real user testing to identify issues and optimize the user experience.",
      icon: "👥",
    },
    {
      title: "Design Systems",
      description: "Comprehensive design systems for consistency across all touchpoints.",
      icon: "📚",
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
      question: "What&apos;s the difference between UI and UX design?",
      answer: "UX (User Experience) design focuses on how users interact with your product - the overall experience, flow, and functionality. UI (User Interface) design focuses on the visual elements - colors, typography, buttons, and layout. Both are essential for creating successful digital products.",
    },
    {
      question: "Do I need UI/UX design if I already have a website?",
      answer: "If users struggle to find information, have high bounce rates, or don&apos;t convert, UI/UX improvements can significantly boost performance. Even existing websites benefit from UX audits to identify friction points and optimization opportunities.",
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(service.name, service.heroDescription)),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-navy text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary-orange/20 text-primary-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {service.icon} {service.name}
            </div>
            <h1 className="text-5xl font-bold mb-6 text-white">
              UI/UX Design That Creates Intuitive Digital Experiences
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Craft beautiful, user-friendly interfaces backed by research and best practices in user experience. Design that users love and that drives business results.
            </p>
            <div className="flex flex-wrap gap-4">
              <button data-popup="contact" className="btn btn-primary">
                Start Your UX Project
              </button>
              <Link href="/portfolio" className="btn btn-white">
                View UX Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <StatsGrid stats={stats} columns={4} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Complete UI/UX Design Services
            </h2>
            <p className="text-xl text-gray-600">
              From research to implementation, we cover every aspect of user experience design.
            </p>
          </div>

          <div className="grid-3">
            {features.map((feature, index) => (
              <div key={index} className="card hover:shadow-card-hover transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Our UI/UX Design Process</h2>
            <p className="text-xl text-gray-600">
              User-centered methodology that delivers exceptional experiences.
            </p>
          </div>

          <div className="grid-2 max-w-4xl mx-auto">
            {process.map((item) => (
              <div key={item.step} className="card hover:shadow-card-hover transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-navy-orange rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {webProjects.length > 0 && (
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl font-bold mb-4">UI/UX Design Portfolio</h2>
              <p className="text-xl text-gray-600">
                User-centered designs that deliver exceptional experiences.
              </p>
            </div>

            <div className="grid-3">
              {webProjects.slice(0, 6).map((project) => (
                <PortfolioCard key={project.id} project={project} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/portfolio" className="btn btn-primary">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Businesses succeeding with user-centered design.
            </p>
          </div>

          <div className="grid-3">
            {webReviews.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials" className="btn btn-primary">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">UI/UX Design Pricing</h2>
            <p className="text-xl text-gray-600">
              Transparent pricing for user experience design services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card border-2 border-primary-orange">
              <div className="text-center mb-8">
                <div className="text-primary-orange font-bold mb-2">Complete Package</div>
                <h3 className="text-3xl font-bold mb-2">UI/UX Design Project</h3>
                <div className="text-5xl font-bold text-primary-orange mb-4">$6,000<span className="text-xl text-gray-600">+</span></div>
                <p className="text-gray-600">Comprehensive user experience design</p>
              </div>

              <div className="grid-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">User research & analysis</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Information architecture</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Wireframing & user flows</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Visual interface design</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Interactive prototypes</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Usability testing</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Design system documentation</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Developer handoff</span>
                </div>
              </div>

              <div className="text-center">
                <button data-popup="contact" className="btn btn-primary w-full sm:w-auto">
                  Get Started
                </button>
              </div>
            </div>

            <p className="text-center text-gray-600 mt-6">
              Need a UX audit or consultation?{" "}
              <button data-popup="contact" className="text-primary-orange font-semibold hover:underline">
                Contact us for custom pricing
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about UI/UX design services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
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
