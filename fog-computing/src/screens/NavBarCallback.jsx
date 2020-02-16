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
import NavIcons from '../components/icons/NavIcons';
import NavButton from '../components/buttons/NavButton';
import NavBarHeading from '../components/navbar/NavBarHeading';

import UserProfileMenu from '../components/menu/UserProfileMenu';
import UserSettingsMenu from '../components/menu/UserSettingsMenu';
import NotificationAndMessagesMenu from '../components/menu/NotificationAndMessagesMenu';


import { connect } from 'react-redux';

import { Link } from 'react-router-dom';


export const AppToaster = Toaster.create({
    className: "recipe-toaster",
    position: Position.TOP
})

const NavBarCallback = (props) => {

    console.log('NavBarCallback props ========>' + props.auth);

    return (

        <div>

            <Navbar className={Classes.NAVBAR}
            >
                <Link to='/HomeScreen' style={{ textDecoration: 'none', color: 'black'}}>
                    <NavbarGroup align={Alignment.LEFT}>
                        <NavBarHeading headingName="Fog Computing System" className={Classes.NAVBAR_HEADING} />
                    </NavbarGroup>
                </Link>

                <NavbarGroup align={Alignment.RIGHT}>

                    <Link to='/HomeScreen'>
                        <NavButton intent="primary" name="Home" 
                        iconname="home" 
                        />
                    </Link>

                    <Link to='/ServicesScreen'>
                        <NavButton intent="primary" name="Services" 
                        iconname="cloud"
                        />
                    </Link>

                    <Link to='/AnalyticsScreen'>
                        <NavButton intent="primary" name="Analytics" 
                        iconname="predictive-analysis"
                        />
                    </Link>

                    <Link to='/privateroute'>
                        <NavButton intent="primary" name="PrivateRoute" 
                        iconname="predictive-analysis"
                        />
                    </Link>

                    <NavbarDivider  />

                    <UserProfileMenu iconname="user" auth={props} />
                    <UserSettingsMenu iconname="cog" />
                    <NotificationAndMessagesMenu iconname="notifications" />
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

function mapStateToProps (state) {

    return {
        isAuthenticated: state.authReducer.isAuthenticated
    }
}


export default NavBarCallback;
