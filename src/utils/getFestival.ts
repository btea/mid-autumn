const festivalList: Record<string, string> = {
  '01-01': 'NewYear',
  '03-05': 'JingZhe',
  '05-05': 'DuanWu',
  '08-15': 'MidAutumn'
}
export function getFestival(): string {
  const date = getDateStr()
  return festivalList[date] || 'CustomDay'
}

function getDateStr() {
  const date = new Date()
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}
