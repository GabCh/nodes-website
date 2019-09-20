import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { AnimatedBackground } from './AnimatedBackground'
// @ts-ignore
import P5Wrapper from 'react-p5-wrapper'

const aSketch = (): any => {}

describe('AnimatedBackground', () => {

  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<AnimatedBackground p5Sketch={aSketch}/>)
  })

  it('should render the P5Wrapper', () => {
    expect(wrapper.find(P5Wrapper)).toBeTruthy()
  })

  it('should pass the sketch prop to the P5Wrapper', () => {
    expect(wrapper.find(P5Wrapper).prop('sketch')).toEqual(aSketch)
  })
})
