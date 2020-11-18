import { AUTHENTICATE, LOGOUT, SET_DID_TRY_AUTOLOGIN, SIGNUP } from '../actions/auth';


const initialState = {
    token: null,
    user: null,
    didTryAutoLogin: false
}


export default (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                user: action.user,
                token: action.token,
                didTryAutoLogin: true
            }
        case LOGOUT:
            return {
                ...initialState,
                didTryAutoLogin: true
            }
        case SET_DID_TRY_AUTOLOGIN:
            return {
                ...state,
                didTryAutoLogin: true
            }
        case SIGNUP:
            return {
                ...state,
                didTryAutoLogin: true
            }

        default:
            return state;
    }
}