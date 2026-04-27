# ImportBoost

Landing page + private customer dashboard for ImportBoost. Clients are created manually by the team and can connect Meta assets (WhatsApp Business + Instagram Business) for automation onboarding.

## Stack

- Next.js 16 (App Router)
- Tailwind v4 + existing ImportBoost design system
- Prisma + PostgreSQL
- Secure session auth (email/password, no public signup)
- Meta OAuth + sync APIs + webhook receiver

## Environment variables

Copy `.env.example` to `.env` and configure:

```bash
DATABASE_URL=
AUTH_SECRET=
NEXT_PUBLIC_APP_URL=

META_APP_ID=
META_APP_SECRET=
META_REDIRECT_URI=
META_GRAPH_VERSION=v23.0
META_VERIFY_TOKEN=

INTEGRATION_TOKEN_ENCRYPTION_KEY=

OPENAI_API_KEY=
OPENAI_CHAT_MODEL=gpt-4.1-mini
CHAT_ANALYTICS_KEY=
```

Notes:
- `AUTH_SECRET` and `INTEGRATION_TOKEN_ENCRYPTION_KEY` should be long random values (32+ chars).
- `META_REDIRECT_URI` must match the callback route exactly:
  - `https://your-domain.com/api/meta/oauth/callback`

## Local development

```bash
npm install
npm run prisma:generate
npm run prisma:migrate -- --name init_dashboard_auth_meta
npm run dev
```

## Manual user creation (no public signup)

```bash
npm run create-user -- --email client@example.com --password "strong-password" --name "Client Name"
```

Optional admin role:

```bash
npm run create-user -- --email admin@example.com --password "strong-password" --name "Admin" --role admin
```

## Dashboard routes

- `/login` private login
- `/dashboard` protected overview
- `/dashboard/integrations` protected integration health and actions

## Meta OAuth and sync endpoints

- `GET /api/meta/oauth/start?type=whatsapp|instagram`
- `GET /api/meta/oauth/callback`
- `POST /api/meta/whatsapp/sync`
- `POST /api/meta/instagram/sync`
- `POST /api/meta/disconnect?type=whatsapp|instagram`
- `POST /api/meta/test?type=whatsapp|instagram`

## Webhooks

- Verify endpoint: `GET /api/webhooks/meta`
- Events endpoint: `POST /api/webhooks/meta`

Meta webhook callback URL:

- `https://your-domain.com/api/webhooks/meta`

## Required Meta permissions

WhatsApp:
- `whatsapp_business_messaging`
- `whatsapp_business_management`
- `business_management`

Instagram:
- `instagram_basic`
- `instagram_manage_messages`
- `pages_show_list`
- `pages_manage_metadata`
- `pages_messaging`
- `business_management`
