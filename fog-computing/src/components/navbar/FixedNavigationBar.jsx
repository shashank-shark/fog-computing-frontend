/* eslint-disable no-unused-vars */
// import the react library
import React, { Component } from 'react';

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
import NavBarHeading from './NavBarHeading';

import UserProfileMenu from '../menu/UserProfileMenu';
import UserSettingsMenu from '../menu/UserSettingsMenu';
import NotificationAndMessagesMenu from '../menu/NotificationAndMessagesMenu';

import Auth from '../../utils/auth';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

export const AppToaster = Toaster.create({
    className: "recipe-toaster",
    position: Position.TOP
})

class FixedNavigationBar extends Component {
    

 render () {

    console.log("wow:" + this.props);
    return (

        <div>

            <Navbar className={Classes.NAVBAR}>

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

                    <NavbarDivider  />

                    {/* { console.log ("is User Authenticated ? " + props.auth.isAuthenticated) } */}

                    {
                        !this.props.isUserAuthenticated
                        ? <button onClick={this.props.auth.login()}>Logout</button>
                        : <button onClick={this.props.auth.login()}>Login</button>

                    }
                    <UserProfileMenu iconname="user" />
                    <UserSettingsMenu iconname="cog" />
                    <NotificationAndMessagesMenu iconname="notifications" />
                </NavbarGroup>
                
            </Navbar>
        </div>
    );

    }
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

function mapStoreToProps (state) {

    return {
        isUserAuthenticated: state.authReducer.isUserAuthenticated
    }
}

export default connect(mapStoreToProps)(FixedNavigationBar);
