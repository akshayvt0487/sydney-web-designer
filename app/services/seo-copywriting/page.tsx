import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/schemas";
import CTASection from "@/components/CTASection";

export const metadata = generateMetadata({
  title: "SEO Copywriting Sydney | Content That Ranks & Converts",
  description: "Expert SEO copywriting services in Sydney. Create compelling, keyword-optimized content that ranks on Google and converts visitors into customers.",
  keywords: "seo copywriting sydney, seo content writing, keyword optimized content, conversion copywriting, content marketing, seo blog writing",
  canonicalUrl: "https://sydneywebdesigner.com.au/services/seo-copywriting",
});

export default function SEOCopywritingPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Services", url: "https://sydneywebdesigner.com.au/services" },
    { name: "SEO Copywriting", url: "https://sydneywebdesigner.com.au/services/seo-copywriting" }
  ];

  const serviceData = {
    name: "SEO Copywriting Services",
    description: "Professional SEO copywriting that combines keyword optimization with persuasive messaging. Content that ranks on Google and drives conversions.",
    provider: "Sydney Web Designer"
  };

  const benefits = [
    {
      icon: "fa-search",
      title: "Rank for Target Keywords",
      description: "Strategic keyword integration that pleases search engines and readers",
      points: [
        "Natural keyword placement",
        "Long-tail keyword targeting",
        "Semantic keyword optimization",
        "Featured snippet optimization"
      ]
    },
    {
      icon: "fa-chart-line",
      title: "Drive Organic Traffic",
      description: "Content that attracts qualified visitors from search engines",
      points: [
        "Search intent alignment",
        "Topic cluster strategies",
        "E-E-A-T optimization",
        "Topical authority building"
      ]
    },
    {
      icon: "fa-bullseye",
      title: "Increase Conversions",
      description: "Persuasive copy that turns visitors into customers",
      points: [
        "Compelling calls-to-action",
        "Benefits-focused messaging",
        "Trust-building content",
        "Conversion-optimized landing pages"
      ]
    },
    {
      icon: "fa-users",
      title: "Engage Your Audience",
      description: "Content that resonates with readers and keeps them on your site",
      points: [
        "Reader-friendly formatting",
        "Scannable content structure",
        "Engaging storytelling",
        "Reduced bounce rates"
      ]
    },
    {
      icon: "fa-trophy",
      title: "Build Brand Authority",
      description: "Establish expertise and trust through quality content",
      points: [
        "Thought leadership articles",
        "In-depth guides and resources",
        "Original research and insights",
        "Industry expertise demonstration"
      ]
    },
    {
      icon: "fa-link",
      title: "Earn Quality Backlinks",
      description: "Create link-worthy content that attracts natural backlinks",
      points: [
        "Shareable content creation",
        "Data-driven articles",
        "Comprehensive resources",
        "Linkable asset development"
      ]
    },
  ];

  const services = [
    {
      title: "Website Copywriting",
      items: [
        "Homepage copy optimization",
        "Service page content",
        "About page storytelling",
        "Product descriptions",
        "Landing page copywriting",
        "Category page content",
        "FAQ page creation",
        "Contact page optimization"
      ]
    },
    {
      title: "Blog & Article Writing",
      items: [
        "SEO blog posts",
        "Industry thought leadership articles",
        "How-to guides and tutorials",
        "Listicles and roundups",
        "Case studies and success stories",
        "News and trend articles",
        "Expert interviews",
        "Long-form pillar content"
      ]
    },
    {
      title: "Content Strategy",
      items: [
        "Keyword research and planning",
        "Content gap analysis",
        "Topic cluster development",
        "Editorial calendar creation",
        "Competitor content analysis",
        "Search intent mapping",
        "Content optimization audits",
        "Performance tracking and reporting"
      ]
    },
    {
      title: "Specialized Content",
      items: [
        "Technical SEO content",
        "Local business content",
        "E-commerce product copy",
        "B2B content marketing",
        "White papers and ebooks",
        "Email marketing copy",
        "Social media content",
        "Video scripts and descriptions"
      ]
    },
  ];

  const contentTypes = [
    { icon: "fa-file-alt", type: "Blog Posts", description: "Engaging articles that rank and convert" },
    { icon: "fa-browser", type: "Landing Pages", description: "High-converting SEO landing pages" },
    { icon: "fa-shopping-cart", type: "Product Descriptions", description: "SEO-optimized product copy" },
    { icon: "fa-book", type: "Pillar Content", description: "Comprehensive topic authority pages" },
    { icon: "fa-question-circle", type: "FAQ Content", description: "Answer user questions, rank for voice search" },
    { icon: "fa-chart-bar", type: "Case Studies", description: "Results-focused success stories" },
  ];

  const caseStudy = {
    name: "Sydney Professional Services Firm",
    challenge: "Website with thin content not ranking for target keywords. Blog producing content with no clear strategy, resulting in low traffic and zero leads from organic search.",
    solution: "Comprehensive content strategy including keyword research, topic cluster development, pillar page creation, and strategic blog content calendar. Rewrote all service pages and created 24 strategic blog posts over 6 months.",
    results: [
      "Organic traffic increased 520%",
      "Ranking for 180+ keywords in top 10",
      "42 featured snippets captured",
      "Content-driven leads up 380%",
      "Average time on page increased from 1:20 to 4:35",
      "Blog traffic generating 15+ qualified leads monthly"
    ],
    timeline: "6 months"
  };

  const faq = [
    {
      q: "What makes SEO copywriting different from regular copywriting?",
      a: "SEO copywriting combines persuasive writing with search engine optimization. It strategically incorporates target keywords, follows SEO best practices (headings, meta descriptions, internal linking), addresses search intent, and is optimized for both readers and search engines. Regular copywriting focuses solely on persuasion without considering search visibility."
    },
    {
      q: "How do you balance keyword optimization with natural writing?",
      a: "We start with understanding search intent and user needs, then naturally weave keywords into compelling copy. We use semantic keywords and variations, focus on topics rather than exact-match stuffing, prioritize readability and user experience, and ensure the content flows naturally. Keywords should enhance, not compromise, the quality of writing."
    },
    {
      q: "How long should SEO content be?",
      a: "Content length should match search intent and competition. Blog posts typically perform best at 1,500-2,500 words for competitive keywords. Pillar content may be 3,000-5,000 words. Service pages work well at 800-1,500 words. However, quality and comprehensiveness matter more than arbitrary word counts. We analyze what's ranking and aim to be more thorough."
    },
    {
      q: "Can you write content for technical or specialized industries?",
      a: "Yes! We work with technical industries including SaaS, finance, healthcare, legal, engineering, and more. Our process includes in-depth research, SME interviews when needed, and review cycles to ensure accuracy. We specialize in making complex topics accessible while maintaining technical accuracy and demonstrating expertise (E-E-A-T)."
    },
    {
      q: "How often should we publish new content?",
      a: "Consistency matters more than frequency. For most businesses, 2-4 high-quality blog posts per month is ideal. This allows for proper research, writing, and promotion. New websites benefit from more frequent publishing initially (weekly) to build authority. Established sites might focus on updating existing content alongside new posts."
    },
    {
      q: "Do you optimize existing content or only create new content?",
      a: "Both! Content optimization often delivers faster ROI than new content. We audit existing pages, identify optimization opportunities, update outdated information, improve keyword targeting, enhance readability, add missing elements (images, CTAs), and refresh for current search intent. We typically combine new content with strategic updates."
    },
    {
      q: "How do you measure the success of SEO copywriting?",
      a: "We track multiple metrics: keyword rankings for target terms, organic traffic growth, time on page and engagement metrics, conversion rates and leads generated, backlinks earned, featured snippets captured, and social shares. We provide regular reports showing how content performance aligns with business goals."
    },
    {
      q: "What's your process for understanding our brand voice?",
      a: "We start with a comprehensive onboarding: reviewing existing content, discussing brand guidelines and tone preferences, understanding target audience personas, identifying key differentiators, and analyzing competitor messaging. We typically do a test piece first to align on voice before scaling production."
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
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#8b5cf6] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
              <i className="fas fa-pen-nib text-[#f59e0b]"></i>
              <span className="text-[#f59e0b] text-sm font-semibold">SEO Content Specialists</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              SEO Copywriting Sydney
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-100">
              Content that ranks on Google and converts visitors into customers. Strategic SEO copywriting for Sydney businesses.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="#contact" className="btn btn-primary">
                Get Content Strategy
              </Link>
              <Link href="#services" className="btn btn-secondary">
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">520%</div>
                <div className="text-sm text-slate-300">Avg Traffic Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">180+</div>
                <div className="text-sm text-slate-300">Keywords Ranking</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">42</div>
                <div className="text-sm text-slate-300">Featured Snippets</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">380%</div>
                <div className="text-sm text-slate-300">More Leads</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Why SEO Copywriting Drives Business Growth</h2>
            <p>Content that works for both search engines and your customers</p>
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
            <h2>Our SEO Copywriting Services</h2>
            <p>Comprehensive content solutions for every stage of the customer journey</p>
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

      {/* Content Types */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Content Types We Create</h2>
            <p>From blog posts to landing pages, all optimized for search and conversion</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contentTypes.map((type, index) => (
              <div key={index} className="card text-center hover:border-[#f59e0b] transition-all">
                <i className={`fas ${type.icon} text-4xl text-[#f59e0b] mb-4`}></i>
                <h3 className="font-bold text-primary-navy mb-2 text-lg">{type.type}</h3>
                <p className="text-sm text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white">
        <div className="container">
          <div className="section-title">
            <h2 className="text-white">Real SEO Copywriting Results</h2>
            <p className="text-slate-200">How strategic content transformed organic performance</p>
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
            <h2>SEO Copywriting Frequently Asked Questions</h2>
            <p>Common questions about SEO content creation</p>
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
        title="Ready to Create Content That Ranks?"
        description="Get a free content strategy consultation and discover how SEO copywriting can drive organic traffic, engage your audience, and grow your business."
        primaryButtonText="Get Content Strategy"
        primaryButtonAction="seoAudit"
        secondaryButtonText="View Our Work"
      />
    </>
  );
}
