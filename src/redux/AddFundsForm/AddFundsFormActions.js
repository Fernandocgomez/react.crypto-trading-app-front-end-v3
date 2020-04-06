export const ADD_FUNDS_SUCCESS = 'ADD_FUNDS_SUCCESS'
export const ADD_FUNDS_FAILURE = 'ADD_FUNDS_FAILURE'

export const addFundsSuccessAction = portfolio => {
    return {
        type: ADD_FUNDS_SUCCESS, 
        payload: portfolio
    }
}

export const addFundsFailureAction = errorMsg => {
    return {
        type: ADD_FUNDS_FAILURE, 
        payload: errorMsg
    }
}

export const addFunds = (event, ammount, portfolio_id) => {
    event.preventDefault()
    return dispatch => {
        fetch(`https://crypto-simulator-api.herokuapp.com/add_funds/${portfolio_id}`, {
            method: 'PUT', 
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                balance: ammount
            }),
        })
        .then(res => res.json())
        .then(res => {
            if(res.portafolio === "no negative numbers are allowed") {
                // error
                dispatch(addFundsFailureAction(res.portafolio))
            }else {
                // success
                dispatch(addFundsSuccessAction(res.portafolio))
                window.location.reload();
            }
        })
        
    }
}