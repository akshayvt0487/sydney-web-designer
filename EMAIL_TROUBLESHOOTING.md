# Email Sending Troubleshooting Guide

## Problem: Form Submission Emails Not Sending

### Root Causes

1. **Missing or Incorrect RESEND_API_KEY in Production Environment**
   - The environment variable `RESEND_API_KEY` is not set or is incorrect in your deployment platform
   - This is the most common cause of email failures

2. **Resend Domain Not Verified**
   - The domain `sydneywebdesigner.com.au` might not be verified in Resend
   - Unverified domains cannot send emails

3. **Invalid Resend API Key**
   - The API key might be expired or revoked

---

## Local Development Testing

### 1. Verify `.env.local` Has RESEND_API_KEY

```bash
# Check if .env.local exists and contains:
RESEND_API_KEY=re_XZAD5K5M_2Chsyj8tz8vcKcEthKAQWxof
```

### 2. Run Development Server

```bash
npm run dev
# OR
yarn dev
```

### 3. Check Console Logs

After running a form submission:
- ✅ **Success**: You'll see `✓ Form submission email sent: {messageId}`
- ❌ **Failure**: You'll see `❌ Cannot send form submission email: Resend client not initialized...`

### 4. Test Email Function Directly (Optional)

```typescript
// In a development script or terminal
import { sendFormSubmissionEmail } from '@/lib/email';

const result = await sendFormSubmissionEmail({
  type: 'contact',
  name: 'Test User',
  email: 'test@example.com',
  phone: '0400 000 000',
  message: 'This is a test',
  submittedAt: new Date().toISOString(),
});

console.log(result); // Check if success is true
```

---

## Production Deployment Fix

### Step 1: Add Environment Variable in Deployment Platform

Choose your deployment platform and follow the instructions:

#### **Vercel (Most Common)**

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: `sydney-web-designer`
3. Click **Settings** → **Environment Variables**
4. Add new environment variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_XZAD5K5M_2Chsyj8tz8vcKcEthKAQWxof`
   - **Environments**: Select **Production**, **Preview**, and **Development**
5. Click **Save**

#### **Netlify**

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Select your site
3. Click **Site Settings** → **Build & Deploy** → **Environment**
4. Click **Edit Variables**
5. Add new variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_XZAD5K5M_2Chsyj8tz8vcKcEthKAQWxof`
6. Save changes

#### **Other Platforms**

Search for "Environment Variables" in your platform's settings and add:
```
RESEND_API_KEY=re_XZAD5K5M_2Chsyj8tz8vcKcEthKAQWxof
```

### Step 2: Also Add Other Required Environment Variables

While you're at it, ensure these are also set:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://wnnnywxjwjoyhsbstuln.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indubm55d3hqd2pveWhzYnN0dWxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2MzY0OTQsImV4cCI6MjA1NjIxMjQ5NH0.KIeHO9hm3aJ9AXFnC8HzmYV4OqiFX9vN0xfb4WNlV7Q
```

### Step 3: Redeploy the Application

**Vercel**:
1. Go to **Deployments**
2. Click the three dots (⋯) on the latest deployment
3. Click **Redeploy**

**Netlify**:
1. Go to **Deploys**
2. Click **Trigger Deploy** → **Deploy Site**

Or simply push a new commit to your main branch.

### Step 4: Verify Resend Domain Configuration

1. Go to [Resend Domains Dashboard](https://resend.com/domains)
2. Check that `sydneywebdesigner.com.au` is listed
3. Status should show: **✓ Verified**

If not verified:
1. Add the DNS records shown in Resend to your domain registrar
2. Wait 5-30 minutes for DNS propagation
3. Click "Verify" in Resend

---

## Improved Error Logging (Now Implemented)

The code now includes better logging to help diagnose issues:

### What You'll See in Logs

**When RESEND_API_KEY is missing:**
```
⚠️  WARNING: RESEND_API_KEY environment variable is not set. Email sending will not work.
```

**When email fails:**
```
❌ Cannot send form submission email: Resend client not initialized. RESEND_API_KEY is missing.
❌ Error sending form submission email: {error details}
```

**When email succeeds:**
```
✓ Form submission email sent: re_xxxxxxxxxxxx
```

---

## Verification Checklist

After deploying with environment variables set, test the following:

- [ ] Submit a form on the live website
- [ ] Check email at `basheer@dsigns.com.au` (with CC to `akshay@dsigns.com.au`, `admin@dsigns.com.au`)
- [ ] Verify submission is saved in Supabase Dashboard
- [ ] Check deployment logs for success message: `✓ Form submission email sent:`

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Environment variable not picked up | Restart your server or redeploy (simple push/deploy doesn't always work) |
| "Authentication failed" error from Resend | Check API key is valid and not expired at [Resend Dashboard](https://resend.com/api-keys) |
| Email received but with formatting issues | Resend was working but email client rendering issue - not a backend problem |
| Domain verification failed | Check DNS records in your domain registrar match Resend's requirements |
| Form says email sent but nothing arrives | Check spam/junk folders; verify domain is actually verified in Resend |

---

## Support Contacts for Resend

If issues persist:
- **Resend Status**: https://status.resend.com/
- **Resend Docs**: https://resend.com/docs
- **Resend Support**: https://resend.com/support

---

## Code Changes Made (Improvements)

The following improvements have been made to help diagnose email issues:

### 1. **Better RESEND_API_KEY Initialization** (`lib/email.ts`)
- Now checks if API key exists before initializing Resend client
- Logs warning if API key is missing at startup
- Client is `null` if not configured instead of `undefined`

### 2. **Enhanced Error Checking in Email Functions**
- Each email function now checks:
  - If Resend client is initialized
  - If API key is set
  - Provides clear error messages in logs

### 3. **Improved Logging in API Routes**
- Shows `✓` for success (easier to spot in logs)
- Shows `❌` for failures (clear error indication)
- Shows `⚠️` for warnings (email failed but form saved)

### 4. **Better Error Context**
- Logs now include "Email notification", "Contact email notification", etc.
- Easier to trace which type of form had issues

---

## Next Steps

1. ✅ Ensure `RESEND_API_KEY` is set in production environment
2. ✅ Redeploy the application
3. ✅ Test form submission on live website
4. ✅ Check incoming emails at `basheer@dsigns.com.au`
5. ✅ Review logs in your deployment platform if emails still don't arrive
