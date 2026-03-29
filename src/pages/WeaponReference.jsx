import { useState } from 'react'
import { WEAPONS, WEAPON_CLASSES } from '../data/weapons'
import { BUILDS } from '../data/builds'

const CLASS_FILTERS = ['ALL', ...WEAPON_CLASSES]

const CLASS_COLORS = {
  Scout:    'text-nitra-green  border-nitra-green',
  Driller:  'text-lava-red     border-lava-red',
  Gunner:   'text-drg-amber    border-drg-amber',
  Engineer: 'text-text-primary border-border-subtle',
}

const STRENGTH_BADGE = {
  extreme:  'bg-lava-red/20  text-lava-red  border-lava-red',
  strong:   'bg-drg-amber/20 text-drg-amber border-drg-amber',
  moderate: 'bg-nitra-green/20 text-nitra-green border-nitra-green',
  niche:    'bg-dark-steel   text-text-secondary border-border-subtle',
}

function StatRow({ label, value }) {
  return (
    <div className="flex justify-between items-center py-0.5">
      <span className="text-xs text-text-secondary font-mono">{label}</span>
      <span className="text-xs text-text-primary font-mono font-medium">
        {value === null || value === undefined ? '—' : String(value)}
      </span>
    </div>
  )
}

function WeaponCard({ weapon }) {
  const [open, setOpen] = useState(false)

  // Find builds that reference this weapon by name
  const usedInBuilds = BUILDS.filter(build =>
    build.weapons && build.weapons.some(w => w.name === weapon.name)
  )

  const classColor = CLASS_COLORS[weapon.class] || 'text-text-secondary border-border-subtle'

  return (
    <div className="rounded-lg border border-border-subtle bg-dark-steel overflow-hidden">
      {/* Collapsed header — always visible */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left px-4 py-3 flex flex-col gap-2"
      >
        {/* Top row: name + badges */}
        <div className="flex items-start justify-between gap-2">
          <span className="font-bold text-text-primary leading-tight">{weapon.name}</span>
          <div className="flex items-center gap-1 flex-shrink-0">
            <span className={`text-xs font-mono px-1.5 py-0.5 rounded border ${classColor}`}>
              {weapon.class}
            </span>
          </div>
        </div>

        {/* Tags row */}
        {weapon.tags && weapon.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {weapon.tags.map(tag => (
              <span
                key={tag}
                className="text-xs font-mono px-1.5 py-0.5 rounded bg-cave-black border border-border-subtle text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Base stats summary row */}
        <div className="flex gap-4 text-xs font-mono text-text-secondary">
          <span>
            DMG:{' '}
            <span className="text-text-primary">
              {weapon.baseStats?.damage ?? '—'}
            </span>
          </span>
          <span>
            RATE:{' '}
            <span className="text-text-primary">
              {weapon.baseStats?.fireRate ?? '—'}
            </span>
          </span>
        </div>

        {/* Expand indicator */}
        <div className="flex items-center justify-between mt-0.5">
          <span className="text-xs text-text-secondary font-mono">
            {weapon.overclocks?.balanced?.length ?? 0} balanced ·{' '}
            {weapon.overclocks?.unstable?.length ?? 0} unstable OC
            {(weapon.overclocks?.unstable?.length ?? 0) !== 1 ? 's' : ''}
          </span>
          <span className="text-xs text-drg-amber font-mono">
            {open ? '▲ less' : '▼ more'}
          </span>
        </div>
      </button>

      {/* Expanded content */}
      {open && (
        <div className="border-t border-border-subtle px-4 py-3 space-y-4">
          {/* Full base stats */}
          <div>
            <h3 className="text-xs font-mono font-bold text-drg-amber uppercase tracking-wide mb-2">
              Base Stats
            </h3>
            <div className="space-y-0.5">
              <StatRow label="Damage"      value={weapon.baseStats?.damage} />
              <StatRow label="Fire Rate"   value={weapon.baseStats?.fireRate} />
              <StatRow label="Clip Size"   value={weapon.baseStats?.clipSize} />
              <StatRow label="Reload Time" value={weapon.baseStats?.reloadTime !== undefined ? `${weapon.baseStats.reloadTime}s` : null} />
              <StatRow label="Range"       value={weapon.baseStats?.range} />
              {weapon.baseStats?.projectilesPerShot !== undefined && (
                <StatRow label="Projectiles/Shot" value={weapon.baseStats.projectilesPerShot} />
              )}
              {weapon.baseStats?.pierce !== undefined && (
                <StatRow label="Pierce" value={weapon.baseStats.pierce} />
              )}
              {weapon.baseStats?.firingPattern && (
                <StatRow label="Pattern" value={weapon.baseStats.firingPattern} />
              )}
              {weapon.baseStats?.beams !== undefined && (
                <StatRow label="Beams" value={weapon.baseStats.beams} />
              )}
              {weapon.baseStats?.drones !== undefined && (
                <StatRow label="Drones" value={weapon.baseStats.drones} />
              )}
              {weapon.baseStats?.explosionRadius !== undefined && (
                <StatRow label="Blast Radius" value={weapon.baseStats.explosionRadius} />
              )}
            </div>
          </div>

          {/* Overclocks */}
          {weapon.overclocks && (
            <div className="space-y-3">
              {/* Balanced OCs */}
              {weapon.overclocks.balanced && weapon.overclocks.balanced.length > 0 && (
                <div>
                  <h3 className="text-xs font-mono font-bold text-nitra-green uppercase tracking-wide mb-2">
                    Balanced OCs
                  </h3>
                  <ul className="space-y-2">
                    {weapon.overclocks.balanced.map((oc, i) => (
                      <li key={i} className="flex flex-col gap-0.5">
                        <span className="text-sm font-semibold text-text-primary">{oc.name}</span>
                        <span className="text-xs text-text-secondary">{oc.effect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Unstable OCs */}
              {weapon.overclocks.unstable && weapon.overclocks.unstable.length > 0 && (
                <div>
                  <h3 className="text-xs font-mono font-bold text-lava-red uppercase tracking-wide mb-1">
                    Unstable OCs
                    <span className="ml-2 text-xs font-normal text-lava-red normal-case tracking-normal">
                      (high risk / high reward)
                    </span>
                  </h3>
                  <ul className="space-y-2">
                    {weapon.overclocks.unstable.map((oc, i) => (
                      <li key={i} className="flex flex-col gap-0.5 border-l-2 border-lava-red pl-2">
                        <span className="text-sm font-semibold text-text-primary">{oc.name}</span>
                        <span className="text-xs text-text-secondary">{oc.effect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Used in Builds */}
          <div>
            <h3 className="text-xs font-mono font-bold text-drg-amber uppercase tracking-wide mb-2">
              Used in Builds
            </h3>
            {usedInBuilds.length > 0 ? (
              <div className="flex flex-wrap gap-1">
                {usedInBuilds.map(build => (
                  <span
                    key={build.id}
                    className="text-xs font-mono px-2 py-0.5 rounded border border-drg-amber text-drg-amber"
                  >
                    {build.name}
                    <span className="ml-1 text-text-secondary">({build.tier})</span>
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-xs text-text-secondary font-mono">No listed builds</span>
            )}
          </div>

          {/* Notes */}
          {weapon.notes && (
            <div>
              <h3 className="text-xs font-mono font-bold text-text-secondary uppercase tracking-wide mb-1">
                Notes
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">{weapon.notes}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function WeaponReference() {
  const [classFilter, setClassFilter] = useState('ALL')

  const filtered = classFilter === 'ALL'
    ? WEAPONS
    : WEAPONS.filter(w => w.class === classFilter)

  return (
    <div className="px-4 py-4 space-y-3 max-w-2xl mx-auto">
      {/* Class filter bar */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-mono text-text-secondary uppercase tracking-wide">Class:</span>
        {CLASS_FILTERS.map(cls => (
          <button
            key={cls}
            onClick={() => setClassFilter(cls)}
            className={[
              'text-xs font-mono font-bold px-3 py-1.5 rounded border min-h-[36px] transition-colors',
              classFilter === cls
                ? 'bg-drg-amber text-cave-black border-drg-amber'
                : 'bg-transparent text-text-secondary border-border-subtle hover:text-text-primary',
            ].join(' ')}
          >
            {cls}
          </button>
        ))}
        <span className="text-xs text-text-secondary font-mono ml-auto">
          {filtered.length} weapon{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Weapon cards — 1 col mobile, 2 col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filtered.map(weapon => (
          <WeaponCard key={weapon.id} weapon={weapon} />
        ))}
      </div>
    </div>
  )
}
