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

const NavBarHeading = (props) => {

    return (
        <div onClick={() => console.log('clicked')}>
            <NavbarHeading>
               <h2>{props.headingName}</h2>
            </NavbarHeading>
        </div>
    );

};

const styles = {



};

export default NavBarHeading;