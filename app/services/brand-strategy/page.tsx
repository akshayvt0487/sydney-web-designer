import type { Metadata } from "next";
import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateServiceSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Brand Strategy Sydney | Strategic Brand Positioning Services",
  description: "Professional brand strategy services in Sydney. Define your brand's unique value proposition and create a roadmap for consistent growth. Strategic positioning that works.",
};

export default function BrandStrategyPage() {
  const service = services.find((s) => s.slug === "brand-strategy")!;
  const brandingProjects = portfolioProjects.filter((p) => p.services.includes("Branding"));
  const brandingReviews = googleReviews.slice(3, 6);

  const stats = [
    { label: "Strategy Projects", number: "60+" },
    { label: "Years Experience", number: "13+" },
    { label: "Industries Served", number: "25+" },
    { label: "Client Growth", number: "240%" },
  ];

  const features = [
    {
      title: "Market Research",
      description: "In-depth analysis of your market, competitors, and target audience.",
      icon: "🔍",
    },
    {
      title: "Brand Positioning",
      description: "Define your unique position in the market and differentiation strategy.",
      icon: "🎯",
    },
    {
      title: "Value Proposition",
      description: "Articulate clear, compelling reasons why customers should choose you.",
      icon: "💡",
    },
    {
      title: "Brand Messaging",
      description: "Develop messaging framework including taglines, key messages, and tone of voice.",
      icon: "💬",
    },
    {
      title: "Brand Architecture",
      description: "Structure your brand portfolio and sub-brands for maximum clarity and impact.",
      icon: "🏗️",
    },
    {
      title: "Implementation Roadmap",
      description: "Action plan for rolling out your brand strategy across all touchpoints.",
      icon: "🗺️",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Discovery & Research",
      description: "Comprehensive analysis of your business, market, competitors, and customers.",
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "Define positioning, value proposition, messaging, and brand personality.",
    },
    {
      step: 3,
      title: "Documentation",
      description: "Create detailed brand strategy document with guidelines and frameworks.",
    },
    {
      step: 4,
      title: "Implementation Planning",
      description: "Develop roadmap for executing your brand strategy across all channels.",
    },
  ];

  const faqs = [
    {
      question: "What is brand strategy and why do I need it?",
      answer: "Brand strategy is the foundation that guides all your branding and marketing decisions. It defines who you are, what you stand for, who you serve, and why customers should choose you. Without strategy, branding efforts lack direction and consistency, wasting time and money.",
    },
    {
      question: "How long does brand strategy development take?",
      answer: "Most strategy projects take 6-8 weeks including research, analysis, workshops, strategy development, and documentation. This timeline allows for thorough research and stakeholder input to ensure the strategy is sound and actionable.",
    },
    {
      question: "Do I need brand strategy if I already have a logo?",
      answer: "Yes! A logo is just one visual element. Brand strategy addresses the bigger picture: your positioning, messaging, target audience, differentiation, and how you should communicate across all touchpoints. Strategy makes your visual identity more meaningful and effective.",
    },
    {
      question: "What&apos;s the difference between brand strategy and business strategy?",
      answer: "Business strategy focuses on operational goals, products, and market expansion. Brand strategy focuses on perception, positioning, and emotional connection with customers. Both should align, but brand strategy specifically guides how you present yourself to the world.",
    },
    {
      question: "Can you help implement the brand strategy?",
      answer: "Absolutely! Beyond creating strategy, we can help implement it through brand identity design, website development, marketing materials, and ongoing consultation to ensure consistent execution across all touchpoints.",
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

      <section className="bg-gradient-navy text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary-orange/20 text-primary-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {service.icon} {service.name}
            </div>
            <h1 className="text-5xl font-bold mb-6 text-white">
              Brand Strategy That Drives Consistent Growth
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Define your brand&apos;s unique value proposition and create a roadmap for consistent growth. Strategic positioning that connects with customers and stands out from competitors.
            </p>
            <div className="flex flex-wrap gap-4">
              <button data-popup="contact" className="btn btn-primary">
                Start Your Strategy
              </button>
              <Link href="/portfolio" className="btn btn-white">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <StatsGrid stats={stats} columns={4} />
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Complete Brand Strategy Services
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to position your brand for success.
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

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Brand Strategy Process</h2>
            <p className="text-xl text-gray-600">
              Strategic methodology for building brands that last.
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

      {brandingProjects.length > 0 && (
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl font-bold mb-4">Brand Strategy Portfolio</h2>
              <p className="text-xl text-gray-600">
                Brands we&apos;ve helped position for success and growth.
              </p>
            </div>

            <div className="grid-3">
              {brandingProjects.slice(0, 6).map((project) => (
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

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Businesses growing with strategic brand positioning.
            </p>
          </div>

          <div className="grid-3">
            {brandingReviews.map((review) => (
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

      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Brand Strategy Pricing</h2>
            <p className="text-xl text-gray-600">
              Strategic brand positioning at transparent prices.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card border-2 border-primary-orange">
              <div className="text-center mb-8">
                <div className="text-primary-orange font-bold mb-2">Complete Package</div>
                <h3 className="text-3xl font-bold mb-2">Brand Strategy Package</h3>
                <div className="text-5xl font-bold text-primary-orange mb-4">$6,500</div>
                <p className="text-gray-600">Comprehensive brand strategy & positioning</p>
              </div>

              <div className="grid-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Market & competitor research</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Target audience analysis</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Brand positioning framework</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Value proposition development</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Brand messaging framework</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Brand personality definition</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Strategy documentation</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Implementation roadmap</span>
                </div>
              </div>

              <div className="text-center">
                <button data-popup="contact" className="btn btn-primary w-full sm:w-auto">
                  Get Started
                </button>
              </div>
            </div>

            <p className="text-center text-gray-600 mt-6">
              Need brand identity design too?{" "}
              <button data-popup="contact" className="text-primary-orange font-semibold hover:underline">
                Contact us for package pricing
              </button>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about brand strategy services.
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

      <CTASection
        title="Ready to Define Your Brand Strategy?"
        description="Create a clear, actionable brand strategy that drives consistent growth and customer connection."
        primaryButtonText="Start Your Strategy"
        primaryButtonAction="contact"
      />
    </>
  );
}
