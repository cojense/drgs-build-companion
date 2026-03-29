import { useState } from 'react'
import { ARTIFACT_BY_NAME } from '../../data/artifacts'

const TIER_COLORS = {
  S: 'bg-drg-amber text-cave-black',
  A: 'bg-cool-blue text-cave-black',
  B: 'bg-nitra-green text-cave-black',
  C: 'bg-text-secondary text-cave-black',
  D: 'bg-border-subtle text-text-secondary',
}

const RARITY_COLORS = {
  epic:   'text-drg-amber',
  rare:   'text-nitra-teal',
}

export default function ArtifactTag({ name, variant = 'default' }) {
  const [open, setOpen] = useState(false)
  const artifact = ARTIFACT_BY_NAME[name]

  if (!artifact) {
    return <span className="text-sm text-text-primary">{name}</span>
  }

  if (variant === 'toggle') {
    // Used in ShopOptimizer — wraps an existing toggle button, adds info panel below
    return (
      <div className="relative">
        <button
          type="button"
          className="text-xs text-text-secondary hover:text-drg-amber transition-colors ml-1"
          onClick={e => { e.stopPropagation(); setOpen(o => !o) }}
          aria-label={`Details for ${name}`}
          title="Show artifact details"
        >
          ⓘ
        </button>
        {open && (
          <div className="absolute z-20 left-0 mt-1 w-72 bg-elevated-panel border border-border-subtle rounded-lg shadow-lg p-3 text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${TIER_COLORS[artifact.tier] ?? 'bg-border-subtle text-text-secondary'}`}>
                {artifact.tier}
              </span>
              <span className={`text-xs font-mono uppercase tracking-wide ${RARITY_COLORS[artifact.rarity] ?? 'text-text-secondary'}`}>
                {artifact.rarity}
              </span>
              <span className="text-sm font-bold text-text-primary flex-1">{artifact.name}</span>
              <button
                type="button"
                className="text-text-secondary hover:text-text-primary text-xs"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-drg-gold font-mono mb-2">{artifact.effect}</p>
            <p className="text-xs text-text-secondary leading-relaxed mb-1">{artifact.synergy}</p>
            {artifact.strategy && (
              <p className="text-xs text-nitra-teal leading-relaxed mt-2 pt-2 border-t border-border-subtle">
                {artifact.strategy}
              </p>
            )}
          </div>
        )}
      </div>
    )
  }

  // Default variant — inline expandable chip used in BuildCard ArtifactPriority
  return (
    <div className="inline-block">
      <button
        type="button"
        className="text-left group"
        onClick={() => setOpen(o => !o)}
      >
        <span className="text-sm text-text-primary group-hover:text-drg-amber transition-colors underline decoration-dotted underline-offset-2">
          {name}
        </span>
      </button>
      {open && (
        <div className="mt-1 p-2 bg-dark-steel border border-border-subtle rounded text-left">
          <div className="flex items-center gap-1.5 mb-1">
            <span className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${TIER_COLORS[artifact.tier] ?? 'bg-border-subtle text-text-secondary'}`}>
              {artifact.tier}
            </span>
            <span className={`text-xs font-mono uppercase ${RARITY_COLORS[artifact.rarity] ?? 'text-text-secondary'}`}>
              {artifact.rarity}
            </span>
          </div>
          <p className="text-xs text-drg-gold font-mono mb-1.5">{artifact.effect}</p>
          <p className="text-xs text-text-secondary leading-relaxed">{artifact.synergy}</p>
          {artifact.strategy && (
            <p className="text-xs text-nitra-teal leading-relaxed mt-1.5 pt-1.5 border-t border-border-subtle">
              {artifact.strategy}
            </p>
          )}
          <button
            type="button"
            className="mt-1.5 text-xs text-text-secondary hover:text-text-primary"
            onClick={() => setOpen(false)}
          >
            collapse ▲
          </button>
        </div>
      )}
    </div>
  )
}
