export const meta = {
  title: 'Breathing Page Optimisation Report',
  url: 'wimhofmethod.com/breathing-exercises',
  date: 'May 2026',
  period: 'Last 3 months',
}

export const summaryStats = [
  { value: '17,448', label: 'Clicks / quarter', color: 'teal' },
  { value: '0.55%',  label: 'Overall page CTR',  color: 'danger' },
  { value: '2.13M',  label: 'Desktop impressions', color: 'info' },
  { value: '9.1%',   label: 'Anxiety query CTR',  color: 'success' },
]

export const devices = [
  { device: 'Mobile',  clicks: 8700,  share: 71.4, impressions: 430068,   ctr: 2.02, position: 5.24 },
  { device: 'Desktop', clicks: 3280,  share: 26.9, impressions: 2130153,  ctr: 0.15, position: 7.52 },
  { device: 'Tablet',  clicks: 205,   share: 1.7,  impressions: 8667,     ctr: 2.37, position: 5.87 },
]

export const ctrOpportunity = [
  { scenario: '0.15% — current',     clicks: 3280,   additional: 0,      label: 'Structural problem' },
  { scenario: '1.0% — minimum fix',  clicks: 21302,  additional: 18022,  label: 'Realistic with title/meta fix' },
  { scenario: '3.0% — industry avg', clicks: 63905,  additional: 60625,  label: 'Achievable with schema fix' },
  { scenario: '5.0% — strong',       clicks: 106508, additional: 103228, label: 'With featured snippet' },
]

export const topQueries = [
  { query: 'wim hof breathing',                    clicks: 4620, impressions: 124385, ctr: '3.71%', position: 2.77,  signal: 'Should be 15%+ at pos 2',  flag: 'warn' },
  { query: 'wim hof breathing method',             clicks: 1736, impressions: 29124,  ctr: '5.96%', position: 1.79,  signal: 'Should be 20%+ at pos 1',  flag: 'warn' },
  { query: 'wim hof breathing technique',          clicks: 602,  impressions: 12352,  ctr: '4.87%', position: 1.94,  signal: 'Should be 20%+ at pos 1',  flag: 'warn' },
  { query: 'wim hof method',                       clicks: 497,  impressions: 28015,  ctr: '1.77%', position: 2.47,  signal: 'Severely underperforming',  flag: 'danger' },
  { query: 'wim hof',                              clicks: 433,  impressions: 92017,  ctr: '0.47%', position: 9.87,  signal: 'Ranking too low',          flag: 'danger' },
  { query: 'wim hof guided breathing',             clicks: 108,  impressions: 5251,   ctr: '2.06%', position: 3.17,  signal: 'Low for pos 3',            flag: 'warn' },
  { query: 'breathing exercise',                   clicks: 51,   impressions: 74145,  ctr: '0.07%', position: 10.98, signal: 'Content gap',              flag: 'danger' },
  { query: 'wim hof breathing for anxiety',        clicks: 48,   impressions: 577,    ctr: '8.32%', position: 1.89,  signal: 'High intent — serve this', flag: 'success' },
  { query: 'breathwork',                           clicks: 36,   impressions: 8529,   ctr: '0.42%', position: 12.24, signal: 'Generic — improve ranking',flag: 'info' },
  { query: 'wim hof breathing benefits',           clicks: 24,   impressions: 2698,   ctr: '0.89%', position: 6.54,  signal: 'Below potential',          flag: 'warn' },
  { query: 'is wim hof breathing good for anxiety',clicks: 17,   impressions: 107,    ctr: '15.89%',position: 2.33,  signal: 'Anxiety audience: top CTR',flag: 'success' },
  { query: 'how to do wim hof breathing method',   clicks: 13,   impressions: 111,    ctr: '11.71%',position: 1.16,  signal: 'HowTo schema candidate',   flag: 'success' },
]

export const anxietyQueries = [
  { query: 'wim hof breathing for anxiety',          clicks: 48, impressions: 577, ctr: '8.32%',  position: 1.89 },
  { query: 'is wim hof breathing good for anxiety',  clicks: 17, impressions: 107, ctr: '15.89%', position: 2.33 },
  { query: 'wim hof anxiety',                        clicks: 13, impressions: 126, ctr: '10.32%', position: 3.19 },
  { query: 'does wim hof breathing help anxiety',    clicks: 6,  impressions: 53,  ctr: '11.32%', position: 1.49 },
  { query: 'wim hof method for anxiety',             clicks: 3,  impressions: 25,  ctr: '12.00%', position: 2.32 },
]

