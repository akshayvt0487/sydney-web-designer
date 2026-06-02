import { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = generateMetadata({
  title: "Web Design Plans & Pricing",
  description:
    "Transparent web design pricing for Sydney businesses. Custom packages for every budget. From startups to enterprise. Get a free quote today!",
  keywords: "web design pricing sydney, website cost, web design packages",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/web-design-plans",
});

const plans = [
  {
    name: "Basic Package",
    audience: "Perfect for startups & small businesses",
    features: [
      "3-5 pages website",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "Social media links",
      "Content Management System (CMS)",
      "Google Analytics setup",
      "1 month post-launch support",
    ],
  },
  {
    name: "Advanced Package",
    audience: "Ideal for growing businesses",
    badge: "Most Popular",
    featured: true,
    features: [
      "10-20 pages website",
      "Custom design & branding",
      "Advanced SEO optimization",
      "Blog integration",
      "E-commerce functionality (up to 50 products)",
      "Email marketing integration",
      "Performance optimization",
      "Advanced analytics & tracking",
      "SSL certificate included",
      "3 months post-launch support",
    ],
  },
  {
    name: "Premium Package",
    audience: "Enterprise-level solutions",
    features: [
      "50+ pages website",
      "Fully custom development",
      "Advanced functionality & features",
      "Multi-language support",
      "Custom integrations & APIs",
      "Dedicated project manager",
      "Priority support & maintenance",
      "Training sessions for your team",
      "Advanced security features",
      "Custom admin dashboard",
      "6 months post-launch support",
    ],
  },
];

const includedItems = [
  {
    icon: "fa-palette",
    title: "Professional Design",
    description:
      "Modern, clean designs that reflect your brand and engage your visitors.",
  },
  {
    icon: "fa-mobile-alt",
    title: "Mobile Responsive",
    description:
      "Perfectly optimized for all devices - smartphones, tablets, and desktops.",
  },
  {
    icon: "fa-search",
    title: "SEO Optimized",
    description:
      "Built with search engine best practices to help you rank higher on Google.",
  },
  {
    icon: "fa-bolt",
    title: "Fast Loading",
    description:
      "Optimized for speed to provide the best user experience and better SEO.",
  },
  {
    icon: "fa-lock",
    title: "Secure & Safe",
    description:
      "SSL certificates, security updates, and best practices to keep your site secure.",
  },
  {
    icon: "fa-headset",
    title: "Ongoing Support",
    description:
      "Post-launch support included with every package. We&apos;re here to help.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your business, goals, and target audience",
  },
  {
    step: "02",
    title: "Design",
    description: "Create custom designs tailored to your brand",
  },
  {
    step: "03",
    title: "Development",
    description: "Build your website with modern technologies",
  },
  {
    step: "04",
    title: "Launch",
    description: "Go live and start attracting customers",
  },
];

const faqs = [
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes! We offer flexible payment plans with 50% deposit and 50% on completion. For larger projects, we can arrange monthly payment options.",
  },
  {
    question: "What&apos;s included in post-launch support?",
    answer:
      "Post-launch support includes bug fixes, minor content updates, technical assistance, and answering any questions you have about managing your website.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Basic packages typically take 2-4 weeks, Advanced packages 4-6 weeks, and Premium packages 8-12 weeks depending on complexity.",
  },
  {
    question: "Can I upgrade my package later?",
    answer:
      "Absolutely! You can start with a basic package and add features or upgrade to a higher tier anytime.",
  },
  {
    question: "Do I own the website after completion?",
    answer:
      "Yes! You own all rights to your website, content, and code upon final payment.",
  },
];

function PlansHeading({
  eyebrow,
  title,
  accent,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <header className={`wdp-heading ${dark ? "wdp-heading--dark" : ""}`}>
      <span className="wdp-heading__eyebrow">{eyebrow}</span>

      <h2>
        {title} <em>{accent}</em>
      </h2>

      <p>{description}</p>
    </header>
  );
}

