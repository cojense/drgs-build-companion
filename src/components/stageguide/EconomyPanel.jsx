import { STAGE_ECONOMY, REROLL_COSTS } from '../../data/economy'

export default function EconomyPanel({ currentStage }) {
  const stageData = STAGE_ECONOMY.find(s => s.stage === currentStage) ?? STAGE_ECONOMY[0]
  const rerollCosts = REROLL_COSTS.shop

  return (
    <div className="mt-4 bg-elevated-panel border border-border-subtle rounded-lg overflow-hidden">
      <div className="px-4 py-3 border-b border-border-subtle">
        <h3 className="text-xs font-mono text-text-secondary uppercase tracking-widest">
          Stage {currentStage} Economy
        </h3>
      </div>

      {/* Benchmarks */}
      <div className="px-4 py-3 grid grid-cols-2 gap-3 border-b border-border-subtle">
        <div>
          <p className="text-xs font-mono text-text-secondary uppercase tracking-wide mb-1">Gold Range</p>
          <p className="text-sm text-drg-amber font-mono font-bold">
            {stageData.goldMin}–{stageData.goldMax}g
          </p>
          <p className="text-xs text-text-secondary mt-0.5">
            Save target: <span className="text-drg-gold">{stageData.saveTarget}g</span>
          </p>
        </div>
        <div>
          <p className="text-xs font-mono text-text-secondary uppercase tracking-wide mb-1">Nitra Range</p>
          <p className="text-sm text-nitra-teal font-mono font-bold">
            {stageData.nitraMin}–{stageData.nitraMax}
          </p>
          <p className="text-xs text-text-secondary mt-0.5">
            Artifact reroll: <span className="text-nitra-teal">10 nitra</span>
          </p>
        </div>
      </div>

      {/* Advice */}
      <div className="px-4 py-3 border-b border-border-subtle">
        <p className="text-xs font-mono text-text-secondary uppercase tracking-wide mb-1.5">Spend Strategy</p>
        <p className="text-sm text-text-primary leading-relaxed">{stageData.advice}</p>
        {stageData.rerollAdvice && (
          <p className="text-sm text-nitra-teal leading-relaxed mt-2">{stageData.rerollAdvice}</p>
        )}
      </div>

      {/* Reroll cost ladder */}
      <div className="px-4 py-3">
        <p className="text-xs font-mono text-text-secondary uppercase tracking-wide mb-2">Shop Reroll Costs</p>
        <div className="flex gap-1.5 flex-wrap">
          {rerollCosts.map((cost, i) => (
            <div
              key={i}
              className={`px-2 py-1 rounded text-xs font-mono font-bold border ${
                i === 0 ? 'bg-nitra-green/20 border-nitra-green/40 text-nitra-green' :
                i === 1 ? 'bg-cool-blue/20 border-cool-blue/40 text-cool-blue' :
                i <= 3   ? 'bg-drg-amber/20 border-drg-amber/40 text-drg-amber' :
                           'bg-lava-red/20 border-lava-red/40 text-lava-red'
              }`}
            >
              {i + 1}× {cost}g
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-2">
          <span className="text-xs text-text-secondary">
            Level-up reroll: <span className="text-drg-gold font-mono">{REROLL_COSTS.levelUp}g</span>
          </span>
          <span className="text-xs text-text-secondary">
            Artifact reroll: <span className="text-nitra-teal font-mono">{REROLL_COSTS.artifact} nitra</span>
          </span>
        </div>
      </div>
    </div>
  )
}
