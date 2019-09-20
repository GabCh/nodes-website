import React from 'react'
import { shallow } from 'enzyme'
import { Menu } from 'semantic-ui-react'
import { SideMenu } from './SideMenu'

describe('SideMenu', () => {

    describe('on initialization', () => {
        it('should have home as default activeItem state', () => {
            const wrapper = shallow(<SideMenu/>)
            expect(wrapper.state()).toEqual({ activeItem: 'home' })
        })
    })

    it('should render a Menu', () => {
        const wrapper = shallow(<SideMenu/>)
        expect(wrapper.find(Menu)).toHaveLength(1)
    })

    it('should render 3 Menu Items', () => {
        const wrapper = shallow(<SideMenu/>)
        expect(wrapper.find(Menu).find(Menu.Item)).toHaveLength(3)
    })
})
