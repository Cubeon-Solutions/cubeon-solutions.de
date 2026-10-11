# Deployment Checklist

Handover document for deploying cubeon-solutions.de to production.

---

## 1. Vercel — Project setup

- [ ] Log in to [vercel.com](https://vercel.com) (or create a free account)
- [ ] Click **Add New Project** → import the `cubeon-solutions.de` GitHub repository
- [ ] Vercel auto-detects Next.js — no build settings need to change
- [ ] Click **Deploy** (first deploy will fail on the contact form until the env var is set — that's fine)
- [ ] Under **Project Settings → Domains**, add `cubeon-solutions.de` and `www.cubeon-solutions.de`
- [ ] Update DNS at your registrar: point the domain to Vercel's nameservers or add the CNAME/A records Vercel shows you
- [ ] Vercel provisions an SSL certificate automatically

---

## 2. Resend — Contact form emails

The contact form sends emails via Resend. Without this, form submissions return a 503 error.

### Account & domain
- [ ] Sign up at [resend.com](https://resend.com) (free tier: 3,000 emails/month)
- [ ] Go to **Domains** → **Add Domain** → enter `cubeon-solutions.de`
- [ ] Add the DNS records Resend provides (SPF, DKIM, DMARC) at your DNS provider
- [ ] Wait for domain verification (usually a few minutes)

### API key
- [ ] Go to **API Keys** → **Create API Key**
- [ ] In Vercel: **Project Settings → Environment Variables** → add:
  - Name: `RESEND_API_KEY`
  - Value: `re_xxxxxxxxxxxx` (your key from Resend)
  - Environment: Production (and optionally Preview)
- [ ] Trigger a redeploy in Vercel so the env var takes effect (**Deployments → Redeploy**)

### Test
- [ ] Fill in the contact form on the live site and confirm the email arrives at `kontakt@cubeon-solutions.de`

---

## 3. WhatsApp Business

The site links to `wa.me/49XXXXXXXXXX` — this placeholder must be replaced before going live.

- [ ] Install the **WhatsApp Business** app on your existing mobile number (iOS / Android)
- [ ] Set up the business profile: company name, description, website (`cubeon-solutions.de`), address
- [ ] Find your number in international format, e.g. `4915112345678` (no `+`, no spaces)
- [ ] Open `src/lib/whatsapp.ts` and replace `49XXXXXXXXXX` with the real number
- [ ] Commit and push — Vercel redeploys automatically

---

## 4. Vercel Analytics

Analytics are already installed in the code (`@vercel/analytics`). No extra steps needed — they activate automatically once the project is live on Vercel.

- [ ] After going live, visit **Vercel Dashboard → Analytics** tab to confirm data is flowing
- [ ] Optionally enable **Speed Insights** in the same tab (also cookie-free)

---

## 5. Final checks

- [ ] Open the live site and click through all pages
- [ ] Test the contact form end-to-end (form → email arrives)
- [ ] Test the WhatsApp link on mobile
- [ ] Check [Google Rich Results Test](https://search.google.com/test/rich-results) on the homepage and one app page
- [ ] Submit `https://cubeon-solutions.de/sitemap.xml` to [Google Search Console](https://search.google.com/search-console)
- [ ] Update the `USt-IdNr` in `src/app/impressum/page.tsx` (currently marked as `[beantragt]`)

## Security checks before deployment

- Run `npm test`, `npm run lint`, `npm run build` and `npm audit --omit=dev`.
- Keep `RESEND_API_KEY` in the hosting environment; never prefix it with `NEXT_PUBLIC_`.
- Deploy the application through the framework build, not by serving the repository root.
- `.private/` contains local unpublished reference material and must stay out of Git and deployment uploads. `enabled: false` hides a reference on the website but does not make its source code private.
- The contact endpoint limits requests to 3 per email address and 30 total per 15 minutes **per running server instance**. Counters reset on restart and are not shared between instances. For distributed spam protection, configure a hosting WAF rule for POST `/api/contact` or a shared rate-limit store.
- Production contact requests accept the two Cubeon main-domain origins. Add an explicitly trusted preview origin before testing the form on another domain.
- On 2026-10-12, production dependencies passed npm audit. The development-only ESLint dependency chain still reported 5 high findings caused by `braces` (GHSA-vfj7-8cjw-p6xm), with no patched release available. Do not apply the suggested major ESLint/Next downgrade. Recheck when an upstream fix is available.
