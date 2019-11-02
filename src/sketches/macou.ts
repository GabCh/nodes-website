import { Color } from './models/color'
import { DottedSphere } from './models/dotted-sphere'
import {Mountains} from './models/mountains'

class Macou {

    private readonly p5: any
    private sphere: DottedSphere
    private background: Mountains

    constructor(p: any) {
        this.p5 = p
        this.sphere = new DottedSphere(p)
        this.background = new Mountains(p)
    }

    public init = () => {
        this.p5.setup = this.setup
        this.p5.draw = this.draw
    }

    private setup = (): void => {
        this.p5.createCanvas(this.p5.windowWidth, this.p5.windowHeight)
        this.p5.background(Color.BLACK)
        this.sphere.init()
    }

    private draw = (): void => {
        this.background.draw()
        this.sphere.show()
    }
}

export const createMacou = (p: any): void => new Macou(p).init()