export const searchAppearance = [
  { type: 'Review snippet',    clicks: 15727, impressions: 2796629, ctr: '0.56%', position: 6.80, note: 'Prime suspect for desktop CTR failure' },
  { type: 'Translated results',clicks: 949,   impressions: 105798,  ctr: '0.90%', position: 6.64, note: 'Healthy — multilingual working' },
  { type: 'Videos',            clicks: 0,     impressions: 8,       ctr: '0.00%', position: 4.62, note: 'Minimal — not a priority' },
]

export const scores = [
  { area: 'SEO health',         score: 'C+', color: 'danger',  issue: 'Weak meta, no HowTo schema, broken desktop snippet' },
  { area: 'Conversion clarity', score: 'D+', color: 'danger',  issue: 'Mini class CTA appears once, no anxiety section' },
  { area: 'Design consistency', score: 'C',  color: 'warning', issue: 'Does not match homepage visual language or components' },
  { area: 'Content quality',    score: 'B+', color: 'success', issue: 'Strong content — needs structural and visual upgrade' },
]

export const issues = [
  { area: 'Design',     title: 'Hero section is doing no work',          body: 'The page opens with a stacked image and text block that buries the emotional hook in paragraph two. No full-bleed visual, no transformation-led headline, no immediate dual CTA. The homepage opens with cinema-grade imagery and a bold promise. This page does not.' },
  { area: 'Design',     title: 'Step-by-step section lacks visual drama', body: 'The four breathing steps are rendered as a basic list with small icons. This is the most important instructional section on the page and deserves a bold numbered card layout with large amber step numbers, contained cards, and phase badges — matching the homepage pillar cards.' },
  { area: 'Design',     title: 'Breathing Bubble is orphaned mid-page',   body: 'The Bubble is one of the most powerful engagement tools on the page, yet it sits mid-page with no inviting copy and takes users to YouTube — where the algorithm recommends competitor content. It needs its own dark-background "Practice now" section.' },
  { area: 'Design',     title: 'Benefits are a flat bulleted list',        body: 'Six strong benefit points are presented as hyperlinks in a plain bullet list. These deserve the hexagonal icon card layout used for the three pillars on the homepage.' },
  { area: 'Conversion', title: 'Free Mini Class CTA appears once, buried', body: 'The mini class — a proven lead magnet — appears as a single link in paragraph four and never again. High-performing pages repeat the primary CTA 3–5 times at strategic scroll moments.' },
  { area: 'Conversion', title: 'No social proof near conversion points',   body: '"Hundreds of thousands of people" is mentioned once in passing. Trust signals (3.5M+ practitioners, 24 peer-reviewed studies, app rating) need to sit adjacent to CTAs, not buried in body copy.' },
  { area: 'SEO',        title: 'H1 is too generic',                        body: 'Current H1: "Breathing Exercises." Recommended: "Wim Hof Breathing: How to Practice the Method" — includes the top query phrase, establishes authority, and signals intent to search engines.' },
  { area: 'SEO',        title: 'Meta description is weak and generic',     body: 'Current copy has no urgency and no brand differentiation. The recommended version in Section 04 includes the primary query phrase, the anxiety hook (highest-CTR intent signal), social proof, and a CTA.' },
  { area: 'SEO',        title: 'No HowTo schema markup',                   body: 'The 4-step technique is a perfect candidate for HowTo schema. This makes Google eligible to display rich step results in the SERP — dramatically increasing CTR for how-to intent queries. Two hours of developer time, disproportionate SEO return.' },
  { area: 'SEO',        title: 'OG image is portrait format and undersized', body: 'The og:image is 378x419px — portrait. Every social share of this URL appears broken or cropped on LinkedIn, Facebook, and Slack. Standard is 1200x630px landscape.' },
]

