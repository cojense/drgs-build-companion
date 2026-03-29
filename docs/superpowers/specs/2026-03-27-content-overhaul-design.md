# DRG:S Build Companion — Content Overhaul Design

## Context

The DRG:S Build Companion currently covers 8 of 12 subclasses, 9 of ~42 artifacts, and ~24 of ~42 weapons. Several data inconsistencies exist: Pay2Win Console description is outdated (reworked in Update 04), artifacts like Barley Bulb Juice/Gold Scanner/Diver's Manual are referenced in builds but never defined, formatting is inconsistent across `artifacts.never` and `stats.avoid` arrays, and exported constants (`ARTIFACT_TIERS`, `GOLD_PER_STAGE`, `NITRA_PER_STAGE`) are unused. This overhaul brings the app to full game content coverage, fixes data issues, and adds new feature pages.

## Approach: Data-First Foundation

Four sequential phases, each building on the previous.

---

## Phase 1: Data Cleanup & Expansion

### 1a. New `src/data/artifacts.js`

Create a centralized artifact data file containing all ~42 artifacts. Each artifact has:

```js
{
  id: 'squint-ee5',
  name: 'Squint-EE5',
  rarity: 'epic',        // 'rare' | 'epic'
  tier: 'S',             // S/A/B/C/D
  category: 'damage',    // damage | survivability | economy | utility | movement
  effect: '+30% Crit Chance, +100% Crit Damage, -30% Damage',
  unlock: 'Reach 75% Global Crit Chance',
  synergy: 'Best with high-crit builds (Sharpshooter). Avoid on DoT builds where crits don\'t apply.',
}
```

**Source consolidation:**
- Remove `ARTIFACT_TIERS` from `builds.js` (currently exported but never imported)
- Remove `ARTIFACT_OPTIONS` from `ShopOptimizer.jsx`
- Both pages import from the new centralized file

### 1b. Fix Data Inconsistencies

| Issue | Fix |
|---|---|
| Pay2Win Console description | Update to: "+2.5% Damage per reroll, max 100 stacks" (Update 04 rework) |
| BLT Ration Pack HP | Verify wiki value (+80 HP per wiki vs +70 in app) and correct |
| Barley Bulb Juice | Add full definition: +5% Move Speed when standing still, 3s, 5 stacks |
| Gold Scanner | Add full definition: Chance to find Gold when mining |
| Diver's Manual | Add full definition: +10% Damage, +10% Reload Speed, +5% Crit Chance, +15% Crit Damage |
| `artifacts.never` formatting | Normalize to consistent format: `"Name — reason"` using em-dash (` — `). Currently mixed between plain names and inline explanations. |
| `stats.avoid` formatting | Same normalization: `"Stat Name — reason"` or plain name if reason is obvious |
| Unused `GOLD_PER_STAGE` / `NITRA_PER_STAGE` | Wire into ShopOptimizer as named imports to replace hardcoded values (avoids two sources of truth) |

### 1c. ShopOptimizer Artifact Expansion

- Replace hardcoded 9-artifact toggle list with full artifact catalog from `artifacts.js`
- All ~42 artifacts available as toggles
- Group by category (damage, survivability, economy, utility, movement) for scannability
- Each toggle shows artifact name + short effect on hover/tap
- Recommendation engine updated to account for new artifacts

**Files modified:** `src/data/builds.js`, `src/pages/ShopOptimizer.jsx`, `src/data/economy.js`
**Files created:** `src/data/artifacts.js`

---

## Phase 2: New Builds

Add 4 builds to reach full 12-subclass coverage.

| ID | Name | Class | Subclass | Tier | Difficulty |
|---|---|---|---|---|---|
| `weapons-specialist-gunner` | Weapons Specialist Gunner | Gunner | Weapons Specialist | A | 3 |
| `recon-scout` | Recon Dodge Scout | Scout | Recon | B | 2 |
| `juggernaut-tank` | Juggernaut Tank | Gunner | Juggernaut | B | 3 |
| `classic-scout` | Classic Scout | Scout | Classic | C | 2 |

