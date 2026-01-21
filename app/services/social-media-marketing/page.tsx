import type { Metadata } from "next";
import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateServiceSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Social Media Marketing Sydney | Social Media Management",
  description: "Professional social media marketing in Sydney. Build a strong social media presence and connect with customers where they spend time. Engaging content that converts.",
};

export default function SocialMediaMarketingPage() {
  const service = services.find((s) => s.slug === "social-media-marketing")!;
  const socialProjects = portfolioProjects.filter((p) => p.services.includes("Social Media"));
  const socialReviews = googleReviews.slice(0, 3);

  const stats = [{ label: "Clients Managed", number: "40+" }, { label: "Posts Created", number: "5000+" }, { label: "Avg. Engagement Growth", number: "285%" }, { label: "Campaigns Run", number: "150+" }];
  const features = [
    { title: "Content Creation", description: "Engaging posts, graphics, and videos tailored to each platform and audience.", icon: "📱" },
    { title: "Strategy & Planning", description: "Data-driven social media strategy aligned with your business goals.", icon: "📊" },
    { title: "Community Management", description: "Active engagement with your audience including replies and conversations.", icon: "💬" },
    { title: "Paid Advertising", description: "Targeted social media ads on Facebook, Instagram, LinkedIn, and TikTok.", icon: "📈" },
    { title: "Analytics & Reporting", description: "Monthly reports showing growth, engagement, and ROI from social efforts.", icon: "📉" },
    { title: "Influencer Outreach", description: "Connect with relevant influencers to amplify your brand reach.", icon: "🤝" },
  ];
  const process = [
    { step: 1, title: "Audit & Strategy", description: "Analyze current presence and develop platform-specific strategy." },
    { step: 2, title: "Content Planning", description: "Create content calendar with mix of educational, entertaining, and promotional posts." },
    { step: 3, title: "Creation & Posting", description: "Design graphics, write copy, and schedule posts for optimal engagement." },
    { step: 4, title: "Engage & Optimize", description: "Monitor, respond to audience, and optimize based on performance data." },
  ];
  const faqs = [
    { question: "Which social media platforms should I be on?", answer: "It depends on your audience. B2B companies typically succeed on LinkedIn and Twitter. B2C companies often do well on Facebook, Instagram, and TikTok. We'll recommend the best platforms based on where your customers spend time." },
    { question: "How often should I post on social media?", answer: "Consistency matters more than frequency. We typically recommend 3-5 posts per week on Facebook and LinkedIn, daily Instagram Stories, and 1-2 TikTok videos per week. We'll develop a schedule that's sustainable and effective for your business." },
    { question: "Do you create the content or do I?", answer: "We handle everything! We create graphics, write captions, source images, and schedule posts. You provide product photos and business updates, and we transform them into engaging social content. You approve posts before they go live." },
    { question: "How long before I see results?", answer: "Social media is a long-term strategy. You'll typically see engagement growth within 2-3 months and measurable business results (leads, sales) within 4-6 months. Paid advertising can drive faster results while organic presence builds." },
    { question: "What&apos;s included in your social media packages?", answer: "Our packages typically include strategy development, content creation (graphics and captions), posting/scheduling, community management, monthly analytics reports, and ongoing optimization. Paid advertising is quoted separately based on ad spend." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(service.name, service.heroDescription)) }} />
      <section className="bg-gradient-navy text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary-orange/20 text-primary-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">{service.icon} {service.name}</div>
            <h1 className="text-5xl font-bold mb-6">Social Media Marketing That Builds Your Brand</h1>
            <p className="text-xl text-gray-300 mb-8">Build a strong social media presence and connect with customers where they spend time. Engaging content that grows your audience and drives business results.</p>
            <div className="flex flex-wrap gap-4">
              <button data-popup="contact" className="btn btn-primary">Start Social Media</button>
              <Link href="/portfolio" className="btn btn-white">View Success Stories</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50"><div className="container"><StatsGrid stats={stats} columns={4} /></div></section>
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Complete Social Media Solutions</h2>
            <p className="text-xl text-gray-600">Everything you need for effective social media presence.</p>
          </div>
          <div className="grid-3">{features.map((feature, index) => (<div key={index} className="card hover:shadow-card-hover transition-shadow"><div className="text-4xl mb-4">{feature.icon}</div><h3 className="text-xl font-bold mb-3">{feature.title}</h3><p className="text-gray-600">{feature.description}</p></div>))}</div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Social Media Process</h2>
            <p className="text-xl text-gray-600">Strategic approach to building your social presence.</p>
          </div>
          <div className="grid-2 max-w-4xl mx-auto">{process.map((item) => (<div key={item.step} className="card hover:shadow-card-hover transition-shadow"><div className="flex items-start gap-4"><div className="w-12 h-12 bg-gradient-navy-orange rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">{item.step}</div><div><h3 className="text-xl font-bold mb-2">{item.title}</h3><p className="text-gray-600">{item.description}</p></div></div></div>))}</div>
        </div>
      </section>
      {socialProjects.length > 0 && (<section className="py-20"><div className="container"><div className="text-center max-w-3xl mx-auto mb-12"><h2 className="text-4xl font-bold mb-4">Social Media Success Stories</h2><p className="text-xl text-gray-600">Businesses growing with strategic social media.</p></div><div className="grid-3">{socialProjects.slice(0, 6).map((project) => (<PortfolioCard key={project.id} project={project} />))}</div><div className="text-center mt-12"><Link href="/portfolio" className="btn btn-primary">View All Projects</Link></div></div></section>)}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Businesses connecting with customers on social media.</p>
          </div>
          <div className="grid-3">{socialReviews.map((review) => (<TestimonialCard key={review.id} review={review} />))}</div>
          <div className="text-center mt-12"><Link href="/testimonials" className="btn btn-primary">Read More Reviews</Link></div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Social Media Marketing Pricing</h2>
            <p className="text-xl text-gray-600">Flexible packages for consistent social presence.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="card border-2 border-primary-orange">
              <div className="text-center mb-8">
                <div className="text-primary-orange font-bold mb-2">Most Popular</div>
                <h3 className="text-3xl font-bold mb-2">Social Media Management</h3>
                <div className="text-5xl font-bold text-primary-orange mb-4">$1,200<span className="text-xl text-gray-600">/month</span></div>
                <p className="text-gray-600">Complete social media management</p>
              </div>
              <div className="grid-2 gap-4 mb-8">
                {['2-3 platforms managed', '12-15 posts per month', 'Custom graphics & captions', 'Content calendar', 'Community management', 'Monthly analytics report', 'Strategy & optimization', 'Social media consultation'].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center"><button data-popup="contact" className="btn btn-primary w-full sm:w-auto">Get Started</button></div>
            </div>
            <p className="text-center text-gray-600 mt-6">Need paid social advertising? <button data-popup="contact" className="text-primary-orange font-semibold hover:underline">Contact us for custom packages</button></p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about social media marketing.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">{faqs.map((faq, index) => (<div key={index} className="card"><h3 className="text-lg font-bold mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}</div>
        </div>
      </section>
      <CTASection title="Ready to Grow Your Social Media Presence?" description="Build a strong social presence and connect with customers where they spend their time online." primaryButtonText="Start Social Media" primaryButtonAction="contact" />
    </>
  );
}
