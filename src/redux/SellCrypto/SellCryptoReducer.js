import { SELL_CRYPTO_SWITCH, SELL_CRYPTO_FETCH_RESET, SELL_CRYPTO_FETCH_FAILURE_USD, SELL_CRYPTO_FETCH_FAILURE_CRYPTO } from "./SellCryptoActions"


const initialState = {
    usdToCryptoSwitch: true, 
    usdErrorMsg: false, 
    cryptoErrorMsg: false,
    errorMsg: '' 

}

const sellCryptoReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELL_CRYPTO_SWITCH:
            return {
                ...state,
                usdToCryptoSwitch: !state.usdToCryptoSwitch
            }
        case SELL_CRYPTO_FETCH_RESET: 
            return {
                ...state, 
                usdErrorMsg: false, 
                cryptoErrorMsg: false, 
            }
        case SELL_CRYPTO_FETCH_FAILURE_USD: 
            return {
                ...state, 
                usdErrorMsg: true, 
                cryptoErrorMsg: false, 
                errorMsg: action.payload
            }
        case SELL_CRYPTO_FETCH_FAILURE_CRYPTO: 
            return {
                ...state, 
                usdErrorMsg: false, 
                cryptoErrorMsg: true, 
                errorMsg: action.payload
            }
        default: 
            return state
    }
}

export default sellCryptoReducer