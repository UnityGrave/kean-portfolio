# Setup Instructions

## Quick Start

### 1. Install Dependencies (First Time)
```bash
npm install --legacy-peer-deps
```

### 2. Add Your Files

**Profile Photo:**
- Place your profile photo at: `public/images/profile.jpg`
- Recommended size: 320x320px
- If not provided, the placeholder SVG with "KG" initials will be used
- Supported formats: JPG, PNG, WebP

**Resume/CV PDF:**
- Place your CV at: `public/KeanGenota-IT-Intern.pdf`
- The resume page will display and allow downloading this PDF
- If not provided, the page will show a placeholder message

### 3. Run Development Server
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production
```bash
npm run build
npm start
```

## File Checklist

- [ ] `package.json` — Dependencies installed
- [ ] `app/layout.tsx` — Root layout
- [ ] `app/globals.css` — Global styles
- [ ] `app/page.tsx` — Home page
- [ ] `app/skills/page.tsx` — Skills page
- [ ] `app/experience/page.tsx` — Experience timeline
- [ ] `app/projects/page.tsx` — Projects grid
- [ ] `app/projects/[slug]/page.tsx` — Individual project pages
- [ ] `app/resume/page.tsx` — Resume viewer
- [ ] `app/contact/page.tsx` — Contact section
- [ ] `components/side-nav.tsx` — Navigation sidebar
- [ ] `components/music-widget.tsx` — Spotify widget
- [ ] `components/project-card.tsx` — Project card component
- [ ] `lib/projects.ts` — Project data
- [ ] `public/images/profile.jpg` — Your profile photo (OPTIONAL — add this)
- [ ] `public/KeanGenota-IT-Intern.pdf` — Your CV (OPTIONAL — add this)
- [ ] `tailwind.config.ts` — Tailwind config
- [ ] `tsconfig.json` — TypeScript config
- [ ] `next.config.ts` — Next.js config

## Customization

### Update Personal Information

**Home Page** (`app/page.tsx`):
- Change name, title, bio
- Update social links
- Modify featured skills

**Skills Page** (`app/skills/page.tsx`):
- Add/remove skill categories
- Update skill lists
- Modify accent colors

**Experience Page** (`app/experience/page.tsx`):
- Add work experience entries
- Update education details
- Add accomplishments and awards

**Projects** (`lib/projects.ts`):
- Add new projects to the `projects` array
- Update project names, descriptions, and links
- Change project accent colors (orange, blue, green)

**Contact** (`app/contact/page.tsx`):
- Update email addresses
- Change phone number
- Update LinkedIn and GitHub URLs

### Design Customization

**Colors** (`tailwind.config.ts` and `app/globals.css`):
- `--accent-orange: #d97757` — Primary CTA color
- `--accent-blue: #6a9bcc` — Secondary accent
- `--accent-green: #788c5d` — Tertiary accent
- `--background: #141413` — Dark background
- `--foreground: #faf9f5` — Light text

**Fonts** (imported in `app/globals.css`):
- **Poppins** — Headings
- **Lora** — Body text

## Deployment

### Deploy to Vercel

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Select your GitHub repository
   - Click "Deploy"

Your portfolio will be live immediately\!

### Other Deployment Options

- **Netlify**: Similar to Vercel, supports Next.js
- **Railway**: Simple deployment with git integration
- **Self-hosted**: Build and run on any Node.js server

## Troubleshooting

### Port Already in Use
If port 3000 is in use:
```bash
npm run dev -- -p 3001
```

### Dependencies Install Error
Try with legacy peer deps flag:
```bash
npm install --legacy-peer-deps
```

### Clear Cache and Reinstall
```bash
rm -rf .next node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
```

### Profile Image Not Loading
- Check file is at `public/images/profile.jpg`
- Verify image dimensions (recommended: 320x320)
- Rebuild: `npm run build && npm start`

### Resume PDF Not Displaying
- Ensure PDF is at `public/KeanGenota-IT-Intern.pdf`
- Try downloading directly to test PDF works
- Check file size (should be < 10MB)

## Support

For Next.js questions: https://nextjs.org/docs
For Tailwind questions: https://tailwindcss.com/docs
For deployment issues: Check your hosting provider's documentation

---

Your portfolio is ready\! 🚀
