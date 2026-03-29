import { useState, useMemo } from 'react'
import { BUILDS } from '../data/builds'
import { STAGE_ECONOMY, REROLL_COSTS } from '../data/economy'
import { ARTIFACTS, ARTIFACT_BY_NAME, ARTIFACT_CATEGORIES } from '../data/artifacts'
import ArtifactTag from '../components/shared/ArtifactTag'

function computeRecommendations({ stage, gold, nitra, heldArtifacts, buildId }) {
  const economy = STAGE_ECONOMY[stage - 1]
  const build = BUILDS.find(b => b.id === buildId)
  const wantedArtifacts = build ? build.artifacts.always : []
  const avoidArtifacts = build ? build.artifacts.never : []

  const recs = []

  // Gold assessment
  if (gold < economy.goldMin) {
    recs.push({
      type: 'warn',
      icon: '⚠',
      title: 'Below Gold Benchmark',
      detail: `Expected ${economy.goldMin}–${economy.goldMax}g by Stage ${stage}. Prioritize mining secondary deposits before leaving.`,
    })
  } else if (gold > economy.goldMax * 1.5) {
    recs.push({
      type: 'good',
      icon: '✓',
      title: 'Gold Surplus',
      detail: `You have ${gold}g — well above benchmark. ${stage < 5 ? 'Consider rerolling shop up to 2× for S-tier weapon upgrades.' : 'Spend aggressively — this is the final stage.'}`,
    })
  }

  // Nitra assessment
  if (nitra < economy.nitraMin) {
    recs.push({
      type: 'warn',
      icon: '⚠',
      title: 'Low Nitra',
      detail: `Expected ${economy.nitraMin}–${economy.nitraMax} nitra. Mine nitra veins before Stage ${stage + 1 <= 5 ? stage + 1 : 'end'}. Artifact rerolls cost ${REROLL_COSTS.artifact} nitra each.`,
    })
  }

  // Reroll affordability
  const goldAfterSave = gold - economy.saveTarget
  if (goldAfterSave >= REROLL_COSTS.shop[0]) {
    const maxRerolls = REROLL_COSTS.shop.filter((_, i) => {
      const spent = REROLL_COSTS.shop.slice(0, i + 1).reduce((a, b) => a + b, 0)
      return spent <= goldAfterSave
    }).length
    const wantedNames = wantedArtifacts.map(name => name.split(' — ')[0].trim())
    recs.push({
      type: 'info',
      icon: '↺',
      title: `Afford ${maxRerolls} Shop Reroll${maxRerolls !== 1 ? 's' : ''}`,
      detail: `After saving ${economy.saveTarget}g, you can reroll ${maxRerolls}× (costs: ${REROLL_COSTS.shop.slice(0, maxRerolls).join('→')}g). ${wantedNames.length ? `Looking for: ${wantedNames.join(', ')}.` : ''}`,
    })
  }

  // Artifact reroll affordability — FIXED: compare IDs to IDs
  if (nitra >= REROLL_COSTS.artifact) {
    const artifactRerolls = Math.floor(nitra / REROLL_COSTS.artifact)
    const wantedIds = wantedArtifacts
      .map(name => ARTIFACT_BY_NAME[name.split(' — ')[0].trim()]?.id)
      .filter(Boolean)
    const missingIds = wantedIds.filter(id => !heldArtifacts.includes(id))
    const missingNames = missingIds.map(id => ARTIFACTS.find(a => a.id === id)?.name ?? id)

    if (missingNames.length > 0) {
      recs.push({
        type: 'info',
        icon: '◆',
        title: `Reroll Artifacts for: ${missingNames.join(', ')}`,
        detail: `You have ${nitra} nitra — enough for ${artifactRerolls} artifact reroll${artifactRerolls !== 1 ? 's' : ''} (${REROLL_COSTS.artifact} nitra each).`,
      })
    } else if (wantedArtifacts.length > 0) {
      recs.push({
        type: 'good',
        icon: '✓',
        title: 'Core Artifacts Secured',
        detail: `${wantedArtifacts.map(n => n.split(' — ')[0].trim()).join(', ')} are all held. Spend remaining nitra on upgrades or save.`,
      })
    }
  }

  // Stage-specific advice
  recs.push({
    type: 'note',
    icon: '→',
    title: `Stage ${stage} Strategy`,
    detail: economy.advice,
  })

  // Gold-Tipped Bullets — use kebab-case ID
  if (heldArtifacts.includes('gold-tipped-bullets')) {
    const bonus = Math.floor(gold / 5)
    recs.push({
      type: 'info',
      icon: '⚡',
      title: `Gold-Tipped Bullets: +${bonus}% Damage`,
      detail: `With ${gold}g held, you're getting +${bonus}% damage. ${stage < 5 ? 'Hold gold through Stage 5 for maximum boss damage.' : "Don't spend gold on the boss — keep the buff active!"}`,
    })
  }

  // Nitragenic Powder — use kebab-case ID
  if (heldArtifacts.includes('nitragenic-powder')) {
    const critBonus = (nitra * 0.5).toFixed(1)
    recs.push({
      type: 'info',
      icon: '⚡',
      title: `Nitragenic Powder: +${critBonus}% Crit Chance`,
      detail: `With ${nitra} nitra held, you have +${critBonus}% Crit Chance. Mine aggressively — don't spend nitra on non-essential rerolls.`,
    })
  }

  // Avoid artifact warning — ID-based comparison
  if (build) {
    const avoidIds = avoidArtifacts
      .map(entry => ARTIFACT_BY_NAME[entry.split(' — ')[0].trim()]?.id)
      .filter(Boolean)
    const avoidHeldIds = avoidIds.filter(id => heldArtifacts.includes(id))
    const avoidHeldNames = avoidHeldIds.map(id => ARTIFACTS.find(a => a.id === id)?.name ?? id)
    if (avoidHeldNames.length > 0) {
      recs.push({
        type: 'danger',
        icon: '✕',
        title: `Avoid: ${avoidHeldNames.join(', ')}`,
        detail: `This artifact actively hurts the ${build.name} build. Replace at next artifact reroll opportunity.`,
      })
    }
  }

  return recs
}

