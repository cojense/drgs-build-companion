export const STAGE_ECONOMY = [
  { stage: 1, goldMin: 80,  goldMax: 120, nitraMin: 30, nitraMax: 50,  saveTarget: 20,  advice: 'Hoard gold and resist impulse buys. Only spend on S-tier artifacts or your carry weapon cards — nothing else clears the value bar. Every gold saved now compounds into a stronger Stage 2 spike.', rerollAdvice: 'Reroll once if your carry weapon card is not offered. Never reroll more than once — cost escalation on shop rerolls will eat directly into your Stage 2 budget.' },
  { stage: 2, goldMin: 100, goldMax: 150, nitraMin: 40, nitraMax: 60,  saveTarget: 30,  advice: 'Start investing in Potency and Damage upgrades to build momentum, and lock in your first artifact slot with a key damage piece. If you end the stage above 120g, consider buying into a second artifact slot rather than holding cash.', rerollAdvice: 'Reroll up to twice on artifact shops to find your key damage artifact. Skip level-up rerolls entirely — the flat 15g cost is too steep relative to your budget here.' },
  { stage: 3, goldMin: 120, goldMax: 180, nitraMin: 50, nitraMax: 70,  saveTarget: 40,  advice: 'Full spend is allowed this stage. Your carry should reach level 18 before Stage 3 ends — treat that as a hard target. If your carry is below level 15 entering this stage, funnel all available gold into weapon cards before touching anything else.', rerollAdvice: 'Reroll aggressively on level-up shops (up to 3x) if your carry is near a damage breakpoint. Shop rerolls are also fine once if no damage artifacts appeared in the opening offer.' },
  { stage: 4, goldMin: 150, goldMax: 200, nitraMin: 60, nitraMax: 80,  saveTarget: 30,  advice: 'Focus on filling secondary weapon slots and rounding out your support layers. Hold back 30g for the Stage 5 final push. If your secondaries are at level 10 or higher and you have surplus gold beyond that reserve, spend it on support artifacts that complete the build.', rerollAdvice: 'Reroll once on artifact shops if you are hunting a build-completing support piece. Avoid level-up rerolls — your gold reserve for Stage 5 is non-negotiable.' },
  { stage: 5, goldMin: 150, goldMax: 200, nitraMin: 60, nitraMax: 80,  saveTarget: 0,   advice: 'Spend everything — there is no next stage to save for. Mine every nitra deposit and convert all secondary income to gold. Prioritize hitting your carry\'s final damage breakpoints above all else; Gold-Tipped Bullets and similar peak-power cards are worth chasing at full price here.', rerollAdvice: 'Reroll freely since there is no next stage to budget for. Burn any remaining gold on rerolls to maximise your final shop offers.' },
]

export const REROLL_COSTS = {
  shop:     [5, 7, 10, 14, 20, 28],
  levelUp:  15,
  artifact: 10,
}

export const GOLD_PER_STAGE = 150 // approximate with secondaries
export const NITRA_PER_STAGE = 50 // approximate with secondaries
