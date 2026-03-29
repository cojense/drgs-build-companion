# DRG:S Build Companion — Content Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring the app to full game content coverage — all ~42 artifacts, 12-subclass build coverage, and 3 new feature pages (Artifact Tiers, Weapon Reference, Synergies).

**Architecture:** Data-first — Phase 1 creates a centralized `artifacts.js` that all pages import; Phase 2 adds 4 new builds to `builds.js`; Phase 3 builds new pages on top of the data layer; Phase 4 polishes text.

**Tech Stack:** React 19, Vite 8, Tailwind CSS 4, Vitest (added in Task 1)

---

## File Map

| Action | File | Responsibility |
|---|---|---|
| Create | `src/data/artifacts.js` | All ~42 artifacts — single source of truth |
| Create | `src/data/weapons.js` | All weapons with overclocks (Phase 3) |
| Create | `src/data/synergies.js` | Weapon-artifact-overclock combos (Phase 3) |
| Create | `src/pages/ArtifactTiers.jsx` | Artifact tier list page |
| Create | `src/pages/WeaponReference.jsx` | Weapon + overclock reference page |
| Create | `src/pages/Synergies.jsx` | Synergy chart page |
| Create | `src/components/artifacts/ArtifactCard.jsx` | Single artifact display |
| Create | `src/components/weapons/WeaponCard.jsx` | Single weapon display |
| Create | `src/tests/artifacts.test.js` | Data schema validation |
| Create | `src/tests/builds.test.js` | Build data integrity |
| Modify | `src/data/builds.js` | Remove ARTIFACT_TIERS; normalize formatting; add 4 builds |
| Modify | `src/data/economy.js` | No changes |
| Modify | `src/pages/ShopOptimizer.jsx` | Import artifacts.js; fix comparison bug; expand to all artifacts |
| Modify | `src/App.jsx` | Add 3 new tabs |
| Modify | `vite.config.js` | Add Vitest test config |
| Modify | `package.json` | Add test script |

---

## Phase 1: Data Foundation

### Task 1: Add Vitest

**Files:**
- Modify: `package.json`
- Modify: `vite.config.js`

- [ ] **Install Vitest**

```bash
npm install -D vitest
```

- [ ] **Add test config to `vite.config.js`**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/drgs-build-companion/',
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'node',
    globals: true,
  },
})
```

- [ ] **Add test script to `package.json`**

In the `"scripts"` object, add:
```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Verify Vitest works**

```bash
npm test
```

Expected output: `No test files found` (not an error — just no tests yet)

- [ ] **Commit**

```bash
git add vite.config.js package.json package-lock.json
git commit -m "chore: add Vitest for data validation tests"
```

---

### Task 2: Create `src/data/artifacts.js`

**Files:**
- Create: `src/data/artifacts.js`

- [ ] **Write `src/data/artifacts.js` with all confirmed artifacts**

```js
// All DRG:S artifacts. Source: deeprockgalactic.wiki.gg/wiki/Survivor:Artifacts
// If the wiki shows artifacts not listed here, add them following the same shape.
export const ARTIFACTS = [
  // ── S-Tier ──────────────────────────────────────────────────────────────
  {
    id: 'squint-ee5',
    name: 'Squint-EE5',
    rarity: 'epic',
    tier: 'S',
    category: 'damage',
    effect: '+30% Crit Chance, +100% Crit Damage, -30% Direct Damage',
    unlock: 'Reach 75% Global Crit Chance',
    synergy: 'Core for crit builds (Sharpshooter). The direct damage penalty vanishes at high crit rates. Avoid on DoT builds — crits don\'t apply to damage-over-time.',
  },
  {
    id: 'energy-bars',
    name: 'Energy Bars',
    rarity: 'epic',
    tier: 'S',
    category: 'damage',
    effect: '+1% Damage per player level, -3 Max HP per level',
    unlock: 'Accumulate 1,000 level-ups',
    synergy: 'Scales massively with level. Pair with BLT Ration Pack to offset the HP penalty.',
  },
  {
    id: 'pay2win-console',
    name: 'Pay2Win Console',
    rarity: 'epic',
    tier: 'S',
    category: 'damage',
    effect: '+2.5% Damage per reroll, max 100 stacks',
    unlock: 'Spend 100 Gold on rerolls',
    synergy: 'Rewards aggressive rerolling. Best in later stages when you can afford multiple rerolls. Reworked in Update 04 — no longer drains gold.',
  },
  {
    id: 'divers-manual',
    name: "Diver's Manual",
    rarity: 'epic',
    tier: 'S',
    category: 'damage',
    effect: '+10% Damage, +10% Reload Speed, +5% Crit Chance, +15% Crit Damage',
    unlock: 'Complete 10 dives',
    synergy: 'No downside. Universally strong on every build — always take it.',
  },
  // ── A-Tier ──────────────────────────────────────────────────────────────
  {
    id: 'pickled-nitra',
    name: 'Pickled Nitra',
    rarity: 'epic',
    tier: 'A',
    category: 'damage',
    effect: '+2% Damage and -0.5% Move Speed per Nitra held',
    unlock: 'Deal 1,337 or more damage in a single hit',
    synergy: 'Rewards hoarding Nitra. Less effective if you spend Nitra on artifact rerolls constantly.',
  },
  {
    id: 'gold-tipped-bullets',
    name: 'Gold-Tipped Bullets',
    rarity: 'epic',
    tier: 'A',
    category: 'damage',
    effect: '+1% Damage per 5 Gold held, max 250 stacks',
    unlock: 'Collect 2,000 Gold total',
    synergy: 'Rewards gold hoarding. Avoid if spending gold aggressively on rerolls.',
  },
  {
    id: 'nitragenic-powder',
    name: 'Nitragenic Powder',
    rarity: 'rare',
    tier: 'A',
    category: 'damage',
    effect: '+0.5% Crit Chance per Nitra held, max 500 stacks',
    unlock: 'Collect 2,000 Nitra total',
    synergy: 'Best with Squint-EE5 on crit builds. Hold your Nitra — don\'t reroll artifacts.',
  },
  {
    id: 'ammo-rig',
    name: 'Ammo Rig',
    rarity: 'epic',
    tier: 'A',
    category: 'damage',
    effect: '+50% Fire Rate, -15% Move Speed',
    unlock: 'Reach 75% Reload Speed',
    synergy: 'Huge DPS increase. Movement penalty is manageable with Jet Boots or Armor Grease.',
  },
  {
    id: '5-leaf-clover',
    name: '5 Leaf Clover',
    rarity: 'epic',
    tier: 'A',
    category: 'utility',
    effect: '+15 Luck; +20 Luck for 5s when rerolling',
    unlock: 'Added in Update 04',
    synergy: 'Excellent for builds that reroll frequently. Pairs with Pay2Win Console for double value per reroll.',
  },
  {
    id: 'chemist-kit',
    name: 'Chemist Kit',
    rarity: 'rare',
    tier: 'A',
    category: 'damage',
    effect: '+15% Potency, +15% Status Effect Damage',
    unlock: 'Apply 500 status effects',
    synergy: 'Essential for DoT builds (Interrogator, Foreman). Useless on direct-damage builds.',
  },
  {
    id: 'multi-tool',
    name: 'Multi Tool',
    rarity: 'epic',
    tier: 'A',
    category: 'damage',
    effect: '-25% Reload Speed base, +5% Reload Speed per unique weapon tag equipped',
    unlock: 'Deal 5 different damage types',
    synergy: 'Rewards running diverse weapon loadouts. Check your tag count — need 5+ tags to break even.',
  },
  // ── B-Tier ──────────────────────────────────────────────────────────────
  {
    id: 'blt-ration-pack',
    name: 'BLT Ration Pack',
    rarity: 'epic',
    tier: 'B',
    category: 'survivability',
    effect: '+80 Max HP, +2 HP Regen per second',
    unlock: 'Reach 300 Max HP',
    synergy: 'Best early when HP is low. Counteracts Energy Bars HP penalty. Less impactful late game.',
  },
  {
    id: 'the-mocap',
    name: 'The MoCap',
    rarity: 'epic',
    tier: 'B',
    category: 'damage',
    effect: '+1% Damage per 1% missing HP',
    unlock: 'Kill a Dreadnought with 30 HP or less remaining',
    synergy: 'High risk, high reward. Best on tanky builds that can safely sustain at low HP.',
  },
  {
    id: 'turbo-encabulator',
    name: 'Turbo Encabulator',
    rarity: 'epic',
    tier: 'B',
    category: 'damage',
    effect: '+3% Damage, +3% Reload Speed, -5% Mining Speed per Overclock equipped',
    unlock: 'Equip 10 Overclocks total',
    synergy: 'Scales with overclock count. Best in builds that naturally stack many overclocks by Stage 5.',
  },
  {
    id: 'popup-tripod',
    name: 'Popup Tripod',
    rarity: 'rare',
    tier: 'B',
    category: 'utility',
    effect: '+2% Fire Rate and Reload Speed while stationary, 3s ramp, stacks 15x',
    unlock: 'Kill 15,000 aliens while standing still',
    synergy: 'Rewards stationary playstyle. Anti-synergy with builds that reward constant movement.',
  },
  {
    id: 'ancient-knowledge',
    name: 'Ancient Knowledge',
    rarity: 'rare',
    tier: 'B',
    category: 'utility',
    effect: 'Gain 3 levels instantly',
    unlock: 'Reach level 50 in a single dive',
    synergy: 'Front-loads leveling for faster overclock access. Strong for early-game spike strategies.',
  },
  {
    id: 'piercing-projectiles',
    name: 'Piercing Projectiles',
    rarity: 'rare',
    tier: 'B',
    category: 'damage',
    effect: '+50% Piercing',
    unlock: 'Fire 150,000 projectiles',
    synergy: 'Excellent for horde-clearing. Best on weapons with inherent piercing tags.',
  },
  {
    id: 'salty-pretzel',
    name: 'Salty Pretzel',
    rarity: 'epic',
    tier: 'B',
    category: 'survivability',
    effect: '+1 Armor per 2% missing HP',
    unlock: 'Reach 50 Armor',
    synergy: 'Scaling defense. Ideal for Juggernaut builds that stack armor passively.',
  },
  {
    id: 'drg-coupon',
    name: 'DRG Coupon',
    rarity: 'rare',
    tier: 'B',
    category: 'economy',
    effect: '20% shop discount on all purchases',
    unlock: 'Spend 2,500 Gold total',
    synergy: 'Stretches gold further. Best early when shop prices are steep relative to gold income.',
  },
  {
    id: 'armor-grease',
    name: 'Armor Grease',
    rarity: 'rare',
    tier: 'B',
    category: 'movement',
    effect: '+5% Move Speed; +2% Dodge Chance while moving, 3s ramp, stacks 5x',
    unlock: 'Dodge 100 attacks',
    synergy: 'Rewards constant movement. Good synergy with Recon Scout passive (+35% Move Speed on dodge).',
  },
  {
    id: 'reflex-calibrator',
    name: 'Reflex Calibrator',
    rarity: 'rare',
    tier: 'B',
    category: 'survivability',
    effect: '+5% Armor; +5% Dodge Chance on taking damage, 10s duration, stacks 5x',
    unlock: 'Take 2,000 damage total',
    synergy: 'Reactive defense — gets stronger as you take hits. Good on tank-style builds.',
  },
  {
    id: 'tactical-cookie',
    name: 'Tactical Cookie',
    rarity: 'rare',
    tier: 'B',
    category: 'survivability',
    effect: '+5% Max HP; heal 50% Max HP when entering the Drop Pod',
    unlock: 'Added in Update 04',
    synergy: 'Between-stage healing is valuable when you exit a stage low. Pairs with BLT Ration Pack.',
  },
  {
    id: 'jet-boots',
    name: 'Jet Boots',
    rarity: 'epic',
    tier: 'B',
    category: 'movement',
    effect: 'Dash away quickly on taking damage (20s cooldown)',
    unlock: 'Added in Update 04',
    synergy: 'Emergency escape tool. Best for squishy builds that need one bail-out option per fight.',
  },
  // ── C-Tier ──────────────────────────────────────────────────────────────
  {
    id: 'barley-bulb-juice',
    name: 'Barley Bulb Juice',
    rarity: 'rare',
    tier: 'C',
    category: 'movement',
    effect: '+5% Move Speed when standing still, 3s ramp, stacks 5x',
    unlock: 'Reach 50% Move Speed',
    synergy: 'Contradictory conditions — speed for standing still. Rarely useful in practice.',
  },
  {
    id: 'weapon-box',
    name: 'Weapon Box',
    rarity: 'epic',
    tier: 'C',
    category: 'utility',
    effect: 'Equip an additional level 6 weapon with a random Overclock',
    unlock: 'Acquire 10 Mastery Points',
    synergy: 'Extra weapon can be powerful but is random. Best if you need AoE or damage-type coverage.',
  },
  {
    id: 'brn-shield-belt',
    name: 'BRN Shield Belt',
    rarity: 'rare',
    tier: 'C',
    category: 'damage',
    effect: '+15% Fire Damage; exploding fire ring on taking damage (15s cooldown)',
    unlock: 'Deal 250,000 Fire Damage',
    synergy: 'Only valuable on fire-damage builds (Interrogator, CRSPR Flamethrower). Skip otherwise.',
  },
  {
    id: 'frz-shield-belt',
    name: 'FRZ Shield Belt',
    rarity: 'rare',
    tier: 'C',
    category: 'damage',
    effect: '+15% Cryo Damage; knockback + slow ring on taking damage (15s cooldown)',
    unlock: 'Deal 250,000 Cryo Damage',
    synergy: 'Only valuable on cryo-damage builds (Cryo Cannon, Cryo Grenade loadouts). Skip otherwise.',
  },
  {
    id: 'clipboard-of-grudges',
    name: 'Clipboard of Grudges',
    rarity: 'rare',
    tier: 'C',
    category: 'utility',
    effect: '+10% XP Gain; gain XP from dealing damage (min 8, max 14 XP, 0.5s cooldown)',
    unlock: 'Kill 1,000 aliens',
    synergy: 'XP gain speeds leveling but isn\'t impactful enough to justify over damage artifacts.',
  },
  {
    id: 'company-issued-magnet',
    name: 'Company-Issued Magnet',
    rarity: 'rare',
    tier: 'C',
    category: 'utility',
    effect: '+10% XP Gain; magnet collects 50% of remaining XP at stage end',
    unlock: 'Collect 25 XP Magnets',
    synergy: 'Prevents XP waste at end of stage. Situationally useful if you frequently miss XP pickups.',
  },
  {
    id: 'huuli-bait',
    name: 'Huuli Bait',
    rarity: 'epic',
    tier: 'C',
    category: 'utility',
    effect: 'Lures Huuli Hoarders to your location',
    unlock: 'Added in Update 04',
    synergy: 'Useful for farming Huuli gold drops if you can survive the ambush.',
  },
  // ── D-Tier ──────────────────────────────────────────────────────────────
  {
    id: 'gold-scanner',
    name: 'Gold Scanner',
    rarity: 'rare',
    tier: 'D',
    category: 'economy',
    effect: 'Chance to find Gold deposits when mining',
    unlock: 'Collect 250 Gold',
    synergy: 'Passive gold income, but combat-based gold is usually more efficient.',
  },
  {
    id: 'nitra-scanner',
    name: 'Nitra Scanner',
    rarity: 'rare',
    tier: 'D',
    category: 'economy',
    effect: 'Chance to find Nitra deposits when mining',
    unlock: 'Collect 250 Nitra',
    synergy: 'Nitra income rarely a bottleneck. Generally outclassed by combat artifacts.',
  },
  {
    id: 'xp-scanner',
    name: 'XP Scanner',
    rarity: 'rare',
    tier: 'D',
    category: 'utility',
    effect: 'Chance to find XP Crystals when mining',
    unlock: 'Collect 100 XP Crystals',
    synergy: 'Marginal XP gain. Very rarely worth taking over combat artifacts.',
  },
  {
    id: 'red-sugar-cube',
    name: 'Red Sugar Cube',
    rarity: 'rare',
    tier: 'D',
    category: 'survivability',
    effect: '+3 Max HP per Red Sugar collected',
    unlock: 'Default unlock',
    synergy: 'Too slow to be meaningful. Outpaced quickly by BLT Ration Pack.',
  },
  {
    id: 'vita-miner-pills',
    name: 'Vita-Miner Pills',
    rarity: 'rare',
    tier: 'D',
    category: 'survivability',
    effect: '+5% Max HP; increases HP restored on level-up',
    unlock: 'Default unlock',
    synergy: 'Early-game only. Quickly outpaced by direct HP or damage artifacts.',
  },
  {
    id: 'pick-axtender',
    name: 'Pick Axtender',
    rarity: 'epic',
    tier: 'D',
    category: 'utility',
    effect: '-10% Mining Speed; increases mining reach and range',
    unlock: 'Added in Update 04',
    synergy: 'Quality-of-life for mining but the mining speed penalty makes this a net negative.',
  },
]

// Convenience lookup by ID
export const ARTIFACT_BY_ID = Object.fromEntries(ARTIFACTS.map(a => [a.id, a]))

// Convenience lookup by name (for cross-referencing builds.js artifact arrays)
export const ARTIFACT_BY_NAME = Object.fromEntries(ARTIFACTS.map(a => [a.name, a]))

export const ARTIFACT_CATEGORIES = [
  { id: 'damage',        label: 'Damage' },
  { id: 'survivability', label: 'Survivability' },
  { id: 'economy',       label: 'Economy' },
  { id: 'movement',      label: 'Movement' },
  { id: 'utility',       label: 'Utility' },
]
```

