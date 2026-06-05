import { googleReviews } from "@/lib/constants";
import { generateMetadata } from "@/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateLocalBusinessSchema,
  generateFAQSchema,
} from "@/lib/schemas";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = generateMetadata({
  title: "Brand Identity Design Sydney | Logo & Branding Services",
  description:
    "Professional brand identity design services in Sydney. Create a memorable brand with strategic logo design, brand guidelines, and complete visual identity systems.",
  keywords:
    "brand identity design sydney, logo design sydney, branding services, brand guidelines, brand strategy, visual identity sydney",
  canonicalUrl:
    "https://www.sydneywebdesigner.com.au/services/brand-identity",
  ogImage: "/images/og/services.svg",
});

export default function BrandIdentityPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Services", url: "https://www.sydneywebdesigner.com.au/services" },
    {
      name: "Brand Identity",
      url: "https://www.sydneywebdesigner.com.au/services/brand-identity",
    },
  ];

  const stats = [
    { label: "Brands Created", number: "200+" },
    { label: "Logo Designs", number: "500+" },
    { label: "Brand Systems", number: "150+" },
    { label: "Client Satisfaction", number: "98%" },
  ];

  const features = [
    {
      title: "Logo Design",
      description:
        "Custom logo design that captures your brand essence and stands out in your industry.",
      icon: "fas fa-palette",
    },
    {
      title: "Brand Strategy",
      description:
        "Develop your unique brand positioning, messaging, and target audience insights.",
      icon: "fas fa-lightbulb",
    },
    {
      title: "Visual Identity",
      description:
        "Create a cohesive visual system including colors, typography, and design elements.",
      icon: "fas fa-images",
    },
    {
      title: "Brand Guidelines",
      description:
        "Comprehensive brand guidelines document ensuring consistency across all materials.",
      icon: "fas fa-book",
    },
    {
      title: "Marketing Collateral",
      description:
        "Design business cards, letterheads, envelopes, and other branded materials.",
      icon: "fas fa-file-pdf",
    },
    {
      title: "Brand Evolution",
      description:
        "Refresh and modernize existing brand identities while maintaining brand recognition.",
      icon: "fas fa-sync-alt",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description:
        "We dive deep into your business, competitors, and target audience to develop a solid brand strategy.",
    },
    {
      step: "02",
      title: "Concept Development",
      description:
        "Create multiple logo and visual identity concepts based on your brand strategy and positioning.",
    },
    {
      step: "03",
      title: "Design & Refinement",
      description:
        "Refine your preferred designs and develop a complete visual identity system across all touchpoints.",
    },
    {
      step: "04",
      title: "Brand Guidelines",
      description:
        "Deliver comprehensive brand guidelines ensuring consistent application across all channels and materials.",
    },
  ];

  const benefits = [
    {
      title: "First Impressions",
      description:
        "70% of first impressions are based on visual design. A professional brand identity makes a powerful first impact.",
    },
    {
      title: "Brand Recognition",
      description:
        "Consistent visual branding increases brand recognition by 80% and builds customer trust and loyalty.",
    },
    {
      title: "Competitive Advantage",
      description:
        "Stand out from competitors with a distinctive brand identity that reflects your unique value proposition.",
    },
    {
      title: "Market Value",
      description:
        "Strong brands command premium pricing and are valued 20% higher by customers than weaker brands.",
    },
  ];

  const faqs = [
    {
      question: "What is included in a brand identity package?",
      answer:
        "A complete brand identity package includes logo design (multiple concepts and revisions), color palette, typography selection, brand guidelines document, business card design, and digital assets. We can also include additional collateral like letterheads, email signatures, and social media templates based on your needs.",
    },
    {
      question: "How long does brand identity design take?",
      answer:
        "Typically 4-8 weeks depending on the scope. This includes discovery and strategy (1-2 weeks), concept development (2-3 weeks), refinement (1-2 weeks), and finalization with brand guidelines (1 week). Rush projects can be accommodated with adjusted timelines.",
    },
    {
      question:
        "Can you refresh my existing brand without starting from scratch?",
      answer:
        "Absolutely! Brand evolution or refresh is perfect when you want to modernize your look while maintaining brand recognition. We can update your logo, refresh your color palette, modernize typography, and create new brand guidelines while keeping the essence of your existing brand.",
    },
    {
      question:
        "What is the difference between logo design and brand identity?",
      answer:
        "A logo is just one element of your brand identity. Brand identity is the complete visual system including your logo, colors, typography, imagery style, design elements, and guidelines for how everything works together. It is the comprehensive visual language that represents your business.",
    },
    {
      question: "Will I own the rights to my brand identity?",
      answer:
        "Yes! Upon final payment, you receive full ownership and copyright of all brand identity elements. You can use your logo, colors, fonts, and designs across all mediums without restrictions or additional licensing fees.",
    },
    {
      question: "Do you provide brand strategy or just design?",
      answer:
        "We provide both! Our brand identity projects start with strategic discovery including competitor analysis, target audience research, brand positioning, and messaging. This strategic foundation ensures your visual identity authentically represents your business and resonates with your ideal customers.",
    },
  ];

  const relatedServices = [
    {
      title: "Logo Design",
      description:
        "Professional logo design with unlimited revisions and complete file package.",
      href: "/services/logo-design",
      icon: "fas fa-palette",
    },
    {
      title: "Custom Web Design",
      description:
        "Showcase your new brand identity with a custom-designed website.",
      href: "/services/custom-web-design",
      icon: "fas fa-desktop",
    },
    {
      title: "Marketing Materials",
      description:
        "Business cards, brochures, and marketing collateral with your new brand.",
      href: "/services/graphic-design",
      icon: "fas fa-file-pdf",
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
            generateServiceSchema(
              "Brand Identity Design",
              "Professional brand identity and logo design services in Sydney",
              "https://www.sydneywebdesigner.com.au/services/brand-identity"
            )
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

      <div className="branding-paper-page branding-paper-page--identity">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Section */}
        <ServiceHeroSection
          h1="Branding Agency Sydney"
          badge={{
            icon: "fas fa-palette",
            text: "Brand Identity",
          }}
          heading="Brand Identity Design That Makes You Memorable"
          description="Craft a distinctive brand identity backed by strategy and design excellence. Logos, visual systems, and brand guidelines that define your market presence."
          buttons={{
            primary: {
              text: "Get Your Free Consultation",
              dataPopup: "contact",
              serviceGroup: "branding",
              serviceSlug: "brand-identity",
              serviceName: "Branding Design",
            },
            secondary: {
              text: "View Our Portfolio",
              href: "/portfolio",
            },
          }}
        />

        {/* Overview and Services */}
        <section className="branding-section branding-overview paper-grain">
          <div className="container">
            <div className="branding-overview__intro">
              <div className="branding-heading branding-heading--left">
                <h2>
                  Build a <span>Memorable Brand</span>
                </h2>
              </div>

              <p className="branding-overview__copy">
                Your brand is more than just a logo — it&apos;s the complete
                experience your customers have with your business. We create
                strategic brand identities that communicate your values,
                differentiate you from competitors, and build customer loyalty.
              </p>
            </div>

            <div className="branding-features__grid">
              {features.map((feature) => (
                <article key={feature.title} className="branding-feature">
                  <div className="branding-feature__icon">
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
        <section className="branding-section branding-process">
          <div className="container">
            <div className="branding-heading branding-heading--dark">
              <h2>
                Our Brand Design <span>Process</span>
              </h2>
            </div>

            <div className="branding-process__grid">
              {process.map((item) => (
                <article key={item.step} className="branding-process__card">
                  <span className="branding-process__number">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="branding-stats paper-grain">
          <div className="container">
            <div className="branding-stats__grid">
              {stats.map((stat) => (
                <article key={stat.label} className="branding-stat">
                  <strong>{stat.number}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="branding-section branding-benefits paper-grain">
          <div className="container">
            <div className="branding-heading">
              <h2>
                Why Professional Brand Design <span>Matters</span>
              </h2>
            </div>

            <div className="branding-benefits__grid">
              {benefits.map((benefit, index) => (
                <article key={benefit.title} className="branding-benefit">
                  <span className="branding-benefit__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="branding-section branding-reviews paper-grain">
          <div className="container">
            <div className="branding-heading">
              <h2>
                What Our Clients <span>Say</span>
              </h2>
            </div>

            <div className="branding-reviews__grid">
              {googleReviews.slice(0, 3).map((review) => (
                <TestimonialCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="service-paper-faq paper-grain branding-faq">
          <div className="container">
            <div className="service-paper-heading service-paper-heading--center">
              <h2>
                Frequently Asked <span>Questions</span>
              </h2>

              <p>Everything you need to know about brand identity design</p>
            </div>

            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        {/* Related Services */}
        <RelatedServices services={relatedServices} />

        {/* CTA Section */}
        <div className="branding-cta">
          <CTASection
            title="Ready to Create Your Brand?"
            description="Let's develop a distinctive brand identity that sets you apart and resonates with your customers."
            primaryButtonText="Get Your Free Brand Consultation"
            primaryButtonAction="service"
            primaryButtonService="brand-identity"
            primaryButtonGroup="branding-design"
          />
        </div>
      </div>
    </>
  );
}