import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
];

const serviceLinks = [
  { name: "Web Design", href: "/services/custom-web-design" },
  { name: "SEO Services", href: "/services/seo-sydney" },
  { name: "Google Ads", href: "/services/google-ads" },
  { name: "Branding", href: "/services/logo-design" },
  { name: "Social Media", href: "/services/social-media-marketing" },
  { name: "Content Marketing", href: "/services/content-marketing" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/dsignscomau",
    icon: "fab fa-facebook-f",
  },
  {
    name: "Instagram",
    href: "http://instagram.com/dsigns.australia",
    icon: "fab fa-instagram",
  },
  {
    name: "LinkedIn",
    href: "http://linkedin.com/company/dsignsaustralia",
    icon: "fab fa-linkedin-in",
  },
  {
    name: "DSIGNS Website",
    href: "https://dsigns.com.au",
    icon: "fas fa-globe",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="paper-footer">
      <div className="container paper-footer__inner">
        {/* Brand / Main Navigation / Newsletter */}
        <div className="paper-footer__main">
          {/* Brand Column */}
          <div className="paper-footer__brand">
            <Link
              href="/"
              aria-label="Sydney Web Designer home"
              className="paper-footer__logo"
            >
              <Image
                src="/Sydney Web Designer logo1.webp"
                alt="DSIGNS Australia - Sydney Web Designer"
                width={220}
                height={92}
                className="paper-footer__logo-image"
              />
            </Link>

            <p className="paper-footer__description">
              Sydney Web Designer is Sydney&apos;s premier web design and
              digital marketing studio. Specialising in custom web design, SEO,
              and branding - serving Sydney businesses since 2013.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="paper-footer__nav" aria-label="Quick links">
            <h3>Quick Links</h3>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="paper-footer__link-mark" aria-hidden="true" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav className="paper-footer__nav" aria-label="Our services">
            <h3>Our Services</h3>

            <ul>
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link href={service.href}>
                    <span className="paper-footer__link-mark" aria-hidden="true" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div className="paper-footer__newsletter">
            <NewsletterForm />
          </div>
        </div>

        {/* Contact / Social Row */}
        <div className="paper-footer__contact-row">
          <div className="paper-footer__contact">
            <h3>Get In Touch</h3>

            <div className="paper-footer__contact-items">
              <a href="mailto:hello@dsigns.com.au">
                <span className="paper-footer__contact-icon">
                  <i className="fas fa-envelope" aria-hidden="true" />
                </span>

                <span>hello@dsigns.com.au</span>
              </a>

              <a href="tel:0291918049">
                <span className="paper-footer__contact-icon">
                  <i className="fas fa-phone" aria-hidden="true" />
                </span>

                <span>02 9191 8049</span>
              </a>

              <div className="paper-footer__address">
                <span className="paper-footer__contact-icon">
                  <i className="fas fa-map-marker-alt" aria-hidden="true" />
                </span>

                <p>
                  Suite 611, 150 George Street
                  <br className="paper-footer__mobile-break" />
                  <span className="paper-footer__desktop-comma">, </span>
                  Parramatta NSW 2150
                </p>
              </div>
            </div>
          </div>

          <div className="paper-footer__social">
            <h4>Follow Us</h4>

            <div className="paper-footer__social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <i className={social.icon} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="paper-footer__bottom">
          <p>
            © {currentYear} Sydney Web Designer (DSIGNS Australia Pty Ltd). All
            Rights Reserved.
          </p>

          <div className="paper-footer__legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span aria-hidden="true" />
            <Link href="/terms-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}