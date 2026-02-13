import Link from "next/link";
import { portfolioProjects } from "@/lib/constants";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import { generateMetadata } from "@/lib/metadata";
import { generateOrganizationSchema, generateLocalBusinessSchema } from "@/lib/schemas";

export const metadata = generateMetadata({
  title: "Sydney Web Designer | Professional Web Design & Digital Marketing Services",
  description: "Sydney's premier web design and digital marketing agency. 13+ years experience, 500+ websites delivered. Custom web design, SEO, branding & more. Get a free quote today!",
  keywords: "web design sydney, digital marketing sydney, seo services sydney, sydney web designer, website development sydney",
  canonicalUrl: "https://sydneywebdesigner.com.au",
  ogImage: "/images/og/homepage.svg",
});

export default function HomePage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />

      {/* Hero Section */}
      <section id="home" className="bg-[#1e293b] text-white py-40 text-center">
        <div className="container max-w-[1000px] mx-auto px-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
            Sydney Web Designer
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-semibold text-[#f59e0b]">
            Professional Web Design & Digital Marketing
          </p>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-[800px] mx-auto text-white">
            Unlock new growth opportunities and solve your digital challenges with expert guidance and dynamic solutions. Serving Sydney businesses for over 13 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center flex-wrap mb-16">
            <a href="#contact" className="bg-[#f59e0b] text-white hover:bg-[#d97706] border-2 border-[#f59e0b] px-6 md:px-12 lg:px-14 py-3 md:py-4 lg:py-5 rounded-full font-bold text-base md:text-lg lg:text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl inline-flex items-center justify-center gap-3 w-full sm:w-auto">
              <i className="fas fa-rocket"></i>
              Get Started Today
            </a>
            <a href="#portfolio" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#1e293b] px-6 md:px-12 lg:px-14 py-3 md:py-4 lg:py-5 rounded-full font-bold text-base md:text-lg lg:text-lg transition-all duration-300 hover:-translate-y-1 inline-flex items-center justify-center gap-3 w-full sm:w-auto">
              <i className="fas fa-briefcase"></i>
              View Our Work
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[900px] mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <i className="fas fa-award text-4xl text-[#f59e0b] mb-3"></i>
              <div className="text-3xl font-bold">13+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <i className="fas fa-laptop-code text-4xl text-[#f59e0b] mb-3"></i>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-90">Websites Delivered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <i className="fas fa-smile text-4xl text-[#f59e0b] mb-3"></i>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm opacity-90">Satisfaction Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <i className="fas fa-star text-4xl text-[#f59e0b] mb-3"></i>
              <div className="text-3xl font-bold">4.9/5</div>
              <div className="text-sm opacity-90">Google Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-28 bg-white">
        <div className="container max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-[#1e293b] mb-6">Our Services</h2>
            <p className="text-xl md:text-2xl text-[#64748b] max-w-[800px] mx-auto leading-relaxed">
              Comprehensive digital solutions designed to transform your business and drive measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Web Design Service */}
            <div className="bg-white p-12 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(245,158,11,0.2)] transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#f59e0b] group">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-[#f59e0b] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-palette text-4xl text-white"></i>
                </div>
                <h3 className="text-3xl font-bold text-[#1e293b] mb-4">Web Design</h3>
              </div>
              <p className="text-[#64748b] leading-relaxed mb-6 text-lg">
                Transform your online presence with strategic web design that combines stunning aesthetics with powerful functionality. We create websites that convert visitors into customers and drive real business growth.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-[#1e293b]">
                  <i className="fas fa-check-circle text-[#f59e0b] mt-1"></i>
                  <span>Custom responsive designs</span>
                </li>
                <li className="flex items-start gap-3 text-[#1e293b]">
                  <i className="fas fa-check-circle text-[#f59e0b] mt-1"></i>
                  <span>User-friendly CMS integration</span>
                </li>
                <li className="flex items-start gap-3 text-[#1e293b]">
                  <i className="fas fa-check-circle text-[#f59e0b] mt-1"></i>
                  <span>SEO-optimized structure</span>
                </li>
                <li className="flex items-start gap-3 text-[#1e293b]">
                  <i className="fas fa-check-circle text-[#f59e0b] mt-1"></i>
                  <span>Lightning-fast performance</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-[#f59e0b] text-white hover:bg-[#d97706] px-8 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                Learn More
              </a>
            </div>

            {/* Branding Service */}
            <div className="bg-white p-12 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(245,158,11,0.2)] transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#f59e0b] group">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-[#f59e0b] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-bullseye text-4xl text-white"></i>
                </div>
                <h3 className="text-3xl font-bold text-[#1e293b] mb-4">Branding</h3>
              </div>
              <p className="text-[#64748b] leading-relaxed mb-6 text-lg">
                Craft a memorable brand identity with our branding expertise. We develop cohesive visual identities that resonate with your target audience, set you apart from competitors, and build lasting customer loyalty.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-[#1e293b]">
                  <i className="fas fa-check-circle text-[#f59e0b] mt-1"></i>
                  <span>Professional logo design</span>
                </li>
                <li className="flex items-start gap-3 text-[#1e293b]">
                  <i className="fas fa-check-circle text-[#f59e0b] mt-1"></i>
                  <span>Complete brand guidelines</span>
                </li>
                <li className="flex items-start gap-3 text-[#1e293b]">
                  <i className="fas fa-check-circle text-[#f59e0b] mt-1"></i>
                  <span>Marketing collateral design</span>
                </li>
                <li className="flex items-start gap-3 text-[#1e293b]">
                  <i className="fas fa-check-circle text-[#f59e0b] mt-1"></i>
                  <span>Brand strategy consulting</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-[#f59e0b] text-white hover:bg-[#d97706] px-8 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                Learn More
              </a>
            </div>

            {/* Digital Marketing Service */}
            <div className="bg-white p-12 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(245,158,11,0.2)] transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#f59e0b] group">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-[#f59e0b] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-chart-line text-4xl text-white"></i>
                </div>
                <h3 className="text-3xl font-bold text-[#1e293b] mb-4">Digital Marketing</h3>
              </div>
              <p className="text-[#64748b] leading-relaxed mb-6 text-lg">
                Supercharge your growth with proven digital marketing strategies. From SEO to social media, we drive targeted traffic and measurable results that directly impact your bottom line and accelerate business growth.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-[#1e293b]">
                  <i className="fas fa-check-circle text-[#f59e0b] mt-1"></i>
                  <span>Search engine optimization (SEO)</span>
                </li>
                <li className="flex items-start gap-3 text-[#1e293b]">
                  <i className="fas fa-check-circle text-[#f59e0b] mt-1"></i>
                  <span>Google Ads management</span>
                </li>
                <li className="flex items-start gap-3 text-[#1e293b]">
                  <i className="fas fa-check-circle text-[#f59e0b] mt-1"></i>
                  <span>Social media marketing</span>
                </li>
                <li className="flex items-start gap-3 text-[#1e293b]">
                  <i className="fas fa-check-circle text-[#f59e0b] mt-1"></i>
                  <span>Content marketing strategy</span>
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-[#f59e0b] text-white hover:bg-[#d97706] px-8 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-28 bg-[#f8fafc]">
        <div className="container max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-[#1e293b] mb-6">Our Work</h2>
            <p className="text-xl md:text-2xl text-[#64748b] max-w-[800px] mx-auto leading-relaxed">
              Trusted by Sydney businesses to deliver exceptional digital experiences that drive real results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {portfolioProjects.slice(0, 6).map((project) => (
              <div key={project.id} className="bg-white rounded-3xl overflow-hidden shadow-[0_5px_25px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#f59e0b]">
                <PortfolioCarousel
                  images={project.images || [project.image]}
                  title={project.name}
                />
                <div className="p-8">
                  <div className="mb-3">
                    <span className="inline-block bg-[#f59e0b]/10 text-[#f59e0b] px-3 py-1 rounded-full text-sm font-semibold">
                      {project.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e293b] mb-3">{project.name}</h3>
                  <p className="text-[#64748b] text-sm mb-5 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.services.map((service, i) => (
                      <span key={i} className="bg-[#f8fafc] text-[#1e293b] px-3 py-1.5 rounded-full text-xs font-semibold border border-[#e2e8f0]">
                        {service}
                      </span>
                    ))}
                  </div>
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#f59e0b] font-bold hover:gap-4 transition-all duration-300 text-lg"
                    >
                      Visit Website <i className="fas fa-arrow-right"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/portfolio"
              className="inline-block bg-[#f59e0b] text-white hover:bg-[#d97706] px-6 md:px-10 lg:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto text-center"
            >
              View All Projects <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-28 bg-white">
        <div className="container max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-[#1e293b] mb-6">How We Work</h2>
            <p className="text-xl md:text-2xl text-[#64748b] max-w-[800px] mx-auto leading-relaxed">
              A simple, transparent process designed to bring your vision to life with clarity and efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                number: "1",
                icon: "fa-comments",
                title: "Quick Chat",
                desc: "Call us or leave your details so we can call you back to discuss your project and understand your goals. We'll take the time to learn about your business, target audience, and objectives."
              },
              {
                number: "2",
                icon: "fa-search",
                title: "Discovery",
                desc: "At your discovery meeting, we'll go over all the details of your project so that we can prepare an accurate estimate. We'll explore design preferences, functionality requirements, and timeline expectations."
              },
              {
                number: "3",
                icon: "fa-rocket",
                title: "Get Started",
                desc: "We will send the estimate. Once agreed that we're both on the same page, let's get this show on the road! Our team will begin crafting your digital solution with regular updates along the way."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-[#1e293b] text-white rounded-2xl flex items-center justify-center text-5xl font-bold mx-auto mb-8 relative">
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#f59e0b] rounded-full flex items-center justify-center text-xl">
                    {step.number}
                  </div>
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <h3 className="text-3xl font-bold text-[#1e293b] mb-5">{step.title}</h3>
                <p className="text-[#64748b] leading-relaxed text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section id="google-reviews" className="py-28 bg-[#f8fafc]">
        <div className="container max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-[#1e293b] mb-6">What Our Clients Say</h2>
            <p className="text-xl md:text-2xl text-[#64748b] max-w-[800px] mx-auto mb-10 leading-relaxed">
              Real reviews from real businesses we've helped grow across Sydney
            </p>
          </div>

          <div className="text-center mb-16">
            <div className="inline-block bg-white px-16 py-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
              <div className="flex items-center justify-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-3xl text-[#f59e0b]"></i>
                ))}
              </div>
              <div className="text-4xl font-bold text-[#1e293b]">4.9 out of 5</div>
              <div className="text-[#64748b] text-lg mt-2">Based on 50+ Google Reviews</div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { review: "Exceptional service! Very happy with everything. I have used Sydney Web Designer for Logo design, Website development, and printing. They have exceeded my expectations every single time. Highly professional team that truly understands business needs.", name: "Bineesh Chandy", company: "Konkan Restaurant" },
              { review: "We hired Sydney Web Designer to revamp our website with a specific goal - Generate Leads on a daily basis. The results have been absolutely fantastic. We are now on page #1 for all our targeted keywords and seeing consistent lead flow!", name: "NDIS Provider", company: "Healthcare Services" },
              { review: "The team was simply amazing! Insightful, helpful, and dedicated. They treated my business as their own and helped us work through our most pressing branding and Google Ads issues with expertise and patience!", name: "Civil Contractor", company: "Construction Services" },
              { review: "This company is hands down the best, fastest and most professional digital marketing agency you can find in Sydney. You can ask for anything and everything and they'll get it done for you efficiently!", name: "Sydney Business Owner", company: "Digital Services" },
              { review: "We hired Sydney Web Designer to design and develop our website from scratch. The team were very courteous, flexible and professional throughout the entire process. They delivered on time and within budget - rare in this industry!", name: "Pulse Tech Systems", company: "Technology Services" },
              { review: "I had a very positive experience with Sydney Web Designer. They quickly understood what I required and undertook the task with complete professionalism. The final result was beyond my expectations. Will definitely work with them again!", name: "Danielle Cheuk", company: "Flavours of Home Blog" }
            ].map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 border-l-4 border-[#f59e0b]">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-xl text-[#f59e0b]"></i>
                  ))}
                </div>
                <p className="text-[#1e293b] leading-relaxed mb-5 text-base">{review.review}</p>
                <div className="border-t border-[#e2e8f0] pt-4">
                  <div className="font-bold text-[#1e293b] text-lg">{review.name}</div>
                  <div className="text-[#64748b] text-sm">{review.company}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/testimonials" className="inline-block bg-transparent text-[#1e293b] border-2 border-[#1e293b] hover:bg-[#1e293b] hover:text-white px-10 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-1">
              <i className="fas fa-comments mr-2"></i>
              View All Testimonials
            </Link>
            <a href="https://www.google.com/search?q=Sydney+Web+Designer" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#f59e0b] text-white hover:bg-[#d97706] px-10 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <i className="fab fa-google mr-2"></i>
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1e293b] text-white py-28 text-center">
        <div className="container max-w-[1200px] mx-auto px-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-[700px] mx-auto text-white">
            Let's build the future of your business together. Join 500+ satisfied clients across Sydney.
          </p>
          <a href="#contact" className="inline-block bg-[#f59e0b] text-white hover:bg-[#d97706] px-6 md:px-10 lg:px-14 py-3 md:py-4 lg:py-5 rounded-full font-bold text-base md:text-lg lg:text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl w-full sm:w-auto text-center">
            <i className="fas fa-paper-plane mr-3"></i>
            Start Your Project Today
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 bg-white">
        <div className="container max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-[#1e293b] mb-6">Get In Touch</h2>
            <p className="text-xl md:text-2xl text-[#64748b] max-w-[800px] mx-auto leading-relaxed">
              Let's discuss your project and how we can help you achieve your business goals
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-10 mb-20">
            <div className="bg-white p-12 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)] transition-all duration-300 hover:-translate-y-2 text-center border-t-4 border-[#f59e0b]">
              <div className="w-20 h-20 bg-[#1e293b] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-3xl">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Phone</h3>
              <p className="text-[#1e293b] text-xl mb-3 font-semibold">
                <a href="tel:0291918049" className="text-[#f59e0b] hover:text-[#d97706] transition-colors">02 9191 8049</a>
              </p>
              <span className="text-[#64748b] text-base">Mon-Fri: 9AM-5PM</span>
            </div>

            <div className="bg-white p-12 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)] transition-all duration-300 hover:-translate-y-2 text-center border-t-4 border-[#f59e0b]">
              <div className="w-20 h-20 bg-[#1e293b] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-3xl">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Email</h3>
              <p className="text-[#1e293b] text-lg mb-3 font-semibold">
                <a href="mailto:hello@dsigns.com.au" className="text-[#f59e0b] hover:text-[#d97706] transition-colors break-all">hello@dsigns.com.au</a>
              </p>
              <span className="text-[#64748b] text-base">24/7 Response</span>
            </div>

            <div className="bg-white p-12 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)] transition-all duration-300 hover:-translate-y-2 text-center border-t-4 border-[#f59e0b]">
              <div className="w-20 h-20 bg-[#1e293b] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-3xl">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Location</h3>
              <p className="text-[#1e293b] text-lg leading-relaxed mb-3 font-semibold">
                Suite 103 Level 1<br />22 Hunter Street
              </p>
              <span className="text-[#64748b] text-base">Parramatta NSW 2150</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#f8fafc] p-16 rounded-3xl max-w-[900px] mx-auto shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <h3 className="text-4xl font-bold text-[#1e293b] mb-3 text-center">Send Us A Message</h3>
            <p className="text-center text-[#64748b] mb-12 text-xl">Fill out the form below and we'll get back to you within 24 hours.</p>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="firstName" className="block mb-3 text-[#1e293b] font-bold text-lg">First Name *</label>
                  <input type="text" id="firstName" name="firstName" required className="w-full px-5 py-4 border-2 border-[#e2e8f0] rounded-xl focus:border-[#f59e0b] focus:outline-none transition-colors bg-white text-lg" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-3 text-[#1e293b] font-bold text-lg">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" required className="w-full px-5 py-4 border-2 border-[#e2e8f0] rounded-xl focus:border-[#f59e0b] focus:outline-none transition-colors bg-white text-lg" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="email" className="block mb-3 text-[#1e293b] font-bold text-lg">Email *</label>
                  <input type="email" id="email" name="email" required className="w-full px-5 py-4 border-2 border-[#e2e8f0] rounded-xl focus:border-[#f59e0b] focus:outline-none transition-colors bg-white text-lg" />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-3 text-[#1e293b] font-bold text-lg">Phone *</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-5 py-4 border-2 border-[#e2e8f0] rounded-xl focus:border-[#f59e0b] focus:outline-none transition-colors bg-white text-lg" />
                </div>
              </div>

              <div>
                <label htmlFor="website" className="block mb-3 text-[#1e293b] font-bold text-lg">Website (if applicable)</label>
                <input type="url" id="website" name="website" className="w-full px-5 py-4 border-2 border-[#e2e8f0] rounded-xl focus:border-[#f59e0b] focus:outline-none transition-colors bg-white text-lg" />
              </div>

              <div>
                <label htmlFor="service" className="block mb-3 text-[#1e293b] font-bold text-lg">Service Interested In</label>
                <select id="service" name="service" className="w-full px-5 py-4 border-2 border-[#e2e8f0] rounded-xl focus:border-[#f59e0b] focus:outline-none transition-colors bg-white text-lg">
                  <option value="">Select a service</option>
                  <option value="web-design">Web Design</option>
                  <option value="branding">Branding</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="seo">SEO Services</option>
                  <option value="growth-plan">Growth Plan</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-3 text-[#1e293b] font-bold text-lg">Tell us about your project *</label>
                <textarea id="message" name="message" required rows={6} className="w-full px-5 py-4 border-2 border-[#e2e8f0] rounded-xl focus:border-[#f59e0b] focus:outline-none transition-colors resize-y bg-white text-lg"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#f59e0b] text-white hover:bg-[#d97706] px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <i className="fas fa-paper-plane mr-3"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-28 bg-[#f8fafc]">
        <div className="container max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-[#1e293b] mb-6">Latest from Our Blog</h2>
            <p className="text-xl md:text-2xl text-[#64748b] max-w-[800px] mx-auto leading-relaxed">
              Expert web design tips, insights and industry trends for Sydney businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {[
              { title: "10 Essential Web Design Features Every Sydney Business Needs", desc: "Discover the must-have features that make modern Sydney websites stand out from the competition and drive real conversions.", icon: "fa-laptop-code" },
              { title: "How Much Does Professional Web Design Cost in Sydney?", desc: "Understand the true cost of quality web design in Sydney with our complete pricing guide and what you should expect to pay.", icon: "fa-dollar-sign" },
              { title: "Mobile-First Web Design: Why Sydney Businesses Can't Ignore It", desc: "Learn why mobile-first design is absolutely crucial for Sydney businesses and how to implement it effectively for maximum impact.", icon: "fa-mobile-alt" }
            ].map((post, index) => (
              <article key={index} className="bg-white p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)] transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#f59e0b] group">
                <div className="w-16 h-16 bg-[#f59e0b] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fas ${post.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-[#1e293b] mb-5 leading-snug">{post.title}</h3>
                <p className="text-[#64748b] leading-relaxed mb-6 text-lg">{post.desc}</p>
                <a href="/blog" className="inline-flex items-center gap-2 text-[#f59e0b] font-bold hover:gap-4 transition-all duration-300 text-lg">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog" className="inline-block bg-[#f59e0b] text-white hover:bg-[#d97706] px-6 md:px-10 lg:px-14 py-3 md:py-4 lg:py-5 rounded-full font-bold text-base md:text-lg lg:text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto text-center">
              <i className="fas fa-book-open mr-3"></i>
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
