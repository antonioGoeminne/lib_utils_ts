import { describe, expect, it } from 'vitest'

import { uniq } from '../uniq'

describe('uniq', () => {
  it('uniq([1,2,3,3,2]) should return [1,2,3]', () => {
    expect(uniq([1, 2, 3, 3, 2])).toStrictEqual([1, 2, 3])
  })

  it('uniq([1,2,3,3]) should return [1,2,3]', () => {
    expect(uniq([1, 2, 3, 3, 2])).toStrictEqual([1, 2, 3])
  })

  it('uniq(["a", "b", "a", "d"]) should return ["a", "b", "d"]', () => {
    expect(uniq(['a', 'b', 'a', 'd'])).toStrictEqual(['a', 'b', 'd'])
  })

  it('uniq({}) should return {}', () => {
    expect(uniq({})).toStrictEqual({})
  })

  it('uniq([]) should return []', () => {
    expect(uniq([])).toStrictEqual([])
  })

  it.each([
    { tested: false, expected: false },
    { tested: '', expected: '' },
    { tested: 2, expected: 2 },
    { tested: null, expected: null },
    { tested: undefined, expected: undefined },
    { tested: 'hola mundo', expected: 'hola mundo' },
    { tested: true, expected: true }
  ])('uniq($tested) should be $expected', ({ tested, expected }) => {
    expect(uniq(tested)).toBe(expected)
  })
})
