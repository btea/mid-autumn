import { randomNum } from '@btea/utils';

interface FireOpt {
    width: number;
    height: number;
    total: number;
    el: HTMLElement;
}

interface DotOpt {
    r: number;
    s: number;
    x: number;
    y: number;
}

export class Fire {
    width: number = 100;
    height: number = 200;
    total: number = 50;
    dots: DotOpt[] = [];
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    el: HTMLElement;
    ratio: number;
    constructor(opt: FireOpt) {
        Object.assign(this, opt);
        this.createCanvas();
        this.createDots();
        // this.drawRect();
        // this.drawCircle();
        this.drawTriangle();
        this.drawEllipse();
        // this.startAni();
    }
    createCanvas() {
        const { width, height } = this;
        const canvas = document.createElement('canvas');
        const ratio = window.devicePixelRatio;
        canvas.style.width = width + '';
        canvas.style.height = height + '';
        canvas.width = ratio * width;
        canvas.height = ratio * height;
        this.el.appendChild(canvas);
        const style = {
            width: width + 'px',
            height: height + 'px'
        };
        this.ratio = ratio;
        this.canvas = canvas;
        Object.assign(canvas.style, style);
        this.ctx = this.canvas.getContext('2d');
    }
    createDots() {
        const { width, height, total } = this;
        for (let i = 0; i < total; i++) {
            const dot: DotOpt = {
                r: randomNum(14, 6, true),
                s: randomNum(1, 0),
                x: randomNum(width, 0),
                y: height
            };
            this.dots.push(dot);
        }
    }
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
    drawEllipse() {
        const { ctx, height, width, ratio: r } = this;
        ctx.save();
        ctx.globalCompositeOperation = 'saturation';
        ctx.fillStyle = '#000';
        ctx.ellipse((width / 2) * r, (height / 2) * r, (width / 2) * r, (height / 2) * r, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
    drawRect() {
        const { ctx, height, width, ratio: r } = this;
        ctx.save();
        ctx.filter = 'blur(20px) contrast(30)';
        ctx.fillStyle = '#fff';
        ctx.rect(0, 0, width * r, height * r);
        ctx.fill();
        ctx.restore();
    }
    drawTriangle() {
        const { ctx, height, width, ratio: r } = this;
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = '#b5932f';
        ctx.moveTo(0, height * r);
        ctx.lineTo((width / 2) * r, (height / 2) * r);
        ctx.lineTo(width * r, height * r);
        // ctx.filter = 'blur(20px) contrast(30)';
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
    drawCircle() {
        const { ctx, height } = this;
        this.dots.forEach(dot => {
            const { x, y, r, s } = dot;
            ctx.save();
            ctx.fillStyle = '#6cf';
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            dot.y -= s;
            if (dot.y < 0) {
                dot.y = height;
            }
        });
        ctx.restore();
    }

    startAni() {
        // this.drawRect();
        this.drawCircle();
        this.drawTriangle();
        requestAnimationFrame(() => {
            this.startAni();
            this.clear();
        });
    }
}
