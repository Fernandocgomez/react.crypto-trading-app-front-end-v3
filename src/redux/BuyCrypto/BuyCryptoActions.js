import axios from "axios"; 

export const CHECK_AVAILABLE_BALANCE = "CHECK_AVAILABLE_BALANCE"
export const CHECK_AVAILABLE_BALANCE_ERROR = "CHECK_AVAILABLE_BALANCE_ERROR"
export const BUY_CRYPTO_IN_USD = "BUY_CRYPTO_IN_USD"
export const BUY_CRYPTO_IN_USD_ERROR = "BUY_CRYPTO_IN_USD_ERROR"


const checkAvailableBalanceAction = (balance) => {
    return {
        type: CHECK_AVAILABLE_BALANCE,
        payload: balance
    }
}

const checkAvailableBalanceActionError = (error) => {
    return {
        type: CHECK_AVAILABLE_BALANCE_ERROR,
        payload: error
    }
}

const buyCryptoInUsdAction = (portafolioAndCrypto) => {
    return {
        type: BUY_CRYPTO_IN_USD, 
        payload: portafolioAndCrypto
    }
}

const buyCryptoInUsErrordAction = (error) => {
    return {
        type: BUY_CRYPTO_IN_USD_ERROR, 
        payload: error
    }
}

export const buyCryptoInUsd = (inputInDollars, cryptoObj, event, portafolio_id, history) => {
    event.preventDefault()

    const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.token}`,
            'Content-Type': 'application/json'
        }
    }

    const bodyParameters = {
        
        cryptoId: Number.isInteger(cryptoObj.id) ? cryptoObj.cryptoId : cryptoObj.id, 
        name: cryptoObj.name, 
        rank: cryptoObj.rank, 
        symbol: cryptoObj.symbol, 
        supply: cryptoObj.supply, 
        maxSupply: cryptoObj.maxSupply, 
        marketCapUsd: cryptoObj.marketCapUsd,
        volumeUsd24Hr: cryptoObj.volumeUsd24Hr,
        priceUsd: cryptoObj.priceUsd, 
        changePercent24Hr: cryptoObj.changePercent24Hr, 
        portafolio_id: portafolio_id, 
        ammount_pass: inputInDollars
    }

    return dispatch => {
        axios.post('https://crypto-simulator-api.herokuapp.com/buy_crypto/', 
        bodyParameters, 
        config)
        .then(response => {
            if(response.data.error === "You don't have enough funds") {
                dispatch(buyCryptoInUsErrordAction(response.data.error))
                
                
            } else {
                const portafolioAndNewCrypto = response.data
                dispatch(buyCryptoInUsdAction(portafolioAndNewCrypto))
                if(history === undefined) {
                    window.location.reload();
                } else {
                    history.push("/portfolio")
                }

            }
            
        })
    }
}

export const checkAvailableBalance = (portafolio_id) => {
    return dispatch => {
        axios.get(`https://crypto-simulator-api.herokuapp.com/portafolios/${portafolio_id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            const balance = response.data.balance
            dispatch(checkAvailableBalanceAction(balance))
        })
        .catch(error => {
            const errorMsg = error;
            dispatch(checkAvailableBalanceActionError(errorMsg));
        })
    }
}


