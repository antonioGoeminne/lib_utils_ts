/* eslint-disable @typescript-eslint/ban-ts-comment */
import { describe, expect, it } from 'vitest'

import { insert } from '..'

describe('insert', () => {
  it('insert([1,2,3], ["a"], 1) should return [1,"a", 2, 3]', () => {
    expect(insert([1, 2, 3], ['a'], 1)).toStrictEqual([1, 'a', 2, 3])
  })

  it('insert([1,2,3], ["a"], 2) should return [1, 2, "a", 3]', () => {
    expect(insert([1, 2, 3], ['a'], 2)).toStrictEqual([1, 2, 'a', 3])
  })

  it('insert([1,2,3], [{ a: 2 }], 2) should return [1, 2, { a: 2 }, 3]', () => {
    expect(insert([1, 2, 3], [{ a: 2 }], 2)).toStrictEqual([1, 2, { a: 2 }, 3])
  })

  it('insert([1,2,3], ["a"], 0) should return ["a", 1, 2, 3]', () => {
    expect(insert([1, 2, 3], ['a'], 0)).toStrictEqual(['a', 1, 2, 3])
  })

  it('insert([1,2,3], ["a"], 3) should return [1, 2, 3, "a"]', () => {
    expect(insert([1, 2, 3], ['a'], 3)).toStrictEqual([1, 2, 3, 'a'])
  })

  it('insert([1,2,3], ["a"], 3) should return [1, 2, 3, "a"]', () => {
    expect(insert([1, 2, 3], ['a'], 3)).toStrictEqual([1, 2, 3, 'a'])
  })

  it('insert([1,2,3], ["a"], -5) should return ["a", 1, 2, 3]', () => {
    expect(insert([1, 2, 3], ['a'], -5)).toStrictEqual(['a', 1, 2, 3])
  })

  it('insert([], ["a"], 0) should return ["a"]', () => {
    expect(insert([], ['a'], 0)).toStrictEqual(['a'])
  })

  it('insert([], [], null) should return []', () => {
    // @ts-expect-error
    expect(insert([], [], null)).toStrictEqual([])
  })

  it('insert(false, [], 0) should return false', () => {
    // @ts-expect-error
    expect(insert(false, [], 0)).toStrictEqual(false)
  })

  it('insert(null, [], 0) should return null', () => {
    // @ts-expect-error
    expect(insert(null, [], 0)).toStrictEqual(null)
  })

  it('insert(undefined, [], 0) should return undefined', () => {
    // @ts-expect-error
    expect(insert(undefined, [], 0)).toStrictEqual(undefined)
  })

  it('insert([], [], null) should return []', () => {
    // @ts-expect-error
    expect(insert([], [], null)).toStrictEqual([])
  })

  it.each([
    { tested: { data: undefined, path: null, index: 0 }, expected: undefined },
    { tested: { data: [], path: [], index: 0 }, expected: [] },
    { tested: { data: {}, path: [], index: -5 }, expected: {} },
    { tested: { data: {}, path: [], index: null }, expected: {} }
  ])(
    'insert($tested.data, $tested.path, $tested.index) should be $expected',
    ({ tested, expected }) => {
      const { data, path, index } = tested
      // @ts-expect-error
      expect(insert(data, path, index)).toStrictEqual(expected)
    }
  )
})
