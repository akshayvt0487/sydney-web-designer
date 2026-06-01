"use client";

import Link from "next/link";
import { useState } from "react";

const seoServices = [
  {
    name: "SEO Services",
    slug: "seo-sydney",
    description: "Complete SEO for Sydney businesses",
    icon: "fa-search",
    iconType: "fas",
  },
  {
    name: "Local SEO",
    slug: "local-seo",
    description: "Dominate local search results",
    icon: "fa-map-marker-alt",
    iconType: "fas",
  },
  {
    name: "Ecommerce SEO",
    slug: "ecommerce-seo",
    description: "Rank products & drive sales",
    icon: "fa-shopping-cart",
    iconType: "fas",
  },
  {
    name: "Mobile SEO",
    slug: "mobile-seo",
    description: "Optimize for mobile search",
    icon: "fa-mobile-alt",
    iconType: "fas",
  },
  {
    name: "SEO Copywriting",
    slug: "seo-copywriting",
    description: "Search-optimized content",
    icon: "fa-pen-fancy",
    iconType: "fas",
  },
  {
    name: "Link Building",
    slug: "link-building",
    description: "High-quality backlinks",
    icon: "fa-link",
    iconType: "fas",
  },
];

const paidAdvertising = [
  {
    name: "Google Ads",
    slug: "google-ads",
    description: "PPC campaigns that convert",
    icon: "fa-google",
    iconType: "fab",
  },
  {
    name: "Meta Ads",
    slug: "meta-ads",
    description: "Facebook & Instagram advertising",
    icon: "fa-facebook",
    iconType: "fab",
  },
];

export default function GrowthMarketingMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex h-full items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        className={`flex h-full items-center gap-1.5 whitespace-nowrap border-b-2 text-[15px] font-semibold transition-colors ${isOpen
            ? "border-primary-orange text-primary-orange"
            : "border-transparent text-primary-navy hover:text-primary-orange"
          }`}
      >
        Growth Marketing

        <svg
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-1/2 top-full z-50 w-[1120px] max-w-[calc(100vw-2rem)] -translate-x-1/2">
          <div className="overflow-hidden rounded-b-2xl border border-t-2 border-slate-200 border-t-primary-orange bg-white shadow-[0_24px_55px_rgba(15,23,42,0.13)]">
            <div className="grid grid-cols-[255px_1fr_270px]">
              {/* Menu Introduction */}
              <div className="border-r border-slate-200 bg-white px-7 py-8">
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-primary-orange">
                  Marketing
                </p>

                <h2 className="text-[25px] font-bold leading-[1.2] text-primary-navy">
                  Growth Marketing
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  SEO and paid advertising services
                </p>

                <Link
                  href="/growth-marketing"
                  onClick={() => setIsOpen(false)}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary-orange transition-colors hover:text-[#d97706]"
                >
                  View Growth Marketing
                  <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
                </Link>
              </div>

              {/* SEO Services */}
              <div className="bg-white px-7 py-8">
                <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-4">
                  <h3 className="text-lg font-bold text-primary-navy">
                    SEO Services
                  </h3>
                  <span className="text-xs font-medium text-slate-400">
                    6 Services
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-x-7 gap-y-1">
                  {seoServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-start gap-3 rounded-xl px-2 py-3 transition-colors hover:bg-orange-50"
                    >
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-primary-navy transition-colors group-hover:bg-primary-orange group-hover:text-white">
                        <i
                          className={`${service.iconType} ${service.icon} text-sm`}
                          aria-hidden="true"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-semibold leading-5 text-primary-navy transition-colors group-hover:text-primary-orange">
                          {service.name}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Paid Advertising */}
              <div className="border-l border-slate-200 bg-slate-50 px-6 py-8">
                <div className="mb-5 border-b border-slate-200 pb-4">
                  <h3 className="text-lg font-bold text-primary-navy">
                    Paid Advertising
                  </h3>
                </div>

                <div className="space-y-3">
                  {paidAdvertising.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="group block rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-primary-orange/40"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-orange/10 text-primary-orange">
                        <i
                          className={`${service.iconType} ${service.icon} text-sm`}
                          aria-hidden="true"
                        />
                      </div>

                      <p className="text-sm font-semibold text-primary-navy transition-colors group-hover:text-primary-orange">
                        {service.name}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {service.description}
                      </p>
                    </Link>
                  ))}
                </div>

                <button
                  type="button"
                  data-popup="contact"
                  className="mt-6 inline-flex min-h-[46px] w-full items-center justify-center rounded-xl bg-primary-orange px-4 text-sm font-semibold text-white transition-colors hover:bg-[#d97706]"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}