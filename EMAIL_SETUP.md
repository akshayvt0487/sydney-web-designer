# Email Notification Setup Guide

This guide will help you configure email notifications for form submissions on the Sydney Web Designer website.

## Overview

The website now sends automatic email notifications to **akshay@dsigns.com.au** whenever:
- Someone submits a quote request form
- Someone submits an SEO audit request
- Someone submits a Google Ads audit request
- Someone submits a consultation request
- Someone submits the contact form

**Email Configuration:**
- **From:** noreply@sydneywebdesigner.com.au (displayed to recipients)
- **Reply-To:** Your configured SMTP email (akshay@dsigns.com.au)
- **To:** akshay@dsigns.com.au
- **SMTP Server:** Uses your email account credentials for sending

## Email Configuration

### Step 1: Choose Your Email Service

You can use any SMTP email service. Common options:

#### Option A: Gmail (Recommended for testing)
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the generated 16-character password

#### Option B: Microsoft 365 / Outlook
- SMTP Host: `smtp.office365.com`
- Port: `587`
- Use your Microsoft email and password

#### Option C: Professional Email Service (Recommended for production)
- **SendGrid**: High deliverability, free tier available
- **Mailgun**: Developer-friendly, good for transactional emails
- **Amazon SES**: Cost-effective for high volume

### Step 2: Configure Environment Variables

Edit the `.env.local` file in the root directory:

```env
# Email Configuration
EMAIL_HOST=smtp.gmail.com          # Your SMTP host
EMAIL_PORT=587                      # Usually 587 for TLS or 465 for SSL
EMAIL_USER=your-email@gmail.com    # Your email address
EMAIL_PASSWORD=your-app-password   # Your app-specific password or regular password
```

**For Google Workspace (akshay@dsigns.com.au):**
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=akshay@dsigns.com.au
EMAIL_PASSWORD=abcd efgh ijkl mnop  # 16-character app password from Google
```

**For Personal Gmail:**
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop  # 16-character app password
```

**For Outlook/Microsoft 365:**
```env
EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

### Step 3: Restart the Development Server

After updating the `.env.local` file, restart your Next.js server:

```bash
npm run dev
```

## Testing Email Notifications

1. Start your development server: `npm run dev`
2. Open the website in your browser
3. Fill out and submit any form (quote request, contact form, etc.)
4. Check the email inbox at **akshay@dsigns.com.au**
5. You should receive a formatted email notification with all the submission details

## Email Templates

The system sends beautifully formatted HTML emails with:
- Form type badge (SEO Audit, Contact Form, etc.)
- All submitted information (name, email, phone, message, etc.)
- Direct links to email and call the submitter
- Timestamp in Australian format
- Professional Sydney Web Designer branding

## Troubleshooting

### Email not sending?

1. **Check console logs**: Look for error messages in the terminal
2. **Verify credentials**: Make sure EMAIL_USER and EMAIL_PASSWORD are correct
3. **App passwords**: If using Gmail, ensure you're using an App Password, not your regular password
4. **Port blocked**: Try port 465 instead of 587
5. **Less secure apps**: For Gmail, you may need to enable "Less secure app access" (not recommended for production)

### Testing SMTP Connection

You can test your SMTP configuration by checking the server logs when you restart the application. The system will verify the email configuration on startup.

### Common Error Messages

- **"Invalid login"**: Wrong email or password
- **"Connection timeout"**: Check your firewall or try a different port
- **"Self-signed certificate"**: Add `tls: { rejectUnauthorized: false }` to transporter config (development only)

## Production Deployment

For production deployment (Vercel, Netlify, etc.):

1. Add environment variables in your hosting platform's dashboard
2. Use a professional email service (SendGrid, Mailgun, etc.)
3. Set up SPF and DKIM records for better deliverability
4. Monitor email sending logs and failures
5. Consider adding a retry mechanism for failed emails

## Changing the Recipient Email

To send notifications to a different email address, edit [lib/email.ts](lib/email.ts) and change:

```typescript
to: "akshay@dsigns.com.au"
```

to your desired email address in both functions:
- `sendFormSubmissionEmail`
- `sendContactSubmissionEmail`

## Security Notes

- Never commit `.env.local` to version control
- Use App Passwords instead of regular passwords when possible
- Consider using environment-specific configurations
- Rotate passwords regularly
- Use professional email services in production

## Files Modified

- `lib/email.ts` - Email configuration and templates
- `app/api/submissions/save/route.ts` - Form submission API with email
- `app/api/submissions/contact/save/route.ts` - Contact form API with email
- `.env.local` - Environment variables (not in git)
- `.env.local.example` - Example configuration

## Support

If you encounter issues with email setup, contact the development team or refer to:
- Nodemailer documentation: https://nodemailer.com/
- Gmail App Passwords: https://support.google.com/accounts/answer/185833
