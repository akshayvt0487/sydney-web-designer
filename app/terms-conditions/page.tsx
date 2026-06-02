import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schemas";

export const metadata = generateMetadata({
  title: "Terms & Conditions",
  description:
    "Read our terms and conditions for using Sydney Web Designer services and website. Legal information and service agreements.",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/terms-conditions",
});

export default function TermsConditionsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    {
      name: "Terms & Conditions",
      url: "https://www.sydneywebdesigner.com.au/terms-conditions",
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
            <h1>Terms &amp; Conditions</h1>
            <p>Last Updated: November 30, 2024</p>
          </div>
        </section>

        {/* Content */}
        <section className="legal-content paper-grain">
          <div className="container legal-content__inner">
            <article className="legal-document">
              <div className="legal-document__intro">
                <p>
                  These Terms and Conditions (&quot;Terms&quot;) govern the
                  provision of web design, digital marketing, and related
                  services by <strong>Sydney Web Designer</strong>{" "}
                  (&quot;we,&quot; &quot;us,&quot; or &quot;Sydney Web
                  Designer&quot;) to our clients (&quot;you&quot; or
                  &quot;Client&quot;).
                </p>

                <p>
                  By engaging our services, you agree to be bound by these
                  Terms. Please read them carefully.
                </p>
              </div>

              <section className="legal-document__section">
                <h2>1. Services</h2>

                <h3>1.1 Scope of Services</h3>
                <p>
                  Sydney Web Designer provides web design, development,
                  branding, SEO, digital marketing, and related services as
                  detailed in individual project proposals or agreements.
                </p>

                <h3>1.2 Project Proposals</h3>
                <p>
                  Each project will be outlined in a written proposal specifying
                  deliverables, timelines, and pricing. The proposal, together
                  with these Terms, forms the complete agreement between
                  parties.
                </p>

                <h3>1.3 Changes to Scope</h3>
                <p>
                  Any changes to the agreed scope of work must be requested in
                  writing and may result in additional charges and timeline
                  extensions.
                </p>
              </section>

              <section className="legal-document__section">
                <h2>2. Payment Terms</h2>

                <h3>2.1 Pricing</h3>
                <p>
                  All prices are in Australian Dollars (AUD) and exclude GST
                  unless otherwise stated. GST will be added to all invoices
                  where applicable.
                </p>

                <h3>2.2 Payment Schedule</h3>
                <ul>
                  <li>
                    <strong>Web Design Projects:</strong> 50% deposit upon
                    acceptance of proposal, 50% upon completion
                  </li>
                  <li>
                    <strong>Digital Marketing Services:</strong> Monthly billing
                    in advance
                  </li>
                  <li>
                    <strong>Custom Projects:</strong> Payment schedule as
                    outlined in proposal
                  </li>
                </ul>

                <h3>2.3 Payment Methods</h3>
                <p>
                  We accept payment via bank transfer, credit card, or other
                  methods as agreed. Payment processing fees may apply to credit
                  card payments.
                </p>

                <h3>2.4 Late Payments</h3>
                <p>
                  Invoices are due within 7 days of issue unless otherwise
                  agreed. Late payments may incur interest charges of 2% per
                  month and may result in suspension of services.
                </p>
              </section>

              <section className="legal-document__section">
                <h2>3. Client Responsibilities</h2>

                <h3>3.1 Content and Materials</h3>
                <p>Clients are responsible for providing:</p>

                <ul>
                  <li>Text content, images, logos, and other materials</li>
                  <li>Access to necessary accounts and platforms</li>
                  <li>Timely feedback and approvals</li>
                  <li>Accurate business information</li>
                </ul>

                <h3>3.2 Copyright and Licenses</h3>
                <p>
                  Clients warrant that all materials provided do not infringe
                  third-party intellectual property rights and that they have
                  necessary licenses for all content.
                </p>
              </section>

              <section className="legal-document__section">
                <h2>4. Intellectual Property</h2>

                <h3>4.1 Ownership of Deliverables</h3>
                <p>Upon full payment, clients own:</p>

                <ul>
                  <li>Final website design and code</li>
                  <li>
                    Logo designs and brand assets created for the project
                  </li>
                  <li>Content created specifically for the client</li>
                </ul>

                <h3>4.2 Sydney Web Designer Retention Rights</h3>
                <p>Sydney Web Designer retains ownership of:</p>

                <ul>
                  <li>Pre-existing tools, templates, and frameworks</li>
                  <li>General methodologies and processes</li>
                  <li>
                    Rights to use completed work in portfolio and marketing
                  </li>
                </ul>
              </section>

              <section className="legal-document__section">
                <h2>5. Warranties and Disclaimers</h2>

                <h3>5.1 Quality Commitment</h3>
                <p>
                  We warrant that our services will be performed with reasonable
                  skill and care in accordance with industry standards.
                </p>

                <h3>5.2 Website Performance</h3>
                <p>
                  While we optimize websites for performance, we do not
                  guarantee specific search engine rankings, traffic levels, or
                  conversion rates as these depend on factors outside our
                  control.
                </p>

                <h3>5.3 Browser and Device Compatibility</h3>
                <p>
                  Websites are tested on major modern browsers and devices. We
                  do not guarantee compatibility with outdated or obsolete
                  browsers.
                </p>
              </section>

              <section className="legal-document__section">
                <h2>6. Limitation of Liability</h2>

                <p>To the maximum extent permitted by law:</p>

                <ul>
                  <li>
                    Our total liability for any claim is limited to the amount
                    paid by the client for the specific services giving rise to
                    the claim
                  </li>
                  <li>
                    We are not liable for indirect, consequential, or incidental
                    damages
                  </li>
                  <li>
                    We are not liable for loss of profits, revenue, data, or
                    business opportunities
                  </li>
                </ul>
              </section>

              <section className="legal-document__section">
                <h2>7. Termination</h2>

                <h3>7.1 By Client</h3>
                <p>
                  Clients may terminate services with 30 days written notice.
                  Clients remain responsible for payment of all services
                  provided up to the termination date, plus any cancellation
                  fees outlined in the service agreement.
                </p>

                <h3>7.2 By Sydney Web Designer</h3>
                <p>
                  We may terminate services immediately if the client breaches
                  these Terms, fails to make payment, or engages in conduct that
                  damages our reputation or business interests.
                </p>
              </section>

              <section className="legal-document__section">
                <h2>8. Confidentiality</h2>

                <p>
                  Both parties agree to keep confidential information disclosed
                  during the engagement confidential and not to disclose it to
                  third parties without consent, except as required by law.
                </p>
              </section>

              <section className="legal-document__section">
                <h2>9. Governing Law</h2>

                <p>
                  These Terms are governed by the laws of New South Wales,
                  Australia. Any disputes will be subject to the exclusive
                  jurisdiction of the courts of New South Wales.
                </p>
              </section>

              <section className="legal-document__section">
                <h2>10. Dispute Resolution</h2>

                <p>
                  In the event of a dispute, parties agree to first attempt
                  resolution through good faith negotiation. If unsuccessful,
                  parties may pursue mediation before initiating legal
                  proceedings.
                </p>
              </section>

              <section className="legal-document__section">
                <h2>11. Changes to Terms</h2>

                <p>
                  We reserve the right to update these Terms at any time.
                  Changes will be posted on our website and apply to services
                  engaged after the update date.
                </p>
              </section>

              <section className="legal-document__section">
                <h2>12. Contact Information</h2>

                <p>For questions about these Terms, please contact us:</p>

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

                <p className="legal-document__closing">
                  By using our services, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and
                  Conditions.
                </p>
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