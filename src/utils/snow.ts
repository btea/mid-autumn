import { randomNum } from '@btea/utils';

interface SnowOpt {
    total: number;
    rmin: number;
    rmax: number;
    xs: number[];
    ys: number[];
}

interface Snows {
    r: number;
    opacity: number;
    x: number;
    isLeft: number;
    y: number;
    xs: number;
    ys: number;
}

export class Snow {
    el: HTMLElement;
    canvas: HTMLCanvasElement;
    total: number = 100;
    rmin: number = 1;
    rmax: number = 6;
    width: number;
    height: number;
    snows: Snows[];
    ctx: CanvasRenderingContext2D;
    xs: number[] = [1, 0];
    ys: number[] = [1, 0];
    ani: () => void;
    constructor(el: string, opt?: Partial<SnowOpt>) {
        const _el = document.querySelector<HTMLElement>(el);
        if (!_el) {
            console.log(`%c${el} 不是一个有效的元素选择器`, 'color: red; font-size: 24px;');
            return;
        }
        if (opt) {
            Object.keys(opt).forEach((k) => {
                this[k] = opt[k];
            });
        }
        this.el = _el;
        this.createCanvas();
        this.createSnows();
        this.ani = () => {
            this.startSnow();
            window.requestAnimationFrame(this.ani);
        };
        window.requestAnimationFrame(this.ani);
    }
    createCanvas() {
        const { width, height } = this.getStyle(this.el) as CSSStyleDeclaration;
        const canvas = document.createElement('canvas');
        const ratio = window.devicePixelRatio;
        canvas.style.width = width;
        canvas.style.height = height;
        canvas.width = ratio * parseInt(width);
        canvas.height = ratio * parseInt(height);
        const style = {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
        };
        Object.assign(canvas.style, style);
        this.el.appendChild(canvas);
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.width = parseInt(width);
        this.height = parseInt(height);
    }
    createSnows() {
        const snows: Snows[] = [];
        Array.from('0'.repeat(this.total), () => {
            const obj = this.createSingleSnow();
            snows.push(obj);
        });
        this.snows = snows;
    }
    startSnow() {
        this.clear();
        this.snows.forEach((snow) => {
            this.ctx.beginPath();
            this.ctx.arc(snow.x, snow.y, snow.r, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(255, 255, 255, .6)';
            this.ctx.fill();
            if (snow.y > this.height + snow.r || snow.x < -snow.r || snow.x > this.width + snow.r) {
                Object.assign(snow, this.createSingleSnow());
            }
            snow.x += snow.xs * snow.isLeft;
            snow.y += snow.ys;
        });
    }
    createSingleSnow(): Snows {
        const xs = this.xs;
        const ys = this.ys;
        return {
            r: randomNum(this.rmax, this.rmin, true),
            opacity: randomNum(1, 0),
            x: randomNum(this.width, 0),
            xs: randomNum(xs[0], xs[1]),
            isLeft: randomNum(1, 0) > 0.5 ? 1 : -1,
            y: 0,
            ys: randomNum(ys[0], ys[1])
        };
    }
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
    getStyle(el: HTMLElement, attr?: string): CSSStyleDeclaration | number | string | undefined {
        const style = window.getComputedStyle(el);
        if (attr) {
            return style[attr];
        }
        return style;
    }
}
