import type { Metadata } from "next";
import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateServiceSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Email Marketing Sydney | Email Campaign Management Services",
  description: "Professional email marketing in Sydney. Build customer relationships and drive repeat business with effective email marketing campaigns. High ROI email strategies.",
};

export default function EmailMarketingPage() {
  const service = services.find((s) => s.slug === "email-marketing")!;
  const projects = portfolioProjects.slice(0, 6);
  const reviews = googleReviews.slice(6, 9);

  const stats = [{ label: "Campaigns Managed", number: "200+" }, { label: "Avg. Open Rate", number: "32%" }, { label: "Avg. Click Rate", number: "4.5%" }, { label: "Revenue Generated", number: "$2M+" }];
  const features = [
    { title: "Campaign Strategy", description: "Strategic planning for welcome series, nurture campaigns, and promotions.", icon: "📋" },
    { title: "Email Design", description: "Mobile-responsive templates that align with your brand and drive clicks.", icon: "🎨" },
    { title: "Copywriting", description: "Compelling email copy that engages readers and drives conversions.", icon: "✍️" },
    { title: "List Management", description: "Segmentation, list growth strategies, and data hygiene best practices.", icon: "📊" },
    { title: "Automation", description: "Automated email sequences triggered by user behavior and lifecycle stages.", icon: "⚙️" },
    { title: "A/B Testing", description: "Test subject lines, content, and CTAs to optimize campaign performance.", icon: "🧪" },
  ];
  const process = [
    { step: 1, title: "Strategy & Setup", description: "Define goals, audiences, and set up email platform with proper tracking." },
    { step: 2, title: "Template Design", description: "Create branded email templates for different campaign types." },
    { step: 3, title: "Campaign Creation", description: "Write copy, design layouts, and schedule campaigns for optimal delivery." },
    { step: 4, title: "Analyze & Optimize", description: "Monitor results, A/B test elements, and continually improve performance." },
  ];
  const faqs = [
    { question: "Which email platform do you recommend?", answer: "We work with all major platforms including Mailchimp, HubSpot, ActiveCampaign, and Klaviyo. We'll recommend the best fit based on your needs, budget, and technical requirements. Each has different strengths for e-commerce, B2B, or B2C businesses." },
    { question: "How often should I email my list?", answer: "It depends on your business and content value. B2C e-commerce might send 2-3 times per week, while B2B might send weekly or biweekly. We'll test frequency with your audience and find the optimal balance between engagement and unsubscribes." },
    { question: "How do I grow my email list?", answer: "We implement multiple strategies: website pop-ups, lead magnets (ebooks, guides), content upgrades, social media promotion, and gated content. We also optimize your signup forms for maximum conversion and ensure all touchpoints capture emails." },
    { question: "What&apos;s a good email open rate?", answer: "Average open rates vary by industry but typically range from 15-25%. Our clients average 32% through strategic subject lines, sender name optimization, send time testing, and proper list hygiene. Your rate depends on audience quality and relevance." },
    { question: "Can you help with email automation?", answer: "Absolutely! We set up automated sequences including welcome series, abandoned cart recovery, post-purchase follow-ups, re-engagement campaigns, and birthday/anniversary emails. Automation helps you nurture leads and customers on autopilot." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(service.name, service.heroDescription)) }} />
      <section className="bg-gradient-navy text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary-orange/20 text-primary-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">{service.icon} {service.name}</div>
            <h1 className="text-5xl font-bold mb-6 text-white">Email Marketing That Drives Repeat Business</h1>
            <p className="text-xl text-gray-300 mb-8">Build customer relationships and drive repeat business with effective email marketing campaigns. High ROI strategies that turn subscribers into buyers.</p>
            <div className="flex flex-wrap gap-4">
              <button data-popup="contact" className="btn btn-primary">Start Email Marketing</button>
              <Link href="/portfolio" className="btn btn-white">View Our Work</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50"><div className="container"><StatsGrid stats={stats} columns={4} /></div></section>
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Complete Email Marketing Services</h2>
            <p className="text-xl text-gray-600">Everything you need for successful email campaigns.</p>
          </div>
          <div className="grid-3">{features.map((feature, index) => (<div key={index} className="card hover:shadow-card-hover transition-shadow"><div className="text-4xl mb-4">{feature.icon}</div><h3 className="text-xl font-bold mb-3">{feature.title}</h3><p className="text-gray-600">{feature.description}</p></div>))}</div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Email Marketing Process</h2>
            <p className="text-xl text-gray-600">Strategic approach to email campaigns that convert.</p>
          </div>
          <div className="grid-2 max-w-4xl mx-auto">{process.map((item) => (<div key={item.step} className="card hover:shadow-card-hover transition-shadow"><div className="flex items-start gap-4"><div className="w-12 h-12 bg-gradient-navy-orange rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">{item.step}</div><div><h3 className="text-xl font-bold mb-2">{item.title}</h3><p className="text-gray-600">{item.description}</p></div></div></div>))}</div>
        </div>
      </section>
      {projects.length > 0 && (<section className="py-20"><div className="container"><div className="text-center max-w-3xl mx-auto mb-12"><h2 className="text-4xl font-bold mb-4">Email Marketing Success Stories</h2><p className="text-xl text-gray-600">Businesses growing revenue with email campaigns.</p></div><div className="grid-3">{projects.map((project) => (<PortfolioCard key={project.id} project={project} />))}</div><div className="text-center mt-12"><Link href="/portfolio" className="btn btn-primary">View All Projects</Link></div></div></section>)}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Businesses succeeding with email marketing.</p>
          </div>
          <div className="grid-3">{reviews.map((review) => (<TestimonialCard key={review.id} review={review} />))}</div>
          <div className="text-center mt-12"><Link href="/testimonials" className="btn btn-primary">Read More Reviews</Link></div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Email Marketing Pricing</h2>
            <p className="text-xl text-gray-600">Flexible packages for ongoing email campaigns.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="card border-2 border-primary-orange">
              <div className="text-center mb-8">
                <div className="text-primary-orange font-bold mb-2">Most Popular</div>
                <h3 className="text-3xl font-bold mb-2">Email Marketing Package</h3>
                <div className="text-5xl font-bold text-primary-orange mb-4">$800<span className="text-xl text-gray-600">/month</span></div>
                <p className="text-gray-600">Complete email campaign management</p>
              </div>
              <div className="grid-2 gap-4 mb-8">
                {['4 email campaigns per month', 'Email template design', 'Copywriting & design', 'List segmentation', 'Send time optimization', 'A/B testing', 'Monthly performance reports', 'Strategy consultation'].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center"><button data-popup="contact" className="btn btn-primary w-full sm:w-auto">Get Started</button></div>
            </div>
            <p className="text-center text-gray-600 mt-6">Need automation setup? <button data-popup="contact" className="text-primary-orange font-semibold hover:underline">Contact us for custom packages</button></p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about email marketing services.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">{faqs.map((faq, index) => (<div key={index} className="card"><h3 className="text-lg font-bold mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}</div>
        </div>
      </section>
      <CTASection title="Ready to Start Email Marketing?" description="Build customer relationships and drive repeat business with strategic email campaigns." primaryButtonText="Start Email Marketing" primaryButtonAction="contact" />
    </>
  );
}
