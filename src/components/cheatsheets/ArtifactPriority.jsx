import ArtifactTag from '../shared/ArtifactTag'

const COLUMNS = [
  { key: 'always', label: 'ALWAYS',  bg: 'bg-nitra-green/10', border: 'border-nitra-green/30', text: 'text-nitra-green' },
  { key: 'good',   label: 'GOOD',    bg: 'bg-cool-blue/10',   border: 'border-cool-blue/30',   text: 'text-cool-blue' },
  { key: 'never',  label: 'NEVER',   bg: 'bg-lava-red/10',    border: 'border-lava-red/30',    text: 'text-lava-red' },
]

export default function ArtifactPriority({ artifacts }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {COLUMNS.map(col => (
        <div key={col.key} className={`rounded p-2 border ${col.bg} ${col.border}`}>
          <p className={`text-xs font-mono font-bold mb-1.5 ${col.text}`}>{col.label}</p>
          <ul className="space-y-1">
            {(artifacts[col.key] || []).length === 0 ? (
              <li className="text-xs text-text-secondary italic">—</li>
            ) : (
              artifacts[col.key].map(name => (
                <li key={name} className="text-xs leading-snug">
                  <ArtifactTag name={name} />
                </li>
              ))
            )}
          </ul>
        </div>
      ))}
    </div>
  )
}
