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
