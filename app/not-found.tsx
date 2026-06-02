import Link from "next/link";

export default function NotFound() {
  const creativeMessages = [
    "Even the best websites sometimes get lost in cyberspace!",
    "This page took an unplanned vacation... but we haven't!",
    "404: Page not found, but your success story is just around the corner!",
    "Lost in the digital wilderness? Let's find your way back!",
    "This page went missing, but your digital dreams didn't!",
  ];

  const randomMessage =
    creativeMessages[Math.floor(Math.random() * creativeMessages.length)];

  return (
    <div className="utility-paper-page utility-paper-page--404">
      {/* 404 Hero Section */}
      <section className="utility-hero utility-hero--404">
        <div className="container utility-hero__inner">
          {/* 404 Number */}
          <div className="utility-hero__number" aria-label="404">
            404
          </div>

          {/* Heading */}
          <h1>Page Not Found</h1>

          {/* Creative Message */}
          <p className="utility-hero__lead">{randomMessage}</p>

          {/* Description */}
          <p className="utility-hero__description">
            The page you&apos;re looking for doesn&apos;t exist, but our
            award-winning web design services do! Let&apos;s get you back on
            track and build something amazing together.
          </p>

          {/* Action Buttons */}
          <div className="utility-hero__actions">
            <Link href="/" className="paper-button paper-button--rust">
              <i className="fas fa-home" aria-hidden="true" />
              <span>Back to Home</span>
            </Link>

            <Link href="/contact" className="paper-button">
              <i className="fas fa-headset" aria-hidden="true" />
              <span>Contact Support</span>
            </Link>
          </div>

          {/* Quick Navigation */}
          <div className="utility-links-panel">
            <h2>Quick Navigation</h2>

            <div className="utility-links-panel__grid">
              <Link href="/" className="utility-link">
                <i className="fas fa-home" aria-hidden="true" />
                <span>Home</span>
              </Link>

              <Link href="/about" className="utility-link">
                <i className="fas fa-info-circle" aria-hidden="true" />
                <span>About</span>
              </Link>

              <Link href="/portfolio" className="utility-link">
                <i className="fas fa-briefcase" aria-hidden="true" />
                <span>Portfolio</span>
              </Link>

              <Link href="/services" className="utility-link">
                <i className="fas fa-cog" aria-hidden="true" />
                <span>Services</span>
              </Link>

              <Link href="/blog" className="utility-link">
                <i className="fas fa-newspaper" aria-hidden="true" />
                <span>Blog</span>
              </Link>

              <Link href="/#contact" className="utility-link">
                <i className="fas fa-envelope" aria-hidden="true" />
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="utility-proof paper-grain">
        <div className="container">
          <header className="utility-heading">
            <h2>While You&apos;re Here...</h2>

            <p>Discover why 500+ businesses trust Sydney Web Designer</p>
          </header>

          <div className="utility-proof__grid utility-proof__grid--three">
            <article className="utility-proof-card">
              <div className="utility-proof-card__icon">
                <i className="fas fa-award" aria-hidden="true" />
              </div>

              <h3>13+ Years Experience</h3>

              <p>
                Over a decade of delivering exceptional web design and digital
                marketing solutions.
              </p>
            </article>

            <article className="utility-proof-card">
              <div className="utility-proof-card__icon">
                <i className="fas fa-laptop-code" aria-hidden="true" />
              </div>

              <h3>500+ Websites</h3>

              <p>
                Hundreds of successful projects across all industries and
                business sizes.
              </p>
            </article>

            <article className="utility-proof-card">
              <div className="utility-proof-card__icon">
                <i className="fas fa-smile" aria-hidden="true" />
              </div>

              <h3>98% Satisfaction</h3>

              <p>
                Our clients love working with us and the results we deliver.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}