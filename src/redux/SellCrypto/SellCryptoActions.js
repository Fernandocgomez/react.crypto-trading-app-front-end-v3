export const SELL_CRYPTO_SWITCH = 'SELL_CRYPTO_SWITCH'
export const SELL_CRYPTO_FETCH_FAILURE_USD = 'SELL_CRYPTO_FETCH_FAILURE_USD'
export const SELL_CRYPTO_FETCH_FAILURE_CRYPTO = 'SELL_CRYPTO_FETCH_FAILURE_CRYPTO'
export const SELL_CRYPTO_FETCH_RESET = 'SELL_CRYPTO_FETCH_RESET'

const sellCryptoSwitchAction = () => {
    return {
        type: SELL_CRYPTO_SWITCH
    }
}

const sellCryptoFetchFailureUsd = (errorMsg) => {
    return {
        type: SELL_CRYPTO_FETCH_FAILURE_USD, 
        payload: errorMsg
    }
}

const sellCryptoFetchFailureCrypto = (errorMsg) => {
    return {
        type: SELL_CRYPTO_FETCH_FAILURE_CRYPTO, 
        payload: errorMsg
    }
}

const sellCryptoFetchReset = () => {
    return {
        type: SELL_CRYPTO_FETCH_RESET
    }
}

export const sellCryptoSwitch = () => {
    return dispatch => {
        dispatch(sellCryptoSwitchAction())
    }
}

export const sellCryptoFetch = (event, ammount, crypto_id) => {
    event.preventDefault()
    return dispatch => {

        dispatch(sellCryptoFetchReset())

        if(ammount < 0) {
            return dispatch(sellCryptoFetchFailureCrypto('negative values are not allow'))
        } else {

            fetch(`https://crypto-simulator-api.herokuapp.com/sell_crypto/${crypto_id}`, {
            method: 'PUT', 
            headers: {
                'Authorization': `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                ammount: ammount
            }),
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.message == undefined) {
                window.location.reload();
            } else {
                dispatch(sellCryptoFetchFailureUsd(res.message))
            }
        })
        
        }

        
        
    }

}

export const sellCryptoFetchUnit = (event, coin, crypto_id, currentCryptoPrice) => {
    event.preventDefault()
    let nCoin = (coin*100)*(parseFloat(currentCryptoPrice))/100
    return dispatch => {

        dispatch(sellCryptoFetchReset())
        if(nCoin < 0) {
            dispatch(sellCryptoFetchFailureCrypto('negative values are not allow'))
        } else {

            fetch(`https://crypto-simulator-api.herokuapp.com/sell_crypto/${crypto_id}`, {
            method: 'PUT', 
            headers: {
                'Authorization': `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                ammount: nCoin
            }),
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.message == undefined) {
                window.location.reload();
            } else {
                dispatch(sellCryptoFetchFailureCrypto(res.message))
            }
        })

        }

        
    }

}