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
    Tabs,
    Tab

} from '@blueprintjs/core';
import Panel from '../custom/Panel';

import NavTab from '../custom/tabs/NavTab';

const FixedNavTabBar = () => {

    return (

        <div>

            <Navbar className={Classes.DARK}>

                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading style={styles.navbarHeading}>
                        <H3>Fog Computing Systems</H3>
                    </Navbar.Heading>
                </Navbar.Group>

                <Navbar.Group align={Alignment.RIGHT} style={{ paddingTop: '35px'}}>

                    <Tabs animate={true} id="navbar" large={true} vertical={false}>
                        <Tab id="Home" title="Home" panel={<Panel name="Home" />}/>
                        <Tab id="Files" title="Files" panel={<Panel name="Files" />}/>
                    </Tabs>

                </Navbar.Group>


            </Navbar>

        </div>
    );

}

const styles = {

    navbarHeading: {
        paddingTop: '10px'
    }

};

export default FixedNavTabBar;