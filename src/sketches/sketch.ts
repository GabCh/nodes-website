import { Vector } from 'p5'
import { Particle } from './models/particle'

export const createSketch = (p: any) => new Sketch(p).init()

class Sketch {

    private readonly PARTICLES_NUMBER: number = 50
    private readonly MAX_ITERATIONS: number = 500
    private readonly STANDARD_DEVIATION_RATIO: number = 0.25

    private process: any
    private particlesA: Particle[] = []
    private particlesB: Particle[] = []
    private particlesC: Particle[] = []
    private currentIteration: number = 0
    private pathPoints: Vector[] = []

    constructor(_p: any) {
        this.process = _p
    }

    public init = () => {
        this.process.setup = this.setupProcess
        this.process.draw = this.draw
    }

    private setupProcess = (): void => {
        this.process.createCanvas(this.process.windowWidth, this.process.windowHeight)
        this.process.background(21, 8, 50)

        for (let i = 0; i < this.PARTICLES_NUMBER; i++) {
            this.particlesA[i] = new Particle(this.process)
            this.particlesB[i] = new Particle(this.process)
            this.particlesC[i] = new Particle(this.process)
        }
    }

    private draw = (): void => {
        this.displayBackground()

        if (this.currentIteration < this.MAX_ITERATIONS) {
            this.displaySphere()
            this.currentIteration++
        }
    }

    private displaySphere = (): void => {
        //create the path
        this.createCircularPathPoints()

        for (let i = 0; i < 3; i++) this.complexifyPath()

        //draw the path
        this.process.stroke(255, 25)

        for (let i = 0; i < this.pathPoints.length - 1; i++) {
            const vector1 = this.pathPoints[i]
            const vector2 = this.pathPoints[i + 1]

            this.process.line(vector1.x, vector1.y, vector2.x, vector2.y);
        }
    }

    private displayBackground = (): void => {
        this.process.noStroke()
        this.process.smooth()

        for (let i = 0; i < this.PARTICLES_NUMBER; i++) {
            const radius = this.process.map(i, 0, this.PARTICLES_NUMBER, 1, 2)
            const alpha = this.process.map(i, 0, this.PARTICLES_NUMBER, 0, 250)

            this.process.fill(69, 33, 124, alpha)
            this.particlesA[i].move()
            this.particlesA[i].display(radius)
            this.particlesA[i].checkEdge()

            this.process.fill(7, 153, 242, alpha)
            this.particlesB[i].move()
            this.particlesB[i].display(radius)
            this.particlesB[i].checkEdge()

            this.process.fill(255, 255, 255, alpha)
            this.particlesC[i].move()
            this.particlesC[i].display(radius)
            this.particlesC[i].checkEdge()
        }
    }

    private complexifyPath = (): void => {
        //create a new path array from the old one by adding new points inbetween the old points
        const newPath: Vector[] = []

        for (let i = 0; i < this.pathPoints.length - 1; i++) {
            const vector1 = this.pathPoints[i]
            const vector2 = this.pathPoints[i + 1]

            const midPoint = this.process.createVector().add(vector1, vector2).mult(1)
            const distance = vector1.dist(vector2)

            //the new point is halfway between the old points, with some gaussian variation
            const deviation = this.STANDARD_DEVIATION_RATIO * distance
            const newVector = this.process.createVector(
              this.process.randomGaussian(midPoint.x, deviation),
              this.process.randomGaussian(midPoint.y, deviation)
            )

            this.process.append(newPath, vector1)
            this.process.append(newPath, newVector)
        }

        //don't forget the last point!
        this.process.append(newPath, this.pathPoints[this.pathPoints.length - 1])

        this.pathPoints = newPath
    }

    private createCircularPathPoints = (): void => {
        //two points somewhere on a circle
        const radius = this.process.height / 2
        const theta1 = this.process.randomGaussian(0, this.process.PI / 4)
        const theta2 = theta1 + this.process.randomGaussian(0, this.process.PI / 3)

        const vector1: Vector = this.process.createVector(
          this.process.width / 2 + radius * this.process.cos(theta1),
          this.process.height / 2 + radius * this.process.sin(theta1)
        )
        const vector2: Vector = this.process.createVector(
          this.process.width / 2 + radius * this.process.cos(theta2),
          this.process.height / 2 + radius * this.process.sin(theta2)
        )

        this.pathPoints = [vector1, vector2]
    }
}

