# Admin Dashboard

A protected admin dashboard for managing form submissions from the Sydney Web Designer website.

## Access the Dashboard

**URL:** `http://localhost:3001/admin/login` (or your production URL + `/admin/login`)

### Default Credentials
- **Email:** `admin@dsigns.com.au`
- **Password:** `Admin@2024`

> ⚠️ **Important:** Change these credentials in `.env.local` before deploying to production!

## Features

### 1. Dashboard Overview
- View total submissions statistics
- Monitor new vs contacted submissions
- Quick access to all form types
- Real-time submission counts

### 2. Form Submissions Management
**Path:** `/admin/dashboard/submissions`

Manage submissions from:
- General quote requests
- SEO Audit requests
- Google Ads Audit requests
- Consultation bookings

**Features:**
- Filter by status (New, Contacted, Closed)
- View complete submission details
- Quick email and phone contact links
- Submission timestamps

### 3. Contact Form Submissions
**Path:** `/admin/dashboard/contact-submissions`

Manage submissions from the contact page form.

**Features:**
- Filter by status
- View customer details and messages
- Direct contact options
- Service interest tracking

## Data Storage

Submissions are stored in JSON files located in the `data/` folder:
- `data/submissions.json` - Quote requests and audits
- `data/contact-submissions.json` - Contact form submissions

> 📝 **Note:** For production, consider migrating to a proper database (PostgreSQL, MongoDB, etc.)

## Security

### Authentication
- Cookie-based authentication
- Protected routes via middleware
- Secure logout functionality

### Environment Variables
Required in `.env.local`:
```env
ADMIN_EMAIL=admin@dsigns.com.au
ADMIN_PASSWORD=Admin@2024
ADMIN_AUTH_TOKEN=sydney-web-designer-admin-2024
```

## API Endpoints

### Authentication
- `POST /api/admin/login` - Admin login
- `POST /api/admin/logout` - Admin logout

### Submissions
- `POST /api/submissions/save` - Save form submission
- `GET /api/submissions/save` - Get all submissions

### Contact Submissions
- `POST /api/submissions/contact/save` - Save contact submission
- `GET /api/submissions/contact/save` - Get all contact submissions

## Development

### Start Development Server
```bash
npm run dev
```

### Access Admin
1. Navigate to `http://localhost:3001/admin/login`
2. Enter credentials
3. Access dashboard at `http://localhost:3001/admin/dashboard`

## Production Deployment

### Before Deploying:

1. **Change Admin Credentials**
   - Update `ADMIN_EMAIL` in `.env.local`
   - Update `ADMIN_PASSWORD` in `.env.local`
   - Update `ADMIN_AUTH_TOKEN` in `.env.local`

2. **Database Migration (Recommended)**
   - Migrate from JSON files to a proper database
   - Update API routes to use database queries
   - Add proper validation and sanitization

3. **Security Enhancements**
   - Implement proper JWT authentication
   - Add rate limiting
   - Enable HTTPS only
   - Add CSRF protection
   - Implement session management

4. **Email Notifications**
   - Set up email notifications for new submissions
   - Add automated responses to customers

## Troubleshooting

### Can't Access Admin Dashboard
- Ensure `.env.local` file exists with correct credentials
- Check that the development server is running
- Clear browser cookies and try again

### Submissions Not Saving
- Check that `data/` folder exists and has write permissions
- Check browser console for errors
- Verify API routes are accessible

### Forgot Admin Password
- Update `ADMIN_PASSWORD` in `.env.local`
- Restart the development server
- Clear browser cookies

## Support

For technical support or questions, contact the development team.

---

**Created for:** Sydney Web Designer (DSIGNS)
**Last Updated:** February 2026
