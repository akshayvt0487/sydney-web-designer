import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { generateMetadata } from "@/lib/metadata";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemas";

export const metadata = generateMetadata({
  title: "Website Security: Essential Tips to Protect Your Business",
  description: "Learn essential website security tips to protect your business from hackers, malware, and data breaches. Complete security guide including SSL, backups, and monitoring.",
  keywords: "website security, website protection, ssl certificate, website backup, malware protection, cyber security, secure website, wordpress security",
  canonicalUrl: "https://sydneywebdesigner.com.au/blog/website-security-essential-tips",
  ogImage: "/images/og/blog.svg",
  type: "article",
  publishedTime: "2024-02-28",
  modifiedTime: "2024-09-20",
  author: "DSIGNS Team",
});

export default function WebsiteSecurityPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Blog", url: "https://sydneywebdesigner.com.au/blog" },
    { name: "Website Security Essential Tips", url: "https://sydneywebdesigner.com.au/blog/website-security-essential-tips" }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateArticleSchema(
          "Website Security: Essential Tips to Protect Your Business",
          "Learn essential website security tips to protect your business from hackers, malware, and data breaches. Complete security guide including SSL, backups, and monitoring.",
          "DSIGNS Team",
          "2024-02-28",
          "2024-09-20",
          "https://sydneywebdesigner.com.au/images/og/blog.svg"
        )) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />
      <section className="bg-primary-navy text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-primary-orange hover:underline mb-4 inline-block">
              <i className="fas fa-arrow-left mr-2"></i>Back to Blog
            </Link>
            <span className="inline-block px-3 py-1 bg-primary-orange text-white text-xs rounded-full mb-4">
              <i className="fas fa-shield-alt mr-2"></i>Website Security
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Website Security: Essential Tips to Protect Your Business</h1>
            <div className="flex items-center gap-6 text-gray-300 mb-6">
              <span className="flex items-center gap-2">
                <i className="far fa-calendar"></i>
                February 10, 2026
              </span>
              <span className="flex items-center gap-2">
                <i className="far fa-clock"></i>
                8 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-gray-700 mb-8">Cyberattacks target small businesses more than ever. This guide shows Sydney business owners essential security measures to protect their websites, customer data, and reputation.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Why Website Security Matters</h2>
            <p className="text-gray-700 mb-6">43% of cyberattacks target small businesses. A hacked website can lose customer trust, data, search rankings, and revenue. Prevention is far cheaper than recovery.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">1. Use SSL Certificates (HTTPS)</h2>
            <p className="text-gray-700 mb-6">SSL encrypts data between your site and visitors. It&apos;s essential for all Sydney business websites, not just e-commerce.</p>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">
                <i className="fas fa-lock text-green-600 mr-2"></i>Benefits of SSL:
              </p>
              <ul className="text-gray-700 mb-0">
                <li><i className="fas fa-check text-green-600 mr-2"></i>Encrypts sensitive data (forms, logins, payments)</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Google ranking factor</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Builds customer trust</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Required for payment processing</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Browsers mark non-HTTPS sites as "not secure"</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">2. Keep Everything Updated</h2>
            <p className="text-gray-700 mb-6">Outdated software is the #1 security vulnerability. Update:</p>
            <ul className="text-gray-700 mb-6">
              <li>Content Management System (WordPress, Joomla, etc.)</li>
              <li>Plugins and extensions</li>
              <li>Themes</li>
              <li>PHP and server software</li>
            </ul>
            <p className="text-gray-700 mb-6">Enable automatic updates where possible, and check manually at least monthly.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">3. Use Strong, Unique Passwords</h2>
            <p className="text-gray-700 mb-6">Weak passwords are an open door for hackers.</p>
            <ul className="text-gray-700 mb-6">
              <li>Use 12+ character passwords</li>
              <li>Include uppercase, lowercase, numbers, symbols</li>
              <li>Never reuse passwords</li>
              <li>Use a password manager (LastPass, 1Password)</li>
              <li>Change default admin usernames</li>
              <li>Require strong passwords for all users</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">4. Implement Two-Factor Authentication</h2>
            <p className="text-gray-700 mb-6">2FA adds a second security layer beyond passwords. Even if passwords are compromised, accounts remain protected. Enable 2FA for all admin accounts.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">5. Regular Backups</h2>
            <p className="text-gray-700 mb-6">Backups don&apos;t prevent attacks, but they ensure recovery.</p>
            <div className="bg-orange-50 border-l-4 border-primary-orange p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">
                <i className="fas fa-database text-primary-orange mr-2"></i>Backup Best Practices:
              </p>
              <ul className="text-gray-700 mb-0">
                <li><i className="fas fa-check text-green-600 mr-2"></i>Automated daily backups</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Store backups offsite (not on same server)</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Test restores regularly</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Keep multiple backup versions</li>
                <li><i className="fas fa-check text-green-600 mr-2"></i>Include database and files</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">6. Install Security Plugins</h2>
            <p className="text-gray-700 mb-6">For WordPress and other CMS platforms, security plugins provide protection:</p>
            <ul className="text-gray-700 mb-6">
              <li>Wordfence or Sucuri for WordPress</li>
              <li>Malware scanning and removal</li>
              <li>Firewall protection</li>
              <li>Login attempt limiting</li>
              <li>Real-time threat monitoring</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">7. Limit Login Attempts</h2>
            <p className="text-gray-700 mb-6">Brute force attacks try thousands of password combinations. Limit login attempts to 3-5, then temporarily block that IP address.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">8. Remove Unused Plugins and Themes</h2>
            <p className="text-gray-700 mb-6">Inactive plugins can still be exploited. Delete (don&apos;t just deactivate) any plugins, themes, or extensions you&apos;re not using.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">9. Use Web Application Firewall (WAF)</h2>
            <p className="text-gray-700 mb-6">A WAF filters malicious traffic before it reaches your website. Services like Cloudflare or Sucuri provide WAF protection for Sydney businesses.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">10. Monitor for Suspicious Activity</h2>
            <p className="text-gray-700 mb-6">Regular monitoring catches problems early:</p>
            <ul className="text-gray-700 mb-6">
              <li>Set up Google Search Console alerts</li>
              <li>Monitor traffic for unusual spikes</li>
              <li>Check for unauthorized admin users</li>
              <li>Review access logs</li>
              <li>Scan for malware regularly</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">11. Secure File Uploads</h2>
            <p className="text-gray-700 mb-6">If your site allows file uploads, restrict file types, scan uploads for malware, limit file sizes, and store uploads outside web root when possible.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">12. Choose Secure Hosting</h2>
            <p className="text-gray-700 mb-6">Quality Australian hosting providers offer security features like automatic updates, backups, malware scanning, firewalls, and DDoS protection.</p>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">What to Do If You&apos;re Hacked</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
              <p className="text-gray-700 font-semibold mb-2">
                <i className="fas fa-exclamation-circle text-red-500 mr-2"></i>Emergency Response:
              </p>
              <ul className="text-gray-700 mb-0">
                <li><i className="fas fa-times-circle text-red-500 mr-2"></i>Take site offline if actively harming visitors</li>
                <li><i className="fas fa-key text-red-500 mr-2"></i>Change all passwords immediately</li>
                <li><i className="fas fa-phone text-red-500 mr-2"></i>Contact your hosting provider</li>
                <li><i className="fas fa-undo text-red-500 mr-2"></i>Restore from clean backup</li>
                <li><i className="fas fa-search text-red-500 mr-2"></i>Scan for malware</li>
                <li><i className="fas fa-wrench text-red-500 mr-2"></i>Identify and fix vulnerability</li>
                <li><i className="fas fa-eye text-red-500 mr-2"></i>Monitor closely after restoration</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-primary-navy mt-12 mb-6">Make Security a Priority</h2>
            <p className="text-gray-700 mb-6">Website security isn&apos;t a one-time task—it&apos;s ongoing. Implement these measures today, and make security maintenance part of your regular business routine. The peace of mind is worth the effort.</p>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-navy mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/website-hosting-guide-australia" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">Website Hosting Guide for Australia</h3>
                <p className="text-gray-600 text-sm">Choose secure hosting for your Sydney business...</p>
              </Link>
              <Link href="/blog/wordpress-vs-custom-website-development" className="card group hover:shadow-card-hover">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-orange transition-colors">WordPress vs Custom Development</h3>
                <p className="text-gray-600 text-sm">Compare platform security considerations...</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Need Help Securing Your Website?" description="Our security experts can audit and protect your Sydney business website from threats." primaryButtonText="Get Security Audit" primaryButtonAction="contact" />
    </>
  );
}
