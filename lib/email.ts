import nodemailer from "nodemailer";

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Verify transporter configuration
export async function verifyEmailConfig() {
  try {
    await transporter.verify();
    console.log("Email server is ready to send messages");
    return true;
  } catch (error) {
    console.error("Email server verification failed:", error);
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
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1e293b; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #1e293b; margin-bottom: 5px; }
        .value { color: #64748b; }
        .badge { background: #f59e0b; color: white; padding: 5px 15px; border-radius: 20px; display: inline-block; margin: 10px 0; }
        .footer { text-align: center; margin-top: 20px; color: #64748b; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🔔 New Form Submission</h1>
        </div>
        <div class="content">
          <div class="badge">${typeLabel}</div>

          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name}</div>
          </div>

          <div class="field">
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>

          <div class="field">
            <div class="label">Phone:</div>
            <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
          </div>

          ${data.website ? `
            <div class="field">
              <div class="label">Website:</div>
              <div class="value"><a href="${data.website}" target="_blank">${data.website}</a></div>
            </div>
          ` : ''}

          ${data.projectType ? `
            <div class="field">
              <div class="label">Project Type:</div>
              <div class="value">${data.projectType}</div>
            </div>
          ` : ''}

          ${data.seoGoal ? `
            <div class="field">
              <div class="label">SEO Goal:</div>
              <div class="value">${data.seoGoal}</div>
            </div>
          ` : ''}

          ${data.adSpend ? `
            <div class="field">
              <div class="label">Ad Spend:</div>
              <div class="value">${data.adSpend}</div>
            </div>
          ` : ''}

          ${data.service ? `
            <div class="field">
              <div class="label">Service Interested:</div>
              <div class="value">${data.service}</div>
            </div>
          ` : ''}

          ${data.message ? `
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${data.message}</div>
            </div>
          ` : ''}

          <div class="field">
            <div class="label">Submitted At:</div>
            <div class="value">${new Date(data.submittedAt).toLocaleString('en-AU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</div>
          </div>
        </div>
        <div class="footer">
          <p>Sydney Web Designer - Form Notification System</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: `"Sydney Web Designer" <noreply@sydneywebdesigner.com.au>`,
    replyTo: process.env.EMAIL_USER,
    to: "akshay@dsigns.com.au",
    subject: `🔔 New ${typeLabel} - ${data.name}`,
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Form submission email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending form submission email:", error);
    return { success: false, error };
  }
}

// Send contact form submission notification email
export async function sendContactSubmissionEmail(data: ContactSubmissionEmailData) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1e293b; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #1e293b; margin-bottom: 5px; }
        .value { color: #64748b; }
        .badge { background: #f59e0b; color: white; padding: 5px 15px; border-radius: 20px; display: inline-block; margin: 10px 0; }
        .message-box { background: white; padding: 15px; border-left: 4px solid #f59e0b; margin: 15px 0; }
        .footer { text-align: center; margin-top: 20px; color: #64748b; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📧 New Contact Form Submission</h1>
        </div>
        <div class="content">
          <div class="badge">Contact Page</div>

          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.firstName} ${data.lastName}</div>
          </div>

          <div class="field">
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>

          <div class="field">
            <div class="label">Phone:</div>
            <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
          </div>

          ${data.company ? `
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${data.company}</div>
            </div>
          ` : ''}

          <div class="field">
            <div class="label">Service:</div>
            <div class="value">${data.service}</div>
          </div>

          <div class="field">
            <div class="label">Message:</div>
            <div class="message-box">${data.message}</div>
          </div>

          <div class="field">
            <div class="label">Submitted At:</div>
            <div class="value">${new Date(data.submittedAt).toLocaleString('en-AU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</div>
          </div>
        </div>
        <div class="footer">
          <p>Sydney Web Designer - Contact Form Notification</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: `"Sydney Web Designer" <noreply@sydneywebdesigner.com.au>`,
    replyTo: process.env.EMAIL_USER,
    to: "akshay@dsigns.com.au",
    subject: `📧 New Contact Form - ${data.firstName} ${data.lastName}`,
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Contact submission email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending contact submission email:", error);
    return { success: false, error };
  }
}
