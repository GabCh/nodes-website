export class Sphere {
    private readonly num: number = 12
    private readonly radius: number = 200
    private readonly p5: any
    private osc: number
    private animated: boolean
    private coolingoff: boolean

    constructor(p: any) {
        this.osc = 0.04
        this.p5 = p
        this.animated = false
        this.coolingoff = false
        this.p5.mouseWheel = this.mouseWheel
    }

    public mouseWheel = (event: any): void => {
        this.osc = 0.04
        this.animated = true
    }

    public show = (): void => {
        this.p5.fill('#000000')
        this.p5.stroke('#000000')
        this.p5.ellipse((this.p5.width / 2), (this.p5.height / 2), this.radius * 2, this.radius * 2)

        if (this.animated) {
            this.animateSphere()
        }

        this.p5.translate(this.p5.width / 2, this.p5.height / 2) // (0,0) now at center of canvas

        for (let i = 0; i < this.num; i++) {

            const x: number = this.radius * this.p5.cos(this.osc)
            const y: number = this.radius * this.p5.sin(this.osc)
            const x2: number = this.radius * this.p5.cos(this.p5.TWO_PI * i / this.num)
            const y2: number = this.radius * this.p5.sin(this.p5.TWO_PI * i / this.num)

            this.p5.stroke('#e1f1ff')
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

    private animateSphere = (): void => {
        if (this.osc < 10 && !this.coolingoff) {
            this.osc *= 1.05
        } else {
            this.coolingoff = true
            this.osc = this.osc - (this.osc / 12)
            if (this.osc < 0.1) {
                this.osc = 0
                this.animated = false
                this.coolingoff = false
            }
        }
    }
}
