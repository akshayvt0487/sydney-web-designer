import Image from "next/image";
import { generateMetadata } from "@/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateLocalBusinessSchema,
  generateFAQSchema,
} from "@/lib/schemas";
import { portfolioProjects } from "@/lib/constants";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = generateMetadata({
  title: "Custom Web Design Sydney | Professional Website Design Services",
  description:
    "Expert custom web design services in Sydney. 13+ years experience creating stunning, conversion-focused websites tailored to your brand. Get a free quote today!",
  keywords:
    "custom web design sydney, website design sydney, professional web design, bespoke websites sydney, custom website development, web designer sydney",
  canonicalUrl:
    "https://www.sydneywebdesigner.com.au/services/custom-web-design",
  ogImage: "/images/og/services.svg",
});

const faqs = [
  {
    question: "How long does a custom web design project take?",
    answer:
      "Typically 6-12 weeks depending on complexity and requirements. This includes discovery, design, development, content integration, testing, and launch. We will provide a detailed timeline during our initial consultation based on your specific needs.",
  },
  {
    question:
      "What is the difference between custom web design and a template?",
    answer:
      "Custom web design is built from scratch specifically for your business, brand, and goals. Templates are pre-made designs used by thousands of websites. Custom design gives you unique branding, tailored functionality, better SEO, and no limitations.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes! We offer website redesign services to modernize outdated sites, improve user experience, boost conversions, and align with your current brand. We can work with your existing content or help create fresh content.",
  },
  {
    question: "Will my custom website be mobile-friendly?",
    answer:
      "Absolutely! All our custom websites are built with a mobile-first approach. Your site will look perfect and function flawlessly on all devices - smartphones, tablets, laptops, and desktops. Mobile responsiveness is a standard feature.",
  },
  {
    question: "Can I update the website content myself?",
    answer:
      "Yes! We build custom websites on user-friendly content management systems (CMS) that allow you to easily update text, images, and pages without technical knowledge. We provide training and documentation to help you manage your site.",
  },
  {
    question: "What happens after my website is launched?",
    answer:
      "After launch, we provide ongoing support, training, and maintenance options. We monitor your site for performance, security updates, and technical issues. We are also available for content updates, feature additions, and continuous improvements as your business grows.",
  },
];

const trustBadges = [
  {
    icon: "fa-trophy",
    text: "13+ Years Experience",
  },
  {
    icon: "fa-star",
    text: "50+ 5-Star Reviews",
  },
  {
    icon: "fa-check-circle",
    text: "Professional Service",
  },
  {
    icon: "fa-chart-bar",
    text: "Proven Results",
  },
];

const stats = [
  {
    value: "100%",
    text: "Unique Design",
  },
  {
    value: "94%",
    text: "Judge by Design",
  },
  {
    value: "3x",
    text: "Better Conversions",
  },
  {
    value: "500+",
    text: "Sites Delivered",
  },
];

const features = [
  {
    icon: "fa-palette",
    title: "Unique Design",
    description: "Custom visual identity",
    points: [
      "Brand-specific",
      "Custom graphics",
      "Unique layouts",
      "Professional imagery",
    ],
  },
  {
    icon: "fa-mobile-alt",
    title: "Mobile-First",
    description: "Perfect on all devices",
    points: [
      "Responsive layouts",
      "Touch-friendly",
      "Fast mobile",
      "Cross-browser",
    ],
  },
  {
    icon: "fa-bolt",
    title: "Custom Features",
    description: "Exact functionality needed",
    points: [
      "Booking systems",
      "Calculators",
      "User portals",
      "Integrations",
    ],
  },
  {
    icon: "fa-bullseye",
    title: "Conversion Focus",
    description: "Maximize conversions",
    points: [
      "Strategic CTAs",
      "User journey",
      "A/B testing",
      "Lead capture",
    ],
  },
  {
    icon: "fa-rocket",
    title: "Performance",
    description: "Fast loading speeds",
    points: [
      "Optimized code",
      "Image compression",
      "Lazy loading",
      "CDN integration",
    ],
  },
  {
    icon: "fa-search",
    title: "SEO-Ready",
    description: "Built for search",
    points: [
      "Clean code",
      "Semantic HTML",
      "Schema markup",
      "Fast speeds",
    ],
  },
];

