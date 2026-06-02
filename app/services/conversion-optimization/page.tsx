import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateMetadata } from "@/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateLocalBusinessSchema,
} from "@/lib/schemas";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = generateMetadata({
  title: "Conversion Optimization Sydney | CRO Services That Increase Sales",
  description:
    "Professional conversion rate optimization in Sydney. Maximize marketing ROI with data-driven CRO. 60+ websites optimized, 400+ tests conducted, average 127% conversion lift, $5M+ revenue.",
  keywords:
    "conversion optimization sydney, cro services, conversion rate optimization, ab testing sydney, landing page optimization, funnel optimization, cro agency sydney",
  canonicalUrl:
    "https://www.sydneywebdesigner.com.au/services/conversion-optimization",
  ogImage: "/images/og/services.svg",
});

export default function ConversionOptimizationPage() {
  const service = services.find((s) => s.slug === "conversion-optimization")!;

  const breadcrumbs = [
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Services", url: "https://www.sydneywebdesigner.com.au/services" },
    {
      name: "Conversion Optimization",
      url: "https://www.sydneywebdesigner.com.au/services/conversion-optimization",
    },
  ];

  const projects = portfolioProjects.slice(0, 6);
  const reviews = googleReviews.slice(3, 6);

  const stats = [
    { label: "Websites Optimized", number: "60+" },
    { label: "Tests Conducted", number: "400+" },
    { label: "Avg. Conversion Lift", number: "127%" },
    { label: "Revenue Generated", number: "$5M+" },
  ];

  const features = [
    {
      title: "Conversion Audit",
      description:
        "Comprehensive analysis identifying friction points and opportunities.",
      icon: "fas fa-search",
    },
    {
      title: "A/B Testing",
      description:
        "Scientific testing of design, copy, and layout variations.",
      icon: "fas fa-flask",
    },
    {
      title: "User Behavior Analysis",
      description:
        "Heatmaps, session recordings, and analytics to understand user behavior.",
      icon: "fas fa-chart-bar",
    },
    {
      title: "Funnel Optimization",
      description:
        "Optimize each step of your conversion funnel to reduce drop-off.",
      icon: "fas fa-bullseye",
    },
    {
      title: "Landing Page Optimization",
      description:
        "Optimize landing pages for maximum conversion from paid traffic.",
      icon: "fas fa-file-alt",
    },
    {
      title: "Form Optimization",
      description:
        "Improve form completion rates and reduce abandonment.",
      icon: "fas fa-edit",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Data Collection",
      description:
        "Install tracking, gather data, and analyze current conversion performance.",
    },
    {
      step: 2,
      title: "Identify Opportunities",
      description:
        "Use data to identify biggest conversion blockers and improvement opportunities.",
    },
    {
      step: 3,
      title: "Test & Implement",
      description:
        "Design and run A/B tests, implement winning variations.",
    },
    {
      step: 4,
      title: "Measure & Iterate",
      description:
        "Track results, learn from tests, and continuously optimize.",
    },
  ];

  const faqs = [
    {
      question: "What is conversion rate optimization (CRO)?",
      answer:
        "CRO is the systematic process of increasing the percentage of website visitors who take a desired action (purchase, signup, call, etc.). It involves understanding user behavior, testing improvements, and implementing changes that increase conversions.",
    },
    {
      question: "How is CRO different from getting more traffic?",
      answer:
        "More traffic is valuable, but CRO maximizes the value of existing traffic. If you spend $10,000 on ads getting 1,000 visitors with 2% conversion (20 sales), improving to 4% conversion doubles your sales without spending more on ads. CRO improves ROI on all marketing.",
    },
    {
      question: "What&apos;s a good conversion rate?",
      answer:
        "It varies widely by industry, traffic source, and goals. E-commerce averages 2-3%, B2B lead generation 2-5%, and landing pages 5-15%. Rather than industry benchmarks, we focus on continually improving YOUR conversion rate through systematic testing.",
    },
    {
      question: "How long does CRO take to show results?",
      answer:
        "Initial audit findings can guide immediate improvements. A/B tests typically need 2-4 weeks to reach statistical significance. Most clients see measurable improvements within 2-3 months, with results compounding as we implement multiple winning tests.",
    },
    {
      question: "What tools do you use for conversion optimization?",
      answer:
        "We use Google Analytics, Hotjar for heatmaps and recordings, Google Optimize or VWO for A/B testing, and various specialized tools depending on your platform. We'll work with your existing tools where possible or recommend the best fit.",
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
            generateServiceSchema(service.name, service.heroDescription)
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />

      <div className="marketing-service-page marketing-service-page--conversion">
                {/* Hero Section */}
        <section className="msp-hero msp-hero--conversion paper-grain">
          <div className="container msp-hero__layout">
            <div className="msp-hero__content">
              <div className="msp-hero__badge">
                <i className={`fas ${service.icon}`} aria-hidden="true" />
                <span>{service.name}</span>
              </div>

              <h1>
                Conversion Optimization That Maximizes Your Marketing ROI
              </h1>

              <p className="msp-hero__copy">
                Stop wasting traffic. Maximize your marketing ROI by optimizing
                every step of your customer journey. Data-driven testing that
                increases conversions and revenue.
              </p>

              <div className="msp-hero__actions">
                <button
                  type="button"
                  data-popup="contact"
                  className="paper-button paper-button--rust"
                >
                  Get Free CRO Audit
                </button>

                <Link href="/portfolio" className="paper-button">
                  View Success Stories
                </Link>
              </div>
            </div>

            <div className="msp-hero-art" aria-hidden="true">
              <div className="msp-hero-art__window">
                <div className="msp-hero-art__toolbar">
                  <span />
                  <span />
                  <span />
                  <b />
                </div>

                <div className="msp-hero-art__body">
                  <div className="msp-hero-art__nav">
                    <i className="fas fa-chart-line" />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="msp-hero-art__canvas">
                    <div className="msp-hero-art__chart">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="msp-hero-art__line msp-hero-art__line--orange" />
                    <div className="msp-hero-art__line msp-hero-art__line--short" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="msp-stats paper-grain">
          <div className="container">
            <div className="msp-stats__grid">
              {stats.map((stat) => (
                <article key={stat.label} className="msp-stat">
                  <strong>{stat.number}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="msp-section msp-features paper-grain">
          <div className="container">
            <div className="msp-heading">
              <h2>Complete Conversion Optimization Services</h2>
              <p>Everything you need to turn more visitors into customers.</p>
            </div>

            <div className="msp-features__grid">
              {features.map((feature) => (
                <article key={feature.title} className="msp-feature">
                  <div className="msp-feature__icon">
                    <i className={feature.icon} aria-hidden="true" />
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="msp-section msp-process">
          <div className="container">
            <div className="msp-heading msp-heading--dark">
              <h2>Our CRO Process</h2>
              <p>Data-driven methodology for continuous improvement.</p>
            </div>

            <div className="msp-process__grid">
              {process.map((item) => (
                <article key={item.step} className="msp-process__card">
                  <span className="msp-process__number">
                    {String(item.step).padStart(2, "0")}
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        {projects.length > 0 && (
          <section className="msp-section msp-stories paper-grain">
            <div className="container">
              <div className="msp-heading">
                <h2>Conversion Optimization Success Stories</h2>
                <p>Businesses increasing conversions and revenue.</p>
              </div>

              <div className="msp-stories__grid">
                {projects.map((project) => (
                  <PortfolioCard key={project.id} project={project} />
                ))}
              </div>

              <div className="msp-inline-action">
                <Link
                  href="/portfolio"
                  className="paper-button paper-button--rust"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Testimonials Section */}
        <section className="msp-section msp-reviews paper-grain">
          <div className="container">
            <div className="msp-heading">
              <h2>What Our Clients Say</h2>
              <p>Businesses growing revenue with conversion optimization.</p>
            </div>

            <div className="msp-reviews__grid">
              {reviews.map((review) => (
                <TestimonialCard key={review.id} review={review} />
              ))}
            </div>

            <div className="msp-inline-action">
              <Link
                href="/testimonials"
                className="paper-button paper-button--rust"
              >
                Read More Reviews
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="service-paper-faq paper-grain msp-faq">
          <div className="container">
            <div className="service-paper-heading service-paper-heading--center">
              <h2>Frequently Asked Questions</h2>
              <p>Common questions about conversion optimization services.</p>
            </div>

            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        <div className="msp-cta">
          <CTASection
            title="Ready to Increase Your Conversions?"
            description="Stop wasting traffic and start converting more visitors into customers with data-driven optimization."
            primaryButtonText="Get Free CRO Audit"
            primaryButtonAction="contact"
          />
        </div>
      </div>
    </>
  );
}