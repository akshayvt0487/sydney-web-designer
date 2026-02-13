import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { generateMetadata } from "@/lib/metadata";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemas";

export const metadata = generateMetadata({
  title: "Google Ads vs Facebook Ads: Which Platform is Right for Your Business?",
  description: "Compare Google Ads and Facebook Ads to find the best advertising platform for your business. Expert analysis on costs, targeting, ROI, and when to use each platform.",
  keywords: "google ads vs facebook ads, ppc advertising, facebook advertising, google advertising, paid ads comparison, sydney advertising, digital advertising",
  canonicalUrl: "https://sydneywebdesigner.com.au/blog/google-ads-vs-facebook-ads",
  ogImage: "/images/og/blog.svg",
  type: "article",
  publishedTime: "2024-08-15",
  modifiedTime: "2024-11-12",
  author: "DSIGNS Team",
});

export default function GoogleAdsVsFacebookAdsPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Blog", url: "https://sydneywebdesigner.com.au/blog" },
    { name: "Google Ads vs Facebook Ads", url: "https://sydneywebdesigner.com.au/blog/google-ads-vs-facebook-ads" }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateArticleSchema(
          "Google Ads vs Facebook Ads: Which Platform is Right for Your Business?",
          "Compare Google Ads and Facebook Ads to find the best advertising platform for your business. Expert analysis on costs, targeting, ROI, and when to use each platform.",
          "DSIGNS Team",
          "2024-08-15",
          "2024-11-12",
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
              <i className="fas fa-bullhorn mr-1"></i>Paid Advertising
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Google Ads vs Facebook Ads: Which Platform is Right for Your Business?</h1>
            <div className="flex items-center gap-6 text-gray-300 mb-6">
              <span className="flex items-center gap-2">
                <i className="fas fa-calendar"></i>
                February 1, 2026
              </span>
              <span className="flex items-center gap-2">
                <i className="fas fa-clock"></i>
                9 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-gray-700 mb-8">
              Both Google Ads and Facebook Ads can drive impressive results, but they work in fundamentally different ways. This comprehensive guide helps Sydney businesses choose the right platform for their goals, budget, and target audience.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fab fa-google text-primary-orange mr-3"></i>Google Ads: Capture Existing Demand
            </h2>
            <p className="text-gray-700 mb-6">
              Google Ads targets people actively searching for your products or services. They have high purchase intent—they&apos;re looking for what you offer right now. This is often called &quot;pull marketing&quot; because you&apos;re pulling in customers who are already looking for you.
            </p>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2"><i className="fas fa-check-circle text-primary-orange mr-2"></i>Google Ads is Best For:</p>
              <ul className="text-gray-700 mb-0 space-y-2">
                <li><i className="fas fa-wrench text-primary-orange mr-2"></i>High-intent services (plumbers, lawyers, urgent needs)</li>
                <li><i className="fas fa-building text-primary-orange mr-2"></i>B2B lead generation and professional services</li>
                <li><i className="fas fa-map-marker-alt text-primary-orange mr-2"></i>Local businesses wanting local customers in Sydney</li>
                <li><i className="fas fa-search text-primary-orange mr-2"></i>Products people actively search for</li>
                <li><i className="fas fa-bolt text-primary-orange mr-2"></i>Immediate results and quick conversions</li>
                <li><i className="fas fa-phone text-primary-orange mr-2"></i>Businesses where phone calls are valuable leads</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-primary-navy mt-8 mb-4">
              <i className="fas fa-chart-bar text-primary-orange mr-2"></i>Google Ads Advantages:
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>High Intent:</strong> Users are actively looking for solutions</li>
              <li><strong>Massive Reach:</strong> Google processes 8.5 billion searches per day</li>
              <li><strong>Local Targeting:</strong> Perfect for &quot;near me&quot; searches in Sydney</li>
              <li><strong>Multiple Ad Formats:</strong> Search, Display, Shopping, Video (YouTube)</li>
              <li><strong>Measurable ROI:</strong> Clear attribution from search to conversion</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fab fa-facebook text-primary-orange mr-3"></i>Facebook Ads: Create and Capture Demand
            </h2>
            <p className="text-gray-700 mb-6">
              Facebook Ads (including Instagram) interrupt users with targeted messages based on interests, demographics, and behaviors. This is &quot;push marketing&quot;—you&apos;re pushing your message to people who fit your target audience profile, even if they&apos;re not actively searching for you.
            </p>
            <div className="bg-blue-50 border-l-4 border-primary-navy p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2"><i className="fas fa-check-circle text-primary-orange mr-2"></i>Facebook Ads is Best For:</p>
              <ul className="text-gray-700 mb-0 space-y-2">
                <li><i className="fas fa-shopping-bag text-primary-orange mr-2"></i>E-commerce and visual products</li>
                <li><i className="fas fa-bullhorn text-primary-orange mr-2"></i>Brand awareness campaigns</li>
                <li><i className="fas fa-heart text-primary-orange mr-2"></i>Impulse purchases and lifestyle products</li>
                <li><i className="fas fa-users text-primary-orange mr-2"></i>Targeting specific demographics precisely</li>
                <li><i className="fas fa-store text-primary-orange mr-2"></i>B2C businesses and consumer products</li>
                <li><i className="fas fa-redo text-primary-orange mr-2"></i>Remarketing to website visitors</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-primary-navy mt-8 mb-4">
              <i className="fas fa-chart-line text-primary-orange mr-2"></i>Facebook Ads Advantages:
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Precise Targeting:</strong> Target by interests, behaviors, life events, and more</li>
              <li><strong>Visual Storytelling:</strong> Perfect for brands with strong visual appeal</li>
              <li><strong>Social Proof:</strong> Likes, comments, and shares boost credibility</li>
              <li><strong>Lower CPC:</strong> Generally cheaper cost per click</li>
              <li><strong>Retargeting Power:</strong> Show ads to people who visited your site</li>
              <li><strong>Lookalike Audiences:</strong> Find new customers similar to your best customers</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-dollar-sign text-primary-orange mr-3"></i>Cost Comparison for Sydney Businesses
            </h2>
            <p className="text-gray-700 mb-6">
              Google Ads typically costs more per click ($2-$10+ for competitive Sydney keywords) but converts at higher rates due to purchase intent. Facebook Ads are cheaper per click ($0.50-$3) but may require more clicks and touchpoints to convert.
            </p>
            <div className="bg-gray-100 p-6 rounded-lg my-8">
              <h4 className="text-lg font-bold text-primary-navy mb-3"><i className="fas fa-calculator text-primary-orange mr-2"></i>Example Cost Breakdown:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-bold text-gray-800">Google Ads</p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>CPC: $5-$15</li>
                    <li>Conversion Rate: 5-10%</li>
                    <li>Cost Per Lead: $50-$300</li>
                    <li>Best for: High-value services</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-gray-800">Facebook Ads</p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>CPC: $0.80-$3</li>
                    <li>Conversion Rate: 2-5%</li>
                    <li>Cost Per Lead: $16-$150</li>
                    <li>Best for: Volume and awareness</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-crosshairs text-primary-orange mr-3"></i>Targeting Differences
            </h2>
            <p className="text-gray-700 mb-6">
              <strong><i className="fab fa-google mr-2"></i>Google Ads:</strong> Target by keywords, location (perfect for Sydney suburbs), device type, time of day, and search behavior. You&apos;re targeting intent.
            </p>
            <p className="text-gray-700 mb-6">
              <strong><i className="fab fa-facebook mr-2"></i>Facebook Ads:</strong> Target by interests, demographics, behaviors, job titles, life events, and lookalike audiences. You&apos;re targeting people who match your ideal customer profile.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">
              <i className="fas fa-lightbulb text-primary-orange mr-3"></i>Which Should Sydney Businesses Choose?
            </h2>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-3"><i className="fas fa-trophy text-primary-orange mr-2"></i>The Winning Strategy:</p>
              <p className="text-gray-700">
                Don&apos;t choose one—use both strategically. Start with Google Ads to capture high-intent searches and generate immediate leads. Then use Facebook Ads for remarketing to website visitors, building brand awareness, and reaching new audiences similar to your existing customers.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-primary-navy mt-8 mb-4">
              <i className="fas fa-route text-primary-orange mr-2"></i>Recommended Approach:
            </h3>
            <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Start with Google Ads</strong> if you have a limited budget and need immediate leads from people actively searching</li>
              <li><strong>Add Facebook Ads</strong> once you have consistent traffic to remarket to website visitors</li>
              <li><strong>Scale both platforms</strong> as you optimize and find what works for your business</li>
              <li><strong>Use Facebook for awareness</strong> and Google for conversion—they complement each other perfectly</li>
            </ol>

            <div className="bg-gray-100 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-bold text-primary-navy mb-4">
                <i className="fas fa-rocket text-primary-orange mr-2"></i>Real Sydney Business Example
              </h3>
              <p className="text-gray-700 mb-4">
                A Sydney furniture store uses Google Ads to capture people searching for &quot;modern sofa Sydney&quot; or &quot;dining tables Bondi&quot;. They get immediate sales from these high-intent searches.
              </p>
              <p className="text-gray-700">
                Simultaneously, they run Facebook Ads showing beautiful room setups to homeowners in Sydney aged 30-55 with interest in interior design. They also remarket to everyone who visited their site but didn&apos;t purchase. This multi-channel approach increased their revenue by 240% in 6 months.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Conclusion</h2>
            <p className="text-gray-700 mb-6">
              Both Google Ads and Facebook Ads have unique strengths. Google captures existing demand from high-intent searchers, while Facebook creates demand through targeted messaging. Most successful Sydney businesses use both platforms strategically, leveraging each platform&apos;s strengths to build a comprehensive digital advertising strategy that drives sustainable growth.
            </p>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-navy mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/digital-marketing-budget-planning" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">Digital Marketing Budget Planning</h3>
                <p className="text-gray-600 text-sm">Learn how to allocate your marketing spend effectively...</p>
              </Link>
              <Link href="/blog/conversion-rate-optimization-strategies" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">Conversion Rate Optimization</h3>
                <p className="text-gray-600 text-sm">Improve your advertising ROI...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Need Help with Paid Advertising?" description="Our advertising experts manage Google Ads and Facebook Ads campaigns that deliver ROI for Sydney businesses." primaryButtonText="Get Free Consultation" primaryButtonAction="contact" />
    </>
  );
}
