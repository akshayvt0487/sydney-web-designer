import { Metadata } from "next";
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
} from "@/lib/schemas";
import { generateMetadata } from "@/lib/metadata";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = generateMetadata({
  title: "About Us | Sydney Web Design Since 2013",
  description:
    "Meet the team behind Sydney's premier web design agency. A division of DSIGNS Australia Pty Ltd. Since 2013, 500+ websites delivered, award-winning service.",
  keywords:
    "about sydney web designer, web design agency sydney, about dsigns, dsigns australia",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/about",
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "About", url: "https://www.sydneywebdesigner.com.au/about" },
  ]);

  const stats = [
    { number: "13+", label: "Years", description: "In Business" },
    { number: "500+", label: "Websites", description: "Delivered" },
    { number: "98%", label: "Satisfaction", description: "Rating" },
    { number: "50+", label: "Industries", description: "Served" },
  ];

  const values = [
    {
      icon: "fas fa-chart-line",
      title: "Results-Driven",
      description:
        "We measure success by the results we deliver for our clients. Every website, every campaign, every strategy is designed to drive measurable business growth and ROI.",
    },
    {
      icon: "fas fa-eye",
      title: "Transparency",
      description:
        "No hidden fees, no vague promises. We believe in clear communication, honest timelines, and transparent pricing. You'll always know exactly what you're getting and what to expect.",
    },
    {
      icon: "fas fa-lightbulb",
      title: "Innovation",
      description:
        "The digital landscape never stops evolving, and neither do we. We stay ahead of trends, continuously learn new technologies, and apply cutting-edge strategies to keep our clients competitive.",
    },
    {
      icon: "fas fa-handshake",
      title: "Partnership",
      description:
        "We're not just a service provider—we're your digital growth partner. Your success is our success, and we're committed to building long-term relationships based on trust and mutual growth.",
    },
    {
      icon: "fas fa-star",
      title: "Quality",
      description:
        "We never compromise on quality. From design aesthetics to code quality to content creation, we maintain the highest standards in everything we deliver.",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Local Expertise",
      description:
        "As a Sydney-based agency, we understand the local market, competition, and opportunities. This local knowledge helps us create strategies that resonate with Australian audiences.",
    },
  ];

  const services = [
    {
      icon: "fas fa-laptop-code",
      title: "Web Design & Development",
      description:
        "We create stunning, high-performing websites that convert visitors into customers. Every site is mobile-responsive, SEO-optimized, and built with the latest technologies.",
    },
    {
      icon: "fas fa-search",
      title: "SEO & Digital Marketing",
      description:
        "Get found on Google and grow your online presence. Our SEO strategies combine technical optimization, content marketing, and link building to drive organic traffic and leads.",
    },
    {
      icon: "fas fa-palette",
      title: "Branding & Identity",
      description:
        "Stand out from the competition with professional branding that reflects your business values and resonates with your target audience.",
    },
    {
      icon: "fas fa-shopping-cart",
      title: "E-commerce Solutions",
      description:
        "Launch and grow your online store with custom e-commerce websites that make it easy for customers to find, buy, and love your products.",
    },
    {
      icon: "fas fa-pen-nib",
      title: "Content Marketing",
      description:
        "Engage your audience and establish authority with strategic content that educates, informs, and converts.",
    },
    {
      icon: "fas fa-headset",
      title: "Ongoing Support",
      description:
        "We don't just build your website and disappear. Our ongoing support and maintenance packages ensure your site stays secure, fast, and up-to-date.",
    },
  ];

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="about-paper-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container about-hero__inner">
            <div className="about-hero__content">
              <div className="about-hero__eyebrow">
                <span aria-hidden="true" />
                <h1>Web Design Agency Sydney</h1>
                <span aria-hidden="true" />
              </div>

              <h2>
                Sydney&apos;s Premier Web Design Agency{" "}
                <span>Since 2013</span>
              </h2>

              <p>
                Transforming Sydney businesses through innovative web design
                and digital marketing since 2013
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-stats paper-grain">
          <div className="container">
            <div className="about-stats__grid">
              {stats.map((stat) => (
                <article key={stat.label} className="about-stat">
                  <strong>{stat.number}</strong>
                  <h3>{stat.label}</h3>
                  <p>{stat.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="about-section about-story paper-grain">
          <div className="container about-story__layout">
            <header className="about-heading about-heading--left">
              <p>Our Story</p>

              <h2>
                Our <span>Story</span>
              </h2>

              <div className="about-story__subheading">
                Over a decade of digital excellence in Sydney
              </div>
            </header>

            <div className="about-story__copy">
              <p>
                Sydney Web Designer was founded in 2013 as a specialized
                division of DSIGNS Australia Pty Ltd, with a clear mission:
                help Sydney businesses succeed online through exceptional web
                design and digital marketing. What started as a focused
                operation has grown into a trusted partner for businesses across
                Sydney and throughout Australia.
              </p>

              <p>
                Since 2013, we&apos;ve helped hundreds of businesses—from local
                cafes and tradies to professional services and e-commerce
                stores—establish powerful online presences that drive real
                results. Our team combines creative design with technical
                expertise and data-driven marketing strategies to deliver
                measurable growth for our clients.
              </p>

              <p>
                We&apos;re proud to be a Sydney-based agency that understands
                the unique challenges and opportunities of the Australian
                market. Every website we build, every campaign we run, and every
                strategy we develop is tailored to the specific needs of Sydney
                businesses.
              </p>

              <p>
                Today, we continue to evolve with the digital landscape, staying
                at the forefront of web design trends, SEO best practices, and
                digital marketing innovations. Our commitment remains the same:
                delivering exceptional results that help our clients thrive in
                an increasingly digital world.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="about-section about-values paper-grain">
          <div className="container">
            <header className="about-heading">
              <h2>
                Our <span>Values</span>
              </h2>

              <p>The principles that guide everything we do</p>
            </header>

            <div className="about-values__grid">
              {values.map((value, index) => (
                <article key={value.title} className="about-value">
                  <div className="about-value__top">
                    <span className="about-value__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="about-value__icon">
                      <i className={value.icon} aria-hidden="true" />
                    </div>
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="about-section about-services">
          <div className="container">
            <header className="about-heading about-heading--dark">
              <h2>
                What We <span>Do</span>
              </h2>

              <p>Comprehensive digital solutions for Sydney businesses</p>
            </header>

            <div className="about-services__grid">
              {services.map((service, index) => (
                <article key={service.title} className="about-service">
                  <div className="about-service__top">
                    <span className="about-service__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="about-service__icon">
                      <i className={service.icon} aria-hidden="true" />
                    </div>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="about-cta">
          <CTASection
            title="Ready to Work Together?"
            description="Let's discuss how we can help your Sydney business grow online"
            primaryButtonText="Get Your Free Consultation"
            primaryButtonAction="contact"
          />
        </div>
      </div>
    </>
  );
}