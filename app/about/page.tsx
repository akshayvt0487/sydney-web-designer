import { Metadata } from "next";
import Link from "next/link";
import { contactInfo } from "@/lib/constants";
import { generateLocalBusinessSchema, generateOrganizationSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us | Sydney Web Designer | DSIGNS AUSTRALIA",
  description: "Learn about DSIGNS AUSTRALIA - 13+ years of web design and digital marketing excellence in Sydney. Meet our team and discover our story.",
  keywords: "about dsigns, web design company sydney, digital marketing agency sydney",
};

export default function AboutPage() {
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

      {/* Hero Section */}
      <section className="gradient-navy-orange text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About DSIGNS AUSTRALIA
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Delivering exceptional web design and digital marketing solutions for over 13 years.
              We help Sydney businesses grow their online presence and achieve measurable results.
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
              <p>Building digital success stories since 2012</p>
            </div>

            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Founded in 2012 by <strong>Basheer Padanna</strong>, DSIGNS AUSTRALIA has grown from a
                one-person operation to a full-service digital agency serving businesses across Sydney
                and throughout Australia.
              </p>

              <p>
                With over 13 years of experience in web design, branding, and digital marketing, we&apos;ve
                helped hundreds of businesses establish and grow their online presence. Our journey began
                with a simple mission: to provide professional, results-driven digital solutions that help
                businesses succeed.
              </p>

              <p>
                Today, we&apos;re proud to have delivered over 500 websites and digital marketing campaigns
                across more than 50 industries. From small startups to established enterprises, we&apos;ve
                helped businesses of all sizes achieve their digital goals.
              </p>

              <p>
                What sets us apart is our commitment to understanding each client&apos;s unique needs and
                delivering tailored solutions that drive real business results. We don&apos;t just build
                websites – we create digital experiences that convert visitors into customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>

          <div className="grid-3">
            <div className="card text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Results-Driven</h3>
              <p className="text-gray-600">
                We focus on delivering measurable outcomes that impact your bottom line. Every project
                is designed with clear goals and success metrics in mind.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Client-Focused</h3>
              <p className="text-gray-600">
                Your success is our success. We take the time to understand your business, goals, and
                challenges to deliver solutions that truly work for you.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every project receives our full attention and expertise,
                regardless of size or budget.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of industry trends and technologies to provide cutting-edge solutions that
                give you a competitive advantage.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3">Transparency</h3>
              <p className="text-gray-600">
                We believe in honest communication and clear reporting. You&apos;ll always know what
                we&apos;re doing and why it matters for your business.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p className="text-gray-600">
                Count on us to deliver on time, respond quickly, and provide ongoing support long after
                your project launches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>What We Do</h2>
            <p>Comprehensive digital solutions for your business</p>
          </div>

          <div className="grid-3">
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-navy">Web Design & Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Custom website design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>WordPress development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>E-commerce solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Responsive mobile design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Website redesign & modernization</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-navy">Branding & Design</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Logo design & brand identity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Brand strategy & positioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Marketing collateral design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Business card design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Brand guidelines & style guides</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-navy">Digital Marketing</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>SEO & local search optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Google Ads management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Social media marketing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Content marketing & strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Email marketing campaigns</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Founder</h2>
            <p>Leadership with vision and experience</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="card">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 bg-gradient-navy-orange rounded-full flex-shrink-0 flex items-center justify-center text-white text-6xl font-bold">
                  BP
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2 text-primary-navy">Basheer Padanna</h3>
                  <p className="text-primary-orange font-semibold mb-4">Founder & Lead Designer</p>
                  <p className="text-gray-700 mb-4">
                    With over 13 years of experience in web design and digital marketing, Basheer has helped
                    hundreds of Australian businesses establish and grow their online presence. His expertise
                    spans web design, SEO, Google Ads, branding, and digital strategy.
                  </p>
                  <p className="text-gray-700">
                    Basheer&apos;s hands-on approach and commitment to client success have been the foundation
                    of DSIGNS AUSTRALIA&apos;s reputation for delivering exceptional results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Our Location</h2>
            <p>Based in Parramatta, serving all of Sydney</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="card text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-4 text-primary-navy">Visit Our Office</h3>
              <p className="text-gray-700 mb-2">
                <strong>{contactInfo.address.suite}</strong>
              </p>
              <p className="text-gray-700 mb-2">
                {contactInfo.address.street}
              </p>
              <p className="text-gray-700 mb-6">
                {contactInfo.address.suburb} {contactInfo.address.state} {contactInfo.address.postcode}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${contactInfo.phoneLink}`} className="btn btn-primary">
                  📞 Call Us: {contactInfo.phone}
                </a>
                <a href={`mailto:${contactInfo.email}`} className="btn btn-secondary">
                  📧 Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Work Together?"
        description="Let&apos;s discuss your project and how we can help your business succeed online."
        primaryButtonText="Get Free Quote"
        primaryButtonAction="contact"
        secondaryButtonText="View Our Work"
      />
    </>
  );
}
