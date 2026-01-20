import { Metadata } from "next";
import { portfolioProjects } from "@/lib/constants";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Portfolio | Web Design Projects Sydney | DSIGNS AUSTRALIA",
  description: "View our portfolio of 500+ successful web design, branding, and digital marketing projects across Sydney and Australia.",
  keywords: "portfolio, web design portfolio, sydney web projects, client work, case studies",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy-orange text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Explore our work across diverse industries. Each project represents our commitment to
              delivering exceptional digital solutions that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-orange mb-2">500+</div>
              <div className="text-gray-600">Websites Delivered</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-orange mb-2">50+</div>
              <div className="text-gray-600">Industries</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-orange mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-orange mb-2">4.9/5</div>
              <div className="text-gray-600">Star Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-20">
        <div className="container">
          <div className="section-title">
            <h2>Featured Projects</h2>
            <p>Successful digital solutions across diverse industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolioProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Industries We Serve</h2>
            <p>Expertise across 50+ industries</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Healthcare & NDIS",
              "Professional Services",
              "Construction & Trade",
              "Hospitality & Food",
              "Retail & E-commerce",
              "Real Estate & Property",
              "Automotive Services",
              "Technology & IT",
              "Financial Services",
              "Education & Training",
              "Home Services",
              "Beauty & Wellness",
              "Legal Services",
              "Manufacturing",
              "Transportation & Logistics",
              "Non-Profit Organizations",
            ].map((industry, index) => (
              <div key={index} className="card text-center hover:border-primary-orange hover:border-2 transition-all">
                <p className="font-semibold text-primary-navy">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Used Section */}
      <section className="py-20">
        <div className="container">
          <div className="section-title">
            <h2>Services We Provide</h2>
            <p>Comprehensive digital solutions for every project</p>
          </div>

          <div className="grid-3">
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-navy flex items-center gap-2">
                <span className="text-3xl">🎨</span>
                Web Design
              </h3>
              <p className="text-gray-700">
                Custom, responsive websites that look stunning and convert visitors into customers.
                Built with modern technologies for optimal performance.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-navy flex items-center gap-2">
                <span className="text-3xl">🎯</span>
                Branding
              </h3>
              <p className="text-gray-700">
                Complete brand identity development including logo design, brand guidelines, and
                marketing materials that make you stand out.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-navy flex items-center gap-2">
                <span className="text-3xl">📈</span>
                SEO
              </h3>
              <p className="text-gray-700">
                Search engine optimization that improves rankings, increases organic traffic, and
                generates quality leads for your business.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-navy flex items-center gap-2">
                <span className="text-3xl">💰</span>
                Google Ads
              </h3>
              <p className="text-gray-700">
                Strategic paid advertising campaigns that deliver instant results and measurable ROI
                through targeted Google Ads management.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-navy flex items-center gap-2">
                <span className="text-3xl">📱</span>
                Social Media
              </h3>
              <p className="text-gray-700">
                Engaging social media marketing across Facebook, Instagram, and LinkedIn to build your
                brand and connect with customers.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-navy flex items-center gap-2">
                <span className="text-3xl">🛒</span>
                E-commerce
              </h3>
              <p className="text-gray-700">
                Complete e-commerce solutions with secure payment processing, inventory management,
                and conversion-optimized design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        description="Let&apos;s create something amazing together. Get a free consultation and quote."
        primaryButtonText="Get Free Quote"
        primaryButtonAction="contact"
        secondaryButtonText="View Our Services"
      />
    </>
  );
}
