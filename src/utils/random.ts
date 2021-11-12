export function getRandom(max: number, min: number, isInteger: boolean): number {
    if (isInteger) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    return Math.floor(Math.random() * (max - min) + min);
}

export function getColor(max: number = 255, min: number = 0): string {
    return `rgb(${getRandom(max, min, true)}, ${getRandom(max, min, true)}, ${getRandom(max, min, true)})`;
}
