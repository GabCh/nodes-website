import React from 'react'
// @ts-ignore
import P5Wrapper from 'react-p5-wrapper'

interface AnimatedBackgroundProps {
  p5Sketch: any
}

export class AnimatedBackground extends React.Component<AnimatedBackgroundProps, any> {

  render = (): JSX.Element => <P5Wrapper sketch={this.props.p5Sketch}/>
}
