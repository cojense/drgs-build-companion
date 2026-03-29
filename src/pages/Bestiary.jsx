import { useState } from 'react'
import { ENEMIES, BOSSES, ENEMY_CATEGORIES } from '../data/enemies'
import { BIOMES, HAZARD_MODIFIERS } from '../data/biomes'

// ── Helpers ──────────────────────────────────────────────────────────────────

const CATEGORY_BADGE = {
  grunt:       'bg-nitra-green text-cave-black',
  ranged:      'bg-cool-blue text-cave-black',
  special:     'bg-drg-amber text-cave-black',
  stationary:  'bg-border-subtle text-text-secondary',
  'mini-elite':'bg-purple-500 text-white',
  elite:       'bg-lava-red text-white',
  passive:     'bg-nitra-teal text-cave-black',
  boss:        'bg-lava-red text-white',
}

const SPEED_COLOR = {
  'very-fast':  'text-lava-red',
  fast:         'text-drg-amber',
  medium:       'text-text-primary',
  slow:         'text-text-secondary',
  stationary:   'text-text-secondary',
}

const ALL_ENEMIES = [...ENEMIES, ...BOSSES]

// Derive all displayed categories (those that appear in data)
const DATA_CATEGORIES = ['ALL', ...ENEMY_CATEGORIES.filter(
  cat => ALL_ENEMIES.some(e => e.category === cat)
)]

function StatChip({ label, value, highlight }) {
  const displayValue = value === null || value === undefined ? '—' : value
  return (
    <span className="inline-flex items-center gap-1">
      <span className="text-xs text-text-secondary font-mono">{label}</span>
      <span className={`text-xs font-bold font-mono ${highlight ?? 'text-text-primary'}`}>{displayValue}</span>
    </span>
  )
}

