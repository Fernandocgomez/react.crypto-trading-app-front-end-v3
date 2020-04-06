import { FETCH_AVAILABLE_CRYPTO } from "./AvailableCryptoActions";

const initialState = {
    cryptoBalance: 0.00
}

const availableCryptoReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_AVAILABLE_CRYPTO: 
            return {
                ...state, 
                cryptoBalance: action.payload.crypto_balance_usd
            }
        default: 
            return state
    }
}

export default availableCryptoReducer