const TYPE_STYLES = {
  good:   { bg: 'bg-nitra-green/10', border: 'border-nitra-green/30', icon: 'text-nitra-green' },
  warn:   { bg: 'bg-drg-gold/10',   border: 'border-drg-gold/30',   icon: 'text-drg-gold'   },
  info:   { bg: 'bg-cool-blue/10',  border: 'border-cool-blue/30',  icon: 'text-cool-blue'  },
  note:   { bg: 'bg-elevated-panel', border: 'border-border-subtle', icon: 'text-text-secondary' },
  danger: { bg: 'bg-lava-red/10',   border: 'border-lava-red/30',   icon: 'text-lava-red'   },
}

export default function ShopOptimizer() {
  const [stage, setStage] = useState(1)
  const [gold, setGold] = useState(100)
  const [nitra, setNitra] = useState(40)
  const [buildId, setBuildId] = useState(BUILDS[0].id)
  const [heldArtifacts, setHeldArtifacts] = useState([])

  const economy = STAGE_ECONOMY[stage - 1]

  const recs = useMemo(
    () => computeRecommendations({ stage, gold, nitra, heldArtifacts, buildId }),
    [stage, gold, nitra, heldArtifacts, buildId]
  )

  function toggleArtifact(id) {
    setHeldArtifacts(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    )
  }

  return (
    <div className="px-4 py-4 max-w-2xl mx-auto space-y-4">
      {/* Build selector */}
      <div>
        <label className="text-xs font-mono text-text-secondary uppercase tracking-wide block mb-1.5">
          Build
        </label>
        <select
          value={buildId}
          onChange={e => setBuildId(e.target.value)}
          className="w-full bg-dark-steel border border-border-subtle text-text-primary rounded-lg px-3 py-3 text-sm font-semibold appearance-none min-h-[44px] focus:outline-none focus:border-drg-amber"
        >
          {BUILDS.map(b => (
            <option key={b.id} value={b.id}>[{b.tier}] {b.name}</option>
          ))}
        </select>
      </div>

      {/* Stage selector */}
      <div>
        <label className="text-xs font-mono text-text-secondary uppercase tracking-wide block mb-1.5">
          Current Stage
        </label>
        <div className="flex gap-2">
          {[1,2,3,4,5].map(s => (
            <button
              key={s}
              onClick={() => setStage(s)}
              className={[
                'flex-1 min-h-[44px] rounded-lg border font-mono font-bold text-sm transition-colors',
                stage === s
                  ? 'bg-drg-amber text-cave-black border-drg-amber'
                  : 'bg-dark-steel border-border-subtle text-text-secondary hover:text-text-primary',
              ].join(' ')}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Resource inputs */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-mono text-drg-gold uppercase tracking-wide block mb-1.5">
            Gold (g)
          </label>
          <input
            type="number"
            min={0}
            max={999}
            value={gold}
            onChange={e => setGold(Math.max(0, parseInt(e.target.value, 10) || 0))}
            className="w-full bg-dark-steel border border-border-subtle text-text-primary rounded-lg px-3 py-3 text-base font-mono min-h-[44px] focus:outline-none focus:border-drg-gold"
          />
          <p className="text-xs text-text-secondary font-mono mt-1">
            Benchmark: {economy.goldMin}–{economy.goldMax}g
          </p>
        </div>
        <div>
          <label className="text-xs font-mono text-nitra-teal uppercase tracking-wide block mb-1.5">
            Nitra
          </label>
          <input
            type="number"
            min={0}
            max={999}
            value={nitra}
            onChange={e => setNitra(Math.max(0, parseInt(e.target.value, 10) || 0))}
            className="w-full bg-dark-steel border border-border-subtle text-text-primary rounded-lg px-3 py-3 text-base font-mono min-h-[44px] focus:outline-none focus:border-nitra-teal"
          />
          <p className="text-xs text-text-secondary font-mono mt-1">
            Benchmark: {economy.nitraMin}–{economy.nitraMax}
          </p>
        </div>
      </div>

      {/* Artifact toggles — grouped by category */}
      <div>
        <label className="text-xs font-mono text-text-secondary uppercase tracking-wide block mb-2">
          Held Artifacts
        </label>
        <div className="space-y-3">
          {ARTIFACT_CATEGORIES.map(cat => {
            const arts = ARTIFACTS.filter(a => a.category === cat.id)
            return (
              <div key={cat.id}>
                <p className="text-xs font-mono text-text-secondary/60 uppercase tracking-wide mb-1.5">
                  {cat.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {arts.map(art => (
                    <div key={art.id} className="relative flex items-center">
                      <button
                        onClick={() => toggleArtifact(art.id)}
                        className={[
                          'text-xs font-mono px-2.5 py-1.5 rounded-l border-y border-l transition-colors min-h-[36px]',
                          heldArtifacts.includes(art.id)
                            ? 'bg-drg-amber/20 text-drg-amber border-drg-amber/50'
                            : 'bg-dark-steel text-text-secondary border-border-subtle hover:text-text-primary',
                        ].join(' ')}
                      >
                        {art.name}
                      </button>
                      <div className={[
                        'flex items-center px-1.5 min-h-[36px] rounded-r border-y border-r transition-colors',
                        heldArtifacts.includes(art.id)
                          ? 'bg-drg-amber/20 border-drg-amber/50'
                          : 'bg-dark-steel border-border-subtle',
                      ].join(' ')}>
                        <ArtifactTag name={art.name} variant="toggle" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Reroll cost reference */}
      <div className="bg-dark-steel border border-border-subtle rounded-lg p-3">
        <p className="text-xs font-mono text-text-secondary uppercase tracking-wide mb-2">Reroll Costs (gold)</p>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {REROLL_COSTS.shop.map((cost, i) => (
            <span key={i} className="text-xs font-mono text-text-primary">
              #{i+1}: <span className="text-drg-gold">{cost}g</span>
            </span>
          ))}
          <span className="text-xs font-mono text-text-primary">
            Level-up: <span className="text-drg-gold">{REROLL_COSTS.levelUp}g</span>
          </span>
          <span className="text-xs font-mono text-text-primary">
            Artifact: <span className="text-nitra-teal">{REROLL_COSTS.artifact} nitra</span>
          </span>
        </div>
      </div>

      {/* Recommendations */}
      <div>
        <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-2">
          Recommendations
        </h2>
        <div className="space-y-2">
          {recs.map((rec) => {
            const style = TYPE_STYLES[rec.type] ?? TYPE_STYLES.note
            return (
              <div key={rec.title} className={`rounded-lg border p-3 ${style.bg} ${style.border}`}>
                <div className="flex items-start gap-2">
                  <span className={`font-mono font-bold text-sm shrink-0 ${style.icon}`}>{rec.icon}</span>
                  <div>
                    <p className={`text-sm font-bold leading-tight ${style.icon}`}>{rec.title}</p>
                    <p className="text-xs text-text-secondary leading-relaxed mt-0.5">{rec.detail}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
