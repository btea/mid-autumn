import { calendar } from './calendar'

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
  // @ts-ignore
  const info: Record<string, string | number> = calendar.solar2lunar(date.getFullYear(), date.getMonth(), date.getDate())
  return (info.cYear + '').padStart(2, '0') + '-' + (info.cMonth + '').padStart(2, '0')
}
