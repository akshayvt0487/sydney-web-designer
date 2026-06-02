import type { ReactNode } from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ServiceProcessSectionProps {
  title: ReactNode;
  description: string;
  steps: ProcessStep[];
  id?: string;
  columns?: 3 | 4;
}

export default function ServiceProcessSection({
  title,
  description,
  steps,
  id = "process",
  columns = 3,
}: ServiceProcessSectionProps) {
  return (
    <section className="service-detail-process paper-grain" id={id}>
      <div className="container">
        <div className="service-paper-heading service-paper-heading--dark service-paper-heading--center">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div
          className="service-detail-process__grid"
          data-columns={columns}
        >
          {steps.map((step) => (
            <article
              key={step.number}
              className="service-detail-process__card"
            >
              <div className="service-detail-process__head">
                <span>{step.number.padStart(2, "0")}</span>
                <b aria-hidden="true" />
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
