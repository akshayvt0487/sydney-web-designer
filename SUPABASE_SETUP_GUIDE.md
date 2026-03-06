# Supabase Database Setup Guide

This guide will help you set up Supabase database for form submissions storage.

## Overview

The Sydney Web Designer website now uses Supabase (PostgreSQL) instead of JSON files for storing:
- Form submissions (popup forms)
- Contact form submissions
- Newsletter subscriptions

## Step 1: Run the Database Migration

1. **Open Supabase Dashboard:**
   - Go to https://supabase.com/dashboard
   - Select your project: `wnnnywxjwjoyhsbstuln`

2. **Open SQL Editor:**
   - Click "SQL Editor" in the left sidebar
   - Click "New Query"

3. **Copy and Paste the Migration SQL:**
   - Open the file `supabase-migration.sql` in this project
   - Copy ALL the SQL code (entire file)
   - Paste it into the Supabase SQL Editor

4. **Execute the Migration:**
   - Click "Run" button (or press Ctrl+Enter)
   - You should see: "Success. No rows returned"
   - At the bottom, you'll see a verification table showing 3 tables created

## Step 2: Verify Tables Created

In Supabase Dashboard, go to "Table Editor" and confirm you see:

1. **form_submissions** - Popup form data
   - Columns: id, type, name, email, phone, website, project_type, seo_goal, ad_spend, service, message, status, submitted_at, created_at

2. **contact_submissions** - Contact page form data
   - Columns: id, first_name, last_name, email, phone, company, service, message, status, submitted_at, created_at

3. **newsletter_subscriptions** - Newsletter emails
   - Columns: id, email, subscribed_at, created_at

## Step 3: Verify Environment Variables

Check your `.env.local` file contains:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://wnnnywxjwjoyhsbstuln.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indubm55d3hqd2pveWhzYnN0dWxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2MzY0OTQsImV4cCI6MjA1NjIxMjQ5NH0.KIeHO9hm3aJ9AXFnC8HzmYV4OqiFX9vN0xfb4WNlV7Q
```

These are already configured in your `.env.local` file.

## Step 4: Test the Setup

1. **Start Development Server:**
   ```bash
   npm run dev
   ```

2. **Test Form Submissions:**
   - Submit a popup form (quote request, SEO audit, etc.)
   - Submit the contact form
   - Subscribe to the newsletter

3. **Verify Data in Supabase:**
   - Go to Supabase Dashboard > Table Editor
   - Select each table and check for new entries
   - You should see your test submissions

4. **Check Email Notifications:**
   - Email sent TO: basheer@dsigns.com.au
   - Email CC: akshay@dsigns.com.au, admin@dsigns.com.au
   - Subject format: "John Smith - SEO Audit Request"

## Database Features

### Row Level Security (RLS)
All tables have RLS enabled with these policies:
- **Anonymous users** can INSERT (submit forms)
- **Authenticated users** can SELECT (view in admin dashboard)
- **Authenticated users** can UPDATE (change status)

### Indexes for Performance
All tables have indexes on:
- status (for filtering)
- submitted_at (for sorting)
- email (for searching)

### Automatic Timestamps
- `submitted_at`: When user submitted the form
- `created_at`: When database record was created (auto-generated)

### Duplicate Prevention
Newsletter subscriptions have UNIQUE constraint on email - prevents duplicate subscriptions.

## Email Notifications

All form submissions trigger email notifications:

**Recipients:**
- TO: basheer@dsigns.com.au
- CC: akshay@dsigns.com.au, admin@dsigns.com.au

**Subject Format:**
- Popup forms: `{Name} - {Form Type}`
- Contact form: `{First Name} {Last Name} - Contact Form`
- Newsletter: `{Email} - Newsletter Subscription`

**Examples:**
- "John Smith - SEO Audit Request"
- "Jane Doe - Contact Form"
- "subscriber@example.com - Newsletter Subscription"

## Admin Dashboard

The admin dashboard at `/admin` automatically works with Supabase:
- Shows all submissions from all tables
- Filter by status (new, contacted, closed)
- Filter by form type
- Real-time data from database

## Migration from JSON Files

The old JSON file storage has been completely replaced:

**Before (JSON files):**
- data/submissions.json
- data/contact-submissions.json
- data/newsletter-subscriptions.json

**After (Supabase tables):**
- form_submissions
- contact_submissions
- newsletter_subscriptions

**Note:** Old JSON files are still in `.gitignore` and won't be committed. You can safely delete them after verifying Supabase works.

## Troubleshooting

### Issue: "Failed to save submission"

**Check:**
1. Supabase URL and ANON_KEY are correct in `.env.local`
2. Database migration was run successfully
3. Tables exist in Supabase Dashboard
4. RLS policies are enabled

### Issue: Duplicate email error (newsletter)

**Expected behavior** - newsletter_subscriptions table has UNIQUE constraint on email. Users cannot subscribe twice with same email.

### Issue: Data not showing in admin dashboard

**Check:**
1. Supabase authentication is working
2. RLS policies allow SELECT for authenticated users
3. Tables have data (check in Supabase Table Editor)

### Issue: Email notifications not sending

**Check:**
1. RESEND_API_KEY is configured
2. Domain is verified in Resend
3. Check browser console for errors
4. Data is still saved to database even if email fails

## Database Backup

Supabase automatically backs up your database:
- Daily backups (retained for 7 days on free plan)
- Point-in-time recovery available
- Export data anytime from Table Editor

## Next Steps

1. ✅ Run migration SQL
2. ✅ Verify tables created
3. ✅ Test form submissions
4. ✅ Check email notifications
5. ✅ Verify data in Supabase
6. 🚀 Deploy to production

## Support

- Supabase Documentation: https://supabase.com/docs
- Supabase Dashboard: https://supabase.com/dashboard
- Project ID: wnnnywxjwjoyhsbstuln

## Files Modified

- `lib/supabase.ts` - Supabase client configuration
- `supabase-migration.sql` - Database migration script
- `app/api/submissions/save/route.ts` - Popup forms API
- `app/api/submissions/contact/save/route.ts` - Contact form API
- `app/api/newsletter/subscribe/route.ts` - Newsletter API
- `app/api/newsletter/subscriptions/route.ts` - Newsletter GET API
- `lib/email.ts` - Email recipients and subject format
- `.env.local` - Supabase credentials
- `.env.local.example` - Example config

All changes have been committed to git!
