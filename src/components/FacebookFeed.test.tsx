import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { FacebookFeed, FacebookFeedState } from './FacebookFeed'

describe('FacebookFeed', () => {

  let wrapper: ShallowWrapper<any, FacebookFeedState>

  const getFbPageDiv = (): ShallowWrapper<any, FacebookFeedState> =>
    wrapper.findWhere((w: ShallowWrapper) => w.hasClass('fb-page'))

  it('should render the div', () => {
    wrapper = shallow(<FacebookFeed/>)
    expect(getFbPageDiv()).toHaveLength(1)
  })

  describe('when the state with is above 1500', () => {
    beforeEach(() => {
      wrapper = shallow(<FacebookFeed/>)
      wrapper.setState((prev: FacebookFeedState) => ({ ...prev, width: 1555 }))
    })

    it('should set the data-height property to 800', () => {
      expect(getFbPageDiv().getElement().props['data-height']).toEqual('800')
    })
  })

  describe('when the state with is below 1500', () => {
    beforeEach(() => {
      wrapper = shallow(<FacebookFeed/>)
      wrapper.setState((prev: FacebookFeedState) => ({ ...prev, width: 1000 }))
    })

    it('should set the data-height property empty', () => {
      expect(getFbPageDiv().getElement().props['data-height']).toEqual('')
    })
  })
})
