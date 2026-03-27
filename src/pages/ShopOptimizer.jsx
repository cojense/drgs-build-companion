import { useState, useMemo } from 'react'
import { BUILDS } from '../data/builds'
import { STAGE_ECONOMY, REROLL_COSTS } from '../data/economy'

const ARTIFACT_OPTIONS = [
  { id: 'squint',    name: 'Squint-EE5',        effect: '+30% Crit Chance, +100% Crit Dmg' },
  { id: 'mocap',     name: 'The MoCap',          effect: '+1% dmg per 1% HP missing' },
  { id: 'nitra',     name: 'Nitragenic Powder',  effect: '+0.5% Crit Chance per Nitra held' },
  { id: 'pickled',   name: 'Pickled Nitra',      effect: '+50% Fire Rate, -15% Move Speed' },
  { id: 'popup',     name: 'Popup Tripod',        effect: '+2% Fire Rate/Reload when stationary' },
  { id: 'gold',      name: 'Gold-Tipped Bullets', effect: '+1% Dmg per 5 Gold held' },
  { id: 'energy',    name: 'Energy Bars',         effect: '+1% Dmg per level, -2 Max HP' },
  { id: 'blt',       name: 'BLT Ration Pack',     effect: '+70 Max HP, +2 HP Regen' },
  { id: 'pay2win',   name: 'Pay2Win Console',      effect: '+2.5% Dmg per reroll' },
]

function getNextRerollCost(rerollCount) {
  const costs = REROLL_COSTS.shop
  return costs[Math.min(rerollCount, costs.length - 1)]
}

