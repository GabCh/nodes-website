import React from 'react'
import App from './App'
import { shallow, ShallowWrapper } from 'enzyme'
// @ts-ignore
import P5Wrapper from 'react-p5-wrapper'
import SideMenu from './components/SideMenu'

describe('App', () => {

  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<App/>)
  })

  it('should render the p5 wrapper', () => {
    expect(wrapper.find(P5Wrapper)).toBeTruthy()
  })

  it('should render the side menu', () => {
    expect(wrapper.find(SideMenu)).toBeTruthy()
  })
})
