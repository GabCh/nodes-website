import { Particle } from './models/particle'
import { Sphere } from './models/sphere'

class Echophon {
    private readonly PARTICLES_NUMBER: number = 10

    private readonly p5: any
    private sphere: Sphere
    private particlesA: Particle[] = []
    private particlesB: Particle[] = []
    private particlesC: Particle[] = []
    private particlesD: Particle[] = []
    private particlesE: Particle[] = []
    private particlesF: Particle[] = []

    constructor(p: any) {
        this.p5 = p
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

        this.p5.background('#000000')
        for (let i = 0; i < this.PARTICLES_NUMBER; i++) {
            this.particlesA[i] = new Particle(this.p5)
            this.particlesB[i] = new Particle(this.p5)
            this.particlesC[i] = new Particle(this.p5)
            this.particlesD[i] = new Particle(this.p5)
            this.particlesE[i] = new Particle(this.p5)
            this.particlesF[i] = new Particle(this.p5)
        }
    }

    private draw = (): void => {
        this.displayBackground()
        this.sphere.show()
    }

    private displayBackground = (): void => {
        this.p5.noStroke()
        this.p5.smooth()

        for (let i = 0; i < this.PARTICLES_NUMBER; i++) {
            const radius = this.p5.map(i, 0, this.PARTICLES_NUMBER, 1, 2)

            this.p5.stroke('#db7d2f')
            this.particlesA[i].move()
            this.particlesA[i].display(radius)
            this.particlesA[i].checkEdge()

            this.p5.stroke('#f9d500')
            this.particlesB[i].move()
            this.particlesB[i].display(radius)
            this.particlesB[i].checkEdge()

            this.p5.stroke('#a10f0f')
            this.particlesC[i].move()
            this.particlesC[i].display(radius)
            this.particlesC[i].checkEdge()

            this.p5.stroke('#1a405a')
            this.particlesD[i].move()
            this.particlesD[i].display(radius)
            this.particlesD[i].checkEdge()

            this.p5.stroke('#eac05f')
            this.particlesE[i].move()
            this.particlesE[i].display(radius)
            this.particlesE[i].checkEdge()

            this.p5.stroke('#bcccce')
            this.particlesF[i].move()
            this.particlesF[i].display(radius)
            this.particlesF[i].checkEdge()
        }
    }
}

export const createEchophon = (p: any) => new Echophon(p).init()
