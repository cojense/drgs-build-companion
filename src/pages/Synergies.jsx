import { useState } from 'react'
import metaData from '../data/staging/meta.json'
import { BUILDS } from '../data/builds'

const SECTIONS = [
  { id: 'archetypes', label: 'Archetypes' },
  { id: 'synergies',  label: 'Synergy Combos' },
  { id: 'mistakes',   label: 'Common Mistakes' },
]

const STRENGTH_STYLES = {
  extreme:  'bg-lava-red/20   text-lava-red   border-lava-red',
  strong:   'bg-drg-amber/20  text-drg-amber  border-drg-amber',
  moderate: 'bg-nitra-green/20 text-nitra-green border-nitra-green',
  niche:    'bg-dark-steel    text-text-secondary border-border-subtle',
}

const ARCHETYPE_COLORS = {
  crit:            'text-drg-amber border-drg-amber',
  dot:             'text-lava-red  border-lava-red',
  'aoe-explosive': 'text-lava-red  border-lava-red',
  'tank-stationary':'text-nitra-green border-nitra-green',
  'burst-window':  'text-drg-amber border-drg-amber',
  economy:         'text-nitra-green border-nitra-green',
}

function Chip({ label, variant = 'default' }) {
  const styles = {
    default:  'bg-cave-black border-border-subtle text-text-secondary',
    weapon:   'bg-cave-black border-drg-amber/40 text-drg-amber',
    artifact: 'bg-cave-black border-nitra-green/40 text-nitra-green',
    build:    'bg-cave-black border-border-subtle text-text-primary',
  }
  return (
    <span className={`text-xs font-mono px-1.5 py-0.5 rounded border ${styles[variant]}`}>
      {label}
    </span>
  )
}

function buildNameById(id) {
  const build = BUILDS.find(b => b.id === id)
  return build ? build.name : id
}