function EnemyCard({ enemy }) {
  const [open, setOpen] = useState(false)
  const badgeClass = CATEGORY_BADGE[enemy.category] ?? 'bg-border-subtle text-text-secondary'

  return (
    <div className="border border-border-subtle rounded-lg overflow-hidden bg-dark-steel">
      <button
        className="w-full text-left px-3 py-3 flex items-start gap-2 min-h-[56px]"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <div className="flex-1 min-w-0">
          {/* Category badge */}
          <div className="flex flex-wrap items-center gap-1.5 mb-1">
            <span className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${badgeClass}`}>
              {enemy.category.toUpperCase()}
            </span>
            {enemy.isMassive && (
              <span className="text-xs font-mono px-1.5 py-0.5 rounded border border-lava-red text-lava-red">
                MASSIVE
              </span>
            )}
          </div>
          {/* Name */}
          <p className="font-bold text-sm text-text-primary leading-tight">{enemy.name}</p>
          {/* Quick stats row */}
          <div className="flex flex-wrap gap-3 mt-1">
            <StatChip label="HP" value={enemy.hp} highlight={enemy.hp ? 'text-nitra-green' : undefined} />
            <StatChip label="DMG" value={enemy.damage} highlight={enemy.damage ? 'text-lava-red' : undefined} />
            {enemy.speed && (
              <span className={`text-xs font-mono ${SPEED_COLOR[enemy.speed] ?? 'text-text-primary'}`}>
                {enemy.speed}
              </span>
            )}
          </div>
        </div>
        <span className={`text-text-secondary transition-transform duration-200 text-xs mt-1 shrink-0 ${open ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {/* Expanded content */}
      <div className={`grid transition-all duration-200 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-border-subtle px-3 py-3 space-y-2.5">
            {/* Extended stats */}
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {enemy.moveSpeed !== undefined && enemy.moveSpeed !== null && (
                <StatChip label="Speed" value={`${enemy.moveSpeed}u/s`} />
              )}
              {enemy.armor !== undefined && enemy.armor !== null && (
                <StatChip label="Armor" value={enemy.armor} />
              )}
              {enemy.xpValue !== undefined && enemy.xpValue !== null && (
                <StatChip label="XP" value={enemy.xpValue} highlight="text-drg-amber" />
              )}
              {enemy.explosionDamage !== undefined && (
                <StatChip label="Explosion" value={`${enemy.explosionDamage} (r${enemy.explosionRadius})`} highlight="text-lava-red" />
              )}
            </div>

            {/* Resistances */}
            {(enemy.freezeResist !== undefined || enemy.slowResist !== undefined || enemy.knockbackResist !== undefined) && (
              <div>
                <p className="text-xs font-mono text-text-secondary uppercase tracking-wide mb-0.5">Resistances</p>
                <div className="flex flex-wrap gap-2">
                  {enemy.freezeResist !== undefined && enemy.freezeResist !== null && (
                    <span className={`text-xs font-mono ${enemy.freezeResist > 0 ? 'text-cool-blue' : 'text-text-secondary'}`}>
                      Freeze {enemy.freezeResist > 0 ? `${Math.round(enemy.freezeResist * 100)}%` : 'none'}
                    </span>
                  )}
                  {enemy.slowResist !== undefined && enemy.slowResist !== null && (
                    <span className={`text-xs font-mono ${enemy.slowResist > 0 ? 'text-cool-blue' : 'text-text-secondary'}`}>
                      Slow {enemy.slowResist > 0 ? `${Math.round(enemy.slowResist * 100)}%` : 'none'}
                    </span>
                  )}
                  {enemy.knockbackResist !== undefined && enemy.knockbackResist !== null && (
                    <span className={`text-xs font-mono ${enemy.knockbackResist > 0 ? 'text-drg-amber' : 'text-text-secondary'}`}>
                      KB {enemy.knockbackResist > 0 ? `${Math.round(enemy.knockbackResist * 100)}%` : 'none'}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Weak points */}
            {enemy.weakPoints && enemy.weakPoints.length > 0 && (
              <div>
                <p className="text-xs font-mono text-text-secondary uppercase tracking-wide mb-0.5">Weak Points</p>
                <div className="flex flex-wrap gap-1">
                  {enemy.weakPoints.map((wp, i) => (
                    <span key={i} className="text-xs px-1.5 py-0.5 rounded bg-lava-red text-white font-mono">{wp}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Spawn biomes */}
            {enemy.spawnBiomes && enemy.spawnBiomes.length > 0 && (
              <div>
                <p className="text-xs font-mono text-text-secondary uppercase tracking-wide mb-0.5">Biomes</p>
                <div className="flex flex-wrap gap-1">
                  {enemy.spawnBiomes.map(b => (
                    <span key={b} className="text-xs px-1.5 py-0.5 rounded border border-border-subtle text-text-secondary font-mono">
                      {b.replace(/-/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Phases (bosses) */}
            {enemy.phases && enemy.phases.length > 0 && (
              <div>
                <p className="text-xs font-mono text-text-secondary uppercase tracking-wide mb-0.5">Phases</p>
                <div className="space-y-1">
                  {enemy.phases.map((ph, i) => (
                    <div key={i}>
                      <span className="text-xs font-mono text-drg-amber uppercase">{ph.phase}: </span>
                      <span className="text-xs text-text-secondary">{ph.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mechanics (bosses) */}
            {enemy.mechanics && (
              <div className="pt-1.5 border-t border-border-subtle">
                <p className="text-xs font-mono text-nitra-green uppercase tracking-wide mb-0.5">Mechanics</p>
                <p className="text-xs text-text-primary leading-relaxed">{enemy.mechanics}</p>
              </div>
            )}

            {/* Notes */}
            {enemy.notes && (
              <div className="pt-1.5 border-t border-border-subtle">
                <p className="text-xs font-mono text-text-secondary uppercase tracking-wide mb-0.5">Notes</p>
                <p className="text-xs text-text-primary leading-relaxed">{enemy.notes}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Biome section ─────────────────────────────────────────────────────────────

function ModifierBadge({ label, value, base }) {
  if (value === null || value === undefined) return null
  const isNeutral = value === base
  const isHigher = value > base
  const color = isNeutral ? 'text-text-secondary border-border-subtle' : isHigher ? 'text-lava-red border-lava-red' : 'text-nitra-green border-nitra-green'
  const sign = isNeutral ? '' : isHigher ? '+' : ''
  const pct = Math.round((value - 1) * 100)
  const display = isNeutral ? '0%' : `${sign}${pct}%`

  return (
    <span className={`text-xs font-mono px-1.5 py-0.5 rounded border ${color}`}>
      {label} {display}
    </span>
  )
}

function BiomeCard({ biome }) {
  const [open, setOpen] = useState(false)
  const [hazardOpen, setHazardOpen] = useState(false)

  return (
    <div className="border border-border-subtle rounded-lg overflow-hidden bg-dark-steel">
      <button
        className="w-full text-left px-3 py-3 flex items-start gap-2 min-h-[56px]"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm text-text-primary leading-tight">{biome.name}</p>
          {/* Modifier badges */}
          <div className="flex flex-wrap gap-1.5 mt-1">
            <ModifierBadge label="HP" value={biome.enemyHpModifier} base={1.0} />
            <ModifierBadge label="DMG" value={biome.enemyDamageModifier} base={1.0} />
            {biome.uniqueEnemies && biome.uniqueEnemies.length > 0 && (
              <span className="text-xs font-mono px-1.5 py-0.5 rounded border border-drg-amber text-drg-amber">
                {biome.uniqueEnemies.length} unique
              </span>
            )}
          </div>
        </div>
        <span className={`text-text-secondary transition-transform duration-200 text-xs mt-1 shrink-0 ${open ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {/* Expanded content */}
      <div className={`grid transition-all duration-200 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-border-subtle px-3 py-3 space-y-3">
            {/* Description */}
            {biome.description && (
              <p className="text-xs text-text-secondary leading-relaxed italic">{biome.description}</p>
            )}

            {/* Terrain */}
            {biome.terrain && (
              <div>
                <p className="text-xs font-mono text-text-secondary uppercase tracking-wide mb-0.5">Terrain</p>
                <p className="text-xs text-text-primary leading-relaxed">{biome.terrain}</p>
              </div>
            )}

            {/* Environmental hazards */}
            {biome.hazards && biome.hazards.length > 0 && (
              <div>
                <p className="text-xs font-mono text-lava-red uppercase tracking-wide mb-0.5">Hazards</p>
                <ul className="space-y-0.5">
                  {biome.hazards.map((h, i) => (
                    <li key={i} className="text-xs text-text-primary leading-snug">- {h}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Unique enemies */}
            {biome.uniqueEnemies && biome.uniqueEnemies.length > 0 && (
              <div>
                <p className="text-xs font-mono text-drg-amber uppercase tracking-wide mb-0.5">Unique Enemies</p>
                <div className="flex flex-wrap gap-1">
                  {biome.uniqueEnemies.map(id => (
                    <span key={id} className="text-xs px-1.5 py-0.5 rounded border border-drg-amber text-drg-amber font-mono">
                      {id.replace(/-/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tips */}
            {biome.tips && (
              <div>
                <p className="text-xs font-mono text-nitra-green uppercase tracking-wide mb-0.5">Tips</p>
                <p className="text-xs text-text-primary leading-relaxed">{biome.tips}</p>
              </div>
            )}

            {/* Resource notes */}
            {biome.resourceNotes && (
              <div>
                <p className="text-xs font-mono text-text-secondary uppercase tracking-wide mb-0.5">Resources</p>
                <p className="text-xs text-text-secondary leading-relaxed">{biome.resourceNotes}</p>
              </div>
            )}

            {/* Hazard mutator table — expandable */}
            {biome.hazardMutators && biome.hazardMutators.length > 0 && (
              <div>
                <button
                  className="flex items-center gap-1.5 text-xs font-mono text-text-secondary uppercase tracking-wide hover:text-text-primary transition-colors"
                  onClick={e => { e.stopPropagation(); setHazardOpen(o => !o) }}
                >
                  <span>Hazard Mutators</span>
                  <span className={`transition-transform duration-200 ${hazardOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                <div className={`grid transition-all duration-200 ease-in-out ${hazardOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="min-h-0 overflow-hidden">
                    <div className="mt-1.5 space-y-1.5">
                      {biome.hazardMutators.map(hm => (
                        <div key={hm.level} className="flex gap-2 items-start">
                          <span className="text-xs font-mono font-bold text-drg-amber shrink-0 w-6">H{hm.level}</span>
                          <div className="min-w-0">
                            <span className="text-xs font-semibold text-text-primary">{hm.mutator}</span>
                            {hm.description && hm.mutator !== 'None' && (
                              <p className="text-xs text-text-secondary leading-snug mt-0.5">{hm.description}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Unlock requirement */}
            {biome.unlockRequirement && (
              <p className="text-xs text-text-secondary font-mono pt-1 border-t border-border-subtle">
                Unlock: <span className="text-drg-gold">{biome.unlockRequirement}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main page component ───────────────────────────────────────────────────────

export default function Bestiary() {
  const [activeSection, setActiveSection] = useState('enemies')
  const [categoryFilter, setCategoryFilter] = useState('ALL')

  const filteredEnemies = categoryFilter === 'ALL'
    ? ALL_ENEMIES
    : ALL_ENEMIES.filter(e => e.category === categoryFilter)

  const sectionButtonClass = (id) => [
    'min-h-[40px] px-5 py-2 text-sm font-semibold tracking-wide rounded-md border transition-colors',
    activeSection === id
      ? 'bg-drg-amber text-cave-black border-drg-amber'
      : 'bg-transparent text-text-secondary border-border-subtle hover:text-text-primary',
  ].join(' ')

  return (
    <div className="px-4 py-4 space-y-4 max-w-2xl mx-auto">
      {/* Page header */}
      <div>
        <h2 className="text-drg-amber font-bold text-lg font-mono leading-tight">Bestiary</h2>
        <p className="text-text-secondary text-xs mt-0.5">
          Enemy stats, boss mechanics, and biome reference. Tap any card to expand.
        </p>
      </div>

      {/* Section toggle */}
      <div className="flex gap-2">
        <button className={sectionButtonClass('enemies')} onClick={() => setActiveSection('enemies')}>
          Enemies
        </button>
        <button className={sectionButtonClass('biomes')} onClick={() => setActiveSection('biomes')}>
          Biomes
        </button>
      </div>

      {/* ── Enemies section ── */}
      {activeSection === 'enemies' && (
        <div className="space-y-3">
          {/* Category filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono text-text-secondary uppercase tracking-wide">Filter:</span>
            {DATA_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={[
                  'text-xs font-mono font-bold px-3 py-1.5 rounded border min-h-[36px] transition-colors',
                  categoryFilter === cat
                    ? 'bg-drg-amber text-cave-black border-drg-amber'
                    : 'bg-transparent text-text-secondary border-border-subtle hover:text-text-primary',
                ].join(' ')}
              >
                {cat === 'ALL' ? 'All' : cat}
              </button>
            ))}
            <span className="text-xs text-text-secondary font-mono ml-auto">
              {filteredEnemies.length} unit{filteredEnemies.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Enemy cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {filteredEnemies.map(enemy => (
              <EnemyCard key={enemy.id} enemy={enemy} />
            ))}
          </div>
        </div>
      )}

      {/* ── Biomes section ── */}
      {activeSection === 'biomes' && (
        <div className="space-y-3">
          {/* Hazard modifier global reference */}
          <div className="border border-border-subtle rounded-lg bg-dark-steel px-3 py-3">
            <p className="text-xs font-mono text-text-secondary uppercase tracking-wide mb-2">Global Hazard Scale</p>
            <div className="space-y-1.5">
              {HAZARD_MODIFIERS.map(hm => (
                <div key={hm.level} className="flex gap-2 items-start">
                  <span className="text-xs font-mono font-bold text-drg-amber shrink-0 w-6">H{hm.level}</span>
                  <p className="text-xs text-text-secondary leading-snug">{hm.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Biome cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {BIOMES.map(biome => (
              <BiomeCard key={biome.id} biome={biome} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
