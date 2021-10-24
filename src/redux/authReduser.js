import { stopSubmit } from "redux-form";
import { headerAPI } from "../api/headerAPI";
import { loginAPI } from "../api/loginAPI";

const SET_USER_DATA = 'SET_USER_DATA';


export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } })

export const getAuthUserData = () => (dispatch) => {
    return headerAPI.getLogin()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }

        }
        )
}

export const postLoginData = (formData) => (dispatch) => {
    loginAPI.postLogin(formData)
        .then(data => {
            if (data.resultCode === 0) {
                let id = data.data.userId;
                dispatch(setAuthUserData(id, formData.email, null, true));
            } else {
                let error_message = data.data.messages.length > 0 ? data.data.messages[0] : "Undefined error";
                dispatch(stopSubmit("login", { _error: error_message }));
            }

        })
}


export const deleteLoginData = () => async (dispatch) => {
    try {
        const response = await loginAPI.deleteLogin()
        // const data = await response.json()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    } catch (error) {
        console.log(error)
    }
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data
            }
        default:
            return state;
    }
}

export default authReducer;