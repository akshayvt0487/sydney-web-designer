import type { Metadata } from "next";
import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateServiceSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Brand Identity Design Sydney | Complete Branding Services",
  description: "Professional brand identity design in Sydney. Develop a cohesive brand identity that sets you apart and resonates with your target audience. Complete brand systems.",
};

export default function BrandIdentityPage() {
  const service = services.find((s) => s.slug === "brand-identity")!;
  const brandingProjects = portfolioProjects.filter((p) => p.services.includes("Branding"));
  const brandingReviews = googleReviews.slice(0, 3);

  const stats = [
    { label: "Brands Created", number: "90+" },
    { label: "Years Experience", number: "13+" },
    { label: "Brand Elements", number: "1000+" },
    { label: "Client Satisfaction", number: "98%" },
  ];

  const features = [
    {
      title: "Logo Design",
      description: "Custom logo that serves as the foundation of your brand identity.",
      icon: "🎯",
    },
    {
      title: "Color Palette",
      description: "Strategic color system that evokes the right emotions and stands out.",
      icon: "🎨",
    },
    {
      title: "Typography",
      description: "Font selections that complement your brand personality and ensure readability.",
      icon: "✍️",
    },
    {
      title: "Brand Guidelines",
      description: "Comprehensive guide documenting all brand elements and usage rules.",
      icon: "📋",
    },
    {
      title: "Visual Elements",
      description: "Icons, patterns, imagery style, and graphic elements that complete your brand.",
      icon: "✨",
    },
    {
      title: "Applications",
      description: "See your brand applied to business cards, letterhead, and marketing materials.",
      icon: "📱",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Brand Discovery",
      description: "Deep dive into your business, values, target audience, and competitive landscape.",
    },
    {
      step: 2,
      title: "Strategy & Direction",
      description: "Define brand positioning, personality, and visual direction aligned with goals.",
    },
    {
      step: 3,
      title: "Design Development",
      description: "Create logo, color palette, typography, and all visual brand elements.",
    },
    {
      step: 4,
      title: "Guidelines & Delivery",
      description: "Deliver comprehensive brand guidelines and all assets for implementation.",
    },
  ];

  const faqs = [
    {
      question: "What&apos;s included in a brand identity package?",
      answer: "Our complete package includes logo design (primary, secondary, icon versions), color palette, typography system, brand guidelines document, business card design, letterhead, and email signature. All files provided in multiple formats for print and digital use.",
    },
    {
      question: "How long does brand identity development take?",
      answer: "Most projects take 4-6 weeks from discovery to final delivery. This includes strategy sessions, design development, feedback rounds, refinements, and creation of brand guidelines. Rush services available if needed.",
    },
    {
      question: "Can you redesign my existing brand?",
      answer: "Absolutely! We can refresh your existing brand (brand evolution) or complete a full rebrand. We'll assess what elements are working, what needs updating, and ensure the new identity maintains any equity you've built while modernizing your look.",
    },
    {
      question: "Do you help with brand implementation?",
      answer: "Yes! Beyond creating your identity, we can help implement it across your website, marketing materials, signage, uniforms, packaging, and more. We ensure consistent application across all touchpoints for maximum impact.",
    },
    {
      question: "What&apos;s the difference between branding and marketing?",
      answer: "Branding is who you are - your identity, personality, and values. Marketing is how you communicate that to attract customers. Strong branding makes marketing more effective because it gives you a clear, consistent foundation to build from.",
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
            <h1 className="text-5xl font-bold mb-6">
              Complete Brand Identity That Sets You Apart
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Develop a cohesive brand identity including logo, colors, typography, and visual elements that resonates with your target audience and stands out from competitors.
            </p>
            <div className="flex flex-wrap gap-4">
              <button data-popup="contact" className="btn btn-primary">
                Start Your Brand
              </button>
              <Link href="/portfolio" className="btn btn-white">
                View Brand Portfolio
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
              Complete Brand Identity System
            </h2>
            <p className="text-xl text-gray-600">
              All elements you need to build a strong, consistent brand presence.
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
            <h2 className="text-4xl font-bold mb-4">Our Brand Identity Process</h2>
            <p className="text-xl text-gray-600">
              Strategic approach to creating brands that resonate and endure.
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
              <h2 className="text-4xl font-bold mb-4">Brand Identity Portfolio</h2>
              <p className="text-xl text-gray-600">
                Cohesive brand identities that help businesses stand out.
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
              Businesses building strong brands with professional identity systems.
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
            <h2 className="text-4xl font-bold mb-4">Brand Identity Pricing</h2>
            <p className="text-xl text-gray-600">
              Complete brand packages at transparent prices.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card border-2 border-primary-orange">
              <div className="text-center mb-8">
                <div className="text-primary-orange font-bold mb-2">Complete Package</div>
                <h3 className="text-3xl font-bold mb-2">Brand Identity Package</h3>
                <div className="text-5xl font-bold text-primary-orange mb-4">$3,500</div>
                <p className="text-gray-600">Everything you need for a cohesive brand</p>
              </div>

              <div className="grid-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Logo design (primary, secondary, icon)</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Brand color palette</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Typography system</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Brand guidelines document</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Business card design</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Letterhead & email signature</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Social media templates</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">All source files & formats</span>
                </div>
              </div>

              <div className="text-center">
                <button data-popup="contact" className="btn btn-primary w-full sm:w-auto">
                  Get Started
                </button>
              </div>
            </div>

            <p className="text-center text-gray-600 mt-6">
              Need brand strategy included?{" "}
              <Link href="/services/brand-strategy" className="text-primary-orange font-semibold hover:underline">
                View brand strategy services
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about brand identity services.
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
        title="Ready to Build Your Brand Identity?"
        description="Create a cohesive brand identity that sets you apart and resonates with your audience."
        primaryButtonText="Start Your Brand"
        primaryButtonAction="contact"
      />
    </>
  );
}
