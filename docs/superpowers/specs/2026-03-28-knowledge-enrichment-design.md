# Knowledge Enrichment Design

**Date:** 2026-03-28
**Scope:** Deepen existing data content across builds, artifacts, and economy; add UI to surface enriched fields
**Approach:** Data-first enrichment + additive UI; no new pages, no schema breaks

---

## Context

The companion has 12 builds, 35 artifacts, and economy data — all structurally complete but content-thin. Most builds have terse overclock notes and single-line shop advice. Artifacts have 1-sentence synergy descriptions. Economy advice is a single phrase per stage. The goal is to transform this into genuinely useful reference knowledge, then surface it through more aggressive UI additions.

---

## 1. Data Enrichment

### 1.1 builds.js — New Fields

Each of the 12 builds gains:

**`playstyle`** (string): 2–3 sentences on positioning, pacing, risk profile. Different from `synopsis` (which describes mechanics); this describes the *feel* — "plant and spin" vs. "constant repositioning" vs. "fragile high-burst."

**`strengths`** (string[]): 2–3 bullets on what the build excels at (e.g., "Clears dense clusters instantly," "Snowballs hard once OC comes online").

**`weaknesses`** (string[]): 2–3 bullets on where it struggles (e.g., "Weak vs. fast single-target elites in Stage 1," "Gold-starved early if P2W not found").

**`tips`** (string[]): 3–5 non-obvious tricks specific to this build (e.g., "Mine during Thick Boy reload — the cycle is long enough to collect nearby nitra safely").

**Overclock notes enriched**: Expand all terse notes (e.g., "Flex damage source") to explain the *why*: scenario context, synergy with passive, when to skip. Minimum 15 words per note.

**Phase decision content enriched**: Each stage's weapon/OC/shop decisions get expanded to 2–4 sentences with reasoning, economy checkpoints, and fallback plans if the ideal card doesn't drop.

### 1.2 artifacts.js — New Field

**`strategy`** (string): When to buy (early/mid/late), what to pair it with, when to pass even if available. 2–3 sentences complementing the existing `synergy` field.

**Synergy fields enriched**: Expand from 1-liners to 2–3 sentences covering which builds benefit most, specific stat interactions, and conditional skips.

### 1.3 economy.js — Enriched Fields

**`advice`** expanded: Each stage's advice becomes 2–3 sentences with specific decision rules (e.g., "If carry is below lv12, spend only on weapon-level cards. Skip all rerolls if below 80g.").

**`rerollAdvice`** (string): New per-stage reroll guidance — when to reroll vs. save.

---

## 2. UI Additions

### 2.1 BuildCard.jsx — New Expanded Sections

Inside the existing expanded panel, add after the current sections:

- **Playstyle** section: Shows `build.playstyle` as a short paragraph.
- **Strengths & Weaknesses**: Two-column strip — green bullets for strengths, red bullets for weaknesses.
- **Tips** section: Numbered tip list from `build.tips`.
- These are rendered only when the build has the new fields (additive, non-breaking).

### 2.2 ArtifactTag component (new, shared)

A reusable inline artifact chip. When tapped, expands an overlay/inline panel showing:
- Artifact name + tier badge + rarity badge
- Full `effect` text
- `synergy` paragraph
- `strategy` paragraph (new field)

Used in: ArtifactPriority.jsx (build cards), and ShopOptimizer.jsx artifact toggles.

### 2.3 EconomyPanel component (new)

A new section at the bottom of the Stage Guide page (not a new tab). Per-stage breakdown showing:
- Gold/nitra benchmarks (from STAGE_ECONOMY)
- Expanded `advice` text
- `rerollAdvice` for the selected stage
- Reroll cost ladder (from REROLL_COSTS) with visual escalation indicator

This section is always visible in Stage Guide, below the stage timeline, after build selection.

---

## 3. Architecture & File Changes

| File | Change |
|------|--------|
| `src/data/builds.js` | Add `playstyle`, `strengths`, `weaknesses`, `tips` to all 12 builds; enrich OC notes and phase content |
| `src/data/artifacts.js` | Add `strategy` field to all 35 artifacts; expand `synergy` fields |
| `src/data/economy.js` | Expand `advice`; add `rerollAdvice` per stage |
| `src/components/cheatsheets/BuildCard.jsx` | Add playstyle/S&W/tips sections |
| `src/components/cheatsheets/ArtifactPriority.jsx` | Use new ArtifactTag component |
| `src/components/shared/ArtifactTag.jsx` | New component — expandable artifact detail chip |
| `src/components/stageguide/EconomyPanel.jsx` | New component — per-stage economy breakdown |
| `src/pages/StageGuide.jsx` | Add EconomyPanel below phase timeline |
| `src/pages/ShopOptimizer.jsx` | Use ArtifactTag for artifact toggle buttons |

---

## 4. Verification

- `npm test` passes (existing artifact integrity tests still green)
- Dev server shows all 12 build cards expand with new sections
- ArtifactTag expands inline with effect/synergy/strategy
- Stage Guide shows EconomyPanel below phase cards
- ShopOptimizer artifact toggles still function with new ArtifactTag wrapper
- No TypeErrors from missing new fields (all are additive)
