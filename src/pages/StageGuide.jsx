import { useState } from 'react'
import { BUILDS } from '../data/builds'
import PhaseCard from '../components/stageguide/PhaseCard'
import EconomyPanel from '../components/stageguide/EconomyPanel'

const TIER_COLORS = {
  S: 'text-drg-amber',
  A: 'text-cool-blue',
  B: 'text-nitra-green',
}

export default function StageGuide() {
  const [selectedId, setSelectedId] = useState(BUILDS[0].id)
  const [activeStage, setActiveStage] = useState(1)

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
          onChange={e => { setSelectedId(e.target.value); setActiveStage(1) }}
          className="w-full bg-dark-steel border border-border-subtle text-text-primary rounded-lg px-3 py-3 text-sm font-semibold appearance-none min-h-[44px] focus:outline-none focus:border-drg-amber"
        >
          {BUILDS.map(b => (
            <option key={b.id} value={b.id}>
              [{b.tier}] {b.name} — {b.class}/{b.subclass}
            </option>
          ))}
        </select>
      </div>

      {build && (
        <>
          {/* Build summary strip */}
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
                {build.playstyle && (
                  <p className="text-xs text-text-primary leading-relaxed mt-1.5">{build.playstyle}</p>
                )}
              </div>
            </div>
            <p className="text-xs text-nitra-teal font-mono mt-2">{build.passive}</p>

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

          {/* Stage selector pills */}
          <div className="flex gap-2 mb-3">
            {[1, 2, 3, 4, 5].map(s => (
              <button
                key={s}
                onClick={() => setActiveStage(s)}
                className={`flex-1 py-2 rounded text-xs font-mono font-bold border transition-colors ${
                  activeStage === s
                    ? 'bg-drg-amber text-cave-black border-drg-amber'
                    : 'bg-dark-steel text-text-secondary border-border-subtle hover:border-drg-amber hover:text-text-primary'
                }`}
              >
                S{s}
              </button>
            ))}
          </div>

          {/* Phase timeline */}
          <div className="relative">
            <div className="absolute left-[28px] top-4 bottom-4 w-px bg-border-subtle z-0" />
            <div className="space-y-3 relative z-10">
              {build.phases.map(phase => (
                <PhaseCard key={phase.stage} phase={phase} />
              ))}
            </div>
          </div>

          {/* Economy panel for active stage */}
          <EconomyPanel currentStage={activeStage} />
        </>
      )}
    </div>
  )
}
