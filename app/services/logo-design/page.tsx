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
  title: "Logo Design Sydney | Professional Brand Logos | Sydney Web Designer",
  description:
    "Memorable logo design that captures your brand essence. Professional logo creation with unlimited revisions. Get a distinctive logo that stands out.",
  keywords:
    "logo design sydney, professional logo design, custom logo design, brand logo, logo designer sydney, business logo design",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/services/logo-design",
  ogImage: "/images/og/services.svg",
});

export default function LogoDesignPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Services", url: "https://www.sydneywebdesigner.com.au/services" },
    {
      name: "Logo Design",
      url: "https://www.sydneywebdesigner.com.au/services/logo-design",
    },
  ];

  const faqs = [
    {
      question: "How long does the logo design process take?",
      answer:
        "Typically 2-3 weeks from initial consultation to final delivery. This includes time for concept development, your feedback, revisions, and finalization. Rush projects can be accommodated for an additional fee.",
    },
    {
      question: "What file formats will I receive?",
      answer:
        "You'll receive vector files (AI, EPS, SVG, PDF) for scalability, high-resolution PNG and JPG files with transparent backgrounds, and web-optimized versions. All files are suitable for both print and digital use.",
    },
    {
      question: "How many logo concepts will I receive?",
      answer:
        "We typically present 3-5 initial logo concepts based on our discovery session. You can then select your favorite concept for refinement through unlimited revisions until perfect.",
    },
    {
      question: "Do I own the copyright to my logo?",
      answer:
        "Yes! Upon final payment, you receive full ownership and copyright of your logo design. You're free to use it however you wish with no restrictions or additional licensing fees.",
    },
    {
      question: "Can you redesign my existing logo?",
      answer:
        "Absolutely! We offer logo refresh and modernization services. We can update your existing logo while maintaining brand recognition, or create an entirely new design if that better serves your business goals.",
    },
    {
      question: "What information do you need to get started?",
      answer:
        "We'll discuss your business, target audience, brand personality, competitors, and any design preferences during our discovery session. This ensures we create a logo that truly represents your brand and resonates with your audience.",
    },
  ];

  const relatedServices = [
    {
      title: "Brand Identity Design",
      description:
        "Complete brand identity systems including logo, color palette, typography, and brand guidelines.",
      href: "/services/brand-identity",
      icon: "fas fa-palette",
    },
    {
      title: "Custom Web Design",
      description:
        "Professional website design that showcases your new logo and brand identity perfectly.",
      href: "/services/custom-web-design",
      icon: "fas fa-desktop",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design that brings your brand to life across digital touchpoints.",
      href: "/services/ui-ux-design",
      icon: "fas fa-pencil-ruler",
    },
  ];

  const stats = [
    { label: "Logos Created", number: "500+" },
    { label: "Industries Served", number: "50+" },
    { label: "Revision Rounds", number: "Unlimited" },
    { label: "Client Satisfaction", number: "98%" },
  ];

  const features = [
    {
      title: "Custom Logo Design",
      description:
        "Original, unique logos tailored to your brand identity and business goals.",
      icon: "fas fa-palette",
    },
    {
      title: "Unlimited Revisions",
      description:
        "We refine your logo until it perfectly captures your brand essence.",
      icon: "fas fa-sync-alt",
    },
    {
      title: "Multiple Concepts",
      description:
        "Choose from multiple initial design concepts crafted specifically for your business.",
      icon: "fas fa-lightbulb",
    },
    {
      title: "Vector Files Included",
      description:
        "Receive high-quality vector files (AI, EPS, SVG, PDF) for unlimited scalability.",
      icon: "fas fa-file-image",
    },
    {
      title: "Brand Color Palette",
      description:
        "Professional color palette development that aligns with your brand strategy.",
      icon: "fas fa-palette",
    },
    {
      title: "Typography Selection",
      description:
        "Carefully selected fonts that complement your logo and brand personality.",
      icon: "fas fa-font",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description:
        "Deep dive into your brand, values, target audience, and competition.",
    },
    {
      step: "02",
      title: "Concept Development",
      description:
        "Create multiple logo concepts based on strategic insights.",
    },
    {
      step: "03",
      title: "Refinement",
      description:
        "Refine your selected concept through unlimited revision rounds.",
    },
    {
      step: "04",
      title: "Finalization",
      description:
        "Deliver final logo files in all formats with usage guidelines.",
    },
  ];

  const reasons = [
    {
      title: "Strategic Design Approach",
      description:
        "We don't just create pretty logos. Every design decision is backed by strategy, market research, and understanding of your target audience. Your logo will work hard to communicate your brand values and differentiate you from competitors.",
    },
    {
      title: "Unlimited Revisions",
      description:
        "Your satisfaction is our priority. We include unlimited revisions in every package, ensuring your logo perfectly captures your brand essence. We'll refine and adjust until you're 100% happy with the result.",
    },
    {
      title: "Complete File Package",
      description:
        "Receive your logo in all essential formats: vector files (AI, EPS, SVG), high-resolution PNG and JPG files, and web-optimized versions. Plus, you'll get full ownership and copyright of your logo design.",
    },
    {
      title: "Experienced Design Team",
      description:
        "Our designers have created over 500 logos across 50+ industries. We understand what works in different markets and how to create logos that stand the test of time while remaining modern and relevant.",
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
              "Logo Design",
              "Professional logo design services in Sydney with unlimited revisions",
              "https://www.sydneywebdesigner.com.au/services/logo-design"
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

      <div className="branding-paper-page branding-paper-page--logo">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Section */}
        <ServiceHeroSection
          h1="Logo Design Sydney"
          badge={{
            icon: "fas fa-palette",
            text: "Logo Design",
          }}
          heading="Professional Logo Design That Defines Your Brand"
          description="Create a memorable logo that captures your brand essence and stands out in your market. Custom designs with unlimited revisions until you're 100% satisfied."
          buttons={{
            primary: {
              text: "Get Your Free Consultation",
              dataPopup: "contact",
            },
            secondary: {
              text: "View Our Portfolio",
              href: "/#portfolio",
            },
          }}
        />

        {/* Stats Section */}
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

        {/* What We Offer */}
        <section className="branding-section branding-offer paper-grain">
          <div className="container">
            <div className="branding-heading">
              <h2>
                Comprehensive Logo Design <span>Services</span>
              </h2>

              <p>
                Every logo design package includes everything you need to
                establish a strong brand identity
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

        {/* Logo Design Process */}
        <section className="branding-section branding-process">
          <div className="container">
            <div className="branding-heading branding-heading--dark">
              <h2>
                Our Logo Design <span>Process</span>
              </h2>

              <p>
                A proven methodology that delivers exceptional logo designs
                every time
              </p>
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

        {/* Why Choose Us */}
        <section className="branding-section branding-reasons paper-grain">
          <div className="container">
            <div className="branding-heading">
              <h2>
                Why Choose Sydney Web Designer for Your <span>Logo</span>?
              </h2>
            </div>

            <div className="branding-reasons__grid">
              {reasons.map((reason, index) => (
                <article key={reason.title} className="branding-reason">
                  <span className="branding-reason__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
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
            </div>

            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        {/* Related Services */}
        <RelatedServices services={relatedServices} />

        {/* CTA Section */}
        <div className="branding-cta">
          <CTASection
            title="Ready to Create Your Perfect Logo?"
            description="Let's design a logo that captures your brand essence and makes you stand out. Get started with a free consultation today."
          />
        </div>
      </div>
    </>
  );
}