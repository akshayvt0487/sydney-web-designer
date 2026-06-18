"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contactInfo } from "@/lib/constants";
import BrandingMegaMenu from "./BrandingMegaMenu";
import GrowthMarketingMegaMenu from "./GrowthMarketingMegaMenu";
import WebDesignMegaMenu from "./WebDesignMegaMenu";
import { usePopupForm } from "./PopupFormProvider";

type MobileSection = "web-design" | "growth-marketing" | "branding" | null;

const webDesignLinks = [
  { name: "Web Design Overview", href: "/web-design" },
  { name: "Web Design Plans", href: "/web-design-plans" },
  { name: "Custom Web Design", href: "/services/custom-web-design" },
  { name: "Website Redesign", href: "/services/website-redesign" },
  { name: "UI/UX Design", href: "/services/ui-ux-design" },
  { name: "Responsive Design", href: "/services/responsive-design" },
  { name: "Landing Pages", href: "/services/landing-pages" },
  { name: "WordPress Development", href: "/services/wordpress-development" },
  { name: "Ecommerce Websites", href: "/services/ecommerce-websites" },
  {
    name: "High Performance Landing Pages",
    href: "/services/high-performance-landing-pages",
  },
  { name: "Vibe Code Website", href: "/services/vibe-code-website" },
];

const growthMarketingLinks = [
  { name: "Growth Marketing Overview", href: "/growth-marketing" },
  { name: "SEO Sydney", href: "/services/seo-sydney" },
  { name: "Local SEO", href: "/services/local-seo" },
  { name: "Ecommerce SEO", href: "/services/ecommerce-seo" },
  { name: "Mobile SEO", href: "/services/mobile-seo" },
  {
    name: "Pay on Performance SEO",
    href: "/services/pay-on-performance-seo",
  },
  { name: "SEO Copywriting", href: "/services/seo-copywriting" },
  { name: "Link Building", href: "/services/link-building" },
  { name: "Digital PR", href: "/services/digital-pr" },
  { name: "Content Marketing", href: "/services/content-marketing" },
  { name: "Google Ads", href: "/services/google-ads" },
  { name: "Meta Ads", href: "/services/meta-ads" },
  {
    name: "Social Media Marketing",
    href: "/services/social-media-marketing",
  },
  { name: "Email Marketing", href: "/services/email-marketing" },
  {
    name: "Conversion Optimization",
    href: "/services/conversion-optimization",
  },
];

const brandingLinks = [
  { name: "Brand Identity", href: "/services/brand-identity" },
  { name: "Logo Design", href: "/services/logo-design" },
];

