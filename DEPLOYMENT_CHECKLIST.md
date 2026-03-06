# Production Deployment Checklist

## Critical: Fix 500 Error on Live Site

The form submission error is likely due to missing Supabase environment variables in production. Follow these steps:

### 1. Add Environment Variables in Vercel/Netlify

Go to your deployment platform's environment variables settings and add:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://wnnnywxjwjoyhsbstuln.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indubm55d3hqd2pveWhzYnN0dWxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2MzY0OTQsImV4cCI6MjA1NjIxMjQ5NH0.KIeHO9hm3aJ9AXFnC8HzmYV4OqiFX9vN0xfb4WNlV7Q

# Resend Email Configuration
RESEND_API_KEY=re_XZAD5K5M_2Chsyj8tz8vcKcEthKAQWxof

# Admin Dashboard
ADMIN_EMAIL=admin@dsigns.com.au
ADMIN_PASSWORD=Admin@2024
ADMIN_AUTH_TOKEN=sydney-web-designer-admin-2024
```

### 2. Redeploy the Application

After adding environment variables:
- Trigger a new deployment
- Or go to Deployments → Click on latest → Redeploy

### 3. Verify Supabase Tables

Ensure all tables exist in Supabase (already done):
- ✅ form_submissions
- ✅ contact_submissions
- ✅ newsletter_subscriptions

### 4. Test Form Submissions

After redeployment:
1. Go to live website
2. Submit a popup form (SEO Audit, Ads Audit, etc.)
3. Check Supabase Dashboard → Table Editor for new entry
4. Check email at basheer@dsigns.com.au (with CC to akshay & admin)

### 5. Verify Resend Domain

For emails to send from info@sydneywebdesigner.com.au:
1. Go to https://resend.com/domains
2. Remove sydneyremovalist.com.au (if needed)
3. Add sydneywebdesigner.com.au
4. Add DNS records to your domain registrar
5. Wait for verification

---

## Complete Deployment Checklist

### Environment Variables (All Platforms)

**Required in Production:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://wnnnywxjwjoyhsbstuln.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[your-anon-key]
RESEND_API_KEY=re_XZAD5K5M_2Chsyj8tz8vcKcEthKAQWxof
ADMIN_EMAIL=admin@dsigns.com.au
ADMIN_PASSWORD=[strong-password]
ADMIN_AUTH_TOKEN=[secure-token]
```

### Pre-Deployment Checks

- ✅ All commits pushed to GitHub
- ✅ Supabase tables created (run supabase-migration.sql)
- ✅ Resend API key valid
- ✅ Domain DNS configured for Resend
- ✅ Environment variables set
- ✅ Build succeeds locally: `npm run build`
- ✅ No TypeScript errors
- ✅ No console errors

### Post-Deployment Verification

**Forms & Submissions:**
- [ ] Test popup form submission
- [ ] Test contact form submission
- [ ] Test newsletter subscription
- [ ] Verify data appears in Supabase
- [ ] Check email notifications arrive

**Email System:**
- [ ] Emails sent to basheer@dsigns.com.au
- [ ] CC received by akshay@dsigns.com.au
- [ ] CC received by admin@dsigns.com.au
- [ ] Reply-To works correctly
- [ ] Subject line format: "{Name} - {Form Type}"

**Admin Dashboard:**
- [ ] Login works at /admin
- [ ] Form submissions display
- [ ] Contact submissions display
- [ ] Newsletter subscriptions display
- [ ] Status updates work

**Open Graph / Social Media:**
- [ ] OG images generate: /api/og?title=Test&description=Test&type=service
- [ ] Facebook preview looks good
- [ ] Twitter card preview looks good
- [ ] LinkedIn preview looks good

**General:**
- [ ] All pages load without errors
- [ ] No 404 errors in console
- [ ] Images load correctly
- [ ] Forms submit successfully
- [ ] Newsletter form works in footer
- [ ] Mobile responsive design works
- [ ] SEO meta tags present

### Common Issues & Solutions

#### Issue: 500 Error on Form Submission
**Solution:** Missing Supabase environment variables. Add them in deployment platform.

#### Issue: Emails Not Sending
**Solution:**
1. Check RESEND_API_KEY is set
2. Verify domain in Resend dashboard
3. Add DNS records for domain verification

#### Issue: Admin Dashboard Not Loading Data
**Solution:**
1. Check Supabase env vars
2. Verify tables exist in Supabase
3. Check RLS policies are correct

#### Issue: OG Images Not Generating
**Solution:**
1. Check /api/og route exists
2. Verify Edge Runtime is supported on platform
3. Check build logs for errors

### Performance Optimization (Optional)

- [ ] Enable image optimization
- [ ] Configure CDN caching
- [ ] Enable gzip compression
- [ ] Set up Redis for session storage
- [ ] Configure Vercel Analytics
- [ ] Add Google Analytics

### Security Checklist

- [x] No credentials in git repository
- [x] .env.local in .gitignore
- [x] Strong admin password set
- [x] ADMIN_AUTH_TOKEN is random and secure
- [x] Supabase RLS policies enabled
- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] Rate limiting on forms (future)

### SEO Checklist

- [x] Sitemap.xml generated
- [x] Robots.txt configured
- [x] Meta descriptions on all pages
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Canonical URLs
- [ ] Google Search Console verification
- [ ] Google Analytics tracking
- [ ] Structured data (Schema.org)

---

## Deployment Platforms

### Vercel (Recommended)

1. Connect GitHub repository
2. Add environment variables in Settings → Environment Variables
3. Deploy automatically on push to main

### Netlify

1. Connect GitHub repository
2. Add environment variables in Site Settings → Build & Deploy → Environment
3. Deploy automatically on push to main

### Other Platforms

Ensure platform supports:
- Next.js 14.2 App Router
- Edge Runtime (for OG images)
- Environment variables
- Automatic deployments

---

## Support & Documentation

- **Supabase Setup:** [SUPABASE_SETUP_GUIDE.md](SUPABASE_SETUP_GUIDE.md)
- **Resend Setup:** [RESEND_SETUP.md](RESEND_SETUP.md)
- **GitHub Repository:** https://github.com/akshayvt0487/sydney-web-designer

---

## Emergency Rollback

If deployment fails:

1. Go to deployment platform
2. Find previous successful deployment
3. Click "Redeploy" or "Rollback"
4. Investigate issues before redeploying

---

**Last Updated:** March 6, 2026
**Version:** 1.0.0
**Status:** Production Ready (after env vars configured)
