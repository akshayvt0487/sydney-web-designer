import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema, generateLocalBusinessSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";

export const metadata = generateMetadata({
  title: "Conversion Optimization Sydney | CRO Services That Increase Sales",
  description: "Professional conversion rate optimization in Sydney. Maximize marketing ROI with data-driven CRO. 60+ websites optimized, 400+ tests conducted, average 127% conversion lift, $5M+ revenue.",
  keywords: "conversion optimization sydney, cro services, conversion rate optimization, ab testing sydney, landing page optimization, funnel optimization, cro agency sydney",
  canonicalUrl: "https://sydneywebdesigner.com.au/services/conversion-optimization",
  ogImage: "/images/og/services.svg",
});

export default function ConversionOptimizationPage() {
  const service = services.find((s) => s.slug === "conversion-optimization")!;

  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Services", url: "https://sydneywebdesigner.com.au/services" },
    { name: "Conversion Optimization", url: "https://sydneywebdesigner.com.au/services/conversion-optimization" }
  ];
  const projects = portfolioProjects.slice(0, 6);
  const reviews = googleReviews.slice(3, 6);

  const stats = [{ label: "Websites Optimized", number: "60+" }, { label: "Tests Conducted", number: "400+" }, { label: "Avg. Conversion Lift", number: "127%" }, { label: "Revenue Generated", number: "$5M+" }];
  const features = [
    { title: "Conversion Audit", description: "Comprehensive analysis identifying friction points and opportunities.", icon: "🔍" },
    { title: "A/B Testing", description: "Scientific testing of design, copy, and layout variations.", icon: "🧪" },
    { title: "User Behavior Analysis", description: "Heatmaps, session recordings, and analytics to understand user behavior.", icon: "📊" },
    { title: "Funnel Optimization", description: "Optimize each step of your conversion funnel to reduce drop-off.", icon: "🎯" },
    { title: "Landing Page Optimization", description: "Optimize landing pages for maximum conversion from paid traffic.", icon: "📄" },
    { title: "Form Optimization", description: "Improve form completion rates and reduce abandonment.", icon: "📝" },
  ];
  const process = [
    { step: 1, title: "Data Collection", description: "Install tracking, gather data, and analyze current conversion performance." },
    { step: 2, title: "Identify Opportunities", description: "Use data to identify biggest conversion blockers and improvement opportunities." },
    { step: 3, title: "Test & Implement", description: "Design and run A/B tests, implement winning variations." },
    { step: 4, title: "Measure & Iterate", description: "Track results, learn from tests, and continuously optimize." },
  ];
  const faqs = [
    { question: "What is conversion rate optimization (CRO)?", answer: "CRO is the systematic process of increasing the percentage of website visitors who take a desired action (purchase, signup, call, etc.). It involves understanding user behavior, testing improvements, and implementing changes that increase conversions." },
    { question: "How is CRO different from getting more traffic?", answer: "More traffic is valuable, but CRO maximizes the value of existing traffic. If you spend $10,000 on ads getting 1,000 visitors with 2% conversion (20 sales), improving to 4% conversion doubles your sales without spending more on ads. CRO improves ROI on all marketing." },
    { question: "What&apos;s a good conversion rate?", answer: "It varies widely by industry, traffic source, and goals. E-commerce averages 2-3%, B2B lead generation 2-5%, and landing pages 5-15%. Rather than industry benchmarks, we focus on continually improving YOUR conversion rate through systematic testing." },
    { question: "How long does CRO take to show results?", answer: "Initial audit findings can guide immediate improvements. A/B tests typically need 2-4 weeks to reach statistical significance. Most clients see measurable improvements within 2-3 months, with results compounding as we implement multiple winning tests." },
    { question: "What tools do you use for conversion optimization?", answer: "We use Google Analytics, Hotjar for heatmaps and recordings, Google Optimize or VWO for A/B testing, and various specialized tools depending on your platform. We'll work with your existing tools where possible or recommend the best fit." },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(service.name, service.heroDescription)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
      />
      <section className="bg-[#1e293b] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary-orange/20 text-primary-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">{service.icon} {service.name}</div>
            <h1 className="text-5xl font-bold mb-6 text-white">Conversion Optimization That Maximizes Your Marketing ROI</h1>
            <p className="text-xl text-white mb-8">Stop wasting traffic. Maximize your marketing ROI by optimizing every step of your customer journey. Data-driven testing that increases conversions and revenue.</p>
            <div className="flex flex-wrap gap-4">
              <button data-popup="contact" className="btn btn-primary">Get Free CRO Audit</button>
              <Link href="/portfolio" className="btn btn-white">View Success Stories</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50"><div className="container"><StatsGrid stats={stats} columns={4} /></div></section>
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Complete Conversion Optimization Services</h2>
            <p className="text-xl text-gray-600">Everything you need to turn more visitors into customers.</p>
          </div>
          <div className="grid-3">{features.map((feature, index) => (<div key={index} className="card hover:shadow-card-hover transition-shadow"><div className="text-4xl mb-4">{feature.icon}</div><h3 className="text-xl font-bold mb-3">{feature.title}</h3><p className="text-gray-600">{feature.description}</p></div>))}</div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Our CRO Process</h2>
            <p className="text-xl text-gray-600">Data-driven methodology for continuous improvement.</p>
          </div>
          <div className="grid-2 max-w-4xl mx-auto">{process.map((item) => (<div key={item.step} className="card hover:shadow-card-hover transition-shadow"><div className="flex items-start gap-4"><div className="w-12 h-12 bg-[#f59e0b] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">{item.step}</div><div><h3 className="text-xl font-bold mb-2">{item.title}</h3><p className="text-gray-600">{item.description}</p></div></div></div>))}</div>
        </div>
      </section>
      {projects.length > 0 && (<section className="py-20"><div className="container"><div className="text-center max-w-3xl mx-auto mb-12"><h2 className="text-4xl font-bold mb-4">Conversion Optimization Success Stories</h2><p className="text-xl text-gray-600">Businesses increasing conversions and revenue.</p></div><div className="grid-3">{projects.map((project) => (<PortfolioCard key={project.id} project={project} />))}</div><div className="text-center mt-12"><Link href="/portfolio" className="btn btn-primary">View All Projects</Link></div></div></section>)}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Businesses growing revenue with conversion optimization.</p>
          </div>
          <div className="grid-3">{reviews.map((review) => (<TestimonialCard key={review.id} review={review} />))}</div>
          <div className="text-center mt-12"><Link href="/testimonials" className="btn btn-primary">Read More Reviews</Link></div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Conversion Optimization Pricing</h2>
            <p className="text-xl text-gray-600">Flexible packages for ongoing optimization.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="card border-2 border-primary-orange">
              <div className="text-center mb-8">
                <div className="text-primary-orange font-bold mb-2">Most Popular</div>
                <h3 className="text-3xl font-bold mb-2">CRO Package</h3>
                <div className="text-5xl font-bold text-primary-orange mb-4">$2,000<span className="text-xl text-gray-600">/month</span></div>
                <p className="text-gray-600">Complete conversion optimization program</p>
              </div>
              <div className="grid-2 gap-4 mb-8">
                {['Comprehensive CRO audit', 'Analytics & heatmap setup', 'User behavior analysis', '2-3 A/B tests per month', 'Landing page optimization', 'Form optimization', 'Monthly testing reports', 'Strategy consultation'].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center"><button data-popup="contact" className="btn btn-primary w-full sm:w-auto">Get Started</button></div>
            </div>
            <p className="text-center text-gray-600 mt-6">Need one-time audit only? <button data-popup="contact" className="text-primary-orange font-semibold hover:underline">Contact us for one-time CRO audit pricing</button></p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about conversion optimization services.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">{faqs.map((faq, index) => (<div key={index} className="card"><h3 className="text-lg font-bold mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}</div>
        </div>
      </section>
      <CTASection title="Ready to Increase Your Conversions?" description="Stop wasting traffic and start converting more visitors into customers with data-driven optimization." primaryButtonText="Get Free CRO Audit" primaryButtonAction="contact" />
    </>
  );
}
