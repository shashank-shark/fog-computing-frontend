/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

// import all the components
import HomeScreen from '../screens/HomeScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import ServicesScreen from '../screens/ServicesScreen';

import UnAuthRedirect from '../screens/auth/UnAuthRedirect';
import ProtectedRoute from '../screens/auth/ProtectedRoute';
import Callback from '../screens/auth/Callback';

// import FixedNavBar component
import FixedNavigationBar from '../components/navbar/FixedNavigationBar';

// import callback
import NavBarCallback from '../screens/NavBarCallback';

// react-router imports
import { Router, Route, Switch, Redirect } from 'react-router';

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

const PrivateRoute = ( {component: Component, auth} ) => (

    <Route render={props => auth.isAuthenticated() === true
    ? <Component auth={auth} {...props} />
    : <Redirect to={{ pathname: '/redirect' }} />
    }
    />

)

class Routes extends Component {

    render() {

        return (
            <div>
                <Router history={history}>
                    <div>
                        {/* <FixedNavigationBar auth={auth} /> */}
                        <Switch>
                            <Route exact path="/" render={() => <HomeScreen /> } />
                            <Route exact path="/authcheck" render={() => <AuthCheck auth={auth} />} />
                            <Route exact path="/redirect" component={UnAuthRedirect} />
                            <Route exact path="/callback" render={(props) => { handleAuthentication(props); return <Callback /> } }/>
                            <Route exact path="/HomeScreen" render={() => <HomeScreen /> } />
                            <Route exact path="/AnalyticsScreen" render={() => <AnalyticsScreen /> } />
                            <Route exact path="/ServicesScreen" render={() => <ServicesScreen /> } />
                            <PrivateRoute path="/privateroute" auth={auth} component={ProtectedRoute} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Routes;