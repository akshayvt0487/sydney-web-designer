"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/constants";

export default function WebDesignMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Get all web design services
  const webDesignServices = services.filter(s => s.category === "web-design");

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-primary-navy hover:text-primary-orange transition-colors font-medium flex items-center gap-1">
        Web Design
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] max-w-[95vw] z-50">
          <div className="bg-white rounded-lg shadow-2xl border-t-4 border-primary-orange overflow-hidden animate-fadeIn mt-1">
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-primary-navy mb-2 flex items-center gap-2">
                  <i className="fas fa-palette text-primary-orange"></i>
                  Web Design Services
                </h3>
                <p className="text-sm text-gray-600">Professional web design solutions for Sydney businesses</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {webDesignServices.map((service, index) => (
                  <Link
                    key={index}
                    href={`/services/${service.slug}`}
                    className="group flex items-start gap-3 p-3 rounded hover:bg-primary-orange hover:text-white transition-all"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-100 group-hover:bg-white/20 rounded-lg flex items-center justify-center transition-all">
                      <i className={`fas ${service.icon} text-primary-orange group-hover:text-white`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm mb-1">{service.name}</div>
                      <div className="text-xs opacity-75 line-clamp-2">{service.shortDescription}</div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  href="/web-design"
                  className="group flex items-center justify-between p-3 rounded bg-gradient-to-r from-[#f59e0b] to-[#fb923c] text-white hover:shadow-lg transition-all"
                >
                  <span className="font-semibold">View All Web Design Services</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
