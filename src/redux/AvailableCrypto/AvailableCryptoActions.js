export const FETCH_AVAILABLE_CRYPTO = 'FETCH_AVAILABLE_CRYPTO'

const fetchAvailableCrypto = (cryptoBalance) => {
    return {
        type: FETCH_AVAILABLE_CRYPTO, 
        payload: cryptoBalance
    }
}


export const checkCryptoBalance = (portafolio_id) => {
    return dispatch => {
        fetch(`https://crypto-simulator-api.herokuapp.com/available_crypto_balance_usd/${portafolio_id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            dispatch(fetchAvailableCrypto(res))
        })
    }
}