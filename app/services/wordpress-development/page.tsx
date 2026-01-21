import type { Metadata } from "next";
import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateServiceSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "WordPress Development Sydney | Custom WordPress Websites",
  description: "Professional WordPress development in Sydney. Build powerful, scalable WordPress websites with custom themes and plugins. Easy content management for your business.",
};

export default function WordPressDevelopmentPage() {
  const service = services.find((s) => s.slug === "wordpress-development")!;
  const webProjects = portfolioProjects.filter((p) => p.services.includes("Web Design"));
  const webReviews = googleReviews.slice(3, 6);

  const stats = [
    { label: "WordPress Sites Built", number: "150+" },
    { label: "Years Experience", number: "13+" },
    { label: "Plugin Integrations", number: "500+" },
    { label: "Client Satisfaction", number: "99%" },
  ];

  const features = [
    {
      title: "Custom Themes",
      description: "Fully custom WordPress themes designed specifically for your brand and requirements.",
      icon: "🎨",
    },
    {
      title: "Plugin Development",
      description: "Custom plugin development for unique functionality not available in off-the-shelf solutions.",
      icon: "⚙️",
    },
    {
      title: "WooCommerce",
      description: "E-commerce integration with WooCommerce for selling products and services online.",
      icon: "🛒",
    },
    {
      title: "Easy Updates",
      description: "User-friendly admin panel that makes content updates simple without technical knowledge.",
      icon: "✏️",
    },
    {
      title: "SEO Ready",
      description: "Built with SEO best practices and optimized for search engine visibility from day one.",
      icon: "🔍",
    },
    {
      title: "Security Focused",
      description: "Hardened security measures to protect your website from vulnerabilities and attacks.",
      icon: "🔒",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Requirements Analysis",
      description: "Understand your goals, content needs, and functionality requirements for the WordPress site.",
    },
    {
      step: 2,
      title: "Custom Development",
      description: "Build custom theme and plugins tailored to your specific business needs.",
    },
    {
      step: 3,
      title: "Content Migration",
      description: "Migrate existing content or set up new content structure with training provided.",
    },
    {
      step: 4,
      title: "Launch & Training",
      description: "Deploy your WordPress site and provide comprehensive training on managing content.",
    },
  ];

  const faqs = [
    {
      question: "Why choose WordPress over other platforms?",
      answer: "WordPress powers 43% of all websites globally. It's flexible, scalable, SEO-friendly, and has thousands of plugins available. You'll also have complete control over your content and the ability to easily find developers for future work.",
    },
    {
      question: "Will my WordPress site be secure?",
      answer: "Yes! We implement WordPress security best practices including regular updates, security plugins, strong authentication, database security, and regular backups. We also offer ongoing maintenance packages for continued security.",
    },
    {
      question: "Can I update the website content myself?",
      answer: "Absolutely! WordPress is known for its user-friendly interface. We provide comprehensive training and documentation so you can easily add pages, update content, upload images, and manage your blog without any coding knowledge.",
    },
    {
      question: "Do you use pre-made themes or custom themes?",
      answer: "We develop fully custom WordPress themes designed specifically for your business. While pre-made themes are cheaper, custom themes provide better performance, unique design, and functionality tailored to your exact needs.",
    },
    {
      question: "What ongoing maintenance is required?",
      answer: "WordPress requires regular updates to core software, themes, and plugins for security and performance. We offer maintenance packages starting at $150/month to handle all updates, backups, security monitoring, and technical support.",
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
            <h1 className="text-5xl font-bold mb-6">
              Professional WordPress Development That Powers Your Business
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Build powerful, scalable WordPress websites with custom themes and plugins designed for your specific needs. Easy to manage, built to perform.
            </p>
            <div className="flex flex-wrap gap-4">
              <button data-popup="contact" className="btn btn-primary">
                Start Your WordPress Project
              </button>
              <Link href="/portfolio" className="btn btn-white">
                View WordPress Sites
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
              Complete WordPress Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for a powerful, professional WordPress website.
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
            <h2 className="text-4xl font-bold mb-4">Our WordPress Development Process</h2>
            <p className="text-xl text-gray-600">
              A structured approach to delivering exceptional WordPress websites.
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
              <h2 className="text-4xl font-bold mb-4">WordPress Portfolio</h2>
              <p className="text-xl text-gray-600">
                Custom WordPress websites we&apos;ve built for businesses like yours.
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
              Businesses thriving with their custom WordPress websites.
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
            <h2 className="text-4xl font-bold mb-4">WordPress Development Pricing</h2>
            <p className="text-xl text-gray-600">
              Flexible packages for businesses of all sizes.
            </p>
          </div>

          <div className="grid-2 max-w-5xl mx-auto gap-8">
            <div className="card">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Business WordPress</h3>
                <div className="text-4xl font-bold text-primary-orange mb-4">$4,500</div>
                <p className="text-gray-600">Perfect for small businesses</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Custom WordPress theme</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Up to 10 pages</span>
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
                  <span className="text-sm">Contact form integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">SEO optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Training & documentation</span>
                </div>
              </div>

              <button data-popup="contact" className="btn btn-outline w-full">
                Get Started
              </button>
            </div>

            <div className="card border-2 border-primary-orange">
              <div className="text-center mb-6">
                <div className="text-primary-orange font-bold mb-2">Most Popular</div>
                <h3 className="text-2xl font-bold mb-2">Advanced WordPress</h3>
                <div className="text-4xl font-bold text-primary-orange mb-4">$7,500</div>
                <p className="text-gray-600">For growing businesses</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Advanced custom theme</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Unlimited pages</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Custom plugin development</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Advanced functionality</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Blog with custom post types</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Advanced SEO setup</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">60 days support</span>
                </div>
              </div>

              <button data-popup="contact" className="btn btn-primary w-full">
                Get Started
              </button>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8">
            Need WooCommerce or custom integrations?{" "}
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
              Common questions about WordPress development.
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
        title="Ready to Build Your WordPress Website?"
        description="Let&apos;s create a powerful, easy-to-manage WordPress website that grows with your business."
        primaryButtonText="Start Your Project"
        primaryButtonAction="contact"
      />
    </>
  );
}
