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

const NotificationAndMessages = (props) => {
    
    return (
        <Popover content={<MenuItems />} position={Position.BOTTOM_LEFT}>
            <NavIcons intent="success" iconname={props.iconname} />
        </Popover>
    );

};

const MenuItems = () => {
    return (
        <Menu>
            <MenuItem text="Inbox" icon="envelope" />
            <MenuItem text="Chats" icon="chat" />
            <MenuItem text="Subscriber Feeds" icon="feed" />
        </Menu>
    );
}

export default NotificationAndMessages;