import { AUTH_USER, LOGOUT_USER } from "./AuthUserActions"


const initialState = {
    userLogin: JSON.parse(localStorage.getItem('userLogin')) || false
}

const authUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER: 
            return {
                ...state, 
                userLogin: true
            }
        case LOGOUT_USER: 
            return {
                ...state, 
                userLogin: false
            }
        default: 
            return state
    }
}

export default authUserReducer