/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

// import all the components
import HomeScreen from '../screens/HomeScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import ServicesScreen from '../screens/ServicesScreen';

// import FixedNavBar component
import FixedNavBar from '../components/navbar/FixedNavBar';

// react-router imports
import { Router, Route, Switch } from 'react-router';

// import history
import history from '../utils/history';

class Routes extends Component {

    render() {

        return (
            <div>
                <Router history={history}>
                    <div>
                        <FixedNavBar />
                        <Switch>
                            <Route exact path="/" component={HomeScreen} />
                            <Route exact path="/HomeScreen" component={HomeScreen} />
                            <Route path="/AnalyticsScreen" component={AnalyticsScreen} />
                            <Route path="/ServicesScreen" component={ServicesScreen} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Routes;