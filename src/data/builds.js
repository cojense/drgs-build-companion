export const BUILDS = [
  {
    id: 'thick-boy-sniper',
    name: 'Thick Boy Sniper',
    class: 'Scout',
    subclass: 'Sharpshooter',
    tier: 'S',
    difficulty: 3,
    passive: '+15% Crit Chance, +50% Crit Damage — overkill crits spawn shrapnel explosions',
    synopsis: 'Rush M1000 to lv18. Thick Boy fuses the entire clip into one mega-shot. With Bigger Mags doubling clip to 12, each shot can hit 18k–72k damage.',
    weapons: [
      {
        name: 'M1000 Classic',
        isCarry: true,
        overclocks: [
          { level: 6, name: 'A Little More Oomph!', verdict: 'take', note: '+damage, no downsides — always take' },
          { level: 12, name: 'Bigger Mags', verdict: 'take', note: 'MUST-TAKE — doubles clip to 12, prerequisite for Thick Boy payoff' },
          { level: 18, name: 'Thick Boy', verdict: 'take', note: 'MUST-TAKE — fuses full clip into 1 mega-shot; the entire build' },
        ],
      },
      {
        name: 'Nishanka Boltshark X-80',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Fire Bolt or Cryo Bolt', verdict: 'situational', note: 'Cryo Bolt for CC; Fire Bolt if no other DoT source' },
          { level: 12, name: 'Gas Rerouting', verdict: 'take', note: '+reload, always useful' },
          { level: 18, name: 'Bolt Volley', verdict: 'take', note: 'Fires 3 bolts — great AoE coverage for cleanup' },
        ],
      },
      {
        name: 'Jury-Rigged Boomstick',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Bigger Mags', verdict: 'take', note: 'More shells between reloads' },
          { level: 12, name: 'High Velocity Bullets', verdict: 'take', note: '+damage on a cleanup weapon' },
          { level: 18, name: 'Thick Boy', verdict: 'take', note: 'Massive single pellet — great for tougher enemies' },
        ],
      },
      {
        name: 'Deepcore GK2',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'A Little More Oomph!', verdict: 'take', note: 'Simple damage boost' },
          { level: 12, name: 'High Caliber Rounds', verdict: 'take', note: '+damage, slight recoil — worth it' },
          { level: 18, name: 'Flex', verdict: 'situational', note: 'Take whatever is offered — this slot is a flex' },
        ],
      },
    ],
    stats: {
      priority: ['Reload Speed', 'Damage', 'Crit Chance', 'Crit Damage', 'Piercing'],
      avoid: ['Fire Rate on M1000', 'Potency', 'Status Effect Damage', 'HP/Armor'],
    },
    artifacts: {
      always: ['Squint-EE5', 'Nitragenic Powder', 'Pickled Nitra'],
      good: ['Pay2Win Console', 'Energy Bars', "Diver's Manual"],
      never: ['Popup Tripod'],
    },
    phases: [
      {
        stage: 1,
        title: 'Identify & Rush',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: M1000 Classic > Boomstick > GK2. Lock in M1000 as your carry immediately. If M1000 is not offered at lv5, take the strongest gun offered and wait — it will appear.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'At M1000 lv6, take A Little More Oomph! without hesitation. Reroll shop once if you\'re offered only movement or HP cards — you need damage to push M1000 to lv12 ASAP.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Hoard gold. Spend 0–15g max. Target ~100g saved by end of Stage 1. Buy only weapon-level cards; skip artifacts until M1000 is at lv12+. If Squint-EE5 appears, buy it now — it compounds every kill.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Bigger Mags Breakpoint',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Continue funneling XP into M1000. At character lv15, consider Boltshark as a CC/cleanup tool. Avoid splitting levels between M1000 and anything else.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'M1000 lv12: ALWAYS take Bigger Mags. This doubles your clip to 12 and is the mandatory prerequisite for Thick Boy\'s payoff. Never reroll this one.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Now you can spend. Buy Nitragenic Powder if it appears (Crit Chance scales with your nitra hoard). Budget ~30g on rerolls to find Crit Chance or Damage upgrades. Save ~120g for Stage 3.',
          },
        ],
      },
      {
        stage: 3,
        title: 'THICK BOY ONLINE',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. M1000 hits lv18 and gets Thick Boy — the entire clip becomes one shot. Use primary exclusively on elites and Dreadnoughts. Switch to Boomstick for trash cleanup.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Thick Boy is the build. At Boomstick lv6+, grab High Velocity Bullets. Stack whatever Crit Chance / Crit Damage cards drop — overkill crits now spawn shrapnel that chain-kills.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend freely. Use saved gold to reroll for Squint-EE5 if not already held (the -30% damage is irrelevant — Thick Boy one-shots anyway). Buy Pickled Nitra for +Fire Rate on reload windows.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Fill & Optimize',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Level Boltshark now — Cryo Bolt for CC and Bolt Volley at lv18 clears trash packs. GK2 is a flex filler; treat it as a stat stick.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Boltshark lv12 Gas Rerouting → lv18 Bolt Volley. For GK2, take whatever drops — High Caliber Rounds if available. Focus artifact rerolls on Squint-EE5 if still missing.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save ~30g for Stage 5 final push. Buy any Crit stat upgrade that appears. Reroll artifact slot once if you\'re missing Squint-EE5 or Nitragenic Powder.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Final Push — Spend All',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'No new investments — carry everything fully leveled. Use M1000 Thick Boy on the supply pod: it deals 50% of Dreadnought HP on impact. Time shots around Thick Boy\'s reload.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'No more OC gating. Max out Paint Jobs on M1000 if offered (only valuable pre-lv18 — you\'re already there, so skip). Take any Crit Damage or Damage global upgrades.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend every gold and nitra. Reroll to complete the Squint-EE5 + Nitragenic Powder + Pickled Nitra trinity. Nitragenic Powder scales with nitra held — mine aggressively in Stage 5.',
          },
        ],
      },
    ],
  },

  {
    id: 'interrogator-fire-dot',
    name: 'Interrogator Fire DoT',
    class: 'Driller',
    subclass: 'Interrogator',
    tier: 'S',
    difficulty: 2,
    passive: '+100% Status Effect Damage, -30% Direct Damage — DoTs are everything; direct hits are just applicators',
    synopsis: 'Wave Cooker with Nano-Waves stacks burn fast, doubled by Interrogator\'s +100% Status Effect Damage. Frost Burn makes Cryo Cannon deal fire damage from cold. Easy once online.',
    weapons: [
      {
        name: 'Colette Wave Cooker',
        isCarry: true,
        overclocks: [
          { level: 6, name: 'Crowd Cooker', verdict: 'take', note: 'Wider beam hits more targets — more simultaneous burn stacks' },
          { level: 12, name: 'Nano-Waves', verdict: 'take', note: 'MUST-TAKE — dramatically increases burn stacks per second; the build multiplier' },
          { level: 18, name: 'Thermal Oscillator', verdict: 'take', note: 'Pulses damage — keeps DoT rolling on moving swarms' },
        ],
      },
      {
        name: 'Krakatoa Sentinel',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'More Beams (+1)', verdict: 'take', note: 'Each beam is another burn applicator' },
          { level: 12, name: 'Tank Tracks', verdict: 'take', note: 'Turret follows you — never leave a DoT zone behind' },
          { level: 18, name: '+3 Beams', verdict: 'take', note: 'Max beams = max burn applications per second' },
        ],
      },
      {
        name: 'CRSPR Flamethrower',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'More Beams (+1)', verdict: 'take', note: 'Counts for beam-boosting artifacts' },
          { level: 12, name: 'Bigger Tanks (+100% Lifetime)', verdict: 'take', note: 'Double uptime between refuels' },
          { level: 18, name: 'Even More Beams (+3)', verdict: 'take', note: 'Wide coverage for dense packs' },
        ],
      },
      {
        name: 'Cryo Cannon',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'More Beams (+1)', verdict: 'take', note: 'Wider freeze coverage' },
          { level: 12, name: 'Frost Burn', verdict: 'take', note: 'MUST-TAKE — cold damage triggers fire DoT; synergy is absurd' },
          { level: 18, name: 'Even More Beams (+3)', verdict: 'take', note: 'More freeze = more Frost Burn triggers' },
        ],
      },
    ],
    stats: {
      priority: ['Potency', 'Status Effect Damage', 'Beam Range', '+1 Beam'],
      avoid: ['Crit Chance', 'Crit Damage — DoTs cannot crit, and Squint-EE5 stacks with class -30%'],
    },
    artifacts: {
      always: ['The MoCap', 'BLT Ration Pack', 'Energy Bars'],
      good: ['Nitragenic Powder', 'Barley Bulb Juice'],
      never: ['Squint-EE5 — -30% Direct Damage stacks with class passive, no upside for DoT'],
    },
    phases: [
      {
        stage: 1,
        title: 'Find the Wave Cooker',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: Wave Cooker > Krakatoa Sentinel > CRSPR Flamethrower. Wave Cooker is the heart of this build. If not offered at lv5, use CRSPR as a placeholder — it burns fine early.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Wave Cooker lv6: take Crowd Cooker. Wider beam means more enemies burning simultaneously. CRSPR lv6: More Beams — every beam is an applicator.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save gold. Avoid Squint-EE5 no matter how good it looks — it will hurt you. Target Potency and Status Effect Damage cards. Budget 100g saved by end of Stage 1.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Nano-Waves Online',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Keep leveling Wave Cooker. Deploy Krakatoa Sentinel immediately — it burns independently while you aim elsewhere. More beams = passive damage.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Wave Cooker lv12: ALWAYS take Nano-Waves. This is the build\'s multiplier — no substitute. Krakatoa lv6: More Beams. Push Tank Tracks at lv12 so your turret follows you.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy BLT Ration Pack for survivability — this build plays in melee range. Spend ~30g on Potency upgrades. Start checking nitra vendor for The MoCap (+1% damage per % HP missing).',
          },
        ],
      },
      {
        stage: 3,
        title: 'Full Burn',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Wave Cooker should hit lv18 this stage — Thermal Oscillator keeps the pulse rolling. Cryo Cannon is now important: Frost Burn makes every freeze tick deal fire damage.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Cryo Cannon lv12: MUST-TAKE Frost Burn. The combo with Interrogator passive turns cold into +200% fire DoT. Stack Cryo Cannon beams for faster freeze application.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Full spend allowed. Prioritize any Status Effect Damage upgrades. Reroll once or twice for The MoCap — at low HP it\'s essentially a damage multiplier that rewards aggressive play.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Beam Maximization',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Finish Krakatoa to lv18 (+3 Beams) for maximum passive burns. CRSPR at lv18 gives wide-beam coverage on dense packs. Use Cryo Cannon as an opener — freeze then ignite.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Any Beam-related upgrades take priority. +Range on Wave Cooker is excellent — you burn enemies before they close the gap. Avoid anything that requires direct-damage investment.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save ~30g for Stage 5. Fill artifact slots. Energy Bars is good here — each level adds +1% damage and you\'re not HP-stacking anyway.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Burn the Boss',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Krakatoa + Wave Cooker + CRSPR all burning the Dreadnought simultaneously. Cryo Cannon for Frost Burn application. Supply pod does 50% HP — time the drop for a clean burn opener.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Anything boosting DoT duration or Potency. Ignore direct damage upgrades — Interrogator passive already penalizes them. The MoCap is extremely strong here: low HP = big damage.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Mine all nitra for Nitragenic Powder scaling. Stack the final Potency and Status Effect Damage upgrades. Never buy Squint-EE5 no matter what.',
          },
        ],
      },
    ],
  },

  {
    id: 'thunderhead-heavy-gunner',
    name: 'Heavy Gunner Thunderhead',
    class: 'Gunner',
    subclass: 'Heavy Gunner',
    tier: 'S',
    difficulty: 2,
    passive: '+25% Range & Reload for [HEAVY] weapons, -10% Move Speed — plant your feet and shred',
    synopsis: 'Rush Thunderhead to lv18 for Tightly Wound Springs (+150% fire rate). Cryo Cannon freezes swarms so the autocannon can do the work. Simple, devastatingly effective.',
    weapons: [
      {
        name: '"Thunderhead" Heavy Autocannon',
        isCarry: true,
        overclocks: [
          { level: 6, name: 'Gas Rerouting', verdict: 'take', note: '+reload — every Heavy Gunner reload stat multiplied by passive' },
          { level: 12, name: 'High Caliber Rounds', verdict: 'take', note: '+damage per bullet; pairs with high fire rate later' },
          { level: 18, name: 'Tightly Wound Springs', verdict: 'take', note: 'MUST-TAKE — +150% fire rate. The build\'s entire identity' },
        ],
      },
      {
        name: 'Cryo Cannon',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'More Beams (+1)', verdict: 'take', note: 'Wider freeze coverage for incoming swarms' },
          { level: 12, name: 'Frost Burn', verdict: 'take', note: 'Fire damage from cold — bonus DPS while Thunderhead spins up' },
          { level: 18, name: 'Even More Beams (+3)', verdict: 'take', note: 'Full beam width freezes entire swarm lanes' },
        ],
      },
      {
        name: 'ArmsKore Coil Gun',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'More Beams (+1)', verdict: 'take', note: 'Coil Gun benefits from beam synergies' },
          { level: 12, name: 'High Velocity Bullets', verdict: 'take', note: '+damage on a high-penetration weapon' },
          { level: 18, name: 'Even More Beams (+3)', verdict: 'take', note: 'More penetrating beams = more enemies hit per shot' },
        ],
      },
      {
        name: 'Seismic Repulsor',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Coolant Leak', verdict: 'take', note: 'Applies cryo on knockback — setup for Thunderhead follow-up' },
          { level: 12, name: 'Extra Capacity (+1)', verdict: 'take', note: 'More charges = more crowd control uptime' },
          { level: 18, name: 'Extra Capacity (+3)', verdict: 'take', note: 'Maximum pushback charges; almost permanent CC availability' },
        ],
      },
    ],
    stats: {
      priority: ['Kinetic Damage', 'Piercing', 'Fire Rate', 'Reload Speed'],
      avoid: ['Potency', 'Status Effect Damage — Thunderhead is pure kinetic damage'],
    },
    artifacts: {
      always: ['Gold-Tipped Bullets', 'Squint-EE5', 'The MoCap'],
      good: ['Pickled Nitra', 'Energy Bars'],
      never: [],
    },
    phases: [
      {
        stage: 1,
        title: 'Lock In the Autocannon',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: Thunderhead > Cryo Cannon > Coil Gun. Thunderhead is your only priority. Heavy Gunner\'s passive gives it +25% reload from the start — already above-average before any upgrades.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Thunderhead lv6: Gas Rerouting. Heavy Gunner passive amplifies reload speed — this gets you back to spewing autocannon fire faster than any other class could.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save gold (100g target). Buy Gold-Tipped Bullets early if it appears — gold accumulates fast and the damage bonus scales all run. Skip all movement speed upgrades (you\'re slow, embrace it).',
          },
        ],
      },
      {
        stage: 2,
        title: 'High Caliber Rounds',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Keep pouring XP into Thunderhead. Deploy Cryo Cannon as secondary to freeze swarms — gives Thunderhead time to spin up and rip. Freeze → Thunderhead is the core loop.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Thunderhead lv12: High Caliber Rounds. Each bullet now hits harder — combined with incoming fire rate spike at lv18, this multiplies. Cryo Cannon lv6: More Beams.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Look for Squint-EE5 in artifact vendor. Unlike the Interrogator, you CAN crit — Thunderhead\'s high fire rate makes crit chance incredibly valuable. Spend ~30g on Kinetic Damage.',
          },
        ],
      },
      {
        stage: 3,
        title: 'TIGHTLY WOUND SPRINGS',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. Thunderhead lv18 = +150% fire rate. What was already strong is now obscene. Freeze with Cryo Cannon, then unleash the autocannon. Swarms die in under a second.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Tightly Wound Springs at lv18 is mandatory — never reroll. Cryo Cannon lv12: Frost Burn for bonus DPS. Seismic Repulsor lv6: Coolant Leak for cryo-on-knockback.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend saved gold. Complete Squint-EE5 + Gold-Tipped Bullets combo — both scale with your massive damage output. Fire Rate upgrades have diminishing returns now; focus Kinetic Damage instead.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Max Cryo Coverage',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Finish Cryo Cannon to lv18 (Even More Beams). Level Coil Gun for piercing single targets. Seismic Repulsor provides emergency crowd control — keep it around.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Cryo Cannon lv18: Even More Beams = widest possible freeze wall. Coil Gun lv12: High Velocity Bullets. Seismic Repulsor Extra Capacity for max CC charges.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 30g for Stage 5. The MoCap is worth buying here if available — at low HP it multiplies already massive Thunderhead damage. Reroll once for it if needed.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Full Send',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Thunderhead handles everything. Use Cryo Cannon on the supply pod drop to freeze the Dreadnought. Then spend the rest of the fight unloading Tightly Wound Springs into it.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Take every Piercing upgrade available — Thunderhead fires so fast that piercing converts to massive AoE effectively. Any Kinetic Damage cards are insta-buy.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Mine all nitra. Gold-Tipped Bullets: hold gold to maximize damage on boss. Dump gold only on the Dreadnought encounter.',
          },
        ],
      },
    ],
  },

  {
    id: 'tinkerer-warthog',
    name: 'Tinkerer Warthog Carry',
    class: 'Engineer',
    subclass: 'Tinkerer',
    tier: 'A',
    difficulty: 2,
    passive: '+10% XP Gain, all weapons start at Level 3 — can reach lv18 on Stage 1',
    synopsis: 'Tinkerer\'s Level 3 start means Warthog can hit lv18 on Stage 1 with good XP routing. Akimbo makes it fire both directions — solves flanking weakness completely.',
    weapons: [
      {
        name: '"Warthog" Auto 210',
        isCarry: true,
        overclocks: [
          { level: 6, name: 'Battery Bullets (→Electric) or High Velocity', verdict: 'situational', note: 'Battery Bullets if you want status synergy; High Velocity for pure damage' },
          { level: 12, name: 'Gas Rerouting', verdict: 'take', note: '+reload on a shotgun with long reload; significant DPS increase' },
          { level: 18, name: 'Akimbo', verdict: 'take', note: 'MUST-TAKE — fires both directions simultaneously; eliminates flanking weakness' },
        ],
      },
      {
        name: 'Voltaic Shock Fence',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Magnetic Alloy', verdict: 'take', note: 'XP orbs attracted to fence — extremely valuable with Tinkerer +10% XP' },
          { level: 12, name: 'Extra Capacity (+1)', verdict: 'take', note: 'More fence nodes = wider coverage' },
          { level: 18, name: 'Conduit', verdict: 'take', note: 'Fence links to you — dynamic positioning without repositioning fence' },
        ],
      },
      {
        name: 'LMG Gun Platform',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Tank Tracks', verdict: 'take', note: 'Turret follows you — mobile fire support' },
          { level: 12, name: 'Plasma Coating', verdict: 'take', note: 'Adds electric damage — synergy with Battery Bullets Warthog' },
          { level: 18, name: 'LMG Overload', verdict: 'take', note: '+150% fire rate on turret — turret becomes a supplemental carry' },
        ],
      },
      {
        name: 'LOK-1 Smart Rifle',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Gas Rerouting', verdict: 'take', note: 'Faster lock-on cycling' },
          { level: 12, name: 'Battery Bullets', verdict: 'take', note: 'Electric synergy with the fence and coating' },
          { level: 18, name: 'Lead Wrapped Ammo', verdict: 'take', note: '+damage on a lock-on weapon — clean up anything that slips through' },
        ],
      },
    ],
    stats: {
      priority: ['Range', 'Fire Rate', 'Reload Speed', 'Damage'],
      avoid: ['Movement Speed — you want to be stationary for Popup Tripod stacks'],
    },
    artifacts: {
      always: ['Popup Tripod', 'Energy Bars', 'Squint-EE5'],
      good: ['Pay2Win Console', 'Gold-Tipped Bullets'],
      never: [],
    },
    phases: [
      {
        stage: 1,
        title: 'Level 3 Advantage — Sprint to lv18',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Warthog starts at lv3. With Tinkerer\'s +10% XP and good grinding, hitting lv18 on Stage 1 is achievable. Priority: Warthog > Voltaic Fence > LMG. Maximize XP collection.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Warthog lv6 comes fast — take Battery Bullets for electric synergy, or High Velocity for pure damage. Either works. Push for lv12 Gas Rerouting immediately after.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Use Voltaic Fence\'s Magnetic Alloy to vacuum XP — this accelerates the lv18 sprint. Popup Tripod is the ideal first artifact buy; stationary shooting stacks it to 30% Fire Rate/Reload fast.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Akimbo Online',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'If Warthog didn\'t hit lv18 in Stage 1, it will hit it early Stage 2. Akimbo changes everything — you\'re now a two-direction shotgun that never needs to turn around.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Warthog lv18: Akimbo. Done. Start leveling LMG Platform — Tank Tracks at lv6 means your turret follows you, giving you mobile fire support on top of Akimbo.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'LMG Plasma Coating + Akimbo Warthog creates an electric field. Buy Popup Tripod here if not already acquired — standing still to shotgun enemies stacks it to max quickly.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Turret Synergy',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'LMG Platform should reach lv12 (Plasma Coating) and push toward lv18 (LMG Overload). Mobile LMG turret + Akimbo Warthog = 360° coverage while stationary.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'LMG lv12: Plasma Coating. Voltaic Fence lv12: Extra Capacity for wider coverage. Begin stacking Popup Tripod — find a good corner position and let enemies come to you.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Full spend on Range and Fire Rate. Range extends Warthog\'s pellet spread into Akimbo\'s back-direction. Squint-EE5 is excellent here — Warthog shots crit on the forward spread.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Full Platform',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'LMG lv18: LMG Overload. Your turret now shreds at +150% fire rate. LOK-1 for target prioritization. Voltaic Fence lv18: Conduit — fence follows you, no repositioning needed.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'LOK-1 Battery Bullets + Lock-on mechanics synergize with electric platform. Lead Wrapped Ammo at lv18 for the damage close-out. Pay2Win Console rewards rerolls with +2.5% damage each.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 30g for Stage 5. Energy Bars is excellent for Tinkerer — you\'re not HP-stacking, so -2 Max HP per level is irrelevant, but +1% damage per level compounds.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Boss — Find Your Corner',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Find a corner or wall. Deploy LMG turret (Tank Tracks keeps it close), place Voltaic Fence (Conduit keeps it on you), and let Akimbo Warthog cover both approach vectors.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Take every Reload Speed upgrade — stationary Popup Tripod stacks make reload speed directly translate to fire rate. Range and Fire Rate are also priority.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Gold-Tipped Bullets: hold gold through the run, dump it at boss stage for +damage. Pay2Win Console: reroll aggressively — each reroll permanently stacks damage.',
          },
        ],
      },
    ],
  },

  {
    id: 'grenade-spam-demo',
    name: 'Grenade Spam Demo',
    class: 'Engineer',
    subclass: 'Demolitionist',
    tier: 'A',
    difficulty: 1,
    passive: '+20% Reload Speed & AoE Size for [EXPLOSIVE] weapons — every grenade is bigger and faster',
    synopsis: 'Easiest S-to-A-tier build. Every weapon is explosive. Cryo Grenade with Gravitational Core pulls enemies into a cluster, then HE Grenade or PGL finishes them in one explosion.',
    weapons: [
      {
        name: 'Deepcore PGL',
        isCarry: true,
        overclocks: [
          { level: 6, name: 'Bigger Mags', verdict: 'take', note: 'More grenades before reload; Demolitionist passive boosts reload anyway' },
          { level: 12, name: 'Compact Explosives', verdict: 'take', note: '+damage per explosion — stacks with AoE passive' },
          { level: 18, name: 'Cluster Grenades', verdict: 'take', note: 'Each shot spawns sub-grenades; massive AoE chain' },
        ],
      },
      {
        name: 'Cryo Grenade',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Compact Explosives', verdict: 'take', note: '+damage and radius' },
          { level: 12, name: 'Cluster Grenades', verdict: 'take', note: 'More freeze sub-grenades = wider cluster pull setup' },
          { level: 18, name: 'Gravitational Core', verdict: 'take', note: 'MUST-TAKE — pulls all enemies to impact point before freezing; perfect setup for PGL' },
        ],
      },
      {
        name: 'High Explosive Grenade',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Compact Explosives', verdict: 'take', note: 'Bigger blast radius with passive' },
          { level: 12, name: 'A Little More Oomph!', verdict: 'take', note: '+damage on the primary damage grenade' },
          { level: 18, name: 'True TNT', verdict: 'take', note: 'Massive damage spike — one-shots clustered frozen enemies' },
        ],
      },
      {
        name: 'Plasma Burster',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'A Little More Oomph!', verdict: 'take', note: '+damage on bounce shots' },
          { level: 12, name: 'Ionized Plasma', verdict: 'take', note: 'Adds electric — useful on hard targets' },
          { level: 18, name: 'More Bounce!', verdict: 'take', note: 'More ricochets = more hit coverage in tunnels' },
        ],
      },
    ],
    stats: {
      priority: ['Explosion Radius', 'Reload Speed', 'Damage', 'Crit Chance'],
      avoid: ['Fire Rate', 'Beam stats — no beam weapons in this build'],
    },
    artifacts: {
      always: ['Energy Bars', 'Gold-Tipped Bullets'],
      good: ['BLT Ration Pack', 'Pay2Win Console'],
      never: [],
    },
    phases: [
      {
        stage: 1,
        title: 'Grenade Loop Established',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: PGL > Cryo Grenade > HE Grenade. PGL benefits most from Demolitionist passive (AoE + Reload). Cryo Grenade is your setup tool — you need it before Stage 3.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'PGL lv6: Bigger Mags. More grenades in clip means more explosions before reload, and the Demolitionist reload passive makes the gap between clips very short.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'This is the easiest build to play. Save gold (100g target). Explosion Radius upgrades are your best card draw — every grenade in the kit benefits from the same upgrade.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Cluster Setup',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Level PGL toward lv12 (Compact Explosives) and Cryo Grenade toward lv12 (Cluster Grenades). The Cryo cluster setup is what makes Gravitational Core at lv18 devastating.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Cryo Grenade lv12: Cluster Grenades — sets up the pull. PGL lv12: Compact Explosives. Two more stages until Gravitational Core changes everything.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Energy Bars is ideal here — low HP threshold is easy to maintain as Demolitionist has strong self-peel. Spend ~30g on Reload Speed to tighten the grenade loop.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Gravitational Core',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. Cryo Grenade lv18: Gravitational Core. Throw it, watch 20 enemies get yanked to the impact point, then freeze. Then throw PGL Cluster Grenades directly on the pile.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Gravitational Core is the build. PGL lv18: Cluster Grenades for sub-grenade chain on the clustered pile. HE Grenade lv12: A Little More Oomph! for the finisher.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Full spend. Gold-Tipped Bullets pairs well since gold accumulates while farming — passive damage boost all run. Look for any Explosion Radius global upgrade; it\'s a force multiplier.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Finishing All Kits',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'HE Grenade to lv18: True TNT for the massive single-explosion finisher. Plasma Burster to lv12+ for electric coverage on tougher targets. All kits mostly complete.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'HE Grenade lv18: True TNT — the highest single-explosion damage in the kit. Plasma Burster lv18: More Bounce! for tunnel coverage. Complete grenade loops.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 30g for Stage 5. Buy Pay2Win Console if available — aggressively rerolling upgrades earns 2.5% damage per reroll permanently.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Pull → Freeze → Boom',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Against the Dreadnought: supply pod + Gravitational Core pull before landing for immediate crowd clear. Then PGL Cluster Grenades on frozen Dreadnought position.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Take every Explosion Radius and Damage upgrade. Skip anything that doesn\'t touch grenades. Reload Speed is excellent — tighter grenade loops means more explosions per minute.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Hold gold for Gold-Tipped Bullets maximum scaling on boss. Dump all nitra on final artifact rerolls.',
          },
        ],
      },
    ],
  },

  {
    id: 'leadburster-bomb',
    name: 'Leadburster Bomb',
    class: 'Driller',
    subclass: 'Strong Armed',
    tier: 'A',
    difficulty: 3,
    passive: '+20% Range for [THROWABLE] weapons — Leadburster, Impact Axe, and grenades all benefit',
    synopsis: 'Rough stages 1–3 while building up. Freeze enemies with Cryo Grenades, then spawn Leadbursters inside the frozen group. Cluster Grenades triples throwable output. Devastating late-game.',
    weapons: [
      {
        name: 'Tactical Leadburster',
        isCarry: true,
        overclocks: [
          { level: 6, name: 'Cluster Grenades', verdict: 'take', note: 'Triples number of Leadbursters spawned; core multiplier' },
          { level: 12, name: 'Penetrating Projectiles', verdict: 'take', note: 'Each Leadburster shot pierces — massive multi-hit on frozen clusters' },
          { level: 18, name: 'Lead Wrapped Ammo', verdict: 'take', note: '+damage per projectile; stacks with piercing and cluster count' },
        ],
      },
      {
        name: 'Impact Axe',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Corrosive Coating', verdict: 'take', note: 'Applies acid DoT — extra damage on stuck axes' },
          { level: 12, name: 'Lightweight Alloy (+50% Range)', verdict: 'take', note: 'Extended range on primary throwable; strong with passive' },
          { level: 18, name: 'More Axes (+100% clip)', verdict: 'take', note: 'Double axes — consistent throw cadence' },
        ],
      },
      {
        name: 'Cryo Grenade',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Cluster Grenades', verdict: 'take', note: 'More cryo sub-grenades = wider freeze on incoming swarms' },
          { level: 12, name: 'Compact Explosives', verdict: 'take', note: '+radius on freeze; sets up Leadburster spawns in larger area' },
          { level: 18, name: 'Gravitational Core', verdict: 'take', note: 'Pull enemies together then freeze — perfect Leadburster spawn zone' },
        ],
      },
      {
        name: 'Neurotoxin Grenade',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Cluster Grenades', verdict: 'take', note: 'More toxin coverage' },
          { level: 12, name: 'Tape Some Nails To It', verdict: 'take', note: 'Extra shrapnel — AoE damage on detonation' },
          { level: 18, name: 'Hallucinogenic', verdict: 'take', note: 'Confused enemies fight each other — chaos damage multiplier' },
        ],
      },
    ],
    stats: {
      priority: ['Damage', 'Reload Speed', 'Crit Chance', 'Explosive Damage', 'Radius'],
      avoid: ['Beam stats', 'Potency — build is physical, not DoT focused'],
    },
    artifacts: {
      always: ['Squint-EE5', 'Nitragenic Powder', 'Energy Bars'],
      good: ['Gold-Tipped Bullets', 'BLT Ration Pack'],
      never: [],
    },
    phases: [
      {
        stage: 1,
        title: 'Survive Early Weakness',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: Leadburster > Cryo Grenade > Impact Axe. Warning: this build is rough stages 1–3. Leadburster takes time to reach its breakpoints. Use Impact Axe + Cryo Grenade defensively.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Leadburster lv6: Cluster Grenades. This is the first multiplier — it triples the spawned Leadbursters per throw. Until then, throw axes and use Cryo for crowd control.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Prioritize survival: BLT Ration Pack (+70 HP, +2 regen) is worth buying early — you will take hits while the build ramps. Save 80g. Mine nitra aggressively for Nitragenic Powder.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Cluster Grenades Online',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Leadburster to lv12. Begin leveling Cryo Grenade — Cluster Grenades at lv6 widens your freeze zone, setting up better Leadburster spawn spots.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Leadburster lv12: Penetrating Projectiles. Each Leadburster now fires through multiple enemies — inside a frozen cluster, this is multi-hit carnage. Getting noticeably stronger.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Nitragenic Powder if available — your nitra hoard from aggressive mining compounds into Crit Chance stacks. Spend ~30g on Damage upgrades. Build is approaching its breakpoint.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Lead Wrapped Ammo',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Leadburster lv18: Lead Wrapped Ammo — full damage unlocked. The combo of Cluster (×3) + Penetrating + Lead Wrapped turns a single throw into a wall of high-damage piercing shots.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Cryo Grenade lv12: Compact Explosives for wider freeze. Push toward Gravitational Core at lv18 — pull then freeze then Leadburster is the full combo. Still Stage 3 ramp.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Full spend. Squint-EE5 now pays off — Leadburster shots can crit, and Cluster means many crit opportunities per throw. Look for Crit Chance stat upgrades.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Full Combo Online',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Cryo Grenade lv18: Gravitational Core. Now you have the full combo: pull → freeze → spawn Cluster Leadbursters inside. Impact Axe to lv18: More Axes for throw cadence.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Neurotoxin lv12: Tape Some Nails To It for AoE. Neurotoxin lv18: Hallucinogenic for confused enemies fighting each other. All throwables now at full power.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 30g for Stage 5. Complete Squint-EE5 + Nitragenic Powder artifact pair. Crit Chance upgrades have massive leverage with Cluster Grenades\' many projectiles.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Late-Game Devastating',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'All kits maxed and fully online. Dreadnought: use supply pod + Gravitational Core to cluster the Dreadnought and nearby enemies. Then three Cluster Leadburster throws.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Take every Damage and Crit Chance upgrade. Explosive Damage stat amplifies every weapon in the kit simultaneously. No beam or DoT upgrades.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Mine maximum nitra for Nitragenic Powder\'s scaling. Hold gold for Gold-Tipped Bullets during boss phase. Full nitra dump on artifact rerolls.',
          },
        ],
      },
    ],
  },

  {
    id: 'constructor-turret-army',
    name: 'Constructor Turret Army',
    class: 'Engineer',
    subclass: 'Maintenance Worker',
    tier: 'B',
    difficulty: 2,
    passive: '+10% Construct Damage, +10% Construct Reload Speed — turrets are stronger and fire faster',
    synopsis: 'Deploy turrets, collect XP, let them handle the swarms. Rush LMG to lv18 for LMG Overload. Popup Tripod is mandatory — standing still while turrets fight stacks it to max.',
    weapons: [
      {
        name: 'LMG Gun Platform',
        isCarry: true,
        overclocks: [
          { level: 6, name: 'Tank Tracks', verdict: 'take', note: 'Turret follows you; never orphaned in a corner' },
          { level: 12, name: 'Plasma Coating', verdict: 'take', note: 'Adds electric damage — turret hits with kinetic + electric' },
          { level: 18, name: 'LMG Overload', verdict: 'take', note: 'MUST-TAKE — +150% fire rate on turret. This is the build' },
        ],
      },
      {
        name: 'Krakatoa Sentinel',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Extra Capacity (+1)', verdict: 'take', note: 'More beam turrets deployed simultaneously' },
          { level: 12, name: 'More Beams (+1)', verdict: 'take', note: 'More beams per turret = more burn coverage' },
          { level: 18, name: 'Tank Tracks', verdict: 'take', note: 'Fire turret also follows you; mobile fortification' },
        ],
      },
      {
        name: 'Seismic Repulsor',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Coolant Leak', verdict: 'take', note: 'Cryo on knockback — freeze before turrets shred' },
          { level: 12, name: 'Extra Capacity (+1)', verdict: 'take', note: 'More knockback charges for CC uptime' },
          { level: 18, name: 'Extra Capacity (+3)', verdict: 'take', note: 'Near-permanent knockback available; turrets rarely get overwhelmed' },
        ],
      },
      {
        name: 'Firefly Hunter Drone',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'More Drones (+1)', verdict: 'take', note: 'Double drone count; airborne harassment' },
          { level: 12, name: 'Behaviour Chip: Defensive', verdict: 'take', note: 'Drones guard you instead of wandering — prevent flankers' },
          { level: 18, name: 'More Drones (+3)', verdict: 'take', note: 'Maximum drone swarm; flying turret army supplement' },
        ],
      },
    ],
    stats: {
      priority: ['Reload Speed', 'Fire Rate', 'Damage', 'Construct Duration'],
      avoid: ['Movement Speed — Popup Tripod stacks require standing still', 'Crit'],
    },
    artifacts: {
      always: ['Popup Tripod (mandatory)', 'Barley Bulb Juice'],
      good: ['Gold-Tipped Bullets', 'Energy Bars'],
      never: [],
    },
    phases: [
      {
        stage: 1,
        title: 'Deploy and Stand',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: LMG Platform > Krakatoa Sentinel > Firefly Drone. Get two turrets deployed ASAP. Your job is to stand near turrets, collect XP, and let them do work. Movement is the enemy of Popup Tripod.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'LMG lv6: Tank Tracks immediately — static turret is nearly useless in a moving fight. Tank Tracks turns it into a mobile companion. Krakatoa lv6: Extra Capacity for more simultaneous turrets.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Popup Tripod is MANDATORY. Buy it at first opportunity — standing still while turrets fight stacks it to +30% Fire Rate and +30% Reload for all weapons. 100g save target.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Plasma Coating Online',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push LMG to lv12 for Plasma Coating. Electric + kinetic turret damage with Maintenance Worker passive is solid mid-game. Deploy Krakatoa for a second turret line.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'LMG lv12: Plasma Coating. Krakatoa lv12: More Beams — fire turret with multiple beams burns faster. Seismic Repulsor lv6: Coolant Leak for freeze-then-shred setup.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Gold-Tipped Bullets is excellent here — you accumulate gold safely while turrets fight. Spend ~30g on Reload Speed upgrades. Construct Duration cards are priority.',
          },
        ],
      },
      {
        stage: 3,
        title: 'LMG Overload Spike',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. LMG lv18: LMG Overload (+150% fire rate). Your mobile turret is now a minigun. Stand still, let Popup Tripod stack to max, collect XP while the turret handles everything.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'LMG Overload is mandatory. Krakatoa lv18: Tank Tracks — now both turrets follow you. Deploy both, stand in a chokepoint. Seismic Repulsor Extra Capacity for CC backup.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Full spend. Barley Bulb Juice for sustain — you\'re stationary and soaking hits. Reroll once for Popup Tripod if not acquired. Fire Rate on turrets benefits from Overload synergy.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Full Army',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Firefly Drones to lv12: Behaviour Chip Defensive — drones now guard you. Combined with both turrets following, you have: 2 ground turrets + 2 drones + Repulsor CC. Full army.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Firefly lv18: More Drones (+3). Seismic lv18: Extra Capacity (+3). Krakatoa fully online with Tank Tracks. All constructs at maximum capability.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 30g for Stage 5. Complete Barley Bulb Juice + Popup Tripod core. Energy Bars is a decent addition — you\'re standing still, HP loss from the artifact doesn\'t matter much.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Fortify the Boss Arena',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Find a corner in the boss arena. Deploy both turrets (LMG Overload + Krakatoa), let all drones orbit you. Stand still to max Popup Tripod, use Repulsor if Dreadnought closes in.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Take all Reload Speed, Fire Rate, and Construct Duration upgrades. Your turrets do the damage — maximize their uptime. Ignore Movement Speed entirely.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Gold-Tipped Bullets: hold gold all run, deploy into boss fight with maximum +damage. Full nitra spend on artifact rerolls. Mine aggressively before Stage 5 boss spawn.',
          },
        ],
      },
    ],
  },

  {
    id: 'acid-foreman',
    name: 'Acid Foreman',
    class: 'Driller',
    subclass: 'Foreman',
    tier: 'B',
    difficulty: 3,
    passive: '+2% Mining Speed per mine action (stacks 25×) — best material farming build in the game',
    synopsis: 'Subata fires backwards while you mine forward — unique playstyle. Best gold and nitra farming build. Acid Dipped Tips at lv12 converts Subata to acid damage. Double Barrel at lv18 doubles pellet count.',
    weapons: [
      {
        name: 'Subata 120',
        isCarry: true,
        overclocks: [
          { level: 6, name: 'Sidearm (-25% own, +25% others)', verdict: 'situational', note: 'Buffs your whole team if co-op; solo = -25% net negative, skip and reroll' },
          { level: 12, name: 'Acid Dipped Tips', verdict: 'take', note: 'MUST-TAKE — converts Subata to acid damage, enabling Status Effect scaling' },
          { level: 18, name: 'Double Barrel', verdict: 'take', note: 'Doubles pellet count per shot — with acid DoT, each pellet applies a stack' },
        ],
      },
      {
        name: 'Krakatoa Sentinel',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'More Beams (+1)', verdict: 'take', note: 'More beams = more burn applicators passively' },
          { level: 12, name: 'Mining Directive', verdict: 'take', note: 'Turret mines nitra and gold — synergy with Foreman mining speed stacks' },
          { level: 18, name: 'Tank Tracks', verdict: 'take', note: 'Turret follows you while you mine; never leave it behind' },
        ],
      },
      {
        name: 'Cryo Cannon',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'More Beams (+1)', verdict: 'take', note: 'Wider freeze coverage' },
          { level: 12, name: 'Frost Burn', verdict: 'take', note: 'Fire from cold — bonus DoT while retreating and mining' },
          { level: 18, name: 'Even More Beams (+3)', verdict: 'take', note: 'Full-width freeze wall' },
        ],
      },
      {
        name: 'Impact Axe',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Corrosive Coating', verdict: 'take', note: 'Acid DoT from axes — synergizes with Status Effect Damage stat priority' },
          { level: 12, name: 'A Little More Oomph!', verdict: 'take', note: '+damage per axe; good for elites while retreating' },
          { level: 18, name: 'More Axes (+100% clip)', verdict: 'take', note: 'Double axes — maintain throw cadence while kiting backward' },
        ],
      },
    ],
    stats: {
      priority: ['Status Effect Damage', 'Potency', 'Reload Speed', 'Mining Speed', 'Movement Speed'],
      avoid: ['Crit', 'Beam stats unrelated to DoT application'],
    },
    artifacts: {
      always: ['Nitragenic Powder', 'Gold Scanner + Gold-Tipped Bullets'],
      good: ['Energy Bars', 'BLT Ration Pack'],
      never: [],
    },
    phases: [
      {
        stage: 1,
        title: 'Mine Everything',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: Subata > Krakatoa > Cryo Cannon. Unique playstyle: mine forward, Subata fires backward. Use Krakatoa turret to cover your back while mining. Start stacking Foreman speed stacks immediately.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Subata lv6: If solo, skip Sidearm (-25% damage to you) and reroll. Wait for Acid Dipped Tips at lv12 — that\'s the real activation. Krakatoa lv6: More Beams for passive burn coverage.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Mine EVERYTHING. Foreman stacks +2% mining speed per action (max 25×). Nitragenic Powder is the first-priority artifact buy — your nitra hoard is larger than any other build\'s.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Acid Dipped Tips',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Subata to lv12 aggressively. Krakatoa lv12 Mining Directive lets your turret mine for you — deploy it on nitra veins. This build generates substantially more gold than average.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Subata lv12: ALWAYS take Acid Dipped Tips. Converts all shots to acid — now every pellet applies acid DoT stacks. Status Effect Damage stat upgrades become valuable.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Gold Scanner is optional but useful — reveals gold deposits through walls. Spend ~30g on Status Effect Damage and Potency. Your nitra hoard should be 50% larger than the economy benchmarks.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Double Barrel Spike',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Subata lv18: Double Barrel. Each shot fires two pellets → each applies acid DoT → Status Effect Damage doubles the damage per tick. Start making up for the build\'s weaker early game.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Cryo Cannon lv12: Frost Burn for fire DoT from cold while retreating. Krakatoa lv18: Tank Tracks — fire turret follows you as you mine forward, covering retreat automatically.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Full spend. Gold-Tipped Bullets is excellent here — you have more gold than anyone. Stack gold to maximum before boss for peak damage. Spend nitra on Nitragenic Powder compound.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Complete the DoT Stack',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Impact Axe with Corrosive Coating adds a second acid DoT source. Cryo Cannon lv18: Even More Beams — full-width freeze for defensive coverage while kiting backward.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Impact Axe lv18: More Axes for throw rate. Cryo Cannon lv18: Even More Beams. K1-P Viper Drone if obtained — deploy while mining for aerial DoT application.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 30g for Stage 5. Complete Nitragenic Powder + Gold-Tipped Bullets core pair. Energy Bars compounds well — each level is a small damage stack and you\'re not HP dependent.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Mine While Fighting',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Unique boss strategy: keep mining nitra during the fight to maintain Foreman speed stacks and Nitragenic Powder scaling. Subata fires backward automatically while you face the rock face.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'All Status Effect Damage and Potency upgrades are priority. Movement Speed is useful here — faster retreat = more time mining. Mining Speed upgrades amplify Foreman stack generation.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. This build has the largest resource surplus of any kit — use it all. Gold-Tipped Bullets damage peaks here with maximum gold. Dump all nitra on artifact rerolls.',
          },
        ],
      },
    ],
  },
]
