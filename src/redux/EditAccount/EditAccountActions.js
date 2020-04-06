export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS'
export const EDIT_USER_FAILURE = 'EDIT_USER_FAILURE'
export const EDIT_USER_RESET = 'EDIT_USER_RESET'


const editUserSuccess = user => {
    return {
        type: EDIT_USER_SUCCESS, 
        payload: user
    }
}

const editUserFailure = error => {
    return {
        type: EDIT_USER_FAILURE, 
        payload: error
    }
}

const editUserReset = () => {
    return {
        type: EDIT_USER_RESET
    }
}


export const editUser = (event, firstName, lastName, username, email, password, user_id) => {
    event.preventDefault()
    return dispatch => {
        fetch(`https://crypto-simulator-api.herokuapp.com/users/${user_id}`, {
            method: 'PUT', 
            headers: {
                'Authorization': `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username.toLowerCase(), 
                password: password,
                email: email.toLowerCase(),
                first_name: firstName.toLowerCase(),
                last_name: lastName.toLowerCase()
            }),
        })
        .then(res => res.json())
        .then(res => {
            if(res.error === undefined) {
                dispatch(editUserReset())
                dispatch(editUserSuccess(res))
                window.location.reload();
            } else {
                dispatch(editUserReset())
                dispatch(editUserFailure(res))
            }
        })
    }
}