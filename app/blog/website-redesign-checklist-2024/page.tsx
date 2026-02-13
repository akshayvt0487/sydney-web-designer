import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Website Redesign Checklist 2026: Complete Guide | Sydney Web Designer",
  description: "Planning a website redesign? This comprehensive checklist ensures your Sydney business website redesign project succeeds on time and budget.",
};

export default function WebsiteRedesignChecklistPage() {
  return (
    <>
      <section className="bg-primary-navy text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-primary-orange hover:underline mb-4 inline-block">
              <i className="fas fa-arrow-left mr-2"></i>Back to Blog
            </Link>
            <span className="inline-block px-3 py-1 bg-primary-orange text-white text-xs rounded-full mb-4">
              <i className="fas fa-paint-brush mr-2"></i>Web Design
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Website Redesign Checklist 2026: Everything You Need to Know</h1>
            <div className="flex items-center gap-6 text-gray-300 mb-6">
              <span className="flex items-center gap-2">
                <i className="far fa-calendar"></i>
                February 9, 2026
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
            <p className="lead text-xl text-gray-700 mb-8">A website redesign is a major investment. This comprehensive checklist ensures your Sydney business website redesign delivers results while staying on time and budget.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Before You Start</h2>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">
                <i className="fas fa-clipboard-check text-primary-orange mr-2"></i>Pre-Redesign Checklist:
              </p>
              <ul className="text-gray-700 mb-0">
                <li><i className="fas fa-check text-green-600 mr-2"></i>Define clear goals (increase conversions, improve UX, rebrand)</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Audit current website performance</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Analyze competitor websites</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Survey customers about current site</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Review analytics to identify problems</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Set realistic budget and timeline</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Document what&apos;s working (keep the good stuff)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Planning Phase</h2>
            <ul className="text-gray-700 mb-6">
              <li><strong>Define target audience:</strong> Who are you designing for?</li>
              <li><strong>Map user journeys:</strong> How should visitors navigate?</li>
              <li><strong>Create sitemap:</strong> Plan your site structure</li>
              <li><strong>Plan content strategy:</strong> What content do you need?</li>
              <li><strong>Choose technology stack:</strong> Platform, CMS, frameworks</li>
              <li><strong>Plan SEO migration:</strong> Preserve search rankings</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Design Phase</h2>
            <ul className="text-gray-700 mb-6">
              <li>Create wireframes for key pages</li>
              <li>Design mockups matching your brand</li>
              <li>Ensure mobile-first responsive design</li>
              <li>Plan for accessibility (WCAG compliance)</li>
              <li>Get stakeholder approval before development</li>
              <li>Create style guide for consistency</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Development Phase</h2>
            <ul className="text-gray-700 mb-6">
              <li>Set up development environment</li>
              <li>Build responsive templates</li>
              <li>Implement CMS for easy content management</li>
              <li>Optimize for speed (compress images, minify code)</li>
              <li>Ensure cross-browser compatibility</li>
              <li>Add analytics tracking</li>
              <li>Implement security measures (SSL, backups)</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Content Migration</h2>
            <ul className="text-gray-700 mb-6">
              <li>Audit existing content (keep, improve, or delete)</li>
              <li>Update and optimize content for SEO</li>
              <li>Create new content as needed</li>
              <li>Optimize images and media</li>
              <li>Set up proper URL redirects (301 redirects)</li>
              <li>Maintain URL structure where possible</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">SEO Considerations</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">
                <i className="fas fa-exclamation-triangle text-red-500 mr-2"></i>Critical: Protect Your SEO!
              </p>
              <ul className="text-gray-700 mb-0">
                <li><i className="fas fa-shield-alt text-red-500 mr-2"></i>Set up 301 redirects for all changed URLs</li>
                <li><i className="fas fa-shield-alt text-red-500 mr-2"></i>Maintain or improve meta titles and descriptions</li>
                <li><i className="fas fa-shield-alt text-red-500 mr-2"></i>Keep heading structure optimized</li>
                <li><i className="fas fa-shield-alt text-red-500 mr-2"></i>Ensure fast page load times</li>
                <li><i className="fas fa-shield-alt text-red-500 mr-2"></i>Maintain internal linking structure</li>
                <li><i className="fas fa-shield-alt text-red-500 mr-2"></i>Update XML sitemap</li>
                <li><i className="fas fa-shield-alt text-red-500 mr-2"></i>Keep content and keywords intact</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Testing Phase</h2>
            <ul className="text-gray-700 mb-6">
              <li>Test on all major browsers (Chrome, Firefox, Safari, Edge)</li>
              <li>Test on mobile devices (iOS, Android)</li>
              <li>Check all forms and interactive elements</li>
              <li>Verify all links work</li>
              <li>Test page load speeds</li>
              <li>Check accessibility with screen readers</li>
              <li>Review analytics and tracking</li>
              <li>Get feedback from real users</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Pre-Launch Checklist</h2>
            <ul className="text-gray-700 mb-6">
              <li>Backup old website completely</li>
              <li>Set up 301 redirects</li>
              <li>Test contact forms and submission emails</li>
              <li>Update Google Search Console</li>
              <li>Submit new sitemap</li>
              <li>Verify Google Analytics tracking</li>
              <li>Test checkout if e-commerce</li>
              <li>Prepare launch announcement</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Post-Launch</h2>
            <ul className="text-gray-700 mb-6">
              <li>Monitor for broken links and errors</li>
              <li>Check analytics for unusual drops</li>
              <li>Track search rankings</li>
              <li>Gather user feedback</li>
              <li>Make quick fixes as needed</li>
              <li>Document performance improvements</li>
              <li>Plan ongoing optimization</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Common Redesign Mistakes to Avoid</h2>
            <ul className="text-gray-700 mb-6">
              <li>Skipping SEO planning (can destroy rankings)</li>
              <li>Not testing thoroughly before launch</li>
              <li>Forgetting mobile users</li>
              <li>Removing content that ranks well</li>
              <li>Ignoring page speed</li>
              <li>Not planning for content migration</li>
              <li>Launching without backup plan</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Timeline Expectations</h2>
            <p className="text-gray-700 mb-6">For most Sydney small business websites:</p>
            <ul className="text-gray-700 mb-6">
              <li>Small site (5-10 pages): 4-8 weeks</li>
              <li>Medium site (10-30 pages): 8-12 weeks</li>
              <li>Large site (30+ pages): 12-20 weeks</li>
              <li>E-commerce: 12-24 weeks depending on complexity</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Get Professional Help</h2>
            <p className="text-gray-700 mb-6">A website redesign is complex. Consider hiring experienced Sydney web designers who understand SEO, UX, and technical requirements. The investment pays for itself through better results and fewer mistakes.</p>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-navy mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/web-design-trends-2026" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">Web Design Trends 2026</h3>
                <p className="text-gray-600 text-sm">Discover modern design trends for your redesign...</p>
              </Link>
              <Link href="/blog/seo-tips-sydney-businesses" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">SEO Tips for Sydney Businesses</h3>
                <p className="text-gray-600 text-sm">Protect and improve SEO during redesign...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Planning a Website Redesign?" description="Our experienced team manages complete website redesigns for Sydney businesses, delivering modern sites that drive results." primaryButtonText="Get Free Quote" primaryButtonAction="contact" />
    </>
  );
}
