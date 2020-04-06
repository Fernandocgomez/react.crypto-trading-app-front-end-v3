export const AUTH_USER = "AUTH_USER"
export const LOGOUT_USER = "LOGOUT_USER"

export const logoutUserAction = () => {
    return {
        type: LOGOUT_USER
    }
}

export const authUser = () => {
    return {
        type: AUTH_USER
    }
}

export const authUserApp = () => {
    return dispatch => {
        if(localStorage.token !== undefined) {
            dispatch(authUser())
        }
    }
}


export const logoutUser = () => {
    return dispatch => {
        localStorage.clear()
        dispatch(logoutUserAction())
    }
}

