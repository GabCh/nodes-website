import { Rectangle } from './models/rectangle'
import { Sphere } from './models/sphere'

class Echophon {
    private readonly N: number = 100

    private readonly p5: any
    private t: number
    private c: number
    private array: Rectangle[]
    private sphere: Sphere

    constructor(p: any) {
        this.p5 = p
        this.t = 0
        this.c = 0
        this.array = []
        this.sphere = new Sphere(p)
    }

    public init = () => {
        this.p5.setup = this.setup
        this.p5.draw = this.draw
    }

    private push = (): void => {
        this.p5.push()
    }

    private pop = (): void => {
        this.p5.pop()
    }

    private setup = (): void => {
        this.p5.createCanvas(this.p5.windowWidth, this.p5.windowHeight)

        this.p5.noiseSeed(1)

        for (let i = 0; i < this.N; i++) {
            this.array[i] = new Rectangle(this.p5, this.t, this.push, this.pop)
        }
        this.p5.strokeWeight(3)
    }

    private draw = (): void => {
        this.t = this.p5.mouseX * 0.1 / this.p5.width
        this.c = this.p5.mouseY * 0.1 / this.p5.height
        this.drawRect()
        this.sphere.show()
    }

    private drawRect = (): void => {
        this.p5.background(30)

        this.p5.stroke(220)
        this.p5.noFill()
        for (let i = 0; i < this.N; i++) {
            this.array[i].show()
        }
        this.p5.rect(50, 50, this.p5.width - 100, this.p5.height - 100)

        this.p5.noStroke()
        this.p5.fill(30)
        for (let i = 0; i < this.N; i++) {
            this.array[i].setT(this.t)
            this.array[i].show()
        }
        this.p5.rect(0, 0, this.p5.width, 50)
        this.p5.rect(0, this.p5.height - 50, this.p5.width, 50)
        this.p5.rect(0, 0, 50, this.p5.height)
        this.p5.rect(this.p5.width - 50, 0, 50, this.p5.height)
    }
}

export const createEchophon = (p: any) => new Echophon(p).init()
