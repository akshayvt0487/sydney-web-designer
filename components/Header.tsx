"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { contactInfo } from "@/lib/constants";
import GrowthMarketingMegaMenu from "./GrowthMarketingMegaMenu";
import WebDesignMegaMenu from "./WebDesignMegaMenu";

type MobileSection = "web-design" | "growth-marketing" | "branding" | null;

const webDesignLinks = [
  { name: "Web Design Overview", href: "/web-design" },
  { name: "Custom Web Design", href: "/services/custom-web-design" },
  { name: "WordPress Development", href: "/services/wordpress-development" },
  { name: "Ecommerce Websites", href: "/services/ecommerce-websites" },
  { name: "Responsive Design", href: "/services/responsive-design" },
  { name: "Website Redesign", href: "/services/website-redesign" },
  { name: "Landing Pages", href: "/services/high-performance-landing-pages" },
  { name: "UI/UX Design", href: "/services/ui-ux-design" },
  { name: "Vibe Code Website", href: "/services/vibe-code-website" },
];

const growthMarketingLinks = [
  { name: "Growth Marketing Overview", href: "/growth-marketing" },
  { name: "SEO Services", href: "/services/seo-sydney" },
  { name: "Local SEO", href: "/services/local-seo" },
  { name: "Ecommerce SEO", href: "/services/ecommerce-seo" },
  { name: "Mobile SEO", href: "/services/mobile-seo" },
  { name: "SEO Copywriting", href: "/services/seo-copywriting" },
  { name: "Link Building", href: "/services/link-building" },
  { name: "Digital PR", href: "/services/digital-pr" },
  { name: "Google Ads", href: "/services/google-ads" },
  { name: "Meta Ads", href: "/services/meta-ads" },
  { name: "Social Media Marketing", href: "/services/social-media-marketing" },
  { name: "Content Marketing", href: "/services/content-marketing" },
  { name: "Email Marketing", href: "/services/email-marketing" },
  { name: "Conversion Optimization", href: "/services/conversion-optimization" },
];

const brandingLinks = [
  { name: "Brand Identity", href: "/services/brand-identity" },
  { name: "Logo Design", href: "/services/logo-design" },
];

interface MobileAccordionProps {
  title: string;
  section: Exclude<MobileSection, null>;
  openSection: MobileSection;
  onToggle: (section: Exclude<MobileSection, null>) => void;
  links: { name: string; href: string }[];
  onNavigate: () => void;
}

function MobileAccordion({
  title,
  section,
  openSection,
  onToggle,
  links,
  onNavigate,
}: MobileAccordionProps) {
  const isOpen = openSection === section;

  return (
    <div className="border-b border-slate-100">
      <button
        type="button"
        onClick={() => onToggle(section)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-4 text-left text-base font-bold text-slate-900"
      >
        <span>{title}</span>
        <svg
          className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-primary-orange" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="pb-5">
          <div className="grid grid-cols-1 gap-y-2 pl-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onNavigate}
                className="block py-2 text-sm text-slate-600 transition-colors hover:text-primary-orange"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<MobileSection>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setOpenMobileSection(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((current) => !current);
    setOpenMobileSection(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileSection(null);
  };

  const toggleMobileSection = (section: Exclude<MobileSection, null>) => {
    setOpenMobileSection((current) => (current === section ? null : section));
  };

  return (
    <>
      {/* Desktop Top Bar */}
      <div className="hidden bg-dark-navy text-white xl:block">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-2.5 text-sm">
          <div className="flex items-center gap-8 text-slate-300">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <i className="fas fa-envelope text-[12px] text-primary-orange" />
              <span>{contactInfo.email}</span>
            </a>
            <a href={`tel:${contactInfo.phoneLink}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <i className="fas fa-phone text-[12px] text-primary-orange" />
              <span>{contactInfo.phone}</span>
            </a>
          </div>
          <nav className="flex items-center gap-6 font-medium text-slate-300">
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
            <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="flex min-h-[80px] items-center justify-between">
            {/* Logo */}
            <Link href="/" onClick={closeMobileMenu} aria-label="Sydney Web Designer home" className="flex shrink-0 items-center">
              <Image
                src="/Sydney Web Designer logo.webp"
                alt="Sydney Web Designer"
                width={240}
                height={118}
                className="h-[48px] w-auto object-contain sm:h-[56px] lg:h-[64px]"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden h-[80px] items-center gap-8 xl:flex">
              <Link href="/" className="text-[15px] font-bold text-slate-900 transition-colors hover:text-primary-orange">
                Home
              </Link>
              <WebDesignMegaMenu />
              <GrowthMarketingMegaMenu />
              <Link href="/portfolio" className="text-[15px] font-bold text-slate-900 transition-colors hover:text-primary-orange">
                Portfolio
              </Link>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden shrink-0 items-center gap-4 xl:flex">
              <a href={`tel:${contactInfo.phoneLink}`} className="text-[15px] font-bold text-slate-900 hover:text-primary-orange transition-colors">
                {contactInfo.phone}
              </a>
              <button data-popup="contact" className="btn btn-primary rounded-lg shadow-sm">
                Get Quote
              </button>
            </div>

            {/* Mobile Header Actions */}
            <div className="flex items-center gap-3 xl:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-900 transition-colors hover:bg-slate-50"
              >
                {isMobileMenuOpen ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      {isMounted && isMobileMenuOpen && createPortal(
        <div className="fixed inset-0 z-[100] flex flex-col bg-white xl:hidden">
          <div className="flex min-h-[80px] shrink-0 items-center justify-between border-b border-slate-100 px-4 sm:px-6">
            <Link href="/" onClick={closeMobileMenu} className="flex items-center">
              <Image
                src="/Sydney Web Designer logo.webp"
                alt="Sydney Web Designer"
                width={210}
                height={102}
                className="h-[48px] w-auto object-contain sm:h-[56px]"
                priority
              />
            </Link>
            <button
              type="button"
              onClick={closeMobileMenu}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-900 transition-colors hover:bg-slate-50"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            <nav className="flex flex-col">
              <Link href="/" onClick={closeMobileMenu} className="border-b border-slate-100 py-4 text-base font-bold text-slate-900">
                Home
              </Link>
              <MobileAccordion title="Web Design" section="web-design" openSection={openMobileSection} onToggle={toggleMobileSection} links={webDesignLinks} onNavigate={closeMobileMenu} />
              <MobileAccordion title="Growth Marketing" section="growth-marketing" openSection={openMobileSection} onToggle={toggleMobileSection} links={growthMarketingLinks} onNavigate={closeMobileMenu} />
              <MobileAccordion title="Branding" section="branding" openSection={openMobileSection} onToggle={toggleMobileSection} links={brandingLinks} onNavigate={closeMobileMenu} />
              <Link href="/portfolio" onClick={closeMobileMenu} className="border-b border-slate-100 py-4 text-base font-bold text-slate-900">
                Portfolio
              </Link>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Testimonials", href: "/testimonials" },
                  { name: "Careers", href: "/careers" },
                  { name: "Blog", href: "/blog" },
                  { name: "Contact", href: "/contact" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} onClick={closeMobileMenu} className="text-sm font-medium text-slate-600">
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 pb-8">
                <button data-popup="contact" onClick={closeMobileMenu} className="btn btn-primary w-full rounded-lg">
                  Get Free Quote
                </button>
                <a href={`tel:${contactInfo.phoneLink}`} onClick={closeMobileMenu} className="btn w-full rounded-lg border border-slate-200 text-slate-900">
                  Call {contactInfo.phone}
                </a>
              </div>
            </nav>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}