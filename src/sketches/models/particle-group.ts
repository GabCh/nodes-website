import { Color } from './color'
import { Particle } from './particle'

export class ParticleGroup {
  private p5: any
  private particles: Particle[] = []

  constructor(p: any, groupSize: number) {
    this.p5 = p
    for (let i = 0; i < groupSize; i++) this.particles.push(new Particle(p))
  }

  public animateParticlesWithColor = (color: Color) => {
    this.p5.stroke(color)
    this.particles.forEach((particle: Particle) => {
      const radius = this.p5.map(this.particles.indexOf(particle), 0, this.particles.length, 1, 2)
      this.animateParticle(particle, radius)
    })
  }

  private animateParticle = (particle: Particle, radius: any) => {
    particle.move()
    particle.display(radius)
    particle.checkEdge()
  }
}
