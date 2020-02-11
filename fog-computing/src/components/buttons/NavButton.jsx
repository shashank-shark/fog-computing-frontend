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
    Colors

} from '@blueprintjs/core';

const NavButton = (props) => {
    
    return (
        <div style={{margin: '5px'}}>
            <Button icon={props.iconname} intent={props.intent} style={styles.buttonStyle} onClick={props.onClick}>
                <b>{props.name}</b>
            </Button>
        </div>
    );
}

const styles = {
    

    buttonStyle : {
    }

}

export default NavButton;

