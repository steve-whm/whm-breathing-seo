// Callout box
export function Callout({ type = 'info', title, children }) {
  const styles = {
    danger:  { bg: 'bg-red-50',    border: 'border-red-300',    title: 'text-red-800',    icon: '⚠' },
    warning: { bg: 'bg-amber-50',  border: 'border-amber-300',  title: 'text-amber-800',  icon: '!' },
    success: { bg: 'bg-green-50',  border: 'border-green-300',  title: 'text-green-800',  icon: '✓' },
    info:    { bg: 'bg-blue-50',   border: 'border-blue-300',   title: 'text-blue-800',   icon: 'i' },
  }
  const st = styles[type]
  return (
    <div className={`${st.bg} border ${st.border} rounded-lg p-4 my-4`}>
      <p className={`font-semibold text-sm ${st.title} mb-1`}>
        <span className="inline-block w-5 h-5 rounded-full bg-current text-white text-xs text-center leading-5 mr-2 opacity-80">{st.icon}</span>
        {title}
      </p>
      <p className="text-sm text-gray-700 leading-relaxed">{children}</p>
    </div>
  )
}

// Priority badge
export function PriorityBadge({ priority, color }) {
  const colors = {
    danger:  'bg-red-100 text-red-800 border border-red-200',
    warning: 'bg-amber-100 text-amber-800 border border-amber-200',
    success: 'bg-green-100 text-green-800 border border-green-200',
    info:    'bg-blue-100 text-blue-800 border border-blue-200',
  }
  return (
    <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full ${colors[color]}`}>
      {priority}
    </span>
  )
}

// Section wrapper with fade-in
export function Section({ id, children, dark = false, alt = false }) {
  const bg = dark ? 'bg-teal text-white' : alt ? 'bg-offwhite' : 'bg-white'
  return (
    <section id={id} className={`${bg} py-12 px-6 md:px-10`}>
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  )
}

// Section label (amber all-caps)
export function SectionLabel({ children, light = false }) {
  return (
    <p className={`text-xs font-bold tracking-widest uppercase mb-2 ${light ? 'text-amber-400' : 'text-amber-DEFAULT'}`}
       style={{ color: light ? '#f5a623' : '#c47d0a' }}>
      {children}
    </p>
  )
}

// Section headline
export function SectionTitle({ children, white = false, center = false }) {
  return (
    <h2 className={`font-serif text-2xl md:text-3xl font-bold leading-tight mb-3
      ${white ? 'text-white' : 'text-teal'}
      ${center ? 'text-center' : ''}`}
      style={{ color: white ? '#fff' : '#1a3d4f' }}>
      {children}
    </h2>
  )
}

// Stat card
export function StatCard({ value, label, color = 'teal' }) {
  const colors = {
    teal:    'text-teal',
    danger:  'text-red-700',
    success: 'text-green-700',
    info:    'text-blue-700',
    warning: 'text-amber-700',
  }
  return (
    <div className="bg-offwhite rounded-xl p-4 text-center">
      <p className={`text-2xl font-bold font-serif ${colors[color]}`} style={color === 'teal' ? { color: '#1a3d4f' } : {}}>
        {value}
      </p>
      <p className="text-xs text-gray-500 mt-1">{label}</p>
    </div>
  )
}

// Data table
export function DataTable({ headers, rows, flagCol }) {
  const flagColors = {
    danger:  'text-red-700 font-semibold',
    warn:    'text-amber-700 font-semibold',
    success: 'text-green-700 font-semibold',
    info:    'text-blue-700',
  }
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 my-4">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: '#1a3d4f' }}>
            {headers.map((h, i) => (
              <th key={i} className="text-left text-white font-semibold px-3 py-2.5 text-xs">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-offwhite'}>
              {row.map((cell, ci) => (
                <td key={ci} className={`px-3 py-2 text-xs text-gray-600 ${flagCol && ci === flagCol.col && cell === flagCol.value ? flagColors[flagCol.color] : ''}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Code block
export function CodeBlock({ children }) {
  return (
    <pre className="bg-offwhite border border-gray-200 rounded-lg p-4 text-xs text-teal font-mono overflow-x-auto my-3 leading-relaxed"
         style={{ color: '#1a3d4f' }}>
      {children}
    </pre>
  )
}

// Issue card
export function IssueCard({ area, title, body }) {
  const areaColors = {
    Design:     { bg: '#1a3d4f', label: 'Design' },
    Conversion: { bg: '#c47d0a', label: 'Conversion' },
    SEO:        { bg: '#185fa5', label: 'SEO' },
  }
  const ac = areaColors[area]
  return (
    <div className="flex rounded-xl overflow-hidden border border-gray-200 mb-2">
      <div className="w-16 flex-shrink-0 flex items-center justify-center py-4 text-white text-xs font-bold text-center leading-tight px-1"
           style={{ background: ac.bg }}>
        {ac.label}
      </div>
      <div className="flex-1 bg-white px-4 py-3">
        <p className="font-semibold text-sm mb-1" style={{ color: '#1a3d4f' }}>{title}</p>
        <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
      </div>
    </div>
  )
}

// Action row
export function ActionRow({ priority, color, title, effort, desc }) {
  const priorityColors = {
    danger:  'bg-red-100 text-red-800',
    warning: 'bg-amber-100 text-amber-800',
    success: 'bg-green-100 text-green-800',
  }
  return (
    <div className="flex gap-3 border-b border-gray-100 py-3 last:border-0">
      <div className="flex-shrink-0 pt-0.5">
        <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full ${priorityColors[color]}`}>
          {priority}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm mb-0.5" style={{ color: '#1a3d4f' }}>{title}</p>
        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
      </div>
      <div className="flex-shrink-0 text-xs text-gray-400 font-medium whitespace-nowrap pt-0.5">
        {effort}
      </div>
    </div>
  )
}
