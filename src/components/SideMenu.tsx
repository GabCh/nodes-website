import React from 'react';
import {Menu, MenuItemProps} from 'semantic-ui-react'
import './SideMenu.css';

class SideMenu extends React.Component<ISideMenuProps, ISideMenuState> {
    public state: ISideMenuState;

    constructor(props: ISideMenuProps) {
        super(props);
        this.state = {activeItem: 'home'}
    }

    handleItemClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: MenuItemProps): void => {
        this.setState({ activeItem: data.name! });
        e.preventDefault();
    };

    render() {
        const { activeItem } = this.state;
        return (
            <Menu pointing secondary vertical className={'website-menu'} color={'grey'}>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='events'
                    active={activeItem === 'events'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='follow us'
                    active={activeItem === 'follow us'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        );
    }
}

export default SideMenu;
