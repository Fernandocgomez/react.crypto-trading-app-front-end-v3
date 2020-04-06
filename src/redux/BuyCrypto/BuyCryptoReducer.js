import { CHECK_AVAILABLE_BALANCE, CHECK_AVAILABLE_BALANCE_ERROR, BUY_CRYPTO_IN_USD, BUY_CRYPTO_IN_USD_ERROR } from "./BuyCryptoActions";

const initialState = {
    balance: '', 
    error: '', 
    buyCryptoUsdError: null
}

const checkAvailableBalanceReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHECK_AVAILABLE_BALANCE: 
            return {
                ...state, 
                balance: action.payload
            }
        case CHECK_AVAILABLE_BALANCE_ERROR: 
            return {
                ...state, 
                error: action.payload
            }
        case BUY_CRYPTO_IN_USD: 
            return {
                ...state, 
                balance: action.payload.portafolio.balance,
                buyCryptoUsdError: null
            }
        case BUY_CRYPTO_IN_USD_ERROR: 
            return {
                ...state, 
                buyCryptoUsdError: action.payload
            }
        default:
            return state
    }
}

export default checkAvailableBalanceReducer