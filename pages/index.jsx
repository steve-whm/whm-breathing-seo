import Head from 'next/head'
import dynamic from 'next/dynamic'
import Sidebar from '../components/Sidebar'
import { Section, SectionLabel, SectionTitle, StatCard, DataTable, CodeBlock, Callout, IssueCard, ActionRow } from '../components/ui'
import { meta, summaryStats, topQueries, anxietyQueries, searchAppearance, scores, issues, designSections, actions, nextSteps, howtoSchema } from '../data/report'

const CTRChart       = dynamic(() => import('../components/CTRChart'),       { ssr: false })
const DeviceChart    = dynamic(() => import('../components/DeviceChart'),    { ssr: false })
const WireframeMockup = dynamic(() => import('../components/WireframeMockup'), { ssr: false })
const BreathingBubble = dynamic(() => import('../components/BreathingBubble'), { ssr: false })

export default function Report() {
  return (
    <>
      <Head>
        <title>WHM Breathing Page — Optimisation Report</title>
        <meta name="description" content="Design, SEO and conversion optimisation report for wimhofmethod.com/breathing-exercises" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />

      <main className="md:pl-56">

        {/* ── COVER ─────────────────────────────────────────── */}
        <div className="relative min-h-64 flex flex-col justify-end px-8 py-10 md:py-14"
             style={{ background: 'linear-gradient(160deg, #1e4d63 0%, #1a3d4f 50%, #0d2b38 100%)' }}>
          <div className="max-w-4xl">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#f5a623' }}>
              Wim Hof Method
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
              Breathing Page<br/>Optimisation Report
            </h1>
            <p className="text-blue-200 text-sm mb-4">{meta.url}</p>
            <div className="h-px w-24 mb-4" style={{ background: '#f5a623' }} />
            <p className="text-white/50 text-xs">
              {meta.date} · Design, SEO & Conversion Optimisation · Confidential
            </p>
          </div>
        </div>

        {/* ── 01 EXECUTIVE SUMMARY ──────────────────────────── */}
        <section id="executive" className="py-12 px-6 md:px-10 bg-offwhite">
          <div className="max-w-5xl mx-auto">
            <SectionLabel>Section 01</SectionLabel>
            <SectionTitle>Executive Summary</SectionTitle>
            <p className="text-sm text-gray-500 mb-8">Three findings that demand immediate attention</p>

            <div className="space-y-4 mb-10">
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <p className="font-bold text-sm text-red-800 mb-2">
                  Desktop CTR: 0.15% vs mobile 2.02% — a 13× gap
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  With 2.13M desktop impressions per quarter, a CTR of 0.15% is not a small gap — it is a structural failure. Fixing the SERP snippet alone (title tag, meta description, and review schema) could add 18,000–60,000 desktop clicks per quarter without any new rankings or content. This is the single highest-leverage action in this report.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <p className="font-bold text-sm text-amber-800 mb-2">
                  The Free Mini Class appears once, buried in paragraph four
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  The mini class is a proven lead magnet with high open rates and strong conversion to paid. Yet on a page receiving 17,448 clicks per quarter, the CTA appears once in the intro and never again. Adding a mid-page section matched to the homepage style could significantly move sign-up volume with no SEO work required.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <p className="font-bold text-sm text-green-800 mb-2">
                  The anxiety audience converts at double the average — and is being ignored
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Search Console data reveals anxiety-related queries convert at 9.1% CTR — nearly double the page average. This is the most receptive new-visitor cohort and the page has almost nothing for them. One dedicated section with a mini class CTA framed for stress relief is a high-confidence improvement.
                </p>
              </div>
            </div>

            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#c47d0a' }}>
              Opportunity in numbers
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {summaryStats.map((st, i) => (
                <StatCard key={i} value={st.value} label={st.label} color={st.color} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 02 SEARCH CONSOLE DATA ────────────────────────── */}
        <section id="data" className="py-12 px-6 md:px-10 bg-white">
          <div className="max-w-5xl mx-auto">
            <SectionLabel>Section 02</SectionLabel>
            <SectionTitle>Search Console Data Analysis</SectionTitle>
            <p className="text-sm text-gray-500 mb-8">Data period: last 3 months · Source: Google Search Console</p>

            <h3 className="font-bold text-sm mb-3" style={{ color: '#1a3d4f' }}>Device breakdown</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Mobile drives 71.4% of clicks with a healthy 2.02% CTR. Desktop accounts for 26.9% of clicks despite receiving more than four times the impressions — because its CTR of 0.15% is catastrophically low. This is not a content or ranking problem. It is a SERP snippet problem.
            </p>
            <DeviceChart />

            <h3 className="font-bold text-sm mt-8 mb-3" style={{ color: '#1a3d4f' }}>Desktop CTR opportunity</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              At the current 0.15% desktop CTR, the page generates 3,280 desktop clicks per quarter. Fixing the snippet is the single action with the most disproportionate return of anything in this report.
            </p>
            <CTRChart />

            <h3 className="font-bold text-sm mt-8 mb-3" style={{ color: '#1a3d4f' }}>Top queries — breathing page</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The page is dominated by branded Wim Hof queries. The top query drives 4,620 clicks but at only 3.71% CTR despite ranking at position 2.77 — well below the 15%+ expected at that position.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-xs">
                <thead>
                  <tr style={{ background: '#1a3d4f' }}>
                    {['Query', 'Clicks', 'Impressions', 'CTR', 'Position', 'Signal'].map(h => (
                      <th key={h} className="text-left text-white font-semibold px-3 py-2.5">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {topQueries.map((q, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-offwhite'}>
                      <td className="px-3 py-2 font-medium text-gray-800">{q.query}</td>
                      <td className="px-3 py-2 text-gray-600">{q.clicks.toLocaleString()}</td>
                      <td className="px-3 py-2 text-gray-600">{q.impressions.toLocaleString()}</td>
                      <td className="px-3 py-2 text-gray-600">{q.ctr}</td>
                      <td className="px-3 py-2 text-gray-600">{q.position}</td>
                      <td className={`px-3 py-2 font-semibold ${
                        q.flag === 'danger'  ? 'text-red-700' :
                        q.flag === 'warn'    ? 'text-amber-700' :
                        q.flag === 'success' ? 'text-green-700' : 'text-blue-700'
                      }`}>{q.signal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout type="danger" title="The review snippet is the prime suspect">
              89.8% of impressions (2.79M) are displaying as "Review snippets" with a CTR of just 0.56%. Search "wim hof breathing" on desktop Chrome right now and screenshot the result. If a star rating appears and looks low or renders oddly, this review schema must be fixed or removed immediately — it is almost certainly the cause of the desktop CTR failure.
            </Callout>

            <h3 className="font-bold text-sm mt-8 mb-3" style={{ color: '#1a3d4f' }}>The anxiety audience signal</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Anxiety queries have an average CTR of 9.1% — nearly double the overall page average. These visitors are searching with urgency and clicking immediately when they see a relevant result.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-xs">
                <thead>
                  <tr style={{ background: '#1a3d4f' }}>
                    {['Query', 'Clicks', 'Impressions', 'CTR', 'Position'].map(h => (
                      <th key={h} className="text-left text-white font-semibold px-3 py-2.5">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {anxietyQueries.map((q, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-offwhite'}>
                      <td className="px-3 py-2 font-medium text-gray-800">{q.query}</td>
                      <td className="px-3 py-2 text-gray-600">{q.clicks}</td>
                      <td className="px-3 py-2 text-gray-600">{q.impressions}</td>
                      <td className="px-3 py-2 font-bold text-green-700">{q.ctr}</td>
                      <td className="px-3 py-2 text-gray-600">{q.position}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 03 AUDIT ──────────────────────────────────────── */}
        <section id="audit" className="py-12 px-6 md:px-10 bg-offwhite">
          <div className="max-w-5xl mx-auto">
            <SectionLabel>Section 03</SectionLabel>
            <SectionTitle>Current Page Audit</SectionTitle>
            <p className="text-sm text-gray-500 mb-8">Scores based on review of live page and Search Console data</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
              {scores.map((sc, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                  <p className={`text-3xl font-bold font-serif mb-1 ${
                    sc.color === 'danger'  ? 'text-red-700' :
                    sc.color === 'warning' ? 'text-amber-700' : 'text-green-700'
                  }`}>{sc.score}</p>
                  <p className="text-xs font-semibold text-gray-700 mb-1">{sc.area}</p>
                  <p className="text-xs text-gray-400 leading-snug">{sc.issue}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {issues.map((iss, i) => <IssueCard key={i} {...iss} />)}
            </div>
          </div>
        </section>

        {/* ── 04 SEO FIXES ──────────────────────────────────── */}
        <section id="seo" className="py-12 px-6 md:px-10 bg-white">
          <div className="max-w-5xl mx-auto">
            <SectionLabel>Section 04</SectionLabel>
            <SectionTitle>SEO Fixes</SectionTitle>
            <p className="text-sm text-gray-500 mb-8">Technical brief for developer / SEO team</p>

            <h3 className="font-bold text-sm mb-2" style={{ color: '#1a3d4f' }}>Title tag rewrite</h3>
            <p className="text-xs text-gray-500 mb-1">Current</p>
            <CodeBlock>Breathing Exercises | Wim Hof Method</CodeBlock>
            <p className="text-xs text-gray-500 mb-1 mt-3">Recommended</p>
            <CodeBlock>Wim Hof Breathing: How to Practice the Method | Official</CodeBlock>
            <p className="text-sm text-gray-500 leading-relaxed mt-2 mb-8">
              The top query driving 4,620 clicks is "wim hof breathing." The current title does not lead with this phrase. The new title matches primary search intent, includes the brand name, and adds "Official" to distinguish from copycat content.
            </p>

            <h3 className="font-bold text-sm mb-2" style={{ color: '#1a3d4f' }}>Meta description rewrite</h3>
            <p className="text-xs text-gray-500 mb-1">Current</p>
            <CodeBlock>Learn how practicing breathing exercises helps keep down stress, improve sleep, and do many other things for your health & wellbeing.</CodeBlock>
            <p className="text-xs text-gray-500 mb-1 mt-3">Recommended</p>
            <CodeBlock>The Wim Hof breathing technique in 4 steps — proven to reduce stress, calm anxiety, and boost immunity. Used by millions worldwide. Try the guided session free today.</CodeBlock>
            <p className="text-sm text-gray-500 leading-relaxed mt-2 mb-8">
              Includes the primary query phrase in the first sentence, references anxiety (the highest-CTR intent signal from the data), adds social proof, and ends with an action-oriented CTA. 153 characters — within Google's limit.
            </p>

            <h3 className="font-bold text-sm mb-2" style={{ color: '#1a3d4f' }}>HowTo schema markup — copy into page head</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Add this JSON-LD block to the page head. This makes the page eligible for rich step results in Google SERP — the highest-ROI technical SEO action on this page.
            </p>
            <CodeBlock>{howtoSchema}</CodeBlock>

            <div className="mt-8 space-y-4">
              {[
                ['Check and fix review schema / SERP snippet', 'Search "wim hof breathing" on desktop Chrome. Screenshot the result. If a star rating appears and looks low or renders badly, remove or correct the review schema. This is the most urgent action in the entire document.'],
                ['Replace OG image with 1200×630px landscape asset', 'Current og:image is 378×419px portrait — renders broken on social shares. Create a 1200×630px landscape image featuring Wim Hof and the method name.'],
                ['Add FAQ schema for 4–6 common questions', 'Target: "how many rounds of wim hof breathing", "is wim hof breathing safe", "how often should I do it". FAQ schema expands SERP real estate with accordion results.'],
                ['Add rel=0 to YouTube embeds', 'Add ?rel=0 to all YouTube embed URLs to suppress recommended competitor videos after playback.'],
                ['Strengthen internal linking', 'Add contextual links to /science, /cold-exposure, and /benefits within body copy. Use descriptive anchor text — not "click here".'],
              ].map(([title, body], i) => (
                <div key={i} className="border-l-2 pl-4" style={{ borderColor: '#f5a623' }}>
                  <p className="font-semibold text-sm mb-1" style={{ color: '#1a3d4f' }}>{title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05 CONVERSION ─────────────────────────────────── */}
        <section id="conversion" className="py-12 px-6 md:px-10 bg-offwhite">
          <div className="max-w-5xl mx-auto">
            <SectionLabel>Section 05</SectionLabel>
            <SectionTitle>Conversion Strategy</SectionTitle>
            <p className="text-sm text-gray-500 mb-8">Free Mini Class · App downloads · Lead nurture</p>

            <h3 className="font-bold text-sm mb-3" style={{ color: '#1a3d4f' }}>Mini Class — four CTA placements</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              The mini class funnel is proven. The breathing page receives 17,448 clicks per quarter and currently drives almost none of that traffic into the funnel. The gap is positioning and copy, not the offer itself.
            </p>

            <div className="space-y-3">
              {[
                ['Placement 1 — Hero (above fold)', 'Second CTA button alongside "Learn the technique". Label: "Try the Free Mini Class →". Captures visitors who already know what they want before they scroll.'],
                ['Placement 2 — Post-Bubble (mid-page, highest value)', 'After someone tries the Breathing Bubble they are at peak physiological engagement. A dedicated dark-teal section mirroring the homepage mini class layout exactly should read: "You\'ve learned the technique. Now experience all three pillars — free."'],
                ['Placement 3 — Anxiety section (new, data-driven)', 'CTA framed for the anxiety audience: "Struggling with stress or anxiety? Thousands use the Wim Hof method daily to reclaim calm. Try it free — immediate access." This serves the highest-CTR cohort in the data.'],
                ['Placement 4 — End of page', 'Final CTA before the footer. A simple repeat of the orange button with reassurance text is sufficient.'],
              ].map(([title, body], i) => (
                <div key={i} className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="font-bold text-sm mb-1" style={{ color: '#c47d0a' }}>{title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            <h3 className="font-bold text-sm mt-8 mb-3" style={{ color: '#1a3d4f' }}>Mini class copy direction</h3>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-xs">
                <thead>
                  <tr style={{ background: '#1a3d4f' }}>
                    {['Element', 'Current', 'Recommended'].map(h => (
                      <th key={h} className="text-left text-white font-semibold px-3 py-2.5">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['CTA button label',  'Try the FREE Mini Class',  'Start the free Mini Class →'],
                    ['Supporting copy',   '(none)',                   '3 lessons · ~10 min each · no credit card required'],
                    ['Value proposition', '(none)',                   'Breathe along with Wim. Feel it immediately.'],
                    ['Anxiety frame',     '(none)',                   'Stressed or anxious? This was built for exactly this.'],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-offwhite'}>
                      <td className="px-3 py-2 font-medium text-gray-700">{row[0]}</td>
                      <td className="px-3 py-2 text-gray-400 italic">{row[1]}</td>
                      <td className="px-3 py-2 font-semibold text-green-700">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout type="info" title="Try the interactive breathing session below">
              This demonstrates the guided breathing experience that lives on the page. After a visitor tries this, they are primed for the mini class CTA. Position the CTA section immediately below.
            </Callout>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <BreathingBubble />
            </div>
          </div>
        </section>

        {/* ── 06 REDESIGN ───────────────────────────────────── */}
        <section id="redesign" className="py-12 px-6 md:px-10 bg-white">
          <div className="max-w-5xl mx-auto">
            <SectionLabel>Section 06</SectionLabel>
            <SectionTitle>Page Redesign</SectionTitle>
            <p className="text-sm text-gray-500 mb-8">Section-by-section breakdown matched to homepage design system</p>

            <h3 className="font-bold text-sm mb-3" style={{ color: '#1a3d4f' }}>Homepage design tokens</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                ['#1a3d4f', 'Deep teal', 'Dark sections, hero, nav'],
                ['#f5a623', 'Amber', 'CTAs, labels, step numbers'],
                ['#f8f6f2', 'Off-white', 'Alternating light sections'],
                ['Georgia', 'Serif font', 'All headlines h1–h3'],
              ].map(([val, name, use], i) => (
                <div key={i} className="bg-offwhite border border-gray-200 rounded-xl p-3">
                  {val.startsWith('#') ? (
                    <div className="w-8 h-8 rounded-lg mb-2 border border-gray-200"
                         style={{ background: val }} />
                  ) : (
                    <div className="w-8 h-8 rounded-lg mb-2 border border-gray-200 bg-white flex items-center justify-center font-serif text-sm font-bold text-gray-700">Aa</div>
                  )}
                  <p className="font-bold text-xs text-gray-800">{name}</p>
                  <p className="text-xs text-gray-400">{use}</p>
                </div>
              ))}
            </div>

            <h3 className="font-bold text-sm mb-2" style={{ color: '#1a3d4f' }}>Interactive section walkthrough</h3>
            <p className="text-sm text-gray-500 mb-2">Click each tab to preview the redesigned section and read the implementation notes.</p>
            <WireframeMockup />

            <h3 className="font-bold text-sm mt-6 mb-4" style={{ color: '#1a3d4f' }}>All sections at a glance</h3>
            <div className="space-y-2">
              {designSections.map((ds, i) => (
                <div key={i} className="flex gap-0 rounded-xl overflow-hidden border border-gray-200">
                  <div className="w-10 flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
                       style={{ background: '#1a3d4f' }}>
                    {ds.letter}
                  </div>
                  <div className="flex-1 bg-white px-4 py-3">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <p className="font-semibold text-sm" style={{ color: '#1a3d4f' }}>{ds.title}</p>
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                            style={{ background: '#faeeda', color: '#c47d0a' }}>{ds.tag}</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{ds.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 07 ACTIONS ────────────────────────────────────── */}
        <section id="actions" className="py-12 px-6 md:px-10 bg-offwhite">
          <div className="max-w-5xl mx-auto">
            <SectionLabel>Section 07</SectionLabel>
            <SectionTitle>Master Action List</SectionTitle>
            <p className="text-sm text-gray-500 mb-6">Every recommendation prioritised by impact and effort</p>

            <Callout type="info" title="How to read this list">
              Urgent = do this week, developer time under 4 hours. High impact = do this sprint. Strategic = plan for next cycle. Effort ratings are relative.
            </Callout>

            <div className="bg-white border border-gray-200 rounded-2xl p-5 mt-4">
              {actions.map((a, i) => <ActionRow key={i} {...a} />)}
            </div>
          </div>
        </section>

        {/* ── 08 APPENDIX ───────────────────────────────────── */}
        <section id="appendix" className="py-12 px-6 md:px-10 bg-white">
          <div className="max-w-5xl mx-auto">
            <SectionLabel>Section 08</SectionLabel>
            <SectionTitle>Appendix</SectionTitle>
            <p className="text-sm text-gray-500 mb-8">Full query data · Search appearance · Next steps</p>

            <h3 className="font-bold text-sm mb-3" style={{ color: '#1a3d4f' }}>Search appearance breakdown</h3>
            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
              <table className="w-full text-xs">
                <thead>
                  <tr style={{ background: '#1a3d4f' }}>
                    {['Appearance type', 'Clicks', 'Impressions', 'CTR', 'Avg position', 'Note'].map(h => (
                      <th key={h} className="text-left text-white font-semibold px-3 py-2.5">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {searchAppearance.map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-offwhite'}>
                      <td className="px-3 py-2 font-medium text-gray-800">{r.type}</td>
                      <td className="px-3 py-2 text-gray-600">{r.clicks.toLocaleString()}</td>
                      <td className="px-3 py-2 text-gray-600">{r.impressions.toLocaleString()}</td>
                      <td className={`px-3 py-2 font-semibold ${r.type === 'Review snippet' ? 'text-red-700' : 'text-gray-600'}`}>{r.ctr}</td>
                      <td className="px-3 py-2 text-gray-600">{r.position}</td>
                      <td className={`px-3 py-2 ${r.type === 'Review snippet' ? 'text-red-700 font-semibold' : 'text-gray-400'}`}>{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-bold text-sm mb-3" style={{ color: '#1a3d4f' }}>Recommended next steps</h3>
            <div className="space-y-2">
              {nextSteps.map((ns, i) => (
                <div key={i} className="flex gap-0 rounded-xl overflow-hidden border border-gray-200">
                  <div className="w-28 flex-shrink-0 bg-offwhite px-3 py-3 flex items-center justify-center text-center">
                    <p className="text-xs font-bold" style={{ color: '#c47d0a' }}>{ns.period}</p>
                  </div>
                  <div className="flex-1 bg-white px-4 py-3">
                    <p className="font-semibold text-sm mb-0.5" style={{ color: '#1a3d4f' }}>{ns.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{ns.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-xs text-gray-400">
                Wim Hof Method · Breathing Page Optimisation Report · {meta.date} · Confidential
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
