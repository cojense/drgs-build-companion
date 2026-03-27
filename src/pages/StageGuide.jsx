import { useState } from 'react'
import { BUILDS } from '../data/builds'
import PhaseCard from '../components/stageguide/PhaseCard'

const TIER_COLORS = {
  S: 'text-drg-amber',
  A: 'text-nitra-green',
  B: 'text-cool-blue',
}

export default function StageGuide() {
  const [selectedId, setSelectedId] = useState(BUILDS[0].id)
  const [expandAll, setExpandAll] = useState(false)

  const build = BUILDS.find(b => b.id === selectedId)

  return (
    <div className="px-4 py-4 max-w-2xl mx-auto">
      {/* Build selector */}
      <div className="mb-4">
        <label className="text-xs font-mono text-text-secondary uppercase tracking-wide block mb-1.5">
          Select Build
        </label>
        <select
          value={selectedId}
          onChange={e => setSelectedId(e.target.value)}
          className="w-full bg-dark-steel border border-border-subtle text-text-primary rounded-lg px-3 py-3 text-sm font-semibold appearance-none min-h-[44px] focus:outline-none focus:border-drg-amber"
        >
          {BUILDS.map(b => (
            <option key={b.id} value={b.id}>
              [{b.tier}] {b.name} — {b.class}/{b.subclass}
            </option>
          ))}
        </select>
      </div>

      {/* Build summary strip */}
      {build && (
        <>
          <div className="bg-dark-steel border border-border-subtle rounded-lg px-4 py-3 mb-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-sm font-mono font-bold ${TIER_COLORS[build.tier]}`}>
                    {build.tier}-Tier
                  </span>
                  <span className="text-text-secondary text-xs font-mono">
                    {build.class} / {build.subclass}
                  </span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">{build.synopsis}</p>
              </div>
            </div>
            <p className="text-xs text-nitra-teal font-mono mt-2">{build.passive}</p>
          </div>

          {/* Phase timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[28px] top-4 bottom-4 w-px bg-border-subtle z-0" />

            <div className="space-y-3 relative z-10">
              {build.phases.map(phase => (
                <PhaseCard key={phase.stage} phase={phase} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
