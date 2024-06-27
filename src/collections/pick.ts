export const pick = (value: unknown, path: unknown[]): unknown => {
  const isCountable = value instanceof Object
  if (!isCountable) return value
  if (path.length === 0) return value

  const isArray = Array.isArray(value)
  const updatedValue: unknown[] = []

  if (isArray) {
    path.forEach((p) => {
      const filteredValue = value.find((v) => v === p)
      if (filteredValue == null) return

      updatedValue.push(filteredValue)
    })
    return updatedValue
  }

  path.forEach((p) => {
    const filteredValue = Object.entries(value).find(([k]) => k === p)
    if (filteredValue == null) return
    updatedValue.push({ [filteredValue[0]]: filteredValue[1] })
  })

  const result = Object.assign({}, ...updatedValue)

  return result
}
