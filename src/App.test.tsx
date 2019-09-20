import React from 'react'
import { App } from './App'
import { shallow } from 'enzyme'
import { AnimatedBackground } from './components/AnimatedBackground'
import { SideMenu } from './components/SideMenu'

describe('App', () => {

  const wrapper = shallow(<App/>)

  it('should render the animated background', () => {
    expect(wrapper.find(AnimatedBackground)).toHaveLength(1)
  })

  it('should render the side menu', () => {
    expect(wrapper.find(SideMenu)).toHaveLength(1)
  })
})
