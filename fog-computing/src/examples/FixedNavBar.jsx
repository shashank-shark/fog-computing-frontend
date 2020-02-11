/* eslint-disable no-unused-vars */
// import the react library
import React from 'react';

import classNames from 'classnames';

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
    Colors

} from '@blueprintjs/core';

// import customized nav button
import NavIcons from '../custom/NavIcons';
import NavButton from '../custom/NavButton';

// code for FixedNavBar

const FixedNavBar = () => {


    return (

        <div>
            <Navbar className={Classes.DARK} 
            fixedToTop
            >
                <NavbarGroup align={Alignment.LEFT} style={{paddingTop: '12px'}}>
                    <NavbarHeading><H3>Fog Computing Systems</H3></NavbarHeading>
                </NavbarGroup>

                <NavbarGroup align={Alignment.RIGHT}>
                    <NavButton name="Services" iconname="cloud" />
                    <NavButton name="Analytics" iconname="predictive-analysis" />
                    <NavbarDivider />
                    <NavIcons iconname="user" />
                    <NavIcons iconname="cog" />
                    <NavIcons iconname="notifications" />
                </NavbarGroup>
                
            </Navbar>
        </div>
      
    );

}

export default FixedNavBar;
