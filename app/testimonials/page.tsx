import { Metadata } from "next";
import { googleReviews } from "@/lib/constants";
import { generateLocalBusinessSchema } from "@/lib/schemas";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews | Sydney Web Designer",
  description: "Read what our clients say about DSIGNS AUSTRALIA. 4.9/5 star rating with 50+ reviews. Real results from real businesses across Sydney.",
  keywords: "client reviews, testimonials, google reviews, dsigns reviews, web design reviews sydney",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Schema Markup */}
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
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Don&apos;t just take our word for it. See what our clients have to say about working with DSIGNS AUSTRALIA.
            </p>

            {/* Rating Display */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-8 h-8 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-3xl font-bold text-white">4.9/5</span>
              </div>
              <p className="text-xl text-gray-100">Based on 50+ Google Reviews</p>
              <a
                href="https://g.page/r/your-google-business-profile/review"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white"
              >
                Leave a Review on Google
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-orange mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-orange mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-orange mb-2">50+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-orange mb-2">13+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="container">
          <div className="section-title">
            <h2>What Our Clients Say</h2>
            <p>Real reviews from real businesses we&apos;ve helped succeed</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {googleReviews.map((review) => (
              <TestimonialCard key={review.id} review={review} compact={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Why Clients Choose Us</h2>
            <p>Consistent excellence across every project</p>
          </div>

          <div className="grid-3">
            <div className="card text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Our clients see real, measurable improvements in traffic, leads, and revenue. We focus on
                outcomes that matter to your business.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-3">Excellent Communication</h3>
              <p className="text-gray-600">
                We respond within 24 hours and keep you informed throughout your project. No jargon,
                just clear, honest communication.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Tailored Solutions</h3>
              <p className="text-gray-600">
                Every business is unique. We take the time to understand your goals and create custom
                solutions that fit your specific needs.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">On-Time Delivery</h3>
              <p className="text-gray-600">
                We respect your time and deadlines. Projects are delivered on schedule, with regular
                updates along the way.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Long-Term Partnership</h3>
              <p className="text-gray-600">
                We don&apos;t just complete projects and disappear. We provide ongoing support and help
                you grow your business over time.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Great Value</h3>
              <p className="text-gray-600">
                Premium quality at fair prices. We offer transparent pricing with no hidden fees and
                deliver exceptional value for your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join Our Happy Clients"
        description="Experience the DSIGNS difference. Get a free consultation and quote for your project."
        primaryButtonText="Get Free Quote"
        primaryButtonAction="contact"
        secondaryButtonText="View Our Work"
      />
    </>
  );
}
