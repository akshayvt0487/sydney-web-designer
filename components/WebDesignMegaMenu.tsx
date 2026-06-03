"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const webDesignGroups = [
  {
    title: "Overview",
    links: [
      {
        name: "Web Design Overview",
        href: "/web-design",
        description: "Our complete web design approach",
        icon: "fa-window-maximize",
      },
      {
        name: "Web Design Plans",
        href: "/web-design-plans",
        description: "Packages and transparent pricing",
        icon: "fa-receipt",
      },
    ],
  },
  {
    title: "Design & UX",
    links: [
      {
        name: "Custom Web Design",
        href: "/services/custom-web-design",
        description: "Bespoke designs for your brand",
        icon: "fa-palette",
      },
      {
        name: "Website Redesign",
        href: "/services/website-redesign",
        description: "Modernise your existing website",
        icon: "fa-arrows-rotate",
      },
      {
        name: "UI/UX Design",
        href: "/services/ui-ux-design",
        description: "User-centred digital experiences",
        icon: "fa-pencil-ruler",
      },
      {
        name: "Responsive Design",
        href: "/services/responsive-design",
        description: "Layouts for every screen size",
        icon: "fa-mobile-screen-button",
      },
      {
        name: "Landing Pages",
        href: "/services/landing-pages",
        description: "Conversion-focused campaign pages",
        icon: "fa-file-lines",
      },
    ],
  },
  {
    title: "Development",
    links: [
      {
        name: "WordPress Development",
        href: "/services/wordpress-development",
        description: "Flexible CMS development",
        icon: "fa-wordpress",
        brand: true,
      },
      {
        name: "Ecommerce Websites",
        href: "/services/ecommerce-websites",
        description: "Online stores that convert",
        icon: "fa-cart-shopping",
      },
      {
        name: "High Performance Landing Pages",
        href: "/services/high-performance-landing-pages",
        description: "Fast pages built for results",
        icon: "fa-rocket",
      },
      {
        name: "Vibe Code Website",
        href: "/services/vibe-code-website",
        description: "Modern AI-powered builds",
        icon: "fa-code",
      },
    ],
  },
];

export default function WebDesignMegaMenu() {
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
        Web Design

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
            className="paper-mega paper-mega--grouped paper-mega--web-grouped"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="paper-mega-grouped__header">
              <div>
                <span className="paper-mega__eyebrow">Web Design</span>
                <h2 className="paper-mega__intro-title">
                  Website Design Services
                </h2>
              </div>

              <Link
                href="/web-design"
                className="paper-mega__intro-link"
                onClick={closeMenuImmediately}
              >
                View Web Design
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>

            <div className="paper-mega-grouped__grid">
              {webDesignGroups.map((group) => (
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