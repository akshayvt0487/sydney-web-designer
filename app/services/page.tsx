import { services } from "@/lib/constants";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { generateMetadata } from "@/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateLocalBusinessSchema,
} from "@/lib/schemas";

export const metadata = generateMetadata({
  title: "Services | Web Design & Digital Marketing Sydney",
  description:
    "Comprehensive web design and digital marketing services in Sydney. 13+ years experience delivering SEO, Google Ads, social media marketing, and more. Get a free quote today!",
  keywords:
    "web design services sydney, digital marketing services sydney, seo sydney, google ads sydney, wordpress development, ecommerce websites, social media marketing sydney",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/services",
  ogImage: "/images/og/services.svg",
});

export default function ServicesPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    {
      name: "Services",
      url: "https://www.sydneywebdesigner.com.au/services",
    },
  ];

  const serviceData = {
    name: "Web Design & Digital Marketing Services",
    description:
      "Comprehensive digital solutions including web design and digital marketing services for Sydney businesses. 13+ years of proven expertise.",
    provider: "Sydney Web Designer",
  };

  const webDesignServices = services.filter(
    (service) => service.category === "web-design"
  );

  const marketingServices = services.filter(
    (service) => service.category === "digital-marketing"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema(serviceData.name, serviceData.description)
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />

      <div className="services-index-paper paper-grain">
        {/* Hero Section */}
        <section className="services-index-hero">
          <div className="container">
            <div className="services-index-hero__content">
              <span className="services-index-hero__kicker">
                Digital Marketing Sydney
              </span>

              <h1 className="services-index-hero__title">
                Comprehensive Digital Solutions That Drive Growth
              </h1>

              <p className="services-index-hero__description">
                Comprehensive digital solutions to help your business grow. From
                web design to digital marketing, we have the expertise to drive
                real results.
              </p>
            </div>

            <div className="services-index-hero__art" aria-hidden="true">
              <div className="services-index-hero__art-inner">
                <span className="services-index-hero__art-label">
                  Digital Solutions
                </span>

                <div className="services-index-hero__art-rule" />

                <div className="services-index-hero__art-grid">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="services-index-hero__art-circle" />
              </div>
            </div>
          </div>
        </section>

        {/* Web Design Services */}
        <section className="services-index-section services-index-section--light">
          <div className="container">
            <header className="services-index-heading">
              <span className="services-index-heading__kicker">
                Web Design
              </span>

              <h2 className="services-index-heading__title">
                Web Design &amp; <span>Development</span>
              </h2>

              <p className="services-index-heading__copy">
                Professional websites that convert visitors into customers
              </p>
            </header>

            <div className="services-index-grid">
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

        {/* Digital Marketing Services */}
        <section className="services-index-section services-index-section--dark">
          <div className="container">
            <header className="services-index-heading services-index-heading--dark">
              <span className="services-index-heading__kicker">
                Growth Marketing
              </span>

              <h2 className="services-index-heading__title">
                Digital <span>Marketing</span>
              </h2>

              <p className="services-index-heading__copy">
                Drive traffic, generate leads, and grow your revenue
              </p>
            </header>

            <div className="services-index-grid">
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
        <section className="services-index-section services-index-benefits">
          <div className="container">
            <header className="services-index-heading services-index-heading--center">
              <span className="services-index-heading__kicker">
                Why Choose Us
              </span>

              <h2 className="services-index-heading__title">
                Why Choose Sydney Web Designer for Your Digital{" "}
                <span>Services</span>?
              </h2>

              <p className="services-index-heading__copy">
                Experience and expertise you can trust
              </p>
            </header>

            <div className="services-index-benefits__grid">
              <article className="services-index-benefit">
                <div className="services-index-benefit__top">
                  <span>01</span>
                  <i className="fas fa-star" aria-hidden="true" />
                </div>

                <h3>13+ Years Experience</h3>

                <p>
                  Over a decade of proven success in web design, branding, and
                  digital marketing across 50+ industries.
                </p>
              </article>

              <article className="services-index-benefit">
                <div className="services-index-benefit__top">
                  <span>02</span>
                  <i className="fas fa-bullseye" aria-hidden="true" />
                </div>

                <h3>Results-Driven</h3>

                <p>
                  We focus on measurable outcomes that impact your bottom line,
                  not just vanity metrics.
                </p>
              </article>

              <article className="services-index-benefit">
                <div className="services-index-benefit__top">
                  <span>03</span>
                  <i className="fas fa-dollar-sign" aria-hidden="true" />
                </div>

                <h3>Transparent Pricing</h3>

                <p>
                  Clear, upfront pricing with no hidden fees. Know exactly what
                  you&apos;re paying for.
                </p>
              </article>

              <article className="services-index-benefit">
                <div className="services-index-benefit__top">
                  <span>04</span>
                  <i className="fas fa-handshake" aria-hidden="true" />
                </div>

                <h3>Personalized Service</h3>

                <p>
                  Work directly with our founder. No call centers, no junior
                  staff. Just experienced professionals.
                </p>
              </article>

              <article className="services-index-benefit">
                <div className="services-index-benefit__top">
                  <span>05</span>
                  <i className="fas fa-bolt" aria-hidden="true" />
                </div>

                <h3>Fast Turnaround</h3>

                <p>
                  Projects delivered on time, every time. We respect your
                  deadlines and business needs.
                </p>
              </article>

              <article className="services-index-benefit">
                <div className="services-index-benefit__top">
                  <span>06</span>
                  <i className="fas fa-headset" aria-hidden="true" />
                </div>

                <h3>Ongoing Support</h3>

                <p>
                  24-hour response time and dedicated support long after your
                  project launches.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Get Started?"
          description="Let&apos;s discuss which services are right for your business. Get a free consultation and custom quote."
          primaryButtonText="Get Free Quote"
          primaryButtonAction="contact"
        />
      </div>
    </>
  );
}