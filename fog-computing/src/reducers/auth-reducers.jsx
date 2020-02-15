/* eslint-disable no-unused-vars */
import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
    isAuthenticated: false
}

const AuthReducer = (state = initialState, action) => {

    switch(action.types) {

        case ACTION_TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        
        case ACTION_TYPES.LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false
            }

        default: 
        return state
    }
    
}

export default AuthReducer;