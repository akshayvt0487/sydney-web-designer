import { Resend } from "resend";

// Initialize Resend with API key - with better error handling
let resend: Resend | null = null;

if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
  if (process.env.NODE_ENV === 'development') {
    console.log("✓ Resend email service initialized with API key");
  }
} else {
  console.error("⚠️  WARNING: RESEND_API_KEY environment variable is not set. Email sending will not work.");
  console.error("Please set RESEND_API_KEY in your environment variables.");
}

// Verify Resend configuration
export async function verifyEmailConfig() {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return false;
    }
    if (!resend) {
      console.error("Resend client not initialized");
      return false;
    }
    if (process.env.NODE_ENV === 'development') {
      console.log("Resend email service is configured");
    }
    return true;
  } catch (error) {
    console.error("Email service verification failed:", error);
    return false;
  }
}

interface FormSubmissionEmailData {
  type: string;
  name: string;
  email: string;
  phone: string;
  website?: string;
  projectType?: string;
  seoGoal?: string;
  adSpend?: string;
  service?: string;
  message?: string;
  submittedAt: string;
}

interface ContactSubmissionEmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
  submittedAt: string;
}

interface NewsletterSubscriptionEmailData {
  email: string;
  submittedAt: string;
}

// Common email styles matching website branding
const emailStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
    background-color: #f1f5f9;
    line-height: 1.6;
  }

  .email-wrapper {
    width: 100%;
    background-color: #f1f5f9;
    padding: 40px 20px;
  }

  .email-container {
    max-width: 600px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .email-header {
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    padding: 40px 30px;
    text-align: center;
    border-bottom: 4px solid #f59e0b;
  }

  .email-logo {
    margin-bottom: 20px;
  }

  .email-logo img {
    max-width: 180px;
    height: auto;
  }

  .email-title {
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.5px;
  }

  .email-badge {
    display: inline-block;
    background: #f59e0b;
    color: #ffffff;
    padding: 8px 20px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 600;
    margin: 20px 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .email-badge.newsletter {
    background: #10b981;
  }

  .email-content {
    padding: 40px 30px;
    background-color: #ffffff;
  }

  .field {
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e2e8f0;
  }

  .field:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .field-label {
    color: #1e293b;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
  }

  .field-value {
    color: #475569;
    font-size: 16px;
    margin-top: 4px;
    word-wrap: break-word;
  }

  .field-value a {
    color: #f59e0b;
    text-decoration: none;
    font-weight: 500;
  }

  .field-value a:hover {
    text-decoration: underline;
  }

  .message-box {
    background: #f8fafc;
    padding: 20px;
    border-left: 4px solid #f59e0b;
    border-radius: 8px;
    margin-top: 8px;
    font-size: 15px;
    line-height: 1.7;
    color: #334155;
  }

  .highlight-box {
    background: #fef3c7;
    border: 2px solid #f59e0b;
    padding: 20px;
    border-radius: 12px;
    margin: 24px 0;
    text-align: center;
  }

  .highlight-box.newsletter {
    background: #d1fae5;
    border-color: #10b981;
  }

  .highlight-email {
    font-size: 20px;
    font-weight: 700;
    color: #1e293b;
    margin: 0;
  }

  .action-box {
    background: #f8fafc;
    border: 2px solid #cbd5e1;
    border-radius: 12px;
    padding: 20px;
    margin-top: 30px;
  }

  .action-title {
    color: #10b981;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .action-text {
    color: #475569;
    font-size: 14px;
    margin: 0;
    line-height: 1.6;
  }

  .email-footer {
    background: #f8fafc;
    padding: 30px;
    text-align: center;
    border-top: 1px solid #e2e8f0;
  }

  .footer-text {
    color: #64748b;
    font-size: 13px;
    margin: 0 0 12px 0;
  }

  .footer-brand {
    color: #1e293b;
    font-weight: 600;
    font-size: 14px;
    margin: 0;
  }

  .footer-link {
    color: #f59e0b;
    text-decoration: none;
    font-weight: 500;
  }

  @media only screen and (max-width: 600px) {
    .email-wrapper {
      padding: 20px 10px;
    }

    .email-header, .email-content, .email-footer {
      padding: 30px 20px;
    }

    .email-title {
      font-size: 20px;
    }
  }
`;

// Send form submission notification email
export async function sendFormSubmissionEmail(data: FormSubmissionEmailData) {
  const typeLabels: Record<string, string> = {
    contact: "General Contact",
    seoAudit: "SEO Audit Request",
    adsAudit: "Google Ads Audit Request",
    consultation: "Consultation Request",
  };

  const typeLabel = typeLabels[data.type] || data.type;

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Form Submission - Sydney Web Designer</title>
      <style>${emailStyles}</style>
    </head>
    <body>
      <div class="email-wrapper">
        <div class="email-container">
          <!-- Header -->
          <div class="email-header">
            <div class="email-logo">
              <img src="https://sydneywebdesigner.com.au/Sydney%20Web%20Designer%20logo.webp" alt="Sydney Web Designer" />
            </div>
            <h1 class="email-title">New Form Submission</h1>
          </div>

          <!-- Content -->
          <div class="email-content">
            <div class="email-badge">${typeLabel}</div>

            <div class="field">
              <div class="field-label">Name</div>
              <div class="field-value">${data.name}</div>
            </div>

            <div class="field">
              <div class="field-label">Email Address</div>
              <div class="field-value">
                <a href="mailto:${data.email}">${data.email}</a>
              </div>
            </div>

            <div class="field">
              <div class="field-label">Phone Number</div>
              <div class="field-value">
                <a href="tel:${data.phone}">${data.phone}</a>
              </div>
            </div>

            ${data.website ? `
              <div class="field">
                <div class="field-label">Website</div>
                <div class="field-value">
                  <a href="${data.website}" target="_blank">${data.website}</a>
                </div>
              </div>
            ` : ''}

            ${data.projectType ? `
              <div class="field">
                <div class="field-label">Project Type</div>
                <div class="field-value">${data.projectType}</div>
              </div>
            ` : ''}

            ${data.seoGoal ? `
              <div class="field">
                <div class="field-label">SEO Goal</div>
                <div class="field-value">${data.seoGoal}</div>
              </div>
            ` : ''}

            ${data.adSpend ? `
              <div class="field">
                <div class="field-label">Monthly Ad Spend</div>
                <div class="field-value">${data.adSpend}</div>
              </div>
            ` : ''}

            ${data.service ? `
              <div class="field">
                <div class="field-label">Service Interested</div>
                <div class="field-value">${data.service}</div>
              </div>
            ` : ''}

            ${data.message ? `
              <div class="field">
                <div class="field-label">Message</div>
                <div class="message-box">${data.message}</div>
              </div>
            ` : ''}

            <div class="field">
              <div class="field-label">Submitted At</div>
              <div class="field-value">${new Date(data.submittedAt).toLocaleString('en-AU', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</div>
            </div>
          </div>

          <!-- Footer -->
          <div class="email-footer">
            <p class="footer-brand">Sydney Web Designer</p>
            <p class="footer-text">Premium Web Design & Digital Marketing Agency</p>
            <p class="footer-text">
              <a href="https://sydneywebdesigner.com.au" class="footer-link">sydneywebdesigner.com.au</a>
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    if (!resend) {
      console.error("❌ Cannot send form submission email: Resend client not initialized. RESEND_API_KEY is missing.");
      return { 
        success: false, 
        error: "Email service not configured. Please contact support." 
      };
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("❌ Cannot send form submission email: RESEND_API_KEY environment variable not set.");
      return { 
        success: false, 
        error: "Email service not configured. Please contact support." 
      };
    }

    const { data: emailData, error } = await resend.emails.send({
      from: "Sydney Web Designer <info@sydneywebdesigner.com.au>",
      to: "basheer@dsigns.com.au",
      cc: ["akshay@dsigns.com.au", "admin@dsigns.com.au"],
      replyTo: data.email,
      subject: `${data.name} - ${typeLabel}`,
      html: htmlContent,
    });

    if (error) {
      console.error("❌ Error sending form submission email:", error);
      return { success: false, error };
    }

    if (process.env.NODE_ENV === 'development') {
      console.log("✓ Form submission email sent:", emailData?.id);
    }
    return { success: true, messageId: emailData?.id };
  } catch (error) {
    console.error("❌ Exception while sending form submission email:", error);
    return { success: false, error };
  }
}

// Send contact form submission notification email
export async function sendContactSubmissionEmail(data: ContactSubmissionEmailData) {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission - Sydney Web Designer</title>
      <style>${emailStyles}</style>
    </head>
    <body>
      <div class="email-wrapper">
        <div class="email-container">
          <!-- Header -->
          <div class="email-header">
            <div class="email-logo">
              <img src="https://sydneywebdesigner.com.au/Sydney%20Web%20Designer%20logo.webp" alt="Sydney Web Designer" />
            </div>
            <h1 class="email-title">Contact Form Submission</h1>
          </div>

          <!-- Content -->
          <div class="email-content">
            <div class="email-badge">Contact Page</div>

            <div class="field">
              <div class="field-label">Full Name</div>
              <div class="field-value">${data.firstName} ${data.lastName}</div>
            </div>

            <div class="field">
              <div class="field-label">Email Address</div>
              <div class="field-value">
                <a href="mailto:${data.email}">${data.email}</a>
              </div>
            </div>

            <div class="field">
              <div class="field-label">Phone Number</div>
              <div class="field-value">
                <a href="tel:${data.phone}">${data.phone}</a>
              </div>
            </div>

            ${data.company ? `
              <div class="field">
                <div class="field-label">Company</div>
                <div class="field-value">${data.company}</div>
              </div>
            ` : ''}

            <div class="field">
              <div class="field-label">Service Interested</div>
              <div class="field-value">${data.service}</div>
            </div>

            <div class="field">
              <div class="field-label">Message</div>
              <div class="message-box">${data.message}</div>
            </div>

            <div class="field">
              <div class="field-label">Submitted At</div>
              <div class="field-value">${new Date(data.submittedAt).toLocaleString('en-AU', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</div>
            </div>
          </div>

          <!-- Footer -->
          <div class="email-footer">
            <p class="footer-brand">Sydney Web Designer</p>
            <p class="footer-text">Premium Web Design & Digital Marketing Agency</p>
            <p class="footer-text">
              <a href="https://sydneywebdesigner.com.au" class="footer-link">sydneywebdesigner.com.au</a>
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    if (!resend) {
      console.error("❌ Cannot send contact submission email: Resend client not initialized. RESEND_API_KEY is missing.");
      return { 
        success: false, 
        error: "Email service not configured. Please contact support." 
      };
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("❌ Cannot send contact submission email: RESEND_API_KEY environment variable not set.");
      return { 
        success: false, 
        error: "Email service not configured. Please contact support." 
      };
    }

    const { data: emailData, error } = await resend.emails.send({
      from: "Sydney Web Designer <info@sydneywebdesigner.com.au>",
      to: "basheer@dsigns.com.au",
      cc: ["akshay@dsigns.com.au", "admin@dsigns.com.au"],
      replyTo: data.email,
      subject: `${data.firstName} ${data.lastName} - Contact Form`,
      html: htmlContent,
    });

    if (error) {
      console.error("❌ Error sending contact submission email:", error);
      return { success: false, error };
    }

    if (process.env.NODE_ENV === 'development') {
      console.log("✓ Contact submission email sent:", emailData?.id);
    }
    return { success: true, messageId: emailData?.id };
  } catch (error) {
    console.error("❌ Exception while sending contact submission email:", error);
    return { success: false, error };
  }
}

// Send newsletter subscription notification email
export async function sendNewsletterSubscriptionEmail(data: NewsletterSubscriptionEmailData) {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Newsletter Subscription - Sydney Web Designer</title>
      <style>${emailStyles}</style>
    </head>
    <body>
      <div class="email-wrapper">
        <div class="email-container">
          <!-- Header -->
          <div class="email-header">
            <div class="email-logo">
              <img src="https://sydneywebdesigner.com.au/Sydney%20Web%20Designer%20logo.webp" alt="Sydney Web Designer" />
            </div>
            <h1 class="email-title">Newsletter Subscription</h1>
          </div>

          <!-- Content -->
          <div class="email-content">
            <div class="email-badge newsletter">New Subscriber</div>

            <div class="highlight-box newsletter">
              <p class="highlight-email">${data.email}</p>
            </div>

            <div class="field">
              <div class="field-label">Email Address</div>
              <div class="field-value">
                <a href="mailto:${data.email}">${data.email}</a>
              </div>
            </div>

            <div class="field">
              <div class="field-label">Subscribed At</div>
              <div class="field-value">${new Date(data.submittedAt).toLocaleString('en-AU', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</div>
            </div>

            <div class="action-box">
              <div class="action-title">✓ Action Required</div>
              <p class="action-text">
                Add this email address to your newsletter mailing list in your email marketing platform
                (Mailchimp, SendGrid, or your preferred service).
              </p>
            </div>
          </div>

          <!-- Footer -->
          <div class="email-footer">
            <p class="footer-brand">Sydney Web Designer</p>
            <p class="footer-text">Premium Web Design & Digital Marketing Agency</p>
            <p class="footer-text">
              <a href="https://sydneywebdesigner.com.au" class="footer-link">sydneywebdesigner.com.au</a>
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    if (!resend) {
      console.error("❌ Cannot send newsletter subscription email: Resend client not initialized. RESEND_API_KEY is missing.");
      return { 
        success: false, 
        error: "Email service not configured. Please contact support." 
      };
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("❌ Cannot send newsletter subscription email: RESEND_API_KEY environment variable not set.");
      return { 
        success: false, 
        error: "Email service not configured. Please contact support." 
      };
    }

    const { data: emailData, error } = await resend.emails.send({
      from: "Sydney Web Designer <info@sydneywebdesigner.com.au>",
      to: "basheer@dsigns.com.au",
      cc: ["akshay@dsigns.com.au", "admin@dsigns.com.au"],
      replyTo: data.email,
      subject: `${data.email} - Newsletter Subscription`,
      html: htmlContent,
    });

    if (error) {
      console.error("❌ Error sending newsletter subscription email:", error);
      return { success: false, error };
    }

    if (process.env.NODE_ENV === 'development') {
      console.log("✓ Newsletter subscription email sent:", emailData?.id);
    }
    return { success: true, messageId: emailData?.id };
  } catch (error) {
    console.error("❌ Exception while sending newsletter subscription email:", error);
    return { success: false, error };
  }
}
