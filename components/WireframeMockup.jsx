import { useState } from 'react'

const sections = [
  {
    id: 'hero', letter: 'A', label: 'Hero section', tag: 'Critical redesign',
    preview: (
      <div style={{ background: '#1a3d4f', padding: '24px 20px 20px', borderRadius: 8 }}>
        <p style={{ color: '#f5a623', fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Wim Hof Method · Breathing</p>
        <p style={{ color: '#fff', fontSize: 16, fontWeight: 700, fontFamily: 'Georgia,serif', lineHeight: 1.2, marginBottom: 8, maxWidth: 260 }}>The breathing technique that changes everything</p>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 10, marginBottom: 12, maxWidth: 220 }}>Learn the official Wim Hof breathing method in 4 steps. Used by millions worldwide.</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
          {['Anybody can learn it','Backed by science','Practiced by millions'].map(t => (
            <span key={t} style={{ fontSize: 8, fontWeight: 600, color: 'rgba(255,255,255,0.55)', display:'flex', alignItems:'center', gap: 4 }}>
              <span style={{ width: 12, height: 12, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', display:'inline-block' }} />
              {t}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <span style={{ background: '#f5a623', color: '#fff', fontSize: 9, fontWeight: 700, padding: '6px 14px', borderRadius: 20 }}>Learn the technique ↓</span>
          <span style={{ border: '1px solid rgba(255,255,255,0.35)', color: 'rgba(255,255,255,0.8)', fontSize: 9, padding: '6px 12px', borderRadius: 20 }}>Free Mini Class →</span>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 8, marginTop: 8 }}>3 free video lessons · No credit card required</p>
      </div>
    ),
    desc: 'Full-bleed deep teal background with photography. Transformation headline. Trust bar using exact homepage language. Dual CTA: amber primary that scrolls to steps, ghost secondary to the mini class funnel. Reassurance copy beneath.'
  },
  {
    id: 'stats', letter: 'B', label: 'Stats bar', tag: 'Add social proof',
    preview: (
      <div style={{ background: '#fff', padding: 16, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, borderRadius: 8 }}>
        {[['21','World records'],['24','Peer-reviewed studies'],['3.5M+','Active practitioners'],['4.8 ★','App Store rating']].map(([v,l]) => (
          <div key={l} style={{ textAlign:'center', background:'#f8f6f2', borderRadius: 6, padding: '10px 6px' }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#1a3d4f', fontFamily: 'Georgia,serif' }}>{v}</p>
            <p style={{ fontSize: 8, color: '#6b7280', marginTop: 2 }}>{l}</p>
          </div>
        ))}
      </div>
    ),
    desc: 'Four stats in a white bar beneath the hero matching the homepage layout. The fourth stat (app rating) replaces the YouTube subscriber count from the homepage. Confirm actual app rating before publishing.'
  },
  {
    id: 'steps', letter: 'C', label: 'How-to steps', tag: 'Visual upgrade',
    preview: (
      <div style={{ background: '#f8f6f2', padding: 16, borderRadius: 8 }}>
        <div style={{ background: '#fef9ec', border: '1px solid #f5e4b0', borderRadius: 6, padding: '8px 10px', marginBottom: 12, display: 'flex', gap: 8 }}>
          <span style={{ fontSize: 11, color: '#b8860b' }}>⚠</span>
          <p style={{ fontSize: 9, color: '#7a6000' }}><strong>Safety note:</strong> Always practice seated or lying down — never near water or while driving.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
          {[['1','Prepare','Get comfortable'],['2','Breathe','30 deep breaths'],['3','Hold','Retention phase'],['4','Recover','Recovery breath']].map(([n,badge,title]) => (
            <div key={n} style={{ background: '#fff', border: '1px solid #e8e4dc', borderRadius: 8, padding: 10 }}>
              <p style={{ fontSize: 20, fontWeight: 700, color: '#f5a623', fontFamily: 'Georgia,serif', lineHeight: 1 }}>{n}</p>
              <span style={{ display: 'inline-block', background: '#e8f4f8', color: '#1a3d4f', fontSize: 7, fontWeight: 700, padding: '2px 6px', borderRadius: 10, marginTop: 4, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{badge}</span>
              <p style={{ fontSize: 9, fontWeight: 700, color: '#1a3d4f' }}>{title}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    desc: 'Four steps in a card grid with large amber step numbers, phase badges (Prepare / Breathe / Hold / Recover), and the safety disclaimer as a styled amber advisory box — not hidden in body copy.'
  },
  {
    id: 'bubble', letter: 'D', label: 'Breathing Bubble', tag: 'Reframe as "Practice now"',
    preview: (
      <div style={{ background: '#1a3d4f', padding: 20, borderRadius: 8, textAlign: 'center' }}>
        <p style={{ color: '#f5a623', fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Practice now</p>
        <p style={{ color: '#fff', fontSize: 14, fontWeight: 700, fontFamily: 'Georgia,serif', marginBottom: 4 }}>Try it right now</p>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 9, marginBottom: 14 }}>Follow the bubble. Breathe when it expands.</p>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '2px solid rgba(255,255,255,0.2)', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 50, height: 50, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Breathe</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 14 }}>
          {['EN','DE','FR','ES','NL','+25'].map(l => (
            <span key={l} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 20, fontSize: 8, color: 'rgba(255,255,255,0.65)', padding: '2px 8px' }}>{l}</span>
          ))}
        </div>
        <span style={{ background: '#f5a623', color: '#fff', fontSize: 9, fontWeight: 700, padding: '7px 16px', borderRadius: 20 }}>Download the app →</span>
      </div>
    ),
    desc: 'Dark teal background titled "Try it right now." The Bubble centred with language pills. App CTA placed immediately after — capitalising on peak engagement. Add rel=0 to YouTube embed to prevent competitor recommendations.'
  },
  {
    id: 'anxiety', letter: 'E', label: 'Anxiety section', tag: 'New — data-driven',
    preview: (
      <div style={{ background: '#f8f6f2', padding: 16, borderRadius: 8 }}>
        <p style={{ color: '#c47d0a', fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Most common reason people find this page</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#1a3d4f', fontFamily: 'Georgia,serif', marginBottom: 6 }}>Breathing for anxiety and stress</p>
            {['Reduces cortisol measurably','Calms acute anxiety','Works in under 10 minutes','Builds long-term resilience'].map(b => (
              <div key={b} style={{ display:'flex', alignItems:'center', gap: 6, paddingBottom: 4, borderBottom: '1px solid #e8e4dc', marginBottom: 4 }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#f5a623', flexShrink: 0 }} />
                <span style={{ fontSize: 9, color: '#4a4a4a' }}>{b}</span>
              </div>
            ))}
            <span style={{ background: '#f5a623', color: '#fff', fontSize: 9, fontWeight: 700, padding: '6px 14px', borderRadius: 20, display:'inline-block', marginTop: 8 }}>Start the Free Mini Class</span>
          </div>
          <div style={{ background: '#1a3d4f', borderRadius: 8, padding: 12 }}>
            <p style={{ fontSize: 24, color: '#f5a623', fontFamily: 'Georgia,serif', lineHeight: 0.8, marginBottom: 6 }}>"</p>
            <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.85)', fontFamily: 'Georgia,serif', lineHeight: 1.5, marginBottom: 8 }}>I learned the Wim Hof Method and now keep stress at bay with just a few rounds of breathing every morning.</p>
            <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)' }}>— Luke, practitioner</p>
          </div>
        </div>
      </div>
    ),
    desc: 'New section justified entirely by data: anxiety queries convert at 9.1% CTR — double the page average. Split layout with mechanism explanation, benefits, testimonial, and mini class CTA framed specifically for the anxiety audience.'
  },
  {
    id: 'miniclass', letter: 'F', label: 'Free Mini Class', tag: 'Mirror homepage layout',
    preview: (
      <div style={{ background: '#1a3d4f', padding: 20, borderRadius: 8 }}>
        <p style={{ color: '#f5a623', fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Ready to go deeper?</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 16, alignItems: 'center' }}>
          <div style={{ background: '#f5a623', borderRadius: 8, padding: 16, textAlign: 'center' }}>
            <p style={{ fontSize: 8, fontWeight: 700, color: '#1a3d4f', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Free Mini Class</p>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#1a3d4f', fontFamily: 'Georgia,serif', lineHeight: 1.2 }}>3 free video lessons with Wim Hof</p>
          </div>
          <div>
            <p style={{ color: '#fff', fontSize: 12, fontWeight: 700, fontFamily: 'Georgia,serif', marginBottom: 8 }}>Experience all three pillars — free</p>
            {['Breathe along with Wim','Take your first cold shower','Build daily commitment'].map(b => (
              <div key={b} style={{ display:'flex', alignItems:'center', gap: 6, marginBottom: 4 }}>
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#f5a623', flexShrink: 0 }} />
                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.75)' }}>{b}</span>
              </div>
            ))}
            <span style={{ display:'block', background: '#f5a623', color: '#fff', fontSize: 9, fontWeight: 700, padding: '8px 0', borderRadius: 20, textAlign: 'center', marginTop: 10 }}>Start the free Mini Class →</span>
            <p style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginTop: 5 }}>3 lessons · ~10 min each · no credit card required</p>
          </div>
        </div>
      </div>
    ),
    desc: 'Dark teal section mirroring the homepage mini class section exactly: image/thumbnail left, copy right, amber button, reassurance text. Positioned mid-page after the Bubble at peak engagement. Copy framed around all three pillars.'
  },
]

export default function WireframeMockup() {
  const [active, setActive] = useState('hero')
  const current = sections.find(s => s.id === active)

  return (
    <div className="my-6 border border-gray-200 rounded-2xl overflow-hidden bg-white">
      {/* Tab bar */}
      <div className="flex overflow-x-auto border-b border-gray-200 bg-gray-50">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`flex-shrink-0 px-4 py-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap
              ${active === s.id
                ? 'border-amber-500 text-amber-700 bg-white'
                : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            <span className="font-bold mr-1.5" style={{ color: active === s.id ? '#c47d0a' : '#9ca3af' }}>{s.letter}</span>
            {s.label}
          </button>
        ))}
      </div>

      <div className="p-5 md:p-6">
        <div className="flex items-start gap-2 mb-4">
          <span className="inline-block w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-sm text-white"
                style={{ background: '#1a3d4f', lineHeight: '28px', textAlign: 'center' }}>
            {current.letter}
          </span>
          <div>
            <h3 className="font-bold text-sm" style={{ color: '#1a3d4f' }}>{current.label}</h3>
            <span className="text-xs font-medium" style={{ color: '#c47d0a' }}>{current.tag}</span>
          </div>
        </div>

        {/* Preview */}
        <div className="mb-5 rounded-xl overflow-hidden border border-gray-100">
          {current.preview}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">{current.desc}</p>
      </div>
    </div>
  )
}
