import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = generateMetadata({
  title: "Professional Web Design Sydney | Custom Website Design Services",
  description: "Award-winning web design services in Sydney. We create stunning, mobile-responsive websites that convert visitors into customers. 13+ years experience, 500+ websites delivered.",
  keywords: "web design sydney, website design, custom web design, responsive web design, professional website design",
  canonicalUrl: "https://sydneywebdesigner.com.au/web-design",
});

export default function WebDesignPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Web Design", url: "https://sydneywebdesigner.com.au/web-design" },
  ]);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-24 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#f59e0b] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#f59e0b] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#f59e0b] rounded-full animate-pulse" />
              <span className="text-[#f59e0b] text-sm font-semibold">Since 2013 • DSIGNS Australia</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Professional Web Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fb923c]">Sydney</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-8 leading-relaxed">
              Transform your online presence with stunning, high-performance websites that drive real business results. Award-winning design meets cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                data-popup="contact"
                className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]"
              >
                Get Your Free Quote
              </button>
              <Link
                href="/portfolio"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-sm"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Our Latest Web Design Projects</h2>
            <p>See what we've created for businesses like yours</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "OSAN Ability",
                image: "/images/Portfolio/OSAN Ability/OSAN Ability.webp",
                category: "NDIS Provider"
              },
              {
                name: "GPS Vehicle Inspections",
                image: "/images/Portfolio/GPS Vehicle Inspections/GPS Vehicle inspection 1.webp",
                category: "Automotive"
              },
              {
                name: "Advanced Tree Lopping",
                image: "/images/Portfolio/Advanced Tree Lopping/Advanced tree looping.webp",
                category: "Tree Services"
              },
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] relative bg-white">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-sm text-[#f59e0b] font-semibold mb-1">{project.category}</p>
                    <h4 className="text-xl font-bold">{project.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
            >
              View All Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Sydney Web Designer?</h2>
            <p>The leading web design agency trusted by Sydney businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-award text-4xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-primary-navy">13+ Years</h3>
              <p className="text-gray-600">Industry experience delivering exceptional websites</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-laptop-code text-4xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-primary-navy">500+</h3>
              <p className="text-gray-600">Websites successfully delivered to happy clients</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-smile text-4xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-primary-navy">100%</h3>
              <p className="text-gray-600">Client satisfaction with ongoing support</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-industry text-4xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-primary-navy">12+</h3>
              <p className="text-gray-600">Industries served across Australia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Web Design Services */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Comprehensive Web Design Services</h2>
            <p>Everything you need for a successful online presence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "fa-paint-brush",
                title: "Custom Web Design",
                description: "Unique, tailor-made designs that perfectly reflect your brand identity and business goals. No templates, just original creativity that sets you apart from competitors.",
              },
              {
                icon: "fa-mobile-alt",
                title: "Responsive Design",
                description: "Mobile-first websites that look stunning on every device. With 70% of users browsing on mobile, we ensure perfect functionality across all screen sizes.",
              },
              {
                icon: "fa-shopping-cart",
                title: "E-commerce Websites",
                description: "Powerful online stores built to sell. Secure payment integration, inventory management, and user-friendly shopping experiences that convert browsers into buyers.",
              },
              {
                icon: "fa-wordpress",
                title: "WordPress Development",
                description: "Custom WordPress websites with easy-to-use content management. Update your site yourself or let us handle it - the choice is yours.",
              },
              {
                icon: "fa-rocket",
                title: "Landing Pages",
                description: "High-converting landing pages designed for specific campaigns. Optimized for lead generation with clear calls-to-action and compelling design.",
              },
              {
                icon: "fa-sync",
                title: "Website Redesign",
                description: "Modernize your outdated website with a fresh new look. We preserve your SEO rankings while giving you a contemporary design that drives results.",
              },
              {
                icon: "fa-pencil-alt",
                title: "UI/UX Design",
                description: "Intuitive user interfaces and exceptional user experiences. We focus on creating websites that are not just beautiful, but easy to use and navigate.",
              },
              {
                icon: "fa-code",
                title: "Custom Development",
                description: "Advanced functionality and custom features built to your specifications. From complex databases to API integrations, we make it happen.",
              },
              {
                icon: "fa-headset",
                title: "Ongoing Maintenance",
                description: "Keep your website running smoothly with regular updates, security patches, and technical support. Focus on your business while we handle the tech.",
              },
            ].map((service, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f59e0b]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <i className={`fas ${service.icon} text-3xl text-white`}></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary-navy group-hover:text-[#f59e0b] transition-colors">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Design Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="section-title">
            <h2>Our Web Design Process</h2>
            <p>A proven methodology that delivers outstanding results</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "We start by understanding your business, target audience, competitors, and goals. This research phase ensures we create a website that truly serves your needs and drives your business forward.",
                icon: "fa-search",
              },
              {
                step: "02",
                title: "Design & Concept",
                description: "Our designers create custom mockups and prototypes based on your brand guidelines. You'll see exactly how your website will look before we write a single line of code, with unlimited revisions until you're completely satisfied.",
                icon: "fa-palette",
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Our developers bring the design to life using modern, clean code. We build with performance, security, and SEO in mind. Rigorous testing across all devices ensures everything works perfectly.",
                icon: "fa-code",
              },
              {
                step: "04",
                title: "Content & SEO",
                description: "We optimize your content for search engines and user engagement. Proper heading structure, meta tags, alt text, and keyword optimization ensure your website ranks well on Google from day one.",
                icon: "fa-file-alt",
              },
              {
                step: "05",
                title: "Launch & Training",
                description: "After final approval, we launch your website and provide comprehensive training. You'll learn how to manage your content, or we can handle updates for you. Your success is our success.",
                icon: "fa-rocket",
              },
              {
                step: "06",
                title: "Support & Growth",
                description: "Our relationship doesn't end at launch. We provide ongoing support, monitor performance, and suggest improvements to help your website grow with your business.",
                icon: "fa-chart-line",
              },
            ].map((phase, index) => (
              <div key={index} className="relative flex gap-6 mb-12 last:mb-0 group">
                {/* Connecting line */}
                {index < 5 && (
                  <div className="absolute left-10 top-20 w-0.5 h-full bg-gradient-to-b from-[#f59e0b] to-[#fb923c] opacity-20" />
                )}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex flex-col items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all">
                    <i className={`fas ${phase.icon} text-2xl mb-1`}></i>
                    <span className="text-xs font-bold">{phase.step}</span>
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-md group-hover:shadow-xl transition-all border border-gray-100">
                  <h3 className="text-2xl font-bold mb-3 text-primary-navy group-hover:text-[#f59e0b] transition-colors">{phase.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance & Results */}
      <section className="py-20 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="section-title">
            <h2 className="text-white">Built for Performance & Results</h2>
            <p className="text-white/90">Speed, security, and user experience that drives conversions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-5xl font-bold mb-2">&lt; 2s</div>
              <div className="text-lg font-semibold mb-2">Loading Speed</div>
              <p className="text-white/80 text-sm">Lightning-fast page loads keep visitors engaged</p>
            </div>

            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-5xl font-bold mb-2">95+</div>
              <div className="text-lg font-semibold mb-2">Performance Score</div>
              <p className="text-white/80 text-sm">Google PageSpeed optimized for top rankings</p>
            </div>

            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-2">Uptime</div>
              <p className="text-white/80 text-sm">Reliable hosting keeps your site always accessible</p>
            </div>

            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-5xl font-bold mb-2">SSL</div>
              <div className="text-lg font-semibold mb-2">Secure</div>
              <p className="text-white/80 text-sm">Bank-level encryption protects your data</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-lg leading-relaxed">
              Every website we build is optimized for maximum performance. Fast loading speeds improve user experience,
              boost SEO rankings, and increase conversion rates - helping you achieve your business goals faster.
            </p>
          </div>
        </div>
      </section>

      {/* Features Included */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Features Included in Every Website</h2>
            <p>Professional quality as standard, not as an extra</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { feature: "Mobile Responsive Design", icon: "fa-mobile-alt" },
              { feature: "Search Engine Optimization", icon: "fa-search" },
              { feature: "Fast Loading Speed", icon: "fa-tachometer-alt" },
              { feature: "SSL Security Certificate", icon: "fa-lock" },
              { feature: "Contact Form Integration", icon: "fa-envelope" },
              { feature: "Social Media Integration", icon: "fa-share-alt" },
              { feature: "Google Analytics Setup", icon: "fa-chart-bar" },
              { feature: "Google Maps Integration", icon: "fa-map-marked-alt" },
              { feature: "Email Configuration", icon: "fa-at" },
              { feature: "Content Management System", icon: "fa-edit" },
              { feature: "Browser Compatibility", icon: "fa-globe" },
              { feature: "Professional Typography", icon: "fa-font" },
              { feature: "Image Optimization", icon: "fa-images" },
              { feature: "Performance Optimization", icon: "fa-rocket" },
              { feature: "Clean, Semantic Code", icon: "fa-code" },
              { feature: "GDPR Compliance", icon: "fa-shield-alt" },
              { feature: "Accessibility Standards", icon: "fa-universal-access" },
              { feature: "Cross-Device Testing", icon: "fa-laptop-code" },
            ].map((item, index) => (
              <div key={index} className="group flex items-start gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-[#f59e0b]">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className={`fas ${item.icon} text-white`}></i>
                  </div>
                </div>
                <span className="text-gray-700 font-semibold pt-2 group-hover:text-[#f59e0b] transition-colors">{item.feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Design Showcase */}
      <section className="py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#f59e0b] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#f59e0b] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <div className="container relative z-10">
          <div className="section-title">
            <h2 className="text-white">Perfect on Every Device</h2>
            <p className="text-slate-100">Responsive design that looks stunning across all screen sizes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-desktop text-4xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold mb-3">Desktop</h3>
                <p className="text-slate-100">Immersive full-screen experiences with advanced features and layouts</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-tablet-alt text-4xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold mb-3">Tablet</h3>
                <p className="text-slate-100">Optimized touch interfaces that adapt perfectly to all tablet sizes</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-mobile-alt text-4xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold mb-3">Mobile</h3>
                <p className="text-slate-100">Fast-loading, thumb-friendly designs for on-the-go users</p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-lg text-slate-100 mb-6 leading-relaxed">
                Over <span className="text-[#f59e0b] font-bold text-2xl">70%</span> of web traffic comes from mobile devices.
                We build mobile-first websites that provide exceptional experiences on smartphones while scaling beautifully to tablets and desktops.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Touch Optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fast Loading</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>SEO Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Modern Technologies We Master</h2>
            <p>Cutting-edge tools for superior websites</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "React", icon: "fa-react", color: "#61DAFB" },
                { name: "Next.js", icon: "fa-node", color: "#000000" },
                { name: "WordPress", icon: "fa-wordpress", color: "#21759B" },
                { name: "HTML5", icon: "fa-html5", color: "#E34F26" },
                { name: "CSS3", icon: "fa-css3-alt", color: "#1572B6" },
                { name: "JavaScript", icon: "fa-js", color: "#F7DF1E" },
                { name: "PHP", icon: "fa-php", color: "#777BB4" },
                { name: "Node.js", icon: "fa-node-js", color: "#339933" },
              ].map((tech, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-xl border border-gray-200">
                      <i className={`fab ${tech.icon} text-5xl text-[#1e293b] group-hover:scale-110 transition-transform`}></i>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="font-bold text-gray-800 group-hover:text-[#f59e0b] transition-colors">{tech.name}</h4>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We stay ahead of the curve by continuously learning and adopting the latest web technologies.
                This ensures your website is built with modern, maintainable code that performs exceptionally
                and stands the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Real Results for Real Businesses</h2>
            <p>See how we've helped businesses like yours succeed online</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="mb-6 relative h-48 rounded-xl overflow-hidden bg-white shadow-md">
                <Image
                  src="/images/Portfolio/OSAN Ability/OSAN Ability.webp"
                  alt="OSAN Ability Website"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mb-4">
                <span className="inline-block bg-[#f59e0b]/10 text-[#f59e0b] px-4 py-1 rounded-full text-sm font-semibold">NDIS Provider</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary-navy">OSAN Ability</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Complete digital transformation including branding, website design, and integrated marketing strategy that positioned them as a leading NDIS provider.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Web Design", "Branding", "SEO", "Google Ads"].map((tag, i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="mb-6 relative h-48 rounded-xl overflow-hidden bg-white shadow-md">
                <Image
                  src="/images/Portfolio/GPS Vehicle Inspections/GPS Vehicle inspection 1.webp"
                  alt="GPS Vehicle Inspections Website"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mb-4">
                <span className="inline-block bg-[#f59e0b]/10 text-[#f59e0b] px-4 py-1 rounded-full text-sm font-semibold">Automotive</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary-navy">GPS Vehicle Inspections</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Modern, professional website with online booking system that increased customer inquiries by 250% and streamlined their inspection process.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Web Design", "Booking System", "SEO"].map((tag, i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[#f59e0b] hover:text-[#d97706] font-bold text-lg transition-colors group"
            >
              View More Success Stories
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Industries We Serve</h2>
            <p>Specialized web design expertise across multiple sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Healthcare & Medical", icon: "fa-heartbeat" },
              { name: "Legal & Law Firms", icon: "fa-balance-scale" },
              { name: "Real Estate", icon: "fa-home" },
              { name: "Finance & Banking", icon: "fa-university" },
              { name: "Construction & Trades", icon: "fa-hard-hat" },
              { name: "Hospitality & Tourism", icon: "fa-hotel" },
              { name: "Education & Training", icon: "fa-graduation-cap" },
              { name: "E-commerce & Retail", icon: "fa-shopping-bag" },
              { name: "Professional Services", icon: "fa-briefcase" },
              { name: "Technology & IT", icon: "fa-laptop-code" },
              { name: "NDIS & Aged Care", icon: "fa-hands-helping" },
              { name: "Manufacturing", icon: "fa-industry" },
            ].map((industry, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all border border-gray-100 hover:border-[#f59e0b]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#f59e0b]/10 to-[#fb923c]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <i className={`fas ${industry.icon} text-2xl text-[#f59e0b]`}></i>
                </div>
                <h4 className="font-bold text-primary-navy group-hover:text-[#f59e0b] transition-colors">{industry.name}</h4>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With 13+ years of experience and 500+ websites delivered, we understand the unique challenges
              and opportunities in each industry. We don't just build websites - we create digital solutions
              that drive your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Growth Plans Section */}
      <section className="py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#f59e0b] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#f59e0b] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />

        <div className="container relative z-10">
          <div className="section-title">
            <h2 className="text-white">Growth Marketing Services</h2>
            <p className="text-slate-100">Strategic marketing solutions to drive traffic and conversions</p>
          </div>

          <div className="space-y-6 max-w-6xl mx-auto">
            {/* Website Care */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#f59e0b]/40 transition-all">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <h3 className="text-2xl font-bold mb-4">Website Care</h3>
                  <p className="text-slate-100 mb-2">Keep your website secure and updated</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    {["Security updates & monitoring", "Weekly backups", "Performance optimization", "2 hours content updates/month", "Uptime monitoring", "Email support"].map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-100 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button data-popup="contact" className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-6 py-3 rounded-full font-bold transition-all">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Website Care & CRM - Featured */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#f59e0b] relative">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <h3 className="text-2xl font-bold mb-4">Website Care & CRM</h3>
                  <p className="text-slate-100 mb-2">Website care + customer management</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    {["Everything in Website Care", "CRM setup & management", "Lead tracking & automation", "Request/Manage Reviews via SMS/Email", "4 hours content updates/month", "Priority support"].map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-100 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button data-popup="contact" className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-6 py-3 rounded-full font-bold transition-all">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Paid Ads Management - Popular */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#f59e0b]/40 transition-all relative">
              <div className="absolute -top-4 left-8 bg-gradient-to-r from-[#f59e0b] to-[#fb923c] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Most Popular
              </div>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <h3 className="text-2xl font-bold mb-4">Paid Ads Management</h3>
                  <p className="text-slate-100 mb-2">Google OR Facebook Ads management</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    {["Google OR Facebook Ads (one platform)", "Campaign strategy & setup", "Ad copywriting & design", "A/B testing & optimization", "Conversion tracking", "Monthly performance reports", "Dedicated account manager", "Weekly optimization"].map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-100 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button data-popup="adsAudit" className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-6 py-3 rounded-full font-bold transition-all">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* SEO Package */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#f59e0b]/40 transition-all">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <h3 className="text-2xl font-bold mb-4">SEO Package</h3>
                  <p className="text-slate-100 mb-2">Complete SEO & content marketing</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    {["Complete SEO audit & strategy", "On-page SEO optimization", "Technical SEO improvements", "4 SEO blog posts/month", "Link building & outreach", "Local SEO optimization", "Competitor analysis", "Monthly ranking reports"].map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-100 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button data-popup="seoAudit" className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-6 py-3 rounded-full font-bold transition-all">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Complete Marketing - Ultimate */}
            <div className="bg-gradient-to-br from-[#f59e0b]/20 to-[#fb923c]/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#f59e0b] relative">
              <div className="absolute -top-4 left-8 bg-gradient-to-r from-[#f59e0b] to-[#fb923c] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Ultimate Package
              </div>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <h3 className="text-2xl font-bold mb-4">Complete Marketing</h3>
                  <p className="text-slate-100 mb-2">Everything you need to dominate</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    {["Everything from all plans above", "Dedicated marketing team", "Multi-channel campaigns", "Social media management", "Email marketing automation", "Video marketing & production", "Advanced analytics & reporting", "Priority 24/7 support"].map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button data-popup="consultation" className="bg-white hover:bg-gray-100 text-[#0f172a] px-6 py-3 rounded-full font-bold transition-all">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Plan Recommendation */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-4">Starting Out</h3>
              <p className="text-slate-100 mb-4">
                Perfect for small businesses and startups that need essential services to establish
                and grow their online presence.
              </p>
              <ul className="space-y-2 text-sm text-slate-100">
                <li className="flex items-start gap-2">
                  <span className="text-[#f59e0b]">•</span>
                  <span>Website Care for basic maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f59e0b]">•</span>
                  <span>Website Care & CRM to manage customers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f59e0b]">•</span>
                  <span>Paid Ads for quick lead generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f59e0b]">•</span>
                  <span>SEO Package for long-term growth</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#f59e0b]/10 to-[#fb923c]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#f59e0b]/30">
              <h3 className="text-xl font-bold mb-4">Established Business</h3>
              <p className="text-slate-100 mb-4">
                For businesses with $1M+ annual revenue ready to dominate their market with
                comprehensive marketing.
              </p>
              <ul className="space-y-2 text-sm text-slate-100">
                <li className="flex items-start gap-2">
                  <span className="text-[#f59e0b]">•</span>
                  <span>Complete Marketing Package</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f59e0b]">•</span>
                  <span>Dedicated team of specialists</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f59e0b]">•</span>
                  <span>Multi-channel strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f59e0b]">•</span>
                  <span>Maximum market penetration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about our web design services</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "How much does a professional website cost?",
                a: "Website costs vary based on complexity and features. Basic websites start from around $3,000, while advanced e-commerce sites or custom applications can range higher. We provide transparent quotes with no hidden fees after understanding your specific requirements.",
              },
              {
                q: "How long does it take to design and build a website?",
                a: "Timeline depends on project scope. A basic website typically takes 2-4 weeks, while more complex sites with custom features take 6-12 weeks. We'll provide a detailed timeline during our initial consultation based on your specific needs.",
              },
              {
                q: "Will my website be mobile-friendly?",
                a: "Absolutely! Every website we create is fully responsive and mobile-optimized. With over 70% of users browsing on mobile devices, we ensure your site looks and works perfectly on smartphones, tablets, and desktops.",
              },
              {
                q: "Can I update the website content myself?",
                a: "Yes! We build websites with user-friendly content management systems (CMS) that allow you to make updates easily. We provide training and documentation, or you can opt for our maintenance plans if you prefer us to handle updates.",
              },
              {
                q: "Do you provide website hosting?",
                a: "While we don't provide hosting directly, we can recommend reliable hosting providers and handle the setup for you. We ensure your website is deployed on fast, secure servers optimized for performance.",
              },
              {
                q: "Will my website be SEO-friendly?",
                a: "Yes! Search engine optimization is built into every website we create. We implement SEO best practices including proper heading structure, meta tags, fast loading speeds, mobile optimization, and clean code that search engines love.",
              },
              {
                q: "What happens after my website launches?",
                a: "We provide post-launch support with every project. This includes fixing any bugs, answering questions, and making minor adjustments. We also offer ongoing maintenance plans for regular updates, security monitoring, and continuous optimization.",
              },
              {
                q: "Do I own the website after it's built?",
                a: "Yes! Once final payment is complete, you own all rights to your website, including the code, content, and design files. We believe in complete transparency and client ownership.",
              },
              {
                q: "Can you redesign my existing website?",
                a: "Absolutely! We specialize in website redesigns, modernizing outdated sites while preserving your SEO rankings and improving user experience. We'll audit your current site and create a strategic redesign plan.",
              },
              {
                q: "Do you offer payment plans?",
                a: "Yes, we offer flexible payment options. Standard arrangement is 50% deposit and 50% upon completion. For larger projects, we can arrange milestone-based payments or monthly installments to fit your budget.",
              },
            ].map((faq, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all border border-gray-200 hover:border-[#f59e0b]">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <i className="fas fa-question text-white text-lg"></i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-primary-navy group-hover:text-[#f59e0b] transition-colors">{faq.q}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Build Your Dream Website?"
        description="Let's create a stunning website that grows your business. Get a free consultation and custom quote today."
        primaryButtonText="Get Free Quote"
        primaryButtonAction="contact"
        secondaryButtonText="View Our Portfolio"
      />
    </>
  );
}
