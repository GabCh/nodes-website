import React from 'react'
import { shallow } from 'enzyme'
import {FollowUs} from './FollowUs'
import {FacebookFeed} from './FacebookFeed'

describe('FollowUs', () => {

    const wrapper = shallow(<FollowUs/>)

    it('should render the Facebook feed', () => {
        expect(wrapper.find(FacebookFeed)).toHaveLength(1)
    })
})
