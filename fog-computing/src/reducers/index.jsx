/* eslint-disable no-unused-vars */
/* File : index.js - this file imports all the reducers used for managing every
                      state in the app.
 */

// import the AuthReducer
import AuthReducer from './auth-reducers';

// import the `combineReducers` from redux
import { combineReducers } from 'redux';

// the main root reducer
const rootReducer = combineReducers ({
    authReducer: AuthReducer
});

export default rootReducer;