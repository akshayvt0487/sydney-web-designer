interface CTASectionProps {
  title: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonAction?: string;
  secondaryButtonText?: string;
  secondaryButtonAction?: string;
  gradient?: boolean;
}

export default function CTASection({
  title,
  description,
  primaryButtonText = "Get Started",
  primaryButtonAction = "contact",
  secondaryButtonText,
  secondaryButtonAction,
}: CTASectionProps) {
  return (
    <section className="paper-cta paper-grain">
      <div className="container">
        <div className="paper-cta__frame">
          <h2>{title}</h2>

          {description && <p>{description}</p>}

          <div className="paper-cta__actions">
            <button
              type="button"
              data-popup={primaryButtonAction}
              className="paper-button paper-button--rust"
            >
              {primaryButtonText}
            </button>

            {secondaryButtonText && (
              <button
                type="button"
                data-popup={secondaryButtonAction}
                className="paper-button paper-cta__secondary"
              >
                {secondaryButtonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
