import React from 'react'
import { Menu, MenuItemProps } from 'semantic-ui-react'
import './SideMenu.css'

interface SideMenuState {
  activeItem: string
}

export class SideMenu extends React.Component<any, SideMenuState> {
  constructor(props: any) {
    super(props)
    this.state = { activeItem: 'home' }
  }

  render = (): JSX.Element => (
    <Menu pointing secondary vertical className={'website-menu'} color={'grey'}>
      <Menu.Item
        name='home'
        active={this.state.activeItem === 'home'}
        onClick={this.handleItemClick}
      />
      <Menu.Item
        name='events'
        active={this.state.activeItem === 'events'}
        onClick={this.handleItemClick}
      />
      <Menu.Item
        name='follow us'
        active={this.state.activeItem === 'follow us'}
        onClick={this.handleItemClick}
      />
    </Menu>
  )

  private handleItemClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: MenuItemProps): void => {
    this.setState(() => ({ activeItem: data.name! }))
    e.preventDefault()
  }
}
