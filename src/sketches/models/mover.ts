import { Vector } from 'p5'

export class Mover {

    public mass: number
    public position: Vector
    protected velocity: Vector
    protected acceleration: Vector
    protected readonly p5: any

    constructor(p: any, m: number, x: number, y: number) {
        this.p5 = p
        this.mass = m
        this.position = this.p5.createVector(x, y)
        this.velocity = this.p5.createVector(1, 0)
        this.acceleration = this.p5.createVector(0, 0)
    }

    public applyForce = (force: Vector): void => {
        const f: Vector = Vector.div(force, this.mass)
        this.acceleration.add(f)
    }

    public update = (): void => {
        this.velocity.add(this.acceleration)
        this.position.add(this.velocity)
        this.acceleration.mult(0)
    }
}
