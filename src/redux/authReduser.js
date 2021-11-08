import { stopSubmit } from "redux-form";
import { headerAPI } from "../api/headerAPI";
import { loginAPI } from "../api/loginAPI";

const SET_USER_DATA = 'auth/SET_USER_DATA';


export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } })

export const getAuthUserData = () => async (dispatch) => {
    let result = await headerAPI.getLogin()
            if (result.resultCode === 0) {
                let { id, email, login } = result.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
}

export const postLoginData = (formData) => async (dispatch) => {
    try {
        const response = await loginAPI.postLogin(formData)
        if (response.data.resultCode === 0) {
            let id = response.data.data.userId;
            dispatch(setAuthUserData(id, formData.email, null, true));
        } else {
            let error_message = response.data.messages.length > 0 ? response.data.messages[0] : "Undefined error";
            dispatch(stopSubmit("login", { _error: error_message }));
        }
    } catch (error) {
        console.log(error)
    }
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
        case 'auth/SET_USER_DATA':
            return {
                ...state, ...action.data
            }
        default:
            return state;
    }
}

export default authReducer;