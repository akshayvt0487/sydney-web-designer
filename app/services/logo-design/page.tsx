import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema, generateLocalBusinessSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import ServiceHeroSection from "@/components/ServiceHeroSection";

export const metadata = generateMetadata({
  title: "Logo Design Sydney | Professional Brand Logos | Sydney Web Designer",
  description: "Memorable logo design that captures your brand essence. Professional logo creation with unlimited revisions. Get a distinctive logo that stands out.",
  keywords: "logo design sydney, professional logo design, custom logo design, brand logo, logo designer sydney, business logo design",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/services/logo-design",
  ogImage: "/images/og/services.svg",
});

export default function LogoDesignPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Services", url: "https://www.sydneywebdesigner.com.au/services" },
    { name: "Logo Design", url: "https://www.sydneywebdesigner.com.au/services/logo-design" }
  ];

  const stats = [
    { label: "Logos Created", number: "500+" },
    { label: "Industries Served", number: "50+" },
    { label: "Revision Rounds", number: "Unlimited" },
    { label: "Client Satisfaction", number: "98%" },
  ];

  const features = [
    {
      title: "Custom Logo Design",
      description: "Original, unique logos tailored to your brand identity and business goals.",
      icon: "fas fa-palette",
    },
    {
      title: "Unlimited Revisions",
      description: "We refine your logo until it perfectly captures your brand essence.",
      icon: "fas fa-sync-alt",
    },
    {
      title: "Multiple Concepts",
      description: "Choose from multiple initial design concepts crafted specifically for your business.",
      icon: "fas fa-lightbulb",
    },
    {
      title: "Vector Files Included",
      description: "Receive high-quality vector files (AI, EPS, SVG, PDF) for unlimited scalability.",
      icon: "fas fa-file-image",
    },
    {
      title: "Brand Color Palette",
      description: "Professional color palette development that aligns with your brand strategy.",
      icon: "fas fa-palette",
    },
    {
      title: "Typography Selection",
      description: "Carefully selected fonts that complement your logo and brand personality.",
      icon: "fas fa-font",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Deep dive into your brand, values, target audience, and competition.",
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Create multiple logo concepts based on strategic insights.",
    },
    {
      step: "03",
      title: "Refinement",
      description: "Refine your selected concept through unlimited revision rounds.",
    },
    {
      step: "04",
      title: "Finalization",
      description: "Deliver final logo files in all formats with usage guidelines.",
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
              "Logo Design",
              "Professional logo design services in Sydney with unlimited revisions",
              "https://www.sydneywebdesigner.com.au/services/logo-design"
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
        h1="Logo Design Sydney"
        badge={{
          icon: "fas fa-palette",
          text: "Logo Design"
        }}
        heading="Professional Logo Design That Defines Your Brand"
        description="Create a memorable logo that captures your brand essence and stands out in your market. Custom designs with unlimited revisions until you're 100% satisfied."
        trustBadges={[
          { icon: "⭐", text: "4.9/5 Star Rating" },
          { icon: "🎨", text: "500+ Logos Created" },
          { icon: "♾️", text: "Unlimited Revisions" },
        ]}
      />

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <StatsGrid stats={stats} />
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Comprehensive Logo Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every logo design package includes everything you need to establish a strong brand identity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange"
              >
                <i className={`${feature.icon} text-5xl text-orange mb-6 block`}></i>
                <h3 className="text-2xl font-bold text-navy mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Design Process */}
      <section className="py-20 bg-gradient-to-br from-navy to-navy-light text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Logo Design Process
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              A proven methodology that delivers exceptional logo designs every time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-6xl font-bold text-orange mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="opacity-90 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-12 text-center">
              Why Choose Sydney Web Designer for Your Logo?
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-navy mb-4 flex items-center">
                  <i className="fas fa-check-circle text-orange mr-4"></i>
                  Strategic Design Approach
                </h3>
                <p className="text-gray-600 leading-relaxed ml-12">
                  We don't just create pretty logos. Every design decision is backed by strategy, market research, and understanding of your target audience. Your logo will work hard to communicate your brand values and differentiate you from competitors.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-navy mb-4 flex items-center">
                  <i className="fas fa-check-circle text-orange mr-4"></i>
                  Unlimited Revisions
                </h3>
                <p className="text-gray-600 leading-relaxed ml-12">
                  Your satisfaction is our priority. We include unlimited revisions in every package, ensuring your logo perfectly captures your brand essence. We'll refine and adjust until you're 100% happy with the result.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-navy mb-4 flex items-center">
                  <i className="fas fa-check-circle text-orange mr-4"></i>
                  Complete File Package
                </h3>
                <p className="text-gray-600 leading-relaxed ml-12">
                  Receive your logo in all essential formats: vector files (AI, EPS, SVG), high-resolution PNG and JPG files, and web-optimized versions. Plus, you'll get full ownership and copyright of your logo design.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-navy mb-4 flex items-center">
                  <i className="fas fa-check-circle text-orange mr-4"></i>
                  Experienced Design Team
                </h3>
                <p className="text-gray-600 leading-relaxed ml-12">
                  Our designers have created over 500 logos across 50+ industries. We understand what works in different markets and how to create logos that stand the test of time while remaining modern and relevant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-16 text-center">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {googleReviews.slice(0, 3).map((review, index) => (
              <TestimonialCard key={index} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <details className="bg-white p-6 rounded-xl shadow-md">
              <summary className="text-xl font-bold text-navy cursor-pointer">
                How long does the logo design process take?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Typically 2-3 weeks from initial consultation to final delivery. This includes time for concept development, your feedback, revisions, and finalization. Rush projects can be accommodated for an additional fee.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-md">
              <summary className="text-xl font-bold text-navy cursor-pointer">
                What file formats will I receive?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                You'll receive vector files (AI, EPS, SVG, PDF) for scalability, high-resolution PNG and JPG files with transparent backgrounds, and web-optimized versions. All files are suitable for both print and digital use.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-md">
              <summary className="text-xl font-bold text-navy cursor-pointer">
                How many logo concepts will I receive?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We typically present 3-5 initial logo concepts based on our discovery session. You can then select your favorite concept for refinement through unlimited revisions until perfect.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-md">
              <summary className="text-xl font-bold text-navy cursor-pointer">
                Do I own the copyright to my logo?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes! Upon final payment, you receive full ownership and copyright of your logo design. You're free to use it however you wish with no restrictions or additional licensing fees.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-md">
              <summary className="text-xl font-bold text-navy cursor-pointer">
                Can you redesign my existing logo?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Absolutely! We offer logo refresh and modernization services. We can update your existing logo while maintaining brand recognition, or create an entirely new design if that better serves your business goals.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-md">
              <summary className="text-xl font-bold text-navy cursor-pointer">
                What information do you need to get started?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We'll discuss your business, target audience, brand personality, competitors, and any design preferences during our discovery session. This ensures we create a logo that truly represents your brand and resonates with your audience.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Create Your Perfect Logo?"
        description="Let's design a logo that captures your brand essence and makes you stand out. Get started with a free consultation today."
      />
    </>
  );
}
