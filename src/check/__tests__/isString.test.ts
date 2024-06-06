import { describe, expect, it } from 'vitest'

import { isString } from '..'

describe('is string', () => {
  it.each([
    { tested: '', expected: true },
    { tested: 2, expected: false },
    { tested: null, expected: false },
    { tested: 'hola mundo', expected: true }
  ])('isString(%o) should be %o', ({ tested, expected }) => {
    expect(isString(tested)).toBe(expected)
  })
})
