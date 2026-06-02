import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schemas";

export const metadata = generateMetadata({
  title: "Privacy Policy",
  description:
    "Read our privacy policy to understand how we collect, use, and protect your personal information at Sydney Web Designer.",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/privacy-policy",
  ogImage: "/images/og/homepage.svg",
});

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    {
      name: "Privacy Policy",
      url: "https://www.sydneywebdesigner.com.au/privacy-policy",
    },
  ]);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="legal-paper-page">
        {/* Page Hero */}
        <section className="legal-hero">
          <div className="container legal-hero__inner">
            <h1>Privacy Policy</h1>
            <p>Last Updated: November 30, 2024</p>
          </div>
        </section>

        {/* Content */}
        <section className="legal-content paper-grain">
          <div className="container legal-content__inner">
            <article className="legal-document">
              <div className="legal-document__intro">
                <p>
                  <strong>Sydney Web Designer</strong> (&quot;we,&quot;
                  &quot;us,&quot; or &quot;our&quot;) operates the website
                  sydneywebdesigner.com.au and provides web design and digital
                  marketing services. We are committed to protecting your
                  privacy and handling your personal information in accordance
                  with the Australian Privacy Principles under the Privacy Act
                  1988 (Cth).
                </p>
              </div>

              <section className="legal-document__section">
                <h2>1. Information We Collect</h2>

                <h3>1.1 Personal Information</h3>
                <p>
                  We may collect the following types of personal information:
                </p>

                <ul>
                  <li>
                    Name and contact details (email address, phone number,
                    business address)
                  </li>
                  <li>Business information (company name, ABN, industry)</li>
                  <li>
                    Website usage data (IP address, browser type, pages visited)
                  </li>
                  <li>
                    Payment information (credit card details, billing address)
                  </li>
                  <li>
                    Communications with us (emails, phone calls, form
                    submissions)
                  </li>
                  <li>
                    Job applications (resume, cover letter, qualifications)
                  </li>
                </ul>

                <h3>1.2 How We Collect Information</h3>
                <p>We collect personal information through:</p>

                <ul>
                  <li>
                    Website forms (contact forms, quote requests, job
                    applications)
                  </li>
                  <li>Email correspondence</li>
                  <li>Phone calls</li>
                  <li>Cookies and analytics tools</li>
                  <li>Social media interactions</li>
                  <li>Face-to-face meetings</li>
                </ul>
              </section>

              <section className="legal-document__section">
                <h2>2. How We Use Your Information</h2>

                <p>
                  We use your personal information for the following purposes:
                </p>

                <ul>
                  <li>Providing web design and digital marketing services</li>
                  <li>Responding to inquiries and quote requests</li>
                  <li>Processing payments and managing accounts</li>
                  <li>
                    Sending service updates and marketing communications (with
                    your consent)
                  </li>
                  <li>Improving our website and services</li>
                  <li>Recruitment and employment purposes</li>
                  <li>Complying with legal obligations</li>
                  <li>
                    Protecting our business interests and preventing fraud
                  </li>
                </ul>
              </section>

              <section className="legal-document__section">
                <h2>3. Disclosure of Your Information</h2>

                <p>We may disclose your personal information to:</p>

                <ul>
                  <li>
                    Service providers (hosting, payment processing, email
                    marketing)
                  </li>
                  <li>
                    Professional advisors (lawyers, accountants, consultants)
                  </li>
                  <li>Government agencies (when required by law)</li>
                  <li>Third parties with your consent</li>
                </ul>

                <p>
                  <strong>
                    We do not sell your personal information to third parties.
                  </strong>
                </p>
              </section>

              <section className="legal-document__section">
                <h2>4. Data Security</h2>

                <p>
                  We implement reasonable security measures to protect your
                  personal information from unauthorized access, disclosure, or
                  misuse. These measures include:
                </p>

                <ul>
                  <li>Secure SSL encryption for data transmission</li>
                  <li>Secure servers and databases</li>
                  <li>Access controls and password protection</li>
                  <li>Regular security audits</li>
                  <li>Staff training on data protection</li>
                </ul>

                <p>
                  However, no method of transmission over the internet is 100%
                  secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="legal-document__section">
                <h2>5. Cookies and Tracking</h2>

                <p>
                  Our website uses cookies and similar tracking technologies to:
                </p>

                <ul>
                  <li>Remember your preferences</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Improve user experience</li>
                  <li>Deliver targeted advertising</li>
                </ul>

                <p>
                  You can control cookies through your browser settings.
                  However, disabling cookies may affect website functionality.
                </p>
              </section>

              <section className="legal-document__section">
                <h2>6. Third-Party Services</h2>

                <p>
                  We use third-party services that may collect information:
                </p>

                <ul>
                  <li>
                    <strong>Google Analytics:</strong> Website analytics and
                    user behavior tracking
                  </li>
                  <li>
                    <strong>Google Ads:</strong> Advertising and remarketing
                  </li>
                  <li>
                    <strong>Facebook Pixel:</strong> Social media advertising
                    and tracking
                  </li>
                  <li>
                    <strong>Mailchimp/Email Marketing:</strong> Email
                    communications
                  </li>
                </ul>

                <p>
                  These services have their own privacy policies governing how
                  they use information.
                </p>
              </section>

              <section className="legal-document__section">
                <h2>7. Your Rights</h2>

                <p>
                  Under Australian privacy law, you have the right to:
                </p>

                <ul>
                  <li>Access your personal information we hold</li>
                  <li>Request correction of inaccurate information</li>
                  <li>
                    Request deletion of your information (subject to legal
                    requirements)
                  </li>
                  <li>Opt-out of marketing communications</li>
                  <li>
                    Lodge a complaint with the Office of the Australian
                    Information Commissioner (OAIC)
                  </li>
                </ul>
              </section>

              <section className="legal-document__section">
                <h2>8. Marketing Communications</h2>

                <p>
                  We may send you marketing emails about our services,
                  promotions, and updates. You can unsubscribe at any time by:
                </p>

                <ul>
                  <li>Clicking the &quot;unsubscribe&quot; link in our emails</li>
                  <li>Emailing us at hello@dsigns.com.au</li>
                  <li>Calling us at 02 9191 8049</li>
                </ul>
              </section>

              <section className="legal-document__section">
                <h2>9. Data Retention</h2>

                <p>
                  We retain your personal information for as long as necessary
                  to fulfill the purposes outlined in this policy, comply with
                  legal obligations, resolve disputes, and enforce our
                  agreements.
                </p>
              </section>

              <section className="legal-document__section">
                <h2>10. Children&apos;s Privacy</h2>

                <p>
                  Our services are not directed to children under 18. We do not
                  knowingly collect personal information from children.
                </p>
              </section>

              <section className="legal-document__section">
                <h2>11. Changes to This Policy</h2>

                <p>
                  We may update this Privacy Policy from time to time. Changes
                  will be posted on this page with an updated &quot;Last
                  Updated&quot; date.
                </p>
              </section>

              <section className="legal-document__section">
                <h2>12. Contact Us</h2>

                <p>
                  If you have questions about this Privacy Policy or wish to
                  exercise your privacy rights, please contact us:
                </p>

                <div className="legal-contact-card">
                  <p>
                    <strong>Sydney Web Designer</strong>
                  </p>
                  <p>Suite 611, 150 George Street</p>
                  <p>Parramatta NSW 2150</p>
                  <p>
                    Email:{" "}
                    <a href="mailto:hello@dsigns.com.au">
                      hello@dsigns.com.au
                    </a>
                  </p>
                  <p>
                    Phone: <a href="tel:0291918049">02 9191 8049</a>
                  </p>
                </div>
              </section>
            </article>

            <div className="legal-back-action">
              <Link href="/" className="paper-button paper-button--rust">
                Back to Homepage
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}