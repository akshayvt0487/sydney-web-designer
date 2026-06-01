import Link from "next/link";
import { Metadata } from "next";
import { contactInfo, portfolioProjects } from "@/lib/constants";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import { generateBreadcrumbSchema, generateWebSiteSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Sydney Web Designer | Web Design & Digital Marketing",
  description: "Sydney Web Designer - 13+ years delivering custom web design, SEO & digital marketing for Sydney businesses. 500+ sites delivered. Get a free quote today.",
  keywords: "web designer sydney, web design sydney, sydney web designer, digital marketing sydney, seo sydney, website design sydney, web development sydney",
  alternates: {
    canonical: "https://www.sydneywebdesigner.com.au",
  },
  openGraph: {
    title: "Sydney Web Designer | Award-Winning Web Design & Digital Marketing",
    description: "Transform your digital presence with Sydney's premier web design agency. 500+ projects delivered, 4.9★ rating.",
    url: "https://www.sydneywebdesigner.com.au",
    siteName: "Sydney Web Designer",
    type: "website",
    images: [
      {
        url: "https://www.sydneywebdesigner.com.au/images/og/homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Sydney Web Designer - Premier Web Design & Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sydney Web Designer | Award-Winning Web Design Agency",
    description: "Transform your digital presence with Sydney's premier web design agency. 500+ projects, 4.9★ rating.",
    images: ["https://www.sydneywebdesigner.com.au/images/og/homepage.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HomePage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebSiteSchema()),
        }}
      />

      {/* HERO SECTION */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-dark-navy pt-20 pb-20">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

        <div className="container relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-orange/30 bg-primary-orange/10 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-primary-orange animate-pulse" />
            <span className="text-sm font-bold text-primary-orange">13+ Years of Excellence</span>
          </div>

          <h1 className="mb-6 font-heading text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Sydney Web Designer
            <span className="mt-2 block text-primary-orange">
              Award-Winning Web Design & Digital Marketing
            </span>
          </h1>

          <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Transform your digital presence with stunning websites that convert visitors into customers. Specialising in custom web design, SEO, and branding for Sydney businesses since 2013.
          </p>

          <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
            <button data-popup="contact" className="btn btn-primary btn-lg rounded-lg shadow-sm">
              <span className="flex items-center justify-center gap-2">
                Get Your Free Quote
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <Link href="/portfolio" className="btn btn-lg rounded-lg border border-slate-600 bg-transparent text-white hover:bg-slate-800 hover:border-slate-500">
              <span className="flex items-center justify-center gap-2">
                View Portfolio
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { icon: "fa-trophy", value: "500+", label: "Projects Delivered" },
              { icon: "fa-users", value: "98%", label: "Client Satisfaction" },
              { icon: "fa-star", value: "4.9", label: "Google Rating" },
              { icon: "fa-rocket", value: "12+", label: "Industries Served" },
            ].map((stat, i) => (
              <div key={i} className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 backdrop-blur-sm">
                <i className={`fas ${stat.icon} mb-3 text-2xl text-primary-orange`} />
                <div className="mb-1 font-heading text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm font-medium text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="border-b border-slate-200 bg-white py-20">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <p className="text-lg leading-relaxed text-slate-700 md:text-2xl">
            <strong>Sydney Web Designer</strong> is a Parramatta-based web design studio with <strong>13+ years of experience</strong> helping Sydney businesses grow online. We've delivered <strong>500+ websites</strong> across industries from healthcare to retail, combining strategy, design, and SEO under one roof.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary-orange">What We Do</span>
            <h2 className="mb-6 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
              Our <span className="text-primary-orange">Services</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              We don't just build websites — we engineer digital ecosystems where psychology meets infrastructure, and design meets systems thinking
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "fa-palette",
                title: "Web Design & Development",
                desc: "Strategic UX/UI design, semantic HTML architecture, accessibility compliance, Core Web Vitals optimization, and conversion-focused interfaces.",
                link: "/services/custom-web-design",
              },
              {
                icon: "fa-bullhorn",
                title: "Digital Marketing",
                desc: "Technical SEO, structured data, on-page optimization, conversion rate optimization, and data-driven growth strategies.",
                link: "/services/seo-sydney",
              },
              {
                icon: "fa-pen-nib",
                title: "Branding & Design",
                desc: "Brand positioning, design systems, visual hierarchy, typography discipline, and consistent component libraries.",
                link: "/services/brand-identity",
              },
            ].map((service, i) => (
              <Link
                key={i}
                href={service.link}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-10 shadow-sm transition-all hover:border-primary-orange/30 hover:shadow-card-hover"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-orange/10 text-primary-orange transition-colors group-hover:bg-primary-orange group-hover:text-white">
                  <i className={`fas ${service.icon} text-2xl`} />
                </div>
                <h3 className="mb-3 font-heading text-2xl font-bold text-slate-900 group-hover:text-primary-orange transition-colors">
                  {service.title}
                </h3>
                <p className="mb-8 flex-1 text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 font-bold text-primary-orange">
                  Learn More
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 font-bold text-primary-orange hover:text-[#d97706] group">
              View All Services
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary-orange">Our Work</span>
            <h2 className="mb-6 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
              Featured <span className="text-primary-orange">Projects</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              See how we've helped businesses transform their digital presence
            </p>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.slice(0, 6).map((project) => (
              <div key={project.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-card-hover">
                <PortfolioCarousel images={project.images || [project.image]} title={project.name} />
                <div className="p-8">
                  <div className="mb-4 inline-block rounded-md bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    {project.industry}
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-bold text-slate-900 group-hover:text-primary-orange transition-colors">
                    {project.name}
                  </h3>
                  <p className="mb-6 line-clamp-2 text-sm text-slate-600">
                    {project.description}
                  </p>
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary-orange hover:text-[#d97706]"
                    >
                      View Website
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio" className="btn btn-primary btn-lg rounded-lg shadow-sm">
              <span className="flex items-center gap-2">
                View Full Portfolio
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary-orange">Our Process</span>
            <h2 className="mb-6 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
              How We <span className="text-primary-orange">Work</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              A proven process that delivers exceptional results, every time
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", icon: "fa-comments", title: "Discovery & Strategy", desc: "We learn about your business, goals, and target audience to create a tailored strategy." },
              { step: "02", icon: "fa-pencil-ruler", title: "Design & Development", desc: "Our team brings your vision to life with stunning design and robust development." },
              { step: "03", icon: "fa-rocket", title: "Launch & Optimize", desc: "We launch your project and continuously optimize for peak performance." },
              { step: "04", icon: "fa-chart-line", title: "Growth & Support", desc: "Ongoing maintenance, updates, and marketing to ensure continued success." },
            ].map((process, i) => (
              <div key={i} className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-6 text-sm font-bold text-slate-400">{process.step}</div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <i className={`fas ${process.icon} text-xl`} />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-slate-900">{process.title}</h3>
                <p className="text-slate-600 leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary-orange">Testimonials</span>
            <h2 className="mb-6 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
              What Our <span className="text-primary-orange">Clients Say</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Don't just take our word for it - hear from businesses we've helped succeed
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { name: "Michael Chen", company: "GPS Vehicle Inspections", text: "Sydney Web Designer completely transformed our online presence. The new website looks amazing and we've seen a 300% increase in inquiries.", rating: 5 },
              { name: "Sarah Thompson", company: "Actuate Property", text: "Outstanding service from start to finish. They created a beautiful brand identity and website that perfectly represents our business.", rating: 5 },
              { name: "David Martinez", company: "Two Brothers Removalist", text: "The SEO results have been incredible. We're now ranking #1 for multiple keywords and getting more calls than ever before.", rating: 5 },
            ].map((testimonial, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <div className="mb-4 flex gap-1 text-primary-orange">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-sm" />
                  ))}
                </div>
                <p className="mb-8 text-slate-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-lg font-bold text-slate-700">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/testimonials" className="inline-flex items-center gap-2 font-bold text-primary-orange hover:text-[#d97706] group">
              View All Testimonials
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="border-t border-b border-slate-200 bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary-orange">About Us</span>
          <h2 className="mb-10 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
            About <span className="text-primary-orange">Sydney Web Designer</span>
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              Founded in Sydney in 2013, <strong>Sydney Web Designer</strong> has grown from a boutique studio to a full-service digital agency trusted by <strong>500+ Australian businesses</strong>. Our team of designers, developers, and marketers work from our <strong>Parramatta office</strong>, close to our clients, invested in their outcomes.
            </p>
            <p>
              We specialise in creating custom websites, implementing SEO strategies, and building brands that resonate with Australian audiences. From local startups to established enterprises across Sydney's North Shore, Inner West, and greater metropolitan area, we deliver digital solutions that drive real business growth.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary-orange">Industries We Serve</span>
            <h2 className="mb-6 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
              Expertise Across <span className="text-primary-orange">All Industries</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              From startups to established enterprises, we deliver tailored solutions for every sector
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {[
              { icon: "fa-building", name: "Real Estate" },
              { icon: "fa-truck", name: "Logistics" },
              { icon: "fa-heartbeat", name: "Healthcare" },
              { icon: "fa-utensils", name: "Hospitality" },
              { icon: "fa-hard-hat", name: "Construction" },
              { icon: "fa-shopping-bag", name: "Retail" },
              { icon: "fa-graduation-cap", name: "Education" },
              { icon: "fa-briefcase", name: "Professional Services" },
              { icon: "fa-wrench", name: "Home Services" },
              { icon: "fa-car", name: "Automotive" },
              { icon: "fa-dumbbell", name: "Fitness & Wellness" },
              { icon: "fa-landmark", name: "Finance" },
            ].map((industry, i) => (
              <div key={i} className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition-colors hover:border-primary-orange/30 hover:bg-white">
                <i className={`fas ${industry.icon} mb-3 text-2xl text-slate-400`} />
                <h3 className="text-sm font-bold text-slate-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE APPROACH SECTION */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary-orange">Our Methodology</span>
            <h2 className="mb-6 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
              More Than Code — <span className="text-primary-orange">Complete Ecosystems</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-slate-600">
              A website isn't just HTML + CSS + JS. It's psychology, infrastructure, marketing, security engineering, and systems design wearing a friendly UI mask. We optimize the right pillars for your context.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                category: "Strategy & Foundation", icon: "fa-lightbulb",
                items: ["Purpose & business alignment", "Brand identity & positioning", "Content strategy", "Information architecture", "Clear onboarding (for SaaS)"]
              },
              {
                category: "User Experience", icon: "fa-user-check",
                items: ["User experience (UX) design", "User interface design (UI)", "Visual hierarchy", "Navigation clarity", "Micro-interactions & motion design"]
              },
              {
                category: "Design Excellence", icon: "fa-paint-brush",
                items: ["Typography & readability", "Color theory & contrast", "Design consistency system", "Component library", "Progressive enhancement"]
              },
              {
                category: "Accessibility & Standards", icon: "fa-universal-access",
                items: ["WCAG compliance", "Keyboard navigation", "Assistive technology support", "Semantic HTML structure", "Plain language content"]
              },
              {
                category: "Performance & Speed", icon: "fa-tachometer-alt",
                items: ["Core Web Vitals optimization", "Performance & speed tuning", "Image & asset optimization", "Caching strategy", "Database efficiency"]
              },
              {
                category: "SEO & Visibility", icon: "fa-search",
                items: ["Technical SEO", "On-page & off-page SEO", "Structured data (schema markup)", "Meta data optimization", "Domain authority building"]
              },
              {
                category: "Security & Compliance", icon: "fa-shield-alt",
                items: ["HTTPS & SSL certificates", "XSS/CSRF protection", "Authentication & authorization", "Privacy compliance (GDPR)", "Input validation"]
              },
              {
                category: "Responsive & Compatible", icon: "fa-mobile-alt",
                items: ["Mobile-first responsive design", "Tablet & desktop optimization", "Cross-browser compatibility", "Graceful degradation", "PWA capability (when relevant)"]
              },
              {
                category: "Conversion & Marketing", icon: "fa-chart-line",
                items: ["Conversion rate optimization (CRO)", "Clear CTAs", "Trust signals & social proof", "A/B testing capability", "Analytics & tracking"]
              },
              {
                category: "Infrastructure & Scalability", icon: "fa-server",
                items: ["Scalable architecture", "Hosting reliability", "Server performance", "API reliability", "Load handling & stress resilience"]
              },
              {
                category: "Code Quality & Testing", icon: "fa-code",
                items: ["Clean code & modularity", "Code quality standards", "Testing (unit, integration, E2E)", "Version control", "Technical debt management"]
              },
              {
                category: "Deployment & Support", icon: "fa-rocket",
                items: ["CI/CD deployment strategy", "Monitoring & logging", "Backup & disaster recovery", "Ongoing maintenance", "User feedback loops"]
              },
            ].map((pillar, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    <i className={`fas ${pillar.icon} text-lg`} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-slate-900">{pillar.category}</h3>
                </div>
                <ul className="space-y-3">
                  {pillar.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                      <i className="fas fa-check mt-1 shrink-0 text-[10px] text-primary-orange" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="mx-auto max-w-4xl rounded-2xl border border-primary-orange/20 bg-orange-50/50 p-8 md:p-10">
              <h3 className="mb-4 font-heading text-2xl font-bold text-slate-900 md:text-3xl">
                From Mid-Level to Senior: <span className="text-primary-orange">Systems Thinking</span>
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                Perfection isn't about maxing every pillar — it's about optimizing the right pillars for your context. A portfolio site doesn't need horizontal scaling architecture. A fintech platform absolutely does. This is where websites stop being projects and start being ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary-orange">Why Choose Us</span>
              <h2 className="mb-6 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
                Sydney's Most Trusted Web Design <span className="text-primary-orange">Partner</span>
              </h2>
              <p className="mb-10 text-lg text-slate-600">
                We don't just build websites — we create digital experiences that drive real business growth for Sydney businesses.
              </p>

              <div className="space-y-8">
                {[
                  { icon: "fa-award", title: "Award-Winning Design", desc: "Recognised by Sydney's digital industry for excellence in web design, from local startups in Surry Hills to enterprise brands in the CBD." },
                  { icon: "fa-clock", title: "Serving Sydney Since 2013", desc: "Over 13 years working with Sydney businesses across Parramatta, the North Shore, Inner West, and everywhere in between, with the results to prove it." },
                  { icon: "fa-users", title: "Local Team, Local Hours", desc: "A Sydney-based team you can actually call — no outsourcing, no overseas handoffs, no time zone headaches — just real people who know your market." },
                  { icon: "fa-chart-line", title: "Results That Matter to Sydney Businesses", desc: "We measure success the way you do: more leads, higher conversions, and ROI that justifies every dollar. Because in a competitive market like Sydney, rankings alone don't pay the bills." },
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-orange/10 text-primary-orange">
                      <i className={`fas ${benefit.icon} text-xl`} />
                    </div>
                    <div>
                      <h3 className="mb-2 font-heading text-xl font-bold text-slate-900">{benefit.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-2xl bg-dark-navy shadow-lg">
                <div className="flex aspect-square flex-col items-center justify-center p-12 text-center">
                  <i className="fas fa-laptop-code mb-6 text-7xl text-primary-orange" />
                  <p className="font-heading text-3xl font-bold text-white">500+ Websites</p>
                  <p className="mt-2 text-slate-400">Trusted by Sydney businesses</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary-orange p-6 text-white shadow-xl md:block">
                <div className="font-heading text-4xl font-black">100%</div>
                <div className="text-sm font-bold uppercase tracking-wider">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary-orange">Technologies</span>
            <h2 className="mb-6 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
              Built with <span className="text-primary-orange">Modern Tech</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              We use cutting-edge technologies to build fast, secure, and scalable websites
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-6">
            {[
              { icon: "fa-react", name: "React", color: "#61DAFB", brand: true },
              { icon: "fa-code", name: "Next.js", color: "#000000", isSolid: true },
              { icon: "fa-node-js", name: "Node.js", color: "#339933", brand: true },
              { icon: "fa-wordpress", name: "WordPress", color: "#21759B", brand: true },
              { icon: "fa-shopify", name: "Shopify", color: "#7AB55C", brand: true },
              { icon: "fa-laravel", name: "Laravel", color: "#FF2D20", brand: true },
              { icon: "fa-figma", name: "Figma", color: "#F24E1E", brand: true },
              { icon: "fa-layer-group", name: "Adobe XD", color: "#FF61F6", isSolid: true },
              { icon: "fa-window-maximize", name: "Webflow", color: "#4353FF", isSolid: true },
              { icon: "fa-php", name: "PHP", color: "#777BB4", brand: true },
              { icon: "fa-python", name: "Python", color: "#3776AB", brand: true },
              { icon: "fa-js-square", name: "JavaScript", color: "#F7DF1E", brand: true },
              { icon: "fa-html5", name: "HTML5", color: "#E34F26", brand: true },
              { icon: "fa-css3-alt", name: "CSS3", color: "#1572B6", brand: true },
              { icon: "fa-sass", name: "Sass", color: "#CC6699", brand: true },
              { icon: "fa-google", name: "Google Ads", color: "#4285F4", brand: true },
              { icon: "fa-facebook", name: "Meta Ads", color: "#1877F2", brand: true },
              { icon: "fa-bootstrap", name: "Bootstrap", color: "#7952B3", brand: true },
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:border-primary-orange/30 hover:shadow-md">
                <i className={`${tech.isSolid ? 'fas' : tech.brand ? 'fab' : 'fas'} ${tech.icon} mb-3 text-4xl transition-transform hover:scale-110`} style={{ color: tech.color }} />
                <h3 className="text-sm font-bold text-slate-900">{tech.name}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
              <i className="fas fa-shield-alt text-2xl text-primary-orange" />
              <div className="text-left">
                <div className="font-bold text-slate-900">Enterprise-Grade Security</div>
                <div className="text-sm text-slate-600">SSL, GDPR compliance, and regular updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-dark-navy py-24 md:py-32">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 font-heading text-4xl font-bold text-white md:text-5xl">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 md:text-xl">
            Let's create something amazing together. Get your free consultation and custom quote today.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button data-popup="contact" className="btn btn-primary btn-lg rounded-lg shadow-sm">
              <span className="flex items-center justify-center gap-2">
                Get Free Quote
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <a href={`tel:${contactInfo.phoneLink}`} className="btn btn-lg rounded-lg border border-slate-600 bg-transparent text-white hover:bg-slate-800 hover:border-slate-500">
              <span className="flex items-center justify-center gap-2">
                <i className="fas fa-phone text-sm" />
                (02) 8068 0688
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}