import * as lunisolar from 'lunisolar'

const festivalList: Record<string, string> = {
  '01-31': 'ChuXi',
  '01-01': 'ChunJie',
  '01-15': 'YuanXiao',
  '2022-03-05': 'JingZhe',
  '2022-06-03': 'DuanWu',
  '08-15': 'MidAutumn'
}
export function getFestival(): string {
  const date = getDateStr()
  const lunar = lunisolar.default(date).lunar
  const lunarDate = `${String(lunar.month).padStart(2, '0')}-${String(lunar.day).padStart(2, '0')}`
  return festivalList[date] || festivalList[lunarDate] || 'CustomDay'
}

function getDateStr() {
  const date = new Date()
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}