> **Note:** The DRG:S wiki lists ~42 total artifacts. The file above contains 36 confirmed entries. Before finishing Task 2, open `https://deeprockgalactic.wiki.gg/wiki/Survivor:Artifacts` and add any artifacts not listed above, following the same schema. Pay attention to entries added in recent patches.

- [ ] **Commit**

```bash
git add src/data/artifacts.js
git commit -m "feat: add centralized artifacts.js with all confirmed artifacts"
```

---

### Task 3: Write artifact data validation tests

**Files:**
- Create: `src/tests/artifacts.test.js`

- [ ] **Create `src/tests/artifacts.test.js`**

```js
import { describe, it, expect } from 'vitest'
import { ARTIFACTS, ARTIFACT_BY_ID, ARTIFACT_BY_NAME } from '../data/artifacts.js'

const REQUIRED_FIELDS = ['id', 'name', 'rarity', 'tier', 'category', 'effect', 'unlock', 'synergy']
const VALID_RARITIES = ['rare', 'epic']
const VALID_TIERS = ['S', 'A', 'B', 'C', 'D']
const VALID_CATEGORIES = ['damage', 'survivability', 'economy', 'movement', 'utility']

describe('ARTIFACTS array', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(ARTIFACTS)).toBe(true)
    expect(ARTIFACTS.length).toBeGreaterThan(0)
  })

  it('has no duplicate IDs', () => {
    const ids = ARTIFACTS.map(a => a.id)
    const unique = new Set(ids)
    expect(unique.size).toBe(ids.length)
  })

  it('has no duplicate names', () => {
    const names = ARTIFACTS.map(a => a.name)
    const unique = new Set(names)
    expect(unique.size).toBe(names.length)
  })

  REQUIRED_FIELDS.forEach(field => {
    it(`every artifact has a non-empty "${field}" field`, () => {
      ARTIFACTS.forEach(artifact => {
        expect(artifact[field], `${artifact.id} missing ${field}`).toBeTruthy()
        expect(typeof artifact[field]).toBe('string')
      })
    })
  })

  it('every artifact has a valid rarity', () => {
    ARTIFACTS.forEach(a => {
      expect(VALID_RARITIES, `${a.id} has invalid rarity: ${a.rarity}`).toContain(a.rarity)
    })
  })

  it('every artifact has a valid tier', () => {
    ARTIFACTS.forEach(a => {
      expect(VALID_TIERS, `${a.id} has invalid tier: ${a.tier}`).toContain(a.tier)
    })
  })

  it('every artifact has a valid category', () => {
    ARTIFACTS.forEach(a => {
      expect(VALID_CATEGORIES, `${a.id} has invalid category: ${a.category}`).toContain(a.category)
    })
  })
})

describe('ARTIFACT_BY_ID lookup', () => {
  it('contains the same count as ARTIFACTS', () => {
    expect(Object.keys(ARTIFACT_BY_ID).length).toBe(ARTIFACTS.length)
  })

  it('returns the correct artifact for a known ID', () => {
    expect(ARTIFACT_BY_ID['squint-ee5'].name).toBe('Squint-EE5')
    expect(ARTIFACT_BY_ID['blt-ration-pack'].name).toBe('BLT Ration Pack')
    expect(ARTIFACT_BY_ID['pay2win-console'].tier).toBe('S')
  })
})

describe('ARTIFACT_BY_NAME lookup', () => {
  it('contains the same count as ARTIFACTS', () => {
    expect(Object.keys(ARTIFACT_BY_NAME).length).toBe(ARTIFACTS.length)
  })

  it('returns correct artifact for a known name', () => {
    expect(ARTIFACT_BY_NAME["Diver's Manual"].id).toBe('divers-manual')
  })
})
```

- [ ] **Run tests and confirm they pass**

```bash
npm test
```

Expected: all tests pass.

- [ ] **Commit**

```bash
git add src/tests/artifacts.test.js
git commit -m "test: add artifact data schema validation tests"
```

---

### Task 4: Clean up `builds.js`

**Files:**
- Modify: `src/data/builds.js`

This task has no code generation — it's normalizing existing data. Do these edits in order.

- [ ] **Remove the `ARTIFACT_TIERS` export** (last ~20 lines of `builds.js`)

Delete this block entirely:
```js
export const ARTIFACT_TIERS = {
  S: [...],
  A: [...],
  B: [...],
}
```

- [ ] **Normalize `artifacts.never` arrays** — every entry should use `"Name — reason"` format with an em-dash (` — `). Currently some entries are plain names, some have explanations in inconsistent formats.

Go through each build's `artifacts.never` array and ensure every entry either:
- Is a plain artifact name if the reason is obvious: `'Barley Bulb Juice'`
- Includes the reason after an em-dash: `'Squint-EE5 — -30% Direct Damage stacks with class passive for -60% total, no upside for DoT'`

- [ ] **Normalize `stats.avoid` arrays** — same pattern: `'Stat Name'` or `'Stat Name — reason why'`

- [ ] **Run the app and confirm build cards still render**

```bash
npm run dev
```

Open `http://localhost:5173/drgs-build-companion/` and confirm all build cards expand correctly.

- [ ] **Commit**

```bash
git add src/data/builds.js
git commit -m "refactor: remove ARTIFACT_TIERS, normalize artifact/stat formatting in builds.js"
```

---

### Task 5: Refactor `ShopOptimizer.jsx`

**Files:**
- Modify: `src/pages/ShopOptimizer.jsx`

