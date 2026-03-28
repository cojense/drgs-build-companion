import { useState } from 'react'

const TYPE_STYLES = {
  weapon:   { label: 'WEAPON',   color: 'text-cool-blue',  dot: 'bg-cool-blue'  },
  overclock: { label: 'OC',       color: 'text-drg-amber',  dot: 'bg-drg-amber'  },
  shop:     { label: 'SHOP',     color: 'text-nitra-green', dot: 'bg-nitra-green' },
}

export default function PhaseCard({ phase }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-elevated-panel border border-border-subtle rounded-lg overflow-hidden">
      <button
        className="w-full text-left px-4 py-3 flex items-center gap-3 min-h-[52px]"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        {/* Stage number */}
        <div className="w-8 h-8 rounded-full bg-dark-steel border border-border-subtle flex items-center justify-center shrink-0">
          <span className="text-xs font-mono font-bold text-drg-amber">{phase.stage}</span>
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-text-primary leading-tight">Stage {phase.stage}</p>
          <p className="text-xs text-text-secondary leading-tight">{phase.title}</p>
        </div>

        {/* Decision type dots */}
        <div className="flex gap-1 shrink-0">
          {phase.decisions.map(d => (
            <div
              key={d.type}
              className={`w-2 h-2 rounded-full ${TYPE_STYLES[d.type]?.dot ?? 'bg-text-secondary'}`}
              title={d.label}
            />
          ))}
        </div>

        <span className={`text-text-secondary text-xs transition-transform duration-200 shrink-0 ${open ? 'rotate-180' : ''}`}>▼</span>
      </button>

      {/* Animated expanded content */}
      <div className={`grid transition-all duration-200 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-border-subtle divide-y divide-border-subtle">
            {phase.decisions.map(decision => {
              const style = TYPE_STYLES[decision.type] ?? { label: decision.label, color: 'text-text-secondary' }
              return (
                <div key={decision.type} className="px-4 py-3">
                  <p className={`text-xs font-mono font-bold uppercase tracking-widest mb-1.5 ${style.color}`}>
                    {style.label || decision.label}
                  </p>
                  <p className="text-sm text-text-primary leading-relaxed">{decision.content}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
