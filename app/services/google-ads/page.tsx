import type { Metadata } from "next";
import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateServiceSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Google Ads Management Sydney | PPC Advertising That Converts",
  description: "Expert Google Ads management in Sydney. Generate instant traffic and quality leads with expertly managed PPC campaigns. Get your free Google Ads audit today.",
};

export default function GoogleAdsPage() {
  const service = services.find((s) => s.slug === "google-ads")!;
  const adsProjects = portfolioProjects.filter((p) => p.services.includes("Google Ads"));
  const adsReviews = googleReviews.slice(0, 3);

  const stats = [
    { label: "Avg. ROAS", number: "450%" },
    { label: "Campaigns Managed", number: "120+" },
    { label: "Ad Spend Managed", number: "$2M+" },
    { label: "Avg. CTR Improvement", number: "3.2x" },
  ];

  const features = [
    {
      title: "Search Ads",
      description: "Capture high-intent customers actively searching for your products or services.",
      icon: "🔍",
    },
    {
      title: "Display Ads",
      description: "Build brand awareness with visual ads across Google's display network.",
      icon: "🖼️",
    },
    {
      title: "Shopping Ads",
      description: "Showcase your products directly in Google search results with product listings.",
      icon: "🛒",
    },
    {
      title: "Remarketing",
      description: "Re-engage visitors who didn't convert on their first visit to your website.",
      icon: "🎯",
    },
    {
      title: "YouTube Ads",
      description: "Reach your audience with video advertising on YouTube and Google video partners.",
      icon: "📹",
    },
    {
      title: "Performance Max",
      description: "Automated campaigns that maximize conversions across all Google channels.",
      icon: "⚡",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Account Audit",
      description: "Review your current campaigns (if any) and identify opportunities for improvement.",
    },
    {
      step: 2,
      title: "Strategy & Setup",
      description: "Develop campaign strategy, keyword research, ad copywriting, and account setup.",
    },
    {
      step: 3,
      title: "Launch & Optimize",
      description: "Launch campaigns and continuously optimize for better performance and ROI.",
    },
    {
      step: 4,
      title: "Report & Scale",
      description: "Provide detailed reports and scale successful campaigns to maximize results.",
    },
  ];

  const faqs = [
    {
      question: "How much should I spend on Google Ads?",
      answer: "Budget depends on your industry, competition, and goals. We typically recommend starting with $1,500-$3,000/month for most small businesses. We'll help you determine the optimal budget for your specific situation.",
    },
    {
      question: "How quickly will I see results?",
      answer: "Unlike SEO, Google Ads can drive traffic immediately. Most clients see leads within the first week. However, it takes 2-3 months of optimization to achieve peak performance and ROI.",
    },
    {
      question: "What&apos;s your management fee?",
      answer: "Our management fee is included in our monthly packages starting at $1,000/month (plus your ad spend). This includes strategy, setup, copywriting, optimization, and reporting.",
    },
    {
      question: "Do you require long-term contracts?",
      answer: "No lock-in contracts. We believe in earning your business every month through results. Most clients stay with us because we deliver measurable ROI.",
    },
    {
      question: "What industries do you work with?",
      answer: "We've successfully managed Google Ads campaigns across diverse industries including property, construction, healthcare, legal, retail, hospitality, and professional services.",
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
              Google Ads Management That Delivers Quality Leads
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Generate instant traffic and leads with expertly managed Google Ads campaigns.
              Stop wasting money on ineffective ads and start seeing real ROI.
            </p>
            <div className="flex flex-wrap gap-4">
              <button data-popup="adsAudit" className="btn btn-primary">
                Get Free Google Ads Audit
              </button>
              <Link href="/portfolio" className="btn btn-white">
                View Success Stories
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
              Complete Google Ads Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Every campaign type to reach your customers at the right moment with the right message.
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

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Choose Our Google Ads Management?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-orange rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Google Certified Experts</h3>
                    <p className="text-gray-600">
                      Our team holds Google Ads certifications and stays current with latest platform updates.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-orange rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Data-Driven Optimization</h3>
                    <p className="text-gray-600">
                      Continuous testing and refinement based on real performance data, not guesswork.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-orange rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Transparent Reporting</h3>
                    <p className="text-gray-600">
                      Detailed monthly reports showing exactly where your budget goes and what results you get.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-orange rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">No Wasted Spend</h3>
                    <p className="text-gray-600">
                      Strategic targeting and negative keywords ensure your budget reaches qualified prospects only.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-96 bg-gradient-to-br from-primary-navy to-primary-orange rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Google Ads Process</h2>
            <p className="text-xl text-gray-600">
              A systematic approach to maximize your advertising ROI.
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
      {adsProjects.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl font-bold mb-4">Google Ads Success Stories</h2>
              <p className="text-xl text-gray-600">
                Businesses we&apos;ve helped grow with Google Ads.
              </p>
            </div>

            <div className="grid-3">
              {adsProjects.slice(0, 6).map((project) => (
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
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Hear from businesses getting real results from their Google Ads investment.
            </p>
          </div>

          <div className="grid-3">
            {adsReviews.map((review) => (
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
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Google Ads Management Pricing</h2>
            <p className="text-xl text-gray-600">
              Flexible packages for businesses of all sizes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card border-2 border-primary-orange">
              <div className="text-center mb-8">
                <div className="text-primary-orange font-bold mb-2">Most Popular</div>
                <h3 className="text-3xl font-bold mb-2">Professional Google Ads</h3>
                <div className="text-5xl font-bold text-primary-orange mb-4">$1,000<span className="text-xl text-gray-600">/month</span></div>
                <p className="text-gray-600">Plus your ad spend (we recommend $1,500-$3,000/month)</p>
              </div>

              <div className="grid-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Free Google Ads audit</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Campaign strategy & setup</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Keyword research & targeting</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Ad copywriting & testing</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Landing page optimization advice</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Conversion tracking setup</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Daily monitoring & optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Monthly performance reports</span>
                </div>
              </div>

              <div className="text-center">
                <button data-popup="adsAudit" className="btn btn-primary w-full sm:w-auto">
                  Get Started with Google Ads
                </button>
              </div>
            </div>

            <p className="text-center text-gray-600 mt-6">
              Need a custom package?{" "}
              <button data-popup="contact" className="text-primary-orange font-semibold hover:underline">
                Let&apos;s talk
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Google Ads management.
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
        title="Ready to Generate Quality Leads?"
        description="Get your free Google Ads audit and discover how we can help you maximize your advertising ROI."
        primaryButtonText="Get Free Ads Audit"
        primaryButtonAction="adsAudit"
      />
    </>
  );
}
