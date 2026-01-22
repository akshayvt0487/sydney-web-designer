import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Web Design Trends to Watch in 2026 | DSIGNS Blog",
  description: "Discover the latest web design trends that will shape the digital landscape in 2026 and beyond. Expert insights from Sydney's leading web designers.",
};

export default function WebDesignTrends2026() {
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
              Web Design Trends to Watch in 2026
            </h1>
            <div className="flex items-center gap-6 text-gray-300 mb-6">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                January 15, 2026
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                8 min read
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
                src="/images/blog/web-design-trends-2026.jpg"
                alt="Web Design Trends 2026"
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
              The web design landscape is constantly evolving, and 2026 promises to bring exciting new trends that will redefine how we create and experience websites. As a leading Sydney web design agency with over 13 years of experience, we&apos;ve identified the key trends that will dominate the digital space this year.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">1. AI-Powered Personalization</h2>
            <p className="text-gray-700 mb-6">
              Artificial intelligence is revolutionizing web design by enabling hyper-personalized user experiences. Websites will adapt in real-time based on user behavior, preferences, and demographics, delivering content that resonates with each individual visitor.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">2. Immersive 3D Experiences</h2>
            <p className="text-gray-700 mb-6">
              Three-dimensional design elements are moving beyond simple visual effects. In 2026, we&apos;re seeing fully immersive 3D environments that allow users to interact with products and services in unprecedented ways. This trend is particularly valuable for e-commerce and real estate websites.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">3. Dark Mode as Standard</h2>
            <p className="text-gray-700 mb-6">
              Dark mode is no longer optional—it&apos;s expected. Modern websites must offer seamless switching between light and dark themes, with designs optimized for both modes from the ground up. This improves user comfort and accessibility while reducing eye strain.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">4. Micro-Interactions and Animations</h2>
            <p className="text-gray-700 mb-6">
              Subtle animations and micro-interactions create delightful user experiences that guide visitors through your website. From hover effects to loading animations, these small details make a significant impact on user engagement and brand perception.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">5. Voice User Interface (VUI)</h2>
            <p className="text-gray-700 mb-6">
              With the rise of voice assistants, websites are incorporating voice navigation and commands. This trend makes websites more accessible and provides alternative ways for users to interact with your content.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">6. Sustainability-Focused Design</h2>
            <p className="text-gray-700 mb-6">
              Green web design is gaining momentum. Optimized code, efficient hosting, and minimal resource usage are becoming priorities. Websites that load faster and consume less energy are better for both the environment and user experience.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">7. Advanced Typography</h2>
            <p className="text-gray-700 mb-6">
              Variable fonts and kinetic typography are pushing the boundaries of text-based design. Typography is becoming an interactive element that responds to user actions and creates memorable visual experiences.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">How to Implement These Trends</h2>
            <p className="text-gray-700 mb-6">
              While these trends are exciting, it&apos;s important to implement them strategically. Not every trend will suit every business. At DSIGNS Australia, we help Sydney businesses identify which trends align with their brand identity and business goals.
            </p>

            <div className="bg-gray-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">💡 Pro Tip:</p>
              <p className="text-gray-700">
                Focus on trends that enhance user experience and support your business objectives. A well-designed website balances aesthetics with functionality.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Conclusion</h2>
            <p className="text-gray-700 mb-6">
              2026 is set to be an exciting year for web design. By staying ahead of these trends and implementing them thoughtfully, your website can stand out in an increasingly competitive digital landscape. Whether you&apos;re planning a website redesign or building from scratch, partnering with an experienced web design agency ensures your site leverages the latest trends while maintaining timeless usability.
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
              <Link href="/blog/seo-tips-sydney-businesses" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">
                  SEO Tips for Sydney Businesses
                </h3>
                <p className="text-gray-600 text-sm">Local SEO strategies to help your Sydney business rank higher...</p>
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
        title="Ready to Redesign Your Website?"
        description="Let our expert team create a modern, trend-forward website that drives results for your business."
        primaryButtonText="Get Free Quote"
        primaryButtonAction="contact"
      />
    </>
  );
}
