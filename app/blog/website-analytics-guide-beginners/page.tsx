import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { generateMetadata } from "@/lib/metadata";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemas";

export const metadata = generateMetadata({
  title: "Website Analytics Guide for Beginners: Track What Matters",
  description: "Learn how to use Google Analytics and other tools to track website performance and make data-driven decisions. Complete beginner's guide to website analytics.",
  keywords: "website analytics, google analytics guide, web analytics, track website performance, analytics for beginners, website metrics, data-driven decisions",
  canonicalUrl: "https://sydneywebdesigner.com.au/blog/website-analytics-guide-beginners",
  ogImage: "/images/og/blog.svg",
  type: "article",
  publishedTime: "2024-02-10",
  modifiedTime: "2024-10-12",
  author: "DSIGNS Team",
});

export default function WebsiteAnalyticsPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Blog", url: "https://sydneywebdesigner.com.au/blog" },
    { name: "Website Analytics Guide for Beginners", url: "https://sydneywebdesigner.com.au/blog/website-analytics-guide-beginners" }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateArticleSchema(
          "Website Analytics Guide for Beginners: Track What Matters",
          "Learn how to use Google Analytics and other tools to track website performance and make data-driven decisions. Complete beginner's guide to website analytics.",
          "DSIGNS Team",
          "2024-02-10",
          "2024-10-12",
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
              <i className="fas fa-chart-line mr-2"></i>Analytics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Website Analytics Guide for Beginners: Track What Matters</h1>
            <div className="flex items-center gap-6 text-gray-300 mb-6">
              <span className="flex items-center gap-2">
                <i className="far fa-calendar"></i>
                February 7, 2026
              </span>
              <span className="flex items-center gap-2">
                <i className="far fa-clock"></i>
                8 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-gray-700 mb-8">Website analytics show you who visits your site, what they do, and whether they convert. This guide helps Sydney business owners understand and use analytics to make better decisions.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Why Analytics Matter</h2>
            <p className="text-gray-700 mb-6">You can&apos;t improve what you don&apos;t measure. Analytics reveal what&apos;s working, what&apos;s not, and where to focus your efforts for maximum ROI.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Essential Metrics to Track</h2>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">
                <i className="fas fa-chart-bar text-primary-orange mr-2"></i>Key Metrics:
              </p>
              <ul className="text-gray-700 mb-0">
                <li><i className="fas fa-users text-primary-orange mr-2"></i><strong>Users:</strong> Number of people visiting your site</li>
                <li><i className="fas fa-mouse-pointer text-primary-orange mr-2"></i><strong>Sessions:</strong> Total visits (users can have multiple sessions)</li>
                <li><i className="fas fa-file-alt text-primary-orange mr-2"></i><strong>Pageviews:</strong> Total pages viewed</li>
                <li><i className="fas fa-sign-out-alt text-primary-orange mr-2"></i><strong>Bounce Rate:</strong> % who leave after one page</li>
                <li><i className="fas fa-clock text-primary-orange mr-2"></i><strong>Session Duration:</strong> Average time on site</li>
                <li><i className="fas fa-bullseye text-primary-orange mr-2"></i><strong>Conversion Rate:</strong> % who complete desired actions</li>
                <li><i className="fas fa-map-marker-alt text-primary-orange mr-2"></i><strong>Traffic Sources:</strong> Where visitors come from</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Google Analytics: Your Free Foundation</h2>
            <p className="text-gray-700 mb-6">Google Analytics is free, powerful, and essential for Sydney businesses. It tracks visitors, behavior, and conversions automatically.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Understanding Traffic Sources</h2>
            <ul className="text-gray-700 mb-6">
              <li><strong>Organic Search:</strong> Visitors from search engines (Google, Bing)</li>
              <li><strong>Direct:</strong> People typing your URL or using bookmarks</li>
              <li><strong>Referral:</strong> Links from other websites</li>
              <li><strong>Social:</strong> Traffic from social media platforms</li>
              <li><strong>Paid:</strong> Visitors from ads</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Set Up Goals and Conversions</h2>
            <p className="text-gray-700 mb-6">Define what success means: contact form submissions, phone calls, purchases, email signups. Track these as goals to measure what drives business results.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Track User Behavior</h2>
            <p className="text-gray-700 mb-6">See which pages are popular, where users drop off, and how they navigate your site. Use behavior flow reports to identify and fix problem areas.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Mobile vs Desktop Analytics</h2>
            <p className="text-gray-700 mb-6">Track device usage separately. If 70% of your Sydney traffic is mobile but mobile converts poorly, you know where to focus improvement efforts.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Use UTM Parameters</h2>
            <p className="text-gray-700 mb-6">Tag links in emails, social posts, and ads with UTM parameters to track exactly which campaigns drive traffic and conversions.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Create Custom Reports</h2>
            <p className="text-gray-700 mb-6">Build reports showing the metrics that matter to your business. Review weekly to spot trends and opportunities.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Don&apos;t Drown in Data</h2>
            <p className="text-gray-700 mb-6">Focus on metrics that impact business decisions. Pageviews are interesting, but conversion rate and revenue per visitor are actionable.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Take Action on Insights</h2>
            <p className="text-gray-700 mb-6">Analytics are useless without action. Use data to inform decisions: fix high-bounce pages, double down on successful traffic sources, improve conversion funnels.</p>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-navy mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/conversion-rate-optimization-strategies" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">Conversion Rate Optimization</h3>
                <p className="text-gray-600 text-sm">Use analytics to improve conversions...</p>
              </Link>
              <Link href="/blog/seo-tips-sydney-businesses" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">SEO Tips for Sydney Businesses</h3>
                <p className="text-gray-600 text-sm">Track SEO performance with analytics...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Need Help Understanding Your Analytics?" description="Our experts can set up analytics tracking and teach you how to use data to grow your Sydney business." primaryButtonText="Get Free Consultation" primaryButtonAction="contact" />
    </>
  );
}
