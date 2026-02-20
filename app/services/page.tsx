import Link from "next/link";
import { services } from "@/lib/constants";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema, generateLocalBusinessSchema } from "@/lib/schemas";

export const metadata = generateMetadata({
  title: "Services | Web Design & Digital Marketing Sydney",
  description: "Comprehensive web design, branding, and digital marketing services in Sydney. 13+ years experience delivering SEO, Google Ads, social media marketing, and more. Get a free quote today!",
  keywords: "web design services sydney, digital marketing services sydney, seo sydney, google ads sydney, branding services, wordpress development, ecommerce websites, social media marketing sydney",
  canonicalUrl: "https://sydneywebdesigner.com.au/services",
  ogImage: "/images/og/services.svg",
});

export default function ServicesPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Services", url: "https://sydneywebdesigner.com.au/services" }
  ];

  const serviceData = {
    name: "Web Design & Digital Marketing Services",
    description: "Comprehensive digital solutions including web design, branding, and digital marketing services for Sydney businesses. 13+ years of proven expertise.",
    provider: "Sydney Web Designer"
  };
  const webDesignServices = services.filter(s => s.category === "web-design");
  const brandingServices = services.filter(s => s.category === "branding");
  const marketingServices = services.filter(s => s.category === "digital-marketing");

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
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Services
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Comprehensive digital solutions to help your business grow. From web design to digital
              marketing, we have the expertise to drive real results.
            </p>
          </div>
        </div>
      </section>

      {/* Web Design Services */}
      <section className="py-20">
        <div className="container">
          <div className="section-title">
            <h2><i className="fas fa-laptop-code text-[#f59e0b]"></i> Web Design & Development</h2>
            <p>Professional websites that convert visitors into customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {webDesignServices.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.name}
                description={service.shortDescription}
                link={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Branding Services */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2><i className="fas fa-fingerprint text-[#f59e0b]"></i> Branding & Identity</h2>
            <p>Create a memorable brand that stands out from the competition</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {brandingServices.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.name}
                description={service.shortDescription}
                link={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Services */}
      <section className="py-20">
        <div className="container">
          <div className="section-title">
            <h2><i className="fas fa-chart-line text-[#f59e0b]"></i> Digital Marketing</h2>
            <p>Drive traffic, generate leads, and grow your revenue</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {marketingServices.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.name}
                description={service.shortDescription}
                link={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Sydney Web Designer for Your Digital Services?</h2>
            <p>Experience and expertise you can trust</p>
          </div>

          <div className="grid-3">
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-star text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">13+ Years Experience</h3>
              <p className="text-gray-600">
                Over a decade of proven success in web design, branding, and digital marketing across
                50+ industries.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-bullseye text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Results-Driven</h3>
              <p className="text-gray-600">
                We focus on measurable outcomes that impact your bottom line, not just vanity metrics.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-dollar-sign text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">
                Clear, upfront pricing with no hidden fees. Know exactly what you&apos;re paying for.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-handshake text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Service</h3>
              <p className="text-gray-600">
                Work directly with our founder. No call centers, no junior staff. Just experienced
                professionals.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-bolt text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Turnaround</h3>
              <p className="text-gray-600">
                Projects delivered on time, every time. We respect your deadlines and business needs.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-headset text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
              <p className="text-gray-600">
                24-hour response time and dedicated support long after your project launches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Options - HIDDEN */}
      {/* <section className="py-20">
        <div className="container">
          <div className="section-title">
            <h2>Flexible Pricing Options</h2>
            <p>Choose the solution that fits your needs and budget</p>
          </div>

          <div className="grid-2 max-w-4xl mx-auto">
            <div className="card text-center hover:shadow-card-hover transition-all">
              <h3 className="text-2xl font-bold mb-4 text-primary-navy">Web Design Plans</h3>
              <p className="text-gray-700 mb-6">
                One-time website projects with flexible packages starting from $3,000. Perfect for
                businesses launching a new website.
              </p>
              <Link href="/web-design-plans" className="btn btn-primary">
                View Web Design Plans
              </Link>
            </div>

            <div className="card text-center hover:shadow-card-hover transition-all">
              <h3 className="text-2xl font-bold mb-4 text-primary-navy">Growth Plans</h3>
              <p className="text-gray-700 mb-6">
                Monthly retainer packages from $250/month. Ongoing support, marketing, and optimization
                to grow your business.
              </p>
              <Link href="/growth-plans" className="btn btn-primary">
                View Growth Plans
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Let&apos;s discuss which services are right for your business. Get a free consultation and custom quote."
        primaryButtonText="Get Free Quote"
        primaryButtonAction="contact"
      />
    </>
  );
}
