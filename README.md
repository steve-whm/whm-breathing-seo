# WHM Breathing Page — Optimisation Report

Interactive web report for the Wim Hof Method breathing page optimisation project.

## Deploy to Vercel in 3 steps

### Option A — Import from GitHub (recommended)

1. Push this folder to a new GitHub repository (public or private)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Select "Import Git Repository" → choose your repo
4. Vercel auto-detects Next.js — click **Deploy**

Done. Your report will be live at a `.vercel.app` URL in ~60 seconds.

### Option B — Vercel CLI

```bash
npm i -g vercel
cd whm-report
vercel
```

Follow the prompts. Works without a GitHub account.

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project structure

```
whm-report/
├── pages/
│   ├── _app.jsx          # App wrapper
│   └── index.jsx         # Main report page (all 8 sections)
├── components/
│   ├── Sidebar.jsx        # Sticky navigation with scroll spy
│   ├── ui.jsx             # Shared UI components
│   ├── BreathingBubble.jsx # Interactive guided breathing session
│   ├── CTRChart.jsx        # Desktop CTR opportunity bar chart
│   ├── DeviceChart.jsx     # Device breakdown pie chart
│   └── WireframeMockup.jsx # Interactive page wireframe with tabs
├── data/
│   └── report.js          # All report data in one place
├── styles/
│   └── globals.css
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## What's inside

- **Section 01** — Executive summary with three key findings
- **Section 02** — Search Console data analysis with interactive charts (device breakdown, CTR opportunity)
- **Section 03** — Current page audit (scores + issue cards)
- **Section 04** — SEO fixes with copy-ready title tag, meta description, and HowTo schema JSON-LD
- **Section 05** — Conversion strategy with interactive breathing bubble demo
- **Section 06** — Full page redesign with tabbed interactive wireframe (sections A–I)
- **Section 07** — Master action list with priority levels and effort ratings
- **Section 08** — Appendix with full query data and next steps timeline

---

## Customisation

All report data lives in `data/report.js` — update numbers, copy, or recommendations there without touching the page components.

To add a password/auth layer before sharing externally, Vercel supports [Password Protection](https://vercel.com/docs/security/deployment-protection) on Pro plans.

---

*Prepared May 2026 · Confidential*