const processSteps = [
  {
    number: "1",
    title: "Discovery",
    description: "Deep dive into your business, goals, and requirements",
  },
  {
    number: "2",
    title: "Strategy",
    description: "Develop custom strategy based on research and analysis",
  },
  {
    number: "3",
    title: "Planning",
    description: "Create detailed roadmap and project timeline",
  },
  {
    number: "4",
    title: "Execution",
    description: "Implement solution with attention to detail",
  },
  {
    number: "5",
    title: "Testing",
    description: "Thorough quality assurance and optimization",
  },
  {
    number: "6",
    title: "Launch & Support",
    description: "Deploy and provide ongoing support",
  },
];

const testimonials = [
  {
    text: "Professional, responsive, and delivered exactly what we needed. The results have been fantastic and we've seen significant improvements.",
    name: "Sydney Business Owner",
    detail: "Professional Services",
  },
  {
    text: "The team at Sydney Web Designer took the time to understand our business. Their expertise and transparent approach made the entire process smooth.",
    name: "Local Business",
    detail: "Parramatta, NSW",
  },
  {
    text: "Highly recommend Sydney Web Designer for their professionalism and quality of work. They exceeded our expectations in every way.",
    name: "Sydney Client",
    detail: "Service Provider",
  },
];

const relatedServices = [
  {
    title: "E-commerce Websites",
    description:
      "Professional online stores with shopping carts, payment gateways, and inventory management.",
    href: "/services/ecommerce-websites",
    icon: "fas fa-shopping-cart",
  },
  {
    title: "SEO Services",
    description:
      "Search engine optimization to improve rankings and drive organic traffic to your website.",
    href: "/services/seo-sydney",
    icon: "fas fa-search",
  },
  {
    title: "Brand Identity",
    description:
      "Complete brand identity design including logo, colors, typography, and brand guidelines.",
    href: "/services/brand-identity",
    icon: "fas fa-palette",
  },
];