Each build follows the existing data shape in `builds.js`:
- `id`, `name`, `class`, `subclass`, `tier`, `difficulty`, `passive`, `synopsis`
- 4 `weapons` with `name`, `isCarry`, and 3 `overclocks` (level 6/12/18) each with `name`, `verdict`, `note`
- `stats`: `{ priority: [...], avoid: [...] }`
- `artifacts`: `{ always: [...], good: [...], never: [...] }`
- 5 `phases` with 3 `decisions` each (weapon/overclock/shop)

Build content researched from community guides, wiki, and tier lists. Written in the same concise, actionable voice as existing builds.

**Key subclass passives (from wiki):**
- **Weapons Specialist**: Fires 8 bonus [PROJECTILE] projectiles every 100 shots. Access to weapons across classes via [PROJECTILE] tag.
- **Recon**: +25% Dodge, +35% Move Speed and Reload Speed on dodge for 3s.
- **Juggernaut**: +10 Armor, +50 HP. Gain +10% Damage on hit, stacks 5x.
- **Classic**: +10% Move Speed, +15% Max HP.

**Files modified:** `src/data/builds.js`

---

## Phase 3: New Content Features

### 3a. Artifact Tier List Page

New tab in `TabNav` — "Artifact Tiers"

- Grid layout showing all artifacts grouped by tier (S/A/B/C/D)
- Each artifact card: name, rarity badge (Rare/Epic), effect text, synergy note
- Filter bar: ALL | by rarity (Rare/Epic) | by category (damage/survivability/economy/utility/movement)
- Data sourced entirely from `src/data/artifacts.js`

**Files created:** `src/pages/ArtifactTiers.jsx`, `src/components/artifacts/ArtifactCard.jsx`
**Files modified:** `src/App.jsx` (add tab), `src/components/TabNav.jsx` (add tab)

### 3b. Weapon & Overclock Reference

New tab — "Weapons"

- All ~42 weapons listed, grouped by class (Scout/Driller/Gunner/Engineer)
- Each weapon entry: name, which builds use it (cross-linked), overclocks at levels 6/12/18
- Expandable detail for each weapon
- Search/filter by class

**Files created:** `src/data/weapons.js`, `src/pages/WeaponReference.jsx`, `src/components/weapons/WeaponCard.jsx`
**Files modified:** `src/App.jsx`, `src/components/TabNav.jsx`

### 3c. Synergy Page

New tab — "Synergies"

- Shows key weapon-artifact-overclock interactions
- Organized by build archetype (crit builds, DoT builds, tank builds, etc.)
- Each synergy entry: combination, why it works, which builds benefit
- Visual indicators for synergy strength (strong/moderate/niche)

**Files created:** `src/data/synergies.js`, `src/pages/Synergies.jsx`
**Files modified:** `src/App.jsx`, `src/components/TabNav.jsx`

---

## Phase 4: Text Polish

- Review all 12 build synopses for clarity — short, punchy, tells you what the build does in 1-2 sentences
- Normalize overclock verdict notes: each note should answer "why take/skip" in <=15 words
- Make phase decision `content` text scannable: short imperative sentences, no filler
- Consistent formatting: sentence case, em-dashes for asides, no trailing periods in list items
- Update any guidance affected by Update 04 balance changes (Pay2Win, Gold-Tipped Bullets rarity change)

**Files modified:** `src/data/builds.js` (all builds), `src/data/synergies.js`

---

## Tab Structure (after all phases)

Current: Build Sheets | Stage Guide | Shop Calc
After: **Build Sheets | Stage Guide | Shop Calc | Artifact Tiers | Weapons | Synergies**

---

## Implementation Notes

- Use parallel subagents for independent work (e.g., artifact data entry + weapon data entry)
- Each phase should be a separate commit or PR for clean review
- No new dependencies needed — all features use existing React + Tailwind stack
- Follow existing component patterns (expandable cards, filter bars, grid layouts)

---

## Verification

After each phase:
1. `npm run dev` — verify app loads without errors
2. Navigate all tabs — confirm no broken references
3. Check build data renders correctly in Build Sheets and Stage Guide
4. Verify ShopOptimizer recommendations work with expanded artifact list
5. `npm run build` — confirm production build succeeds
