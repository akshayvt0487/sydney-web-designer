import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { generateMetadata } from "@/lib/metadata";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemas";

export const metadata = generateMetadata({
  title: "Website Speed Optimization: Make Your Sydney Site Lightning Fast",
  description: "Learn how to optimize your website speed for better user experience and SEO. Practical tips to improve page load times, Core Web Vitals, and boost conversions.",
  keywords: "website speed optimization, page speed, site performance, core web vitals, website loading time, improve website speed, page load optimization",
  canonicalUrl: "https://sydneywebdesigner.com.au/blog/website-speed-optimization-tips",
  ogImage: "/images/og/blog.svg",
  type: "article",
  publishedTime: "2024-03-22",
  modifiedTime: "2024-09-15",
  author: "DSIGNS Team",
});

export default function WebsiteSpeedOptimizationPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Blog", url: "https://sydneywebdesigner.com.au/blog" },
    { name: "Website Speed Optimization Tips", url: "https://sydneywebdesigner.com.au/blog/website-speed-optimization-tips" }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateArticleSchema(
          "Website Speed Optimization: Make Your Sydney Site Lightning Fast",
          "Learn how to optimize your website speed for better user experience and SEO. Practical tips to improve page load times, Core Web Vitals, and boost conversions.",
          "DSIGNS Team",
          "2024-03-22",
          "2024-09-15",
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
              <i className="fas fa-tachometer-alt mr-2"></i>Performance
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Website Speed Optimization: Make Your Sydney Site Lightning Fast</h1>
            <div className="flex items-center gap-6 text-gray-300 mb-6">
              <span className="flex items-center gap-2">
                <i className="far fa-calendar"></i>
                February 11, 2026
              </span>
              <span className="flex items-center gap-2">
                <i className="far fa-clock"></i>
                9 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-gray-700 mb-8">Website speed directly impacts user experience, conversions, and SEO. This guide shows Sydney businesses how to make their websites load faster and perform better.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Why Speed Matters</h2>
            <ul className="text-gray-700 mb-6">
              <li>53% of mobile users abandon sites taking over 3 seconds to load</li>
              <li>1-second delay can reduce conversions by 7%</li>
              <li>Speed is a Google ranking factor</li>
              <li>Faster sites earn more revenue and engagement</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">1. Optimize Images</h2>
            <p className="text-gray-700 mb-6">Images are usually the biggest performance bottleneck.</p>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">
                <i className="fas fa-image text-primary-orange mr-2"></i>Image Optimization Checklist:
              </p>
              <ul className="text-gray-700 mb-0">
                <li><i className="fas fa-check text-green-600 mr-2"></i>Compress images before uploading (TinyPNG, ImageOptim)</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Use modern formats (WebP instead of JPEG/PNG)</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Resize images to display size (don&apos;t use CSS to resize)</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Implement lazy loading for below-fold images</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Use appropriate image dimensions</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Consider SVG for logos and icons</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">2. Minimize HTTP Requests</h2>
            <p className="text-gray-700 mb-6">Each file requires a separate request. Reduce requests by combining files, using CSS sprites, limiting plugins, removing unnecessary scripts, and inlining critical CSS.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">3. Enable Browser Caching</h2>
            <p className="text-gray-700 mb-6">Caching stores static files locally so returning visitors load pages faster. Set appropriate cache expiration times for different file types.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">4. Use a Content Delivery Network (CDN)</h2>
            <p className="text-gray-700 mb-6">CDNs serve content from servers closest to users. For Sydney businesses, CDNs improve speed for both local and international visitors. Popular options: Cloudflare, BunnyCDN, KeyCDN.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">5. Minify CSS, JavaScript, and HTML</h2>
            <p className="text-gray-700 mb-6">Minification removes unnecessary characters (spaces, comments) reducing file sizes. Use build tools or plugins to automatically minify code.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">6. Choose Quality Hosting</h2>
            <p className="text-gray-700 mb-6">Cheap hosting = slow speeds. Invest in quality Australian hosting with SSD storage, adequate resources, server-level caching, and good uptime guarantees.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">7. Reduce Server Response Time</h2>
            <p className="text-gray-700 mb-6">Aim for server response under 200ms. Improve by optimizing database queries, using server-side caching, upgrading hosting if necessary, and using PHP 8+ for WordPress.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">8. Eliminate Render-Blocking Resources</h2>
            <p className="text-gray-700 mb-6">JavaScript and CSS can block page rendering. Defer non-critical JavaScript, inline critical CSS, load scripts asynchronously, and remove unused CSS/JS.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">9. Limit Plugins and Scripts</h2>
            <p className="text-gray-700 mb-6">Each plugin adds weight. Audit regularly, delete unused plugins, combine functionality where possible, and choose lightweight alternatives.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">10. Optimize Database</h2>
            <p className="text-gray-700 mb-6">For WordPress and other database-driven sites: clean up revisions and drafts, remove spam comments, optimize database tables, limit post revisions, and use caching.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">11. Enable Gzip Compression</h2>
            <p className="text-gray-700 mb-6">Gzip compresses files before sending to browsers, reducing transfer size by 50-70%. Most quality hosts enable this by default.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">12. Implement Lazy Loading</h2>
            <p className="text-gray-700 mb-6">Lazy loading defers loading of below-the-fold content until users scroll. Apply to images, videos, and iframes for faster initial page load.</p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">
                <i className="fas fa-tools text-green-600 mr-2"></i>Speed Testing Tools:
              </p>
              <ul className="text-gray-700 mb-0">
                <li><i className="fab fa-google text-primary-orange mr-2"></i><strong>Google PageSpeed Insights:</strong> Performance scores and recommendations</li>
                <li><i className="fas fa-chart-line text-orange-600 mr-2"></i><strong>GTmetrix:</strong> Detailed performance reports</li>
                <li><i className="fas fa-stopwatch text-green-600 mr-2"></i><strong>Pingdom:</strong> Speed tests from multiple locations</li>
                <li><i className="fas fa-globe text-purple-600 mr-2"></i><strong>WebPageTest:</strong> Advanced testing options</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Mobile Speed Matters Most</h2>
            <p className="text-gray-700 mb-6">Most Sydney visitors use mobile. Test mobile speed separately and optimize specifically for mobile: use responsive images, minimize pop-ups, reduce font sizes, simplify navigation.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Set Performance Budgets</h2>
            <p className="text-gray-700 mb-6">Define limits for page weight, requests, and load time. Monitor regularly and take action when budgets are exceeded. Aim for sub-3-second load times on mobile.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Monitor Continuously</h2>
            <p className="text-gray-700 mb-6">Speed optimization isn&apos;t one-time. Monitor performance regularly, test after major updates, track Core Web Vitals in Google Search Console, and optimize continuously.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Start Optimizing Today</h2>
            <p className="text-gray-700 mb-6">Begin with image optimization and caching—the biggest wins. Then tackle other improvements systematically. Even small speed improvements significantly impact user experience and conversions.</p>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-navy mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/website-hosting-guide-australia" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">Website Hosting Guide</h3>
                <p className="text-gray-600 text-sm">Choose fast hosting for your Sydney business...</p>
              </Link>
              <Link href="/blog/seo-tips-sydney-businesses" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">SEO Tips for Sydney Businesses</h3>
                <p className="text-gray-600 text-sm">Speed optimization improves SEO rankings...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Need Help Speeding Up Your Website?" description="Our performance experts can optimize your Sydney business website for lightning-fast load times." primaryButtonText="Get Speed Audit" primaryButtonAction="contact" />
    </>
  );
}
