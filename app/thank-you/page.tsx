import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Thank You",
  description:
    "Thank you for contacting Sydney Web Designer. We've received your message and will respond within 24 hours.",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/thank-you",
  noIndex: true,
});

interface ThankYouPageProps {
  searchParams: {
    type?: string;
  };
}

export default function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const formType = searchParams.type || "contact";

  const getThankYouContent = (type: string) => {
    const contentMap: Record<
      string,
      {
        title: string;
        message: string;
        nextStep: string;
        icon: string;
      }
    > = {
      contact: {
        title: "We've Got Your Message!",
        message:
          "Thanks for reaching out! Our team will review your inquiry and get back to you within 24 hours. We're excited to help you grow your business online.",
        nextStep: "Check your email for a confirmation message",
        icon: "fas fa-envelope-open-text",
      },
      seoAudit: {
        title: "SEO Audit Requested!",
        message:
          "Excellent choice! Our SEO experts will analyze your website and send you a comprehensive audit report within the next 48 hours with actionable recommendations.",
        nextStep: "Get ready to discover untapped SEO opportunities",
        icon: "fas fa-search",
      },
      adsAudit: {
        title: "Google Ads Audit Scheduled!",
        message:
          "Perfect! Our paid advertising specialists will review your Google Ads campaigns and provide detailed insights on how to improve your ROI and reduce wasted spend.",
        nextStep: "We'll share proven optimization strategies soon",
        icon: "fas fa-chart-line",
      },
      consultation: {
        title: "Consultation Booked!",
        message:
          "Great! We're looking forward to chatting with you. Our team will confirm your consultation slot shortly. This is your chance to discuss all your digital marketing goals.",
        nextStep: "Check your email for the meeting details and Zoom link",
        icon: "fas fa-video",
      },
      careerApplication: {
        title: "Application Received!",
        message:
          "Thank you for your interest in joining the Sydney Web Designer team! We've received your application and will review it carefully. We'll be in touch if your profile matches our needs.",
        nextStep: "Keep an eye on your inbox for updates",
        icon: "fas fa-briefcase",
      },
    };

    return contentMap[type] || contentMap.contact;
  };

  const content = getThankYouContent(formType);

  const creativeLines = [
    "While you wait, explore our portfolio to get inspired!",
    "Your success is our mission. We can't wait to help you!",
    "Great things are coming your way!",
    "Let's build something amazing together!",
    "Your digital transformation starts now!",
  ];

  const randomLine =
    creativeLines[Math.floor(Math.random() * creativeLines.length)];

  return (
    <div className="utility-paper-page utility-paper-page--thanks">
      {/* Thank You Hero Section */}
      <section className="utility-hero utility-hero--thanks">
        <div className="container utility-hero__inner">
          {/* Success Icon */}
          <div className="utility-hero__success-icon">
            <i className={content.icon} aria-hidden="true" />
          </div>

          {/* Main Title */}
          <h1>{content.title}</h1>

          {/* Message */}
          <p className="utility-hero__description utility-hero__description--thanks">
            {content.message}
          </p>

          {/* Next Step */}
          <p className="utility-hero__next-step">
            <i className="fas fa-arrow-right" aria-hidden="true" />
            {content.nextStep}
          </p>

          {/* Creative Line */}
          <p className="utility-hero__creative-line">{randomLine}</p>

          {/* Action Buttons */}
          <div className="utility-hero__actions">
            <Link href="/" className="paper-button paper-button--rust">
              <i className="fas fa-home" aria-hidden="true" />
              <span>Back to Home</span>
            </Link>

            <Link href="/portfolio" className="paper-button">
              <i className="fas fa-briefcase" aria-hidden="true" />
              <span>View Portfolio</span>
            </Link>
          </div>

          {/* Secondary Actions */}
          <div className="utility-links-panel">
            <h2>Explore More</h2>

            <div className="utility-links-panel__grid">
              <Link href="/services" className="utility-link">
                <i className="fas fa-cog" aria-hidden="true" />
                <span>Services</span>
              </Link>

              <Link href="/portfolio" className="utility-link">
                <i className="fas fa-briefcase" aria-hidden="true" />
                <span>Portfolio</span>
              </Link>

              <Link href="/blog" className="utility-link">
                <i className="fas fa-newspaper" aria-hidden="true" />
                <span>Blog</span>
              </Link>

              <Link href="/about" className="utility-link">
                <i className="fas fa-info-circle" aria-hidden="true" />
                <span>About</span>
              </Link>

              <Link href="/testimonials" className="utility-link">
                <i className="fas fa-star" aria-hidden="true" />
                <span>Reviews</span>
              </Link>

              <Link href="/contact" className="utility-link">
                <i className="fas fa-envelope" aria-hidden="true" />
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="utility-proof paper-grain">
        <div className="container">
          <header className="utility-heading">
            <h2>
              Why Companies Choose <span>Us</span>
            </h2>

            <p>
              Join the 500+ satisfied clients who have transformed their digital
              presence
            </p>
          </header>

          <div className="utility-proof__grid utility-proof__grid--four">
            <article className="utility-stat-card">
              <strong>13+</strong>
              <h3>Years Experience</h3>
              <p>Trusted by Sydney businesses</p>
            </article>

            <article className="utility-stat-card">
              <strong>500+</strong>
              <h3>Websites Built</h3>
              <p>Across all industries</p>
            </article>

            <article className="utility-stat-card">
              <strong>98%</strong>
              <h3>Satisfaction Rate</h3>
              <p>Client happiness guaranteed</p>
            </article>

            <article className="utility-stat-card">
              <strong>24H</strong>
              <h3>Quick Response</h3>
              <p>We prioritize your needs</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}