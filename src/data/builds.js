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
  {
    id: 'sharpshooter-drak-plasma',
    name: 'Sharpshooter Plasma Burn',
    class: 'Scout',
    subclass: 'Sharpshooter',
    tier: 'B',
    difficulty: 2,
    passive: '+15% Crit Chance, +50% Crit Damage — overkill crits spawn shrapnel explosions',
    synopsis: 'DRAK-25 Plasma Carbine as carry with Hot Plasma adding fire DoT on every burst. Sharpshooter overkill-crit shrapnel still triggers, but plasma\'s moderate damage-per-bullet means crit ceiling is lower than GK2 Hipster or M1000 Thick Boy. Hot Plasma DoT burn covers packs between reloads.',
    playstyle: 'Mid-range sustained plasma bursts — hold the DRAK-25 into clusters and let crits plus burn DoT chip enemies down simultaneously. Gas Rerouting at lv6 keeps fire rate high and reload windows tight. Hot Plasma\'s burn DoT fills the gap between direct-hit crits on tightly packed swarms. More forgiving than Thick Boy\'s all-or-nothing shot but the split between direct crit damage and DoT ticks means neither output reaches its full ceiling. Play aggressively mid-range, rely on Cryo Grenade or Boomstick for breathing room when melee enemies close.',
    strengths: [
      'Online from lv6 — Gas Rerouting tightens reload immediately and Hot Plasma adds burn DoT on every burst, giving the build a functional identity before the lv18 spike',
      'Sharpshooter overkill-crit shrapnel chains into nearby enemies even at lower crit ceilings — plasma\'s AoE burst pattern still lands multiple crits per trigger pull',
      'Hot Plasma burn DoT persists after moving away from a pack, providing passive damage generation during repositioning and reload windows',
    ],
    weaknesses: [
      'B-tier because Sharpshooter\'s overkill-crit shrapnel rewards high-damage-per-shot weapons; plasma\'s moderate per-bullet damage and DoT split means neither output reaches its full ceiling',
      'DoT damage ticks do NOT benefit from Crit Chance or Crit Damage — Squint-EE5\'s crit bonuses only apply to direct hits, and the -30% Damage penalty actively hurts the DoT ticks',
      'Volatile Impact Mixture (fire DoT on plasma hits) overlaps with Hot Plasma\'s burn application — if already running Hot Plasma, the lv18 slot is competing for a redundant DoT source rather than a game-changing spike',
    ],
    tips: [
      'Hot Plasma at lv6 is the preferred choice over Cold Plasma for Sharpshooter — burn DoT generates passive kill credit that can trigger overkill shrapnel on weakened enemies without spending another bullet',
      'Gas Rerouting at lv12 compounds the lv6 reload benefit and keeps the plasma burst rate high enough that crits land several times per second — prioritize this before chasing damage upgrades',
      'Skip Squint-EE5 on this build unless you have at least two other Crit Chance sources already active — the -30% Damage penalty applies to DoT ticks that already have a lower damage floor than GK2 Hipster, making the penalty a pure loss on a meaningful portion of your output',
      'Cryo Grenade clusters and freezes enemies before plasma bursts, converting scatter hits into focused crit chains on the cluster — the freeze window is where the Sharpshooter passive does its best work on this build',
      'At lv18, evaluate whether Volatile Impact Mixture genuinely adds DoT value your loadout lacks, or if you already have burn coverage from Hot Plasma; if Hot Plasma is active, consider a different secondary investment for the final power spike slot',
    ],
    weapons: [
      {
        name: 'Drak-25 Plasma Carbine',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+Fire Rate and +Reload Speed — tightens the plasma burst cycle and keeps crits landing per second',
          },
          {
            level: 12,
            name: 'Hot Plasma',
            verdict: 'take',
            note: '+15% Damage plus Burn DoT on every plasma hit — covers packs between direct crit windows',
          },
          {
            level: 18,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: 'Straight +Damage, +Reload — raises the direct-hit floor that the Sharpshooter crit passive multiplies off of',
          },
        ],
      },
      {
        name: 'Deepcore GK2',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: 'Reliable supplemental damage between DRAK-25 reloads',
          },
          {
            level: 12,
            name: 'High Caliber Rounds',
            verdict: 'take',
            note: '+Damage per bullet; GK2 flex investment for mid-range burst when plasma is reloading',
          },
          {
            level: 18,
            name: 'Lead Wrapped Ammo',
            verdict: 'situational',
            note: '+150% Damage on GK2 is a massive elite-killer button — use during DRAK-25 reload windows on priority targets',
          },
        ],
      },
      {
        name: 'Jury-Rigged Boomstick',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Bigger Mags',
            verdict: 'take',
            note: 'More shells for gap-filling during DRAK-25 reload windows',
          },
          {
            level: 12,
            name: 'High Velocity Bullets',
            verdict: 'take',
            note: '+Range and +Damage on Boomstick; safer for players who prefer not to close melee range',
          },
          {
            level: 18,
            name: 'Thick Boy',
            verdict: 'situational',
            note: 'Point-blank panic burst during a bad reload window',
          },
        ],
      },
      {
        name: 'Cryo Grenade',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Compact Explosives',
            verdict: 'take',
            note: '+Radius; freezes a larger area so plasma bursts land crits on the whole cluster',
          },
          {
            level: 12,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: '+Damage and +Reload — quicker grenade cycle between plasma burst waves',
          },
          {
            level: 18,
            name: 'Gravitational Core',
            verdict: 'take',
            note: 'Pull cluster to one point then freeze — focus plasma bursts into the cluster for back-to-back overkill crit shrapnel chains',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Crit Chance',
        'Damage',
        'Reload Speed',
        'Fire Rate',
        'Crit Damage',
      ],
      avoid: [
        'Potency',
        'Status Effect Damage — DoT ticks already active from Hot Plasma; spending stat budget here instead of Damage is a net loss on direct-hit crits',
        'HP/Armor',
      ],
    },
    artifacts: {
      always: [
        'Energy Bars',
        'Diver\'s Manual',
      ],
      good: [
        'Squint-EE5 (only if Crit Chance already above 45%)',
        'Nitragenic Powder',
        'Pay2Win Console',
      ],
      never: [
        'Chemist Kit — DoT is incidental, not the damage engine',
        'Popup Tripod',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Lock DRAK-25, Gas Rerouting Online',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: DRAK-25 Plasma Carbine > GK2 > Boomstick. DRAK-25 with Gas Rerouting at lv6 is immediately functional — plasma bursts with tight reload loop on the closest target. If DRAK-25 is not offered at lv5, take GK2 and hold until it appears.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'DRAK-25 lv6: Gas Rerouting — +Fire Rate and +Reload Speed tightens the burst cycle immediately. The Sharpshooter passive applies to every direct plasma hit from lv1, so faster cycle means more crits per minute from the very first wave.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Hoard gold. Spend 0–15g max. Pick up Diver\'s Manual if it appears — no downside, all three stats benefit this build. Target ~100g saved by end of Stage 1. Skip artifacts that require condition unlocks (Squint-EE5, Nitragenic Powder) until DRAK-25 is at lv12.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Hot Plasma Breakpoint',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push DRAK-25 to lv12. GK2 at character lv10–12 as a flex secondary — A Little More Oomph! at lv6 keeps it viable between DRAK-25 reloads. Cryo Grenade early provides valuable CC to set up crit clusters regardless of the plasma build\'s lv18 status.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'DRAK-25 lv12: Hot Plasma is strongly preferred over Cold Plasma for Sharpshooter — Burn DoT generates passive kill credit that can trigger overkill shrapnel chains. Storm E-Mag is acceptable if you want pure fire rate over the DoT application.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Now spend. Buy Energy Bars immediately if offered — you level quickly and the damage compounds. Budget ~30g on rerolls to find Crit Chance or Damage upgrades. Save ~120g for Stage 3. Nitragenic Powder is worth buying here if you intend to hoard Nitra.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Full Plasma Loop Online',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'DRAK-25 hits lv18. Evaluate: A Little More Oomph! raises direct-hit floor for crit scaling; Bigger Mags extends burst window per reload. Hot Plasma DoT plus crits are now both live — switch to GK2 as flex for high-priority targets while DRAK-25 reloads.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'DRAK-25 lv18: A Little More Oomph! is the safest pick — straight damage raises the crit multiplier base. Cryo Grenade lv12: A Little More Oomph! for quicker freeze cycling. Stack Crit Chance global cards as they appear — each point raises shrapnel proc rate.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Full spend. Look for Pay2Win Console — every reroll adds permanent damage stacks. Avoid Squint-EE5 unless Crit Chance is already above 45% from other sources; the -30% Damage hits DoT ticks hard. Reroll once if needed to find Energy Bars.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Fill Secondaries',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Level GK2 for a high-damage secondary option. At lv18 GK2 with Lead Wrapped Ammo, the +150% Damage makes it an elite-killer gap-filler during DRAK-25 reload windows — particularly effective on Praetorians that survive the initial plasma burst.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'GK2 lv12: High Caliber Rounds for consistent damage boost. Cryo Grenade lv18: Gravitational Core — cluster then freeze, then open with plasma burst into the pile for maximum overkill-crit shrapnel chains. All global Damage and Crit Chance upgrades are priority.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save ~30g for Stage 5. Complete Energy Bars pairing — BLT Ration Pack if HP is dipping from Energy Bars drain. Consider Nitragenic Powder if Nitra reserve is above 50; pairs with any Crit Chance already accumulated.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Final Push — Crit Everything',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'No new investments. DRAK-25 carry leads; GK2 Lead Wrapped Ammo handles elites during reload windows. Against Dreadnought: Cryo Grenade Gravitational Core to cluster escorts → plasma burst into the pile → shrapnel chains clear adds while Dreadnought takes direct fire.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Take any global Crit Chance, Crit Damage, or Damage cards. Movement Speed is secondary priority — DRAK-25 doesn\'t need precise aim so you can keep moving while firing, which helps Sharpshooter\'s kiting rhythm between reload windows.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend every gold and Nitra. If Squint-EE5 is still available AND Crit Chance is now above 50% from accumulated stat cards, buying it now for Stage 5 still yields some value — overkill crits fire faster at high crit rates. Otherwise skip and buy flat Damage upgrades.',
          },
        ],
      },
    ],
  },
  {
    id: 'survivalist-gk2-blitz',
    name: 'Survivalist GK2 Blitz',
    class: 'Scout',
    subclass: 'Survivalist',
    tier: 'A',
    difficulty: 2,
    passive: '+20% Move Speed, +3 HP Regen/s when above 50% HP — stay mobile, stay alive',
    synopsis: 'Deepcore GK2 with Hipster OC as carry, leaning fully into the Survivalist mobility loop. Hipster\'s high fire rate generates kills fast enough to stay above 50% HP for continuous regen. Move Speed stat is the highest priority — it directly enables HP regen uptime and faster XP collection. Different from sharpshooter-gk2-crit (pure crit focus) because this build invests in mobility artifacts and movement stats to keep the passive live, rather than chasing overkill shrapnel chains.',
    playstyle: 'Constant movement — dash to distant XP orbs, kite swarms back toward your firing line, never let enemies force you to stand still and trade hits. Hipster doubles GK2\'s fire rate so kills happen continuously and the +20% speed means you outrun anything that closes. Above 50% HP the regen ticks passively, removing the need for healing artifacts so those slots go to damage. Pacing is aggressive and fluid: keep circling, keep firing, dash to collect distant resources using the speed advantage.',
    strengths: [
      'Online from lv6 — Hipster GK2 is immediately functional and the Survivalist passive engages from the first wave, giving the build full synergy with zero ramp time',
      'Move Speed priority means you mine faster, collect distant XP orbs other builds miss, and the +3 HP regen above 50% HP is effectively free sustain that frees up artifact slots for damage',
      'A-tier consistency: no all-or-nothing mechanics (no Thick Boy, no Embedded Detonators burst) — just reliable sustained GK2 crit output compounding with movement advantage every single wave',
    ],
    weaknesses: [
      'No late-game power spike to rival Thick Boy mega-shot or Embedded Detonators burst — the build plateaus at sustained fire and relies on mobility and regen to outlast rather than spike-kill elites',
      'If Move Speed drops below the threshold that enables consistent kiting (e.g., Ammo Rig -15% speed with no mitigation), the regen passive turns off and the build loses both its survivability and its damage advantage',
      'Less effective on tight arena maps where the full 15+ meter kiting loops are harder to execute — the build performs best when the stage gives enough open ground to stay in motion',
    ],
    tips: [
      'Dash to collect distant XP orbs between waves rather than waiting for enemies to approach — Survivalist\'s +20% speed means you can retrieve orbs other builds leave behind, and each orb level is a free compounding damage tick from Energy Bars',
      'Move Speed is this build\'s tier-1 stat — every point shortens the kiting loop required to avoid hits, extends the time above 50% HP for regen, and increases mining coverage per stage; prioritize it over Crit Damage in any upgrade choice',
      'Armor Grease is the ideal early artifact: +5% Move Speed plus stacking Dodge Chance while moving — both bonuses are always active for a build that never stops, and the dodge stacks compound with Survivalist\'s natural kiting advantage',
      'BLT Ration Pack raises the Max HP floor, meaning the 50% HP regen threshold activates at a higher HP value — with +80 Max HP the regen triggers in more situations and gives a larger buffer before the passive shuts off under pressure',
      'Unlike sharpshooter-gk2-crit, do NOT prioritize Squint-EE5 here — the -30% Damage penalty hurts output on a build that relies on sustained fire rather than per-crit peaks; invest that artifact slot in mobility or Energy Bars instead',
    ],
    weapons: [
      {
        name: 'Deepcore GK2',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Hipster',
            verdict: 'take',
            note: 'MUST-TAKE — doubles fire rate; kills land continuously which sustains above 50% HP for regen and generates XP orbs to collect at speed',
          },
          {
            level: 12,
            name: 'High Caliber Rounds',
            verdict: 'take',
            note: '+Damage per bullet; partially offsets Hipster\'s per-bullet penalty and raises the value of each crit',
          },
          {
            level: 18,
            name: 'Lead Wrapped Ammo',
            verdict: 'take',
            note: '+150% Damage — massive elite-killer button; fire during a kiting loop at any time, the speed advantage means you\'re already repositioning before the enemy responds',
          },
        ],
      },
      {
        name: 'Nishanka Boltshark X-80',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Cryo Bolt',
            verdict: 'take',
            note: 'Freeze single high-priority targets without stopping your movement loop; CC while you reposition',
          },
          {
            level: 12,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+Reload; faster bolt cycle between mobility dashes',
          },
          {
            level: 18,
            name: 'Bolt Volley',
            verdict: 'situational',
            note: 'Elite burst option — three bolts during a kiting pass on a frozen Praetorian or Oppressor',
          },
        ],
      },
      {
        name: 'Cryo Grenade',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Compact Explosives',
            verdict: 'take',
            note: '+Radius; wider freeze field means you can throw it mid-movement and still catch the chasing pack',
          },
          {
            level: 12,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: '+Damage and +Reload — quicker grenade cycling while constantly moving',
          },
          {
            level: 18,
            name: 'Gravitational Core',
            verdict: 'take',
            note: 'Pull the chasing swarm to one point, freeze, then do a kiting arc around the frozen cluster with Hipster GK2 firing the entire time',
          },
        ],
      },
      {
        name: 'Jury-Rigged Boomstick',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Bigger Mags',
            verdict: 'take',
            note: '+Clip; more shells for gap-filling during GK2 reloads without stopping to swap',
          },
          {
            level: 12,
            name: 'High Velocity Bullets',
            verdict: 'take',
            note: '+Range lets you fire Boomstick without closing melee distance',
          },
          {
            level: 18,
            name: 'Thick Boy',
            verdict: 'situational',
            note: 'Burst panic button while moving — fires the massive single pellet during mid-dash without stopping',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Movement Speed',
        'Damage',
        'Reload Speed',
        'Crit Chance',
        'Fire Rate',
      ],
      avoid: [
        'HP/Armor stacking — regen already handles sustain above 50% HP; armor is redundant if you never get hit',
        'Potency — no DoT in this build',
        'Ammo Rig (-15% Move Speed penalty turns off regen passive without mitigation)',
      ],
    },
    artifacts: {
      always: [
        'BLT Ration Pack',
        'Armor Grease',
        'Energy Bars',
      ],
      good: [
        'Diver\'s Manual',
        'Gold-Tipped Bullets',
        'Pay2Win Console',
      ],
      never: [
        'Popup Tripod — movement is everything; stationary buff never activates',
        'Squint-EE5 — -30% Damage hurts sustained fire output more than the crit bonus recovers on a mobility-first build',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Lock GK2, Hipster Online',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: GK2 > Boomstick > Cryo Grenade. Lock GK2 immediately — Hipster at lv6 is the single overclock that defines this build and it arrives at the first weapon gate. Survivalist passive is already live from character lv1; kills generate regen uptime the moment the first wave hits.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'GK2 lv6: Hipster without hesitation. Fire rate doubles, kill rate increases, regen sustain becomes consistent above 50% HP from wave 1. Do not reroll this overclock for any other option — Hipster is the build identity.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Armor Grease immediately if it appears — +Move Speed and stacking Dodge while moving costs nothing on this build. Save 100g. Mine aggressively using the +20% speed advantage to cover more resource ground per wave than any other Scout subclass.',
          },
        ],
      },
      {
        stage: 2,
        title: 'High Caliber + Move Speed Stack',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push GK2 to lv12 (High Caliber Rounds). Cryo Grenade as secondary — freeze incoming packs while you circle the arena collecting XP orbs. Boltshark Cryo Bolt is a flexible elite-pin option if offered early.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'GK2 lv12: High Caliber Rounds — damage per bullet increases, crit value rises. Each Crit Chance global upgrade card is priority 1 since Hipster\'s high fire rate means each Crit Chance point lands more absolute crits per second.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy BLT Ration Pack — raises the Max HP floor so the 50% regen threshold triggers in more situations. Energy Bars is excellent: you level fast thanks to the speed advantage in collecting orbs. Budget ~30g on Move Speed upgrades, which directly enable regen uptime.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Lead Wrapped Ammo Power Spike',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'GK2 hits lv18: Lead Wrapped Ammo (+150% Damage) is the power spike — on elites and Dreadnought escorts, fire a burst during a kiting loop and the damage is enormous. Switch back to Hipster fire rate mode for trash clearing between elite encounters.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Lead Wrapped Ammo at lv18. Cryo Grenade lv12: A Little More Oomph! for faster CC cycling. Stack Damage and Crit Chance global cards — Hipster fire rate means crit probability per second is already high; every extra Crit Chance point adds meaningful DPS.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Full spend. Gold-Tipped Bullets scales well — Survivalist mines faster, so gold income is naturally higher than other builds. Pay2Win Console: every reroll adds permanent damage stacks. Complete BLT Ration Pack + Energy Bars pairing if not already held.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Fill Secondaries & Artifact Finalize',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Boltshark to lv12 with Cryo Bolt for elite-pinning utility. Cryo Grenade to lv18: Gravitational Core — pull and freeze for the most efficient kiting arc. All primary and secondary kits mostly complete by end of Stage 4.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Boltshark lv12: Gas Rerouting. Cryo Grenade lv18: Gravitational Core. Any global Damage, Move Speed, or Reload Speed upgrades are priority — movement keeps the regen passive live and those three stats all translate directly into wave-clear efficiency.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save ~30g for Stage 5. Complete artifact loadout: BLT Ration Pack + Armor Grease + Energy Bars is the core trio. If Gold-Tipped Bullets appeared and you\'ve been hoarding, it\'s worth adding as a fourth damage multiplier.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Boss — Keep Moving, Keep Firing',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Against Dreadnought: Cryo Grenade Gravitational Core pulls escorts to one spot, freeze, Hipster GK2 clears the pile. Lead Wrapped Ammo bursts on Dreadnought during kiting passes — you never need to stop to fire GK2.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Take all Damage, Move Speed, and Reload Speed global upgrades. Movement Speed upgrades are highest priority — the faster your kiting loops, the more time you spend above 50% HP and the fewer hits you take from Dreadnought ground slams.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Gold-Tipped Bullets: hold maximum gold through boss fight for peak damage stacks. Dump Nitra on artifact rerolls. Survivalist\'s speed advantage means you mined more resources per stage than the average run — use that stockpile to complete the damage artifact trio.',
          },
        ],
      },
    ],
  },
  {
    id: 'survivalist-zhukov-blitz',
    name: 'Survivalist Zhukov Omni Blitz',
    class: 'Scout',
    subclass: 'Survivalist',
    tier: 'A',
    difficulty: 2,
    passive: '+20% Move Speed, +3 HP Regen/s when above 50% HP — stay mobile, stay alive',
    synopsis: 'Zhukov NUK17 with Omni Barrel lv18 OC as carry — Omni Barrel fires in 8 directions simultaneously with +50% Damage and +50% Piercing, turning the Survivalist\'s mobility loop into a spinning death field. Different from survivalist-smg-rush (which is Embedded Detonators burst-on-reload) — this build uses the lv18 Omni Barrel to cover 360-degree swarm clearing while kiting, making the constant movement both offense and defense at once.',
    playstyle: 'Constant aggressive movement — Zhukov\'s 4-directional fire already covers a wide arc, and Omni Barrel at lv18 doubles the coverage to 8 directions. While kiting the swarm in a circle, bullets fire in all directions simultaneously, meaning every step of the kiting arc is both moving away from enemies and firing back into them. Survivalist\'s +20% speed and regen above 50% HP mean the kiting loop sustains indefinitely as long as you don\'t stop. No reload mechanic to exploit — this is pure consistent fire in all directions, all the time.',
    strengths: [
      'Omni Barrel at lv18 fires in 8 directions with +50% Damage and +50% Piercing — combined with Survivalist\'s constant movement, every step of the kiting arc fires into the surrounding swarm without requiring aim',
      'The 360-degree coverage synergizes directly with Survivalist\'s mobility loop: you never need to turn and aim because bullets fire behind, beside, and ahead simultaneously',
      'Online from lv6 with Gas Rerouting — fast reload and high fire rate on the Zhukov means the kiting loop rarely has a gap in output; regen above 50% HP sustains through the consistent chip damage of large swarms',
    ],
    weaknesses: [
      'Weaker against single high-HP elites than Embedded Detonators burst — Omni Barrel distributes damage in 8 directions, so only a fraction of bullets focus on one target; Oppressors and Dreadnought escorts take longer to kill',
      'Omni Barrel\'s diagonal firing directions (NE, NW, SE, SW plus cardinal NS/EW) mean the coverage is wide but not always aligned with a specific elite — compared to Embedded Detonators which is precisely targeted via reload timing',
      'Clip size at base is small; high fire rate means frequent reloads during the kiting arc, and a bad reload timing can let a flanking enemy close the gap before the next clip is live',
    ],
    tips: [
      'Kite in wide circles around the swarm — Omni Barrel\'s 8-direction coverage means the bullets fire into the chasing pack automatically; straight-line kiting is less efficient because it concentrates fire ahead and behind rather than fanning across the cluster',
      'Bigger Mags at lv6 or lv12 doubles clip size from 20 to 40 rounds — at Omni Barrel\'s fire rate this means twice as long before a reload gap exposes you mid-kite; prioritize clip size over pure fire rate upgrades on the Zhukov',
      'Survivalist\'s +20% Move Speed means you mine faster and collect distant XP orbs on the kiting loop — run through resource nodes while circling the swarm rather than stopping; this is the best gold and Nitra income in Scout\'s kit',
      'Unlike Embedded Detonators, this build has no reload-timing exploit — the power comes from continuous fire, so resist the urge to time reloads strategically; just maintain the kiting loop and let Omni Barrel do the work',
      'BLT Ration Pack raises the Max HP floor so the 50% HP regen threshold covers a wider range of incoming chip damage — with Omni Barrel pulling aggro from multiple angles simultaneously, the extra HP buffer gives the regen more room to operate',
    ],
    weapons: [
      {
        name: 'Zhukov NUK17',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+Fire Rate and +Reload Speed — tightens the kiting loop and minimizes the reload gap during constant movement',
          },
          {
            level: 12,
            name: 'Bigger Mags',
            verdict: 'take',
            note: 'STRONGLY PREFERRED — doubles clip size so the continuous firing arc lasts twice as long between reload windows',
          },
          {
            level: 18,
            name: 'Omni Barrel',
            verdict: 'take',
            note: 'MUST-TAKE — fires in 8 directions with +50% Damage and +50% Piercing; every step of the kiting arc fires into the surrounding swarm automatically',
          },
        ],
      },
      {
        name: 'Cryo Grenade',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Compact Explosives',
            verdict: 'take',
            note: '+Radius; throw mid-movement and freeze a wide area to break up a closing pack during a tight kiting moment',
          },
          {
            level: 12,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: '+Damage on Cryo; more freeze uptime between kiting laps',
          },
          {
            level: 18,
            name: 'Gravitational Core',
            verdict: 'take',
            note: 'Pull clustered swarm to one point, freeze, then kite past the pile with Omni Barrel firing in all directions',
          },
        ],
      },
      {
        name: 'Deepcore GK2',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: 'Straight damage on an elite-killing supplemental weapon during Zhukov reload windows',
          },
          {
            level: 12,
            name: 'High Caliber Rounds',
            verdict: 'take',
            note: '+Damage for focused single-target output on elites the Omni Barrel can\'t focus',
          },
          {
            level: 18,
            name: 'Lead Wrapped Ammo',
            verdict: 'situational',
            note: '+150% Damage — GK2 as a burst finisher on Praetorians or Oppressors that survive the kiting arc',
          },
        ],
      },
      {
        name: 'Jury-Rigged Boomstick',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Bigger Mags',
            verdict: 'take',
            note: '+Clip; more shells for close-range emergencies when a flanking elite closes during a reload',
          },
          {
            level: 12,
            name: 'High Velocity Bullets',
            verdict: 'take',
            note: '+Range on Boomstick — keep distance during the kiting loop while still landing shots',
          },
          {
            level: 18,
            name: 'Thick Boy',
            verdict: 'situational',
            note: 'One massive pellet as an emergency elite burst during a Zhukov reload window',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Movement Speed',
        'Damage',
        'Reload Speed',
        'Fire Rate',
        'Crit Chance',
      ],
      avoid: [
        'HP/Armor stacking — regen handles sustain; invest stat points in mobility and damage instead',
        'Potency — no DoT in this build',
        'Popup Tripod — standing still is instant death for this build\'s kiting loop',
      ],
    },
    artifacts: {
      always: [
        'BLT Ration Pack',
        'Energy Bars',
        'Armor Grease',
      ],
      good: [
        'Gold-Tipped Bullets',
        'Pay2Win Console',
        'Diver\'s Manual',
      ],
      never: [
        'Popup Tripod — movement is the core mechanic; this artifact is actively counterproductive',
        'Chemist Kit — no DoT damage to amplify',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Lock Zhukov, Gas Rerouting Online',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: Zhukov NUK17 > GK2 > Cryo Grenade. Zhukov\'s 4-directional fire at lv1 already covers a wide arc — with Survivalist\'s +20% speed you can immediately begin kiting circular loops while bullets fan out. Gas Rerouting at lv6 makes this loop nearly uninterrupted.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Zhukov lv6: Gas Rerouting — +Fire Rate and +Reload Speed minimizes the reload gap in the kiting arc. Survivalist passive is live from the first wave; stay above 50% HP and the regen activates continuously.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Armor Grease early — +Move Speed and Dodge while moving. Save 100g. Mine aggressively on kiting laps — the +20% speed advantage over other classes means you cover more resource nodes per wave without detouring from the combat loop.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Bigger Mags — Extend the Arc',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Zhukov to lv12 for Bigger Mags — doubling the clip is critical for the lv18 Omni Barrel payoff. The longer clip means more rounds are fired in 8 directions per reload window. Cryo Grenade lv6 for emergency pack-breaking when a swarm corners the kiting loop.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Zhukov lv12: Bigger Mags is the recommended choice — the doubled clip is near-mandatory for the Omni Barrel loop to be sustainable. Cryo Grenade lv6: Compact Explosives for wider freeze coverage mid-movement.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy BLT Ration Pack — raises the HP regen threshold and provides buffer for the multi-directional enemy pressure Omni Barrel will attract. Energy Bars is excellent here: XP orb collection speed is high on Survivalist. Budget ~30g on Move Speed or Damage upgrade cards.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Omni Barrel Online — 360-Degree Death Field',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. Zhukov hits lv18: Omni Barrel fires in 8 directions simultaneously with +50% Damage and +50% Piercing. Begin kiting in wide circles immediately — every direction fires into whatever is chasing you. The entire swarm takes damage from a single trigger hold.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Omni Barrel is the build. GK2 lv6: A Little More Oomph! for supplemental elite damage. Cryo Grenade lv12: A Little More Oomph! for faster grenade cycling. Stack Damage global cards — Omni Barrel\'s 8-direction distribution multiplies flat Damage additions across every bullet.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Full spend. Gold-Tipped Bullets scales well — Survivalist\'s speed advantage means higher gold income than average. Pay2Win Console adds permanent damage per reroll. Complete BLT Ration Pack + Energy Bars + Armor Grease trio this stage.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Fill Secondaries',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'GK2 to lv12 for elite single-target damage. Cryo Grenade to lv18 Gravitational Core — pull and freeze large packs before a kiting lap with Omni Barrel. Boomstick as emergency panic button at any level.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'GK2 lv12: High Caliber Rounds. Cryo Grenade lv18: Gravitational Core. Any global Damage, Move Speed, or Reload Speed cards. Movement Speed upgrades are still priority 1 — faster kiting loops mean more Omni Barrel coverage per minute.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save ~30g for Stage 5. Artifact loadout should be BLT Ration Pack + Energy Bars + Armor Grease by end of this stage. If Pay2Win Console is available, it\'s the fourth slot — frequent rerolling is affordable with Survivalist\'s resource income.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Boss — Kite Circles, Fire in All Directions',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Against Dreadnought: Cryo Grenade Gravitational Core clusters escorts, then kite around the frozen pile with Omni Barrel firing into everything. GK2 Lead Wrapped Ammo or High Caliber Rounds for direct Dreadnought fire during focused passes.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Take all Damage, Move Speed, and Reload Speed upgrades. Movement Speed is the final multiplier that makes the kiting loop faster and tighter — Dreadnought slam attacks become easy to outrun at high speed, and regen stays live almost continuously.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend every gold and Nitra. Gold-Tipped Bullets: hoard gold through the boss phase for maximum damage stacks. Survivalist\'s entire run generates above-average resources — dump the surplus into artifact rerolls to complete the damage trio.',
          },
        ],
      },
    ],
  },
  {
    id: 'infiltrator-gk2-burst',
    name: 'Infiltrator GK2 Burst',
    class: 'Scout',
    subclass: 'Infiltrator',
    tier: 'A',
    difficulty: 2,
    passive: '+50% Damage for 3 seconds after moving 15m without stopping — burst window rewards constant repositioning',
    synopsis: 'Deepcore GK2 with Hipster OC as carry, exploiting the Infiltrator burst window with continuous rapid fire rather than timed individual shots. GK2\'s high fire rate dumps many bullets during the +50% window without requiring precise aim timing. Easier to trigger reliably than Boltshark Bolt Volley — no aiming required during burst fire, just keep moving and keep firing. A-tier because the burst window is maintainable for players who find Boltshark\'s timing too demanding.',
    playstyle: 'Constant movement — dash to trigger the 15m burst window, then hold GK2 fire during the 3-second window while continuing to strafe. Hipster doubles fire rate so many bullets land during each window. Unlike Boltshark, you do not need to stop or aim precisely — keep strafing, keep firing, and let the burst window amplify every bullet in the clip. The rhythm is: move 15m → burst activates → strafe while firing GK2 into the swarm → dash again to reset window → repeat. Cryo Grenade freezes a cluster so the burst window can be fully dumped into a stationary target.',
    strengths: [
      'Easier to maintain the burst window than Boltshark Cryo Burst — GK2 fires without precise aim, so you can strafe continuously while the +50% window amplifies every bullet rather than timing individual high-precision shots',
      'Hipster\'s high fire rate means many bullets land during each 3-second window — even at GK2\'s lower per-bullet ceiling compared to Boltshark, the volume of crits during a burst window generates consistent overkill shrapnel procs',
      'Online from lv6 — Hipster OC arrives at the first weapon gate and the Infiltrator passive is live from character lv1; the build has full synergy from the first wave with zero ramp time',
    ],
    weaknesses: [
      'Lower single-hit ceiling than Boltshark Bolt Volley — three simultaneous bolts at +50% is a higher single-trigger spike than a burst of GK2 bullets; the GK2 version accumulates damage over the window rather than front-loading it',
      'Stopping to aim or collect resources resets the burst window — the main execution requirement is maintaining movement while still landing shots on targets, which is harder on maps with many terrain obstacles',
      'Ammo hungry: Hipster\'s high fire rate drains the GK2 clip quickly, and a reload during the burst window wastes the remaining window time; clip management is important for maximizing burst window efficiency',
    ],
    tips: [
      'DO NOT stop to aim when GK2 is active during the burst window — keep strafing at all times; GK2\'s burst pattern fires automatically toward the nearest target and does not require precise aiming, so stopping movement only wastes the burst window without improving accuracy',
      'Movement Speed upgrades are tier-1 priority for Infiltrator because faster speed shortens the time to travel 15m, meaning more burst windows per minute — a 10% move speed increase translates directly to more DPS cycles per wave',
      'Cryo Grenade gives you a stationary target during the burst window — freeze a pack, trigger the burst by dashing 15m, then open fire while continuing to strafe around the frozen cluster; the freeze prevents the cluster from chasing during the window',
      'Unlike infiltrator-cryo-burst, this build does not require Squint-EE5 as a mandatory artifact — the distributed GK2 burst volume makes Energy Bars and Diver\'s Manual a more reliable damage foundation than the conditional crit bonus',
      'Reload immediately after the burst window closes, not during — emptying the clip during the window maximizes bullets landing at +50%; the reload gap is dead time anyway so take it after the window expires rather than wasting window time to top up',
    ],
    weapons: [
      {
        name: 'Deepcore GK2',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Hipster',
            verdict: 'take',
            note: 'MUST-TAKE — doubles fire rate; more bullets land during each 3-second burst window without needing to aim',
          },
          {
            level: 12,
            name: 'High Caliber Rounds',
            verdict: 'take',
            note: '+Damage per bullet; raises the value of each individual bullet fired during the burst window',
          },
          {
            level: 18,
            name: 'Lead Wrapped Ammo',
            verdict: 'take',
            note: '+150% Damage — devastating burst during the window on elites; fire one burst during the window for massive single-target output',
          },
        ],
      },
      {
        name: 'Cryo Grenade',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Compact Explosives',
            verdict: 'take',
            note: '+Radius; throw while moving to catch a wider swarm cluster, then dash 15m to trigger burst and fire into the frozen pile',
          },
          {
            level: 12,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: '+Damage and +Reload — faster grenade cycling so freeze is available every burst window',
          },
          {
            level: 18,
            name: 'Gravitational Core',
            verdict: 'take',
            note: 'Pull the swarm to one point before freezing — then trigger burst window by dashing, fire GK2 Hipster into the frozen cluster for maximum bullet-per-burst-window efficiency',
          },
        ],
      },
      {
        name: 'Nishanka Boltshark X-80',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Cryo Bolt',
            verdict: 'take',
            note: 'Single-target freeze on an elite mid-dash — freeze while moving so you arrive at the burst window with a frozen target ready',
          },
          {
            level: 12,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+Reload; faster bolt availability between burst windows',
          },
          {
            level: 18,
            name: 'Bolt Volley',
            verdict: 'situational',
            note: 'Three simultaneous bolts during the burst window — situational elite spike if GK2 reload forces a weapon swap mid-window',
          },
        ],
      },
      {
        name: 'Jury-Rigged Boomstick',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Bigger Mags',
            verdict: 'take',
            note: '+Clip; more shells during GK2 reload windows',
          },
          {
            level: 12,
            name: 'High Velocity Bullets',
            verdict: 'take',
            note: '+Range so Boomstick can fire mid-burst-window without closing melee distance',
          },
          {
            level: 18,
            name: 'Thick Boy',
            verdict: 'situational',
            note: 'Single massive pellet — useful as a burst finisher during the window if an elite is low HP',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Movement Speed',
        'Damage',
        'Crit Chance',
        'Reload Speed',
        'Crit Damage',
      ],
      avoid: [
        'HP/Armor — mobility avoidance is the survival tool, not tanking',
        'Potency — no DoT in this build',
        'Popup Tripod — standing still resets the burst window and destroys the build',
      ],
    },
    artifacts: {
      always: [
        'Energy Bars',
        'Diver\'s Manual',
        'Armor Grease',
      ],
      good: [
        'Pay2Win Console',
        'Nitragenic Powder',
        'Squint-EE5 (if Crit Chance above 45%)',
      ],
      never: [
        'Popup Tripod — movement resets are the entire mechanic; never stop moving',
        'Chemist Kit — no DoT damage in this build',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Lock GK2, Learn the Burst Window',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: GK2 > Boomstick > Cryo Grenade. Lock GK2 immediately — Hipster at lv6 doubles fire rate and turns the burst window into a multi-bullet spray. Start practicing the 15m movement pattern immediately: dash past enemies, turn, and fire while still moving. The window is 3 seconds; Hipster fills it with bullets.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'GK2 lv6: Hipster without hesitation. Infiltrator passive applies from lv1 — every 15m of continuous movement already grants +50% Damage. Hipster makes the GK2 fire fast enough to maximize bullets in that window without any aim adjustment.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Armor Grease if it appears — +Move Speed and Dodge while moving shortens the 15m threshold travel time and adds survivability during the burst window approach dash. Save 100g. Prioritize Move Speed stat cards above all other upgrades this stage.',
          },
        ],
      },
      {
        stage: 2,
        title: 'High Caliber + Burst Window Consistency',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push GK2 to lv12 (High Caliber Rounds). Cryo Grenade lv6 for freeze setup — throw before triggering the burst window so the frozen cluster is waiting when the +50% activates. Boltshark Cryo Bolt as a flex elite-freeze option if offered.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'GK2 lv12: High Caliber Rounds raises per-bullet damage, increasing the value of each hit during the burst window. Cryo Grenade lv6: Compact Explosives. Each Crit Chance global upgrade is priority — Hipster fire rate means crits land multiple times per window.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Energy Bars is the ideal Stage 2 purchase — movement means fast XP orb collection and each level adds +1% Damage. Diver\'s Manual if available — no opportunity cost. Budget ~30g on Move Speed and Damage upgrades. Save 120g for Stage 3.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Lead Wrapped Ammo Power Spike',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'GK2 hits lv18: Lead Wrapped Ammo. During the burst window, a +150% Damage burst fires at +50% Infiltrator bonus simultaneously — the combined multiplier on elite targets is massive. Fire the burst window specifically into Oppressors and Praetorians.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Lead Wrapped Ammo at lv18. Cryo Grenade lv12: A Little More Oomph! for faster CC cycling during burst window setups. Stack Damage and Crit Chance global cards — every point amplifies the multiply effect during the burst window.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Full spend. Pay2Win Console: each reroll adds permanent damage stacks that compound with the burst window multiplier. Complete Energy Bars + Diver\'s Manual pairing. Armor Grease if not yet held — Move Speed shortens burst window trigger time.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Fill Secondaries & Finalize',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Cryo Grenade to lv18: Gravitational Core — pull and freeze for the optimal burst window target setup. Boltshark lv12: Cryo Bolt + Gas Rerouting for elite single-freeze utility. All primary and secondary kits mostly complete by end of Stage 4.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Cryo Grenade lv18: Gravitational Core. Boltshark lv12 Gas Rerouting. All global Damage, Move Speed, and Crit Chance upgrade cards are priority. Move Speed is still tier-1 — each point shortens burst window trigger time and increases windows per minute.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save ~30g for Stage 5. Complete artifact loadout — Energy Bars + Armor Grease + Diver\'s Manual is the recommended core trio. Pay2Win Console is the fourth slot if you\'ve been rerolling actively. Nitragenic Powder if hoarding Nitra.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Boss — Never Stop Moving',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Against Dreadnought: Cryo Grenade Gravitational Core clusters escorts, then trigger burst window by dashing, fire GK2 Lead Wrapped Ammo into frozen cluster. Never stop moving while firing — the Dreadnought is slow and a moving target with burst-window GK2 outpaces its attack patterns.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Take all Damage, Move Speed, and Crit Chance global upgrades. Movement Speed is still the highest-priority stat for Infiltrator even at Stage 5 — faster movement means more burst windows per minute and a higher average DPS multiplier on the boss.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Reroll for any missing artifact in the core trio. Gold-Tipped Bullets as a damage bonus if gold has been hoarded — Infiltrator\'s mobility means you collected resources efficiently throughout the run.',
          },
        ],
      },
    ],
  },
  {
    id: 'infiltrator-cryo-zhukov',
    name: 'Infiltrator Zhukov Spray',
    class: 'Scout',
    subclass: 'Infiltrator',
    tier: 'B',
    difficulty: 3,
    passive: '+50% Damage for 3 seconds after moving 15m without stopping — burst window rewards constant repositioning',
    synopsis: 'Zhukov NUK17 as carry with the Infiltrator burst window. The +50% damage window applies to Zhukov\'s 4-directional spray, but Zhukov\'s spread means only a fraction of bullets focus on a single target during the window. B-tier because the burst window activation requires movement that conflicts with Zhukov\'s optimal mid-range distance, and the Zhukov clip runs out faster than the window duration — creating wasted burst window time on reload. Functional but the precision advantage of Infiltrator\'s kit is underutilized.',
    playstyle: 'Trigger the 15m burst window by dashing, then fire Zhukov spray during the 3-second window — bullets scatter in 4 diagonal directions at +50% damage. The difficulty is that Zhukov\'s diagonal firing pattern spreads output wide rather than concentrating it on one target, which makes the burst window less impactful against single elites. Best against dense swarms where multiple bullets find targets simultaneously. The build works but requires more mechanical coordination than GK2 burst or Boltshark burst for a lower peak output in most situations.',
    strengths: [
      'Omni Barrel at lv18 converts the burst window from a 4-direction spray into an 8-direction field — combined with the +50% window, every step fires into the surrounding swarm at bonus damage; AoE output against large swarms is genuinely good',
      'Zhukov\'s fast reload (1 second base) means reload gaps during the burst window are shorter than GK2 — burst window time wasted on reload is minimized compared to slower-reloading weapons',
      'Gas Rerouting at lv6 pushes reload to near-instant with Zhukov\'s already-fast reload time, allowing multiple clip cycles within a single burst window on a high-fire-rate run',
    ],
    weaknesses: [
      'B-tier: Zhukov\'s diagonal spray means bullets scatter wide during the burst window — against a single elite target only a fraction of bullets connect, wasting most of the +50% bonus output versus what GK2 or Boltshark would deliver in the same window',
      'Zhukov\'s small base clip (20 rounds) runs out quickly at high fire rate — the burst window is 3 seconds but a full Zhukov clip empties in roughly 1 second at Gas Rerouting fire rate, meaning the remaining window time is idle reload unless Bigger Mags is taken',
      'The build requires constant movement to trigger burst windows while simultaneously managing Zhukov\'s multi-directional fire — higher execution complexity than GK2 burst with lower output ceiling; experienced players typically prefer infiltrator-gk2-burst for similar effort',
    ],
    tips: [
      'Omni Barrel at lv18 is the build-defining overclock for this specific build — without it, the 4-directional Zhukov spray wastes too much of the burst window on directions that miss; Omni Barrel\'s 8-direction coverage means at least some bullets find targets in any position',
      'Bigger Mags at lv12 is nearly mandatory — it doubles the clip to 40 rounds, which takes roughly 2–3 seconds to empty at Gas Rerouting fire rate; this fills the entire 3-second burst window rather than leaving dead reload time',
      'Cryo Grenade freezes a cluster in front of you — trigger the burst window by dashing past the cluster, then turn and fire Zhukov into the frozen pile; the stationary target means the diagonal spray hits multiple enemies in the cluster rather than scattering into empty space',
      'This build plays similarly to survivalist-zhukov-blitz but the burst window mechanic means stopping even briefly resets the +50% bonus — unlike the Survivalist passive which just requires staying above 50% HP, Infiltrator demands uninterrupted movement; be especially careful not to pause to mine or collect orbs mid-window',
      'Movement Speed is the highest-priority stat even more than on other Infiltrator builds — faster movement shortens the 15m trigger distance, but for Zhukov specifically, speed also keeps you far enough from enemies that the diagonal spray fires into the pack rather than into melee range where accuracy is irrelevant',
    ],
    weapons: [
      {
        name: 'Zhukov NUK17',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+Fire Rate and +Reload Speed — near-instant reload means less burst window time lost to the reload gap',
          },
          {
            level: 12,
            name: 'Bigger Mags',
            verdict: 'take',
            note: 'STRONGLY PREFERRED — doubles clip to 40 rounds; fills the entire 3-second burst window rather than hitting empty clip mid-window',
          },
          {
            level: 18,
            name: 'Omni Barrel',
            verdict: 'take',
            note: 'BUILD-DEFINING for this build — fires in 8 directions with +50% Damage; without it the 4-direction spray wastes too much burst window time on misses',
          },
        ],
      },
      {
        name: 'Cryo Grenade',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Compact Explosives',
            verdict: 'take',
            note: '+Radius; throw mid-dash before triggering the burst window — wider freeze catches more of the chasing pack',
          },
          {
            level: 12,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: '+Damage and +Reload on grenade; faster CC cycling so freeze is available every burst window',
          },
          {
            level: 18,
            name: 'Gravitational Core',
            verdict: 'take',
            note: 'Pull clustered swarm to one point, freeze, then trigger burst window by dashing past; fire Zhukov Omni Barrel into the frozen pile from multiple angles',
          },
        ],
      },
      {
        name: 'Deepcore GK2',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: 'Supplemental single-target damage when Zhukov\'s spray pattern misses elites',
          },
          {
            level: 12,
            name: 'High Caliber Rounds',
            verdict: 'take',
            note: '+Damage for focused elite kills; GK2 handles what Zhukov\'s spray cannot concentrate on',
          },
          {
            level: 18,
            name: 'Lead Wrapped Ammo',
            verdict: 'situational',
            note: '+150% Damage on GK2 — fire during burst window as a focused elite finisher when Zhukov spray isn\'t concentrating on target',
          },
        ],
      },
      {
        name: 'Nishanka Boltshark X-80',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Cryo Bolt',
            verdict: 'take',
            note: 'Single-target freeze during a movement dash — freeze mid-approach so the burst window activates into a frozen elite',
          },
          {
            level: 12,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+Reload; faster bolt cycle between burst window triggers',
          },
          {
            level: 18,
            name: 'Bolt Volley',
            verdict: 'situational',
            note: 'Three simultaneous bolts during the burst window — use when Zhukov reloads mid-window to avoid wasting remaining window time',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Movement Speed',
        'Damage',
        'Reload Speed',
        'Fire Rate',
        'Crit Chance',
      ],
      avoid: [
        'HP/Armor — mobility avoidance is the survival mechanism',
        'Potency — no DoT in this build',
        'Popup Tripod — stopping resets burst window; actively harmful',
      ],
    },
    artifacts: {
      always: [
        'Energy Bars',
        'Armor Grease',
        'Diver\'s Manual',
      ],
      good: [
        'Pay2Win Console',
        'BLT Ration Pack',
        'Gold-Tipped Bullets',
      ],
      never: [
        'Popup Tripod — standing still destroys the burst window mechanic',
        'Chemist Kit — no DoT damage source',
        'Squint-EE5 — Zhukov\'s scattered bullets make the crit ceiling lower than GK2 or Boltshark; the -30% Damage penalty hurts more than the bonus recovers',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Lock Zhukov, Begin Movement Training',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: Zhukov NUK17 > GK2 > Cryo Grenade. Lock Zhukov immediately — Gas Rerouting at lv6 makes the already-fast Zhukov reload nearly instant, and the burst window is live from character lv1. Start practicing 15m movement arcs immediately; the burst window training is the build\'s entire learning curve.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Zhukov lv6: Gas Rerouting — near-instant reload minimizes burst window dead time. The Infiltrator passive is live from lv1 but the burst window is only 3 seconds and Zhukov empties fast — minimizing reload gaps is critical even before Bigger Mags arrives.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Armor Grease — +Move Speed shortens 15m trigger time and stacking Dodge while moving is free survivability for a build that must keep moving constantly. Save 100g. Prioritize Move Speed stat upgrades above all others — the 15m threshold shortens proportionally.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Bigger Mags — Fill the Burst Window',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Zhukov to lv12 (Bigger Mags). Without a doubled clip, the burst window runs out before the Zhukov clip does in reverse — the 20-round clip empties in ~1 second at Gas Rerouting fire rate, leaving 2 seconds of burst window wasted on reload. Bigger Mags fills the full window.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Zhukov lv12: Bigger Mags is the recommended overclock — a doubled clip means the entire 3-second burst window is spent firing rather than reloading. Cryo Grenade lv6: Compact Explosives for wider freeze. Cryo Bolt on Boltshark if offered as flex.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Energy Bars — movement means fast XP orb collection and the damage compounds per level. BLT Ration Pack provides HP buffer since Zhukov\'s spray pattern sometimes invites enemies closer than comfortable. Budget ~30g on Move Speed upgrades. Save 120g for Stage 3.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Omni Barrel Online — 8-Direction Burst',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. Zhukov hits lv18: Omni Barrel fires in 8 directions with +50% Damage and +50% Piercing simultaneously. During the burst window (+50% from Infiltrator), both multipliers stack — every bullet in all 8 directions fires at doubled effective damage. Immediately begin using circular kiting arcs to maximize coverage.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Omni Barrel at lv18 is the build. Cryo Grenade lv12: A Little More Oomph! for faster CC cycling to set up frozen targets for each burst window. Stack Damage global cards — Omni Barrel\'s 8-direction distribution multiplies every flat Damage addition across all bullets.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Full spend. Pay2Win Console: rerolls add permanent damage stacks that compound with both the Infiltrator burst window and Omni Barrel multipliers. Complete Energy Bars + Armor Grease + Diver\'s Manual trio this stage if not already held.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Fill Secondaries',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'GK2 to lv12 for focused single-target damage on elites that Zhukov\'s spray can\'t concentrate on. Cryo Grenade to lv18: Gravitational Core for burst window setup. Boltshark Cryo Bolt as a mid-dash elite freeze tool.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'GK2 lv12: High Caliber Rounds. Cryo Grenade lv18: Gravitational Core. All global Damage, Move Speed, and Reload Speed upgrade cards. Movement Speed is still the top priority stat — faster movement triggers more burst windows per minute.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save ~30g for Stage 5. Artifact loadout should be complete: Energy Bars + Armor Grease + Diver\'s Manual. Add Pay2Win Console or Gold-Tipped Bullets as the fourth slot depending on whether you\'ve been rerolling or hoarding gold.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Boss — Constant Movement, Omni Fire',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Against Dreadnought: Cryo Grenade Gravitational Core clusters escorts, trigger burst window by dashing 15m, fire Zhukov Omni Barrel into the frozen cluster. GK2 High Caliber Rounds for direct Dreadnought fire when Zhukov reloads. Never stop — burst window reset during boss is the single biggest DPS loss.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Take all Damage, Move Speed, and Reload Speed global upgrades. Zhukov reloads fast but Omni Barrel\'s wider arc means Move Speed is still the top priority — faster movement triggers more burst windows per minute and keeps you far enough from Dreadnought slam attacks.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Reroll for any missing artifact in the core trio. Gold-Tipped Bullets if gold has been hoarded — Infiltrator movement generates solid resource income over a full run. Dump remaining Nitra on final rerolls.',
          },
        ],
      },
    ],
  },
  {
    id: 'interrogator-cryo-cannon-dot',
    name: 'Interrogator Cryo Cannon DoT',
    class: 'Driller',
    subclass: 'Interrogator',
    tier: 'B',
    difficulty: 2,
    passive: '+100% Status Effect Damage, -30% Direct Damage — every burn tick deals double; direct shots are weak by design',
    synopsis: 'Interrogator run using Cryo Cannon\'s Frostburn OC to trigger fire DoT from cold damage. Interrogator doubles every burn tick, but Cryo Cannon\'s stack generation is slower than Wave Cooker\'s Nano Waves — the build is functional but doesn\'t feel complete until lv18. Subata 120 with Acid Dipped Tips adds supplemental acid DoT to the mix.',
    playstyle: 'Apply continuous Cryo Cannon beams to enemies — Frostburn adds a Burn status effect on top of the cold damage, and Interrogator doubles every fire tick. Your output comes from maintaining Cryo Cannon fire at all times rather than burst play. Subata 120 sprays Acid Dipped Tips from behind you as a supplemental DoT layer. The first 12 levels feel sluggish because burn stack generation is slow without Nano Waves; push through to lv18 where Spliced Emitter dramatically increases beam count and coverage. Kite in wide arcs to stay in mid-range for Cryo Cannon\'s effective range, using Cryo slowdowns to stay safe during repositioning.',
    strengths: [
      'Cryo Cannon\'s slow effect gives Interrogator breathing room that faster fire weapons lack — enemies arrive slower and burn longer before reaching you',
      'Frostburn creates simultaneous cold and fire stacking; Interrogator\'s passive doubles every fire tick regardless of which DoT source applied it',
      'Subata 120 fires behind the player, applying acid DoT to enemies in pursuit without requiring aim — adds passive status damage output while you focus on Cryo Cannon',
    ],
    weaknesses: [
      'Burn stack generation is significantly slower than Wave Cooker\'s Nano Waves — the build doesn\'t feel strong until lv18 and struggles in Stages 1–2 compared to the S/A-tier Interrogator variants',
      'Fire DoT cannot crit; Squint-EE5, Crit Chance, and Crit Damage stats are dead draws that compound the -30% direct damage penalty for no benefit',
      'Cryo Cannon\'s limited range means you must stay closer to enemies than other Interrogator builds, increasing damage taken',
    ],
    tips: [
      'Chemist Kit is a mandatory first pick — grab it immediately regardless of stage. The +15% Status Effect Damage and Potency apply to every Frostburn tick and every Acid DoT tick, compounding over the whole run',
      'Frostburn is a balanced OC unlocked at lv6 or lv12 — unlike the S-tier Wave Cooker build where Nano Waves is the lv12 power spike, your main spike is Spliced Emitter at lv18 which adds +75% range and damage',
      'Subata 120 shoots backwards relative to player movement — kite away from enemies and let it spray Acid Dipped Tips into the pursuing pack; you apply DoT without ever turning around',
      'Cryo slowdown buys time while Frostburn ticks — use the slowed state to reposition and reapply beams from a better angle rather than trying to burst down slowed targets directly',
      'Never take Squint-EE5: fire DoT cannot crit, so +100% Crit Damage never fires, and the -30% Direct Damage stacks on top of Interrogator\'s built-in -30% for a total of -51% direct damage — a pure loss',
    ],
    weapons: [
      {
        name: 'Cryo Cannon',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'More Beams',
            verdict: 'take',
            note: '+1 beam doubles beam count early — more simultaneous enemies in the Frostburn DoT, more total fire ticks for Interrogator to double',
          },
          {
            level: 12,
            name: 'Frostburn',
            verdict: 'take',
            note: 'MUST-TAKE — +15% Damage and adds Burn status effect to cold hits. This is the core mechanic of the build: Cryo Cannon now triggers fire DoT that Interrogator doubles',
          },
          {
            level: 18,
            name: 'Spliced Emitter',
            verdict: 'take',
            note: '+75% Range, +75% Damage, +75% Potency — massive late-game power spike; significantly increases Frostburn tick rate and coverage area',
          },
        ],
      },
      {
        name: 'Subata 120',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Acid Dipped Tips',
            verdict: 'take',
            note: 'Converts Subata damage to acid type — adds a second DoT source that Interrogator doubles; fires behind you passively while you run',
          },
          {
            level: 12,
            name: 'Bigger Mags',
            verdict: 'take',
            note: '+100% clip size means far fewer reloads; the Subata fires continuously behind you for longer stretches without interrupting your Cryo Cannon focus',
          },
          {
            level: 18,
            name: 'Akimbo',
            verdict: 'situational',
            note: '+25% Fire Rate and Potency, fires in opposite direction simultaneously — doubles acid application rate; take if available but Gas Rerouting at lv18 is also acceptable for sustained acid coverage',
          },
        ],
      },
      {
        name: 'CRSPR Flamethrower',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Bigger Tanks',
            verdict: 'take',
            note: '+100% Lifetime means a longer burn coverage window when switching off Cryo Cannon; a secondary fire source when Cryo Cannon is reloading',
          },
          {
            level: 12,
            name: 'Sticky Fuel',
            verdict: 'take',
            note: 'Creates persistent ground fire that applies burn stacks without holding the beam; pre-burn chokepoints and retreat through them while Cryo Cannon reloads',
          },
          {
            level: 18,
            name: 'Even More Beams',
            verdict: 'situational',
            note: '+3 beams dramatically widens fire cone — useful in dense hordes but Spliced Emitter on Cryo Cannon already widens primary coverage; take if offered',
          },
        ],
      },
      {
        name: 'Cryo Grenade',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Compact Explosives',
            verdict: 'take',
            note: '+radius extends the freeze burst — creates a wider slow field that buys time while Cryo Cannon applies Frostburn DoT to clustered targets',
          },
          {
            level: 12,
            name: 'Frost Nova',
            verdict: 'take',
            note: 'Bigger freeze burst; more CC coverage between Cryo Cannon reloads and during the early game before Spliced Emitter comes online',
          },
          {
            level: 18,
            name: 'Gravitational Core',
            verdict: 'situational',
            note: 'Pulls enemies to impact before freezing — cluster setup for Cryo Cannon\'s Frostburn to hit a concentrated group and apply multiple simultaneous DoT stacks',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Status Effect Damage',
        'Potency',
        'Reload Speed',
        'Damage',
      ],
      avoid: [
        'Crit Chance — fire and acid DoTs cannot crit',
        'Crit Damage — same reason',
        'Direct Damage only upgrades — the -30% penalty makes direct damage a losing investment',
      ],
    },
    artifacts: {
      always: [
        'Chemist Kit',
        'BLT Ration Pack',
        'Energy Bars',
      ],
      good: [
        'Diver\'s Manual',
        'Turbo Encabulator',
      ],
      never: [
        'Squint-EE5 — DoTs cannot crit; stacks -60% direct damage total on Interrogator',
        'Nitragenic Powder — Crit Chance is wasted on this build',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Cold Start',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Take Cryo Cannon as your first weapon — it is the carry and the DoT source. Add Subata 120 as second weapon for its passive acid DoT. Early game is weak; the Interrogator -30% direct damage hurts before Frostburn is active, but Cryo slowdown reduces incoming damage.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Cryo Cannon lv6: More Beams — doubles beam count, more enemies getting cold+Frostburn DoT. Avoid Impact Punch (direct damage) since the Interrogator penalty makes direct damage a losing investment.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Chemist Kit is the mandatory first artifact — buy immediately if it appears. Prioritize Status Effect Damage stat upgrades. Keep 20g reserve for Stage 2. The build is underpowered here; focus on survivability stats until Frostburn is online.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Frostburn Online',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Cryo Cannon to lv12 for Frostburn — this is the build\'s core activation. Add CRSPR Flamethrower as a supplemental burn source. Subata 120 Acid Dipped Tips should already be active from Stage 1.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Cryo Cannon lv12: MUST take Frostburn — this activates the entire build mechanic. Subata lv6: Acid Dipped Tips. CRSPR lv6: Bigger Tanks for extended coverage.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Second Chemist Kit stacks additively — if it appears, take it. BLT Ration Pack is important here to offset Energy Bars HP drain. Status Effect Damage upgrades remain the primary stat priority.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Multi-DoT Coverage',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Subata to lv12 for Bigger Mags — continuous acid DoT behind you without constant reloads. Buy Cryo Grenade for CC support. CRSPR Sticky Fuel at lv12 creates persistent fire zones to supplement Frostburn ticks.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Subata lv12: Bigger Mags. CRSPR lv12: Sticky Fuel — persistent fire zones ensure Interrogator keeps doubling ticks even when repositioning. Cryo Cannon is heading toward lv18 Spliced Emitter.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Full Status Effect Damage spend. Energy Bars is strong here — every level adds damage scaling independently of crit. Turbo Encabulator worth taking at 4+ OCs.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Spliced Emitter Power Spike',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Cryo Cannon hits lv18 — Spliced Emitter adds +75% Range, Damage, and Potency. This is the build\'s version of Thick Boy: suddenly your coverage is dramatically wider and your Frostburn ticks hit harder. Cryo Grenade toward lv12 for extended CC windows.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Cryo Cannon lv18: Spliced Emitter — mandatory power spike. CRSPR lv18: Even More Beams if CRSPR is leveled that far. Cryo Grenade lv12 Frost Nova for wider CC bursts.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 30g for Stage 5. Diver\'s Manual is excellent at any point and has no downsides. BLT Ration Pack is important with Energy Bars running. Dump remaining gold on Status Effect Damage and Potency.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Dreadnought Burn Loop',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Pre-burn the Dreadnought arena with CRSPR Sticky Fuel before engaging. Keep Cryo Cannon beams on the Dreadnought continuously — Frostburn ticks double constantly. Subata Acid DoT fires passively during kite phases. Cryo Grenade for emergency freezes.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Status Effect Damage and Potency upgrades are the final priority. Reload Speed keeps Cryo Cannon uptime high. Avoid Crit or direct damage upgrades entirely.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything on Status Effect Damage. Energy Bars peaks here. Gold-Tipped Bullets is strong if you have maintained a gold reserve. Complete the Chemist Kit double-stack if still missing.',
          },
        ],
      },
    ],
  },
  {
    id: 'strong-armed-cryo-axe',
    name: 'Strong Armed Cryo Axe',
    class: 'Driller',
    subclass: 'Strong Armed',
    tier: 'A',
    difficulty: 2,
    passive: '+20% Range for [THROWABLE] weapons — Impact Axe, Leadburster, and grenades all benefit; throw from cover and reach targets earlier',
    synopsis: 'Strong Armed using Impact Axe as the primary carry paired with Cryo Grenade for freeze-then-throw combos. +20% throwable range lets you hit targets from safe distance or behind cover. Simpler to execute than the Leadburster Bomb and comes online at lv6, but peak damage ceiling is lower. Reliable for Hazard 3 and a strong choice on Hazard 4.',
    playstyle: 'Lead every elite and Dreadnought encounter with a Cryo Grenade freeze, then throw Impact Axe from extended range into the frozen cluster. The lv18 Colossal Twinblade makes each axe throw a high-damage burst; the axes return after hitting, so your supply is continuous as long as you stay mobile. Strong Armed\'s +20% range means you can throw from behind cover — learn cover geometry on each stage and exploit it. For trash mobs, Subata 120 or CRSPR Flamethrower handles cleanup between axe throws. Positioning is the skill: the farther you throw, the safer you are.',
    strengths: [
      '+20% throwable range lets you execute the freeze-then-axe combo from outside normal enemy aggro range — significantly reduces damage taken compared to close-quarters Driller builds',
      'Impact Axe comes online at lv6 and is effective immediately; the build does not need a lv18 OC to function, making it more consistent in runs where levels come slowly',
      'Cryo Grenade freeze is a hard CC that both sets up Impact Axe throws and buys time for reloads — the combination provides safety and damage in the same action',
    ],
    weaknesses: [
      'Lower peak damage ceiling than Leadburster Bomb — Colossal Twinblade Impact Axe hits hard but cannot match the Cluster Leadburster + Penetrating Projectiles burst at full combo',
      'Axe throws have a visual landing indicator and retrieval delay — axes stuck in a wall or distant target are temporarily unavailable, creating brief weapon gaps against fast or swarming enemies',
      'No DoT output means the build relies entirely on direct hit damage; enemies that survive the freeze+axe combo require a pivot to the secondary weapon while awaiting axe return',
    ],
    tips: [
      'Cryo Grenade first, then throw Impact Axe into the frozen cluster from behind cover — Strong Armed\'s extra range means you can stay farther back than the grenade\'s throw distance suggests',
      'Lightweight Alloy OC at lv6 adds +50% Weapon Range on top of Strong Armed\'s passive +20%, giving your Impact Axe nearly double base throw range — use it to hit targets across the entire screen',
      'Colossal Twinblade at lv18 adds +125% Damage and +75% Explosion Radius — the axe becomes a miniature bomb; throw it into a frozen cluster and the explosion hits every frozen enemy simultaneously',
      'Gold-Tipped Bullets rewards hoarding gold rather than spending it on rerolls — the build is not reliant on finding specific overclocks, so let gold accumulate for the damage bonus',
      'Against the Dreadnought: freeze it with Cryo Grenade, throw from maximum range with Colossal Twinblade, and retrieve the axes while it\'s still frozen. Repeat the cycle — each full freeze window is roughly 2–3 throws',
    ],
    weapons: [
      {
        name: 'Impact Axe',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Lightweight Alloy',
            verdict: 'take',
            note: '+50% Weapon Range stacks with Strong Armed\'s +20% passive — throws reach across the full screen. Longer range = more time before enemies arrive at your position after the throw',
          },
          {
            level: 12,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: '+15% Damage and +25% Reload Speed — faster axe retrieval and more damage on each throw; straightforward power increase at the mid-game level gate',
          },
          {
            level: 18,
            name: 'Colossal Twinblade',
            verdict: 'take',
            note: 'MUST-TAKE — +125% Damage and +75% Explosion Radius. The axe becomes a bomb; thrown into a frozen cluster the explosion damages every enemy in radius. The build\'s primary power spike',
          },
        ],
      },
      {
        name: 'Cryo Grenade',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Compact Explosives',
            verdict: 'take',
            note: '+radius on freeze — wider freeze bubble means Impact Axe explosion affects more enemies simultaneously; essential for multi-target combos',
          },
          {
            level: 12,
            name: 'Frost Nova',
            verdict: 'take',
            note: 'Bigger freeze burst; more enemies frozen per grenade means more targets for each Colossal Twinblade throw',
          },
          {
            level: 18,
            name: 'Gravitational Core',
            verdict: 'situational',
            note: 'Pulls enemies to impact before freezing — tighter cluster setup for the axe explosion; most effective against elites and Dreadnoughts where maximizing hit count per throw matters',
          },
        ],
      },
      {
        name: 'Subata 120',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+25% Fire Rate and Reload Speed — faster trash cleanup between axe throws; Subata handles small enemies while Impact Axe is reserved for elites and clusters',
          },
          {
            level: 12,
            name: 'Bigger Mags',
            verdict: 'take',
            note: '+100% clip size means fewer reloads when handling mob cleanup; lets you stay focused on Impact Axe positioning without running dry on the sidearm',
          },
          {
            level: 18,
            name: 'Akimbo',
            verdict: 'situational',
            note: '+25% Fire Rate firing in both directions simultaneously; useful for clearing pursuers during axe retrieval windows',
          },
        ],
      },
      {
        name: 'CRSPR Flamethrower',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: '+15% Damage and +25% Reload Speed on the cleanup weapon — CRSPR handles mob density between axe throws without requiring precise aim',
          },
          {
            level: 12,
            name: 'Overheat',
            verdict: 'situational',
            note: '+100% Damage burst for emergencies when axes are unavailable; the -35% Lifetime is acceptable since CRSPR is a gap-filler, not the carry',
          },
          {
            level: 18,
            name: 'Sticky Fuel',
            verdict: 'take',
            note: 'Ground fire zones handle trash passively while you focus on positioning Impact Axe throws on elites and Dreadnoughts',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Damage',
        'Reload Speed',
        'Explosion Radius',
        'Weapon Range',
      ],
      avoid: [
        'Status Effect Damage — no primary DoT source to amplify',
        'Potency — no status application to scale',
        'Crit Chance unless also taking Squint-EE5',
      ],
    },
    artifacts: {
      always: [
        'Gold-Tipped Bullets',
        'Energy Bars',
        'Diver\'s Manual',
      ],
      good: [
        'BLT Ration Pack',
        'Turbo Encabulator',
        'Piercing Projectiles',
      ],
      never: [
        'Chemist Kit — no meaningful status effect damage to amplify',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Axe Range Online',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Impact Axe is the carry — Strong Armed\'s starting weapon. Take it first. Add Subata 120 or CRSPR Flamethrower as the trash cleanup secondary. Cryo Grenade is the third priority buy. The build is functional from Stage 1 — axes return after throwing so ammo is not a concern.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Impact Axe lv6: Lightweight Alloy — +50% range stacked with Strong Armed\'s passive gives you exceptional throw distance immediately. This is the highest-priority lv6 overclock for the build.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Gold-Tipped Bullets is the first artifact priority — the build does not need expensive overclocks, so let gold accumulate for the damage bonus. Damage stat upgrades are the primary buy. Keep 15g reserve for Stage 2.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Freeze + Throw Combo',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Cryo Grenade is the Stage 2 priority buy if not already held — the freeze+axe combo is the build\'s core mechanic. Push Impact Axe to lv12 for A Little More Oomph!. Begin leveling the cleanup secondary weapon.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Impact Axe lv12: A Little More Oomph! for straightforward power. Cryo Grenade lv6: Compact Explosives for wider freeze radius. Subata lv6: Gas Rerouting if used as the secondary.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Energy Bars is strong at Stage 2 and compounds through the run. Diver\'s Manual has no downside and is always worth taking. Continue Damage and Explosion Radius stat priorities. Avoid heavy rerolling to preserve Gold-Tipped Bullets stacks.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Colossal Twinblade Spike',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. Impact Axe lv18 with Colossal Twinblade — the axe is now a bomb. Throw into frozen clusters and the explosion radius hits every frozen enemy simultaneously. Use Cryo Grenade lv12 Frost Nova to maximize freeze radius for larger cluster hits.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Impact Axe lv18: Colossal Twinblade — this is the build. Cryo Grenade lv12: Frost Nova for bigger freeze targets. CRSPR lv6 if added as cleanup: A Little More Oomph!.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend freely now that the primary OC is online. Explosion Radius upgrades directly increase Colossal Twinblade blast radius. Turbo Encabulator is excellent with 4+ OCs active. BLT Ration Pack offsets Energy Bars HP drain.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Range & Blast Optimization',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Cryo Grenade toward lv18 Gravitational Core — pulling enemies into a tighter cluster before freezing maximizes Colossal Twinblade\'s explosion hit count per throw. Level CRSPR Flamethrower toward Sticky Fuel for passive mob coverage.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Cryo Grenade lv18: Gravitational Core — pull then freeze then Colossal Twinblade is the highest per-throw damage combo. CRSPR lv12: Sticky Fuel for passive fire coverage. Subata upgrades for trash cleanup efficiency.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 30g for Stage 5. Explosion Radius and Damage continue to scale Colossal Twinblade output. Gold-Tipped Bullets stacks are high — do not spend gold on rerolls unless missing a critical artifact.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Dreadnought Freeze Cycle',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Dreadnought fight: freeze it with Gravitational Core Cryo Grenade (pulls it to center), throw Colossal Twinblade from maximum range, retrieve axes while it recovers, repeat. Supply pod deals 50% HP on impact — time a freeze for the pod drop window to cover the remaining HP with axes while it\'s immobile.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Damage and Explosion Radius are the final stat priorities. Reload Speed on Impact Axe reduces retrieval gap time. Avoid Status Effect or Crit upgrades — they do not scale this build\'s output.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Gold-Tipped Bullets peaks here — if gold reserve is high, this is the highest per-gold damage return in the build. Energy Bars reaches maximum damage bonus. Any remaining gold on Damage stat upgrades.',
          },
        ],
      },
    ],
  },
  {
    id: 'strong-armed-neurotoxin',
    name: 'Strong Armed Neurotoxin',
    class: 'Driller',
    subclass: 'Strong Armed',
    tier: 'B',
    difficulty: 3,
    passive: '+20% Range for [THROWABLE] weapons — Neurotoxin Grenade, Impact Axe, and Leadburster all benefit; lob from safety',
    synopsis: 'Strong Armed build leaning into Neurotoxin Grenade\'s Hallucinogenic OC to create enemy infighting. +20% range lets you lob grenades from behind cover. CRSPR Flamethrower handles cleanup on confused enemies. B-tier because chaos damage from confused enemies is unreliable and the build lacks a single reliable direct damage carry — fun and unique but inconsistent on Hazard 4+.',
    playstyle: 'Lead each engagement with Neurotoxin Grenade at extended range (Strong Armed bonus reaches far into the pack). Once Hallucinogenic is online at lv18, confused enemies begin attacking each other — step back and let the chaos damage deal supplemental DPS while CRSPR Flamethrower burns any survivors that reach you. The build is a CC-plus-cleanup style: you control crowd behavior rather than maximizing direct damage output. Repositioning and timing are key — Neurotoxin has a 2s fuse and 5s pool duration, so throw ahead of the wave rather than at your feet. On Hazard 4+ the chaos damage from friendly-fire is insufficient to clear dense waves reliably; have CRSPR active and keep moving.',
    strengths: [
      'Hallucinogenic OC turns an entire pack against itself — confused enemies deal damage to each other without any further player input, creating passive DPS that does not require aiming',
      '+20% throwable range means Neurotoxin grenades land in the middle of the pack while you stay at the rear edge of the engagement; significantly reduces damage taken from melee-range enemies',
      'CRSPR Flamethrower provides reliable cleanup for any confused enemies that survive the infighting window or break through to your position',
    ],
    weaknesses: [
      'Chaos damage from confused enemy infighting is unreliable — damage depends on enemy types, density, and AI behavior; does not scale cleanly with Hazard level like a primary weapon would',
      'Confused enemies may still aggro the player, particularly ranged enemies — the build provides less actual protection than it appears and can result in unexpected high-damage hits',
      'No reliable single-target high damage carry for Dreadnoughts — Neurotoxin confusion does not affect Dreadnoughts and CRSPR alone is insufficient burst for the boss phase on Hazard 4+',
    ],
    tips: [
      'Throw Neurotoxin Grenade slightly ahead of the incoming wave rather than directly at it — the 2s fuse and 5s pool duration means you want the pool active as the wave walks through it, not placed after arrival',
      'Strong Armed\'s +20% throwable range means you can lob Neurotoxin from behind terrain cover — use map geometry to throw blind into a corridor and let the pool create chaos without exposing yourself',
      'Hallucinogenic at lv18 adds +25% Reload Speed and +25% Explosion Radius in addition to the confusion effect — the reload bonus meaningfully increases grenade cadence for consecutive throws',
      'Chemist Kit amplifies Neurotoxin\'s acid DoT component — confused enemies standing in the acid pool take both the DoT and friendly-fire damage simultaneously, making the combination more lethal than either effect alone',
      'For the Dreadnought, switch entirely to CRSPR Flamethrower with Sticky Fuel — Neurotoxin\'s confusion does not affect bosses; treat the build as a CRSPR run for the final phase',
    ],
    weapons: [
      {
        name: 'Neurotoxin Grenade',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Potent Juice',
            verdict: 'take',
            note: '+30% Potency increases acid DoT severity and duration — stronger initial pool damage before the Hallucinogenic chaos begins at lv18',
          },
          {
            level: 12,
            name: 'Compact Explosives',
            verdict: 'take',
            note: '+30% Explosion Radius combined with Strong Armed\'s range bonus creates a wide-area toxin cloud; more enemies enter the confusion pool simultaneously',
          },
          {
            level: 18,
            name: 'Hallucinogenic',
            verdict: 'take',
            note: 'MUST-TAKE — the build\'s defining mechanic. +25% Reload Speed, +25% Explosion Radius, and enemies enter a confusion state. The entire value proposition of this build activates here',
          },
        ],
      },
      {
        name: 'CRSPR Flamethrower',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Bigger Tanks',
            verdict: 'take',
            note: '+100% Lifetime extends the fire coverage window — CRSPR is the cleanup tool; longer beam time handles more surviving enemies during the confusion window',
          },
          {
            level: 12,
            name: 'Sticky Fuel',
            verdict: 'take',
            note: 'Ground fire zones handle survivors passively — pre-burn the approach lane, throw Neurotoxin into the confused burning enemies for combined DoT damage',
          },
          {
            level: 18,
            name: 'Even More Beams',
            verdict: 'take',
            note: '+3 beams for wide fire cone — critical for the Dreadnought phase where CRSPR is your primary damage source and Neurotoxin confusion provides no boss DPS',
          },
        ],
      },
      {
        name: 'Impact Axe',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Lightweight Alloy',
            verdict: 'take',
            note: '+50% range stacks with Strong Armed passive — throw axes at range as a supplement to grenades; axes return, providing a damage option while Neurotoxin cools down',
          },
          {
            level: 12,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: '+15% Damage, +25% Reload Speed — faster axe return and more damage; useful burst tool during elite encounters where confusion is insufficient',
          },
          {
            level: 18,
            name: 'Colossal Twinblade',
            verdict: 'situational',
            note: '+125% Damage and +75% Explosion Radius — if leveled this far, Colossal Twinblade provides strong burst for the Dreadnought fight where Neurotoxin is ineffective',
          },
        ],
      },
      {
        name: 'High Explosive Grenade',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Compact Explosives',
            verdict: 'take',
            note: '+radius on the burst grenade — combined with Strong Armed\'s range bonus and Neurotoxin\'s confusion, HE Grenade provides a direct-damage finisher for confused clusters',
          },
          {
            level: 12,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: '+damage and reload speed on the direct-damage grenade; HE Grenade is the build\'s reliable single-target burst tool in the absence of a true carry weapon',
          },
          {
            level: 18,
            name: 'True TNT',
            verdict: 'situational',
            note: 'Massive damage spike; most useful in the Dreadnought phase as a burst option to supplement CRSPR — take if the run has leveled HE Grenade this far',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Status Effect Damage',
        'Potency',
        'Explosion Radius',
        'Reload Speed',
      ],
      avoid: [
        'Crit Chance — no primary projectile weapon to benefit',
        'Direct Damage primary upgrades — no carry weapon scales them cleanly',
        'Move Speed reductions — must maintain escape distance from confused enemies',
      ],
    },
    artifacts: {
      always: [
        'Chemist Kit',
        'Energy Bars',
      ],
      good: [
        'Diver\'s Manual',
        'BLT Ration Pack',
        'Turbo Encabulator',
      ],
      never: [
        'Squint-EE5 — no reliable projectile carry; the -30% direct damage with no crit benefit is a pure loss',
        'Nitragenic Powder — Crit Chance has no value in this build',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Establish Grenade Range',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Neurotoxin Grenade is the carry — prioritize it first. CRSPR Flamethrower is the secondary cleanup weapon. Strong Armed\'s +20% throwable range is active from the start; begin learning throw distances for each stage layout. Early game lacks the Hallucinogenic confusion — it\'s a basic acid DoT run until lv18.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Neurotoxin lv6: Potent Juice for stronger DoT. CRSPR lv6: Bigger Tanks for extended cleanup coverage. Impact Axe is a good optional pickup as a direct-damage supplement until Hallucinogenic is online.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Chemist Kit is the first artifact priority — even pre-Hallucinogenic, it amplifies the Neurotoxin acid DoT. Status Effect Damage and Potency are the primary stat buys. Keep 20g reserve for Stage 2 weapon purchases.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Wider Toxin Coverage',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Neurotoxin to lv12 for Compact Explosives — wider explosion radius means more enemies enter the pool per throw. Add CRSPR Sticky Fuel if lv12 is reachable. Impact Axe Lightweight Alloy provides a ranged burst option during grenade cooldowns.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Neurotoxin lv12: Compact Explosives. CRSPR lv12: Sticky Fuel if leveled. Strong Armed passive benefit is already active — focus on maximizing the radius and DoT intensity of the grenade until Hallucinogenic arrives.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Second Chemist Kit stacks — if available, take it. Status Effect Damage and Explosion Radius are the joint priorities. Energy Bars is excellent at Stage 2+. BLT Ration Pack offsets HP drain.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Hallucinogenic Online',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. Neurotoxin lv18: Hallucinogenic — enemies now fight each other inside your toxin pools. The entire build philosophy changes: throw grenade, step back, observe the chaos, clean up stragglers with CRSPR. Level CRSPR toward Sticky Fuel for the Dreadnought phase.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Neurotoxin lv18: Hallucinogenic — this is the build. CRSPR lv12 Sticky Fuel for pre-burn lanes. If Impact Axe is present, Lightweight Alloy gives ranged burst during confusion windows.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Full Status Effect Damage spend now that Hallucinogenic is active. Turbo Encabulator excellent at 4+ OCs. Diver\'s Manual has no downside — always take. BRN Shield Belt provides a fire ring on damage that stacks with CRSPR burn.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Chaos Management',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'CRSPR lv18: Even More Beams — wide fire cone for Dreadnought phase where CRSPR is the primary damage source. Impact Axe Colossal Twinblade if leveled — provides burst for confused elite clusters. HE Grenade is a strong addition if a direct-damage finisher is needed.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'CRSPR lv18: Even More Beams for wide boss-phase coverage. Impact Axe lv18: Colossal Twinblade if available. Neurotoxin and CRSPR are the two active damage sources; all stat investments should support them.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 30g for Stage 5. Status Effect Damage and Explosion Radius are the dual stat priorities. Confused enemies benefit from wider toxin pools (more enemies caught) and stronger acid ticks (Chemist Kit + Potency). Diver\'s Manual if not yet held.',
          },
        ],
      },
      {
        stage: 5,
        title: 'CRSPR Boss Phase',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Switch to a CRSPR-primary approach for the Dreadnought — Neurotoxin confusion does not affect boss enemies. Pre-burn the arena with Sticky Fuel. Use Neurotoxin on any adds to keep them confused and away from the boss fight. CRSPR Even More Beams covers the Dreadnought\'s wide hitbox effectively.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Reload Speed keeps CRSPR uptime high against the Dreadnought. Potency and Status Effect Damage upgrades improve CRSPR\'s burn tick output on the boss. Explosion Radius remains valuable for the confused-add management.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Energy Bars peaks here. Chemist Kit double-stack if still missing. Turbo Encabulator is at peak value with all OCs equipped. Gold-Tipped Bullets is worth late-buying if gold reserve is high.',
          },
        ],
      },
    ],
  },
  {
    id: 'foreman-sludge-corrosive',
    name: 'Acid Foreman — Sludge Carry',
    class: 'Driller',
    subclass: 'Foreman',
    tier: 'A',
    difficulty: 2,
    passive: '+2% Mining Speed per mine action (stacks 25×)',
    synopsis: 'Mine aggressively between waves to build Mining Speed stacks, then retreat through acid puddles created by the Corrosive Sludge Pump. Top-Shelf Sludge at lv18 adds Burn and Shock to the puddles, turning the retreat path into a lethal multi-DoT gauntlet. Fully committed sludge carry — the B-tier acid-foreman uses Subata as its carry weapon; this variant puts the Sludge Pump in the primary carry role for higher sustained acid damage.',
    playstyle: 'Between waves, prioritize mine nodes to accumulate Mining Speed stacks — at 25 stacks you are sprinting between objectives. When enemies arrive, spray the Sludge Pump across the expected approach paths to leave lingering acid puddles, then back away and let the DoT ticks do work. Subata 120 with Acid Dipped Tips converts its backwards-fire quirk into an additional acid source that punishes anything trying to close range. Neurotoxin Grenade lays a larger, longer acid cloud in chokepoints. Avoid any crit-focused artifacts: acid DoT ticks do not crit.',
    strengths: [
      'Mining Speed stacks (up to +50%) dramatically increase stage completion speed and nitra income, which funds aggressive rerolls',
      'Persistent acid puddles deal continuous damage without requiring aim or active fire — safe and passive chip damage during retreats',
      'Top-Shelf Sludge adds Burn and Shock on top of Acid in ground zones, tripling the status effect types for strong enemy debuffing',
    ],
    weaknesses: [
      'Entirely DoT-based — crits do not apply to acid or burn ticks, so Squint-EE5 and Nitragenic Powder crit-stacking artifacts are dead slots',
      'Damage output is slow to manifest; burst-damage enemies and fast Dreadnought attacks can outpace the DoT ramp',
      'Short Sludge Pump range (5m base) forces closer engagement to plant puddles, which is dangerous without mining stacks active for retreat speed',
    ],
    tips: [
      'Mine every visible node during wave downtime — each mine action adds 2% Mining Speed (capped at 25 stacks, +50% total). At full stacks, retreating through corridors you\'ve coated with acid puddles becomes nearly effortless.',
      'Spray the Sludge Pump across a choke point before the wave spawns. Enemies walk into the puddle before they can reach you, starting the DoT without you needing to aim.',
      'Subata 120 fires backward — treat it as automatic rear-guard coverage. Acid Dipped Tips makes every round an acid projectile, extending acid coverage to any enemy pursuing from behind.',
      'Top-Shelf Sludge at lv18 adds Burn and Shock effects to every ground zone. Use Chemist Kit to amplify all three status damage types simultaneously — this is the main damage ceiling of the build.',
      'Nitragenic Powder is included because Foreman naturally accumulates nitra; however, do not chase the Squint-EE5 combo — DoT builds cannot leverage crit damage. Take Nitragenic Powder only if Pickled Nitra is also available, as the two together convert your nitra hoard into flat damage and reload speed without needing crits.',
    ],
    weapons: [
      {
        name: 'Corrosive Sludge Pump',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Bigger Tanks',
            verdict: 'take',
            note: '+100% Lifetime and +10% Range — longer-lasting beams mean puddles form further ahead of retreats, increasing passive DoT coverage',
          },
          {
            level: 12,
            name: 'Impact Punch',
            verdict: 'take',
            note: '+60% Damage — largest single-stat damage boost available; amplifies both direct hit damage and the puddle DoT ceiling',
          },
          {
            level: 18,
            name: 'Top-Shelf Sludge',
            verdict: 'take',
            note: 'MUST-TAKE — adds Burn and Shock status effects to ground zones; with Chemist Kit, all three DoT types deal amplified damage simultaneously',
          },
        ],
      },
      {
        name: 'Subata 120',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Acid Dipped Tips',
            verdict: 'take',
            note: 'Converts all Subata bullets to acid damage — every backwards-fired round extends acid coverage to enemies in pursuit',
          },
          {
            level: 12,
            name: 'Bigger Mags',
            verdict: 'take',
            note: '+100% Clip Size and +50% Piercing — more rounds before reload and acid piercing lets single shots tag multiple enemies',
          },
          {
            level: 18,
            name: 'Akimbo',
            verdict: 'situational',
            note: '+25% Fire Rate, shoots forward and backward simultaneously — doubles acid coverage but adds complexity; take if confident with positioning',
          },
        ],
      },
      {
        name: 'Neurotoxin Grenade',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Compact Explosives',
            verdict: 'take',
            note: '+30% Explosion Radius — bigger initial acid cloud at chokepoints; more enemies catch the initial burst',
          },
          {
            level: 12,
            name: 'Potent Juice',
            verdict: 'take',
            note: '+30% Potency — acid DoT ticks harder and lasts longer; primary damage amplifier for the grenade',
          },
          {
            level: 18,
            name: 'Hallucinogenic',
            verdict: 'take',
            note: 'Enemies flee in fear after the blast — keeps dangerous priority targets in the acid cloud longer and buys time to reposition',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Status Effect Damage',
        'Potency',
        'Reload Speed',
        'Weapon Range',
        'Mining Speed',
      ],
      avoid: [
        'Crit Chance',
        'Crit Damage',
        'Squint-EE5 (DoTs cannot crit)',
      ],
    },
    artifacts: {
      always: [
        'Chemist Kit',
        'Nitragenic Powder',
        'Pickled Nitra',
      ],
      good: [
        'BLT Ration Pack',
        'Energy Bars',
        'Pay2Win Console',
      ],
      never: [
        'Squint-EE5',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Establish the Acid Loop',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: Corrosive Sludge Pump > Subata 120 > Neurotoxin Grenade. Lock in the Sludge Pump immediately as carry — it is the source of all persistent acid puddles. Subata is an automatic secondary for the Foreman passive kit. Do not split XP away from the Sludge Pump.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'At Sludge Pump lv6, take Bigger Tanks for +100% Lifetime and +10% Range. Longer beams form puddles further ahead, letting you spray and retreat immediately. Reroll shop once if you only see movement or HP cards.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Chemist Kit if it appears — it amplifies every acid tick for the entire run and the earlier you get it the more value it generates. Otherwise hoard gold. Spend 0–20g and target ~80g saved by end of Stage 1. Avoid crit artifacts entirely.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Mining Stack Ramp',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Continue funneling XP into Corrosive Sludge Pump. When character level allows, pick up Subata 120 for passive rear-guard acid coverage. Begin mining every available node between waves — each mine action is a permanent +2% Mining Speed (25 stacks = +50% total).',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'At Sludge Pump lv12, take Impact Punch for +60% Damage — the largest raw damage multiplier available for this weapon and the most important mid-game OC for the build. At Subata lv6, take Acid Dipped Tips immediately.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Nitragenic Powder if it appears (Foreman naturally hoards nitra through mining). Spend ~30g on rerolls to find Status Effect Damage or Potency upgrades. Save ~100g for Stage 3. Do not buy Squint-EE5 under any circumstances.',
          },
        ],
      },
      {
        stage: 3,
        title: 'TOP-SHELF ONLINE',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. Sludge Pump hits lv18 and gets Top-Shelf Sludge — every acid puddle now also burns and shocks enemies. Your retreat path becomes a three-DoT gauntlet. Switch focus to leveling Neurotoxin Grenade for chokepoint control.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Top-Shelf Sludge transforms the build. At Neurotoxin Grenade lv6, take Compact Explosives for wider initial acid blasts. Stack any Status Effect Damage or Potency cards that drop — Chemist Kit should already be amplifying all three DoT types.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend freely. Use saved gold to find Pickled Nitra (pairs with Nitragenic Powder — both scale with your nitra hoard simultaneously). Buy BLT Ration Pack if available as a safety net for the more aggressive close-range sludge application needed this stage.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Fill DoT Coverage',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Level Neurotoxin Grenade toward lv18 Hallucinogenic — fear CC keeps enemies in acid pools longer and off your back during Sludge Pump reload windows. Level Subata 120 for Bigger Mags to extend acid-projectile uptime between grenade cooldowns.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Neurotoxin Grenade lv12: Potent Juice for +30% Potency. Neurotoxin Grenade lv18: Hallucinogenic for AoE fear + reload bonus. Subata lv12: Bigger Mags. Continue prioritizing Status Effect Damage and Potency stat upgrades in every shop cycle.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save ~30g for Stage 5. Reroll once for a second copy of Chemist Kit if available — double-Chemist Kit stacks additively and is a legitimate win condition for DoT-heavy runs. Skip any crit artifacts offered.',
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
            content: 'No new investments — all weapons should be leveled. Against the Dreadnought, coat the entire arena floor with acid puddles before the boss spawns, then keep re-applying Top-Shelf Sludge zones as they expire. The Burn and Shock secondary effects will chip away armor.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'No more OC gating. Take any Potency, Status Effect Damage, or Damage global upgrades offered. A second Chemist Kit here is extremely valuable — stack both copies for a dominant DoT amplifier going into the final boss.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend every gold and nitra. Reroll to complete Chemist Kit + Nitragenic Powder + Pickled Nitra core. At maximum nitra hoard, Nitragenic Powder and Pickled Nitra together provide compounding Crit Chance (wasted on DoT) and flat Damage — take both for the Damage bonus even if the crit angle is irrelevant.',
          },
        ],
      },
    ],
  },
  {
    id: 'foreman-crspr-speedrun',
    name: 'Fire Foreman — CRSPR Carry',
    class: 'Driller',
    subclass: 'Foreman',
    tier: 'A',
    difficulty: 2,
    passive: '+2% Mining Speed per mine action (stacks 25×)',
    synopsis: 'Mine aggressively to stack the Foreman movement speed bonus while coating retreat corridors with CRSPR fire zones. Sticky Fuel at lv18 plants persistent burning patches on the ground — enemies walk into the fire path while you sprint ahead at up to +50% Mining Speed. A rhythm-based DoT build with excellent stage traversal speed. Roughly equal in output to foreman-sludge-corrosive but using fire damage instead of acid, with better range and a wider initial cone.',
    playstyle: 'Between waves, mine every nearby node to accumulate Mining Speed stacks. When a wave arrives, spray CRSPR ahead of your retreat line to plant Sticky Fuel fire zones, then back away and let enemies walk into the burning patches. Subata 120 covers the rear with backward-fired projectiles during the retreat. The rhythm is: mine — spray — retreat — repeat. The build does not want to stand and fight; it wants enemies following it through fire. Avoid crit artifacts: CRSPR fire DoT ticks do not crit.',
    strengths: [
      'CRSPR has 5m base range and a wide spray cone; Sticky Fuel zones cover large retreat corridors more efficiently than the Sludge Pump\'s narrower acid pools',
      'Mining Speed at 25 stacks (+50%) makes the mine-spray-retreat rhythm faster than almost any other playstyle in the game',
      'Nitragenic Powder stacks high naturally due to constant mining income, funding sustained nitra hoard for Damage and potential reload bonuses',
    ],
    weaknesses: [
      'Fire DoT ticks do not crit — Squint-EE5 is a dead artifact slot, same constraint as all Driller DoT builds',
      'CRSPR\'s short 5m range requires getting closer to enemies to plant fire zones than is ideal when relying on DoT for damage',
      'Without Chemist Kit, the fire DoT damage ceiling is significantly lower than it could be; the build depends on finding that artifact',
    ],
    tips: [
      'Mine every node you see between waves — the 25-stack Mining Speed bonus is worth more than any single weapon upgrade in terms of stage control and resource income.',
      'Spray CRSPR across the floor rather than at enemies directly. Sticky Fuel is about creating zones enemies walk into, not about the direct beam hitting them.',
      'BLT Ration Pack counteracts the slower pace of retreating at close range; always buy it if your Max HP has started shrinking from chip damage.',
      'Overheat at lv6 gives +100% Damage with -35% Lifetime — take it if you want burst pressure on elite enemies during retreats; skip if you prefer the sustained Bigger Tanks duration for longer zone coverage.',
      'Spliced Emitter at lv18 (+75% Range, +75% Damage, +75% Potency) is a massive upgrade but competes with Sticky Fuel. If your run already has strong DoT infrastructure, Sticky Fuel\'s ground zones are usually the more impactful choice; take Spliced Emitter only if you are struggling with range in late stages.',
    ],
    weapons: [
      {
        name: 'CRSPR Flamethrower',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Bigger Tanks',
            verdict: 'take',
            note: '+100% Lifetime and +10% Range — longer fire beams reach further ahead of retreats, planting zones earlier in the approach path',
          },
          {
            level: 12,
            name: 'More Beams',
            verdict: 'take',
            note: '+1 Beam — additional fire beam greatly increases the area of floor coated per spray action; essential for wide corridor coverage',
          },
          {
            level: 18,
            name: 'Sticky Fuel',
            verdict: 'take',
            note: 'MUST-TAKE — adds persistent burning zones to the ground; the entire build depends on this passive-damage mechanic for its retreat-path DoT strategy',
          },
        ],
      },
      {
        name: 'Subata 120',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Pan Fried Shells',
            verdict: 'take',
            note: 'Changes Subata damage to fire type — all backward-fired rounds now deal fire damage, extending fire coverage to pursuit enemies and synergizing with fire-DoT stat upgrades',
          },
          {
            level: 12,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+25% Fire Rate and +25% Reload Speed — more backward-fire coverage between CRSPR reload windows; reliable passive threat for pursuing enemies',
          },
          {
            level: 18,
            name: 'Double Barrel!',
            verdict: 'situational',
            note: 'Fires two parallel bullets simultaneously — doubles rear-guard fire coverage; take if positioning allows, skip if the double-fire pattern disrupts movement rhythm',
          },
        ],
      },
      {
        name: 'Neurotoxin Grenade',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Compact Explosives',
            verdict: 'take',
            note: '+30% Explosion Radius — wider initial acid zone at choke points provides a secondary DoT type to complement the fire coverage from CRSPR',
          },
          {
            level: 12,
            name: 'Potent Juice',
            verdict: 'take',
            note: '+30% Potency — stronger acid DoT ticks; the grenade acts as a secondary status-effect layer when CRSPR zones are on cooldown',
          },
          {
            level: 18,
            name: 'Hallucinogenic',
            verdict: 'take',
            note: 'Fear CC keeps enemies in CRSPR fire zones and Neurotoxin acid clouds longer; also provides +25% Reload Speed on the grenade',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Status Effect Damage',
        'Potency',
        'Reload Speed',
        'Weapon Range',
        'Mining Speed',
      ],
      avoid: [
        'Crit Chance',
        'Crit Damage',
        'Squint-EE5 (fire DoT ticks do not crit)',
      ],
    },
    artifacts: {
      always: [
        'Chemist Kit',
        'Nitragenic Powder',
        'BLT Ration Pack',
      ],
      good: [
        'Pickled Nitra',
        'Energy Bars',
        'Pay2Win Console',
      ],
      never: [
        'Squint-EE5',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Establish the Fire Loop',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: CRSPR Flamethrower > Subata 120 > Neurotoxin Grenade. Lock in CRSPR as carry immediately. Mine every visible node between enemy waves — the Foreman Mining Speed bonus is as important as any weapon upgrade for this build\'s stage rhythm.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'At CRSPR lv6, take Bigger Tanks for +100% Lifetime and +10% Range. Longer-lasting fire beams coat retreat corridors earlier and persist longer — critical for the spray-retreat approach. Reroll once if only survival cards appear.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Chemist Kit immediately if offered — it amplifies every fire tick for the rest of the run. Otherwise hoard gold. Spend 0–20g and target ~80g saved. Avoid all crit artifacts.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Mining Stack Ramp',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Keep funneling XP into CRSPR. Begin mining aggressively — at 25 stacks you have +50% Mining Speed, which allows faster repositioning between spray actions. Pick up Subata 120 when character level allows for passive rear-guard fire coverage.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'At CRSPR lv12, take More Beams for +1 Beam — wider floor coverage is the single most important upgrade for zone-planting efficiency at this stage of the run. At Subata lv6, take Pan Fried Shells for fire-type ammo.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Nitragenic Powder if it appears (mining income naturally sustains a large nitra hoard). Spend ~30g on rerolls for Status Effect Damage or Potency cards. Save ~100g for Stage 3. BLT Ration Pack is also a strong buy here if HP has started suffering from close-range engagements.',
          },
        ],
      },
      {
        stage: 3,
        title: 'STICKY FUEL ONLINE',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. CRSPR hits lv18 and gets Sticky Fuel — every spray action now plants persistent burning zones on the floor. Your retreat path becomes a fire gauntlet. Begin leveling Neurotoxin Grenade for secondary acid coverage at chokepoints.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Sticky Fuel is the build. At Neurotoxin Grenade lv6, take Compact Explosives for wider acid blasts. Stack any Status Effect Damage or Potency cards that drop — with Chemist Kit active, both fire and acid ticks are amplified.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend freely. Use saved gold to find Pickled Nitra (pairs with Nitragenic Powder for compounding nitra-hoard benefits). If BLT Ration Pack is not yet held, prioritize it — close-range CRSPR application is a hazard without HP regen.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Fill DoT Coverage',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Level Neurotoxin Grenade toward lv18 Hallucinogenic — fear CC keeps priority targets in fire zones longer. Level Subata 120 for Gas Rerouting to keep rear-guard fire coverage frequent between CRSPR reload windows.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Neurotoxin Grenade lv12: Potent Juice. Neurotoxin Grenade lv18: Hallucinogenic. Subata lv12: Gas Rerouting for +25% Fire Rate and Reload Speed. Prioritize Status Effect Damage and Potency upgrades in every shop cycle.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save ~30g for Stage 5. Reroll once for a second Chemist Kit if available. Consider Energy Bars if your level is above 30 — the +1% Damage per level pairs well with BLT Ration Pack\'s HP buffer to offset the HP penalty.',
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
            content: 'No new investments — all weapons should be leveled. For the Dreadnought, pre-coat the boss arena floor with Sticky Fuel fire zones before it spawns. Continuously re-apply fire zones as they expire; the boss will tick through them repeatedly while you mine nearby nodes to maintain movement speed.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'No more OC gating. Take any Potency, Status Effect Damage, or Damage global upgrades. A second Chemist Kit at this stage is a top-priority buy if available.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend every gold and nitra. Complete the Chemist Kit + Nitragenic Powder + BLT Ration Pack core. With full nitra hoard, Pickled Nitra provides +Damage scaling on the nitra reserve — take it for the flat Damage bonus even without a crit build.',
          },
        ],
      },
    ],
  },
  {
    id: 'demo-pgl-cluster',
    name: 'Cluster Demo — PGL Carry',
    class: 'Driller',
    subclass: 'Demolitions Expert',
    tier: 'A',
    difficulty: 2,
    passive: '+20% Reload Speed & AoE Size for [EXPLOSIVE] weapons',
    synopsis: 'Deepcore PGL with Cluster Grenades splits each shot into 3 sub-grenades. Demolitions Expert\'s +20% AoE Size applies to every sub-grenade independently, dramatically expanding total blast coverage per trigger pull. Combine with Cryo Grenade\'s Gravitational Core to pull-freeze-cluster for devastating overlap. A-tier: more mobile and direct-damage focused than the B-tier Krakatoa turret build.',
    playstyle: 'Play at medium range — far enough to let Cluster Grenades spread before impact, close enough to ensure all three sub-grenades land on the frozen cluster. Throw Cryo Grenade with Gravitational Core first: enemies are pulled to the impact point and frozen. Fire PGL into the frozen cluster — all three sub-grenades hit the same packed group with Demo\'s +20% AoE expanding each explosion. High Explosive Grenade fills the gap between PGL reloads. Demo\'s passive Reload Speed bonus means PGL turns around faster than expected given its 4-second base reload.',
    strengths: [
      'Demo +20% AoE applies to each of the 3 Cluster Grenades sub-projectiles independently — triple the AoE expansion per shot compared to a standard PGL round',
      'Gravitational Core pull + freeze + Cluster Grenades overlap is the highest single-activation area burst available to the Driller class',
      'Passive +20% Reload Speed from Demo makes the PGL\'s slow reload feel much more manageable throughout the entire run',
    ],
    weaknesses: [
      'Cluster Grenades applies -30% Damage to the PGL — individual sub-grenade hits are weak; the power comes from landing all three on the same target cluster, which requires setup',
      'Cryo Grenade and PGL both have long reload times; without Demo\'s reload bonus, wave pressure during back-to-back reloads would be punishing',
      'The Favourite at lv18 is the only other unstable PGL OC and dramatically penalizes other weapons; avoid unless committing to a pure PGL single-weapon run',
    ],
    tips: [
      'Always throw Cryo Grenade with Gravitational Core before firing the PGL — enemies pulled to the impact point and frozen create a perfect overlapping target for all three Cluster sub-grenades.',
      'Demo\'s +20% AoE Size applies to the explosion radius of each individual sub-grenade, not just the initial impact. Fire at maximum cluster density for quadratic damage returns.',
      'Gas Rerouting (+25% Fire Rate and +25% Reload Speed) at lv6 or lv12 further stacks with Demo\'s passive reload bonus — PGL feels almost semi-automatic in late game.',
      'Pay2Win Console is ideal here: frequent shop rerolls generate damage stacks, and Demo\'s nitra income from efficient play keeps the reroll economy funded.',
      'Against elites, fire PGL into a frozen group even without perfect cluster density — Cluster Grenades\' spread pattern still covers a wide area and the Demo AoE bonus ensures stragglers inside the blast radius take full damage.',
    ],
    weapons: [
      {
        name: 'Deepcore PGL',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+25% Fire Rate and +25% Reload Speed — stacks directly with Demo\'s passive +20% Reload Speed; PGL turns around far faster than base stats suggest',
          },
          {
            level: 12,
            name: 'Cluster Grenades',
            verdict: 'take',
            note: 'MUST-TAKE — splits each grenade into 3 sub-projectiles; Demo\'s +20% AoE applies to each sub-grenade independently for triple AoE coverage per shot',
          },
          {
            level: 18,
            name: 'Bigger Mags',
            verdict: 'take',
            note: '+100% Clip Size and +100% Fire Rate — doubles magazine from 2 to 4 grenades and doubles fire rate; transforms PGL from slow single-shot to a sustained grenade barrage',
          },
        ],
      },
      {
        name: 'High Explosive Grenade',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: '+15% Damage and +25% Reload Speed — reliable flat bonus; HE Grenade covers the gap between PGL reload windows',
          },
          {
            level: 12,
            name: 'Compact Explosives',
            verdict: 'take',
            note: '+30% Explosion Radius — Demo\'s +20% AoE stacks with this for an effectively very large HE burst radius; excellent crowd clear between PGL shots',
          },
          {
            level: 18,
            name: 'Hallucinogenic',
            verdict: 'take',
            note: '+25% Reload Speed and +25% Explosion Radius; fear CC keeps dangerous enemies in the blast zone and away from melee range during PGL reload',
          },
        ],
      },
      {
        name: 'Cryo Grenade',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Compact Explosives',
            verdict: 'take',
            note: '+30% Explosion Radius — bigger initial freeze zone catches more enemies in the pull; more frozen targets = more Cluster Grenade overlap',
          },
          {
            level: 12,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: '+15% Damage and +25% Reload Speed — faster Cryo Grenade refresh means more frequent setup opportunities for the PGL Cluster combo',
          },
          {
            level: 18,
            name: 'Gravitational Core',
            verdict: 'take',
            note: 'MUST-TAKE — pulls enemies to impact point before detonation; this creates the perfect overlapping target cluster for PGL Cluster Grenades to obliterate',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Explosion Radius',
        'Damage',
        'Reload Speed',
        'AoE Size',
        'Fire Rate',
      ],
      avoid: [
        'Status Effect Damage',
        'Potency',
        'Mining Speed (lower priority)',
      ],
    },
    artifacts: {
      always: [
        'Energy Bars',
        'Gold-Tipped Bullets',
        'Pay2Win Console',
      ],
      good: [
        'Diver\'s Manual',
        '5 Leaf Clover',
        'Pickled Nitra',
      ],
      never: [
        'Chemist Kit',
        'Squint-EE5',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Establish the Grenade Loop',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: Deepcore PGL > Cryo Grenade > High Explosive Grenade. Lock in PGL as carry — it is the starting weapon for Demolitions Expert. Begin stacking kills with direct PGL shots while waiting for Cluster Grenades at lv12. Demo\'s +20% Reload Speed passive is already active, making the base PGL feel faster than its stats suggest.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'At PGL lv6, take Gas Rerouting (+25% Fire Rate and +25% Reload Speed). Combined with Demo passive, this makes PGL reload extremely fast for Stage 1. Reroll shop once if offered only HP or movement cards.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Hoard gold and start building Pay2Win Console stacks if available. Spend 0–20g max. Target ~80g saved by end of Stage 1. Energy Bars is a high-priority buy if offered — the +1% Damage per level compounds over the entire run.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Cluster Grenades Breakpoint',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Continue funneling XP into PGL toward lv12. At character level ~15, pick up Cryo Grenade for basic freeze CC to support PGL shots. Avoid splitting XP evenly — PGL at lv12 with Cluster Grenades is the most important milestone of the run.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'At PGL lv12, ALWAYS take Cluster Grenades — this is the build-defining OC. Each grenade now splits into 3 sub-grenades, and Demo\'s +20% AoE applies to each independently. Never reroll this choice.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Now spend more freely. Buy Pay2Win Console if available. Spend ~40g on rerolls for Explosion Radius or Damage upgrades. Save ~100g for Stage 3. Gold-Tipped Bullets is worth buying here if your gold reserve is high.',
          },
        ],
      },
      {
        stage: 3,
        title: 'CLUSTER COMBO ONLINE',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. PGL hits lv18 and gets Bigger Mags — magazine doubles and fire rate doubles. Combined with Cluster Grenades, you can fire 4 cluster shots in rapid succession before reloading. Begin pushing Cryo Grenade toward lv18 Gravitational Core for the pull-freeze-cluster combo.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Bigger Mags transforms PGL into a sustained barrage weapon. At Cryo Grenade lv6 and lv12, take Compact Explosives then A Little More Oomph! to push toward lv18 Gravitational Core — the pull mechanic multiplies Cluster Grenade damage significantly.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend freely. Complete Pay2Win Console + Energy Bars core if not already held. Use saved gold to reroll for Gold-Tipped Bullets — if your gold reserve is above 200 at this stage, the damage ceiling on Gold-Tipped Bullets is substantial.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Gravitational Core — Full Combo',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Cryo Grenade to lv18 for Gravitational Core — this completes the full pull-freeze-cluster combo. Level High Explosive Grenade for Hallucinogenic fear CC to manage priority targets between PGL reload windows.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Cryo Grenade lv18: Gravitational Core is mandatory — pull enemies into a cluster, freeze them, then fire 4 rapid Cluster Grenades into the frozen pile. High Explosive Grenade lv12: Compact Explosives for Demo-amplified AoE. HEG lv18: Hallucinogenic.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save ~30g for Stage 5. Reroll once for 5 Leaf Clover if Pay2Win Console is held — the two artifacts multiply each other. Buy any Explosion Radius or Damage upgrades offered. Avoid Chemist Kit — this build deals kinetic and cold damage, not DoT.',
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
            content: 'No new investments. Against the Dreadnought, use Gravitational Core to pull adds and freeze them, fire the full 4-grenade PGL magazine into the frozen cluster, then use HEG on the Dreadnought directly while PGL reloads. Cycle Cryo Grenade to maintain the freeze window.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'No more OC gating. Take any Damage, Explosion Radius, or Fire Rate global upgrades offered. Pay2Win Console stacks are still incrementing on every reroll — continue spending on shop cycles if gold allows.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend every gold and nitra. Complete Pay2Win Console + Energy Bars + Gold-Tipped Bullets if possible. With max Pay2Win Console stacks (250 × 2.5% = +62.5% Damage) and Energy Bars at level 40+ (+40% Damage), the combined damage multiplier is exceptional.',
          },
        ],
      },
    ],
  },
  {
    id: 'demo-krakatoa-s',
    name: 'Mobile Krakatoa — Tank Tracks Demo',
    class: 'Driller',
    subclass: 'Demolitions Expert',
    tier: 'A',
    difficulty: 3,
    passive: '+20% Reload Speed & AoE Size for [EXPLOSIVE] weapons',
    synopsis: 'Krakatoa Sentinel turrets equipped with Tank Tracks (lv12) follow you as a mobile fire escort. Demolitions Expert\'s +20% AoE makes each turret\'s fire cone 20% wider, significantly increasing the area each turret threatens per reload cycle. High Explosive Grenades pair for burst damage. Honest tier assessment: A-tier — turret builds require positioning management and lack the direct burst of S-tier builds. This is the polished, optimized variant that clearly outperforms the B-tier krakatoa-turret-demo by using Tank Tracks to eliminate the static turret placement problem.',
    playstyle: 'Unlike stationary turret builds, Tank Tracks turrets follow you at 43% movement speed — they are a fire escort that will catch up between waves. During combat, stay slightly ahead of the turret pack and let their wider (Demo +20% AoE) fire cones sweep incoming enemies. Use High Explosive Grenades to burst priority targets that the turrets cannot reach quickly. Extra Capacity at lv6 gives you a third turret — three fire-cone sweepers following you is the build\'s primary combat form. Manage turret lifetime by staying aware of their reload timing and repositioning when cone coverage drops.',
    strengths: [
      'Tank Tracks eliminates the core weakness of stationary turrets — the escort formation continuously covers your flanks and rear as you maneuver, removing manual placement decisions',
      'Demo\'s +20% AoE expands each turret\'s fire cone, which scales linearly with turret count — at 3 turrets from Extra Capacity, 20% wider coverage across three independent cones is a substantial threat area',
      'High Explosive Grenade with Demo AoE provides strong burst supplemental damage against elites that the DoT-heavy turrets handle slowly',
    ],
    weaknesses: [
      'Turrets follow at 43% player speed — if you sprint away from danger, the escort falls behind and leaves you temporarily unprotected until they catch up',
      'Turret damage is fire DoT; without Chemist Kit, the sustained DPS ceiling is lower than direct-damage builds at the same tier',
      'Positioning dependency remains even with Tank Tracks — turrets behind you cover your rear, but enemies approaching from the front need either grenades or deliberate repositioning to bring turret cones to bear',
    ],
    tips: [
      'Do not sprint away from your turrets — their 43% follow speed creates a coverage gap. Instead, move at a pace that keeps them in formation. Retreat in arcs rather than straight lines to maintain consistent cone coverage.',
      'Extra Capacity at lv6 (the balanced OC giving +1 Turret and +10% Range) is a mandatory first pickup — three turrets with Demo AoE is the baseline formation for this build.',
      'Tank Tracks is a balanced OC available at lv12. Do not wait for lv18 for this critical mobility upgrade — the moment turrets start following you, the build\'s core positioning problem is resolved.',
      'High Explosive Grenade with Hallucinogenic at lv18 gives fear CC — enemies fleeing in fear run across the turrets\' fire cones for extended DoT exposure, which is the strongest grenade OC for this build.',
      'Energy Bars is the ideal primary damage artifact here — the +1% Damage per level applies to both direct weapon damage and DoT ticks from the turrets, making it universally valuable as levels accumulate.',
    ],
    weapons: [
      {
        name: 'Krakatoa Sentinel',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+1 Turret and +10% Range — three turrets with Demo +20% AoE is the baseline combat formation; never skip this OC',
          },
          {
            level: 12,
            name: 'Tank Tracks',
            verdict: 'take',
            note: 'MUST-TAKE — turrets follow player at 43% movement speed; transforms static turrets into a mobile fire escort and eliminates the placement bottleneck of the B-tier version',
          },
          {
            level: 18,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+3 Turrets and +10% Range (unstable version) — adds three more turrets for a total of six; Demo\'s AoE bonus across six fire cones creates an overwhelming coverage zone',
          },
        ],
      },
      {
        name: 'High Explosive Grenade',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: '+15% Damage and +25% Reload Speed — flat bonus grenade power; faster reload means more burst coverage between turret DoT cycles',
          },
          {
            level: 12,
            name: 'Compact Explosives',
            verdict: 'take',
            note: '+30% Explosion Radius — Demo\'s +20% AoE stacks with this for a very large HEG burst; strong elite-clearing between turret repositions',
          },
          {
            level: 18,
            name: 'Hallucinogenic',
            verdict: 'take',
            note: '+25% Reload Speed and +25% Explosion Radius; fear CC makes enemies run across active turret fire cones for extended DoT exposure — best grenade OC for turret synergy',
          },
        ],
      },
      {
        name: 'Subata 120',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+25% Fire Rate and +25% Reload Speed — Subata becomes a rapid-fire gap-filler for enemies that breach past the turret escort formation',
          },
          {
            level: 12,
            name: 'Bigger Mags',
            verdict: 'take',
            note: '+100% Clip Size and +50% Piercing — extended magazine lets you spray fire into the approaching pack while turrets catch up during repositioning',
          },
          {
            level: 18,
            name: 'Double Barrel!',
            verdict: 'situational',
            note: 'Fires two parallel bullets — doubles Subata suppression during turret reposition windows; take if needing more direct fire output to cover escort gaps',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Reload Speed',
        'AoE Size',
        'Damage',
        'Fire Rate',
        'Status Effect Damage',
      ],
      avoid: [
        'Crit Chance',
        'Crit Damage',
        'Squint-EE5 (turret fire DoT ticks do not crit)',
      ],
    },
    artifacts: {
      always: [
        'Energy Bars',
        'Pay2Win Console',
        'Chemist Kit',
      ],
      good: [
        'Popup Tripod',
        'BLT Ration Pack',
        'Diver\'s Manual',
      ],
      never: [
        'Squint-EE5',
        'Gold-Tipped Bullets (spending on rerolls undermines the gold hoard)',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Deploy Escort Formation',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: Krakatoa Sentinel > High Explosive Grenade > Subata 120. Lock in Krakatoa immediately. Without Tank Tracks yet, turrets are stationary — place them at chokepoint entrances and stand near them. Demo\'s +20% AoE is active from the start, making even base turrets threaten a 20% wider cone than standard.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'At Krakatoa lv6, take Extra Capacity (+1 Turret, +10% Range). Three turrets covering a chokepoint entrance with Demo-expanded fire cones creates strong Stage 1 defense. Reroll once if only HP or mining cards appear.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Hoard gold. Spend 0–20g max. Buy Energy Bars immediately if offered — it compounds over the entire run and the HP penalty is manageable at low levels with BLT Ration Pack as a pairing target. Target ~80g saved by end of Stage 1.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Tank Tracks — Escort Online',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Continue funneling XP into Krakatoa toward lv12. This is the most critical level milestone — Tank Tracks at lv12 converts stationary turrets into mobile escorts. Pick up High Explosive Grenade for burst damage supplemental to the turret DoT.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'At Krakatoa lv12, ALWAYS take Tank Tracks — turrets now follow you at 43% movement speed. This is the single most important OC in the build. Never reroll this. The positional constraint of static turrets is completely resolved.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Now spend more freely. Buy Pay2Win Console if available. Buy Chemist Kit if available — turret fire DoT is amplified by Status Effect Damage. Spend ~40g on rerolls for Reload Speed or AoE Size upgrades. Save ~80g for Stage 3.',
          },
        ],
      },
      {
        stage: 3,
        title: 'ESCORT FORMATION COMPLETE',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. Krakatoa hits lv18 and gets Extra Capacity (unstable, +3 Turrets) — you now have six turrets following you in escort formation. With Demo\'s +20% AoE across all six fire cones, the combined threat area is enormous. Begin leveling HEG for burst supplemental.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Six turrets with Tank Tracks and Demo AoE is the build. At HEG lv6, take A Little More Oomph! for baseline improvement. Prioritize any AoE Size, Reload Speed, or Status Effect Damage upgrades from the shop — all three directly benefit the turret escort formation.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend freely. Complete Energy Bars + Pay2Win Console + Chemist Kit core if not yet assembled. Use saved gold for rerolls targeting AoE Size or Damage multipliers. Popup Tripod is worth buying here if you have natural still-standing positions — six fire cones and Popup stacks simultaneously is a powerful combination.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Fill Grenade Coverage',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Level High Explosive Grenade toward lv18 Hallucinogenic. Fear CC forces enemies to run through the turret escort formation for extended fire DoT exposure — this is the primary grenade synergy for this build. Level Subata 120 for rapid-fire gap coverage during turret reposition windows.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'HEG lv12: Compact Explosives for Demo-amplified AoE. HEG lv18: Hallucinogenic for fear CC synergy with turret fire cones. Subata lv6: Gas Rerouting for fast reload. Subata lv12: Bigger Mags for extended suppression clips.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save ~30g for Stage 5. Reroll once for BLT Ration Pack if Energy Bars HP penalty has become significant at high levels. A second Chemist Kit stacks additively for turret fire DoT amplification — high priority buy if available.',
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
            content: 'No new investments. For the Dreadnought, keep the turret escort in formation around the boss — six fire cones sweeping constantly with Demo AoE and Chemist Kit amplification generate strong sustained DoT. Use HEG with fear CC to keep the Dreadnought\'s add spawns running through the turret coverage zone.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'No more OC gating. Take any Damage, AoE Size, Reload Speed, or Status Effect Damage global upgrades. Pay2Win Console stacks continue incrementing on every reroll — continue spending if gold allows.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend every gold and nitra. Complete Energy Bars + Pay2Win Console + Chemist Kit trinity. If BLT Ration Pack is not yet held and your Max HP has dropped significantly from Energy Bars, prioritize it over any remaining damage artifact. The HP penalty at level 40+ is non-trivial without a recovery source.',
          },
        ],
      },
    ],
  },
  {
    id: 'heavy-gunner-coilgun',
    name: 'Heavy Gunner Coil Gun',
    class: 'Gunner',
    subclass: 'Heavy Gunner',
    tier: 'A',
    difficulty: 3,
    passive: '+25% Range & Reload for [HEAVY] weapons, -10% Move Speed — plant your feet and shred',
    synopsis: 'ArmsKore Coil Gun is [HEAVY] and [PLASMA] tagged — Heavy Gunner\'s passive applies fully, extending beam range and reload speed. Spliced Emitter at lv18 adds +75% Damage, +75% Range, and +75% Lifetime in one overclock. Thunderhead secondary handles swarm clearing with the same passive bonus.',
    playstyle: 'A precision-oriented Heavy Gunner variant. Stand at chokepoints and fire Coil Gun beams through dense columns — the [HEAVY] passive extends beam range, letting you engage before swarms close in. Thunderhead handles bulk swarm clearing. Rotate between the two: Coil Gun on elites and Wardens, Thunderhead on crowds. Slower ramp than the Thunderhead S build but stronger single-target priority killing.',
    strengths: [
      'Coil Gun is [HEAVY] tagged, so the +25% Range & Reload passive applies — longer beams and faster reloads than any other class running the same weapon',
      'Spliced Emitter at lv18 gives +75% Damage, +75% Range, and +75% Lifetime simultaneously — the largest single-overclock damage spike on any Gunner weapon',
      'Thunderhead secondary benefits from the Heavy Gunner passive too, meaning both carry and support weapon are boosted — higher total output than builds where only one weapon gets the subclass bonus',
    ],
    weaknesses: [
      'Coil Gun has a clip size of 1 and a 4-second reload — even with Heavy Gunner\'s +25% reload bonus you have significant downtime between shots against elites',
      'Neither weapon outputs meaningful AoE before leveling — early stages feel slow until both weapons hit lv12+',
      '-10% move speed penalty is real and punishing; Coil Gun rewards staying still to aim, but getting flanked while lining up a beam is an easy death',
    ],
    tips: [
      'Position so the Coil Gun beam sweeps through the longest corridor of incoming enemies — the [HEAVY] range bonus makes the beam reach enemies you cannot even see, clearing entire spawn corridors',
      'Explosive Reload OC at lv6 releases an explosion on every reload — with a 4-second base reload, every shot cycle also drops an AoE burst, effectively adding free splash damage at no DPS cost',
      'Squint-EE5 is strong here: Coil Gun\'s high base damage means crits are enormous, and the beam ticks multiple times per shot so Crit Chance applies repeatedly per trigger pull',
      'Popup Tripod synergizes with this build\'s stationary playstyle — at 15 stacks it adds +30% Fire Rate and +30% Reload Speed, and the Coil Gun\'s 1-round clip means Reload Speed is a genuine DPS stat',
      'Use Thunderhead to maintain spin and farm kills while Coil Gun reloads — never let both weapons be in cooldown simultaneously',
    ],
    weapons: [
      {
        name: 'ArmsKore Coil Gun',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Explosive Reload',
            verdict: 'take',
            note: '+25% Reload Speed plus an explosion on reload — free AoE burst every 3-second cycle',
          },
          {
            level: 12,
            name: 'More Beams',
            verdict: 'take',
            note: '+1 additional beam — more enemies hit per shot, scales with Heavy Gunner range bonus',
          },
          {
            level: 18,
            name: 'Spliced Emitter',
            verdict: 'take',
            note: 'MUST-TAKE — +75% Damage, +75% Range, +75% Lifetime. Transforms the Coil Gun into a devastating long-range beam cannon',
          },
        ],
      },
      {
        name: '"Thunderhead" Heavy Autocannon',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+25% Fire Rate and +25% Reload Speed — both amplified by Heavy Gunner passive for outsized value',
          },
          {
            level: 12,
            name: 'High Caliber Rounds',
            verdict: 'take',
            note: '+30% Damage, +100% Piercing — each autocannon round hits harder and passes through more enemies',
          },
          {
            level: 18,
            name: 'The Tightest of Springs',
            verdict: 'take',
            note: '+125% Fire Rate — transforms Thunderhead into a crowd-clearing buzzsaw as a secondary',
          },
        ],
      },
      {
        name: 'Seismic Repulsor',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Coolant Leak',
            verdict: 'take',
            note: 'Turrets apply cryo on knockback — freezes approaching enemies, setting up Coil Gun and Thunderhead follow-ups',
          },
          {
            level: 12,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+1 Turret and +15% Damage — more knockback coverage while you line up Coil Gun shots',
          },
          {
            level: 18,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+3 Turrets — near-permanent knockback field keeps enemies at Coil Gun\'s optimal range',
          },
        ],
      },
      {
        name: 'Cryo Cannon',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'More Beams',
            verdict: 'take',
            note: 'Wider freeze arc covers more swarm lanes while Coil Gun reloads',
          },
          {
            level: 12,
            name: 'Bigger Tanks',
            verdict: 'take',
            note: '+100% Lifetime for sustained freeze coverage without repositioning',
          },
          {
            level: 18,
            name: 'Even More Beams',
            verdict: 'take',
            note: '+3 Beams — full-width freeze wall; everything stops before it reaches melee range',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Reload Speed',
        'Damage',
        'Beam Range',
        'Piercing',
        'Crit Chance',
      ],
      avoid: [
        'Move Speed',
        'Potency',
        'Status Effect Damage',
      ],
    },
    artifacts: {
      always: [
        'Squint-EE5',
        'Popup Tripod',
        'Gold-Tipped Bullets',
      ],
      good: [
        'Ammo Rig',
        'Diver\'s Manual',
        'Nitragenic Powder',
      ],
      never: [
        'Chemist Kit',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Secure the Coil Gun',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: ArmsKore Coil Gun > Thunderhead > Seismic Repulsor. Coil Gun is the carry — lock it in immediately. Heavy Gunner\'s +25% Reload applies from lv1, so even an early Coil Gun shoots and reloads meaningfully faster than on any other subclass.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Coil Gun lv6: Explosive Reload. The reload explosion is free AoE damage every cycle and the +25% Reload Speed compounds with Heavy Gunner\'s passive. Don\'t reroll unless the other balanced OCs are unavailable.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Hoard gold — target 100g saved by Stage 1 end. Buy Gold-Tipped Bullets immediately if offered; this build stands still and farms kills, so gold accumulates quickly. Skip movement speed upgrades entirely.',
          },
        ],
      },
      {
        stage: 2,
        title: 'More Beams Breakpoint',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Keep funneling XP into Coil Gun. Pick up Thunderhead now as secondary — Heavy Gunner passive applies to it too, giving you a well-above-average autocannon as a cleanup tool. Deploy Seismic Repulsor for crowd control.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Coil Gun lv12: More Beams. Additional beams mean more enemies hit per shot and better AoE coverage — critical for handling mid-game spawn volume. Thunderhead lv6: Gas Rerouting for the amplified reload bonus.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Look for Squint-EE5 — Coil Gun beams tick multiple times per pull so Crit Chance applies repeatedly. Budget ~30g on Damage or Reload Speed upgrades. Save ~120g for Stage 3 power spike.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Spliced Emitter Online',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. Coil Gun lv18 with Spliced Emitter: +75% Damage, +75% Range, +75% Lifetime. The beam now spans enormous distances and deals massive damage per tick. Heavy Gunner\'s range bonus stacks on top — enemies die before reaching melee range.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Spliced Emitter is non-negotiable. Thunderhead lv12: High Caliber Rounds for the +30% Damage and +100% Piercing combo. Seismic Repulsor lv6: Coolant Leak to freeze everything the Repulsor pushes back.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend saved gold now. Complete Squint-EE5 + Gold-Tipped Bullets if not already held. Popup Tripod is an excellent buy at this stage — you\'re already stationary, the stacks are free DPS.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Fill Secondaries',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Thunderhead to lv18 for The Tightest of Springs — the secondary becomes a genuine crowd-clearer. Level Seismic Repulsor toward lv18 Extra Capacity for maximum knockback uptime. Add Cryo Cannon for freeze setup on heavy swarms.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Thunderhead lv18: The Tightest of Springs. Seismic Repulsor lv12: Extra Capacity. Cryo Cannon lv6: More Beams. All secondary OCs support keeping enemies at range for Coil Gun follow-ups.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save ~30g for Stage 5. Prioritize Ammo Rig if available — +50% Fire Rate on a stationary build with Popup Tripod already stacked creates massive DPS. Any Piercing or Damage global upgrades are insta-buy.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Final Push — Beam Everything',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'No new investments. Use Coil Gun Spliced Emitter beams on the Dreadnought — at max range and +75% Damage the beam shreds armor phases. Thunderhead The Tightest of Springs handles swarm adds during the fight.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Take any Damage, Piercing, or Reload Speed global upgrades. Beam Range cards are exceptional here — Spliced Emitter already extended range dramatically, additional range means hitting the Dreadnought from safe distances.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Hold gold until the Dreadnought encounter to maximize Gold-Tipped Bullets damage on boss. Mine all nitra for Nitragenic Powder scaling if held. Never reroll away from Piercing or Damage upgrades.',
          },
        ],
      },
    ],
  },
  {
    id: 'heavy-gunner-hurricane',
    name: 'Heavy Gunner Hurricane',
    class: 'Gunner',
    subclass: 'Heavy Gunner',
    tier: 'B',
    difficulty: 2,
    passive: '+25% Range & Reload for [HEAVY] weapons, -10% Move Speed — plant your feet and shred',
    synopsis: 'Hurricane is [HEAVY] tagged — Heavy Gunner\'s passive applies, improving reload speed on the 6-second base reload. The Favourite at lv18 doubles Hurricane damage and fire rate. B-tier because Hurricane\'s guided rockets scatter unpredictably and the passive doesn\'t meaningfully improve the rocket delivery mechanic the way it supercharges Thunderhead\'s sustained-fire rate.',
    playstyle: 'Deploy Hurricane to rain rockets on clustered swarms, then clean up survivors with Thunderhead. The Favourite OC makes Hurricane fire rapidly at the cost of penalizing all other weapons — commit to full rocket saturation during the reload window. Stand still: -10% move speed is manageable since Hurricane fires skyward and doesn\'t require line-of-sight repositioning. A more casual Heavy Gunner variant that auto-fires without precise aim.',
    strengths: [
      'Hurricane is [HEAVY] tagged — Heavy Gunner\'s +25% Reload Speed meaningfully reduces the 6-second reload, improving rockets-per-minute more than for other subclasses',
      'The Favourite at lv18 doubles damage and fire rate — nine rockets becomes a near-instant alpha strike that can wipe an entire swarm in one volley',
      'Rockets fly over terrain and fall from above, bypassing the -10% move speed drawback entirely since you never need line-of-sight to deliver damage',
    ],
    weaknesses: [
      'The Favourite OC applies -30% Damage and -30% Fire Rate to all other weapons — Thunderhead and Seismic Repulsor are significantly weakened, leaving your non-Hurricane options anemic',
      'Hurricane rockets target randomly among nearby enemies rather than focusing highest-priority targets — elites and Wardens may survive while chaff gets shredded, the opposite of what you want',
      'B-tier because the Heavy Gunner passive accelerates reload but doesn\'t amplify the fundamental Hurricane mechanic the way it triples Thunderhead\'s effective fire rate with The Tightest of Springs',
    ],
    tips: [
      'Pair with Seismic Repulsor to cluster enemies before firing Hurricane — random rocket targeting becomes effective saturation when all targets are compressed into one spot',
      'Skip The Favourite if your run has strong Thunderhead investment; Lead Wrapped Ammo on Thunderhead is a better lv18 choice if Hurricane is secondary',
      'Runic Warhead at lv6 adds +50% Explosion Radius — combined with Devastator\'s passive or standalone, makes each rocket cover significantly more ground and turns near-misses into kills',
      'Incendiary Payload OC makes rockets ignite the ground — stationary Heavy Gunner standing in a pre-chosen kill zone benefits enormously from persistent fire pools that damage everything funneled toward you',
    ],
    weapons: [
      {
        name: '"Hurricane" Guided Rocket System',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Runic Warhead',
            verdict: 'take',
            note: '+50% Explosion Radius — wider blasts cover more of the random targeting spread, turning near-misses into kills',
          },
          {
            level: 12,
            name: 'Spare Rockets',
            verdict: 'take',
            note: '+3 Clip Size — more rockets per volley before the [HEAVY] passive-boosted reload; higher burst damage window',
          },
          {
            level: 18,
            name: 'The Favourite',
            verdict: 'take',
            note: 'MUST-TAKE — +100% Damage, +100% Fire Rate. Rockets become an overwhelming alpha strike. Accept the other-weapon penalty.',
          },
        ],
      },
      {
        name: '"Thunderhead" Heavy Autocannon',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: 'Reload bonus amplified by Heavy Gunner passive — fills Hurricane\'s reload gap effectively',
          },
          {
            level: 12,
            name: 'High Caliber Rounds',
            verdict: 'take',
            note: '+30% Damage, +100% Piercing — compensates for The Favourite\'s -30% Thunderhead damage penalty',
          },
          {
            level: 18,
            name: 'The Tightest of Springs',
            verdict: 'situational',
            note: '+125% Fire Rate, but The Favourite\'s penalty applies here — evaluate at runtime; skip if Hurricane is primary damage source',
          },
        ],
      },
      {
        name: 'Seismic Repulsor',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Coolant Leak',
            verdict: 'take',
            note: 'Cryo on knockback clusters enemies for Hurricane targeting — mitigates the random spread problem',
          },
          {
            level: 12,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+1 Turret — more knockback charges keep enemies clustered for rocket saturation',
          },
          {
            level: 18,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+3 Turrets — maximum clustering effect; makes The Favourite alpha strike land most rockets on priority targets',
          },
        ],
      },
      {
        name: 'Cryo Cannon',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'More Beams',
            verdict: 'take',
            note: 'Wide freeze arc stops incoming swarms while Hurricane reloads',
          },
          {
            level: 12,
            name: 'Bigger Tanks',
            verdict: 'take',
            note: '+100% Lifetime — sustained freeze during Hurricane\'s reload window without moving',
          },
          {
            level: 18,
            name: 'Even More Beams',
            verdict: 'take',
            note: 'Maximum freeze coverage; Heavy Gunner doesn\'t move so wide beams replace mobility entirely',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Reload Speed',
        'Damage',
        'Explosion Radius',
        'Piercing',
      ],
      avoid: [
        'Move Speed',
        'Potency',
        'Fire Rate on secondary weapons when The Favourite is equipped',
      ],
    },
    artifacts: {
      always: [
        'Popup Tripod',
        'Gold-Tipped Bullets',
        'Diver\'s Manual',
      ],
      good: [
        'BLT Ration Pack',
        'Ammo Rig',
        'Turbo Encabulator',
      ],
      never: [
        'Squint-EE5 — Hurricane\'s random targeting means crits are inconsistent; -30% damage penalty is not offset',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Lay the Foundation',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: Hurricane > Thunderhead > Seismic Repulsor. If Hurricane isn\'t offered at lv5, take Thunderhead and wait — Heavy Gunner\'s passive ensures Thunderhead is still above-average. Don\'t invest heavily in Thunderhead before confirming Hurricane will be your carry.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Hurricane lv6: Runic Warhead for +50% Explosion Radius — early AoE coverage compensates for random targeting. Alternatively A Little More Oomph! if you need raw damage. Don\'t take Incendiary Payload unless running a fire-friendly loadout.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save gold (target 100g). Popup Tripod is a strong early buy — Heavy Gunner stands still, stacks cap quickly, and the bonus applies during Hurricane\'s long reload window when you\'re holding position.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Spare Rockets Breakpoint',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Continue leveling Hurricane. Add Seismic Repulsor as a crowd-control layer — clustering enemies improves Hurricane\'s random targeting. Thunderhead handles single targets between volleys.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Hurricane lv12: Spare Rockets for +3 clip size — more rockets per volley before reload. Thunderhead lv6: Gas Rerouting. Seismic Repulsor lv6: Coolant Leak for cryo-on-knockback clustering.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Damage and Explosion Radius upgrades when available. Gold-Tipped Bullets is excellent here — Heavy Gunner accumulates gold fast from stationary farming. Spend ~30g on rerolls to find Explosion Radius cards.',
          },
        ],
      },
      {
        stage: 3,
        title: 'The Favourite Online',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. Hurricane lv18 with The Favourite: double damage, double fire rate. Nine rockets fires nearly instantly — a swarm-wiping alpha strike. Accept that Thunderhead is weakened by -30%; it\'s now purely a gap-filler between Hurricane volleys.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'The Favourite is mandatory at lv18 — never reroll it. Thunderhead lv12: High Caliber Rounds to partially compensate for the damage penalty. Seismic Repulsor lv12: Extra Capacity.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend saved gold. Explosion Radius upgrades make The Favourite alpha strike cover larger areas — priority purchase. Turbo Encabulator scales with overclock count, which is building up nicely by Stage 3.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Max CC Coverage',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Level Seismic Repulsor to lv18 Extra Capacity — maximum turrets means near-permanent clustering for Hurricane targeting. Add Cryo Cannon for freeze coverage during the Hurricane reload cycle.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Seismic Repulsor lv18: Extra Capacity (+3 Turrets). Cryo Cannon lv6 and lv12: More Beams and Bigger Tanks. Thunderhead lv18: The Tightest of Springs if worth the slot over further CC investment.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save ~30g for Stage 5. Buy any Damage global upgrades. BLT Ration Pack is worth picking up here if health is a concern — stationary play means you absorb hits you can\'t dodge.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Final Push — Rain Rockets',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Hurricane The Favourite handles the Dreadnought adds — fire repeatedly to rain double-damage rockets on swarm reinforcements. Use Seismic Repulsor to cluster before each Hurricane volley. Thunderhead cleans up survivors.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Take every Damage and Explosion Radius upgrade available. Piercing on Thunderhead is valuable — high fire rate plus piercing creates effective AoE even against spread-out enemies.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Mine nitra aggressively. Gold-Tipped Bullets: hold gold reserves until Dreadnought encounter for maximum damage. Do not reroll away from Explosion Radius or Damage upgrades.',
          },
        ],
      },
    ],
  },
  {
    id: 'enforcer-thunderhead',
    name: 'Enforcer Thunderhead',
    class: 'Gunner',
    subclass: 'Enforcer',
    tier: 'A',
    difficulty: 2,
    passive: '+15% Damage, -20% Move Speed — plant your feet and delete everything in front of you',
    synopsis: 'Enforcer\'s +15% Damage applies universally to every weapon, including Thunderhead with The Tightest of Springs at lv18. High fire rate plus a flat damage multiplier equals enormous sustained DPS. A-tier rather than S because Thunderhead doesn\'t get the Heavy Gunner\'s +25% Reload bonus here, and the -20% move speed stacks with the autocannon\'s stationary playstyle for a punishing mobility penalty.',
    playstyle: 'More aggressive than Heavy Gunner Thunderhead — Enforcer\'s +15% Damage amplifies every bullet across the whole loadout, not just [HEAVY] weapons. Hold a chokepoint and sustain fire. Cryo Cannon freezes incoming waves to let Thunderhead\'s spin momentum carry through an entire frozen cluster without reload interruption. Enforce one position per wave rather than repositioning — the -20% move speed makes running to a new spot a death sentence mid-fight.',
    strengths: [
      'Enforcer\'s +15% Damage is a universal flat multiplier — applies to every bullet, every weapon, every stage without conditions, making the entire loadout stronger from moment one',
      'The Tightest of Springs at lv18 gives +125% Fire Rate — combined with +15% Damage on each shot, sustained DPS against frozen clusters exceeds what most builds can match',
      'Cryo Cannon freeze loop is unchanged from Heavy Gunner: freeze wave, unload Thunderhead, reload, repeat — simple and reliable at any stage of the run',
    ],
    weaknesses: [
      '-20% Move Speed is steeper than Heavy Gunner\'s -10% and stacks additively with any other movement penalties from artifacts — running Pickled Nitra on this build can reduce movement to nearly nothing',
      'No Heavy Gunner passive means Thunderhead reload speed is base, not boosted — longer downtime between clips compared to the S-tier build',
      'Enforcer tops at A in community meta: Lead Storm Minigun Bullet Hell ricochet (the S-tier enforcer build) is more efficient at swarm clearing because ricochets multiply damage without requiring direct aim',
    ],
    tips: [
      'Avoid Pickled Nitra — the -0.5% Move Speed per Nitra held stacks directly with the -20% Enforcer penalty, and at 40 Nitra the combined penalty approaches -40% Move Speed which is functionally immobilizing',
      'Gas Rerouting at lv6 is still the correct first Thunderhead OC even without the Heavy Gunner passive — you want maximum reload speed to reduce downtime, just without the passive amplifier',
      'Enforcer\'s +15% Damage applies to Cryo Cannon too — the freeze beam\'s damage ticks slightly harder, and Frost Burn fire damage is also amplified, making the secondary stronger than on other subclasses',
      'Popup Tripod synergizes directly with Enforcer\'s stand-and-fire identity — at 15 stacks you gain +30% Fire Rate and +30% Reload Speed, partially compensating for the absent Heavy Gunner passive',
    ],
    weapons: [
      {
        name: '"Thunderhead" Heavy Autocannon',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+25% Fire Rate and +25% Reload Speed — critical for uptime without the Heavy Gunner passive boosting reload',
          },
          {
            level: 12,
            name: 'High Caliber Rounds',
            verdict: 'take',
            note: '+30% Damage stacks multiplicatively with Enforcer\'s +15% flat bonus — each bullet hits substantially harder',
          },
          {
            level: 18,
            name: 'The Tightest of Springs',
            verdict: 'take',
            note: 'MUST-TAKE — +125% Fire Rate. Enforcer\'s +15% Damage on each accelerated bullet creates massive sustained DPS',
          },
        ],
      },
      {
        name: 'Cryo Cannon',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'More Beams',
            verdict: 'take',
            note: 'Wider freeze coverage; Enforcer can\'t outrun flankers so wider beam catches more angles',
          },
          {
            level: 12,
            name: 'Frost Burn',
            verdict: 'take',
            note: 'Cold damage triggers fire DoT — Enforcer\'s +15% Damage bonus applies to the fire ticks, making Frost Burn stronger here than on other subclasses',
          },
          {
            level: 18,
            name: 'Even More Beams',
            verdict: 'take',
            note: '+3 Beams — full freeze wall; the wider the freeze the longer Thunderhead can sustain fire before repositioning',
          },
        ],
      },
      {
        name: 'Seismic Repulsor',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Coolant Leak',
            verdict: 'take',
            note: 'Cryo on knockback extends freeze coverage — two freeze sources means the freeze window almost never expires mid-clip',
          },
          {
            level: 12,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+1 Turret, +15% Damage — Enforcer passive stacks with turret damage bonus for elevated knockback damage',
          },
          {
            level: 18,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+3 Turrets — maximum CC uptime; since Enforcer can\'t kite, turrets are the primary flanking defense',
          },
        ],
      },
      {
        name: 'BRT7 Burst Fire Gun',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+25% Fire Rate, +25% Reload Speed — BRT7 fires in 4 cardinal directions, amplified by Enforcer\'s damage bonus for 360° coverage',
          },
          {
            level: 12,
            name: 'High Caliber Rounds',
            verdict: 'take',
            note: '+30% Damage stacked with Enforcer passive — BRT7 becomes a meaningful flanker-killer in all four directions simultaneously',
          },
          {
            level: 18,
            name: 'Omni Barrel',
            verdict: 'take',
            note: '+50% Damage, +100% Reload Speed, fires in 8 directions — covers all angles Enforcer\'s -20% Move Speed prevents you from dodging toward',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Damage',
        'Fire Rate',
        'Reload Speed',
        'Piercing',
        'Kinetic Damage',
      ],
      avoid: [
        'Move Speed',
        'Potency',
        'Status Effect Damage',
        'Pickled Nitra artifact — stacks with -20% move speed penalty',
      ],
    },
    artifacts: {
      always: [
        'Popup Tripod',
        'Gold-Tipped Bullets',
        'Diver\'s Manual',
      ],
      good: [
        'Ammo Rig',
        'Energy Bars',
        'Squint-EE5',
      ],
      never: [
        'Pickled Nitra — move speed stack with Enforcer passive is dangerous',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Enforcer from Step One',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: Thunderhead > Cryo Cannon > BRT7. Unlike Heavy Gunner, every weapon benefits from Enforcer\'s +15% Damage — there\'s no passive incentive to force a specific weapon. However, Thunderhead is the correct carry because the fire rate ceiling makes sustained DPS the highest of any Gunner weapon.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Thunderhead lv6: Gas Rerouting. This is critical without the Heavy Gunner reload passive — you need to compensate for the base reload time manually. The combined +50% reload and fire rate keeps Thunderhead cycling faster.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 100g. Buy Popup Tripod if offered early — standing still is Enforcer\'s entire identity and 15 stacks of +2% Fire Rate and Reload Speed is obtainable from Stage 1. Avoid Move Speed upgrades (they\'re wasted on -20% penalty builds) and skip Pickled Nitra.',
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
            content: 'Keep leveling Thunderhead. Add Cryo Cannon for the freeze loop — Enforcer\'s +15% Damage makes Frost Burn fire ticks meaningfully stronger here. Deploy BRT7 for 4-directional defense while Thunderhead reloads.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Thunderhead lv12: High Caliber Rounds. The +30% Damage OC stacks multiplicatively with Enforcer\'s +15% flat bonus — this combination represents the highest per-bullet damage available to any Gunner subclass before lv18. Cryo Cannon lv6: More Beams.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Look for Gold-Tipped Bullets and Squint-EE5 — Thunderhead\'s high fire rate makes Crit Chance valuable. Spend ~30g on Kinetic Damage upgrades. Avoid Pickled Nitra; at -20% Move Speed any further penalty creates serious survival risk.',
          },
        ],
      },
      {
        stage: 3,
        title: 'The Tightest of Springs',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. Thunderhead lv18: The Tightest of Springs. +125% Fire Rate on top of Enforcer\'s +15% Damage creates the highest sustained DPS available to any Enforcer build. Freeze first, then unload the entire clip in under 3 seconds.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'The Tightest of Springs is mandatory. Cryo Cannon lv12: Frost Burn for fire DoT on cold application — Enforcer\'s damage bonus applies to every tick. Seismic Repulsor lv6: Coolant Leak for chained crowd control.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Full spend allowed. Complete Popup Tripod + Gold-Tipped Bullets combo if not already held. Ammo Rig is an excellent buy if the 75% Reload Speed threshold is reached — +50% Fire Rate on an already-boosted Thunderhead is staggering.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Secondary Completion',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Finish Cryo Cannon to lv18 for Even More Beams — a full-width freeze wall prevents flanking that -20% Move Speed makes otherwise lethal. Level BRT7 toward lv18 Omni Barrel for 8-directional coverage. Push Seismic Repulsor for maximum CC charges.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Cryo Cannon lv18: Even More Beams. BRT7 lv12: High Caliber Rounds (+30% Damage stacks with Enforcer passive). Seismic Repulsor lv12 and lv18: Extra Capacity upgrades. BRT7 lv18: Omni Barrel for 8-directional auto-coverage.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save ~30g for Stage 5. Buy Energy Bars if not held — each level adds +1% Damage stacking with Enforcer\'s flat bonus. Any Damage global cards are insta-buy.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Full Send — Stand and Deliver',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Thunderhead handles the Dreadnought — full clip in 3 seconds with Enforcer\'s damage bonus. Cryo Cannon freezes first. BRT7 Omni Barrel covers adds coming from all 8 directions during the boss fight. Seismic Repulsor pushes flankers away during Thunderhead reload windows.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Take every Damage and Kinetic Damage global upgrade. Piercing upgrades are excellent — Thunderhead at maximum fire rate with piercing creates AoE-equivalent damage against any dense pack.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Hold gold for Gold-Tipped Bullets maximum on Dreadnought. Mine all nitra. Do not pick up Pickled Nitra no matter how tempting — the move speed stack is fatal at -20% base.',
          },
        ],
      },
    ],
  },
  {
    id: 'enforcer-bulldog',
    name: 'Enforcer Bulldog',
    class: 'Gunner',
    subclass: 'Enforcer',
    tier: 'B',
    difficulty: 3,
    passive: '+15% Damage, -20% Move Speed — plant your feet and delete everything in front of you',
    synopsis: 'Bulldog is a [MEDIUM] precision revolver — not [HEAVY], so no Heavy Gunner passive. Enforcer\'s +15% Damage applies universally and makes each Bulldog shot hit extremely hard. B-tier because the 0.83 base fire rate conflicts with Enforcer\'s stationary-tank identity: Enforcer wants sustained fire pressure, and a 6-shot revolver with a 3-second reload creates long dead windows. Super Reload Shield at lv18 mitigates reload risk with +100% Armor during reloads.',
    playstyle: 'High-risk precision play. Each Bulldog shot with Enforcer\'s +15% Damage and High Caliber Rounds OC deals enormous damage, but the 3-second reload exposes you. Stand at range, fire 6 heavy shots, then activate Super Reload Shield — the +100% Armor during reload buys the safety window. BRT7 secondary covers the reload gap in all four directions. Requires precise aim and disciplined reload timing; not a beginner build.',
    strengths: [
      'Enforcer\'s +15% Damage makes each Bulldog shot hit harder than any other Gunner subclass running the same weapon — combined with High Caliber Rounds at lv12, individual shots can one-shot non-elite enemies',
      'Super Reload Shield at lv18 grants +100% Armor during the long reload — the biggest vulnerability of the Bulldog (3-second reload) is directly covered by the best available unstable overclock',
      'Bulldog\'s 100 base damage means even before overclocks it outperforms most weapons in the game on single-target hits; Enforcer passive amplifies that ceiling meaningfully',
    ],
    weaknesses: [
      'Six shots and a 3-second reload on a build with -20% Move Speed creates a genuine death window — Super Reload Shield helps but requires memorizing reload timing precisely',
      'Bulldog is [MEDIUM] tagged, not [HEAVY] — the Heavy Gunner passive that would amplify range and reload doesn\'t apply; this is purely an Enforcer-only weapon choice',
      'Low fire rate fundamentally conflicts with Enforcer\'s sustained-fire identity; this build is B-tier because Enforcer optimized around a minigun or autocannon (sustained fire) is simply more efficient than a revolver',
    ],
    tips: [
      'Super Reload Shield timing is the core skill: fire exactly 6 shots to empty the clip, then immediately enter reload — the +100% Armor activates the instant reload begins and lasts the full 3 seconds',
      'BRT7 Burst Fire Gun with Gas Rerouting is the ideal secondary here — fire BRT7 in all 4 cardinal directions during Bulldog\'s reload window to maintain damage output without breaking the armor shield',
      'High Caliber Rounds OC on Bulldog gives +100% Piercing in addition to +30% Damage — at 6 shots per clip, each piercing bullet through a dense lane covers substantial enemies before reload',
      'Double Barrel! at lv18 fires two parallel bullets simultaneously — combined with Enforcer\'s +15% Damage and High Caliber Rounds, each trigger pull effectively doubles output. Consider as an alternative to Super Reload Shield on lower-difficulty runs where armor isn\'t critical.',
    ],
    weapons: [
      {
        name: '"Bulldog" Heavy Revolver',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'High Caliber Rounds',
            verdict: 'take',
            note: '+30% Damage, +100% Piercing — Enforcer\'s +15% flat bonus stacks with this; each shot pierces through a column of enemies',
          },
          {
            level: 12,
            name: 'Bigger Mags',
            verdict: 'take',
            note: '+100% Clip Size — doubles from 6 to 12 shots before reload; dramatically reduces reload frequency and death-window exposure',
          },
          {
            level: 18,
            name: 'Super Reload Shield',
            verdict: 'take',
            note: 'MUST-TAKE — +75% Damage, +50% Fire Rate, +100% Armor during reload. Converts the reload window from a vulnerability into a fortified defensive window',
          },
        ],
      },
      {
        name: 'BRT7 Burst Fire Gun',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+25% Fire Rate, +25% Reload Speed — fires in 4 cardinal directions; active during Bulldog reload window for continuous 360° damage',
          },
          {
            level: 12,
            name: 'High Caliber Rounds',
            verdict: 'take',
            note: '+30% Damage, +100% Piercing on BRT7\'s 4-directional burst — Enforcer passive applies, making the backup weapon genuinely dangerous',
          },
          {
            level: 18,
            name: 'Omni Barrel',
            verdict: 'take',
            note: '+50% Damage, +100% Reload Speed, fires in 8 directions — covers all flanking angles that -20% Move Speed prevents dodging',
          },
        ],
      },
      {
        name: 'Seismic Repulsor',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Coolant Leak',
            verdict: 'take',
            note: 'Cryo on knockback freezes enemies during Bulldog\'s reload window — frozen enemies can\'t close to melee range during the 3-second reload',
          },
          {
            level: 12,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+1 Turret — more knockback charges available during Bulldog reload cycles',
          },
          {
            level: 18,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+3 Turrets — maximum CC coverage; essential since -20% Move Speed makes escaping melee range nearly impossible',
          },
        ],
      },
      {
        name: '"Thunderhead" Heavy Autocannon',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: 'Sustained-fire autocannon as gap-filler — handles bulk swarms that Bulldog\'s low fire rate can\'t clear efficiently',
          },
          {
            level: 12,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: '+15% Damage, +25% Reload Speed — Enforcer bonus applies; Thunderhead becomes a competent secondary at minimal investment',
          },
          {
            level: 18,
            name: 'The Tightest of Springs',
            verdict: 'situational',
            note: '+125% Fire Rate — if Thunderhead is your backup carry rather than Bulldog; reconsider build identity at this point',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Damage',
        'Reload Speed',
        'Piercing',
        'Armor',
        'Crit Chance',
      ],
      avoid: [
        'Move Speed',
        'Fire Rate on Bulldog — already slow, diminishing returns',
        'Potency',
      ],
    },
    artifacts: {
      always: [
        'Popup Tripod',
        'Diver\'s Manual',
        'Gold-Tipped Bullets',
      ],
      good: [
        'BLT Ration Pack',
        'Salty Pretzel',
        'Energy Bars',
      ],
      never: [
        'Pickled Nitra — -20% Move Speed plus Nitra-scaling speed penalty is a death sentence',
        'Squint-EE5 — -30% Damage penalty on a precision revolver that relies on each shot hitting hard is unacceptable',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Establish the Revolver Loop',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: Bulldog > BRT7 > Thunderhead. Bulldog is the carry. Even at low level with Enforcer\'s +15% Damage, each Bulldog shot outperforms most weapons. Pick a position and practice the 6-shot reload cycle from Stage 1.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Bulldog lv6: High Caliber Rounds. +30% Damage and +100% Piercing stacks immediately with Enforcer\'s passive — Bulldog shots start punching through groups instead of stopping at single targets. Critical for early stage efficiency.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 100g. Buy Popup Tripod if offered — stationary Bulldog play stacks the artifact naturally. Avoid Pickled Nitra under any circumstances. Do NOT buy Squint-EE5 — the -30% Damage penalty contradicts the build\'s core identity of maximum per-shot damage.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Bigger Mags',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Keep leveling Bulldog. Add BRT7 as secondary — it fires in 4 cardinal directions during Bulldog reloads, maintaining continuous damage pressure. Deploy Seismic Repulsor for knockback CC during reload windows.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Bulldog lv12: Bigger Mags. Doubling from 6 to 12 shots before reload dramatically reduces death-window exposure and gives more time to fire before entering the vulnerable reload state. BRT7 lv6: Gas Rerouting.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Look for BLT Ration Pack — at -20% Move Speed you absorb hits you can\'t dodge; the +80 Max HP and +2/s regen is genuine survivability, not luxury. Budget ~30g on Damage or Armor upgrades. Save 100g for Stage 3.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Super Reload Shield Online',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. Bulldog lv18: Super Reload Shield. +75% Damage, +50% Fire Rate, and +100% Armor during reload transforms the biggest weakness into a strength — reload windows become safe, armored windows where you cannot be killed. The Bulldog is now a fearsome weapon.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Super Reload Shield is the build-defining overclock. BRT7 lv12: High Caliber Rounds. Seismic Repulsor lv6: Coolant Leak. During the Super Reload Shield armor window, position the Repulsor to push enemies into a frozen kill zone for the next clip.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Full spend. Complete Popup Tripod and Gold-Tipped Bullets. Salty Pretzel (+1 Armor per 2% missing HP) pairs excellently with Super Reload Shield — stack Armor during reload, then let Salty Pretzel maintain a defensive baseline outside of it.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Fill Secondary Weapons',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Level BRT7 toward lv18 Omni Barrel — 8-directional coverage eliminates flanking threats that -20% Move Speed makes fatal. Seismic Repulsor lv12 and lv18 for maximum knockback turrets. Thunderhead as fourth slot if available for sustained-fire backup.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'BRT7 lv18: Omni Barrel — +50% Damage, +100% Reload, 8 directions. Seismic Repulsor lv12 and lv18: Extra Capacity (both tiers). Thunderhead lv6 and lv12: Gas Rerouting and A Little More Oomph! if it becomes your sustained-fire slot.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save ~30g for Stage 5. Energy Bars are excellent here — each level adds +1% Damage stacking with Enforcer\'s passive. Any Damage or Piercing global upgrade is an immediate buy.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Final Push — Armor and Shoot',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Bulldog Super Reload Shield on the Dreadnought: empty the 12-shot clip (Bigger Mags) as fast as possible, reload behind +100% Armor, repeat. BRT7 Omni Barrel in 8 directions handles all swarm adds during the boss fight.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Take every Damage and Piercing upgrade. Armor upgrades compound with Super Reload Shield and Salty Pretzel for a near-impenetrable reload window by Stage 5. Kinetic Damage cards are insta-buy.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Hold gold until Dreadnought encounter for Gold-Tipped Bullets maximum. Mine nitra. Do not buy Pickled Nitra or Squint-EE5 regardless of what else is on offer.',
          },
        ],
      },
    ],
  },
  {
    id: 'devastator-coilgun',
    name: 'Devastator Coil Gun',
    class: 'Gunner',
    subclass: 'Devastator',
    tier: 'A',
    difficulty: 3,
    passive: '+30% Knockback Force, +15% Explosion Radius — all weapons push harder and blast wider',
    synopsis: 'ArmsKore Coil Gun is [HEAVY] and [PLASMA] — the beam fires through enemies, and Devastator\'s +30% Knockback Force sends hit targets flying into walls. Terrain collision deals bonus damage. Pair with Seismic Repulsor to chain knockback from two sources. A-tier: better Warden priority killing than devastator-repulsor because Coil Gun aims precisely at high-value targets.',
    playstyle: 'Position in the center of each room. Coil Gun beams travel long distances and knock hit enemies into the nearest wall from any direction — from the center, the wall is equidistant in all directions, maximizing terrain damage on knocked-back enemies. Seismic Repulsor creates secondary knockback fields. Devastator\'s +15% Explosion Radius means any explosion from HE grenades or Repulsor blasts covers significantly more ground. Precise but powerful.',
    strengths: [
      'Coil Gun beams pierce terrain and hit multiple enemies in a line — every hit triggers Devastator\'s +30% Knockback Force, sending entire columns of enemies into walls simultaneously for stacked terrain damage',
      'Spliced Emitter at lv18 adds +75% Range and +75% Damage — longer beams reach enemies before they cluster near you, and knocked-back enemies travel farther and hit walls harder',
      'Better Warden priority killing than devastator-repulsor (B-tier) because Coil Gun aims precisely at the highest-priority target instead of relying on omnidirectional knockback that may miss the Warden entirely',
    ],
    weaknesses: [
      'Devastator\'s knockback loop requires enemies to be near walls — in open arenas without tight corridors, knocked-back enemies may not reach a wall, negating terrain damage',
      'Coil Gun\'s 1-round clip means each knockback chain requires a 4-second reload; if the first shot doesn\'t clear the knockback lane, you\'re defenseless during reload',
      'Seismic Repulsor turrets push enemies away from you — properly oriented, this is useful, but misplaced turrets push enemies out of Coil Gun beam range rather than into walls',
    ],
    tips: [
      'Position in the center of arenas, not against walls — from the center, a knockback in any direction sends enemies into a wall. From a wall, knockback sends enemies into open space and negates terrain damage',
      'Explosive Reload OC on Coil Gun at lv6 releases an explosion on every reload — combined with Devastator\'s +15% Explosion Radius, the reload itself becomes a damage source, partially filling the 4-second dead window',
      'Seismic Repulsor turrets should be placed between you and the incoming swarm, not behind you — this way knockback sends enemies away from you and toward the far walls rather than scattering them around the room',
      'Even More Beams at lv18 fires 4 simultaneous Coil Gun beams — with Devastator\'s +30% Knockback Force, four lanes of enemies get knocked back simultaneously; from center positioning, four walls get hit at once',
    ],
    weapons: [
      {
        name: 'ArmsKore Coil Gun',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Explosive Reload',
            verdict: 'take',
            note: '+25% Reload Speed plus an explosion on reload — Devastator\'s +15% Explosion Radius makes the reload explosion cover significantly more ground',
          },
          {
            level: 12,
            name: 'More Beams',
            verdict: 'take',
            note: '+1 additional beam — two lanes of knockback per shot; Devastator pushes both lanes into walls',
          },
          {
            level: 18,
            name: 'Even More Beams',
            verdict: 'take',
            note: 'MUST-TAKE — +3 beams total (4 simultaneous). Four knockback lanes from center position hit four walls at once for maximum terrain damage',
          },
        ],
      },
      {
        name: 'Seismic Repulsor',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Coolant Leak',
            verdict: 'take',
            note: 'Cryo on knockback — freezes enemies mid-push, preventing them from immediately returning after hitting the wall',
          },
          {
            level: 12,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+1 Turret, +15% Damage — more knockback sources means more enemies hitting walls per second',
          },
          {
            level: 18,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+3 Turrets — maximum simultaneous knockback fields; chains with Coil Gun beam knockback for continuous wall-bounce damage',
          },
        ],
      },
      {
        name: 'BRT7 Burst Fire Gun',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+25% Fire Rate, +25% Reload Speed — 4-directional burst covers all angles during Coil Gun reloads',
          },
          {
            level: 12,
            name: 'High Caliber Rounds',
            verdict: 'take',
            note: '+30% Damage, +100% Piercing — fires in 4 directions, each shot piercing through multiple enemies per burst',
          },
          {
            level: 18,
            name: 'Omni Barrel',
            verdict: 'take',
            note: '+50% Damage, 8-directional fire — covers all angles while Coil Gun reloads; pairs with Devastator knockback for 360° coverage',
          },
        ],
      },
      {
        name: 'Cryo Cannon',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'More Beams',
            verdict: 'take',
            note: 'Freeze approaching enemies before Coil Gun beams knockback — frozen targets hit walls and can\'t move away from terrain damage zones',
          },
          {
            level: 12,
            name: 'Impact Punch',
            verdict: 'situational',
            note: '+60% Damage on a weapon that pairs with Devastator knockback — frozen enemies get blasted further on knockback',
          },
          {
            level: 18,
            name: 'Even More Beams',
            verdict: 'take',
            note: '+3 Beams — wide freeze coverage across the arena; keeps more enemies frozen and stationary for Coil Gun precision beams',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Damage',
        'Reload Speed',
        'Explosion Radius',
        'Knockback Force',
        'Beam Range',
      ],
      avoid: [
        'Potency',
        'Status Effect Damage',
        'Move Speed upgrades that create false mobility expectations',
      ],
    },
    artifacts: {
      always: [
        'Gold-Tipped Bullets',
        'Popup Tripod',
        'Diver\'s Manual',
      ],
      good: [
        'Squint-EE5',
        'Ammo Rig',
        'Turbo Encabulator',
      ],
      never: [
        'Chemist Kit — no status effect damage sources in this build',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Coil Gun + Center Position',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: ArmsKore Coil Gun > Seismic Repulsor > BRT7. Coil Gun is the carry. Devastator\'s +30% Knockback Force applies immediately — even low-level Coil Gun beams push enemies hard. Establish center-room positioning habits from Stage 1.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Coil Gun lv6: Explosive Reload. The reload explosion gains +15% Explosion Radius from Devastator\'s passive from the start. Each Coil Gun cycle is: fire beam (knockback), reload (explosion), repeat.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 100g. Buy Gold-Tipped Bullets early — stationary center-room play accumulates gold fast. Popup Tripod is excellent if offered early. Skip Move Speed upgrades entirely.',
          },
        ],
      },
      {
        stage: 2,
        title: 'More Beams',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Continue leveling Coil Gun. Add Seismic Repulsor — place turrets between you and enemy spawn to chain knockback with Coil Gun beams. Add BRT7 for 4-directional burst coverage during reloads.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Coil Gun lv12: More Beams. Two simultaneous knockback lanes from one shot — from center position, both lanes hit opposite walls. Seismic Repulsor lv6: Coolant Leak to freeze enemies after knockback. BRT7 lv6: Gas Rerouting.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Explosion Radius upgrades — Devastator\'s +15% passive amplifies these further. Look for Turbo Encabulator (scales with overclock count, building toward 6+ by Stage 4). Spend ~30g on Damage upgrades.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Even More Beams Online',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. Coil Gun lv18: Even More Beams — 4 simultaneous beams fire from center position, knocking enemies into all four walls at once. Devastator\'s amplified knockback converts to massive terrain damage from every beam hit.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Even More Beams is mandatory. Seismic Repulsor lv12: Extra Capacity (+1 Turret). BRT7 lv12: High Caliber Rounds. Cryo Cannon lv6: More Beams for freeze setup before Coil Gun volleys.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Full spend. Complete Gold-Tipped Bullets + Popup Tripod combo. Squint-EE5 is viable here — 4 beam hits per shot with Crit Chance means crits fire on multiple beams per trigger pull.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Max CC and Coverage',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Seismic Repulsor to lv18 Extra Capacity for maximum turrets. Level Cryo Cannon for freeze coverage. BRT7 toward lv18 Omni Barrel for 8-directional gap coverage during Coil Gun reloads.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Seismic Repulsor lv18: Extra Capacity (+3 Turrets). Cryo Cannon lv12: Impact Punch for bonus damage on frozen wall-bounce targets. BRT7 lv18: Omni Barrel.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save ~30g for Stage 5. Ammo Rig is excellent if you have reached 75% Reload Speed threshold — +50% Fire Rate on a stationary beam build with Popup Tripod already stacked is huge. Any Explosion Radius or Damage global upgrade is mandatory.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Final Push — Wall Bounce the Boss',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Coil Gun Even More Beams on the Dreadnought from center-room — 4 simultaneous beams with Devastator +30% knockback send the boss into walls repeatedly for terrain damage. Seismic Repulsor chain-knockback on adds.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Take every Damage, Explosion Radius, and Knockback Force global upgrade. Beam Range upgrades compound with Spliced Emitter\'s +75% Range — enemies hit walls before they can close distance.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Hold gold for Gold-Tipped Bullets on Dreadnought encounter. Mine all nitra. Do not buy Chemist Kit or any DoT-focused artifacts — this build deals zero status damage.',
          },
        ],
      },
    ],
  },
  {
    id: 'devastator-hurricane',
    name: 'Devastator Hurricane',
    class: 'Gunner',
    subclass: 'Devastator',
    tier: 'A',
    difficulty: 2,
    passive: '+30% Knockback Force, +15% Explosion Radius — all weapons push harder and blast wider',
    synopsis: 'Hurricane is [HEAVY] and [EXPLOSIVE] tagged. Devastator\'s +15% Explosion Radius makes each rocket\'s blast zone meaningfully larger. The Favourite at lv18 doubles damage and fire rate — combined with expanded explosions, this creates a rain of amplified AoE rockets. Pair with Seismic Repulsor to cluster-then-explode. A-tier: the +15% Explosion Radius synergy with rockets is stronger than a flat damage bonus on a direct-fire weapon.',
    playstyle: 'Set up Seismic Repulsor turrets between you and spawn points to cluster incoming enemies. Fire Hurricane\'s guided rockets into clustered groups — Devastator\'s expanded explosion radius means each rocket converts near-misses into kills. The Favourite doubles fire rate, making the 9-rocket clip an immediate saturation strike. After The Favourite activates, all 9 rockets drop nearly simultaneously with doubled damage and widened explosions. Highly effective against waves; less effective against single elites.',
    strengths: [
      'Devastator\'s +15% Explosion Radius applies directly to Hurricane\'s blast zones — each of the 9 guided rockets covers significantly more ground per impact, turning clustered swarms into complete wipes',
      'The Favourite doubles both damage and fire rate simultaneously — the 9-rocket clip fires nearly instantly for a concentrated alpha strike, and each rocket hits harder with wider explosions',
      'Rockets fly over terrain and target enemies automatically — Devastator\'s -10% Move Speed penalty is irrelevant because you never need line-of-sight to deliver the damage',
    ],
    weaknesses: [
      'The Favourite\'s -30% Damage and -30% Fire Rate penalty on other weapons weakens Seismic Repulsor and Thunderhead significantly — commit to Hurricane as the primary damage source',
      'Hurricane\'s random targeting spread means individual elites and Wardens may receive only 1-2 rockets while chaff absorbs the other 7 — Devastator knockback doesn\'t help rocket targeting accuracy',
      'Devastator\'s +30% Knockback Force doesn\'t synergize meaningfully with rocket explosions the way it does with Coil Gun beams — rockets don\'t pierce, so knockback force only applies to the explosion impact itself',
    ],
    tips: [
      'Place Seismic Repulsor turrets perpendicular to Hurricane\'s firing axis — turrets push enemies into the rocket fall zone rather than away from it, dramatically improving the random targeting distribution',
      'Runic Warhead at lv6 adds +50% Explosion Radius on top of Devastator\'s +15% — combined, rocket blast zones are roughly 70% wider than base, making even distant near-miss rockets deal full damage',
      'The Favourite\'s penalty applies to ALL other weapons — if using Thunderhead as secondary, consider High Caliber Rounds early (before lv18) to pre-invest in damage that partially survives The Favourite penalty',
      'Incendiary Payload makes rockets leave fire zones — combined with Devastator\'s +15% Explosion Radius, the fire zones are larger than normal, creating persistent area denial that lingers between Hurricane volleys',
    ],
    weapons: [
      {
        name: '"Hurricane" Guided Rocket System',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Runic Warhead',
            verdict: 'take',
            note: '+50% Explosion Radius — stacks with Devastator\'s +15% passive for explosions roughly 70% wider than base; every near-miss becomes a kill',
          },
          {
            level: 12,
            name: 'Spare Rockets',
            verdict: 'take',
            note: '+3 Clip Size — 12 rockets instead of 9 before reload; more expanded-explosion impacts per volley with The Favourite\'s doubled fire rate',
          },
          {
            level: 18,
            name: 'The Favourite',
            verdict: 'take',
            note: 'MUST-TAKE — +100% Damage, +100% Fire Rate. 12 rockets fire nearly instantly, each with wider Devastator explosions. Accept the other-weapon penalty.',
          },
        ],
      },
      {
        name: 'Seismic Repulsor',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Coolant Leak',
            verdict: 'take',
            note: 'Cryo on knockback freezes clustered enemies before the Hurricane alpha strike — frozen targets can\'t scatter from the rocket impact zones',
          },
          {
            level: 12,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+1 Turret, +15% Damage — more knockback sources cluster enemies into rocket targeting zones; Devastator\'s knockback force amplified per turret',
          },
          {
            level: 18,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+3 Turrets — maximum clustering field; every enemy in the room gets pushed toward a common point before the Hurricane volley',
          },
        ],
      },
      {
        name: '"Thunderhead" Heavy Autocannon',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: 'Sustained-fire cleanup during Hurricane reloads — Heavy Gunner passive doesn\'t apply here but base Thunderhead is still a competent secondary',
          },
          {
            level: 12,
            name: 'High Caliber Rounds',
            verdict: 'take',
            note: '+30% Damage, +100% Piercing — pre-invested before The Favourite applies its -30% penalty; partially mitigates the damage reduction',
          },
          {
            level: 18,
            name: 'The Tightest of Springs',
            verdict: 'situational',
            note: 'The Favourite reduces Thunderhead to -30% Damage before this OC — evaluate whether +125% Fire Rate on a 70% Damage weapon outperforms other lv18 investments',
          },
        ],
      },
      {
        name: 'BRT7 Burst Fire Gun',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+25% Fire Rate, +25% Reload Speed — 4-directional burst fills Hurricane\'s reload gap; The Favourite\'s penalty applies but BRT7 is fast enough to compensate with volume',
          },
          {
            level: 12,
            name: 'High Caliber Rounds',
            verdict: 'take',
            note: '+30% Damage, +100% Piercing — 4-directional piercing bursts clear lanes during Hurricane reload; Devastator bonus applies to each burst direction',
          },
          {
            level: 18,
            name: 'Omni Barrel',
            verdict: 'take',
            note: '+50% Damage, +100% Reload Speed, 8 directions — covers all angles; preferred over Bullet Helix for predictable direction coverage during reload windows',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Explosion Radius',
        'Damage',
        'Reload Speed',
        'Knockback Force',
      ],
      avoid: [
        'Potency',
        'Status Effect Damage',
        'Move Speed — Devastator penalty not worth offsetting when rockets require no line-of-sight',
      ],
    },
    artifacts: {
      always: [
        'Gold-Tipped Bullets',
        'Popup Tripod',
        'Diver\'s Manual',
      ],
      good: [
        'Turbo Encabulator',
        'BLT Ration Pack',
        'Energy Bars',
      ],
      never: [
        'Squint-EE5 — Hurricane\'s random targeting makes consistent crits impossible; -30% Damage penalty is unacceptable on rocket damage',
        'Pickled Nitra — move speed penalty stacks with Devastator base',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Hurricane Setup',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: Hurricane > Seismic Repulsor > Thunderhead. Hurricane is the carry. Even without The Favourite, each rocket benefits from Devastator\'s +15% Explosion Radius — wider blasts from Stage 1. Seismic Repulsor clusters enemies for better rocket targeting.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Hurricane lv6: Runic Warhead. +50% Explosion Radius stacks with Devastator\'s +15% passive — rocket blasts are dramatically wider from the first overclock. This is the reason Devastator synergizes uniquely with Hurricane.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 100g. Buy Gold-Tipped Bullets early if offered — stationary Devastator farming builds gold reserves quickly. Buy Popup Tripod for the stationary stack bonus. Avoid Squint-EE5 and Pickled Nitra entirely.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Spare Rockets',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Continue leveling Hurricane. Deploy Seismic Repulsor — place turrets between spawn and your position to funnel enemies into rocket targeting range. Add Thunderhead for sustained cleanup between Hurricane volleys.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Hurricane lv12: Spare Rockets for +3 Clip Size. More rockets per volley extends the window of wider-explosion impacts before reload. Seismic Repulsor lv6: Coolant Leak to freeze clustered enemies. Thunderhead lv6: Gas Rerouting.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Explosion Radius upgrades — each one is amplified by Devastator\'s +15% passive. Look for Turbo Encabulator (benefits from building overclock count). Spend ~30g on Damage upgrades. Save 100g for Stage 3.',
          },
        ],
      },
      {
        stage: 3,
        title: 'The Favourite Online',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. Hurricane lv18: The Favourite — +100% Damage, +100% Fire Rate. Twelve rockets (Spare Rockets) now fire nearly instantly, each with Runic Warhead + Devastator explosion radius. One volley wipes an entire swarm. Accept the -30% penalty on other weapons.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'The Favourite is mandatory. Seismic Repulsor lv12: Extra Capacity. Thunderhead lv12: High Caliber Rounds to pre-compensate for The Favourite\'s damage reduction. BRT7 lv6: Gas Rerouting for gap-filler coverage.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Full spend now. Complete Gold-Tipped Bullets + Popup Tripod. Explosion Radius upgrades are critical here — they multiply directly with The Favourite\'s doubled damage. Turbo Encabulator is strong at this point with 5+ overclocks equipped.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Max CC and Clustering',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Seismic Repulsor to lv18 Extra Capacity for maximum turret count — 5 simultaneous knockback turrets create an inescapable clustering field. Level BRT7 toward Omni Barrel for 8-directional reload coverage.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Seismic Repulsor lv18: Extra Capacity (+3 Turrets). BRT7 lv12 and lv18: High Caliber Rounds and Omni Barrel. Thunderhead lv18: The Tightest of Springs only if The Favourite\'s penalty still leaves enough Thunderhead DPS to justify the overclock investment.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save ~30g for Stage 5. Buy BLT Ration Pack if HP is a concern — Devastator\'s stationary nature means absorbing hits. Any Explosion Radius or Damage global upgrade is mandatory. Energy Bars compounds at high level.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Final Push — Rocket Rain',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Hurricane The Favourite on all swarm adds during the Dreadnought fight — cluster with Seismic Repulsor, then fire all 12 rockets in under 2 seconds for a complete wipe. Thunderhead handles the Dreadnought itself between Hurricane volleys.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Take every Explosion Radius, Damage, and Knockback Force global upgrade. Explosion Radius upgrades are uniquely valuable here — they stack with both Runic Warhead (+50%) and Devastator\'s passive (+15%) for total blast zones roughly 80% wider than base.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Hold gold for Gold-Tipped Bullets maximum on Dreadnought. Mine all nitra. Do not buy Squint-EE5 or Pickled Nitra regardless of what else is offered. Explosion Radius and Damage cards take absolute priority.',
          },
        ],
      },
    ],
  },
  {
    id: 'weapons-specialist-brt7-spam',
    name: 'BRT7 Weapons Specialist',
    class: 'Gunner',
    subclass: 'Weapons Specialist',
    tier: 'B',
    difficulty: 3,
    passive: 'After firing 100 [PROJECTILE] shots, automatically fire 8 high-damage projectiles in all directions — scales with Kinetic and Projectile Damage upgrades and can crit',
    synopsis: 'Rush BRT7 to lv18 for Omni Barrel — fires in 8 directions with +50% Damage and +100% Reload Speed, turning BRT7 into an omnidirectional suppressor. BRT7\'s burst-fire pattern fires 4 projectiles per burst, accumulating the 100-shot passive counter faster than most weapons. The Weapons Specialist passive then fires an additional 8-projectile omnidirectional burst, effectively doubling the directional coverage.',
    playstyle: 'BRT7 fires in 4 cardinal directions simultaneously with each burst, meaning 4 shots register per trigger pull. At 4 projectiles per burst, only 25 trigger pulls are needed to proc the Weapons Specialist passive — significantly faster than single-fire weapons. Once Omni Barrel is online at lv18, BRT7 expands to 8 directions and adds +50% Damage and +100% Reload Speed, meaning passive procs arrive more frequently and hit harder. Position centrally in the arena to maximize both BRT7\'s spread coverage and the passive burst\'s omnidirectional impact. Use Squint-EE5 to convert the passive projectiles\' crit potential into chain-kill events — the 8 passive projectiles have 100 piercing and can each independently crit.',
    strengths: [
      'BRT7\'s 4-projectile burst accumulates the 100-shot Weapons Specialist passive faster than any other carry — roughly 25 burst-pulls to proc versus 100 single shots on a revolver',
      'Omni Barrel at lv18 turns BRT7 itself into an 8-direction suppressor, meaning both BRT7 and the passive burst cover full omnidirectional coverage simultaneously',
      'Excellent early-game ramp compared to Hurricane variant — BRT7 is available from Gunner Rank 03 and provides useful damage and passive procs even without the lv18 OC',
    ],
    weaknesses: [
      'Lower single-target DPS ceiling than the Hurricane Weapons Specialist variant — BRT7\'s spread pattern dilutes damage across multiple directions rather than concentrating it on priority targets',
      'Short weapon range (8 base, further reduced by Omni Barrel\'s spiral pattern) requires fighting at close-to-medium range, which conflicts with the Weapons Specialist\'s preference for central arena positioning',
      'The Favourite OC is not available for BRT7 (it appears on the Minigun and Hurricane), so BRT7\'s lv18 unstable option is Omni Barrel or Bullet Helix — neither doubles the damage the way The Favourite does for Hurricane builds',
    ],
    tips: [
      'Omni Barrel at lv18 fires in 8 directions but changes the pattern to a spiral — shots no longer go exactly N/S/E/W. Position near the center of the arena so the spiral spray hits enemies approaching from all angles',
      'Squint-EE5\'s crit bonus applies to the Weapons Specialist passive projectiles, which have their own independent crit rolls per projectile — at high Crit Chance, all 8 passive burst projectiles can crit simultaneously',
      'Do not switch weapons mid-wave — BRT7\'s 100-shot counter resets if you swap to a secondary before the passive procs. Switch weapons only during reload to reset, never during active combat',
      'Gas Rerouting at lv6 (+25% Fire Rate, +25% Reload Speed) maximizes proc frequency in early stages before Omni Barrel is online — the faster you cycle the magazine, the sooner the passive fires',
      'Gold-Tipped Bullets and Squint-EE5 are not contradictory here: hold gold for bullet damage, and the crit passive proc chain-kills to generate more gold drops from slain elites',
    ],
    weapons: [
      {
        name: 'BRT7 Burst Fire Gun',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+25% Fire Rate and +25% Reload Speed — accelerates the 100-shot passive counter faster than any other lv6 option; passive procs begin arriving mid-Stage 1',
          },
          {
            level: 12,
            name: 'High Caliber Rounds',
            verdict: 'take',
            note: '+30% Damage and +100% Piercing — BRT7\'s spread shots now pierce multiple enemies per direction; passive proc projectiles hit harder as they scale with the carry weapon\'s Kinetic Damage stack',
          },
          {
            level: 18,
            name: 'Omni Barrel',
            verdict: 'take',
            note: 'MUST-TAKE — expands to 8 firing directions, +50% Damage, +100% Reload Speed; BRT7 now mirrors the 8-direction passive burst, creating dual omnidirectional suppression',
          },
        ],
      },
      {
        name: 'Seismic Repulsor',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Coolant Leak',
            verdict: 'take',
            note: 'Knockback + cryo slow on nearby enemies — buys time to empty the BRT7 magazine without repositioning, keeping the 100-shot counter running uninterrupted',
          },
          {
            level: 12,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+1 Turret, +15% Damage on repulsor; more charges means more breathing room between passive procs to reposition centrally',
          },
          {
            level: 18,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+3 Turrets; near-permanent knockback perimeter; Weapons Specialist handles anything that breaks through the repulsor ring',
          },
        ],
      },
      {
        name: '"Lead Storm" Powered Minigun',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Reload Shield',
            verdict: 'take',
            note: '+100% Armor while reloading — use Minigun as a fallback spray weapon during BRT7 reload; Reload Shield armor window covers the vulnerable gap',
          },
          {
            level: 12,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+25% Fire Rate on the Minigun provides supplemental proc feeds if BRT7 counter has already fired and is in cooldown',
          },
          {
            level: 18,
            name: 'The Favourite',
            verdict: 'skip',
            note: 'The Favourite penalizes all other weapons including BRT7 by -30%; since BRT7 is the passive proc driver, taking this would undermine the build\'s core loop — skip unless committing to Minigun as carry instead',
          },
        ],
      },
      {
        name: 'Incendiary Grenade',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Compact Explosives',
            verdict: 'take',
            note: '+30% Explosion Radius — larger fire zone clusters enemies in the BRT7 spread cone and passive burst impact area',
          },
          {
            level: 12,
            name: 'Potent Juice',
            verdict: 'situational',
            note: '+30% Potency for longer burn; useful if running Pan Fried Shells on BRT7 for a fire-damage synergy build',
          },
          {
            level: 18,
            name: 'Feedback Harness',
            verdict: 'situational',
            note: 'Auto-throws grenade on taking damage — on Weapons Specialist you want to stay mobile, so auto-throw on hit can provide passive fire zone coverage without interrupting the firing loop',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Kinetic Damage',
        'Projectile Damage',
        'Crit Chance',
        'Crit Damage',
        'Reload Speed',
      ],
      avoid: [
        'Status Effect Damage — BRT7 is kinetic projectile, not DoT',
        'Move Speed — passive proc radius benefits from central stationary positioning',
      ],
    },
    artifacts: {
      always: [
        'Squint-EE5',
        'Popup Tripod',
        'Gold-Tipped Bullets',
      ],
      good: [
        'Nitragenic Powder',
        'Pickled Nitra',
        'Energy Bars',
      ],
      never: [
        'Chemist Kit — build is entirely kinetic projectile damage, no status effects',
        'Ammo Rig — -15% Move Speed on a build that needs central repositioning is dangerous',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Lock BRT7, Start Passive Loop',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: BRT7 > Seismic Repulsor > Incendiary Grenade. BRT7 is available from Rank 03 and should appear in early weapon offers. Lock it in immediately — the 4-projectile burst begins feeding the 100-shot passive counter from the first engagement. Seismic Repulsor provides CC so you can hold position and fire BRT7 continuously.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'BRT7 lv6: Gas Rerouting. The +25% Fire Rate and +25% Reload Speed means the 100-shot passive procs arrive in the first 30 seconds of each wave rather than halfway through. Passive procs at this stage do modest damage but begin Squint-EE5 crit scaling immediately if the artifact is already held.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Squint-EE5 immediately if available — it is the highest-value artifact for this build and the passive proc projectiles benefit from it every fire. Save 80g. Spend only on Kinetic Damage or Crit Chance stat cards. Popup Tripod is worth picking up in Stage 1 if BRT7\'s central-position firing loop is already established.',
          },
        ],
      },
      {
        stage: 2,
        title: 'High Caliber Rounds Piercing Spike',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push BRT7 to lv12 for High Caliber Rounds. Add Seismic Repulsor to lv6 for CC perimeter. The passive is now firing several times per wave — enemies approaching from all directions hit both BRT7\'s 4-directional spread and the 8-projectile omnidirectional passive burst within the same engagement window.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'BRT7 lv12: High Caliber Rounds — +100% Piercing means each directional shot hits multiple enemies in a column, multiplying effective DPS against dense swarms without changing the passive proc frequency. Seismic Repulsor lv6: Coolant Leak for cryo on knockback, maintaining the central position needed for optimal passive burst coverage.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Nitragenic Powder if available and Squint-EE5 is held — holding 100 Nitra adds +50% Crit Chance, pushing toward the 75% threshold and maximizing the passive burst crit output. Spend ~30g on Crit Chance or Kinetic Damage. Save 100g toward Stage 3 Omni Barrel power spike.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Omni Barrel — 8-Direction Lock',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. BRT7 lv18: Omni Barrel. BRT7 now fires in 8 directions with +50% Damage and +100% Reload Speed. Combined with the Weapons Specialist passive (also 8 directions), both active and passive fire now cover every approach angle simultaneously. This is when the build becomes a full 360-degree suppression loop.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Omni Barrel is mandatory. Seismic Repulsor lv12: Extra Capacity (+1 Turret) for sustained CC coverage. Stack Crit Chance cards aggressively — at 70%+ Crit Chance with Squint-EE5, both BRT7\'s 8-direction shots and the passive burst projectiles are critting on the majority of hits.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Full spend. Gold-Tipped Bullets is excellent post-Omni Barrel since kill volume spikes sharply, generating gold rapidly. Complete Squint-EE5 + Nitragenic Powder + Pickled Nitra nitra-hoard trio if available. Popup Tripod reaches full stacks quickly in Stage 3 since Omni Barrel rewards central stationary positioning.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Repulsor Grid and Crit Ceiling',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Seismic Repulsor to lv18: Extra Capacity (+3 Turrets) for near-permanent CC perimeter. Incendiary Grenade to lv12 as a supplemental fire zone tool if swarm density exceeds BRT7\'s 8-direction clear rate. BRT7 at full power handles everything else — support weapons exist to maintain the central position where Omni Barrel and passive bursts are most effective.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Seismic Repulsor Extra Capacity (+3) brings near-permanent knockback uptime, ensuring the BRT7 firing loop is never interrupted by melee contact. Take every Kinetic Damage, Projectile Damage, and Crit Chance global upgrade — at Stage 4, passive proc frequency is very high and each incremental crit improvement compounds across all 8 projectiles simultaneously.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 30g for Stage 5. Turbo Encabulator is valuable at Stage 4 if you have 5+ overclocks — at +3% Damage per OC you are getting +15-18% Damage from one artifact. Pay2Win Console is a strong alternative for stacking damage via rerolls while finding remaining artifacts.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Boss — 360 Coverage Wins',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Hold central position and maintain continuous BRT7 fire on the Dreadnought. Omni Barrel\'s 8-direction spread handles escort waves without manual retargeting. Time passive proc bursts — at Stage 5 proc frequency is rapid enough that the 8 passive projectiles fire every 10-15 seconds. Deploy Seismic Repulsor to knock escorts away from the Dreadnought and maintain clear firing lines.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Take every Crit Damage and Kinetic Damage upgrade. At Stage 5, passive proc damage scales with all Kinetic Damage upgrades accumulated through the run — at +50-70% Kinetic Damage accumulated, each of the 8 passive burst projectiles hits substantially harder than Stage 1 procs. Crit Chance upgrades multiply this output further with Squint-EE5 active.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Maximize the Gold-Tipped Bullets stack by holding gold through the final wave — at 250 held gold that is +50% Damage on BRT7 and the passive burst simultaneously. Mine all nitra to maximize Nitragenic Powder and Pickled Nitra bonuses. Diver\'s Manual is an always-buy if not yet held.',
          },
        ],
      },
    ],
  },
  {
    id: 'weapons-specialist-minigun',
    name: 'Minigun Weapons Specialist',
    class: 'Gunner',
    subclass: 'Weapons Specialist',
    tier: 'B',
    difficulty: 2,
    passive: 'After firing 100 [PROJECTILE] shots, automatically fire 8 high-damage projectiles in all directions — scales with Kinetic and Projectile Damage upgrades and can crit',
    synopsis: 'Weapons Specialist using Lead Storm Powered Minigun as carry. Minigun\'s exceptional fire rate (20 rounds per second at base) fills the 100-shot passive counter in roughly 5 seconds of sustained fire, generating near-constant omnidirectional passive bursts. Pair with Gas Rerouting (+25% Fire Rate) to push proc frequency even higher. The ceiling is lower than Hurricane\'s because Minigun lacks the homing explosion AoE of rockets, but the passive fires so frequently that this build provides a consistent mid-tier experience with the lowest mechanical skill floor of any Weapons Specialist variant.',
    playstyle: 'Spin up the Minigun on the approaching swarm and hold the trigger. At 20 rounds per second you hit the 100-shot passive threshold in approximately 5 seconds, after which the 8-projectile burst fires automatically, clears flankers, and restarts the counter. The core loop is pure sustained fire — no burst timing, no cooldown management, no weapon swapping required. Plant feet (Popup Tripod activates after 3 seconds stationary), hold the trigger, and let both the Minigun and the passive handle all directions simultaneously. Use Seismic Repulsor to knock enemies back when they breach melee range during Minigun spinup, which takes a fraction of a second but is vulnerable.',
    strengths: [
      'Lowest mechanical complexity of any Weapons Specialist variant — sustained Minigun fire generates passive procs automatically with no player input required beyond holding the trigger',
      'Minigun\'s 150-round base clip means you fire almost continuously for extended periods; combined with Gas Rerouting\'s +25% Fire Rate, the passive proc rate is extremely high throughout the entire run',
      'Popup Tripod synergy is excellent — Minigun rewards stationary play that precisely matches the artifact\'s 3-second ramp condition; the +30% Fire Rate and +30% Reload Speed at full stacks further accelerates passive proc frequency',
    ],
    weaknesses: [
      'Lower damage ceiling than Hurricane Weapons Specialist — Minigun\'s base 25 damage per round versus Hurricane rockets\' 60 base damage plus explosion radius means the carry weapon contributes less per-projectile even at high fire rates',
      'The Favourite overclock at lv18 penalizes all other weapons by -30%, but Minigun\'s main synergy with Weapons Specialist passive does not benefit from the doubled fire rate as much as Hurricane does — the passive already procs near-constantly at base fire rate',
      'Minigun has no homing and requires direct line of sight; against spread-out enemies that approach from multiple angles simultaneously, Minigun can only cover one direction while passive burst handles the rest',
    ],
    tips: [
      'Begin spinning up the Minigun the moment enemies become visible on screen — the spinup delay is negligible but proc timing requires continuous fire; losing 1-2 seconds of fire at the start of a wave delays the first passive proc by a full 5 seconds',
      'Reload Shield at lv12 provides +100% Armor during the Minigun\'s lengthy 6-second reload — reload aggressively at full Juggernaut armor to stay safe, then re-engage with fresh magazine',
      'High Caliber Rounds at lv12 (+30% Damage, +100% Piercing, -30% Fire Rate) reduces passive proc frequency but increases damage per round and piercing; run this OC only if you have high Kinetic Damage accumulation where the per-round damage gain outweighs the proc rate loss',
      'The passive proc projectiles scale with Kinetic Damage upgrades — every Kinetic Damage stat card purchased improves both Minigun rounds and passive burst projectiles simultaneously',
      'Pan Fried Shells at lv6 changes Minigun damage to FIRE — strong in biomes with fire synergy but removes Kinetic Damage scaling from the rounds; do not take it if running Gold-Tipped Bullets or Squint-EE5 since crit applies to kinetic only',
    ],
    weapons: [
      {
        name: '"Lead Storm" Powered Minigun',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+25% Fire Rate and +25% Reload Speed — increases passive proc frequency from ~1 every 5s to ~1 every 4s at lv6; this compounds over the entire run',
          },
          {
            level: 12,
            name: 'Reload Shield',
            verdict: 'take',
            note: '+100% Armor during the 6-second Minigun reload — makes the reload window safe at any range; Bigger Mags at lv12 is a strong alternative if proc rate is prioritized over survivability',
          },
          {
            level: 18,
            name: 'Lead Wrapped Ammo',
            verdict: 'take',
            note: '+150% Damage on Minigun rounds with only -20% Fire Rate penalty — fire rate is already very high from Gas Rerouting; the damage per round increase makes both Minigun and passive burst projectiles hit much harder',
          },
        ],
      },
      {
        name: 'Seismic Repulsor',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Coolant Leak',
            verdict: 'take',
            note: 'Cryo slow on knockback — knocked-back enemies slow into a freeze, buying time to complete the current Minigun magazine before a passive proc fires',
          },
          {
            level: 12,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+1 Turret, +15% Damage; more charges ensures repulsor can clear breaching enemies throughout the entire wave rather than expiring mid-engagement',
          },
          {
            level: 18,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+3 Turrets; near-permanent knockback perimeter around the stationary Popup Tripod firing position',
          },
        ],
      },
      {
        name: 'BRT7 Burst Fire Gun',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Sidearm',
            verdict: 'take',
            note: '-20% BRT7 Damage but +25% Damage to all other weapons including Minigun — free passive damage multiplier identical to the one used in Hurricane Weapons Specialist variant',
          },
          {
            level: 12,
            name: 'High Caliber Rounds',
            verdict: 'situational',
            note: '+30% Damage and +100% Piercing on BRT7; take only if using BRT7 actively as a secondary cleanup weapon for elites',
          },
          {
            level: 18,
            name: 'Omni Barrel',
            verdict: 'skip',
            note: 'BRT7 is a passive Sidearm buffer on this build, not a carry; spending XP to lv18 on a secondary wastes levels that should go into Minigun',
          },
        ],
      },
      {
        name: 'Incendiary Grenade',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Compact Explosives',
            verdict: 'take',
            note: '+30% Explosion Radius — throw into the approach vector opposite the Minigun\'s facing direction to catch enemies the spray cannot cover during sustained fire',
          },
          {
            level: 12,
            name: 'Potent Juice',
            verdict: 'situational',
            note: '+30% Potency; useful if Pan Fried Shells was taken on Minigun for fire-type synergy — both the rounds and grenade pools share the fire damage type',
          },
          {
            level: 18,
            name: 'Gravitational Core',
            verdict: 'situational',
            note: 'Pulls enemies to impact point before detonation — useful for clustering enemies into the Minigun\'s spray cone and passive burst impact zone',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Kinetic Damage',
        'Fire Rate',
        'Reload Speed',
        'Crit Chance',
        'Piercing',
      ],
      avoid: [
        'Status Effect Damage — build is kinetic, not DoT',
        'Potency — no status effects in the base kit',
      ],
    },
    artifacts: {
      always: [
        'Popup Tripod',
        'Squint-EE5',
        'Diver\'s Manual',
      ],
      good: [
        'Energy Bars',
        'Gold-Tipped Bullets',
        'Ammo Rig',
      ],
      never: [
        'Chemist Kit — entirely kinetic build',
        'Pickled Nitra — Nitra-hoard playstyle conflicts with aggressive rerolling needed to find Squint-EE5 early',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Spin Up and Hold',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: Minigun > Seismic Repulsor > BRT7. Minigun is the starting weapon for Weapons Specialist subclass, so it is guaranteed from the first offer. Lock it in, take the closest enemy clusters, and begin measuring how quickly passive procs arrive. At base fire rate you should see the first passive burst within the opening seconds of each wave.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Minigun lv6: Gas Rerouting. The +25% Fire Rate increase at lv6 is the single most impactful early overclock on any Weapons Specialist build — it compresses the 100-shot threshold window by ~20%, meaning passive procs arrive more frequently from Stage 1 onward. Every subsequent passive proc the entire run benefits from this one choice.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Popup Tripod if available in Stage 1 — Minigun\'s stationary sustained-fire design naturally satisfies the 3-second ramp condition, and the +30% Fire Rate at full stacks is earned passively without any playstyle adjustment. Save 80g. Buy Kinetic Damage stat cards only. Skip survivability until Stage 2.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Reload Shield Safety',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Minigun to lv12. Add BRT7 Sidearm at lv6 for a passive +25% Minigun Damage multiplier — equip it and ignore it beyond the lv6 OC. The Weapons Specialist passive is now firing at high frequency and the 8-projectile bursts are contributing meaningful DPS to swarm management. Passive procs free you from tracking individual flankers.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Minigun lv12: Reload Shield. The +100% Armor during reload converts the Minigun\'s vulnerability window (the 6-second reload after a 150-round magazine) into a safe brawl period. BRT7 lv6: Sidearm for +25% Minigun Damage. Seismic Repulsor lv6: Coolant Leak for cryo coverage during reload windows.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Squint-EE5 if available and Crit Chance is approaching 75% — the passive proc projectiles crit independently and at high Crit Chance this represents a significant DPS spike every 5 seconds. Spend 30g on Fire Rate or Kinetic Damage stat cards. Build toward 100g saved for Stage 3.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Lead Wrapped Ammo Power Spike',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. Minigun lv18: Lead Wrapped Ammo. +150% Damage on Minigun rounds with only -20% Fire Rate cost — from Gas Rerouting at lv6 you have +25% Fire Rate already, partially offsetting the penalty. Passive proc projectiles scale with your accumulated Kinetic Damage upgrades; at Stage 3 that compounding total makes the burst damage substantial.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Lead Wrapped Ammo is the build-defining overclock. Take every Kinetic Damage and Crit Chance upgrade on the board. Seismic Repulsor lv12: Extra Capacity for continued CC coverage. Stack Popup Tripod to full stacks in the first 3 seconds of each wave — at full stacks the fire rate bonus further accelerates passive procs.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Full spend. Complete Popup Tripod + Squint-EE5 core artifact pair. Gold-Tipped Bullets is strong here — at Stage 3 kill volume is very high and gold accumulates rapidly, pushing the damage bonus up. Energy Bars compounds well if you are reaching player lv30+.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Support Lock and Stat Climbing',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Seismic Repulsor to lv18: Extra Capacity (+3 Turrets) for near-permanent CC perimeter. Incendiary Grenade to lv12 as supplemental crowd control. Minigun at full power is the clear-all weapon; support weapons maintain the stationary Popup Tripod position against threats that bypass the main spray cone.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Seismic Repulsor Extra Capacity (+3). Take every global Kinetic Damage upgrade — at Stage 4 passive proc damage has scaled to the point where each burst fires into large swarms and can clear clusters independently. Crit Damage upgrades multiply the already-high Squint-EE5 bonus.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 30g for Stage 5. Ammo Rig is excellent on this build if available: Minigun already earns Popup Tripod stacks through stationary play, and the -15% Move Speed from Ammo Rig has minimal cost when standing still to fire. The +50% Fire Rate from Ammo Rig further accelerates passive proc frequency at maximum Popup Tripod stacks.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Boss — Suppress and Proc',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Position at center of Dreadnought arena, immediately begin Minigun spinup. At Lead Wrapped Ammo\'s +150% Damage and full Popup Tripod + Ammo Rig fire rate stacks, the Minigun\'s raw DPS is the highest it reaches all run. Passive procs arrive every 4-5 seconds — time them against the Dreadnought rather than escort waves; each of the 8 projectiles can pierce the Dreadnought\'s armor.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Take every Kinetic Damage and Crit Damage upgrade available. At Stage 5, Minigun at +150% base damage plus accumulated Kinetic Damage cards plus Lead Wrapped Ammo hits harder per round than most builds\' carry weapons. Crit Chance upgrades above 75% (with Squint-EE5 already held) convert the -30% Damage penalty into a net positive on every critting shot.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Gold-Tipped Bullets maximum stack — hold all gold through the Dreadnought fight for the full +50% Damage at the 250-gold cap. Mine every nitra node. Diver\'s Manual if not yet held is the highest-priority buy. Energy Bars at high player level provides substantial flat damage multiplier that compounds with Lead Wrapped Ammo\'s boost.',
          },
        ],
      },
    ],
  },
  {
    id: 'juggernaut-minigun',
    name: 'Juggernaut Minigun',
    class: 'Gunner',
    subclass: 'Juggernaut',
    tier: 'A',
    difficulty: 3,
    passive: '+10 Armor, +50 Max HP, -50% Weapon Range; gain up to +50% Damage (5 stacks of +10%) after taking damage — the more hits you absorb, the harder you hit back',
    synopsis: 'Juggernaut with Lead Storm Powered Minigun. Juggernaut\'s -50% Weapon Range cuts Minigun range from 12 to 6, which is still functional for the Minigun\'s spray-fire pattern against approaching swarms. The Minigun\'s high fire rate generates kills rapidly once Juggernaut passive stacks to full (+50% Damage after 5 absorbed hits), making this variant superior to Bulldog Juggernaut against dense swarms where sustained DPS matters more than peak single-shot burst. Pan Fried Shells converts all Minigun fire to FIRE damage — combined with Juggernaut\'s proximity forcing close combat, fire zones accumulate under the player\'s feet and provide passive DoT coverage.',
    playstyle: 'At the start of each wave, intentionally absorb 5 hits from incoming enemies to stack Juggernaut\'s passive to full (+50% Damage) before the main swarm arrives. Once stacked, spin up the Minigun and hold the trigger — at full passive stacks, the Minigun\'s fire rate converts to exceptional sustained DPS against swarm density. Juggernaut\'s +50 Max HP and +10 Armor provide a meaningful tank floor that absorbs the early stacking hits without danger. Use Seismic Repulsor to create brief spacing resets when enemy density becomes overwhelming — knock enemies back 2-3 seconds, re-stack passive hits from stragglers, then re-engage the main swarm at full damage stacks. Popup Tripod is the ideal companion artifact: Juggernaut\'s close-range brawl naturally creates stationary fire windows that build the Tripod stacks.',
    strengths: [
      'Better sustained DPS against dense swarms than Bulldog Juggernaut — Minigun\'s fire rate turns Juggernaut\'s +50% damage passive into continuous high-frequency damage output rather than the Bulldog\'s slow high-burst cycle',
      'Juggernaut\'s +50 Max HP and +10 Armor create a durable tank floor that makes the intentional hit-absorption playstyle reliable; BLT Ration Pack\'s +2 HP/s regen sustains the HP loss between waves',
      'Pan Fried Shells OC at lv6 creates fire ground zones that persist as passive DoT — at Juggernaut\'s forced close range, the player character stands in these fire zones alongside enemies, applying constant burn to every enemy in melee range',
    ],
    weaknesses: [
      '-50% Weapon Range cuts Minigun\'s 12 range to 6 — the Minigun spray still covers approaching enemies but you cannot thin distant ranged attackers before they close to dangerous range',
      'Minigun spinup delay (fraction of a second) combined with forced close-range engagement means initial contact with a wave has a brief vulnerability window before fire rate ramps to full DPS',
      'Juggernaut passive stacks reset between waves — each new wave requires re-absorbing 5 hits to reach maximum damage, meaning the opening seconds of every engagement are at reduced output',
    ],
    tips: [
      'Pre-stack Juggernaut passive to 3-4 stacks by deliberately walking into incoming fire from a distant spitter or ranged enemy before the main wave arrives — take the controlled damage to pre-charge, then engage the swarm at near-full stacks',
      'Spin up the Minigun BEFORE the swarm breaks your perimeter — begin firing at enemies still 6 units away so the Minigun is at full fire rate when they close to 3 units; the spinup delay is the only real vulnerability',
      'Seismic Repulsor knockback resets enemy approach timing but NOT Juggernaut passive stacks — knock enemies back, take 1-2 hits from the nearest re-approacher to maintain stacks, then re-engage the knocked-back cluster at full damage',
      'Reload Shield at lv12 provides +100% Armor during the 6-second Minigun reload — time reloads during Seismic Repulsor knockback windows to maximize the safe reload period',
      'BLT Ration Pack is essential — the +2 HP/s regen counteracts the HP drain from passive stack absorption and ensures you reach each wave at or near full HP, giving maximum headroom to absorb the 5 stacking hits safely',
    ],
    weapons: [
      {
        name: '"Lead Storm" Powered Minigun',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Pan Fried Shells',
            verdict: 'take',
            note: 'Changes damage to FIRE — at Juggernaut\'s forced close range, Minigun fire creates ground fire zones under your feet; every enemy in melee range burns passively; pairs with Incendiary Grenade for fire zone stacking',
          },
          {
            level: 12,
            name: 'Reload Shield',
            verdict: 'take',
            note: '+100% Armor during 6-second reload — Juggernaut proximity means reloads happen at melee range; Reload Shield makes this safe; stack hits from nearby enemies during the reload to maintain Juggernaut passive stacks',
          },
          {
            level: 18,
            name: 'Lead Wrapped Ammo',
            verdict: 'take',
            note: '+150% Damage with -20% Fire Rate — fire rate is still exceptional from Gas Rerouting if taken at lv6; the massive damage multiplier combines with Juggernaut\'s +50% passive stack for devastating total output',
          },
        ],
      },
      {
        name: 'Seismic Repulsor',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Coolant Leak',
            verdict: 'take',
            note: 'Knockback + cryo slow — gives 3-5 seconds to safely reload the Minigun and begin re-stacking Juggernaut passive from the slowed re-approaching enemies',
          },
          {
            level: 12,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+1 Turret, +15% Damage; more repulsor charges means more spacing resets without depleting the entire CC budget on one wave',
          },
          {
            level: 18,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+3 Turrets; near-permanent knockback perimeter; Juggernaut handles anything that breaks through during the brief knockback cycle',
          },
        ],
      },
      {
        name: 'BRT7 Burst Fire Gun',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Sidearm',
            verdict: 'take',
            note: '+25% Damage to all other weapons including Minigun; BRT7 as passive Sidearm buffer is identical value here to the Hurricane Weapons Specialist variant — zero playstyle cost',
          },
          {
            level: 12,
            name: 'Gas Rerouting',
            verdict: 'situational',
            note: '+25% Fire Rate on BRT7; take if using BRT7 actively as a fallback during Minigun reload windows to maintain damage pressure during the reload',
          },
          {
            level: 18,
            name: 'Omni Barrel',
            verdict: 'skip',
            note: 'BRT7 is a passive buffer; skip expensive lv18 XP investment on a secondary when Minigun carries the damage load',
          },
        ],
      },
      {
        name: 'Incendiary Grenade',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Compact Explosives',
            verdict: 'take',
            note: '+30% Explosion Radius — throw at the center of approaching swarm cluster; larger fire zone combined with Minigun Pan Fried Shells creates layered fire DoT in the Juggernaut\'s forced close-range combat zone',
          },
          {
            level: 12,
            name: 'Potent Juice',
            verdict: 'take',
            note: '+30% Potency; fire burn from Incendiary Grenade synergizes with Pan Fried Shells fire ground zones; longer-lasting burns reduce the DPS requirement from Minigun against highly dense swarms',
          },
          {
            level: 18,
            name: 'Feedback Harness',
            verdict: 'take',
            note: 'Auto-throws grenade on taking damage (10s cooldown) — Juggernaut\'s passive stacking design means the player regularly absorbs hits; Feedback Harness converts those hits into automatic incendiary grenades at no input cost',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Kinetic Damage',
        'Armor',
        'Max HP',
        'Reload Speed',
        'Fire Rate',
      ],
      avoid: [
        'Move Speed — Juggernaut closes distance intentionally; speed undermines the hit-absorption passive stacking loop',
        'Weapon Range — penalized by subclass passive; Range cards on Minigun are partially negated by the -50% subclass modifier',
      ],
    },
    artifacts: {
      always: [
        'BLT Ration Pack',
        'Popup Tripod',
        'Gold-Tipped Bullets',
      ],
      good: [
        'Salty Pretzel',
        'The MoCap',
        'Energy Bars',
      ],
      never: [
        'Ammo Rig — -15% Move Speed on a build that must reach enemies to absorb hits is dangerous',
        'Squint-EE5 — Pan Fried Shells converts damage to FIRE type; crit scaling requires kinetic damage tag for full value',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Absorb and Ramp',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: Minigun > Seismic Repulsor > BRT7. Minigun is the Weapons Specialist starting weapon and Juggernaut applies passively — Minigun at base stats under Juggernaut is still effective since the +50 Max HP and +10 Armor absorb the mandatory stacking hits safely. Deliberately take 5 hits from the first wave\'s weakest enemies before committing the Minigun\'s fire.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Minigun lv6: Pan Fried Shells. Changing damage to FIRE immediately begins creating fire ground zones at Juggernaut\'s forced close range. Even at Stage 1 low Potency, the fire zones provide passive supplemental DoT that frees Minigun to focus on target acquisition. Seismic Repulsor lv6: Coolant Leak for cryo on knockback to manage safe reload timing.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy BLT Ration Pack immediately if available — the +2 HP/s regen is essential from Stage 1 to recover between intentional hit-absorption stacking. Save 80g. Spend on Kinetic Damage or Armor stat cards. Skip movement speed entirely. Popup Tripod is worth picking up in Stage 1 — Juggernaut\'s close-range stationary brawl satisfies the condition naturally.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Reload Shield Brawl Safety',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Minigun to lv12. Add BRT7 Sidearm at lv6 for +25% Minigun Damage. Juggernaut passive is now fully functional — 5 absorbed hits is achievable within 3-4 seconds of each wave at Stage 2\'s swarm density. The combination of full Juggernaut stacks + Pan Fried Shells fire ground zones + BRT7 Sidearm bonus represents a meaningful damage floor even without the lv18 OC.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Minigun lv12: Reload Shield. The 6-second Minigun reload at Juggernaut\'s forced close range is the build\'s primary danger point — Reload Shield eliminates that danger. BRT7 lv6: Sidearm for passive +25% Minigun Damage. Seismic Repulsor lv12: Extra Capacity for sustained CC coverage.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Salty Pretzel if available — at Juggernaut\'s forced close range, taking hits is unavoidable, and you are frequently at 70-80% HP from stacking absorption; Salty Pretzel\'s armor scaling from missing HP directly rewards this playstyle. Spend 30g on Armor or Max HP cards. Save 100g toward Stage 3.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Lead Wrapped Ammo Online',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. Minigun lv18: Lead Wrapped Ammo. +150% Damage on FIRE-type rounds (from Pan Fried Shells) under full Juggernaut passive stacks (+50%) creates the highest fire DPS this build achieves. Fire ground zones now persist at Juggernaut\'s forced close range and deal significantly increased damage due to Potency upgrades and Incendiary Grenade synergy.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Lead Wrapped Ammo is mandatory. Seismic Repulsor Extra Capacity (+1 Turret). Incendiary Grenade lv12: Potent Juice for longer-burn fire zones that complement Pan Fried Shells ground coverage. Take every Armor and Max HP upgrade — Juggernaut\'s higher base values mean these stats have above-average scaling returns.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Full spend. BLT Ration Pack + Salty Pretzel + The MoCap trinity is the ideal Juggernaut artifact set — complete it here if two pieces are not yet held. The MoCap\'s +1% Damage per 1% missing HP compounds with Juggernaut\'s already-frequent below-max-HP state from stacking absorption. Gold-Tipped Bullets is excellent if gold reserves are high.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Fire Zone Coverage',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Incendiary Grenade to lv18: Feedback Harness. Auto-throwing grenades when taking damage generates passive fire zone coverage throughout every wave at no input cost — Juggernaut\'s absorption playstyle triggers the auto-throw repeatedly each engagement. Seismic Repulsor to lv18: Extra Capacity (+3 Turrets) for sustained CC management. Minigun handles all primary damage.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Feedback Harness creates a fire-zone generation loop: absorb hits to stack Juggernaut passive and trigger Feedback Harness grenades simultaneously. At Stage 4, Feedback Harness fires 3-5 times per wave with 10s cooldown, placing 3-5 fire zones automatically. Pan Fried Shells ground fire from Minigun overlaps with grenade fire zones for significant passive AoE coverage.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 30g for Stage 5. Energy Bars is strong at Stage 4+ — Juggernaut\'s extra +50 Max HP delays the HP-drain threshold, giving more headroom for Energy Bars\' per-level HP penalty. Turbo Encabulator is valuable if 5+ overclocks are held; Reload Speed from both Turbo Encabulator and accumulated reload upgrades reduces the 6-second reload window significantly.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Boss — Pre-Stack and Shred',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Absorb the Dreadnought\'s first 5 attack patterns before committing the Minigun — each hit stacks Juggernaut passive until full (+50% Damage). Once at 5 stacks, spin up Minigun and hold position. Feedback Harness auto-fires incendiary grenades as the Dreadnought hits you, creating fire zones around the engagement point. Seismic Repulsor handles escort waves during the Minigun reload windows.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Take every Armor, Max HP, and Kinetic Damage upgrade. At Stage 5 Juggernaut passive at full stacks (+50% Damage) combined with Lead Wrapped Ammo (+150% Damage) and BRT7 Sidearm (+25%) results in over +225% total damage multiplier before stat card accumulation. Prioritize surviving to maintain those stacks over raw damage cards.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Gold-Tipped Bullets maximum stack for final damage push. BLT Ration Pack regen is critical through the Dreadnought fight — the boss deals repeated hits that drain HP while stacking Juggernaut passive; regen keeps you viable through the absorption phase. Diver\'s Manual if not yet held is an immediate buy.',
          },
        ],
      },
    ],
  },
  {
    id: 'juggernaut-hurricane',
    name: 'Juggernaut Hurricane',
    class: 'Gunner',
    subclass: 'Juggernaut',
    tier: 'A',
    difficulty: 4,
    passive: '+10 Armor, +50 Max HP, -50% Weapon Range; gain up to +50% Damage (5 stacks of +10%) after taking damage — the more hits you absorb, the harder you hit back',
    synopsis: 'Juggernaut with Hurricane Guided Rocket System. Juggernaut\'s -50% Weapon Range cuts Hurricane\'s 10-unit range to 5, but Hurricane\'s homing rockets self-guide to targets after launch, partially bypassing the range penalty — rockets fired at close targets still home to impact. The Favourite at lv18 doubles Hurricane\'s damage and fire rate. Juggernaut\'s passive adds up to +50% Damage on top of The Favourite\'s doubled output after absorbing 5 hits, creating a multiplicative damage stack that turns each rocket salvo into extraordinary burst damage. Tier A because the synergy between Juggernaut passive stacking and The Favourite\'s doubled rocket damage creates a higher ceiling than Bulldog Juggernaut, though the playstyle requires careful timing of passive stack charging before committing rocket salvos.',
    playstyle: 'Each run has two loops: the absorption phase and the rocket phase. Absorption phase: advance toward the swarm and take 5 hits before firing Hurricane — each hit adds +10% Damage. At full stacks, all damage bonuses are live. Rocket phase: fire Hurricane at the clustered swarm; homing rockets converge on the highest-density targets while Juggernaut\'s stacked passive damage multiplies the already-high explosive output of The Favourite-buffed rockets. Seismic Repulsor provides the bridge between phases: knock enemies back briefly when stacks are partially charged to buy time for the final 1-2 hits, then commit the rocket salvo at full stacks. Bulldog as secondary provides a high-damage point-blank weapon for elites that survive the rocket burst.',
    strengths: [
      'The Favourite\'s +100% Hurricane Damage combined with Juggernaut\'s +50% passive stack creates effective +200% Damage on rocket salvos against targets approached in the Juggernaut brawl window — the highest burst rocket damage of any Gunner subclass',
      'Hurricane\'s homing rockets partially offset the -50% Weapon Range penalty — rockets fired at close-range targets still self-guide to impact; the range penalty cuts engagement distance but does not eliminate homing accuracy',
      'Juggernaut\'s +50 Max HP and +10 Armor provide the survivability necessary to safely execute the absorption phase — the extra HP floor makes 5-hit absorption reliable in all but the most extreme Hazard 5 density scenarios',
    ],
    weaknesses: [
      'The Favourite penalizes all non-Hurricane weapons by -30% Damage and -30% Fire Rate — Bulldog secondary is already slower than ideal and The Favourite makes it even weaker; commit fully to Hurricane as the kill weapon post-lv18',
      'Juggernaut passive stacks reset between waves, requiring repeated absorption cycles that interrupt the ideal rocket timing; in high-density waves where enemies arrive too fast to absorb safely, stack timing becomes reactive rather than proactive',
      '-50% Weapon Range means Hurricane rockets are launched from within the swarm rather than at distance; while homing compensates partially, close-range rocket detonations carry greater self-damage risk in high-density engagements',
    ],
    tips: [
      'Absorb the first 5 hits of each wave BEFORE firing Hurricane — fire one rocket from the first salvo only after reaching 5 stacks; every rocket fired at partial stacks is wasted damage potential compared to the full-stack output',
      'Homing rockets have a minimum travel arc — fire slightly upward or toward the periphery of a cluster rather than directly at a nearby enemy to allow the homing system to engage and guide to the target group',
      'Incendiary Payload at lv6 creates fire zones where rockets impact — at Juggernaut\'s forced close range, rocket fire zones accumulate directly in the engagement zone, providing passive DoT coverage without requiring secondary weapons',
      'The Favourite\'s -30% penalty on Bulldog means Bulldog\'s main value post-lv18 is the Super Reload Shield OC: +100% Armor during reload converts Bulldog into a survival tool rather than a damage carry after The Favourite locks in',
      'Salty Pretzel and The MoCap are the ideal Juggernaut artifact pair: frequent below-max-HP from absorption phase simultaneously provides bonus armor (Salty Pretzel) and bonus damage (The MoCap), compounding the passive stacking loop',
    ],
    weapons: [
      {
        name: '"Hurricane" Guided Rocket System',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Incendiary Payload',
            verdict: 'take',
            note: 'Rockets ignite ground on impact — at Juggernaut\'s forced close range, fire zones from rocket impacts accumulate directly in the engagement zone; passive fire DoT supplements Hurricane\'s burst damage during the absorption phase',
          },
          {
            level: 12,
            name: 'Runic Warhead',
            verdict: 'take',
            note: '+50% Explosion Radius — at close range each rocket blast hits a larger area; combined with Juggernaut proximity this ensures full AoE on every enemy in the engagement cluster',
          },
          {
            level: 18,
            name: 'The Favourite',
            verdict: 'take',
            note: 'MUST-TAKE — +100% Damage and +100% Fire Rate on Hurricane; at full Juggernaut passive stacks (+50% Damage) this combination creates the highest rocket burst output of any Gunner subclass; the -30% penalty on other weapons is accepted',
          },
        ],
      },
      {
        name: '"Bulldog" Heavy Revolver',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Reload Shield',
            verdict: 'take',
            note: '+100% Armor while reloading Bulldog — Juggernaut proximity means Bulldog reloads happen at melee range; Reload Shield protects during the 3-second reload window',
          },
          {
            level: 12,
            name: 'High Caliber Rounds',
            verdict: 'take',
            note: '+30% Damage and +100% Piercing on Bulldog — compensates partially for The Favourite\'s -30% Damage penalty; piercing rounds handle elite armor effectively at close range',
          },
          {
            level: 18,
            name: 'Super Reload Shield',
            verdict: 'take',
            note: '+75% Damage, +50% Fire Rate, +100% Armor while reloading — even with The Favourite\'s -30% penalty, Super Reload Shield converts Bulldog into a viable finisher and provides a safe reload window in the Dreadnought fight',
          },
        ],
      },
      {
        name: 'Seismic Repulsor',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Coolant Leak',
            verdict: 'take',
            note: 'Cryo on knockback — knock enemies back during partial Juggernaut stack charge, slow them with cryo, then absorb the remaining 1-2 hits from the slowed re-approachers to reach full stacks safely',
          },
          {
            level: 12,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+1 Turret, +15% Damage; more CC charges during the absorption phase means more controlled stack-building opportunities per engagement',
          },
          {
            level: 18,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+3 Turrets; near-permanent knockback manages escort wave timing during Hurricane drum reload windows, which are 6 seconds of vulnerability at close range',
          },
        ],
      },
      {
        name: 'Incendiary Grenade',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Compact Explosives',
            verdict: 'take',
            note: '+30% Explosion Radius — larger initial fire zone when thrown into approach vector; combined with Incendiary Payload rocket fire zones, creates layered fire DoT across the entire Juggernaut close-range engagement zone',
          },
          {
            level: 12,
            name: 'Potent Juice',
            verdict: 'take',
            note: '+30% Potency for longer-lasting, more intensive fire burn; at Juggernaut\'s close range every enemy in the engagement zone burns; higher Potency means more total fire DoT per engagement',
          },
          {
            level: 18,
            name: 'Feedback Harness',
            verdict: 'take',
            note: 'Auto-throws grenade on taking damage — Juggernaut absorption phase triggers this automatically; each hit that stacks Juggernaut passive also potentially fires a grenade, generating fire zones as a side effect of the absorption loop',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Explosive Damage',
        'Kinetic Damage',
        'Armor',
        'Max HP',
        'Explosion Radius',
      ],
      avoid: [
        'Move Speed — closing distance is intentional; speed is irrelevant or counterproductive to the absorption brawl cycle',
        'Status Effect Damage — Incendiary Payload fire is secondary; primary damage is explosive kinetic from Hurricane rockets',
      ],
    },
    artifacts: {
      always: [
        'BLT Ration Pack',
        'Salty Pretzel',
        'The MoCap',
      ],
      good: [
        'Energy Bars',
        'Gold-Tipped Bullets',
        'Diver\'s Manual',
      ],
      never: [
        'Popup Tripod — Hurricane requires mobility between absorption and firing phases; standing completely still for 3 seconds during wave engagement is frequently lethal',
        'Ammo Rig — -15% Move Speed on a build that must advance into swarms to absorb hits creates dangerous dead zones where you are too slow to close but too close to survive',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Find Hurricane, Absorb First',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: Hurricane > Bulldog > Seismic Repulsor. Hurricane requires Gunner Rank 21 to unlock, so it may not appear in the very first weapon offers — if not available, take Bulldog as an effective Juggernaut brawler placeholder and wait. Once Hurricane appears, prioritize it above all else. Bulldog handles Stage 1 swarms adequately under Juggernaut\'s passive tank floor while you wait.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Hurricane lv6: Incendiary Payload. Even at Stage 1 low damage, creating fire zones with every rocket impact begins establishing the close-range fire zone playstyle. Bulldog lv6: A Little More Oomph! if used as Stage 1 placeholder carry. Seismic Repulsor lv6: Coolant Leak for cryo-knockback timing of Juggernaut passive absorption.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy BLT Ration Pack immediately — the +2 HP/s regen is the enabling survivability artifact for the absorption loop. Save 80g. Spend only on Explosive Damage or Armor stat cards. Skip movement and range upgrades entirely. Stage 1 is primarily a setup stage — Hurricane damage scales steeply with the lv12 and lv18 OCs.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Runic Warhead Radius Spike',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Hurricane to lv12. Add Bulldog as a proper secondary — its Reload Shield OC provides armor during Bulldog reloads, and Juggernaut\'s +10 base Armor means the +100% Reload Shield armor doubles from a higher floor. Absorption phase is now reliable: 5 hits at Stage 2 swarm density arrives within 5-8 seconds of wave start.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Hurricane lv12: Runic Warhead. At Juggernaut\'s close range, +50% Explosion Radius means each rocket blast covers the entire engagement cluster — every enemy within 6 units of the explosion center takes full damage. Bulldog lv6: Reload Shield. Seismic Repulsor lv12: Extra Capacity for sustained CC.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Salty Pretzel — you are frequently at 70-80% HP from absorption stacking; Salty Pretzel\'s armor scaling activates reliably on every engagement. Spend 30g on Explosive Damage or Armor stat cards. Save 100g for Stage 3 The Favourite power spike. Resist buying reroll-heavy artifacts until The Favourite is online.',
          },
        ],
      },
      {
        stage: 3,
        title: 'The Favourite — Full Damage Loop',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. Hurricane lv18: The Favourite. Doubled damage and fire rate on Runic Warhead-radius homing rockets at full Juggernaut passive stacks (+50% Damage). The combined multiplier is approximately +200% effective Damage on rocket impacts at this stage — the highest single-stage power spike of any Juggernaut build. At Stage 3 swarm density, one Hurricane drum clears the majority of the approaching wave.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'The Favourite is non-negotiable. Bulldog lv12: High Caliber Rounds to partially compensate for The Favourite\'s -30% Bulldog Damage penalty. Incendiary Grenade lv12: Potent Juice for longer fire zones from both Incendiary Payload and thrown grenades. Take every Explosive Damage and Armor global upgrade.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Full spend. Complete BLT Ration Pack + Salty Pretzel + The MoCap Juggernaut artifact core. The MoCap becomes active frequently at Stage 3 — absorption hits push you to 70-80% HP, triggering +20-30% Damage bonus from The MoCap simultaneously with full Juggernaut stacks. Energy Bars is excellent at Stage 3 if player level is above 25.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Bulldog Finisher and Feedback Loop',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Bulldog to lv18: Super Reload Shield. Even with The Favourite\'s -30% Damage penalty, Super Reload Shield\'s +75% Damage and +100% Armor while reloading converts Bulldog into a useful close-range finisher for elite enemies that survive the Hurricane burst. Incendiary Grenade to lv18: Feedback Harness for automatic fire zone generation from absorption hits. Seismic Repulsor to lv18: Extra Capacity (+3 Turrets) for CC grid.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Bulldog Super Reload Shield restores the brawl-reload loop that Bulldog Juggernaut uses, now in complement to Hurricane rather than as primary carry. Feedback Harness auto-grenades from absorption hits create fire DoT coverage at no input cost. Take every Explosive Damage and Max HP upgrade available. Armor upgrades have compounding value with Juggernaut\'s base +10 Armor floor.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 30g for Stage 5. Energy Bars: if not held, buy immediately — the +1% Damage per level compounds with The Favourite\'s doubled Hurricane damage for significant total output at Stage 4 player levels. Gold-Tipped Bullets: if gold reserves are high from Hurricane kill volume, the +1% Damage per 5g held starts paying dividends. Avoid Ammo Rig — the -15% Move Speed is prohibitive.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Boss — Absorb Then Detonate',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Deliberately take the Dreadnought\'s first 5 attack patterns without firing Hurricane — each hit charges Juggernaut passive. BLT Ration Pack regen sustains you through the absorption phase. Once at full 5 stacks, fire the first Hurricane drum at the Dreadnought\'s center mass. Runic Warhead radius combined with The Favourite doubled damage and Juggernaut +50% stacks delivers the build\'s peak DPS within the first two drum cycles.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Take every Explosive Damage, Armor, and Max HP upgrade. At Stage 5, Explosive Damage upgrades accumulate into a substantial multiplier that stacks on The Favourite\'s doubled base damage and Juggernaut\'s passive stacks. Armor upgrades from a +10 base floor scale substantially. Reload Speed reduces the 6-second Hurricane drum reload vulnerability window.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. The MoCap at Stage 5 during Dreadnought absorption phase provides +20-30% Damage as you take hits — this damage bonus is active during the rocket salvos that immediately follow each absorbed hit sequence, compounding The Favourite and Juggernaut stack bonuses. Mine all nitra. Gold-Tipped Bullets: hold all gold for maximum damage through the Dreadnought kill.',
          },
        ],
      },
    ],
  },
  {
    id: 'tinkerer-warthog-s',
    name: 'Tinkerer Warthog (Akimbo Rush)',
    class: 'Engineer',
    subclass: 'Tinkerer',
    tier: 'A',
    difficulty: 3,
    passive: '+10% XP Gain, all weapons start at Level 3 — can reach lv18 on Stage 1 with perfect XP routing',
    synopsis: 'Rush Warthog to lv18 Akimbo for simultaneous forward and backward shotgun blasts. Tinkerer\'s lv3 weapon start compresses the Stage 1 grind — Warthog reaches Akimbo faster than any other subclass. Voltaic Shock Fence provides XP vacuum via Magnetic Alloy and covers the reload window. Popup Tripod is mandatory; standing still to stack it is the core damage loop.',
    playstyle: 'Plant feet and unload — Popup Tripod rewards stationary play with up to +30% Fire Rate and Reload Speed. Place Voltaic Shock Fence with Magnetic Alloy to hoover XP orbs during fights. Rotate around room edges to create safe firing positions while maximizing Tripod stacks. The Akimbo OC fires in both directions simultaneously, so positioning in a corridor or doorway doubles effective pellet coverage. Tinkerer\'s +10% XP Gain means you should see Warthog lv18 in Stage 1 if kills are prioritized over mining.',
    strengths: [
      'Tinkerer\'s lv3 start and +10% XP Gain means Warthog can reach Akimbo (lv18) in Stage 1 with good XP routing — a 1-stage power-spike lead over non-Tinkerer variants',
      'Akimbo fires in both directions simultaneously, covering front and back in a single shot and trivializing flanking enemies',
      'Voltaic Shock Fence with Magnetic Alloy passively collects XP orbs and provides constant electric DoT, freeing attention for positioning',
    ],
    weaknesses: [
      'Completely stationary playstyle — Popup Tripod stacks reset on any movement, punishing kiting or repositioning harshly',
      'Warthog is a short-range shotgun; dense corridors are ideal but open arenas reduce pellet hits and spike damage drops',
      'Below A-tier until Akimbo fires: lv6 and lv12 Balanced OCs are meaningful but unremarkable compared to S-tier builds already online',
    ],
    tips: [
      'Prioritize XP orb collection above mineral mining in Stage 1 — the Tinkerer XP bonus compounds, and every extra kill orb is progress toward Akimbo. Magnetic Alloy Shock Fence automates this loop.',
      'Plant at a chokepoint entrance and let Voltaic Shock Fence handle the flanks while Warthog fires into the main horde channel — Popup Tripod reaches full stacks in about 3 seconds of sustained fire.',
      'At Warthog lv6 take Gas Rerouting (+25% Fire Rate, +25% Reload Speed) — it dramatically improves the feel of Warthog before Akimbo and synergizes with Popup Tripod stacking.',
      'Akimbo fires both directions simultaneously; stand in a doorframe or narrow corridor for the backward blast to hit enemies that wrapped around you, doubling pellet coverage for free.',
      'Turbo Encabulator is unusually strong here — Tinkerer\'s high OC count from weapon head-start means you hit the artifact\'s scaling breakpoint earlier than other builds.',
    ],
    weapons: [
      {
        name: '"Warthog" Auto 210',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+25% Fire Rate, +25% Reload Speed — improves pre-Akimbo DPS and synergizes with Popup Tripod',
          },
          {
            level: 12,
            name: 'High Velocity Bullets',
            verdict: 'take',
            note: '+50% Range, +10% Damage — extends effective shotgun range meaningfully in open arenas',
          },
          {
            level: 18,
            name: 'Akimbo',
            verdict: 'take',
            note: 'MUST-TAKE — fires forward and backward simultaneously; the entire build',
          },
        ],
      },
      {
        name: 'Voltaic Shock Fence',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Magnetic Alloy',
            verdict: 'take',
            note: 'PRIORITY — 3.0 unit XP/material pickup radius; passive resource collection accelerates Tinkerer\'s weapon leveling loop',
          },
          {
            level: 12,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+1 Turret (-10% Range) — more fence nodes means wider electric coverage during stationary firing',
          },
          {
            level: 18,
            name: 'Conduit',
            verdict: 'situational',
            note: 'Beams arc between constructs every 0.5s — strong if you have multiple construct weapons deployed; skip if running only Shock Fence',
          },
        ],
      },
      {
        name: 'LMG Gun Platform',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+1 Turret, +10% Damage — more turrets maintain ambient damage during Warthog reload windows',
          },
          {
            level: 12,
            name: 'Tank Tracks',
            verdict: 'situational',
            note: 'Turrets follow player at 43% speed — useful if you must reposition; otherwise Extra Capacity at lv18 is stronger',
          },
          {
            level: 18,
            name: 'LMG Overload',
            verdict: 'take',
            note: '+100% Fire Rate on turrets — dramatically increases turret DPS during the final stage swarm push',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Fire Rate',
        'Reload Speed',
        'Damage',
        'XP Gain',
        'Construct Damage',
      ],
      avoid: [
        'Move Speed (counters Popup Tripod playstyle)',
        'Potency (no DoT focus)',
        'Crit Chance (Warthog relies on volume, not crits)',
      ],
    },
    artifacts: {
      always: [
        'Popup Tripod',
        'Pay2Win Console',
        'Turbo Encabulator',
      ],
      good: [
        'Diver\'s Manual',
        'Energy Bars',
        '5 Leaf Clover',
      ],
      never: [
        'Armor Grease',
        'Nitragenic Powder',
        'Pickled Nitra',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Tinkerer Head Start',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Warthog starts at lv3 via Tinkerer passive. Immediately funnel every XP orb into it. With +10% XP Gain, you should hit lv6 in the first minute of Stage 1. Pick up Voltaic Shock Fence as a second weapon as soon as it\'s offered — Magnetic Alloy OC is the first priority at lv6.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Warthog lv6: take Gas Rerouting (+25% Fire Rate, +25% Reload Speed). Shock Fence lv6: ALWAYS take Magnetic Alloy — the XP vacuum is what keeps this build\'s momentum. These two OCs define Stage 1 tempo.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save gold aggressively — target 80g by end of Stage 1. Buy Popup Tripod if it appears (it\'s mandatory and cheap). Grab Pay2Win Console if available; every subsequent reroll in the run adds damage. Skip health and armor purchases.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Approaching Akimbo',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Warthog should reach lv12 early Stage 2 — take High Velocity Bullets. Begin leveling LMG Gun Platform as ambient turret coverage. Shock Fence lv12: take Extra Capacity for wider electric perimeter.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Warthog lv12 High Velocity Bullets gives +50% Range — this matters in open arenas where pellets previously fell short. Hold gold for Akimbo at lv18. Stage 2 should end with Warthog at lv15–17.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Turbo Encabulator if not yet held — by Stage 2 you should have 4+ OCs and the scaling is meaningful. Reroll once for Pay2Win Console if missing. Budget 30g on rerolls max, save ~100g for Stage 3.',
          },
        ],
      },
      {
        stage: 3,
        title: 'AKIMBO ONLINE',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE. Warthog lv18 Akimbo fires forward AND backward simultaneously — every shot hits enemies on both sides. Stand in doorframes and corridors for maximum dual-direction coverage. Switch to Warthog as primary damage dealer exclusively.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Akimbo is the build. Focus subsequent OCs on LMG Gun Platform (LMG Overload for +100% turret Fire Rate) and Shock Fence (Conduit if you have 3+ constructs). Stack Fire Rate and Damage upgrades from shop.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend freely now. Pay2Win Console users: reroll aggressively to build damage stacks. Buy Energy Bars if not held — Tinkerer\'s fast leveling means Energy Bars stacks compound faster here than most builds. Reroll for Diver\'s Manual if missing.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Fill & Optimize Turrets',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Level LMG Gun Platform to lv18 for LMG Overload. Turrets at +100% Fire Rate handle ambient swarms while Akimbo focuses elites. Level Shock Fence to lv18 Conduit if multiple constructs are deployed — arc damage fills gaps between shotgun blasts.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'LMG Gun Platform lv18: LMG Overload for turret Fire Rate doubling. Turbo Encabulator should now be at 6+ OC stacks. Consider Battery Bullets on LMG turrets to add electric damage type for Multi Tool artifact synergy.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Complete the Pay2Win Console + 5 Leaf Clover combo if possible — rerolls simultaneously improve offers and add damage stacks. Save 30g for Stage 5. Buy Damage or Fire Rate stat upgrades.',
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
            content: 'No new weapon investments. Warthog Akimbo handles Dreadnought directly — plant at range 8 and double-blast each shot cycle. LMG turrets cover ambient spawns. Use Shock Fence to zone the Dreadnought approach vector.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'All OC slots should be filled. Take any global Damage or Fire Rate upgrades. Turbo Encabulator at 8+ stacks is providing +24% Damage and +24% Reload Speed — this is the build\'s hidden ceiling.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend every gold and nitra. Reroll for Popup Tripod if somehow missing — it\'s the single highest-impact artifact for this build\'s stationary loop. Mine aggressively for nitra income in the final stage.',
          },
        ],
      },
    ],
  },
  {
    id: 'demo-breach-cutter',
    name: 'Demo Breach Cutter',
    class: 'Engineer',
    subclass: 'Demolitionist',
    tier: 'A',
    difficulty: 3,
    passive: '+20% Reload Speed & AoE Size for [EXPLOSIVE] weapons — every grenade is bigger and faster',
    synopsis: 'Breach Cutter fires a plasma beam carried between two bouncing projectiles, carving through entire enemy lines. Breach Cutter is tagged [PLASMA, BEAM] — NOT EXPLOSIVE — so the Demo passive does not apply to the beam itself. However, Demo\'s +20% Reload Speed applies to all weapons including Breach Cutter, and Plasma Burster (tagged EXPLOSIVE) gains full Demo passive benefits. The combo is A-tier: Breach Cutter handles long-range line clears, Plasma Burster\'s AoE is amplified by Demo and covers what the beam misses.',
    playstyle: 'Position sideways to enemy approach columns so the Breach Cutter beam cuts horizontally across the widest possible enemy group. The beam lingers for its full duration, dealing damage on each tick — moving enemies still take multiple hits as they walk through it. Plasma Burster (with Demo +20% AoE) is deployed between Breach Cutter reloads; Demo\'s faster reload reduces the dead time between cuts. HE Grenade handles tight clusters the beam can\'t angle to hit.',
    strengths: [
      'Breach Cutter\'s persistent horizontal beam carves through tightly packed horde columns with each shot, offering consistent multi-hit damage on every fire cycle',
      'Demo\'s +20% Reload Speed meaningfully reduces dead time between beam cuts, increasing effective Breach Cutter uptime',
      'Plasma Burster with Demo\'s +20% AoE Size creates wide explosive bursts that handle any enemies the beam trajectory misses',
    ],
    weaknesses: [
      'Breach Cutter is NOT tagged EXPLOSIVE — Demo\'s +20% AoE Size bonus does NOT apply to the beam itself, limiting the subclass synergy to reload speed only on the carry',
      'Clip size of 1 on Breach Cutter means every misfire or poor angle wastes the entire reload cycle — positioning errors are costly',
      'Beam requires manual angle alignment; enemies approaching from multiple directions simultaneously can force poor-angle shots',
    ],
    tips: [
      'Angle perpendicular to enemy approach direction — the beam cuts horizontally and a 90-degree sideways placement through a corridor maximizes hits per tick.',
      'Even More Beams (lv18 OC) adds 3 additional beams to each shot, turning the Breach Cutter into a multi-lane slicer that covers the full width of any room.',
      'Deploy Plasma Burster immediately after firing Breach Cutter — the 6-second Breach Cutter reload is the natural window to bounce a Plasma Burster through the same group for a second damage wave.',
      'Hot Plasma OC on Breach Cutter adds Burn status — enemies that survive the initial beam tick continue burning; this is especially useful on elites with large HP pools.',
      'A Little More Oomph! at lv6 (+15% Damage, +25% Reload Speed) is the priority first OC — it stacks with Demo\'s reload speed bonus for the fastest possible beam cycle time.',
    ],
    weapons: [
      {
        name: 'Breach Cutter',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: '+15% Damage, +25% Reload Speed — stacks with Demo passive for maximum beam uptime',
          },
          {
            level: 12,
            name: 'More Beams',
            verdict: 'take',
            note: '+1 Beam — more simultaneous beam lanes increases hit coverage per shot',
          },
          {
            level: 18,
            name: 'Even More Beams',
            verdict: 'take',
            note: '+3 Beams — four total beam lanes cut through wide swaths; the build-defining lv18 OC',
          },
        ],
      },
      {
        name: 'Plasma Burster',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: '+15% Damage, +25% Reload Speed — EXPLOSIVE tag means Demo passive fully amplifies the AoE',
          },
          {
            level: 12,
            name: 'Ionized Plasma',
            verdict: 'take',
            note: '+15% Damage, +Shock Potency — adds shock status that Demo\'s reload speed lets you reapply quickly',
          },
          {
            level: 18,
            name: 'More Bounce!',
            verdict: 'take',
            note: 'More bounces before detonation — each bounce is a potential hit; wider bounce coverage with Demo\'s AoE bonus',
          },
        ],
      },
      {
        name: 'Deepcore PGL',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Compact Explosives',
            verdict: 'take',
            note: '+30% Explosion Radius — EXPLOSIVE tag means Demo\'s +20% AoE stacks on top; massive grenade blast coverage',
          },
          {
            level: 12,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+25% Fire Rate, +25% Reload Speed — Demo reload passive makes PGL feel near-instant between shots',
          },
          {
            level: 18,
            name: 'Bigger Mags',
            verdict: 'take',
            note: '+100% Clip Size, +100% Fire Rate — transforms PGL into a rapid grenade spam weapon with Demo\'s reload acceleration',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Reload Speed',
        'Damage',
        'AoE Size',
        'Fire Rate',
        'Potency',
      ],
      avoid: [
        'Crit Chance (beam damage doesn\'t crit reliably)',
        'Move Speed (stationary beam angling is better)',
        'HP/Armor (no tank role)',
      ],
    },
    artifacts: {
      always: [
        'Diver\'s Manual',
        'Pay2Win Console',
        'Energy Bars',
      ],
      good: [
        'Chemist Kit (for Plasma Burster shock/burn DoT)',
        '5 Leaf Clover',
        'Turbo Encabulator',
      ],
      never: [
        'Popup Tripod (beam requires movement to reposition)',
        'Nitragenic Powder',
        'Squint-EE5',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Identify Breach Cutter',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: Breach Cutter > Plasma Burster > Deepcore PGL. If Breach Cutter is not offered, take PGL (it\'s the Demo starting weapon and benefits fully from the passive). Level whatever carry you have while waiting for Breach Cutter to appear.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'First OC depends on the carry: PGL lv6 take Compact Explosives (Demo AoE stacks). Breach Cutter lv6 take A Little More Oomph! (+15% Damage, +25% Reload Speed). Plasma Burster lv6 take A Little More Oomph!. Demo\'s +20% Reload Speed makes every reload OC doubly valuable.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 60–80g. Buy Diver\'s Manual if it appears (universal value). Demo builds have lower artifact dependencies than Tinkerer, so shop play is flexible — look for damage multipliers.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Beam Online',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Breach Cutter to lv12 for More Beams. Level Plasma Burster as the secondary carry. Demo\'s reload speed means the gap between Breach Cutter fires feels much shorter than raw stats suggest.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Breach Cutter lv12: More Beams (+1 beam). Plasma Burster lv12: Ionized Plasma for shock stacking. If running PGL, Gas Rerouting at lv12 near-doubles effective PGL fire rate with Demo passive stacked.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Pay2Win Console now if available — rerolling is affordable with Demo\'s efficient build that doesn\'t need specific OC hunting. Look for AoE Size upgrades that stack with Demo passive. Budget 40g on rerolls.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Even More Beams',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE at Breach Cutter lv18. Even More Beams adds 3 beams for 4 total simultaneous beam lanes — each shot now covers most of a room\'s width. Large enemy groups melt instantly. Switch to Breach Cutter as exclusive primary.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Breach Cutter lv18: Even More Beams. Plasma Burster lv18: More Bounce! for extra detonations with Demo AoE. Begin leveling PGL toward Bigger Mags (lv18) for rapid grenade spam.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend freely. Buy Energy Bars if not held. Reroll for Chemist Kit if Plasma Burster/PGL shock or burn DoT is a key damage source — Chemist Kit\'s +15% Status Effect Damage amplifies every explosive DoT tick.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Fill Secondaries',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Level PGL toward Bigger Mags. Plasma Burster should be at lv18. Consider adding LMG Gun Platform as ambient turret coverage — it frees attention for beam angle positioning.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'PGL lv18: Bigger Mags for rapid grenade fire. Focus stat upgrades on Reload Speed to stack with Demo passive for maximum between-blast DPS. Turbo Encabulator should have 5+ stacks by now.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Complete Diver\'s Manual + Energy Bars + Pay2Win Console trinity. Save 30g for Stage 5 rerolls. Look for AoE Size stat cards that amplify PGL and Plasma Burster blast radius on top of Demo passive.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Final Push — Four Beams',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'No new investments. Four-beam Breach Cutter handles Dreadnought approach corridors; angle the shot to maximize ticks on the Dreadnought body. Plasma Burster handles the second fight wave.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'No new OC gating. Take any global Damage or AoE upgrades. Hot Plasma burn DoT on Breach Cutter is useful for Dreadnought sustained damage if not already equipped at lv6 or lv12.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Reroll for Turbo Encabulator if not held — 8 OCs at Stage 5 yields +24% Damage, +24% Reload Speed stacking on Demo\'s reload passive. Mine nitra for income.',
          },
        ],
      },
    ],
  },
  {
    id: 'demo-plasma-burster',
    name: 'Demo Plasma Burster',
    class: 'Engineer',
    subclass: 'Demolitionist',
    tier: 'B',
    difficulty: 2,
    passive: '+20% Reload Speed & AoE Size for [EXPLOSIVE] weapons — every grenade is bigger and faster',
    synopsis: 'Plasma Burster is tagged [PLASMA, THROWABLE, AREA, EXPLOSIVE] — Demo passive fully applies. Each burst bounce covers a wider explosion radius with +20% AoE, and the faster reload lets you throw more frequently. B-tier because Plasma Burster is a secondary weapon used as a carry, and its base stats (75 damage, 0.17 fire rate) are lower ceiling than PGL or Breach Cutter. Playable and satisfying but outclassed by dedicated carry weapons.',
    playstyle: 'Throw Plasma Burster into dense enemy groups and watch it bounce-explode through the cluster. Demo\'s +20% AoE means each bounce explosion catches more enemies. PGL handles immediate threats while Plasma Burster reloads. HE Grenade provides close-range burst for anything that reaches melee. Reload Speed investment is mandatory — Plasma Burster\'s 6-second base reload is the primary limiting factor.',
    strengths: [
      'Demo\'s +20% AoE Size directly amplifies every Plasma Burster bounce explosion, making each throw cover significantly wider area than without the passive',
      'The Favourite OC (+75% Damage, +30% Explosion Radius) creates enormous individual burst explosions that one-shot dense groups; Demo\'s AoE stacks on the increased radius',
      'Straightforward weapon synergy — every explosive weapon in the loadout benefits from the same passive, making optimization simple',
    ],
    weaknesses: [
      'Plasma Burster\'s 0.17 fire rate and 6-second reload make it unsuitable as a primary carry against continuous swarms — there is too much dead time between throws',
      'B-tier ceiling: Plasma Burster as a carry does significantly less total damage than PGL or Breach Cutter even with Demo passive applied',
      'The Favourite OC\'s downside (-25% Damage, -20% Explosion Radius on all other weapons) punishes multi-weapon loadouts; committing to it locks Plasma Burster as the exclusive carry',
    ],
    tips: [
      'Aim Plasma Burster throws at the center of an enemy cluster so the bounce explosions propagate outward through the group — each bounce hits a wider circle with Demo\'s +20% AoE.',
      'The Favourite at lv18 (+75% Damage, +30% Explosion Radius) is the build-defining OC; when combined with Demo\'s AoE, each burst hits a massive radius. Accept the other weapon penalty and commit fully.',
      'More Bounce! (lv18 alternative) extends the bounce count — more detonations per throw compensates for lower individual burst damage if you don\'t take The Favourite.',
      'PGL with Bigger Mags (lv18) as secondary provides rapid grenade fire to fill Plasma Burster reload windows — Demo\'s reload passive makes PGL feel near-instant.',
      'A Little More Oomph! at lv6 is always the correct first Plasma Burster OC — +15% Damage and +25% Reload Speed both directly address the weapon\'s key weaknesses.',
    ],
    weapons: [
      {
        name: 'Plasma Burster',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: '+15% Damage, +25% Reload Speed — EXPLOSIVE tag means Demo\'s +20% AoE already amplifies the burst; this stacks on top',
          },
          {
            level: 12,
            name: 'Cold Plasma',
            verdict: 'take',
            note: '+15% Damage, adds Slow — slowed enemies cluster more tightly, amplifying follow-up explosions',
          },
          {
            level: 18,
            name: 'The Favourite',
            verdict: 'take',
            note: 'PRIORITY — +75% Damage, +30% Explosion Radius with Demo AoE stacked creates enormous burst; commit to Plasma Burster as the exclusive carry',
          },
        ],
      },
      {
        name: 'Deepcore PGL',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+25% Fire Rate, +25% Reload Speed — EXPLOSIVE; Demo reload stacks; PGL fills dead time during Plasma Burster reload cycles',
          },
          {
            level: 12,
            name: 'Compact Explosives',
            verdict: 'take',
            note: '+30% Explosion Radius — EXPLOSIVE; Demo\'s +20% AoE stacks for wide coverage on a fast-firing grenade',
          },
          {
            level: 18,
            name: 'Bigger Mags',
            verdict: 'take',
            note: '+100% Clip Size, +100% Fire Rate — transforms PGL into rapid grenade spam; Demo reload makes each clip feel endless',
          },
        ],
      },
      {
        name: 'Voltaic Shock Fence',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Magnetic Alloy',
            verdict: 'take',
            note: '3.0 unit XP pickup radius — passive resource collection while Plasma Burster reloads',
          },
          {
            level: 12,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+1 Turret — wider fence perimeter zones out enemies during long Plasma Burster reload windows',
          },
          {
            level: 18,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+3 Turrets (-30% Range) — maximum fence node count for full room electric coverage',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Reload Speed',
        'AoE Size',
        'Damage',
        'Potency',
        'Fire Rate',
      ],
      avoid: [
        'Crit Chance (AoE explosions don\'t benefit from crits consistently)',
        'Move Speed (stationary throw positioning is better)',
        'HP/Armor',
      ],
    },
    artifacts: {
      always: [
        'Diver\'s Manual',
        'Energy Bars',
        'Pay2Win Console',
      ],
      good: [
        'Chemist Kit (shock/burn DoT on Plasma Burster)',
        'Turbo Encabulator',
        '5 Leaf Clover',
      ],
      never: [
        'Popup Tripod',
        'Squint-EE5',
        'Nitragenic Powder',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Grenade Loop Foundation',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: Plasma Burster > Deepcore PGL > Voltaic Shock Fence. PGL is the Demo starting weapon and provides coverage while hunting for Plasma Burster. Both are EXPLOSIVE and benefit from Demo passive immediately.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'First weapon lv6: take A Little More Oomph! on whichever explosive weapon you have. Demo\'s +20% Reload Speed means every reload OC offers compounded value. Priority: get Plasma Burster to lv6 for A Little More Oomph!.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 60g. Buy Diver\'s Manual if available — universal value. Demo builds don\'t require expensive OC hunting in Stage 1, so avoid unnecessary rerolls. Goal: survive with PGL while finding Plasma Burster.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Plasma Burster Online',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Plasma Burster to lv12 for Cold Plasma. Continue leveling PGL as secondary fill-in weapon. Shock Fence lv6 Magnetic Alloy is the passive XP vacuum — deploy it first each stage to keep leveling momentum.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Plasma Burster lv12: Cold Plasma (+15% Damage, Slow). The slow effect makes enemies bunch tighter, amplifying subsequent bounce explosions. PGL lv12: Compact Explosives for Demo AoE stack.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Pay2Win Console if available — affordable with Demo\'s moderate gold needs. Reroll once for Chemist Kit if you have shock or burn DoT sources from Plasma Burster OCs. Save ~80g for Stage 3.',
          },
        ],
      },
      {
        stage: 3,
        title: 'The Favourite Commits',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE at Plasma Burster lv18 — The Favourite OC. Each burst explosion is now enormous with Demo\'s AoE stacked. Accept the other weapon penalty and lean into Plasma Burster exclusively. PGL rapid fire handles between-throw windows.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Plasma Burster lv18: The Favourite. PGL lv18: Bigger Mags for rapid grenade spam to fill Plasma Burster reload gaps. This is the complete offensive loop.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Energy Bars if not held. The Favourite reduces other weapon damage, so double down on Plasma Burster stat upgrades — AoE Size and Damage. Reroll once for Chemist Kit if shock DoT is in the build.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Optimize Reload Loop',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Both Plasma Burster and PGL should be at lv18. Focus on Shock Fence levels for passive electric coverage. Consider LMG Gun Platform as ambient turret support if not already leveling it.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Shock Fence lv18: Extra Capacity for maximum fence nodes. Any remaining overclock slots: prioritize Reload Speed increases to further compress Plasma Burster\'s 6-second base reload with Demo passive.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Complete artifact collection. Turbo Encabulator at 6+ OC stacks is +18% Damage, +18% Reload Speed — significant at this point. Save 30g for Stage 5.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Final Push — Spend Everything',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'No new investments. Plasma Burster with The Favourite handles Dreadnought directly — bounce the grenade into the Dreadnought for multi-detonation hits. The enormous AoE with Demo and OC stacked will hit nearby spawn waves too.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'No new OC gating. Take global Damage and AoE Size stat upgrades. Reload Speed upgrades are the highest value stat at Stage 5 since they directly compress the Plasma Burster throw cycle.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend every gold and nitra. Reroll for any remaining S/A tier artifacts. Prioritize Diver\'s Manual if not held — every stat it provides helps here. Mine nitra for income during the stage.',
          },
        ],
      },
    ],
  },
  {
    id: 'maintenance-worker-stubby',
    name: 'Maintenance Worker Stubby',
    class: 'Engineer',
    subclass: 'Maintenance Worker',
    tier: 'A',
    difficulty: 2,
    passive: '+10% Construct Damage, +10% Construct Reload Speed — turrets are stronger and fire faster',
    synopsis: 'Stubby Voltaic SMG provides constant electric damage to the closest enemy while LMG Gun Platform turrets handle ambient swarm management — boosted by Maintenance Worker\'s +10% Construct Damage and +10% Construct Reload Speed. The MK 11 OC (+25% Fire Rate, +25% Reload Speed, +100% Potency) transforms the Stubby into a DoT machine. Turrets cover area; Stubby handles elites. A-tier: more active than the pure turret-army build because Stubby\'s targeting requires positioning investment.',
    playstyle: 'Maintain proximity to turret formations — Stubby targets the closest enemy automatically, and LMG turrets handle the surrounding swarm. The EM Discharge OC enables shooting turrets to create electrical AoE bursts; with Maintenance Worker\'s construct buffs, these bursts are amplified. Deploy Voltaic Shock Fence to add a third construct layer, then use Stubby as the targeted damage tool for elites while the construct network handles ambient pressure.',
    strengths: [
      'LMG Gun Platform turrets with +10% Construct Damage and +10% Construct Reload Speed effectively function as a permanent damage field that doesn\'t require player attention',
      'MK 11 OC transforms Stubby into a high-potency electric DoT weapon; with Chemist Kit stacked, electric DoT ticks compound across large enemy groups',
      'EM Discharge OC allows shooting friendly turrets to create electrical AoE explosions — with Maintenance Worker\'s construct buffs, these explosions are amplified',
    ],
    weaknesses: [
      'Both key OCs (MK 11 and EM Discharge) are lv18 unlocks — Stubby is unremarkable before then, making Stages 1–2 feel underpowered compared to faster-ramping builds',
      'Electric damage has limited effectiveness on Glyphid Praetorians and other enemies with electrical resistance — construct damage is physical by default on LMG turrets',
      'Construct placement requires thoughtful positioning each stage; poorly placed turrets leave gaps that require Stubby to cover alone',
    ],
    tips: [
      'Deploy LMG turrets at chokepoints before the wave starts, then stand between them — the +10% Construct Reload Speed means turrets cycle back into fire faster, sustaining pressure without gaps.',
      'MK 11 is the lv18 priority: +100% Potency means every Stubby hit applies electric DoT at double the effectiveness. Pair with Chemist Kit for status effect damage that multiplies the already-amplified ticks.',
      'EM Discharge allows shooting your own turrets for an electric AoE burst — after deploying LMG turrets, fire Stubby into each one for a chain of electrical pulses boosted by the construct passive.',
      'Battery Bullets on LMG Gun Platform converts turret damage to electrical, adding electric coverage from constructs and creating Multi Tool synergy if you reach 5 unique weapon tags.',
      'Sidearm OC on Stubby (-20% Stubby damage, +25% all other weapon damage) is a viable alternative if turret DPS is already adequate — it buffs LMG turret and Shock Fence damage passively.',
    ],
    weapons: [
      {
        name: '"Stubby" Voltaic SMG',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Gas Rerouting',
            verdict: 'take',
            note: '+25% Fire Rate, +25% Reload Speed — best Balanced OC for uptime before lv18 power spike',
          },
          {
            level: 12,
            name: 'Potent Juice',
            verdict: 'take',
            note: '+30% Potency — electric DoT application improves; pairs with Chemist Kit for amplified status ticks',
          },
          {
            level: 18,
            name: 'MK 11',
            verdict: 'take',
            note: 'PRIORITY — +100% Potency, +25% Fire Rate, +25% Reload Speed at the cost of -50 Accuracy; the build-defining OC',
          },
        ],
      },
      {
        name: 'LMG Gun Platform',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+1 Turret, +10% Damage — more turrets means wider ambient coverage; Maintenance Worker +10% Construct Damage stacks',
          },
          {
            level: 12,
            name: 'Battery Bullets',
            verdict: 'take',
            note: 'Converts turrets to ELECTRICAL damage, +10% Damage — adds electric type to constructs for Multi Tool synergy',
          },
          {
            level: 18,
            name: 'LMG Overload',
            verdict: 'take',
            note: '+100% Turret Fire Rate — with Maintenance Worker +10% Construct Reload Speed, turrets cycle back nearly twice as fast',
          },
        ],
      },
      {
        name: 'Voltaic Shock Fence',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Magnetic Alloy',
            verdict: 'take',
            note: '3.0 unit XP pickup radius — passive resource collection to maintain weapon leveling momentum',
          },
          {
            level: 12,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+1 Turret (-10% Range) — more fence nodes; third construct layer creates overlapping electric zones',
          },
          {
            level: 18,
            name: 'Conduit',
            verdict: 'take',
            note: 'Beams arc between constructs every 0.5s — with LMG + Shock Fence both deployed, the arc chain covers entire rooms',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Construct Damage',
        'Reload Speed',
        'Fire Rate',
        'Potency',
        'Status Effect Damage',
      ],
      avoid: [
        'Crit Chance (Stubby volume targets don\'t benefit from crits the way snipers do)',
        'Move Speed (stationary turret positioning)',
        'Mining Speed',
      ],
    },
    artifacts: {
      always: [
        'Chemist Kit',
        'Popup Tripod',
        'Pay2Win Console',
      ],
      good: [
        'Diver\'s Manual',
        'Turbo Encabulator',
        'Energy Bars',
      ],
      never: [
        'Squint-EE5',
        'Nitragenic Powder',
        'Armor Grease',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Construct Foundation',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'LMG Gun Platform is the Maintenance Worker starting weapon. Deploy turrets immediately and let them handle the first waves. Pick up Stubby Voltaic SMG as second weapon when offered — it\'s the electric DPS layer. Level LMG to lv6 first for Extra Capacity.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'LMG lv6: Extra Capacity (+1 Turret, +10% Damage). Maintenance Worker +10% Construct Damage already amplifies these turrets. Stubby lv6: Gas Rerouting (+25% Fire Rate, +25% Reload Speed) for best pre-MK11 performance.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 80g. Buy Popup Tripod early — the stationary turret deployment + Stubby firing loop means you\'ll naturally stand still. Buy Chemist Kit if available; MK 11 Potency boost at lv18 is the payoff.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Electric Network Grows',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Stubby to lv12 for Potent Juice. Add Voltaic Shock Fence as a third construct layer — Magnetic Alloy OC provides passive XP vacuum. LMG lv12: Battery Bullets for ELECTRICAL turrets.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Stubby lv12: Potent Juice (+30% Potency). LMG lv12: Battery Bullets (electrical conversion). Shock Fence lv6: Magnetic Alloy. At this point the construct network is generating ambient electric damage and collecting XP passively.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Chemist Kit if not yet held — the MK 11 Potency boost at lv18 plus Chemist Kit\'s +15% Status Effect Damage creates the electric DoT loop. Buy Pay2Win Console for ongoing damage stacking. Save ~70g.',
          },
        ],
      },
      {
        stage: 3,
        title: 'MK 11 ONLINE',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE at Stubby lv18 MK 11. +100% Potency means every hit applies electric DoT twice as effectively. With Chemist Kit stacked, DoT ticks are now meaningful damage. Deploy constructs first each wave, then use Stubby on elites.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Stubby lv18: MK 11. LMG lv18: LMG Overload (+100% Turret Fire Rate). With Maintenance Worker +10% Construct Reload Speed, turrets cycle back nearly twice as fast after deploying with Overload.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Energy Bars if not held. Spend on Reload Speed and Fire Rate upgrades — both stack with Maintenance Worker passive for construct reload improvements. Reroll for Turbo Encabulator if OC count is 5+.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Construct Army Complete',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Voltaic Shock Fence to lv18 Conduit. With LMG + Shock Fence both deployed, Conduit\'s arc beams chain between all constructs every 0.5 seconds, creating a continuous electric web boosted by Maintenance Worker passive.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Shock Fence lv18: Conduit. All construct OCs should be filled. Look for Potency and Status Effect Damage upgrades from the shop to amplify the electric DoT web from all three construct types.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Complete artifact trinity. Turbo Encabulator now has 7+ stacks (+21% Damage, +21% Reload Speed). Buy any remaining utility artifacts. Save 30g for Stage 5.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Final Push — Triple Constructs',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'No new investments. Deploy all constructs at the Dreadnought encounter — LMG turrets + Shock Fence + Conduit arc chains provide continuous construct damage. Stubby handles the Dreadnought directly with MK 11 electric DoT.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'No new OC gating. Take global Damage and Reload Speed stat upgrades. Construct Damage upgrades are unusually valuable here — they stack with Maintenance Worker\'s +10% Construct Damage passive.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend every gold and nitra. Buy Ammo Rig if available — +50% Fire Rate on Stubby with -15% Move Speed is acceptable since the turret network reduces movement needs. Mine nitra aggressively.',
          },
        ],
      },
    ],
  },
  {
    id: 'maintenance-worker-hi-volt',
    name: 'Maintenance Worker Hi-Volt',
    class: 'Engineer',
    subclass: 'Maintenance Worker',
    tier: 'A',
    difficulty: 2,
    passive: '+10% Construct Damage, +10% Construct Reload Speed — turrets are stronger and fire faster',
    synopsis: 'Hi-Volt Thunderbird deploys electric drones that attack nearby enemies. Drones are tagged [ELECTRIC, CONSTRUCT, LASTING, DRONE] — Maintenance Worker\'s +10% Construct Damage and +10% Construct Reload Speed directly buff drone damage and deployment speed. Unlike Stubby (single-target spray), Hi-Volt\'s drones pursue the closest enemies in range simultaneously — effective against groups where each drone targets a different enemy. A-tier: drone network + turret network creates layered construct coverage.',
    playstyle: 'Deploy both LMG turret groups and Hi-Volt drone swarms before enemy waves arrive. Maintenance Worker\'s passive means the combined drone + turret output is higher than the base stat line suggests. Position at the center of your construct deployment to draw enemies into the kill zone. Disposable Tech OC extends drone lifetime and adds exploding ground zones on death — with Maintenance Worker buffs, these death explosions deal amplified damage. Use player weapons only for elites the constructs can\'t focus quickly enough.',
    strengths: [
      'Hi-Volt drones and LMG turrets together create a dual-layer construct network that handles both close-range (drones) and medium-range (turrets) threats simultaneously',
      'Disposable Tech OC (+100% Drone Lifetime, +40% Reload Speed) combined with Maintenance Worker\'s +10% Construct Reload Speed makes drone deployment feel continuous',
      'Conduit OC causes constructs to arc electric beams between each other every 0.5 seconds — with multiple construct types deployed, the arc chain creates a persistent electric web with amplified damage',
    ],
    weaknesses: [
      'Hi-Volt drones have limited range (5 units base) — enemies that stay outside the drone perimeter require player weapon coverage, splitting attention',
      'Drone-based builds require re-deployment frequently as drone lifetime expires; mismanaging drone cycles leaves gaps that turrets alone can\'t fill',
      'Conduit OC requires multiple constructs nearby to fire — if constructs die or expire simultaneously, the arc chain collapses and damage drops sharply',
    ],
    tips: [
      'Deploy Hi-Volt drones at the chokepoint entrance and LMG turrets slightly behind — enemies hit the drone swarm first, then the turrets catch any stragglers past the drones.',
      'Disposable Tech is the lv18 priority OC: extended drone lifetime means each deployment covers more of the stage, and the death explosions trigger Maintenance Worker\'s construct damage buff.',
      'Conduit OC (Hi-Volt or Shock Fence at lv18) causes arcs between nearby constructs — deploy all three construct types in a cluster to maximize arc chain coverage; the combined amplified arc beams are devastating.',
      'More Drones at lv12 (+1 extra drone) and lv18 (+3 extra drones) stack directly with Maintenance Worker\'s +10% Construct Damage — each additional drone is amplified by the passive.',
      'Behaviour Chip: Aggro at lv6 causes drones to actively seek out enemies rather than waiting — with Maintenance Worker amplifying their damage, aggressive drones clear faster than passive ones.',
    ],
    weapons: [
      {
        name: 'Hi-Volt Thunderbird',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Behaviour Chip: Aggro',
            verdict: 'take',
            note: 'Drones actively seek enemies — Maintenance Worker\'s +10% Construct Damage means every aggressive drone hit is amplified',
          },
          {
            level: 12,
            name: 'More Drones',
            verdict: 'take',
            note: '+1 Extra Drone — each additional drone benefits from Maintenance Worker passive; more drones = more amplified hits per second',
          },
          {
            level: 18,
            name: 'Disposable Tech',
            verdict: 'take',
            note: '+100% Drone Lifetime, +40% Reload Speed with exploding ground zones on death — amplified by Maintenance Worker +10% Construct Damage',
          },
        ],
      },
      {
        name: 'LMG Gun Platform',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+1 Turret, +10% Damage — Maintenance Worker +10% Construct Damage stacks; more turrets = wider ambient coverage',
          },
          {
            level: 12,
            name: 'Tank Tracks',
            verdict: 'situational',
            note: 'Turrets follow player — useful for mobile repositioning; skip for Extra Capacity if staying stationary',
          },
          {
            level: 18,
            name: 'LMG Overload',
            verdict: 'take',
            note: '+100% Turret Fire Rate — with Maintenance Worker +10% Construct Reload Speed, turrets cycle and fire at nearly double rate',
          },
        ],
      },
      {
        name: 'Voltaic Shock Fence',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Magnetic Alloy',
            verdict: 'take',
            note: 'XP vacuum — passive resource collection to accelerate weapon leveling toward lv18 drone OCs',
          },
          {
            level: 12,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+1 Turret — third construct layer creates overlapping zones with Hi-Volt drones and LMG turrets',
          },
          {
            level: 18,
            name: 'Conduit',
            verdict: 'take',
            note: 'Arc beams between constructs — with drones, turrets, and fence all deployed, arcs create a continuous electric web amplified by Maintenance Worker passive',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Construct Damage',
        'Reload Speed',
        'Construct Lifetime',
        'Potency',
        'Damage',
      ],
      avoid: [
        'Crit Chance (drones don\'t benefit from player crit stats)',
        'Move Speed (stationary construct deployment)',
        'Mining Speed',
      ],
    },
    artifacts: {
      always: [
        'Popup Tripod',
        'Pay2Win Console',
        'Turbo Encabulator',
      ],
      good: [
        'Diver\'s Manual',
        'Energy Bars',
        'Chemist Kit',
      ],
      never: [
        'Squint-EE5',
        'Nitragenic Powder',
        'Armor Grease',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Drone Swarm Foundation',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'LMG Gun Platform is the Maintenance Worker starting weapon. Pick up Hi-Volt Thunderbird as the second weapon immediately — drones at lv3+ start covering additional threat vectors. Level Hi-Volt first for Behaviour Chip: Aggro at lv6.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Hi-Volt lv6: Behaviour Chip: Aggro. Aggressive drones with Maintenance Worker +10% Construct Damage hit harder immediately. LMG lv6: Extra Capacity for more turrets. Both OCs boost construct output from the start.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 80g. Buy Popup Tripod early — standing between construct formations is the playstyle; stacks accumulate naturally. Look for Construct Damage stat cards if available.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Drone Count Builds',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Hi-Volt to lv12 for More Drones (+1 extra drone). Add Voltaic Shock Fence as the third construct layer. LMG lv12: Battery Bullets converts turrets to electric damage. Three construct types now create overlapping coverage zones.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Hi-Volt lv12: More Drones. LMG lv12: Battery Bullets. Shock Fence lv6: Magnetic Alloy for XP vacuum. The construct network grows each stage — Maintenance Worker\'s buffs compound as more constructs are active simultaneously.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Pay2Win Console. Reroll for Turbo Encabulator — by Stage 2 you should have 4+ OCs and the scaling starts delivering. Budget 40g on rerolls, save ~80g for Stage 3 Disposable Tech payoff.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Disposable Tech ONLINE',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE at Hi-Volt lv18 Disposable Tech. +100% Drone Lifetime means each deployment covers the full stage; +40% Reload Speed (stacking with Maintenance Worker +10%) means near-continuous drone coverage. Death explosions hit with amplified construct damage.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Hi-Volt lv18: Disposable Tech. LMG lv18: LMG Overload (+100% Turret Fire Rate). Both top-tier construct OCs are now online. The drone + turret network handles most threats autonomously; use player weapons only for elites.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Energy Bars if not held. Spend on Construct Damage and Reload Speed upgrades. Turbo Encabulator at 6+ stacks. Look for Chemist Kit if Hi-Volt Potent Juice OC was taken for electric DoT amplification.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Conduit Web Complete',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Voltaic Shock Fence to lv18 Conduit. With Hi-Volt drones, LMG turrets, and Shock Fence all deployed, Conduit\'s arc beams chain continuously between all constructs — a persistent electric web amplified by Maintenance Worker\'s passive.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Shock Fence lv18: Conduit. All OC slots filled. The Conduit arc + Disposable Tech death explosions + LMG Overload turret fire creates a three-layer construct damage ecosystem. Focus stat upgrades on Potency and Construct Damage.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Complete artifact collection. Turbo Encabulator should have 7+ stacks (+21% Damage, +21% Reload Speed). Save 30g for Stage 5. Buy any remaining A-tier artifacts.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Final Push — Drone Army',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'No new investments. Deploy all constructs simultaneously at the Dreadnought encounter — drones pursue it directly while turrets cover flanks. Conduit arcs chain between all constructs for continuous electric output. Use Stubby or LMG on the Dreadnought directly.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'No new OC gating. Take any global Damage, Construct Damage, or Reload Speed upgrades. Construct Reload Speed stat cards are unusually valuable here — they amplify Maintenance Worker\'s passive.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Reroll for Popup Tripod if not held. Mine nitra aggressively — Nitragenic Powder is listed as a never-pick for this build, but raw nitra income for rerolls is valuable here.',
          },
        ],
      },
    ],
  },
  {
    id: 'devastator-plasma-charger',
    name: 'Devastator Plasma Charger',
    class: 'Engineer',
    subclass: 'Devastator',
    tier: 'A',
    difficulty: 3,
    passive: '+30% Knockback Force, +15% Explosion Radius — terrain-bouncing plasma beams hit harder and Plasma Burster AoE covers more ground',
    synopsis: 'Experimental Plasma Charger fires a large bouncing plasma ball (tagged PLASMA, LIGHT, PRECISE, PROJECTILE). Devastator\'s +30% Knockback Force applies to the impact, sending enemies flying into walls. Devastator\'s +15% Explosion Radius applies to Plasma Burster (EXPLOSIVE) secondary. The loop: Plasma Charger impact knocks enemies into walls for terrain damage; Plasma Burster\'s expanded AoE catches the scatter. Position at room center — every Plasma Charger bounce carves in a new direction while Devastator knockback sends enemies into walls from any angle.',
    playstyle: 'Stand at the room center and fire Plasma Charger into the densest group — the ball bounces toward them and Devastator knockback throws survivors into walls. Plasma Burster handles close-range enemies that survived the initial hit. Vortex Core OC on Plasma Charger pulls enemies toward the ball before impact, clustering them for the knockback moment. The entire encounter becomes a continuous push: charge shot, knockback into walls, clean up with Plasma Burster, repeat.',
    strengths: [
      'Devastator\'s +30% Knockback Force amplifies every Plasma Charger impact, sending enemies into walls for additional terrain damage on top of direct hit damage',
      'Plasma Burster with Devastator\'s +15% Explosion Radius creates wide AoE bursts that catch enemies scattered by the initial knockback hits',
      'Vortex Core OC on Plasma Charger clusters enemies before impact — the ball\'s gravitational pull gathers the group, then Devastator knockback launches them all simultaneously',
    ],
    weaknesses: [
      'Plasma Charger is a Driller weapon accessible to Engineer only through specific runs — if it doesn\'t appear in the weapon offer pool, the build cannot execute',
      '1-clip, 4-second reload on Plasma Charger means dead time between shots; Devastator passive does not improve reload speed, requiring Reload Speed investment elsewhere',
      'Knockback Force against Praetorian Elites and Q\'ronar Mini Elites is nullified — Devastator\'s primary passive bonus is wasted on these enemy types',
    ],
    tips: [
      'Stand in room center for every engagement — Devastator knockback sends enemies outward in all directions from the impact point, and center positioning means walls are equidistant; every knocked-back enemy hits terrain.',
      'Vortex Core OC on Plasma Charger pulls enemies toward the projectile before impact — fire, let the vortex pull the group in, then watch Devastator knockback launch the clustered group into surrounding walls for maximum terrain damage.',
      'Deploy Seismic Repulsor constructs at room edges — they knock enemies back toward you and into the Plasma Charger\'s bounce path, creating a loop where enemies are knocked back and forth between repulsors and your shots.',
      'Plasma Burster with A Little More Oomph! (+15% Damage, +25% Reload Speed) and Devastator\'s +15% Explosion Radius covers a massive blast area; throw it at knocked-back enemy clusters for multi-hit detonations.',
      'Drippin Balls OC (lv18 Plasma Charger) creates fire ground trails that scale with shot damage — combined with Devastator\'s knockback sending enemies through the fire trail, every knocked enemy takes DoT as they slide.',
    ],
    weapons: [
      {
        name: 'Experimental Plasma Charger',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Vortex Core',
            verdict: 'take',
            note: 'Projectile pulls enemies toward it before impact — clusters groups for Devastator knockback moment, maximizing simultaneous terrain-launch hits',
          },
          {
            level: 12,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: '+15% Damage, +25% Reload Speed — critical for reducing dead time between the 4-second reload cycles',
          },
          {
            level: 18,
            name: 'Drippin Balls',
            verdict: 'take',
            note: 'Fire ground trail scales with shot damage — knocked-back enemies slide through fire trails for sustained DoT; Devastator knockback extends trail exposure',
          },
        ],
      },
      {
        name: 'Plasma Burster',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: '+15% Damage, +25% Reload Speed on EXPLOSIVE weapon — Devastator\'s +15% Explosion Radius stacks for wide AoE bursts',
          },
          {
            level: 12,
            name: 'Ionized Plasma',
            verdict: 'take',
            note: '+15% Damage, +Shock Potency — shock status on bounce explosions applies DoT to scattered knocked-back groups',
          },
          {
            level: 18,
            name: 'More Bounce!',
            verdict: 'take',
            note: 'More detonations per throw — with Devastator\'s +15% Explosion Radius, more bounce explosions cover the wider blast areas from the expanded AoE',
          },
        ],
      },
      {
        name: 'Seismic Repulsor',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+1 Turret, +15% Damage — more knockback turrets at room edges create inbound enemy pressure toward Plasma Charger\'s path',
          },
          {
            level: 12,
            name: 'Coolant Leak',
            verdict: 'take',
            note: 'Turrets slow nearby enemies — slowed enemies cluster before Devastator knockback hits, amplifying multi-target launches',
          },
          {
            level: 18,
            name: 'The Favourite',
            verdict: 'situational',
            note: '+100% Repulsor Damage, +50% Lifetime at -30% Damage on other weapons — only take if Seismic is the primary damage source; otherwise Extra Capacity (lv18) for more knockback nodes',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Damage',
        'Reload Speed',
        'AoE Size',
        'Knockback Force',
        'Potency',
      ],
      avoid: [
        'Crit Chance (plasma ball doesn\'t benefit from crits consistently)',
        'Construct Damage (limited constructs in this build)',
        'Mining Speed',
      ],
    },
    artifacts: {
      always: [
        'Diver\'s Manual',
        'Energy Bars',
        'Pay2Win Console',
      ],
      good: [
        'Chemist Kit (Drippin Balls fire DoT + Plasma Burster shock DoT)',
        'Jet Boots (emergency escape when knockback fails)',
        '5 Leaf Clover',
      ],
      never: [
        'Popup Tripod (active repositioning is required)',
        'Nitragenic Powder',
        'Gold-Tipped Bullets',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Hunt Plasma Charger',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Experimental Plasma Charger is a Driller weapon (Engineer access varies by run). If it doesn\'t appear in Stage 1, take Shard Diffractor or Breach Cutter as placeholder — both are PLASMA weapons that Devastator\'s knockback partially applies to. Deploy Seismic Repulsor for ambient knockback coverage while waiting.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Plasma Charger lv6: Vortex Core is the priority (pulls enemies before impact). If running Shard Diffractor as placeholder, A Little More Oomph! for damage. Plasma Burster lv6: A Little More Oomph!.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 80g. Buy Diver\'s Manual if available — universal value. Look for AoE Size stat upgrades that stack with Devastator\'s +15% Explosion Radius passive. Budget 20g max on rerolls.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Knockback Loop Establishes',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Plasma Charger to lv12 for A Little More Oomph!. Level Plasma Burster to lv12. Seismic Repulsor lv6: Extra Capacity for more knockback nodes. The core knockback loop should be functional by mid-Stage 2.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Plasma Charger lv12: A Little More Oomph! (+15% Damage, +25% Reload Speed). Plasma Burster lv12: Ionized Plasma for shock DoT on scattered enemies. Seismic Repulsor lv6: Extra Capacity.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Pay2Win Console. Reroll for Chemist Kit — Drippin Balls fire trail DoT (coming at lv18) + Plasma Burster shock DoT both benefit. Save ~80g for Stage 3 Drippin Balls OC transition.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Drippin Balls ONLINE',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE at Plasma Charger lv18 Drippin Balls. Fire trails scale with shot damage — Devastator\'s knockback sends enemies sliding through the trails for sustained DoT. Room center positioning means every directional bounce creates a trail that enemies cross.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Plasma Charger lv18: Drippin Balls. Plasma Burster lv18: More Bounce! for wider explosive coverage. Seismic Repulsor lv12: Coolant Leak to slow enemies before Devastator knockback clusters them.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Energy Bars now. Spend on Damage and AoE Size upgrades. Chemist Kit is now fully paying off — Drippin Balls fire DoT ticks are amplified by +15% Status Effect Damage. Reroll for Jet Boots as emergency escape if needed.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Repulsor Network Fills',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Seismic Repulsor to lv18. Extra Capacity lv18 (+3 Turrets) creates a ring of knockback nodes around room edges that continuously push enemies toward center — straight into Plasma Charger bounce paths.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Seismic Repulsor lv18: Extra Capacity (+3 Turrets) for maximum knockback node density. Consider adding Voltaic Shock Fence as fourth construct for electric coverage if weapon slots allow.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Complete artifact collection. Save 30g for Stage 5. Look for Knockback Force stat upgrades that stack with Devastator passive. Turbo Encabulator at 7+ OC stacks is +21% Damage, +21% Reload Speed.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Final Push — Knockback Gauntlet',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'No new investments. Deploy Seismic Repulsors at Dreadnought approach corridors — Devastator\'s +30% Knockback Force stacks with repulsor turret knockback to push the Dreadnought against walls. Plasma Charger handles the Dreadnought directly.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'No new OC gating. Take any global Damage, Reload Speed, or AoE Size upgrades. Knockback Force stat cards are rare but valuable here — they stack directly with Devastator passive for extreme launch force.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. Reroll for Diver\'s Manual if still missing — every stat it provides (Damage, Reload Speed, Crit Chance) is useful. Mine nitra aggressively for reroll budget.',
          },
        ],
      },
    ],
  },
  {
    id: 'devastator-breach-cutter',
    name: 'Devastator Breach Cutter',
    class: 'Engineer',
    subclass: 'Devastator',
    tier: 'B',
    difficulty: 3,
    passive: '+30% Knockback Force, +15% Explosion Radius — terrain-bouncing plasma beams hit harder and Plasma Burster AoE covers more ground',
    synopsis: 'Breach Cutter fires a horizontal plasma beam between two bouncing projectiles. It is tagged [PLASMA, HEAVY, BEAM, LASTING] — NOT EXPLOSIVE — so Devastator\'s +15% Explosion Radius does not apply to the beam. Devastator\'s +30% Knockback Force does not apply to beam weapons (beams have no projectile impact). The primary Devastator synergy is with Plasma Burster (EXPLOSIVE) secondary and Seismic Repulsor knockback turrets, which push enemies into the beam\'s path. B-tier: Breach Cutter works with Devastator but neither passive directly amplifies the carry weapon.',
    playstyle: 'Set up Seismic Repulsor turrets in a line perpendicular to where you will fire the Breach Cutter beam — enemies knocked into the beam\'s horizontal path take repeated beam ticks. Plasma Burster handles tight groups the beam can\'t angle to reach. The play pattern is reactive: wait for Seismic Repulsor to push a group into beam range, fire Breach Cutter across that group, follow with Plasma Burster on survivors.',
    strengths: [
      'Seismic Repulsor knockback turrets push enemy groups into the Breach Cutter beam\'s path, creating an indirect synergy through construct + beam positioning',
      'Plasma Burster with Devastator\'s +15% Explosion Radius handles close-range threats and provides genuine subclass passive synergy on the secondary',
      'Even More Beams (lv18 OC) adds 3 beams to cover wide swaths — combined with enemies pushed into beam range by Seismic Repulsor, multiple enemies hit multiple beams per shot cycle',
    ],
    weaknesses: [
      'Breach Cutter is NOT EXPLOSIVE and has no knockback on the beam — both Devastator passives are functionally wasted on the carry weapon itself',
      'The Seismic Repulsor — Breach Cutter combo requires careful positioning alignment that fails against fast or swarming enemies that don\'t stay in beam paths after knockback',
      'B-tier ceiling: the subclass passive mismatch means this build underperforms the Devastator Shard Diffractor and Devastator Plasma Charger alternatives that have genuine passive synergy',
    ],
    tips: [
      'Place Seismic Repulsor turrets along one axis, then stand perpendicular — when repulsors knock enemies sideways, fire the Breach Cutter beam across that axis to hit the entire flying group mid-air.',
      'Even More Beams at lv18 is essential — four simultaneous beams cover enough width that enemies knocked in any direction within the room still pass through at least one beam.',
      'Plasma Burster is the genuine Devastator synergy weapon here: use it on groups after the beam cuts, taking advantage of the expanded AoE from +15% Explosion Radius to catch scattered enemies.',
      'Hot Plasma OC (+15% Damage, Burn DoT) on Breach Cutter adds fire DoT to every enemy the beam ticks — enemies knocked through the beam by Seismic Repulsor catch fire as they pass.',
      'This build works best in enclosed rooms where knocked-back enemies are funneled into walls and cannot escape the beam\'s range — avoid open arenas where Seismic Repulsor knockback disperses enemies out of beam reach.',
    ],
    weapons: [
      {
        name: 'Breach Cutter',
        isCarry: true,
        overclocks: [
          {
            level: 6,
            name: 'Hot Plasma',
            verdict: 'take',
            note: '+15% Damage, Burn DoT — enemies knocked through the beam by Seismic Repulsor catch fire as they cross; DoT ticks while they recover from knockback',
          },
          {
            level: 12,
            name: 'More Beams',
            verdict: 'take',
            note: '+1 Beam — wider beam coverage improves hit probability on enemies knocked into beam range by Seismic Repulsor',
          },
          {
            level: 18,
            name: 'Even More Beams',
            verdict: 'take',
            note: '+3 Beams — four simultaneous beam lanes cover wide room zones; enemies knocked by repulsors from any angle hit at least one beam',
          },
        ],
      },
      {
        name: 'Plasma Burster',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'A Little More Oomph!',
            verdict: 'take',
            note: '+15% Damage, +25% Reload Speed on EXPLOSIVE weapon — Devastator\'s +15% Explosion Radius applies here; this is where the passive actually fires',
          },
          {
            level: 12,
            name: 'Tape Some Nails to It',
            verdict: 'take',
            note: '+10% Damage, adds KINETIC explosion — EXPLOSIVE tag means Devastator\'s AoE applies; dual damage type also enables Multi Tool synergy',
          },
          {
            level: 18,
            name: 'More Bounce!',
            verdict: 'take',
            note: 'More bounces = more detonations with Devastator\'s expanded AoE — each bounce hits a wider blast radius on the EXPLOSIVE weapon the passive actually applies to',
          },
        ],
      },
      {
        name: 'Seismic Repulsor',
        isCarry: false,
        overclocks: [
          {
            level: 6,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+1 Turret, +15% Damage — more knockback nodes creates a wider push line perpendicular to Breach Cutter beam angles',
          },
          {
            level: 12,
            name: 'Tank Tracks',
            verdict: 'take',
            note: 'Turrets follow player — repositionable knockback line allows dynamic realignment of the push axis relative to beam angle',
          },
          {
            level: 18,
            name: 'Extra Capacity',
            verdict: 'take',
            note: '+3 Turrets (lv18 unstable) — maximum knockback node count creates a broad push wall that feeds the full width of the Breach Cutter beam',
          },
        ],
      },
    ],
    stats: {
      priority: [
        'Damage',
        'Reload Speed',
        'AoE Size',
        'Knockback Force',
        'Fire Rate',
      ],
      avoid: [
        'Crit Chance (beam damage is not crit-scalable reliably)',
        'Construct Reload Speed (limited constructs)',
        'HP/Armor (active repositioning build)',
      ],
    },
    artifacts: {
      always: [
        'Diver\'s Manual',
        'Pay2Win Console',
        'Energy Bars',
      ],
      good: [
        'Chemist Kit (Hot Plasma burn DoT on Breach Cutter + Plasma Burster shock)',
        'Turbo Encabulator',
        'Jet Boots',
      ],
      never: [
        'Popup Tripod (active repositioning required)',
        'Squint-EE5',
        'Nitragenic Powder',
      ],
    },
    phases: [
      {
        stage: 1,
        title: 'Breach Cutter Hunt',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Priority: Breach Cutter > Plasma Burster > Shard Diffractor. If Breach Cutter is not offered, Shard Diffractor is the strongest placeholder (also PLASMA BEAM). Deploy Seismic Repulsor immediately — knockback constructs provide value regardless of which carry weapon is active.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'First OC: Breach Cutter lv6 Hot Plasma (+15% Damage, Burn DoT) or Shard Diffractor lv6 A Little More Oomph!. Plasma Burster lv6: A Little More Oomph! (EXPLOSIVE — Devastator AoE applies). Seismic Repulsor lv6: Extra Capacity.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Save 70g. Buy Diver\'s Manual if available. Look for AoE Size stat upgrades — they apply to Plasma Burster\'s Devastator-amplified blasts. Budget 20g max on rerolls to find Breach Cutter.',
          },
        ],
      },
      {
        stage: 2,
        title: 'Repulsor Beam Axis',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'Push Breach Cutter to lv12 for More Beams. Level Plasma Burster to lv12 for Tape Some Nails to It. Position Seismic Repulsor turrets perpendicular to your primary Breach Cutter firing axis — begin establishing the push-into-beam pattern.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Breach Cutter lv12: More Beams. Plasma Burster lv12: Tape Some Nails to It (+10% Damage, KINETIC explosion — Devastator AoE applies). Seismic Repulsor lv12: Tank Tracks for repositionable push axis.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Pay2Win Console. Reroll for Chemist Kit — Hot Plasma burn DoT + Tape Some Nails kinetic status both benefit. Save ~80g. Budget 40g rerolls.',
          },
        ],
      },
      {
        stage: 3,
        title: 'Even More Beams',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'POWER SPIKE at Breach Cutter lv18 Even More Beams. Four simultaneous beams now cover wide room zones. Combined with Seismic Repulsor pushing enemies into the beam field, any enemy entering the room crosses at least one beam.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'Breach Cutter lv18: Even More Beams. Plasma Burster lv18: More Bounce! for additional detonations with Devastator AoE. Seismic Repulsor lv18: Extra Capacity (+3 Turrets) for maximum push node count.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Buy Energy Bars if not held. Spend on Damage and AoE Size upgrades. Note: this build is B-tier and won\'t feel as dominant as Devastator Plasma Charger at lv18 — compensate with strong artifact coverage.',
          },
        ],
      },
      {
        stage: 4,
        title: 'Optimize Passive Damage',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'All three weapons should be at lv18 or approaching it. Consider Voltaic Shock Fence as a fourth weapon for ambient electric coverage if weapon slots allow — electric damage supplements the PLASMA/KINETIC damage types already present.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'All core OCs filled. Focus stat upgrades on Reload Speed (Breach Cutter\'s 6-second reload is the primary bottleneck) and Damage global multipliers. Turbo Encabulator at 6+ OC stacks delivers meaningful bonuses.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Complete artifact collection. Chemist Kit should be active — Hot Plasma + Tape Some Nails DoT ticks benefit. Save 30g for Stage 5. Accept B-tier ceiling and optimize what\'s available.',
          },
        ],
      },
      {
        stage: 5,
        title: 'Final Push — Four Beams + Repulsor Wall',
        decisions: [
          {
            type: 'weapon',
            label: 'Weapon Pick',
            content: 'No new investments. Set up maximum Seismic Repulsor nodes at the Dreadnought approach. Fire four-beam Breach Cutter through the approach corridor — Dreadnought crosses multiple beams per approach cycle.',
          },
          {
            type: 'overclock',
            label: 'Overclock Choice',
            content: 'No new OC gating. Take global Damage and AoE Size upgrades. Knockback Force stat cards are useful for Seismic Repulsor effectiveness even though Devastator passive doesn\'t amplify beam weapon knockback.',
          },
          {
            type: 'shop',
            label: 'Shop Strategy',
            content: 'Spend everything. This build\'s B-tier ceiling means artifact quality is more important than most builds — reroll aggressively for Diver\'s Manual and Energy Bars if still missing. Mine all available nitra.',
          },
        ],
      },
    ],
  }
]
