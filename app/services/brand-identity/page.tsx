import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema, generateLocalBusinessSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import ServiceHeroSection from "@/components/ServiceHeroSection";

export const metadata = generateMetadata({
  title: "Brand Identity Design Sydney | Logo & Branding Services",
  description: "Professional brand identity design services in Sydney. Create a memorable brand with strategic logo design, brand guidelines, and complete visual identity systems.",
  keywords: "brand identity design sydney, logo design sydney, branding services, brand guidelines, brand strategy, visual identity sydney",
  canonicalUrl: "https://sydneywebdesigner.com.au/services/brand-identity",
  ogImage: "/images/og/services.svg",
});

export default function BrandIdentityPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Services", url: "https://sydneywebdesigner.com.au/services" },
    { name: "Brand Identity", url: "https://sydneywebdesigner.com.au/services/brand-identity" }
  ];

  const stats = [
    { label: "Brands Created", number: "200+" },
    { label: "Logo Designs", number: "500+" },
    { label: "Brand Systems", number: "150+" },
    { label: "Client Satisfaction", number: "98%" },
  ];

  const features = [
    {
      title: "Logo Design",
      description: "Custom logo design that captures your brand essence and stands out in your industry.",
      icon: "fas fa-palette",
    },
    {
      title: "Brand Strategy",
      description: "Develop your unique brand positioning, messaging, and target audience insights.",
      icon: "fas fa-lightbulb",
    },
    {
      title: "Visual Identity",
      description: "Create a cohesive visual system including colors, typography, and design elements.",
      icon: "fas fa-images",
    },
    {
      title: "Brand Guidelines",
      description: "Comprehensive brand guidelines document ensuring consistency across all materials.",
      icon: "fas fa-book",
    },
    {
      title: "Marketing Collateral",
      description: "Design business cards, letterheads, envelopes, and other branded materials.",
      icon: "fas fa-file-pdf",
    },
    {
      title: "Brand Evolution",
      description: "Refresh and modernize existing brand identities while maintaining brand recognition.",
      icon: "fas fa-sync-alt",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema(
              "Brand Identity Design",
              "Professional brand identity and logo design services in Sydney",
              "https://sydneywebdesigner.com.au/services/brand-identity"
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />

      {/* Hero Section */}
      <ServiceHeroSection
        badge={{
          icon: "fas fa-palette",
          text: "Brand Identity"
        }}
        heading="Brand Identity Design That Makes You Memorable"
        description="Craft a distinctive brand identity backed by strategy and design excellence. Logos, visual systems, and brand guidelines that define your market presence."
        buttons={{
          primary: {
            text: "Start Your Brand Project",
            dataPopup: "contact"
          },
          secondary: {
            text: "View Our Portfolio",
            href: "/portfolio"
          }
        }}
      />

      {/* Main Content */}
      <section className="py-24 px-6">
        <div className="container max-w-6xl mx-auto">
          {/* Overview */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Build a <span className="text-[#f59e0b]">Memorable Brand</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl">
              Your brand is more than just a logo — it&apos;s the complete experience your customers have with your business. We create strategic brand identities that communicate your values, differentiate you from competitors, and build customer loyalty.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <i className={`${feature.icon} text-4xl text-[#f59e0b] mb-4 block`}></i>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Brand Design Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery & Strategy",
                  description: "We dive deep into your business, competitors, and target audience to develop a solid brand strategy.",
                },
                {
                  step: "02",
                  title: "Concept Development",
                  description: "Create multiple logo and visual identity concepts based on your brand strategy and positioning.",
                },
                {
                  step: "03",
                  title: "Design & Refinement",
                  description: "Refine your preferred designs and develop a complete visual identity system across all touchpoints.",
                },
                {
                  step: "04",
                  title: "Brand Guidelines",
                  description: "Deliver comprehensive brand guidelines ensuring consistent application across all channels and materials.",
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="bg-white border-2 border-[#f59e0b] rounded-xl p-6">
                    <div className="text-3xl font-bold text-[#f59e0b] mb-3">{item.step}</div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 bg-[#f59e0b] rounded-full border-4 border-white -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-24">
            {stats.map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-xl text-center">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-slate-900 text-white rounded-2xl p-12 mb-24">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Why Professional Brand Design <span className="text-[#f59e0b]">Matters</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "First Impressions",
                  description: "70% of first impressions are based on visual design. A professional brand identity makes a powerful first impact.",
                },
                {
                  title: "Brand Recognition",
                  description: "Consistent visual branding increases brand recognition by 80% and builds customer trust and loyalty.",
                },
                {
                  title: "Competitive Advantage",
                  description: "Stand out from competitors with a distinctive brand identity that reflects your unique value proposition.",
                },
                {
                  title: "Market Value",
                  description: "Strong brands command premium pricing and are valued 20% higher by customers than weaker brands.",
                },
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-[#f59e0b] text-white">
                      <i className="fas fa-check"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                    <p className="text-slate-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {googleReviews.slice(0, 3).map((review, i) => (
              <TestimonialCard key={i} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Create Your Brand?"
        description="Let's develop a distinctive brand identity that sets you apart and resonates with your customers."
        primaryButtonText="Get Your Free Brand Consultation"
        primaryButtonAction="contact"
      />
    </>
  );
}
