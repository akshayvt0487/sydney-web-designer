"use client";

import { useState } from "react";
import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/schemas";

export default function CareerApplicationPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Careers", url: "https://www.sydneywebdesigner.com.au/careers" },
    {
      name: "Career Application",
      url: "https://www.sydneywebdesigner.com.au/career-application",
    },
  ]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    experience: "",
    currentPosition: "",
    currentCompany: "",
    whyJoin: "",
    keyStrengths: "",
    workLocation: "",
    employmentType: "",
    daysAvailable: "",
    hoursAvailable: "",
    startAvailability: "",
    preferredHours: "",
    howHeard: "",
    additionalComments: "",
    consent: false,
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle form submission
    console.log("Application submitted:", formData);
    alert(
      "Thank you for your application! We will review it and get back to you within 5-7 business days."
    );
  };

  return (
    <div className="application-paper-page">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <section className="application-hero">
        <div className="container application-hero__inner">
          <h1>Job Application</h1>

          <p>Join our team of digital marketing experts in Sydney</p>
        </div>
      </section>

      {/* Application Container */}
      <section className="application-main paper-grain">
        <div className="container">
          <div className="application-panel">
            {/* Position Info */}
            <div className="application-position">
              <h2>Position</h2>

              <p>Complete the form below to apply for this position</p>
            </div>

            <form className="application-form" onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="application-form__section">
                <h3>Personal Information</h3>

                <div className="application-form__grid">
                  <div className="application-field">
                    <label>
                      First Name <span>*</span>
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="application-field">
                    <label>
                      Last Name <span>*</span>
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Smith"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="application-field">
                    <label>
                      Email <span>*</span>
                    </label>

                    <input
                      type="email"
                      required
                      placeholder="john.smith@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="application-field">
                    <label>
                      Phone <span>*</span>
                    </label>

                    <input
                      type="tel"
                      required
                      placeholder="04XX XXX XXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="application-field">
                    <label>LinkedIn Profile</label>

                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/yourprofile"
                      value={formData.linkedin}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          linkedin: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="application-field">
                    <label>Portfolio/Website</label>

                    <input
                      type="url"
                      placeholder="https://yourportfolio.com"
                      value={formData.portfolio}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          portfolio: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Professional Background */}
              <div className="application-form__section">
                <h3>Professional Background</h3>

                <div className="application-field">
                  <label>
                    Years of Experience <span>*</span>
                  </label>

                  <select
                    required
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        experience: e.target.value,
                      })
                    }
                  >
                    <option value="">Select...</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div className="application-field">
                  <label>Current/Most Recent Position</label>

                  <input
                    type="text"
                    placeholder="e.g., Senior Web Developer"
                    value={formData.currentPosition}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        currentPosition: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="application-field">
                  <label>Current/Most Recent Company</label>

                  <input
                    type="text"
                    placeholder="Company name"
                    value={formData.currentCompany}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        currentCompany: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="application-field">
                  <label>
                    Why do you want to work with us? <span>*</span>
                  </label>

                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us what excites you about this opportunity..."
                    value={formData.whyJoin}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        whyJoin: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="application-field">
                  <label>
                    What are your key strengths and skills? <span>*</span>
                  </label>

                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your main skills, expertise areas, and what makes you stand out..."
                    value={formData.keyStrengths}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        keyStrengths: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* Availability & Preferences */}
              <div className="application-form__section">
                <h3>Availability &amp; Work Preferences</h3>

                <div className="application-form__grid">
                  <div className="application-field">
                    <label>
                      Preferred Work Location <span>*</span>
                    </label>

                    <select
                      required
                      value={formData.workLocation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          workLocation: e.target.value,
                        })
                      }
                    >
                      <option value="">Select...</option>
                      <option value="onsite">Onsite (Sydney Office)</option>
                      <option value="remote">Remote</option>
                      <option value="hybrid">
                        Hybrid (Mix of office and remote)
                      </option>
                      <option value="flexible">
                        Flexible/Open to discussion
                      </option>
                    </select>
                  </div>

                  <div className="application-field">
                    <label>
                      Employment Type Preference <span>*</span>
                    </label>

                    <select
                      required
                      value={formData.employmentType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          employmentType: e.target.value,
                        })
                      }
                    >
                      <option value="">Select...</option>
                      <option value="fulltime">Full-Time</option>
                      <option value="parttime">Part-Time</option>
                      <option value="casual">Casual</option>
                      <option value="contract">Contract</option>
                      <option value="internship">Internship</option>
                      <option value="flexible">
                        Flexible/Open to discussion
                      </option>
                    </select>
                  </div>

                  <div className="application-field">
                    <label>
                      Days Available Per Week <span>*</span>
                    </label>

                    <select
                      required
                      value={formData.daysAvailable}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          daysAvailable: e.target.value,
                        })
                      }
                    >
                      <option value="">Select...</option>
                      <option value="1">1 day per week</option>
                      <option value="2">2 days per week</option>
                      <option value="3">3 days per week</option>
                      <option value="4">4 days per week</option>
                      <option value="5">5 days per week (Full-time)</option>
                      <option value="flexible">Flexible availability</option>
                    </select>
                  </div>

                  <div className="application-field">
                    <label>
                      Hours Available Per Week <span>*</span>
                    </label>

                    <select
                      required
                      value={formData.hoursAvailable}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hoursAvailable: e.target.value,
                        })
                      }
                    >
                      <option value="">Select...</option>
                      <option value="10-15">10-15 hours per week</option>
                      <option value="16-24">16-24 hours per week</option>
                      <option value="25-32">25-32 hours per week</option>
                      <option value="33-38">
                        33-38 hours per week (Full-time)
                      </option>
                      <option value="38+">38+ hours per week</option>
                      <option value="flexible">Flexible hours</option>
                    </select>
                  </div>

                  <div className="application-field">
                    <label>
                      Start Date Availability <span>*</span>
                    </label>

                    <select
                      required
                      value={formData.startAvailability}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          startAvailability: e.target.value,
                        })
                      }
                    >
                      <option value="">Select...</option>
                      <option value="immediate">Immediate</option>
                      <option value="1-week">1 week notice</option>
                      <option value="2-weeks">2 weeks notice</option>
                      <option value="1-month">1 month notice</option>
                      <option value="flexible">Flexible/Negotiable</option>
                    </select>
                  </div>

                  <div className="application-field">
                    <label>Preferred Working Hours</label>

                    <select
                      value={formData.preferredHours}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredHours: e.target.value,
                        })
                      }
                    >
                      <option value="">Select...</option>
                      <option value="standard">
                        Standard hours (9am - 5pm)
                      </option>
                      <option value="early">Early hours (7am - 3pm)</option>
                      <option value="late">Late hours (11am - 7pm)</option>
                      <option value="flexible">Flexible hours</option>
                      <option value="shifts">Open to shift work</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div className="application-form__section">
                <h3>Required Documents</h3>

                <div className="application-field">
                  <label>
                    Resume/CV <span>*</span>
                  </label>

                  <div className="application-upload">
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      id="resume-upload"
                      onChange={(e) =>
                        setResumeFile(e.target.files?.[0] || null)
                      }
                    />

                    <label htmlFor="resume-upload">
                      <i className="fas fa-file-alt" aria-hidden="true" />

                      <span>
                        <strong>Click to upload your resume</strong>
                        <small>PDF, DOC, or DOCX (max 5MB)</small>
                      </span>

                      {resumeFile && (
                        <span className="application-upload__selected">
                          <i
                            className="fas fa-check-circle"
                            aria-hidden="true"
                          />
                          {resumeFile.name}
                        </span>
                      )}
                    </label>
                  </div>
                </div>

                <div className="application-field">
                  <label>Cover Letter (Optional)</label>

                  <div className="application-upload">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      id="cover-letter-upload"
                      onChange={(e) =>
                        setCoverLetterFile(e.target.files?.[0] || null)
                      }
                    />

                    <label htmlFor="cover-letter-upload">
                      <i className="fas fa-file-alt" aria-hidden="true" />

                      <span>
                        <strong>Click to upload cover letter</strong>
                        <small>PDF, DOC, or DOCX (max 5MB)</small>
                      </span>

                      {coverLetterFile && (
                        <span className="application-upload__selected">
                          <i
                            className="fas fa-check-circle"
                            aria-hidden="true"
                          />
                          {coverLetterFile.name}
                        </span>
                      )}
                    </label>
                  </div>
                </div>
              </div>

              {/* Additional Questions */}
              <div className="application-form__section">
                <h3>Additional Questions</h3>

                <div className="application-field">
                  <label>How did you hear about this position?</label>

                  <select
                    value={formData.howHeard}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        howHeard: e.target.value,
                      })
                    }
                  >
                    <option value="">Select...</option>
                    <option value="website">Company Website</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="seek">SEEK</option>
                    <option value="indeed">Indeed</option>
                    <option value="referral">Referral</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="application-field">
                  <label>Any additional comments or questions?</label>

                  <textarea
                    rows={4}
                    placeholder="Anything else you'd like us to know..."
                    value={formData.additionalComments}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        additionalComments: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* Consent */}
              <div className="application-consent">
                <input
                  type="checkbox"
                  required
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      consent: e.target.checked,
                    })
                  }
                />

                <label htmlFor="consent">
                  I consent to Sydney Web Designer storing and processing my
                  personal information for recruitment purposes. I understand
                  my data will be kept confidential and used only for this
                  application. <span>*</span>
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="application-actions">
                <div className="application-actions__buttons">
                  <button
                    type="submit"
                    className="paper-button paper-button--rust"
                  >
                    Submit Application
                  </button>

                  <Link href="/careers" className="paper-button">
                    Cancel
                  </Link>
                </div>

                <p>
                  <i className="fas fa-comment-dots" aria-hidden="true" />
                  We review all applications carefully and will respond within
                  5-7 business days
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}