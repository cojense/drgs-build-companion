import { useState } from 'react'
import { ARTIFACTS, ARTIFACT_CATEGORIES } from '../data/artifacts'

const TIERS = ['S', 'A', 'B', 'C', 'D']

const TIER_STYLES = {
  S: { label: 'S-Tier', badge: 'border text-drg-amber border-drg-amber',  heading: 'text-drg-amber' },
  A: { label: 'A-Tier', badge: 'border text-nitra-green border-nitra-green', heading: 'text-nitra-green' },
  B: { label: 'B-Tier', badge: 'border text-blue-400 border-blue-400',    heading: 'text-blue-400' },
  C: { label: 'C-Tier', badge: 'border text-text-secondary border-border-subtle', heading: 'text-text-secondary' },
  D: { label: 'D-Tier', badge: 'border text-lava-red border-lava-red',    heading: 'text-lava-red' },
}

const RARITY_BADGE = {
  epic: 'bg-drg-amber text-cave-black',
  rare: 'bg-cool-blue text-cave-black',
}

const RARITY_LABEL = {
  epic: 'EPIC',
  rare: 'RARE',
}

function ArtifactCard({ artifact }) {
  const [open, setOpen] = useState(false)
  const tierStyle = TIER_STYLES[artifact.tier]

  return (
    <div className="border border-border-subtle rounded-lg overflow-hidden bg-dark-steel">
      <button
        className="w-full text-left px-3 py-3 flex items-start gap-2 min-h-[64px]"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <div className="flex-1 min-w-0">
          {/* Name + badges row */}
          <div className="flex flex-wrap items-center gap-1.5 mb-1">
            <span className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${RARITY_BADGE[artifact.rarity] ?? 'bg-border-subtle text-text-secondary'}`}>
              {RARITY_LABEL[artifact.rarity] ?? artifact.rarity.toUpperCase()}
            </span>
            <span className="text-xs font-mono px-1.5 py-0.5 rounded border border-border-subtle text-text-secondary">
              {artifact.category}
            </span>
          </div>
          {/* Artifact name */}
          <p className="font-bold text-sm text-text-primary leading-tight">{artifact.name}</p>
          {/* Effect — truncated in collapsed state */}
          {!open && (
            <p className="text-xs text-text-secondary font-mono mt-0.5 truncate">{artifact.effect}</p>
          )}
        </div>
        {/* Tier badge + chevron */}
        <div className="flex items-center gap-2 shrink-0 mt-0.5">
          <span className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${tierStyle.badge}`}>
            {artifact.tier}
          </span>
          <span className={`text-text-secondary transition-transform duration-200 text-xs ${open ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>
      </button>

      {/* Expanded content */}
      <div className={`grid transition-all duration-200 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-border-subtle px-3 py-3 space-y-2">
            {/* Full effect */}
            <p className="text-xs text-drg-amber font-mono leading-snug">{artifact.effect}</p>

            {/* Synergy */}
            {artifact.synergy && (
              <div>
                <p className="text-xs font-mono text-text-secondary uppercase tracking-wide mb-0.5">Synergy</p>
                <p className="text-xs text-text-primary leading-relaxed">{artifact.synergy}</p>
              </div>
            )}

            {/* Strategy / When to Pick */}
            {artifact.strategy && (
              <div className="pt-2 border-t border-border-subtle">
                <p className="text-xs font-mono text-nitra-green uppercase tracking-wide mb-0.5">When to Pick</p>
                <p className="text-xs text-text-primary leading-relaxed">{artifact.strategy}</p>
              </div>
            )}

            {/* Unlock condition */}
            {artifact.unlock && (
              <p className="text-xs text-text-secondary font-mono pt-1">
                Unlock: <span className="text-drg-gold">{artifact.unlock}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ArtifactTiers() {
  const [categoryFilter, setCategoryFilter] = useState('ALL')

  const filtered = categoryFilter === 'ALL'
    ? ARTIFACTS
    : ARTIFACTS.filter(a => a.category === categoryFilter)

  const countForTier = (tier) => filtered.filter(a => a.tier === tier).length

  return (
    <div className="px-4 py-4 space-y-4 max-w-2xl mx-auto">
      {/* Page header */}
      <div>
        <h2 className="text-drg-amber font-bold text-lg font-mono leading-tight">Artifact Tier List</h2>
        <p className="text-text-secondary text-xs mt-0.5">
          All artifacts ranked S → D. Tap a card to see full details, synergies, and when to pick.
        </p>
      </div>

      {/* Category filter bar */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-mono text-text-secondary uppercase tracking-wide">Filter:</span>
        <button
          onClick={() => setCategoryFilter('ALL')}
          className={[
            'text-xs font-mono font-bold px-3 py-1.5 rounded border min-h-[36px] transition-colors',
            categoryFilter === 'ALL'
              ? 'bg-drg-amber text-cave-black border-drg-amber'
              : 'bg-transparent text-text-secondary border-border-subtle hover:text-text-primary',
          ].join(' ')}
        >
          All
        </button>
        {ARTIFACT_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setCategoryFilter(cat.id)}
            className={[
              'text-xs font-mono font-bold px-3 py-1.5 rounded border min-h-[36px] transition-colors',
              categoryFilter === cat.id
                ? 'bg-drg-amber text-cave-black border-drg-amber'
                : 'bg-transparent text-text-secondary border-border-subtle hover:text-text-primary',
            ].join(' ')}
          >
            {cat.label}
          </button>
        ))}
        <span className="text-xs text-text-secondary font-mono ml-auto">{filtered.length} artifact{filtered.length !== 1 ? 's' : ''}</span>
      </div>

      {/* Tier sections */}
      {TIERS.map(tier => {
        const tierArtifacts = filtered.filter(a => a.tier === tier)
        if (tierArtifacts.length === 0) return null
        const style = TIER_STYLES[tier]

        return (
          <section key={tier}>
            {/* Tier header */}
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-sm font-mono font-bold px-2.5 py-0.5 rounded border ${style.badge}`}>
                {style.label}
              </span>
              <div className={`flex-1 h-px bg-border-subtle`} />
              <span className="text-xs font-mono text-text-secondary">{countForTier(tier)}</span>
            </div>

            {/* Artifact card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {tierArtifacts.map(artifact => (
                <ArtifactCard key={artifact.id} artifact={artifact} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
