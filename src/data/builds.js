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
    playstyle: 'Play from mid-range, darting between cover to reload and re-aim. Pacing is deliberate — you charge up, line up one perfect shot, then fall back while the Cryo Grenade buys reload time. Risk profile is high: missing the mega-shot wastes the entire clip, but landing it on a frozen cluster is the highest single-hit output in the game.',
    strengths: [
      'Highest single-shot burst damage of any build — capable of deleting elites and Dreadnoughts in one hit',
      'Scales extremely well with Crit stats; overkill crits spawn shrapnel that chain-kills nearby enemies',
      'Cryo Grenade combo makes the mega-shot almost impossible to miss on frozen clusters',
    ],
    weaknesses: [
      'Completely offline until lv18 — Stages 1–2 feel underpowered compared to faster-ramping builds',
      'Missing the Thick Boy shot wastes the full clip and leaves you defenseless during the long reload',
      'Struggles against fast single targets that refuse to be frozen or clustered',
    ],
    tips: [
      'Throw Gravitational Core Cryo Grenade first — enemies cluster at the impact point before freezing, making the Thick Boy shot a guaranteed multi-kill even without precise aim',
      'Pickled Nitra grants +50% fire rate on your secondary weapons during the Thick Boy reload window — cycle to Drak-25 or Boomstick immediately after firing',
      'Squint-EE5\'s -30% damage penalty is completely irrelevant once Thick Boy is online; the mega-shot one-shots even with the penalty, and overkill crits still trigger shrapnel',
      'At lv12, take Bigger Mags before anything else even if a more tempting card appears — without 12 rounds fused, Thick Boy\'s damage ceiling is halved',
      'Against the Dreadnought, time the supply pod drop to coincide with a Cryo freeze: the pod deals 50% HP, and your Thick Boy shot covers the remaining armor phase cleanly',
    ],
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
          { level: 6, name: 'Bigger Mags', verdict: 'take', note: 'More shells between reloads; critical gap-filler during M1000\'s long Thick Boy reload window' },
          { level: 12, name: 'High Velocity Bullets', verdict: 'take', note: '+damage on a cleanup weapon; Boomstick handles anything that survived the mega-shot' },
          { level: 18, name: 'Thick Boy', verdict: 'take', note: 'Massive single pellet for point-blank finishers — useful panic button when enemies breach melee range during reload' },
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
    playstyle: 'Play aggressively close — beams need range to saturate, and the Wave Cooker\'s optimal zone is mid-melee. Pacing is continuous: keep beams on targets at all times, rotating between Wave Cooker and Cryo Cannon. Risk is moderate; the passive penalizes direct hits but your DoTs handle damage, so surviving long enough to apply stacks is the only real concern.',
    strengths: [
      'Interrogator\'s +100% Status Effect Damage is a flat doubler on every burn tick — easiest DoT multiplier in the game',
      'Frost Burn synergy is absurd: Cryo Cannon applies cold that triggers fire DoT, effectively running two DoT types simultaneously from one weapon',
      'Krakatoa Sentinel burns passively while you focus elsewhere — free damage without player input',
    ],
    weaknesses: [
      'Completely gutted by Squint-EE5 — the -30% direct damage stacks additively with the class passive, dropping you to effectively 0 direct DPS',
      'DoTs cannot crit, so Crit Chance cards are dead draws that other classes would value',
      'Weak against short-lived enemies that die before burn stacks ramp; best on tanky targets that stay in beam range',
    ],
    tips: [
      'Never pick up Squint-EE5 under any circumstances — the -30% direct damage stacks with Interrogator\'s existing -30%, leaving you near-zero on direct hits with no crit upside since DoTs cannot crit',
      'Cryo Cannon opener before Wave Cooker is always correct: freeze applies Frost Burn fire DoT, and frozen enemies take the full burn stack before they can reposition',
      'The MoCap artifact rewards aggressive low-HP play — at 30% HP it\'s essentially a +70% damage multiplier on your already-doubled DoTs, making risky play extremely high-reward',
      'Krakatoa\'s Tank Tracks OC at lv12 means you can walk into melee range and the turret follows — both you and the turret burn the same target simultaneously for layered stacks',
      'Potency stat upgrades extend burn duration as well as increasing stack size — prioritize them over raw Damage cards because they compound with the class multiplier',
    ],
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
    playstyle: 'Plant your feet at a chokepoint and let swarms run into a wall of autocannon fire. Pacing is reactive: freeze with Cryo Cannon when a wave crests, then unload Thunderhead into the frozen mass. The -10% move speed penalty is irrelevant because the loop never requires chasing anything — everything comes to you.',
    strengths: [
      'Tightly Wound Springs at lv18 triples the fire rate, converting already-solid autocannon DPS into something absurd against frozen clusters',
      'Heavy Gunner passive applies to Thunderhead from the start — even a lv5 autocannon hits harder and reloads faster than other classes\' equivalent',
      'Simple two-step loop (freeze → shoot) is nearly impossible to misplay and punishes dense swarms hardest, exactly when it matters most',
    ],
    weaknesses: [
      '-10% move speed makes repositioning dangerous; getting flanked without Seismic Repulsor charges available is a death sentence',
      'Thunderhead has poor single-target efficiency before Tightly Wound Springs — elites in Stages 1–2 are annoyingly tanky',
      'Cryo Cannon is a mandatory pairing; without a freeze setup tool the build loses its DPS window entirely',
    ],
    tips: [
      'Never let the Thunderhead barrel cool between waves — keep it spinning by firing short bursts at distant chaff so spin-up time is near-zero when the real swarm arrives',
      'Seismic Repulsor with Coolant Leak applies cryo on knockback, which chains with Cryo Cannon freeze — two CC sources means you can layer freeze coverage and almost never run dry',
      'Gold-Tipped Bullets scales with your current gold; since Heavy Gunner stands still and farms kills passively, you accumulate gold faster than mobile builds — hold it until the Dreadnought encounter for maximum payoff',
      'Gas Rerouting at lv6 has outsized value because Heavy Gunner\'s passive amplifies every reload stat — the combined bonus is roughly equivalent to two full reload upgrades in one overclock slot',
      'Squint-EE5 is legitimate here unlike DoT builds — Thunderhead fires so fast that even a modest Crit Chance results in crits nearly every second of sustained fire',
    ],
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
    playstyle: 'Find a chokepoint, stand still, and let Popup Tripod stack to maximum while the Warthog shreds everything in a 360° arc. Pacing is defensive and methodical — deploy LMG turret and Voltaic Fence, then hold position. The build rewards players who resist the urge to reposition and instead funnel enemies into pre-set kill zones.',
    strengths: [
      'Akimbo at lv18 eliminates the core weakness of all shotguns — flanking — by firing both forward and backward simultaneously',
      'Tinkerer\'s lv3 weapon start enables reaching lv18 on Stage 1 in a good run, giving an enormous tempo advantage over every other build',
      'Popup Tripod stacks to +30% Fire Rate and +30% Reload while stationary — free sustained DPS that rewards the intended playstyle',
    ],
    weaknesses: [
      'Completely immobile once committed to a position; getting pushed off a good spot by a flanking wave forces a disadvantageous repositioning that drops Popup Tripod stacks',
      'Warthog\'s short range means the build struggles against enemies that camp at mid-range without approaching — the turret fills this gap but cannot fully compensate',
      'XP routing to lv18 in Stage 1 requires deliberate pathing; a sloppy run that spreads XP across weapons loses the entire early-game timing advantage',
    ],
    tips: [
      'Voltaic Fence\'s Magnetic Alloy OC vacuums XP orbs — position the fence at natural chokepoints and kills will drop XP directly into its pull radius, dramatically accelerating the lv18 sprint',
      'Popup Tripod reaches max stacks in under 10 seconds when enemies are actively dying around you — the trick is finding a position before the wave crests, not after it arrives',
      'Battery Bullets Warthog + LMG Plasma Coating creates overlapping electric damage fields; any target caught in both takes electric ticks from two independent sources scaled by the same stat upgrades',
      'Akimbo\'s rear direction fires at a slight upward angle — position yourself so the rear arc catches the second wave coming from behind, not just the first wave you\'re already facing',
      'Pay2Win Console\'s permanent +2.5% damage per reroll compounds all run — use leftover gold from Tinkerer\'s superior economy to reroll aggressively from Stage 3 onward',
    ],
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
    playstyle: 'Lob grenades from mid-range and stay near the edge of your own blast radii — Demolitionist\'s +20% AoE size means your own grenades can hurt you if you\'re careless. Pacing is rhythmic: throw Cryo Grenade, wait for the pull-and-freeze, then detonate. Very forgiving to play since the AoE passive makes imprecise throws still land kills.',
    strengths: [
      'Demolitionist\'s AoE passive applies to every single weapon in the kit simultaneously — buying one Explosion Radius upgrade benefits all four grenades at once',
      'Gravitational Core creates an on-demand clustering mechanic that turns scattered enemies into one-shot opportunities for any explosive follow-up',
      'Easiest build to keep alive: the combination of strong self-peel, crowd control, and AoE means you rarely need to reload under pressure',
    ],
    weaknesses: [
      'Self-damage is a real risk until you internalize your own blast radii — the same AoE bonus that kills swarms will kill you if you throw too close',
      'Ammo-hungry: frequent grenade usage means running dry mid-wave is a genuine threat without active nitra management',
      'Single-target DPS against elites before Gravitational Core is mediocre; elites that cannot be clustered tank through the grenade loop without issue',
    ],
    tips: [
      'Gravitational Core pulls enemies to the impact point before the freeze activates — throw it slightly in front of the swarm, not into the center, so the pull catches the outer edges of the group',
      'PGL Cluster Grenades on a Gravitational Core freeze is the highest-density explosion in the build: each sub-grenade detonates on its own, so the central cluster absorbs dozens of overlapping blasts',
      'Demolitionist reload passive means the PGL reload gap is very short — don\'t switch to a secondary during reload, instead throw an HE Grenade manually to bridge the gap and keep the loop continuous',
      'Explosion Radius stat upgrades are uniquely efficient here: a single +10% radius card affects four different weapons simultaneously, making each card worth more than in any other build',
      'Acid Grenade\'s Corrosive Burst at lv18 leaves a persistent acid field on the frozen cluster — throw it before HE Grenade True TNT for a damage-over-time finisher on anything that survives the initial blast',
    ],
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
    playstyle: 'Play defensively in Stages 1–3, relying on Impact Axe and Cryo Grenade crowd control while the Leadburster kit comes online. From Stage 4 onward, the rhythm becomes decisive: pull with Gravitational Core, freeze the cluster, then throw Leadbursters directly into the frozen group. The Strong Armed +20% range means you can plant throwables from safer distances than other builds.',
    strengths: [
      'Full combo in Stage 4 (Gravitational Core pull → freeze → Cluster Leadbursters with piercing) is one of the highest total-damage bursts per throw in the game',
      'Strong Armed passive benefits every throwable simultaneously — Impact Axe, Leadburster, and grenades all get extended range, making the kit unusually safe to play from range',
      'Hallucinogenic Neurotoxin creates passive chaos damage: confused enemies fight each other, generating free kills without player input during reload windows',
    ],
    weaknesses: [
      'Worst early game of any A-tier build — Stages 1–3 without the full combo feel severely underpowered, requiring defensive play and careful resource management',
      'Difficult to play well: the Gravitational Core → freeze → Leadburster combo has multiple steps that can fail if timing is off or enemies aren\'t clustered tightly',
      'Crit synergy is mandatory (Squint-EE5 + Nitragenic Powder) but takes gold and nitra investment that is hard to afford during the rough early game',
    ],
    tips: [
      'Throw Leadbursters into the frozen group rather than at it — the spawned Leadburster mines activate inside the cluster, so every individual projectile pierces multiple frozen enemies simultaneously',
      'Cluster Grenades on the Leadburster at lv6 triples the spawned mine count: one throw becomes three independent Leadbursters, each firing their own piercing shot volley through the frozen pile',
      'Hallucinogenic Neurotoxin is a passive kill generator — throw it before engaging a large wave and enemies will deal significant damage to each other before you fire a single Leadburster',
      'During the early game, Impact Axe with Corrosive Coating is your primary damage tool; keep it leveled and use axes for single targets while Cryo Grenade handles groups',
      'Nitragenic Powder has outsized value here because Strong Armed\'s throwable playstyle means you naturally mine aggressively to collect resources between throws — your nitra count tends to run high',
    ],
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
    playstyle: 'Find a corner or chokepoint, deploy all constructs, and stand still. Pacing is passive — your job is to direct turrets toward targets, maintain Popup Tripod stacks, and use Seismic Repulsor to push anything that slips through. Risk is low against swarms but spikes on single high-damage enemies that your constructs cannot kill fast enough before they reach you.',
    strengths: [
      'Maintenance Worker passive stacks with every Construct Reload and Damage upgrade, making turret investment multiplicatively efficient',
      'LMG Overload at lv18 turns a mediocre turret into a minigun — combined with Tank Tracks, you have a mobile minigun companion that follows you through every room',
      'Popup Tripod maxes in seconds when standing in a turret\'s kill zone — the stationary playstyle that hurts mobility completely fulfills the artifact\'s stacking condition',
    ],
    weaknesses: [
      'Entirely dependent on turret positioning — a bad corner leaves your constructs firing into walls while enemies flank from uncovered angles',
      'Weakest direct combat of any Engineer build; without turrets active you have almost no damage output and must rely on Seismic Repulsor CC to survive',
      'Turrets have finite duration and can be destroyed — dense swarms that overwhelm constructs before cooldowns reset leave you temporarily defenseless',
    ],
    tips: [
      'Deploy LMG turret facing the primary approach vector and Krakatoa Sentinel at 90 degrees covering the flank — two turrets covering different angles is far more effective than both aimed at the same direction',
      'Popup Tripod stacks are lost immediately when you move; commit to your position before the wave arrives, not after — repositioning mid-wave drops you to 0 stacks at the worst possible moment',
      'Seismic Repulsor with Coolant Leak plus Krakatoa beam damage creates a freeze-and-burn loop on any enemy that reaches your position — it is your last line of defense, not your CC opener',
      'Gold-Tipped Bullets is uniquely strong here: you accumulate gold safely while turrets fight for you, so you reliably reach the gold-count thresholds that make the artifact scale without actively farming',
      'Firefly Hunter Drones with Defensive Chip orbit you personally — they intercept enemies targeting you directly, which fills the gap when both turrets are engaged with the main swarm',
    ],
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
    playstyle: 'Mine aggressively and retreat constantly — the Foreman loop is: mine until enemies close in, spray Sludge Pump acid behind you as you retreat, fire Subata backward while walking away. The playstyle is uniquely backwards: your weapons face the threat you\'re fleeing, not the direction you\'re moving. Low risk if you respect maximum mining speed stacks; the faster you mine, the faster you move, the harder you are to catch.',
    strengths: [
      'Best resource economy in the game — Foreman\'s +2% mining speed per action stacks 25× and the unique backward-firing playstyle lets you mine and fight simultaneously',
      'Corrosive Flood creates persistent acid puddles covering your retreat path, functioning as passive damage fields that hurt everything chasing you without requiring aim',
      'Nitragenic Powder has extreme scaling here: a Foreman nitra stockpile is consistently 40–60% larger than equivalent builds, translating directly into Crit Chance far above the normal ceiling',
    ],
    weaknesses: [
      'Subata is essentially useless before lv12 Acid Dipped Tips — the base pistol deals poor damage and the build has no strong primary until the conversion activates',
      'The Sidearm OC at lv6 is a -25% damage trap in solo play; if you don\'t get a good reroll option you are stuck with a weak lv6 OC until lv12 Acid Dipped Tips rescues the weapon',
      'Acid DoT cannot crit, making Squint-EE5 and Crit Damage worthless draws — roughly one card type in five is dead for this build',
    ],
    tips: [
      'In solo play always reroll Sidearm at lv6 — the -25% personal damage is a net loss with zero upside; wait for any other option even if the replacement is mediocre',
      'Keep your Foreman speed stacks active throughout every stage, not just during combat: every mine swing counts, so even mining decorative minerals between waves maintains the stack and your movement speed',
      'Deploy K1-P Viper Drones before engaging: they apply acid DoT independently while you\'re focused on retreating, effectively doubling acid stack generation without requiring any additional player actions',
      'Corrosive Flood puddles persist after you leave the area — deliberately retreat through corridors you\'ve already mined so every enemy chasing you runs through a pre-laid acid field',
      'At Stage 5, continue mining nitra during the Dreadnought fight to maintain Foreman stacks and keep Nitragenic Powder scaling at its peak — the boss arena usually has mineable walls; use them',
    ],
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
    playstyle: 'Keep moving at all times — Survivalist\'s regen only activates above 50% HP, so the goal is to never get chunked below that threshold rather than tanking hits. Pacing is fluid and reactive: kite the swarm, dump a Cryo Grenade when they bunch up, then reload and unload Embedded Detonators into the frozen cluster. Low risk for experienced players; punishing for players who stand still and trade hits.',
    strengths: [
      'Survivalist\'s +20% move speed is the largest base mobility bonus in the game, making kiting and resource collection dramatically more efficient than any other Scout subclass',
      'Embedded Detonators turns the Zhukov\'s dump-and-reload pattern into a massive burst — emptying the clip into a frozen cluster then reloading detonates every embedded explosive simultaneously',
      '+3 HP regen per second above 50% HP is effectively free sustain in most engagements, removing the need for healing artifacts that other builds waste a slot on',
    ],
    weaknesses: [
      'Embedded Detonators requires completing the full clip before reloading to maximize the burst — reloading early on a force of habit ruins the entire DPS window',
      'No meaningful damage output before lv18; Zhukov base DPS is respectable but not exceptional, making Stages 1–2 feel ordinary compared to the eventual payoff',
      'Popup Tripod is actively counterproductive — the entire build revolves around constant movement, so a slot wasted on a stationary buff artifact is a significant opportunity cost',
    ],
    tips: [
      'The Embedded Detonators detonation triggers on reload, not on timer — never reload early out of habit; deliberately empty the full Zhukov clip before reloading to maximize the explosion count',
      'Cryo Gravitational Core pull clusters enemies before freezing them, meaning your Embedded Detonator reload detonation hits every enemy in the pile at once — the damage output on a tight cluster is dramatically higher than on spread targets',
      'Survivalist\'s +20% move speed lets you collect XP orbs from distant kills that other builds would miss — actively run toward orbs after each engagement rather than waiting for the next wave to approach',
      'Boomstick Thick Boy at lv18 fires during movement as a burst panic button; use it on any elite that survives the Embedded Detonator burst and closes to melee range while you\'re mid-reload',
      'BLT Ration Pack\'s +70 HP raises your 50% HP regen threshold from ~150 to ~185 — a larger buffer makes regen activate in more situations and gives you more leeway before the passive shuts off',
    ],
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
    playstyle: 'Never stop moving — the burst window only activates after traveling 15m without stopping, so constant repositioning is both offense and defense. The rhythm is: dash to trigger the +50% window, freeze with Cryo Bolt or Cryo Grenade to lock targets in place, fire Bolt Volley during the 3-second window, then dash again to reset. High execution ceiling but the payoff — tripled burst damage stacking with crits — is the highest peak DPS in Scout\'s kit.',
    strengths: [
      'Bolt Volley during the burst window fires three bolts at +50% damage simultaneously — with Squint-EE5 crits active this is a single-trigger spike that exceeds Thick Boy against non-elite targets',
      'Cryo Bolt OC makes the Boltshark its own setup tool — fire a freeze bolt, dash to trigger the burst window, then fire into the frozen target for double-dipping CC and burst damage from one weapon',
      'Infiltrator\'s passive has zero downside: the burst window activates through normal movement, so experienced players maintain nearly 100% uptime without changing their natural playstyle',
    ],
    weaknesses: [
      'Highest execution difficulty of all Scout builds — maintaining the dash cycle, timing Cryo Bolt freeze, and landing Bolt Volley in a 3-second window while managing enemies requires simultaneous mechanical demands',
      'Stopping to aim precisely or to pick up resources resets the burst window, creating a constant tension between accuracy and movement maintenance',
      'Popup Tripod is a build-destroying artifact here — any temptation to stand still to stack it completely kills the passive that the entire build depends on',
    ],
    tips: [
      'The burst window resets on any pause, not just a full stop — brief hesitation to aim also resets it; learn to fire while still moving by leading targets slightly rather than stopping to aim',
      'Gravitational Core Cryo Grenade pull clusters all nearby enemies to one point before freezing them: one Bolt Volley during the burst window hits every enemy in the pile — the most efficient use of the 3-second window',
      'Movement Speed upgrades are tier-1 priority for Infiltrator specifically because faster speed shortens the time to travel 15m, meaning more burst windows per minute — a 10% move speed increase translates directly to more DPS cycles',
      'Cryo Bolt on the Boltshark lets you fire a freeze bolt mid-dash without stopping: throw the bolt, continue dashing, and when the freeze activates you\'re already in the burst window — a completely seamless setup from one weapon',
      'M1000 Thick Boy during the burst window is a situational nuke for Dreadnoughts: dash 15m, fire the mega-shot at +50% damage — against a boss with a large hitbox you never need to stop moving to land it',
    ],
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
    playstyle: 'Find a chokepoint, start spinning, never stop. Enforcer\'s -20% move speed is a non-issue because the optimal strategy is identical with or without it: stand still, freeze the incoming wave, and spin up before contact. Bullet Hell converts kills into ricochet chains that clear adjacent enemies without aiming — dense swarms are not a problem, they are the preferred target.',
    strengths: [
      'Enforcer\'s +15% damage is unconditional and applies to every bullet including Bullet Hell ricochets — the passive multiplies the already-absurd chain kill damage from ricochet chains',
      'Bullet Hell turns any kill in a dense swarm into a cascade: one enemy death spawns ricochets that kill two more, each of those spawns more ricochets — a single sustained burst can clear an entire wave',
      'Pickled Nitra\'s -15% move speed penalty is completely irrelevant for Enforcer — you were already standing still, so the artifact\'s +50% fire rate is pure gain',
    ],
    weaknesses: [
      '-20% move speed makes escaping bad positions extremely difficult; if flanked without Seismic Repulsor charges the only option is to spin through the damage, which requires BLT or MoCap survivability',
      'Minigun spinup time creates a vulnerability window — Bullet Hell is devastating once spinning but any surprise engagement before warmup means several seconds of suboptimal damage',
      'Bullet Hell ricochets scale poorly against single isolated targets; Dreadnoughts without escort swarms see roughly half the effective DPS compared to a dense wave fight',
    ],
    tips: [
      'Start the minigun spinning before enemies arrive, not when they arrive — the spinup window exists to be pre-loaded at a chokepoint; if you wait until contact the first few seconds of the engagement are wasted',
      'Burning Hell at lv12 requires sustained fire to reach max heat; never let the barrel cool intentionally — maintain spin between wave peaks by firing at terrain corners or distant chaff to keep heat near maximum',
      'Bullet Hell ricochets travel on the X-axis at roughly the same height as the kill — position yourself slightly elevated so ricochets angle down into the approaching swarm rather than flying over heads',
      'Cryo Cannon freeze before spinup covers the vulnerability window completely: freeze the wave while minigun spins up, and by the time Bullet Hell is active the enemies are immobile targets lined up for chain-kill cascades',
      'The MoCap\'s low-HP damage multiplier stacks multiplicatively with Enforcer\'s flat +15% passive — at 30% HP you are effectively running a +52% total damage multiplier, making intentional low-HP play viable if you have BLT regen as a floor',
    ],
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
    playstyle: 'Stand at the middle of the room rather than in a corner — Devastating Shockwave needs enemies to land against walls for maximum terrain damage, so positioning away from walls lets you push enemies into surfaces from any direction. Pacing is reactive and rhythmic: repulse on cooldown, spray Thunderhead at knocked-back clusters, freeze survivors. High risk early, low risk after Devastating Shockwave is online because the CC chain denies enemies ever reaching melee range.',
    strengths: [
      'Devastating Shockwave plus Devastator\'s +30% knockback force creates terrain damage that scales with room geometry — fighting in narrow corridors with walls close by multiplies effective damage without any stat investment',
      'The knockback chain is self-sustaining: push → auto-explode → anything that survives gets hit by Thunderhead follow-up before recovery, meaning the loop has no dead time',
      '+15% Explosion Radius from the passive applies to both Devastating Shockwave\'s explosion and HE Grenade simultaneously — AoE upgrades benefit two weapons at once',
    ],
    weaknesses: [
      'Weakest Stages 1–2 of any Gunner build — Repulsor without Devastating Shockwave is a crowd control tool with mediocre damage, and Thunderhead before Tightly Wound Springs is slow to kill',
      'Requires wall geometry to deal full damage — open arenas with no walls nearby drastically reduce the knockback chain\'s efficiency and can leave survivors that should have died',
      'Repulsor cooldown creates gaps in the CC loop; without Cryo Cannon coverage during those gaps, fast enemies can close the distance before the next charge is ready',
    ],
    tips: [
      'Stand in the center of rooms deliberately: Devastating Shockwave pushes radially outward, so central positioning means every knocked-back enemy travels the maximum distance and hits a wall from any direction',
      'Devastator\'s +30% knockback force stacks with Shockwave OC at lv6, meaning even before Devastating Shockwave at lv18 the terrain damage from wall impacts is significantly higher than other classes\' identical OC — it\'s worth leveling Repulsor to lv6 even in Stages 1–2',
      'HE Grenade True TNT thrown immediately after a Devastating Shockwave detonation catches the knocked-back cluster at their new position before they can spread — the grenade landing slightly behind the push direction maximizes overlap',
      'Cryo Cannon covers the Repulsor cooldown window: freeze the surviving group immediately after a repulse so you have the full cooldown duration to spray Thunderhead without anything closing in',
      'Extra Capacity (+3) at lv18 gives near-permanent Repulsor charges — once online you can chain repulse an entire wave into perpetual knockback, never allowing enemies to stabilize and close distance',
    ],
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

  {
    id: 'sharpshooter-gk2-crit',
    name: 'Sharpshooter GK2 Crit Spray',
    class: 'Scout',
    subclass: 'Sharpshooter',
    tier: 'A',
    difficulty: 2,
    passive: '+15% Crit Chance, +50% Crit Damage — overkill crits spawn shrapnel; now applied to a fast-firing rifle instead of a sniper',
    synopsis: 'Uses the Sharpshooter passive on the Deepcore GK2 with Hipster overclock to turn a high-fire-rate rifle into a crit-per-second machine. Easier to play than Thick Boy but lower peak damage.',
    playstyle: 'Mid-range sustained fire — hold down GK2 and let crits roll continuously. Hipster halves the damage per bullet but fires so fast that crits land multiple times per second, and each overkill crit spawns shrapnel that chains into nearby enemies. Cryo Grenade handles clusters and buys reload time. Lower skill ceiling than M1000 Thick Boy but far more consistent damage across all encounter types.',
    strengths: [
      'Consistent mid-range DPS — no charge time, no single missed shot catastrophe; just aim and fire',
      'Overkill shrapnel from rapid crits chains freely into tightly packed swarms, giving soft AoE on a single-target weapon',
      'Online from lv6 — Hipster is the only mandatory overclock and arrives at the first level gate',
    ],
    weaknesses: [
      'Lower peak burst than M1000 Thick Boy — cannot one-tap elites or delete a frozen cluster in one shot',
      'Ammo hungry; Hipster\'s high fire rate drains the clip quickly and reload windows leave you briefly exposed',
      'Sharpshooter\'s Crit Damage bonus is slightly wasted on low-per-bullet damage — the passive rewards high base damage more than fire rate',
    ],
    tips: [
      'Stack Crit Chance early and hard — at 75% Crit Chance with Squint-EE5 equipped, GK2\'s rapid fire turns every second of fire into a shrapnel chain that kills entire packs',
      'Cryo Grenade before firing: frozen targets cannot dodge, and shrapnel from the first crit kill bounces into every adjacent frozen enemy simultaneously',
      'Reload before the clip is fully empty if you need to reposition — partial clip with Hipster still delivers meaningful DPS since Crit Chance applies per bullet, not per clip',
      'Nitragenic Powder + Squint-EE5 combo works identically here as on M1000 Thick Boy; hoard Nitra to maintain Crit Chance above the 75% unlock threshold',
    ],
    weapons: [
      {
        name: 'Deepcore GK2',
        isCarry: true,
        overclocks: [
          { level: 6, name: 'Hipster', verdict: 'take', note: 'MUST-TAKE — doubles fire rate at the cost of damage per bullet; crits per second skyrocket' },
          { level: 12, name: 'High Caliber Rounds', verdict: 'take', note: '+damage per bullet; partially offsets Hipster\'s per-bullet penalty and raises crit hit value' },
          { level: 18, name: 'Supercooling Chamber', verdict: 'situational', note: 'Cryo debuff extends Cryo Grenade freeze duration — useful if you\'re running freeze combo loop; skip if running Boomstick as secondary' },
        ],
      },
      {
        name: 'Jury-Rigged Boomstick',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Bigger Mags', verdict: 'take', note: 'More shells; critical gap-filler during GK2 reloads' },
          { level: 12, name: 'High Velocity Bullets', verdict: 'take', note: '+damage on a cleanup weapon for anything that survived the crit chain' },
          { level: 18, name: 'Thick Boy', verdict: 'take', note: 'Panic button for elites at melee range during reload window' },
        ],
      },
      {
        name: 'Cryo Grenade',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Compact Explosives', verdict: 'take', note: '+radius; wider freeze coverage to set up shrapnel chain kills' },
          { level: 12, name: 'Frost Nova', verdict: 'take', note: 'Larger burst; stops incoming swarms cold so you can safely reload and re-engage' },
          { level: 18, name: 'Gravitational Core', verdict: 'situational', note: 'Clusters enemies before freeze — excellent for maximizing shrapnel chain kills; take if build is otherwise complete' },
        ],
      },
      {
        name: 'Drak-25 Plasma Carbine',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Overcharged PCF', verdict: 'take', note: '+damage, no downside; reliable supplemental damage between GK2 reloads' },
          { level: 12, name: 'Plasma Burst', verdict: 'take', note: 'AoE plasma clears stragglers shrapnel missed' },
          { level: 18, name: 'Volatile Impact Mixture', verdict: 'skip', note: 'Fire DoT doesn\'t benefit from Sharpshooter passive; skip in favor of another damage card' },
        ],
      },
    ],
    stats: {
      priority: ['Crit Chance', 'Crit Damage', 'Reload Speed', 'Damage', 'Piercing'],
      avoid: ['Potency', 'Status Effect Damage', 'HP/Armor stacking'],
    },
    artifacts: {
      always: ['Squint-EE5', 'Nitragenic Powder', 'Energy Bars'],
      good: ['Pickled Nitra', "Diver's Manual", 'Pay2Win Console'],
      never: ['Popup Tripod — GK2 Hipster requires you to keep moving and repositioning between clips'],
    },
    phases: [
      {
        stage: 1,
        title: 'Lock In GK2 & Hipster',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Priority: GK2 > Boomstick > Drak-25. Lock GK2 immediately. Unlike M1000, this build is playable from the first wave — Sharpshooter crit passive applies from lv1 even before Hipster arrives.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'GK2 lv6: Hipster without hesitation. This is the entire build identity. Fire rate doubles, crits per second skyrocket, and overkill shrapnel starts chaining immediately.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Buy Squint-EE5 the moment it appears — Sharpshooter\'s 15% base Crit Chance plus any Crit stat cards gets you to the 75% unlock threshold faster than most classes. Save 100g target.' },
        ],
      },
      {
        stage: 2,
        title: 'Crit Chance Stacking',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Push GK2 to lv12 (High Caliber Rounds). Deploy Cryo Grenade — freeze incoming waves, fire GK2 into the frozen cluster, and let shrapnel chain kills handle the rest. Add Boomstick for melee pressure relief.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'GK2 lv12: High Caliber Rounds for the per-bullet damage boost. Boomstick lv6: Bigger Mags. Cryo Grenade lv6: Compact Explosives for wider freeze setup.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Buy Nitragenic Powder if it appears — hold Nitra, maintain 75%+ Crit Chance, and Squint-EE5\'s -30% damage penalty stays suppressed. Spend ~30g on Crit Chance stat upgrades. Target 120g saved for Stage 3.' },
        ],
      },
      {
        stage: 3,
        title: 'Shrapnel Chain Online',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'GK2 reaches lv18 this stage. Supercooling Chamber or cap out at High Caliber if a better secondary investment exists. Cryo Grenade + GK2 Hipster crits should be chaining kills through entire swarms by now.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'GK2 lv18: Supercooling Chamber if running freeze combo, otherwise hold for flex. Boomstick lv12: High Velocity Bullets. Add Crit Damage global stat cards over raw Damage — multiplies on every crit.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Full spend. Complete Squint-EE5 + Nitragenic Powder combo. Pickled Nitra stacks damage on top of Crit — holding a large Nitra reserve gives both Crit Chance and bonus Damage simultaneously.' },
        ],
      },
      {
        stage: 4,
        title: 'Fill Secondary Slots',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Boomstick to lv18 (Thick Boy panic button). Drak-25 for AoE plasma between GK2 reloads. Cryo Grenade to lv18 if Gravitational Core is available — cluster pull before freeze maximizes shrapnel chains.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Cryo lv12–18: Frost Nova then Gravitational Core. Drak-25 lv6–12: Overcharged PCF then Plasma Burst. All Crit Damage and Reload Speed global upgrades are priority buys.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Save 30g for Stage 5. Energy Bars is worth picking up now — per-level damage bonus compounds even if HP cost is a concern; pair with BLT Ration Pack for buffer.' },
        ],
      },
      {
        stage: 5,
        title: 'Crit Chain the Boss',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Against Dreadnought: Cryo Grenade freezes the boss, then GK2 Hipster fires crits continuously. Each crit contributes to shrapnel on escort kills, clearing adds while you stay focused on the boss.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Take every Crit Chance, Crit Damage, and Reload Speed upgrade. Piercing on GK2 is excellent — each bullet can hit multiple enemies in a line, generating more crit opportunities per shot.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Spend everything. Mine aggressively to stack Nitragenic Powder Crit Chance. Dump gold on rerolls for Pay2Win Console stacks if not already held. Keep Nitra reserve high for maximum Crit Chance floor.' },
        ],
      },
    ],
  },

  {
    id: 'survivalist-boltshark-pinner',
    name: 'Survivalist Boltshark Pinner',
    class: 'Scout',
    subclass: 'Survivalist',
    tier: 'B',
    difficulty: 2,
    passive: '+20% Move Speed, +3 HP Regen/s above 50% HP — use speed to kite after pinning enemies in place',
    synopsis: 'Boltshark with Bolt Volley pins three enemies simultaneously, then Survivalist speed lets you kite away while they\'re immobilized. GK2 cleans up staggered packs at a safe distance.',
    playstyle: 'Fire a Cryo Bolt to freeze a target, then immediately fire Bolt Volley to pin three enemies at once. Survivalist\'s movement speed lets you dash clear before anything closes the gap, and HP regen above 50% keeps you topped up between engagements. The loop is low-risk: pin, dash, clean up with GK2, regen, repeat. Unlike Infiltrator Cryo Burst, you don\'t need precision timing — just pin and retreat.',
    strengths: [
      'Boltshark with Bolt Volley pins three targets simultaneously — effective crowd control that Survivalist\'s speed turns into safe kill windows',
      '+20% Move Speed makes retreating after a Bolt Volley trivial, and the regen kicks in immediately once distance is established',
      'No mandatory lv18 breakpoint — the build delivers solid CC and damage from lv12 Bolt Volley onward',
    ],
    weaknesses: [
      'Lower single-target burst than Boltshark on Infiltrator — no +50% burst window means each bolt deals baseline damage only',
      'Bolt Volley\'s three simultaneous bolts can miss on widely spread or fast-moving enemies if you don\'t set up with Cryo Bolt first',
      'Ammunition management: Boltshark has a small clip and Bolt Volley consumes three bolts at once — reload timing matters more than on GK2 or Zhukov builds',
    ],
    tips: [
      'Always lead with Cryo Bolt to freeze the primary target before firing Bolt Volley — frozen enemies cannot dodge, and the three bolts from Bolt Volley all land reliably on a stationary target',
      'Survivalist\'s +20% Move Speed makes collecting XP orbs from distant kills much easier — actively chase orbs between waves instead of waiting for enemies to come to you',
      'GK2 Hipster as secondary turns the build into a hybrid: Bolt Volley handles elite pinning while GK2 handles rapid trash clear, playing to both the Survivalist passive and Boltshark\'s precision',
      'BLT Ration Pack raises your 50% HP regen threshold — with more Max HP, the regen activates more reliably after minor chip damage during a Bolt Volley setup',
    ],
    weapons: [
      {
        name: 'Nishanka Boltshark X-80',
        isCarry: true,
        overclocks: [
          { level: 6, name: 'Cryo Bolt', verdict: 'take', note: 'Freeze target before Bolt Volley — ensures all three bolts land on an immobile enemy' },
          { level: 12, name: 'Gas Rerouting', verdict: 'take', note: '+reload; faster turnaround between Bolt Volley volleys; critical for the pin-retreat-reload loop' },
          { level: 18, name: 'Bolt Volley', verdict: 'take', note: 'MUST-TAKE — fires 3 bolts simultaneously; the CC + damage spike that defines this build' },
        ],
      },
      {
        name: 'Deepcore GK2',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Hipster', verdict: 'take', note: 'High fire rate secondary for trash clear between Boltshark volleys; Survivalist speed keeps you out of retaliation range' },
          { level: 12, name: 'High Caliber Rounds', verdict: 'take', note: '+damage per bullet; useful against anything Bolt Volley didn\'t finish' },
          { level: 18, name: 'Supercooling Chamber', verdict: 'situational', note: 'Cryo debuff on GK2 extends Cryo Bolt freeze durations — take if you want longer pin windows' },
        ],
      },
      {
        name: 'Cryo Grenade',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Compact Explosives', verdict: 'take', note: '+radius; wider freeze while you\'re repositioning post-Bolt Volley' },
          { level: 12, name: 'Frost Nova', verdict: 'take', note: 'Larger burst; emergency CC when a wave catches up despite Survivalist speed' },
          { level: 18, name: 'Gravitational Core', verdict: 'situational', note: 'Pull cluster before freeze — Bolt Volley into a tight frozen group hits more enemies; strong in dense waves' },
        ],
      },
      {
        name: 'Jury-Rigged Boomstick',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Bigger Mags', verdict: 'take', note: 'More shells for melee panic situations when enemies close faster than expected' },
          { level: 12, name: 'High Velocity Bullets', verdict: 'take', note: '+damage on point-blank cleanup after a Bolt Volley that didn\'t one-tap' },
          { level: 18, name: 'Thick Boy', verdict: 'take', note: 'Emergency burst for elite that survived full Bolt Volley — fires while moving' },
        ],
      },
    ],
    stats: {
      priority: ['Damage', 'Reload Speed', 'Movement Speed', 'Crit Chance', 'Crit Damage'],
      avoid: ['Potency — no DoT in this build', 'Popup Tripod — movement is the entire survival strategy'],
    },
    artifacts: {
      always: ['BLT Ration Pack', 'Energy Bars', 'Gold-Tipped Bullets'],
      good: ['Squint-EE5', 'Armor Grease', "Diver's Manual"],
      never: ['Popup Tripod — Survivalist must stay mobile; standing still to stack fire rate kills the regen passive and invites melee'],
    },
    phases: [
      {
        stage: 1,
        title: 'Find Boltshark, Learn the Pin Loop',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Priority: Boltshark > GK2 > Cryo Grenade. Boltshark with Cryo Bolt is the carry — freeze one target with Cryo Bolt, then fire a regular bolt for practice before Bolt Volley arrives at lv18. GK2 handles trash in the meantime.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Boltshark lv6: Cryo Bolt immediately. Even without Bolt Volley, a freeze shot followed by a high-damage bolt is a solid early-game pattern. GK2 lv6: Hipster for rapid trash clear.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Buy BLT Ration Pack early — raising Max HP makes the 50% regen threshold more forgiving and extends the window where Survivalist passive is active. Save 100g. Prioritize Damage stat cards.' },
        ],
      },
      {
        stage: 2,
        title: 'Gas Rerouting Breakpoint',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Push Boltshark to lv12 (Gas Rerouting). Faster reload between volleys is critical for the pin-dash-regen-reload loop. Deploy Cryo Grenade as area CC backup when multiple swarms converge.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Boltshark lv12: Gas Rerouting. GK2 lv12: High Caliber Rounds for better trash clear. Cryo Grenade lv6: Compact Explosives for wider emergency freeze.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Energy Bars is excellent here — Survivalist doesn\'t stack HP, so the per-level damage bonus is a clean gain. Spend ~30g on Damage upgrades. Save 120g for Stage 3 power spike.' },
        ],
      },
      {
        stage: 3,
        title: 'Bolt Volley Online',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'POWER SPIKE. Boltshark lv18: Bolt Volley fires 3 bolts simultaneously. The loop is now: Cryo Bolt to freeze → Bolt Volley triple-hit into frozen target → GK2 Hipster cleans up surrounding trash → dash to regen → repeat.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Bolt Volley is the build. Cryo Grenade lv12: Frost Nova for larger emergency freeze. GK2 lv18: Supercooling Chamber if available — extends Cryo Bolt freeze window so Bolt Volley always hits frozen targets.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Full spend. Gold-Tipped Bullets scales with accumulated gold — Survivalist speed means you mine faster per stage and accumulate gold quickly. Look for Squint-EE5 — Boltshark bolts crit, and the bonus applies per bolt in the Volt Volley.' },
        ],
      },
      {
        stage: 4,
        title: 'Fill Secondaries',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Boomstick to lv18 (Thick Boy panic button). Cryo Grenade toward lv18: Gravitational Core clusters enemies before the Bolt Volley for maximum multi-hit. All kits mostly complete by end of Stage 4.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Cryo lv18: Gravitational Core is the final combo piece. Boomstick lv18: Thick Boy for mobile burst panic. Any global Crit Damage or Reload Speed upgrades are priority insta-buys.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Save 30g for Stage 5. Complete BLT Ration Pack + Energy Bars core. Armor Grease is worth buying for the stacking Dodge Chance while moving — Survivalist always moves, so it reaches max stacks naturally.' },
        ],
      },
      {
        stage: 5,
        title: 'Pin the Boss, Stay Fast',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Against Dreadnought: Gravitational Core Cryo Grenade clusters escorts, then Cryo Bolt freezes Dreadnought, then Bolt Volley triple-hit during the freeze window. GK2 Hipster handles escort trash while Boltshark reloads.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Take all Damage, Reload Speed, and Movement Speed upgrades. Movement Speed for Survivalist directly increases how often regen activates — faster you establish distance after a Bolt Volley, the more HP you regen before re-engaging.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Spend everything. Gold-Tipped Bullets: hold gold through the run for maximum boss damage. Mine aggressively using Survivalist speed advantage. Dump nitra on rerolls for Squint-EE5 if still missing.' },
        ],
      },
    ],
  },

  {
    id: 'hurricane-weapons-specialist',
    name: 'Hurricane Weapons Specialist',
    class: 'Gunner',
    subclass: 'Weapons Specialist',
    tier: 'A',
    difficulty: 3,
    passive: 'After firing 100 [PROJECTILE] shots, automatically fire 8 high-damage projectiles in all directions — scales with Kinetic and Projectile Damage upgrades and can crit',
    synopsis: 'Rush Hurricane to lv18 for The Favourite (+100% Damage, +100% Fire Rate). Pair with BRT7 Sidearm OC to passively buff Hurricane by 25%. The 100-shot passive proc fires constantly with Hurricane\'s spray fire, adding an omnidirectional burst every few seconds.',
    playstyle: 'Hurricane\'s homing rockets handle AoE — aim loosely at swarm clusters and let the rockets self-guide. Your job is to stay mobile and keep the rocket drum spinning, not to aim precisely. Use BRT7 as a secondary proc-feeder: its Sidearm OC reduces its own damage but adds +25% to all other weapons including Hurricane. The Weapons Specialist passive fires automatically, so play toward the center of the arena to maximize the 8-projectile burst coverage. Stage 3\'s The Favourite overclock doubles Hurricane\'s already-strong output — from that point the build handles both swarms and elites comfortably without requiring a freeze setup.',
    strengths: [
      'The Favourite at lv18 turns Hurricane into one of the highest-damage AREA weapons in the game — doubled damage and fire rate on homing rockets that already track targets is devastating',
      'Weapons Specialist passive triggers constantly off Hurricane\'s high shot count, adding free omnidirectional bursts that handle flankers without any player input',
      'BRT7 Sidearm OC is a passive +25% damage multiplier for Hurricane with no playstyle cost — equip it and forget it',
    ],
    weaknesses: [
      'The Favourite OC penalizes all non-Hurricane weapons by -30% Damage and -30% Fire Rate — BRT7 becomes even weaker, so commit fully to Hurricane as the sole damage source',
      'Hurricane has significant reload time at base; without Spare Rockets at lv6 to buffer clip size, you will have long dead windows between drums in Stage 1',
      'Homing rockets can be deceived by fast-moving single targets — Dreadnought mobility can cause rockets to spiral and miss; aim near its feet to compensate',
    ],
    tips: [
      'Incendiary Payload at lv6 is a strong alternative to Spare Rockets if you want fire DoT setup — fire-covered ground functions as a passive damage zone, letting Hurricane\'s rockets detonate into burning clusters',
      'The Weapons Specialist passive projectiles have 100 piercing value and can crit — take Crit Chance upgrades and Squint-EE5 to make every passive burst a potential chain-kill event',
      'BRT7 with Sidearm OC deals very little damage itself, so never pour XP into leveling it beyond lv6 where the OC unlocks; bank all weapon XP into Hurricane',
      'Runic Warhead at lv12 (+50% Explosion Radius) converts Hurricane\'s homing rockets into large-radius blasts — against tight swarms each rocket can clip 6-8 enemies simultaneously',
      'In Stage 5, aim Hurricane slightly above the Dreadnought\'s center mass — the homing arc causes rockets to dive into its hitbox rather than overshooting past it at close range',
    ],
    weapons: [
      {
        name: '"Hurricane" Guided Rocket System',
        isCarry: true,
        overclocks: [
          { level: 6, name: 'Spare Rockets', verdict: 'take', note: '+3 clip size — eliminates the painful early reload dead window; Hurricane\'s base clip is tiny' },
          { level: 12, name: 'Runic Warhead', verdict: 'take', note: '+50% Explosion Radius — each rocket hits a much wider area; devastating against dense swarms' },
          { level: 18, name: 'The Favourite', verdict: 'take', note: 'MUST-TAKE — +100% Damage, +100% Fire Rate on Hurricane; other weapons take -30% penalty but BRT7 is already a passive buffer' },
        ],
      },
      {
        name: 'BRT7 Burst Fire Gun',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Sidearm', verdict: 'take', note: 'MUST-TAKE — -20% BRT7 Damage but +25% Damage to all other weapons including Hurricane; pure passive buff' },
          { level: 12, name: 'Gas Rerouting', verdict: 'situational', note: '+25% Fire Rate and Reload — helps proc the 100-shot Weapons Specialist passive faster if needed' },
          { level: 18, name: 'Omni Barrel', verdict: 'skip', note: '+50% Damage but BRT7 is a passive buffer, not a damage carry after The Favourite OC; not worth the XP' },
        ],
      },
      {
        name: 'Seismic Repulsor',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Coolant Leak', verdict: 'take', note: 'Cryo on knockback — buys time during Hurricane reload windows' },
          { level: 12, name: 'Extra Capacity (+1)', verdict: 'take', note: 'More charges; CC uptime is the main survival tool when rockets are reloading' },
          { level: 18, name: 'Extra Capacity (+3)', verdict: 'take', note: 'Near-permanent knockback; Weapons Specialist passive handles anything that gets through' },
        ],
      },
      {
        name: 'Cryo Cannon',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'More Beams (+1)', verdict: 'take', note: 'Wider freeze for incoming swarms; Hurricane rockets hit frozen clusters for full AoE' },
          { level: 12, name: 'Frost Burn', verdict: 'take', note: 'Fire from cold — applies fire DoT after Incendiary Payload primes the ground' },
          { level: 18, name: 'Even More Beams (+3)', verdict: 'situational', note: 'Full-width freeze wall; take if Dreadnought tankiness becomes an issue' },
        ],
      },
    ],
    stats: {
      priority: ['Explosive Damage', 'Kinetic Damage', 'Explosion Radius', 'Crit Chance', 'Reload Speed'],
      avoid: ['Status Effect Damage — build is explosive/kinetic, not DoT', 'Move Speed — Weapons Specialist doesn\'t require kiting'],
    },
    artifacts: {
      always: ["Diver's Manual", 'Energy Bars', 'Gold-Tipped Bullets'],
      good: ['Squint-EE5', 'Pay2Win Console', 'Turbo Encabulator'],
      never: ['Ammo Rig — The Favourite already doubles fire rate; -15% Move Speed is pure cost here', 'Popup Tripod — Hurricane is mobile; standing still negates its homing advantage'],
    },
    phases: [
      {
        stage: 1,
        title: 'Lock In Hurricane',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Priority: Hurricane > BRT7 > Seismic Repulsor. Hurricane is the entire build. If not offered at lv5, take the strongest available and bank XP — Hurricane should be your first pickup regardless of when it appears. BRT7 is your secondary proc-feeder, not a damage weapon.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Hurricane lv6: Spare Rockets. The base clip size is painfully small; Spare Rockets eliminates the constant reload dead time and lets you maintain damage pressure. BRT7 lv6: Sidearm — this is a passive +25% Hurricane damage boost, take it immediately.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Save 100g target. Buy Energy Bars immediately if available — at level 30+ it is +30% Damage on a weapon that already benefits from every Explosive Damage upgrade. Spend on Explosive Damage stat cards only; skip movement and HP until Stage 2.' },
        ],
      },
      {
        stage: 2,
        title: 'Runic Warhead Radius Spike',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Push Hurricane to lv12. Add Cryo Cannon as a third weapon for freeze support — Hurricane rockets detonating into frozen clusters deal full AoE to every frozen enemy simultaneously. Weapons Specialist passive is now firing regularly; position centrally to maximize burst coverage.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Hurricane lv12: Runic Warhead (+50% Explosion Radius). Each rocket now blasts a significantly wider zone — inside a frozen swarm this converts one rocket into a 6-8 enemy hit. Cryo Cannon lv6: More Beams for wide freeze coverage.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Spend 30g on Explosion Radius upgrades — they stack additively with Runic Warhead and amplify every rocket. Gold-Tipped Bullets is excellent here; Hurricane generates kills fast enough to build a high gold reserve. Look for Squint-EE5 if approaching 75% global Crit Chance.' },
        ],
      },
      {
        stage: 3,
        title: 'The Favourite Online',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'POWER SPIKE. Hurricane lv18: The Favourite. Doubled damage and fire rate on already-strong homing explosive rockets with Runic Warhead radius. Swarms vanish in seconds. BRT7\'s -30% penalty from The Favourite doesn\'t matter — it was already a passive buff, not a damage carry.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'The Favourite is non-negotiable. Seismic Repulsor lv6: Coolant Leak for cryo on knockback during reload windows. Cryo Cannon lv12: Frost Burn for fire-from-cold bonus damage. Stack Explosive Damage cards in every offered upgrade.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Full spend. Complete Gold-Tipped Bullets + Energy Bars pair — The Favourite\'s doubled fire rate means kills and gold accumulate faster than any other stage. Diver\'s Manual gives +10% Damage with no downside; buy on sight. Reroll once for Squint-EE5 if missing.' },
        ],
      },
      {
        stage: 4,
        title: 'Support Kit Completion',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Cryo Cannon to lv18: Even More Beams for full-width freeze wall. Seismic Repulsor to lv12: Extra Capacity for sustained CC. Hurricane handles everything — support weapons just need to control flow into its blast zones.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Seismic Repulsor Extra Capacity gives near-permanent knockback uptime. Cryo full beams ensures wide freeze coverage. Take any Explosion Radius or Kinetic Damage global upgrade immediately — these compound with Runic Warhead\'s radius and The Favourite\'s doubled damage.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Save 30g for Stage 5. Turbo Encabulator is valuable here if you have 4+ overclocks — at Stage 4 you likely have 5-6 and the +3% Damage per overclock is meaningful. Pay2Win Console is an excellent reroll companion for finding Squint-EE5 or Diver\'s Manual.' },
        ],
      },
      {
        stage: 5,
        title: 'Boss — Homing Rockets Win',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Hurricane at full power handles the Dreadnought. Freeze with Cryo Cannon immediately on supply pod drop — frozen Dreadnought is a stationary target for homing rockets. Aim at feet to prevent overshooting. Seismic Repulsor handles escorts while Hurricane focuses the boss.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Take every Explosive Damage, Kinetic Damage, and Explosion Radius upgrade. Crit Chance is valuable since Weapons Specialist passive projectiles can crit and at Stage 5 you may have 60-70% global Crit Chance — each passive burst becomes a chain-kill event.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Spend everything. Gold-Tipped Bullets: dump held gold at boss stage for maximum damage stack. Mine all available nitra. Pay2Win Console stacks persist — reroll aggressively if gold allows. The Favourite\'s fire rate means you generate kills and Weapons Specialist passive procs faster than any other Gunner build.' },
        ],
      },
    ],
  },

  {
    id: 'bulldog-juggernaut',
    name: 'Bulldog Juggernaut',
    class: 'Gunner',
    subclass: 'Juggernaut',
    tier: 'B',
    difficulty: 4,
    passive: '+10 Armor, +50 Max HP, -50% Weapon Range; gain up to +50% Damage (5 stacks of +10%) after taking damage — the more hits you absorb, the harder you hit back',
    synopsis: 'Juggernaut trades range for tank stats and a retaliatory damage buff. Bulldog with Super Reload Shield OC becomes a short-range powerhouse: +75% Damage and +50% Fire Rate while reloading, plus +100% Armor. Rush Bulldog to lv18, brawl close, reload aggressively, and let Juggernaut\'s passive stack to full on every wave.',
    playstyle: 'This is a point-blank brawler. Juggernaut\'s -50% Weapon Range means every gun is a close-quarters weapon by design — lean into it. Rush into swarms rather than kiting away, absorb hits to stack the +10% damage passive up to 5 times (+50% total), then unload Bulldog at full buff. The Super Reload Shield OC makes reloading during combat an offensive act: the +100% Armor window means you can reload in melee range without dying, while +75% Damage and +50% Fire Rate means the first shots after a reload hit hardest. Use Seismic Repulsor to knock enemies back briefly, immediately close distance again, and maintain all 5 damage stacks by staying in the fight.',
    strengths: [
      'At full Juggernaut passive stacks (+50% Damage from 5 hits absorbed) combined with Super Reload Shield (+75% Damage while reloading), Bulldog lands at over +125% total damage — single-shot executions on standard enemies in late game',
      'Super Reload Shield\'s +100% Armor during reload window lets you safely brawl in melee range; enemies that would kill other builds in one hit deal minimal damage while you cycle the chamber',
      '+50 Max HP and +10 Armor from Juggernaut passive make this the tankiest Gunner subclass — survivability artifacts have much higher floors here than on Enforcer or Weapons Specialist',
    ],
    weaknesses: [
      '-50% Weapon Range makes every weapon a short-range tool; against enemies that attack from range (spitters, swarmer clusters at a distance) you must close distance aggressively or take damage without dealing any',
      'Juggernaut damage stacks require taking hits to charge — Stage 1 the stacks are often not fully up, making early game feel underpowered until you develop survivability',
      'Bulldog\'s low clip size and slow fire rate mean any gap in the Super Reload Shield window is a real damage dead zone; play cadence must be tightly managed',
    ],
    tips: [
      'Deliberately step into small hit opportunities early in each wave to pre-stack Juggernaut\'s passive before the swarm crests — absorbing one hit from a distant spitter charges two stacks without real danger',
      'Super Reload Shield timing is an aggressive tool: reload mid-fight at point-blank range to gain +100% Armor, then fire the refreshed clip at full +75% Damage into the clustered enemies',
      'Double Barrel! at lv18 is a strong alternative to Super Reload Shield if you prefer damage density over the brawl-reload loop — two parallel bullets at Bulldog\'s high base damage is enormous single-hit output',
      'Salty Pretzel and The MoCap both excel on Juggernaut: the passive stacking design means you are frequently at moderate-to-low HP, triggering both artifacts\' damage and armor bonuses simultaneously',
      'BLT Ration Pack\'s +2 HP/s regen keeps you from dying between waves — Juggernaut\'s tankiness floors you at survivable HP but doesn\'t recover you; regen bridges the gap to the next wave where new hits re-stack the passive',
    ],
    weapons: [
      {
        name: '"Bulldog" Heavy Revolver',
        isCarry: true,
        overclocks: [
          { level: 6, name: 'A Little More Oomph!', verdict: 'take', note: '+15% Damage, +25% Reload Speed — both stats directly improve Bulldog\'s slow fire cadence and point-blank burst' },
          { level: 12, name: 'Reload Shield', verdict: 'take', note: 'Doubles armor while reloading — early version of the Super Reload Shield brawl loop; keeps you alive reloading in melee range' },
          { level: 18, name: 'Super Reload Shield', verdict: 'take', note: 'MUST-TAKE — +75% Damage, +50% Fire Rate, +100% Armor while reloading; the entire brawl identity' },
        ],
      },
      {
        name: 'Seismic Repulsor',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Coolant Leak', verdict: 'take', note: 'Cryo on knockback — knockback then immediately close distance to re-stack Juggernaut passive via hits' },
          { level: 12, name: 'Extra Capacity (+1)', verdict: 'take', note: 'More charges; repulsor is a breathing space tool between reload windows, not a permanent CC solution' },
          { level: 18, name: 'Extra Capacity (+3)', verdict: 'situational', note: 'Near-permanent knockback — useful if swarms outpace your reload loop, but reduces the hits that stack Juggernaut passive' },
        ],
      },
      {
        name: 'ArmsKore Coil Gun',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'More Beams (+1)', verdict: 'take', note: 'Wider beam coverage for clearing ranged enemies you cannot safely close on during reload windows' },
          { level: 12, name: 'A Little More Oomph!', verdict: 'take', note: '+15% Damage on a piercing weapon; handles elites that Bulldog struggles to kill through its low clip size' },
          { level: 18, name: 'Spliced Emitter', verdict: 'take', note: '+75% Range, +75% Damage, +75% Lifetime — compensates for Juggernaut\'s -50% range penalty; lets you engage ranged threats' },
        ],
      },
      {
        name: 'High Explosive Grenade',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Compact Explosives', verdict: 'take', note: '+radius; throw into approaching cluster to reduce swarm density before closing to melee range' },
          { level: 12, name: 'A Little More Oomph!', verdict: 'take', note: '+damage; grenade + Super Reload Shield Bulldog follow-up is a devastating combo burst' },
          { level: 18, name: 'True TNT', verdict: 'take', note: 'Massive single grenade damage; throw at Dreadnought during Super Reload Shield window for stacked burst' },
        ],
      },
    ],
    stats: {
      priority: ['Kinetic Damage', 'Reload Speed', 'Armor', 'Max HP', 'Crit Chance'],
      avoid: ['Move Speed — you close distance intentionally; speed undermines the brawl loop', 'Explosion Radius — secondary concern; Bulldog is the primary damage source'],
    },
    artifacts: {
      always: ['BLT Ration Pack', 'Salty Pretzel', 'The MoCap'],
      good: ['Energy Bars', 'Reflex Calibrator', "Diver's Manual"],
      never: ['Gold-Tipped Bullets — hoarding gold contradicts aggressive brawl playstyle; you spend constantly on survivability', 'Ammo Rig — -15% Move Speed on a build that must close distance is dangerous'],
    },
    phases: [
      {
        stage: 1,
        title: 'Find Bulldog and Absorb Hits',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Priority: Bulldog > Seismic Repulsor > Coil Gun. Bulldog is the carry. Juggernaut starts with it as the subclass weapon so it should always be available. Do not rush into full swarms yet — absorb one or two hits per wave to begin stacking the passive, then pull back to reload safely.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Bulldog lv6: A Little More Oomph! for +15% Damage and +25% Reload Speed — the reload speed improvement reduces dead time between shots more than any other lv6 option. Seismic Repulsor lv6: Coolant Leak for cryo on knockback, giving breathing room while you reload.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Buy BLT Ration Pack immediately if available — Juggernaut\'s passive charges off taking hits, meaning passive HP regen is essential to recover between the intentional damage absorption. Save 60g. Spend on Kinetic Damage cards. Skip movement speed entirely.' },
        ],
      },
      {
        stage: 2,
        title: 'Reload Shield Brawl Loop',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Push Bulldog to lv12 for Reload Shield. Once online, practice the brawl loop: close → shoot clip → reload at melee range (doubled armor) → shoot fresh clip. Coil Gun handles ranged elites you cannot safely approach. Build Juggernaut passive stacks before engaging the main swarm.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Bulldog lv12: Reload Shield is mandatory — the early brawl loop is too dangerous without some armor on reload. Seismic Repulsor Extra Capacity lv12 for more CC charges. HE Grenade lv6: Compact Explosives to reduce swarm density before closing distance.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Salty Pretzel is excellent now — you are frequently at 70-80% HP from passive stacking absorption, putting you in the armor-bonus zone often. Spend ~30g on Kinetic Damage and Armor upgrades. Juggernaut\'s base +10 Armor means Armor stat cards have higher absolute value than on other subclasses.' },
        ],
      },
      {
        stage: 3,
        title: 'Super Reload Shield Online',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'POWER SPIKE. Bulldog lv18: Super Reload Shield. +75% Damage and +50% Fire Rate on the first shots after each reload, plus +100% Armor during the reload itself. At full Juggernaut passive stacks (+50% from 5 hits absorbed) you are firing at effectively +125% Damage. Brawl aggressively — this is when the build peaks.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Super Reload Shield is non-negotiable. Coil Gun lv12: A Little More Oomph! for elite cleanup. HE Grenade lv12 for cluster damage. Deploy all support weapons to manage the swarm flow while Bulldog handles burst execution.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Full spend. Complete Salty Pretzel + The MoCap pair — at moderate HP with Super Reload Shield active you have high armor AND high damage simultaneously. Reflex Calibrator stacks dodge on taking damage, which compounds Juggernaut\'s natural hit-absorption playstyle.' },
        ],
      },
      {
        stage: 4,
        title: 'Support Grid Complete',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Coil Gun to lv18: Spliced Emitter — +75% Range compensates for Juggernaut\'s penalty, letting Coil Gun engage ranged threats effectively. HE Grenade to lv18: True TNT for high-burst grenade finishers. Bulldog remains the primary kill weapon; support weapons handle overflow.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Coil Gun Spliced Emitter restores effective range for the whole kit, partially compensating for Juggernaut\'s range penalty. Seismic Repulsor Extra Capacity (+3) for near-permanent CC uptime. HE Grenade True TNT for boss-phase burst. Take every Kinetic Damage global upgrade.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Save 30g for Stage 5. Energy Bars is strong here — Juggernaut\'s extra +50 Max HP raises the base from which Energy Bars\' HP-drain penalty operates, giving more headroom. Reflex Calibrator is excellent now; at Stage 4 you reliably stack it to 3-4 tiers every engagement.' },
        ],
      },
      {
        stage: 5,
        title: 'Boss — Brawl and Reload',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Absorb early Dreadnought hits on purpose to stack Juggernaut passive to 5 before committing the Super Reload Shield burst sequence. Throw True TNT HE Grenade on supply pod drop, immediately close distance, shoot Bulldog clip, reload in melee range (Super Reload Shield active), fire fresh clip at full +125% damage. Repeat.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Take every Kinetic Damage, Reload Speed, and Armor upgrade. Armor has outsized value on Juggernaut since base +10 Armor means each Armor card percentage is calculated from a higher floor. Crit Chance upgrades compound with The MoCap and Salty Pretzel\'s damage bonuses.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Spend everything on stat upgrades. Diver\'s Manual is an always-buy if not yet acquired. Energy Bars at Stage 5 adds significant flat damage from accumulated levels. Do not hoard gold — this build generates enough damage from passives and OCs; spend on survivability upgrades to ensure you survive long enough to execute the brawl loop.' },
        ],
      },
    ],
  },

  {
    id: 'tinkerer-lok1',
    name: 'Tinkerer LOK-1 Carry',
    class: 'Engineer',
    subclass: 'Tinkerer',
    tier: 'B',
    difficulty: 2,
    passive: '+10% XP Gain, all weapons start at Level 3 — LOK-1 can reach lv18 on Stage 1 with good XP routing',
    synopsis: 'LOK-1\'s lock-on targeting eliminates aim skill, and \'The Favourite\' at lv18 doubles both damage and fire rate. Tinkerer\'s lv3 start means the power spike arrives a full stage earlier than any other build.',
    playstyle: 'Keep moving — unlike the Warthog build, LOK-1 rewards aggressive kiting. Lock targets while strafing, let the smart targeting system track. Deploy Voltaic Fence to cluster enemies and vacuum XP, then arc LOK-1 bursts into locked groups. Once \'The Favourite\' is online, funnel all XP into LOK-1 and accept the penalty on support weapons — they exist only to buy you time between LOK-1 clips.',
    strengths: [
      'Lock-on targeting makes LOK-1 effective even while moving at full speed, unlike all shotgun or heavy-weapon builds',
      'The Favourite\'s +100% Damage and +100% Fire Rate at lv18 is among the highest single-weapon payoffs in the game; Tinkerer\'s lv3 start means this arrives in Stage 1 on a good run',
      'Battery Bullets converts LOK-1 to electric damage, synergizing with Voltaic Fence\'s shock field for dual-source electric stacking',
    ],
    weaknesses: [
      'The Favourite\'s -30% Damage and -30% Fire Rate penalty to all other weapons makes support tools significantly weaker from lv18 onward — you become nearly one-weapon dependent',
      'LOK-1 requires sustained target lock to deal full DPS; enemies that die before a full lock burst waste clip capacity and reduce effective damage output',
      'Lower direct crowd-control than Warthog or turret builds — without a stagger or knockback tool, fast enemies that slip past the lock-on range can close quickly',
    ],
    tips: [
      'Lead Wrapped Ammo at lv12 (+150% damage, -20% fire rate and reload) is an excellent bridge before The Favourite unlocks at lv18 — take it if the run is strong and you need a mid-game spike',
      'Voltaic Fence\'s Magnetic Alloy OC pulls XP orbs into its radius — position the fence at natural choke points to accelerate the lv18 sprint in Stage 1',
      'After The Favourite is online, spend shop gold on LOK-1 damage upgrades exclusively; support weapon stats are already penalized and further investment there has poor return',
      'High Caliber Rounds (+100% Piercing, +30% Damage, -30% Fire Rate) is a strong lv12 alt if you face armored targets — the piercing converts to multi-hit bonus on bunched enemies',
      'Squint-EE5 is viable here: LOK-1\'s fire rate with The Favourite is high enough that crit checks fire rapidly, and Battery Bullets can push you toward the electric-proc threshold for status synergy',
    ],
    weapons: [
      {
        name: 'LOK-1 Smart Rifle',
        isCarry: true,
        overclocks: [
          { level: 6, name: 'Battery Bullets (Electric) or Gas Rerouting', verdict: 'situational', note: 'Battery Bullets for electric synergy with Voltaic Fence; Gas Rerouting if you want pure fire rate and reload to accelerate XP farming toward lv18' },
          { level: 12, name: 'Lead Wrapped Ammo or High Caliber Rounds', verdict: 'situational', note: 'Lead Wrapped Ammo for raw damage spike before The Favourite; High Caliber Rounds for piercing into dense groups or armored targets' },
          { level: 18, name: 'The Favourite', verdict: 'take', note: 'MUST-TAKE — +100% Damage and +100% Fire Rate; accept the -30% penalty to all other weapons, they are now support tools only' },
        ],
      },
      {
        name: 'Voltaic Shock Fence',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Magnetic Alloy', verdict: 'take', note: 'XP vacuuming accelerates the lv18 sprint — most important early OC in this build' },
          { level: 12, name: 'Extra Capacity (+1)', verdict: 'take', note: 'More fence nodes for wider XP pull radius and better chokepoint coverage' },
          { level: 18, name: 'Conduit', verdict: 'take', note: 'Fence follows you — dynamic positioning without needing to redeploy after moving' },
        ],
      },
      {
        name: 'LOK-1 Smart Rifle (second slot) or Hi-Volt Thunderbird',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Gas Rerouting (Thunderbird)', verdict: 'take', note: 'If running Thunderbird as backup, fire rate and reload keep it functional even under The Favourite\'s penalty' },
          { level: 12, name: 'Battery Bullets (Thunderbird)', verdict: 'situational', note: 'Electric tag adds another status source alongside the fence; mediocre after The Favourite penalty but better than nothing' },
          { level: 18, name: 'Bigger Mags (LOK-1 second)', verdict: 'skip', note: 'If a second LOK-1 appeared, Bigger Mags just extends clip; The Favourite already covers damage — this slot is low priority' },
        ],
      },
    ],
    stats: {
      priority: ['Damage', 'Fire Rate', 'Reload Speed', 'Crit Chance'],
      avoid: ['Move Speed upgrades are neutral — you want to move, not stand still, but the stat itself isn\'t priority; Construct stats are irrelevant in this build'],
    },
    artifacts: {
      always: ["Diver's Manual", 'Energy Bars', 'Turbo Encabulator'],
      good: ['Squint-EE5', '5 Leaf Clover', 'Pay2Win Console'],
      never: ['Popup Tripod — requires standing still; this build kites constantly'],
    },
    phases: [
      {
        stage: 1,
        title: 'Level 3 Head Start — Sprint to lv18',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'LOK-1 starts at lv3. Focus all XP on LOK-1 — lv18 on Stage 1 is the goal. Deploy Voltaic Fence with Magnetic Alloy to vacuum XP from kills near the fence.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'LOK-1 lv6: Battery Bullets for electric synergy with the fence, or Gas Rerouting for faster cycling if you need to spam bursts to stay alive. Either primes you for the lv18 spike.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Buy Voltaic Fence early for its Magnetic Alloy XP pull. Save gold for Diver\'s Manual or Turbo Encabulator. Avoid spending on support weapon upgrades — those stats will be penalized once The Favourite is online.' },
        ],
      },
      {
        stage: 2,
        title: 'The Favourite Online',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'If LOK-1 didn\'t hit lv18 in Stage 1, it will hit it very early Stage 2. Once The Favourite is equipped, all non-LOK-1 weapons are support tools. Level Voltaic Fence for Conduit so it follows you during kiting.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'LOK-1 lv18: The Favourite. This is the build. Fence lv12: Extra Capacity. Start Hi-Volt Thunderbird if you need a panic backup that fires under the penalty.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Turbo Encabulator is now excellent — you have at least 2 OCs equipped, and each new OC adds +3% Damage and +3% Reload Speed. Energy Bars stacks damage with every level. Prioritize both.' },
        ],
      },
      {
        stage: 3,
        title: 'Damage Compounding',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Push Fence to lv18 for Conduit. Add a fourth weapon if available — even under The Favourite\'s penalty, another tag for Multi Tool or another OC stack for Turbo Encabulator adds value.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Take any global Damage or Fire Rate upgrade immediately. LOK-1 with The Favourite benefits from every Damage multiplier — the +100% Fire Rate means Damage upgrades apply faster than any other weapon in the pool.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Full spend. Complete Turbo Encabulator stacking — target 6+ OCs total. If 5 Leaf Clover is available alongside Pay2Win Console, this stage is where that pair starts compounding Shop offer quality.' },
        ],
      },
      {
        stage: 4,
        title: 'Crit Threshold Push',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'No new weapons needed. Confirm Voltaic Fence Conduit is online. If Squint-EE5 was picked up and you\'re close to 75% Crit Chance, buy any available Crit Chance upgrades aggressively.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Take Crit Chance and Crit Damage upgrades if chasing Squint-EE5 threshold. Otherwise take raw Damage. Skip Reload Speed beyond what naturally appears — The Favourite\'s fire rate means magazine cycling is already fast.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Save 30g for Stage 5 supply pod. Pay2Win Console rerolls are worth continuing — each reroll permanently stacks damage. Gold-Tipped Bullets can work here if your gold reserve is high from efficient kiting play.' },
        ],
      },
      {
        stage: 5,
        title: 'Boss — Lock and Dump',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'LOK-1 carries. Lock onto the Dreadnought, dump the full magazine, reload and repeat. Voltaic Fence placed at your feet shocks anything targeting you while you maintain lock-on focus on the boss.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Take every Damage and Crit upgrade. The Favourite\'s doubled fire rate means each Damage% upgrade translates to more DPS than on any other weapon. Do not buy Reload Speed — redundant at this fire rate.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Spend everything on Damage. If Pay2Win Console is equipped, reroll aggressively — permanent stacks matter more than held gold unless Gold-Tipped Bullets is in the loadout.' },
        ],
      },
    ],
  },

  {
    id: 'devastator-shard-diffractor',
    name: 'Devastator Shard Diffractor',
    class: 'Engineer',
    subclass: 'Devastator',
    tier: 'B',
    difficulty: 3,
    passive: '+30% Knockback Force, +15% Explosion Radius — terrain-bouncing plasma beams hit harder and Plasma Burster AoE covers more ground',
    synopsis: 'Shard Diffractor\'s bouncing plasma beams compound with Devastator\'s +15% Explosion Radius on Plasma Burster, creating a room-clearing loop. Overcharged Fuelcells triples the beam damage at the cost of duration — fights are fast, decisive, and geometry-dependent.',
    playstyle: 'Position in the center of rooms to maximize how many walls the Shard Diffractor beams bounce off of before expiring. Fire Plasma Burster into the same clustered area to layer explosive and beam damage simultaneously. Devastator\'s knockback force on the Seismic Repulsor creates breathing room when enemies close in — use it reactively, not proactively. This build is geometry-dependent: open arenas reduce bounce hits and drop effective DPS substantially, while tight corridors turn it into a beam wall that shreds entire waves in seconds.',
    strengths: [
      'Shard Diffractor beams bounce off walls and re-hit the same enemies multiple times in tight corridors — Overcharged Fuelcells at lv18 means each bounce hit for +175% damage',
      'Plasma Burster with More Bounce + Devastator\'s +15% Explosion Radius creates a wide-arc plasma grenade that can reach around corners and hit multiple waves simultaneously',
      'Devastator\'s +30% Knockback Force on Seismic Repulsor covers the build\'s main weakness: anything that slips past the beam field gets pushed back before it can deal melee damage',
    ],
    weaknesses: [
      'Entirely geometry-dependent — Overcharged Fuelcells reduces beam lifetime by 40%, so in open rooms with no walls nearby, beams expire before bouncing enough times to justify the damage tradeoff',
      'Slowest ramp-up of any Engineer build: both Shard Diffractor and Plasma Burster are unlocked at higher Engineer ranks, and neither reaches full potential until lv18 OCs',
      'No sustained fire option — both the Diffractor and Burster have cooldowns; waves that outlast both cooldowns must be handled by Seismic Repulsor alone until charges reset',
    ],
    tips: [
      'Fight near walls intentionally: Shard Diffractor beams angle their bounces based on firing direction — aim at a wall to your left while facing the horde and let the bounce arc through the enemy cluster',
      'Hot Plasma or Cold Plasma at lv6 adds an elemental status alongside beam damage — Cold Plasma slow synergizes beautifully with Seismic Repulsor by keeping knocked-back enemies slowed before they can recover',
      'Plasma Burster More Bounce! OC extends how many times the grenade bounces before detonating — in a corridor, one grenade can trigger its explosion after hitting two or three wall angles, catching enemies on multiple sides',
      'Ionized Plasma on Shard Diffractor at lv12 adds shock status — each bouncing beam hit applies a shock check, and with enough bounce hits per second this creates near-constant stun on any enemy in the beam path',
      'The MoCap pairs exceptionally well: this build naturally takes damage during the slow ramp phase, and once you are at low HP the damage bonus activates precisely when Overcharged Fuelcells beam damage is at its highest',
    ],
    weapons: [
      {
        name: 'Shard Diffractor',
        isCarry: true,
        overclocks: [
          { level: 6, name: 'Cold Plasma or Hot Plasma', verdict: 'situational', note: 'Cold Plasma for kite-friendly slow that synergizes with Repulsor pushback; Hot Plasma if Chemist Kit is in the loadout and you want burn stacks from every beam bounce' },
          { level: 12, name: 'Ionized Plasma or More Beams', verdict: 'situational', note: 'Ionized Plasma for stun-lock via repeated bounce shock procs; More Beams for wider coverage in open rooms where single-beam bounce paths are less reliable' },
          { level: 18, name: 'Overcharged Fuelcells', verdict: 'take', note: 'MUST-TAKE in good geometry — +175% Damage with -40% Lifetime is a massive net positive in tight corridors; skip only in the rare case of an entirely open final stage' },
        ],
      },
      {
        name: 'Plasma Burster',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'A Little More Oomph!', verdict: 'take', note: '+15% Damage and +25% Reload Speed — Devastator passive adds +15% Explosion Radius on top, making this the best lv6 OC for raw coverage' },
          { level: 12, name: 'Ionized Plasma or Cold Plasma', verdict: 'situational', note: 'Match the Shard Diffractor\'s element — Cold/Cold creates a freeze loop; Electric/Electric creates dual shock sources' },
          { level: 18, name: 'More Bounce! or The Favourite', verdict: 'situational', note: 'More Bounce! in tight maps for extended grenade travel; The Favourite (+75% Damage, +30% Radius) is powerful but penalizes other weapons — only take if Plasma Burster is your primary clear tool' },
        ],
      },
      {
        name: 'Seismic Repulsor',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Coolant Leak', verdict: 'take', note: 'Cryo on knockback — frozen enemies remain in the beam field longer, taking more bounce hits from the Diffractor' },
          { level: 12, name: 'Extra Capacity (+1)', verdict: 'take', note: 'More charges means more emergency knockback; this is the build\'s panic button and running out of charges at the wrong moment is fatal' },
          { level: 18, name: 'Extra Capacity (+3) or Shockwave', verdict: 'situational', note: 'Extra Capacity (+3) for near-permanent knockback uptime; Shockwave if Devastator\'s +30% Force already gives enough pushback and you want wider pulse radius instead' },
        ],
      },
    ],
    stats: {
      priority: ['Damage', 'Potency', 'Explosion Radius', 'Reload Speed'],
      avoid: ['Move Speed — standing still to aim bouncing beams is ideal; Kinetic Damage only — plasma is not kinetic, do not prioritize kinetic-specific upgrades'],
    },
    artifacts: {
      always: ["Diver's Manual", 'Energy Bars', 'Chemist Kit'],
      good: ['The MoCap', 'BLT Ration Pack', 'Turbo Encabulator'],
      never: ['Popup Tripod — you reposition between beam volleys and cannot stack it reliably', 'Piercing Projectiles — Shard Diffractor beams are not standard projectiles and do not benefit from the piercing stat'],
    },
    phases: [
      {
        stage: 1,
        title: 'Survive Without the Diffractor',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Shard Diffractor is unlocked at Engineer Rank 21 — it may not be available in early runs. Use Seismic Repulsor as primary CC and a standard Engineer weapon (Warthog or LOK-1) as interim carry. If the Diffractor is available, rush it immediately.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Seismic Repulsor lv6: Coolant Leak — freeze on knockback is your survival tool all game. Any available primary weapon to lv6 for its basic OC. Preserve XP for Diffractor if you have it.' },
          { type: 'shop', label: 'Shop Strategy', content: 'BLT Ration Pack is the priority buy — this build takes hits during Stage 1 without its carry weapon online. Save 80g. Do not buy Chemist Kit yet; status synergy only matters once the Diffractor is applying beam hits.' },
        ],
      },
      {
        stage: 2,
        title: 'Plasma Burster Deployed',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'If Plasma Burster is available, deploy it now. A Little More Oomph! at lv6 with Devastator\'s +15% Explosion Radius creates a wide-coverage grenade. Shard Diffractor should be leveling toward lv12 if online.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Plasma Burster lv6: A Little More Oomph! immediately. Shard Diffractor lv6: Cold or Hot Plasma — pick based on whether Cold (kite/slow) or Hot (burn stacks) fits your available artifact pool. Repulsor lv12: Extra Capacity.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Chemist Kit becomes valuable now that beams and grenades are both applying status. Energy Bars is excellent — you will level quickly from efficient wave clears. Explosion Radius upgrades benefit Plasma Burster directly.' },
        ],
      },
      {
        stage: 3,
        title: 'Overcharged Fuelcells Online',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'POWER SPIKE. Shard Diffractor lv18: Overcharged Fuelcells. Every beam hit is now 3x damage — fight in corridors and near walls exclusively. Plasma Burster lv12 for elemental synergy OC.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Overcharged Fuelcells is the build\'s defining moment. Plasma Burster lv12 elemental OC to match Diffractor element. Repulsor lv18: Extra Capacity (+3) for near-constant knockback availability.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Full spend. Complete Chemist Kit + Energy Bars pair. Stack Damage and Potency — both apply to beam and grenade hits. The MoCap is available here if you\'ve been taking damage during ramp; low HP + Overcharged Fuelcells damage is a strong combo.' },
        ],
      },
      {
        stage: 4,
        title: 'Status Loop Established',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Plasma Burster to lv18 for More Bounce! or The Favourite. Turbo Encabulator now has 4+ OCs — it compounds all damage. No new weapons needed; maximize the three-weapon loop: Diffractor beams → Burster grenades → Repulsor pushback.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Take Damage and Potency upgrades over everything. Skip Movement Speed and Kinetic-specific upgrades — plasma damage does not benefit from kinetic tags. Any Explosion Radius card is a direct Plasma Burster boost.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Save 30g for Stage 5. Consider Salty Pretzel if running The MoCap — the armor from missing HP creates a low-HP sustain package that lets you operate at the damage-bonus threshold safely.' },
        ],
      },
      {
        stage: 5,
        title: 'Boss — Bounce and Explode',
        decisions: [
          { type: 'weapon', label: 'Weapon Pick', content: 'Position near a wall. Fire Shard Diffractor beams at the wall angle so they bounce through the Dreadnought repeatedly. Drop Plasma Burster grenades immediately after each beam volley. Seismic Repulsor on cooldown for escorts.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Take every Damage, Potency, and Explosion Radius upgrade. Prioritize Potency if status effects are consistently applying from beam bounces — each shock or burn tick on the Dreadnought is amplified by Chemist Kit.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Spend everything. Turbo Encabulator at full OC count delivers the highest final damage multiplier. If The MoCap is in the loadout, enter Stage 5 at low HP deliberately — the damage bonus activates from the first shot.' },
        ],
      },
    ],
  },

  {
    id: 'driller-interrogator-fire-dot',
    name: 'Driller Interrogator Fire DoT',
    class: 'Driller',
    subclass: 'Interrogator',
    tier: 'A',
    difficulty: 2,
    passive: '+100% Status Effect Damage, -30% Direct Damage — every fire tick deals double; direct shots are weak by design',
    synopsis: 'Interrogator doubles all DoT damage, making CRSPR Flamethrower and Colette Wave Cooker burn ticks the primary damage source. Sticky Fuel leaves persistent fire zones; Nano Waves stacks burn rapidly. The -30% direct damage penalty is invisible once fire is everywhere.',
    playstyle: 'Spray fire ahead of the wave, then step back and let the ground do the work. Sticky Fuel turns the terrain into a kill corridor: apply fire to chokepoints, toss Incendiary Grenades into the cluster, then manage repositioning while enemies burn. Colette Wave Cooker supplements with rapid burn stack generation on anything the Flamethrower misses. Avoid toe-to-toe fighting — the -30% direct damage means you will lose trades if fire is not already ticking on the target. Pacing is deliberate: pre-burn the path, kite through the burning zone, reapply.',
    strengths: [
      'Interrogator\'s +100% Status Effect Damage is always active — every burn tick from every source is doubled with no conditions or ramp time',
      'Sticky Fuel creates persistent fire zones that damage enemies without requiring further player input, freeing you to reposition or apply more stacks elsewhere',
      'Colette Wave Cooker with Nano Waves applies 28 burn stacks per second — the fastest stack generation in the Driller weapon pool, and all of it benefits from the Interrogator multiplier',
    ],
    weaknesses: [
      'The -30% direct damage penalty is permanent and punishing before your first fire weapon is active — Stage 1 combat with just a CRSPR and no OC yet is noticeably weaker than other builds',
      'Fire DoT cannot crit, making Squint-EE5 and Crit Damage stat upgrades dead draws; roughly one card in five is wasted',
      'Heavily punished by enemies with fire resistance or immunity on higher hazard levels — the entire damage model collapses against fire-immune targets',
    ],
    tips: [
      'Sticky Fuel puddles stack with Incendiary Grenade detonations — throw the grenade into an existing puddle to spike the burn stack count on every enemy standing in it simultaneously',
      'Colette Wave Cooker\'s Nano Waves OC at lv12 reduces direct damage by 30% but doubles Potency — on Interrogator this tradeoff is irrelevant since direct damage is already penalized and Status Effect Damage is what you\'re scaling',
      'Chemist Kit is the single highest-priority artifact for this build; pick it up immediately at any stage regardless of what else is offered',
      'BRN Shield Belt\'s fire ring proc on taking damage applies burn stacks to surrounding enemies — on Interrogator, those burn ticks deal double damage, making a defensive proc function as an offensive one',
    ],
    weapons: [
      {
        name: 'CRSPR Flamethrower',
        isCarry: true,
        overclocks: [
          { level: 6, name: 'Bigger Tanks', verdict: 'take', note: '+100% Lifetime extends your burn coverage window — longer spray time means more terrain on fire before you have to reposition' },
          { level: 12, name: 'Sticky Fuel', verdict: 'take', note: 'MUST-TAKE — creates persistent ground fire that keeps burning without you. Pre-burn chokepoints and retreat through them.' },
          { level: 18, name: 'Even More Beams', verdict: 'take', note: '+3 beams dramatically widens the fire cone — spray a corridor and everything in it is burning simultaneously' },
        ],
      },
      {
        name: 'Colette Wave Cooker',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Crowd Cooker', verdict: 'take', note: '+beam width means more enemies hit per sweep — more burn stacks applied per second across the wave' },
          { level: 12, name: 'Nano Waves', verdict: 'take', note: 'Doubles Potency at -30% direct damage — on Interrogator, the direct damage loss is irrelevant; burn stack speed is everything' },
          { level: 18, name: 'Thermal Oscillator', verdict: 'situational', note: '+50% damage and Slow on hit; Slow helps you maintain distance while fire ticks but Centralized Reflector is competitive' },
        ],
      },
      {
        name: 'Incendiary Grenade',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'A Little More Oomph!', verdict: 'take', note: '+damage and reload speed — faster grenade cadence means more fire applications per wave' },
          { level: 12, name: 'Cluster Grenades', verdict: 'take', note: 'Sub-grenades scatter burn across a wider area; perfect for pre-burning corridors before the wave arrives' },
          { level: 18, name: 'Sticky Fuel', verdict: 'take', note: 'Grenade version of CRSPR Sticky Fuel — persistent fire field on detonation stacks with Flamethrower puddles' },
        ],
      },
      {
        name: 'Firefly Hunter Drone',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'More Drones (+1)', verdict: 'take', note: 'Double drone count — more autonomous fire applicators working while you focus on repositioning' },
          { level: 12, name: 'Bigger Payload', verdict: 'take', note: 'More damage per drone hit — each hit applies burn, which Interrogator doubles' },
          { level: 18, name: 'Swarm Protocol', verdict: 'take', note: 'Drones coordinate burst attacks — spike burn stack generation on high-priority targets' },
        ],
      },
    ],
    stats: {
      priority: ['Status Effect Damage', 'Potency', 'Reload Speed', 'Damage'],
      avoid: ['Crit Chance — fire DoT cannot crit', 'Crit Damage — same reason'],
    },
    artifacts: {
      always: ['Chemist Kit', 'Energy Bars', 'BRN Shield Belt'],
      good: ['BLT Ration Pack', "Diver's Manual", 'Turbo Encabulator'],
      never: ['Squint-EE5', 'Nitragenic Powder', 'Pickled Nitra'],
    },
    phases: [
      {
        stage: 1,
        title: 'Establish Fire Coverage',
        decisions: [
          { type: 'weapon', label: 'Weapon Priority', content: 'Start CRSPR Flamethrower immediately — it is your carry and the Interrogator\'s starting weapon. Add Incendiary Grenade as second pick. The -30% direct damage penalty stings early but Flamethrower burn ticks compensate quickly.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'CRSPR lv6: Bigger Tanks — the extended beam lifetime lets you spray a wider area before repositioning. Avoid Overheat (+100% damage, -35% Lifetime); losing beam time hurts coverage more than it helps burst.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Chemist Kit is the build-defining artifact — buy it the moment it appears even at the cost of skipping other purchases. First stat priority is Status Effect Damage. Keep 15–20g reserve for Stage 2 weapon buys.' },
        ],
      },
      {
        stage: 2,
        title: 'Sticky Fuel Online',
        decisions: [
          { type: 'weapon', label: 'Weapon Priority', content: 'Colette Wave Cooker is the Stage 2 priority buy — it supplements burn stack generation while CRSPR reloads. Firefly Hunter Drone can wait until Stage 3. Push CRSPR to lv12 for Sticky Fuel.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'CRSPR lv12: Sticky Fuel — this is the build\'s hinge point. Once you have it, pre-burn every approach corridor before the wave. Colette lv6: Crowd Cooker for wider sweeps.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Second Chemist Kit stacks additively — double-Chemist Kit is a win condition for this build. Also prioritize Potency upgrades. BRN Shield Belt can appear here; take it.' },
        ],
      },
      {
        stage: 3,
        title: 'Burn Stack Engine',
        decisions: [
          { type: 'weapon', label: 'Weapon Priority', content: 'Push Colette Wave Cooker to lv12 for Nano Waves — it becomes the fastest burn stack applier in the kit. CRSPR lv18: Even More Beams widens fire cone dramatically. Buy Firefly Hunter Drone.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Colette lv12: Nano Waves — doubles Potency, the -30% direct damage is irrelevant on Interrogator. CRSPR lv18: Even More Beams for wide area fire. Incendiary Grenade lv12: Cluster Grenades.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Full Status Effect Damage spending. Energy Bars is excellent here — every level adds damage with no crit dependency. If Turbo Encabulator is available with 4+ OCs equipped, take it.' },
        ],
      },
      {
        stage: 4,
        title: 'Autonomous Fire Network',
        decisions: [
          { type: 'weapon', label: 'Weapon Priority', content: 'Firefly Hunter Drone with More Drones provides aerial burn application while you kite. Incendiary Grenade lv18 Sticky Fuel creates a third persistent fire source. The build now has three independent fire coverage systems.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Firefly Drone lv12: Bigger Payload — each drone strike applies burn at double Interrogator intensity. Colette lv18: Thermal Oscillator for slow + damage on stragglers. Incendiary lv18: Sticky Fuel.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Reserve 30g for Stage 5. Complete the Chemist Kit double-stack if still missing. BLT Ration Pack offsets any HP pressure. Dump remaining gold on Status Effect Damage and Potency.' },
        ],
      },
      {
        stage: 5,
        title: 'Dreadnought Burn Loop',
        decisions: [
          { type: 'weapon', label: 'Weapon Priority', content: 'Pre-burn the Dreadnought arena with Sticky Fuel puddles before engaging. Deploy Firefly Drones immediately on spawn. The Dreadnought will enter fire zones as it chases you — maintain distance and let the burn tick. Apply fresh stacks with Colette Wave Cooker sweeps when it closes.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'All Status Effect Damage and Potency upgrades are the priority. Reload Speed helps maintain CRSPR uptime during the boss chase. Avoid spending on Move Speed unless you are getting caught.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Spend everything on Status Effect Damage. Energy Bars peaks here — your accumulated level-up bonus is at maximum. Gold-Tipped Bullets is worth buying late if you have a strong gold reserve.' },
        ],
      },
    ],
  },

  {
    id: 'krakatoa-turret-demo',
    name: 'Krakatoa Turret Demo',
    class: 'Driller',
    subclass: 'Demolitions Expert',
    tier: 'B',
    difficulty: 3,
    passive: '+20% Reload Speed & AoE Size for [EXPLOSIVE] weapons — Krakatoa turrets are [EXPLOSIVE], so their fire cones are wider and reload faster',
    synopsis: 'Deploy Krakatoa Sentinel turrets enhanced by the Demolitions Expert AoE passive, then supplement with High Explosive Grenades and Neurotoxin Grenades. Turrets handle sustained fire output while you manage positioning and grenade cooldowns. Tank Tracks OC lets turrets follow you, making it a moving kill platform.',
    playstyle: 'Place Krakatoa turrets at chokepoints or activate Tank Tracks so they follow you as a mobile escort. Your role is directional: herd enemies into the turret fire arcs with High Explosive Grenades, then let the turrets do the sustained damage. Neurotoxin Grenades slow and DoT enemies that survive the initial turret burst. Stay just behind or beside your turret line — Demolitions Expert AoE passive widens every explosion, so your own grenades can catch you if you get too close. Mid-range management build: not as passive as Constructor Turret Army since turrets must be manually repositioned, but more mobile.',
    strengths: [
      'Demolitions Expert +20% AoE passive applies to Krakatoa Sentinel turret fire cones — each turret covers a wider area than it would on any other subclass, creating overlapping fire fields with just two turrets',
      'Tank Tracks OC converts stationary turrets into following escorts, removing the deployment micromanagement that makes pure turret builds frustrating on mobile stages',
      'High Explosive Grenade herds enemies into turret arcs — combining clustering with sustained fire output makes the build effective against both hordes and tough single targets',
    ],
    weaknesses: [
      'Turrets must be deployed (standing still) unless Tank Tracks is active — before that lv12 OC, repositioning turrets mid-wave is slow and dangerous',
      'No strong carry weapon for the periods when turrets are reloading or not yet deployed; the build has gaps in output that other Driller builds do not experience',
      'Krakatoa Protocol (turret explode on death) is unreliable — turrets die mid-wave and the explosion proc timing is uncontrolled, which can self-damage at a critical moment',
    ],
    tips: [
      'Place turrets slightly behind your grenade throwing position so enemies are already slowed or clustered by grenades when they enter the turret arc — this maximizes turrets\' per-second damage output',
      'Demolitions Expert AoE passive makes Krakatoa turret fire cones overlap significantly with just two turrets placed 90 degrees apart; a 90-degree V-formation covers most of a standard corridor',
      'Mining Directive OC (lv6) is a trap on this build unless gold is your primary goal — the turrets lose combat time while mining; only take it if the run is starved for resources in Stage 1',
      'Neurotoxin Grenade Hallucinogenic at lv18 causes confused enemies to attack each other in the turret arc — the turrets hit confused enemies that stand still, dramatically increasing per-enemy damage',
    ],
    weapons: [
      {
        name: 'Krakatoa Sentinel',
        isCarry: true,
        overclocks: [
          { level: 6, name: 'Extra Capacity', verdict: 'take', note: '+1 turret and +10% range — two turrets with AoE passive creates wide overlapping fire fields; more deployments per wave' },
          { level: 12, name: 'Tank Tracks', verdict: 'take', note: 'MUST-TAKE — turrets follow the player, removing deployment micromanagement and converting the build into a mobile fire platform' },
          { level: 18, name: 'More Beams', verdict: 'take', note: '+1 beam per turret; with Demolitions AoE passive the extra beam arc covers even more area — pairs with Extra Capacity for wide multi-beam coverage' },
        ],
      },
      {
        name: 'High Explosive Grenade',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Compact Explosives', verdict: 'take', note: '+radius stacks with Demolitions AoE passive — grenade blasts herd enemies into turret arcs' },
          { level: 12, name: 'A Little More Oomph!', verdict: 'take', note: '+damage on the primary burst grenade — kills survivors before they close to melee range' },
          { level: 18, name: 'True TNT', verdict: 'take', note: 'Massive damage spike; one-shots clustered enemies that turrets have been softening with fire DoT' },
        ],
      },
      {
        name: 'Neurotoxin Grenade',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Cluster Grenades', verdict: 'take', note: 'More toxin sub-grenades cover wider area — slows incoming wave while turrets reposition or reload' },
          { level: 12, name: 'Tape Some Nails To It', verdict: 'take', note: 'Shrapnel burst on detonation adds direct damage on top of toxin DoT; punishes clustered enemies' },
          { level: 18, name: 'Hallucinogenic', verdict: 'take', note: 'Confused enemies fight each other inside turret fire arcs — passive bonus damage without any additional actions' },
        ],
      },
      {
        name: 'CRSPR Flamethrower',
        isCarry: false,
        overclocks: [
          { level: 6, name: 'Overheat', verdict: 'situational', note: '+100% damage burst for emergencies when turrets are down; -35% Lifetime limits sustained use but the burst is useful as a gap-filler' },
          { level: 12, name: 'Sticky Fuel', verdict: 'take', note: 'Pre-burn the approach lane before deploying turrets — enemies walk through fire on their way into turret arcs, stacking DoT before they arrive' },
          { level: 18, name: 'Even More Beams', verdict: 'situational', note: 'Good if Sticky Fuel is not available; wide fire cone covers gaps in turret coverage during repositioning windows' },
        ],
      },
    ],
    stats: {
      priority: ['Explosion Radius', 'Damage', 'Reload Speed', 'Potency'],
      avoid: ['Mining Speed — turrets need to fight, not mine', 'Move Speed — stationary turret deployment benefits from you staying near the placement'],
    },
    artifacts: {
      always: ['Energy Bars', 'Turbo Encabulator'],
      good: ["Diver's Manual", 'BLT Ration Pack', 'Popup Tripod'],
      never: ['Nitragenic Powder', 'Pickled Nitra'],
    },
    phases: [
      {
        stage: 1,
        title: 'First Turret Down',
        decisions: [
          { type: 'weapon', label: 'Weapon Priority', content: 'Krakatoa Sentinel is the carry — deploy it immediately and learn the fire arc. Buy High Explosive Grenade as your second weapon for herding. The build is functional with just these two: turret fires, grenade clusters.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Krakatoa lv6: Extra Capacity for a second turret. Two turrets with AoE passive overlap creates good coverage from Stage 1. Avoid Mining Directive unless resource-starved.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Explosion Radius stat upgrades benefit all weapons simultaneously — buy them aggressively. Energy Bars is the first artifact priority. Keep 20g reserve for Stage 2 weapon purchase.' },
        ],
      },
      {
        stage: 2,
        title: 'Turret Mobility',
        decisions: [
          { type: 'weapon', label: 'Weapon Priority', content: 'Push Krakatoa to lv12 for Tank Tracks — this is the build\'s quality-of-life breakthrough. Once turrets follow you, buy Neurotoxin Grenade to slow enemies into turret arcs. CRSPR Flamethrower is a good Stage 2 pickup for gap coverage.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Krakatoa lv12: Tank Tracks — mandatory. HE Grenade lv6: Compact Explosives for wider herding blasts. CRSPR lv6: Bigger Tanks if bought this stage.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Turbo Encabulator becomes excellent at Stage 2+ with 4+ OCs equipped — pick it up if available. Continue Explosion Radius and Damage upgrades. DRG Coupon can stretch budget if rerolls are needed.' },
        ],
      },
      {
        stage: 3,
        title: 'Multi-Beam Escort',
        decisions: [
          { type: 'weapon', label: 'Weapon Priority', content: 'Krakatoa lv18: More Beams converts each turret into a multi-arc fire platform. HE Grenade lv18: True TNT for high-damage burst. Neurotoxin lv12: Tape Some Nails for direct damage supplement.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Krakatoa lv18: More Beams — with Tank Tracks already active, your two following turrets now each fire multiple fire arcs. HE Grenade lv12 and lv18 both take straightforward damage OCs.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Full stat spend. Popup Tripod is strong here if playing a stationary-ish style near turrets — Reload Speed ramp helps the grenade loop. Gold-Tipped Bullets is viable if gold is high.' },
        ],
      },
      {
        stage: 4,
        title: 'Confusion + Fire Loop',
        decisions: [
          { type: 'weapon', label: 'Weapon Priority', content: 'Neurotoxin lv18: Hallucinogenic — confused enemies standing in turret fire arcs take full sustained damage while attacking each other. CRSPR lv12: Sticky Fuel creates pre-burned terrain for the wave approach. Fully online.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Neurotoxin lv18: Hallucinogenic is the Stage 4 power spike. CRSPR lv12 Sticky Fuel is the second priority. If CRSPR lv18 is reachable, Even More Beams adds wide fire cone for the pre-burn lane.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Save 30g for Stage 5. Complete Turbo Encabulator value — by Stage 4 you should have 6–8 OCs, the bonus is substantial. Salty Pretzel and The MoCap are optional if you want to run a low-HP style near the turrets.' },
        ],
      },
      {
        stage: 5,
        title: 'Escort the Dreadnought',
        decisions: [
          { type: 'weapon', label: 'Weapon Priority', content: 'With Tank Tracks active, deploy both turrets, engage the Dreadnought, and let the turrets follow you as you kite. Pre-burn the arena with CRSPR Sticky Fuel. Throw Hallucinogenic Neurotoxin on adds to create confused chaos around the boss. True TNT HE Grenade for burst damage windows.' },
          { type: 'overclock', label: 'Overclock Choice', content: 'Explosion Radius and Damage upgrades are the final priority. Reload Speed keeps grenade loop pressure on the boss. Avoid committing gold to Movement Speed unless turret following is causing distance issues.' },
          { type: 'shop', label: 'Shop Strategy', content: 'Spend everything. Energy Bars damage peaks at your final level. Turbo Encabulator is at maximum stacks with all overclocks equipped. Gold-Tipped Bullets lands a high multiplier if you have not spent down your gold reserve.' },
        ],
      },
    ],
  },
]
