import {
  YOUR_ASSESTS_FETCH_FAILURE,
  YOUR_ASSESTS_FETCH_SUCCESS,
} from "./YourAssestsActions";


const initialState = {
    loading: true, 
    cryptos: [], 
    error: '', 
    noCryptoMsg: false
}

const yourAssestsReducer = (state = initialState, action) => {
    switch(action.type) {
        case YOUR_ASSESTS_FETCH_SUCCESS: 
            return {
                ...state,
                loading: false,
                cryptos: action.payload, 
                error: '', 
                noCryptoMsg: false
            }
        case YOUR_ASSESTS_FETCH_FAILURE: 
            return {
                ...state,
                loading: false,
                cryptos: [], 
                error: action.payload,
                noCryptoMsg: true 
            }
        default: 
            return state
    }
}


export default yourAssestsReducer