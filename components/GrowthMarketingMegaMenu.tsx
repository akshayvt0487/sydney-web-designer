"use client";

import Link from "next/link";
import { useState } from "react";

export default function GrowthMarketingMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const seoServices = [
    { name: "SEO Services", slug: "seo-sydney", description: "Complete SEO for Sydney businesses", icon: "fa-search" },
    { name: "Local SEO", slug: "local-seo", description: "Dominate local search results", icon: "fa-map-marker-alt" },
    { name: "Ecommerce SEO", slug: "ecommerce-seo", description: "Rank products & drive sales", icon: "fa-shopping-cart" },
    { name: "Mobile SEO", slug: "mobile-seo", description: "Optimize for mobile search", icon: "fa-mobile-alt" },
    { name: "SEO Copywriting", slug: "seo-copywriting", description: "Search-optimized content", icon: "fa-pen-fancy" },
    { name: "Link Building", slug: "link-building", description: "High-quality backlinks", icon: "fa-link" },
  ];

  const paidAdvertising = [
    { name: "Google Ads", slug: "google-ads", description: "PPC campaigns that convert", icon: "fa-google", iconType: "fab" },
    { name: "Meta Ads", slug: "meta-ads", description: "Facebook & Instagram advertising", icon: "fa-facebook", iconType: "fab" },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-primary-navy hover:text-primary-orange transition-colors font-medium flex items-center gap-1">
        Growth Marketing
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[960px] max-w-[95vw] z-50">
          <div className="bg-white rounded-lg shadow-2xl border-t-4 border-primary-orange overflow-hidden animate-fadeIn mt-1">
            {/* Main Heading */}
            <div className="bg-gradient-to-r from-primary-navy to-[#2d3b4f] text-white px-6 py-3">
              <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                <i className="fas fa-chart-line text-primary-orange"></i>
                Growth Marketing
              </h2>
            </div>

            <div className="grid grid-cols-3 divide-x divide-gray-200">
              {/* SEO Services Column */}
              <div className="p-6 bg-gray-50 col-span-2">
              
                <div className="grid grid-cols-2 gap-2">
                  {seoServices.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="group block p-2.5 rounded hover:bg-primary-orange hover:text-white transition-all"
                    >
                      <div className="font-medium text-sm mb-1 flex items-center gap-2">
                        <i className={`fas ${service.icon} text-xs`}></i>
                        {service.name}
                      </div>
                      <div className="text-xs opacity-75">{service.description}</div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Paid Advertising Column */}
              <div className="p-6 bg-gradient-to-br from-[#1e293b] to-[#2d3b4f] text-white">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
                  <i className="fas fa-bullhorn text-[#f59e0b]"></i>
                  Paid Advertising
                </h3>
                <div className="space-y-3 mb-6">
                  {paidAdvertising.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="group block p-3 rounded hover:bg-white/10 transition-all border border-white/20"
                    >
                      <div className="font-medium mb-1 flex items-center gap-2">
                        <i className={`${service.iconType} ${service.icon} text-lg text-[#f59e0b]`}></i>
                        {service.name}
                      </div>
                      <div className="text-sm opacity-75">{service.description}</div>
                    </Link>
                  ))}
                </div>

                <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-lg p-4 mt-6">
                  <p className="text-sm mb-3 text-slate-200">
                    <i className="fas fa-rocket mr-2 text-[#f59e0b]"></i>
                    Explore All Services
                  </p>
                  <Link
                    href="/growth-marketing"
                    onClick={() => setIsOpen(false)}
                    className="block text-center bg-[#f59e0b] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#d97706] transition-all text-sm"
                  >
                    View Growth Marketing
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
