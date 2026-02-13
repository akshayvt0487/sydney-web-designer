import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { generateMetadata } from "@/lib/metadata";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemas";

export const metadata = generateMetadata({
  title: "Google My Business Optimization: Complete Guide for Sydney Businesses",
  description: "Complete guide to optimizing your Google Business Profile for maximum visibility in local searches. Boost your local SEO and attract more customers with expert tips.",
  keywords: "google my business optimization, google business profile, local seo sydney, google maps ranking, local business listing, sydney local seo, gmb optimization",
  canonicalUrl: "https://sydneywebdesigner.com.au/blog/google-my-business-optimization-guide",
  ogImage: "/images/og/blog.svg",
  type: "article",
  publishedTime: "2024-07-20",
  modifiedTime: "2024-11-08",
  author: "DSIGNS Team",
});

export default function GoogleMyBusinessPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Blog", url: "https://sydneywebdesigner.com.au/blog" },
    { name: "Google My Business Optimization Guide", url: "https://sydneywebdesigner.com.au/blog/google-my-business-optimization-guide" }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateArticleSchema(
          "Google My Business Optimization: Complete Guide for Sydney Businesses",
          "Complete guide to optimizing your Google Business Profile for maximum visibility in local searches. Boost your local SEO and attract more customers with expert tips.",
          "DSIGNS Team",
          "2024-07-20",
          "2024-11-08",
          "https://sydneywebdesigner.com.au/images/og/blog.svg"
        )) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />
      <section className="bg-primary-navy text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-primary-orange hover:underline mb-4 inline-block">
              <i className="fas fa-arrow-left mr-2"></i>Back to Blog
            </Link>
            <span className="inline-block px-3 py-1 bg-primary-orange text-white text-xs rounded-full mb-4">
              <i className="fas fa-map-marked-alt mr-1"></i>Local SEO
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Google My Business Optimization: Complete Guide for Sydney Businesses</h1>
            <div className="flex items-center gap-6 text-gray-300 mb-6">
              <span className="flex items-center gap-2">
                <i className="fas fa-calendar"></i>
                February 2, 2026
              </span>
              <span className="flex items-center gap-2">
                <i className="fas fa-clock"></i>
                11 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-gray-700 mb-8">
              Your Google Business Profile (formerly Google My Business) is crucial for local visibility in Sydney. This comprehensive guide shows how to optimize your profile to dominate local search results and Google Maps, driving more customers to your business.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-question-circle text-primary-orange mr-3"></i>Why Google My Business Matters
            </h2>
            <p className="text-gray-700 mb-6">
              76% of people who search for something nearby visit a business within a day. 28% of those searches result in a purchase. An optimized Google Business Profile helps you capture this local traffic and convert searches into customers.
            </p>
            <div className="bg-blue-50 border-l-4 border-primary-navy p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2"><i className="fas fa-chart-line text-primary-orange mr-2"></i>Key Benefits:</p>
              <ul className="text-gray-700 mb-0 space-y-1">
                <li>Appear in Google Maps and local 3-pack results</li>
                <li>Display business info directly in Google Search</li>
                <li>Build trust with reviews and photos</li>
                <li>Drive website visits, calls, and foot traffic</li>
                <li>It&apos;s completely free!</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-check-circle text-primary-orange mr-3"></i>1. Claim and Verify Your Listing
            </h2>
            <p className="text-gray-700 mb-6">
              First step: claim your business on Google Business Profile. Verify through postcard (most common), phone, or email. Verification proves you own the business and unlocks all management features including the ability to respond to reviews.
            </p>
            <div className="bg-gray-100 p-6 rounded-lg my-6">
              <h4 className="text-lg font-bold text-primary-navy mb-3"><i className="fas fa-clipboard-list text-primary-orange mr-2"></i>Verification Steps:</h4>
              <ol className="text-gray-700 text-sm space-y-2">
                <li>Go to google.com/business</li>
                <li>Search for your business or add it if not listed</li>
                <li>Request verification (postcard usually takes 5-7 days)</li>
                <li>Enter verification code when received</li>
                <li>Complete your profile immediately after verification</li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-list-check text-primary-orange mr-3"></i>2. Complete Every Section 100%
            </h2>
            <p className="text-gray-700 mb-6">
              Google rewards complete profiles with better visibility. Businesses with complete profiles are 2.7x more likely to be considered reputable. Don&apos;t skip any fields.
            </p>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2"><i className="fas fa-list-ul text-primary-orange mr-2"></i>Essential Information to Include:</p>
              <ul className="text-gray-700 mb-0 space-y-2">
                <li><i className="fas fa-store text-primary-orange mr-2"></i><strong>Business Name:</strong> Exact legal name (no keyword stuffing)</li>
                <li><i className="fas fa-tag text-primary-orange mr-2"></i><strong>Category:</strong> Choose most accurate primary category + relevant secondary categories</li>
                <li><i className="fas fa-map-marker-alt text-primary-orange mr-2"></i><strong>Address:</strong> Accurate physical location (use service area if no storefront)</li>
                <li><i className="fas fa-phone text-primary-orange mr-2"></i><strong>Phone:</strong> Local Sydney number (not toll-free for local businesses)</li>
                <li><i className="fas fa-globe text-primary-orange mr-2"></i><strong>Website:</strong> Link to your website, specific landing pages work best</li>
                <li><i className="fas fa-clock text-primary-orange mr-2"></i><strong>Hours:</strong> Keep updated including special hours for holidays</li>
                <li><i className="fas fa-tools text-primary-orange mr-2"></i><strong>Services:</strong> List all services offered with detailed descriptions</li>
                <li><i className="fas fa-wheelchair text-primary-orange mr-2"></i><strong>Attributes:</strong> Wheelchair accessible, WiFi, outdoor seating, etc.</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-camera text-primary-orange mr-3"></i>3. Add High-Quality Photos
            </h2>
            <p className="text-gray-700 mb-6">
              Businesses with photos receive 42% more direction requests and 35% more website clicks. Photos build trust and give potential customers a preview of what to expect.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Logo:</strong> Square, high-resolution (minimum 720x720px)</li>
              <li><strong>Cover Photo:</strong> Landscape, showcases your business (minimum 1024x576px)</li>
              <li><strong>Exterior:</strong> Helps customers find your location</li>
              <li><strong>Interior:</strong> Shows atmosphere and professionalism</li>
              <li><strong>Team Photos:</strong> Builds personal connection and trust</li>
              <li><strong>Products/Services:</strong> Show what you offer in action</li>
              <li><strong>Before/After:</strong> Demonstrate transformation (great for trades)</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-primary-navy p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2"><i className="fas fa-lightbulb text-primary-orange mr-2"></i>Photo Tips:</p>
              <p className="text-gray-700">Upload at least 10-15 high-quality photos. Use professional photography if possible. Update regularly with new photos to show your business is active. Natural lighting works best.</p>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-star text-primary-orange mr-3"></i>4. Collect and Manage Reviews
            </h2>
            <p className="text-gray-700 mb-6">
              Reviews are crucial for both rankings and trust. 93% of consumers read online reviews before visiting a business. Businesses with 4+ star ratings and regular reviews rank higher in local search.
            </p>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2"><i className="fas fa-comments text-primary-orange mr-2"></i>Review Strategy:</p>
              <ul className="text-gray-700 mb-0 space-y-2">
                <li><strong>Ask consistently:</strong> Request reviews from every satisfied customer</li>
                <li><strong>Make it easy:</strong> Send direct review links via email or SMS</li>
                <li><strong>Timing matters:</strong> Ask right after positive experience</li>
                <li><strong>Respond to ALL:</strong> Thank positive reviewers, address negative reviews professionally</li>
                <li><strong>Never buy reviews:</strong> Google penalizes fake reviews severely</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-6">
              <strong>Responding to reviews:</strong> Always respond within 24-48 hours. For positive reviews, thank them personally. For negative reviews, apologize, take responsibility, offer to make it right, and take the conversation offline.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-bullhorn text-primary-orange mr-3"></i>5. Post Regular Updates
            </h2>
            <p className="text-gray-700 mb-6">
              Google Posts keep your profile active and give you another way to appear in search results. Posts appear directly in your Business Profile and show you&apos;re active.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Offers:</strong> Special deals and promotions</li>
              <li><strong>Events:</strong> Upcoming events and workshops</li>
              <li><strong>Updates:</strong> News, announcements, new products</li>
              <li><strong>Products:</strong> Featured products or services</li>
            </ul>
            <p className="text-gray-700 mb-6">
              <strong>Posting frequency:</strong> Aim for 2-3 posts per week. Posts stay active for 7 days, so consistent posting keeps your profile fresh.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-question text-primary-orange mr-3"></i>6. Use Google Q&A Strategically
            </h2>
            <p className="text-gray-700 mb-6">
              Anyone can ask questions on your Business Profile. Answer common questions proactively to control the narrative and provide helpful information.
            </p>
            <div className="bg-gray-100 p-6 rounded-lg my-6">
              <h4 className="text-lg font-bold text-primary-navy mb-3"><i className="fas fa-clipboard-check text-primary-orange mr-2"></i>Q&A Best Practices:</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>Add 5-10 common FAQs yourself and answer them</li>
                <li>Monitor for new questions and respond within 24 hours</li>
                <li>Be detailed and helpful in answers</li>
                <li>Include keywords naturally in answers</li>
                <li>Flag inappropriate questions</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-sync text-primary-orange mr-3"></i>7. Maintain NAP Consistency
            </h2>
            <p className="text-gray-700 mb-6">
              Your NAP (Name, Address, Phone) must match exactly across all online listings—your website, directories, social media, everywhere. Inconsistencies confuse Google and hurt local SEO rankings.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-chart-bar text-primary-orange mr-3"></i>8. Monitor Insights
            </h2>
            <p className="text-gray-700 mb-6">
              Google provides valuable data about how customers find and interact with your listing. Review insights monthly to understand what&apos;s working.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>How customers search for you (direct, discovery, branded)</li>
              <li>Where customers find you on Google (Search vs Maps)</li>
              <li>Customer actions (website visits, calls, direction requests)</li>
              <li>Photo views and comparisons to similar businesses</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-shopping-bag text-primary-orange mr-3"></i>9. Add Products/Services
            </h2>
            <p className="text-gray-700 mb-6">
              Showcase your offerings with detailed descriptions and prices. This helps customers understand what you offer before contacting you, qualifying leads better.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-calendar-check text-primary-orange mr-3"></i>10. Keep Information Updated
            </h2>
            <p className="text-gray-700 mb-6">
              Regularly update hours (especially holidays), services, photos, and information. Outdated information frustrates customers and signals to Google that your profile isn&apos;t maintained, hurting rankings.
            </p>

            <div className="bg-gray-100 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-bold text-primary-navy mb-4">
                <i className="fas fa-trophy text-primary-orange mr-2"></i>Sydney Success Story
              </h3>
              <p className="text-gray-700 mb-4">
                A Bondi cafe fully optimized their Google Business Profile with professional photos, daily posts, and active review management. Within 3 months, they saw:
              </p>
              <ul className="text-gray-700 space-y-1">
                <li><i className="fas fa-check text-primary-orange mr-2"></i>214% increase in direction requests</li>
                <li><i className="fas fa-check text-primary-orange mr-2"></i>156% increase in phone calls</li>
                <li><i className="fas fa-check text-primary-orange mr-2"></i>89% increase in website visits</li>
                <li><i className="fas fa-check text-primary-orange mr-2"></i>Ranking #1 in local 3-pack for key searches</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Conclusion</h2>
            <p className="text-gray-700 mb-6">
              Google My Business optimization is the single most important thing Sydney businesses can do for local SEO. It&apos;s free, relatively easy, and delivers immediate results. Businesses that fully optimize their profiles consistently outrank competitors in local search, driving more calls, directions, and customers. Start optimizing today and watch your local visibility soar.
            </p>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-navy mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/local-seo-sydney-complete-guide" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">Local SEO Complete Guide</h3>
                <p className="text-gray-600 text-sm">Master local SEO for Sydney businesses...</p>
              </Link>
              <Link href="/blog/customer-reviews-online-reputation" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">Customer Reviews & Online Reputation</h3>
                <p className="text-gray-600 text-sm">Build and manage your online reputation...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Need Help with Local SEO?" description="We optimize Google Business Profiles and local SEO for Sydney businesses to increase visibility and drive customers." primaryButtonText="Get Free Consultation" primaryButtonAction="contact" />
    </>
  );
}
