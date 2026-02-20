import Link from "next/link";

export default function NotFound() {
  const creativeMessages = [
    "Even the best websites sometimes get lost in cyberspace!",
    "This page took an unplanned vacation... but we haven't!",
    "404: Page not found, but your success story is just around the corner!",
    "Lost in the digital wilderness? Let's find your way back!",
    "This page went missing, but your digital dreams didn't!",
  ];

  const randomMessage = creativeMessages[Math.floor(Math.random() * creativeMessages.length)];

  return (
    <>
      {/* 404 Hero Section */}
      <section className="bg-[#1e293b] text-white py-24 md:py-40 min-h-screen flex items-center justify-center">
        <div className="container max-w-[1000px] mx-auto px-6 md:px-8 text-center">
          {/* 404 Number */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-8xl md:text-9xl lg:text-[150px] font-bold mb-4 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#d97706] leading-none">
              404
            </h1>
            <div className="h-1 w-24 md:w-32 bg-[#f59e0b] mx-auto mb-8 md:mb-12"></div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
            Page Not Found
          </h2>

          {/* Creative Message */}
          <p className="text-xl md:text-2xl mb-8 md:mb-12 opacity-90 max-w-[700px] mx-auto leading-relaxed">
            {randomMessage}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl mb-12 md:mb-16 opacity-75 max-w-[600px] mx-auto">
            The page you&apos;re looking for doesn&apos;t exist, but our award-winning web design services do! Let&apos;s get you back on track and build something amazing together.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center flex-wrap mb-16 md:mb-24">
            <Link
              href="/"
              className="bg-[#f59e0b] text-white hover:bg-[#d97706] border-2 border-[#f59e0b] px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl inline-flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto"
            >
              <i className="fas fa-home"></i>
              <span>Back to Home</span>
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#1e293b] px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 hover:-translate-y-1 inline-flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto"
            >
              <i className="fas fa-headset"></i>
              <span>Contact Support</span>
            </Link>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 max-w-[700px] mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-8 text-white">Quick Navigation</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <Link
                href="/"
                className="text-white hover:text-[#f59e0b] transition-colors py-2 md:py-3 px-3 md:px-4 rounded-lg hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <i className="fas fa-home text-sm md:text-base"></i>
                <span className="text-sm md:text-base">Home</span>
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-[#f59e0b] transition-colors py-2 md:py-3 px-3 md:px-4 rounded-lg hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <i className="fas fa-info-circle text-sm md:text-base"></i>
                <span className="text-sm md:text-base">About</span>
              </Link>
              <Link
                href="/portfolio"
                className="text-white hover:text-[#f59e0b] transition-colors py-2 md:py-3 px-3 md:px-4 rounded-lg hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <i className="fas fa-briefcase text-sm md:text-base"></i>
                <span className="text-sm md:text-base">Portfolio</span>
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-[#f59e0b] transition-colors py-2 md:py-3 px-3 md:px-4 rounded-lg hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <i className="fas fa-cog text-sm md:text-base"></i>
                <span className="text-sm md:text-base">Services</span>
              </Link>
              <Link
                href="/blog"
                className="text-white hover:text-[#f59e0b] transition-colors py-2 md:py-3 px-3 md:px-4 rounded-lg hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <i className="fas fa-newspaper text-sm md:text-base"></i>
                <span className="text-sm md:text-base">Blog</span>
              </Link>
              <Link
                href="/#contact"
                className="text-white hover:text-[#f59e0b] transition-colors py-2 md:py-3 px-3 md:px-4 rounded-lg hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <i className="fas fa-envelope text-sm md:text-base"></i>
                <span className="text-sm md:text-base">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20 md:py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4 text-center">While You&apos;re Here...</h2>
          <p className="text-lg md:text-xl text-[#64748b] max-w-[700px] mx-auto mb-16 text-center">
            Discover why 500+ businesses trust Sydney Web Designer
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl md:text-3xl">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1e293b] mb-3">13+ Years Experience</h3>
              <p className="text-[#64748b] text-base md:text-lg">
                Over a decade of delivering exceptional web design and digital marketing solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl md:text-3xl">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1e293b] mb-3">500+ Websites</h3>
              <p className="text-[#64748b] text-base md:text-lg">
                Hundreds of successful projects across all industries and business sizes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl md:text-3xl">
                <i className="fas fa-smile"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1e293b] mb-3">98% Satisfaction</h3>
              <p className="text-[#64748b] text-base md:text-lg">
                Our clients love working with us and the results we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
