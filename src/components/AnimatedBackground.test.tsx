import React from 'react'
import { shallow } from 'enzyme'
import { AnimatedBackground } from './AnimatedBackground'
// @ts-ignore
import P5Wrapper from 'react-p5-wrapper'

describe('AnimatedBackground', () => {

  const wrapper = shallow(<AnimatedBackground/>)

  it('should render the P5Wrapper', () => {
    expect(wrapper.find(P5Wrapper)).toBeTruthy()
  })

  it('should pass a sketch prop to the P5Wrapper', () => {
    expect(wrapper.find(P5Wrapper).prop('sketch')).toBeTruthy()
  })
})
