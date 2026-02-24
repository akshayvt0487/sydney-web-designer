import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = generateMetadata({
  title: "Web Design Plans & Pricing",
  description: "Transparent web design pricing for Sydney businesses. Custom packages for every budget. From startups to enterprise. Get a free quote today!",
  keywords: "web design pricing sydney, website cost, web design packages",
  canonicalUrl: "https://sydneywebdesigner.com.au/web-design-plans",
});

export default function WebDesignPlansPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Web Design Plans", url: "https://sydneywebdesigner.com.au/web-design-plans" },
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
              Web Design Plans & Pricing
            </h1>
            <p className="text-xl text-white mb-8">
              Transparent pricing with no hidden fees. Choose the perfect package for your business
              needs and budget. All plans include professional design, mobile responsiveness, and SEO.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20">
        <div className="container">
          <div className="section-title">
            <h2>Choose Your Plan</h2>
            <p>Professional websites at every budget level</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Package */}
            <div className="card hover:shadow-card-hover transition-all flex flex-col">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-primary-navy">Basic Package</h3>
                {/* <div className="text-4xl font-bold text-primary-orange mb-2">$3,000 - $5,000</div> */}
                {/* <p className="text-gray-600">+ GST</p> */}
                <p className="text-sm text-gray-500 mt-2">Perfect for startups & small businesses</p>
              </div>

              <div className="flex-grow space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">3-5 pages website</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Mobile responsive design</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Basic SEO setup</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Contact form integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Social media links</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Content Management System (CMS)</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Google Analytics setup</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">1 month post-launch support</span>
                </div>
              </div>

              <button data-popup="contact" className="btn btn-secondary w-full">
                Get Started
              </button>
            </div>

            {/* Advanced Package - Most Popular */}
            <div className="card hover:shadow-card-hover transition-all flex flex-col border-4 border-primary-orange relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-orange text-white px-6 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>

              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold mb-2 text-primary-navy">Advanced Package</h3>
                {/* <div className="text-4xl font-bold text-primary-orange mb-2">$7,000 - $10,000</div> */}
                {/* <p className="text-gray-600">+ GST</p> */}
                <p className="text-sm text-gray-500 mt-2">Ideal for growing businesses</p>
              </div>

              <div className="flex-grow space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">10-20 pages website</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Custom design & branding</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Advanced SEO optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Blog integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">E-commerce functionality (up to 50 products)</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Email marketing integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Performance optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Advanced analytics & tracking</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">SSL certificate included</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">3 months post-launch support</span>
                </div>
              </div>

              <button data-popup="contact" className="btn btn-primary w-full">
                Get Started
              </button>
            </div>

            {/* Premium Package */}
            <div className="card hover:shadow-card-hover transition-all flex flex-col">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-primary-navy">Premium Package</h3>
                {/* <div className="text-4xl font-bold text-primary-orange mb-2">$25,000+</div> */}
                {/* <p className="text-gray-600">+ GST</p> */}
                <p className="text-sm text-gray-500 mt-2">Enterprise-level solutions</p>
              </div>

              <div className="flex-grow space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">50+ pages website</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Fully custom development</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Advanced functionality & features</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Multi-language support</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Custom integrations & APIs</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Dedicated project manager</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Priority support & maintenance</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Training sessions for your team</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Advanced security features</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Custom admin dashboard</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">6 months post-launch support</span>
                </div>
              </div>

              <button data-popup="contact" className="btn btn-secondary w-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>What&apos;s Included in Every Plan</h2>
            <p>Professional quality guaranteed</p>
          </div>

          <div className="grid-3">
            <div className="card text-center">
              <div className="mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex items-center justify-center mx-auto">
                  <i className="fas fa-palette text-4xl text-white"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Design</h3>
              <p className="text-gray-600">
                Modern, clean designs that reflect your brand and engage your visitors.
              </p>
            </div>

            <div className="card text-center">
              <div className="mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex items-center justify-center mx-auto">
                  <i className="fas fa-mobile-alt text-4xl text-white"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile Responsive</h3>
              <p className="text-gray-600">
                Perfectly optimized for all devices - smartphones, tablets, and desktops.
              </p>
            </div>

            <div className="card text-center">
              <div className="mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex items-center justify-center mx-auto">
                  <i className="fas fa-search text-4xl text-white"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">SEO Optimized</h3>
              <p className="text-gray-600">
                Built with search engine best practices to help you rank higher on Google.
              </p>
            </div>

            <div className="card text-center">
              <div className="mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex items-center justify-center mx-auto">
                  <i className="fas fa-bolt text-4xl text-white"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Loading</h3>
              <p className="text-gray-600">
                Optimized for speed to provide the best user experience and better SEO.
              </p>
            </div>

            <div className="card text-center">
              <div className="mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex items-center justify-center mx-auto">
                  <i className="fas fa-lock text-4xl text-white"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Secure & Safe</h3>
              <p className="text-gray-600">
                SSL certificates, security updates, and best practices to keep your site secure.
              </p>
            </div>

            <div className="card text-center">
              <div className="mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex items-center justify-center mx-auto">
                  <i className="fas fa-headset text-4xl text-white"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
              <p className="text-gray-600">
                Post-launch support included with every package. We&apos;re here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="section-title">
            <h2>Our Process</h2>
            <p>From concept to launch in 4-8 weeks</p>
          </div>

          <div className="grid-2 md:grid-cols-4">
            <div className="card text-center">
              <div className="w-16 h-16 bg-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Discovery</h3>
              <p className="text-sm text-gray-600">We learn about your business, goals, and target audience</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Design</h3>
              <p className="text-sm text-gray-600">Create custom designs tailored to your brand</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Development</h3>
              <p className="text-sm text-gray-600">Build your website with modern technologies</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Launch</h3>
              <p className="text-sm text-gray-600">Go live and start attracting customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our pricing</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Do you offer payment plans?",
                a: "Yes! We offer flexible payment plans with 50% deposit and 50% on completion. For larger projects, we can arrange monthly payment options.",
              },
              {
                q: "What's included in post-launch support?",
                a: "Post-launch support includes bug fixes, minor content updates, technical assistance, and answering any questions you have about managing your website.",
              },
              {
                q: "How long does it take to build a website?",
                a: "Basic packages typically take 2-4 weeks, Advanced packages 4-6 weeks, and Premium packages 8-12 weeks depending on complexity.",
              },
              {
                q: "Can I upgrade my package later?",
                a: "Absolutely! You can start with a basic package and add features or upgrade to a higher tier anytime.",
              },
              {
                q: "Do I own the website after completion?",
                a: "Yes! You own all rights to your website, content, and code upon final payment.",
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
        title="Ready to Get Started?"
        description="Let&apos;s discuss which plan is right for your business. Get a free consultation and custom quote."
        primaryButtonText="Get Free Quote"
        primaryButtonAction="contact"
        secondaryButtonText="View Our Portfolio"
      />
    </>
  );
}
