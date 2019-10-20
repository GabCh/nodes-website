import { Color } from './color'
import { Particle } from './particle'
import { Vector } from 'p5'
import {Attractor} from './attractor'

export class ParticleGroup {
  private p5: any
  private particles: Particle[] = []
  private attractor: Attractor

  constructor(p: any, groupSize: number, attractor: Attractor) {
    this.p5 = p
    for (let i = 0; i < groupSize; i++) this.particles.push(new Particle(p, p.windowWidth, p.windowHeight))
    this.attractor = attractor
  }

  public animateParticlesWithColor = (color: Color) => {
    this.p5.stroke(color)
    this.particles.forEach((particle: Particle) => {
      const radius = this.p5.map(this.particles.indexOf(particle), 0, this.particles.length, 1, 2)
      this.animateParticle(particle, radius)
    })
  }

  private animateParticle = (particle: Particle, radius: any) => {
    const force: Vector = this.attractor.attract(particle)
    particle.applyForce(force)
    particle.move()
    particle.display(radius)
    particle.checkEdge(this.attractor)
  }
}
