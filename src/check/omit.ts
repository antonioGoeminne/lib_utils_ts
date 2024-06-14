export const omit = (value: unknown, path: unknown[]): unknown => {
  const isCountable = value instanceof Object
  if (!isCountable) return value
  if (path.length === 0) return value

  const isArray = Array.isArray(value)

  if (isArray) {
    let updatedValue = value

    path.forEach((p) => {
      const newValue = updatedValue.filter((v) => v !== p)
      updatedValue = newValue
    })

    return updatedValue
  }

  let updatedValue = Object.entries(value)

  path.forEach((p) => {
    const newValue = updatedValue
      .filter(([v]) => v !== p)
      .map((v) => [v[0], v[1]]) as []

    updatedValue = newValue
  })
  return updatedValue
    .map((v) => ({ [v[0]]: v[1] }))
    .reduce((p, a) => ({ ...p, ...a }), {})
}
