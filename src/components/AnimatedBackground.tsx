import React from 'react'
import { createMacou } from '../sketches/macou'
// @ts-ignore
import P5Wrapper from 'react-p5-wrapper'

export class AnimatedBackground extends React.Component<any, any> {

  render = (): JSX.Element => <P5Wrapper sketch={createMacou}/>
}
