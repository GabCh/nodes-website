import React from 'react'
import { shallow } from 'enzyme'
import { FacebookFeed } from './FacebookFeed'

describe('Facebook', () => {

  const wrapper = shallow(<FacebookFeed/>)

  it('should render the div', () => {
    expect(wrapper.find(<div/>)).toBeTruthy()
    expect(wrapper.hasClass('fb-page')).toBeTruthy()
  })
})
