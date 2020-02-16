/* eslint-disable no-unused-vars */
import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
    isUserAuthenticated: false
}

const AuthReducer = (state = initialState, action) => {

    switch(action.type) {

        case ACTION_TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                isUserAuthenticated: true
            }
        
        case ACTION_TYPES.LOGIN_FAILURE:
            return {
                ...state,
                isUserAuthenticated: false
            }

        default: 
        return state
    }
    
}

export default AuthReducer;