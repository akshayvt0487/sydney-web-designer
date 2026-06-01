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
    <footer className="overflow-hidden bg-[#0f172a] text-white">
      <div className="mx-auto w-full max-w-[1240px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        {/* Main Top Row */}
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.72fr_0.85fr_1.45fr] lg:gap-12">
          {/* Brand Column */}
          <div>
            <Link
              href="/"
              aria-label="Sydney Web Designer home"
              className="inline-flex overflow-hidden rounded-2xl bg-white p-2"
            >
              <Image
                src="/Sydney Web Designer logo1.webp"
                alt="DSIGNS Australia - Sydney Web Designer"
                width={220}
                height={92}
                className="h-[76px] w-auto object-contain sm:h-[82px]"
              />
            </Link>

            <p className="mt-5 max-w-[290px] text-sm leading-7 text-slate-300 sm:text-[15px]">
              Sydney Web Designer is Sydney&apos;s premier web design and
              digital marketing studio. Specialising in custom web design, SEO,
              and branding - serving Sydney businesses since 2013.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 font-heading text-lg font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-primary-orange sm:text-[15px]"
                  >
                    <i
                      className="fas fa-chevron-right text-[10px] text-primary-orange transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 font-heading text-lg font-bold text-white">
              Our Services
            </h3>

            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-primary-orange sm:text-[15px]"
                  >
                    <i
                      className="fas fa-chevron-right text-[10px] text-primary-orange transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="min-w-0">
            <div
              className="
                min-w-0
                [&_*]:max-w-full
                [&_form]:!flex
                [&_form]:!w-full
                [&_form]:!flex-col
                [&_form]:!gap-3
                [&_input]:!min-w-0
                [&_input]:!w-full
                [&_button]:!w-full
                sm:[&_form]:!flex-row
                sm:[&_input]:!flex-1
                sm:[&_button]:!w-auto
                lg:[&_form]:!flex-col
                lg:[&_button]:!w-full
                xl:[&_form]:!flex-row
                xl:[&_button]:!w-auto
              "
            >
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Contact and Social Row */}
        <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 lg:mt-11 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
          <div>
            <h3 className="mb-5 font-heading text-lg font-bold text-white">
              Get In Touch
            </h3>

            <div className="flex flex-col gap-4 text-sm text-slate-300 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-4 sm:text-[15px]">
              <a
                href="mailto:hello@dsigns.com.au"
                className="inline-flex items-start gap-3 transition-colors hover:text-primary-orange"
              >
                <i
                  className="fas fa-envelope mt-1 w-4 text-primary-orange"
                  aria-hidden="true"
                />
                <span>hello@dsigns.com.au</span>
              </a>

              <a
                href="tel:0291918049"
                className="inline-flex items-start gap-3 transition-colors hover:text-primary-orange"
              >
                <i
                  className="fas fa-phone mt-1 w-4 text-primary-orange"
                  aria-hidden="true"
                />
                <span>02 9191 8049</span>
              </a>

              <div className="inline-flex items-start gap-3">
                <i
                  className="fas fa-map-marker-alt mt-1 w-4 text-primary-orange"
                  aria-hidden="true"
                />

                <p className="leading-7 text-slate-300">
                  Suite 611, 150 George Street
                  <br className="sm:hidden" />
                  <span className="hidden sm:inline">, </span>
                  Parramatta NSW 2150
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-base font-bold text-white lg:text-right">
              Follow Us
            </h4>

            <div className="flex gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-orange hover:bg-primary-orange hover:text-white active:scale-95"
                >
                  <i className={`${social.icon} text-base`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p className="text-center md:text-left">
            © {currentYear} Sydney Web Designer (DSIGNS Australia Pty Ltd). All
            Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-primary-orange"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-conditions"
              className="transition-colors hover:text-primary-orange"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}