interface FormSubmissionEmailData {
  type: string;
  name: string;
  email: string;
  phone: string;
  website?: string;
  company?: string;
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
  website?: string;
  service: string;
  message: string;
  submittedAt: string;
}

interface NewsletterSubscriptionEmailData {
  email: string;
  submittedAt: string;
}

interface CareerApplicationEmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  positionLabel: string;
  experience: string;
  currentPosition?: string;
  currentCompany?: string;
  workLocation: string;
  employmentType: string;
  daysAvailable: string;
  hoursAvailable: string;
  startAvailability: string;
  linkedin?: string;
  portfolio?: string;
  whyJoin: string;
  keyStrengths: string;
  additionalComments?: string;
  resumeUrl: string;
  coverLetterUrl?: string;
  submittedAt: string;
}

interface BrevoRecipient {
  email: string;
  name?: string;
}

interface BrevoEmailPayload {
  sender: BrevoRecipient;
  to: BrevoRecipient[];
  cc?: BrevoRecipient[];
  replyTo?: BrevoRecipient;
  subject: string;
  htmlContent: string;
}

interface BrevoSuccessResponse {
  messageId?: string;
}

const emailStyles = `
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f6f1e8;
    line-height: 1.6;
  }

  .email-wrapper {
    width: 100%;
    background-color: #f6f1e8;
    padding: 36px 16px;
  }

  .email-container {
    max-width: 640px;
    margin: 0 auto;
    background-color: #fffaf2;
    border: 1px solid #e7dac5;
    overflow: hidden;
  }

  .email-header {
    background-color: #181d26;
    padding: 36px 30px;
    border-bottom: 4px solid #ff9f2d;
  }

  .email-eyebrow {
    color: #ff9f2d;
    display: block;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 14px;
    text-transform: uppercase;
  }

  .email-title {
    color: #fffaf2;
    font-size: 27px;
    font-weight: 700;
    line-height: 1.2;
    margin: 0;
  }

  .email-content {
    padding: 34px 30px;
  }

  .email-badge {
    display: inline-block;
    border: 1px solid #ff9f2d;
    color: #ff9f2d;
    padding: 8px 14px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.5px;
    margin-bottom: 28px;
    text-transform: uppercase;
  }

  .email-badge.newsletter {
    color: #181d26;
    background-color: #ff9f2d;
  }

  .field {
    border-bottom: 1px solid #eadfce;
    margin-bottom: 18px;
    padding-bottom: 18px;
  }

  .field:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .field-label {
    color: #ff9f2d;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 6px;
    text-transform: uppercase;
  }

  .field-value {
    color: #181d26;
    font-size: 16px;
    word-break: break-word;
  }

  .field-value a {
    color: #181d26;
    text-decoration: underline;
  }

  .message-box {
    color: #3b4047;
    background-color: #f8f2e8;
    border-left: 3px solid #ff9f2d;
    margin-top: 8px;
    padding: 14px 16px;
    white-space: pre-wrap;
  }

  .highlight-box {
    background-color: #f8f2e8;
    border: 1px solid #eadfce;
    margin: 0 0 24px;
    padding: 18px;
  }

  .highlight-email {
    color: #181d26;
    font-size: 19px;
    font-weight: 700;
    margin: 0;
  }

  .email-footer {
    background-color: #181d26;
    border-top: 3px solid #ff9f2d;
    padding: 24px 30px;
  }

  .footer-brand {
    color: #fffaf2;
    font-size: 15px;
    font-weight: 700;
    margin: 0 0 4px;
  }

  .footer-text {
    color: #c8c1b6;
    font-size: 13px;
    margin: 0;
  }

  @media only screen and (max-width: 600px) {
    .email-wrapper {
      padding: 14px 8px;
    }

    .email-header,
    .email-content,
    .email-footer {
      padding-left: 20px;
      padding-right: 20px;
    }

    .email-title {
      font-size: 23px;
    }
  }
`;

function escapeHtml(value?: string): string {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(dateValue: string): string {
  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return escapeHtml(dateValue);
  }

  return date.toLocaleString("en-AU", {
    timeZone: "Australia/Sydney",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getBrevoConfig() {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName =
    process.env.BREVO_SENDER_NAME || "Sydney Web Designer";
  const notifyEmail = process.env.BREVO_NOTIFY_EMAIL;
  const notifyName = process.env.BREVO_NOTIFY_NAME || "DSIGNS Leads";

  if (!apiKey || !senderEmail || !notifyEmail) {
    return null;
  }

  const cc = (process.env.BREVO_CC_EMAILS || "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean)
    .map((email) => ({ email }));

  return {
    apiKey,
    sender: {
      email: senderEmail,
      name: senderName,
    },
    to: [
      {
        email: notifyEmail,
        name: notifyName,
      },
    ],
    cc,
  };
}

async function sendBrevoEmail(
  payload: Omit<BrevoEmailPayload, "sender" | "to" | "cc">
) {
  const config = getBrevoConfig();

  if (!config) {
    console.error(
      "Brevo email not configured. Required: BREVO_API_KEY, BREVO_SENDER_EMAIL, BREVO_NOTIFY_EMAIL."
    );

    return {
      success: false,
      error: "Email service is not configured.",
    };
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": config.apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: config.sender,
        to: config.to,
        ...(config.cc.length > 0 ? { cc: config.cc } : {}),
        ...payload,
      }),
      cache: "no-store",
    });

    const result = (await response.json().catch(() => ({}))) as
      | BrevoSuccessResponse
      | { message?: string; code?: string };

    if (!response.ok) {
      console.error("Brevo transactional email failed:", result);

      return {
        success: false,
        error:
          "message" in result && result.message
            ? result.message
            : "Brevo email request failed.",
      };
    }

    return {
      success: true,
      messageId:
        "messageId" in result ? result.messageId : undefined,
    };
  } catch (error) {
    console.error("Brevo transactional email exception:", error);

    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Brevo email request failed.",
    };
  }
}

