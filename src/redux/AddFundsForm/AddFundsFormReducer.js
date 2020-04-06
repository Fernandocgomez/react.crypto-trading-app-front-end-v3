import { ADD_FUNDS_FAILURE, ADD_FUNDS_SUCCESS } from "./AddFundsFormActions";

const initialState = {
    portfolio: {}, 
    error: '', 
    showError: false
}

const addFundsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FUNDS_SUCCESS:
            return {
                ...state, 
                portfolio: action.payload, 
                error: '', 
                showError: false
            }
        case ADD_FUNDS_FAILURE: 
            return {
                ...state, 
                portfolio: {}, 
                error: action.payload, 
                showError: true
            }
        default: 
            return state
    }
}

export default addFundsReducer