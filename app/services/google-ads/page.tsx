import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema, generateLocalBusinessSchema } from "@/lib/schemas";
import ServiceHeroSection from "@/components/ServiceHeroSection";

export const metadata = generateMetadata({
  title: "Google Ads Management Sydney | PPC Advertising Services",
  description: "Expert Google Ads management in Sydney. Deliver qualified leads and maximum ROI with professional PPC campaigns. $2M+ ad spend managed, average 300% ROI, 100+ successful campaigns.",
  keywords: "google ads management sydney, ppc advertising sydney, google adwords sydney, paid search sydney, google ads expert, ppc management sydney, sem services",
  canonicalUrl: "https://sydneywebdesigner.com.au/services/google-ads",
  ogImage: "/images/og/services.svg",
});

export default function GoogleAdsPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Services", url: "https://sydneywebdesigner.com.au/services" },
    { name: "Google Ads", url: "https://sydneywebdesigner.com.au/services/google-ads" }
  ];

  const serviceData = {
    name: "Google Ads Management",
    description: "Expert Google Ads management services that deliver qualified leads and maximum ROI. Professional PPC campaign setup, optimization, and ongoing management for Sydney businesses.",
    provider: "Sydney Web Designer"
  };
  const stats = [
    { number: "$2M+", label: "Ad Spend Managed" },
    { number: "300%", label: "Average ROI" },
    { number: "5%", label: "Average CTR" },
    { number: "100+", label: "Campaigns" },
  ];

  const features = [
    {
      icon: "fas fa-bullseye",
      title: "Campaign Strategy",
      description: "Data-driven strategy",
      items: ["Campaign structure", "Budget allocation", "Goal tracking", "KPI setting"]
    },
    {
      icon: "fas fa-search",
      title: "Keyword Research",
      description: "Profitable keywords",
      items: ["High-intent keywords", "Negative keywords", "Competitor research", "Volume data"]
    },
    {
      icon: "fas fa-pen",
      title: "Ad Copywriting",
      description: "Compelling ads",
      items: ["Ad variations", "A/B testing", "CTA optimization", "Ad extensions"]
    },
    {
      icon: "fas fa-dollar-sign",
      title: "Bid Management",
      description: "Smart bidding",
      items: ["Bid optimization", "Budget management", "CPC optimization", "Quality score"]
    },
    {
      icon: "fas fa-file-alt",
      title: "Landing Pages",
      description: "Convert clicks",
      items: ["Landing page design", "A/B testing", "Conversion tracking", "Form optimization"]
    },
    {
      icon: "fas fa-chart-bar",
      title: "Reporting",
      description: "Transparent reports",
      items: ["Conversion tracking", "ROI analysis", "Performance metrics", "Recommendations"]
    },
  ];

  const process = [
    { number: 1, title: "Discovery", description: "Deep dive into your business, goals, and requirements" },
    { number: 2, title: "Strategy", description: "Develop custom strategy based on research and analysis" },
    { number: 3, title: "Planning", description: "Create detailed roadmap and project timeline" },
    { number: 4, title: "Execution", description: "Implement solution with attention to detail" },
    { number: 5, title: "Testing", description: "Thorough quality assurance and optimization" },
    { number: 6, title: "Launch & Support", description: "Deploy and provide ongoing support" },
  ];

  const caseStudies = [
    {
      name: "OSAN Ability",
      industry: "NDIS Provider",
      result: "Google Ads generating daily qualified leads with 250% ROI and 3.2% conversion"
    },
    {
      name: "GPS Vehicle Inspections",
      industry: "Automotive",
      result: "PPC campaigns achieving 5.8% CTR and 340% increase in inspection bookings"
    },
  ];

  const testimonials = [
    {
      text: "Professional, responsive, and delivered exactly what we needed. The results have been fantastic and we've seen significant improvements.",
      author: "Sydney Business Owner",
      role: "Professional Services"
    },
    {
      text: "The team at Sydney Web Designer took the time to understand our business. Their expertise and transparent approach made the entire process smooth.",
      author: "Local Business",
      role: "Parramatta, NSW"
    },
    {
      text: "Highly recommend Sydney Web Designer for their professionalism and quality of work. They exceeded our expectations in every way.",
      author: "Sydney Client",
      role: "Service Provider"
    },
  ];

  const setupIncludes = [
    { title: "Marketing Strategy Development", description: "Comprehensive strategy aligned with your business goals" },
    { title: "Landing Page Build", description: "Custom-designed, high-converting landing page" },
    { title: "Sales Copywriting", description: "Compelling ad copy and landing page content" },
    { title: "Campaign Setup in Google Ads", description: "Complete account and campaign configuration" },
    { title: "Keyword & Competitor Research", description: "In-depth analysis to target the right audience" },
    { title: "Conversion Tracking Setup", description: "Track calls, forms, and sales accurately" },
    { title: "Negative Keywords Configuration", description: "Prevent wasted spend on irrelevant searches" },
    { title: "Fraud Click Monitoring Setup", description: "Protect your budget from invalid clicks" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
      />

      {/* Hero Section */}
      <ServiceHeroSection
        badge={{
          icon: "fab fa-google",
          text: "Google Ads Specialists"
        }}
        heading="Google Ads Management Sydney"
        description="Maximize ROI with expert Google Ads management. Campaign setup, optimization, and ongoing management for your business."
        buttons={{
          primary: {
            text: "Start Google Ads",
            dataPopup: "contact"
          },
          secondary: {
            text: "Our Process",
            href: "#process"
          }
        }}
      />

      {/* Trust Badges Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#f59e0b]"><i className="fas fa-trophy"></i></div>
              <div className="text-sm text-gray-600">13+ Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#f59e0b]"><i className="fas fa-star"></i></div>
              <div className="text-sm text-gray-600">50+ 5-Star Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#f59e0b]"><i className="fas fa-check-circle"></i></div>
              <div className="text-sm text-gray-600">Professional Service</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#f59e0b]"><i className="fas fa-chart-line"></i></div>
              <div className="text-sm text-gray-600">Proven Results</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#1e293b]">
            Why Choose Google Ads Management Sydney?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-[#f59e0b] hover:-translate-y-2 transition-transform">
                <div className="text-5xl font-bold text-[#f59e0b] mb-2">{stat.number}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1e293b]">
            Our Google Ads Management Sydney Services
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
            Comprehensive solutions designed to help your business succeed
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-[#f59e0b]/30 hover:-translate-y-2 transition-transform">
                <div className="text-5xl mb-6 text-[#f59e0b]">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#1e293b]">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="fas fa-check text-[#f59e0b] mr-3 mt-1"></i>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20" id="process">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1e293b]">
            Our Proven Process
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
            A systematic approach to deliver outstanding results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
                <div className="w-24 h-24 bg-[#1e293b] text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-xl">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#1e293b]">
            Real Results for Sydney Businesses
          </h2>

          <div className="max-w-5xl mx-auto space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="border-b-4 border-[#f59e0b] pb-6 mb-6">
                  <h3 className="text-3xl font-bold text-[#1e293b] mb-2">{study.name}</h3>
                  <div className="text-[#f59e0b] font-semibold text-lg">{study.industry}</div>
                </div>
                <p className="text-gray-700 text-lg">{study.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Proof Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1e293b]">
            Real Google Ads Results - Proof of Performance
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
            See the actual campaign data and results we've achieved for our Google Ads clients
          </p>

          {/* Campaign Performance Dashboard */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-[#f59e0b]">
              <i className="fas fa-chart-line mr-3"></i>
              Google Ads Dashboard Performance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Campaign Overview */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-[#1e293b] mb-4 text-center">Campaign Performance Overview</h4>
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-12 min-h-[350px] flex flex-col items-center justify-center">
                  <div className="text-6xl mb-4 opacity-30"><i className="fas fa-dollar-sign"></i></div>
                  <p className="text-gray-500 italic">Google Ads Dashboard Screenshot</p>
                  <p className="text-gray-400 text-sm mt-2">[Upload dashboard showing impressions, clicks, CTR, conversions]</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-3xl font-bold text-[#f59e0b]">5.8%</p>
                    <p className="text-gray-600 text-sm">Click-Through Rate</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-3xl font-bold text-[#f59e0b]">$2.45</p>
                    <p className="text-gray-600 text-sm">Cost Per Click</p>
                  </div>
                </div>
              </div>

              {/* Conversions */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-[#1e293b] mb-4 text-center">Conversions & ROI</h4>
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-12 min-h-[350px] flex flex-col items-center justify-center">
                  <div className="text-6xl mb-4 opacity-30"><i className="fas fa-bullseye"></i></div>
                  <p className="text-gray-500 italic">Conversion Tracking Screenshot</p>
                  <p className="text-gray-400 text-sm mt-2">[Upload screenshot showing conversion data & ROI]</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-3xl font-bold text-[#f59e0b]">250%</p>
                    <p className="text-gray-600 text-sm">Return on Ad Spend</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-3xl font-bold text-[#f59e0b]">3.2%</p>
                    <p className="text-gray-600 text-sm">Conversion Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Generation Proof */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-[#f59e0b]">
              <i className="fas fa-phone mr-3"></i>
              Lead Generation - Calls & Bookings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-[#1e293b] mb-4 text-center">Phone Call Tracking</h4>
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-12 min-h-[300px] flex flex-col items-center justify-center">
                  <div className="text-6xl mb-4 opacity-30"><i className="fas fa-phone"></i></div>
                  <p className="text-gray-500 italic">Call Tracking Dashboard</p>
                  <p className="text-gray-400 text-sm mt-2">[Upload screenshot showing call volume from ads]</p>
                </div>
                <div className="mt-6 p-4 bg-orange-50 border-l-4 border-[#f59e0b] rounded-lg">
                  <p className="font-semibold text-[#1e293b]">340% Increase in Calls</p>
                  <p className="text-gray-600 text-sm mt-2">From 50 to 220 qualified calls per month</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-[#1e293b] mb-4 text-center">Form Submissions & Bookings</h4>
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-12 min-h-[300px] flex flex-col items-center justify-center">
                  <div className="text-6xl mb-4 opacity-30"><i className="fas fa-file-alt"></i></div>
                  <p className="text-gray-500 italic">Form Conversions Screenshot</p>
                  <p className="text-gray-400 text-sm mt-2">[Upload screenshot showing booking/form data]</p>
                </div>
                <div className="mt-6 p-4 bg-orange-50 border-l-4 border-[#f59e0b] rounded-lg">
                  <p className="font-semibold text-[#1e293b]">Daily Qualified Leads</p>
                  <p className="text-gray-600 text-sm mt-2">15-20 high-quality leads generated daily</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-[#1e293b] mb-4 text-center">Lead Value & Quality</h4>
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-12 min-h-[300px] flex flex-col items-center justify-center">
                  <div className="text-6xl mb-4 opacity-30"><i className="fas fa-gem"></i></div>
                  <p className="text-gray-500 italic">Lead Quality Metrics</p>
                  <p className="text-gray-400 text-sm mt-2">[Upload CRM screenshot showing lead quality/conversion]</p>
                </div>
                <div className="mt-6 p-4 bg-orange-50 border-l-4 border-[#f59e0b] rounded-lg">
                  <p className="font-semibold text-[#1e293b]">$125 Cost Per Lead</p>
                  <p className="text-gray-600 text-sm mt-2">Average customer value: $2,500 (20:1 ROI)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ad Performance Examples */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-[#f59e0b]">
              <i className="fas fa-bullseye mr-3"></i>
              Top Performing Ads
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-[#1e293b] mb-4 text-center">Search Ads Performance</h4>
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-12 min-h-[300px] flex flex-col items-center justify-center">
                  <div className="text-6xl mb-4 opacity-30"><i className="fas fa-search"></i></div>
                  <p className="text-gray-500 italic">Search Ads Screenshot</p>
                  <p className="text-gray-400 text-sm mt-2">[Upload screenshot showing top search ads with CTR]</p>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xl font-bold text-[#f59e0b]">7.2%</p>
                    <p className="text-gray-600 text-xs">CTR</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xl font-bold text-[#f59e0b]">8.5</p>
                    <p className="text-gray-600 text-xs">Quality Score</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xl font-bold text-[#f59e0b]">4.1%</p>
                    <p className="text-gray-600 text-xs">Conv Rate</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-[#1e293b] mb-4 text-center">Before vs After Campaign Optimization</h4>
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-12 min-h-[300px] flex flex-col items-center justify-center">
                  <div className="text-6xl mb-4 opacity-30"><i className="fas fa-chart-bar"></i></div>
                  <p className="text-gray-500 italic">Before/After Comparison</p>
                  <p className="text-gray-400 text-sm mt-2">[Upload comparison showing improvement metrics]</p>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xl font-bold text-[#f59e0b]">-45%</p>
                    <p className="text-gray-600 text-xs">CPC Reduction</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xl font-bold text-[#f59e0b]">+180%</p>
                    <p className="text-gray-600 text-xs">Conversions</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xl font-bold text-[#f59e0b]">+250%</p>
                    <p className="text-gray-600 text-xs">ROI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center p-12 bg-[#1e293b] rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-4">Ready for Results Like These?</h3>
            <p className="text-xl mb-8 opacity-90">Get your free Google Ads audit and strategy session</p>
            <Link href="#lead-form" className="btn btn-primary">
              Get Free Ads Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#1e293b]">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#f59e0b]">
                <div className="text-[#f59e0b] text-2xl mb-6">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="text-gray-700 italic mb-8 text-lg leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="font-semibold text-[#1e293b]">{testimonial.author}</div>
                <div className="text-gray-600 text-sm">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="py-20">
        <div className="container">
          {/* Setup Fees Information */}
          {/* <div className="bg-orange-50 border-4 border-[#f59e0b] rounded-2xl p-12 mb-12 shadow-xl">
            <h3 className="text-4xl font-bold text-center text-[#1e293b] mb-4">
              <i className="fas fa-cog mr-3"></i>
              One-Time Setup Fee: $5,000 + GST
            </h3>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Professional campaign setup to ensure your ads perform optimally from day one. This comprehensive setup covers everything needed for a successful campaign launch.
            </p>

            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <h4 className="text-2xl font-bold text-[#1e293b] mb-8 text-center">What&apos;s Included in Setup:</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {setupIncludes.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border-b border-gray-100">
                    <i className="fas fa-check text-[#f59e0b] text-2xl flex-shrink-0"></i>
                    <div>
                      <p className="font-bold text-[#1e293b] text-lg mb-1">{item.title}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-8 bg-[#1e293b] rounded-2xl text-center text-white">
                <p className="text-2xl font-semibold mb-4">
                  <i className="fas fa-star mr-3"></i>
                  Investment Value: $5,000 + GST (One-Time)
                </p>
                <p className="text-lg opacity-90">
                  This comprehensive setup typically takes 2-3 weeks and ensures your campaigns are built for maximum ROI from launch
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-[#1e293b]">Google Ads Management Sydney Pricing</h2>
              <p className="text-xl text-gray-600">Choose the package that fits your needs and budget</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="border-4 border-[#f59e0b] rounded-2xl p-8 text-center bg-orange-50 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f59e0b] text-white px-6 py-2 rounded-full text-sm font-bold">
                  Growth Plans - Most Popular
                </div>
                <h3 className="text-2xl font-bold text-[#1e293b] mt-4 mb-4">Paid Ads Management</h3>
                <div className="text-5xl font-bold text-[#f59e0b] mb-2">$1,000</div>
                <div className="text-gray-600 mb-8">per month + GST</div>
                <ul className="text-left space-y-3 mb-8">
                  {["Google Ads OR Facebook Ads management", "Campaign strategy & setup", "Ad copywriting & design", "Keyword research & targeting", "Bid optimization", "A/B testing", "Conversion tracking", "Monthly performance reports", "Ongoing optimization", "Email & phone support"].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check text-[#f59e0b] mr-3 mt-1"></i>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#lead-form" className="btn btn-primary w-full">
                  Get Started
                </Link>
              </div>

              <div className="border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-[#f59e0b] transition-colors">
                <h3 className="text-2xl font-bold text-[#1e293b] mb-4 mt-8">Multi-Platform Ads</h3>
                <div className="text-5xl font-bold text-[#f59e0b] mb-2">$2,000</div>
                <div className="text-gray-600 mb-8">per month + GST</div>
                <ul className="text-left space-y-3 mb-8">
                  {["Google Ads + Facebook Ads", "Multi-platform strategy", "Advanced campaign management", "Cross-platform optimization", "Enhanced A/B testing", "Advanced conversion tracking", "Landing page optimization", "Detailed analytics & reporting", "Weekly optimization calls", "Priority support"].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check text-[#f59e0b] mr-3 mt-1"></i>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#lead-form" className="btn btn-secondary w-full">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Lead Form Section */}
      <section className="py-20 bg-gray-50" id="lead-form">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-[#1e293b] rounded-2xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-4 text-center">Get Your Free Consultation</h3>
            <p className="text-xl text-center opacity-90 mb-12">
              Tell us about your project and we&apos;ll provide expert advice and a custom quote
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-2">Full Name *</label>
                  <input type="text" required placeholder="Your name" className="w-full px-4 py-3 rounded-lg text-gray-900" />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Email *</label>
                  <input type="email" required placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg text-gray-900" />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Phone *</label>
                  <input type="tel" required placeholder="04XX XXX XXX" className="w-full px-4 py-3 rounded-lg text-gray-900" />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Company</label>
                  <input type="text" placeholder="Your company (optional)" className="w-full px-4 py-3 rounded-lg text-gray-900" />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-2">Tell us about your project</label>
                <textarea placeholder="What are you looking to achieve?" rows={4} className="w-full px-4 py-3 rounded-lg text-gray-900"></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary bg-white text-[#1e293b] hover:bg-gray-100">
                  Start Google Ads
                </button>
                <p className="mt-4 text-sm opacity-80">
                  <i className="fas fa-comments mr-2"></i>
                  We&apos;ll respond within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#1e293b] text-white text-center">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create a custom solution for your business
          </p>
          <Link href="#lead-form" className="btn btn-secondary text-lg">
            Start Google Ads
          </Link>
        </div>
      </section>
    </>
  );
}