Key changes:
1. Replace inline `ARTIFACT_OPTIONS` with import from `artifacts.js`
2. Fix the `wantedArtifacts` comparison bug (was comparing names vs IDs — never matched)
3. Group artifact toggles by category
4. Update all ID-based checks to use kebab-case IDs

- [ ] **Replace the import block and ARTIFACT_OPTIONS constant**

Replace lines 1-15 (current imports + ARTIFACT_OPTIONS):
```js
import { useState, useMemo } from 'react'
import { BUILDS } from '../data/builds'
import { STAGE_ECONOMY, REROLL_COSTS } from '../data/economy'
import { ARTIFACTS, ARTIFACT_BY_NAME, ARTIFACT_CATEGORIES } from '../data/artifacts'
```

- [ ] **Update `computeRecommendations` — fix the wantedArtifacts comparison**

Replace the existing `computeRecommendations` function with:
```js
function computeRecommendations({ stage, gold, nitra, heldArtifacts, buildId }) {
  const economy = STAGE_ECONOMY[stage - 1]
  const build = BUILDS.find(b => b.id === buildId)
  const wantedArtifacts = build ? build.artifacts.always : []
  const avoidArtifacts = build ? build.artifacts.never : []

  const recs = []

  // Gold assessment
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
      detail: `You have ${gold}g — well above benchmark. ${stage < 5 ? 'Consider rerolling shop up to 2× for S-tier weapon upgrades.' : 'Spend aggressively — this is the final stage.'}`,
    })
  }

  // Nitra assessment
  if (nitra < economy.nitraMin) {
    recs.push({
      type: 'warn',
      icon: '⚠',
      title: 'Low Nitra',
      detail: `Expected ${economy.nitraMin}–${economy.nitraMax} nitra. Mine nitra veins before Stage ${stage + 1 <= 5 ? stage + 1 : 'end'}. Artifact rerolls cost ${REROLL_COSTS.artifact} nitra each.`,
    })
  }

  // Reroll affordability
  const goldAfterSave = gold - economy.saveTarget
  if (goldAfterSave >= REROLL_COSTS.shop[0]) {
    const maxRerolls = REROLL_COSTS.shop.filter((_, i) => {
      const spent = REROLL_COSTS.shop.slice(0, i + 1).reduce((a, b) => a + b, 0)
      return spent <= goldAfterSave
    }).length
    // Resolve wanted artifact names for display
    const wantedNames = wantedArtifacts
      .map(name => name.split(' — ')[0].trim())
    recs.push({
      type: 'info',
      icon: '↺',
      title: `Afford ${maxRerolls} Shop Reroll${maxRerolls !== 1 ? 's' : ''}`,
      detail: `After saving ${economy.saveTarget}g, you can reroll ${maxRerolls}× (costs: ${REROLL_COSTS.shop.slice(0, maxRerolls).join('→')}g). ${wantedNames.length ? `Looking for: ${wantedNames.join(', ')}.` : ''}`,
    })
  }

  // Artifact reroll affordability — FIXED: compare IDs to IDs
  if (nitra >= REROLL_COSTS.artifact) {
    const artifactRerolls = Math.floor(nitra / REROLL_COSTS.artifact)
    // Convert wanted names to IDs for comparison with heldArtifacts (which stores IDs)
    const wantedIds = wantedArtifacts
      .map(name => ARTIFACT_BY_NAME[name.split(' — ')[0].trim()]?.id)
      .filter(Boolean)
    const missingIds = wantedIds.filter(id => !heldArtifacts.includes(id))
    const missingNames = missingIds.map(id => ARTIFACT_BY_NAME && ARTIFACTS.find(a => a.id === id)?.name ?? id)

    if (missingNames.length > 0) {
      recs.push({
        type: 'info',
        icon: '◆',
        title: `Reroll Artifacts for: ${missingNames.join(', ')}`,
        detail: `You have ${nitra} nitra — enough for ${artifactRerolls} artifact reroll${artifactRerolls !== 1 ? 's' : ''} (${REROLL_COSTS.artifact} nitra each).`,
      })
    } else if (wantedArtifacts.length > 0) {
      recs.push({
        type: 'good',
        icon: '✓',
        title: 'Core Artifacts Secured',
        detail: `${wantedArtifacts.map(n => n.split(' — ')[0].trim()).join(', ')} are all held. Spend remaining nitra on upgrades or save.`,
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

  // Gold-Tipped Bullets — use ID
  if (heldArtifacts.includes('gold-tipped-bullets')) {
    const bonus = Math.floor(gold / 5)
    recs.push({
      type: 'info',
      icon: '⚡',
      title: `Gold-Tipped Bullets: +${bonus}% Damage`,
      detail: `With ${gold}g held, you're getting +${bonus}% damage. ${stage < 5 ? 'Hold gold through Stage 5 for maximum boss damage.' : "Don't spend gold on the boss — keep the buff active!"}`,
    })
  }

  // Nitragenic Powder — use ID
  if (heldArtifacts.includes('nitragenic-powder')) {
    const critBonus = (nitra * 0.5).toFixed(1)
    recs.push({
      type: 'info',
      icon: '⚡',
      title: `Nitragenic Powder: +${critBonus}% Crit Chance`,
      detail: `With ${nitra} nitra held, you have +${critBonus}% Crit Chance. Mine aggressively — don't spend nitra on non-essential rerolls.`,
    })
  }

  // Avoid artifact warning — use ID comparison
  if (build) {
    const avoidIds = avoidArtifacts
      .map(entry => ARTIFACT_BY_NAME[entry.split(' — ')[0].trim()]?.id)
      .filter(Boolean)
    const avoidHeldIds = avoidIds.filter(id => heldArtifacts.includes(id))
    const avoidHeldNames = avoidHeldIds.map(id => ARTIFACTS.find(a => a.id === id)?.name ?? id)
    if (avoidHeldNames.length > 0) {
      recs.push({
        type: 'danger',
        icon: '✕',
        title: `Avoid: ${avoidHeldNames.join(', ')}`,
        detail: `This artifact actively hurts the ${build.name} build. Replace at next artifact reroll opportunity.`,
      })
    }
  }

  return recs
}
```

- [ ] **Replace the artifact toggles section** in the JSX (find the `{/* Artifact toggles */}` comment block and replace it):

```jsx
{/* Artifact toggles — grouped by category */}
<div>
  <label className="text-xs font-mono text-text-secondary uppercase tracking-wide block mb-2">
    Held Artifacts
  </label>
  <div className="space-y-3">
    {ARTIFACT_CATEGORIES.map(cat => {
      const arts = ARTIFACTS.filter(a => a.category === cat.id)
      return (
        <div key={cat.id}>
          <p className="text-xs font-mono text-text-secondary/60 uppercase tracking-wide mb-1.5">
            {cat.label}
          </p>
          <div className="flex flex-wrap gap-2">
            {arts.map(art => (
              <button
                key={art.id}
                onClick={() => toggleArtifact(art.id)}
                title={`[${art.tier}] ${art.effect}`}
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
      )
    })}
  </div>
</div>
```

- [ ] **Verify the app works end-to-end**

```bash
npm run dev
```

- Open Shop Calc tab
- Confirm all artifacts appear grouped by category
- Select a build (e.g., Interrogator Fire DoT), toggle "Squint-EE5" — verify the danger warning appears
- Toggle "Nitragenic Powder" — verify the crit bonus calculation appears
- Toggle "Gold-Tipped Bullets" — verify the gold bonus calculation appears

- [ ] **Commit**

```bash
git add src/pages/ShopOptimizer.jsx
git commit -m "feat: expand ShopOptimizer to all artifacts with category grouping, fix comparison bug"
```

---

### Task 6: Wire economy constants

**Files:**
- Modify: `src/pages/ShopOptimizer.jsx`
- Modify: `src/data/economy.js`

- [ ] **Verify `economy.js` exports the constants** — open `src/data/economy.js` and confirm it exports `GOLD_PER_STAGE` and `NITRA_PER_STAGE`. If it does, add this import to `ShopOptimizer.jsx` (already has the economy import line from Task 5 — extend it):

```js
import { STAGE_ECONOMY, REROLL_COSTS, GOLD_PER_STAGE, NITRA_PER_STAGE } from '../data/economy'
```

- [ ] **Find any hardcoded `150` (gold benchmark) or `50` (nitra benchmark) values** in `ShopOptimizer.jsx` and replace with `GOLD_PER_STAGE` and `NITRA_PER_STAGE`. Run:

```bash
grep -n "150\|goldMidpoint" src/pages/ShopOptimizer.jsx
```

Replace any hardcoded benchmark with the constants so there's one source of truth.

- [ ] **Run tests and app**

```bash
npm test && npm run dev
```

Expected: all tests pass, app behaves identically.

- [ ] **Commit**

```bash
git add src/pages/ShopOptimizer.jsx src/data/economy.js
git commit -m "refactor: use GOLD_PER_STAGE/NITRA_PER_STAGE constants in ShopOptimizer"
```

---

## Phase 2: New Builds

> Before writing build data, open the DRG:S wiki at `https://deeprockgalactic.wiki.gg/wiki/Survivor:Overclocks` and have it available. You'll need overclock names for each weapon at levels 6, 12, and 18.

### Task 7: Weapons Specialist (Gunner) build

**Files:**
- Modify: `src/data/builds.js`

- [ ] **Add the Weapons Specialist build object to the `BUILDS` array**

Research the exact overclock names at the wiki before filling in the `name` field of each overclock. The structure below is complete except where `"[Look up on wiki]"` appears — replace those with actual overclock names.

```js
{
  id: 'weapons-specialist-gunner',
  name: 'Weapons Specialist Gunner',
  class: 'Gunner',
  subclass: 'Weapons Specialist',
  tier: 'A',
  difficulty: 3,
  passive: 'Every 100 shots fired, unleash 8 bonus [PROJECTILE] projectiles. Access to all weapons tagged [PROJECTILE] regardless of class.',
  synopsis: 'High fire-rate build that procs the Weapons Specialist passive constantly for bonus projectile spam. Prioritize Fire Rate on every overclock.',
  weapons: [
    {
      name: '"Lead Storm" Minigun',
      isCarry: true,
      overclocks: [
        {
          level: 6,
          name: '[Look up lv6 overclock name for Lead Storm Minigun on wiki]',
          verdict: 'take',
          note: 'Increases fire rate — more shots means more passive procs.',
        },
        {
          level: 12,
          name: '[Look up lv12 overclock name]',
          verdict: 'take',
          note: '[Explain why after looking up]',
        },
        {
          level: 18,
          name: '[Look up lv18 overclock name]',
          verdict: 'take',
          note: '[Explain why after looking up]',
        },
      ],
    },
    {
      name: '"Hurricane" Rockets',
      isCarry: false,
      overclocks: [
        {
          level: 6,
          name: '[Look up on wiki]',
          verdict: 'take',
          note: 'AoE coverage — complements the Minigun\'s single-target focus.',
        },
        {
          level: 12,
          name: '[Look up on wiki]',
          verdict: 'situational',
          note: '[Explain after looking up]',
        },
        {
          level: 18,
          name: '[Look up on wiki]',
          verdict: 'situational',
          note: '[Explain after looking up]',
        },
      ],
    },
    {
      name: 'BRT7 Burst Fire',
      isCarry: false,
      overclocks: [
        {
          level: 6,
          name: '[Look up on wiki]',
          verdict: 'situational',
          note: 'Burst fire benefits less from the passive — take if Minigun OC is weak.',
        },
        {
          level: 12,
          name: '[Look up on wiki]',
          verdict: 'skip',
          note: '[Explain after looking up]',
        },
        {
          level: 18,
          name: '[Look up on wiki]',
          verdict: 'situational',
          note: '[Explain after looking up]',
        },
      ],
    },
    {
      name: 'Seismic Repulsor',
      isCarry: false,
      overclocks: [
        {
          level: 6,
          name: '[Look up on wiki]',
          verdict: 'situational',
          note: 'Crowd control helps when swarmed. Take if you\'re getting overwhelmed.',
        },
        {
          level: 12,
          name: '[Look up on wiki]',
          verdict: 'skip',
          note: '[Explain after looking up]',
        },
        {
          level: 18,
          name: '[Look up on wiki]',
          verdict: 'skip',
          note: '[Explain after looking up]',
        },
      ],
    },
  ],
  stats: {
    priority: ['Fire Rate', 'Damage', 'Reload Speed', 'Crit Chance', 'Explosion Radius'],
    avoid: ['Mining Speed', 'HP/Armor — passive doesn\'t benefit from defense stats'],
  },
  artifacts: {
    always: ["Diver's Manual", 'Ammo Rig'],
    good: ['Pay2Win Console', 'Turbo Encabulator', 'Squint-EE5', '5 Leaf Clover'],
    never: ['Popup Tripod — requires standing still, contradicts fire-rate playstyle', 'Barley Bulb Juice'],
  },
  phases: [
    {
      stage: 1,
      title: 'Establish Fire Rate',
      decisions: [
        {
          type: 'weapon',
          label: 'Primary',
          content: 'Always pick Lead Storm Minigun if available. Any [PROJECTILE] weapon is acceptable.',
        },
        {
          type: 'overclock',
          label: 'Level 6',
          content: 'Prioritize Fire Rate overclock on Minigun. More shots = faster passive procs.',
        },
        {
          type: 'shop',
          label: 'Shop',
          content: 'Buy Ammo Rig if available — +50% Fire Rate is the biggest DPS spike you can get Stage 1.',
        },
      ],
    },
    {
      stage: 2,
      title: 'Stack Overclocks',
      decisions: [
        {
          type: 'weapon',
          label: 'Support',
          content: 'Pick up Hurricane Rockets for AoE coverage. Passive procs hit all enemies in range.',
        },
        {
          type: 'overclock',
          label: 'Level 12',
          content: 'Take Minigun lv12 overclock. Turbo Encabulator starts scaling — each OC is worth +3% Damage.',
        },
        {
          type: 'shop',
          label: 'Shop',
          content: 'Target Turbo Encabulator if not held. Reroll once if the shop is weak.',
        },
      ],
    },
    {
      stage: 3,
      title: 'Mid-Game Power Spike',
      decisions: [
        {
          type: 'weapon',
          label: 'Third Weapon',
          content: 'Fill remaining slot with a crowd control option (Seismic Repulsor) if survivability is an issue.',
        },
        {
          type: 'overclock',
          label: 'Level 18',
          content: 'Complete Minigun overclock chain. Prioritize damage-scaling options over utility.',
        },
        {
          type: 'shop',
          label: 'Shop',
          content: 'Spend remaining gold on Fire Rate or Damage upgrades. Save 30g for Stage 4.',
        },
      ],
    },
    {
      stage: 4,
      title: 'Optimize and Save',
      decisions: [
        {
          type: 'weapon',
          label: 'Weapon',
          content: 'All 4 weapons should be slotted. Replace any C-tier weapons with better alternatives if the shop offers them.',
        },
        {
          type: 'overclock',
          label: 'Overclocks',
          content: 'All weapons should have at least lv12 overclocks. Prioritize Minigun > Hurricane > others.',
        },
        {
          type: 'shop',
          label: 'Shop',
          content: 'Light spending — save gold for Stage 5 dreadnought. Reroll only if a key artifact is offered.',
        },
      ],
    },
    {
      stage: 5,
      title: 'Boss Burst',
      decisions: [
        {
          type: 'weapon',
          label: 'Carry',
          content: 'Focus Minigun on the dreadnought. The passive procs every ~1.5s at max fire rate.',
        },
        {
          type: 'overclock',
          label: 'Final OCs',
          content: 'Complete all overclock slots. Every Turbo Encabulator stack is +3% Damage at this point.',
        },
        {
          type: 'shop',
          label: 'Shop',
          content: 'Spend everything. Keep Gold-Tipped Bullets buff active if held — don\'t spend gold on rerolls.',
        },
      ],
    },
  ],
},
```

- [ ] **Run the app and verify the new build appears**

```bash
npm run dev
```

- Open Build Sheets — confirm "Weapons Specialist Gunner" appears with correct tier badge [A]
- Open Stage Guide — select the build, confirm all 5 phases expand

- [ ] **Commit**

```bash
git add src/data/builds.js
git commit -m "feat: add Weapons Specialist (Gunner) build"
```

---

### Task 8: Recon Scout build

**Files:**
- Modify: `src/data/builds.js`

- [ ] **Add the Recon Scout build** (look up overclock names from wiki before filling `name` fields)

```js
{
  id: 'recon-scout',
  name: 'Recon Dodge Scout',
  class: 'Scout',
  subclass: 'Recon',
  tier: 'B',
  difficulty: 2,
  passive: '+25% Dodge Chance. On dodge, gain +35% Move Speed and +35% Reload Speed for 3s.',
  synopsis: 'Mobility-first Scout that uses dodge windows for reload bursts. Stack Dodge Chance and Move Speed — every dodge is free value.',
  weapons: [
    {
      name: 'Zhukov NUK17',
      isCarry: true,
      overclocks: [
        {
          level: 6,
          name: '[Look up on wiki]',
          verdict: 'take',
          note: 'High fire rate benefits from the dodge reload window — dump mag, dodge, instant reload.',
        },
        {
          level: 12,
          name: '[Look up on wiki]',
          verdict: 'take',
          note: '[Explain after looking up]',
        },
        {
          level: 18,
          name: '[Look up on wiki]',
          verdict: 'take',
          note: '[Explain after looking up]',
        },
      ],
    },
    {
      name: 'Deepcore GK2',
      isCarry: false,
      overclocks: [
        {
          level: 6,
          name: '[Look up on wiki]',
          verdict: 'take',
          note: 'Automatic fire pairs well with the +35% reload speed on dodge.',
        },
        {
          level: 12,
          name: '[Look up on wiki]',
          verdict: 'situational',
          note: '[Explain after looking up]',
        },
        {
          level: 18,
          name: '[Look up on wiki]',
          verdict: 'situational',
          note: '[Explain after looking up]',
        },
      ],
    },
    {
      name: 'Nishanka Boltshark X-80',
      isCarry: false,
      overclocks: [
        {
          level: 6,
          name: '[Look up on wiki]',
          verdict: 'situational',
          note: 'Cryo or Fire bolts apply DoT on dodge window — situational crowd control.',
        },
        {
          level: 12,
          name: '[Look up on wiki]',
          verdict: 'skip',
          note: '[Explain after looking up]',
        },
        {
          level: 18,
          name: '[Look up on wiki]',
          verdict: 'situational',
          note: '[Explain after looking up]',
        },
      ],
    },
    {
      name: 'Jury-Rigged Boomstick',
      isCarry: false,
      overclocks: [
        {
          level: 6,
          name: '[Look up on wiki]',
          verdict: 'situational',
          note: 'Close-range option for when enemies close in. Reload speed passive helps.',
        },
        {
          level: 12,
          name: '[Look up on wiki]',
          verdict: 'skip',
          note: '[Explain after looking up]',
        },
        {
          level: 18,
          name: '[Look up on wiki]',
          verdict: 'skip',
          note: '[Explain after looking up]',
        },
      ],
    },
  ],
  stats: {
    priority: ['Dodge Chance', 'Move Speed', 'Reload Speed', 'Damage', 'Crit Chance'],
    avoid: ['Popup Tripod — requires standing still, anti-synergy with constant movement'],
  },
  artifacts: {
    always: ["Diver's Manual", 'Armor Grease'],
    good: ['Squint-EE5', 'Reflex Calibrator', 'Jet Boots', 'Pay2Win Console'],
    never: ['Popup Tripod — standing still negates all Recon passive benefits', 'Barley Bulb Juice — same anti-synergy'],
  },
  phases: [
    {
      stage: 1,
      title: 'Learn the Dodge Rhythm',
      decisions: [
        { type: 'weapon', label: 'Primary', content: 'Zhukov NUK17 is your carry — high fire rate maximizes the 3s reload window on dodge.' },
        { type: 'overclock', label: 'Level 6', content: 'Take any Dodge Chance or Move Speed overclock. Reload Speed is second priority.' },
        { type: 'shop', label: 'Shop', content: 'Buy Armor Grease — +5% Move Speed and dodge scaling on movement aligns perfectly with this passive.' },
      ],
    },
    {
      stage: 2,
      title: 'Stack Mobility',
      decisions: [
        { type: 'weapon', label: 'Support', content: 'Add GK2 for consistent automatic fire between dodges.' },
        { type: 'overclock', label: 'Level 12', content: 'Reload Speed overclock on Zhukov — you reload during dodge windows, so faster reload = shorter gap.' },
        { type: 'shop', label: 'Shop', content: 'Target Squint-EE5 if available. High Dodge Chance means you take fewer hits — play aggressively.' },
      ],
    },
    {
      stage: 3,
      title: 'Commit to Crit or Defense',
      decisions: [
        { type: 'weapon', label: 'Third Weapon', content: 'Boltshark for DoT application or Boomstick for close-range insurance. Boltshark preferred.' },
        { type: 'overclock', label: 'Level 18', content: 'Finalize Zhukov overclock chain. Damage or Crit Damage preferred for end-game scaling.' },
        { type: 'shop', label: 'Shop', content: 'If Squint-EE5 held, take Nitragenic Powder to push crit chance higher. Save 30g.' },
      ],
    },
    {
      stage: 4,
      title: 'Clean Up Loadout',
      decisions: [
        { type: 'weapon', label: 'Weapon', content: 'Ensure all 4 slots are filled. Replace Boomstick with a damage option if shop offers one.' },
        { type: 'overclock', label: 'Overclocks', content: 'All weapons should reach lv12 minimum. Prioritize Zhukov > GK2 > others.' },
        { type: 'shop', label: 'Shop', content: 'Light spending — hold gold for Stage 5. One reroll is fine if a key artifact is available.' },
      ],
    },
    {
      stage: 5,
      title: 'Mobile Dreadnought Kite',
      decisions: [
        { type: 'weapon', label: 'Carry', content: 'Keep moving — every dodge refreshes your reload speed passive. Never stand still against the dreadnought.' },
        { type: 'overclock', label: 'Final OCs', content: 'Complete all overclock slots before the final fight. Damage or Reload Speed final OCs.' },
        { type: 'shop', label: 'Shop', content: 'Spend everything. Reflex Calibrator held? You gain +5% dodge each time the dreadnought hits — let it happen.' },
      ],
    },
  ],
},
```

- [ ] **Verify in app, commit**

```bash
npm run dev
# Confirm Recon Scout appears in Build Sheets and Stage Guide
git add src/data/builds.js
git commit -m "feat: add Recon Scout build"
```

---

### Task 9: Juggernaut (Gunner) build

**Files:**
- Modify: `src/data/builds.js`

- [ ] **Add the Juggernaut build** (look up overclock names from wiki)

```js
{
  id: 'juggernaut-tank',
  name: 'Juggernaut Tank',
  class: 'Gunner',
  subclass: 'Juggernaut',
  tier: 'B',
  difficulty: 3,
  passive: '+10 Armor, +50 Max HP. On dealing damage, gain +10% Damage for 3s (stacks 5×, up to +50%).',
  synopsis: 'Slow and tanky — absorbs hits while stacking a 50% damage bonus by staying in enemies\' faces. Rewards aggressive positioning over kiting.',
  weapons: [
    {
      name: '"Bulldog" Heavy Revolver',
      isCarry: true,
      overclocks: [
        {
          level: 6,
          name: '[Look up on wiki]',
          verdict: 'take',
          note: 'High single-hit damage triggers and maintains the damage stacks efficiently.',
        },
        {
          level: 12,
          name: '[Look up on wiki]',
          verdict: 'take',
          note: '[Explain after looking up]',
        },
        {
          level: 18,
          name: '[Look up on wiki]',
          verdict: 'take',
          note: '[Explain after looking up]',
        },
      ],
    },
    {
      name: 'Seismic Repulsor',
      isCarry: false,
      overclocks: [
        {
          level: 6,
          name: '[Look up on wiki]',
          verdict: 'take',
          note: 'Knockback keeps you alive when overwhelmed — essential for a slow build.',
        },
        {
          level: 12,
          name: '[Look up on wiki]',
          verdict: 'take',
          note: '[Explain after looking up]',
        },
        {
          level: 18,
          name: '[Look up on wiki]',
          verdict: 'situational',
          note: '[Explain after looking up]',
        },
      ],
    },
    {
      name: 'ArmsKore Coil Gun',
      isCarry: false,
      overclocks: [
        {
          level: 6,
          name: '[Look up on wiki]',
          verdict: 'situational',
          note: 'High burst damage — activates full damage stacks in one volley.',
        },
        {
          level: 12,
          name: '[Look up on wiki]',
          verdict: 'situational',
          note: '[Explain after looking up]',
        },
        {
          level: 18,
          name: '[Look up on wiki]',
          verdict: 'situational',
          note: '[Explain after looking up]',
        },
      ],
    },
    {
      name: 'Cryo Cannon',
      isCarry: false,
      overclocks: [
        {
          level: 6,
          name: '[Look up on wiki]',
          verdict: 'situational',
          note: 'Freezing enemies slows them — makes it easier to maintain close range for stacks.',
        },
        {
          level: 12,
          name: '[Look up on wiki]',
          verdict: 'skip',
          note: '[Explain after looking up]',
        },
        {
          level: 18,
          name: '[Look up on wiki]',
          verdict: 'skip',
          note: '[Explain after looking up]',
        },
      ],
    },
  ],
  stats: {
    priority: ['Armor', 'Damage', 'HP', 'Reload Speed', 'Crit Chance'],
    avoid: ['Move Speed — Juggernaut is slow by design; Move Speed wasted on this build', 'The MoCap — you want to be at full HP, not low HP'],
  },
  artifacts: {
    always: ['BLT Ration Pack', 'Salty Pretzel'],
    good: ["Diver's Manual", 'Reflex Calibrator', 'Turbo Encabulator', 'Pay2Win Console'],
    never: ['The MoCap — rewards low HP, contradicts the tank strategy', 'Ammo Rig — -15% Move Speed on an already slow build'],
  },
  phases: [
    {
      stage: 1,
      title: 'Establish Tank Baseline',
      decisions: [
        { type: 'weapon', label: 'Primary', content: 'Bulldog is your carry — high single-hit damage maintains the passive stacks.' },
        { type: 'overclock', label: 'Level 6', content: 'Take Damage overclock on Bulldog. Armor overclocks on Seismic Repulsor for survivability.' },
        { type: 'shop', label: 'Shop', content: 'Priority buy: BLT Ration Pack. With the +50 HP base and +80 from BLT, you\'re nearly impossible to burst down.' },
      ],
    },
    {
      stage: 2,
      title: 'Add Crowd Control',
      decisions: [
        { type: 'weapon', label: 'Support', content: 'Seismic Repulsor is mandatory — use it to reset dangerous swarms. Lets you play aggressively without dying.' },
        { type: 'overclock', label: 'Level 12', content: 'Armor or Damage on Bulldog. Salty Pretzel stacking means higher armor = more Salty Pretzel scaling.' },
        { type: 'shop', label: 'Shop', content: 'Buy Salty Pretzel if available. Each 2% missing HP = +1 armor — pairs with the Juggernaut base armor for a strong floor.' },
      ],
    },
    {
      stage: 3,
      title: 'Commit to Damage Stacking',
      decisions: [
        { type: 'weapon', label: 'Third Weapon', content: 'Coil Gun for burst or Cryo Cannon for crowd control. Coil Gun preferred for DPS.' },
        { type: 'overclock', label: 'Level 18', content: 'Finalize Bulldog overclock. Damage > Crit options. At max stacks you\'re +50% damage — maximize the ceiling.' },
        { type: 'shop', label: 'Shop', content: 'Target Turbo Encabulator — reward for stacking many overclocks. Take Reflex Calibrator for additional dodge while taking hits.' },
      ],
    },
    {
      stage: 4,
      title: 'Lock In the Loadout',
      decisions: [
        { type: 'weapon', label: 'Weapon', content: 'Ensure Seismic Repulsor is fully upgraded. It\'s your panic button — keep it available.' },
        { type: 'overclock', label: 'Overclocks', content: 'All weapons at lv12 minimum. Bulldog > Seismic Repulsor > others.' },
        { type: 'shop', label: 'Shop', content: 'Moderate spend — save 30g. Buy armor upgrades over damage if you\'re dying frequently.' },
      ],
    },
    {
      stage: 5,
      title: 'Face-Tank the Dreadnought',
      decisions: [
        { type: 'weapon', label: 'Carry', content: 'Stay close to the dreadnought to maintain 5× damage stacks. Use Seismic Repulsor to create space if health drops below 30%.' },
        { type: 'overclock', label: 'Final OCs', content: 'Complete all overclock slots. At full stacks you\'re +50% Damage — the dreadnought melts fast.' },
        { type: 'shop', label: 'Shop', content: 'Spend everything. If Reflex Calibrator is held, intentionally take a hit to spike the dodge chance before the boss.' },
      ],
    },
  ],
},
```

- [ ] **Verify in app, commit**

```bash
npm run dev
git add src/data/builds.js
git commit -m "feat: add Juggernaut (Gunner) build"
```

---

### Task 10: Classic Scout build

**Files:**
- Modify: `src/data/builds.js`

- [ ] **Add the Classic Scout build** (look up overclock names from wiki)

```js
{
  id: 'classic-scout',
  name: 'Classic Scout',
  class: 'Scout',
  subclass: 'Classic',
  tier: 'C',
  difficulty: 2,
  passive: '+10% Move Speed, +15% Max HP. No special mechanic — a straightforward stat boost.',
  synopsis: 'The simplest Scout subclass. No unique mechanics, just flat stat bonuses. Recommended for new players learning the class — outclassed by Sharpshooter or Recon at higher difficulty.',
  weapons: [
    {
      name: 'M1000 Classic',
      isCarry: true,
      overclocks: [
        {
          level: 6,
          name: '[Look up on wiki]',
          verdict: 'take',
          note: 'Same carry as Sharpshooter but without the crit passive — focus on raw damage.',
        },
        {
          level: 12,
          name: '[Look up on wiki]',
          verdict: 'take',
          note: '[Explain after looking up]',
        },
        {
          level: 18,
          name: '[Look up on wiki]',
          verdict: 'take',
          note: '[Explain after looking up]',
        },
      ],
    },
    {
      name: 'Deepcore GK2',
      isCarry: false,
      overclocks: [
        {
          level: 6,
          name: '[Look up on wiki]',
          verdict: 'take',
          note: 'Automatic fire for swarms while M1000 handles elites and bosses.',
        },
        {
          level: 12,
          name: '[Look up on wiki]',
          verdict: 'take',
          note: '[Explain after looking up]',
        },
        {
          level: 18,
          name: '[Look up on wiki]',
          verdict: 'situational',
          note: '[Explain after looking up]',
        },
      ],
    },
    {
      name: 'Nishanka Boltshark X-80',
      isCarry: false,
      overclocks: [
        {
          level: 6,
          name: '[Look up on wiki]',
          verdict: 'situational',
          note: 'DoT bolts for sustained damage on tanky enemies.',
        },
        {
          level: 12,
          name: '[Look up on wiki]',
          verdict: 'skip',
          note: '[Explain after looking up]',
        },
        {
          level: 18,
          name: '[Look up on wiki]',
          verdict: 'situational',
          note: '[Explain after looking up]',
        },
      ],
    },
    {
      name: 'Jury-Rigged Boomstick',
      isCarry: false,
      overclocks: [
        {
          level: 6,
          name: '[Look up on wiki]',
          verdict: 'situational',
          note: 'Close-range insurance when enemies close in.',
        },
        {
          level: 12,
          name: '[Look up on wiki]',
          verdict: 'skip',
          note: '[Explain after looking up]',
        },
        {
          level: 18,
          name: '[Look up on wiki]',
          verdict: 'skip',
          note: '[Explain after looking up]',
        },
      ],
    },
  ],
  stats: {
    priority: ['Damage', 'Crit Chance', 'Reload Speed', 'Crit Damage', 'Move Speed'],
    avoid: ['HP/Armor — the +15% HP passive already covers this; stack damage instead'],
  },
  artifacts: {
    always: ["Diver's Manual", 'Squint-EE5'],
    good: ['Energy Bars', 'Pay2Win Console', 'Nitragenic Powder', 'Gold-Tipped Bullets'],
    never: [],
  },
  phases: [
    {
      stage: 1,
      title: 'Standard Scout Start',
      decisions: [
        { type: 'weapon', label: 'Primary', content: 'M1000 Classic is your carry. Aim for headshots on elites to maximize single-target damage.' },
        { type: 'overclock', label: 'Level 6', content: 'Damage overclock on M1000. No passive multiplier to synergize with, so raw damage is the safest pick.' },
        { type: 'shop', label: 'Shop', content: 'Buy Squint-EE5 if available. Unlike Sharpshooter you don\'t have a crit passive, so every crit percent matters more.' },
      ],
    },
    {
      stage: 2,
      title: 'Build Crit Stack',
      decisions: [
        { type: 'weapon', label: 'Support', content: 'GK2 for automatic swarm control. M1000 handles priority targets.' },
        { type: 'overclock', label: 'Level 12', content: 'Crit Chance or Damage on M1000. Crit Damage if Squint-EE5 is already held.' },
        { type: 'shop', label: 'Shop', content: 'Nitragenic Powder if available and you\'re holding nitra. Otherwise Energy Bars for flat scaling.' },
      ],
    },
    {
      stage: 3,
      title: 'Mid-Game Upgrade',
      decisions: [
        { type: 'weapon', label: 'Third Weapon', content: 'Boltshark for DoT on tough targets. Boomstick as panic option if swarmed.' },
        { type: 'overclock', label: 'Level 18', content: 'Final M1000 overclock — take Crit Damage if at high crit rate, else Damage.' },
        { type: 'shop', label: 'Shop', content: 'Reroll up to twice for Squint-EE5 or Diver\'s Manual if still missing them. Save 30g.' },
      ],
    },
    {
      stage: 4,
      title: 'Steady Progression',
      decisions: [
        { type: 'weapon', label: 'Weapon', content: 'All 4 slots filled. GK2 or Boltshark as second damage source.' },
        { type: 'overclock', label: 'Overclocks', content: 'M1000 > GK2 > others. All at lv12 minimum.' },
        { type: 'shop', label: 'Shop', content: 'Light spending — save 30g for Stage 5. Buy Gold-Tipped Bullets if near 250 gold and can hold it.' },
      ],
    },
    {
      stage: 5,
      title: 'Boss Cleanup',
      decisions: [
        { type: 'weapon', label: 'Carry', content: 'M1000 every shot on the dreadnought. At high crit chance, crits keep the damage consistent.' },
        { type: 'overclock', label: 'Final OCs', content: 'All overclock slots complete before the boss fight.' },
        { type: 'shop', label: 'Shop', content: 'Spend everything. Gold-Tipped Bullets buff? Don\'t reroll — keep gold. No buff? Reroll freely.' },
      ],
    },
  ],
},
```

- [ ] **Verify in app, commit**

```bash
npm run dev
git add src/data/builds.js
git commit -m "feat: add Classic Scout build (C-tier)"
```

---

### Task 11: Build data integrity tests

**Files:**
- Create: `src/tests/builds.test.js`

- [ ] **Create `src/tests/builds.test.js`**

```js
import { describe, it, expect } from 'vitest'
import { BUILDS } from '../data/builds.js'
import { ARTIFACT_BY_NAME } from '../data/artifacts.js'

const VALID_TIERS = ['S', 'A', 'B', 'C', 'D']
const VALID_CLASSES = ['Scout', 'Driller', 'Gunner', 'Engineer']
const VALID_VERDICTS = ['take', 'situational', 'skip']
const VALID_DECISION_TYPES = ['weapon', 'overclock', 'shop']

describe('BUILDS array', () => {
  it('contains at least 12 builds (all subclasses)', () => {
    expect(BUILDS.length).toBeGreaterThanOrEqual(12)
  })

  it('has no duplicate IDs', () => {
    const ids = BUILDS.map(b => b.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  BUILDS.forEach(build => {
    describe(`build: ${build.id}`, () => {
      it('has required top-level fields', () => {
        expect(build.id).toBeTruthy()
        expect(build.name).toBeTruthy()
        expect(build.class).toBeTruthy()
        expect(build.subclass).toBeTruthy()
        expect(build.passive).toBeTruthy()
        expect(build.synopsis).toBeTruthy()
      })

      it('has a valid tier', () => {
        expect(VALID_TIERS).toContain(build.tier)
      })

      it('has a valid class', () => {
        expect(VALID_CLASSES).toContain(build.class)
      })

      it('has exactly 4 weapons', () => {
        expect(build.weapons).toHaveLength(4)
      })

      it('has exactly one carry weapon', () => {
        const carries = build.weapons.filter(w => w.isCarry)
        expect(carries).toHaveLength(1)
      })

      it('each weapon has 3 overclocks at levels 6, 12, 18', () => {
        build.weapons.forEach(weapon => {
          expect(weapon.overclocks).toHaveLength(3)
          expect(weapon.overclocks.map(oc => oc.level)).toEqual([6, 12, 18])
        })
      })

      it('all overclock verdicts are valid', () => {
        build.weapons.forEach(weapon => {
          weapon.overclocks.forEach(oc => {
            expect(VALID_VERDICTS, `${build.id} / ${weapon.name} lv${oc.level}`).toContain(oc.verdict)
          })
        })
      })

      it('has stats with priority and avoid arrays', () => {
        expect(Array.isArray(build.stats.priority)).toBe(true)
        expect(Array.isArray(build.stats.avoid)).toBe(true)
        expect(build.stats.priority.length).toBeGreaterThan(0)
      })

      it('has artifact arrays (always, good, never)', () => {
        expect(Array.isArray(build.artifacts.always)).toBe(true)
        expect(Array.isArray(build.artifacts.good)).toBe(true)
        expect(Array.isArray(build.artifacts.never)).toBe(true)
      })

      it('artifact names in always/good/never resolve in artifacts.js', () => {
        const allArtifactEntries = [
          ...build.artifacts.always,
          ...build.artifacts.good,
          ...build.artifacts.never,
        ]
        allArtifactEntries.forEach(entry => {
          const name = entry.split(' — ')[0].trim()
          expect(
            ARTIFACT_BY_NAME[name],
            `${build.id}: artifact "${name}" not found in artifacts.js`
          ).toBeTruthy()
        })
      })

      it('has exactly 5 phases', () => {
        expect(build.phases).toHaveLength(5)
      })

      it('each phase has stage number 1-5', () => {
        build.phases.forEach((phase, i) => {
          expect(phase.stage).toBe(i + 1)
        })
      })

      it('each phase has exactly 3 decisions', () => {
        build.phases.forEach(phase => {
          expect(phase.decisions).toHaveLength(3)
        })
      })

      it('all decision types are valid', () => {
        build.phases.forEach(phase => {
          phase.decisions.forEach(d => {
            expect(VALID_DECISION_TYPES).toContain(d.type)
          })
        })
      })
    })
  })
})
```

- [ ] **Run tests**

```bash
npm test
```

Expected: all tests pass. If any artifact name in a build's arrays doesn't resolve, fix the name in `builds.js` to match the exact name in `artifacts.js`.

- [ ] **Commit**

```bash
git add src/tests/builds.test.js
git commit -m "test: add build data integrity tests"
```

---

## Phase 3: New Pages

### Task 12: Create `src/data/weapons.js`

**Files:**
- Create: `src/data/weapons.js`

> Before writing this file, open `https://deeprockgalactic.wiki.gg/wiki/Survivor:Weapons` and `https://deeprockgalactic.wiki.gg/wiki/Survivor:Overclocks` in a browser tab. You'll need these to fill in accurate overclock names.

- [ ] **Create `src/data/weapons.js`** with the following structure. Fill in all 42 weapons from the wiki. The weapons referenced in existing builds are listed below with partial data — verify names against the wiki and add all remaining weapons.

```js
// All DRG:S weapons. Source: deeprockgalactic.wiki.gg/wiki/Survivor:Weapons
// Each weapon has overclocks: an array of 3 entries (lv6, lv12, lv18)
// Each level entry has `options: string[]` — all available overclock choices at that level
// The existing builds.js data shows which options are "take/skip" for specific builds
export const WEAPONS = [
  // ── Scout ───────────────────────────────────────────────────────────────
  {
    id: 'm1000-classic',
    name: 'M1000 Classic',
    class: 'Scout',
    tags: ['[PROJECTILE]', '[KINETIC]'],
    overclocks: [
      { level: 6,  options: ['[Look up all lv6 OC choices from wiki]'] },
      { level: 12, options: ['[Look up all lv12 OC choices from wiki]'] },
      { level: 18, options: ['[Look up all lv18 OC choices from wiki]'] },
    ],
  },
  {
    id: 'nishanka-boltshark-x-80',
    name: 'Nishanka Boltshark X-80',
    class: 'Scout',
    tags: ['[PROJECTILE]'],
    overclocks: [
      { level: 6,  options: ['[Look up]'] },
      { level: 12, options: ['[Look up]'] },
      { level: 18, options: ['[Look up]'] },
    ],
  },
  {
    id: 'jury-rigged-boomstick',
    name: 'Jury-Rigged Boomstick',
    class: 'Scout',
    tags: ['[PROJECTILE]', '[KINETIC]'],
    overclocks: [
      { level: 6,  options: ['[Look up]'] },
      { level: 12, options: ['[Look up]'] },
      { level: 18, options: ['[Look up]'] },
    ],
  },
  {
    id: 'deepcore-gk2',
    name: 'Deepcore GK2',
    class: 'Scout',
    tags: ['[PROJECTILE]', '[KINETIC]'],
    overclocks: [
      { level: 6,  options: ['[Look up]'] },
      { level: 12, options: ['[Look up]'] },
      { level: 18, options: ['[Look up]'] },
    ],
  },
  {
    id: 'zhukov-nuk17',
    name: 'Zhukov NUK17',
    class: 'Scout',
    tags: ['[PROJECTILE]', '[KINETIC]'],
    overclocks: [
      { level: 6,  options: ['[Look up]'] },
      { level: 12, options: ['[Look up]'] },
      { level: 18, options: ['[Look up]'] },
    ],
  },
  // Add remaining Scout weapons from wiki here...
  // ── Driller ─────────────────────────────────────────────────────────────
  {
    id: 'colette-wave-cooker',
    name: 'Colette Wave Cooker',
    class: 'Driller',
    tags: ['[BEAM]', '[FIRE]'],
    overclocks: [
      { level: 6,  options: ['[Look up]'] },
      { level: 12, options: ['[Look up]'] },
      { level: 18, options: ['[Look up]'] },
    ],
  },
  {
    id: 'crspr-flamethrower',
    name: 'CRSPR Flamethrower',
    class: 'Driller',
    tags: ['[BEAM]', '[FIRE]'],
    overclocks: [
      { level: 6,  options: ['[Look up]'] },
      { level: 12, options: ['[Look up]'] },
      { level: 18, options: ['[Look up]'] },
    ],
  },
  // Add remaining Driller weapons...
  // ── Gunner ──────────────────────────────────────────────────────────────
  {
    id: 'thunderhead-heavy-autocannon',
    name: '"Thunderhead" Heavy Autocannon',
    class: 'Gunner',
    tags: ['[PROJECTILE]', '[KINETIC]'],
    overclocks: [
      { level: 6,  options: ['Extra Capacity (+1 Beam)', 'High Caliber Rounds', 'Battery Bullets'] },
      { level: 12, options: ['Akimbo', 'Magnetic Alloy', 'Conduit'] },
      { level: 18, options: ['Extra Capacity (+3)', 'Plasma Coating', 'LMG Overload'] },
    ],
  },
  // Add remaining Gunner weapons...
  // ── Engineer ────────────────────────────────────────────────────────────
  {
    id: 'warthog-auto-210',
    name: '"Warthog" Auto 210',
    class: 'Engineer',
    tags: ['[PROJECTILE]', '[KINETIC]'],
    overclocks: [
      { level: 6,  options: ['[Look up]'] },
      { level: 12, options: ['[Look up]'] },
      { level: 18, options: ['[Look up]'] },
    ],
  },
  // Add remaining Engineer weapons...
]

export const WEAPON_BY_ID = Object.fromEntries(WEAPONS.map(w => [w.id, w]))

export const WEAPON_CLASSES = ['Scout', 'Driller', 'Gunner', 'Engineer']
```

> **Complete the file** by adding all remaining weapons from the wiki before committing. The Thunderhead overclock data above is verified from existing builds — use that as a reference for the data shape and quality expected.

- [ ] **Commit when complete**

```bash
git add src/data/weapons.js
git commit -m "feat: add weapons.js with all weapon and overclock reference data"
```

---

### Task 13: Create `src/data/synergies.js`

**Files:**
- Create: `src/data/synergies.js`

- [ ] **Create `src/data/synergies.js`**

```js
// Key weapon-artifact-overclock synergies, organized by build archetype.
// Each entry describes a combination and why it works.
export const SYNERGIES = [
  // ── Crit Builds ─────────────────────────────────────────────────────────
  {
    id: 'crit-core',
    archetype: 'Crit Builds',
    combination: ['Squint-EE5', 'Nitragenic Powder', 'M1000 Classic'],
    description: 'Stack Crit Chance above 75% to negate the Squint-EE5 damage penalty. Nitragenic Powder provides passive crit scaling just by holding Nitra.',
    builds: ['thick-boy-sniper', 'classic-scout', 'recon-scout'],
    strength: 'strong',
  },
  {
    id: 'crit-diver',
    archetype: 'Crit Builds',
    combination: ["Diver's Manual", 'Squint-EE5'],
    description: "Diver's Manual has no downside and its +5% Crit Chance stacks cleanly with Squint-EE5's +30%. Every crit build wants both.",
    builds: ['thick-boy-sniper', 'recon-scout', 'classic-scout', 'weapons-specialist-gunner'],
    strength: 'strong',
  },
  // ── DoT / Status Builds ──────────────────────────────────────────────────
  {
    id: 'dot-chemist',
    archetype: 'DoT Builds',
    combination: ['Chemist Kit', 'Colette Wave Cooker', 'CRSPR Flamethrower'],
    description: '+15% Potency and +15% Status Effect Damage from Chemist Kit multiply all DoT output. Both Wave Cooker and Flamethrower are pure DoT weapons.',
    builds: ['interrogator-fire-dot'],
    strength: 'strong',
  },
  {
    id: 'dot-no-squint',
    archetype: 'DoT Builds',
    combination: ['Squint-EE5', 'Colette Wave Cooker'],
    description: 'DoT damage cannot crit. Squint-EE5\'s -30% Direct Damage stacks with the Interrogator\'s class passive for -60% total on direct hits — a severe penalty with no upside.',
    builds: ['interrogator-fire-dot'],
    strength: 'niche',
    isAntiSynergy: true,
  },
  // ── Economy Builds ───────────────────────────────────────────────────────
  {
    id: 'gold-hoard',
    archetype: 'Economy Builds',
    combination: ['Gold-Tipped Bullets', 'Gold Scanner', 'Pay2Win Console'],
    description: 'Hoard gold for Gold-Tipped Bullets scaling (+1% damage per 5g). Gold Scanner provides passive income. Pay2Win Console rewards spending on rerolls — balance between hoarding and spending.',
    builds: ['thick-boy-sniper', 'tinkerer-warthog'],
    strength: 'moderate',
  },
  {
    id: 'nitra-hoard',
    archetype: 'Economy Builds',
    combination: ['Nitragenic Powder', 'Pickled Nitra'],
    description: 'Double-dip on nitra hoarding — Nitragenic Powder gives crit chance, Pickled Nitra gives damage. Both scale with the same resource. Never spend nitra on artifact rerolls with this combo.',
    builds: ['thick-boy-sniper', 'interrogator-fire-dot'],
    strength: 'strong',
  },
  // ── Fire Rate Builds ─────────────────────────────────────────────────────
  {
    id: 'fire-rate-ammo-rig',
    archetype: 'Fire Rate Builds',
    combination: ['Ammo Rig', '"Thunderhead" Heavy Autocannon', 'Pickled Nitra'],
    description: 'Ammo Rig\'s +50% Fire Rate combined with the Thunderhead\'s already high base rate creates a rapid passive proc trigger for Weapons Specialist. Pickled Nitra\'s -0.5% Move Speed is the only downside to manage.',
    builds: ['thunderhead-heavy-gunner', 'weapons-specialist-gunner'],
    strength: 'strong',
  },
  // ── Tank Builds ──────────────────────────────────────────────────────────
  {
    id: 'tank-armor',
    archetype: 'Tank Builds',
    combination: ['Salty Pretzel', 'BLT Ration Pack', 'Reflex Calibrator'],
    description: 'Three-artifact tank stack: BLT adds flat HP, Salty Pretzel scales armor with missing HP, Reflex Calibrator adds dodge on taking damage. Together they create a self-reinforcing survival loop.',
    builds: ['juggernaut-tank'],
    strength: 'strong',
  },
  {
    id: 'juggernaut-mocap-avoid',
    archetype: 'Tank Builds',
    combination: ['The MoCap', 'Juggernaut'],
    description: 'The MoCap rewards low HP. Juggernaut rewards staying alive at high HP to maintain damage stacks. Direct anti-synergy — the playstyles are mutually exclusive.',
    builds: ['juggernaut-tank'],
    strength: 'niche',
    isAntiSynergy: true,
  },
  // ── Overclock Scaling ────────────────────────────────────────────────────
  {
    id: 'turbo-encabulator-stacking',
    archetype: 'Overclock Scaling',
    combination: ['Turbo Encabulator', 'Multi Tool'],
    description: 'Both artifacts scale with your overclock and weapon tag counts. Turbo Encabulator gives +3% Damage/Reload per OC, Multi Tool gives +5% Reload per unique tag. Together they reward maximizing both counts.',
    builds: ['weapons-specialist-gunner', 'tinkerer-warthog'],
    strength: 'moderate',
  },
  // ── Reroll Economy ───────────────────────────────────────────────────────
  {
    id: 'reroll-stack',
    archetype: 'Reroll Economy',
    combination: ['Pay2Win Console', '5 Leaf Clover'],
    description: 'Each reroll gives +2.5% Damage (Pay2Win) and temporarily boosts Luck +20 (5 Leaf Clover). Rerolling aggressively is now both a damage investment and a luck spike for better upgrade offers.',
    builds: ['thunderhead-heavy-gunner', 'weapons-specialist-gunner'],
    strength: 'strong',
  },
]

export const ARCHETYPES = [...new Set(SYNERGIES.map(s => s.archetype))]
```

- [ ] **Commit**

```bash
git add src/data/synergies.js
git commit -m "feat: add synergies.js with weapon-artifact-overclock interaction data"
```

---

### Task 14: ArtifactCard component and ArtifactTiers page

**Files:**
- Create: `src/components/artifacts/ArtifactCard.jsx`
- Create: `src/pages/ArtifactTiers.jsx`

- [ ] **Create `src/components/artifacts/ArtifactCard.jsx`**

```jsx
const RARITY_STYLES = {
  epic: { badge: 'bg-cool-blue/20 text-cool-blue border-cool-blue/30', label: 'EPIC' },
  rare: { badge: 'bg-nitra-green/20 text-nitra-green border-nitra-green/30', label: 'RARE' },
}

const TIER_COLORS = {
  S: 'text-drg-amber',
  A: 'text-cool-blue',
  B: 'text-nitra-green',
  C: 'text-text-secondary',
  D: 'text-text-secondary/50',
}

export default function ArtifactCard({ artifact }) {
  const rarity = RARITY_STYLES[artifact.rarity] ?? RARITY_STYLES.rare

  return (
    <div className="bg-elevated-panel border border-border-subtle rounded-lg p-3 space-y-1.5">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-sm font-bold font-mono ${TIER_COLORS[artifact.tier]}`}>
            [{artifact.tier}]
          </span>
          <span className="text-sm font-semibold text-text-primary">{artifact.name}</span>
          <span className={`text-xs font-mono px-1.5 py-0.5 rounded border ${rarity.badge}`}>
            {rarity.label}
          </span>
        </div>
      </div>
      <p className="text-xs text-drg-amber font-mono">{artifact.effect}</p>
      <p className="text-xs text-text-secondary leading-relaxed">{artifact.synergy}</p>
      {artifact.unlock && (
        <p className="text-xs text-text-secondary/60 font-mono">Unlock: {artifact.unlock}</p>
      )}
    </div>
  )
}
```

- [ ] **Create `src/pages/ArtifactTiers.jsx`**

```jsx
import { useState } from 'react'
import { ARTIFACTS, ARTIFACT_CATEGORIES } from '../data/artifacts'
import ArtifactCard from '../components/artifacts/ArtifactCard'

