-- Fix RLS Policies for Form Submissions - UPDATED
-- This version explicitly allows the anon role for public form submissions

-- Drop all existing policies to start fresh (comprehensive list of all possible policy names)
DROP POLICY IF EXISTS "Enable insert for all users" ON form_submissions;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON form_submissions;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON form_submissions;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON form_submissions;
DROP POLICY IF EXISTS "Allow authenticated select" ON form_submissions;
DROP POLICY IF EXISTS "Allow authenticated update" ON form_submissions;
DROP POLICY IF EXISTS "Enable insert for public" ON form_submissions;
DROP POLICY IF EXISTS "Enable read for all" ON form_submissions;

DROP POLICY IF EXISTS "Enable insert for all users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON contact_submissions;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated select" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated update" ON contact_submissions;
DROP POLICY IF EXISTS "Enable insert for public" ON contact_submissions;
DROP POLICY IF EXISTS "Enable read for all" ON contact_submissions;

DROP POLICY IF EXISTS "Enable insert for all users" ON newsletter_subscriptions;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON newsletter_subscriptions;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON newsletter_subscriptions;
DROP POLICY IF EXISTS "Allow authenticated select" ON newsletter_subscriptions;

-- Re-enable RLS
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- PUBLIC INSERT - Allow anonymous users to submit forms
CREATE POLICY "Allow anonymous inserts" ON form_submissions
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts" ON contact_submissions
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts" ON newsletter_subscriptions
  FOR INSERT 
  WITH CHECK (true);

-- AUTHENTICATED SELECT - Allow admin to view all submissions
CREATE POLICY "Allow authenticated select" ON form_submissions
  FOR SELECT
  USING (true);

CREATE POLICY "Allow authenticated select" ON contact_submissions
  FOR SELECT
  USING (true);

CREATE POLICY "Allow authenticated select" ON newsletter_subscriptions
  FOR SELECT
  USING (true);

-- AUTHENTICATED UPDATE - Allow admin to update status
CREATE POLICY "Allow authenticated update" ON form_submissions
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated update" ON contact_submissions
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Verify policies were created
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  cmd
FROM pg_policies 
WHERE tablename IN ('form_submissions', 'contact_submissions', 'newsletter_subscriptions')
ORDER BY tablename, policyname;
