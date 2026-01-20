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
  gradient = true,
}: CTASectionProps) {
  return (
    <section className={gradient ? "gradient-navy-orange text-white py-20" : "bg-gray-50 py-20"}>
      <div className="container text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${gradient ? 'text-white' : 'text-primary-navy'}`}>
          {title}
        </h2>
        {description && (
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${gradient ? 'text-gray-100' : 'text-gray-600'}`}>
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            data-popup={primaryButtonAction}
            className={gradient ? "btn btn-white" : "btn btn-primary"}
          >
            {primaryButtonText}
          </button>
          {secondaryButtonText && (
            <button
              data-popup={secondaryButtonAction}
              className={gradient ? "btn btn-secondary border-white text-white hover:bg-white hover:text-primary-navy" : "btn btn-secondary"}
            >
              {secondaryButtonText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
