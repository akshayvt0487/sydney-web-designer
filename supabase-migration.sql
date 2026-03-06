-- Sydney Web Designer - Supabase Database Migration
-- Run this SQL in your Supabase SQL Editor to create all necessary tables

-- 1. Form Submissions Table (popup forms)
CREATE TABLE IF NOT EXISTS form_submissions (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  website TEXT,
  project_type TEXT,
  seo_goal TEXT,
  ad_spend TEXT,
  service TEXT,
  message TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
  submitted_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_form_submissions_status ON form_submissions(status);
CREATE INDEX IF NOT EXISTS idx_form_submissions_submitted_at ON form_submissions(submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_form_submissions_email ON form_submissions(email);

-- 2. Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id TEXT PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
  submitted_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_submitted_at ON contact_submissions(submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);

-- 3. Newsletter Subscriptions Table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_subscribed_at ON newsletter_subscriptions(subscribed_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policies for public insert (form submissions)
CREATE POLICY "Allow public insert" ON form_submissions
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public insert" ON contact_submissions
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public insert" ON newsletter_subscriptions
  FOR INSERT TO anon
  WITH CHECK (true);

-- Create policies for authenticated read (admin dashboard)
CREATE POLICY "Allow authenticated read" ON form_submissions
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated read" ON contact_submissions
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated read" ON newsletter_subscriptions
  FOR SELECT TO authenticated
  USING (true);

-- Create policies for authenticated update (status changes)
CREATE POLICY "Allow authenticated update" ON form_submissions
  FOR UPDATE TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated update" ON contact_submissions
  FOR UPDATE TO authenticated
  USING (true);

-- Grant permissions to anon users (for form submissions)
GRANT INSERT ON form_submissions TO anon;
GRANT INSERT ON contact_submissions TO anon;
GRANT INSERT ON newsletter_subscriptions TO anon;
GRANT USAGE, SELECT ON SEQUENCE newsletter_subscriptions_id_seq TO anon;

-- Grant permissions to authenticated users (for admin dashboard)
GRANT SELECT, UPDATE ON form_submissions TO authenticated;
GRANT SELECT, UPDATE ON contact_submissions TO authenticated;
GRANT SELECT ON newsletter_subscriptions TO authenticated;

-- Comments for documentation
COMMENT ON TABLE form_submissions IS 'Stores popup form submissions (quote, SEO audit, ads audit, consultation)';
COMMENT ON TABLE contact_submissions IS 'Stores contact page form submissions';
COMMENT ON TABLE newsletter_subscriptions IS 'Stores newsletter email subscriptions';

-- Verify tables created successfully
SELECT
  table_name,
  (SELECT COUNT(*) FROM information_schema.columns WHERE table_name = t.table_name) as column_count
FROM information_schema.tables t
WHERE table_schema = 'public'
  AND table_name IN ('form_submissions', 'contact_submissions', 'newsletter_subscriptions')
ORDER BY table_name;
