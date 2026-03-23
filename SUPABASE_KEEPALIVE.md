# Supabase Keep-Alive Setup

This project includes scripts to prevent your Supabase free tier project from auto-pausing after 7 days of inactivity.

## How It Works

Supabase free tier projects automatically pause after **7 days of inactivity**. To prevent this, we need to make at least one database query every 7 days.

## Setup Options

### Option 1: GitHub Actions (Recommended)

Automatically runs every 5 days via GitHub Actions.

#### Setup Steps:

1. **Add Secrets to GitHub**:
   - Go to your GitHub repository
   - Navigate to **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Add two secrets:
     - Name: `NEXT_PUBLIC_SUPABASE_URL`
       Value: `https://wnnnywxjwjoyhsbstuln.supabase.co`
     - Name: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
       Value: `your_anon_key_here`

2. **Enable GitHub Actions**:
   - The workflow file is already in `.github/workflows/supabase-keepalive.yml`
   - It will run automatically every 5 days
   - You can also trigger it manually from the Actions tab

3. **Verify**:
   - Go to **Actions** tab in your GitHub repository
   - Look for "Supabase Keep-Alive" workflow
   - Click "Run workflow" to test it manually

### Option 2: Manual Execution

Run the script locally whenever you remember (at least once a week).

```bash
node scripts/supabase-keepalive.js
```

### Option 3: Local Cron Job (Mac/Linux)

Set up a cron job to run automatically on your local machine.

1. Open crontab:
   ```bash
   crontab -e
   ```

2. Add this line (runs every 5 days at 9 AM):
   ```
   0 9 */5 * * cd /path/to/your/project && node scripts/supabase-keepalive.js
   ```

### Option 4: Windows Task Scheduler

1. Open Task Scheduler
2. Create a new task
3. Set trigger: Every 5 days
4. Set action: Run `node scripts/supabase-keepalive.js`

## Testing

Test the keep-alive script manually:

```bash
node scripts/supabase-keepalive.js
```

Expected output:
```
🏓 Supabase Keep-Alive Ping
   Timestamp: 2026-03-23T...
   Project: https://wnnnywxjwjoyhsbstuln.supabase.co
✓ Keep-alive ping successful
   Database is active and responding
```

## Monitoring

- **GitHub Actions**: Check the Actions tab to see workflow runs
- **Supabase Dashboard**: Monitor when your project was last active

## Alternative: Upgrade to Pro

If you don't want to manage keep-alive scripts:
- Upgrade to Supabase Pro ($25/month)
- Pro projects **never auto-pause**
- Includes better performance and higher limits

## Troubleshooting

**Script fails with connection error:**
- Check that your Supabase project is resumed
- Verify environment variables in `.env.local`

**GitHub Action fails:**
- Check that secrets are correctly set in GitHub
- View the workflow logs in the Actions tab

**Still pausing after 7 days:**
- Verify the keep-alive script is actually running
- Check GitHub Actions history
- Ensure the cron schedule is correct
