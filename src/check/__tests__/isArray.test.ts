import { describe, expect, it } from 'vitest'

import { isArray } from '..'

describe('isArray', () => {
  it.each([
    { tested: '', expected: false },
    { tested: [], expected: true },
    { tested: [2], expected: true },
    { tested: null, expected: false },
    { tested: 'hola mundo', expected: false },
    { tested: true, expected: false },
    { tested: false, expected: false }
  ])('isArray(%o) should be %o', ({ tested, expected }) => {
    expect(isArray(tested)).toBe(expected)
  })
})