export default function WebDesignPlansPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    {
      name: "Web Design Plans",
      url: "https://www.sydneywebdesigner.com.au/web-design-plans",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="web-design-plans-editorial paper-grain">
        {/* Hero Section */}
        <section className="wdp-hero">
          <div className="container">
            <div className="wdp-hero__content">
              <span className="wdp-hero__eyebrow">Web Design Pricing</span>

              <h1>
                Web Design Plans <span>&amp; Pricing</span>
              </h1>

              <p>
                Transparent pricing with no hidden fees. Choose the perfect
                package for your business needs and budget. All plans include
                professional design, mobile responsiveness, and SEO.
              </p>

              <button
                type="button"
                data-popup="contact"
                className="paper-button paper-button--rust"
              >
                Get Free Quote
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </button>
            </div>

            <div className="wdp-hero__summary" aria-hidden="true">
              <span className="wdp-hero__summary-label">Every Plan Includes</span>

              <div className="wdp-hero__summary-row">
                <span>01</span>
                <p>Professional Design</p>
              </div>

              <div className="wdp-hero__summary-row">
                <span>02</span>
                <p>Mobile Responsive</p>
              </div>

              <div className="wdp-hero__summary-row">
                <span>03</span>
                <p>SEO Optimized</p>
              </div>

              <div className="wdp-hero__summary-rule" />
            </div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="wdp-section wdp-pricing">
          <div className="container">
            <PlansHeading
              eyebrow="Plans"
              title="Choose Your"
              accent="Plan"
              description="Professional websites at every budget level"
            />

            <div className="wdp-pricing__grid">
              {plans.map((plan, index) => (
                <article
                  key={plan.name}
                  className={`wdp-plan-card ${
                    plan.featured ? "wdp-plan-card--featured" : ""
                  }`}
                >
                  <div className="wdp-plan-card__header">
                    <span className="wdp-plan-card__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {plan.badge && (
                      <span className="wdp-plan-card__badge">{plan.badge}</span>
                    )}
                  </div>

                  <h3>{plan.name}</h3>
                  <p className="wdp-plan-card__audience">{plan.audience}</p>

                  <ul className="wdp-plan-card__features">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <i className="fas fa-check" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    data-popup="contact"
                    className={`paper-button ${
                      plan.featured ? "paper-button--rust" : ""
                    } wdp-plan-card__button`}
                  >
                    Get Started
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="wdp-section wdp-included">
          <div className="container">
            <PlansHeading
              eyebrow="Included"
              title="What&apos;s Included in Every"
              accent="Plan"
              description="Professional quality guaranteed"
              dark
            />

            <div className="wdp-included__grid">
              {includedItems.map((item, index) => (
                <article key={item.title} className="wdp-included-card">
                  <div className="wdp-included-card__top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <i className={`fas ${item.icon}`} aria-hidden="true" />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="wdp-section wdp-process">
          <div className="container">
            <PlansHeading
              eyebrow="Method"
              title="Our"
              accent="Process"
              description="From concept to launch in 4-8 weeks"
            />

            <div className="wdp-process__grid">
              {processSteps.map((step) => (
                <article key={step.step} className="wdp-process-card">
                  <span className="wdp-process-card__number">{step.step}</span>
                  <span className="wdp-process-card__rule" aria-hidden="true" />

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="service-paper-faq paper-grain wdp-faq">
          <div className="container">
            <div className="service-paper-heading service-paper-heading--center">
              <span className="service-paper-heading__eyebrow">FAQ</span>

              <h2>
                Frequently Asked <em>Questions</em>
              </h2>

              <p>Common questions about our pricing</p>
            </div>

            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="wdp-final-cta">
          <div className="container">
            <div className="wdp-final-cta__content">
              <span className="wdp-final-cta__eyebrow">Next Step</span>

              <h2>
                Ready to Get <span>Started?</span>
              </h2>

              <p>
                Let&apos;s discuss which plan is right for your business. Get a
                free consultation and custom quote.
              </p>

              <div className="wdp-final-cta__actions">
                <button
                  type="button"
                  data-popup="contact"
                  className="paper-button paper-button--rust"
                >
                  Get Free Quote
                  <i className="fas fa-arrow-right" aria-hidden="true" />
                </button>

                <Link href="/portfolio" className="paper-button wdp-final-cta__secondary">
                  View Our Portfolio
                  <i className="fas fa-arrow-right" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}