const TIER_ORDER = ['S', 'A', 'B', 'C', 'D']
const TIER_LABELS = { S: 'S-Tier', A: 'A-Tier', B: 'B-Tier', C: 'C-Tier', D: 'D-Tier' }

export default function ArtifactTiers() {
  const [filter, setFilter] = useState('ALL')
  const [rarityFilter, setRarityFilter] = useState('ALL')

  const filtered = ARTIFACTS.filter(a => {
    const catMatch = filter === 'ALL' || a.category === filter
    const rarityMatch = rarityFilter === 'ALL' || a.rarity === rarityFilter
    return catMatch && rarityMatch
  })

  return (
    <div className="px-4 py-4 max-w-2xl mx-auto space-y-4">
      {/* Category filter */}
      <div>
        <p className="text-xs font-mono text-text-secondary uppercase tracking-wide mb-2">Category</p>
        <div className="flex flex-wrap gap-2">
          {['ALL', ...ARTIFACT_CATEGORIES.map(c => c.id)].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={[
                'text-xs font-mono px-2.5 py-1.5 rounded border transition-colors min-h-[36px]',
                filter === cat
                  ? 'bg-drg-amber/20 text-drg-amber border-drg-amber/50'
                  : 'bg-dark-steel text-text-secondary border-border-subtle hover:text-text-primary',
              ].join(' ')}
            >
              {cat === 'ALL' ? 'All' : ARTIFACT_CATEGORIES.find(c => c.id === cat)?.label ?? cat}
            </button>
          ))}
        </div>
      </div>

      {/* Rarity filter */}
      <div className="flex gap-2">
        {['ALL', 'epic', 'rare'].map(r => (
          <button
            key={r}
            onClick={() => setRarityFilter(r)}
            className={[
              'text-xs font-mono px-2.5 py-1.5 rounded border transition-colors min-h-[36px]',
              rarityFilter === r
                ? 'bg-cool-blue/20 text-cool-blue border-cool-blue/50'
                : 'bg-dark-steel text-text-secondary border-border-subtle hover:text-text-primary',
            ].join(' ')}
          >
            {r === 'ALL' ? 'All Rarity' : r.charAt(0).toUpperCase() + r.slice(1)}
          </button>
        ))}
      </div>

      {/* Tier sections */}
      {TIER_ORDER.map(tier => {
        const arts = filtered.filter(a => a.tier === tier)
        if (!arts.length) return null
        return (
          <section key={tier}>
            <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-2">
              {TIER_LABELS[tier]}
              <span className="text-text-secondary/40 ml-2">({arts.length})</span>
            </h2>
            <div className="space-y-2">
              {arts.map(art => <ArtifactCard key={art.id} artifact={art} />)}
            </div>
          </section>
        )
      })}

      {filtered.length === 0 && (
        <p className="text-text-secondary text-sm text-center py-8">No artifacts match the current filter.</p>
      )}
    </div>
  )
}
```

- [ ] **Commit**

```bash
git add src/components/artifacts/ArtifactCard.jsx src/pages/ArtifactTiers.jsx
git commit -m "feat: add ArtifactCard component and ArtifactTiers page"
```

---

### Task 15: WeaponCard component and WeaponReference page

**Files:**
- Create: `src/components/weapons/WeaponCard.jsx`
- Create: `src/pages/WeaponReference.jsx`

- [ ] **Create `src/components/weapons/WeaponCard.jsx`**

```jsx
import { useState } from 'react'
import { BUILDS } from '../../data/builds'

