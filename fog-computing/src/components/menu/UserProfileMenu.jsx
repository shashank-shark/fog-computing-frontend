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


const UserProfileMenu = () => {

    return (

        <Popover content={<MenuItems />} position={Position.BOTTOM_LEFT}>
            <NavIcons intent="success" iconname="user" />
        </Popover>

    );

};

const MenuItems = () => {
    return (
        <Menu>
            <MenuItem text="New" icon="document" />
            <MenuItem text="Open" icon="folder-shared" />
            <MenuItem text="Close" icon="add-to-folder" />
            <MenuDivider />
            <MenuItem text="Save" icon="floppy-disk" />
            <MenuItem text="Save as..." icon="floppy-disk" />
            <MenuDivider />
            <MenuItem text="Exit" icon="cross" />
        </Menu>
    );
};

export default UserProfileMenu;