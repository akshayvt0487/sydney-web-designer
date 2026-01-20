import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Career Application | Apply Now | DSIGNS AUSTRALIA",
  description: "Apply for a position at DSIGNS AUSTRALIA. Submit your resume and join our growing team of digital marketing professionals.",
  keywords: "job application, careers dsigns, apply now, web designer jobs, digital marketing jobs sydney",
};

export default function CareerApplicationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy-orange text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Career Application
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Take the next step in your career. Fill out the application below and we&apos;ll be in touch within 5 business days.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <form className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-primary-navy border-b-2 border-primary-orange pb-2">
                    Personal Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="form-label">First Name *</label>
                      <input type="text" name="firstName" required className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name *</label>
                      <input type="text" name="lastName" required className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input type="email" name="email" required className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input type="tel" name="phone" required className="form-input" />
                    </div>
                    <div className="form-group md:col-span-2">
                      <label className="form-label">Address</label>
                      <input type="text" name="address" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">City</label>
                      <input type="text" name="city" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Postcode</label>
                      <input type="text" name="postcode" className="form-input" />
                    </div>
                  </div>
                </div>

                {/* Professional Background */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-primary-navy border-b-2 border-primary-orange pb-2">
                    Professional Background
                  </h2>
                  <div className="space-y-6">
                    <div className="form-group">
                      <label className="form-label">Position Applying For *</label>
                      <select name="position" required className="form-select">
                        <option value="">Select a position</option>
                        <option value="web-designer">Web Designer</option>
                        <option value="seo-specialist">SEO Specialist</option>
                        <option value="google-ads">Google Ads Specialist</option>
                        <option value="meta-ads">Meta Ads Specialist</option>
                        <option value="performance-marketer">Performance Marketer</option>
                        <option value="project-manager">Project Manager</option>
                        <option value="content-writer">Content Writer</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Years of Relevant Experience *</label>
                      <select name="experience" required className="form-select">
                        <option value="">Select years</option>
                        <option value="0-1">Less than 1 year</option>
                        <option value="1-2">1-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Current/Most Recent Job Title</label>
                      <input type="text" name="currentTitle" className="form-input" />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Current/Most Recent Employer</label>
                      <input type="text" name="currentEmployer" className="form-input" />
                    </div>

                    <div className="form-group">
                      <label className="form-label">LinkedIn Profile URL</label>
                      <input type="url" name="linkedin" className="form-input" placeholder="https://linkedin.com/in/yourprofile" />
                    </div>
                  </div>
                </div>

                {/* Availability & Work Preferences */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-primary-navy border-b-2 border-primary-orange pb-2">
                    Availability & Work Preferences
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="form-label">Preferred Work Location *</label>
                      <select name="workLocation" required className="form-select">
                        <option value="">Select preference</option>
                        <option value="onsite">Onsite (Parramatta Office)</option>
                        <option value="remote">Remote</option>
                        <option value="hybrid">Hybrid</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Employment Type *</label>
                      <select name="employmentType" required className="form-select">
                        <option value="">Select type</option>
                        <option value="full-time">Full-Time</option>
                        <option value="part-time">Part-Time</option>
                        <option value="casual">Casual</option>
                        <option value="contract">Contract</option>
                        <option value="internship">Internship</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Days Available Per Week</label>
                      <select name="daysAvailable" className="form-select">
                        <option value="">Select days</option>
                        <option value="1">1 day</option>
                        <option value="2">2 days</option>
                        <option value="3">3 days</option>
                        <option value="4">4 days</option>
                        <option value="5">5 days</option>
                        <option value="5+">5+ days</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Hours Available Per Week</label>
                      <input type="number" name="hoursAvailable" className="form-input" placeholder="e.g., 40" />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Start Date Availability</label>
                      <input type="date" name="startDate" className="form-input" />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Preferred Working Hours</label>
                      <select name="workingHours" className="form-select">
                        <option value="">Select preference</option>
                        <option value="standard">Standard (9am-5pm)</option>
                        <option value="flexible">Flexible Hours</option>
                        <option value="early">Early Start (7am-3pm)</option>
                        <option value="late">Late Start (10am-6pm)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Required Documents */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-primary-navy border-b-2 border-primary-orange pb-2">
                    Required Documents
                  </h2>
                  <div className="space-y-6">
                    <div className="form-group">
                      <label className="form-label">Resume / CV * (PDF only)</label>
                      <input
                        type="file"
                        name="resume"
                        required
                        accept=".pdf"
                        className="form-input"
                      />
                      <p className="text-sm text-gray-500 mt-2">📄 Please upload your resume in PDF format (max 5MB)</p>
                    </div>
                  </div>
                </div>

                {/* Additional Questions */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-primary-navy border-b-2 border-primary-orange pb-2">
                    Additional Questions
                  </h2>
                  <div className="space-y-6">
                    <div className="form-group">
                      <label className="form-label">Why do you want to work at DSIGNS AUSTRALIA?</label>
                      <textarea
                        name="whyDsigns"
                        className="form-textarea"
                        rows={4}
                        placeholder="Tell us what attracts you to this position and our company..."
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <label className="form-label">What relevant skills and experience do you bring?</label>
                      <textarea
                        name="skills"
                        className="form-textarea"
                        rows={4}
                        placeholder="Highlight your key skills, achievements, and how they relate to this position..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Consent */}
                <div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="mt-1"
                      id="consent"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-700">
                      I consent to DSIGNS AUSTRALIA collecting and storing my personal information for recruitment purposes.
                      I understand that my information will be handled in accordance with the Australian Privacy Act 1988.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <button type="submit" className="btn btn-primary px-12">
                    Submit Application
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    We&apos;ll review your application and contact you within 5 business days if you&apos;re a good fit.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Careers */}
      <section className="py-10 bg-gray-50">
        <div className="container text-center">
          <Link href="/careers" className="btn btn-secondary">
            ← Back to Careers Page
          </Link>
        </div>
      </section>
    </>
  );
}
