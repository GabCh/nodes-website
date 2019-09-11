import { Vector } from 'p5'

export class Particle {

  private readonly SPEED: number = 0.4
  private readonly NOISE_SCALE: number = 800

  private readonly process: any
  private x: number
  private y: number
  private direction: Vector
  private velocity: Vector
  private position: Vector

  constructor(_p: any) {
    this.process = _p
    this.x = _p.random(0, _p.width)
    this.y = _p.random(0, _p.height)
    this.direction = _p.createVector(0, 0)
    this.velocity = _p.createVector(0, 0)
    this.position = _p.createVector(this.x, this.y)
  }

  public move = (): void => {
    const angle = this.process.noise(
      this.position.x / this.NOISE_SCALE,
      this.position.y / this.NOISE_SCALE
    ) * this.process.TWO_PI * this.NOISE_SCALE

    this.direction.x = this.process.cos(angle)
    this.direction.y = this.process.sin(angle)
    this.velocity = this.direction.copy()
    this.velocity.mult(this.SPEED)
    this.position.add(this.velocity)
  };

  public checkEdge = (): void => {
    if (this.isOutsideEdges()) {
      this.position.x = this.process.random(50, this.process.width)
      this.position.y = this.process.random(50, this.process.height)
    }
  }

  public display = (radius: number) => this.process.ellipse(this.position.x, this.position.y, radius, radius)

  private isOutsideEdges = (): boolean =>
    this.position.x > this.process.width ||
    this.position.y > this.process.height ||
    this.position.x < 0 ||
    this.position.y < 0
}
