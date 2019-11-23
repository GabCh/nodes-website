import {ColorHex, Colors} from './color'
import {ColorBlender} from '../lib/color-blender'

export class Mountains {

    private readonly p5: any
    private f: number = 0
    private colorSet: ColorHex[] = Colors

    constructor(p: any) {
        this.p5 = p
    }

    public setup = (): void => {
        const colorBlender = new ColorBlender('#DB7D2F', '#741F28', 'hex', 26)
        const paletteObj = colorBlender.getPalette()
        this.colorSet = paletteObj.map((col) => new ColorHex(col.text))
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
            const idx = (this.colorSet.length - 1) - parseInt((iterations % 25).toString(), 10)
            this.p5.stroke(this.colorSet[idx].val)
            this.p5.beginShape()
            for (let x = (startX - iterationRatio); x < (endX + iterationRatio); ++x) {
                let noiseIntensity: number = 30
                if (this.p5.windowWidth < 500) {
                    noiseIntensity = 50
                }
                this.p5.vertex(x,
                    y - noiseIntensity / (1 + this.p5.pow(x - (this.p5.windowWidth / 2), 4) / 8e6) *
                    this.p5.noise(x / 20 + this.f / 50 + y) * (iterationRatio / 100))
            }
            iterationRatio *= 1.18
            this.p5.endShape()
            y += spacingRatio
            spacingRatio *= 1.1
            iterations++
        }
    }
}
