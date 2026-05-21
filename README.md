# cubeon-solutions.de

Website of **Cubeon Solutions UG** — built with Next.js 16, Tailwind CSS v4, deployed on Vercel.

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Contact form | Resend (via `/api/contact` Route Handler) |
| Analytics | Vercel Analytics (cookie-free) |
| Deployment | Vercel |

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

The contact form requires a `RESEND_API_KEY`. Without it the API returns a 503 — everything else works locally.

Create `.env.local` in the project root:

```
RESEND_API_KEY=re_your_key_here
```

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes (production) | Resend API key for contact form emails |

## Key files

| File | Purpose |
|---|---|
| `src/lib/data/apps.ts` | All app data (title, description, pricing, store URLs) |
| `src/lib/data/services.ts` | Services list shown on the homepage |
| `src/lib/data/team.ts` | Team members |
| `src/lib/whatsapp.ts` | WhatsApp number + pre-filled message — **update before going live** |
| `src/app/api/contact/route.ts` | Contact form API (Resend) |
| `src/app/sitemap.ts` | Auto-generated sitemap |

## Deployment

See [DEPLOY.md](DEPLOY.md) for the full deployment checklist.
