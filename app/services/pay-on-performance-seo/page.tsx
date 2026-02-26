import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/schemas";
import CTASection from "@/components/CTASection";

export const metadata = generateMetadata({
  title: "Pay on Performance SEO Sydney | Results-Based SEO Services",
  description: "Pay for SEO results, not promises. Performance-based SEO services in Sydney where you only pay when we deliver rankings, traffic, and measurable outcomes.",
  keywords: "pay on performance seo, performance based seo sydney, results based seo, seo on commission, pay per result seo",
  canonicalUrl: "https://sydneywebdesigner.com.au/services/pay-on-performance-seo",
});

export default function PayOnPerformanceSEOPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Services", url: "https://sydneywebdesigner.com.au/services" },
    { name: "Pay on Performance SEO", url: "https://sydneywebdesigner.com.au/services/pay-on-performance-seo" }
  ];

  const serviceData = {
    name: "Pay on Performance SEO Services",
    description: "Results-based SEO where you only pay when we deliver measurable outcomes. Transparent, performance-driven SEO with aligned incentives and guaranteed accountability.",
    provider: "Sydney Web Designer"
  };

  const benefits = [
    {
      icon: "fa-handshake",
      title: "Aligned Incentives",
      description: "We only succeed when you succeed - complete alignment of goals",
      points: [
        "We're motivated to deliver results",
        "No payment without performance",
        "Skin in the game approach",
        "Mutually beneficial partnership"
      ]
    },
    {
      icon: "fa-shield-alt",
      title: "Reduced Risk",
      description: "Minimize financial risk with pay-for-results model",
      points: [
        "Pay only for achieved rankings",
        "No large upfront investments",
        "Performance-based pricing",
        "ROI-focused approach"
      ]
    },
    {
      icon: "fa-chart-line",
      title: "Measurable Results",
      description: "Clear, transparent metrics that determine payment",
      points: [
        "Agreed-upon keyword rankings",
        "Traffic milestone targets",
        "Conversion-based metrics",
        "Regular performance reporting"
      ]
    },
    {
      icon: "fa-bolt",
      title: "Accelerated Results",
      description: "We're incentivized to deliver results quickly",
      points: [
        "Focused on fast wins",
        "Aggressive optimization strategies",
        "Prioritized high-impact work",
        "Efficient resource allocation"
      ]
    },
    {
      icon: "fa-eye",
      title: "Complete Transparency",
      description: "Full visibility into work performed and results achieved",
      points: [
        "Real-time ranking tracking",
        "Detailed work documentation",
        "Monthly performance reports",
        "Open communication channels"
      ]
    },
    {
      icon: "fa-trophy",
      title: "Proven Track Record",
      description: "We're confident enough in our abilities to bet on results",
      points: [
        "Results-driven methodology",
        "Extensive SEO expertise",
        "Successful case studies",
        "White-hat strategies only"
      ]
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Define Success Metrics",
      description: "We agree on specific, measurable performance targets",
      details: [
        "Select target keywords and positions",
        "Set traffic or conversion goals",
        "Establish clear benchmarks",
        "Define payment triggers"
      ]
    },
    {
      step: 2,
      title: "Small Base Retainer",
      description: "Minimal monthly fee covers essential ongoing work",
      details: [
        "Covers technical maintenance",
        "Basic content updates",
        "Link monitoring",
        "Performance tracking"
      ]
    },
    {
      step: 3,
      title: "Execute SEO Strategy",
      description: "We implement comprehensive SEO optimizations",
      details: [
        "Technical SEO improvements",
        "Content optimization",
        "Link building campaigns",
        "Ongoing monitoring"
      ]
    },
    {
      step: 4,
      title: "Achieve Results & Get Paid",
      description: "When we hit agreed targets, performance bonuses apply",
      details: [
        "Rankings reach target positions",
        "Traffic milestones achieved",
        "Performance bonuses earned",
        "Continue to next targets"
      ]
    },
  ];

  const pricingModels = [
    {
      icon: "fa-trophy",
      model: "Ranking-Based",
      description: "Pay when keywords reach target positions",
      example: "Example: $X per keyword reaching page 1, $XX for top 3"
    },
    {
      icon: "fa-users",
      model: "Traffic-Based",
      description: "Pay based on organic traffic milestones",
      example: "Example: Bonus at 5,000, 10,000, 20,000 monthly visitors"
    },
    {
      icon: "fa-dollar-sign",
      model: "Revenue-Based",
      description: "Commission on revenue from organic traffic",
      example: "Example: % of revenue attributed to organic search"
    },
    {
      icon: "fa-bullseye",
      model: "Conversion-Based",
      description: "Pay for leads or conversions generated",
      example: "Example: $X per qualified lead from organic search"
    },
    {
      icon: "fa-chart-pie",
      model: "Hybrid Model",
      description: "Combination of base retainer + performance bonuses",
      example: "Example: Low monthly fee + bonuses for hitting targets"
    },
  ];

  const idealFor = [
    {
      icon: "fa-store",
      type: "Small Businesses",
      description: "Limited budgets who want to minimize risk",
      fit: "Perfect fit for businesses new to SEO investment"
    },
    {
      icon: "fa-shipping-fast",
      type: "Startups",
      description: "Need results fast with limited capital",
      fit: "Ideal for bootstrapped companies with tight cash flow"
    },
    {
      icon: "fa-exclamation-triangle",
      type: "Previously Burned",
      description: "Had bad experiences with SEO agencies",
      fit: "Regain confidence with risk-free performance model"
    },
    {
      icon: "fa-chart-line",
      type: "ROI-Focused",
      description: "Need to justify every marketing dollar spent",
      fit: "Clear ROI tracking and pay-for-results accountability"
    },
    {
      icon: "fa-balance-scale",
      type: "Risk-Averse",
      description: "Conservative approach to marketing spend",
      fit: "Minimize risk while still investing in growth"
    },
    {
      icon: "fa-shopping-cart",
      type: "Ecommerce",
      description: "Can track revenue from organic traffic",
      fit: "Revenue-based model aligns perfectly with online sales"
    },
  ];

  const caseStudy = {
    name: "Sydney Home Services Business",
    challenge: "Skeptical about SEO after being burned by previous agency that promised results but delivered nothing. Limited marketing budget ($2,000/month) and needed proof that SEO could actually work before committing large amounts.",
    solution: "Implemented pay-on-performance model with $500 base monthly retainer plus bonuses for rankings. Targeted 20 high-intent local service keywords. Payment triggered when keywords reached page 1, with additional bonus for top 3 positions.",
    results: [
      "16 of 20 keywords ranking page 1 within 6 months",
      "8 keywords in top 3 positions",
      "Organic traffic increased 620%",
      "45 qualified leads per month from organic",
      "Client total spend: $8,400 over 6 months",
      "Revenue generated: $127,000 (15x ROI)"
    ],
    timeline: "6 months"
  };

  const faq = [
    {
      q: "How does pay on performance SEO work?",
      a: "You pay a minimal base retainer (typically $500-$1,500/month) that covers essential ongoing work like technical maintenance and monitoring. Then, you pay performance-based bonuses when we achieve agreed-upon results - such as keywords reaching page 1, traffic milestones, or conversion goals. The bulk of payment is tied to actual results, not just time spent or work performed."
    },
    {
      q: "Why isn't all SEO pay on performance?",
      a: "Most agencies avoid performance-based models because SEO has variables outside their control (algorithm updates, competitors, timeline uncertainty). It requires confidence in ability to deliver, acceptance of delayed payment, and careful client selection. We offer it because we're confident in our methods, want aligned incentives with clients, and prefer clients who are results-focused rather than task-focused."
    },
    {
      q: "What if you use risky tactics to get quick results?",
      a: "We exclusively use white-hat SEO strategies that comply with Google's guidelines. While we're incentivized for results, we're also building our reputation and long-term client relationships. Black-hat tactics might deliver short-term gains but lead to penalties that hurt everyone. All our methods are sustainable and penalty-proof. We provide full transparency into our tactics."
    },
    {
      q: "What happens if results aren't achieved?",
      a: "If we don't hit performance targets, we don't earn performance bonuses - it's that simple. You only pay the base retainer for ongoing work. However, we carefully qualify clients before agreeing to performance-based arrangements. We assess competition, current site status, and realistic timelines. We only take on performance-based clients when we're confident we can deliver."
    },
    {
      q: "How do you determine what's a fair performance target?",
      a: "We conduct thorough analysis including: keyword difficulty assessment, competitor analysis, current site authority, realistic timelines based on competition, and historical performance data from similar projects. We propose targets that are challenging but achievable. It's a negotiation - targets need to be meaningful for you while realistic for us. Unrealistic targets benefit no one."
    },
    {
      q: "Can any business qualify for pay on performance SEO?",
      a: "Not every business is a fit. Ideal candidates have: decent existing website (not starting from scratch), reasonable competition (not trying to outrank Amazon), patience for 3-6 month timelines, clear conversion tracking, and realistic expectations. We assess your situation and honestly tell you if performance-based pricing makes sense or if traditional SEO would be better."
    },
    {
      q: "What metrics can performance be based on?",
      a: "Common performance metrics include: keyword rankings (e.g., pay per keyword reaching page 1), organic traffic milestones (e.g., bonus at 10,000 monthly visitors), qualified leads generated, conversion numbers or revenue, or visibility scores. We work with you to determine which metrics align best with your business goals and are measurable without dispute."
    },
    {
      q: "What's the minimum commitment for pay on performance SEO?",
      a: "Typically 6-12 months. SEO is inherently a medium-term strategy - results rarely happen in under 3 months. We need sufficient time to implement strategies and see results. The performance-based model already reduces your risk, but we need commitment to see the strategy through. Most clients continue well past the initial term once results start compounding."
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(serviceData.name, serviceData.description)) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f59e0b] rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#10b981] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
              <i className="fas fa-handshake text-[#f59e0b]"></i>
              <span className="text-[#f59e0b] text-sm font-semibold">Results-Based SEO</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Pay on Performance SEO Sydney
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-100">
              Pay for results, not promises. Performance-based SEO where you only pay when we deliver rankings, traffic, and measurable outcomes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="#contact" className="btn btn-primary">
                Discuss Your Goals
              </Link>
              <Link href="#how-it-works" className="btn btn-secondary">
                How It Works
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">15x</div>
                <div className="text-sm text-slate-300">Client ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">620%</div>
                <div className="text-sm text-slate-300">Traffic Growth</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">80%</div>
                <div className="text-sm text-slate-300">Hit Page 1</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">100%</div>
                <div className="text-sm text-slate-300">Risk Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Why Pay on Performance SEO Makes Sense</h2>
            <p>Aligned incentives, reduced risk, and transparent results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="card hover:shadow-xl transition-all border border-[#f59e0b]/30">
                <div className="w-16 h-16 bg-[#f59e0b]/10 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`fas ${benefit.icon} text-3xl text-[#f59e0b]`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary-navy">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                <ul className="space-y-3">
                  {benefit.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <i className="fas fa-check text-[#f59e0b] mt-1 flex-shrink-0"></i>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#f8fafc]" id="how-it-works">
        <div className="container">
          <div className="section-title">
            <h2>How Pay on Performance SEO Works</h2>
            <p>Simple, transparent process with clear success metrics</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="card hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-[#f59e0b] text-white rounded-2xl flex items-center justify-center text-3xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-3 text-primary-navy">{item.title}</h3>
                    <p className="text-gray-600 mb-4 text-lg">{item.description}</p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <i className="fas fa-check-circle text-[#f59e0b] mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Performance Pricing Models</h2>
            <p>Flexible options based on what matters most to your business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricingModels.slice(0, 3).map((model, index) => (
              <div key={index} className="card hover:border-[#f59e0b] transition-all text-center">
                <div className="w-16 h-16 bg-[#f59e0b]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${model.icon} text-3xl text-[#f59e0b]`}></i>
                </div>
                <h3 className="font-bold text-xl text-primary-navy mb-2">{model.model}</h3>
                <p className="text-gray-600 mb-4">{model.description}</p>
                <p className="text-sm text-gray-500 italic">{model.example}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
            {pricingModels.slice(3).map((model, index) => (
              <div key={index} className="card hover:border-[#f59e0b] transition-all text-center">
                <div className="w-16 h-16 bg-[#f59e0b]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${model.icon} text-3xl text-[#f59e0b]`}></i>
                </div>
                <h3 className="font-bold text-xl text-primary-navy mb-2">{model.model}</h3>
                <p className="text-gray-600 mb-4">{model.description}</p>
                <p className="text-sm text-gray-500 italic">{model.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container">
          <div className="section-title">
            <h2>Is Pay on Performance SEO Right for You?</h2>
            <p>Ideal for businesses that need results-driven, low-risk SEO</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {idealFor.map((item, index) => (
              <div key={index} className="card hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-[#f59e0b]/10 rounded-xl flex items-center justify-center mb-4">
                  <i className={`fas ${item.icon} text-2xl text-[#f59e0b]`}></i>
                </div>
                <h3 className="font-bold text-lg text-primary-navy mb-2">{item.type}</h3>
                <p className="text-gray-600 mb-3 text-sm">{item.description}</p>
                <p className="text-sm text-[#f59e0b] font-semibold">{item.fit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white">
        <div className="container">
          <div className="section-title">
            <h2 className="text-white">Real Pay on Performance Results</h2>
            <p className="text-slate-200">How performance-based SEO delivered exceptional ROI</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="card bg-white/10 backdrop-blur-sm border-2 border-[#f59e0b]">
              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-3">
                  <h3 className="text-3xl font-bold mb-2">{caseStudy.name}</h3>
                  <div className="text-[#f59e0b] font-semibold mb-6">Timeline: {caseStudy.timeline}</div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold mb-2 text-lg">Challenge:</h4>
                      <p className="text-slate-200">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-lg">Solution:</h4>
                      <p className="text-slate-200">{caseStudy.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 bg-gradient-to-br from-[#f59e0b]/20 to-[#fb923c]/20 rounded-2xl p-8">
                  <h4 className="font-bold mb-6 text-xl">Results Achieved:</h4>
                  <ul className="space-y-4">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <i className="fas fa-trophy text-[#f59e0b] text-xl flex-shrink-0 mt-1"></i>
                        <span className="text-slate-100">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Pay on Performance SEO Frequently Asked Questions</h2>
            <p>Common questions about results-based SEO pricing</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold mb-3 text-primary-navy">{item.q}</h3>
                <p className="text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready for Risk-Free, Results-Based SEO?"
        description="Let's discuss your goals and see if pay on performance SEO is right for your business. Get a free consultation and custom performance proposal."
        primaryButtonText="Discuss Your Goals"
        primaryButtonAction="seoAudit"
        secondaryButtonText="View Our Work"
      />
    </>
  );
}