export const designSections = [
  { letter: 'A', title: 'Hero section',       tag: 'Critical redesign',      desc: 'Full-bleed deep teal background with photography. Headline: "The breathing technique that changes everything." Trust bar beneath using exact homepage language. Dual CTA: amber button "Learn the technique ↓" scrolls to steps; ghost button "Try the Free Mini Class →" goes to funnel. Reassurance: "3 free video lessons · No credit card required."' },
  { letter: 'B', title: 'Stats bar',          tag: 'Add social proof',        desc: 'Four stats in a white bar beneath the hero: 21 World records / 24 Peer-reviewed studies / 3.5M+ Active practitioners / 4.8★ App Store rating. Matches homepage stats bar layout exactly. Confirm app rating before publishing.' },
  { letter: 'C', title: 'How-to steps',       tag: 'Visual upgrade',          desc: 'Four steps in a card grid matching homepage pillar card style. Large amber step numbers, teal all-caps phase badge (Prepare / Breathe / Hold / Recover), bold step title, body copy. Safety disclaimer styled as a distinct amber-bordered advisory box above the steps — not hidden in body copy.' },
  { letter: 'D', title: 'Breathing Bubble',   tag: 'Reframe as "Practice now"', desc: 'Dark teal background section titled "Try it right now." Breathing Bubble centred, language strip below, language pills showing available translations. App CTA immediately after: "Want more control? Download the app →". Add rel=0 to YouTube embed to prevent competitor recommendations.' },
  { letter: 'E', title: 'Anxiety section',    tag: 'New — data-driven',       desc: 'Justified entirely by Search Console data showing 9.1% avg CTR on anxiety queries. H2: "Breathing exercises for anxiety and stress." Split layout: mechanism explanation + bulleted benefits left, testimonial quote card right. Mini class CTA framed specifically for this audience.' },
  { letter: 'F', title: 'Free Mini Class',    tag: 'Mirror homepage layout',  desc: 'Dark teal section mirroring the homepage mini class section exactly: image/thumbnail left, copy right, amber button, reassurance copy below. Positioned mid-page after the Bubble to capture peak-engagement visitors. Headline: "Experience all three pillars — free."' },
  { letter: 'G', title: 'Benefits grid',      tag: 'Icon card upgrade',       desc: 'Six benefit cards in a 3×2 grid using the hexagonal icon container style from the homepage pillar cards. Teal icon, bold title, short descriptor. Each card links to its dedicated page. Replaces the current plain bulleted link list.' },
  { letter: 'H', title: 'App section',        tag: 'Product moment upgrade',  desc: 'Dark teal background. Split layout: feature list + App Store/Google Play buttons + star rating on left; app screen preview on right. Feature list highlights customisation (what YouTube cannot offer). App rating badge adjacent to download buttons.' },
  { letter: 'I', title: 'Community stories',  tag: 'Match homepage Stories',  desc: 'Dark teal background, card format matching the homepage Stories section. Lead with anxiety/stress testimonial first — serves the dominant audience need revealed by the data. Two stories in a 2-column grid. "Read more stories" ghost button links to testimonials page.' },
]