export default function CustomWebDesignPage() {
  const breadcrumbs = [
    {
      name: "Home",
      url: "https://www.sydneywebdesigner.com.au",
    },
    {
      name: "Services",
      url: "https://www.sydneywebdesigner.com.au/services",
    },
    {
      name: "Custom Web Design",
      url: "https://www.sydneywebdesigner.com.au/services/custom-web-design",
    },
  ];

  const serviceData = {
    name: "Custom Web Design",
    description:
      "Professional custom web design services tailored to your business needs. We create unique, conversion-focused websites that stand out from the competition and drive real results for Sydney businesses.",
    provider: "Sydney Web Designer",
  };

  const resultProjects = [
    {
      name: "OSAN Ability",
      industry: "NDIS Provider",
      description:
        "Custom design with strong branding generating daily leads for NDIS services",
      project: portfolioProjects.find((project) =>
        project.name.toLowerCase().includes("osan")
      ),
    },
    {
      name: "Actuate Property",
      industry: "Buyers Agent",
      description:
        "Sophisticated website attracting high-value clients with 3x inquiry increase",
      project: portfolioProjects.find((project) =>
        project.name.toLowerCase().includes("actuate")
      ),
    },
  ];

  const heroProject = resultProjects[0].project;
  const heroImage = heroProject?.images?.[0] || heroProject?.image;

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <ServiceHeroSection
        h1="Web Designer Sydney"
        badge={{
          icon: "fas fa-paint-brush",
          text: "Custom Web Design",
        }}
        heading="Professional Website Design Services That Convert"
        description="Bespoke website design tailored to your brand. Stand out with a unique, professional website that drives results."
        buttons={{
          primary: {
            text: "Get Free Quote",
            dataPopup: "contact",
          },
          secondary: {
            text: "Our Process",
            href: "#process",
          },
        }}
        heroImage={heroImage}
        heroImageAlt="OSAN Ability website project"
      />

      <section className="service-detail-trust paper-grain">
        <div className="container">
          <div className="service-detail-trust__grid">
            {trustBadges.map((badge, index) => (
              <div key={badge.text} className="service-detail-trust__item">
                <span className="service-detail-trust__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <i className={`fas ${badge.icon}`} aria-hidden="true" />
                <p>{badge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-paper-section service-detail-stats paper-grain">
        <div className="container">
          <div className="service-paper-heading service-paper-heading--center">
            <h2>
              Why Choose Custom Web Design <span>Sydney</span>?
            </h2>
          </div>

          <div className="service-detail-stats__grid">
            {stats.map((stat) => (
              <article key={stat.text} className="service-detail-stat">
                <div className="service-detail-stat__value">{stat.value}</div>
                <div className="service-detail-stat__text">{stat.text}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-paper-section service-detail-features paper-grain">
        <div className="container">
          <div className="service-paper-heading service-paper-heading--center">
            <h2>
              Our Custom Web Design Sydney <span>Services</span>
            </h2>
            <p>Comprehensive solutions designed to help your business succeed</p>
          </div>

          <div className="service-detail-features__grid">
            {features.map((feature, index) => (
              <article key={feature.title} className="service-detail-feature">
                <div className="service-detail-feature__top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i className={`fas ${feature.icon}`} aria-hidden="true" />
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>

                <ul>
                  {feature.points.map((point) => (
                    <li key={point}>
                      <i className="fas fa-check" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-process paper-grain" id="process">
        <div className="container">
          <div className="service-paper-heading service-paper-heading--dark service-paper-heading--center">
            <h2>
              Our Proven <span>Process</span>
            </h2>
            <p>A systematic approach to deliver outstanding results</p>
          </div>

          <div className="service-detail-process__grid">
            {processSteps.map((step) => (
              <article key={step.number} className="service-detail-process__card">
                <div className="service-detail-process__head">
                  <span>{step.number.padStart(2, "0")}</span>
                  <b aria-hidden="true" />
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-paper-section service-detail-results paper-grain">
        <div className="container">
          <div className="service-paper-heading service-paper-heading--center">
            <span className="service-detail-results__kicker">Results</span>
            <h2>
              Real Results for Sydney <span>Businesses</span>
            </h2>
          </div>

          <div className="service-detail-results__grid">
            {resultProjects.map((result) => {
              const previewImage =
                result.project?.images?.[0] || result.project?.image;

              return (
                <article key={result.name} className="service-detail-result">
                  {previewImage && (
                    <div className="service-detail-result__media">
                      <Image
                        src={previewImage}
                        alt={`${result.name} website design result`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 767px) 100vw, 50vw"
                      />

                      {result.project?.websiteUrl && (
                        <a
                          href={result.project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="service-detail-result__website"
                        >
                          View Website
                          <i
                            className="fas fa-arrow-up-right-from-square"
                            aria-hidden="true"
                          />
                        </a>
                      )}
                    </div>
                  )}

                  <div className="service-detail-result__body">
                    <span className="service-detail-result__industry">
                      {result.industry}
                    </span>

                    <h3>{result.name}</h3>
                    <p>{result.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="service-paper-section service-detail-testimonials paper-grain">
        <div className="container">
          <div className="service-paper-heading service-paper-heading--center">
            <h2>
              What Our Clients <span>Say</span>
            </h2>
          </div>

          <div className="service-detail-testimonials__grid">
            {testimonials.map((testimonial, index) => (
              <article key={testimonial.name} className="service-detail-testimonial">
                <div className="service-detail-testimonial__top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div aria-label="5 stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i key={star} className="fas fa-star" aria-hidden="true" />
                    ))}
                  </div>
                </div>

                <p>&quot;{testimonial.text}&quot;</p>

                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.detail}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-paper-section service-faq-section paper-grain">
        <div className="container">
          <div className="service-paper-heading service-paper-heading--center">
            <h2>
              Frequently Asked <span>Questions</span>
            </h2>
            <p>Everything you need to know about custom web design</p>
          </div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <RelatedServices services={relatedServices} />

            <section className="service-detail-lead paper-grain">
        <div className="container">
          <div className="service-detail-lead__frame">
            <div className="service-detail-lead__heading">
              <h3>Get Your Free Consultation</h3>
              <p>
                Tell us about your project and we&apos;ll provide expert advice
                and a custom quote
              </p>
            </div>

            <form className="service-detail-lead__form">
              <div className="service-detail-lead__grid">
                <div>
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="form-input"
                  />
                </div>

                <div>
                  <label>Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="form-input"
                  />
                </div>

                <div>
                  <label>Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="04XX XXX XXX"
                    className="form-input"
                  />
                </div>

                <div>
                  <label>Company</label>
                  <input
                    type="text"
                    placeholder="Your company (optional)"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="service-detail-lead__message">
                <label>Tell us about your project</label>
                <textarea
                  placeholder="What are you looking to achieve?"
                  rows={7}
                  className="form-textarea"
                />
              </div>

              <div className="service-detail-lead__submit">
                <button type="submit" className="paper-button paper-button--rust">
                  Get Free Quote
                </button>

                <p>
                  <i className="fas fa-comment-dots" aria-hidden="true" />
                  We&apos;ll respond within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
