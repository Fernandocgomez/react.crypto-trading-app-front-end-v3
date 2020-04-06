import axios from "axios";


export const FETCH_POST_SIGNUP_SUCCESS = "FETCH_POST_SIGNUP"
export const FETCH_POST_SIGNUP_FAILURE = "FETCH_POST_FAILURE"
export const REMOVE_SUCCESS_MESSAGE = "REMOVE_SUCCESS_MESSAGE"

export const fetchPostSignUpSuccess = newUser => {
    return {
        type: FETCH_POST_SIGNUP_SUCCESS,
        payload: newUser
    }
}

export const fetchPostSignUpFailure = errorMsg => {
    return {
        type: FETCH_POST_SIGNUP_FAILURE, 
        payload: errorMsg
    }
}

export const removeSuccessMessage = () => {
    return {
        type: REMOVE_SUCCESS_MESSAGE
    }
}


export const createNewUser = (userParams, event, history) => {
    event.preventDefault()
    return dispatch => {
        axios.post(`https://crypto-simulator-api.herokuapp.com/users`, {
            username: userParams.username, 
            password: userParams.password, 
            password_confirmation: userParams.password_confirmation, 
            email: userParams.email, 
            email_confirmation: userParams.email_confirmation, 
            first_name: userParams.first_name, 
            last_name: userParams.last_name
        })
        .then(response => {
            const newUser = response
            dispatch(fetchPostSignUpSuccess(newUser))
            history.push("/login")
        })
        .catch(error => {
            const errorMsg = error.response.data.error;
            dispatch(fetchPostSignUpFailure(errorMsg));
        })
    }
}