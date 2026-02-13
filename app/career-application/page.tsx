'use client';

import { useState } from 'react';
import Link from 'next/link';
import { generateBreadcrumbSchema } from '@/lib/schemas';

export default function CareerApplicationPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://sydneywebdesigner.com.au' },
    { name: 'Careers', url: 'https://sydneywebdesigner.com.au/careers' },
    { name: 'Career Application', url: 'https://sydneywebdesigner.com.au/career-application' },
  ]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    experience: '',
    currentPosition: '',
    currentCompany: '',
    whyJoin: '',
    keyStrengths: '',
    workLocation: '',
    employmentType: '',
    daysAvailable: '',
    hoursAvailable: '',
    startAvailability: '',
    preferredHours: '',
    howHeard: '',
    additionalComments: '',
    consent: false
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', formData);
    alert('Thank you for your application! We will review it and get back to you within 5-7 business days.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <div className="bg-[#1e293b] text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Job Application</h1>
        <p className="text-xl opacity-90 text-white">Join our team of digital marketing experts in Sydney</p>
      </div>

      {/* Application Container */}
      <div className="max-w-4xl mx-auto -mt-12 mb-16 bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative z-10">
        {/* Position Info */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-xl mb-12">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-2">Position</h2>
          <p className="text-slate-600 text-lg">Complete the form below to apply for this position</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#1e293b] mb-6 pb-3 border-b-2 border-gray-100">
              Personal Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 font-semibold text-[#1e293b]">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="John"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-[#1e293b]">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Smith"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 font-semibold text-[#1e293b]">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="john.smith@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-[#1e293b]">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="04XX XXX XXX"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-semibold text-[#1e293b]">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-[#1e293b]">
                  Portfolio/Website
                </label>
                <input
                  type="url"
                  placeholder="https://yourportfolio.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Professional Background */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#1e293b] mb-6 pb-3 border-b-2 border-gray-100">
              Professional Background
            </h3>

            <div className="mb-6">
              <label className="block mb-2 font-semibold text-[#1e293b]">
                Years of Experience <span className="text-red-500">*</span>
              </label>
              <select
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all"
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
              >
                <option value="">Select...</option>
                <option value="0-1">0-1 years</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold text-[#1e293b]">
                Current/Most Recent Position
              </label>
              <input
                type="text"
                placeholder="e.g., Senior Web Developer"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all"
                value={formData.currentPosition}
                onChange={(e) => setFormData({...formData, currentPosition: e.target.value})}
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold text-[#1e293b]">
                Current/Most Recent Company
              </label>
              <input
                type="text"
                placeholder="Company name"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all"
                value={formData.currentCompany}
                onChange={(e) => setFormData({...formData, currentCompany: e.target.value})}
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold text-[#1e293b]">
                Why do you want to work with us? <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell us what excites you about this opportunity..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all resize-vertical"
                value={formData.whyJoin}
                onChange={(e) => setFormData({...formData, whyJoin: e.target.value})}
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold text-[#1e293b]">
                What are your key strengths and skills? <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={5}
                placeholder="Describe your main skills, expertise areas, and what makes you stand out..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all resize-vertical"
                value={formData.keyStrengths}
                onChange={(e) => setFormData({...formData, keyStrengths: e.target.value})}
              />
            </div>
          </div>

          {/* Availability & Preferences */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#1e293b] mb-6 pb-3 border-b-2 border-gray-100">
              Availability & Work Preferences
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 font-semibold text-[#1e293b]">
                  Preferred Work Location <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all"
                  value={formData.workLocation}
                  onChange={(e) => setFormData({...formData, workLocation: e.target.value})}
                >
                  <option value="">Select...</option>
                  <option value="onsite">Onsite (Sydney Office)</option>
                  <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid (Mix of office and remote)</option>
                  <option value="flexible">Flexible/Open to discussion</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 font-semibold text-[#1e293b]">
                  Employment Type Preference <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all"
                  value={formData.employmentType}
                  onChange={(e) => setFormData({...formData, employmentType: e.target.value})}
                >
                  <option value="">Select...</option>
                  <option value="fulltime">Full-Time</option>
                  <option value="parttime">Part-Time</option>
                  <option value="casual">Casual</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                  <option value="flexible">Flexible/Open to discussion</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 font-semibold text-[#1e293b]">
                  Days Available Per Week <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all"
                  value={formData.daysAvailable}
                  onChange={(e) => setFormData({...formData, daysAvailable: e.target.value})}
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
              <div>
                <label className="block mb-2 font-semibold text-[#1e293b]">
                  Hours Available Per Week <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all"
                  value={formData.hoursAvailable}
                  onChange={(e) => setFormData({...formData, hoursAvailable: e.target.value})}
                >
                  <option value="">Select...</option>
                  <option value="10-15">10-15 hours per week</option>
                  <option value="16-24">16-24 hours per week</option>
                  <option value="25-32">25-32 hours per week</option>
                  <option value="33-38">33-38 hours per week (Full-time)</option>
                  <option value="38+">38+ hours per week</option>
                  <option value="flexible">Flexible hours</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-semibold text-[#1e293b]">
                  Start Date Availability <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all"
                  value={formData.startAvailability}
                  onChange={(e) => setFormData({...formData, startAvailability: e.target.value})}
                >
                  <option value="">Select...</option>
                  <option value="immediate">Immediate</option>
                  <option value="1-week">1 week notice</option>
                  <option value="2-weeks">2 weeks notice</option>
                  <option value="1-month">1 month notice</option>
                  <option value="flexible">Flexible/Negotiable</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 font-semibold text-[#1e293b]">
                  Preferred Working Hours
                </label>
                <select
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all"
                  value={formData.preferredHours}
                  onChange={(e) => setFormData({...formData, preferredHours: e.target.value})}
                >
                  <option value="">Select...</option>
                  <option value="standard">Standard hours (9am - 5pm)</option>
                  <option value="early">Early hours (7am - 3pm)</option>
                  <option value="late">Late hours (11am - 7pm)</option>
                  <option value="flexible">Flexible hours</option>
                  <option value="shifts">Open to shift work</option>
                </select>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#1e293b] mb-6 pb-3 border-b-2 border-gray-100">
              Required Documents
            </h3>

            <div className="mb-6">
              <label className="block mb-2 font-semibold text-[#1e293b]">
                Resume/CV <span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center bg-gray-50 hover:border-amber-500 hover:bg-amber-50 transition-all cursor-pointer">
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  id="resume-upload"
                  onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                />
                <label htmlFor="resume-upload" className="cursor-pointer">
                  <i className="fas fa-file-alt text-5xl text-amber-500 mb-4"></i>
                  <div className="text-slate-600">
                    <strong className="block mb-1">Click to upload your resume</strong>
                    <span className="text-sm">PDF, DOC, or DOCX (max 5MB)</span>
                  </div>
                  {resumeFile && (
                    <div className="mt-4 text-green-600 font-semibold">
                      <i className="fas fa-check-circle mr-2"></i>
                      {resumeFile.name}
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold text-[#1e293b]">
                Cover Letter (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center bg-gray-50 hover:border-amber-500 hover:bg-amber-50 transition-all cursor-pointer">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  id="cover-letter-upload"
                  onChange={(e) => setCoverLetterFile(e.target.files?.[0] || null)}
                />
                <label htmlFor="cover-letter-upload" className="cursor-pointer">
                  <i className="fas fa-file-alt text-5xl text-amber-500 mb-4"></i>
                  <div className="text-slate-600">
                    <strong className="block mb-1">Click to upload cover letter</strong>
                    <span className="text-sm">PDF, DOC, or DOCX (max 5MB)</span>
                  </div>
                  {coverLetterFile && (
                    <div className="mt-4 text-green-600 font-semibold">
                      <i className="fas fa-check-circle mr-2"></i>
                      {coverLetterFile.name}
                    </div>
                  )}
                </label>
              </div>
            </div>
          </div>

          {/* Additional Questions */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#1e293b] mb-6 pb-3 border-b-2 border-gray-100">
              Additional Questions
            </h3>

            <div className="mb-6">
              <label className="block mb-2 font-semibold text-[#1e293b]">
                How did you hear about this position?
              </label>
              <select
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all"
                value={formData.howHeard}
                onChange={(e) => setFormData({...formData, howHeard: e.target.value})}
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

            <div className="mb-6">
              <label className="block mb-2 font-semibold text-[#1e293b]">
                Any additional comments or questions?
              </label>
              <textarea
                rows={4}
                placeholder="Anything else you'd like us to know..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-all resize-vertical"
                value={formData.additionalComments}
                onChange={(e) => setFormData({...formData, additionalComments: e.target.value})}
              />
            </div>
          </div>

          {/* Consent */}
          <div className="flex items-start gap-4 mb-8">
            <input
              type="checkbox"
              required
              id="consent"
              className="mt-1 w-5 h-5"
              checked={formData.consent}
              onChange={(e) => setFormData({...formData, consent: e.target.checked})}
            />
            <label htmlFor="consent" className="text-slate-700">
              I consent to Sydney Web Designer storing and processing my personal information for recruitment purposes. I understand my data will be kept confidential and used only for this application. <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Submit Buttons */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-block px-6 md:px-10 lg:px-12 py-3 md:py-4 bg-amber-500 text-white rounded-full font-semibold text-base md:text-lg hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto mb-4 sm:mb-0"
            >
              Submit Application
            </button>
            <Link
              href="/careers"
              className="inline-block sm:ml-4 px-6 md:px-10 lg:px-12 py-3 md:py-4 bg-transparent text-[#1e293b] border-2 border-[#1e293b] rounded-full font-semibold text-base md:text-lg hover:bg-[#1e293b] hover:text-white transition-all w-full sm:w-auto text-center"
            >
              Cancel
            </Link>
            <p className="mt-6 text-slate-600">
              <i className="fas fa-comment-dots mr-2"></i>
              We review all applications carefully and will respond within 5-7 business days
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
