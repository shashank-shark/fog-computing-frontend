/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

import rootReducer from './reducers/index';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

// react-redux, redux related
import { createStore } from 'redux';

import { Provider } from 'react-redux';

let store = createStore (rootReducer);



ReactDOM.render( <Provider store={store}>
                    <App />
                </Provider>,
        document.getElementById('root'));
