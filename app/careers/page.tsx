import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | Join Our Team | DSIGNS AUSTRALIA",
  description: "Join DSIGNS AUSTRALIA and help shape the future of digital marketing. Explore career opportunities in web design, SEO, and digital marketing.",
  keywords: "careers, jobs, web designer jobs sydney, seo specialist jobs, digital marketing jobs",
};

export default function CareersPage() {
  const jobPositions = [
    {
      title: "Web Designer",
      type: "Full-Time / Part-Time",
      description: "Create stunning, user-friendly websites that convert. Work with modern design tools and latest technologies.",
    },
    {
      title: "SEO Specialist",
      type: "Full-Time",
      description: "Drive organic growth for clients through strategic SEO. Experience in technical SEO, content optimization, and analytics required.",
    },
    {
      title: "Google Ads Specialist",
      type: "Full-Time",
      description: "Manage and optimize PPC campaigns for clients. Proven track record of delivering ROI through Google Ads required.",
    },
    {
      title: "Meta Ads Specialist",
      type: "Full-Time",
      description: "Create and manage Facebook and Instagram ad campaigns. Experience with Meta Business Suite and social advertising required.",
    },
    {
      title: "Performance Marketer",
      type: "Full-Time / Contract",
      description: "Drive results across multiple channels. Strong analytical skills and experience with data-driven marketing essential.",
    },
    {
      title: "Project Manager",
      type: "Full-Time",
      description: "Coordinate client projects from start to finish. Excellent communication and organizational skills required.",
    },
    {
      title: "Content Writer",
      type: "Part-Time / Casual",
      description: "Create engaging content for websites, blogs, and marketing materials. SEO knowledge and marketing experience preferred.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy-orange text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Be part of a growing digital agency that&apos;s making a real impact for businesses across
              Sydney and Australia. We&apos;re looking for talented, passionate professionals to join us.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container">
          <div className="section-title">
            <h2>Why Work at DSIGNS?</h2>
            <p>A great workplace for talented professionals</p>
          </div>

          <div className="grid-3">
            <div className="card text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Growth Opportunities</h3>
              <p className="text-gray-600">
                Develop your skills and advance your career. We invest in our team&apos;s professional
                development and growth.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3">Flexible Work</h3>
              <p className="text-gray-600">
                Enjoy flexible working arrangements including remote options. We value work-life balance
                and productivity.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Meaningful Work</h3>
              <p className="text-gray-600">
                Work on diverse projects across 50+ industries. See the real impact of your work on
                client businesses.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Collaborative Culture</h3>
              <p className="text-gray-600">
                Be part of a supportive team that values collaboration, creativity, and innovation.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-gray-600">
                Access to training, courses, and industry events. Stay current with the latest tools and
                trends.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Competitive Pay</h3>
              <p className="text-gray-600">
                Fair compensation packages based on experience and skills. Performance bonuses and
                incentives available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Open Positions</h2>
            <p>Explore career opportunities at DSIGNS</p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {jobPositions.map((job, index) => (
              <div key={index} className="card hover:shadow-card-hover transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2 text-primary-navy">{job.title}</h3>
                    <p className="text-primary-orange font-semibold mb-3">{job.type}</p>
                    <p className="text-gray-700">{job.description}</p>
                  </div>
                  <Link
                    href="/career-application"
                    className="btn btn-primary whitespace-nowrap self-start md:self-center"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container">
          <div className="section-title">
            <h2>Application Process</h2>
            <p>Simple and straightforward</p>
          </div>

          <div className="grid-2 md:grid-cols-4 max-w-5xl mx-auto">
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Apply Online</h3>
              <p className="text-sm text-gray-600">Submit your application through our online form</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Initial Review</h3>
              <p className="text-sm text-gray-600">We review applications within 5 business days</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Interview</h3>
              <p className="text-sm text-gray-600">Meet with our team to discuss the opportunity</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Join Us</h3>
              <p className="text-sm text-gray-600">Start your journey with DSIGNS</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-navy-orange text-white py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Don&apos;t See the Right Position?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-100">
            We&apos;re always looking for talented people. Send us your resume and let us know how you can
            contribute to our team.
          </p>
          <Link href="/career-application" className="btn btn-white">
            Submit Your Resume
          </Link>
        </div>
      </section>
    </>
  );
}
