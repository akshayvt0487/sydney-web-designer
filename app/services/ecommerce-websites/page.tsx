import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema, generateLocalBusinessSchema } from "@/lib/schemas";

export const metadata = generateMetadata({
  title: "E-commerce Website Design Sydney | Online Store Development",
  description: "Professional e-commerce website design in Sydney. Build profitable online stores with WooCommerce and custom solutions. Secure payment gateways, inventory management, and more.",
  keywords: "ecommerce website sydney, online store design sydney, woocommerce sydney, ecommerce development, online shop design, shopping cart website sydney",
  canonicalUrl: "https://sydneywebdesigner.com.au/services/ecommerce-websites",
  ogImage: "/images/og/services.svg",
});

export default function EcommerceWebsitesPage() {
  const service = services.find((s) => s.slug === "ecommerce-websites")!;

  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Services", url: "https://sydneywebdesigner.com.au/services" },
    { name: "E-commerce Websites", url: "https://sydneywebdesigner.com.au/services/ecommerce-websites" }
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
      <section className="bg-[#1e293b] text-white py-32 text-center relative">
        <div className="container max-w-4xl mx-auto px-8">
          <h1 className="text-6xl font-bold mb-6 text-white">E-commerce Websites Sydney</h1>
          <p className="text-2xl opacity-95 mb-10 text-white">Build a profitable online store with expert e-commerce solutions. From products to payments</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button data-popup="contact" className="btn btn-primary">Start Your Store</button>
            <Link href="#process" className="btn btn-secondary">Our Process</Link>
          </div>
          <div className="flex justify-center gap-12 mt-12 flex-wrap">
            <div className="text-center">
              <div className="text-4xl mb-2"><i className="fas fa-trophy text-[#f59e0b]"></i></div>
              <div className="text-sm opacity-90">13+ Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2"><i className="fas fa-star text-[#f59e0b]"></i></div>
              <div className="text-sm opacity-90">50+ 5-Star Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2"><i className="fas fa-check text-[#f59e0b]"></i></div>
              <div className="text-sm opacity-90">Professional Service</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2"><i className="fas fa-chart-line text-[#f59e0b]"></i></div>
              <div className="text-sm opacity-90">Proven Results</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-5xl font-bold text-center mb-16 text-[#1e293b]">Why Choose E-commerce Websites Sydney?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="bg-white p-10 rounded-3xl shadow-lg text-center hover:shadow-2xl transition-all border-t-4 border-[#f59e0b]">
              <div className="text-6xl font-bold text-[#f59e0b] mb-2">100+</div>
              <div className="text-gray-600 text-lg">Stores Launched</div>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg text-center hover:shadow-2xl transition-all border-t-4 border-[#f59e0b]">
              <div className="text-6xl font-bold text-[#f59e0b] mb-2">$5M+</div>
              <div className="text-gray-600 text-lg">Revenue Generated</div>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg text-center hover:shadow-2xl transition-all border-t-4 border-[#f59e0b]">
              <div className="text-6xl font-bold text-[#f59e0b] mb-2">3.2%</div>
              <div className="text-gray-600 text-lg">Avg Conversion</div>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg text-center hover:shadow-2xl transition-all border-t-4 border-[#f59e0b]">
              <div className="text-6xl font-bold text-[#f59e0b] mb-2">50+</div>
              <div className="text-gray-600 text-lg">Integrations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-5xl font-bold text-center mb-6 text-[#1e293b]">Our E-commerce Websites Sydney Services</h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">Comprehensive solutions designed to help your business succeed</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-[#f59e0b]">
              <div className="text-6xl mb-6"><i className="fas fa-shopping-cart text-[#f59e0b]"></i></div>
              <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">Store Setup</h3>
              <p className="text-gray-600 mb-6">Complete store build</p>
              <ul className="space-y-3">
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Product catalogs</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Categories</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Filters</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Search</span></li>
              </ul>
            </div>

            <div className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-[#f59e0b]">
              <div className="text-6xl mb-6"><i className="fas fa-credit-card text-[#f59e0b]"></i></div>
              <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">Payments</h3>
              <p className="text-gray-600 mb-6">Secure payment processing</p>
              <ul className="space-y-3">
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Multiple gateways</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Secure checkout</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Currency support</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Subscriptions</span></li>
              </ul>
            </div>

            <div className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-[#f59e0b]">
              <div className="text-6xl mb-6"><i className="fas fa-box text-[#f59e0b]"></i></div>
              <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">Shipping</h3>
              <p className="text-gray-600 mb-6">Shipping integration</p>
              <ul className="space-y-3">
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Shipping zones</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Rate calculation</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Tracking</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Fulfillment</span></li>
              </ul>
            </div>

            <div className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-[#f59e0b]">
              <div className="text-6xl mb-6"><i className="fas fa-chart-bar text-[#f59e0b]"></i></div>
              <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">Inventory</h3>
              <p className="text-gray-600 mb-6">Stock management</p>
              <ul className="space-y-3">
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Inventory tracking</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Low stock alerts</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>SKU management</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Variants</span></li>
              </ul>
            </div>

            <div className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-[#f59e0b]">
              <div className="text-6xl mb-6"><i className="fas fa-mobile-alt text-[#f59e0b]"></i></div>
              <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">Mobile Commerce</h3>
              <p className="text-gray-600 mb-6">Mobile shopping</p>
              <ul className="space-y-3">
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Mobile optimized</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>App-like UX</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Fast checkout</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Touch-friendly</span></li>
              </ul>
            </div>

            <div className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-[#f59e0b]">
              <div className="text-6xl mb-6"><i className="fas fa-search text-[#f59e0b]"></i></div>
              <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">E-commerce SEO</h3>
              <p className="text-gray-600 mb-6">Product visibility</p>
              <ul className="space-y-3">
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Product optimization</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Schema markup</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Site speed</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Content strategy</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24" id="process">
        <div className="container">
          <h2 className="text-5xl font-bold text-center mb-6 text-[#1e293b]">Our Proven Process</h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">A systematic approach to deliver outstanding results</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { num: 1, title: "Discovery", desc: "Deep dive into your business, goals, and requirements" },
              { num: 2, title: "Strategy", desc: "Develop custom strategy based on research and analysis" },
              { num: 3, title: "Planning", desc: "Create detailed roadmap and project timeline" },
              { num: 4, title: "Execution", desc: "Implement solution with attention to detail" },
              { num: 5, title: "Testing", desc: "Thorough quality assurance and optimization" },
              { num: 6, title: "Launch & Support", desc: "Deploy and provide ongoing support" }
            ].map((step) => (
              <div key={step.num} className="bg-white p-10 rounded-3xl shadow-lg text-center hover:scale-105 transition-all">
                <div className="w-24 h-24 bg-[#1e293b] text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-8 shadow-lg">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-5xl font-bold text-center mb-16 text-[#1e293b]">Real Results for Sydney Businesses</h2>

          <div className="space-y-12 max-w-5xl mx-auto">
            <div className="bg-white p-12 rounded-3xl shadow-lg">
              <div className="border-b-4 border-[#f59e0b] pb-6 mb-8">
                <h3 className="text-3xl font-bold mb-2 text-[#1e293b]">Castor Master</h3>
                <div className="text-[#f59e0b] font-semibold text-lg">Industrial Equipment</div>
              </div>
              <p className="text-gray-600 text-lg">E-commerce store with complex product configurations and wholesale ordering</p>
            </div>

            <div className="bg-white p-12 rounded-3xl shadow-lg">
              <div className="border-b-4 border-[#f59e0b] pb-6 mb-8">
                <h3 className="text-3xl font-bold mb-2 text-[#1e293b]">Online Retailer</h3>
                <div className="text-[#f59e0b] font-semibold text-lg">Fashion & Apparel</div>
              </div>
              <p className="text-gray-600 text-lg">Multi-category store with 500+ products and seamless checkout experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-5xl font-bold text-center mb-16 text-[#1e293b]">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { text: "Professional, responsive, and delivered exactly what we needed. The results have been fantastic and we've seen significant improvements.", author: "Sydney Business Owner", role: "Professional Services" },
              { text: "The team at Sydney Web Designer took the time to understand our business. Their expertise and transparent approach made the entire process smooth.", author: "Local Business", role: "Parramatta, NSW" },
              { text: "Highly recommend Sydney Web Designer for their professionalism and quality of work. They exceeded our expectations in every way.", author: "Sydney Client", role: "Service Provider" }
            ].map((review, i) => (
              <div key={i} className="bg-white p-12 rounded-3xl shadow-lg border-t-4 border-[#f59e0b]">
                <div className="text-3xl mb-6">
                  <i className="fas fa-star text-[#f59e0b]"></i>
                  <i className="fas fa-star text-[#f59e0b]"></i>
                  <i className="fas fa-star text-[#f59e0b]"></i>
                  <i className="fas fa-star text-[#f59e0b]"></i>
                  <i className="fas fa-star text-[#f59e0b]"></i>
                </div>
                <p className="text-gray-700 italic mb-8 text-lg leading-relaxed">&quot;{review.text}&quot;</p>
                <div className="font-bold text-[#1e293b]">{review.author}</div>
                <div className="text-gray-600 text-sm">{review.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-5xl font-bold text-center mb-6 text-[#1e293b]">E-commerce Websites Sydney Pricing</h2>
          <p className="text-center text-gray-600 mb-16">Choose the package that fits your needs and budget</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-10 rounded-3xl border-2 border-gray-200 hover:border-[#f59e0b] hover:-translate-y-2 transition-all">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">Starter</h3>
                <div className="text-5xl font-bold text-[#f59e0b] mb-2">$5,000-$8,000</div>
                <div className="text-gray-600">one-time</div>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Up to 50 products</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Payment gateway</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Shipping setup</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Mobile responsive</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Basic SEO</span></li>
              </ul>
              <button data-popup="contact" className="btn btn-outline w-full">Get Started</button>
            </div>

            <div className="bg-white p-10 rounded-3xl border-2 border-[#f59e0b] hover:-translate-y-2 transition-all relative shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f59e0b] text-white px-6 py-2 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">Growth</h3>
                <div className="text-5xl font-bold text-[#f59e0b] mb-2">$10,000-$20,000</div>
                <div className="text-gray-600">one-time</div>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Up to 500 products</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Advanced features</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Multiple gateways</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Custom integrations</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Advanced SEO</span></li>
              </ul>
              <button data-popup="contact" className="btn btn-primary w-full">Get Started</button>
            </div>

            <div className="bg-white p-10 rounded-3xl border-2 border-gray-200 hover:border-[#f59e0b] hover:-translate-y-2 transition-all">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">Enterprise</h3>
                <div className="text-5xl font-bold text-[#f59e0b] mb-2">$30,000+</div>
                <div className="text-gray-600">one-time</div>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Unlimited products</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Custom features</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>ERP integration</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Multi-currency</span></li>
                <li className="flex items-start"><i className="fas fa-check text-[#f59e0b] mt-1 mr-3"></i><span>Dedicated support</span></li>
              </ul>
              <button data-popup="contact" className="btn btn-outline w-full">Get Started</button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Form Section */}
      <section className="py-24" id="lead-form">
        <div className="container max-w-5xl">
          <div className="bg-[#1e293b] text-white p-16 rounded-3xl">
            <h3 className="text-4xl font-bold mb-4 text-center">Get Your Free Consultation</h3>
            <p className="text-center opacity-90 mb-12 text-lg">Tell us about your project and we&apos;ll provide expert advice and a custom quote</p>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-semibold">Full Name *</label>
                  <input type="text" required placeholder="Your name" className="w-full p-4 rounded-xl border-0 text-gray-900" />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Email *</label>
                  <input type="email" required placeholder="your@email.com" className="w-full p-4 rounded-xl border-0 text-gray-900" />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Phone *</label>
                  <input type="tel" required placeholder="04XX XXX XXX" className="w-full p-4 rounded-xl border-0 text-gray-900" />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Company</label>
                  <input type="text" placeholder="Your company (optional)" className="w-full p-4 rounded-xl border-0 text-gray-900" />
                </div>
              </div>
              <div>
                <label className="block mb-2 font-semibold">Tell us about your project</label>
                <textarea placeholder="What are you looking to achieve?" rows={4} className="w-full p-4 rounded-xl border-0 text-gray-900"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-white text-[#1e293b] px-6 md:px-10 lg:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition-all w-full sm:w-auto text-center">
                  Start Your Store
                </button>
                <p className="mt-4 text-sm opacity-80"><i className="fas fa-comment mr-2"></i>We&apos;ll respond within 24 hours</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1e293b] text-white py-24 text-center">
        <div className="container">
          <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-2xl mb-10 opacity-95">Let&apos;s discuss your project and create a custom solution for your business</p>
          <Link href="#lead-form" className="btn btn-white text-lg">Start Your Store</Link>
        </div>
      </section>
    </>
  );
}
