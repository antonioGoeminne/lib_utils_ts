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
})
