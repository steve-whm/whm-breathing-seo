import { useState, useEffect, useRef } from 'react'

const PHASES = [
  { name: 'Inhale',  duration: 2000, scale: 1.45, color: '#f5a623', instruction: 'Breathe in deeply…' },
  { name: 'Exhale',  duration: 2000, scale: 1.0,  color: '#5dcaa5', instruction: 'Let it go gently…' },
]

export default function BreathingBubble() {
  const [running, setRunning] = useState(false)
  const [phase, setPhase]   = useState(0)
  const [count, setCount]   = useState(0)
  const [round, setRound]   = useState(1)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!running) { clearInterval(timerRef.current); return }
    timerRef.current = setInterval(() => {
      setPhase(p => {
        const next = (p + 1) % PHASES.length
        if (next === 0) {
          setCount(c => {
            if (c + 1 >= 30) { setRound(r => r + 1); return 0 }
            return c + 1
          })
        }
        return next
      })
    }, PHASES[phase].duration)
    return () => clearInterval(timerRef.current)
  }, [running, phase])

  const reset = () => { setRunning(false); setPhase(0); setCount(0); setRound(1) }
  const cur = PHASES[phase]

  return (
    <div className="flex flex-col items-center py-8">
      {/* Bubble */}
      <div className="relative flex items-center justify-center mb-6" style={{ width: 200, height: 200 }}>
        {/* Outer ring */}
        <div
          className="absolute rounded-full transition-all"
          style={{
            width: 200, height: 200,
            background: `${cur.color}18`,
            border: `2px solid ${cur.color}40`,
            transform: running ? `scale(${cur.scale})` : 'scale(1)',
            transition: `transform ${cur.duration}ms ease-in-out, background ${cur.duration}ms ease-in-out`,
          }}
        />
        {/* Inner bubble */}
        <div
          className="absolute rounded-full flex items-center justify-center"
          style={{
            width: 130, height: 130,
            background: running ? `${cur.color}30` : '#1e4d6320',
            border: `2px solid ${running ? cur.color + '60' : '#1e4d6330'}`,
            transform: running ? `scale(${1 + (cur.scale - 1) * 0.6})` : 'scale(1)',
            transition: `transform ${cur.duration}ms ease-in-out, background ${cur.duration}ms ease-in-out, border-color ${cur.duration}ms ease-in-out`,
          }}
        >
          <div className="text-center">
            <p className="text-sm font-bold" style={{ color: running ? cur.color : '#1a3d4f' }}>
              {running ? cur.name : 'Ready'}
            </p>
            {running && (
              <p className="text-xs mt-1" style={{ color: cur.color + 'cc' }}>
                {count + 1} / 30
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Instruction */}
      <p className="text-sm text-gray-500 h-5 mb-6 italic">
        {running ? cur.instruction : 'Press start to begin a guided session'}
      </p>

      {/* Round indicator */}
      {running && (
        <p className="text-xs font-semibold mb-4" style={{ color: '#1a3d4f' }}>
          Round {round} of 4
        </p>
      )}

      {/* Controls */}
      <div className="flex gap-3">
        <button
          onClick={() => setRunning(r => !r)}
          className="px-6 py-2.5 rounded-full text-sm font-bold text-white transition-transform active:scale-95"
          style={{ background: '#f5a623' }}
        >
          {running ? 'Pause' : 'Start session'}
        </button>
        {(running || count > 0 || round > 1) && (
          <button
            onClick={reset}
            className="px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors"
            style={{ borderColor: '#e8e4dc', color: '#6b7280' }}
          >
            Reset
          </button>
        )}
      </div>

      <p className="text-xs text-gray-400 mt-4 text-center max-w-xs">
        This demonstrates the guided breathing experience. The full app supports custom rounds, tempos, and 30+ languages.
      </p>
    </div>
  )
}
