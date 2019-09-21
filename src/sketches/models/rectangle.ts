export class Rectangle {
    private readonly x: number
    private readonly y: number

    private readonly vx: number
    private readonly vy: number

    private readonly offset: number

    private readonly theta: number

    private readonly l1: number
    private readonly l2: number

    private readonly p5: any
    private t: number

    constructor(p: any, t: number) {
        this.p5 = p
        this.t = t
        this.x = this.p5.width / 2
        this.y = this.p5.height / 2
        this.vx = this.p5.random(-this.p5.width / 2, this.p5.width / 2)
        this.vy = this.p5.random(-this.p5.height / 2, this.p5.height / 2)
        this.offset = this.p5.random(this.p5.TWO_PI)
        this.theta = this.p5.random(this.p5.TWO_PI)
        this.l1 = this.p5.random(200)
        this.l2 = this.p5.random(50)
    }

    public setT = (t: number): void => {
        this.t = t
    }

    public show = (): void => {
        this.p5.push()
        const q = this.p5.map(this.p5.cos(this.p5.TWO_PI * this.t + this.offset), -1, 1, 0, 1)
        const xx = this.p5.lerp(this.x, this.x + this.vx, q)
        const yy = this.p5.lerp(this.y, this.y + this.vy, q)
        this.p5.translate(xx, yy)
        this.p5.rotate(this.theta)
        this.p5.rect(-this.l1 / 2, -this.l2 / 2, this.l1, this.l2)
        this.p5.pop()
    }
}
