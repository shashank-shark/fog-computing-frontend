/* eslint-disable no-unused-expressions */
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

const UserSettingsMenu = (props) => {
   
    return (
        <Popover content={<MenuItems />} position={Position.BOTTOM_LEFT}>
            <NavIcons intent="success" iconname={props.iconname} />
        </Popover>
    );

};

const MenuItems = () => {
    return (
        <Menu>
            <MenuItem text="Network Settings" icon="globe-network" />
            <MenuItem text="Update Settings" icon="automatic-updates" />
            <MenuDivider />
            <MenuItem text="Export Settings" icon="send-to" />
        </Menu>
    );
}

export default UserSettingsMenu;