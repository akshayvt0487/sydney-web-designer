"use client";

import Link from "next/link";
import { useState } from "react";

export default function SEOMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const seoServices = [
    { name: "SEO Services", slug: "seo-sydney", description: "Complete SEO for Sydney businesses" },
    { name: "Local SEO", slug: "local-seo", description: "Dominate local search results" },
    { name: "Ecommerce SEO", slug: "ecommerce-seo", description: "Rank products & drive sales" },
    { name: "Mobile SEO", slug: "mobile-seo", description: "Optimize for mobile search" },
  ];

  const contentServices = [
    { name: "SEO Copywriting", slug: "seo-copywriting", description: "Search-optimized content" },
    { name: "Link Building", slug: "link-building", description: "High-quality backlinks" },
    { name: "Digital PR", slug: "digital-pr", description: "Build authority & trust" },
  ];

  const pricingModel = [
    { name: "Pay on Performance", slug: "pay-on-performance-seo", description: "Only pay for results" },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-primary-navy hover:text-primary-orange transition-colors font-medium flex items-center gap-1">
        SEO
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[960px] max-w-[95vw] z-50">
          <div className="bg-white rounded-lg shadow-2xl border-t-4 border-primary-orange overflow-hidden animate-fadeIn mt-1">
            <div className="grid grid-cols-3 divide-x divide-gray-200">
              {/* SEO Services Column */}
              <div className="p-6 bg-gray-50">
                <h3 className="text-lg font-bold text-primary-navy mb-4 flex items-center gap-2">
                  <i className="fas fa-search text-primary-orange"></i>
                  SEO Services
                </h3>
                <ul className="space-y-1">
                  {seoServices.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group block p-2.5 rounded hover:bg-primary-orange hover:text-white transition-all"
                      >
                        <div className="font-medium text-sm mb-1">{service.name}</div>
                        <div className="text-xs opacity-75">{service.description}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Content & Link Building Column */}
              <div className="p-6 bg-white">
                <h3 className="text-lg font-bold text-primary-navy mb-4 flex items-center gap-2">
                  <i className="fas fa-pen-fancy text-primary-orange"></i>
                  Content & Links
                </h3>
                <ul className="space-y-1">
                  {contentServices.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group block p-2.5 rounded hover:bg-primary-orange hover:text-white transition-all"
                      >
                        <div className="font-medium text-sm mb-1">{service.name}</div>
                        <div className="text-xs opacity-75">{service.description}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing Model Column */}
              <div className="p-6 bg-gradient-to-br from-[#1e293b] to-[#2d3b4f] text-white">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <i className="fas fa-trophy text-[#f59e0b]"></i>
                  Pricing Model
                </h3>
                <ul className="space-y-1 mb-6">
                  {pricingModel.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group block p-2.5 rounded hover:bg-white/10 transition-all"
                      >
                        <div className="font-medium text-sm mb-1">{service.name}</div>
                        <div className="text-xs opacity-75">{service.description}</div>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-lg p-4 mt-6">
                  <p className="text-sm mb-3 text-slate-200">
                    <i className="fas fa-rocket mr-2 text-[#f59e0b]"></i>
                    Get FREE SEO Audit
                  </p>
                  <Link
                    href="#contact"
                    className="block text-center bg-[#f59e0b] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#d97706] transition-all text-sm"
                  >
                    Start Now
                  </Link>
                </div>
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
