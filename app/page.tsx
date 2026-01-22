import Link from "next/link";
import Image from "next/image";
import { services, portfolioProjects, googleReviews, trustBadges, contactInfo } from "@/lib/constants";
import { generateLocalBusinessSchema, generateOrganizationSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  const webDesignServices = services.filter(s => s.category === "web-design").slice(0, 1);
  const brandingServices = services.filter(s => s.category === "branding").slice(0, 1);
  const marketingServices = services.filter(s => s.category === "digital-marketing").slice(0, 1);
  const featuredServices = [...webDesignServices, ...brandingServices, ...marketingServices];

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />

      {/* Hero Section */}
      <section id="home" className="gradient-navy-orange text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Web Design & Digital Marketing Sydney
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Transform your online presence with professional web design, SEO, and digital marketing services.
              13+ years experience delivering results for Sydney businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button data-popup="contact" className="btn btn-white">
                Get Started
              </button>
              <Link href="/portfolio" className="btn btn-secondary border-white text-white hover:bg-white hover:text-primary-navy">
                View Portfolio
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {trustBadges.map((badge) => (
                <div
                  key={badge.id}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center"
                >
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <div className="font-bold">{badge.title}</div>
                  <div className="text-sm text-gray-200">{badge.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              Comprehensive digital solutions to help your business grow online
            </p>
          </div>

          <div className="grid-3">
            <ServiceCard
              icon="🎨"
              title="Web Design & Development"
              description="Custom, responsive websites that look stunning and convert visitors into customers. Built with the latest technologies for optimal performance."
              link="/services/custom-web-design"
              features={[
                "Mobile-responsive design",
                "SEO-friendly structure",
                "Fast loading speeds",
                "Easy content management"
              ]}
            />
            <ServiceCard
              icon="🎯"
              title="Branding & Identity"
              description="Create a memorable brand identity that sets you apart. Professional logo design, brand guidelines, and marketing materials."
              link="/services/logo-design"
              features={[
                "Custom logo design",
                "Brand style guides",
                "Business card design",
                "Marketing collateral"
              ]}
            />
            <ServiceCard
              icon="📈"
              title="Digital Marketing"
              description="Drive targeted traffic and generate leads with SEO, Google Ads, and social media marketing strategies that deliver results."
              link="/services/seo-sydney"
              features={[
                "Search engine optimization",
                "Google Ads management",
                "Social media marketing",
                "Content marketing"
              ]}
            />
          </div>

          <div className="text-center mt-8">
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose DSIGNS Australia?</h2>
            <p>
              Over a decade of proven expertise delivering digital success
            </p>
          </div>

          <div className="grid-3">
            <div className="card text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3">13+ Years Experience</h3>
              <p className="text-gray-600">
                Over a decade of expertise in web design, branding, and digital marketing across 50+ industries.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-3">500+ Websites Delivered</h3>
              <p className="text-gray-600">
                Successfully delivered hundreds of websites and digital marketing campaigns for businesses across Australia.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-4">😊</div>
              <h3 className="text-xl font-bold mb-3">98% Client Satisfaction</h3>
              <p className="text-gray-600">
                Consistently high satisfaction ratings from clients who appreciate our professionalism and results.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Results-Driven Approach</h3>
              <p className="text-gray-600">
                We focus on measurable outcomes that impact your bottom line, not just vanity metrics.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-3">24-Hour Response Time</h3>
              <p className="text-gray-600">
                Quick communication and support when you need it. We&apos;re here to help your business succeed.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3">Australian Based</h3>
              <p className="text-gray-600">
                Locally based in Sydney with deep understanding of the Australian market and business landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Our Work</h2>
            <p>
              Successful projects across diverse industries
            </p>
          </div>

          <div className="grid-4">
            {portfolioProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/portfolio" className="btn btn-primary">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section id="google-reviews" className="py-20">
        <div className="container">
          <div className="section-title">
            <h2>What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-2xl font-bold text-primary-navy">4.9/5</span>
            </div>
            <p className="text-text-light">Based on 50+ Google Reviews</p>
          </div>

          <div className="grid-4">
            {googleReviews.slice(0, 8).map((review) => (
              <TestimonialCard key={review.id} review={review} compact />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/testimonials" className="btn btn-primary">
              View All Testimonials
            </Link>
            <a
              href="https://g.page/r/your-google-business-profile/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Leave a Review on Google
            </a>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>How We Work</h2>
            <p>
              Our proven 4-step process for delivering exceptional results
            </p>
          </div>

          <div className="grid-2 lg:grid-cols-4">
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Discovery & Strategy</h3>
              <p className="text-gray-600">
                We learn about your business, goals, and target audience to create a tailored strategy.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Design & Development</h3>
              <p className="text-gray-600">
                Our team creates stunning designs and develops robust solutions using best practices.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Review & Refine</h3>
              <p className="text-gray-600">
                You review the work and we refine based on your feedback until it&apos;s perfect.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Launch & Support</h3>
              <p className="text-gray-600">
                We launch your project and provide ongoing support to ensure continued success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20">
        <div className="container">
          <div className="section-title">
            <h2>Latest Insights</h2>
            <p>
              Expert tips and strategies for digital success
            </p>
          </div>

          <div className="grid-3">
            <div className="card group hover:shadow-xl h-full flex flex-col transition-all duration-300">
              <div className="relative h-56 bg-gradient-to-br from-primary-navy via-amber-700 to-primary-orange rounded-xl mb-6 overflow-hidden">
                <Image
                  src="/images/blog/web-design-trends-2026.jpg"
                  alt="Web Design Trends 2026"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  January 15, 2026
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  8 min read
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-orange">
                Web Design Trends to Watch in 2026
              </h3>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                Discover the latest web design trends that will shape the digital landscape in 2026 and beyond.
              </p>
              <Link
                href="/blog/web-design-trends-2026"
                className="text-primary-orange font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Read More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="card group hover:shadow-xl h-full flex flex-col transition-all duration-300">
              <div className="relative h-56 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl mb-6 overflow-hidden">
                <Image
                  src="/images/blog/seo-tips-sydney.jpg"
                  alt="SEO Tips for Sydney Businesses"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  January 12, 2026
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  10 min read
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-navy group-hover:text-primary-orange transition-colors">
                SEO Tips for Sydney Businesses
              </h3>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                Local SEO strategies to help your Sydney business rank higher and attract more customers.
              </p>
              <Link
                href="/blog/seo-tips-sydney-businesses"
                className="text-primary-orange font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Read More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="card group hover:shadow-xl h-full flex flex-col transition-all duration-300">
              <div className="relative h-56 bg-gradient-to-br from-primary-navy to-blue-900 rounded-xl mb-6 overflow-hidden">
                <Image
                  src="/images/blog/choose-web-designer.jpg"
                  alt="How to Choose the Right Web Designer"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  January 8, 2026
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  6 min read
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-navy group-hover:text-primary-orange transition-colors">
                How to Choose the Right Web Designer
              </h3>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                Essential factors to consider when selecting a web design agency for your business.
              </p>
              <Link
                href="/blog/how-to-choose-web-designer-sydney"
                className="text-primary-orange font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Read More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/blog" className="btn btn-primary">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Digital Presence?"
        description="Get a free consultation and quote for your project. We'll respond within 24 hours."
        primaryButtonText="Get Free Quote"
        primaryButtonAction="contact"
        secondaryButtonText="Call Us Now"
        secondaryButtonAction="consultation"
      />

      {/* Contact Form Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <p>
              Let&apos;s discuss your project and how we can help you succeed
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid-3 mb-12">
            <div className="card text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a
                href={`tel:${contactInfo.phoneLink}`}
                className="text-primary-orange font-semibold hover:underline"
              >
                {contactInfo.phone}
              </a>
              <p className="text-sm text-gray-500 mt-2">Mon-Fri 9:00am - 5:00pm</p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-primary-orange font-semibold hover:underline"
              >
                {contactInfo.email}
              </a>
              <p className="text-sm text-gray-500 mt-2">24-hour response time</p>
            </div>
            <div className="card text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-700">
                {contactInfo.address.suite}<br />
                {contactInfo.address.street}<br />
                {contactInfo.address.suburb} {contactInfo.address.state} {contactInfo.address.postcode}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="card">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="form-label">Name *</label>
                    <input type="text" name="name" required className="form-input" placeholder="Your full name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input type="email" name="email" required className="form-input" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="form-label">Phone *</label>
                    <input type="tel" name="phone" required className="form-input" placeholder="04XX XXX XXX" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Service Interested In</label>
                    <select name="service" className="form-select">
                      <option value="">Select a service</option>
                      <option value="web-design">Web Design</option>
                      <option value="seo">SEO Services</option>
                      <option value="google-ads">Google Ads</option>
                      <option value="branding">Branding</option>
                      <option value="social-media">Social Media Marketing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea name="message" required className="form-textarea" rows={6} placeholder="Tell us about your project..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  💬 Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
