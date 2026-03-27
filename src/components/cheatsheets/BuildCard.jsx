import { useState } from 'react'
import OverclockTable from './OverclockTable'
import ArtifactPriority from './ArtifactPriority'
import StatPriorityStrip from './StatPriorityStrip'

const TIER_COLORS = {
  S: 'bg-drg-amber text-cave-black',
  A: 'bg-nitra-green text-cave-black',
  B: 'bg-cool-blue text-cave-black',
}

const DIFFICULTY_LABELS = ['', '★', '★★', '★★★', '★★★★', '★★★★★']

export default function BuildCard({ build }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-border-subtle rounded-lg overflow-hidden bg-dark-steel">
      {/* Header — always visible, tap to expand */}
      <button
        className="w-full text-left px-4 py-3 flex items-start gap-3 min-h-[56px]"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            {/* Tier badge */}
            <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${TIER_COLORS[build.tier]}`}>
              {build.tier}-TIER
            </span>
            {/* Difficulty */}
            <span className="text-xs text-drg-gold font-mono" title={`Difficulty ${build.difficulty}/5`}>
              {DIFFICULTY_LABELS[build.difficulty]}
            </span>
          </div>
          <p className="font-bold text-base text-text-primary leading-tight">{build.name}</p>
          <p className="text-xs text-text-secondary font-mono mt-0.5">
            {build.class} / {build.subclass}
          </p>
        </div>

        {/* Carry weapon */}
        <div className="text-right shrink-0">
          <p className="text-xs text-text-secondary">CARRY</p>
          <p className="text-sm text-drg-amber font-semibold leading-tight max-w-[120px] text-right">
            {build.weapons.find(w => w.isCarry)?.name}
          </p>
        </div>

        {/* Chevron */}
        <span className={`text-text-secondary mt-1 transition-transform ${open ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {/* Expanded content */}
      {open && (
        <div className="border-t border-border-subtle">
          {/* Synopsis */}
          <div className="px-4 py-3 bg-elevated-panel">
            <p className="text-xs text-text-secondary leading-relaxed">{build.synopsis}</p>
            <p className="text-xs text-nitra-teal font-mono mt-1">{build.passive}</p>
          </div>

          {/* Overclock table */}
          <div className="px-4 py-3">
            <h3 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-2">
              Overclock Decision Tree
            </h3>
            <OverclockTable weapons={build.weapons} />
          </div>

          {/* Artifact priority */}
          <div className="px-4 py-3 border-t border-border-subtle">
            <h3 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-2">
              Artifact Priority
            </h3>
            <ArtifactPriority artifacts={build.artifacts} />
          </div>

          {/* Stat priority */}
          <div className="px-4 py-3 border-t border-border-subtle">
            <h3 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-2">
              Stat Priority
            </h3>
            <StatPriorityStrip stats={build.stats} />
          </div>
        </div>
      )}
    </div>
  )
}
