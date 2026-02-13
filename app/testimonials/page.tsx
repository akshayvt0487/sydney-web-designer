import { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = generateMetadata({
  title: "Client Testimonials | Sydney Web Designer Reviews",
  description: "Read what our clients say about our web design and digital marketing services. 5-star reviews from satisfied Sydney businesses.",
  keywords: "web designer reviews sydney, testimonials, client feedback",
  canonicalUrl: "https://sydneywebdesigner.com.au/testimonials",
});

export default function TestimonialsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Testimonials", url: "https://sydneywebdesigner.com.au/testimonials" },
  ]);

  // AggregateRating schema for testimonials page
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sydney Web Designer",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const testimonials = [
    {
      stars: 5,
      text: "Exceptional!! Very happy with the service. I have used Sydney Web Designer for Logo design, Webpage to printing. They have exceeded my expectations all the time. They converted my ideas easily into designs without any problem. Very responsive. The best thing was they gave new ideas of promoting our business which really worked for us. Highly recommended for every stage and every sort of business. They take your business to the next level.",
      author: "Bineesh Chandy",
      company: "Konkan Restaurant, Sydney"
    },
    {
      stars: 5,
      text: "Thank you Sydney Web Designer for your great work on helping develop our web design. Working with Nishana was a pleasure, she asked all the right questions to ensure her team could bring our vision to life. Great work!",
      author: "Verified Client",
      company: "Sydney Business Owner"
    },
    {
      stars: 5,
      text: "The team at Sydney Web Designer have been awesome to work with. They are very responsive and supportive whilst creating my website. They have guided me every step of the way, and appreciate all their efforts in the creation of my website.",
      author: "Verified Client",
      company: "Sydney Service Provider"
    },
    {
      stars: 5,
      text: "We hired Sydney Web Designer to revamp our website with a specific goal, that is Generate Leads on a daily basis. They run Ads on Google, optimise for SEO and post on Social Media. The results been fantastic. We are on page#1 for our targeted keywords and now planning to push more for even greater results. Basheer & Thomas and entire team at Sydney Web Designer are very knowledgeable and helpful. They are honest and work like their own business.",
      author: "NDIS Provider",
      company: "Healthcare Services"
    },
    {
      stars: 5,
      text: "Bash was simply amazing! Insightful and helpful. He treated my business as his own and put his deep thinking cap and helped us work through some of our most pressing branding and google ads issues for our civil business! We went with their small business growth plan and started seeing results immediately.",
      author: "Civil Contractor",
      company: "Construction Services"
    },
    {
      stars: 5,
      text: "This company is hands down the best, fastest and best digital marketing agency you can find. You can ask for anything and everything and they'll get it done for you with their amazing team.",
      author: "Verified Client",
      company: "Sydney Business"
    },
    {
      stars: 5,
      text: "We hired Sydney Web Designer to design and develop our website. The team were very courteous, flexible and professional to deliver a completed website in time and within budget. We are happy with their service and hired them for our SEO services.",
      author: "Pulse Tech Systems",
      company: "Technology Services"
    },
    {
      stars: 5,
      text: "I had a very positive experience with Sydney Web Designer. They quickly understood what I required and undertook the task with professionalism. I was also impressed with how quickly the issues with my blog were resolved. What was also important was that they took the time to explain to me what I needed to know and do to improve my blog. It all went really smoothly and I am very happy with the result.",
      author: "Danielle Cheuk",
      company: "Flavours of Home Blog"
    },
    {
      stars: 5,
      text: "We hired Sydney Web Designer to design and build a new website for our business. They were very clear with their communication throughout the process and we are happy with our final website which is very clean and already making some splash and getting us some leads. Thanks Sydney Web Designer!",
      author: "Verified Client",
      company: "Sydney Business"
    },
    {
      stars: 5,
      text: "Hired Sydney Web Designer for all our branding and website works. Basheer and team has excelled our expectations and continue to help us with our SEO and Social Media Campaigns. Excellent team and reasonable price. Thanks again!",
      author: "Verified Client",
      company: "Sydney Business Owner"
    }
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

      {/* Hero Section */}
      <section className="bg-[#1e293b] text-white py-32 text-center">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-white">
            What Our Clients Say
          </h1>
          <p className="text-xl text-gray-100">
            Real reviews from real Sydney businesses we've helped grow online
          </p>
        </div>
      </section>

      {/* Google Rating Section */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#1e293b] mb-4">Trusted by Sydney Businesses</h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex gap-1 text-5xl">
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
            </div>
            <span className="text-3xl font-bold text-[#1e293b]">5.0 Rating on Google</span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-10 border-t-4 border-[#f59e0b]"
              >
                <div className="flex gap-1 text-2xl text-[#f59e0b] mb-4">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <span key={i}><i className="fas fa-star"></i></span>
                  ))}
                </div>
                <p className="text-[#64748b] leading-relaxed italic mb-6">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <div className="font-bold text-[#1e293b] text-lg">{testimonial.author}</div>
                  <div className="text-[#64748b] text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Join Section */}
          <div className="text-center bg-white rounded-3xl shadow-lg p-12 mt-16">
            <h3 className="text-3xl font-bold text-[#1e293b] mb-4">Join Our Happy Clients</h3>
            <p className="text-xl text-[#64748b] mb-8">
              Over 500 Sydney businesses trust us with their digital presence
            </p>
            <Link
              href="/portfolio"
              className="bg-[#f59e0b] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#d97706] transition-all hover:shadow-lg inline-block"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1e293b] py-20 text-center text-white">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 opacity-95">Let's create digital success together</p>
          <Link
            href="/contact"
            className="bg-white text-[#1e293b] px-12 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:shadow-lg inline-block"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
