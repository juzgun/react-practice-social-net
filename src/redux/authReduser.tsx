import { stopSubmit } from "redux-form";
import { headerAPI } from "../api/headerAPI";
import { loginAPI } from "../api/loginAPI";
import {securityAPI} from "../api/securityAPI";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

export type SetAuthUserDataDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type SetAuthUserDataType = {
    type: typeof SET_USER_DATA
    data: SetAuthUserDataDataType
}

export type SetCaptchaUrlDataType = {
    captchaUrl: string | null
}

export type SetCaptchaUrlType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    data: SetCaptchaUrlDataType
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean):SetAuthUserDataType => (
    {type: SET_USER_DATA, data: { id, email, login, isAuth }})

export const setCaptchaUrl = (captchaUrl: string | null):SetCaptchaUrlType => ({ type: GET_CAPTCHA_URL_SUCCESS, data: {captchaUrl}})

export const getAuthUserData = () => async (dispatch: any) => {
    let result = await headerAPI.getLogin()
            if (result.resultCode === 0) {
                let { id, email, login } = result.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
}

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

export const postLoginData = (formData:FormDataType ) => async (dispatch: any) => {
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

export const getCaptchaUrl = () => async (dispatch: any) => {
        const response = await securityAPI.getCaptchaUrl();
        const captchaUrl = response.url;
        dispatch(setCaptchaUrl(captchaUrl));
}


export const deleteLoginData = () => async (dispatch: any) => {
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

/*export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
};*/

export type InitialStateType = typeof initialState;

export type ActionType = {
    type: typeof SET_USER_DATA | typeof GET_CAPTCHA_URL_SUCCESS
    data: SetCaptchaUrlDataType
}

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};

const authReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'auth/SET_USER_DATA':
        case 'auth/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export default authReducer;