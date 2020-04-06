import { 
    FETCH_DATA_FOR_CRYPTO_TABLE_FAILURE, 
    FETCH_DATA_FOR_CRYPTO_TABLE_REQUEST, 
    FETCH_DATA_FOR_CRYPTO_TABLE_SUCCESS, 
    FILTER_CRYPTO_SUCCESS,
    FILTER_CRYPTO_REQUEST
} from "./CryptoTableHomePageActions";



const initialState = {
    loading: true, 
    cryptos: [], 
    error: '', 
    searchResults: []
}

const cryptoTableHomePageReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_FOR_CRYPTO_TABLE_REQUEST: 
            return {
                ...state, 
                loading: true
            }
        case FETCH_DATA_FOR_CRYPTO_TABLE_SUCCESS: 
            return {
                ...state,
                loading: false, 
                cryptos: action.payload, 
                error: ''
            }
        case FETCH_DATA_FOR_CRYPTO_TABLE_FAILURE: 
            return {
                ...state,
                loading: false, 
                cryptos: [], 
                error: action.payload
            }
        case FILTER_CRYPTO_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case FILTER_CRYPTO_SUCCESS: 
            return {
                ...state,
                loading: false,
                searchResults: action.payload
            }
        default:
            return state
    }
}

export default cryptoTableHomePageReducer