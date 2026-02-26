import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/schemas";
import CTASection from "@/components/CTASection";

export const metadata = generateMetadata({
  title: "Link Building Sydney | White-Hat SEO Backlink Services",
  description: "Professional link building services in Sydney. Earn high-quality, authoritative backlinks that improve rankings and drive referral traffic through white-hat strategies.",
  keywords: "link building sydney, backlink services, white hat link building, seo backlinks, authority link building, guest posting",
  canonicalUrl: "https://sydneywebdesigner.com.au/services/link-building",
});

export default function LinkBuildingPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Services", url: "https://sydneywebdesigner.com.au/services" },
    { name: "Link Building", url: "https://sydneywebdesigner.com.au/services/link-building" }
  ];

  const serviceData = {
    name: "Link Building Services",
    description: "White-hat link building strategies that earn high-quality backlinks from authoritative websites. Improve domain authority and search rankings safely and sustainably.",
    provider: "Sydney Web Designer"
  };

  const benefits = [
    {
      icon: "fa-chart-line",
      title: "Higher Search Rankings",
      description: "Quality backlinks are still one of Google's top ranking factors",
      points: [
        "Improve domain authority (DA)",
        "Boost page-level rankings",
        "Outrank competitors with weaker profiles",
        "Faster ranking improvements"
      ]
    },
    {
      icon: "fa-shield-alt",
      title: "Safe, White-Hat Strategies",
      description: "Only legitimate tactics that won't risk Google penalties",
      points: [
        "No PBNs or link schemes",
        "Natural link velocity",
        "Diverse anchor text ratios",
        "Manual outreach only"
      ]
    },
    {
      icon: "fa-users",
      title: "Referral Traffic",
      description: "Quality links drive targeted visitors beyond SEO value",
      points: [
        "Traffic from relevant websites",
        "Engaged, qualified visitors",
        "Industry exposure and awareness",
        "Potential customer acquisition"
      ]
    },
    {
      icon: "fa-trophy",
      title: "Build Brand Authority",
      description: "Establish credibility through association with trusted sites",
      points: [
        "Mentions on industry publications",
        "Expert contributor status",
        "Thought leadership positioning",
        "Trust signals for customers"
      ]
    },
    {
      icon: "fa-link",
      title: "Relevant, Contextual Links",
      description: "Links from topically relevant sites in your industry",
      points: [
        "Industry-specific publications",
        "Contextual content placement",
        "Natural editorial links",
        "Geographic relevance (Sydney/Australia)"
      ]
    },
    {
      icon: "fa-infinity",
      title: "Long-Term SEO Value",
      description: "Quality links continue benefiting your SEO for years",
      points: [
        "Permanent link placements",
        "Compounding authority growth",
        "Sustainable ranking improvements",
        "Protection against algorithm updates"
      ]
    },
  ];

  const services = [
    {
      title: "Content Marketing & Link Earning",
      items: [
        "Linkable asset creation (guides, tools, research)",
        "Data-driven content & original research",
        "Infographics and visual content",
        "Interactive tools and calculators",
        "Comprehensive industry resources",
        "Expert roundups and interviews",
        "Newsworthy content and PR angles",
        "Content promotion and outreach"
      ]
    },
    {
      title: "Digital PR & Media Outreach",
      items: [
        "Journalist outreach and HARO responses",
        "Press release distribution",
        "Industry publication placements",
        "News and media mentions",
        "Expert commentary opportunities",
        "Podcast guest appearances",
        "Interview placement",
        "Brand mention conversions"
      ]
    },
    {
      title: "Guest Posting & Contributor Content",
      items: [
        "High-authority site identification",
        "Relationship building with editors",
        "High-quality article writing",
        "Relevant niche publications",
        "Industry blog contributions",
        "Thought leadership articles",
        "Natural link integration",
        "Long-term publishing relationships"
      ]
    },
    {
      title: "Link Reclamation & Monitoring",
      items: [
        "Broken link recovery",
        "Unlinked brand mention outreach",
        "Lost link reclamation",
        "Competitor backlink analysis",
        "Toxic link identification and disavow",
        "Link profile monitoring",
        "Anchor text optimization",
        "Link velocity management"
      ]
    },
  ];

  const linkTypes = [
    { icon: "fa-newspaper", type: "Editorial Links", description: "Earned through quality content" },
    { icon: "fa-pen", type: "Guest Posts", description: "Contributor articles on authority sites" },
    { icon: "fa-microphone", type: "Digital PR", description: "Media mentions and press coverage" },
    { icon: "fa-briefcase", type: "Resource Links", description: "Industry directories and resources" },
    { icon: "fa-handshake", type: "Partnership Links", description: "Strategic business relationships" },
    { icon: "fa-graduation-cap", type: "Educational Links", description: ".edu and academic backlinks" },
  ];

  const caseStudy = {
    name: "Sydney B2B SaaS Company",
    challenge: "Limited backlink profile with only 15 referring domains, struggling to rank for competitive industry keywords. Strong on-page SEO but weak domain authority (DA 18) preventing page 1 rankings.",
    solution: "12-month strategic link building campaign including linkable asset creation (industry benchmark report), digital PR outreach, guest posting on SaaS and tech publications, and systematic HARO response program.",
    results: [
      "Referring domains: 15 → 127 (747% increase)",
      "Domain Authority: 18 → 42",
      "Page 1 rankings increased from 8 to 67 keywords",
      "Organic traffic up 385%",
      "3 backlinks from DA 80+ publications",
      "Featured in TechCrunch, Forbes, and industry publications"
    ],
    timeline: "12 months"
  };

  const faq = [
    {
      q: "What makes a quality backlink?",
      a: "Quality backlinks come from authoritative, relevant websites in your industry with strong domain authority (DA 30+), genuine traffic, editorial standards, and contextual relevance. The link should be placed naturally within content, use relevant (not over-optimized) anchor text, and come from a page that's topically related to your content. One quality link from a trusted source is worth more than 100 low-quality directory links."
    },
    {
      q: "How many backlinks do I need to rank?",
      a: "It's about quality over quantity. You might rank with 10 high-authority links while competitors with 100 low-quality links don't. The number needed depends on your competition, current authority, and target keywords. We typically see significant movement with 10-20 quality links over 6 months for moderately competitive keywords. Highly competitive terms may require 50+ authoritative backlinks over 12-18 months."
    },
    {
      q: "Are paid links against Google's guidelines?",
      a: "Yes, paying for links specifically to manipulate PageRank violates Google's guidelines and can result in penalties. However, legitimate paid placements (like sponsored content or advertising) are acceptable if they use rel='nofollow' or rel='sponsored' attributes. We only pursue white-hat tactics: creating valuable content that naturally earns links, building relationships with publishers, and providing genuine value that warrants editorial links."
    },
    {
      q: "How long does link building take to show results?",
      a: "Link building is a long-term strategy. You'll typically see initial ranking improvements within 3-4 months as the first quality links are indexed and valued. Significant results usually appear by month 6-8. The effects compound over time - month 12 often shows dramatically better results than month 6. Unlike paid ads, the benefits continue growing and don't stop when you pause the campaign."
    },
    {
      q: "What's the difference between white-hat and black-hat link building?",
      a: "White-hat link building earns links through valuable content, genuine relationships, and providing value to readers. Methods include guest posting on quality sites, creating linkable assets, digital PR, and broken link building. Black-hat uses manipulative tactics like buying links, PBNs (private blog networks), link farms, automated outreach, and link schemes. Black-hat risks severe Google penalties; white-hat builds sustainable, long-term authority."
    },
    {
      q: "Can you guarantee a specific number of links?",
      a: "We don't guarantee specific numbers because quality matters far more than quantity. What we guarantee is effort: dedicated outreach hours, content creation, relationship building, and proven strategies. We target realistic monthly goals based on your niche and budget, but genuine editorial links can't be guaranteed like ordering widgets. We focus on earning the highest-quality links possible rather than chasing arbitrary numbers."
    },
    {
      q: "Should I remove or disavow bad backlinks?",
      a: "Google typically ignores low-quality links, so removal isn't always necessary. However, obviously spammy or manipulative links (from your own past SEO or negative SEO attacks) should be addressed. We audit your backlink profile, attempt to remove toxic links, and use Google's Disavow Tool for links that can't be removed. Most sites don't need aggressive disavowing unless they've engaged in black-hat tactics previously."
    },
    {
      q: "How do you measure link building success?",
      a: "We track multiple metrics: number and quality of acquired links (DR/DA of linking sites), growth in referring domains, improvements in domain authority, keyword ranking improvements (especially for target terms), organic traffic growth, and referral traffic from backlinks. We provide monthly reports showing new links acquired, their metrics, and the correlation to ranking and traffic improvements."
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
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#06b6d4] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
              <i className="fas fa-link text-[#f59e0b]"></i>
              <span className="text-[#f59e0b] text-sm font-semibold">White-Hat Link Building Experts</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Link Building Sydney
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-100">
              Earn high-quality backlinks that improve rankings and drive authority. Safe, white-hat link building for sustainable growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="#contact" className="btn btn-primary">
                Get Link Building Strategy
              </Link>
              <Link href="#services" className="btn btn-secondary">
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">747%</div>
                <div className="text-sm text-slate-300">Referring Domain Growth</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">DA 42</div>
                <div className="text-sm text-slate-300">Domain Authority Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">67</div>
                <div className="text-sm text-slate-300">Page 1 Rankings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">100%</div>
                <div className="text-sm text-slate-300">White-Hat Methods</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Why Link Building Matters for SEO</h2>
            <p>Quality backlinks remain one of Google's most important ranking factors</p>
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

      {/* Services Section */}
      <section className="py-20 bg-[#f8fafc]" id="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Link Building Services</h2>
            <p>Comprehensive white-hat strategies to earn authoritative backlinks</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="card hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-6 text-primary-navy flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#f59e0b] text-white rounded-lg flex items-center justify-center text-lg">
                    {index + 1}
                  </span>
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-[#f59e0b] mt-1 flex-shrink-0"></i>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Link Types */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Types of Links We Build</h2>
            <p>Diverse, natural backlink profile from authoritative sources</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {linkTypes.map((type, index) => (
              <div key={index} className="card text-center hover:border-[#f59e0b] transition-all">
                <i className={`fas ${type.icon} text-4xl text-[#f59e0b] mb-4`}></i>
                <h3 className="font-bold text-primary-navy mb-2 text-lg">{type.type}</h3>
                <p className="text-sm text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White-Hat vs Black-Hat */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container">
          <div className="section-title">
            <h2>Our White-Hat Approach</h2>
            <p>Safe, sustainable link building that won't risk Google penalties</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="card border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-primary-navy flex items-center gap-3">
                <i className="fas fa-check-circle text-green-500"></i>
                What We Do
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Create valuable, linkable content assets</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Manual outreach to relevant publications</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Build genuine relationships with editors</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Earn editorial links through quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Focus on relevance and authority</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Natural anchor text variation</span>
                </li>
              </ul>
            </div>

            <div className="card border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-primary-navy flex items-center gap-3">
                <i className="fas fa-times-circle text-red-500"></i>
                What We Don't Do
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <i className="fas fa-times text-red-500 mt-1"></i>
                  <span>Buy links or participate in link schemes</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-times text-red-500 mt-1"></i>
                  <span>Use Private Blog Networks (PBNs)</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-times text-red-500 mt-1"></i>
                  <span>Automated link building or spam</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-times text-red-500 mt-1"></i>
                  <span>Low-quality directory submissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-times text-red-500 mt-1"></i>
                  <span>Irrelevant or off-topic links</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-times text-red-500 mt-1"></i>
                  <span>Over-optimized anchor text</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white">
        <div className="container">
          <div className="section-title">
            <h2 className="text-white">Real Link Building Results</h2>
            <p className="text-slate-200">How we built authority and transformed rankings</p>
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
            <h2>Link Building Frequently Asked Questions</h2>
            <p>Common questions about earning quality backlinks</p>
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
        title="Ready to Build Authority with Quality Links?"
        description="Get a free backlink analysis and link building strategy. Discover how we can help you earn authoritative backlinks that improve rankings and drive sustainable growth."
        primaryButtonText="Get Link Building Strategy"
        primaryButtonAction="seoAudit"
        secondaryButtonText="View Our Work"
      />
    </>
  );
}
