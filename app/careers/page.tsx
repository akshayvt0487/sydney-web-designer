import { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = generateMetadata({
  title: "Careers | Join Our Team",
  description:
    "Join Sydney's leading web design agency. Explore exciting career opportunities in web design, development, and digital marketing. View open positions.",
  keywords:
    "web design jobs sydney, careers, join our team, digital marketing jobs",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/careers",
});

export default function CareersPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Careers", url: "https://www.sydneywebdesigner.com.au/careers" },
  ]);

  const jobs = [
    {
      title: "Web Designer",
      location: "Full-time • Parramatta, Sydney • Web Design Team",
      description:
        "Create beautiful, conversion-focused websites for Sydney businesses. Work with our design and development team to deliver exceptional digital experiences.",
      requirements: [
        "2+ years professional web design experience",
        "Expert in Figma or Adobe XD",
        "Strong understanding of UX/UI principles",
        "WordPress and Elementor experience",
        "Portfolio showcasing web design work",
        "Knowledge of responsive design and mobile-first approach",
      ],
      slug: "web-designer",
    },
    {
      title: "SEO Specialist",
      location: "Full-time • Parramatta, Sydney • Digital Marketing Team",
      description:
        "Drive organic growth for our clients through strategic SEO. Conduct audits, optimize content, build links, and deliver measurable ranking improvements.",
      requirements: [
        "3+ years hands-on SEO experience",
        "Proven track record of ranking improvements",
        "Expert in Google Analytics and Search Console",
        "Technical SEO knowledge (crawling, indexing, site architecture)",
        "Experience with SEO tools (Ahrefs, SEMrush, Screaming Frog)",
        "Strong analytical and reporting skills",
      ],
      slug: "seo-specialist",
    },
    {
      title: "Google Ads Specialist",
      location: "Full-time • Parramatta, Sydney • Digital Marketing Team",
      description:
        "Manage and optimize Google Ads campaigns for Sydney businesses. Create strategies, write ad copy, optimize bidding, and maximize ROAS for clients.",
      requirements: [
        "3+ years Google Ads campaign management experience",
        "Google Ads certification required",
        "Experience managing budgets of $10K+ per month",
        "Strong understanding of PPC metrics and optimization",
        "Proven track record of improving ROAS and conversion rates",
        "Experience with Google Analytics and conversion tracking",
      ],
      slug: "google-ads-specialist",
    },
    {
      title: "Meta Ads Specialist",
      location: "Full-time • Parramatta, Sydney • Digital Marketing Team",
      description:
        "Create and manage Facebook and Instagram advertising campaigns. Develop targeting strategies, create compelling ad creatives, and optimize for conversions.",
      requirements: [
        "2+ years managing Meta (Facebook/Instagram) advertising",
        "Meta Blueprint certification preferred",
        "Experience with Facebook Ads Manager and Business Manager",
        "Strong understanding of audience targeting and pixel tracking",
        "Creative eye for ad design and copywriting",
        "Experience with A/B testing and campaign optimization",
      ],
      slug: "meta-ads-specialist",
    },
    {
      title: "Performance Marketer",
      location: "Full-time • Parramatta, Sydney • Digital Marketing Team",
      description:
        "Own end-to-end digital marketing performance across all channels. Analyze data, identify opportunities, and optimize campaigns to maximize ROI for clients.",
      requirements: [
        "3+ years performance marketing experience",
        "Expert in Google Analytics and data analysis",
        "Experience with multiple channels (Google Ads, Meta, LinkedIn, etc.)",
        "Strong understanding of conversion rate optimization",
        "Proven ability to scale campaigns profitably",
        "Experience with marketing automation and attribution modeling",
      ],
      slug: "performance-marketer",
    },
    {
      title: "Project Manager",
      location: "Full-time • Parramatta, Sydney • Operations Team",
      description:
        "Lead digital projects from initiation to delivery. Coordinate between clients, designers, developers, and marketers to ensure projects are delivered on time and exceed expectations.",
      requirements: [
        "3+ years project management experience in digital agency",
        "Experience managing web design and digital marketing projects",
        "Strong client communication and relationship management skills",
        "Proficient with project management tools (Asana, Monday, Trello)",
        "Ability to manage multiple projects simultaneously",
        "Understanding of web development and digital marketing processes",
      ],
      slug: "project-manager",
    },
    {
      title: "Content Writer",
      location: "Full-time • Parramatta, Sydney • Content Team",
      description:
        "Craft compelling content that engages audiences and drives results. Write blog posts, website copy, and marketing materials with SEO best practices.",
      requirements: [
        "Excellent writing skills in Australian English",
        "2+ years content writing experience",
        "Understanding of SEO and keyword optimization",
        "Portfolio of published work required",
        "Ability to write for different industries and audiences",
        "Strong research and fact-checking skills",
      ],
      slug: "content-writer",
    },
  ];

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="careers-paper-page">
        {/* Hero Section */}
        <section className="careers-hero">
          <div className="container careers-hero__inner">
            <div className="careers-hero__content">
              <h1>Join Our Team</h1>

              <p>
                Build your career with Sydney&apos;s leading web design and
                digital marketing agency
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="careers-section careers-benefits paper-grain">
          <div className="container">
            <div className="careers-heading">
              <h2>
                Why Work With <span>Us</span>?
              </h2>

              <p>
                We&apos;re a growing team passionate about helping Sydney
                businesses succeed online
              </p>
            </div>

            <div className="careers-benefits__grid">
              <article className="careers-benefit">
                <h3>Growth Opportunities</h3>

                <p>
                  We invest in our team&apos;s professional development with
                  training, mentorship, and career advancement opportunities.
                </p>
              </article>

              <article className="careers-benefit">
                <h3>Flexible Work</h3>

                <p>
                  Enjoy work-life balance with flexible hours and remote work
                  options for the right candidates.
                </p>
              </article>

              <article className="careers-benefit">
                <h3>Great Culture</h3>

                <p>
                  Work with a collaborative, supportive team that values
                  creativity, innovation, and results.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="careers-section careers-jobs paper-grain">
          <div className="container">
            <div className="careers-heading">
              <h2>
                Current <span>Opportunities</span>
              </h2>

              <p>Join our team and make an impact</p>
            </div>

            <div className="careers-jobs__list">
              {jobs.map((job, index) => (
                <article key={index} className="careers-job">
                  <h3>{job.title}</h3>

                  <p className="careers-job__location">{job.location}</p>

                  <p className="careers-job__description">
                    {job.description}
                  </p>

                  <div className="careers-job__requirements">
                    <h4>Requirements:</h4>

                    <ul>
                      {job.requirements.map((req, idx) => (
                        <li key={idx}>
                          <i className="fas fa-check" aria-hidden="true" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/career-application?position=${job.slug}`}
                    className="paper-button paper-button--rust careers-job__apply"
                  >
                    Apply for this position
                  </Link>
                </article>
              ))}
            </div>

            {/* No Right Role Section */}
            <div className="careers-resume">
              <h3>Don&apos;t See the Right Role?</h3>

              <p>
                We&apos;re always looking for talented people. Send us your
                resume!
              </p>

              <a
                href="mailto:hello@dsigns.com.au"
                className="paper-button paper-button--rust"
              >
                Email Your Resume
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}