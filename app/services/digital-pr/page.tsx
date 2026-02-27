import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/schemas";
import CTASection from "@/components/CTASection";
import ServiceHeroSection from "@/components/ServiceHeroSection";

export const metadata = generateMetadata({
  title: "Digital PR Sydney | Media Coverage & Brand Authority",
  description: "Expert digital PR services in Sydney. Earn media coverage, authoritative backlinks, and build brand awareness through strategic PR campaigns that boost SEO.",
  keywords: "digital pr sydney, online pr services, media outreach, haro link building, brand awareness, pr seo, journalist outreach",
  canonicalUrl: "https://sydneywebdesigner.com.au/services/digital-pr",
});

export default function DigitalPRPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Services", url: "https://sydneywebdesigner.com.au/services" },
    { name: "Digital PR", url: "https://sydneywebdesigner.com.au/services/digital-pr" }
  ];

  const serviceData = {
    name: "Digital PR Services",
    description: "Strategic digital PR campaigns that earn media coverage, authoritative backlinks, and brand awareness. Combine traditional PR with SEO for maximum impact.",
    provider: "Sydney Web Designer"
  };

  const benefits = [
    {
      icon: "fa-newspaper",
      title: "Earn Media Coverage",
      description: "Get featured in industry publications, news sites, and authoritative media",
      points: [
        "Major publication placements",
        "Industry-specific media coverage",
        "National and local news mentions",
        "Podcast and interview opportunities"
      ]
    },
    {
      icon: "fa-link",
      title: "High-Authority Backlinks",
      description: "Secure editorial links from trusted, high-DR news and media sites",
      points: [
        "Links from DR 70+ publications",
        "Editorial, contextual placements",
        "Permanent media mentions",
        "Natural, diverse anchor text"
      ]
    },
    {
      icon: "fa-bullhorn",
      title: "Amplify Brand Awareness",
      description: "Reach wider audiences and establish thought leadership",
      points: [
        "Increased brand visibility",
        "Thought leader positioning",
        "Industry expert recognition",
        "Expanded market reach"
      ]
    },
    {
      icon: "fa-chart-line",
      title: "Boost SEO Performance",
      description: "Improve rankings with authoritative links and brand signals",
      points: [
        "Domain authority growth",
        "Improved search rankings",
        "Enhanced E-E-A-T signals",
        "Brand search volume increase"
      ]
    },
    {
      icon: "fa-users",
      title: "Targeted Referral Traffic",
      description: "Drive qualified visitors from relevant publications",
      points: [
        "Industry-specific traffic",
        "Engaged, interested readers",
        "Higher conversion potential",
        "Long-term traffic benefits"
      ]
    },
    {
      icon: "fa-shield-alt",
      title: "Build Trust & Credibility",
      description: "Association with trusted media builds customer confidence",
      points: [
        "Third-party validation",
        "Enhanced brand reputation",
        "Customer trust signals",
        "Competitive differentiation"
      ]
    },
  ];

  const services = [
    {
      title: "Media Outreach & Placements",
      items: [
        "Journalist relationship building",
        "Press release creation and distribution",
        "Media pitch development",
        "News angle identification",
        "Publication target research",
        "Follow-up and relationship nurturing",
        "Media kit preparation",
        "Interview coordination"
      ]
    },
    {
      title: "HARO & Source Requests",
      items: [
        "Daily HARO monitoring",
        "Expert source responses",
        "Quote and commentary provision",
        "Fast-turnaround responses",
        "Journalist inquiry matching",
        "Multi-platform source requests",
        "SourceBottle and Qwoted monitoring",
        "Response tracking and follow-up"
      ]
    },
    {
      title: "Content Creation for PR",
      items: [
        "Data-driven research and surveys",
        "Newsworthy content angles",
        "Press-worthy infographics",
        "Expert commentary articles",
        "Trend reports and insights",
        "Industry analysis pieces",
        "Case study storytelling",
        "Thought leadership content"
      ]
    },
    {
      title: "Digital PR Campaigns",
      items: [
        "Campaign strategy and planning",
        "Creative campaign concepts",
        "Data research and analysis",
        "Asset creation (visual, interactive)",
        "Multi-channel promotion",
        "Influencer and media outreach",
        "Performance tracking and reporting",
        "Campaign optimization"
      ]
    },
  ];

  const mediaTypes = [
    { icon: "fa-newspaper", type: "News Publications", description: "Major news outlets and media" },
    { icon: "fa-briefcase", type: "Industry Publications", description: "Trade and niche media" },
    { icon: "fa-microphone", type: "Podcasts", description: "Expert guest appearances" },
    { icon: "fa-globe", type: "Online Magazines", description: "Digital publications and blogs" },
    { icon: "fa-tv", type: "Broadcast Media", description: "TV and radio opportunities" },
    { icon: "fa-users", type: "Industry Influencers", description: "Thought leader collaborations" },
  ];

  const caseStudy = {
    name: "Sydney Fintech Startup",
    challenge: "New player in competitive market with zero media presence. No brand awareness, minimal backlinks (DA 22), and struggling to compete with established financial services brands. Needed credibility and visibility fast.",
    solution: "Strategic 6-month digital PR campaign including original consumer finance research, HARO response program, targeted journalist outreach, data-driven content assets, and coordinated launch PR for new product features.",
    results: [
      "Featured in Forbes, Financial Review, and SmartCompany",
      "47 media mentions across major publications",
      "23 backlinks from DR 60+ sites including AFR and news.com.au",
      "Domain Authority: 22 → 51",
      "Brand search volume increased 840%",
      "Organic traffic up 425% from authority links"
    ],
    timeline: "6 months"
  };

  const faq = [
    {
      q: "How is digital PR different from traditional PR?",
      a: "Digital PR focuses on online media coverage, authoritative backlinks, and SEO benefits alongside brand awareness. While traditional PR targets offline media and brand reputation, digital PR strategically targets online publications, bloggers, and digital journalists to earn links that improve search rankings. It combines PR tactics with SEO objectives, measuring success through metrics like domain authority, backlinks, and organic traffic alongside traditional coverage metrics."
    },
    {
      q: "How does digital PR help with SEO?",
      a: "Digital PR earns high-authority editorial backlinks from trusted news and media sites (often DR 70-90), which significantly boost domain authority and search rankings. These authoritative links send powerful trust signals to Google. Additionally, brand mentions (even without links) help establish E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), increase brand search volume, and often drive direct referral traffic that converts well."
    },
    {
      q: "What is HARO and how do you use it?",
      a: "HARO (Help A Reporter Out) is a platform connecting journalists seeking expert sources with people who can provide quotes and insights. We monitor HARO requests 3x daily, identify relevant opportunities for your business, craft compelling expert responses, and submit them quickly (journalists often work on tight deadlines). Successful placements result in media coverage and backlinks from major publications like Forbes, HuffPost, and industry-specific outlets."
    },
    {
      q: "What types of businesses benefit most from digital PR?",
      a: "B2B companies, professional services, SaaS companies, fintech, healthtech, established brands, and businesses with unique data or expertise benefit greatly. Companies with interesting stories, industry insights, or proprietary data make ideal candidates. Businesses in competitive industries where trust and authority matter (finance, healthcare, legal) see particularly strong ROI. Even local businesses can benefit from local media coverage and industry publication features."
    },
    {
      q: "How many media placements can I expect?",
      a: "Results vary by industry, news angle, and budget. With consistent effort, expect 3-8 quality placements per month through HARO and outreach combined. Major campaign pieces might earn 10-30 placements over 2-3 months. Focus should be on quality over quantity - one placement in Forbes or Financial Review is worth more than 20 placements in low-authority sites. We prioritize publications that provide both SEO value and relevant exposure."
    },
    {
      q: "Do you guarantee placements in specific publications?",
      a: "We can't guarantee specific publication placements as editorial decisions are beyond our control. What we guarantee is consistent effort: daily HARO monitoring, strategic outreach, quality pitch creation, relationship building, and proven tactics. We target realistic publications based on your industry and story angles. Our track record shows consistent placements in major publications, but specific outlets can't be guaranteed."
    },
    {
      q: "How do you create newsworthy angles for my business?",
      a: "We identify news angles through multiple approaches: original data research and surveys, trend analysis and timely commentary, expert opinions on industry news, company milestones and achievements, unique insights from your proprietary data, customer success stories with compelling results, and controversial or contrarian viewpoints. We also monitor news cycles for reactive opportunities where your expertise is relevant to breaking news."
    },
    {
      q: "How long do digital PR results take?",
      a: "Some results are immediate - a successful HARO response can result in publication within days or weeks. Campaign-based PR takes longer: developing assets (1-2 months), outreach and placements (2-3 months), SEO impact from links (3-6 months). Brand awareness and authority build over time. Most clients see meaningful placements by month 2-3 and significant SEO impact by month 6."
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
      <ServiceHeroSection
        badge={{
          icon: "fas fa-bullhorn",
          text: "Digital PR Specialists"
        }}
        heading="Digital PR Sydney"
        description="Earn media coverage, authoritative backlinks, and brand awareness. Strategic digital PR that amplifies your SEO and reputation."
        buttons={{
          primary: {
            text: "Get PR Strategy",
            dataPopup: "seoAudit"
          },
          secondary: {
            text: "Our Services",
            href: "#services"
          }
        }}
      />

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#f59e0b] mb-2">47</div>
              <div className="text-sm text-gray-600">Media Mentions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#f59e0b] mb-2">DR 60+</div>
              <div className="text-sm text-gray-600">Avg Link Authority</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#f59e0b] mb-2">840%</div>
              <div className="text-sm text-gray-600">Brand Search Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#f59e0b] mb-2">425%</div>
              <div className="text-sm text-gray-600">Traffic Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Why Digital PR Drives Business Growth</h2>
            <p>Combine brand awareness with powerful SEO benefits</p>
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
            <h2>Our Digital PR Services</h2>
            <p>Comprehensive PR strategies that earn coverage and build authority</p>
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

      {/* Media Types */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Where We Get You Featured</h2>
            <p>Diverse media placements across channels and publications</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mediaTypes.map((type, index) => (
              <div key={index} className="card text-center hover:border-[#f59e0b] transition-all">
                <i className={`fas ${type.icon} text-4xl text-[#f59e0b] mb-4`}></i>
                <h3 className="font-bold text-primary-navy mb-2 text-lg">{type.type}</h3>
                <p className="text-sm text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PR Process */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container">
          <div className="section-title">
            <h2>Our Digital PR Process</h2>
            <p>Strategic approach to earning media coverage and authority</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="w-16 h-16 bg-[#f59e0b] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-lg mb-3 text-primary-navy">Research & Strategy</h3>
              <p className="text-sm text-gray-600">Identify news angles, target publications, and develop campaign strategy</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-[#f59e0b] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-lg mb-3 text-primary-navy">Content Creation</h3>
              <p className="text-sm text-gray-600">Develop press releases, data research, and newsworthy assets</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-[#f59e0b] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-lg mb-3 text-primary-navy">Outreach & Pitching</h3>
              <p className="text-sm text-gray-600">Contact journalists, respond to HARO, and pitch story angles</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-[#f59e0b] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-lg mb-3 text-primary-navy">Track & Optimize</h3>
              <p className="text-sm text-gray-600">Monitor placements, measure impact, and refine strategy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white">
        <div className="container">
          <div className="section-title">
            <h2 className="text-white">Real Digital PR Results</h2>
            <p className="text-slate-200">How we built media presence and authority from scratch</p>
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
            <h2>Digital PR Frequently Asked Questions</h2>
            <p>Common questions about digital PR and media outreach</p>
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
        title="Ready to Earn Media Coverage and Authority?"
        description="Get a free digital PR strategy consultation. Discover how we can help you earn placements in major publications, build authoritative backlinks, and amplify your brand."
        primaryButtonText="Get PR Strategy"
        primaryButtonAction="seoAudit"
        secondaryButtonText="View Our Work"
      />
    </>
  );
}
