# Analytics Configuration

Use Bublik's optional analytics to help admins understand which pages users visit and which actions they take most often.

Analytics is disabled by default.

<!--toc:start-->

- [What You Need](#what-you-need)
- [Simple Deploy](#simple-deploy)
- [Docker Deploy](#docker-deploy)
- [Verify the Setup](#verify-the-setup)
<!--toc:end-->

## What You Need

Before enabling analytics:

- Your Bublik instance should be updated to `v2.11.0` or newer.
- The analytics page is available only to admin users so you **must be logged in**.

## Non-Docker Deploy

If you manage the backend directly, enable analytics with these steps:

1. Update the backend if needed:

   ```bash
   ./scripts/deploy --steps general_conf pip_requirements django_settings run_services
   ```

2. Enable analytics in `bublik/general.conf`:

   ```bash
   ANALYTICS_ENABLE="True"
   ```

3. Apply the updated Django settings and restart services:

   ```bash
   ./scripts/deploy --steps django_settings run_services
   ```

4. Activate the virtual environment:

   ```bash
   source .env/bin/activate
   ```

5. Run analytics database migrations:

   ```bash
   python manage.py migrate analytics
   ```

## Docker Deploy

For Docker deployments, add these variables to your `.env` file:

```dotenv
ANALYTICS_ENABLED=true
ANALYTICS_DB_PATH=/app/bublik/logs/analytics.sqlite3
```

Then apply the update:

1. `task pull`
2. `task up`

If `ANALYTICS_ENABLED` is missing or set to `false`, analytics remains disabled.

## Verify the Setup

After configuration:

1. Sign in as an admin user.
2. Open the Analytics page in Bublik under Admin section.
3. Confirm that page visits and actions begin appearing after usage.
