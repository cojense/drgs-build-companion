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
        name: 'Drak-25 Plasma Carbine',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Overcharged PCF', verdict: 'take', note: '+damage, no downsides — reliable supplemental damage throughout the run' },
          { level: 12, name: 'Plasma Burst', verdict: 'take', note: 'AoE plasma shots — good for clearing packs between Thick Boy reloads' },
          { level: 18, name: 'Volatile Impact Mixture', verdict: 'situational', note: 'Adds fire DoT — skip if already have DoT coverage; take for mixed swarms' },
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
        name: 'Cryo Grenade',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Compact Explosives', verdict: 'take', note: '+radius on freeze — slows incoming clusters and sets up Thick Boy landing shots' },
          { level: 12, name: 'Frost Nova', verdict: 'take', note: 'Bigger freeze burst; more CC coverage between Thick Boy reloads' },
          { level: 18, name: 'Gravitational Core', verdict: 'situational', note: 'Pulls enemies to impact point before freezing — cluster setup for Thick Boy mega-shot' },
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
            content: 'Priority: M1000 Classic > Boomstick > Drak-25. Lock in M1000 as your carry immediately. If M1000 is not offered at lv5, take the strongest gun offered and wait — it will appear.',
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
            content: 'Continue funneling XP into M1000. At character lv15, consider Drak-25 Plasma Carbine as a supplemental damage tool, or Cryo Grenade for CC setup. Avoid splitting levels between M1000 and anything else.',
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
            content: 'Level Drak-25 Plasma Carbine — Plasma Burst AoE covers packs between Thick Boy reloads. Level Cryo Grenade toward lv18 Gravitational Core — pull then freeze then Thick Boy = highest possible per-shot damage.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Drak-25 lv12: Plasma Burst for AoE. Cryo Grenade lv18: Gravitational Core — pull clusters into one spot, then land Thick Boy mega-shot for maximum overkill crit chains. Focus artifact rerolls on Squint-EE5 if still missing.',
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
        name: 'Acid Grenade',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Compact Explosives', verdict: 'take', note: '+radius and damage; pairs with Demolitionist AoE passive — bigger splash' },
          { level: 12, name: 'Cluster Grenades', verdict: 'take', note: 'More acid sub-grenades — wider DoT coverage on frozen clusters' },
          { level: 18, name: 'Corrosive Burst', verdict: 'take', note: 'Massive acid AoE; melts armor and finishes frozen grouped enemies' },
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
      always: ['Popup Tripod', 'Barley Bulb Juice'],
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
        name: 'Corrosive Sludge Pump',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Extended Tank', verdict: 'take', note: '+range and ammo — spray acid while retreating; Foreman speed stacks keep you ahead of enemies' },
          { level: 12, name: 'Acid Surge', verdict: 'take', note: 'More acid stacks per second — scales directly with Status Effect Damage priority' },
          { level: 18, name: 'Corrosive Flood', verdict: 'take', note: 'Leaves persistent acid puddles — DoT field covers your retreat and mining zones' },
        ],
      },
      {
        name: 'Neurotoxin Grenade',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Cluster Grenades', verdict: 'take', note: 'More toxin sub-grenades — wider DoT coverage on groups' },
          { level: 12, name: 'Tape Some Nails To It', verdict: 'take', note: 'Shrapnel on detonation; AoE damage burst on top of DoT' },
          { level: 18, name: 'Hallucinogenic', verdict: 'take', note: 'Confused enemies fight each other — passive damage while you mine undisturbed' },
        ],
      },
      {
        name: 'K1-P Viper Drone',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'More Drones (+1)', verdict: 'take', note: 'Double drone count — more aerial acid applicators covering your back' },
          { level: 12, name: 'Acid Tips', verdict: 'take', note: 'Drone attacks apply acid DoT — synergy with Status Effect Damage scaling' },
          { level: 18, name: 'Swarm Protocol', verdict: 'take', note: 'Drones coordinate burst attacks — amplified DoT spike on prioritized targets' },
        ],
      },
    ],
    stats: {
      priority: ['Status Effect Damage', 'Potency', 'Reload Speed', 'Damage'],
      avoid: ['Crit — acid DoT cannot crit', 'Beam stats unrelated to DoT application'],
    },
    artifacts: {
      always: ['Nitragenic Powder', 'Gold Scanner', 'Gold-Tipped Bullets'],
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
            content: 'Priority: Subata > Corrosive Sludge Pump > Neurotoxin Grenade. Unique playstyle: mine forward, Subata fires backward. Sludge Pump sprays acid behind you as you retreat. Start stacking Foreman speed stacks immediately.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Subata lv6: If solo, skip Sidearm (-25% damage to you) and reroll. Wait for Acid Dipped Tips at lv12 — that\'s the real activation. Sludge Pump lv6: Extended Tank for longer acid spray range.',
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
            content: 'Push Subata to lv12 aggressively. Sludge Pump lv12: Acid Surge increases stack generation — start buying Status Effect Damage upgrades in the shop. This build generates substantially more gold than average.',
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
            content: 'Sludge Pump lv18: Corrosive Flood — acid puddles create persistent kill zones behind you. Neurotoxin Grenade lv6: Cluster Grenades for wider toxin coverage on incoming swarms.',
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
            content: 'K1-P Viper Drone with Acid Tips adds aerial acid DoT — a third DoT source supplementing Subata and Sludge Pump. Neurotoxin Grenade lv18: Hallucinogenic for confused enemies fighting each other while you mine.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'K1-P Viper Drone lv12: Acid Tips — drone attacks apply acid DoT synergizing with Status Effect scaling. Neurotoxin lv18: Hallucinogenic. Sludge Pump fully online.',
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
            content: 'Unique boss strategy: keep mining nitra during the fight to maintain Foreman speed stacks and Nitragenic Powder scaling. Subata fires backward automatically while you face the rock face. Deploy K1-P drones and toss Neurotoxin before disengaging to mine.',
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
  {
    id: 'survivalist-smg-rush',
    name: 'Survivalist SMG Rush',
    class: 'Scout',
    subclass: 'Survivalist',
    tier: 'B',
    difficulty: 2,
    passive: '+20% Move Speed, +3 HP Regen/s when above 50% HP — stay mobile, stay alive',
    synopsis: 'Zhukov SMG pair with high fire rate and Survivalist mobility. Stay above 50% HP for free regen. Use movement speed advantage to kite and outpace swarms. Cryo Grenade buys time to reposition.',
    weapons: [
      {
        name: 'Zhukov Mk II',
        isCarry: true,
        overclocks: [
          { level: 6, name: 'Gas Rerouting', verdict: 'take', note: '+reload on dual SMGs; keeps the fire rate loop tight' },
          { level: 12, name: 'High Caliber Rounds', verdict: 'take', note: '+damage per bullet; SMG fire rate makes this significant' },
          { level: 18, name: 'Embedded Detonators', verdict: 'take', note: 'MUST-TAKE — bullets embed micro-explosives that detonate on reload; massive burst DPS' },
        ],
      },
      {
        name: 'Cryo Grenade',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Compact Explosives', verdict: 'take', note: '+radius on freeze; wider CC coverage while you reposition' },
          { level: 12, name: 'Frost Nova', verdict: 'take', note: 'Bigger freeze burst; stops chasing enemies so you can kite freely' },
          { level: 18, name: 'Gravitational Core', verdict: 'situational', note: 'Pull enemies to one spot then freeze; setup for Embedded Detonator burst on clustered group' },
        ],
      },
      {
        name: 'Jury-Rigged Boomstick',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Bigger Mags', verdict: 'take', note: 'More shells between reloads; important for Survivalist who needs to keep moving' },
          { level: 12, name: 'High Velocity Bullets', verdict: 'take', note: '+damage on a point-blank finisher while kiting past enemies' },
          { level: 18, name: 'Thick Boy', verdict: 'take', note: 'Massive single pellet — fires during movement as a burst panic button' },
        ],
      },
      {
        name: 'Deepcore GK2',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'A Little More Oomph!', verdict: 'take', note: 'Straightforward damage boost' },
          { level: 12, name: 'High Caliber Rounds', verdict: 'take', note: '+damage, reliable mid-game flex weapon' },
          { level: 18, name: 'Supercooling Chamber', verdict: 'situational', note: 'Cryo debuff on GK2 — extends freeze duration from Cryo Grenade' },
        ],
      },
    ],
    stats: {
      priority: ['Damage', 'Reload Speed', 'Movement Speed', 'Fire Rate', 'Crit Chance'],
      avoid: ['HP/Armor stacking — you need to stay above 50% HP for regen, but stacking HP means you survive longer above threshold anyway; fine either way', 'Stationary buffs — Popup Tripod conflicts with mobility playstyle'],
    },
    artifacts: {
      always: ['BLT Ration Pack', 'Energy Bars', 'Gold-Tipped Bullets'],
      good: ['Pay2Win Console', 'Nitragenic Powder'],
      never: ['Popup Tripod — movement is everything for Survivalist'],
    },
    phases: [
      {
        stage: 1,
        title: 'Lock In Zhukov, Stay Mobile',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Priority: Zhukov Mk II > Boomstick > GK2. Zhukov\'s dual-SMG fire rate is the highest in the Scout kit. Cryo Grenade early is a big defensive asset — freeze incoming swarms and kite freely.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Zhukov lv6: Gas Rerouting immediately. Dual SMGs reload fast, and this makes reload windows nearly zero. Keep moving; Survivalist passive gives free regen when above 50% HP.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Buy BLT Ration Pack early — +70 HP and regen means your 50% HP threshold is more forgiving. Save 100g. Mine aggressively using movement speed advantage to cover more ground per wave.' },
        ],
      },
      {
        stage: 2,
        title: 'High Caliber Breakpoint',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Push Zhukov to lv12 (High Caliber Rounds). Cryo Grenade lv12: Frost Nova for bigger freeze. Each freeze = time to reposition and proc the regen by staying above 50% HP.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Zhukov lv12: High Caliber Rounds — a damage spike that makes the mid-game feel much stronger. GK2 lv6: Quick flex investment for supplemental damage between reloads.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Energy Bars is excellent here — you\'re not HP-stacking, but +1% damage per level compounds. Spend ~30g on Damage upgrades. Save 120g for Stage 3.' },
        ],
      },
      {
        stage: 3,
        title: 'Embedded Detonators Online',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'POWER SPIKE. Zhukov lv18: Embedded Detonators. Fire into a target, reload, watch micro-bombs explode. Against frozen clusters from Cryo Grenade, the detonation damage multiplies across every enemy.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Embedded Detonators is the build. Cryo Grenade lv18: Gravitational Core — pull cluster then freeze then Embedded Detonator burst is devastating. Boomstick lv12: High Velocity Bullets.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Full spend. Gold-Tipped Bullets scales with accumulated gold — Survivalist mines quickly so this compounds well. Look for Crit Chance if Squint-EE5 is available (Zhukov shots crit).' },
        ],
      },
      {
        stage: 4,
        title: 'Fill Secondaries',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Boomstick to lv18: Thick Boy for burst panic shots. GK2 fills the flex role — take whatever OC is offered. All kits mostly complete by end of Stage 4.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Boomstick lv18: Thick Boy — mobile point-blank burst. GK2 lv12+ flex upgrades. Any Damage or Reload Speed global cards are priority across all weapons.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Save 30g for Stage 5. Complete BLT + Energy Bars artifact pairing. Pay2Win Console is worth buying — aggressive rerolling earns permanent damage stacks.' },
        ],
      },
      {
        stage: 5,
        title: 'Keep Moving on the Boss',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Against Dreadnought: use Gravitational Core Cryo pull before supply pod to cluster escorts, then Embedded Detonator burst into the frozen pile. Stay mobile to outrange Dreadnought attacks.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Take all Damage and Reload Speed upgrades. Movement Speed upgrades are tier-1 for Survivalist — faster you are, the less you get hit, and HP regen keeps you topped up between engagements.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Spend everything. Gold-Tipped Bullets: hold gold all run for max boss damage. Dump nitra on artifact rerolls. Survivalist generates good resources thanks to mobility — you cover more ground per stage.' },
        ],
      },
    ],
  },

  {
    id: 'infiltrator-cryo-burst',
    name: 'Infiltrator Cryo Burst',
    class: 'Scout',
    subclass: 'Infiltrator',
    tier: 'A',
    difficulty: 3,
    passive: '+50% Damage for 3s after moving 15m without stopping — burst window rewards constant repositioning',
    synopsis: 'Dash constantly to maintain the 15m movement burst window, then dump Boltshark bolts or a Thick Boy shot during the +50% burst. Cryo Grenade freezes targets so you can fire in the burst window without enemies closing gap.',
    weapons: [
      {
        name: 'Nishanka Boltshark X-80',
        isCarry: true,
        overclocks: [
          { level: 6, name: 'Cryo Bolt', verdict: 'take', note: 'Cryo Bolt freezes targets — fire during your movement burst window into frozen enemies for double-dipping CC + burst damage' },
          { level: 12, name: 'Gas Rerouting', verdict: 'take', note: '+reload; faster cycle between bolt volleys during the burst window' },
          { level: 18, name: 'Bolt Volley', verdict: 'take', note: 'MUST-TAKE — fires 3 bolts simultaneously; during the +50% burst window this triples the damage spike' },
        ],
      },
      {
        name: 'M1000 Classic',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'A Little More Oomph!', verdict: 'take', note: '+damage; dump a charged shot during the burst window for a massive single-target spike' },
          { level: 12, name: 'Bigger Mags', verdict: 'take', note: 'More shots in burst window before reload interrupts the flow' },
          { level: 18, name: 'Thick Boy', verdict: 'take', note: 'Fire during burst window = one mega-shot at +50% damage; devastating on elites' },
        ],
      },
      {
        name: 'Cryo Grenade',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Compact Explosives', verdict: 'take', note: '+radius; wider freeze so you can keep moving and still catch targets in the blast' },
          { level: 12, name: 'Cluster Grenades', verdict: 'take', note: 'More freeze sub-grenades — wider area for burst window firing' },
          { level: 18, name: 'Gravitational Core', verdict: 'take', note: 'Pull enemies together then freeze — then dash to trigger burst window, fire Bolt Volley into the cluster' },
        ],
      },
      {
        name: 'Deepcore GK2',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'A Little More Oomph!', verdict: 'take', note: 'Flex damage source' },
          { level: 12, name: 'High Caliber Rounds', verdict: 'take', note: 'More damage per bullet; useful flex during burst windows' },
          { level: 18, name: 'Supercooling Chamber', verdict: 'situational', note: 'Cryo debuff extends freeze durations — more time to exploit burst window' },
        ],
      },
    ],
    stats: {
      priority: ['Damage', 'Crit Chance', 'Crit Damage', 'Reload Speed', 'Movement Speed'],
      avoid: ['HP/Armor — you want to be moving, not tanking', 'Potency — no DoT in this build'],
    },
    artifacts: {
      always: ['Squint-EE5', 'Energy Bars', 'Pay2Win Console'],
      good: ['Nitragenic Powder', "Diver's Manual"],
      never: ['Popup Tripod — movement is the entire mechanic, never stop moving'],
    },
    phases: [
      {
        stage: 1,
        title: 'Learn the Burst Window',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Priority: Boltshark > M1000 > GK2. Boltshark with Cryo Bolt is the core — freeze targets, dash to trigger burst window, fire. Practice the movement pattern immediately.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Boltshark lv6: Cryo Bolt. The freeze is what makes this build work — it gives you a stationary target to fire at during the burst window. Without it, landing shots while dashing is inconsistent.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Squint-EE5 is the ideal first artifact — Boltshark shots crit, and +100% Crit Damage with the +50% burst window stacks multiplicatively. Save 100g. Prioritize Crit Chance stat cards.' },
        ],
      },
      {
        stage: 2,
        title: 'Bigger Mags + Burst Rhythm',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Push Boltshark to lv12. M1000 lv12: Bigger Mags. The pattern is: dash 15m → burst window activates → Cryo Bolt freeze → dump shots → dash again to reset. Bigger Mags means more shots per burst window.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Boltshark lv12: Gas Rerouting. M1000 lv12: Bigger Mags — more shots fired during each burst window before reload interrupts. Cryo Grenade lv6: Compact Explosives.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Energy Bars is excellent — low HP threshold is easy at Infiltrator\'s mobility. Each level +1% damage compounds. Buy Pay2Win Console here if available — each reroll is +2.5% permanent damage.' },
        ],
      },
      {
        stage: 3,
        title: 'Bolt Volley Online',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'POWER SPIKE. Boltshark lv18: Bolt Volley fires 3 bolts simultaneously — during the +50% burst window this triples the damage burst. One dash, one freeze, one triple-bolt volley = massive damage.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Bolt Volley at lv18 is the carry. M1000 lv18: Thick Boy for a massive single-shot alternative burst. Cryo lv12: Cluster Grenades for wider freeze coverage.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Full spend. Stack Crit Chance and Damage. Squint-EE5 + burst window + Bolt Volley triple-crit is the highest per-second burst in Scout\'s kit. Reroll aggressively for Crit upgrades.' },
        ],
      },
      {
        stage: 4,
        title: 'Full Burst Toolkit',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Cryo lv18: Gravitational Core — now the combo is: pull → freeze → dash to trigger burst → Bolt Volley triple shot into clustered frozen targets. GK2 handles anything that slips through.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Cryo Gravitational Core is the final piece. GK2 flex OCs. Any Crit Damage global upgrade is insta-buy — the burst window already multiplies it by 1.5×.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Save 30g for Stage 5. Complete Squint-EE5 + Energy Bars core. Movement Speed upgrades are directly worth buying — faster movement = faster 15m dash cycle = more burst windows per minute.' },
        ],
      },
      {
        stage: 5,
        title: 'Boss — Constant Dash Cycle',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Dreadnought: dash constantly to maintain burst window. Cryo Gravitational Core pulls + freezes escorts and Dreadnought. Fire Bolt Volley during burst window, then M1000 Thick Boy during next burst cycle.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Take every Damage, Crit Chance, and Movement Speed upgrade. Movement Speed upgrades are unusually valuable for Infiltrator — every extra speed shortens the 15m dash cycle.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Spend everything. Pay2Win Console: reroll aggressively for the permanent +2.5% damage stacks. Energy Bars at max levels becomes a significant damage multiplier. Never stop moving in Stage 5.' },
        ],
      },
    ],
  },

  {
    id: 'enforcer-minigun',
    name: 'Enforcer Minigun',
    class: 'Gunner',
    subclass: 'Enforcer',
    tier: 'A',
    difficulty: 2,
    passive: '+15% Damage, -20% Move Speed — plant your feet and delete everything in front of you',
    synopsis: 'Lead Storm Minigun with Bullet Hell OC turns you into a stationary damage engine. Enforcer\'s +15% damage is always-on and stacks with all upgrades. Pair with Seismic Repulsor for CC — enemies can\'t reach you before dying.',
    weapons: [
      {
        name: 'Lead Storm Powered Minigun',
        isCarry: true,
        overclocks: [
          { level: 6, name: 'Magnetic Bearings', verdict: 'take', note: '+fire rate while spinning; combined with Enforcer passive damage this is already devastating at lv6' },
          { level: 12, name: 'Burning Hell', verdict: 'take', note: 'Sustained fire builds heat; at max heat all shots deal bonus fire damage — pairs with passive damage boost' },
          { level: 18, name: 'Bullet Hell', verdict: 'take', note: 'MUST-TAKE — bullets ricochet off terrain and enemies; a kill turns one bullet into a hundred — chain annihilation' },
        ],
      },
      {
        name: 'Seismic Repulsor',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Coolant Leak', verdict: 'take', note: 'Cryo on knockback; freeze anything that survived the minigun to clean up' },
          { level: 12, name: 'Extra Capacity (+1)', verdict: 'take', note: 'More charges; Enforcer can\'t move so CC uptime is critical for survival' },
          { level: 18, name: 'Extra Capacity (+3)', verdict: 'take', note: 'Near-permanent knockback; enemies never reach you while minigun is spinning' },
        ],
      },
      {
        name: 'Cryo Cannon',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'More Beams (+1)', verdict: 'take', note: 'Wider freeze coverage for incoming swarms before minigun warmup' },
          { level: 12, name: 'Frost Burn', verdict: 'take', note: 'Fire from cold — bonus damage during minigun spin-up phase' },
          { level: 18, name: 'Even More Beams (+3)', verdict: 'take', note: 'Full-width freeze wall; plant your feet and freeze an entire wave' },
        ],
      },
      {
        name: 'ArmsKore Coil Gun',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'High Velocity Bullets', verdict: 'take', note: '+damage on a piercing single-target weapon for elites outside freeze range' },
          { level: 12, name: 'Ferromagnetic Exta', verdict: 'take', note: 'More piercing targets; useful for cleaning up stragglers Bullet Hell ricochets miss' },
          { level: 18, name: 'Lead Wrapped Ammo', verdict: 'take', note: '+damage per shot; strong on a high-penetration weapon' },
        ],
      },
    ],
    stats: {
      priority: ['Kinetic Damage', 'Fire Rate', 'Piercing', 'Reload Speed'],
      avoid: ['Movement Speed — you don\'t move anyway', 'Potency — build is pure kinetic/explosive'],
    },
    artifacts: {
      always: ['Gold-Tipped Bullets', 'Squint-EE5', 'Pickled Nitra'],
      good: ['The MoCap', 'Energy Bars'],
      never: ['Popup Tripod — Minigun already has spinup; standing still is fine but Popup is redundant'],
    },
    phases: [
      {
        stage: 1,
        title: 'Find a Good Spot and Spin',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Priority: Lead Storm Minigun > Cryo Cannon > Coil Gun. Enforcer\'s +15% damage is active from wave 1 — even a lv5 minigun with the passive is above-average. Find a chokepoint immediately.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Minigun lv6: Magnetic Bearings. Higher fire rate while spinning + Enforcer passive = massive sustained DPS before any upgrades. Plant your feet and let enemies run into you.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Gold-Tipped Bullets early — Enforcer accumulates gold passively from killing swarms without moving. Save 100g. Buy Kinetic Damage cards whenever offered.' },
        ],
      },
      {
        stage: 2,
        title: 'Burning Hell Sustain',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Push Minigun to lv12. Cryo Cannon deployed to freeze incoming waves before the minigun spins up. Freeze → Spin → Kill is the core loop. Seismic Repulsor for any flankers.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Minigun lv12: Burning Hell. Sustained fire builds heat and adds fire damage bonus — combined with Enforcer passive you\'re outputting triple-damage at max heat. Don\'t let the barrel cool.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Squint-EE5 is excellent here — minigun\'s high fire rate converts crit chance into constant crits. Spend ~30g on Fire Rate upgrades. Pickled Nitra for +50% fire rate at a stationary cost you already pay.' },
        ],
      },
      {
        stage: 3,
        title: 'Bullet Hell Online',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'POWER SPIKE. Minigun lv18: Bullet Hell. Ricocheting bullets means kills spawn bullets that kill more enemies. Enforcer passive applies to every ricochet. Dense swarms become chain reaction annihilation.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Bullet Hell is non-negotiable. Cryo Cannon lv12: Frost Burn for fire DoT during Minigun warmup. Seismic Repulsor lv12: Extra Capacity for CC uptime while stationary.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Spend saved gold. Complete Squint-EE5 + Gold-Tipped Bullets + Pickled Nitra core trio. Pickled Nitra\'s -15% move speed is already negated by Enforcer — pure upside.' },
        ],
      },
      {
        stage: 4,
        title: 'CC Grid Complete',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Seismic Repulsor to lv18: Extra Capacity (+3) for near-permanent knockback. Cryo Cannon to lv18: full beam width. Coil Gun for single-target elite cleanup.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Seismic Repulsor Extra Capacity (+3) — almost unlimited knockback charges for a stationary player. Coil Gun Lead Wrapped Ammo for elite pops. Cryo full beams.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Save 30g for Stage 5. The MoCap at low HP triples your already-massive Bullet Hell damage — if you\'re tanking hits anyway, it\'s incredibly strong.' },
        ],
      },
      {
        stage: 5,
        title: 'Boss Execution — Stay Put',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Find the best chokepoint in the boss arena. Cryo Cannon full-width freeze on supply pod drop, then immediately spin up minigun. Bullet Hell ricochets clear all escorts while you focus Dreadnought.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Take every Kinetic Damage, Fire Rate, and Piercing upgrade. Piercing converts minigun\'s fire rate into multi-hit — effectively doubles DPS against any target in a line.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Spend everything. Gold-Tipped Bullets: hold gold all run, dump into boss stage at max stack. Pickled Nitra: +50% fire rate on a build whose passive already gives +15% damage — the math is excellent.' },
        ],
      },
    ],
  },

  {
    id: 'devastator-repulsor',
    name: 'Devastator Repulsor Chain',
    class: 'Gunner',
    subclass: 'Devastator',
    tier: 'B',
    difficulty: 3,
    passive: '+30% Knockback Force, +15% Explosion Radius — all weapons push harder and blast wider',
    synopsis: 'Seismic Repulsor with Devastating Shockwave becomes a CC engine. Extended range knockback into walls deals terrain damage. Autocannon or Thunderhead with high fire rate mops up knocked-back enemies. Rough early, excellent late.',
    weapons: [
      {
        name: 'Seismic Repulsor',
        isCarry: true,
        overclocks: [
          { level: 6, name: 'Shockwave', verdict: 'take', note: 'Extended knockback pulse — combined with Devastator +30% Knockback, enemies fly into walls for terrain damage' },
          { level: 12, name: 'Extra Capacity (+1)', verdict: 'take', note: 'More charges; CC uptime is everything for Devastator\'s knockback-into-wall playstyle' },
          { level: 18, name: 'Devastating Shockwave', verdict: 'take', note: 'MUST-TAKE — explosion follows the knockback pulse; +15% radius from passive = massive AoE' },
        ],
      },
      {
        name: '"Thunderhead" Heavy Autocannon',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Gas Rerouting', verdict: 'take', note: '+reload; fire autocannon into knocked-back enemies before they recover' },
          { level: 12, name: 'High Caliber Rounds', verdict: 'take', note: '+damage per bullet; combined with Repulsor follow-up, groups die fast' },
          { level: 18, name: 'Tightly Wound Springs', verdict: 'take', note: '+150% fire rate — mop up knocked-back groups before they regroup' },
        ],
      },
      {
        name: 'Cryo Cannon',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'More Beams (+1)', verdict: 'take', note: 'Freeze survivors after knockback — double CC layer' },
          { level: 12, name: 'Frost Burn', verdict: 'take', note: 'Fire from cold; bonus damage on frozen survivors' },
          { level: 18, name: 'Even More Beams (+3)', verdict: 'take', note: 'Full-width freeze wall after knockback; ensures nothing survives getting pushed back' },
        ],
      },
      {
        name: 'High Explosive Grenade',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Compact Explosives', verdict: 'take', note: '+radius; Devastator passive adds another +15% radius on top — big blast' },
          { level: 12, name: 'A Little More Oomph!', verdict: 'take', note: '+damage on grenades; throw into knocked-back cluster for bonus burst' },
          { level: 18, name: 'True TNT', verdict: 'take', note: 'Massive damage spike; throw at knocked-back cluster for finishing burst' },
        ],
      },
    ],
    stats: {
      priority: ['Damage', 'Explosion Radius', 'Reload Speed', 'Kinetic Damage', 'Fire Rate'],
      avoid: ['Status Effect Damage — build is kinetic and explosive, not DoT', 'Movement Speed — you stand and repulse'],
    },
    artifacts: {
      always: ['Gold-Tipped Bullets', 'Energy Bars', 'BLT Ration Pack'],
      good: ['Pay2Win Console', 'The MoCap'],
      never: ['Popup Tripod — conflicts with Repulsor timing; you need to be reactive, not stationary'],
    },
    phases: [
      {
        stage: 1,
        title: 'Survive the Ramp',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Priority: Seismic Repulsor > Thunderhead > Cryo Cannon. Warning: this build is slow to ramp. Repulsor + Shockwave at lv6 is decent but Devastating Shockwave at lv18 is the real power. Survive early with CC.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Repulsor lv6: Shockwave. Even before Devastating Shockwave, enemies pushed into walls take bonus terrain damage. Devastator\'s +30% knockback makes this consistent from lv6.' },
          { type: 'shop', label: 'Shop Strategy', content: 'BLT Ration Pack early — this build takes hits during ramp-up. Save 80g. Energy Bars is also excellent since you\'ll be standing and soaking. Mine aggressively to fund Stage 3 spend.' },
        ],
      },
      {
        stage: 2,
        title: 'Extra Capacity',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Repulsor to lv12: Extra Capacity. More knockback charges mean more CC uptime. Thunderhead levels are important — you need it at lv18 by Stage 3 for Tightly Wound Springs as your cleanup tool.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Repulsor lv12: Extra Capacity (+1). Thunderhead lv6: Gas Rerouting. Cryo Cannon deployed as a secondary CC layer — freeze survivors of knockback that don\'t hit walls.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Spend ~30g on Explosion Radius upgrades — every explosive in the kit benefits, and Devastator passive stacks on top. Gold-Tipped Bullets compounds with combat passive gold generation.' },
        ],
      },
      {
        stage: 3,
        title: 'Devastating Shockwave Online',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'POWER SPIKE. Repulsor lv18: Devastating Shockwave. Every repulse now detonates an explosion behind pushed enemies — enemies get knocked back AND bombed. Thunderhead lv18: Tightly Wound Springs follows up.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Devastating Shockwave is the build. Thunderhead lv18: Tightly Wound Springs — spray knocked-back enemies before they recover. HE Grenade lv12: A Little More Oomph! for burst cleanup.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Full spend. Complete Gold-Tipped Bullets + Energy Bars pair. Stack Damage and Explosion Radius — both passive and OC synergize. Cryo Cannon adds freeze layer after knockback.' },
        ],
      },
      {
        stage: 4,
        title: 'Freeze + Boom + Spray',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Cryo Cannon to lv18: Even More Beams for full-width freeze. HE Grenade to lv18: True TNT for devastating cluster finishers. The loop: Repulsor push + explosion → freeze survivors → spray Thunderhead.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Cryo full beams, HE Grenade True TNT, Thunderhead Tightly Wound Springs all online. Take any Damage or Explosion Radius global upgrade immediately. Skip Movement Speed.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Save 30g for Stage 5. The MoCap at low HP is strong with high-damage build — if BLT is pushing you above 50%, consider dropping it for MoCap when comfortable.' },
        ],
      },
      {
        stage: 5,
        title: 'Boss — Repulse and Detonate',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Supply pod: immediately fire Devastating Shockwave into the Dreadnought + escorts — push them apart and detonate the explosion. Freeze stragglers, spray Thunderhead. Repeat Repulsor on cooldown.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Take every Damage, Explosion Radius, and Kinetic Damage upgrade. Piercing on Thunderhead converts to multi-hit at high fire rate — excellent with Tightly Wound Springs.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Spend everything. Gold-Tipped Bullets: hold gold for max boss damage. Pay2Win Console: reroll aggressively — permanent +2.5% damage stacks. This build has excess gold from passive farming.' },
        ],
      },
    ],
  },
]
