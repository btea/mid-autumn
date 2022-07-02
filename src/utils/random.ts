export function getRandom(max: number, min: number, isInteger: boolean) {
  if (isInteger) {
    return Math.floor(Math.random() * (max - min) + min)
  }
  return Math.random() * (max - min) + min
}

export function getColor(max = 255, min = 0) {
  return `rgb(${getRandom(max, min, true)}, ${getRandom(max, min, true)}, ${getRandom(max, min, true)})`
}
