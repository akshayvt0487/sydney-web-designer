import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateLocalBusinessSchema,
} from "@/lib/schemas";

export const metadata = generateMetadata({
  title: "Social Media Marketing Sydney | Facebook, Instagram & LinkedIn",
  description:
    "Strategic social media marketing services in Sydney. Engage your audience and grow your business. 500K+ followers managed, 15% average engagement, 1000+ posts created for 50+ clients.",
  keywords:
    "social media marketing sydney, facebook marketing, instagram marketing, linkedin marketing, social media management sydney, social media advertising, content creation sydney",
  canonicalUrl:
    "https://www.sydneywebdesigner.com.au/services/social-media-marketing",
  ogImage: "/images/og/services.svg",
});

export default function SocialMediaMarketingPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Services", url: "https://www.sydneywebdesigner.com.au/services" },
    {
      name: "Social Media Marketing",
      url: "https://www.sydneywebdesigner.com.au/services/social-media-marketing",
    },
  ];

  const serviceData = {
    name: "Social Media Marketing",
    description:
      "Strategic social media marketing services including content creation, platform management, and paid advertising across Facebook, Instagram, LinkedIn, and more. Engage your audience and grow your business.",
    provider: "Sydney Web Designer",
  };

  const stats = [
    { number: "500K+", label: "Followers Managed" },
    { number: "15%", label: "Avg Engagement" },
    { number: "1000+", label: "Posts Created" },
    { number: "50+", label: "Clients" },
  ];

  const features = [
    {
      icon: "fas fa-mobile-alt",
      title: "Social Strategy",
      description: "Platform-specific strategy",
      items: [
        "Platform selection",
        "Content strategy",
        "Audience targeting",
        "Growth tactics",
      ],
    },
    {
      icon: "fas fa-palette",
      title: "Content Creation",
      description: "Engaging content",
      items: ["Post graphics", "Video content", "Stories", "Reels/TikToks"],
    },
    {
      icon: "fas fa-users",
      title: "Community Management",
      description: "Audience engagement",
      items: [
        "Comment responses",
        "DM management",
        "Community building",
        "Reputation management",
      ],
    },
    {
      icon: "fas fa-dollar-sign",
      title: "Paid Social Ads",
      description: "Social advertising",
      items: [
        "Facebook Ads",
        "Instagram Ads",
        "LinkedIn Ads",
        "Campaign optimization",
      ],
    },
    {
      icon: "fas fa-handshake",
      title: "Influencer Marketing",
      description: "Influencer partnerships",
      items: [
        "Influencer outreach",
        "Collaboration management",
        "Campaign tracking",
        "ROI measurement",
      ],
    },
    {
      icon: "fas fa-chart-bar",
      title: "Analytics",
      description: "Performance tracking",
      items: [
        "Engagement metrics",
        "Follower growth",
        "Reach analysis",
        "ROI reporting",
      ],
    },
  ];

  const process = [
    {
      number: 1,
      title: "Discovery",
      description: "Deep dive into your business, goals, and requirements",
    },
    {
      number: 2,
      title: "Strategy",
      description:
        "Develop custom strategy based on research and analysis",
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
      name: "The Tspoon Cafe",
      industry: "Restaurant",
      result:
        "Instagram strategy building loyal following and driving daily foot traffic",
    },
    {
      name: "GPS Vehicle Inspections",
      industry: "Automotive",
      result:
        "Social media presence establishing authority and generating inspection inquiries",
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
      price: "$1,500",
      period: "per month",
      features: [
        "1-2 platforms",
        "8 posts/month",
        "Basic graphics",
        "Community management",
        "Monthly reports",
      ],
    },
    {
      name: "Growth",
      price: "$3,000",
      period: "per month",
      featured: true,
      features: [
        "3-4 platforms",
        "20 posts/month",
        "Custom graphics",
        "Video content",
        "Paid ads",
        "Weekly reports",
      ],
    },
    {
      name: "Enterprise",
      price: "$6,000+",
      period: "per month",
      features: [
        "All platforms",
        "Daily posting",
        "Video production",
        "Influencer campaigns",
        "Dedicated manager",
        "Advanced analytics",
      ],
    },
  ];

  void pricingOptions;

  const trustBadges = [
    { icon: "fas fa-trophy", text: "13+ Years Experience" },
    { icon: "fas fa-star", text: "50+ 5-Star Reviews" },
    { icon: "fas fa-check-circle", text: "Professional Service" },
    { icon: "fas fa-chart-line", text: "Proven Results" },
  ];

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

      <div className="social-media-editorial">
        {/* Hero Section */}
        <section className="smm-hero paper-grain">
          <div className="container smm-hero__layout">
            <div className="smm-hero__content">
              <h1>Social Media Marketing</h1>

              <p className="smm-hero__copy">
                Grow your audience and engagement with strategic social media
                marketing across all major platforms
              </p>

              <div className="smm-hero__actions">
                <Link
                  href="#lead-form"
                  className="paper-button paper-button--rust"
                >
                  Boost Social Media
                </Link>

                <Link href="#process" className="paper-button">
                  Our Process
                </Link>
              </div>
            </div>

            <div className="smm-hero-art" aria-hidden="true">
              <div className="smm-hero-art__window">
                <div className="smm-hero-art__toolbar">
                  <span />
                  <span />
                  <span />
                  <b />
                </div>

                <div className="smm-hero-art__screen">
                  <div className="smm-hero-art__sidebar">
                    <i className="fas fa-heart" />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="smm-hero-art__feed">
                    <div className="smm-hero-art__post">
                      <div />
                      <span />
                      <span />
                    </div>

                    <div className="smm-hero-art__metrics">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="container">
            <div className="smm-trust">
              {trustBadges.map((badge) => (
                <article key={badge.text} className="smm-trust__item">
                  <i className={badge.icon} aria-hidden="true" />
                  <span>{badge.text}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="smm-section smm-stats paper-grain">
          <div className="container">
            <div className="smm-heading">
              <h2>
                Why Choose Social Media <span>Marketing</span>?
              </h2>
            </div>

            <div className="smm-stats__grid">
              {stats.map((stat) => (
                <article key={stat.label} className="smm-stat">
                  <strong>{stat.number}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="smm-section smm-features paper-grain">
          <div className="container">
            <div className="smm-heading">
              <h2>
                Our Social Media Marketing <span>Services</span>
              </h2>

              <p>
                Comprehensive solutions designed to help your business succeed
              </p>
            </div>

            <div className="smm-features__grid">
              {features.map((feature) => (
                <article key={feature.title} className="smm-feature">
                  <div className="smm-feature__icon">
                    <i className={feature.icon} aria-hidden="true" />
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>

                  <ul>
                    {feature.items.map((item) => (
                      <li key={item}>
                        <i className="fas fa-check" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="smm-section smm-process" id="process">
          <div className="container">
            <div className="smm-heading smm-heading--dark">
              <h2>
                Our Proven <span>Process</span>
              </h2>

              <p>A systematic approach to deliver outstanding results</p>
            </div>

            <div className="smm-process__grid">
              {process.map((step) => (
                <article key={step.number} className="smm-process__card">
                  <span className="smm-process__number">
                    {String(step.number).padStart(2, "0")}
                  </span>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="smm-section smm-results paper-grain">
          <div className="container">
            <div className="smm-heading">
              <h2>
                Real Results for Sydney <span>Businesses</span>
              </h2>
            </div>

            <div className="smm-results__grid">
              {caseStudies.map((study, index) => (
                <article key={study.name} className="smm-result">
                  <div className="smm-result__content">
                    <span className="smm-result__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{study.name}</h3>
                    <span className="smm-result__industry">
                      {study.industry}
                    </span>
                  </div>

                  <div className="smm-result__proof">
                    <p>{study.result}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="smm-section smm-testimonials paper-grain">
          <div className="container">
            <div className="smm-heading">
              <h2>
                What Our Clients <span>Say</span>
              </h2>
            </div>

            <div className="smm-testimonials__grid">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.author}
                  className="smm-testimonial"
                >
                  <div className="smm-testimonial__stars" aria-hidden="true">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>

                  <p>&ldquo;{testimonial.text}&rdquo;</p>

                  <footer>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}</span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section remains intentionally not rendered, as in the existing page. */}

        {/* Lead Form Section */}
        <section className="smm-lead paper-grain" id="lead-form">
          <div className="container">
            <div className="smm-lead__panel">
              <div className="smm-heading smm-heading--dark smm-lead__heading">
                <h3>Get Your Free Consultation</h3>

                <p>
                  Tell us about your project and we&apos;ll provide expert
                  advice and a custom quote
                </p>
              </div>

              <form className="smm-lead__form">
                <div className="smm-lead__grid">
                  <div>
                    <label htmlFor="smm-full-name">Full Name *</label>
                    <input
                      id="smm-full-name"
                      type="text"
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="smm-email">Email *</label>
                    <input
                      id="smm-email"
                      type="email"
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="smm-phone">Phone *</label>
                    <input
                      id="smm-phone"
                      type="tel"
                      required
                      placeholder="04XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="smm-company">Company</label>
                    <input
                      id="smm-company"
                      type="text"
                      placeholder="Your company (optional)"
                    />
                  </div>
                </div>

                <div className="smm-lead__message">
                  <label htmlFor="smm-project">
                    Tell us about your project
                  </label>

                  <textarea
                    id="smm-project"
                    placeholder="What are you looking to achieve?"
                    rows={4}
                  />
                </div>

                <div className="smm-lead__submit">
                  <button
                    type="submit"
                    className="paper-button paper-button--rust"
                  >
                    Boost Social Media
                  </button>

                  <p>
                    <i className="fas fa-comments" aria-hidden="true" />
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        
      </div>
    </>
  );
}