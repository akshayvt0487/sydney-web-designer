import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = generateMetadata({
  title: "Growth Plans | Ongoing Support & Optimization",
  description: "Grow your online presence with our ongoing support plans. Website updates, SEO, content marketing, and more. Flexible monthly packages for Sydney businesses.",
  keywords: "website maintenance sydney, ongoing seo, growth marketing plans",
  canonicalUrl: "https://sydneywebdesigner.com.au/growth-plans",
});

export default function GrowthPlansPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Growth Plans", url: "https://sydneywebdesigner.com.au/growth-plans" },
  ]);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <section className="bg-[#1e293b] text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Growth Plans & Monthly Packages
            </h1>
            <p className="text-xl text-white mb-8">
              Ongoing support and marketing services to help your business grow. From website care
              to complete digital marketing, we have a plan for every stage of your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20">
        <div className="container">
          <div className="section-title">
            <h2>Choose Your Growth Plan</h2>
            <p>Flexible monthly packages with no lock-in contracts</p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Website Care */}
            <div className="card hover:shadow-card-hover transition-all">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <h3 className="text-2xl font-bold mb-4 text-primary-navy">Website Care</h3>
                  {/* <div className="text-3xl font-bold text-primary-orange mb-2">$250/month</div> */}
                  {/* <p className="text-gray-600 mb-2">+ GST</p> */}
                  <p className="text-base text-gray-700 mb-2 font-medium">Keep your website secure and updated</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Security updates & monitoring</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Weekly backups</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Performance optimization</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">2 hours content updates/month</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Uptime monitoring</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Email support</span>
                    </div>
                  </div>
                  <button data-popup="contact" className="btn btn-secondary mt-4">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Website Care & CRM */}
            <div className="card hover:shadow-card-hover transition-all border-2 border-[#f59e0b]">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <h3 className="text-2xl font-bold mb-4 text-primary-navy">Website Care & CRM</h3>
                  {/* <div className="text-3xl font-bold text-primary-orange mb-2">$500/month</div> */}
                  {/* <p className="text-gray-600 mb-2">+ GST</p> */}
                  <p className="text-base text-gray-700 mb-2 font-medium">Website care + customer management</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Everything in Website Care</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">CRM setup & management</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Lead tracking & automation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm font-bold">Request/Manage Reviews via SMS/Email</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">4 hours content updates/month</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Priority support</span>
                    </div>
                  </div>
                  <button data-popup="contact" className="btn btn-primary mt-4">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Paid Ads Management - Popular */}
            <div className="card hover:shadow-card-hover transition-all border-4 border-[#f59e0b] relative">
              <div className="absolute -top-4 left-8 bg-[#f59e0b] text-white px-6 py-1 rounded-full text-sm font-bold">
                Popular
              </div>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <h3 className="text-2xl font-bold mb-4 text-primary-navy">Paid Ads Management</h3>
                  {/* <div className="text-3xl font-bold text-primary-orange mb-2">$1,000/month</div> */}
                  {/* <p className="text-gray-600 mb-2">+ GST + Ad Spend</p> */}
                  <p className="text-base text-gray-700 mb-2 font-medium">Google OR Facebook Ads management</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Google OR Facebook Ads (one platform)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Campaign strategy & setup</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Ad copywriting & design</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">A/B testing & optimization</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Conversion tracking</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Monthly performance reports</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Dedicated account manager</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Weekly optimization</span>
                    </div>
                  </div>
                  <button data-popup="adsAudit" className="btn btn-primary mt-4">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* SEO Package */}
            <div className="card hover:shadow-card-hover transition-all">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <h3 className="text-2xl font-bold mb-4 text-primary-navy">SEO Package</h3>
                  {/* <div className="text-3xl font-bold text-primary-orange mb-2">$3,000/month</div> */}
                  {/* <p className="text-gray-600 mb-2">+ GST</p> */}
                  <p className="text-base text-gray-700 mb-2 font-medium">Complete SEO & content marketing</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Complete SEO audit & strategy</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">On-page SEO optimization</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Technical SEO improvements</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">4 SEO blog posts/month</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Link building & outreach</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Local SEO optimization</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Competitor analysis</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Monthly ranking reports</span>
                    </div>
                  </div>
                  <button data-popup="seoAudit" className="btn btn-primary mt-4">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Complete Marketing Package - Ultimate */}
            <div className="card hover:shadow-card-hover transition-all bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white border-2 border-[#f59e0b]">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <div className="inline-block bg-gradient-to-r from-[#f59e0b] to-[#fb923c] text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                    Ultimate Package
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Complete Marketing</h3>
                  {/* <div className="text-3xl font-bold text-white mb-2">$5,000 - $10,000/month</div> */}
                  {/* <p className="text-gray-100 mb-2">+ GST + Ad Spend</p> */}
                  <p className="text-base text-gray-200 mb-2 font-medium">Everything you need to dominate</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-100 text-sm">Everything from all plans above</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-100 text-sm">Dedicated marketing team</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-100 text-sm">Multi-channel campaigns</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-100 text-sm">Social media management</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-100 text-sm">Email marketing automation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-100 text-sm">Video marketing & production</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-100 text-sm">Advanced analytics & reporting</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-100 text-sm">Priority 24/7 support</span>
                    </div>
                  </div>
                  <button data-popup="consultation" className="btn btn-primary mt-4">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Which Plan is Right for You?</h2>
            <p>Choose based on your business stage and goals</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-navy">Starting Out {/* ($250 - $3,000/month) */}</h3>
              <p className="text-gray-700 mb-4">
                Perfect for small businesses and startups that need essential services to establish
                and grow their online presence.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange">•</span>
                  <span>Website Care for basic maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange">•</span>
                  <span>Website Care & CRM to manage customers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange">•</span>
                  <span>Paid Ads for quick lead generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange">•</span>
                  <span>SEO Package for long-term growth</span>
                </li>
              </ul>
            </div>

            <div className="card bg-[#1e293b] text-white">
              <h3 className="text-xl font-bold mb-4 text-white">Established Business {/* ($5,000 - $10,000/month) */}</h3>
              <p className="text-white mb-4">
                For businesses with $1M+ annual revenue ready to dominate their market with
                comprehensive marketing.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange">•</span>
                  <span>Complete Marketing Package</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange">•</span>
                  <span>Dedicated team of specialists</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange">•</span>
                  <span>Multi-channel strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange">•</span>
                  <span>Maximum market penetration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our growth plans</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Are there any lock-in contracts?",
                a: "No! All our growth plans are month-to-month with no long-term contracts. Cancel anytime with 30 days notice.",
              },
              {
                q: "Can I switch plans anytime?",
                a: "Absolutely! You can upgrade or downgrade your plan anytime. We'll help you find the right fit for your current needs.",
              },
              {
                q: "What's the difference between Paid Ads and Complete Marketing?",
                a: "Paid Ads focuses on one platform (Google OR Facebook). Complete Marketing includes both platforms plus SEO, social media, email marketing, and video production.",
              },
              {
                q: "How long until I see results?",
                a: "Paid Ads deliver immediate results (within days). SEO takes 3-6 months for significant results. Complete Marketing combines both for short and long-term growth.",
              },
              {
                q: "Do I need to pay for ad spend separately?",
                a: "Yes, for Paid Ads plans, you pay the management fee plus your actual ad spend to Google/Facebook. We'll recommend the right budget for your goals.",
              },
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-bold mb-2 text-primary-navy">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Grow Your Business?"
        description="Let&apos;s discuss which growth plan is right for you. Get a free consultation and custom recommendation."
        primaryButtonText="Get Free Consultation"
        primaryButtonAction="consultation"
        secondaryButtonText="View Web Design Plans"
      />
    </>
  );
}
