import type { ReactNode } from "react";

interface ServiceStat {
  value: string;
  text: string;
}

interface ServiceStatsSectionProps {
  title?: ReactNode;
  stats: ServiceStat[];
}

export default function ServiceStatsSection({
  title,
  stats,
}: ServiceStatsSectionProps) {
  return (
    <section className="service-paper-section service-detail-stats paper-grain">
      <div className="container">
        {title && (
          <div className="service-paper-heading service-paper-heading--center">
            <h2>{title}</h2>
          </div>
        )}

        <div className="service-detail-stats__grid">
          {stats.map((stat) => (
            <article key={stat.text} className="service-detail-stat">
              <div className="service-detail-stat__value">{stat.value}</div>
              <div className="service-detail-stat__text">{stat.text}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

