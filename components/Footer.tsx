import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e293b] text-white">
      <div className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info Column */}
          <div>
            <div className="mb-6">
              <Image
                src="/Sydney Web Designer logo.webp"
                alt="Sydney Web Designer"
                width={200}
                height={60}
                className="h-24 w-auto rounded-2xl w-full h-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-base">
              Sydney's premier web design and digital marketing agency. 13+ years of experience delivering exceptional results for businesses across Australia.
            </p>
            <div className="space-y-3">
              <p className="text-gray-300">
                <i className="fas fa-map-marker-alt text-[#f59e0b] mr-3 w-4"></i>
                Sydney, New South Wales, Australia
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#f59e0b] transition-colors inline-flex items-center gap-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#f59e0b] transition-colors inline-flex items-center gap-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-[#f59e0b] transition-colors inline-flex items-center gap-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-[#f59e0b] transition-colors inline-flex items-center gap-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#f59e0b] transition-colors inline-flex items-center gap-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-[#f59e0b] transition-colors inline-flex items-center gap-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/custom-web-design" className="text-gray-300 hover:text-[#f59e0b] transition-colors inline-flex items-center gap-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services/seo-sydney" className="text-gray-300 hover:text-[#f59e0b] transition-colors inline-flex items-center gap-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="/services/google-ads" className="text-gray-300 hover:text-[#f59e0b] transition-colors inline-flex items-center gap-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  Google Ads
                </Link>
              </li>
              <li>
                <Link href="/services/logo-design" className="text-gray-300 hover:text-[#f59e0b] transition-colors inline-flex items-center gap-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-marketing" className="text-gray-300 hover:text-[#f59e0b] transition-colors inline-flex items-center gap-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  Social Media
                </Link>
              </li>
              <li>
                <Link href="/services/content-marketing" className="text-gray-300 hover:text-[#f59e0b] transition-colors inline-flex items-center gap-2">
                  <i className="fas fa-chevron-right text-xs"></i>
                  Content Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Get In Touch</h3>
            <div className="space-y-4 mb-6">
              <p className="text-gray-300">
                <i className="fas fa-envelope text-[#f59e0b] mr-3 w-4"></i>
                <a href="mailto:hello@dsigns.com.au" className="hover:text-[#f59e0b] transition-colors">
                  hello@dsigns.com.au
                </a>
              </p>
              <p className="text-gray-300">
                <i className="fas fa-phone text-[#f59e0b] mr-3 w-4"></i>
                <a href="tel:0291918049" className="hover:text-[#f59e0b] transition-colors">
                  02 9191 8049
                </a>
              </p>
            </div>

            <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/sydneywebdesigner"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#f59e0b] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="https://www.instagram.com/sydneywebdesigner"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#f59e0b] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/sydney-web-designer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#f59e0b] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a
                href="https://dsigns.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#f59e0b] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="DSIGNS Website"
              >
                <i className="fas fa-globe text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Sydney Web Designer. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-[#f59e0b] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-gray-400 hover:text-[#f59e0b] transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
