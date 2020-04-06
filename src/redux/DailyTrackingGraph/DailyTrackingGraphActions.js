export const FETCH_GRAPH_DATA_SUCCESS = 'FETCH_GRAPH_DATA_SUCCESS'

const fetchGraphDataSuccess = data => {
    return {
        type: FETCH_GRAPH_DATA_SUCCESS, 
        payload: data
    }
}


export const fetchGraphData = (portfolio_id) => {
    return dispatch => {
        fetch(`https://crypto-simulator-api.herokuapp.com/balance_tracking_data/${portfolio_id}`, {
            method: 'GET', 
            headers: {
                'Authorization': `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            dispatch(fetchGraphDataSuccess(res))
        })
    }
}