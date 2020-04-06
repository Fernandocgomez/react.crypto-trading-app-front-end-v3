import axios from "axios"; 
import { removeSuccessMessage } from "../SignUpForm/SignUpFormActions";
import { authUser } from "../AuthUser/AuthUserActions";



export const FETCH_POST_LOGIN_SUCCESS = "FETCH_POST_LOGIN_SUCCESS"
export const FETCH_POST_LOGIN_FAILURE = "FETCH_POST_LOGIN_FAILURE"

const fetchPostLoginSuccess = (token) => {
    return {
        type: FETCH_POST_LOGIN_SUCCESS,
        payload: token
    }
}

const fetchPostLoginFailure = (error) => {
    return {
        type: FETCH_POST_LOGIN_FAILURE, 
        payload: error
    }
}


export const loginAuth = (userParams, event, history) => {
    event.preventDefault()
    return dispatch => {
        axios.post(`https://crypto-simulator-api.herokuapp.com/login`, {
            username: userParams.username, 
            password: userParams.password
        })
        .then(response => {
            const token = response
            localStorage.setItem('token', token.data.token)
            localStorage.setItem('user_id', token.data.user.id)
            localStorage.setItem('portafolio_id', token.data.portafolio.id)
            localStorage.setItem('userLogin', true)
            dispatch(fetchPostLoginSuccess(token))
            dispatch(removeSuccessMessage())
            dispatch(authUser())
            history.push("/")
        })
        .catch(error => {
            const errorMsg = error.response.data.error
            dispatch(fetchPostLoginFailure(errorMsg))
        })
    }
}