import type { Metadata } from "next";
import Link from "next/link";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Vibe Code Website Development | Convert AI Designs to Real Websites",
  description: "Transform your Vibe-coded website designs into fully functional websites. We support WordPress, Next.js, PHP, and any tech stack. Expert conversion services in Sydney.",
  keywords: "vibe code website, ai website design, convert vibe to website, vibe code development, next.js development, wordpress development, sydney web developer",
};

export default function VibeCodeWebsitePage() {
  const serviceSchema = generateServiceSchema(
    "Vibe Code Website Development",
    "Transform your Vibe-coded website designs into fully functional, production-ready websites on any technology stack including WordPress, Next.js, PHP, and more.",
    "/services/vibe-code-website"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Services", url: "https://sydneywebdesigner.com.au/web-design" },
    { name: "Vibe Code Website", url: "https://sydneywebdesigner.com.au/services/vibe-code-website" },
  ]);

  const techStacks = [
    {
      name: "Next.js",
      icon: "fa-react",
      description: "Modern React framework for production-ready applications",
      features: ["SEO Optimized", "Lightning Fast", "Server-Side Rendering"]
    },
    {
      name: "WordPress",
      icon: "fa-wordpress",
      description: "Powerful CMS for easy content management",
      features: ["User Friendly", "Plugin Ecosystem", "Easy Updates"]
    },
    {
      name: "PHP/Laravel",
      icon: "fa-php",
      description: "Custom backend solutions for complex requirements",
      features: ["Scalable", "Secure", "Flexible"]
    },
    {
      name: "Shopify",
      icon: "fa-shopping-cart",
      description: "E-commerce platform for online stores",
      features: ["Easy Setup", "Payment Ready", "Store Management"]
    },
    {
      name: "Custom Stack",
      icon: "fa-code",
      description: "Any technology stack tailored to your needs",
      features: ["Your Choice", "Fully Custom", "Optimized"]
    }
  ];

  const conversionProcess = [
    {
      step: "01",
      title: "Share Your Vibe Design",
      description: "Provide your Vibe-coded website design or let us create one for you",
      icon: "fa-file-code"
    },
    {
      step: "02",
      title: "Technology Selection",
      description: "We recommend the best tech stack based on your requirements and budget",
      icon: "fa-laptop-code"
    },
    {
      step: "03",
      title: "Professional Development",
      description: "Our expert developers convert your design into a fully functional website",
      icon: "fa-code"
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Rigorous testing across devices, browsers, and performance optimization",
      icon: "fa-check-circle"
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "Deploy your website and provide ongoing support and maintenance",
      icon: "fa-rocket"
    }
  ];

  const features = [
    {
      icon: "fa-bolt",
      title: "Lightning Fast",
      description: "Optimized code for blazing-fast load times"
    },
    {
      icon: "fa-mobile-alt",
      title: "Fully Responsive",
      description: "Perfect on all devices and screen sizes"
    },
    {
      icon: "fa-search",
      title: "SEO Optimized",
      description: "Built with search engine optimization in mind"
    },
    {
      icon: "fa-shield-alt",
      title: "Secure & Reliable",
      description: "Industry-standard security practices"
    },
    {
      icon: "fa-chart-line",
      title: "Scalable",
      description: "Grows with your business needs"
    },
    {
      icon: "fa-headset",
      title: "Ongoing Support",
      description: "Maintenance and updates included"
    }
  ];

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e293b] via-[#2d3b4f] to-[#1e293b] text-white py-20">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="inline-block bg-[#f59e0b]/20 text-[#f59e0b] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <i className="fas fa-code mr-2"></i>
              AI-Powered Design to Reality
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Convert Your Vibe Code Design to a Real Website
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Transform AI-generated designs into production-ready websites on any technology stack
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button data-popup="contact" className="btn btn-lg bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-4 rounded-lg font-semibold transition-all">
                Get Free Quote
              </button>
              <Link href="/portfolio" className="btn btn-lg bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all border-2 border-white/30">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Vibe Code Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-center text-[#1e293b] mb-4">
                What is Vibe <span className="text-[#f59e0b]">Code</span>?
              </h2>
              <p className="text-center text-lg text-[#64748b] mb-4">
                Vibe is an AI-powered design tool that allows you to create stunning website designs through simple prompts and iterations. While Vibe creates beautiful designs, converting them into real, functional websites requires professional development expertise.
              </p>
              <p className="text-lg text-[#64748b] mb-6">
                That&apos;s where we come in. We take your Vibe-coded designs and transform them into fully functional, production-ready websites on any technology stack you prefer.
              </p>
              <div className="bg-[#f8fafc] border-l-4 border-[#f59e0b] p-6 rounded-r-lg">
                <p className="font-semibold text-[#1e293b] mb-2">
                  <i className="fas fa-lightbulb text-[#f59e0b] mr-2"></i>
                  Don&apos;t have a Vibe design yet?
                </p>
                <p className="text-[#64748b]">
                  No worries! We can create a custom design for you or work with your existing ideas.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#f59e0b]/10 to-[#f59e0b]/5 p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f59e0b] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-wand-magic-sparkles text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e293b] mb-1">AI Design Creation</h3>
                    <p className="text-[#64748b]">Generate beautiful designs with Vibe AI</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1e293b] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-code text-[#f59e0b] text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e293b] mb-1">Professional Development</h3>
                    <p className="text-[#64748b]">Expert developers bring it to life</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f59e0b] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-rocket text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e293b] mb-1">Launch & Scale</h3>
                    <p className="text-[#64748b]">Production-ready website that grows with you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stacks Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-center text-[#1e293b] mb-4">
              Any Technology <span className="text-[#f59e0b]">Stack</span>
            </h2>
            <p className="text-xl text-[#64748b] max-w-[700px] mx-auto">
              We convert your Vibe design into any platform or framework that suits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStacks.map((stack, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-[#f59e0b]">
                <div className="w-16 h-16 bg-[#1e293b] rounded-xl flex items-center justify-center mb-6">
                  <i className={`fab ${stack.icon} text-[#f59e0b] text-3xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-[#1e293b] mb-3">{stack.name}</h3>
                <p className="text-[#64748b] mb-4">{stack.description}</p>
                <ul className="space-y-2">
                  {stack.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[#64748b]">
                      <i className="fas fa-check text-[#f59e0b]"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Process Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-center text-[#1e293b] mb-4">
              Our Conversion <span className="text-[#f59e0b]">Process</span>
            </h2>
            <p className="text-xl text-[#64748b] max-w-[700px] mx-auto">
              From Vibe design to live website in 5 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {conversionProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-[#f59e0b]/10 to-[#f59e0b]/5 p-6 rounded-2xl hover:shadow-lg transition-all">
                  <div className="text-5xl font-bold text-[#f59e0b]/40 mb-4">{process.step}</div>
                  <div className="w-14 h-14 bg-[#f59e0b] rounded-full flex items-center justify-center mb-4">
                    <i className={`fas ${process.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#1e293b] mb-2">{process.title}</h3>
                  <p className="text-sm text-[#64748b]">{process.description}</p>
                </div>
                {index < conversionProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#f59e0b]/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-center text-[#1e293b] mb-4">
              Why Choose Us for Vibe <span className="text-[#f59e0b]">Conversion</span>?
            </h2>
            <p className="text-xl text-[#64748b] max-w-[700px] mx-auto">
              We deliver production-ready websites with all the features you need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-[#f59e0b]/10 rounded-lg flex items-center justify-center mb-4">
                  <i className={`fas ${feature.icon} text-[#f59e0b] text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#1e293b] mb-2">{feature.title}</h3>
                <p className="text-[#64748b]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e293b] via-[#2d3b4f] to-[#1e293b] text-white">
        <div className="container max-w-[900px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 text-white">
            Ready to Bring Your Vibe Design to <span className="text-[#f59e0b]">Life</span>?
          </h2>
          <p className="text-center text-xl text-gray-300 mb-8">
            Let&apos;s transform your AI-generated design into a fully functional, production-ready website
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button data-popup="contact" className="btn btn-lg bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-4 rounded-lg font-semibold transition-all">
              Get Free Consultation
            </button>
            <Link href="/contact" className="btn btn-lg bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all border-2 border-white/30">
              Contact Us
            </Link>
          </div>
          <p className="text-gray-400 mt-8">
            <i className="fas fa-phone mr-2"></i>
            Call us now: <a href="tel:0291918049" className="text-[#f59e0b] hover:underline">02 9191 8049</a>
          </p>
        </div>
      </section>
    </>
  );
}
