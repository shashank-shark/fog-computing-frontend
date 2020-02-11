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
    MenuItem,
    MenuDivider,
    Menu,
    Button,
    Popover

} from '@blueprintjs/core';

// import customized nav button
import NavIcons from '../icons/NavIcons';
import NavButton from '../buttons/NavButton';
import NavBarHeading from '../navbar/NavBarHeading';
import UserProfileMenu from '../menu/UserProfileMenu';

// code for FixedNavBar


export const AppToaster = Toaster.create({
    className: "recipe-toaster",
    position: Position.TOP
})

const FixedNavBar = () => {

    return (

        <div>
            <Navbar className={Classes.DARK} 
            fixedToTop
            >
                <NavbarGroup align={Alignment.LEFT}>
                    <NavBarHeading headingName="Fog Computing System" />
                </NavbarGroup>

                <NavbarGroup align={Alignment.RIGHT}>

                    <NavButton intent="primary" name="Home" 
                    iconname="home" 
                    onClick={handleHomePageNavigation} 
                    />
                    <NavButton intent="primary" name="Services" 
                    iconname="cloud" 
                    onClick={handleServicesPageNavigation} 
                    />
                    <NavButton intent="primary" name="Analytics" 
                    iconname="predictive-analysis" 
                    onClick={handleAnalyticsPageNavigation} 
                    />

                    <NavbarDivider  />

                    <UserProfileMenu />
                    <NavIcons intent="success" iconname="cog" />
                    <NavIcons intent="success" iconname="notifications" />

                </NavbarGroup>
                
            </Navbar>
        </div>
      
    );
}


const handleHomePageNavigation = () => {
    AppToaster.show({
        message: "Home page will be implemented soon",
        intent: Intent.PRIMARY
    });
}

const handleServicesPageNavigation = () => {
    AppToaster.show({
        message: "Services page will be implemented soon",
        intent: Intent.PRIMARY
    });
}

const handleAnalyticsPageNavigation = () => {
    AppToaster.show({
        message: "Analytics page will be implemented soon",
        intent: Intent.PRIMARY
    });
}


export default FixedNavBar;
