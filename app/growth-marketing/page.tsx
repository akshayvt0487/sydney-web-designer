import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = generateMetadata({
  title: "Growth Marketing | Data-Driven Digital Marketing Services Sydney",
  description: "Accelerate your business growth with strategic digital marketing. SEO, Google Ads, content marketing, and complete growth strategies. Results-driven monthly packages for Sydney businesses.",
  keywords: "growth marketing sydney, digital marketing strategy, performance marketing, marketing optimization, growth hacking sydney",
  canonicalUrl: "https://sydneywebdesigner.com.au/growth-marketing",
});

export default function GrowthMarketingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Growth Marketing", url: "https://sydneywebdesigner.com.au/growth-marketing" },
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
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-24 relative overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#f59e0b] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#f59e0b] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#f59e0b] rounded-full animate-pulse" />
              <span className="text-[#f59e0b] text-sm font-semibold">Data-Driven Results</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fb923c]">Growth Marketing</span> Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-8 leading-relaxed">
              Drive sustainable business growth with proven digital marketing strategies. From SEO and paid ads to complete marketing management - we optimize every channel for maximum ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20">
        <div className="container">
          <div className="section-title">
            <h2>Growth Marketing Services</h2>
            <p>Scalable marketing solutions designed to accelerate your business growth</p>
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
            <div className="card hover:shadow-card-hover transition-all bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-gray-700 border-2 border-[#f59e0b]">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <div className="inline-block bg-gradient-to-r from-[#f59e0b] to-[#fb923c] text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                    Ultimate Package
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-700 ">Complete Marketing</h3>
                  {/* <div className="text-3xl font-bold text-white mb-2">$5,000 - $10,000/month</div> */}
                  {/* <p className="text-gray-100 mb-2">+ GST + Ad Spend</p> */}
                  <p className="text-base text-gray-700  mb-2 font-medium">Everything you need to dominate</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700  text-sm">Everything from all plans above</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700  text-sm">Dedicated marketing team</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700  text-sm">Multi-channel campaigns</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Social media management</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Email marketing automation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Video marketing & production</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Advanced analytics & reporting</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Priority 24/7 support</span>
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

      {/* Why Choose DSIGNS Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose DSIGNS for Growth Marketing?</h2>
            <p>Data-driven strategies that deliver measurable results for Sydney businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f59e0b]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-3xl text-[#f59e0b]"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-navy">Proven Track Record</h3>
              <p className="text-gray-700">
                Since 2013, we&apos;ve helped 500+ Sydney businesses achieve an average 3x ROI on their marketing investment. Our strategies are proven to deliver consistent growth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#f59e0b]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-3xl text-[#f59e0b]"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-navy">Dedicated Team</h3>
              <p className="text-gray-700">
                Work with experienced specialists, not juniors. Your dedicated account manager coordinates SEO experts, paid ads specialists, and content creators for seamless execution.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#f59e0b]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-bullseye text-3xl text-[#f59e0b]"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-navy">Transparent Reporting</h3>
              <p className="text-gray-700">
                No smoke and mirrors. Get detailed monthly reports showing exactly what we did, what results we achieved, and where every dollar went. Full transparency guaranteed.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#f59e0b]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-sync text-3xl text-[#f59e0b]"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-navy">Continuous Optimization</h3>
              <p className="text-gray-700">
                We don&apos;t &quot;set and forget.&quot; Our team actively monitors and optimizes your campaigns weekly, testing new strategies and doubling down on what works.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#f59e0b]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marked-alt text-3xl text-[#f59e0b]"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-navy">Local Sydney Expertise</h3>
              <p className="text-gray-700">
                Deep understanding of Sydney markets, local search behavior, and regional competition. We know what works for Sydney businesses because we&apos;ve done it hundreds of times.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#f59e0b]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-rocket text-3xl text-[#f59e0b]"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-navy">Fast Implementation</h3>
              <p className="text-gray-700">
                Get started within 48 hours. Our streamlined onboarding process means your campaigns launch quickly with minimal disruption to your day-to-day operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container">
          <div className="section-title">
            <h2>Our Growth Marketing Process</h2>
            <p>A proven methodology that turns clicks into customers</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#f59e0b] text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-primary-navy">Discovery & Audit</h3>
                <p className="text-gray-700 leading-relaxed">
                  We start by understanding your business goals, target audience, and competitive landscape. Comprehensive audit of your current marketing activities, website performance, and existing assets to identify opportunities and gaps.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#f59e0b] text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-primary-navy">Strategy Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  Custom marketing roadmap tailored to your budget and objectives. We define KPIs, channel strategy, content themes, and campaign structures designed to achieve your specific growth goals.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#f59e0b] text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-primary-navy">Implementation & Launch</h3>
                <p className="text-gray-700 leading-relaxed">
                  Rapid execution of your marketing strategy. We set up tracking, create campaigns, write ad copy, design creatives, optimize landing pages, and launch everything with precision and attention to detail.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#f59e0b] text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-primary-navy">Monitor & Optimize</h3>
                <p className="text-gray-700 leading-relaxed">
                  Weekly performance reviews and continuous optimization. We test ad variations, adjust targeting, refine keywords, improve conversion rates, and reallocate budget to maximize ROI across all channels.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#f59e0b] text-white rounded-full flex items-center justify-center font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-primary-navy">Report & Scale</h3>
                <p className="text-gray-700 leading-relaxed">
                  Monthly strategy sessions with transparent reporting on results, learnings, and recommendations. As campaigns prove successful, we scale winning strategies and explore new growth opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Metrics Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Real Results from Sydney Businesses</h2>
            <p>Measurable outcomes our clients achieve with DSIGNS growth marketing</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[#f59e0b] mb-2">3.2x</div>
              <div className="text-gray-700 font-medium">Average ROI</div>
              <div className="text-sm text-gray-600 mt-2">Across all marketing channels</div>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[#f59e0b] mb-2">247%</div>
              <div className="text-gray-700 font-medium">Traffic Increase</div>
              <div className="text-sm text-gray-600 mt-2">Average within 6 months</div>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[#f59e0b] mb-2">85%</div>
              <div className="text-gray-700 font-medium">Lead Quality Rate</div>
              <div className="text-sm text-gray-600 mt-2">Qualified leads ready to convert</div>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[#f59e0b] mb-2">42%</div>
              <div className="text-gray-700 font-medium">Cost Reduction</div>
              <div className="text-sm text-gray-600 mt-2">Lower cost per acquisition</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card border-l-4 border-[#f59e0b]">
              <div className="flex items-center gap-3 mb-3">
                <i className="fas fa-quote-left text-2xl text-[#f59e0b]"></i>
                <span className="font-bold text-primary-navy">Healthcare Services</span>
              </div>
              <p className="text-gray-700 mb-3">
                &quot;From 15 leads per month to 120+ qualified enquiries. Their SEO and Google Ads strategy transformed our business. We&apos;re now fully booked 3 months ahead.&quot;
              </p>
              <div className="text-sm text-gray-600">NDIS Provider, Sydney</div>
            </div>

            <div className="card border-l-4 border-[#f59e0b]">
              <div className="flex items-center gap-3 mb-3">
                <i className="fas fa-quote-left text-2xl text-[#f59e0b]"></i>
                <span className="font-bold text-primary-navy">Construction Business</span>
              </div>
              <p className="text-gray-700 mb-3">
                &quot;Went from page 3 to #1 on Google for our main keywords. The ROI has been incredible - we&apos;ve added $800K in new project revenue directly from their marketing.&quot;
              </p>
              <div className="text-sm text-gray-600">Civil Contractor, Sydney</div>
            </div>

            <div className="card border-l-4 border-[#f59e0b]">
              <div className="flex items-center gap-3 mb-3">
                <i className="fas fa-quote-left text-2xl text-[#f59e0b]"></i>
                <span className="font-bold text-primary-navy">Restaurant Business</span>
              </div>
              <p className="text-gray-700 mb-3">
                &quot;Their complete marketing package filled our venue consistently. Social media engagement up 400%, online orders tripled, and we opened a second location.&quot;
              </p>
              <div className="text-sm text-gray-600">Restaurant Owner, Sydney</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technology Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container">
          <div className="section-title">
            <h2>Enterprise Tools & Technology</h2>
            <p>We leverage industry-leading platforms to maximize your marketing performance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="card text-center hover:shadow-lg transition-all">
              <i className="fab fa-google text-4xl text-[#4285f4] mb-3"></i>
              <h3 className="font-bold text-primary-navy mb-2">Google Marketing Platform</h3>
              <p className="text-sm text-gray-600">Ads, Analytics, Search Console, Tag Manager</p>
            </div>

            <div className="card text-center hover:shadow-lg transition-all">
              <i className="fab fa-facebook text-4xl text-[#1877f2] mb-3"></i>
              <h3 className="font-bold text-primary-navy mb-2">Meta Business Suite</h3>
              <p className="text-sm text-gray-600">Facebook & Instagram Ads, Social Management</p>
            </div>

            <div className="card text-center hover:shadow-lg transition-all">
              <i className="fas fa-chart-bar text-4xl text-[#f59e0b] mb-3"></i>
              <h3 className="font-bold text-primary-navy mb-2">SEO Tools</h3>
              <p className="text-sm text-gray-600">Ahrefs, SEMrush, Moz Pro, Screaming Frog</p>
            </div>

            <div className="card text-center hover:shadow-lg transition-all">
              <i className="fas fa-envelope text-4xl text-[#f59e0b] mb-3"></i>
              <h3 className="font-bold text-primary-navy mb-2">Email & CRM</h3>
              <p className="text-sm text-gray-600">Mailchimp, ActiveCampaign, HubSpot</p>
            </div>

            <div className="card text-center hover:shadow-lg transition-all">
              <i className="fas fa-video text-4xl text-[#f59e0b] mb-3"></i>
              <h3 className="font-bold text-primary-navy mb-2">Content Creation</h3>
              <p className="text-sm text-gray-600">Adobe Creative Suite, Canva Pro, CapCut</p>
            </div>

            <div className="card text-center hover:shadow-lg transition-all">
              <i className="fas fa-code text-4xl text-[#f59e0b] mb-3"></i>
              <h3 className="font-bold text-primary-navy mb-2">Landing Pages</h3>
              <p className="text-sm text-gray-600">Custom development, Unbounce, Leadpages</p>
            </div>

            <div className="card text-center hover:shadow-lg transition-all">
              <i className="fas fa-mobile-alt text-4xl text-[#f59e0b] mb-3"></i>
              <h3 className="font-bold text-primary-navy mb-2">Call Tracking</h3>
              <p className="text-sm text-gray-600">CallRail, WhatConverts, Call Tracking Metrics</p>
            </div>

            <div className="card text-center hover:shadow-lg transition-all">
              <i className="fas fa-project-diagram text-4xl text-[#f59e0b] mb-3"></i>
              <h3 className="font-bold text-primary-navy mb-2">Project Management</h3>
              <p className="text-sm text-gray-600">Asana, Slack, Google Workspace</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700 max-w-3xl mx-auto">
              Access to $10,000+ worth of premium marketing tools included in all packages. No additional software costs - we provide everything needed for comprehensive growth marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Which Growth Strategy is Right for You?</h2>
            <p>Choose based on your business stage and growth objectives</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-navy">Early Stage Growth {/* ($250 - $3,000/month) */}</h3>
              <p className="text-gray-700 mb-4">
                Perfect for small businesses and startups building momentum. Focus on foundational marketing channels with measurable ROI.
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

            <div className="card bg-[#1e293b] text-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">Scale & Dominate {/* ($5,000 - $10,000/month) */}</h3>
              <p className="text-gray-700 mb-4">
                For established businesses with $1M+ annual revenue ready to aggressively scale. Multi-channel growth strategies with dedicated marketing teams.
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
            <p>Common questions about our growth marketing services</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Are there any lock-in contracts?",
                a: "No! All our growth marketing services are month-to-month with no long-term contracts. Cancel anytime with 30 days notice.",
              },
              {
                q: "Can I switch services anytime?",
                a: "Absolutely! You can upgrade or downgrade your marketing services anytime. We'll help you find the right strategy for your current growth stage.",
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
        title="Ready to Accelerate Your Growth?"
        description="Let&apos;s create a data-driven marketing strategy tailored to your business goals. Get a free growth consultation and custom roadmap."
        primaryButtonText="Get Growth Strategy"
        primaryButtonAction="consultation"
        secondaryButtonText="View Our Portfolio"
      />
    </>
  );
}
