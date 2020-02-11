/* eslint-disable no-unused-vars */
import React from 'react';

import {

    H5,
    Alignment,
    Button,
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
    Tab

} from '@blueprintjs/core';

const NavTab = (props) => {
    
    return (
        <div>
            <Tab id={props.id} title={props.title} panel={props.panel} style={styles.buttonStyle} />
        </div>
    );
}

const styles = {
    

    buttonStyle : {
        background: 'balck'
    }

}

export default NavTab;

