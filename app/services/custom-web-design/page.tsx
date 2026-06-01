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

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section */}
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
      />

      {/* Trust Badges Section */}
      <section className="border-b border-slate-200 bg-white py-10 md:py-12">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                className="flex flex-col items-center justify-center gap-3 text-center"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-orange/10 text-primary-orange">
                  <i className={`fas ${badge.icon} text-lg`} aria-hidden="true" />
                </div>

                <div className="text-sm font-bold text-slate-600">
                  {badge.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center font-heading text-3xl font-bold text-slate-900 md:mb-14 md:text-5xl">
            Why Choose Custom Web Design{" "}
            <span className="text-primary-orange">Sydney</span>?
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.text}
                className="rounded-2xl border border-slate-200 border-t-4 border-t-primary-orange bg-white p-6 text-center shadow-sm transition-all hover:border-primary-orange/30 hover:shadow-card-hover md:p-8"
              >
                <div className="mb-2 font-heading text-4xl font-bold text-primary-orange md:text-5xl">
                  {stat.value}
                </div>

                <div className="text-base font-medium text-slate-600 md:text-lg">
                  {stat.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center md:mb-14">
            <h2 className="mb-5 font-heading text-3xl font-bold text-slate-900 md:text-5xl">
              Our Custom Web Design Sydney{" "}
              <span className="text-primary-orange">Services</span>
            </h2>

            <p className="mx-auto max-w-3xl text-base text-slate-600 md:text-xl">
              Comprehensive solutions designed to help your business succeed
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary-orange/30 hover:shadow-card-hover md:p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-orange/10 text-primary-orange">
                  <i
                    className={`fas ${feature.icon} text-xl`}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mb-2 font-heading text-xl font-bold text-slate-900 md:text-2xl">
                  {feature.title}
                </h3>

                <p className="mb-5 text-slate-600">{feature.description}</p>

                <ul className="space-y-3">
                  {feature.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-slate-600"
                    >
                      <i
                        className="fas fa-check mt-1 text-sm text-primary-orange"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-50 py-16 md:py-24" id="process">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center md:mb-14">
            <h2 className="mb-5 font-heading text-3xl font-bold text-slate-900 md:text-5xl">
              Our Proven <span className="text-primary-orange">Process</span>
            </h2>

            <p className="mx-auto max-w-3xl text-base text-slate-600 md:text-xl">
              A systematic approach to deliver outstanding results
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary-orange/30 hover:shadow-card-hover md:p-8"
              >
                <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-xl bg-slate-900 px-4 py-3 font-heading text-xl font-bold text-white">
                  {step.number}
                </div>

                <h3 className="mb-3 font-heading text-xl font-bold text-slate-900 md:text-2xl">
                  {step.title}
                </h3>

                <p className="leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center md:mb-14">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.28em] text-primary-orange">
              Results
            </span>

            <h2 className="font-heading text-3xl font-bold text-slate-900 md:text-5xl">
              Real Results for Sydney{" "}
              <span className="text-primary-orange">Businesses</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {resultProjects.map((result) => {
              const previewImage =
                result.project?.images?.[0] || result.project?.image;

              return (
                <article
                  key={result.name}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-primary-orange/30 hover:shadow-card-hover"
                >
                  {previewImage && (
                    <div className="relative h-[220px] overflow-hidden bg-slate-100 sm:h-[280px]">
                      <Image
                        src={previewImage}
                        alt={`${result.name} website design result`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 767px) 100vw, 50vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />

                      {result.project?.websiteUrl && (
                        <a
                          href={result.project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-navy shadow-lg transition-colors hover:bg-primary-orange hover:text-white"
                        >
                          View Website
                          <i
                            className="fas fa-arrow-up-right-from-square text-xs"
                            aria-hidden="true"
                          />
                        </a>
                      )}
                    </div>
                  )}

                  <div className="p-6 md:p-8">
                    <span className="mb-4 inline-flex rounded-full bg-primary-orange/10 px-3 py-1 text-xs font-semibold text-primary-orange">
                      {result.industry}
                    </span>

                    <h3 className="mb-3 font-heading text-2xl font-bold text-slate-900 transition-colors group-hover:text-primary-orange md:text-3xl">
                      {result.name}
                    </h3>

                    <p className="text-base leading-7 text-slate-600 md:text-lg">
                      {result.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center font-heading text-3xl font-bold text-slate-900 md:mb-14 md:text-5xl">
            What Our Clients <span className="text-primary-orange">Say</span>
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-2xl border border-slate-200 border-t-4 border-t-primary-orange bg-white p-6 shadow-sm transition-all hover:shadow-card-hover md:p-8"
              >
                <div className="mb-5 flex gap-1 text-lg text-primary-orange">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className="fas fa-star"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <p className="mb-7 text-base italic leading-8 text-slate-700">
                  &quot;{testimonial.text}&quot;
                </p>

                <div className="font-bold text-slate-900">
                  {testimonial.name}
                </div>

                <div className="text-sm text-slate-500">
                  {testimonial.detail}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-10 text-center md:mb-14">
            <h2 className="mb-5 font-heading text-3xl font-bold text-slate-900 md:text-5xl">
              Frequently Asked{" "}
              <span className="text-primary-orange">Questions</span>
            </h2>

            <p className="mx-auto max-w-2xl text-base text-slate-600 md:text-xl">
              Everything you need to know about custom web design
            </p>
          </div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices services={relatedServices} />

      {/* Lead Form Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-dark-navy p-6 shadow-xl sm:p-10 md:p-16">
            <div className="mb-9 text-center md:mb-12">
              <h3 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">
                Get Your Free Consultation
              </h3>

              <p className="text-base text-slate-300 md:text-lg">
                Tell us about your project and we&apos;ll provide expert advice
                and a custom quote
              </p>
            </div>

            <form className="mx-auto max-w-3xl space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-300">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="form-input rounded-xl border-slate-700 bg-slate-800/50 text-white placeholder-slate-500 focus:border-primary-orange focus:bg-slate-800 focus:ring-primary-orange/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-300">
                    Email *
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="form-input rounded-xl border-slate-700 bg-slate-800/50 text-white placeholder-slate-500 focus:border-primary-orange focus:bg-slate-800 focus:ring-primary-orange/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-300">
                    Phone *
                  </label>

                  <input
                    type="tel"
                    required
                    placeholder="04XX XXX XXX"
                    className="form-input rounded-xl border-slate-700 bg-slate-800/50 text-white placeholder-slate-500 focus:border-primary-orange focus:bg-slate-800 focus:ring-primary-orange/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-300">
                    Company
                  </label>

                  <input
                    type="text"
                    placeholder="Your company (optional)"
                    className="form-input rounded-xl border-slate-700 bg-slate-800/50 text-white placeholder-slate-500 focus:border-primary-orange focus:bg-slate-800 focus:ring-primary-orange/20"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-300">
                  Tell us about your project
                </label>

                <textarea
                  placeholder="What are you looking to achieve?"
                  rows={4}
                  className="form-textarea rounded-xl border-slate-700 bg-slate-800/50 text-white placeholder-slate-500 focus:border-primary-orange focus:bg-slate-800 focus:ring-primary-orange/20"
                />
              </div>

              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg rounded-lg shadow-sm"
                >
                  Get Free Quote
                </button>

                <p className="mt-4 text-sm text-slate-400">
                  <i
                    className="fas fa-comment-dots mr-2"
                    aria-hidden="true"
                  />
                  We&apos;ll respond within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-orange py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-5 font-heading text-3xl font-bold text-white md:text-5xl">
            Ready to Get <span className="text-slate-900">Started</span>?
          </h2>

          <p className="mx-auto mb-9 max-w-2xl text-base text-white/90 md:text-xl">
            Let&apos;s discuss your project and create a custom solution for
            your business
          </p>

          <button
            type="button"
            data-popup="contact"
            className="btn btn-lg rounded-lg bg-slate-900 text-white shadow-sm hover:bg-slate-800"
          >
            Get Free Quote
          </button>
        </div>
      </section>
    </>
  );
}