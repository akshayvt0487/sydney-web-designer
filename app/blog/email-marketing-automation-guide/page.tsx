import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { generateMetadata } from "@/lib/metadata";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemas";

export const metadata = generateMetadata({
  title: "Email Marketing Automation: Save Time and Boost Engagement",
  description: "Learn how to implement email marketing automation to nurture leads and increase sales. Complete guide to automated campaigns, workflows, and personalization.",
  keywords: "email marketing automation, email automation guide, automated email campaigns, email workflows, marketing automation, lead nurturing, sydney email marketing",
  canonicalUrl: "https://sydneywebdesigner.com.au/blog/email-marketing-automation-guide",
  ogImage: "/images/og/blog.svg",
  type: "article",
  publishedTime: "2024-08-22",
  modifiedTime: "2024-11-15",
  author: "DSIGNS Team",
});

export default function EmailMarketingAutomationPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Blog", url: "https://sydneywebdesigner.com.au/blog" },
    { name: "Email Marketing Automation Guide", url: "https://sydneywebdesigner.com.au/blog/email-marketing-automation-guide" }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateArticleSchema(
          "Email Marketing Automation: Save Time and Boost Engagement",
          "Learn how to implement email marketing automation to nurture leads and increase sales. Complete guide to automated campaigns, workflows, and personalization.",
          "DSIGNS Team",
          "2024-08-22",
          "2024-11-15",
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
              <i className="fas fa-envelope-open-text mr-1"></i>Email Marketing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Email Marketing Automation: Save Time and Boost Engagement</h1>
            <div className="flex items-center gap-6 text-gray-300 mb-6">
              <span className="flex items-center gap-2">
                <i className="fas fa-calendar"></i>
                January 30, 2026
              </span>
              <span className="flex items-center gap-2">
                <i className="fas fa-clock"></i>
                10 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-gray-700 mb-8">
              Email marketing automation delivers $42 for every $1 spent—the highest ROI of any marketing channel. This guide shows Sydney businesses how to implement automation that nurtures leads and drives sales while you sleep.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-question-circle text-primary-orange mr-3"></i>What is Email Marketing Automation?
            </h2>
            <p className="text-gray-700 mb-6">
              Email automation sends targeted messages based on triggers like signups, purchases, or browsing behavior. It personalizes communication at scale without manual effort, allowing you to nurture thousands of leads as if you were personally emailing each one.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-project-diagram text-primary-orange mr-3"></i>Essential Automation Workflows
            </h2>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2"><i className="fas fa-list-check text-primary-orange mr-2"></i>Must-Have Automations:</p>
              <ul className="text-gray-700 mb-0 space-y-2">
                <li><i className="fas fa-hand-wave text-primary-orange mr-2"></i><strong>Welcome Series:</strong> 3-5 emails introducing new subscribers to your business and building the relationship</li>
                <li><i className="fas fa-shopping-cart text-primary-orange mr-2"></i><strong>Cart Abandonment:</strong> Recover 10-30% of abandoned carts with timely reminders</li>
                <li><i className="fas fa-gift text-primary-orange mr-2"></i><strong>Post-Purchase:</strong> Thank customers, request reviews, and recommend related products</li>
                <li><i className="fas fa-seedling text-primary-orange mr-2"></i><strong>Lead Nurturing:</strong> Guide prospects through the buying journey with educational content</li>
                <li><i className="fas fa-user-clock text-primary-orange mr-2"></i><strong>Re-engagement:</strong> Win back inactive subscribers before they forget about you</li>
                <li><i className="fas fa-birthday-cake text-primary-orange mr-2"></i><strong>Birthday/Anniversary:</strong> Personalized offers on special dates to increase loyalty</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-users text-primary-orange mr-3"></i>1. Build Your Email List
            </h2>
            <p className="text-gray-700 mb-6">
              You can&apos;t automate without subscribers. Capture emails through website popups, lead magnets (free guides, checklists), content upgrades, checkout processes, and social media campaigns. Always provide value in exchange for contact information.
            </p>
            <div className="bg-blue-50 border-l-4 border-primary-navy p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2"><i className="fas fa-lightbulb text-primary-orange mr-2"></i>List Building Tips:</p>
              <ul className="text-gray-700 mb-0">
                <li>Offer high-value lead magnets relevant to your audience</li>
                <li>Use exit-intent popups to capture leaving visitors</li>
                <li>Add email signup to your checkout process</li>
                <li>Promote email list on all social media channels</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-users-cog text-primary-orange mr-3"></i>2. Segment Your Audience
            </h2>
            <p className="text-gray-700 mb-6">
              Send relevant content by segmenting subscribers by behavior, demographics, purchase history, engagement level, and interests. Segmented campaigns have 14.31% higher open rates and 100.95% higher click rates than non-segmented campaigns.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-user-tag text-primary-orange mr-3"></i>3. Personalize Beyond Names
            </h2>
            <p className="text-gray-700 mb-6">
              Use dynamic content based on past purchases, browsing behavior, location, and stage in customer journey for maximum relevance. Show product recommendations based on previous purchases, reference their location for local events, and adjust messaging based on where they are in the buying process.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-clock text-primary-orange mr-3"></i>4. Optimize Send Times
            </h2>
            <p className="text-gray-700 mb-6">
              Test different days and times. For Sydney businesses, Tuesday-Thursday 9-11am and 1-3pm typically perform well. However, your audience may differ, so always test and optimize based on your data.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-heading text-primary-orange mr-3"></i>5. Write Compelling Subject Lines
            </h2>
            <p className="text-gray-700 mb-6">
              47% of emails are opened based on subject line alone. Keep them short (40-50 characters), create curiosity, personalize when possible, and avoid spam triggers. A/B test subject lines to find what resonates with your audience.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Use numbers and specifics (e.g., &quot;5 Ways to Save $500&quot;)</li>
              <li>Create urgency (e.g., &quot;Last Chance: Sale Ends Tonight&quot;)</li>
              <li>Ask questions (e.g., &quot;Ready to Double Your Traffic?&quot;)</li>
              <li>Personalize (e.g., &quot;Sarah, Your Sydney Marketing Guide is Here&quot;)</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-mobile-alt text-primary-orange mr-3"></i>6. Mobile-First Design
            </h2>
            <p className="text-gray-700 mb-6">
              Over 60% of emails are opened on mobile devices. Use single-column layouts, large buttons (at least 44x44 pixels), readable font sizes (14pt minimum), and ensure text is readable without zooming. Test on multiple devices before sending.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-flask text-primary-orange mr-3"></i>7. A/B Test Everything
            </h2>
            <p className="text-gray-700 mb-6">
              Test subject lines, send times, content, CTAs, layouts, and personalization. Small improvements compound into significant results over time. Even a 1% improvement in conversion rate can mean thousands in additional revenue.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-chart-line text-primary-orange mr-3"></i>8. Measure and Improve
            </h2>
            <div className="bg-gray-100 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2"><i className="fas fa-chart-bar text-primary-orange mr-2"></i>Key Metrics to Track:</p>
              <ul className="text-gray-700 mb-0 space-y-1">
                <li><strong>Open Rate:</strong> 15-25% is good for most industries</li>
                <li><strong>Click Rate:</strong> 2-5% is average, 8%+ is excellent</li>
                <li><strong>Conversion Rate:</strong> Percentage who complete desired action</li>
                <li><strong>Unsubscribe Rate:</strong> Under 0.5% is healthy</li>
                <li><strong>Revenue Per Email:</strong> Ultimate measure of success</li>
                <li><strong>List Growth Rate:</strong> Are you gaining more subscribers than you lose?</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-tools text-primary-orange mr-3"></i>Recommended Tools for Sydney Businesses
            </h2>
            <ul className="text-gray-700 mb-6 space-y-3">
              <li><strong><i className="fas fa-envelope text-primary-orange mr-2"></i>Mailchimp:</strong> Great for beginners, free tier available, easy to use interface</li>
              <li><strong><i className="fas fa-bolt text-primary-orange mr-2"></i>ActiveCampaign:</strong> Powerful automation, ideal for growing businesses, advanced segmentation</li>
              <li><strong><i className="fas fa-rocket text-primary-orange mr-2"></i>HubSpot:</strong> All-in-one platform for larger businesses, includes CRM</li>
              <li><strong><i className="fas fa-pen text-primary-orange mr-2"></i>ConvertKit:</strong> Perfect for content creators and bloggers</li>
              <li><strong><i className="fas fa-shopping-bag text-primary-orange mr-2"></i>Klaviyo:</strong> Best for e-commerce, deep integration with online stores</li>
            </ul>

            <div className="bg-gray-100 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-bold text-primary-navy mb-4">
                <i className="fas fa-lightbulb text-primary-orange mr-2"></i>Start Simple, Scale Smart
              </h3>
              <p className="text-gray-700 mb-4">
                Begin with a welcome series and one or two other automations. As you master these, add more sophisticated workflows. The key is consistency and relevance, not complexity.
              </p>
              <p className="text-gray-700">
                Many businesses try to implement every automation at once and get overwhelmed. Start with the fundamentals, measure results, and expand strategically.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Conclusion</h2>
            <p className="text-gray-700 mb-6">
              Email marketing automation is one of the most powerful tools in your digital marketing arsenal. When implemented correctly, it nurtures leads, recovers lost sales, and builds lasting customer relationships—all while you focus on other aspects of your business. The key is to start simple, test continuously, and always provide value to your subscribers.
            </p>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-navy mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/content-marketing-strategy-guide" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">Content Marketing Strategy Guide</h3>
                <p className="text-gray-600 text-sm">Build authority and drive organic traffic with content...</p>
              </Link>
              <Link href="/blog/conversion-rate-optimization-strategies" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">Conversion Rate Optimization Strategies</h3>
                <p className="text-gray-600 text-sm">Turn more visitors into customers...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Need Help with Email Marketing?" description="Our marketing experts can set up automated email campaigns that nurture leads and drive sales." primaryButtonText="Get Free Consultation" primaryButtonAction="contact" />
    </>
  );
}