function computeRecommendations({ stage, gold, nitra, heldArtifacts, buildId }) {
  const economy = STAGE_ECONOMY[stage - 1]
  const build = BUILDS.find(b => b.id === buildId)
  const wantedArtifacts = build ? build.artifacts.always : []
  const avoidArtifacts = build ? build.artifacts.never : []

  const recs = []

  // Gold assessment
  const goldMidpoint = (economy.goldMin + economy.goldMax) / 2
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
      detail: `You have ${gold}g — well above benchmark. ${stage < 5 ? `Consider rerolling shop up to 2× for S-tier weapon upgrades.` : 'Spend aggressively — this is the final stage.'}`,
    })
  }

  // Nitra assessment
  if (nitra < economy.nitraMin) {
    recs.push({
      type: 'warn',
      icon: '⚠',
      title: 'Low Nitra',
      detail: `Expected ${economy.nitraMin}–${economy.nitraMax} nitra. Mine nitra veins before Stage ${stage + 1 <= 5 ? stage + 1 : 'end'}. Artifact rerolls cost 10 nitra each.`,
    })
  }

  // Reroll affordability
  const firstReroll = getNextRerollCost(0)
  const secondReroll = getNextRerollCost(1)
  const goldAfterSave = gold - economy.saveTarget
  if (goldAfterSave >= firstReroll) {
    const maxRerolls = REROLL_COSTS.shop.filter((_, i) => {
      const spent = REROLL_COSTS.shop.slice(0, i + 1).reduce((a, b) => a + b, 0)
      return spent <= goldAfterSave
    }).length
    recs.push({
      type: 'info',
      icon: '↺',
      title: `Afford ${maxRerolls} Shop Reroll${maxRerolls !== 1 ? 's' : ''}`,
      detail: `After saving ${economy.saveTarget}g for next stage, you can reroll ${maxRerolls}× (costs: ${REROLL_COSTS.shop.slice(0, maxRerolls).join('→')}g). ${wantedArtifacts.length ? `Looking for: ${wantedArtifacts.join(', ')}.` : ''}`,
    })
  }

  // Artifact reroll affordability
  if (nitra >= REROLL_COSTS.artifact) {
    const artifactRerolls = Math.floor(nitra / REROLL_COSTS.artifact)
    const missingArtifacts = wantedArtifacts.filter(a => !heldArtifacts.includes(a))
    if (missingArtifacts.length > 0) {
      recs.push({
        type: 'info',
        icon: '◆',
        title: `Reroll Artifacts for: ${missingArtifacts.join(', ')}`,
        detail: `You have ${nitra} nitra — enough for ${artifactRerolls} artifact reroll${artifactRerolls !== 1 ? 's' : ''} (${REROLL_COSTS.artifact} nitra each). Missing S-tier artifact${missingArtifacts.length !== 1 ? 's' : ''} for this build.`,
      })
    } else if (wantedArtifacts.length > 0) {
      recs.push({
        type: 'good',
        icon: '✓',
        title: 'Core Artifacts Secured',
        detail: `${wantedArtifacts.join(', ')} are all held. Spend remaining nitra on upgrading or save for later stages.`,
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

  // Gold-Tipped Bullets advice
  if (heldArtifacts.includes('Gold-Tipped Bullets') || heldArtifacts.includes('gold')) {
    const bonus = Math.floor(gold / 5)
    recs.push({
      type: 'info',
      icon: '⚡',
      title: `Gold-Tipped Bullets: +${bonus}% Damage`,
      detail: `With ${gold}g held, you're getting +${bonus}% damage. ${stage < 5 ? 'Hold gold through Stage 5 for maximum boss damage.' : 'Don\'t spend gold on the boss — keep the buff active!'}`,
    })
  }

  // Nitragenic Powder advice
  if (heldArtifacts.includes('Nitragenic Powder') || heldArtifacts.includes('nitra')) {
    const critBonus = (nitra * 0.5).toFixed(1)
    recs.push({
      type: 'info',
      icon: '⚡',
      title: `Nitragenic Powder: +${critBonus}% Crit Chance`,
      detail: `With ${nitra} nitra held, you have +${critBonus}% Crit Chance. Mine aggressively — don't spend nitra on non-essential rerolls.`,
    })
  }

  // Avoid artifact warning
  if (build) {
    const avoidHeld = avoidArtifacts.filter(a => heldArtifacts.some(h => h.toLowerCase().includes(a.toLowerCase().split(' ')[0])))
    if (avoidHeld.length > 0) {
      recs.push({
        type: 'danger',
        icon: '✕',
        title: `Avoid: ${avoidHeld.join(', ')}`,
        detail: `This artifact actively hurts the ${build.name} build. ${build.id === 'interrogator-fire-dot' ? 'Squint-EE5\'s -30% Direct Damage stacks with Interrogator\'s -30% class passive.' : 'Replace at next artifact reroll opportunity.'}`,
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
            onChange={e => setGold(Math.max(0, parseInt(e.target.value) || 0))}
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
            onChange={e => setNitra(Math.max(0, parseInt(e.target.value) || 0))}
            className="w-full bg-dark-steel border border-border-subtle text-text-primary rounded-lg px-3 py-3 text-base font-mono min-h-[44px] focus:outline-none focus:border-nitra-teal"
          />
          <p className="text-xs text-text-secondary font-mono mt-1">
            Benchmark: {economy.nitraMin}–{economy.nitraMax}
          </p>
        </div>
      </div>

      {/* Artifact toggles */}
      <div>
        <label className="text-xs font-mono text-text-secondary uppercase tracking-wide block mb-2">
          Held Artifacts
        </label>
        <div className="flex flex-wrap gap-2">
          {ARTIFACT_OPTIONS.map(art => (
            <button
              key={art.id}
              onClick={() => toggleArtifact(art.id)}
              title={art.effect}
              className={[
                'text-xs font-mono px-2.5 py-1.5 rounded border transition-colors min-h-[36px]',
                heldArtifacts.includes(art.id)
                  ? 'bg-drg-amber/20 text-drg-amber border-drg-amber/50'
                  : 'bg-dark-steel text-text-secondary border-border-subtle hover:text-text-primary',
              ].join(' ')}
            >
              {art.name}
            </button>
          ))}
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
          {recs.map((rec, i) => {
            const style = TYPE_STYLES[rec.type] ?? TYPE_STYLES.note
            return (
              <div key={i} className={`rounded-lg border p-3 ${style.bg} ${style.border}`}>
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
