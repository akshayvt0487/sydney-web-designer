import type { Metadata } from "next";
import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateServiceSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Logo Design Sydney | Professional Logo Design Services",
  description: "Professional logo design in Sydney. Create a memorable visual identity with a custom logo that captures your brand's personality and makes you instantly recognizable.",
};

export default function LogoDesignPage() {
  const service = services.find((s) => s.slug === "logo-design")!;
  const brandingProjects = portfolioProjects.filter((p) => p.services.includes("Branding"));
  const brandingReviews = googleReviews.slice(3, 6);

  const stats = [
    { label: "Logos Designed", number: "180+" },
    { label: "Years Experience", number: "13+" },
    { label: "Design Concepts", number: "600+" },
    { label: "Client Satisfaction", number: "99%" },
  ];

  const features = [
    {
      title: "Custom Design",
      description: "Unique logos created specifically for your brand, never from templates.",
      icon: "🎨",
    },
    {
      title: "Multiple Concepts",
      description: "Receive 3-5 initial concepts to choose from and refine your favorite.",
      icon: "💡",
    },
    {
      title: "Unlimited Revisions",
      description: "Refine your chosen concept with unlimited revisions until perfect.",
      icon: "🔄",
    },
    {
      title: "File Formats",
      description: "Receive all file formats you need (AI, EPS, PNG, JPG, SVG) for any use.",
      icon: "📁",
    },
    {
      title: "Style Guide",
      description: "Complete brand guidelines showing correct logo usage and color codes.",
      icon: "📋",
    },
    {
      title: "Trademark Support",
      description: "Guidance on trademark registration to protect your logo investment.",
      icon: "🔒",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Discovery Session",
      description: "Understand your brand, target audience, competitors, and design preferences.",
    },
    {
      step: 2,
      title: "Concept Development",
      description: "Create 3-5 unique logo concepts based on your brand strategy and feedback.",
    },
    {
      step: 3,
      title: "Refinement",
      description: "Refine your chosen concept with unlimited revisions until it&apos;s perfect.",
    },
    {
      step: 4,
      title: "Delivery & Guidelines",
      description: "Receive all file formats and comprehensive brand guidelines for your logo.",
    },
  ];

  const faqs = [
    {
      question: "How long does logo design take?",
      answer: "Most logo projects take 2-3 weeks from start to final delivery. This includes the discovery session, concept development (1 week), feedback rounds, refinements, and final file preparation. Rush services available for an additional fee.",
    },
    {
      question: "What do I need to provide for logo design?",
      answer: "We'll guide you through a questionnaire covering your business, target audience, competitors, design preferences, and how you plan to use the logo. The more information you provide, the better we can create a logo that represents your brand.",
    },
    {
      question: "Can I trademark my logo?",
      answer: "Yes! We design logos with trademark potential in mind and ensure they're unique. We can provide guidance on the trademark process, though you'll need a trademark attorney for the actual application. We recommend trademarking logos for long-term brand protection.",
    },
    {
      question: "What file formats will I receive?",
      answer: "You'll receive vector files (AI, EPS, SVG) for printing and scaling, plus raster formats (PNG with transparent background, JPG) in various sizes. All files are print-ready and web-optimized for any use case.",
    },
    {
      question: "What if I don&apos;t like any of the concepts?",
      answer: "While rare, if none of the initial concepts resonate with you, we'll have a feedback session to understand what&apos;s missing and create a new round of concepts. We&apos;re committed to delivering a logo you absolutely love.",
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
              Professional Logo Design That Makes Your Brand Memorable
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Create a memorable visual identity with a custom logo that captures your brand&apos;s personality and makes you instantly recognizable to customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <button data-popup="contact" className="btn btn-primary">
                Start Your Logo Design
              </button>
              <Link href="/portfolio" className="btn btn-white">
                View Logo Portfolio
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
              What&apos;s Included in Logo Design
            </h2>
            <p className="text-xl text-gray-600">
              Complete logo package with everything you need to build your brand.
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
            <h2 className="text-4xl font-bold mb-4">Our Logo Design Process</h2>
            <p className="text-xl text-gray-600">
              Collaborative approach that delivers logos businesses love.
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
      {brandingProjects.length > 0 && (
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl font-bold mb-4">Logo Design Portfolio</h2>
              <p className="text-xl text-gray-600">
                Memorable logos we&apos;ve created for businesses across industries.
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Businesses building strong brands with professional logos.
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

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Logo Design Pricing</h2>
            <p className="text-xl text-gray-600">
              Professional logos at transparent, affordable prices.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card border-2 border-primary-orange">
              <div className="text-center mb-8">
                <div className="text-primary-orange font-bold mb-2">Complete Package</div>
                <h3 className="text-3xl font-bold mb-2">Professional Logo Design</h3>
                <div className="text-5xl font-bold text-primary-orange mb-4">$800</div>
                <p className="text-gray-600">Custom logo with unlimited revisions</p>
              </div>

              <div className="grid-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">3-5 unique logo concepts</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Unlimited revisions</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Vector files (AI, EPS, SVG)</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">High-res PNG & JPG files</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Social media formats</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Brand style guide</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Full copyright ownership</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">2-3 weeks delivery</span>
                </div>
              </div>

              <div className="text-center">
                <button data-popup="contact" className="btn btn-primary w-full sm:w-auto">
                  Get Started
                </button>
              </div>
            </div>

            <p className="text-center text-gray-600 mt-6">
              Need full brand identity package?{" "}
              <Link href="/services/brand-identity" className="text-primary-orange font-semibold hover:underline">
                View brand identity services
              </Link>
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
              Common questions about logo design services.
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
        title="Ready to Create Your Professional Logo?"
        description="Let&apos;s design a memorable logo that captures your brand's personality and makes you stand out."
        primaryButtonText="Start Your Logo Design"
        primaryButtonAction="contact"
      />
    </>
  );
}
