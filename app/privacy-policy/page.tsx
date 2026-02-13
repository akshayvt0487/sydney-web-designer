import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#1e293b] text-white py-16 text-center">
        <div className="container max-w-[900px] mx-auto px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
            Privacy Policy
          </h1>
          <p className="text-lg opacity-90 text-white">
            Last Updated: November 30, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-[900px] mx-auto px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[#64748b] mb-6">
              <strong className="text-[#1e293b]">Sydney Web Designer</strong> ("we," "us," or "our") operates the website sydneywebdesigner.com.au and provides web design and digital marketing services. We are committed to protecting your privacy and handling your personal information in accordance with the Australian Privacy Principles under the Privacy Act 1988 (Cth).
            </p>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">1. Information We Collect</h2>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-3">1.1 Personal Information</h3>
            <p className="text-[#64748b] mb-4">We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-6">
              <li>Name and contact details (email address, phone number, business address)</li>
              <li>Business information (company name, ABN, industry)</li>
              <li>Website usage data (IP address, browser type, pages visited)</li>
              <li>Payment information (credit card details, billing address)</li>
              <li>Communications with us (emails, phone calls, form submissions)</li>
              <li>Job applications (resume, cover letter, qualifications)</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-3">1.2 How We Collect Information</h3>
            <p className="text-[#64748b] mb-4">We collect personal information through:</p>
            <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-6">
              <li>Website forms (contact forms, quote requests, job applications)</li>
              <li>Email correspondence</li>
              <li>Phone calls</li>
              <li>Cookies and analytics tools</li>
              <li>Social media interactions</li>
              <li>Face-to-face meetings</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">2. How We Use Your Information</h2>
            <p className="text-[#64748b] mb-4">We use your personal information for the following purposes:</p>
            <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-6">
              <li>Providing web design and digital marketing services</li>
              <li>Responding to inquiries and quote requests</li>
              <li>Processing payments and managing accounts</li>
              <li>Sending service updates and marketing communications (with your consent)</li>
              <li>Improving our website and services</li>
              <li>Recruitment and employment purposes</li>
              <li>Complying with legal obligations</li>
              <li>Protecting our business interests and preventing fraud</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">3. Disclosure of Your Information</h2>
            <p className="text-[#64748b] mb-4">We may disclose your personal information to:</p>
            <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-6">
              <li>Service providers (hosting, payment processing, email marketing)</li>
              <li>Professional advisors (lawyers, accountants, consultants)</li>
              <li>Government agencies (when required by law)</li>
              <li>Third parties with your consent</li>
            </ul>
            <p className="text-[#64748b] mb-6"><strong className="text-[#1e293b]">We do not sell your personal information to third parties.</strong></p>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">4. Data Security</h2>
            <p className="text-[#64748b] mb-4">We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or misuse. These measures include:</p>
            <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-6">
              <li>Secure SSL encryption for data transmission</li>
              <li>Secure servers and databases</li>
              <li>Access controls and password protection</li>
              <li>Regular security audits</li>
              <li>Staff training on data protection</li>
            </ul>
            <p className="text-[#64748b] mb-6">However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">5. Cookies and Tracking</h2>
            <p className="text-[#64748b] mb-4">Our website uses cookies and similar tracking technologies to:</p>
            <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-6">
              <li>Remember your preferences</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve user experience</li>
              <li>Deliver targeted advertising</li>
            </ul>
            <p className="text-[#64748b] mb-6">You can control cookies through your browser settings. However, disabling cookies may affect website functionality.</p>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">6. Third-Party Services</h2>
            <p className="text-[#64748b] mb-4">We use third-party services that may collect information:</p>
            <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-6">
              <li><strong className="text-[#1e293b]">Google Analytics:</strong> Website analytics and user behavior tracking</li>
              <li><strong className="text-[#1e293b]">Google Ads:</strong> Advertising and remarketing</li>
              <li><strong className="text-[#1e293b]">Facebook Pixel:</strong> Social media advertising and tracking</li>
              <li><strong className="text-[#1e293b]">Mailchimp/Email Marketing:</strong> Email communications</li>
            </ul>
            <p className="text-[#64748b] mb-6">These services have their own privacy policies governing how they use information.</p>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">7. Your Rights</h2>
            <p className="text-[#64748b] mb-4">Under Australian privacy law, you have the right to:</p>
            <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-6">
              <li>Access your personal information we hold</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">8. Marketing Communications</h2>
            <p className="text-[#64748b] mb-4">We may send you marketing emails about our services, promotions, and updates. You can unsubscribe at any time by:</p>
            <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-6">
              <li>Clicking the "unsubscribe" link in our emails</li>
              <li>Emailing us at hello@dsigns.com.au</li>
              <li>Calling us at 02 9191 8049</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">9. Data Retention</h2>
            <p className="text-[#64748b] mb-6">We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.</p>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">10. Children's Privacy</h2>
            <p className="text-[#64748b] mb-6">Our services are not directed to children under 18. We do not knowingly collect personal information from children.</p>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">11. Changes to This Policy</h2>
            <p className="text-[#64748b] mb-6">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date.</p>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">12. Contact Us</h2>
            <p className="text-[#64748b] mb-4">If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:</p>
            <div className="bg-[#f8fafc] p-6 rounded-xl mb-6">
              <p className="text-[#1e293b] mb-2"><strong>Sydney Web Designer</strong></p>
              <p className="text-[#64748b] mb-1">Suite 103 Level 1, 22 Hunter Street</p>
              <p className="text-[#64748b] mb-1">Parramatta NSW 2150</p>
              <p className="text-[#64748b] mb-1">Email: <a href="mailto:hello@dsigns.com.au" className="text-[#f59e0b] hover:text-[#d97706]">hello@dsigns.com.au</a></p>
              <p className="text-[#64748b]">Phone: <a href="tel:0291918049" className="text-[#f59e0b] hover:text-[#d97706]">02 9191 8049</a></p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/" className="inline-block bg-[#f59e0b] text-white hover:bg-[#d97706] px-6 md:px-10 lg:px-12 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-center">
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
