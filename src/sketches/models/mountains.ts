import {Color} from './color'

export class Mountains {

    private readonly p5: any
    private f: number = 0
    private colorSet: Color[] = [
        Color.YELLOW,
        Color.LIGHT_GRAY,
        Color.ORANGE,
        Color.DARK_BLUE,
        Color.LIGHT_YELLOW,
        Color.DARK_RED
    ]

    constructor(p: any) {
        this.p5 = p
    }

    public draw = (): void => {
        this.f++
        this.p5.background(0)
        this.p5.fill(0)
        this.p5.stroke(3 * this.p5.windowWidth / 4)
        const startY = this.p5.windowHeight / 12
        const endY = this.p5.windowHeight
        const startX = 5 * this.p5.windowWidth / 12
        const endX = 7 * this.p5.windowWidth / 12
        let iterations = 0
        let iterationRatio = 10
        let y = startY
        let spacingRatio = 10
        while (y < endY) {
            this.p5.stroke(this.colorSet[parseInt((iterations % 6).toString(), 10)])
            this.p5.beginShape()
            for (let x = (startX - iterationRatio); x < (endX + iterationRatio); ++x)
                this.p5.vertex(x,
                    y - (startY / 4) / (1 + this.p5.pow(x - endY, 4) / 8e6) *
                    this.p5.noise(x / 20 + this.f / 50 + y) * (iterationRatio / 100))
            iterationRatio *= 1.18
            this.p5.endShape()
            y += spacingRatio
            spacingRatio *= 1.1
            iterations++
        }
    }
}
