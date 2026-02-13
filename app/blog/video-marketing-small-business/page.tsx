import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Video Marketing for Small Business: Complete Guide | Sydney Web Designer",
  description: "Learn how to use video marketing to engage customers and grow your Sydney business. Practical tips for creating effective video content.",
};

export default function VideoMarketingPage() {
  return (
    <>
      <section className="bg-primary-navy text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-primary-orange hover:underline mb-4 inline-block">
              <i className="fas fa-arrow-left mr-2"></i>Back to Blog
            </Link>
            <span className="inline-block px-3 py-1 bg-primary-orange text-white text-xs rounded-full mb-4">
              <i className="fas fa-video mr-2"></i>Video Marketing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Video Marketing for Small Business: Drive Engagement and Sales</h1>
            <div className="flex items-center gap-6 text-gray-300 mb-6">
              <span className="flex items-center gap-2">
                <i className="far fa-calendar"></i>
                February 6, 2026
              </span>
              <span className="flex items-center gap-2">
                <i className="far fa-clock"></i>
                7 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-gray-700 mb-8">Video content generates 1200% more shares than text and images combined. For Sydney small businesses, video marketing is no longer optional—it&apos;s essential for engaging customers and standing out online.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Why Video Marketing Works</h2>
            <p className="text-gray-700 mb-6">86% of businesses use video as a marketing tool because it works. Video builds trust, explains complex products simply, and keeps audiences engaged longer than any other content format.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Types of Videos for Small Business</h2>
            <ul className="text-gray-700 mb-6">
              <li><strong>Explainer Videos:</strong> Show how your product/service works</li>
              <li><strong>Customer Testimonials:</strong> Build trust with social proof</li>
              <li><strong>Behind-the-Scenes:</strong> Humanize your brand</li>
              <li><strong>Product Demonstrations:</strong> Show features and benefits</li>
              <li><strong>How-To Tutorials:</strong> Provide value and establish expertise</li>
              <li><strong>Company Culture:</strong> Attract customers and employees</li>
              <li><strong>Live Videos:</strong> Real-time engagement on social platforms</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Keep Videos Short and Focused</h2>
            <p className="text-gray-700 mb-6">Attention spans are short. Aim for:</p>
            <ul className="text-gray-700 mb-6">
              <li>Social media: 15-60 seconds</li>
              <li>Explainer videos: 60-90 seconds</li>
              <li>Product demos: 2-3 minutes</li>
              <li>In-depth tutorials: 5-10 minutes</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">You Don&apos;t Need Expensive Equipment</h2>
            <p className="text-gray-700 mb-6">Modern smartphones shoot great video. Start with your phone, good lighting, and clear audio. Invest in better equipment as your video marketing grows.</p>

            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">
                <i className="fas fa-lightbulb text-primary-orange mr-2"></i>Essential Equipment for Beginners:
              </p>
              <ul className="text-gray-700 mb-0">
                <li><i className="fas fa-check text-green-600 mr-2"></i>Smartphone with good camera</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Tripod for steady shots</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>External microphone for clear audio</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Ring light or natural lighting</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Free editing software (iMovie, DaVinci Resolve)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Optimize for Silent Viewing</h2>
            <p className="text-gray-700 mb-6">85% of Facebook videos are watched without sound. Add captions, use text overlays, and ensure your message works visually without audio.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Hook Viewers in 3 Seconds</h2>
            <p className="text-gray-700 mb-6">Start with a compelling hook—visual or verbal—that captures attention immediately. Front-load your value proposition.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Include Strong Calls-to-Action</h2>
            <p className="text-gray-700 mb-6">Tell viewers exactly what to do next: visit your website, call for a quote, subscribe to your channel, or make a purchase.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Optimize for SEO</h2>
            <p className="text-gray-700 mb-6">Video SEO improves discoverability. Use keyword-rich titles, detailed descriptions, relevant tags, and include transcripts for search engines to index.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Leverage Multiple Platforms</h2>
            <p className="text-gray-700 mb-6">Repurpose videos across platforms: YouTube for searchability, Facebook for reach, Instagram for engagement, LinkedIn for B2B, and your website for conversions.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Measure Performance</h2>
            <p className="text-gray-700 mb-6">Track views, watch time, engagement rate, click-through rate, and conversions. Use insights to improve future videos.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Stay Consistent</h2>
            <p className="text-gray-700 mb-6">Create a video content calendar. Regular posting builds audiences and improves results over time. Start with one video per week and scale up.</p>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-navy mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/social-media-marketing-sydney-businesses" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">Social Media Marketing for Sydney Businesses</h3>
                <p className="text-gray-600 text-sm">Build engaged social media communities...</p>
              </Link>
              <Link href="/blog/content-marketing-strategy-guide" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">Content Marketing Strategy Guide</h3>
                <p className="text-gray-600 text-sm">Create content that drives results...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Need Professional Video Marketing?" description="We create compelling video content that engages audiences and drives results for Sydney businesses." primaryButtonText="Get Free Consultation" primaryButtonAction="contact" />
    </>
  );
}
