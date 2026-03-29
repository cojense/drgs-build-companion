import { useState } from 'react'
import OverclockTable from './OverclockTable'
import ArtifactPriority from './ArtifactPriority'
import StatPriorityStrip from './StatPriorityStrip'

const TIER_COLORS = {
  S: 'bg-drg-amber text-cave-black',
  A: 'bg-cool-blue text-cave-black',
  B: 'bg-nitra-green text-cave-black',
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
        <span className={`text-text-secondary mt-1 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {/* Animated expanded content */}
      <div className={`grid transition-all duration-200 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-border-subtle">
            {/* Synopsis + playstyle */}
            <div className="px-4 py-3 bg-elevated-panel">
              <p className="text-xs text-text-secondary leading-relaxed">{build.synopsis}</p>
              {build.playstyle && (
                <p className="text-xs text-text-primary leading-relaxed mt-1.5">{build.playstyle}</p>
              )}
              <p className="text-xs text-nitra-teal font-mono mt-1">{build.passive}</p>

              {/* Strengths & Weaknesses */}
              {(build.strengths || build.weaknesses) && (
                <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-border-subtle">
                  {build.strengths && (
                    <div>
                      <p className="text-xs font-mono text-nitra-green uppercase tracking-wide mb-1">Strengths</p>
                      <ul className="space-y-0.5">
                        {build.strengths.map((s, i) => (
                          <li key={i} className="text-xs text-text-secondary leading-snug">+ {s}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {build.weaknesses && (
                    <div>
                      <p className="text-xs font-mono text-lava-red uppercase tracking-wide mb-1">Weaknesses</p>
                      <ul className="space-y-0.5">
                        {build.weaknesses.map((w, i) => (
                          <li key={i} className="text-xs text-text-secondary leading-snug">− {w}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Tips */}
              {build.tips && build.tips.length > 0 && (
                <div className="mt-3 pt-3 border-t border-border-subtle">
                  <p className="text-xs font-mono text-drg-amber uppercase tracking-wide mb-1.5">Tips</p>
                  <ol className="space-y-1">
                    {build.tips.map((tip, i) => (
                      <li key={i} className="text-xs text-text-secondary leading-snug">
                        <span className="text-drg-gold font-mono mr-1">{i + 1}.</span>{tip}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
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
        </div>
      </div>
    </div>
  )
}
