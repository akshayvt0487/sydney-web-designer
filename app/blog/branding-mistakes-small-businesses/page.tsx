import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "10 Branding Mistakes Small Businesses Make (And How to Avoid Them) | Sydney Web Designer",
  description: "Discover the most common branding mistakes that hurt small businesses and learn proven strategies to build a strong, memorable brand identity in Sydney.",
};

export default function BrandingMistakesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1e293b] text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-primary-orange hover:underline mb-4 inline-block">
              ← Back to Blog
            </Link>
            <span className="inline-block px-3 py-1 bg-primary-orange text-white text-xs rounded-full mb-4">
              Branding
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              10 Branding Mistakes Small Businesses Make (And How to Avoid Them)
            </h1>
            <div className="flex items-center gap-6 text-white mb-6">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                January 20, 2026
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

      {/* Article Content */}
      <article className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-gray-700 mb-8">
              Your brand is more than just a logo—it&apos;s the complete experience customers have with your business. Unfortunately, many small businesses in Sydney make critical branding mistakes that undermine their success. Let&apos;s explore the 10 most common branding mistakes and how to avoid them.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">1. Inconsistent Visual Identity</h2>
            <p className="text-gray-700 mb-6">
              One of the biggest mistakes is using different logos, colors, and fonts across various platforms. Your website might use one shade of blue while your social media uses another, creating confusion and weakening brand recognition.
            </p>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">How to Fix It:</p>
              <p className="text-gray-700">
                Create a comprehensive brand style guide that documents your exact colors (with hex codes), fonts, logo variations, and usage rules. Ensure everyone on your team has access to this guide.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">2. Trying to Appeal to Everyone</h2>
            <p className="text-gray-700 mb-6">
              When you try to target everyone, you end up resonating with no one. Small businesses often make the mistake of keeping their messaging too broad, hoping to attract the widest possible audience.
            </p>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">How to Fix It:</p>
              <p className="text-gray-700">
                Define your ideal customer persona. Be specific about who you serve, what problems you solve for them, and why you&apos;re the best solution. A narrow focus actually attracts more customers.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">3. Copying Competitors Instead of Standing Out</h2>
            <p className="text-gray-700 mb-6">
              It&apos;s tempting to look at successful competitors and try to replicate their branding. But this approach makes you forgettable. Sydney consumers want authentic businesses, not copycats.
            </p>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">How to Fix It:</p>
              <p className="text-gray-700">
                Identify what makes your business unique. What&apos;s your story? What values drive your business? Use competitor research for inspiration, but build a brand that reflects your unique identity.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">4. Neglecting Your Online Presence</h2>
            <p className="text-gray-700 mb-6">
              In 2026, your online presence IS your brand for many customers. A poorly designed website, inactive social media, or outdated information damages your brand&apos;s credibility.
            </p>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">How to Fix It:</p>
              <p className="text-gray-700">
                Invest in a professional website that reflects your brand values. Keep your Google Business Profile updated. Maintain active social media presence where your customers spend time. Consistency is key.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">5. Undervaluing Professional Design</h2>
            <p className="text-gray-700 mb-6">
              Using free logo makers or asking your nephew to design your brand might save money upfront, but it costs you credibility and customers in the long run.
            </p>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">How to Fix It:</p>
              <p className="text-gray-700">
                View branding as an investment, not an expense. Professional designers understand color psychology, typography, and visual hierarchy. Quality design pays for itself through increased customer trust and sales.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">6. Ignoring Brand Voice and Messaging</h2>
            <p className="text-gray-700 mb-6">
              Your visual brand is important, but how you communicate is equally crucial. Many businesses don&apos;t define their brand voice, leading to inconsistent messaging that confuses customers.
            </p>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">How to Fix It:</p>
              <p className="text-gray-700">
                Define your brand voice. Are you professional or casual? Humorous or serious? Technical or simple? Document this and ensure all communications—from website copy to social media posts—maintain this voice.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">7. Failing to Differentiate from Competitors</h2>
            <p className="text-gray-700 mb-6">
              If customers can&apos;t quickly understand why they should choose you over competitors, your branding has failed. Many Sydney businesses look and sound identical to their competition.
            </p>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">How to Fix It:</p>
              <p className="text-gray-700">
                Develop a clear unique value proposition. What do you do differently? What benefits do you provide that competitors don&apos;t? Make this crystal clear in all your branding.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">8. Not Evolving Your Brand</h2>
            <p className="text-gray-700 mb-6">
              While consistency is important, brands also need to evolve. A logo from 1995 might look dated today. Markets change, customer expectations shift, and your brand should adapt.
            </p>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">How to Fix It:</p>
              <p className="text-gray-700">
                Review your brand every few years. Is it still relevant? Does it reflect your current business? Small refreshes keep your brand modern while maintaining recognition. Complete rebrands should be strategic, not frequent.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">9. Overlooking Customer Experience</h2>
            <p className="text-gray-700 mb-6">
              Your brand isn&apos;t what you say it is—it&apos;s what customers experience. Beautiful branding can&apos;t compensate for poor service, slow responses, or broken promises.
            </p>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">How to Fix It:</p>
              <p className="text-gray-700">
                Ensure every customer touchpoint reflects your brand promise. Train staff on brand values. Make customer service a priority. Your brand experience should be as good as your visual branding.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">10. Lack of Brand Guidelines and Enforcement</h2>
            <p className="text-gray-700 mb-6">
              Even with great branding, inconsistent application dilutes its impact. Without clear guidelines and enforcement, different team members will interpret your brand differently.
            </p>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">How to Fix It:</p>
              <p className="text-gray-700">
                Create comprehensive brand guidelines covering logo usage, colors, fonts, imagery style, tone of voice, and more. Make these guidelines accessible to everyone who represents your brand, including contractors and partners.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Building a Strong Brand Takes Time</h2>
            <p className="text-gray-700 mb-6">
              Strong brands aren&apos;t built overnight. They require strategic thinking, consistent application, and ongoing refinement. By avoiding these common mistakes, Sydney small businesses can build brands that attract customers, command premium pricing, and stand the test of time.
            </p>

            <p className="text-gray-700 mb-6">
              Remember: your brand is one of your most valuable business assets. Invest in it, protect it, and let it guide every business decision you make.
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
                <p className="text-gray-600 text-sm">Discover the latest web design trends shaping Sydney websites...</p>
              </Link>
              <Link href="/blog/seo-tips-sydney-businesses" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">
                  SEO Tips for Sydney Businesses
                </h3>
                <p className="text-gray-600 text-sm">Learn proven SEO strategies to improve your Google rankings...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need Help Building Your Brand?"
        description="Our branding experts can help you create a memorable, professional brand identity that attracts customers."
        primaryButtonText="Get Free Consultation"
        primaryButtonAction="contact"
      />
    </>
  );
}