const secondaryLinks = [
  { name: "About Us", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
];

/*
  Do not repeat Portfolio inside the mobile utility links because
  it already appears as a primary mobile navigation item.
*/
const mobileSecondaryLinks = [
  { name: "About Us", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""
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
  );
}

function MobileAccordion({
  title,
  open,
  onToggle,
  onNavigate,
  links,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
  links: Array<{ name: string; href: string }>;
}) {
  return (
    <div className="paper-mobile__section">
      <button
        type="button"
        className="paper-mobile__accordion"
        aria-expanded={open}
        onClick={onToggle}
      >
        {title}
        <Chevron open={open} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="paper-mobile__subitems"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="paper-mobile__subitem"
                onClick={onNavigate}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const { openForm } = usePopupForm();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pendingMobileQuote, setPendingMobileQuote] = useState(false);
  const [openMobileSection, setOpenMobileSection] =
    useState<MobileSection>(null);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenMobileSection(null);
  };

  const handleMobileQuoteClick = () => {
    setPendingMobileQuote(true);
    closeMobileMenu();
  };

  useEffect(() => {
    const updateScrolledState = () => {
      setScrolled(window.scrollY > 12);
    };

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrolledState);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setPendingMobileQuote(false);
    setOpenMobileSection(null);
  }, [pathname]);

  /*
    iPhone-safe scroll locking:
    overflow:hidden alone does not reliably prevent the page moving
    behind a fixed drawer in iOS Safari.
  */
  useEffect(() => {
    if (!mobileOpen) return;

    const scrollY = window.scrollY;
    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyLeft = document.body.style.left;
    const previousBodyRight = document.body.style.right;
    const previousBodyWidth = document.body.style.width;
    const previousBodyOverflow = document.body.style.overflow;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.left = previousBodyLeft;
      document.body.style.right = previousBodyRight;
      document.body.style.width = previousBodyWidth;
      document.body.style.overflow = previousBodyOverflow;

      window.scrollTo(0, scrollY);
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="paper-header">
        <div className="paper-topbar">
          <div className="container paper-topbar__inner">
            <div className="paper-topbar__group">
              <a href={`mailto:${contactInfo.email}`}>
                <i className="fas fa-envelope" aria-hidden="true" />
                {contactInfo.email}
              </a>

              <a href={`tel:${contactInfo.phoneLink}`}>
                <i className="fas fa-phone" aria-hidden="true" />
                {contactInfo.phone}
              </a>
            </div>

            <nav
              className="paper-topbar__group"
              aria-label="Secondary navigation"
            >
              {secondaryLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div
          className={`paper-navbar paper-grain ${scrolled ? "is-scrolled" : ""
            }`}
        >
          <div className="container paper-navbar__row">
            <Link
              href="/"
              aria-label="Sydney Web Designer home"
              className="paper-logo"
            >
              <Image
                src="/Sydney Web Designer logo.webp"
                alt="Sydney Web Designer"
                width={210}
                height={72}
                priority
              />
            </Link>

            <nav className="paper-nav" aria-label="Main navigation">
              <Link
                href="/"
                className="paper-nav__link"
                aria-current={pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>

              <Link
                href="/portfolio"
                className="paper-nav__link"
                aria-current={pathname.startsWith("/portfolio") ? "page" : undefined}
              >
                Portfolio
              </Link>

              <WebDesignMegaMenu key={`web-design-${pathname}`} />
              <GrowthMarketingMegaMenu key={`growth-marketing-${pathname}`} />
              <BrandingMegaMenu key={`branding-${pathname}`} />

              <Link
                href="/contact"
                className="paper-nav__link"
                aria-current={
                  pathname.startsWith("/contact") ? "page" : undefined
                }
              >
                Contact
              </Link>
            </nav>

            <div className="paper-nav__actions">
              <button
                type="button"
                data-popup="contact"
                className="paper-button paper-button--rust"
              >
                Get Free Quote
              </button>

              <a
                href={`tel:${contactInfo.phoneLink}`}
                className="paper-button"
              >
                Call {contactInfo.phone}
              </a>
            </div>

            <button
              type="button"
              className="paper-menu-button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-panel"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence
        onExitComplete={() => {
          if (pendingMobileQuote) {
            openForm("contact");
            setPendingMobileQuote(false);
          }
        }}
      >
        {mobileOpen && (
          <motion.div
            className="paper-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <button
              type="button"
              className="paper-mobile__backdrop"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            />

            <motion.aside
              id="mobile-navigation-panel"
              className="paper-mobile__panel paper-grain"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <div className="paper-mobile__header">
                <Link href="/" onClick={closeMobileMenu}>
                  <Image
                    src="/Sydney Web Designer logo.webp"
                    alt="Sydney Web Designer"
                    width={175}
                    height={54}
                  />
                </Link>

                <button
                  type="button"
                  className="paper-menu-button"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav
                className="paper-mobile__body"
                aria-label="Mobile navigation"
              >
                <Link
                  href="/"
                  className="paper-mobile__item"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Link
                  href="/portfolio"
                  className="paper-mobile__item"
                  onClick={closeMobileMenu}
                >
                  Portfolio
                </Link>

                <MobileAccordion
                  title="Web Design"
                  open={openMobileSection === "web-design"}
                  onToggle={() =>
                    setOpenMobileSection(
                      openMobileSection === "web-design"
                        ? null
                        : "web-design"
                    )
                  }
                  onNavigate={closeMobileMenu}
                  links={webDesignLinks}
                />

                <MobileAccordion
                  title="Growth Marketing"
                  open={openMobileSection === "growth-marketing"}
                  onToggle={() =>
                    setOpenMobileSection(
                      openMobileSection === "growth-marketing"
                        ? null
                        : "growth-marketing"
                    )
                  }
                  onNavigate={closeMobileMenu}
                  links={growthMarketingLinks}
                />

                <MobileAccordion
                  title="Branding"
                  open={openMobileSection === "branding"}
                  onToggle={() =>
                    setOpenMobileSection(
                      openMobileSection === "branding" ? null : "branding"
                    )
                  }
                  onNavigate={closeMobileMenu}
                  links={brandingLinks}
                />

                <Link
                  href="/contact"
                  className="paper-mobile__item"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>

                <div className="paper-mobile__secondary">
                  {mobileSecondaryLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                    >
                      <span>{link.name}</span>
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </nav>

              <div className="paper-mobile__footer">
                <button
                  type="button"
                  onClick={handleMobileQuoteClick}
                  className="paper-button paper-button--rust"
                >
                  Get Free Quote
                </button>

                <a
                  href={`tel:${contactInfo.phoneLink}`}
                  className="paper-button"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}