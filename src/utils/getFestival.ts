const festivalList: Record<string, string> = {
  '2022-01-01': 'YuanDan',
  '2022-01-31': 'ChuXi',
  '2022-02-01': 'ChunJie',
  '2022-03-05': 'JingZhe',
  '2022-06-03': 'DuanWu',
  '2022-09-10': 'MidAutumn',
  '2022-10-01': 'GuoQin',
  '2023-01-01': 'YuanDan',
  '2023-01-21': 'ChuXi',
  '2023-01-22': 'ChunJie',
  '2023-02-05': 'YuanXiao'
}
export function getFestival(): string {
  const date = getDateStr()
  return festivalList[date] || 'CustomDay'
}

function getDateStr() {
  const date = new Date()
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}
