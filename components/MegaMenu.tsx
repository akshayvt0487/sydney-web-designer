"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/constants";

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const webDesignServices = services.filter(s => s.category === "web-design");
  const brandingServices = services.filter(s => s.category === "branding");
  const marketingServices = services.filter(s => s.category === "digital-marketing");

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-primary-navy hover:text-primary-orange transition-colors font-medium flex items-center gap-1">
        Services
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] bg-white rounded-lg shadow-2xl border-t-4 border-primary-orange overflow-hidden animate-fadeIn">
          <div className="grid grid-cols-3 divide-x divide-gray-200">
            {/* Web Design Column */}
            <div className="p-6 bg-gradient-to-b from-gray-50 to-white hover:border-l-4 hover:border-primary-orange transition-all">
              <h3 className="text-lg font-bold text-primary-navy mb-4 flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                Web Design
              </h3>
              <ul className="space-y-2">
                {webDesignServices.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex items-center gap-2 p-2 rounded hover:bg-primary-orange hover:text-white transition-all"
                    >
                      <span className="text-xl">{service.icon}</span>
                      <span className="text-sm font-medium">{service.name}</span>
                      <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Branding Column */}
            <div className="p-6 bg-white hover:border-l-4 hover:border-primary-orange transition-all">
              <h3 className="text-lg font-bold text-primary-navy mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Branding
              </h3>
              <ul className="space-y-2">
                {brandingServices.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex items-center gap-2 p-2 rounded hover:bg-primary-orange hover:text-white transition-all"
                    >
                      <span className="text-xl">{service.icon}</span>
                      <span className="text-sm font-medium">{service.name}</span>
                      <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Digital Marketing Column */}
            <div className="p-6 bg-gradient-to-b from-gray-50 to-white hover:border-l-4 hover:border-primary-orange transition-all">
              <h3 className="text-lg font-bold text-primary-navy mb-4 flex items-center gap-2">
                <span className="text-2xl">📈</span>
                Digital Marketing
              </h3>
              <ul className="space-y-2">
                {marketingServices.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex items-center gap-2 p-2 rounded hover:bg-primary-orange hover:text-white transition-all"
                    >
                      <span className="text-xl">{service.icon}</span>
                      <span className="text-sm font-medium">{service.name}</span>
                      <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
