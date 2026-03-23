/**
 * Supabase Keep-Alive Script
 *
 * This script prevents your Supabase free tier project from auto-pausing
 * due to inactivity. Run this at least once every 7 days.
 *
 * Usage:
 *   node scripts/supabase-keepalive.js
 *
 * Set up a weekly cron job or GitHub Action to run this automatically.
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Read environment variables from .env.local
const envPath = path.join(__dirname, '..', '.env.local');
let supabaseUrl, supabaseKey;

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const urlMatch = envContent.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/);
  const keyMatch = envContent.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY=(.+)/);

  supabaseUrl = urlMatch ? urlMatch[1].trim() : null;
  supabaseKey = keyMatch ? keyMatch[1].trim() : null;
}

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase environment variables in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function keepAlive() {
  const timestamp = new Date().toISOString();

  console.log('🏓 Supabase Keep-Alive Ping');
  console.log('   Timestamp:', timestamp);
  console.log('   Project:', supabaseUrl);

  try {
    // Simple query to keep the database active
    const { data, error } = await supabase
      .from('form_submissions')
      .select('id')
      .limit(1);

    if (error) {
      // If table doesn't exist or there's a permission error, that's still activity
      console.log('⚠️  Query returned error (but project is active):', error.message);
      console.log('✓ Keep-alive ping successful');
      return;
    }

    console.log('✓ Keep-alive ping successful');
    console.log('   Database is active and responding');

  } catch (err) {
    console.error('❌ Keep-alive failed:', err.message);
    process.exit(1);
  }
}

keepAlive();
