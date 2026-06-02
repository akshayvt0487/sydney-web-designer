/**
 * ProcessSteps Component
 *
 * Visual markup is redesigned only. Process content continues to come from
 * the existing data object without changing words or ordering.
 */

import type { ProcessFlow } from "@/lib/data/processes";

export interface ProcessStepsProps {
  data: ProcessFlow;
  variant?: "numbered" | "icon";
  showConnectors?: boolean;
  className?: string;
  showHeader?: boolean;
  centerHeader?: boolean;
}

export default function ProcessSteps({
  data,
  variant = "numbered",
  showConnectors = true,
  className = "",
  showHeader = true,
  centerHeader = false,
}: ProcessStepsProps) {
  return (
    <section className={`service-paper-process paper-grain ${className}`}>
      <div className="container">
        {showHeader && (data.title || data.description) && (
          <div
            className={`service-paper-heading service-paper-heading--dark ${
              centerHeader ? "service-paper-heading--center" : ""
            }`}
          >
            {data.title && <h2>{data.title}</h2>}
            {data.description && <p>{data.description}</p>}
          </div>
        )}

        <div
          className={`service-paper-process__grid ${
            showConnectors ? "service-paper-process__grid--connected" : ""
          }`}
        >
          {data.steps.map((step, index) => (
            <article
              key={`${step.title}-${index}`}
              className="service-paper-process__card"
            >
              <div className="service-paper-process__head">
                <span className="service-paper-process__step">
                  {variant === "numbered"
                    ? step.step
                    : String(index + 1).padStart(2, "0")}
                </span>

                {variant === "icon" && step.icon ? (
                  <i className={`fas ${step.icon}`} aria-hidden="true" />
                ) : (
                  <span className="service-paper-process__diamond" aria-hidden="true" />
                )}
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
