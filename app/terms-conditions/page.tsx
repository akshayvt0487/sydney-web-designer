import Link from "next/link";

export default function TermsConditionsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#1e293b] text-white py-16 text-center">
        <div className="container max-w-[900px] mx-auto px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
            Terms & Conditions
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
              These Terms and Conditions ("Terms") govern the provision of web design, digital marketing, and related services by <strong className="text-[#1e293b]">Sydney Web Designer</strong> ("we," "us," or "Sydney Web Designer") to our clients ("you" or "Client").
            </p>

            <p className="text-lg text-[#64748b] mb-8">
              By engaging our services, you agree to be bound by these Terms. Please read them carefully.
            </p>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">1. Services</h2>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-3">1.1 Scope of Services</h3>
            <p className="text-[#64748b] mb-6">Sydney Web Designer provides web design, development, branding, SEO, digital marketing, and related services as detailed in individual project proposals or agreements.</p>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-3">1.2 Project Proposals</h3>
            <p className="text-[#64748b] mb-6">Each project will be outlined in a written proposal specifying deliverables, timelines, and pricing. The proposal, together with these Terms, forms the complete agreement between parties.</p>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-3">1.3 Changes to Scope</h3>
            <p className="text-[#64748b] mb-6">Any changes to the agreed scope of work must be requested in writing and may result in additional charges and timeline extensions.</p>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">2. Payment Terms</h2>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-3">2.1 Pricing</h3>
            <p className="text-[#64748b] mb-6">All prices are in Australian Dollars (AUD) and exclude GST unless otherwise stated. GST will be added to all invoices where applicable.</p>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-3">2.2 Payment Schedule</h3>
            <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-6">
              <li><strong className="text-[#1e293b]">Web Design Projects:</strong> 50% deposit upon acceptance of proposal, 50% upon completion</li>
              <li><strong className="text-[#1e293b]">Digital Marketing Services:</strong> Monthly billing in advance</li>
              <li><strong className="text-[#1e293b]">Custom Projects:</strong> Payment schedule as outlined in proposal</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-3">2.3 Payment Methods</h3>
            <p className="text-[#64748b] mb-6">We accept payment via bank transfer, credit card, or other methods as agreed. Payment processing fees may apply to credit card payments.</p>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-3">2.4 Late Payments</h3>
            <p className="text-[#64748b] mb-6">Invoices are due within 7 days of issue unless otherwise agreed. Late payments may incur interest charges of 2% per month and may result in suspension of services.</p>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">3. Client Responsibilities</h2>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-3">3.1 Content and Materials</h3>
            <p className="text-[#64748b] mb-4">Clients are responsible for providing:</p>
            <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-6">
              <li>Text content, images, logos, and other materials</li>
              <li>Access to necessary accounts and platforms</li>
              <li>Timely feedback and approvals</li>
              <li>Accurate business information</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-3">3.2 Copyright and Licenses</h3>
            <p className="text-[#64748b] mb-6">Clients warrant that all materials provided do not infringe third-party intellectual property rights and that they have necessary licenses for all content.</p>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">4. Intellectual Property</h2>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-3">4.1 Ownership of Deliverables</h3>
            <p className="text-[#64748b] mb-4">Upon full payment, clients own:</p>
            <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-6">
              <li>Final website design and code</li>
              <li>Logo designs and brand assets created for the project</li>
              <li>Content created specifically for the client</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-3">4.2 Sydney Web Designer Retention Rights</h3>
            <p className="text-[#64748b] mb-4">Sydney Web Designer retains ownership of:</p>
            <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-6">
              <li>Pre-existing tools, templates, and frameworks</li>
              <li>General methodologies and processes</li>
              <li>Rights to use completed work in portfolio and marketing</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">5. Warranties and Disclaimers</h2>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-3">5.1 Quality Commitment</h3>
            <p className="text-[#64748b] mb-6">We warrant that our services will be performed with reasonable skill and care in accordance with industry standards.</p>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-3">5.2 Website Performance</h3>
            <p className="text-[#64748b] mb-6">While we optimize websites for performance, we do not guarantee specific search engine rankings, traffic levels, or conversion rates as these depend on factors outside our control.</p>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-3">5.3 Browser and Device Compatibility</h3>
            <p className="text-[#64748b] mb-6">Websites are tested on major modern browsers and devices. We do not guarantee compatibility with outdated or obsolete browsers.</p>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">6. Limitation of Liability</h2>
            <p className="text-[#64748b] mb-4">To the maximum extent permitted by law:</p>
            <ul className="list-disc pl-6 text-[#64748b] space-y-2 mb-6">
              <li>Our total liability for any claim is limited to the amount paid by the client for the specific services giving rise to the claim</li>
              <li>We are not liable for indirect, consequential, or incidental damages</li>
              <li>We are not liable for loss of profits, revenue, data, or business opportunities</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">7. Termination</h2>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-3">7.1 By Client</h3>
            <p className="text-[#64748b] mb-6">Clients may terminate services with 30 days written notice. Clients remain responsible for payment of all services provided up to the termination date, plus any cancellation fees outlined in the service agreement.</p>

            <h3 className="text-2xl font-bold text-[#1e293b] mt-8 mb-3">7.2 By Sydney Web Designer</h3>
            <p className="text-[#64748b] mb-6">We may terminate services immediately if the client breaches these Terms, fails to make payment, or engages in conduct that damages our reputation or business interests.</p>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">8. Confidentiality</h2>
            <p className="text-[#64748b] mb-6">Both parties agree to keep confidential information disclosed during the engagement confidential and not to disclose it to third parties without consent, except as required by law.</p>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">9. Governing Law</h2>
            <p className="text-[#64748b] mb-6">These Terms are governed by the laws of New South Wales, Australia. Any disputes will be subject to the exclusive jurisdiction of the courts of New South Wales.</p>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">10. Dispute Resolution</h2>
            <p className="text-[#64748b] mb-6">In the event of a dispute, parties agree to first attempt resolution through good faith negotiation. If unsuccessful, parties may pursue mediation before initiating legal proceedings.</p>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">11. Changes to Terms</h2>
            <p className="text-[#64748b] mb-6">We reserve the right to update these Terms at any time. Changes will be posted on our website and apply to services engaged after the update date.</p>

            <h2 className="text-3xl font-bold text-[#1e293b] mt-12 mb-4">12. Contact Information</h2>
            <p className="text-[#64748b] mb-4">For questions about these Terms, please contact us:</p>
            <div className="bg-[#f8fafc] p-6 rounded-xl mb-6">
              <p className="text-[#1e293b] mb-2"><strong>Sydney Web Designer</strong></p>
              <p className="text-[#64748b] mb-1">Suite 103 Level 1, 22 Hunter Street</p>
              <p className="text-[#64748b] mb-1">Parramatta NSW 2150</p>
              <p className="text-[#64748b] mb-1">Email: <a href="mailto:hello@dsigns.com.au" className="text-[#f59e0b] hover:text-[#d97706]">hello@dsigns.com.au</a></p>
              <p className="text-[#64748b]">Phone: <a href="tel:0291918049" className="text-[#f59e0b] hover:text-[#d97706]">02 9191 8049</a></p>
            </div>

            <p className="text-[#64748b] text-sm italic">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link href="/" className="inline-block bg-[#f59e0b] text-white hover:bg-[#d97706] px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1">
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
