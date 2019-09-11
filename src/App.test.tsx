import App from './App'
import * as React from 'react'
import {shallow} from 'enzyme'

it('renders', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('div')).toHaveLength(1)
})
