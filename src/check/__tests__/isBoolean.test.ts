import { describe, expect, it } from 'vitest'

import { isBoolean } from '../isBoolean'

describe('isBoolean', () => {
  it.each([
    { tested: '', expected: false },
    { tested: 2, expected: false },
    { tested: null, expected: false },
    { tested: 'hola mundo', expected: false },
    { tested: true, expected: true },
    { tested: false, expected: true }
  ])('isBoolean(%o) should be %o', ({ tested, expected }) => {
    expect(isBoolean(tested)).toBe(expected)
  })
})
