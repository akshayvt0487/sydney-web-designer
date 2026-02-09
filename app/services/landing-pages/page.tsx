import type { Metadata } from "next";
import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateServiceSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Landing Page Design Sydney | High-Converting Landing Pages",
  description: "Professional landing page design in Sydney. Design focused landing pages that turn traffic into leads with compelling copy and strategic CTAs. Optimize for conversions.",
};

export default function LandingPagesPage() {
  const service = services.find((s) => s.slug === "landing-pages")!;
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
      icon: "🎯",
    },
    {
      title: "Clear Messaging",
      description: "Compelling headlines and copy that communicate value propositions instantly.",
      icon: "💬",
    },
    {
      title: "Strong CTAs",
      description: "Prominent, action-oriented calls-to-action that drive clicks and submissions.",
      icon: "👆",
    },
    {
      title: "Fast Loading",
      description: "Optimized for speed to reduce bounce rates and maximize conversions.",
      icon: "⚡",
    },
    {
      title: "Mobile Optimized",
      description: "Perfect display and functionality on all mobile devices for maximum reach.",
      icon: "📱",
    },
    {
      title: "A/B Testing Ready",
      description: "Built for easy testing and optimization to continually improve conversion rates.",
      icon: "📊",
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
              High-Converting Landing Pages That Turn Traffic Into Leads
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Design focused landing pages that maximize conversions with compelling copy, strategic CTAs, and conversion-optimized layouts.
            </p>
            <div className="flex flex-wrap gap-4">
              <button data-popup="contact" className="btn btn-primary">
                Get Your Landing Page
              </button>
              <Link href="/portfolio" className="btn btn-white">
                View Landing Pages
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
              Landing Pages Built for Conversions
            </h2>
            <p className="text-xl text-gray-600">
              Every element strategically designed to guide visitors toward taking action.
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
            <h2 className="text-4xl font-bold mb-4">Our Landing Page Process</h2>
            <p className="text-xl text-gray-600">
              Strategic approach to creating landing pages that convert.
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
              <h2 className="text-4xl font-bold mb-4">Landing Page Portfolio</h2>
              <p className="text-xl text-gray-600">
                High-performing landing pages that drive results for our clients.
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
              Businesses generating more leads with our landing pages.
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
            <h2 className="text-4xl font-bold mb-4">Landing Page Pricing</h2>
            <p className="text-xl text-gray-600">
              Affordable landing pages optimized for conversions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card border-2 border-primary-orange">
              <div className="text-center mb-8">
                <div className="text-primary-orange font-bold mb-2">Complete Package</div>
                <h3 className="text-3xl font-bold mb-2">Conversion Landing Page</h3>
                <div className="text-5xl font-bold text-primary-orange mb-4">$1,500<span className="text-xl text-gray-600">/page</span></div>
                <p className="text-gray-600">Professional landing page that converts</p>
              </div>

              <div className="grid-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Custom conversion-focused design</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Persuasive copywriting</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Mobile responsive</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Lead capture form</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Analytics integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">CRM/email integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">A/B testing setup</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">30 days support</span>
                </div>
              </div>

              <div className="text-center">
                <button data-popup="contact" className="btn btn-primary w-full sm:w-auto">
                  Get Started
                </button>
              </div>
            </div>

            <p className="text-center text-gray-600 mt-6">
              Need multiple landing pages?{" "}
              <button data-popup="contact" className="text-primary-orange font-semibold hover:underline">
                Contact us for package pricing
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
              Common questions about landing page design.
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
        title="Ready to Generate More Leads?"
        description="Get a high-converting landing page that turns your traffic into leads and customers."
        primaryButtonText="Get Your Landing Page"
        primaryButtonAction="contact"
      />
    </>
  );
}
