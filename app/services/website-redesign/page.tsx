import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema, generateLocalBusinessSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";

export const metadata = generateMetadata({
  title: "Website Redesign Sydney | Modernize Your Outdated Website",
  description: "Professional website redesign services in Sydney. Transform your outdated website into a modern, high-performing asset. Average 185% traffic increase and 220% conversion boost.",
  keywords: "website redesign sydney, website refresh sydney, website makeover, modernize website sydney, website update services, site redesign sydney",
  canonicalUrl: "https://sydneywebdesigner.com.au/services/website-redesign",
  ogImage: "/images/og/services.svg",
});

export default function WebsiteRedesignPage() {
  const service = services.find((s) => s.slug === "website-redesign")!;

  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Services", url: "https://sydneywebdesigner.com.au/services" },
    { name: "Website Redesign", url: "https://sydneywebdesigner.com.au/services/website-redesign" }
  ];
  const webProjects = portfolioProjects.filter((p) => p.services.includes("Web Design"));
  const webReviews = googleReviews.slice(3, 6);

  const stats = [
    { label: "Websites Redesigned", number: "100+" },
    { label: "Avg. Traffic Increase", number: "185%" },
    { label: "Avg. Conversion Boost", number: "220%" },
    { label: "Client Satisfaction", number: "97%" },
  ];

  const features = [
    {
      title: "Modern Design",
      description: "Fresh, contemporary design that reflects current trends and best practices.",
      icon: "fas fa-sparkles",
    },
    {
      title: "Improved UX",
      description: "Enhanced user experience with intuitive navigation and clear calls-to-action.",
      icon: "fas fa-bullseye",
    },
    {
      title: "Mobile Responsive",
      description: "Full responsive design optimized for all devices and screen sizes.",
      icon: "fas fa-mobile-alt",
    },
    {
      title: "Faster Loading",
      description: "Performance optimization for faster page loads and better user engagement.",
      icon: "fas fa-bolt",
    },
    {
      title: "SEO Enhanced",
      description: "Updated technical SEO and on-page optimization for better rankings.",
      icon: "fas fa-search",
    },
    {
      title: "Content Migration",
      description: "Seamless migration of existing content with improvements and optimization.",
      icon: "fas fa-clipboard-list",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Audit & Analysis",
      description: "Comprehensive review of current site performance, design, and user experience.",
    },
    {
      step: 2,
      title: "Strategy & Design",
      description: "Develop redesign strategy and create modern mockups aligned with your goals.",
    },
    {
      step: 3,
      title: "Build & Migrate",
      description: "Develop new site and migrate content while preserving SEO value.",
    },
    {
      step: 4,
      title: "Launch & Monitor",
      description: "Deploy redesigned website and monitor performance improvements.",
    },
  ];

  const faqs = [
    {
      question: "How do I know if my website needs a redesign?",
      answer: "Signs include outdated design (3+ years old), not mobile-friendly, slow loading, high bounce rates, low conversions, difficult to update, or negative customer feedback about usability. If your website doesn't represent your brand well, it&apos;s time for a redesign.",
    },
    {
      question: "Will I lose my Google rankings during redesign?",
      answer: "Not if done correctly! We implement proper redirects, preserve URL structures where possible, and follow SEO best practices during migration. Many clients actually see improved rankings due to better technical SEO and user experience.",
    },
    {
      question: "Can I keep my existing domain and content?",
      answer: "Absolutely! We redesign on your existing domain and migrate all your content. We can also improve and reorganize content for better clarity and SEO performance while maintaining your brand voice and key messages.",
    },
    {
      question: "How long does a website redesign take?",
      answer: "Most redesigns take 6-10 weeks depending on site size and complexity. This includes planning, design, development, content migration, testing, and launch. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What happens to my old website during the redesign?",
      answer: "Your current website stays live and functional throughout the entire redesign process. We build the new site in a development environment and only switch over once everything is tested and approved.",
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

      {/* Hero Section */}
      <section className="bg-[#1e293b] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary-orange/20 text-primary-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <i className={`fas ${service.icon} mr-2`}></i> {service.name}
            </div>
            <h1 className="text-5xl font-bold mb-6 text-white">
              Transform Your Outdated Website Into a Modern Digital Asset
            </h1>
            <p className="text-xl text-white mb-8">
              Modernize your website with fresh design, improved functionality, and better performance. Turn your aging site into a high-converting marketing tool.
            </p>
            <div className="flex flex-wrap gap-4">
              <button data-popup="contact" className="btn btn-primary">
                Start Your Redesign
              </button>
              <Link href="/portfolio" className="btn btn-white">
                View Redesign Projects
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
              What&apos;s Included in Website Redesign
            </h2>
            <p className="text-xl text-gray-600">
              Complete transformation that addresses design, functionality, and performance.
            </p>
          </div>

          <div className="grid-3">
            {features.map((feature, index) => (
              <div key={index} className="card hover:shadow-card-hover transition-shadow">
                <div className="mb-4"><i className={`${feature.icon} text-4xl text-[#f59e0b]`}></i></div>
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
            <h2 className="text-4xl font-bold mb-4">Our Redesign Process</h2>
            <p className="text-xl text-gray-600">
              Strategic approach to modernizing your website without disrupting your business.
            </p>
          </div>

          <div className="grid-2 max-w-4xl mx-auto">
            {process.map((item) => (
              <div key={item.step} className="card hover:shadow-card-hover transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f59e0b] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
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
              <h2 className="text-4xl font-bold mb-4">Website Redesign Portfolio</h2>
              <p className="text-xl text-gray-600">
                Before and after transformations that drive real business results.
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
              Businesses thriving after their website redesign.
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

      {/* <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Website Redesign Pricing</h2>
            <p className="text-xl text-gray-600">
              Transparent pricing based on your website size and needs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card border-2 border-primary-orange">
              <div className="text-center mb-8">
                <div className="text-primary-orange font-bold mb-2">Complete Redesign</div>
                <h3 className="text-3xl font-bold mb-2">Website Redesign</h3>
                <div className="text-5xl font-bold text-primary-orange mb-4">$6,500<span className="text-xl text-gray-600">+</span></div>
                <p className="text-gray-600">Modern redesign with improved performance</p>
              </div>

              <div className="grid-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Comprehensive site audit</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Modern custom design</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Mobile responsive redesign</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Content migration & optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">SEO preservation & enhancement</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Performance optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">301 redirects & URL migration</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">60 days post-launch support</span>
                </div>
              </div>

              <div className="text-center">
                <button data-popup="contact" className="btn btn-primary w-full sm:w-auto">
                  Get Started
                </button>
              </div>
            </div>

            <p className="text-center text-gray-600 mt-6">
              Large or complex website?{" "}
              <button data-popup="contact" className="text-primary-orange font-semibold hover:underline">
                Contact us for custom quote
              </button>
            </p>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about website redesign services.
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
        title="Ready to Modernize Your Website?"
        description="Transform your outdated website into a modern, high-performing digital asset that drives results."
        primaryButtonText="Start Your Redesign"
        primaryButtonAction="contact"
      />
    </>
  );
}
