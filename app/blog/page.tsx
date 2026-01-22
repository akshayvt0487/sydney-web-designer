import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Blog | Web Design & Digital Marketing Tips | DSIGNS AUSTRALIA",
  description: "Expert insights on web design, SEO, digital marketing, and business growth. Learn from 13+ years of industry experience.",
  keywords: "web design blog, digital marketing tips, seo advice, business growth, sydney web design",
};

export default function BlogPage() {
  const blogPosts = [
    {
      slug: "web-design-trends-2026",
      title: "Web Design Trends to Watch in 2026",
      excerpt: "Discover the latest web design trends that will shape the digital landscape in 2026 and beyond.",
      date: "January 15, 2026",
      readTime: "8 min read",
      category: "Web Design",
      image: "/images/blog/web-design-trends-2026.jpg",
    },
    {
      slug: "seo-tips-sydney-businesses",
      title: "SEO Tips for Sydney Businesses",
      excerpt: "Local SEO strategies to help your Sydney business rank higher and attract more customers.",
      date: "January 12, 2026",
      readTime: "10 min read",
      category: "SEO",
      image: "/images/blog/seo-tips-sydney.jpg",
    },
    {
      slug: "how-to-choose-web-designer-sydney",
      title: "How to Choose the Right Web Designer",
      excerpt: "Essential factors to consider when selecting a web design agency for your business.",
      date: "January 8, 2026",
      readTime: "6 min read",
      category: "Web Design",
      image: "/images/blog/choose-web-designer.jpg",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy-orange text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              DSIGNS Blog
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Expert insights, tips, and strategies for web design, digital marketing, and business
              growth from our 13+ years of experience.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20">
        <div className="container">
          <div className="section-title">
            <h2>Latest Articles</h2>
            <p>Stay informed with our latest insights and tips</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.slug} className="card group hover:shadow-card-hover h-full flex flex-col">
                <div className="relative h-48 bg-gradient-navy-orange rounded-lg mb-4 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>📅 {post.date}</span>
                  <span>⏱️ {post.readTime}</span>
                </div>
                <span className="inline-block px-3 py-1 bg-primary-orange text-white text-xs rounded-full mb-3 self-start">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-orange transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary-orange font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Read More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Browse by Category</h2>
            <p>Find articles on topics that matter to your business</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Web Design & Development",
              "SEO & Local Marketing",
              "Digital Marketing & Advertising",
              "Conversion & Analytics",
              "Branding & Strategy",
              "Business Growth",
              "WordPress Tips",
              "Social Media Marketing",
            ].map((category, index) => (
              <div key={index} className="card text-center hover:border-primary-orange hover:border-2 transition-all cursor-pointer">
                <p className="font-semibold text-primary-navy">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="card">
              <div className="text-5xl mb-4">📧</div>
              <h2 className="text-2xl font-bold mb-4 text-primary-navy">Stay Updated</h2>
              <p className="text-gray-700 mb-6">
                Subscribe to our newsletter to receive the latest tips, insights, and updates on web
                design and digital marketing.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="form-input flex-grow"
                  required
                />
                <button type="submit" className="btn btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need Professional Help?"
        description="Let our experts handle your web design and digital marketing. Get a free consultation today."
        primaryButtonText="Get Free Quote"
        primaryButtonAction="contact"
        secondaryButtonText="View Our Services"
      />
    </>
  );
}
