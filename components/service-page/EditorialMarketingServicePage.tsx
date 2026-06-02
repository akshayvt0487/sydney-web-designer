import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PortfolioCard from "@/components/PortfolioCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import RelatedServices from "@/components/RelatedServices";
import CTASection from "@/components/CTASection";

type Project = ComponentProps<typeof PortfolioCard>["project"];
type Review = ComponentProps<typeof TestimonialCard>["review"];
type BreadcrumbItems = ComponentProps<typeof Breadcrumbs>["items"];
type RelatedServiceItems = ComponentProps<typeof RelatedServices>["services"];
type CTAAction = ComponentProps<typeof CTASection>["primaryButtonAction"];

interface EditorialMarketingServicePageProps {
  className?: string;
  breadcrumbs?: BreadcrumbItems;
  badge: {
    icon: string;
    text: string;
  };
  hero: {
    title: string;
    description: string;
    primaryText: string;
    primaryAction: CTAAction;
    secondaryText: string;
    secondaryHref: string;
  };
  stats: Array<{
    label: string;
    number: string;
  }>;
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  process: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  projects: Project[];
  reviews: Review[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  headings: {
    featuresTitle: ReactNode;
    featuresDescription: string;
    processTitle: ReactNode;
    processDescription: string;
    storiesTitle: ReactNode;
    storiesDescription: string;
    testimonialsTitle: ReactNode;
    testimonialsDescription: string;
    faqTitle: ReactNode;
    faqDescription: string;
  };
  relatedServices?: RelatedServiceItems;
  cta: {
    title: string;
    description: string;
    primaryButtonText: string;
    primaryButtonAction: CTAAction;
  };
}

export default function EditorialMarketingServicePage({
  className = "",
  breadcrumbs,
  badge,
  hero,
  stats,
  features,
  process,
  projects,
  reviews,
  faqs,
  headings,
  relatedServices,
  cta,
}: EditorialMarketingServicePageProps) {
  return (
    <div className={`marketing-service-page ${className}`}>
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

      {/* Hero */}
      <section className="msp-hero">
        <div className="container msp-hero__inner">
          <div className="msp-hero__badge">
            <i className={badge.icon} aria-hidden="true" />
            <span>{badge.text}</span>
          </div>

          <h1>{hero.title}</h1>

          <p className="msp-hero__copy">{hero.description}</p>

          <div className="msp-hero__actions">
            <button
              type="button"
              data-popup={hero.primaryAction}
              className="paper-button paper-button--rust"
            >
              {hero.primaryText}
            </button>

            <Link href={hero.secondaryHref} className="paper-button">
              {hero.secondaryText}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Features */}
      <section className="msp-section msp-features paper-grain">
        <div className="container">
          <div className="msp-heading">
            <h2>{headings.featuresTitle}</h2>
            <p>{headings.featuresDescription}</p>
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

      {/* Process */}
      <section className="msp-section msp-process">
        <div className="container">
          <div className="msp-heading msp-heading--dark">
            <h2>{headings.processTitle}</h2>
            <p>{headings.processDescription}</p>
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

      {/* Portfolio */}
      {projects.length > 0 && (
        <section className="msp-section msp-stories paper-grain">
          <div className="container">
            <div className="msp-heading">
              <h2>{headings.storiesTitle}</h2>
              <p>{headings.storiesDescription}</p>
            </div>

            <div className="msp-stories__grid">
              {projects.map((project) => (
                <PortfolioCard key={project.id} project={project} />
              ))}
            </div>

            <div className="msp-inline-action">
              <Link href="/portfolio" className="paper-button paper-button--rust">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="msp-section msp-reviews">
        <div className="container">
          <div className="msp-heading">
            <h2>{headings.testimonialsTitle}</h2>
            <p>{headings.testimonialsDescription}</p>
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

      {/* FAQ */}
      <section className="service-paper-faq paper-grain msp-faq">
        <div className="container">
          <div className="service-paper-heading service-paper-heading--center">
            <h2>{headings.faqTitle}</h2>
            <p>{headings.faqDescription}</p>
          </div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {relatedServices && <RelatedServices services={relatedServices} />}

      <div className="msp-cta">
        <CTASection
          title={cta.title}
          description={cta.description}
          primaryButtonText={cta.primaryButtonText}
          primaryButtonAction={cta.primaryButtonAction}
        />
      </div>
    </div>
  );
}