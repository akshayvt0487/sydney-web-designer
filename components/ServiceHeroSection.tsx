import Link from "next/link";

interface ServiceHeroSectionProps {
  badge: {
    icon: string;
    text: string;
  };
  heading: string;
  description: string;
  buttons: {
    primary: {
      text: string;
      onClick?: () => void;
      dataPopup?: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
  /** Retained for compatibility with existing pages; not displayed as duplicate hero copy. */
  h1?: string;
  /** Retained for compatibility. Service heroes now use an editorial art composition. */
  heroImage?: string;
  heroImageAlt?: string;
}

export default function ServiceHeroSection({
  badge,
  heading,
  description,
  buttons,
}: ServiceHeroSectionProps) {
  return (
    <section className="service-cover paper-grain">
      <div className="container">
        <div className="service-cover__grid">
          <div className="service-cover__content">
            <div className="service-cover__badge">
              <i className={badge.icon} aria-hidden="true" />
              <span>{badge.text}</span>
            </div>

            <h1 className="service-cover__title">{heading}</h1>

            <p className="service-cover__description">{description}</p>

            <div className="service-cover__actions">
              {buttons.primary.dataPopup ? (
                <button
                  type="button"
                  data-popup={buttons.primary.dataPopup}
                  className="paper-button paper-button--rust"
                >
                  {buttons.primary.text}
                  <i className="fas fa-arrow-right" aria-hidden="true" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={buttons.primary.onClick}
                  className="paper-button paper-button--rust"
                >
                  {buttons.primary.text}
                  <i className="fas fa-arrow-right" aria-hidden="true" />
                </button>
              )}

              <Link href={buttons.secondary.href} className="paper-button service-cover__secondary">
                {buttons.secondary.text}
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="service-cover__composition" aria-hidden="true">
            <div className="service-art">
              <div className="service-art__browser">
                <div className="service-art__browser-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="service-art__browser-bar" />
              </div>

              <div className="service-art__layout">
                <div className="service-art__sidebar">
                  <div className="service-art__icon">
                    <i className={badge.icon} />
                  </div>

                  <div className="service-art__nav">
                    <span className="active" />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="service-art__main">
                  <div className="service-art__hero">
                    <div className="service-art__copy">
                      <span className="service-art__copy-title" />
                      <span className="service-art__copy-line" />
                      <span className="service-art__copy-line service-art__copy-line--short" />
                      <span className="service-art__button" />
                    </div>

                    <div className="service-art__visual">
                      <div className="service-art__visual-circle" />
                      <div className="service-art__visual-card" />
                    </div>
                  </div>

                  <div className="service-art__cards">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>

              <span className="service-art__accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
