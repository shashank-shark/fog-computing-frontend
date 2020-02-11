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
    ButtonGroup

} from '@blueprintjs/core';

const NavIcons = (props) => {
    
    return (
        <div style={{margin: '5px'}}>
          <Button intent={props.intent} icon={props.iconname} onClick={props.onClick} />
        </div>
    );
}

const styles = {
    

    buttonStyle : {
        paddingRight: '3px'
    }

}

export default NavIcons;

