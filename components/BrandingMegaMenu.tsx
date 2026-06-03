"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const brandingServices = [
  {
    name: "Brand Identity",
    href: "/services/brand-identity",
    description: "Build a memorable visual brand",
    icon: "fa-swatchbook",
  },
  {
    name: "Logo Design",
    href: "/services/logo-design",
    description: "Distinctive logos for your business",
    icon: "fa-pen-nib",
  },
];

export default function BrandingMegaMenu() {
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
        Branding

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
            className="paper-mega paper-mega--branding-editorial"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
          >
            <div className="paper-branding-mega__layout">
              <aside className="paper-mega__intro">
                <span className="paper-mega__eyebrow">Branding</span>

                <h2 className="paper-mega__intro-title">Brand Design</h2>

                <p className="paper-mega__intro-copy">
                  Visual identities that make businesses recognisable
                </p>
              </aside>

              <div className="paper-mega__services">
                <div className="paper-mega__column-heading">
                  <h3>Branding Services</h3>
                  <span>2 Services</span>
                </div>

                <div className="paper-branding-mega__services">
                  {brandingServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="paper-mega__service"
                      onClick={closeMenuImmediately}
                    >
                      <span className="paper-mega__service-icon">
                        <i
                          className={`fas ${service.icon}`}
                          aria-hidden="true"
                        />
                      </span>

                      <span>
                        <strong>{service.name}</strong>
                        <small>{service.description}</small>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}