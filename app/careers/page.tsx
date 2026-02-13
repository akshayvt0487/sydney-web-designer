import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers Sydney | Join Our Digital Marketing Team | Sydney Web Designer",
  description: "Join Sydney Web Designer - Sydney's leading digital agency. We're hiring Web Designers, SEO Specialists, Google Ads Experts, and more. Apply today!",
};

export default function CareersPage() {
  const jobs = [
    {
      title: "Web Designer",
      location: "Full-time • Parramatta, Sydney • Web Design Team",
      description: "Create beautiful, conversion-focused websites for Sydney businesses. Work with our design and development team to deliver exceptional digital experiences.",
      requirements: [
        "2+ years professional web design experience",
        "Expert in Figma or Adobe XD",
        "Strong understanding of UX/UI principles",
        "WordPress and Elementor experience",
        "Portfolio showcasing web design work",
        "Knowledge of responsive design and mobile-first approach"
      ],
      slug: "web-designer"
    },
    {
      title: "SEO Specialist",
      location: "Full-time • Parramatta, Sydney • Digital Marketing Team",
      description: "Drive organic growth for our clients through strategic SEO. Conduct audits, optimize content, build links, and deliver measurable ranking improvements.",
      requirements: [
        "3+ years hands-on SEO experience",
        "Proven track record of ranking improvements",
        "Expert in Google Analytics and Search Console",
        "Technical SEO knowledge (crawling, indexing, site architecture)",
        "Experience with SEO tools (Ahrefs, SEMrush, Screaming Frog)",
        "Strong analytical and reporting skills"
      ],
      slug: "seo-specialist"
    },
    {
      title: "Google Ads Specialist",
      location: "Full-time • Parramatta, Sydney • Digital Marketing Team",
      description: "Manage and optimize Google Ads campaigns for Sydney businesses. Create strategies, write ad copy, optimize bidding, and maximize ROAS for clients.",
      requirements: [
        "3+ years Google Ads campaign management experience",
        "Google Ads certification required",
        "Experience managing budgets of $10K+ per month",
        "Strong understanding of PPC metrics and optimization",
        "Proven track record of improving ROAS and conversion rates",
        "Experience with Google Analytics and conversion tracking"
      ],
      slug: "google-ads-specialist"
    },
    {
      title: "Meta Ads Specialist",
      location: "Full-time • Parramatta, Sydney • Digital Marketing Team",
      description: "Create and manage Facebook and Instagram advertising campaigns. Develop targeting strategies, create compelling ad creatives, and optimize for conversions.",
      requirements: [
        "2+ years managing Meta (Facebook/Instagram) advertising",
        "Meta Blueprint certification preferred",
        "Experience with Facebook Ads Manager and Business Manager",
        "Strong understanding of audience targeting and pixel tracking",
        "Creative eye for ad design and copywriting",
        "Experience with A/B testing and campaign optimization"
      ],
      slug: "meta-ads-specialist"
    },
    {
      title: "Performance Marketer",
      location: "Full-time • Parramatta, Sydney • Digital Marketing Team",
      description: "Own end-to-end digital marketing performance across all channels. Analyze data, identify opportunities, and optimize campaigns to maximize ROI for clients.",
      requirements: [
        "3+ years performance marketing experience",
        "Expert in Google Analytics and data analysis",
        "Experience with multiple channels (Google Ads, Meta, LinkedIn, etc.)",
        "Strong understanding of conversion rate optimization",
        "Proven ability to scale campaigns profitably",
        "Experience with marketing automation and attribution modeling"
      ],
      slug: "performance-marketer"
    },
    {
      title: "Project Manager",
      location: "Full-time • Parramatta, Sydney • Operations Team",
      description: "Lead digital projects from initiation to delivery. Coordinate between clients, designers, developers, and marketers to ensure projects are delivered on time and exceed expectations.",
      requirements: [
        "3+ years project management experience in digital agency",
        "Experience managing web design and digital marketing projects",
        "Strong client communication and relationship management skills",
        "Proficient with project management tools (Asana, Monday, Trello)",
        "Ability to manage multiple projects simultaneously",
        "Understanding of web development and digital marketing processes"
      ],
      slug: "project-manager"
    },
    {
      title: "Content Writer",
      location: "Full-time • Parramatta, Sydney • Content Team",
      description: "Craft compelling content that engages audiences and drives results. Write blog posts, website copy, and marketing materials with SEO best practices.",
      requirements: [
        "Excellent writing skills in Australian English",
        "2+ years content writing experience",
        "Understanding of SEO and keyword optimization",
        "Portfolio of published work required",
        "Ability to write for different industries and audiences",
        "Strong research and fact-checking skills"
      ],
      slug: "content-writer"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1e293b] text-white py-32 text-center">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Join Our Team
          </h1>
          <p className="text-xl text-white">
            Build your career with Sydney's leading web design and digital marketing agency
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1e293b] mb-4 text-center">Why Work With Us?</h2>
          <p className="text-xl text-[#64748b] text-center mb-12">We're a growing team passionate about helping Sydney businesses succeed online</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-t-4 border-[#f59e0b]">
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Growth Opportunities</h3>
              <p className="text-[#64748b] leading-relaxed">
                We invest in our team's professional development with training, mentorship, and career advancement opportunities.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-t-4 border-[#f59e0b]">
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Flexible Work</h3>
              <p className="text-[#64748b] leading-relaxed">
                Enjoy work-life balance with flexible hours and remote work options for the right candidates.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-t-4 border-[#f59e0b]">
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Great Culture</h3>
              <p className="text-[#64748b] leading-relaxed">
                Work with a collaborative, supportive team that values creativity, innovation, and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1e293b] mb-4 text-center">Current Opportunities</h2>
          <p className="text-xl text-[#64748b] text-center mb-12">Join our team and make an impact</p>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border-l-6 border-[#f59e0b] hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-[#1e293b] mb-2">{job.title}</h3>
                <p className="text-[#64748b] mb-4 text-sm">{job.location}</p>
                <p className="text-[#64748b] mb-6 leading-relaxed">{job.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-[#1e293b] mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[#64748b]">
                        <span className="text-[#f59e0b] font-bold text-xl flex-shrink-0"><i className="fas fa-check"></i></span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/career-application?position=${job.slug}`}
                  className="inline-block bg-[#f59e0b] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#d97706] transition-all"
                >
                  Apply for this position
                </Link>
              </div>
            ))}
          </div>

          {/* No Right Role Section */}
          <div className="text-center bg-white rounded-3xl shadow-lg p-12 mt-16">
            <h3 className="text-3xl font-bold text-[#1e293b] mb-4">Don't See the Right Role?</h3>
            <p className="text-xl text-[#64748b] mb-8">
              We're always looking for talented people. Send us your resume!
            </p>
            <a
              href="mailto:hello@dsigns.com.au"
              className="bg-[#f59e0b] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#d97706] transition-all hover:shadow-lg inline-block"
            >
              Email Your Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
