/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

// import all the components
import HomeScreen from '../screens/HomeScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import ServicesScreen from '../screens/ServicesScreen';

// import FixedNavBar component
import FixedNavBar from '../components/navbar/FixedNavBar';

// import callback
import NavBarCallback from '../screens/NavBarCallback';

// react-router imports
import { Router, Route, Switch } from 'react-router';

// import history
import history from '../utils/history';
import Auth from '../utils/auth';

import AuthCheck from '../utils/auth-check';

// auth object
const auth = new Auth()

const handleAuthentication = (props) => {
    if (props.location.hash) {
        auth.handleAuth();
    }
}

class Routes extends Component {

    render() {

        return (
            <div>
                <Router history={history}>
                    <div>
                        <FixedNavBar />
                        <Switch>
                            <Route exact path="/" render={() => <HomeScreen auth={auth} /> } />
                            <Route exact path="/authcheck" render={(props) => <AuthCheck auth={auth} />} />
                            <Route exact path="/callback" render={(props) => { handleAuthentication(props); return <NavBarCallback auth={auth} /> } }/>
                            <Route exact path="/HomeScreen" render={() => <HomeScreen auth={auth} /> } />
                            <Route exact path="/AnalyticsScreen" render={() => <AnalyticsScreen auth={auth} /> } />
                            <Route exact path="/ServicesScreen" render={() => <ServicesScreen auth={auth} /> } />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Routes;