// ── Archetype Card ────────────────────────────────────────────────────────────
function ArchetypeCard({ archetype }) {
  const [open, setOpen] = useState(false)
  const archetypeColor = ARCHETYPE_COLORS[archetype.id] || 'text-text-secondary border-border-subtle'

  return (
    <div className="rounded-lg border border-border-subtle bg-dark-steel overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left px-4 py-3 flex flex-col gap-2"
      >
        <div className="flex items-start justify-between gap-2">
          <span className="font-bold text-text-primary leading-tight">{archetype.name}</span>
          <span className={`text-xs font-mono px-1.5 py-0.5 rounded border flex-shrink-0 ${archetypeColor}`}>
            {archetype.id}
          </span>
        </div>
        <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
          {archetype.description}
        </p>
        <div className="flex items-center justify-between mt-0.5">
          <div className="flex flex-wrap gap-1">
            {archetype.keyWeapons.slice(0, 2).map((w, i) => (
              <Chip key={i} label={w} variant="weapon" />
            ))}
            {archetype.keyWeapons.length > 2 && (
              <span className="text-xs font-mono text-text-secondary">+{archetype.keyWeapons.length - 2}</span>
            )}
          </div>
          <span className="text-xs text-drg-amber font-mono">
            {open ? '▲ less' : '▼ more'}
          </span>
        </div>
      </button>

      {open && (
        <div className="border-t border-border-subtle px-4 py-3 space-y-4">
          {/* Description */}
          <p className="text-sm text-text-secondary leading-relaxed">{archetype.description}</p>

          {/* Key artifacts */}
          <div>
            <h3 className="text-xs font-mono font-bold text-nitra-green uppercase tracking-wide mb-2">
              Key Artifacts
            </h3>
            <div className="flex flex-wrap gap-1">
              {archetype.keyArtifacts.map((a, i) => (
                <Chip key={i} label={a} variant="artifact" />
              ))}
            </div>
          </div>

          {/* Key weapons */}
          <div>
            <h3 className="text-xs font-mono font-bold text-drg-amber uppercase tracking-wide mb-2">
              Key Weapons
            </h3>
            <div className="flex flex-wrap gap-1">
              {archetype.keyWeapons.map((w, i) => (
                <Chip key={i} label={w} variant="weapon" />
              ))}
            </div>
          </div>

          {/* Best builds */}
          {archetype.bestBuilds && archetype.bestBuilds.length > 0 && (
            <div>
              <h3 className="text-xs font-mono font-bold text-text-secondary uppercase tracking-wide mb-2">
                Best Builds
              </h3>
              <div className="flex flex-wrap gap-1">
                {archetype.bestBuilds.map((id, i) => (
                  <Chip key={i} label={buildNameById(id)} variant="build" />
                ))}
              </div>
            </div>
          )}

          {/* Strength / Weakness */}
          <div className="grid grid-cols-1 gap-2">
            <div className="rounded border border-nitra-green/30 bg-nitra-green/5 p-2">
              <span className="text-xs font-mono font-bold text-nitra-green uppercase tracking-wide">Strength</span>
              <p className="mt-1 text-xs text-text-secondary leading-relaxed">{archetype.strength}</p>
            </div>
            <div className="rounded border border-lava-red/30 bg-lava-red/5 p-2">
              <span className="text-xs font-mono font-bold text-lava-red uppercase tracking-wide">Weakness</span>
              <p className="mt-1 text-xs text-text-secondary leading-relaxed">{archetype.weakness}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Synergy Card ──────────────────────────────────────────────────────────────
function SynergyCard({ synergy }) {
  const [open, setOpen] = useState(false)
  const strengthStyle = STRENGTH_STYLES[synergy.strength] || STRENGTH_STYLES.niche
  const archetypeColor = ARCHETYPE_COLORS[synergy.archetype] || 'text-text-secondary border-border-subtle'

  return (
    <div className="rounded-lg border border-border-subtle bg-dark-steel overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left px-4 py-3 flex flex-col gap-2"
      >
        <div className="flex items-start justify-between gap-2">
          <span className="font-bold text-text-primary leading-tight">{synergy.name}</span>
          <span className={`text-xs font-mono px-1.5 py-0.5 rounded border flex-shrink-0 ${strengthStyle}`}>
            {synergy.strength}
          </span>
        </div>

        {/* Archetype badge + component preview */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs font-mono px-1.5 py-0.5 rounded border ${archetypeColor}`}>
            {synergy.archetype}
          </span>
          {synergy.components.weapons.slice(0, 2).map((w, i) => (
            <Chip key={i} label={w} variant="weapon" />
          ))}
          {synergy.components.artifacts.slice(0, 2).map((a, i) => (
            <Chip key={i} label={a} variant="artifact" />
          ))}
        </div>

        <div className="flex items-center justify-end">
          <span className="text-xs text-drg-amber font-mono">
            {open ? '▲ less' : '▼ more'}
          </span>
        </div>
      </button>

      {open && (
        <div className="border-t border-border-subtle px-4 py-3 space-y-4">
          {/* Description */}
          <p className="text-sm text-text-secondary leading-relaxed">{synergy.description}</p>

          {/* Components */}
          <div className="space-y-2">
            {synergy.components.weapons.length > 0 && (
              <div>
                <h3 className="text-xs font-mono font-bold text-drg-amber uppercase tracking-wide mb-1">
                  Weapons
                </h3>
                <div className="flex flex-wrap gap-1">
                  {synergy.components.weapons.map((w, i) => (
                    <Chip key={i} label={w} variant="weapon" />
                  ))}
                </div>
              </div>
            )}
            {synergy.components.artifacts.length > 0 && (
              <div>
                <h3 className="text-xs font-mono font-bold text-nitra-green uppercase tracking-wide mb-1">
                  Artifacts
                </h3>
                <div className="flex flex-wrap gap-1">
                  {synergy.components.artifacts.map((a, i) => (
                    <Chip key={i} label={a} variant="artifact" />
                  ))}
                </div>
              </div>
            )}
            {synergy.components.overclocks && synergy.components.overclocks.length > 0 && (
              <div>
                <h3 className="text-xs font-mono font-bold text-text-secondary uppercase tracking-wide mb-1">
                  Key Overclocks
                </h3>
                <ul className="space-y-0.5">
                  {synergy.components.overclocks.map((oc, i) => (
                    <li key={i} className="text-xs text-text-secondary font-mono">· {oc}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Counterplay */}
          {synergy.counterplay && (
            <div className="rounded border border-lava-red/30 bg-lava-red/5 p-2">
              <span className="text-xs font-mono font-bold text-lava-red uppercase tracking-wide">
                Counterplay / Weaknesses
              </span>
              <p className="mt-1 text-xs text-text-secondary leading-relaxed">{synergy.counterplay}</p>
            </div>
          )}

          {/* Used by builds */}
          {synergy.builds && synergy.builds.length > 0 && (
            <div>
              <h3 className="text-xs font-mono font-bold text-text-secondary uppercase tracking-wide mb-1">
                Used By
              </h3>
              <div className="flex flex-wrap gap-1">
                {synergy.builds.map((id, i) => (
                  <Chip key={i} label={buildNameById(id)} variant="build" />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ── Common Mistake Card ───────────────────────────────────────────────────────
function MistakeCard({ mistake }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-lg border border-border-subtle bg-dark-steel overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left px-4 py-3 flex flex-col gap-2"
      >
        <div className="flex items-start gap-2">
          <span className="text-lava-red font-mono font-bold text-sm flex-shrink-0 mt-0.5">✕</span>
          <span className="text-sm font-semibold text-text-primary leading-snug">{mistake.mistake}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {mistake.affectedBuilds.slice(0, 3).map((id, i) => (
              <Chip key={i} label={buildNameById(id)} variant="build" />
            ))}
            {mistake.affectedBuilds.length > 3 && (
              <span className="text-xs font-mono text-text-secondary">+{mistake.affectedBuilds.length - 3}</span>
            )}
          </div>
          <span className="text-xs text-drg-amber font-mono flex-shrink-0 ml-2">
            {open ? '▲ less' : '▼ fix'}
          </span>
        </div>
      </button>

      {open && (
        <div className="border-t border-border-subtle px-4 py-3 space-y-3">
          <div className="rounded border border-nitra-green/30 bg-nitra-green/5 p-2">
            <span className="text-xs font-mono font-bold text-nitra-green uppercase tracking-wide">Fix</span>
            <p className="mt-1 text-sm text-text-secondary leading-relaxed">{mistake.fix}</p>
          </div>

          <div>
            <h3 className="text-xs font-mono font-bold text-text-secondary uppercase tracking-wide mb-1">
              Affected Builds
            </h3>
            <div className="flex flex-wrap gap-1">
              {mistake.affectedBuilds.map((id, i) => (
                <Chip key={i} label={buildNameById(id)} variant="build" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Synergies() {
  const [section, setSection] = useState('archetypes')

  const { archetypes, synergyMatrix, commonMistakes } = metaData

  return (
    <div className="px-4 py-4 space-y-3 max-w-2xl mx-auto">
      {/* Section toggle */}
      <div className="flex items-center gap-2 flex-wrap">
        {SECTIONS.map(s => (
          <button
            key={s.id}
            onClick={() => setSection(s.id)}
            className={[
              'text-xs font-mono font-bold px-3 py-1.5 rounded border min-h-[36px] transition-colors',
              section === s.id
                ? 'bg-drg-amber text-cave-black border-drg-amber'
                : 'bg-transparent text-text-secondary border-border-subtle hover:text-text-primary',
            ].join(' ')}
          >
            {s.label}
          </button>
        ))}
        <span className="text-xs text-text-secondary font-mono ml-auto">
          {metaData.metaAsOf}
        </span>
      </div>

      {/* Archetypes */}
      {section === 'archetypes' && (
        <div className="space-y-3">
          <p className="text-xs text-text-secondary font-mono">
            {archetypes.length} build archetypes — tap any card for details
          </p>
          {archetypes.map(archetype => (
            <ArchetypeCard key={archetype.id} archetype={archetype} />
          ))}
        </div>
      )}

      {/* Synergy Combos */}
      {section === 'synergies' && (
        <div className="space-y-3">
          <p className="text-xs text-text-secondary font-mono">
            {synergyMatrix.length} documented synergy combos
          </p>
          {synergyMatrix.map(synergy => (
            <SynergyCard key={synergy.id} synergy={synergy} />
          ))}
        </div>
      )}

      {/* Common Mistakes */}
      {section === 'mistakes' && (
        <div className="space-y-3">
          <p className="text-xs text-text-secondary font-mono">
            {commonMistakes.length} common mistakes — tap any card for the fix
          </p>
          {commonMistakes.map((mistake, i) => (
            <MistakeCard key={i} mistake={mistake} />
          ))}
        </div>
      )}
    </div>
  )
}
