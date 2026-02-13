import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Digital Marketing Budget Planning Guide for Sydney Businesses | Sydney Web Designer",
  description: "Learn how to plan and allocate your digital marketing budget effectively. Expert guidance for Sydney businesses on maximizing ROI from marketing spend.",
};

export default function DigitalMarketingBudgetPage() {
  return (
    <>
      <section className="bg-[#1e293b] text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-primary-orange hover:underline mb-4 inline-block">← Back to Blog</Link>
            <span className="inline-block px-3 py-1 bg-primary-orange text-white text-xs rounded-full mb-4">Digital Marketing</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Digital Marketing Budget Planning: How to Allocate Your Spend</h1>
            <div className="flex items-center gap-6 text-white mb-6">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                January 28, 2026
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                8 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-gray-700 mb-8">
              Planning your digital marketing budget doesn&apos;t have to be complicated. This guide shows Sydney businesses how to allocate marketing spend effectively for maximum ROI.
            </p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">How Much Should You Spend?</h2>
            <p className="text-gray-700 mb-6">Most small to medium Sydney businesses should allocate 7-12% of revenue to marketing. Within that, 45-50% should go to digital channels.</p>
            <ul className="text-gray-700 mb-6">
              <li>Startups and new businesses: 12-20% of revenue</li>
              <li>Established businesses: 6-9% of revenue</li>
              <li>Growth-focused businesses: 10-14% of revenue</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Budget Allocation by Channel</h2>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">Recommended Distribution:</p>
              <ul className="text-gray-700 mb-0">
                <li>Website & SEO: 25-30%</li>
                <li>Paid Advertising: 20-30%</li>
                <li>Content Marketing: 15-20%</li>
                <li>Social Media: 10-15%</li>
                <li>Email Marketing: 5-10%</li>
                <li>Tools & Technology: 10-15%</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Prioritize Based on Goals</h2>
            <p className="text-gray-700 mb-6">Your goals should drive budget allocation. If lead generation is priority #1, allocate more to proven conversion channels.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Track ROI Constantly</h2>
            <p className="text-gray-700 mb-6">Monitor which channels deliver results. Shift budget from underperforming to high-performing channels quarterly.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Start Small and Scale</h2>
            <p className="text-gray-700 mb-6">Test channels with small budgets, measure results, then scale what works. This minimizes risk while identifying opportunities.</p>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-navy mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/seo-tips-sydney-businesses" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">SEO Tips for Sydney Businesses</h3>
                <p className="text-gray-600 text-sm">Learn proven SEO strategies to improve your Google rankings...</p>
              </Link>
              <Link href="/blog/content-marketing-strategy-guide" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">Content Marketing Strategy Guide</h3>
                <p className="text-gray-600 text-sm">Build authority and drive organic traffic with content...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Need Help Planning Your Digital Marketing Budget?" description="Our marketing experts can help you create a data-driven budget that maximizes ROI." primaryButtonText="Get Free Consultation" primaryButtonAction="contact" />
    </>
  );
}
