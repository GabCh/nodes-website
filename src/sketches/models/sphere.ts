export class Sphere {
    private readonly num: number = 12
    private readonly radius: number = 200
    private readonly p5: any
    private osc: number
    private animated: boolean

    constructor(p: any) {
        this.osc = 0.004
        this.p5 = p
        this.animated = false
        this.p5.mouseWheel = this.mouseWheel
    }

    public mouseWheel = (event: any): void => {
        this.animated = true
    }

    public show = (): void => {
        this.p5.smooth(8)
        this.p5.noStroke()
        this.p5.fill(0, 175)
        this.p5.rect(0, 0, this.p5.width, this.p5.height)

        if (this.animated) {
            if (this.osc < 1) {
                this.osc *= 1.1
            } else {
                this.osc *= 0.1
                this.animated = false
            }
        }

        this.p5.translate(this.p5.width / 2, this.p5.height / 2) // (0,0) now at center of canvas

        for (let i = 0; i < this.num; i++) {

            const x: number = this.radius * this.p5.cos(this.osc)
            const y: number = this.radius * this.p5.sin(this.osc)
            const x2: number = this.radius * this.p5.cos(this.p5.TWO_PI * i / this.num)
            const y2: number = this.radius * this.p5.sin(this.p5.TWO_PI * i / this.num)

            this.p5.stroke('#5B4778')
            this.p5.strokeWeight(.5)
            this.p5.strokeCap(this.p5.ROUND)

            this.p5.line(x, y, x2, y2)
            this.p5.line(-x, -y, x2, y2)

            this.p5.push()
            this.p5.rotate(this.p5.HALF_PI)
            this.p5.line(x, y, x2, y2)
            this.p5.line(-x, -y, x2, y2)
            this.p5.pop()
        }
    }
}
