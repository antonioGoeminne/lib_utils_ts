import { describe, expect, it } from 'vitest'

import { isEmpty } from '..'

describe('isEmpty', () => {
  it.each([
    {
      tested: {},
      expected: true
    },
    {
      tested: { a: 'value' },
      expected: false
    },
    {
      tested: [],
      expected: true
    },
    {
      tested: ['a'],
      expected: false
    },
    {
      tested: '',
      expected: true
    },
    {
      tested: undefined,
      expected: true
    }
  ])('isEmpty($tested) should be $expected', ({ tested, expected }) => {
    expect(isEmpty(tested)).toBe(expected)
  })
})
