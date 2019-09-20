import React from 'react'
import { App } from './App'
import { shallow } from 'enzyme'
import { AnimatedBackground } from './components/AnimatedBackground'
import { SideMenu } from './components/SideMenu'

describe('App', () => {

  it('should render the animated background', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find(AnimatedBackground)).toHaveLength(1)
  })

  it('should render the side menu', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find(SideMenu)).toHaveLength(1)
  })
})
