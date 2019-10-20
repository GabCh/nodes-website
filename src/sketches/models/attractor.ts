import { Vector } from 'p5'
import { Mover } from './mover'

export class Attractor {

    public position: Vector
    protected readonly p5: any
    protected mass: number
    protected dragOffset: Vector
    protected dragging: boolean = false
    protected rollover: boolean = false

    private readonly G: number = 0.00005

    constructor(p: any, x: number, y: number) {
        this.p5 = p
        this.position = this.p5.createVector(x, y)
        this.dragOffset = p.createVector(0,  0)
        this.mass = 100
    }

    public attract = (m: Mover): Vector => {
        const force: Vector = Vector.sub(this.position, m.position)
        let d = force.mag()
        d = this.p5.constrain(d, 5.0, 25.0)
        force.normalize()
        const strength = (this.G * this.mass * m.mass)
        force.mult(strength)
        return force
    }

    public display = (): void => {
        this.p5.ellipseMode(this.p5.CENTER)
        this.p5.strokeWeight(4)
        this.p5.stroke(0)
        if (this.dragging) this.p5.fill(50)
        else if (this.rollover) this.p5.fill(100)
        else this.p5.fill(175, 200)
        this.p5.ellipse(this.position.x, this.position.y, this.mass * 2, this.mass * 2)
    }
}
