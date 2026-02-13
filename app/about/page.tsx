import { Metadata } from "next";
import { generateLocalBusinessSchema, generateOrganizationSchema, generateBreadcrumbSchema } from "@/lib/schemas";
import { generateMetadata } from "@/lib/metadata";
import StatsGrid from "@/components/StatsGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = generateMetadata({
  title: "About Us | 13+ Years of Excellence",
  description: "Meet the team behind Sydney's premier web design agency. 13+ years experience, 500+ websites, award-winning service. Learn about our story and values.",
  keywords: "about sydney web designer, web design agency sydney, about dsigns",
  canonicalUrl: "https://sydneywebdesigner.com.au/about",
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "About", url: "https://sydneywebdesigner.com.au/about" },
  ]);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <section className="bg-[#1e293b] text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About Sydney Web Designer
            </h1>
            <p className="text-xl text-white mb-8">
              Transforming Sydney businesses through innovative web design and digital marketing since 2011
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container">
          <StatsGrid
            stats={[
              { number: "13+", label: "Years", description: "In Business" },
              { number: "500+", label: "Websites", description: "Delivered" },
              { number: "98%", label: "Satisfaction", description: "Rating" },
              { number: "50+", label: "Industries", description: "Served" },
            ]}
            columns={4}
          />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-title">
              <h2>Our Story</h2>
              <p>13+ years of digital excellence in Sydney</p>
            </div>

            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Sydney Web Designer was founded in 2011 with a simple mission: help Sydney businesses succeed online through exceptional web design and digital marketing. What started as a small operation in Parramatta has grown into a trusted partner for businesses across Sydney and beyond.
              </p>

              <p>
                Over the past 13 years, we&apos;ve helped hundreds of businesses—from local cafes and tradies to professional services and e-commerce stores—establish powerful online presences that drive real results. Our team combines creative design with technical expertise and data-driven marketing strategies to deliver measurable growth for our clients.
              </p>

              <p>
                We&apos;re proud to be a Sydney-based agency that understands the unique challenges and opportunities of the Australian market. Every website we build, every campaign we run, and every strategy we develop is tailored to the specific needs of Sydney businesses.
              </p>

              <p>
                Today, we continue to evolve with the digital landscape, staying at the forefront of web design trends, SEO best practices, and digital marketing innovations. Our commitment remains the same: delivering exceptional results that help our clients thrive in an increasingly digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="container">
          <div className="section-title">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>

          <div className="grid-3">
            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-primary-navy">Results-Driven</h3>
              <p className="text-gray-600">
                We measure success by the results we deliver for our clients. Every website, every campaign, every strategy is designed to drive measurable business growth and ROI.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-primary-navy">Transparency</h3>
              <p className="text-gray-600">
                No hidden fees, no vague promises. We believe in clear communication, honest timelines, and transparent pricing. You&apos;ll always know exactly what you&apos;re getting and what to expect.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-primary-navy">Innovation</h3>
              <p className="text-gray-600">
                The digital landscape never stops evolving, and neither do we. We stay ahead of trends, continuously learn new technologies, and apply cutting-edge strategies to keep our clients competitive.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-primary-navy">Partnership</h3>
              <p className="text-gray-600">
                We&apos;re not just a service provider—we&apos;re your digital growth partner. Your success is our success, and we&apos;re committed to building long-term relationships based on trust and mutual growth.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-primary-navy">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. From design aesthetics to code quality to content creation, we maintain the highest standards in everything we deliver.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3 text-primary-navy">Local Expertise</h3>
              <p className="text-gray-600">
                As a Sydney-based agency, we understand the local market, competition, and opportunities. This local knowledge helps us create strategies that resonate with Australian audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>What We Do</h2>
            <p>Comprehensive digital solutions for Sydney businesses</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
            <p>
              <strong>Web Design & Development:</strong> We create stunning, high-performing websites that convert visitors into customers. Every site is mobile-responsive, SEO-optimized, and built with the latest technologies.
            </p>

            <p>
              <strong>SEO & Digital Marketing:</strong> Get found on Google and grow your online presence. Our SEO strategies combine technical optimization, content marketing, and link building to drive organic traffic and leads.
            </p>

            <p>
              <strong>Branding & Identity:</strong> Stand out from the competition with professional branding that reflects your business values and resonates with your target audience.
            </p>

            <p>
              <strong>E-commerce Solutions:</strong> Launch and grow your online store with custom e-commerce websites that make it easy for customers to find, buy, and love your products.
            </p>

            <p>
              <strong>Content Marketing:</strong> Engage your audience and establish authority with strategic content that educates, informs, and converts.
            </p>

            <p>
              <strong>Ongoing Support:</strong> We don&apos;t just build your website and disappear. Our ongoing support and maintenance packages ensure your site stays secure, fast, and up-to-date.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Work Together?"
        description="Let's discuss how we can help your Sydney business grow online"
        primaryButtonText="Get Your Free Consultation"
        primaryButtonAction="contact"
      />
    </>
  );
}
