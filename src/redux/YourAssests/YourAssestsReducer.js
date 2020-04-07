import {
  YOUR_ASSESTS_FETCH_FAILURE,
  YOUR_ASSESTS_FETCH_SUCCESS,
} from "./YourAssestsActions";


const initialState = {
    loading: true, 
    cryptos: [], 
    error: '', 
}

const yourAssestsReducer = (state = initialState, action) => {
    switch(action.type) {
        case YOUR_ASSESTS_FETCH_SUCCESS: 
            return {
                ...state,
                loading: false,
                cryptos: action.payload, 
                error: ''
            }
        case YOUR_ASSESTS_FETCH_FAILURE: 
            return {
                ...state,
                loading: false,
                cryptos: [], 
                error: action.payload
            }
        default: 
            return state
    }
}


export default yourAssestsReducer