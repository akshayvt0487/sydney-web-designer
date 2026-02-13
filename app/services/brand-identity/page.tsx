import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema, generateLocalBusinessSchema } from "@/lib/schemas";

export const metadata = generateMetadata({
  title: "Brand Identity Design Sydney | Complete Branding Packages",
  description: "Complete brand identity design services in Sydney. Full branding packages including logo, color systems, typography, and brand guidelines. Create consistent, memorable brand experiences.",
  keywords: "brand identity design sydney, branding sydney, logo design, brand guidelines, complete branding package, visual identity sydney, corporate identity design",
  canonicalUrl: "https://sydneywebdesigner.com.au/services/brand-identity",
  ogImage: "/images/og/services.svg",
});

export default function BrandIdentityPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Services", url: "https://sydneywebdesigner.com.au/services" },
    { name: "Brand Identity", url: "https://sydneywebdesigner.com.au/services/brand-identity" }
  ];

  const serviceData = {
    name: "Brand Identity Design",
    description: "Complete brand identity systems that create consistent, memorable brand experiences. Includes logo design, color systems, typography, brand guidelines, and marketing materials.",
    provider: "Sydney Web Designer"
  };
  const stats = [
    { number: "200+", label: "Brands Created" },
    { number: "85%", label: "Brand Recall" },
    { number: "Full", label: "Identity Packages" },
    { number: "13+", label: "Years Experience" },
  ];

  const features = [
    {
      icon: "fas fa-palette",
      title: "Logo & Visual Identity",
      description: "Complete logo system",
      items: ["Primary logo", "Variations", "Icon versions", "Usage rules"],
    },
    {
      icon: "fas fa-bullseye",
      title: "Color System",
      description: "Strategic color palette",
      items: ["Primary palette", "Secondary colors", "Accent colors", "Color psychology"],
    },
    {
      icon: "fas fa-pen-fancy",
      title: "Typography",
      description: "Font selection",
      items: ["Primary font", "Secondary font", "Web fonts", "Hierarchy system"],
    },
    {
      icon: "fas fa-book",
      title: "Brand Guidelines",
      description: "Comprehensive guide",
      items: ["Logo usage", "Color systems", "Typography", "Applications"],
    },
    {
      icon: "fas fa-file-alt",
      title: "Stationery Design",
      description: "Business materials",
      items: ["Business cards", "Letterhead", "Email signature", "Templates"],
    },
    {
      icon: "fas fa-briefcase",
      title: "Brand Collateral",
      description: "Marketing materials",
      items: ["Presentation templates", "Social media", "Documents", "Guidelines"],
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Discovery",
      description: "Deep dive into your business, goals, and requirements",
    },
    {
      number: 2,
      title: "Strategy",
      description: "Develop custom strategy based on research and analysis",
    },
    {
      number: 3,
      title: "Planning",
      description: "Create detailed roadmap and project timeline",
    },
    {
      number: 4,
      title: "Execution",
      description: "Implement solution with attention to detail",
    },
    {
      number: 5,
      title: "Testing",
      description: "Thorough quality assurance and optimization",
    },
    {
      number: 6,
      title: "Launch & Support",
      description: "Deploy and provide ongoing support",
    },
  ];

  const caseStudies = [
    {
      title: "Actuate Property",
      industry: "Property Services",
      description: "Premium brand identity positioning firm as high-end buyers agent",
    },
    {
      title: "Castor Master",
      industry: "Industrial",
      description: "Professional brand identity reflecting quality and reliability",
    },
  ];

  const testimonials = [
    {
      text: "Professional, responsive, and delivered exactly what we needed. The results have been fantastic and we've seen significant improvements.",
      author: "Sydney Business Owner",
      role: "Professional Services",
    },
    {
      text: "The team at Sydney Web Designer took the time to understand our business. Their expertise and transparent approach made the entire process smooth.",
      author: "Local Business",
      role: "Parramatta, NSW",
    },
    {
      text: "Highly recommend Sydney Web Designer for their professionalism and quality of work. They exceeded our expectations in every way.",
      author: "Sydney Client",
      role: "Service Provider",
    },
  ];

  const pricingOptions = [
    {
      name: "Starter",
      price: "$3,000-$5,000",
      period: "one-time",
      features: ["Logo design", "Color palette", "Typography", "Basic guidelines", "Business cards"],
    },
    {
      name: "Growth",
      price: "$6,000-$10,000",
      period: "one-time",
      featured: true,
      features: ["Complete identity", "Full guidelines", "Stationery suite", "Templates", "Brand book"],
    },
    {
      name: "Enterprise",
      price: "$15,000+",
      period: "one-time",
      features: ["Full brand strategy", "Extensive identity", "Marketing collateral", "Brand book", "Implementation support"],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(serviceData.name, serviceData.description)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
      />

      {/* Hero Section */}
      <section className="bg-[#1e293b] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Brand Identity Design Sydney
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              Develop a complete brand identity system including logo, colors, typography, and brand guidelines
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button data-popup="contact" className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-4 rounded-full font-semibold transition-all">
                Build My Brand
              </button>
              <a href="#process" className="border-2 border-white hover:bg-white hover:text-[#1e293b] text-white px-8 py-4 rounded-full font-semibold transition-all">
                Our Process
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-2"><i className="fas fa-trophy"></i></div>
                <div className="text-sm">13+ Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2"><i className="fas fa-star"></i></div>
                <div className="text-sm">50+ 5-Star Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2"><i className="fas fa-check-circle"></i></div>
                <div className="text-sm">Professional Service</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2"><i className="fas fa-chart-line"></i></div>
                <div className="text-sm">Proven Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1e293b]">
            Why Choose Brand Identity Design Sydney?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow border-t-4 border-[#f59e0b]"
              >
                <div className="text-5xl font-bold text-[#f59e0b] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#1e293b]">
              Our Brand Identity Design Sydney Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions designed to help your business succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-[#f59e0b]"
              >
                <div className="text-5xl mb-4 text-[#f59e0b]">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#1e293b]">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <i className="fas fa-check text-[#f59e0b] mr-2 mt-1"></i>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#1e293b]">Our Proven Process</h2>
            <p className="text-xl text-gray-600">
              A systematic approach to deliver outstanding results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="w-20 h-20 bg-[#1e293b] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#1e293b]">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1e293b]">
            Real Results for Sydney Businesses
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="border-b-2 border-[#f59e0b] pb-4 mb-4">
                  <h3 className="text-2xl font-bold text-[#1e293b] mb-2">
                    {study.title}
                  </h3>
                  <div className="text-[#f59e0b] font-semibold">
                    {study.industry}
                  </div>
                </div>
                <p className="text-gray-700">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1e293b]">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#f59e0b]"
              >
                <div className="text-[#f59e0b] text-2xl mb-4">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>
                <div className="font-bold text-[#1e293b]">{testimonial.author}</div>
                <div className="text-gray-600 text-sm">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#1e293b]">
              Brand Identity Design Sydney Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the package that fits your needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingOptions.map((option, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg relative ${
                  option.featured ? "border-2 border-[#f59e0b]" : ""
                }`}
              >
                {option.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#f59e0b] text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">
                    {option.name}
                  </h3>
                  <div className="text-4xl font-bold text-[#f59e0b] mb-2">
                    {option.price}
                  </div>
                  <div className="text-gray-600 mb-6">{option.period}</div>
                  <ul className="text-left space-y-3 mb-8">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <i className="fas fa-check text-[#f59e0b] mr-2 mt-1"></i>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    data-popup="contact"
                    className={`w-full py-3 rounded-full font-semibold transition-all ${
                      option.featured
                        ? "bg-[#f59e0b] hover:bg-[#d97706] text-white"
                        : "border-2 border-[#1e293b] hover:bg-[#1e293b] hover:text-white text-[#1e293b]"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#1e293b] p-12 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-4 text-center">
              Get Your Free Consultation
            </h3>
            <p className="text-center mb-8 text-gray-300">
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
                    className="w-full p-3 rounded-lg text-gray-900"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full p-3 rounded-lg text-gray-900"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="04XX XXX XXX"
                    className="w-full p-3 rounded-lg text-gray-900"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Company</label>
                  <input
                    type="text"
                    placeholder="Your company (optional)"
                    className="w-full p-3 rounded-lg text-gray-900"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 font-semibold">Tell us about your project</label>
                <textarea
                  placeholder="What are you looking to achieve?"
                  rows={4}
                  className="w-full p-3 rounded-lg text-gray-900"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-white text-[#1e293b] px-12 py-4 rounded-full font-bold hover:bg-gray-100 transition-all"
                >
                  Build My Brand
                </button>
                <p className="mt-4 text-sm text-gray-300">
                  <i className="fas fa-comment"></i> We'll respond within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e293b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution for your business
          </p>
          <button
            data-popup="contact"
            className="bg-white text-[#1e293b] px-12 py-4 rounded-full font-bold hover:bg-gray-100 transition-all"
          >
            Build My Brand
          </button>
        </div>
      </section>
    </>
  );
}
