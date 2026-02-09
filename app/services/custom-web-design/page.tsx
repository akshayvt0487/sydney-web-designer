import type { Metadata } from "next";
import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateServiceSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Custom Web Design Sydney | Bespoke Website Design Services",
  description: "Expert custom web design in Sydney. Create stunning, unique websites tailored to your brand and business goals. Stand out from competitors with bespoke design.",
};

export default function CustomWebDesignPage() {
  const service = services.find((s) => s.slug === "custom-web-design")!;
  const webProjects = portfolioProjects.filter((p) => p.services.includes("Web Design"));
  const webReviews = googleReviews.slice(0, 3);

  const stats = [
    { label: "Websites Designed", number: "200+" },
    { label: "Client Satisfaction", number: "98%" },
    { label: "Avg. Conversion Lift", number: "165%" },
    { label: "Design Awards", number: "15+" },
  ];

  const features = [
    {
      title: "Unique Design",
      description: "Completely custom designs tailored to your brand, never using templates or pre-made themes.",
      icon: "🎨",
    },
    {
      title: "Mobile-First",
      description: "Responsive designs that work flawlessly on smartphones, tablets, and desktops.",
      icon: "📱",
    },
    {
      title: "Conversion Focused",
      description: "Strategic design elements that guide visitors toward taking action and becoming customers.",
      icon: "🎯",
    },
    {
      title: "SEO Optimized",
      description: "Built with clean code and best practices to help you rank higher in search results.",
      icon: "🔍",
    },
    {
      title: "Fast Loading",
      description: "Optimized for speed with compressed images and efficient code for better user experience.",
      icon: "⚡",
    },
    {
      title: "Easy Management",
      description: "User-friendly CMS that makes updating content simple, even without technical skills.",
      icon: "✨",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "Understand your business, goals, target audience, and competitive landscape.",
    },
    {
      step: 2,
      title: "Design & Feedback",
      description: "Create custom mockups and refine designs based on your feedback and preferences.",
    },
    {
      step: 3,
      title: "Development & Testing",
      description: "Build your website with clean code and test across all devices and browsers.",
    },
    {
      step: 4,
      title: "Launch & Support",
      description: "Deploy your website and provide training and ongoing support for your success.",
    },
  ];

  const faqs = [
    {
      question: "What&apos;s included in a custom web design project?",
      answer: "Our custom web design includes strategy consultation, custom design mockups, responsive development, content management system, SEO optimization, contact forms, Google Analytics setup, and 30 days of post-launch support.",
    },
    {
      question: "How long does it take to design a custom website?",
      answer: "Most custom websites take 6-8 weeks from start to launch. Complex projects with extensive functionality may take 10-12 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do I need to provide content and images?",
      answer: "While we recommend you provide your own content and professional photos, we can assist with copywriting and source stock images if needed. We can also arrange professional photography for an additional fee.",
    },
    {
      question: "Will I be able to update the website myself?",
      answer: "Absolutely! We build websites with user-friendly content management systems (usually WordPress) and provide training so you can easily update content, add pages, and upload images yourself.",
    },
    {
      question: "What if I don&apos;t like the initial design?",
      answer: "We include multiple revision rounds in our process. We'll work closely with you to refine the design until you&apos;re completely satisfied. Your feedback is essential to creating the perfect website for your business.",
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
              Custom Web Design That Captures Your Brand Essence
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Create a stunning, unique website that stands out from competitors and converts visitors into customers. No templates, just bespoke design tailored to your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <button data-popup="contact" className="btn btn-primary">
                Start Your Project
              </button>
              <Link href="/portfolio" className="btn btn-white">
                View Our Portfolio
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
              Why Choose Custom Web Design?
            </h2>
            <p className="text-xl text-gray-600">
              Stand out with a unique website designed specifically for your business goals.
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
            <h2 className="text-4xl font-bold mb-4">Our Design Process</h2>
            <p className="text-xl text-gray-600">
              A collaborative approach that ensures your vision becomes reality.
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
              <h2 className="text-4xl font-bold mb-4">Custom Web Design Portfolio</h2>
              <p className="text-xl text-gray-600">
                Explore our recent custom website designs for diverse industries.
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
              Real feedback from businesses we&apos;ve helped with custom web design.
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
            <h2 className="text-4xl font-bold mb-4">Custom Web Design Pricing</h2>
            <p className="text-xl text-gray-600">
              Transparent pricing for professional custom websites.
            </p>
          </div>

          <div className="grid-2 max-w-5xl mx-auto gap-8">
            <div className="card">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Standard Website</h3>
                <div className="text-4xl font-bold text-primary-orange mb-4">$5,000</div>
                <p className="text-gray-600">Perfect for small businesses</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Up to 7 custom pages</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Responsive design</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Content management system</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Contact form integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Basic SEO optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">30 days post-launch support</span>
                </div>
              </div>

              <button data-popup="contact" className="btn btn-outline w-full">
                Get Started
              </button>
            </div>

            <div className="card border-2 border-primary-orange">
              <div className="text-center mb-6">
                <div className="text-primary-orange font-bold mb-2">Most Popular</div>
                <h3 className="text-2xl font-bold mb-2">Premium Website</h3>
                <div className="text-4xl font-bold text-primary-orange mb-4">$8,500</div>
                <p className="text-gray-600">For growing businesses</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Up to 15 custom pages</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Advanced responsive design</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Custom functionality</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Advanced animations & interactions</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Advanced SEO optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Blog functionality</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Training & documentation</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">60 days post-launch support</span>
                </div>
              </div>

              <button data-popup="contact" className="btn btn-primary w-full">
                Get Started
              </button>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8">
            Need enterprise features or e-commerce?{" "}
            <button data-popup="contact" className="text-primary-orange font-semibold hover:underline">
              Contact us for custom quote
            </button>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about our custom web design services.
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
        title="Ready to Create Your Custom Website?"
        description="Let&apos;s discuss your project and create a website that truly represents your brand and drives results."
        primaryButtonText="Start Your Project"
        primaryButtonAction="contact"
      />
    </>
  );
}
