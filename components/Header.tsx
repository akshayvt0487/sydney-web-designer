"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { contactInfo } from "@/lib/constants";
import WebDesignMegaMenu from "./WebDesignMegaMenu";
import SEOMegaMenu from "./SEOMegaMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-dark-navy text-white py-2 text-sm">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center gap-6">
              <a href={`mailto:${contactInfo.email}`} className="hover:text-primary-orange transition-colors">
                <i className="fas fa-envelope"></i> {contactInfo.email}
              </a>
              <a href={`tel:${contactInfo.phoneLink}`} className="hover:text-primary-orange transition-colors">
                <i className="fas fa-phone"></i> {contactInfo.phone}
              </a>
            </div>
            <nav className="hidden md:flex items-center gap-4">
              <Link href="/about" className="hover:text-primary-orange transition-colors">
                About Us
              </Link>
              <Link href="/testimonials" className="hover:text-primary-orange transition-colors">
                Testimonials
              </Link>
              <Link href="/careers" className="hover:text-primary-orange transition-colors">
                Careers
              </Link>
              <Link href="/blog" className="hover:text-primary-orange transition-colors">
                Blog
              </Link>
              <Link href="/#contact" className="hover:text-primary-orange transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/Sydney Web Designer logo.webp"
                alt="Sydney Web Designer"
                width={200}
                height={60}
                className="h-24 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-primary-navy hover:text-primary-orange transition-colors font-medium">
                Home
              </Link>
              <WebDesignMegaMenu />
              <SEOMegaMenu />
              <Link href="/portfolio" className="text-primary-navy hover:text-primary-orange transition-colors font-medium">
                Portfolio
              </Link>
              <Link href="/services/google-ads" className="text-primary-navy hover:text-primary-orange transition-colors font-medium">
                Google Ads
              </Link>
              <Link href="/services/meta-ads" className="text-primary-navy hover:text-primary-orange transition-colors font-medium">
                Meta Ads
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                data-popup="contact"
                className="btn btn-primary"
              >
                Get Quote
              </button>
              <a
                href={`tel:${contactInfo.phoneLink}`}
                className="btn btn-secondary"
              >
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-primary-navy"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col gap-3">
                <Link href="/" className="text-primary-navy hover:text-primary-orange transition-colors py-2">
                  Home
                </Link>
                <Link href="/web-design" className="text-primary-navy hover:text-primary-orange transition-colors py-2">
                  Web Design
                </Link>
                <Link href="/services/seo-sydney" className="text-primary-navy hover:text-primary-orange transition-colors py-2">
                  SEO Services
                </Link>
                <Link href="/portfolio" className="text-primary-navy hover:text-primary-orange transition-colors py-2">
                  Portfolio
                </Link>
                <Link href="/services/google-ads" className="text-primary-navy hover:text-primary-orange transition-colors py-2">
                  Google Ads
                </Link>
                <Link href="/services/meta-ads" className="text-primary-navy hover:text-primary-orange transition-colors py-2">
                  Meta Ads
                </Link>
                <Link href="/about" className="text-primary-navy hover:text-primary-orange transition-colors py-2">
                  About Us
                </Link>
                <Link href="/testimonials" className="text-primary-navy hover:text-primary-orange transition-colors py-2">
                  Testimonials
                </Link>
                <Link href="/careers" className="text-primary-navy hover:text-primary-orange transition-colors py-2">
                  Careers
                </Link>
                <Link href="/blog" className="text-primary-navy hover:text-primary-orange transition-colors py-2">
                  Blog
                </Link>
                <Link href="/#contact" className="text-primary-navy hover:text-primary-orange transition-colors py-2">
                  Contact
                </Link>
                <div className="flex flex-col gap-2 mt-3">
                  <button data-popup="contact" className="btn btn-primary w-full">
                    Get Quote
                  </button>
                  <a href={`tel:${contactInfo.phoneLink}`} className="btn btn-secondary w-full">
                    Call Now
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
