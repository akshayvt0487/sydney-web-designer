import type { Metadata } from "next";
import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateServiceSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "E-commerce Website Design Sydney | Online Store Development",
  description: "Professional e-commerce website design in Sydney. Launch high-converting online stores with seamless checkout, inventory management, and payment integration.",
};

export default function EcommerceWebsitesPage() {
  const service = services.find((s) => s.slug === "ecommerce-websites")!;
  const webProjects = portfolioProjects.filter((p) => p.services.includes("Web Design"));
  const webReviews = googleReviews.slice(6, 9);

  const stats = [
    { label: "Online Stores Built", number: "50+" },
    { label: "Avg. Conversion Rate", number: "3.2%" },
    { label: "Total Products Managed", number: "10K+" },
    { label: "Avg. Revenue Increase", number: "240%" },
  ];

  const features = [
    {
      title: "Secure Checkout",
      description: "SSL encryption and PCI-compliant payment gateways for safe, secure transactions.",
      icon: "🔒",
    },
    {
      title: "Inventory Management",
      description: "Automated stock tracking, low inventory alerts, and supplier management tools.",
      icon: "📦",
    },
    {
      title: "Payment Integration",
      description: "Support for all major payment methods including credit cards, PayPal, and Apple Pay.",
      icon: "💳",
    },
    {
      title: "Mobile Optimized",
      description: "Responsive design that converts on all devices, especially mobile shoppers.",
      icon: "📱",
    },
    {
      title: "Product Management",
      description: "Easy-to-use dashboard for adding products, variants, categories, and pricing.",
      icon: "🛍️",
    },
    {
      title: "Shipping Integration",
      description: "Automated shipping calculations and integration with major carriers.",
      icon: "🚚",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Strategy & Planning",
      description: "Define product catalog, payment methods, shipping options, and customer journey.",
    },
    {
      step: 2,
      title: "Design & Development",
      description: "Create custom store design and build with your chosen e-commerce platform.",
    },
    {
      step: 3,
      title: "Product Setup",
      description: "Configure products, pricing, inventory, shipping rules, and payment gateways.",
    },
    {
      step: 4,
      title: "Testing & Launch",
      description: "Thorough testing of checkout flow, payments, and launch your online store.",
    },
  ];

  const faqs = [
    {
      question: "Which e-commerce platform do you recommend?",
      answer: "We primarily work with WooCommerce (WordPress) and Shopify. WooCommerce offers more flexibility and lower ongoing costs, while Shopify is easier to manage with built-in hosting. We'll recommend the best fit based on your specific needs.",
    },
    {
      question: "How much does an e-commerce website cost?",
      answer: "E-commerce sites typically range from $7,500 for basic stores to $15,000+ for advanced stores with custom features. Costs vary based on number of products, custom functionality, integrations, and design complexity.",
    },
    {
      question: "Can you migrate my existing online store?",
      answer: "Yes! We can migrate your products, customers, and order history from platforms like Shopify, WooCommerce, Magento, BigCommerce, or custom solutions. We ensure a smooth transition with minimal downtime.",
    },
    {
      question: "What payment methods can I accept?",
      answer: "We integrate all major payment gateways including Stripe, PayPal, Square, and Australian providers like eWAY and Afterpay. You can accept credit cards, digital wallets, and buy-now-pay-later options.",
    },
    {
      question: "Do you provide ongoing support for e-commerce sites?",
      answer: "Yes! We offer maintenance packages starting at $250/month including security updates, backup management, technical support, and assistance with adding products or making changes to your store.",
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
              E-commerce Websites That Sell More Products
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Launch a high-converting online store with seamless checkout, inventory management, and payment integration. Start selling online and grow your revenue.
            </p>
            <div className="flex flex-wrap gap-4">
              <button data-popup="contact" className="btn btn-primary">
                Start Your Online Store
              </button>
              <Link href="/portfolio" className="btn btn-white">
                View E-commerce Projects
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
              Complete E-commerce Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to launch and grow a successful online store.
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
            <h2 className="text-4xl font-bold mb-4">Our E-commerce Development Process</h2>
            <p className="text-xl text-gray-600">
              From concept to launch, we handle every aspect of your online store.
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
              <h2 className="text-4xl font-bold mb-4">E-commerce Portfolio</h2>
              <p className="text-xl text-gray-600">
                Online stores we&apos;ve built that drive revenue and growth.
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
              Store owners thriving with their e-commerce websites.
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
            <h2 className="text-4xl font-bold mb-4">E-commerce Website Pricing</h2>
            <p className="text-xl text-gray-600">
              Professional online stores at transparent prices.
            </p>
          </div>

          <div className="grid-2 max-w-5xl mx-auto gap-8">
            <div className="card">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Starter Store</h3>
                <div className="text-4xl font-bold text-primary-orange mb-4">$7,500</div>
                <p className="text-gray-600">For businesses starting online</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Up to 50 products</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Custom design</span>
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
                  <span className="text-sm">Payment gateway integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Basic shipping options</span>
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
                <h3 className="text-2xl font-bold mb-2">Professional Store</h3>
                <div className="text-4xl font-bold text-primary-orange mb-4">$12,500</div>
                <p className="text-gray-600">For established businesses</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Unlimited products</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Advanced custom design</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Product variants & options</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Multiple payment gateways</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Advanced shipping integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Inventory management</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Email automation</span>
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
            Need marketplace or subscription features?{" "}
            <button data-popup="contact" className="text-primary-orange font-semibold hover:underline">
              Contact us for enterprise pricing
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
              Common questions about e-commerce websites.
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
        title="Ready to Launch Your Online Store?"
        description="Start selling online with a professionally designed e-commerce website built for conversions."
        primaryButtonText="Start Your Store"
        primaryButtonAction="contact"
      />
    </>
  );
}
