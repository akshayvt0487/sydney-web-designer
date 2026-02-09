"use client";

import Link from "next/link";
import Image from "next/image";
import { PortfolioProject } from "@/lib/constants";
import { useState } from "react";

interface PortfolioCardProps {
  project: PortfolioProject;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const [imageError, setImageError] = useState(false);

  const cardContent = (
    <div className="p-2 group overflow-hidden p-0 h-full flex flex-col hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-orange-200">
      {/* Image on Top */}
      <div className="relative w-full h-64 bg-gradient-to-br from-primary-navy to-primary-orange overflow-hidden">
        {project.image && !imageError && (
          <Image
            src={project.image}
            alt={`${project.name} - ${project.industry}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500 "
            onError={() => setImageError(true)}
          />
        )}
      </div>

      {/* Text Content Below */}
      <div className="pt-6 p-4 flex-grow flex flex-col ">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-primary-navy group-hover:text-primary-orange transition-colors ">
            {project.name}
          </h3>
          <p className="text-xs font-medium p-2 text-gray-500  bg-slate-200/50 ">{project.industry}</p>
          <p className="text-sm text-gray-600 line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Services Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.services.map((service, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1.5 bg-gray-200 text-gray-700 rounded-full group-hover:bg-gray group-hover:text-white transition-colors"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  // Make entire card clickable if there's a case study URL
  if (project.caseStudyUrl) {
    return (
      <Link href={project.caseStudyUrl} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
