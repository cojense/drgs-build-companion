export default function StatPriorityStrip({ stats }) {
  return (
    <div className="space-y-2">
      {/* Priority order */}
      <div className="flex flex-wrap gap-1.5 items-center">
        {stats.priority.map((stat, i) => (
          <div key={stat} className="flex items-center gap-1">
            <span className="bg-elevated-panel border border-border-subtle text-text-primary text-xs font-mono px-2 py-1 rounded">
              {stat}
            </span>
            {i < stats.priority.length - 1 && (
              <span className="text-text-secondary text-xs">›</span>
            )}
          </div>
        ))}
      </div>

      {/* Avoid */}
      {stats.avoid.length > 0 && (
        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="text-xs font-mono text-lava-red uppercase tracking-wide shrink-0">Avoid:</span>
          {stats.avoid.map(stat => (
            <span
              key={stat}
              className="bg-lava-red/10 border border-lava-red/30 text-lava-red text-xs font-mono px-2 py-1 rounded line-through"
            >
              {stat}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
