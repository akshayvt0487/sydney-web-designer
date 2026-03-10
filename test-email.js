// Test Email Script - Verify Resend Configuration
// This script tests the email sending functionality

const fs = require('fs');
const path = require('path');
const { Resend } = require('resend');

// Load environment variables from .env.local
function loadEnvLocal() {
  const envPath = path.join(__dirname, '.env.local');
  try {
    const content = fs.readFileSync(envPath, 'utf8');
    const lines = content.split('\n');
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valueParts] = trimmed.split('=');
        const value = valueParts.join('=');
        if (key) {
          process.env[key] = value;
        }
      }
    });
  } catch (error) {
    console.error('❌ Failed to load .env.local:', error.message);
  }
}

loadEnvLocal();

async function sendTestEmail() {
  console.log('🧪 Starting Email Test...\n');
  
  // Check for API key
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('❌ ERROR: RESEND_API_KEY environment variable not found');
    console.log('Make sure .env.local is configured with RESEND_API_KEY');
    process.exit(1);
  }
  
  console.log('✓ API Key found:', apiKey.substring(0, 8) + '...');
  console.log('✓ Initializing Resend client...\n');
  
  const resend = new Resend(apiKey);
  
  try {
    console.log('📧 Sending test email...');
    console.log('  From: Sydney Web Designer <info@sydneywebdesigner.com.au>');
    console.log('  To: akshay@dsigns.com.au');
    console.log('  Subject: Test Email - Email System Verification\n');
    
    const { data, error } = await resend.emails.send({
      from: 'Sydney Web Designer <info@sydneywebdesigner.com.au>',
      to: 'akshay@dsigns.com.au',
      subject: 'Test Email - Email System Verification',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background-color: #f1f5f9; }
            .container { max-width: 600px; margin: 40px auto; background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .header { color: #1e293b; font-size: 24px; font-weight: bold; margin-bottom: 20px; }
            .content { color: #475569; line-height: 1.6; }
            .success { color: #10b981; font-weight: bold; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">✓ Email System Test</div>
            <div class="content">
              <p>Hello Akshay,</p>
              <p>This is a <span class="success">successful test email</span> from your Sydney Web Designer email system.</p>
              <p><strong>System Status:</strong></p>
              <ul>
                <li>✓ Resend API: Connected</li>
                <li>✓ Domain Verified: info@sydneywebdesigner.com.au</li>
                <li>✓ Email Delivery: Working</li>
              </ul>
              <p>If you received this email, your form submission emails should be sending correctly.</p>
              <p style="margin-top: 30px;">Test sent: ${new Date().toLocaleString()}</p>
            </div>
            <div class="footer">
              <p>Sydney Web Designer - Email Verification Test</p>
              <p>Do not reply to this email.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });
    
    if (error) {
      console.error('❌ ERROR sending email:', error);
      console.error('\nDetails:', JSON.stringify(error, null, 2));
      process.exit(1);
    }
    
    console.log('✅ EMAIL SENT SUCCESSFULLY!');
    console.log('   Message ID:', data.id);
    console.log('\n📧 Check your inbox at akshay@dsigns.com.au within 2 minutes');
    console.log('   If not received, check spam/junk folder');
    
  } catch (error) {
    console.error('❌ EXCEPTION:', error.message);
    console.error('\nFull Error:', error);
    process.exit(1);
  }
}

sendTestEmail();
