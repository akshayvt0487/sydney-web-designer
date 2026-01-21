import type { Metadata } from "next";
import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateServiceSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Content Marketing Sydney | Strategic Content Creation Services",
  description: "Professional content marketing in Sydney. Create valuable content that establishes authority and drives customer action. Blog writing, video content, and more.",
};

export default function ContentMarketingPage() {
  const service = services.find((s) => s.slug === "content-marketing")!;
  const projects = portfolioProjects.slice(0, 6);
  const reviews = googleReviews.slice(3, 6);

  const stats = [{ label: "Content Pieces", number: "1200+" }, { label: "Years Experience", number: "13+" }, { label: "Avg. Traffic Increase", number: "320%" }, { label: "Client Retention", number: "92%" }];
  const features = [
    { title: "Blog Writing", description: "SEO-optimized blog posts that educate audience and drive organic traffic.", icon: "✍️" },
    { title: "Content Strategy", description: "Comprehensive strategy aligned with business goals and customer journey.", icon: "📋" },
    { title: "Video Content", description: "Engaging video content for social media, YouTube, and website.", icon: "🎥" },
    { title: "Ebooks & Guides", description: "In-depth resources that establish authority and generate leads.", icon: "📚" },
    { title: "Case Studies", description: "Compelling success stories that demonstrate your value to prospects.", icon: "📊" },
    { title: "Email Newsletters", description: "Regular newsletters that keep your audience engaged and informed.", icon: "📧" },
  ];
  const process = [
    { step: 1, title: "Content Audit", description: "Analyze existing content and identify gaps and opportunities." },
    { step: 2, title: "Strategy Development", description: "Create content plan aligned with SEO, audience needs, and business goals." },
    { step: 3, title: "Content Creation", description: "Produce high-quality content including writing, design, and video production." },
    { step: 4, title: "Distribution & Analysis", description: "Publish content, promote across channels, and measure performance." },
  ];
  const faqs = [
    { question: "What types of content do you create?", answer: "We create blog posts, articles, ebooks, white papers, case studies, infographics, video scripts, social media content, email newsletters, and website copy. We'll recommend the best content types based on your audience and goals." },
    { question: "How often should I publish new content?", answer: "Consistency matters more than volume. We typically recommend 2-4 blog posts per month minimum, plus regular social content. The ideal frequency depends on your resources, industry competitiveness, and goals. We'll develop a sustainable content calendar." },
    { question: "Do you handle SEO for content?", answer: "Yes! All our content is created with SEO best practices including keyword research, optimized headlines, meta descriptions, internal linking, and proper formatting. Content marketing and SEO work hand-in-hand for maximum organic visibility." },
    { question: "How long before content marketing shows results?", answer: "Content marketing is a long-term strategy. You'll typically see increased traffic within 3-4 months and meaningful lead generation within 6-12 months. The compounding effect means results accelerate over time as your content library grows." },
    { question: "Can you write about technical or specialized topics?", answer: "Yes! We interview your subject matter experts and conduct research to understand technical topics. We can write about complex subjects in ways that are accurate yet accessible to your target audience, establishing your thought leadership." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(service.name, service.heroDescription)) }} />
      <section className="bg-gradient-navy text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary-orange/20 text-primary-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">{service.icon} {service.name}</div>
            <h1 className="text-5xl font-bold mb-6">Content Marketing That Establishes Authority</h1>
            <p className="text-xl text-gray-300 mb-8">Create valuable content that attracts, engages, and converts your audience. Establish authority and drive customer action with strategic content marketing.</p>
            <div className="flex flex-wrap gap-4">
              <button data-popup="contact" className="btn btn-primary">Start Content Marketing</button>
              <Link href="/portfolio" className="btn btn-white">View Our Work</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50"><div className="container"><StatsGrid stats={stats} columns={4} /></div></section>
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Complete Content Marketing Services</h2>
            <p className="text-xl text-gray-600">Every content type you need to attract and engage customers.</p>
          </div>
          <div className="grid-3">{features.map((feature, index) => (<div key={index} className="card hover:shadow-card-hover transition-shadow"><div className="text-4xl mb-4">{feature.icon}</div><h3 className="text-xl font-bold mb-3">{feature.title}</h3><p className="text-gray-600">{feature.description}</p></div>))}</div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Content Marketing Process</h2>
            <p className="text-xl text-gray-600">Strategic approach to content that drives results.</p>
          </div>
          <div className="grid-2 max-w-4xl mx-auto">{process.map((item) => (<div key={item.step} className="card hover:shadow-card-hover transition-shadow"><div className="flex items-start gap-4"><div className="w-12 h-12 bg-gradient-navy-orange rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">{item.step}</div><div><h3 className="text-xl font-bold mb-2">{item.title}</h3><p className="text-gray-600">{item.description}</p></div></div></div>))}</div>
        </div>
      </section>
      {projects.length > 0 && (<section className="py-20"><div className="container"><div className="text-center max-w-3xl mx-auto mb-12"><h2 className="text-4xl font-bold mb-4">Content Marketing Success Stories</h2><p className="text-xl text-gray-600">Businesses growing with strategic content.</p></div><div className="grid-3">{projects.map((project) => (<PortfolioCard key={project.id} project={project} />))}</div><div className="text-center mt-12"><Link href="/portfolio" className="btn btn-primary">View All Projects</Link></div></div></section>)}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Businesses building authority with content marketing.</p>
          </div>
          <div className="grid-3">{reviews.map((review) => (<TestimonialCard key={review.id} review={review} />))}</div>
          <div className="text-center mt-12"><Link href="/testimonials" className="btn btn-primary">Read More Reviews</Link></div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Content Marketing Pricing</h2>
            <p className="text-xl text-gray-600">Flexible packages for ongoing content creation.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="card border-2 border-primary-orange">
              <div className="text-center mb-8">
                <div className="text-primary-orange font-bold mb-2">Most Popular</div>
                <h3 className="text-3xl font-bold mb-2">Content Marketing Package</h3>
                <div className="text-5xl font-bold text-primary-orange mb-4">$2,500<span className="text-xl text-gray-600">/month</span></div>
                <p className="text-gray-600">Ongoing content creation & distribution</p>
              </div>
              <div className="grid-2 gap-4 mb-8">
                {['4 blog posts per month (800-1200 words)', 'SEO keyword research', 'Topic research & planning', 'Content calendar', 'Internal linking strategy', 'Image sourcing & optimization', 'Social media promotion', 'Monthly performance reporting'].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center"><button data-popup="contact" className="btn btn-primary w-full sm:w-auto">Get Started</button></div>
            </div>
            <p className="text-center text-gray-600 mt-6">Need video or premium content? <button data-popup="contact" className="text-primary-orange font-semibold hover:underline">Contact us for custom packages</button></p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about content marketing services.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">{faqs.map((faq, index) => (<div key={index} className="card"><h3 className="text-lg font-bold mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}</div>
        </div>
      </section>
      <CTASection title="Ready to Start Content Marketing?" description="Create valuable content that attracts your ideal customers and establishes your expertise." primaryButtonText="Start Content Marketing" primaryButtonAction="contact" />
    </>
  );
}
