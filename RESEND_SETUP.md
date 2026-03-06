# Resend Email Setup Guide

This guide will help you configure Resend to send emails from `info@sydneywebdesigner.com.au`.

## Step 1: Get Your Resend API Key

You already have the API key: `re_XZAD5K5M_2Chsyj8tz8vcKcEthKAQWxof`

## Step 2: Verify Your Domain in Resend

1. Go to [Resend Dashboard](https://resend.com/domains)
2. Click "Add Domain"
3. Enter: `sydneywebdesigner.com.au`
4. You'll receive DNS records to add to your domain:

### DNS Records to Add (Example - use actual values from Resend):

**SPF Record (TXT)**
```
Type: TXT
Name: @
Value: v=spf1 include:_spf.resend.com ~all
```

**DKIM Records (CNAME)**
```
Type: CNAME
Name: resend._domainkey
Value: [provided by Resend]

Type: CNAME
Name: resend2._domainkey
Value: [provided by Resend]

Type: CNAME
Name: resend3._domainkey
Value: [provided by Resend]
```

**DMARC Record (TXT) - Optional but recommended**
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:dmarc@sydneywebdesigner.com.au
```

5. Add these DNS records in your domain registrar's control panel (Namecheap, GoDaddy, etc.)
6. Wait for DNS propagation (5-30 minutes)
7. Click "Verify Domain" in Resend dashboard

## Step 3: Configure Environment Variables

Update your `.env.local` file:

```env
# Admin Dashboard Configuration
ADMIN_EMAIL=akshay@dsigns.com.au
ADMIN_PASSWORD=your-strong-admin-password
ADMIN_AUTH_TOKEN=your-secure-random-token

# Email Configuration
RESEND_API_KEY=re_XZAD5K5M_2Chsyj8tz8vcKcEthKAQWxof
```

## Step 4: Update Resend Domain (Remove sydneyremovalist.com.au)

Since you're on the free plan (1 domain only):

1. Go to [Resend Domains](https://resend.com/domains)
2. Remove `sydneyremovalist.com.au`
3. Add `sydneywebdesigner.com.au`
4. Verify the new domain following Step 2

## Step 5: Test Email Sending

After domain verification, test by submitting a form on your website. Check:
- Form submission works
- Email arrives at `akshay@dsigns.com.au`
- Email shows FROM: `info@sydneywebdesigner.com.au`
- Reply-To is set to the form submitter's email

## Resend Free Plan Limits

- **100 emails per day**
- **1 verified domain**
- **3,000 emails per month**

Perfect for a small business website!

## What Changed

✅ Removed Nodemailer and Gmail SMTP
✅ Installed Resend SDK
✅ Updated `lib/email.ts` to use Resend API
✅ Emails now send FROM `info@sydneywebdesigner.com.au`
✅ Professional sender address
✅ Better deliverability

## Troubleshooting

### Emails not sending?
1. Check API key is correct in `.env.local`
2. Verify domain is verified in Resend dashboard
3. Check Resend logs: https://resend.com/emails

### DNS not verifying?
1. Wait 30 minutes for DNS propagation
2. Use DNS checker: https://mxtoolbox.com/
3. Ensure DNS records match exactly what Resend provided

### Still using sydneyremovalist.com.au?
You need to remove it from Resend and add sydneywebdesigner.com.au instead (free plan = 1 domain only)

## Support

- Resend Documentation: https://resend.com/docs
- Resend Support: support@resend.com
- Check email logs in dashboard to debug delivery issues
