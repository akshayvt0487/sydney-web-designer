import { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = generateMetadata({
  title: "Client Testimonials | DSIGNS Australia Web Design Reviews",
  description:
    "Read what our clients say about DSIGNS Australia's web design and digital marketing services. 5-star reviews from satisfied Sydney businesses.",
  keywords:
    "web designer reviews sydney, testimonials, client feedback, dsigns reviews",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/testimonials",
});

export default function TestimonialsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    {
      name: "Testimonials",
      url: "https://www.sydneywebdesigner.com.au/testimonials",
    },
  ]);

  // AggregateRating schema for testimonials page
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sydney Web Designer",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const testimonials = [
    {
      stars: 5,
      text: "Exceptional!! Very happy with the service. I have used DSIGNS / Sydney Web Designer for Logo design, Webpage to printing. They have exceeded my expectations all the time. They converted my ideas easily into designs without any problem. Very responsive. The best thing was they gave new ideas of promoting our business which really worked for us. Highly recommended for every stage and every sort of business. They take your business to the next level.",
      author: "Bineesh Chandy",
      company: "Konkan Restaurant, Sydney",
    },
    {
      stars: 5,
      text: "Thank you DSIGNS / Sydney Web Designer for your great work on helping develop our web design. Working with Nishana was a pleasure, she asked all the right questions to ensure her team could bring our vision to life. Great work!",
      author: "Verified Client",
      company: "Sydney Business Owner",
    },
    {
      stars: 5,
      text: "The team at DSIGNS / Sydney Web Designer have been awesome to work with. They are very responsive and supportive whilst creating my website. They have guided me every step of the way, and appreciate all their efforts in the creation of my website.",
      author: "Verified Client",
      company: "Sydney Service Provider",
    },
    {
      stars: 5,
      text: "We hired DSIGNS / Sydney Web Designer to revamp our website with a specific goal, that is Generate Leads on a daily basis. They run Ads on Google, optimise for SEO and post on Social Media. The results been fantastic. We are on page#1 for our targeted keywords and now planning to push more for even greater results. Basheer & Thomas and entire team at DSIGNS are very knowledgeable and helpful. They are honest and work like their own business.",
      author: "NDIS Provider",
      company: "Healthcare Services",
    },
    {
      stars: 5,
      text: "Bash was simply amazing! Insightful and helpful. He treated my business as his own and put his deep thinking cap and helped us work through some of our most pressing branding and google ads issues for our civil business! We went with their small business growth plan and started seeing results immediately.",
      author: "Civil Contractor",
      company: "Construction Services",
    },
    {
      stars: 5,
      text: "This company is hands down the best, fastest and best digital marketing agency you can find. You can ask for anything and everything and they'll get it done for you with their amazing team.",
      author: "Verified Client",
      company: "Sydney Business",
    },
    {
      stars: 5,
      text: "We hired DSIGNS / Sydney Web Designer to design and develop our website. The team were very courteous, flexible and professional to deliver a completed website in time and within budget. We are happy with their service and hired them for our SEO services.",
      author: "Pulse Tech Systems",
      company: "Technology Services",
    },
    {
      stars: 5,
      text: "I had a very positive experience with DSIGNS / Sydney Web Designer. They quickly understood what I required and undertook the task with professionalism. I was also impressed with how quickly the issues with my blog were resolved. What was also important was that they took the time to explain to me what I needed to know and do to improve my blog. It all went really smoothly and I am very happy with the result.",
      author: "Danielle Cheuk",
      company: "Flavours of Home Blog",
    },
    {
      stars: 5,
      text: "We hired DSIGNS / Sydney Web Designer to design and build a new website for our business. They were very clear with their communication throughout the process and we are happy with our final website which is very clean and already making some splash and getting us some leads. Thanks DSIGNS team!",
      author: "Verified Client",
      company: "Sydney Business",
    },
    {
      stars: 5,
      text: "Hired DSIGNS / Sydney Web Designer for all our branding and website works. Basheer and team has excelled our expectations and continue to help us with our SEO and Social Media Campaigns. Excellent team and reasonable price. Thanks again!",
      author: "Verified Client",
      company: "Sydney Business Owner",
    },
  ];

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema),
        }}
      />

      <div className="testimonials-editorial">
        {/* Hero Section */}
        <section className="tm-hero">
          <div className="container tm-hero__inner">
            <p className="tm-hero__label">Client Reviews Sydney</p>

            <h1>What Our Clients Say</h1>

            <p className="tm-hero__copy">
              Real reviews from real Sydney businesses we&apos;ve helped grow
              online
            </p>
          </div>
        </section>

        {/* Google Rating Section */}
        <section className="tm-rating paper-grain">
          <div className="container tm-rating__inner">
            <h2>
              Trusted by Sydney <span>Businesses</span>
            </h2>

            <div className="tm-rating__summary">
              <div className="tm-rating__stars" aria-hidden="true">
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
              </div>

              <span className="tm-rating__value">5.0 Rating on Google</span>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="tm-reviews paper-grain">
          <div className="container">
            <div className="tm-reviews__grid">
              {testimonials.map((testimonial, index) => (
                <article key={index} className="tm-card">
                  <div
                    className="tm-card__stars"
                    aria-label={`${testimonial.stars} star review`}
                  >
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <span key={i}>
                        <i className="fas fa-star" aria-hidden="true" />
                      </span>
                    ))}
                  </div>

                  <p className="tm-card__quote">
                    &quot;{testimonial.text}&quot;
                  </p>

                  <footer className="tm-card__author">
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.company}</span>
                  </footer>
                </article>
              ))}
            </div>

            {/* Join Section */}
            <div className="tm-join">
              <h3>Join Our Happy Clients</h3>

              <p>
                Over 500 Sydney businesses trust us with their digital presence
              </p>

              <Link href="/portfolio" className="paper-button paper-button--rust">
                View Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="tm-cta">
          <div className="container tm-cta__inner">
            <h2>
              Ready to Grow Your <span>Business</span>?
            </h2>

            <p>Let&apos;s create digital success together</p>

            <Link href="/contact" className="tm-cta__button">
              Get Your Free Consultation.
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}