import React from 'react'
import { createEchophon } from '../sketches/ecophon'
// @ts-ignore
import P5Wrapper from 'react-p5-wrapper'

export class AnimatedBackground extends React.Component<any, any> {

  render = (): JSX.Element => <P5Wrapper sketch={createEchophon}/>
}
