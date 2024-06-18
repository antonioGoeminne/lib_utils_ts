import { isArray } from '../check'

export const insert = (
  value: unknown[],
  path: unknown[],
  index: number
): unknown[] => {
  if (!isArray(value)) return value

  const isGreaterThanValue = index > value.length - 1
  const isLowerThanValue = index < 0

  if (isLowerThanValue) return [...path, ...value]
  if (isGreaterThanValue) return [...value, ...path]

  const updatedValue = value.flatMap((v, i) => {
    if (i !== index) return v

    return [...path.map((p) => p), v]
  })

  return updatedValue
}
