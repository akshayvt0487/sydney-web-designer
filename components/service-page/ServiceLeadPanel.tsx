import type { ReactNode } from "react";

interface ServiceLeadPanelProps {
  title: string;
  description: string;
  children: ReactNode;
  id?: string;
}

export default function ServiceLeadPanel({
  title,
  description,
  children,
  id,
}: ServiceLeadPanelProps) {
  return (
    <section className="service-detail-lead paper-grain" id={id}>
      <div className="container">
        <div className="service-detail-lead__frame">
          <div className="service-detail-lead__heading">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}

