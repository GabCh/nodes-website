import React from 'react'
import { mount, shallow } from 'enzyme'
import { Menu } from 'semantic-ui-react'
import { SideMenu } from './SideMenu'

describe('SideMenu', () => {

    describe('on initialization', () => {
        const wrapper = shallow(<SideMenu/>)

        it('should have home as default activeItem state', () => {
            expect(wrapper.state()).toEqual({ activeItem: 'home' })
        })

        it('should render a Menu', () => {
            expect(wrapper.find(Menu)).toHaveLength(1)
        })

        it('should render 3 Menu Items', () => {
            expect(wrapper.find(Menu).find(Menu.Item)).toHaveLength(3)
        })
    })

    describe('on Item click', () => {
        const wrapper = mount(<SideMenu/>)
        const item = wrapper.find(Menu).find(Menu.Item).last()
        const itemName = item.prop('name')

        beforeEach(() => {
            item.simulate('click', { name: itemName })
        })

        it('should set the active item state to the item name', () => {
            expect(wrapper.state()).toEqual({ activeItem: itemName })
        })
    })
})
