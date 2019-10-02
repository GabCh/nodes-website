export class DottedSphere {
    private readonly nbPoints: number = 200
    private readonly diameter: number = 400
    private readonly radius: number = this.diameter / 2
    private readonly period: number = 100
    private readonly p5: any
    private r: number
    private x: number
    private y: number
    private amplitude: number
    private sineEl: number
    private randomPart: number[]
    private partSize: number[]

    constructor(p: any) {
        this.p5 = p
        this.r = 0
        this.x = 0
        this.y = 0
        this.amplitude = 0
        this.sineEl = 0
        this.randomPart = []
        this.partSize = []
    }

    public init = (): void => {
        for (let i = 0; i < this.nbPoints; i++) {
            this.randomPart[i] = this.p5.int(this.p5.random(200, 1000))
            this.partSize[i] = this.p5.int(this.p5.random(2, 11))
        }
    }

    public show = (): void => {
        this.p5.fill('#000000')
        this.p5.stroke('#000000')
        this.p5.ellipse((this.p5.width / 2), (this.p5.height / 2), this.radius * 2, this.radius * 2)
        this.x += 0.1
        for (let i = 0; i < this.nbPoints; i++) {
            this.y = this.randomPart[i]

            const sine = this.p5.sin((2 * this.p5.PI * this.x) / this.period + this.randomPart[i])
            this.amplitude = this.p5.sqrt(this.p5.sq(this.radius) -
                this.p5.sq(this.p5.abs(this.p5.height / 2 - this.y)))
            this.sineEl = this.p5.width / 2 + sine * this.amplitude

            const particleSize = this.partSize[i]

            this.p5.push()
            this.p5.translate(this.p5.width / 2, this.p5.height / 2)
            this.r += 0.005
            this.p5.rotate(this.p5.radians(this.r))
            this.p5.translate(-this.p5.width / 2, -this.p5.height / 2)

            this.p5.stroke(255)
            this.p5.noStroke()
            this.p5.fill(255)
            this.p5.ellipse(this.sineEl, this.y, particleSize, particleSize)
            this.p5.pop()
        }
        this.p5.noFill()
        this.p5.stroke(255)
    }
}
