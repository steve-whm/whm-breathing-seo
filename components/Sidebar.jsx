import { useState, useEffect } from 'react'

const navItems = [
  { id: 'executive',   label: '01 Executive Summary' },
  { id: 'data',        label: '02 Search Console Data' },
  { id: 'audit',       label: '03 Page Audit' },
  { id: 'seo',         label: '04 SEO Fixes' },
  { id: 'conversion',  label: '05 Conversion Strategy' },
  { id: 'redesign',    label: '06 Page Redesign' },
  { id: 'actions',     label: '07 Action List' },
  { id: 'appendix',    label: '08 Appendix' },
]

export default function Sidebar() {
  const [active, setActive] = useState('executive')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed top-4 left-4 z-50 md:hidden w-9 h-9 rounded-lg flex items-center justify-center shadow-lg no-print"
        style={{ background: '#1a3d4f', color: '#f5a623' }}
        aria-label="Menu"
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          {open
            ? <><line x1="4" y1="4" x2="14" y2="14"/><line x1="14" y1="4" x2="4" y2="14"/></>
            : <><line x1="3" y1="5" x2="15" y2="5"/><line x1="3" y1="9" x2="15" y2="9"/><line x1="3" y1="13" x2="15" y2="13"/></>
          }
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-40 w-56 flex flex-col no-print
          transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
        style={{ background: '#0d2b38' }}
      >
        {/* Logo */}
        <div className="px-5 pt-6 pb-5 border-b border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-4 h-4 rounded-full" style={{ background: '#f5a623' }} />
            <span className="text-white text-xs font-bold tracking-widest uppercase">WHM</span>
          </div>
          <p className="text-white/50 text-xs leading-relaxed">Breathing Page<br/>Optimisation Report</p>
          <p className="text-white/30 text-xs mt-1">May 2026</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs mb-0.5 border-l-2 transition-all
                ${active === id
                  ? 'border-amber-400 text-amber-300 bg-white/10 font-semibold'
                  : 'border-transparent text-white/50 hover:text-white/80 hover:bg-white/5'
                }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-white/10">
          <p className="text-white/30 text-xs">wimhofmethod.com</p>
          <p className="text-white/20 text-xs">Confidential</p>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 z-30 md:hidden bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}
