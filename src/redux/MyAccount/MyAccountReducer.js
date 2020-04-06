import { FETCH_USER_DATA } from "./MyAccountActions"

const initialState = {
    user: {}, 
    error: ''
}

const myAccountReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_DATA: 
            return {
                ...state, 
                user: action.payload, 
                error: ''
            }
        default: 
            return state
    }
}

export default myAccountReducer