import { Color } from './models/color'
import { ParticleGroup } from './models/particle-group'
import { Sphere } from './models/sphere'

class Echophon {
    private readonly PARTICLES_NUMBER: number = 10

    private readonly p5: any
    private sphere: Sphere
    private particlesA: ParticleGroup
    private particlesB: ParticleGroup
    private particlesC: ParticleGroup
    private particlesD: ParticleGroup
    private particlesE: ParticleGroup
    private particlesF: ParticleGroup

    constructor(p: any) {
        this.p5 = p
        this.sphere = new Sphere(p)
        this.particlesA = new ParticleGroup(p, this.PARTICLES_NUMBER)
        this.particlesB = new ParticleGroup(p, this.PARTICLES_NUMBER)
        this.particlesC = new ParticleGroup(p, this.PARTICLES_NUMBER)
        this.particlesD = new ParticleGroup(p, this.PARTICLES_NUMBER)
        this.particlesE = new ParticleGroup(p, this.PARTICLES_NUMBER)
        this.particlesF = new ParticleGroup(p, this.PARTICLES_NUMBER)
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
        this.p5.background(Color.BLACK)
    }

    private draw = (): void => {
        this.displayBackground()
        this.sphere.show()
    }

    private displayBackground = (): void => {
        this.p5.noStroke()
        this.p5.smooth()

        this.particlesA.animateParticlesWithColor(Color.ORANGE)
        this.particlesB.animateParticlesWithColor(Color.YELLOW)
        this.particlesC.animateParticlesWithColor(Color.DARK_RED)
        this.particlesD.animateParticlesWithColor(Color.DARK_BLUE)
        this.particlesE.animateParticlesWithColor(Color.LIGHT_YELLOW)
        this.particlesF.animateParticlesWithColor(Color.LIGHT_GRAY)
    }
}

export const createEchophon = (p: any) => new Echophon(p).init()
