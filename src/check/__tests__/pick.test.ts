import { describe, expect, it } from 'vitest'

import { pick } from '..'

describe('pick to arrays', () => {
  it('pick([1,2,3], [1]) should return [1]', () => {
    expect(pick([1, 2, 3], [1])).toStrictEqual([1])
  })

  it('pick([1,2,3], [1,2]) should return [1,2]', () => {
    expect(pick([1, 2, 3], [1, 2])).toStrictEqual([1, 2])
  })

  it('pick([1,2,3], [1,2]) should return [1,2]', () => {
    expect(pick([1, 2, 3], [])).toStrictEqual([1, 2, 3])
  })

  it('pick([1,2,3], [3, 1]) should return [3, 1]', () => {
    expect(pick([1, 2, 3], [3, 1])).toStrictEqual([3, 1])
  })

  it('pick([], []) should return []', () => {
    expect(pick([], [])).toStrictEqual([])
  })

  it('pick([], [2]) should return []', () => {
    expect(pick([], [2])).toStrictEqual([])
  })
})

describe('pick to objects', () => {
  it('pick({a:"", b:""}, ["b"]) should return {b: ""}', () => {
    expect(pick({ a: '', b: '' }, ['b'])).toStrictEqual({ b: '' })
  })

  it('pick({a:"", b:""}, ["b", "a"]) should return {b: "", a:""}', () => {
    expect(pick({ a: '', b: '' }, ['b', 'a'])).toStrictEqual({ b: '', a: '' })
  })

  it('pick({a:"", b:""}, []) should return {a: "", b:""}', () => {
    expect(pick({ a: '', b: '' }, [])).toStrictEqual({ a: '', b: '' })
  })

  it('pick({}, []) should return {}', () => {
    expect(pick({}, [])).toStrictEqual({})
  })

  it('pick({}, [2]) should return {}', () => {
    expect(pick({}, [2])).toStrictEqual({})
  })

  it('pick({a: 2, b:[]}, ["a"]) should return {a: 2}', () => {
    expect(pick({ a: 2, b: [] }, ['a'])).toStrictEqual({ a: 2 })
  })

  it('pick(undefined, [1]) should return undefined', () => {
    expect(pick(undefined, [1])).toStrictEqual(undefined)
  })

  it('pick(1, []) should return 1', () => {
    expect(pick(1, [])).toStrictEqual(1)
  })
})

describe('pick to different types', () => {
  it.each([
    { tested: { data: false, path: [''] }, expected: false },
    { tested: { data: true, path: [''] }, expected: true },
    { tested: { data: 'string', path: [''] }, expected: 'string' },
    { tested: { data: null, path: [''] }, expected: null },
    { tested: { data: null, path: [] }, expected: null }
  ])(
    'pick($tested.data, $tested.path) should be $expected',
    ({ tested, expected }) => {
      expect(pick(tested.data, tested.path)).toBe(expected)
    }
  )
})
