export const uniq = (value: unknown): unknown => {
  if (!Array.isArray(value)) return value

  const valueSet = new Set(value)

  const arrayUnique = Array.from(valueSet)

  return arrayUnique
}
