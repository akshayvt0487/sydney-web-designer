import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema, generateLocalBusinessSchema } from "@/lib/schemas";
import ServiceHeroSection from "@/components/ServiceHeroSection";

export const metadata = generateMetadata({
  title: "WordPress Development Sydney | Custom WordPress Websites",
  description: "Professional WordPress development services in Sydney. Custom themes, plugins, and complete WooCommerce solutions. 13+ years experience with 200+ WordPress sites delivered.",
  keywords: "wordpress development sydney, custom wordpress sydney, wordpress developer, woocommerce sydney, wordpress website design, wordpress expert sydney",
  canonicalUrl: "https://sydneywebdesigner.com.au/services/wordpress-development",
  ogImage: "/images/og/services.svg",
});

export default function WordPressDevelopmentPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Services", url: "https://sydneywebdesigner.com.au/services" },
    { name: "WordPress Development", url: "https://sydneywebdesigner.com.au/services/wordpress-development" }
  ];

  const serviceData = {
    name: "WordPress Development",
    description: "Expert WordPress development services including custom themes, plugin development, WooCommerce integration, and complete WordPress solutions for Sydney businesses. Fast, secure, and optimized.",
    provider: "Sydney Web Designer"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(serviceData.name, serviceData.description)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
      />
      {/* Hero Section */}
      <ServiceHeroSection
        badge={{
          icon: "fab fa-wordpress",
          text: "WordPress Specialists"
        }}
        heading="WordPress Development Sydney"
        description="Expert WordPress development for Sydney businesses. Custom themes, plugins, and complete solutions tailored to your needs."
        buttons={{
          primary: {
            text: "Start WordPress Project",
            dataPopup: "contact"
          },
          secondary: {
            text: "Our Process",
            href: "#process"
          }
        }}
      />

      {/* Trust Badges Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="mb-2"><i className="fas fa-trophy text-4xl text-[#f59e0b]"></i></div>
              <div className="text-sm text-gray-600">13+ Years Experience</div>
            </div>
            <div className="text-center">
              <div className="mb-2"><i className="fas fa-star text-4xl text-[#f59e0b]"></i></div>
              <div className="text-sm text-gray-600">50+ 5-Star Reviews</div>
            </div>
            <div className="text-center">
              <div className="mb-2"><i className="fas fa-check-circle text-4xl text-[#f59e0b]"></i></div>
              <div className="text-sm text-gray-600">Professional Service</div>
            </div>
            <div className="text-center">
              <div className="mb-2"><i className="fas fa-chart-bar text-4xl text-[#f59e0b]"></i></div>
              <div className="text-sm text-gray-600">Proven Results</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-[#1e293b] mb-6">
            Why Choose WordPress Development Sydney?
          </h2>
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <div className="bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] text-center border-t-4 border-[#f59e0b]">
              <div className="text-6xl font-bold text-[#f59e0b] mb-2">200+</div>
              <div className="text-[#64748b] text-lg">WordPress Sites</div>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] text-center border-t-4 border-[#f59e0b]">
              <div className="text-6xl font-bold text-[#f59e0b] mb-2">98%</div>
              <div className="text-[#64748b] text-lg">Uptime</div>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] text-center border-t-4 border-[#f59e0b]">
              <div className="text-6xl font-bold text-[#f59e0b] mb-2">50%</div>
              <div className="text-[#64748b] text-lg">Faster Loading</div>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] text-center border-t-4 border-[#f59e0b]">
              <div className="text-6xl font-bold text-[#f59e0b] mb-2">13+</div>
              <div className="text-[#64748b] text-lg">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-8 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-[#1e293b] mb-6">
            Our WordPress Development Sydney Services
          </h2>
          <p className="text-center text-xl text-[#64748b] max-w-3xl mx-auto mb-12">
            Comprehensive solutions designed to help your business succeed
          </p>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#f59e0b]/30">
              <div className="mb-6"><i className="fas fa-palette text-5xl text-[#f59e0b]"></i></div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-3">Custom Themes</h3>
              <p className="text-[#64748b] mb-6">Unique WordPress themes</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>Custom design</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>Responsive</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>Customization</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>Optimized</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#f59e0b]/30">
              <div className="mb-6"><i className="fas fa-plug text-5xl text-[#f59e0b]"></i></div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-3">Plugin Development</h3>
              <p className="text-[#64748b] mb-6">Custom functionality</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>Custom plugins</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>Integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>API connections</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>Third-party</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#f59e0b]/30">
              <div className="mb-6"><i className="fas fa-shopping-cart text-5xl text-[#f59e0b]"></i></div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-3">WooCommerce</h3>
              <p className="text-[#64748b] mb-6">E-commerce solutions</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>Product catalogs</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>Payment gateways</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>Shipping</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>Inventory</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#f59e0b]/30">
              <div className="mb-6"><i className="fas fa-bolt text-5xl text-[#f59e0b]"></i></div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-3">Performance</h3>
              <p className="text-[#64748b] mb-6">Fast WordPress sites</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>Caching</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>Image optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>Database</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>CDN</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#f59e0b]/30">
              <div className="mb-6"><i className="fas fa-lock text-5xl text-[#f59e0b]"></i></div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-3">Security</h3>
              <p className="text-[#64748b] mb-6">Enterprise security</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>Security audits</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>Malware protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>SSL</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>Backups</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#f59e0b]/30">
              <div className="mb-6"><i className="fas fa-wrench text-5xl text-[#f59e0b]"></i></div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-3">Maintenance</h3>
              <p className="text-[#64748b] mb-6">Ongoing support</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>Core updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>Plugin updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>Security monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b] text-xl"></i>
                  <span>Performance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-8" id="process">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-[#1e293b] mb-6">
            Our Proven Process
          </h2>
          <p className="text-center text-xl text-[#64748b] max-w-3xl mx-auto mb-12">
            A systematic approach to deliver outstanding results
          </p>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="text-center bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="w-24 h-24 bg-[#1e293b] text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-8 shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Discovery</h3>
              <p className="text-[#64748b]">
                Deep dive into your business, goals, and requirements
              </p>
            </div>

            <div className="text-center bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="w-24 h-24 bg-[#1e293b] text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-8 shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Strategy</h3>
              <p className="text-[#64748b]">
                Develop custom strategy based on research and analysis
              </p>
            </div>

            <div className="text-center bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="w-24 h-24 bg-[#1e293b] text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-8 shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Planning</h3>
              <p className="text-[#64748b]">
                Create detailed roadmap and project timeline
              </p>
            </div>

            <div className="text-center bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="w-24 h-24 bg-[#1e293b] text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-8 shadow-lg">
                4
              </div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Execution</h3>
              <p className="text-[#64748b]">
                Implement solution with attention to detail
              </p>
            </div>

            <div className="text-center bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="w-24 h-24 bg-[#1e293b] text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-8 shadow-lg">
                5
              </div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Testing</h3>
              <p className="text-[#64748b]">
                Thorough quality assurance and optimization
              </p>
            </div>

            <div className="text-center bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="w-24 h-24 bg-[#1e293b] text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-8 shadow-lg">
                6
              </div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Launch & Support</h3>
              <p className="text-[#64748b]">
                Deploy and provide ongoing support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 px-8 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-[#1e293b] mb-16">
            Real Results for Sydney Businesses
          </h2>

          <div className="space-y-12">
            <div className="bg-white p-12 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="border-b-4 border-[#f59e0b] pb-6 mb-8">
                <h3 className="text-3xl font-bold text-[#1e293b] mb-2">The Tspoon Cafe</h3>
                <div className="text-[#f59e0b] font-semibold text-lg">Restaurant</div>
              </div>
              <p className="text-[#64748b] text-lg">
                Custom WordPress theme with menu integration and 40% online order increase
              </p>
            </div>

            <div className="bg-white p-12 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="border-b-4 border-[#f59e0b] pb-6 mb-8">
                <h3 className="text-3xl font-bold text-[#1e293b] mb-2">Deepslice Pizza</h3>
                <div className="text-[#f59e0b] font-semibold text-lg">Pizza Restaurant</div>
              </div>
              <p className="text-[#64748b] text-lg">
                WooCommerce integration driving online sales and customer engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-[#1e293b] mb-16">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-t-4 border-[#f59e0b]">
              <div className="text-[#f59e0b] text-2xl mb-6">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-[#64748b] italic text-lg leading-relaxed mb-8">
                "Professional, responsive, and delivered exactly what we needed. The results have been fantastic and we've seen significant improvements."
              </p>
              <div className="font-semibold text-[#1e293b]">Sydney Business Owner</div>
              <div className="text-[#64748b] text-sm">Professional Services</div>
            </div>

            <div className="bg-white p-12 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-t-4 border-[#f59e0b]">
              <div className="text-[#f59e0b] text-2xl mb-6">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-[#64748b] italic text-lg leading-relaxed mb-8">
                "The team at Sydney Web Designer took the time to understand our business. Their expertise and transparent approach made the entire process smooth."
              </p>
              <div className="font-semibold text-[#1e293b]">Local Business</div>
              <div className="text-[#64748b] text-sm">Parramatta, NSW</div>
            </div>

            <div className="bg-white p-12 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-t-4 border-[#f59e0b]">
              <div className="text-[#f59e0b] text-2xl mb-6">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-[#64748b] italic text-lg leading-relaxed mb-8">
                "Highly recommend Sydney Web Designer for their professionalism and quality of work. They exceeded our expectations in every way."
              </p>
              <div className="font-semibold text-[#1e293b]">Sydney Client</div>
              <div className="text-[#64748b] text-sm">Service Provider</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="py-24 px-8 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-[#1e293b] mb-4">
              WordPress Development Sydney Pricing
            </h2>
            <p className="text-[#64748b] text-xl">
              Choose the package that fits your needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-10 rounded-2xl border-2 border-gray-200 text-center hover:border-[#f59e0b] transition-all">
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Starter</h3>
              <div className="text-4xl font-bold text-[#f59e0b] mb-2">$4,000-$7,000</div>
              <div className="text-[#64748b] mb-8">one-time</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b]"></i>
                  <span>Custom theme</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b]"></i>
                  <span>Plugin setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b]"></i>
                  <span>Basic customization</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b]"></i>
                  <span>Security setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b]"></i>
                  <span>Training</span>
                </li>
              </ul>
              <button data-popup="contact" className="w-full bg-transparent border-2 border-[#1e293b] text-[#1e293b] px-8 py-3 rounded-full font-semibold hover:bg-[#1e293b] hover:text-white transition-all">
                Get Started
              </button>
            </div>

            <div className="bg-white p-10 rounded-2xl border-2 border-[#f59e0b] text-center relative shadow-xl">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f59e0b] text-white px-6 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4 mt-4">Growth</h3>
              <div className="text-4xl font-bold text-[#f59e0b] mb-2">$8,000-$15,000</div>
              <div className="text-[#64748b] mb-8">one-time</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b]"></i>
                  <span>Advanced theme</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b]"></i>
                  <span>Custom plugins</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b]"></i>
                  <span>WooCommerce</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b]"></i>
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b]"></i>
                  <span>3 months support</span>
                </li>
              </ul>
              <button data-popup="contact" className="w-full bg-[#f59e0b] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#d97706] transition-all">
                Get Started
              </button>
            </div>

            <div className="bg-white p-10 rounded-2xl border-2 border-gray-200 text-center hover:border-[#f59e0b] transition-all">
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-[#f59e0b] mb-2">$20,000+</div>
              <div className="text-[#64748b] mb-8">one-time</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b]"></i>
                  <span>Fully custom build</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b]"></i>
                  <span>Complex features</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b]"></i>
                  <span>Integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b]"></i>
                  <span>Enterprise security</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-[#f59e0b]"></i>
                  <span>6 months support</span>
                </li>
              </ul>
              <button data-popup="contact" className="w-full bg-transparent border-2 border-[#1e293b] text-[#1e293b] px-8 py-3 rounded-full font-semibold hover:bg-[#1e293b] hover:text-white transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Lead Form Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1e293b] p-16 rounded-3xl text-white">
            <h3 className="text-4xl font-bold mb-4 text-center text-white">
              Get Your Free Consultation
            </h3>
            <p className="text-center text-lg mb-12 opacity-90">
              Tell us about your project and we'll provide expert advice and a custom quote
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-semibold">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border-none text-[#1e293b]"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border-none text-[#1e293b]"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="04XX XXX XXX"
                    className="w-full px-4 py-3 rounded-xl border-none text-[#1e293b]"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Company</label>
                  <input
                    type="text"
                    placeholder="Your company (optional)"
                    className="w-full px-4 py-3 rounded-xl border-none text-[#1e293b]"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-semibold">Tell us about your project</label>
                <textarea
                  placeholder="What are you looking to achieve?"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-none text-[#1e293b] resize-none"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-white text-[#1e293b] px-6 md:px-10 lg:px-12 py-3 md:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all w-full sm:w-auto text-center"
                >
                  Start WordPress Project
                </button>
                <p className="mt-4 text-sm opacity-80"><i className="fas fa-comment-dots"></i> We'll respond within 24 hours</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1e293b] text-white py-24 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-2xl mb-10 opacity-90">
            Let's discuss your project and create a custom solution for your business
          </p>
          <button data-popup="contact" className="bg-transparent border-2 border-white text-white px-6 md:px-10 lg:px-12 py-3 md:py-4 lg:py-5 rounded-full font-semibold text-base md:text-lg lg:text-xl hover:bg-white hover:text-[#1e293b] transition-all w-full sm:w-auto text-center">
            Start WordPress Project
          </button>
        </div>
      </section>
    </>
  );
}