function emailShell(
  title: string,
  badge: string,
  content: string,
  badgeClass = ""
): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>${emailStyles}</style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="email-container">
            <div class="email-header">
              <span class="email-eyebrow">Sydney Web Designer</span>
              <h1 class="email-title">${escapeHtml(title)}</h1>
            </div>

            <div class="email-content">
              <span class="email-badge ${badgeClass}">${escapeHtml(badge)}</span>
              ${content}
            </div>

            <div class="email-footer">
              <p class="footer-brand">Sydney Web Designer by DSIGNS</p>
              <p class="footer-text">
                New website enquiry notification
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

function field(label: string, value?: string): string {
  if (!value) {
    return "";
  }

  return `
    <div class="field">
      <div class="field-label">${escapeHtml(label)}</div>
      <div class="field-value">${escapeHtml(value)}</div>
    </div>
  `;
}

function linkField(label: string, value?: string, prefix = ""): string {
  if (!value) {
    return "";
  }

  const safeValue = escapeHtml(value);
  const safeHref = escapeHtml(`${prefix}${value}`);

  return `
    <div class="field">
      <div class="field-label">${escapeHtml(label)}</div>
      <div class="field-value">
        <a href="${safeHref}">${safeValue}</a>
      </div>
    </div>
  `;
}

function messageField(label: string, message?: string): string {
  if (!message) {
    return "";
  }

  return `
    <div class="field">
      <div class="field-label">${escapeHtml(label)}</div>
      <div class="message-box">${escapeHtml(message)}</div>
    </div>
  `;
}

export async function sendFormSubmissionEmail(data: FormSubmissionEmailData) {
  const typeLabels: Record<string, string> = {
    contact: "General Enquiry",
    seoAudit: "SEO Audit Request",
    adsAudit: "Google Ads Audit Request",
    consultation: "Consultation Request",
  };

  const typeLabel = typeLabels[data.type] || data.type;

  const htmlContent = emailShell(
    "New Form Submission",
    typeLabel,
    [
      field("Name", data.name),
      linkField("Email Address", data.email, "mailto:"),
      linkField("Phone Number", data.phone, "tel:"),
      linkField("Website", data.website),
      field("Company", data.company),
      field("Project Type", data.projectType),
      field("SEO Goal", data.seoGoal),
      field("Monthly Ad Spend", data.adSpend),
      field("Service Interested", data.service),
      messageField("Message", data.message),
      field("Submitted At", formatDate(data.submittedAt)),
    ].join("")
  );

  return sendBrevoEmail({
    replyTo: {
      email: data.email,
      name: data.name,
    },
    subject: `${data.name} - ${typeLabel}`,
    htmlContent,
  });
}

export async function sendContactSubmissionEmail(
  data: ContactSubmissionEmailData
) {
  const fullName = `${data.firstName} ${data.lastName}`.trim();

  const htmlContent = emailShell(
    "Contact Form Submission",
    "Contact Page",
    [
      field("Full Name", fullName),
      linkField("Email Address", data.email, "mailto:"),
      linkField("Phone Number", data.phone, "tel:"),
      linkField("Website", data.website),
      field("Service Interested", data.service || "Not selected"),
      messageField("Message", data.message),
      field("Submitted At", formatDate(data.submittedAt)),
    ].join("")
  );

  return sendBrevoEmail({
    replyTo: {
      email: data.email,
      name: fullName,
    },
    subject: `${fullName} - Contact Form`,
    htmlContent,
  });
}

export async function sendNewsletterSubscriptionEmail(
  data: NewsletterSubscriptionEmailData
) {
  const htmlContent = emailShell(
    "Newsletter Subscription",
    "New Subscriber",
    `
      <div class="highlight-box">
        <p class="highlight-email">${escapeHtml(data.email)}</p>
      </div>
      ${linkField("Email Address", data.email, "mailto:")}
      ${field("Subscribed At", formatDate(data.submittedAt))}
    `,
    "newsletter"
  );

  return sendBrevoEmail({
    replyTo: {
      email: data.email,
    },
    subject: `${data.email} - Newsletter Subscription`,
    htmlContent,
  });
}

export async function sendCareerApplicationEmail(
  data: CareerApplicationEmailData
) {
  const fullName = `${data.firstName} ${data.lastName}`.trim();

  const htmlContent = emailShell(
    "New Career Application",
    "Career Application",
    [
      field("Position Applied For", data.positionLabel),
      field("Applicant Name", fullName),
      linkField("Email Address", data.email, "mailto:"),
      linkField("Phone Number", data.phone, "tel:"),
      field("Years of Experience", data.experience),
      field("Current Position", data.currentPosition),
      field("Current Company", data.currentCompany),
      field("Preferred Work Location", data.workLocation),
      field("Employment Type", data.employmentType),
      field("Days Available", data.daysAvailable),
      field("Hours Available", data.hoursAvailable),
      field("Start Availability", data.startAvailability),
      linkField("LinkedIn Profile", data.linkedin),
      linkField("Portfolio / Website", data.portfolio),
      messageField("Why They Want To Join", data.whyJoin),
      messageField("Key Strengths", data.keyStrengths),
      messageField("Additional Comments", data.additionalComments),
      linkField("Resume File", data.resumeUrl),
      linkField("Cover Letter File", data.coverLetterUrl),
      field("Submitted At", formatDate(data.submittedAt)),
    ].join("")
  );

  return sendBrevoEmail({
    replyTo: {
      email: data.email,
      name: fullName,
    },
    subject: `${fullName} - ${data.positionLabel} Application`,
    htmlContent,
  });
}