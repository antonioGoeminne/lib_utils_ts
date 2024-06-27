import { describe, expect, it } from 'vitest'

import { omit } from '..'

describe('omit to arrays', () => {
  it('omit([1, 2, 3, 4], [3]) should return [1, 2, 4]', () => {
    expect(omit([1, 2, 3, 4], [3])).toStrictEqual([1, 2, 4])
  })

  it('omit([1, 2, 3], [1, 2]) should return [3]', () => {
    expect(omit([1, 2, 3], [1, 2])).toStrictEqual([3])
  })

  it('omit([1,2,3], []) should return [1,2,3])', () => {
    expect(omit([1, 2, 3], [])).toStrictEqual([1, 2, 3])
  })

  it('omit([1,2,3], []) should return [1,2,3])', () => {
    expect(omit([1, 2, 3], [1, 2, 3])).toStrictEqual([])
  })

  it('omit([false, true], [true]) should return [false]', () => {
    expect(omit([false, true], [true])).toStrictEqual([false])
  })

  it('omit([false, true], [false]) should return [true]', () => {
    expect(omit([false, true], [false])).toStrictEqual([true])
  })

  it('omit([], ["a"]) should return []', () => {
    expect(omit([], ['a'])).toStrictEqual([])
  })

  it('omit([false, true, "a", null], [null]) should return [false, true, "a"]', () => {
    expect(omit([false, true, 'a', null], [null])).toStrictEqual([
      false,
      true,
      'a'
    ])
  })

  it('omit([], []) should return []', () => {
    expect(omit([], [])).toStrictEqual([])
  })
})

describe('omit to objects', () => {
  it('omit({ a: "", b: "" }, [b]) should return { a: "" }', () => {
    expect(omit({ a: '', b: '' }, ['b'])).toStrictEqual({ a: '' })
  })

  it('omit({ a: "", b: "", c: "" }, ["b", "c"]) should return { a: "" }', () => {
    expect(omit({ a: '', b: '', c: '' }, ['b', 'c'])).toStrictEqual({ a: '' })
  })

  it('omit({ a: "", b: "", c: "" }, ["a", "b", "c"]) should return { }', () => {
    expect(omit({ a: '', b: '', c: '' }, ['b', 'c', 'a'])).toStrictEqual({})
  })

  it('omit({}, ["a"]) should return {}', () => {
    expect(omit({}, ['a'])).toStrictEqual({})
  })

  it('omit({ ...product }, ["name"]) should return product without name', () => {
    expect(
      omit(
        {
          objectID: 'VLimDLycClt4CJ1bEbK4',
          name: 'producto 1'
        },
        ['name']
      )
    ).toStrictEqual({
      objectID: 'VLimDLycClt4CJ1bEbK4'
    })
  })

  it('omit({}, []) should return {}', () => {
    expect(omit({}, [])).toStrictEqual({})
  })

  it('omit({}, [2]) should return {}', () => {
    expect(omit({}, [2])).toStrictEqual({})
  })

  it('omit({a: 2, b:[]}, ["a"]) should return {b: []}', () => {
    expect(omit({ a: 2, b: [] }, ['a'])).toStrictEqual({ b: [] })
  })

  it('omit({a: 2, b:[]}, ["b"]) should return {a: 2}', () => {
    expect(omit({ a: 2, b: [] }, ['b'])).toStrictEqual({ a: 2 })
  })

  it('omit(undefined, [1]) should return undefined', () => {
    expect(omit(undefined, [1])).toStrictEqual(undefined)
  })
})

describe('omit to different types', () => {
  it('omit("false", ["false"]) should return "false"', () => {
    expect(omit('false', ['false'])).toStrictEqual('false')
  })

  it.each([
    { tested: { data: false, path: [''] }, expected: false },
    { tested: { data: true, path: [''] }, expected: true },
    { tested: { data: 'string', path: [''] }, expected: 'string' },
    { tested: { data: null, path: [''] }, expected: null },
    { tested: { data: null, path: [] }, expected: null },
    { tested: { data: undefined, path: [] }, expected: undefined }
  ])(
    'omit($tested.data, $tested.path) should be $expected',
    ({ tested, expected }) => {
      expect(omit(tested.data, tested.path)).toBe(expected)
    }
  )
})
