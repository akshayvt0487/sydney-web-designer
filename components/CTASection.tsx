import Link from "next/link";
import type { ServiceGroup } from "@/lib/forms/service-popup-config";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonAction?: string;
  primaryButtonHref?: string;

  primaryButtonService?: string;
  primaryButtonServiceName?: string;
  primaryButtonGroup?: ServiceGroup | string;
  primaryButtonPlan?: string;
  primaryButtonPlanDescription?: string;
  primaryButtonPlanFeatures?: string[];

  secondaryButtonText?: string;
  secondaryButtonAction?: string;
  secondaryButtonHref?: string;

  secondaryButtonService?: string;
  secondaryButtonServiceName?: string;
  secondaryButtonGroup?: ServiceGroup | string;
  secondaryButtonPlan?: string;
  secondaryButtonPlanDescription?: string;
  secondaryButtonPlanFeatures?: string[];

  gradient?: boolean;
}

export default function CTASection({
  title,
  description,
  primaryButtonText = "Get Started",
  primaryButtonAction = "contact",
  primaryButtonHref,
  primaryButtonService,
  primaryButtonServiceName,
  primaryButtonGroup,
  primaryButtonPlan,
  primaryButtonPlanDescription,
  primaryButtonPlanFeatures,
  secondaryButtonText,
  secondaryButtonAction,
  secondaryButtonHref,
  secondaryButtonService,
  secondaryButtonServiceName,
  secondaryButtonGroup,
  secondaryButtonPlan,
  secondaryButtonPlanDescription,
  secondaryButtonPlanFeatures,
}: CTASectionProps) {
  return (
    <section className="paper-cta paper-grain">
      <div className="container">
        <div className="paper-cta__frame">
          <h2>{title}</h2>

          {description && <p>{description}</p>}

          <div className="paper-cta__actions">
            {primaryButtonHref ? (
              <Link
                href={primaryButtonHref}
                className="paper-button paper-button--rust"
              >
                {primaryButtonText}
              </Link>
            ) : (
              <button
                type="button"
                data-popup={primaryButtonAction}
                data-service-slug={primaryButtonService}
                data-service-name={primaryButtonServiceName}
                data-service-group={primaryButtonGroup}
                data-popup-service={primaryButtonService}
                data-popup-group={primaryButtonGroup}
                data-plan-name={primaryButtonPlan}
                data-plan-description={primaryButtonPlanDescription}
                data-plan-features={
                  primaryButtonPlanFeatures
                    ? JSON.stringify(primaryButtonPlanFeatures)
                    : undefined
                }
                className="paper-button paper-button--rust"
              >
                {primaryButtonText}
              </button>
            )}

            {secondaryButtonText &&
              (secondaryButtonHref ? (
                <Link
                  href={secondaryButtonHref}
                  className="paper-button paper-cta__secondary"
                >
                  {secondaryButtonText}
                </Link>
              ) : (
                <button
                  type="button"
                  data-popup={secondaryButtonAction}
                  data-service-slug={secondaryButtonService}
                  data-service-name={secondaryButtonServiceName}
                  data-service-group={secondaryButtonGroup}
                  data-popup-service={secondaryButtonService}
                  data-popup-group={secondaryButtonGroup}
                  data-plan-name={secondaryButtonPlan}
                  data-plan-description={secondaryButtonPlanDescription}
                  data-plan-features={
                    secondaryButtonPlanFeatures
                      ? JSON.stringify(secondaryButtonPlanFeatures)
                      : undefined
                  }
                  className="paper-button paper-cta__secondary"
                >
                  {secondaryButtonText}
                </button>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}