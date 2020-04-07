// export const YOUR_ASSESTS_FETCH_REQUEST = 'YOUR_ASSESTS_FETCH_REQUEST'
export const YOUR_ASSESTS_FETCH_SUCCESS = 'YOUR_ASSESTS_FETCH_SUCCESS'
export const YOUR_ASSESTS_FETCH_FAILURE = 'YOUR_ASSESTS_FETCH_FAILURE'


// const yourAssetsFetchRequest = ()  => {
//     return {
//         type: YOUR_ASSESTS_FETCH_REQUEST
//     }
// }


const yourAssetsFetchSuccess = (cryptos)  => {
    return {
        type: YOUR_ASSESTS_FETCH_SUCCESS, 
        payload: cryptos
    }
}

const yourAssetsFetchFailure = (errorMsg)  => {
    return {
        type: YOUR_ASSESTS_FETCH_FAILURE, 
        payload: errorMsg
    }
}


export const fetchYourAssests = (portfolio_id) => {
    return dispatch => {
        fetch(`https://crypto-simulator-api.herokuapp.com/all_my_cryptos/${portfolio_id}`, {
            method: 'PUT', 
            headers: {
                'Authorization': `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.my_crypto_assests !== undefined) {
                dispatch(yourAssetsFetchSuccess(res.my_crypto_assests))
            } else {
                dispatch(yourAssetsFetchFailure(res.message))
            }
            
        })
    }
}