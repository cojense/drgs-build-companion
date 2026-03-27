import { useState } from 'react'
import BuildCard from '../components/cheatsheets/BuildCard'
import { BUILDS } from '../data/builds'

const TIER_ORDER = { S: 0, A: 1, B: 2 }

export default function CheatSheets() {
  const [filter, setFilter] = useState('ALL')

  const tiers = ['ALL', 'S', 'A', 'B']
  const filtered = filter === 'ALL'
    ? BUILDS
    : BUILDS.filter(b => b.tier === filter)

  const sorted = [...filtered].sort((a, b) => {
    if (TIER_ORDER[a.tier] !== TIER_ORDER[b.tier]) return TIER_ORDER[a.tier] - TIER_ORDER[b.tier]
    return a.difficulty - b.difficulty
  })

  return (
    <div className="px-4 py-4 space-y-3 max-w-2xl mx-auto">
      {/* Filter bar */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-mono text-text-secondary uppercase tracking-wide">Filter:</span>
        {tiers.map(t => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={[
              'text-xs font-mono font-bold px-3 py-1.5 rounded border min-h-[36px] transition-colors',
              filter === t
                ? 'bg-drg-amber text-cave-black border-drg-amber'
                : 'bg-transparent text-text-secondary border-border-subtle hover:text-text-primary',
            ].join(' ')}
          >
            {t === 'ALL' ? 'All' : `${t}-Tier`}
          </button>
        ))}
        <span className="text-xs text-text-secondary font-mono ml-auto">{sorted.length} build{sorted.length !== 1 ? 's' : ''}</span>
      </div>

      {/* Build cards */}
      {sorted.map(build => (
        <BuildCard key={build.id} build={build} />
      ))}
    </div>
  )
}
