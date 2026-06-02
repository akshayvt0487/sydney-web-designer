import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateMetadata } from "@/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateLocalBusinessSchema,
  generateFAQSchema,
} from "@/lib/schemas";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = generateMetadata({
  title: "Content Marketing Sydney | Strategic Content Creation Services",
  description:
    "Professional content marketing services in Sydney. Create valuable content that establishes authority and drives action. 1200+ content pieces, average 320% traffic increase, 92% client retention.",
  keywords:
    "content marketing sydney, content creation sydney, blog writing sydney, content strategy, video content sydney, seo content writing, content marketing agency",
  canonicalUrl:
    "https://www.sydneywebdesigner.com.au/services/content-marketing",
  ogImage: "/images/og/services.svg",
});

export default function ContentMarketingPage() {
  const service = services.find((s) => s.slug === "content-marketing")!;

  const breadcrumbs = [
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Services", url: "https://www.sydneywebdesigner.com.au/services" },
    {
      name: "Content Marketing",
      url: "https://www.sydneywebdesigner.com.au/services/content-marketing",
    },
  ];

  const projects = portfolioProjects.slice(0, 6);
  const reviews = googleReviews.slice(3, 6);

  const stats = [
    { label: "Content Pieces", number: "1200+" },
    { label: "Years Experience", number: "13+" },
    { label: "Avg. Traffic Increase", number: "320%" },
    { label: "Client Retention", number: "92%" },
  ];

  const features = [
    {
      title: "Blog Writing",
      description:
        "SEO-optimized blog posts that educate audience and drive organic traffic.",
      icon: "fas fa-pen",
    },
    {
      title: "Content Strategy",
      description:
        "Comprehensive strategy aligned with business goals and customer journey.",
      icon: "fas fa-clipboard-list",
    },
    {
      title: "Video Content",
      description:
        "Engaging video content for social media, YouTube, and website.",
      icon: "fas fa-video",
    },
    {
      title: "Ebooks & Guides",
      description:
        "In-depth resources that establish authority and generate leads.",
      icon: "fas fa-book",
    },
    {
      title: "Case Studies",
      description:
        "Compelling success stories that demonstrate your value to prospects.",
      icon: "fas fa-chart-bar",
    },
    {
      title: "Email Newsletters",
      description:
        "Regular newsletters that keep your audience engaged and informed.",
      icon: "fas fa-envelope",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Content Audit",
      description:
        "Analyze existing content and identify gaps and opportunities.",
    },
    {
      step: 2,
      title: "Strategy Development",
      description:
        "Create content plan aligned with SEO, audience needs, and business goals.",
    },
    {
      step: 3,
      title: "Content Creation",
      description:
        "Produce high-quality content including writing, design, and video production.",
    },
    {
      step: 4,
      title: "Distribution & Analysis",
      description:
        "Publish content, promote across channels, and measure performance.",
    },
  ];

  const faqs = [
    {
      question: "What types of content do you create?",
      answer:
        "We create blog posts, articles, ebooks, white papers, case studies, infographics, video scripts, social media content, email newsletters, and website copy. We will recommend the best content types based on your audience and goals.",
    },
    {
      question: "How often should I publish new content?",
      answer:
        "Consistency matters more than volume. We typically recommend 2-4 blog posts per month minimum, plus regular social content. The ideal frequency depends on your resources, industry competitiveness, and goals. We will develop a sustainable content calendar.",
    },
    {
      question: "Do you handle SEO for content?",
      answer:
        "Yes! All our content is created with SEO best practices including keyword research, optimized headlines, meta descriptions, internal linking, and proper formatting. Content marketing and SEO work hand-in-hand for maximum organic visibility.",
    },
    {
      question: "How long before content marketing shows results?",
      answer:
        "Content marketing is a long-term strategy. You will typically see increased traffic within 3-4 months and meaningful lead generation within 6-12 months. The compounding effect means results accelerate over time as your content library grows.",
    },
    {
      question: "Can you write about technical or specialized topics?",
      answer:
        "Yes! We interview your subject matter experts and conduct research to understand technical topics. We can write about complex subjects in ways that are accurate yet accessible to your target audience, establishing your thought leadership.",
    },
  ];

  const relatedServices = [
    {
      title: "SEO Sydney",
      description:
        "Optimize your content for search engines and drive organic traffic to your website.",
      href: "/services/seo-sydney",
      icon: "fas fa-search",
    },
    {
      title: "Link Building",
      description:
        "Earn high-quality backlinks through valuable content that publishers want to reference.",
      href: "/services/link-building",
      icon: "fas fa-link",
    },
    {
      title: "Copywriting",
      description:
        "Persuasive copy that converts readers into customers and drives action.",
      href: "/services/copywriting",
      icon: "fas fa-pen",
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <div className="marketing-service-page marketing-service-page--content">
        <Breadcrumbs items={breadcrumbs} />

                {/* Hero Section */}
        <section className="msp-hero msp-hero--content paper-grain">
          <div className="container msp-hero__layout">
            <div className="msp-hero__content">
              <div className="msp-hero__badge">
                <i className={`fas ${service.icon}`} aria-hidden="true" />
                <span>{service.name}</span>
              </div>

              <h1>Content Marketing That Establishes Authority</h1>

              <p className="msp-hero__copy">
                Create valuable content that attracts, engages, and converts your
                audience. Establish authority and drive customer action with
                strategic content marketing.
              </p>

              <div className="msp-hero__actions">
                <button
                  type="button"
                  data-popup="contact"
                  className="paper-button paper-button--rust"
                >
                  Start Content Marketing
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
                    <i className="fas fa-pen-nib" />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="msp-hero-art__canvas">
                    <div className="msp-hero-art__line msp-hero-art__line--orange" />
                    <div className="msp-hero-art__line" />
                    <div className="msp-hero-art__line msp-hero-art__line--short" />
                    <div className="msp-hero-art__tiles">
                      <span />
                      <span />
                      <span />
                    </div>
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
              <h2>
                Complete Content Marketing <span>Services</span>
              </h2>
              <p>
                Every content type you need to attract and engage customers.
              </p>
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
              <h2>
                Our Content Marketing <span>Process</span>
              </h2>
              <p>Strategic approach to content that drives results.</p>
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
                <h2>
                  Content Marketing Success <span>Stories</span>
                </h2>
                <p>Businesses growing with strategic content.</p>
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
              <h2>
                What Our Clients <span>Say</span>
              </h2>
              <p>Businesses building authority with content marketing.</p>
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
              <h2>
                Frequently Asked <span>Questions</span>
              </h2>
              <p>Common questions about content marketing services.</p>
            </div>

            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        <RelatedServices services={relatedServices} />

        <div className="msp-cta">
          <CTASection
            title="Ready to Start Content Marketing?"
            description="Create valuable content that attracts your ideal customers and establishes your expertise."
            primaryButtonText="Start Content Marketing"
            primaryButtonAction="contact"
          />
        </div>
      </div>
    </>
  );
}