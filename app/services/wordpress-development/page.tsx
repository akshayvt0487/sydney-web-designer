import Image from "next/image";
import { portfolioProjects } from "@/lib/constants";
import { generateMetadata } from "@/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateLocalBusinessSchema,
} from "@/lib/schemas";
import ServiceHeroSection from "@/components/ServiceHeroSection";

export const metadata = generateMetadata({
  title: "WordPress Development Sydney | Custom WordPress Websites",
  description:
    "Professional WordPress development services in Sydney. Custom themes, plugins, and complete WooCommerce solutions. 13+ years experience with 200+ WordPress sites delivered.",
  keywords:
    "wordpress development sydney, custom wordpress sydney, wordpress developer, woocommerce sydney, wordpress website design, wordpress expert sydney",
  canonicalUrl:
    "https://www.sydneywebdesigner.com.au/services/wordpress-development",
  ogImage: "/images/og/services.svg",
});

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
    value: "200+",
    label: "WordPress Sites",
  },
  {
    value: "98%",
    label: "Uptime",
  },
  {
    value: "50%",
    label: "Faster Loading",
  },
  {
    value: "13+",
    label: "Years Experience",
  },
];

const features = [
  {
    icon: "fa-palette",
    title: "Custom Themes",
    description: "Unique WordPress themes",
    points: ["Custom design", "Responsive", "Customization", "Optimized"],
  },
  {
    icon: "fa-plug",
    title: "Plugin Development",
    description: "Custom functionality",
    points: ["Custom plugins", "Integrations", "API connections", "Third-party"],
  },
  {
    icon: "fa-shopping-cart",
    title: "WooCommerce",
    description: "E-commerce solutions",
    points: [
      "Product catalogs",
      "Payment gateways",
      "Shipping",
      "Inventory",
    ],
  },
  {
    icon: "fa-bolt",
    title: "Performance",
    description: "Fast WordPress sites",
    points: ["Caching", "Image optimization", "Database", "CDN"],
  },
  {
    icon: "fa-lock",
    title: "Security",
    description: "Enterprise security",
    points: ["Security audits", "Malware protection", "SSL", "Backups"],
  },
  {
    icon: "fa-wrench",
    title: "Maintenance",
    description: "Ongoing support",
    points: [
      "Core updates",
      "Plugin updates",
      "Security monitoring",
      "Performance",
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

export default function WordPressDevelopmentPage() {
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
      name: "WordPress Development",
      url: "https://www.sydneywebdesigner.com.au/services/wordpress-development",
    },
  ];

  const serviceData = {
    name: "WordPress Development",
    description:
      "Expert WordPress development services including custom themes, plugin development, WooCommerce integration, and complete WordPress solutions for Sydney businesses. Fast, secure, and optimized.",
    provider: "Sydney Web Designer",
  };

  /*
   * Uses real project records already stored in portfolioProjects.
   * No fake project content or duplicate hard-coded image paths.
   */
    const resultProjects = portfolioProjects
    .filter((project) => {
      const projectIdentifier = `${project.id} ${project.name}`.toLowerCase();

      const isAdl99Project =
        projectIdentifier.includes("adl99") ||
        projectIdentifier.includes("ald99") ||
        projectIdentifier.includes("adl 99") ||
        projectIdentifier.includes("ald 99");

      const hasPreviewImage = Boolean(project.images?.[0] || project.image);

      return hasPreviewImage && !isAdl99Project;
    })
    .slice(0, 6);

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

      {/* Hero Section */}
      <ServiceHeroSection
        h1="WordPress Developer Sydney"
        badge={{
          icon: "fab fa-wordpress",
          text: "WordPress Specialists",
        }}
        heading="WordPress Development Sydney"
        description="Expert WordPress development for Sydney businesses. Custom themes, plugins, and complete solutions tailored to your needs."
        buttons={{
          primary: {
            text: "Start WordPress Project",
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
        <div className="container">
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
        <div className="container">
          <h2 className="mb-10 text-center font-heading text-3xl font-bold text-primary-navy md:mb-14 md:text-5xl">
            Why Choose WordPress Development Sydney?
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-2xl border border-slate-200 border-t-4 border-t-primary-orange bg-white p-6 text-center shadow-sm transition-all hover:border-primary-orange/30 hover:shadow-card-hover md:p-8"
              >
                <div className="mb-2 font-heading text-4xl font-bold text-primary-orange md:text-5xl">
                  {stat.value}
                </div>

                <div className="text-base font-medium text-slate-600 md:text-lg">
                  {stat.label}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="mb-10 text-center md:mb-14">
            <h2 className="mb-5 font-heading text-3xl font-bold text-primary-navy md:text-5xl">
              Our WordPress Development Sydney Services
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

                <h3 className="mb-2 font-heading text-xl font-bold text-primary-navy md:text-2xl">
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
        <div className="container">
          <div className="mb-10 text-center md:mb-14">
            <h2 className="mb-5 font-heading text-3xl font-bold text-primary-navy md:text-5xl">
              Our Proven Process
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
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-navy font-heading text-xl font-bold text-white">
                  {step.number}
                </div>

                <h3 className="mb-3 font-heading text-xl font-bold text-primary-navy md:text-2xl">
                  {step.title}
                </h3>

                <p className="leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

            {/* Results Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="mb-10 text-center md:mb-14">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.28em] text-primary-orange">
              Results
            </span>

            <h2 className="font-heading text-3xl font-bold text-primary-navy md:text-5xl">
              Real Results for Sydney{" "}
              <span className="text-primary-orange">Businesses</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {resultProjects.map((project) => {
              const previewImage = project.images?.[0] || project.image;

              return (
                <article
                  key={project.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary-orange/30 hover:shadow-card-hover active:scale-[0.99]"
                >
                  <div className="relative h-[230px] overflow-hidden bg-slate-100 sm:h-[260px]">
                    <Image
                      src={previewImage}
                      alt={`${project.name} website design result`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />

                    {project.websiteUrl && (
                      <a
                        href={project.websiteUrl}
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

                  <div className="p-6">
                    <span className="mb-4 inline-flex rounded-full bg-primary-orange/10 px-3 py-1 text-xs font-semibold text-primary-orange">
                      {project.industry}
                    </span>

                    <h3 className="mb-3 font-heading text-xl font-bold text-primary-navy transition-colors group-hover:text-primary-orange sm:text-2xl">
                      {project.name}
                    </h3>

                    <p className="line-clamp-3 text-sm leading-7 text-slate-600 sm:text-base">
                      {project.description}
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
        <div className="container">
          <h2 className="mb-10 text-center font-heading text-3xl font-bold text-primary-navy md:mb-14 md:text-5xl">
            What Our Clients Say
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

                <div className="font-bold text-primary-navy">
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

      {/* Lead Form Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl rounded-3xl bg-primary-navy p-6 text-white shadow-xl sm:p-10 md:p-14">
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
                <button type="submit" className="btn btn-primary btn-lg">
                  Start WordPress Project
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
      <section className="bg-primary-navy py-16 text-center text-white md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-5 font-heading text-3xl font-bold text-white md:text-5xl">
              Ready to Get Started?
            </h2>

            <p className="mx-auto mb-9 max-w-2xl text-base text-slate-300 md:text-xl">
              Let&apos;s discuss your project and create a custom solution for
              your business
            </p>

            <button
              type="button"
              data-popup="contact"
              className="btn btn-outline-light btn-lg"
            >
              Start WordPress Project
            </button>
          </div>
        </div>
      </section>
    </>
  );
}