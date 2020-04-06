import { FETCH_POST_LOGIN_FAILURE, FETCH_POST_LOGIN_SUCCESS } from "./LoiginFormActions"

const initialState = {
    token: {}, 
    error: [],
    showError: false
}

const loginFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POST_LOGIN_SUCCESS: 
            return {
                ...state, 
                token: action.payload, 
                error: [], 
                showError: false
            }
        case FETCH_POST_LOGIN_FAILURE:
            return {
                ...state, 
                token: {}, 
                error: action.payload, 
                showError: true
            }
        default: 
            return state
    }
}

export default loginFormReducer