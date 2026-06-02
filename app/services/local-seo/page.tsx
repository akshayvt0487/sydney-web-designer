import Link from "next/link";
import {
  services,
  portfolioProjects,
  googleReviews,
} from "@/lib/constants";
import { generateMetadata } from "@/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateLocalBusinessSchema,
  generateFAQSchema,
} from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = generateMetadata({
  title: "Local SEO Sydney | Get Found by Local Customers",
  description:
    "Professional local SEO services in Sydney. Dominate Google Maps and local search with targeted strategies. 1,000+ local rankings, 80+ Google Business Profiles, 285% average call increase.",
  keywords:
    "local seo sydney, google business profile optimization, google maps ranking, local search sydney, local seo services, near me optimization, local seo expert sydney",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/services/local-seo",
  ogImage: "/images/og/services.svg",
});

export default function LocalSEOPage() {
  const service = services.find((s) => s.slug === "local-seo")!;

  const breadcrumbs = [
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Services", url: "https://www.sydneywebdesigner.com.au/services" },
    {
      name: "Local SEO",
      url: "https://www.sydneywebdesigner.com.au/services/local-seo",
    },
  ];

  const seoProjects = portfolioProjects.filter((p) =>
    p.services.includes("SEO"),
  );

  const seoReviews = googleReviews.slice(0, 3);

  const stats = [
    { label: "Local Rankings", number: "1,000+" },
    { label: "Google Business Profiles", number: "80+" },
    { label: "Avg. Call Increase", number: "285%" },
    { label: "Client Satisfaction", number: "96%" },
  ];

  const features = [
    {
      title: "Google Business Profile",
      description:
        "Optimize and manage your Google Business Profile for maximum visibility.",
      icon: "fas fa-map-marker-alt",
    },
    {
      title: "Local Citations",
      description:
        "Build consistent business listings across directories and review sites.",
      icon: "fas fa-edit",
    },
    {
      title: "Review Management",
      description:
        "Generate and manage customer reviews to boost local rankings.",
      icon: "fas fa-star",
    },
    {
      title: "Local Keywords",
      description:
        "Target location-specific keywords that local customers are searching.",
      icon: "fas fa-search",
    },
    {
      title: "Local Link Building",
      description:
        "Earn links from local businesses, organizations, and directories.",
      icon: "fas fa-link",
    },
    {
      title: "Map Pack Rankings",
      description:
        "Optimize to appear in Google's local 3-pack for relevant searches.",
      icon: "fas fa-map-marked-alt",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Local Audit",
      description:
        "Analyze current local presence, citations, reviews, and Google Business Profile.",
    },
    {
      step: 2,
      title: "Profile Optimization",
      description:
        "Optimize Google Business Profile with complete info, categories, and posts.",
    },
    {
      step: 3,
      title: "Citations & Reviews",
      description:
        "Build citations, claim listings, and implement review generation strategy.",
    },
    {
      step: 4,
      title: "Monitor & Maintain",
      description:
        "Track rankings, respond to reviews, and maintain consistent local presence.",
    },
  ];

  const faqs = [
    {
      question:
        "What is local SEO and how is it different from regular SEO?",
      answer:
        "Local SEO focuses on appearing in location-based searches like plumber near me or dentist in Sydney. It emphasizes Google Business Profile optimization, local citations, reviews, and map rankings, while traditional SEO focuses more on broader organic rankings.",
    },
    {
      question: "How important are Google reviews for local SEO?",
      answer:
        "Extremely important! Reviews are a major ranking factor for local search. Both quantity and quality matter. We implement strategies to generate more 5-star reviews consistently while managing and responding to all feedback professionally.",
    },
    {
      question: "What is a local citation and why do I need them?",
      answer:
        "A local citation is any online mention of your business name, address, and phone number (NAP). Consistent citations across directories like Yellow Pages, True Local, and industry-specific sites help Google verify your business and boost local rankings.",
    },
    {
      question: "Can local SEO help if I serve multiple locations?",
      answer:
        "Yes! We can optimize for multiple service areas or locations. Strategies vary depending if you have physical locations or just service areas. We will create location-specific pages and optimize your Google Business Profile for each area.",
    },
    {
      question: "How long does local SEO take to show results?",
      answer:
        "Local SEO typically shows results faster than traditional SEO. You may see improvements in Google Business Profile visibility within 2-4 weeks and significant local ranking improvements within 3-6 months with consistent optimization.",
    },
  ];

  const relatedServices = [
    {
      title: "SEO Services Sydney",
      description:
        "Comprehensive SEO strategies to dominate both local and broader search results.",
      href: "/services/seo-sydney",
      icon: "fas fa-search",
    },
    {
      title: "Google Ads",
      description:
        "Complement your local SEO with targeted Google Ads campaigns for immediate visibility.",
      href: "/services/google-ads",
      icon: "fab fa-google",
    },
    {
      title: "Content Marketing",
      description:
        "Create locally-focused content that engages your community and boosts rankings.",
      href: "/services/content-marketing",
      icon: "fas fa-pen-nib",
    },
  ];

  return (
    <div className="seo-paper-route seo-paper-route--local-seo paper-grain">
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
            generateServiceSchema(service.name, service.heroDescription),
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
        h1="Local SEO Services"
        badge={{
          icon: `fas ${service.icon}`,
          text: service.name,
        }}
        heading="Local SEO That Gets You Found by Local Customers"
        description="Dominate Google Maps and local search results. Get found by customers in your area with targeted local SEO strategies that drive calls and visits."
        buttons={{
          primary: {
            text: "Get Free Local SEO Audit",
            dataPopup: "seoAudit",
          },
          secondary: {
            text: "View Success Stories",
            href: "/portfolio",
          },
        }}
      />

      <section className="local-seo-stats">
        <div className="container">
          <StatsGrid stats={stats} columns={4} />
        </div>
      </section>

      <section className="local-seo-features">
        <div className="container">
          <div className="seo-isolated-heading">
            <p className="seo-isolated-heading__label">Local Search</p>
            <h2>
              Complete Local SEO <span>Services</span>
            </h2>
            <p className="seo-isolated-heading__copy">
              Everything you need to dominate local search results.
            </p>
          </div>

          <div className="local-seo-features__grid">
            {features.map((feature, index) => (
              <article key={feature.title} className="local-seo-feature-card">
                <div className="local-seo-feature-card__top">
                  <span className="local-seo-feature-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="local-seo-feature-card__icon">
                    <i className={feature.icon} aria-hidden="true" />
                  </span>
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="local-seo-process-board" className="lse-process-board">
        <div className="container">
          <header className="lse-process-board__header">
            <p className="lse-process-board__label">Our Method</p>

            <h2 className="lse-process-board__title">
              Our Local SEO <span>Process</span>
            </h2>

            <p className="lse-process-board__intro">
              Proven methodology for local search dominance.
            </p>
          </header>

          <div className="lse-process-board__grid">
            {process.map((item) => (
              <article key={item.step} className="lse-process-step">
                <div className="lse-process-step__meta">
                  <span className="lse-process-step__number">
                    {String(item.step).padStart(2, "0")}
                  </span>

                  <span className="lse-process-step__diamond" aria-hidden="true" />
                </div>

                <div className="lse-process-step__line" aria-hidden="true" />

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {seoProjects.length > 0 && (
        <section className="local-seo-portfolio">
          <div className="container">
            <div className="seo-isolated-heading">
              <p className="seo-isolated-heading__label">Selected Work</p>
              <h2>
                Local SEO Success <span>Stories</span>
              </h2>
              <p className="seo-isolated-heading__copy">
                Local businesses dominating their markets.
              </p>
            </div>

            <div className="local-seo-portfolio__grid">
              {seoProjects.slice(0, 6).map((project) => (
                <PortfolioCard key={project.id} project={project} />
              ))}
            </div>

            <div className="local-seo-action">
              <Link href="/portfolio" className="paper-button paper-button--rust">
                View All Projects
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="local-seo-testimonials">
        <div className="container">
          <div className="seo-isolated-heading">
            <p className="seo-isolated-heading__label">Testimonials</p>
            <h2>
              What Our Clients <span>Say</span>
            </h2>
            <p className="seo-isolated-heading__copy">
              Local businesses getting more customers with local SEO.
            </p>
          </div>

          <div className="local-seo-testimonials__grid">
            {seoReviews.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </div>

          <div className="local-seo-action">
            <Link
              href="/testimonials"
              className="paper-button paper-button--rust"
            >
              Read More Reviews
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="local-seo-faq">
        <div className="container">
          <div className="seo-isolated-heading">
            <p className="seo-isolated-heading__label">FAQ</p>
            <h2>
              Frequently Asked <span>Questions</span>
            </h2>
            <p className="seo-isolated-heading__copy">
              Common questions about local SEO services.
            </p>
          </div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <RelatedServices services={relatedServices} />

      <CTASection
        title="Ready to Dominate Local Search?"
        description="Get found by customers in your area and grow your local business with proven local SEO strategies."
        primaryButtonText="Get Free Local SEO Audit"
        primaryButtonAction="seoAudit"
      />
    </div>
  );
}