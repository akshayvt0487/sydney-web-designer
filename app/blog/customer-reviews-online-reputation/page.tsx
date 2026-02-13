import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Customer Reviews & Online Reputation Management Guide | Sydney Web Designer",
  description: "Learn how to manage customer reviews and build a strong online reputation for your Sydney business. Expert tips for review management and reputation building.",
};

export default function CustomerReviewsPage() {
  return (
    <>
      <section className="bg-[#1e293b] text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-primary-orange hover:underline mb-4 inline-block">
              ← Back to Blog
            </Link>
            <span className="inline-block px-3 py-1 bg-primary-orange text-white text-xs rounded-full mb-4">
              Digital Marketing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Customer Reviews & Online Reputation Management: Complete Guide
            </h1>
            <div className="flex items-center gap-6 text-white mb-6">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                January 27, 2026
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                7 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-gray-700 mb-8">
              93% of consumers read online reviews before making a purchase decision. For Sydney businesses, managing your online reputation isn&apos;t optional—it&apos;s essential for growth. This guide shows you how to build, manage, and leverage customer reviews effectively.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Why Online Reviews Matter</h2>
            <p className="text-gray-700 mb-6">
              Online reviews are the modern word-of-mouth. They influence purchasing decisions, improve SEO rankings, and build trust with potential customers.
            </p>
            <ul className="text-gray-700 mb-6">
              <li>93% of consumers read online reviews before buying</li>
              <li>84% trust online reviews as much as personal recommendations</li>
              <li>A one-star increase can boost revenue by 5-9%</li>
              <li>Google reviews directly impact local search rankings</li>
              <li>Businesses with positive reviews convert better</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">1. Make It Easy to Leave Reviews</h2>
            <p className="text-gray-700 mb-6">
              The biggest obstacle to getting reviews is friction. Remove every possible barrier:
            </p>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">How to Simplify the Review Process:</p>
              <ul className="text-gray-700 mb-0">
                <li>Create a direct Google review link and share it</li>
                <li>Send review requests via email with one-click links</li>
                <li>Add QR codes to receipts or business cards</li>
                <li>Include review links on your website and email signatures</li>
                <li>Make it mobile-friendly (most reviews happen on phones)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">2. Ask at the Right Time</h2>
            <p className="text-gray-700 mb-6">
              Timing is everything when requesting reviews. Ask when customers are happiest:
            </p>
            <ul className="text-gray-700 mb-6">
              <li>Right after project completion or delivery</li>
              <li>When customers express satisfaction</li>
              <li>After they&apos;ve experienced your product/service benefits</li>
              <li>Not when they&apos;re rushing or dealing with issues</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">3. Respond to All Reviews (Good and Bad)</h2>
            <p className="text-gray-700 mb-6">
              Responding shows you care about customer feedback and value their opinions.
            </p>
            <div className="bg-gray-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">Responding to Positive Reviews:</p>
              <ul className="text-gray-700 mb-3">
                <li>Thank them personally</li>
                <li>Mention specific details from their review</li>
                <li>Invite them back</li>
                <li>Keep it genuine and brief</li>
              </ul>
              <p className="text-gray-700 font-semibold mb-2">Responding to Negative Reviews:</p>
              <ul className="text-gray-700 mb-0">
                <li>Respond quickly (within 24-48 hours)</li>
                <li>Apologize sincerely without making excuses</li>
                <li>Take responsibility where appropriate</li>
                <li>Offer to resolve the issue offline</li>
                <li>Never argue or get defensive</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">4. Choose the Right Review Platforms</h2>
            <p className="text-gray-700 mb-6">
              For Sydney businesses, focus on platforms where your customers actually look:
            </p>
            <ul className="text-gray-700 mb-6">
              <li><strong>Google Reviews:</strong> Most important for local SEO and visibility</li>
              <li><strong>Facebook:</strong> Social proof where customers spend time</li>
              <li><strong>Industry-specific sites:</strong> ProductReview.com.au, TripAdvisor, etc.</li>
              <li><strong>Your website:</strong> Display testimonials prominently</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">5. Turn Negative Reviews into Opportunities</h2>
            <p className="text-gray-700 mb-6">
              How you handle criticism shows your character and can actually improve reputation:
            </p>
            <ul className="text-gray-700 mb-6">
              <li>View them as free feedback for improvement</li>
              <li>Respond professionally and constructively</li>
              <li>Take conversations offline when appropriate</li>
              <li>Implement legitimate feedback</li>
              <li>Show future customers how you handle problems</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">6. Showcase Your Best Reviews</h2>
            <p className="text-gray-700 mb-6">
              Don&apos;t let great reviews sit hidden on review sites:
            </p>
            <ul className="text-gray-700 mb-6">
              <li>Feature testimonials on your website homepage</li>
              <li>Create case studies from detailed positive reviews</li>
              <li>Share reviews on social media</li>
              <li>Include in email marketing campaigns</li>
              <li>Display star ratings in Google search results with schema markup</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">7. Monitor Your Online Reputation</h2>
            <p className="text-gray-700 mb-6">
              You can&apos;t manage what you don&apos;t measure. Set up monitoring systems:
            </p>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">Monitoring Tools:</p>
              <ul className="text-gray-700 mb-0">
                <li>Google Alerts for your business name</li>
                <li>Review notification settings on all platforms</li>
                <li>Social media listening tools</li>
                <li>Regular manual checks of review sites</li>
                <li>Reputation management software for larger businesses</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">8. Never Buy Fake Reviews</h2>
            <p className="text-gray-700 mb-6">
              It&apos;s tempting but extremely risky:
            </p>
            <ul className="text-gray-700 mb-6">
              <li>Google can detect and remove fake reviews</li>
              <li>You can be penalized in search rankings</li>
              <li>Your business profile can be suspended</li>
              <li>Customers can spot fake reviews</li>
              <li>It damages credibility when discovered</li>
              <li>It&apos;s not worth the short-term gain</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">9. Create a Review Generation System</h2>
            <p className="text-gray-700 mb-6">
              Successful Sydney businesses have automated systems for getting reviews:
            </p>
            <ul className="text-gray-700 mb-6">
              <li><strong>Email automation:</strong> Send review requests after purchase/service</li>
              <li><strong>Staff training:</strong> Teach team to ask for reviews in person</li>
              <li><strong>Incentivize (carefully):</strong> Enter reviewers in draws (don&apos;t pay for positive reviews)</li>
              <li><strong>Make it part of process:</strong> Include in standard follow-up procedures</li>
              <li><strong>Track and measure:</strong> Monitor how many reviews you get monthly</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">10. Deal with Fake Negative Reviews</h2>
            <p className="text-gray-700 mb-6">
              Sometimes competitors or trolls leave fake negative reviews:
            </p>
            <div className="bg-gray-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">How to Handle Fake Reviews:</p>
              <ul className="text-gray-700 mb-0">
                <li>Flag them on the platform for review</li>
                <li>Provide evidence they&apos;re not a real customer</li>
                <li>Respond professionally stating you have no record of them</li>
                <li>Build more genuine positive reviews to dilute impact</li>
                <li>Contact the platform directly for egregious cases</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Start Building Your Reputation Today</h2>
            <p className="text-gray-700 mb-6">
              Your online reputation is one of your most valuable business assets. It influences every potential customer researching your Sydney business. By actively managing reviews, responding professionally, and consistently delivering great service, you build a reputation that drives sustainable growth.
            </p>
            <p className="text-gray-700 mb-6">
              Remember: your reputation is built one customer interaction at a time. Focus on delivering exceptional service, and the reviews will follow.
            </p>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-navy mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/seo-tips-sydney-businesses" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">
                  SEO Tips for Sydney Businesses
                </h3>
                <p className="text-gray-600 text-sm">Learn proven SEO strategies to improve your Google rankings...</p>
              </Link>
              <Link href="/blog/branding-mistakes-small-businesses" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">
                  10 Branding Mistakes Small Businesses Make
                </h3>
                <p className="text-gray-600 text-sm">Discover common branding mistakes and how to avoid them...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Help Managing Your Online Reputation?"
        description="Our digital marketing experts can help you build and maintain a strong online presence for your Sydney business."
        primaryButtonText="Get Free Consultation"
        primaryButtonAction="contact"
      />
    </>
  );
}
