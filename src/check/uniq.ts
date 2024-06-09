export const uniq = (value: unknown): unknown => {
  const isCountable = value instanceof Object
  if (!isCountable) return value
  if (!Array.isArray(value)) return value

  const valueSet = new Set(value)

  const arrayUnique = Array.from(valueSet)

  return arrayUnique
}
