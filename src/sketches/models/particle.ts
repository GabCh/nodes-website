import {Mover} from './mover'
import {Attractor} from './attractor'

export class Particle extends Mover {

  constructor(p: any, width: number, height: number) {
    super(p, 2, p.random(width), p.random(height))
  }

  public move = (): void => {
    this.update()
  }

  public checkEdge = (attractor: Attractor): void => {
    if (this.isOutsideEdges(attractor)) {
      this.position.x = this.p5.random(50, this.p5.width)
      this.position.y = this.p5.random(50, this.p5.height)
    }
  }

  public display = (radius: number) => this.p5.ellipse(this.position.x, this.position.y, radius, radius)

  private isOutsideEdges = (attractor: Attractor): boolean =>
    this.position.x > this.p5.width ||
    this.position.y > this.p5.height ||
    this.position.x < 0 ||
    this.position.y < 0 ||
      (this.p5.abs(this.position.x - attractor.position.x) < 100 &&
          this.p5.abs(this.position.y - attractor.position.y) < 100)
}
