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
              <span className="text-[#f59e0b] text-sm font-semibold">13+ Years of Excellence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Professional Web Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fb923c]">Sydney</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-gray-50">
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
              <div key={index} className="card hover:shadow-card-hover transition-all">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-xl flex items-center justify-center">
                    <i className={`fas ${service.icon} text-3xl text-white`}></i>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary-navy">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Design Process */}
      <section className="py-20 bg-white">
        <div className="container">
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
              <div key={index} className="flex gap-6 mb-12 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex flex-col items-center justify-center text-white shadow-lg">
                    <i className={`fas ${phase.icon} text-2xl mb-1`}></i>
                    <span className="text-xs font-bold">{phase.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-primary-navy">{phase.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{phase.description}</p>
                </div>
              </div>
            ))}
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
              "Mobile Responsive Design",
              "Search Engine Optimization",
              "Fast Loading Speed",
              "SSL Security Certificate",
              "Contact Form Integration",
              "Social Media Integration",
              "Google Analytics Setup",
              "Google Maps Integration",
              "Email Configuration",
              "Content Management System",
              "Browser Compatibility",
              "Professional Typography",
              "Image Optimization",
              "Performance Optimization",
              "Clean, Semantic Code",
              "GDPR Compliance",
              "Accessibility Standards",
              "Cross-Device Testing",
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
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
                { name: "React", icon: "fa-react" },
                { name: "Next.js", icon: "fa-node" },
                { name: "WordPress", icon: "fa-wordpress" },
                { name: "HTML5", icon: "fa-html5" },
                { name: "CSS3", icon: "fa-css3-alt" },
                { name: "JavaScript", icon: "fa-js" },
                { name: "PHP", icon: "fa-php" },
                { name: "Node.js", icon: "fa-node-js" },
              ].map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-3 hover:bg-[#f59e0b] hover:text-white transition-all duration-300 group">
                    <i className={`fab ${tech.icon} text-4xl text-[#1e293b] group-hover:text-white`}></i>
                  </div>
                  <h4 className="font-semibold text-gray-700">{tech.name}</h4>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We stay ahead of the curve by continuously learning and adopting the latest web technologies.
                This ensures your website is built with modern, maintainable code that performs exceptionally
                and stands the test of time.
              </p>
            </div>
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
              "Healthcare & Medical",
              "Legal & Law Firms",
              "Real Estate",
              "Finance & Banking",
              "Construction & Trades",
              "Hospitality & Tourism",
              "Education & Training",
              "E-commerce & Retail",
              "Professional Services",
              "Technology & IT",
              "NDIS & Aged Care",
              "Manufacturing",
            ].map((industry, index) => (
              <div key={index} className="card text-center hover:shadow-card-hover transition-all">
                <h4 className="font-semibold text-primary-navy">{industry}</h4>
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
              <div key={index} className="card hover:shadow-card-hover transition-all">
                <h3 className="text-xl font-bold mb-3 text-primary-navy">{faq.q}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
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
