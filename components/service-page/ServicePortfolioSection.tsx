import Link from "next/link";
import PortfolioCard from "@/components/PortfolioCard";
import type { PortfolioProject } from "@/lib/constants";
import type { ReactNode } from "react";

interface ServicePortfolioSectionProps {
  title: ReactNode;
  description?: string;
  projects: PortfolioProject[];
  buttonText?: string;
  buttonHref?: string;
}

export default function ServicePortfolioSection({
  title,
  description,
  projects,
  buttonText,
  buttonHref = "/portfolio",
}: ServicePortfolioSectionProps) {
  if (projects.length === 0) return null;

  return (
    <section className="service-paper-section service-detail-portfolio paper-grain">
      <div className="container">
        <div className="service-paper-heading service-paper-heading--center">
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>

        <div className="service-detail-portfolio__grid">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>

        {buttonText && (
          <div className="service-inline-action">
            <Link href={buttonHref} className="paper-button paper-button--rust">
              {buttonText}
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
