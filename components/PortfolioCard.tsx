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

  return (
    <div className="card group overflow-hidden p-0 h-full flex flex-col hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative h-56 bg-gradient-to-br from-primary-navy to-primary-orange overflow-hidden">
        {project.image && !imageError && (
          <Image
            src={project.image}
            alt={`${project.name} - ${project.industry}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col bg-white">
        <h3 className="text-xl font-bold text-primary-navy mb-2 group-hover:text-primary-orange transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{project.industry}</p>

        {/* Services Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.services.map((service, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-primary-orange hover:text-white transition-colors"
            >
              {service}
            </span>
          ))}
        </div>

        {/* Link */}
        {project.caseStudyUrl ? (
          <Link
            href={project.caseStudyUrl}
            className="text-gray-400 font-medium flex items-center gap-2 group-hover:text-primary-orange group-hover:gap-3 transition-all mt-auto"
          >
            View Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <div className="text-gray-400 font-medium flex items-center gap-2 mt-auto">
            View Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
