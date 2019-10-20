import { Vector } from 'p5'
import {Mover} from './mover'
import {Attractor} from './attractor'

export class Particle extends Mover {
  private readonly SPEED: number = 0.4
  private readonly NOISE_SCALE: number = 800
  private affectedByGravity: boolean
  private direction: Vector
  private iterations: number

  constructor(p: any, width: number, height: number) {
    super(p, 1, p.random(width), p.random(height))
    this.affectedByGravity = false
    this.direction = p.createVector(0, 0)
    this.iterations = 0
  }

  public move = (force: Vector): void => {
    if (this.affectedByGravity) {
      this.applyForce(force)
      this.update()
    } else {
      this.noisyMove()
    }
  }

  public checkEdge = (attractor: Attractor): void => {
    if (this.isOutsideEdges(attractor)) {
      this.position.x = this.p5.random(50, this.p5.width)
      this.position.y = this.p5.random(50, this.p5.height)
    }
  }

  public display = (radius: number) => {
    if (!this.affectedByGravity && this.iterations > 1000) {
      this.affectedByGravity = true
      this.iterations++
    } else if (this.affectedByGravity && this.iterations > 2000) {
      this.iterations = 0
      this.affectedByGravity = false
    } else {
      this.iterations++
    }
    this.p5.ellipse(this.position.x, this.position.y, radius, radius)
  }

  private noisyMove = (): void => {
    const angle = this.p5.noise(
        this.position.x / this.NOISE_SCALE,
        this.position.y / this.NOISE_SCALE
    ) * this.p5.TWO_PI * this.NOISE_SCALE

    this.direction.x = this.p5.cos(angle)
    this.direction.y = this.p5.sin(angle)
    this.velocity = this.direction.copy()
    this.velocity.mult(this.SPEED)
    this.position.add(this.velocity)
  }

  private isOutsideEdges = (attractor: Attractor): boolean =>
    this.position.x > this.p5.width ||
    this.position.y > this.p5.height ||
    this.position.x < 0 ||
    this.position.y < 0 ||
      (this.p5.abs(this.position.x - attractor.position.x) < 100 &&
          this.p5.abs(this.position.y - attractor.position.y) < 100)
}
