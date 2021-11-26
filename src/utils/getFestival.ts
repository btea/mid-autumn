export function getFestival(): String {
    const date = getDateStr();
    if (date === '08-15') {
        return 'MidAutumn';
    }
    if (date === '01-01') {
        return 'NewYear';
    }
    return 'CustomDay';
}

function getDateStr(): String {
    const date = new Date();
    return (date.getMonth() + 1 + '').padStart(2, '0') + '-' + (date.getDate() + '').padStart(2, '0');
}