const LEVEL_COLORS = {
  6:  'text-nitra-green',
  12: 'text-cool-blue',
  18: 'text-drg-amber',
}

export default function WeaponCard({ weapon }) {
  const [open, setOpen] = useState(false)

  // Find builds that use this weapon
  const usedInBuilds = BUILDS.filter(b =>
    b.weapons.some(w => w.name === weapon.name)
  )

  return (
    <div className="bg-elevated-panel border border-border-subtle rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-left min-h-[44px]"
      >
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-text-primary">{weapon.name}</span>
          {weapon.tags.map(tag => (
            <span key={tag} className="text-xs font-mono text-text-secondary/60">{tag}</span>
          ))}
        </div>
        <span className="text-text-secondary font-mono text-xs shrink-0 ml-2">
          {usedInBuilds.length > 0 && `${usedInBuilds.length} build${usedInBuilds.length !== 1 ? 's' : ''} · `}
          {open ? '▲' : '▼'}
        </span>
      </button>

      {open && (
        <div className="border-t border-border-subtle px-4 pb-4 space-y-3 pt-3">
          {/* Builds that use this weapon */}
          {usedInBuilds.length > 0 && (
            <div>
              <p className="text-xs font-mono text-text-secondary uppercase tracking-wide mb-1">Used In</p>
              <div className="flex flex-wrap gap-1.5">
                {usedInBuilds.map(b => (
                  <span
                    key={b.id}
                    className="text-xs font-mono px-2 py-0.5 bg-dark-steel border border-border-subtle rounded text-text-secondary"
                  >
                    [{b.tier}] {b.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Overclocks */}
          <div className="space-y-2">
            {weapon.overclocks.map(oc => (
              <div key={oc.level}>
                <p className={`text-xs font-mono uppercase tracking-wide mb-1 ${LEVEL_COLORS[oc.level]}`}>
                  Level {oc.level} Options
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {oc.options.map(opt => (
                    <span
                      key={opt}
                      className="text-xs font-mono px-2 py-0.5 bg-dark-steel border border-border-subtle rounded text-text-primary"
                    >
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
```

- [ ] **Create `src/pages/WeaponReference.jsx`**

```jsx
import { useState } from 'react'
import { WEAPONS, WEAPON_CLASSES } from '../data/weapons'
import WeaponCard from '../components/weapons/WeaponCard'

export default function WeaponReference() {
  const [classFilter, setClassFilter] = useState('ALL')

  const filtered = classFilter === 'ALL'
    ? WEAPONS
    : WEAPONS.filter(w => w.class === classFilter)

  return (
    <div className="px-4 py-4 max-w-2xl mx-auto space-y-4">
      {/* Class filter */}
      <div>
        <p className="text-xs font-mono text-text-secondary uppercase tracking-wide mb-2">Class</p>
        <div className="flex flex-wrap gap-2">
          {['ALL', ...WEAPON_CLASSES].map(cls => (
            <button
              key={cls}
              onClick={() => setClassFilter(cls)}
              className={[
                'text-xs font-mono px-2.5 py-1.5 rounded border transition-colors min-h-[36px]',
                classFilter === cls
                  ? 'bg-drg-amber/20 text-drg-amber border-drg-amber/50'
                  : 'bg-dark-steel text-text-secondary border-border-subtle hover:text-text-primary',
              ].join(' ')}
            >
              {cls}
            </button>
          ))}
        </div>
      </div>

      {/* Weapon list */}
      <div className="space-y-2">
        {WEAPON_CLASSES.filter(c => classFilter === 'ALL' || c === classFilter).map(cls => {
          const weapons = filtered.filter(w => w.class === cls)
          if (!weapons.length) return null
          return (
            <section key={cls}>
              <h2 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-2">
                {cls}
                <span className="text-text-secondary/40 ml-2">({weapons.length})</span>
              </h2>
              <div className="space-y-2">
                {weapons.map(w => <WeaponCard key={w.id} weapon={w} />)}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
```

- [ ] **Commit**

```bash
git add src/components/weapons/WeaponCard.jsx src/pages/WeaponReference.jsx
git commit -m "feat: add WeaponCard component and WeaponReference page"
```

---

### Task 16: Synergies page

**Files:**
- Create: `src/pages/Synergies.jsx`

- [ ] **Create `src/pages/Synergies.jsx`**

```jsx
import { useState } from 'react'
import { SYNERGIES, ARCHETYPES } from '../data/synergies'

const STRENGTH_STYLES = {
  strong:   { bg: 'bg-nitra-green/10', border: 'border-nitra-green/30', badge: 'text-nitra-green', label: 'STRONG' },
  moderate: { bg: 'bg-cool-blue/10',   border: 'border-cool-blue/30',   badge: 'text-cool-blue',   label: 'MODERATE' },
  niche:    { bg: 'bg-drg-gold/10',    border: 'border-drg-gold/30',    badge: 'text-drg-gold',    label: 'NICHE' },
}

export default function Synergies() {
  const [archetypeFilter, setArchetypeFilter] = useState('ALL')
  const [showAntiSynergy, setShowAntiSynergy] = useState(true)

  const filtered = SYNERGIES.filter(s => {
    const archetypeMatch = archetypeFilter === 'ALL' || s.archetype === archetypeFilter
    const antiMatch = showAntiSynergy || !s.isAntiSynergy
    return archetypeMatch && antiMatch
  })

  return (
    <div className="px-4 py-4 max-w-2xl mx-auto space-y-4">
      {/* Archetype filter */}
      <div>
        <p className="text-xs font-mono text-text-secondary uppercase tracking-wide mb-2">Archetype</p>
        <div className="flex flex-wrap gap-2">
          {['ALL', ...ARCHETYPES].map(arch => (
            <button
              key={arch}
              onClick={() => setArchetypeFilter(arch)}
              className={[
                'text-xs font-mono px-2.5 py-1.5 rounded border transition-colors min-h-[36px]',
                archetypeFilter === arch
                  ? 'bg-drg-amber/20 text-drg-amber border-drg-amber/50'
                  : 'bg-dark-steel text-text-secondary border-border-subtle hover:text-text-primary',
              ].join(' ')}
            >
              {arch}
            </button>
          ))}
        </div>
      </div>

      {/* Anti-synergy toggle */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setShowAntiSynergy(v => !v)}
          className={[
            'text-xs font-mono px-2.5 py-1.5 rounded border transition-colors min-h-[36px]',
            showAntiSynergy
              ? 'bg-lava-red/20 text-lava-red border-lava-red/50'
              : 'bg-dark-steel text-text-secondary border-border-subtle',
          ].join(' ')}
        >
          {showAntiSynergy ? 'Showing Anti-Synergies' : 'Anti-Synergies Hidden'}
        </button>
      </div>

      {/* Synergy cards */}
      <div className="space-y-2">
        {filtered.map(syn => {
          const style = STRENGTH_STYLES[syn.strength] ?? STRENGTH_STYLES.niche
          return (
            <div
              key={syn.id}
              className={`rounded-lg border p-3 space-y-2 ${syn.isAntiSynergy ? 'bg-lava-red/10 border-lava-red/30' : `${style.bg} ${style.border}`}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {syn.combination.map(item => (
                    <span
                      key={item}
                      className="text-xs font-mono px-2 py-0.5 bg-dark-steel border border-border-subtle rounded text-text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <span className={`text-xs font-mono shrink-0 ${syn.isAntiSynergy ? 'text-lava-red' : style.badge}`}>
                  {syn.isAntiSynergy ? 'ANTI' : style.label}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-text-secondary leading-relaxed">{syn.description}</p>

              {/* Builds */}
              {syn.builds && syn.builds.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs font-mono text-text-secondary/60">Relevant:</span>
                  {syn.builds.map(buildId => (
                    <span key={buildId} className="text-xs font-mono text-text-secondary/60">{buildId}</span>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-text-secondary text-sm text-center py-8">No synergies match the current filter.</p>
      )}
    </div>
  )
}
```

- [ ] **Commit**

```bash
git add src/pages/Synergies.jsx
git commit -m "feat: add Synergies page with archetype filtering and anti-synergy toggle"
```

---

### Task 17: Wire new tabs into App.jsx

**Files:**
- Modify: `src/App.jsx`

- [ ] **Update `src/App.jsx`** to add 3 new tabs and render the 3 new pages:

```jsx
import { useState } from 'react'
import TabNav from './components/TabNav'
import CheatSheets from './pages/CheatSheets'
import StageGuide from './pages/StageGuide'
import ShopOptimizer from './pages/ShopOptimizer'
import ArtifactTiers from './pages/ArtifactTiers'
import WeaponReference from './pages/WeaponReference'
import Synergies from './pages/Synergies'

const TABS = [
  { id: 'cheatsheets',   label: 'Build Sheets' },
  { id: 'stageguide',    label: 'Stage Guide' },
  { id: 'shopopt',       label: 'Shop Calc' },
  { id: 'artifacttiers', label: 'Artifact Tiers' },
  { id: 'weapons',       label: 'Weapons' },
  { id: 'synergies',     label: 'Synergies' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('cheatsheets')

  return (
    <div className="flex flex-col min-h-dvh bg-cave-black text-text-primary font-sans">
      <header className="bg-dark-steel border-b border-border-subtle px-4 pt-4 pb-0 sticky top-0 z-50">
        <div className="flex items-baseline gap-2 mb-3">
          <h1 className="text-drg-amber font-mono font-bold text-lg leading-none tracking-wide">
            DRG:S
          </h1>
          <span className="text-text-secondary text-sm font-mono">BUILD COMPANION</span>
        </div>
        <TabNav tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
      </header>

      <main className="flex-1 overflow-y-auto">
        {activeTab === 'cheatsheets'   && <CheatSheets />}
        {activeTab === 'stageguide'    && <StageGuide />}
        {activeTab === 'shopopt'       && <ShopOptimizer />}
        {activeTab === 'artifacttiers' && <ArtifactTiers />}
        {activeTab === 'weapons'       && <WeaponReference />}
        {activeTab === 'synergies'     && <Synergies />}
      </main>
    </div>
  )
}
```

- [ ] **Verify all 6 tabs load without errors**

```bash
npm run dev
```

Navigate to each tab in order. Confirm no console errors.

- [ ] **Run full test suite**

```bash
npm test
```

Expected: all tests pass.

- [ ] **Run production build**

```bash
npm run build
```

Expected: build succeeds with no errors.

- [ ] **Commit**

```bash
git add src/App.jsx
git commit -m "feat: add Artifact Tiers, Weapons, and Synergies tabs to app"
```

---

## Phase 4: Text Polish

### Task 18: Polish all build text

**Files:**
- Modify: `src/data/builds.js`

This task is editorial — no automated test can verify quality, so use the criteria below.

**Standards for each build:**
- **Synopsis**: 1-2 sentences, plain English. Tells the player *what the build does* and *why it's powerful*, not how it's built.
- **Overclock notes**: ≤15 words. Answer "why take/skip" — not what the overclock does mechanically.
- **Phase decision content**: Short imperative sentences. Each sentence should be actionable during a real run.
- **Passive description**: Exact passive text from the wiki, not paraphrased.

**Checklist — apply to each of the 12 builds:**

- [ ] **Read the synopsis** — does it tell you what the build does in one reading? Revise if it buries the lead.
- [ ] **Read each overclock note** — is it ≤15 words? Does it say *why*, not *what*? Revise.
- [ ] **Read each phase decision** — could you act on it mid-run without reading it twice? Revise for brevity.
- [ ] **Check for Update 04 staleness** — Pay2Win Console advice in any build should say "+2.5% damage per reroll" not "+100% damage while draining gold".
- [ ] **Verify passive text** against wiki for any builds you're unsure about.

- [ ] **Commit when all 12 builds are polished**

```bash
git add src/data/builds.js
git commit -m "polish: improve synopsis, overclock notes, and phase text clarity across all builds"
```

---

## Final Verification

- [ ] `npm test` — all tests pass
- [ ] `npm run dev` — navigate all 6 tabs, no console errors
- [ ] `npm run build` — production build succeeds
- [ ] Open Build Sheets — all 12 builds present with correct tier badges
- [ ] Open Artifact Tiers — all artifacts visible with filter working
- [ ] Open Weapons — all weapons grouped by class, overclocks expand
- [ ] Open Synergies — synergy cards render, anti-synergy toggle works
- [ ] Open Shop Calc — select Interrogator, toggle Squint-EE5, verify danger warning appears
