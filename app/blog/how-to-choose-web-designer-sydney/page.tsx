import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "How to Choose the Right Web Designer in Sydney | DSIGNS Blog",
  description: "Essential factors to consider when selecting a web design agency for your business. Expert guidance from Sydney's leading web design professionals.",
};

export default function HowToChooseWebDesigner() {
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
              Web Design
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              How to Choose the Right Web Designer
            </h1>
            <div className="flex items-center gap-6 text-gray-300 mb-6">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                January 8, 2026
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                6 min read
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
                src="/images/blog/choose-web-designer.jpg"
                alt="How to Choose the Right Web Designer"
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
              Your website is often the first impression potential customers have of your business. Choosing the right web designer is a critical decision that can significantly impact your online success. Here&apos;s what you need to know to make an informed choice.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">1. Review Their Portfolio</h2>
            <p className="text-gray-700 mb-6">
              A designer&apos;s portfolio is the best indicator of their capabilities. Look for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Websites in your industry or similar sectors</li>
              <li>Design quality and attention to detail</li>
              <li>Variety of styles demonstrating versatility</li>
              <li>Mobile responsiveness across devices</li>
              <li>Live websites (not just mockups)</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Don&apos;t just look at screenshots—visit the actual websites to test functionality and user experience.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">2. Check Client Testimonials and Reviews</h2>
            <p className="text-gray-700 mb-6">
              Reviews provide valuable insights into a designer&apos;s working style and reliability. Look for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Google Business reviews from verified clients</li>
              <li>Case studies with measurable results</li>
              <li>Video testimonials showing real clients</li>
              <li>Industry awards and recognition</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">3. Understand Their Process</h2>
            <p className="text-gray-700 mb-6">
              A professional web designer should have a clear, structured process:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Initial consultation to understand your goals</li>
              <li>Research and strategy phase</li>
              <li>Design mockups and revisions</li>
              <li>Development and testing</li>
              <li>Launch and ongoing support</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Ask how they handle revisions, timelines, and communication throughout the project.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">4. Evaluate Their Technical Expertise</h2>
            <p className="text-gray-700 mb-6">
              Your web designer should be proficient in:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Modern web technologies (HTML5, CSS3, JavaScript)</li>
              <li>Content management systems (WordPress, Shopify, etc.)</li>
              <li>Responsive design principles</li>
              <li>Website speed optimization</li>
              <li>SEO best practices</li>
              <li>Security and data protection</li>
            </ul>

            <div className="bg-gray-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">⚠️ Red Flag:</p>
              <p className="text-gray-700">
                Be wary of designers who can&apos;t explain their technical approach or those who promise unrealistic results like &quot;#1 Google ranking guaranteed.&quot;
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">5. Consider Their Service Range</h2>
            <p className="text-gray-700 mb-6">
              A full-service agency can provide ongoing value beyond the initial design:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Website maintenance and updates</li>
              <li>SEO and digital marketing</li>
              <li>Content creation</li>
              <li>Branding services</li>
              <li>Technical support</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">6. Assess Communication Style</h2>
            <p className="text-gray-700 mb-6">
              Effective communication is crucial for project success. Your designer should:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Respond promptly to inquiries</li>
              <li>Explain technical concepts in plain language</li>
              <li>Listen to your needs and provide honest feedback</li>
              <li>Provide regular project updates</li>
              <li>Be proactive about potential issues</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">7. Understand Pricing and Value</h2>
            <p className="text-gray-700 mb-6">
              While cost is important, it shouldn&apos;t be the only factor. Consider:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>What&apos;s included in the quoted price</li>
              <li>Ongoing costs (hosting, maintenance, updates)</li>
              <li>Ownership of the final website</li>
              <li>Support and warranty period</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Remember: cheap websites often become expensive when you factor in poor quality, lack of support, and needed redesigns.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">8. Check Their Local Presence</h2>
            <p className="text-gray-700 mb-6">
              For Sydney businesses, working with a local web designer offers advantages:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Face-to-face meetings when needed</li>
              <li>Understanding of local market</li>
              <li>Same timezone for communication</li>
              <li>Local business network connections</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">9. Verify Post-Launch Support</h2>
            <p className="text-gray-700 mb-6">
              Your relationship with your web designer shouldn&apos;t end at launch. Ensure they offer:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Training on how to update your website</li>
              <li>Bug fixes and technical support</li>
              <li>Ongoing maintenance packages</li>
              <li>Analytics and performance reporting</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">10. Trust Your Instincts</h2>
            <p className="text-gray-700 mb-6">
              Finally, trust your gut feeling. You&apos;ll be working closely with this designer, so it&apos;s important to choose someone you feel comfortable with and who genuinely cares about your success.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Questions to Ask Potential Web Designers</h2>
            <p className="text-gray-700 mb-6">
              Before making your decision, ask these key questions:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>How long have you been designing websites?</li>
              <li>Can I see examples of websites you&apos;ve built in my industry?</li>
              <li>What is your typical project timeline?</li>
              <li>Who will own the website and all its content?</li>
              <li>How do you approach SEO and mobile optimization?</li>
              <li>What happens if I need changes after launch?</li>
              <li>Do you provide training and documentation?</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Conclusion</h2>
            <p className="text-gray-700 mb-6">
              Choosing the right web designer is an investment in your business&apos;s future. Take your time, do your research, and select a professional who aligns with your vision and business goals. A great web designer doesn&apos;t just build websites—they create digital experiences that drive growth and success.
            </p>
            <p className="text-gray-700 mb-6">
              At DSIGNS Australia, we&apos;ve been helping Sydney businesses build successful websites for over 13 years. Our transparent process, proven results, and ongoing support have earned us a 4.9-star rating and hundreds of satisfied clients.
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
              <Link href="/blog/seo-tips-sydney-businesses" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">
                  SEO Tips for Sydney Businesses
                </h3>
                <p className="text-gray-600 text-sm">Local SEO strategies to help your Sydney business rank higher...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Build Your Dream Website?"
        description="Partner with Sydney's trusted web design experts. Get a free consultation and quote today."
        primaryButtonText="Get Free Quote"
        primaryButtonAction="contact"
      />
    </>
  );
}
