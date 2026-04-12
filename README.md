# Kean Angelo L. Genota — Career E-Portfolio

Built with Next.js 14, Tailwind CSS, and Anthropic brand design system.

---

## Quick Setup

### 1. Add your assets

Place these two files in the `public/` folder:

- `public/images/profile.jpg` — your profile photo (the Paris photo works great)
- `public/KeanGenota-IT-Intern.pdf` — your CV PDF (export from Word or use the one already made)

### 2. Push to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/UnityGrave/kean-portfolio.git
git push -u origin main
```

Create the repo at: https://github.com/new
Name: `kean-portfolio` | Private or Public (Public needed for free Vercel)

### 3. Deploy on Vercel

1. Go to https://vercel.com and sign in with GitHub
2. Click **"New Project"**
3. Import `UnityGrave/kean-portfolio`
4. Leave all settings as default — Vercel auto-detects Next.js
5. Click **"Deploy"** ✓

Vercel will give you a URL like `kean-portfolio.vercel.app`.
Every `git push` to main will auto-redeploy.

---

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## Project Structure

```
app/
  page.tsx              → Home / About
  skills/page.tsx       → Skills grid
  experience/page.tsx   → Timeline (work, education, awards)
  projects/page.tsx     → Project cards grid
  projects/[slug]/      → Individual project + GitHub README
  resume/page.tsx       → Inline PDF viewer + download
  contact/page.tsx      → Contact info + form
components/
  side-nav.tsx          → Fixed left sidebar with nav + music widget
  music-widget.tsx      → Spotify J-pop playlist embed
  project-card.tsx      → Hover card linking to project page
lib/
  projects.ts           → All project data (edit here to add/remove projects)
public/
  images/profile.jpg    ← ADD THIS
  KeanGenota-IT-Intern.pdf ← ADD THIS
```

---

## Customising

**Add/edit a project:** Edit `lib/projects.ts`

**Change Spotify playlist:** Edit the embed URL in `components/music-widget.tsx`

**Update contact info:** Edit `app/contact/page.tsx`
