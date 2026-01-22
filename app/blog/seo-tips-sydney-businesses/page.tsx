import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "SEO Tips for Sydney Businesses | Local SEO Guide | DSIGNS Blog",
  description: "Local SEO strategies to help your Sydney business rank higher and attract more customers. Expert tips from Sydney's top digital marketing agency.",
};

export default function SEOTipsSydneyBusinesses() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-navy text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-primary-orange hover:underline mb-4 inline-block">
              ← Back to Blog
            </Link>
            <span className="inline-block px-3 py-1 bg-primary-orange text-white text-xs rounded-full mb-4">
              SEO
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              SEO Tips for Sydney Businesses
            </h1>
            <div className="flex items-center gap-6 text-gray-300 mb-6">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                January 12, 2026
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                10 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/blog/seo-tips-sydney.jpg"
                alt="SEO Tips for Sydney Businesses"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-gray-700 mb-8">
              If you&apos;re running a business in Sydney, local SEO is one of the most powerful tools to attract customers in your area. With the right strategies, your business can appear at the top of Google search results when potential customers are looking for your products or services.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">1. Optimize Your Google Business Profile</h2>
            <p className="text-gray-700 mb-6">
              Your Google Business Profile (formerly Google My Business) is the foundation of local SEO. Ensure your profile is complete with accurate business information, photos, business hours, and your service areas across Sydney suburbs.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Add high-quality photos of your business, team, and products</li>
              <li>Keep your business hours up-to-date, especially during holidays</li>
              <li>Respond to all customer reviews promptly and professionally</li>
              <li>Post regular updates about your business, offers, and events</li>
              <li>Use relevant business categories that match your services</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">2. Target Sydney-Specific Keywords</h2>
            <p className="text-gray-700 mb-6">
              Include location-based keywords throughout your website content. Instead of just targeting &quot;plumber&quot; or &quot;web designer,&quot; focus on &quot;plumber in Sydney&quot; or &quot;web designer Sydney CBD.&quot;
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">3. Create Location-Specific Pages</h2>
            <p className="text-gray-700 mb-6">
              If you serve multiple Sydney suburbs, create dedicated pages for each location. For example:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Web Design Services in Parramatta</li>
              <li>SEO Services in North Sydney</li>
              <li>Digital Marketing in Eastern Suburbs</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Each page should contain unique, valuable content relevant to that specific area.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">4. Build Local Citations</h2>
            <p className="text-gray-700 mb-6">
              Citations are mentions of your business name, address, and phone number (NAP) on other websites. Ensure your NAP information is consistent across:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Local directories (Yellow Pages, True Local, StartLocal)</li>
              <li>Industry-specific directories</li>
              <li>Social media profiles</li>
              <li>Chamber of Commerce websites</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">5. Generate and Manage Reviews</h2>
            <p className="text-gray-700 mb-6">
              Customer reviews significantly impact local search rankings and customer trust. Here&apos;s how to build a strong review profile:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Ask satisfied customers to leave Google reviews</li>
              <li>Make it easy by sending direct review links via email or SMS</li>
              <li>Respond to all reviews, both positive and negative</li>
              <li>Address negative feedback professionally and offer solutions</li>
            </ul>

            <div className="bg-gray-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">💡 Pro Tip:</p>
              <p className="text-gray-700">
                Timing matters! Ask for reviews shortly after a positive interaction when the experience is fresh in the customer&apos;s mind.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">6. Optimize for Mobile</h2>
            <p className="text-gray-700 mb-6">
              Most local searches happen on mobile devices. Ensure your website:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Loads quickly on mobile devices</li>
              <li>Has a responsive design that adapts to all screen sizes</li>
              <li>Features click-to-call buttons for easy contact</li>
              <li>Displays your address and directions prominently</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">7. Create Local Content</h2>
            <p className="text-gray-700 mb-6">
              Publish blog posts and content that&apos;s relevant to Sydney audiences:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Local industry news and updates</li>
              <li>Sydney event sponsorships or participation</li>
              <li>Community involvement and local partnerships</li>
              <li>Case studies featuring Sydney clients</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">8. Use Schema Markup</h2>
            <p className="text-gray-700 mb-6">
              Schema markup helps search engines understand your business information better. Implement LocalBusiness schema to provide:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Business name, address, and phone number</li>
              <li>Business hours and service areas</li>
              <li>Customer ratings and reviews</li>
              <li>Accepted payment methods</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">9. Build Local Backlinks</h2>
            <p className="text-gray-700 mb-6">
              Earn links from other Sydney-based websites and organizations:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Local news publications and blogs</li>
              <li>Sydney business associations</li>
              <li>Local supplier and partner websites</li>
              <li>Sponsorship of local events or charities</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">10. Track Your Results</h2>
            <p className="text-gray-700 mb-6">
              Use tools like Google Analytics, Google Search Console, and Google Business Profile insights to monitor:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Local keyword rankings</li>
              <li>Website traffic from Sydney</li>
              <li>Google Business Profile views and actions</li>
              <li>Conversion rates from local searches</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Conclusion</h2>
            <p className="text-gray-700 mb-6">
              Local SEO is an ongoing process that requires consistent effort, but the results are worth it. By implementing these strategies, your Sydney business can improve its visibility in local search results, attract more customers, and outperform competitors.
            </p>
            <p className="text-gray-700 mb-6">
              Need help with your local SEO strategy? DSIGNS Australia has helped over 80 Sydney businesses achieve top rankings and measurable growth through strategic SEO.
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-navy mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/web-design-trends-2026" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">
                  Web Design Trends to Watch in 2026
                </h3>
                <p className="text-gray-600 text-sm">Discover the latest web design trends that will shape the digital landscape...</p>
              </Link>
              <Link href="/blog/how-to-choose-web-designer-sydney" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">
                  How to Choose the Right Web Designer
                </h3>
                <p className="text-gray-600 text-sm">Essential factors to consider when selecting a web design agency...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Want to Rank Higher in Sydney?"
        description="Get a free SEO audit and discover how we can help your business dominate local search results."
        primaryButtonText="Get Free SEO Audit"
        primaryButtonAction="seoAudit"
      />
    </>
  );
}
