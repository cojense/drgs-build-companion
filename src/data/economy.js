export const STAGE_ECONOMY = [
  { stage: 1, goldMin: 80,  goldMax: 120, nitraMin: 30, nitraMax: 50,  saveTarget: 20,  advice: 'Hoard. Only buy S-tier artifacts or mandatory weapon cards.' },
  { stage: 2, goldMin: 100, goldMax: 150, nitraMin: 40, nitraMax: 60,  saveTarget: 30,  advice: 'Start spending on Potency/Damage upgrades. First artifact slot.' },
  { stage: 3, goldMin: 120, goldMax: 180, nitraMin: 50, nitraMax: 70,  saveTarget: 40,  advice: 'Full spend allowed. Carry should hit lv18 this stage — reroll for it.' },
  { stage: 4, goldMin: 150, goldMax: 200, nitraMin: 60, nitraMax: 80,  saveTarget: 30,  advice: 'Fill secondaries. Save 30g for Stage 5 final push.' },
  { stage: 5, goldMin: 150, goldMax: 200, nitraMin: 60, nitraMax: 80,  saveTarget: 0,   advice: 'Spend everything. Mine all nitra. Gold-Tipped Bullets peak here.' },
]

export const REROLL_COSTS = {
  shop:     [5, 7, 10, 14, 20, 28],
  levelUp:  15,
  artifact: 10,
}

export const GOLD_PER_STAGE = 150 // approximate with secondaries
export const NITRA_PER_STAGE = 50 // approximate with secondaries
