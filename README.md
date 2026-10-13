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

Form enquiries include name, email, message and an optional company name. The company field is validated and included in the notification email when provided.

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
| `src/components/sections/*.tsx` | Homepage sections and their copy |
| `src/app/**/page.tsx` | Page-specific copy, metadata and legal texts |
| `src/lib/data/apps.ts` | App descriptions, features, pricing, screenshots and store links |
| `src/lib/data/services.ts` | Service descriptions, scenarios and scope |
| `src/lib/data/clients.ts` | Client references |
| `src/lib/data/team.ts` | Team profiles |
| `src/lib/seo.ts` | Shared metadata and company/service schemas |
| `src/lib/whatsapp.ts` | WhatsApp number and pre-filled message |
| `src/app/api/contact/route.ts` | Contact form API (Resend) |
| `src/app/sitemap.ts` | Auto-generated sitemap |

## Website-Texte manuell ändern

Texte werden in der jeweiligen Seite oder Komponente bearbeitet. Wiederverwendete Inhalte wie Apps, Leistungen, Referenzen und Teamprofile stehen in den passenden Dateien unter `src/lib/data/`. Die Einstiegstexte finden Sie zum Beispiel in `src/components/sections/Hero.tsx`; Menüs und Fußzeile in `src/components/layout/`.

Die Startseite und die drei Leistungsseiten enthalten keine FAQ-Blöcke. Das Copyright-Jahr wird in `src/components/ui/CopyrightYear.tsx` im Browser ermittelt und bei einem Datumswechsel oder der Rückkehr zum Tab aktualisiert.

Die Drivey-Landingpage enthält ihre deutschen und englischen Texte in `src/app/drivey/DriveyLanding.tsx`. Suchmaschinen-Texte liegen in den jeweiligen Seiten; gemeinsame Unternehmensdaten in `src/lib/seo.ts`. Impressum und Datenschutzerklärungen werden direkt in den entsprechenden Seiten unter `src/app/` gepflegt. Die älteren Markdown- und HTML-Dateien im Ordner `content/` sind keine Inhaltsquelle der aktuellen Next.js-Website.

Für einzelne Formulierungen können Sie im Editor nach dem bisherigen Text suchen. IDs, URLs und Bildpfade in Dateneinträgen nur ändern, wenn Sie den entsprechenden Eintrag bewusst anpassen möchten. Die Reihenfolge der Produktreihe und der Produktübersicht steht als `appOrder` in `src/lib/data/apps.ts`; neue Einträge aus `appsData` werden automatisch ergänzt.

Mit `npm run dev` werden gespeicherte Änderungen direkt in der lokalen Vorschau sichtbar. Eine veröffentlichte Website benötigt anschließend einen neuen Build und ein Deployment. Texte innerhalb von Screenshots, Logos und Store-Badges sind Bestandteil der jeweiligen Bilddateien.

## Deployment

See [DEPLOY.md](DEPLOY.md) for the full deployment checklist.
