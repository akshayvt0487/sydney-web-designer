import Link from "next/link";

interface RelatedService {
  title: string;
  description: string;
  href: string;
  icon: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
}

export default function RelatedServices({ services }: RelatedServicesProps) {
  return (
    <section className="service-paper-related paper-grain">
      <div className="container">
        <div className="service-paper-heading service-paper-heading--dark service-paper-heading--center">
          <h2>Related Services</h2>
        </div>

        <div className="service-paper-related__grid">
          {services.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className="service-paper-related__card"
            >
              <div className="service-paper-related__top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i className={service.icon} aria-hidden="true" />
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="service-paper-related__link">
                Learn More
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
