import { stopSubmit } from "redux-form";
import { headerAPI } from "../api/headerAPI";
import { loginAPI } from "../api/loginAPI";
import {securityAPI} from "../api/securityAPI";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';


export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } })
export const setCaptchaUrl = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, data: {captchaUrl}})

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
            dispatch(setCaptchaUrl(null));
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
            let error_message = response.data.messages.length > 0 ? response.data.messages[0] : "Undefined error";
            dispatch(stopSubmit("login", { _error: error_message }));
        }
    } catch (error) {
        console.log(error)
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
        const response = await securityAPI.getCaptchaUrl();
        const captchaUrl = response.url;
        dispatch(setCaptchaUrl(captchaUrl));
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
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'auth/SET_USER_DATA':
        case 'auth/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state, ...action.data
            }
        default:
            return state;
    }
}

export default authReducer;