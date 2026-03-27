const VERDICT_STYLES = {
  take:        'bg-nitra-green/20 text-nitra-green border border-nitra-green/30',
  situational: 'bg-drg-gold/20 text-drg-gold border border-drg-gold/30',
  skip:        'bg-lava-red/20 text-lava-red border border-lava-red/30',
}

const VERDICT_LABEL = {
  take:        'TAKE',
  situational: 'FLEX',
  skip:        'SKIP',
}

export default function OverclockTable({ weapons }) {
  return (
    <div className="space-y-4">
      {weapons.map(weapon => (
        <div key={weapon.name}>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-mono font-bold text-text-primary">{weapon.name}</span>
            {weapon.isCarry && (
              <span className="text-xs font-mono px-1.5 py-0.5 bg-drg-amber/20 text-drg-amber border border-drg-amber/30 rounded">
                CARRY
              </span>
            )}
          </div>
          <div className="space-y-1.5">
            {weapon.overclocks.map(oc => (
              <div key={oc.level} className="flex items-start gap-2">
                {/* Level pip */}
                <span className="text-xs font-mono text-text-secondary w-8 shrink-0 pt-0.5">
                  lv{oc.level}
                </span>
                {/* Verdict badge */}
                <span className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded shrink-0 ${VERDICT_STYLES[oc.verdict]}`}>
                  {VERDICT_LABEL[oc.verdict]}
                </span>
                {/* OC name + note */}
                <div className="min-w-0">
                  <span className="text-sm text-text-primary font-semibold">{oc.name}</span>
                  <p className="text-xs text-text-secondary leading-snug mt-0.5">{oc.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
