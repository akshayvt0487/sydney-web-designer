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
  title: "Email Marketing Sydney | Email Campaign Management Services",
  description:
    "Professional email marketing services in Sydney. Build customer relationships and drive repeat business. 200+ campaigns, 32% average open rate, $2M+ revenue generated. High ROI strategies.",
  keywords:
    "email marketing sydney, email campaign management, email newsletter design, marketing automation sydney, email marketing agency, mailchimp expert sydney",
  canonicalUrl:
    "https://www.sydneywebdesigner.com.au/services/email-marketing",
  ogImage: "/images/og/services.svg",
});

export default function EmailMarketingPage() {
  const service = services.find((s) => s.slug === "email-marketing")!;

  const breadcrumbs = [
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Services", url: "https://www.sydneywebdesigner.com.au/services" },
    {
      name: "Email Marketing",
      url: "https://www.sydneywebdesigner.com.au/services/email-marketing",
    },
  ];

  const projects = portfolioProjects.slice(0, 6);
  const reviews = googleReviews.slice(6, 9);

  const stats = [
    { label: "Campaigns Managed", number: "200+" },
    { label: "Avg. Open Rate", number: "32%" },
    { label: "Avg. Click Rate", number: "4.5%" },
    { label: "Revenue Generated", number: "$2M+" },
  ];

  const features = [
    {
      title: "Campaign Strategy",
      description:
        "Strategic planning for welcome series, nurture campaigns, and promotions.",
      icon: "fas fa-clipboard-list",
    },
    {
      title: "Email Design",
      description:
        "Mobile-responsive templates that align with your brand and drive clicks.",
      icon: "fas fa-palette",
    },
    {
      title: "Copywriting",
      description:
        "Compelling email copy that engages readers and drives conversions.",
      icon: "fas fa-pen",
    },
    {
      title: "List Management",
      description:
        "Segmentation, list growth strategies, and data hygiene best practices.",
      icon: "fas fa-chart-bar",
    },
    {
      title: "Automation",
      description:
        "Automated email sequences triggered by user behavior and lifecycle stages.",
      icon: "fas fa-cog",
    },
    {
      title: "A/B Testing",
      description:
        "Test subject lines, content, and CTAs to optimize campaign performance.",
      icon: "fas fa-flask",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Strategy & Setup",
      description:
        "Define goals, audiences, and set up email platform with proper tracking.",
    },
    {
      step: 2,
      title: "Template Design",
      description:
        "Create branded email templates for different campaign types.",
    },
    {
      step: 3,
      title: "Campaign Creation",
      description:
        "Write copy, design layouts, and schedule campaigns for optimal delivery.",
    },
    {
      step: 4,
      title: "Analyze & Optimize",
      description:
        "Monitor results, A/B test elements, and continually improve performance.",
    },
  ];

  const faqs = [
    {
      question: "Which email platform do you recommend?",
      answer:
        "We work with all major platforms including Mailchimp, HubSpot, ActiveCampaign, and Klaviyo. We'll recommend the best fit based on your needs, budget, and technical requirements. Each has different strengths for e-commerce, B2B, or B2C businesses.",
    },
    {
      question: "How often should I email my list?",
      answer:
        "It depends on your business and content value. B2C e-commerce might send 2-3 times per week, while B2B might send weekly or biweekly. We'll test frequency with your audience and find the optimal balance between engagement and unsubscribes.",
    },
    {
      question: "How do I grow my email list?",
      answer:
        "We implement multiple strategies: website pop-ups, lead magnets (ebooks, guides), content upgrades, social media promotion, and gated content. We also optimize your signup forms for maximum conversion and ensure all touchpoints capture emails.",
    },
    {
      question: "What&apos;s a good email open rate?",
      answer:
        "Average open rates vary by industry but typically range from 15-25%. Our clients average 32% through strategic subject lines, sender name optimization, send time testing, and proper list hygiene. Your rate depends on audience quality and relevance.",
    },
    {
      question: "Can you help with email automation?",
      answer:
        "Absolutely! We set up automated sequences including welcome series, abandoned cart recovery, post-purchase follow-ups, re-engagement campaigns, and birthday/anniversary emails. Automation helps you nurture leads and customers on autopilot.",
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

      <div className="marketing-service-page marketing-service-page--email">
                {/* Hero Section */}
        <section className="msp-hero msp-hero--email paper-grain">
          <div className="container msp-hero__layout">
            <div className="msp-hero__content">
              <div className="msp-hero__badge">
                <i className={`fas ${service.icon}`} aria-hidden="true" />
                <span>{service.name}</span>
              </div>

              <h1>Email Marketing That Drives Repeat Business</h1>

              <p className="msp-hero__copy">
                Build customer relationships and drive repeat business with
                effective email marketing campaigns. High ROI strategies that
                turn subscribers into buyers.
              </p>

              <div className="msp-hero__actions">
                <button
                  type="button"
                  data-popup="contact"
                  className="paper-button paper-button--rust"
                >
                  Start Email Marketing
                </button>

                <Link href="/portfolio" className="paper-button">
                  View Our Work
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
                    <i className="fas fa-envelope" />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="msp-hero-art__canvas">
                    <div className="msp-hero-art__mail">
                      <span />
                    </div>
                    <div className="msp-hero-art__line msp-hero-art__line--orange" />
                    <div className="msp-hero-art__line" />
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
              <h2>Complete Email Marketing Services</h2>
              <p>Everything you need for successful email campaigns.</p>
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
              <h2>Our Email Marketing Process</h2>
              <p>Strategic approach to email campaigns that convert.</p>
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
                <h2>Email Marketing Success Stories</h2>
                <p>Businesses growing revenue with email campaigns.</p>
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
              <p>Businesses succeeding with email marketing.</p>
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
              <p>Common questions about email marketing services.</p>
            </div>

            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        <div className="msp-cta">
          <CTASection
            title="Ready to Start Email Marketing?"
            description="Build customer relationships and drive repeat business with strategic email campaigns."
            primaryButtonText="Start Email Marketing"
            primaryButtonAction="contact"
          />
        </div>
      </div>
    </>
  );
}