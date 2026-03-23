// Quick Supabase Connection Test
// Run with: node test-supabase.js

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Read .env.local file
const envPath = path.join(__dirname, '.env.local');
let supabaseUrl, supabaseKey;

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const urlMatch = envContent.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/);
  const keyMatch = envContent.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY=(.+)/);

  supabaseUrl = urlMatch ? urlMatch[1].trim() : null;
  supabaseKey = keyMatch ? keyMatch[1].trim() : null;
}

console.log('🔍 Testing Supabase Connection');
console.log('URL:', supabaseUrl ? `✓ ${supabaseUrl}` : '✗ MISSING');
console.log('Key:', supabaseKey ? `✓ ${supabaseKey.substring(0, 30)}...` : '✗ MISSING');

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testInsert() {
  console.log('\n📝 Testing form_submissions insert...');

  const testData = {
    id: `test-${Date.now()}`,
    type: 'contact',
    name: 'Test User',
    email: 'test@example.com',
    phone: '0412345678',
    website: null,
    project_type: null,
    seo_goal: null,
    ad_spend: null,
    service: null,
    message: 'Test message',
    status: 'new',
    submitted_at: new Date().toISOString(),
  };

  console.log('Test data:', testData);

  const { data, error } = await supabase
    .from('form_submissions')
    .insert([testData])
    .select();

  if (error) {
    console.error('\n❌ INSERT FAILED');
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    console.error('Error hint:', error.hint);
    console.error('Error details:', error.details);
    console.error('Full error:', JSON.stringify(error, null, 2));
    process.exit(1);
  }

  console.log('\n✓ INSERT SUCCESSFUL');
  console.log('Inserted data:', data);

  // Clean up test data
  console.log('\n🧹 Cleaning up test data...');
  const { error: deleteError } = await supabase
    .from('form_submissions')
    .delete()
    .eq('id', testData.id);

  if (deleteError) {
    console.warn('⚠️  Could not delete test data:', deleteError.message);
  } else {
    console.log('✓ Test data cleaned up');
  }
}

async function testSelect() {
  console.log('\n📖 Testing form_submissions select...');

  const { data, error } = await supabase
    .from('form_submissions')
    .select('*')
    .limit(1);

  if (error) {
    console.error('\n❌ SELECT FAILED');
    console.error('Error:', error);
    return;
  }

  console.log('✓ SELECT SUCCESSFUL');
  console.log('Row count:', data.length);
}

async function run() {
  try {
    await testSelect();
    await testInsert();
    console.log('\n✅ All tests passed!');
  } catch (err) {
    console.error('\n❌ Test failed:', err);
    process.exit(1);
  }
}

run();