export const actions = [
  { priority: 'Urgent',      color: 'danger',  title: 'Check and fix desktop SERP snippet',      effort: '2–4 hrs', desc: 'Search "wim hof breathing" on desktop Chrome. Screenshot the result. If review snippet looks wrong, fix or remove review schema. Rewrite title tag and meta description using recommended copy in Section 04.' },
  { priority: 'Urgent',      color: 'danger',  title: 'Replace OG image',                         effort: '1–2 hrs', desc: 'Create 1200×630px landscape image featuring Wim Hof and the method name. Update og:image meta tag. Affects every social share of this URL.' },
  { priority: 'Urgent',      color: 'danger',  title: 'Add HowTo schema markup',                  effort: '2 hrs',   desc: 'Implement JSON-LD HowTo schema using the template in Section 04. Makes the page eligible for rich step results in Google SERP. Highest-ROI technical SEO action on this page.' },
  { priority: 'High impact', color: 'warning', title: 'Add mid-page Free Mini Class section',     effort: 'Medium',  desc: 'Mirror homepage mini class section (image left, copy right, amber button, reassurance text). Position after the Breathing Bubble. Use anxiety-framed copy for the headline.' },
  { priority: 'High impact', color: 'warning', title: 'Add hero CTA for mini class',              effort: '1 hr',    desc: 'Add ghost button "Try the Free Mini Class →" alongside the existing primary CTA. Add reassurance copy below both buttons: "3 free video lessons · No credit card required."' },
  { priority: 'High impact', color: 'warning', title: 'Add FAQ schema',                           effort: '2 hrs',   desc: 'Implement JSON-LD FAQ schema for 4–6 questions. Targets accordion results in Google SERP. Target questions: "how many rounds", "is it safe", "how often should I do it".' },
  { priority: 'High impact', color: 'warning', title: 'Redesign hero to match homepage',          effort: 'High',    desc: 'Full-bleed teal background, transformation headline, trust bar using homepage language, dual CTA with amber primary and ghost secondary button.' },
  { priority: 'High impact', color: 'warning', title: 'Add new anxiety/stress section',           effort: 'Medium',  desc: 'New H2 section "Breathing exercises for anxiety and stress." Mechanism explanation, bulleted benefits, testimonial card, mini class CTA framed for this audience.' },
  { priority: 'High impact', color: 'warning', title: 'Reframe Bubble as "Practice now"',         effort: 'Medium',  desc: 'Dark teal background, "Try it right now" headline, language pills, app CTA immediately below. Add rel=0 to YouTube embed.' },
  { priority: 'High impact', color: 'warning', title: 'Upgrade app section',                      effort: 'Medium',  desc: 'Feature list, App Store/Google Play buttons with branding, star rating badge, phone mockup or screenshot. Position after the Bubble section.' },
  { priority: 'Strategic',   color: 'success', title: 'Convert benefits to icon card grid',       effort: 'Medium',  desc: 'Six cards in 3×2 grid using hexagonal icon style from homepage. Each benefit links to its dedicated page. Replaces current plain bulleted link list.' },
  { priority: 'Strategic',   color: 'success', title: 'Redesign step-by-step section',            effort: 'Medium',  desc: 'Card grid with amber step numbers, phase badges, teal headings. Safety disclaimer as a visually distinct amber-bordered advisory box.' },
  { priority: 'Strategic',   color: 'success', title: 'Add community stories section',            effort: 'Low',     desc: 'Match homepage Stories section. Lead with anxiety testimonial first. Two stories in a 2-column grid. Ghost button links to testimonials page.' },
  { priority: 'Strategic',   color: 'success', title: 'Upgrade stats bar',                        effort: 'Low',     desc: 'Add app rating as fourth stat. Confirm actual app store rating before publishing. Matches homepage stats bar.' },
  { priority: 'Strategic',   color: 'success', title: 'Strengthen internal linking',              effort: '1 hr',    desc: 'Add contextual links to /science, /cold-exposure, and /benefits within body copy. Use descriptive anchor text — not "click here".' },
]

export const nextSteps = [
  { period: 'Week 1–2',          title: 'SERP snippet fix',       desc: 'Fix review schema, rewrite title tag and meta description, replace OG image. Monitor GSC for CTR change within 2–3 weeks.' },
  { period: 'Week 2–4',          title: 'Schema markup',          desc: 'Implement HowTo and FAQ schema. Check Google Search Console for rich result eligibility after 1–2 weeks.' },
  { period: 'Sprint 1',          title: 'Conversion additions',   desc: 'Add mini class section mid-page, hero ghost CTA, new anxiety section. Set up conversion tracking on mini class sign-ups from this page specifically.' },
  { period: 'Sprint 2',          title: 'Full redesign',          desc: 'Hero, steps, app section, benefits grid, stories section. QA on mobile (71% of traffic) before desktop.' },
  { period: '30 days post-launch', title: 'Performance review',   desc: 'Pull fresh Search Console data. Compare desktop CTR, overall CTR, anxiety query impressions, and clicks to mini class. Adjust copy based on data.' },
]

export const howtoSchema = `{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to do Wim Hof Method Breathing",
  "description": "The official 4-step Wim Hof breathing technique.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Get Comfortable",
      "text": "Sit or lie down in a neutral space. Wear loose clothing. Let your belly expand freely."
    },
    {
      "@type": "HowToStep",
      "name": "30 Deep Breaths",
      "text": "Inhale fully through nose or mouth, belly first. Exhale gently without force. 30 breaths in a steady rhythm."
    },
    {
      "@type": "HowToStep",
      "name": "Retention Phase",
      "text": "After the final exhale, hold your breath until you feel the urge to breathe again."
    },
    {
      "@type": "HowToStep",
      "name": "Recovery Breath",
      "text": "Take one deep breath, hold for 15 seconds, then release. That is one round. Repeat 3–4 times."
    }
  ]
}`
