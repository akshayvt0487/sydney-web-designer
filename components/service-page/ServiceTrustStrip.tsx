interface TrustBadge {
  icon: string;
  text: string;
}

interface ServiceTrustStripProps {
  badges: TrustBadge[];
}

export default function ServiceTrustStrip({ badges }: ServiceTrustStripProps) {
  return (
    <section className="service-detail-trust paper-grain">
      <div className="container">
        <div className="service-detail-trust__grid">
          {badges.map((badge, index) => (
            <div key={badge.text} className="service-detail-trust__item">
              <span className="service-detail-trust__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <i className={`fas ${badge.icon}`} aria-hidden="true" />
              <p>{badge.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

