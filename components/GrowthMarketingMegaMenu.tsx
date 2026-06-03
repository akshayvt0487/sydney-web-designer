"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const growthMarketingGroups = [
  {
    title: "SEO",
    links: [
      {
        name: "SEO Sydney",
        href: "/services/seo-sydney",
        description: "Complete SEO for Sydney businesses",
        icon: "fa-magnifying-glass",
      },
      {
        name: "Local SEO",
        href: "/services/local-seo",
        description: "Dominate local search results",
        icon: "fa-location-dot",
      },
      {
        name: "Ecommerce SEO",
        href: "/services/ecommerce-seo",
        description: "Rank products and drive sales",
        icon: "fa-cart-shopping",
      },
      {
        name: "Mobile SEO",
        href: "/services/mobile-seo",
        description: "Optimise for mobile search",
        icon: "fa-mobile-screen-button",
      },
      {
        name: "Pay on Performance SEO",
        href: "/services/pay-on-performance-seo",
        description: "Results-focused SEO campaigns",
        icon: "fa-chart-line",
      },
    ],
  },
  {
    title: "Content & Authority",
    links: [
      {
        name: "SEO Copywriting",
        href: "/services/seo-copywriting",
        description: "Search-optimised content",
        icon: "fa-pen-nib",
      },
      {
        name: "Link Building",
        href: "/services/link-building",
        description: "High-quality backlinks",
        icon: "fa-link",
      },
      {
        name: "Digital PR",
        href: "/services/digital-pr",
        description: "Earn coverage and authority",
        icon: "fa-newspaper",
      },
      {
        name: "Content Marketing",
        href: "/services/content-marketing",
        description: "Content that attracts leads",
        icon: "fa-file-lines",
      },
    ],
  },
  {
    title: "Paid & Conversion",
    links: [
      {
        name: "Google Ads",
        href: "/services/google-ads",
        description: "PPC campaigns that convert",
        icon: "fa-google",
        brand: true,
      },
      {
        name: "Meta Ads",
        href: "/services/meta-ads",
        description: "Facebook and Instagram ads",
        icon: "fa-facebook",
        brand: true,
      },
      {
        name: "Social Media Marketing",
        href: "/services/social-media-marketing",
        description: "Reach and engage audiences",
        icon: "fa-hashtag",
      },
      {
        name: "Email Marketing",
        href: "/services/email-marketing",
        description: "Campaigns that retain customers",
        icon: "fa-envelope",
      },
      {
        name: "Conversion Optimization",
        href: "/services/conversion-optimization",
        description: "Turn more visits into leads",
        icon: "fa-bullseye",
      },
    ],
  },
];

export default function GrowthMarketingMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const openMenu = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setIsOpen(true);
  };

  const closeMenu = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      timeoutRef.current = null;
    }, 170);
  };

  const closeMenuImmediately = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setIsOpen(false);
  };

  return (
    <div
      className="paper-nav__menu"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
      onFocusCapture={openMenu}
      onBlurCapture={closeMenu}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        className="paper-nav__trigger"
        data-open={isOpen}
      >
        Growth Marketing

        <svg
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="paper-mega paper-mega--grouped paper-mega--growth-grouped"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="paper-mega-grouped__header">
              <div>
                <span className="paper-mega__eyebrow">Growth Marketing</span>
                <h2 className="paper-mega__intro-title">Marketing Services</h2>
              </div>

              <Link
                href="/growth-marketing"
                className="paper-mega__intro-link"
                onClick={closeMenuImmediately}
              >
                View Growth Marketing
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>

            <div className="paper-mega-grouped__grid">
              {growthMarketingGroups.map((group) => (
                <section key={group.title} className="paper-mega-grouped__column">
                  <div className="paper-mega__column-heading">
                    <h3>{group.title}</h3>
                    <span>{group.links.length} Services</span>
                  </div>

                  <div className="paper-mega-grouped__cards">
                    {group.links.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="paper-mega__service"
                        onClick={closeMenuImmediately}
                      >
                        <span className="paper-mega__service-icon">
                          <i
                            className={`${service.brand ? "fab" : "fas"} ${
                              service.icon
                            }`}
                            aria-hidden="true"
                          />
                        </span>

                        <span className="paper-mega__service-copy">
                          <strong>{service.name}</strong>
                          <small>{service.description}</small>
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}