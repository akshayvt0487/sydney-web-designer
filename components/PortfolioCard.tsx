"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PortfolioProject } from "@/lib/constants";

interface PortfolioCardProps {
  project: PortfolioProject;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const [imageError, setImageError] = useState(false);
  const previewImage = project.images?.[0] || project.image;

  const cardContent = (
    <article className="paper-project-card">
      <div className="paper-project-card__media">
        {previewImage && !imageError && (
          <Image
            src={previewImage}
            alt={`${project.name} - ${project.industry}`}
            fill
            className="object-contain"
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        )}
      </div>

      <div className="paper-project-card__body">
        <h3>{project.name}</h3>
        <p className="paper-project-card__industry">{project.industry}</p>
        <p className="paper-project-card__description">{project.description}</p>

        <div className="paper-project-card__tags">
          {project.services.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
      </div>
    </article>
  );

  return project.caseStudyUrl ? (
    <Link href={project.caseStudyUrl} className="block h-full">
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
}
