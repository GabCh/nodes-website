import { Vector } from 'p5'

export class Particle {

  private readonly SPEED: number = 0.4
  private readonly NOISE_SCALE: number = 800

  private readonly p5: any
  private x: number
  private y: number
  private direction: Vector
  private velocity: Vector
  private position: Vector

  constructor(p: any) {
    this.p5 = p
    this.x = p.random(0, p.width)
    this.y = p.random(0, p.height)
    this.direction = p.createVector(0, 0)
    this.velocity = p.createVector(0, 0)
    this.position = p.createVector(this.x, this.y)
  }

  public move = (): void => {
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

  public checkEdge = (): void => {
    if (this.isOutsideEdges()) {
      this.position.x = this.p5.random(50, this.p5.width)
      this.position.y = this.p5.random(50, this.p5.height)
    }
  }

  public display = (radius: number) => this.p5.ellipse(this.position.x, this.position.y, radius, radius)

  private isOutsideEdges = (): boolean =>
    this.position.x > this.p5.width ||
    this.position.y > this.p5.height ||
    this.position.x < 0 ||
    this.position.y < 0
}
