/* eslint-disable no-unused-vars */
// import the react library
import React from 'react';

// import Blueprint.js modules
import {

    H5,
    Alignment,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Switch,
    Spinner,
    Intent,
    H3,
    Colors,
    Toaster,
    Position,
    Menu,
    MenuItem,
    MenuDivider,
    Popover,
    ButtonGroup,
    Button

} from '@blueprintjs/core';

import NavIcons from '../icons/NavIcons';


const UserProfileMenu = (props) => {

    return (

        <Popover content={<MenuItems />} position={Position.BOTTOM_LEFT}>
            <NavIcons intent="success" iconname={props.iconname} />
        </Popover>

    );

};

const MenuItems = () => {
    return (
        <Menu>
            <MenuItem text="My Profile" icon="user" />
            <MenuItem text="Storage" icon="database" />
            <MenuItem text="Subscribers" icon="people" />
            <MenuDivider />
            <MenuItem text="Projects" icon="th" />
            <MenuItem text="Organization" icon="flow-review-branch" />
            <MenuDivider />
            <MenuItem text="Signout" icon="log-out" />
        </Menu>
    );
};

export default UserProfileMenu;