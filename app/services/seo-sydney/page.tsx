import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema, generateLocalBusinessSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";
import ServiceHeroSection from "@/components/ServiceHeroSection";

export const metadata = generateMetadata({
  title: "SEO Services Sydney | Professional Search Engine Optimization",
  description: "Expert SEO services in Sydney. Dominate search results with comprehensive strategies. Average 215% traffic increase, 1,500+ keywords ranked, 94% client retention. Free SEO audit!",
  keywords: "seo services sydney, search engine optimization sydney, seo company sydney, seo expert sydney, local seo sydney, seo consultant, organic seo sydney",
  canonicalUrl: "https://sydneywebdesigner.com.au/services/seo-sydney",
  ogImage: "/images/og/services.svg",
});

export default function SEOServicesPage() {
  const service = services.find((s) => s.slug === "seo-sydney")!;

  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Services", url: "https://sydneywebdesigner.com.au/services" },
    { name: "SEO Services", url: "https://sydneywebdesigner.com.au/services/seo-sydney" }
  ];
  const seoProjects = portfolioProjects.filter((p) => p.services.includes("SEO"));
  const seoReviews = googleReviews.slice(0, 3);

  const stats = [
    { label: "Avg. Traffic Increase", number: "215%" },
    { label: "Keywords Ranked", number: "1,500+" },
    { label: "SEO Projects", number: "80+" },
    { label: "Client Retention", number: "94%" },
  ];

  const features = [
    {
      title: "Technical SEO",
      description: "Optimize your website's technical foundation for better crawling and indexing.",
      icon: "fas fa-cog",
    },
    {
      title: "Keyword Research",
      description: "Target the right keywords that your customers are actually searching for.",
      icon: "fas fa-search",
    },
    {
      title: "On-Page SEO",
      description: "Optimize every page with strategic content, meta tags, and internal linking.",
      icon: "fas fa-file-alt",
    },
    {
      title: "Link Building",
      description: "Build high-quality backlinks that boost your domain authority and rankings.",
      icon: "fas fa-link",
    },
    {
      title: "Local SEO",
      description: "Dominate local search results and Google Maps for your service area.",
      icon: "fas fa-map-marker-alt",
    },
    {
      title: "SEO Reporting",
      description: "Track your rankings, traffic, and ROI with detailed monthly reports.",
      icon: "fas fa-chart-bar",
    },
  ];

  const process = [
    {
      step: 1,
      title: "SEO Audit",
      description: "Comprehensive analysis of your website's current SEO performance and opportunities.",
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "Custom SEO roadmap aligned with your business goals and target audience.",
    },
    {
      step: 3,
      title: "Implementation",
      description: "Execute on-page, technical, and off-page SEO improvements systematically.",
    },
    {
      step: 4,
      title: "Monitoring & Optimization",
      description: "Continuous tracking, testing, and refinement to maximize results.",
    },
  ];

  const faqs = [
    {
      question: "How long does SEO take to show results?",
      answer: "Most clients see initial improvements within 3-4 months, with significant results typically appearing after 6-12 months. SEO is a long-term investment that builds momentum over time.",
    },
    {
      question: "What&apos;s included in your SEO services?",
      answer: "Our comprehensive SEO includes technical optimization, keyword research, on-page SEO, content strategy, link building, local SEO (if applicable), and detailed monthly reporting.",
    },
    {
      question: "Do you guarantee #1 rankings?",
      answer: "No reputable SEO company can guarantee specific rankings as search algorithms constantly evolve. However, we focus on driving qualified traffic and measurable business results.",
    },
    {
      question: "What&apos;s the difference between SEO and Google Ads?",
      answer: "SEO is organic (free) traffic that builds over time, while Google Ads is paid traffic that starts immediately. We recommend both for maximum visibility and best results.",
    },
    {
      question: "Will SEO work for my industry?",
      answer: "Yes! We've successfully delivered SEO results across diverse industries including property, construction, hospitality, healthcare, retail, and professional services.",
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
      <ServiceHeroSection
        badge={{
          icon: `fas ${service.icon}`,
          text: service.name
        }}
        heading="SEO Services That Drive Real Results in Sydney"
        description="Dominate search results and drive qualified traffic with comprehensive SEO strategies. Get found by customers actively searching for your products and services."
        buttons={{
          primary: {
            text: "Get Free SEO Audit",
            dataPopup: "seoAudit"
          },
          secondary: {
            text: "View SEO Case Studies",
            href: "/portfolio"
          }
        }}
      />

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
              Comprehensive SEO Services
            </h2>
            <p className="text-xl text-gray-600">
              Every aspect of SEO covered to maximize your online visibility and organic growth.
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
            <h2 className="text-4xl font-bold mb-4">Our SEO Process</h2>
            <p className="text-xl text-gray-600">
              A proven methodology that delivers consistent, measurable results.
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
      {seoProjects.length > 0 && (
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl font-bold mb-4">SEO Success Stories</h2>
              <p className="text-xl text-gray-600">
                Real results for businesses across Sydney and Australia.
              </p>
            </div>

            <div className="grid-3">
              {seoProjects.slice(0, 6).map((project) => (
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
              Hear from businesses that have transformed their online presence with our SEO services.
            </p>
          </div>

          <div className="grid-3">
            {seoReviews.map((review) => (
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
      {/* <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">SEO Pricing</h2>
            <p className="text-xl text-gray-600">
              Transparent monthly packages with no lock-in contracts.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card border-2 border-primary-orange">
              <div className="text-center mb-8">
                <div className="text-primary-orange font-bold mb-2">Most Popular</div>
                <h3 className="text-3xl font-bold mb-2">Professional SEO</h3>
                <div className="text-5xl font-bold text-primary-orange mb-4">$3,000<span className="text-xl text-gray-600">/month</span></div>
                <p className="text-gray-600">Complete SEO solution for growing businesses</p>
              </div>

              <div className="grid-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Comprehensive SEO audit</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Technical SEO optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Keyword research & strategy</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">On-page optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Link building campaigns</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Content optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Local SEO (Google Business)</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Monthly performance reports</span>
                </div>
              </div>

              <div className="text-center">
                <button data-popup="seoAudit" className="btn btn-primary w-full sm:w-auto">
                  Get Started with SEO
                </button>
              </div>
            </div>

            <p className="text-center text-gray-600 mt-6">
              Custom packages available for enterprise clients.{" "}
              <button data-popup="contact" className="text-primary-orange font-semibold hover:underline">
                Contact us
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
              Everything you need to know about our SEO services.
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
        title="Ready to Dominate Search Results?"
        description="Get your free SEO audit and discover how we can help you rank higher and attract more customers."
        primaryButtonText="Get Free SEO Audit"
        primaryButtonAction="seoAudit"
      />
    </>
  );
}
