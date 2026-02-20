"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { portfolioProjects } from "@/lib/constants";
import PortfolioCarousel from "@/components/PortfolioCarousel";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO SECTION - Modern Gradient Design
      ════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#f59e0b] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#f59e0b] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-[#f59e0b] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

        <div className={`relative z-10 container max-w-6xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#f59e0b] rounded-full animate-pulse" />
            <span className="text-[#f59e0b] text-sm font-semibold">13+ Years of Excellence</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Sydney&apos;s Premier
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fb923c] mt-2">
              Web Design Agency
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your digital presence with stunning websites that convert visitors into customers. Award-winning design meets cutting-edge technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              data-popup="contact"
              className="group relative bg-[#f59e0b] hover:bg-[#d97706] text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]"
            >
              <span className="flex items-center justify-center gap-2">
                Get Your Free Quote
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <Link
              href="/portfolio"
              className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center justify-center gap-2">
                View Portfolio
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "fa-trophy", value: "500+", label: "Projects Delivered" },
              { icon: "fa-users", value: "98%", label: "Client Satisfaction" },
              { icon: "fa-star", value: "4.9", label: "Google Rating" },
              { icon: "fa-rocket", value: "12+", label: "Industries Served" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <i className={`fas ${stat.icon} text-3xl text-[#f59e0b] mb-3`} />
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#f59e0b] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES SECTION - Card Grid
      ════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#f59e0b] font-semibold text-sm tracking-widest uppercase mb-3 block">What We Do</span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1e293b] mb-4">
              Our <span className="text-[#f59e0b]">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              End-to-end digital solutions to elevate your brand and accelerate growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "fa-palette",
                title: "Web Design & Development",
                desc: "Custom, responsive websites built with the latest technologies. Beautiful designs that convert.",
                link: "/services/custom-web-design",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "fa-bullhorn",
                title: "Digital Marketing",
                desc: "SEO, Google Ads, social media & content marketing strategies that drive real results.",
                link: "/services/seo-sydney",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "fa-pen-nib",
                title: "Branding & Design",
                desc: "Stand out with memorable brand identities, logos, and marketing materials.",
                link: "/services/brand-identity",
                color: "from-orange-500 to-red-500"
              },
            ].map((service, i) => (
              <Link
                key={i}
                href={service.link}
                className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-[#f59e0b]/30 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <i className={`fas ${service.icon} text-2xl text-white`} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#1e293b] mb-4 group-hover:text-[#f59e0b] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <div className="flex items-center gap-2 text-[#f59e0b] font-semibold group-hover:gap-4 transition-all">
                    Learn More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f59e0b]/5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#f59e0b] hover:text-[#d97706] font-bold text-lg group"
            >
              View All Services
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PORTFOLIO SECTION - Featured Work
      ════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#f59e0b] font-semibold text-sm tracking-widest uppercase mb-3 block">Our Work</span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1e293b] mb-4">
              Featured <span className="text-[#f59e0b]">Projects</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See how we&apos;ve helped businesses transform their digital presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioProjects.slice(0, 6).map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <PortfolioCarousel
                    images={project.images || [project.image]}
                    title={project.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#f59e0b] bg-[#f59e0b]/10 px-3 py-1 rounded-full">
                      {project.industry}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1e293b] mb-2 group-hover:text-[#f59e0b] transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#f59e0b] font-semibold hover:gap-3 transition-all text-sm"
                    >
                      View Website
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View Full Portfolio
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY CHOOSE US - Benefits Section
      ════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#f59e0b] font-semibold text-sm tracking-widest uppercase mb-3 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-6">
                Sydney&apos;s Most Trusted Web Design Partner
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                We don&apos;t just build websites — we create digital experiences that drive real business growth.
              </p>

              <div className="space-y-6">
                {[
                  { icon: "fa-award", title: "Award-Winning Design", desc: "Recognized for excellence in web design and digital innovation" },
                  { icon: "fa-clock", title: "13+ Years Experience", desc: "Over a decade serving Sydney businesses with proven results" },
                  { icon: "fa-headset", title: "Dedicated Support", desc: "Local team providing ongoing support and maintenance" },
                  { icon: "fa-chart-line", title: "Results-Driven", desc: "Focused on ROI, conversions, and measurable outcomes" },
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="w-14 h-14 bg-[#f59e0b]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#f59e0b] transition-colors duration-300">
                      <i className={`fas ${benefit.icon} text-xl text-[#f59e0b] group-hover:text-white transition-colors duration-300`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1e293b] mb-1">{benefit.title}</h3>
                      <p className="text-slate-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Image Placeholder with decorative elements */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center">
                  <div className="text-center text-white p-12">
                    <i className="fas fa-laptop-code text-8xl text-[#f59e0b] mb-6" />
                    <p className="text-2xl font-bold">500+ Websites Delivered</p>
                    <p className="text-slate-400 mt-2">Trusted by Sydney businesses</p>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#f59e0b] text-white rounded-2xl p-6 shadow-xl transform rotate-3 hover:rotate-0 transition-transform">
                  <div className="text-4xl font-black">98%</div>
                  <div className="text-sm font-semibold">Satisfaction</div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#f59e0b]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#f59e0b]/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA SECTION - Get Started
      ════════════════════════════════════════════ */}
      <section className="py-24 bg-[#1e293b] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>

        <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Let&apos;s create something amazing together. Get your free consultation and custom quote today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              data-popup="contact"
              className="group bg-[#f59e0b] hover:bg-[#d97706] text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]"
            >
              <span className="flex items-center justify-center gap-2">
                Get Free Quote
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            <a
              href="tel:+61280680688"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center justify-center gap-2">
                <i className="fas fa-phone" />
                (02) 8068 0688
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
