import Image from "next/image";
import type { ReactNode } from "react";

interface ResultProject {
  name: string;
  industry: string;
  description: string;
  image?: string;
  websiteUrl?: string;
}

interface ServiceResultsSectionProps {
  title: ReactNode;
  kicker?: string;
  projects: ResultProject[];
}

export default function ServiceResultsSection({
  title,
  kicker,
  projects,
}: ServiceResultsSectionProps) {
  return (
    <section className="service-paper-section service-detail-results paper-grain">
      <div className="container">
        <div className="service-paper-heading service-paper-heading--center">
          {kicker && (
            <span className="service-detail-results__kicker">{kicker}</span>
          )}
          <h2>{title}</h2>
        </div>

        <div className="service-detail-results__grid">
          {projects.map((project) => (
            <article key={project.name} className="service-detail-result">
              {project.image && (
                <div className="service-detail-result__media">
                  <Image
                    src={project.image}
                    alt={`${project.name} website design result`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                  />

                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-detail-result__website"
                    >
                      View Website
                      <i
                        className="fas fa-arrow-up-right-from-square"
                        aria-hidden="true"
                      />
                    </a>
                  )}
                </div>
              )}

              <div className="service-detail-result__body">
                <span className="service-detail-result__industry">
                  {project.industry}
                </span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

