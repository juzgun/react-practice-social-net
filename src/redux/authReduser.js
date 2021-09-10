import { headerAPI } from "../api/headerAPI";
import { loginAPI } from "../api/loginAPI";

const SET_USER_DATA = 'SET_USER_DATA';


export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } })

export const getAuthUserData = () => {
    return (dispatch) => {
        headerAPI.getLogin()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }

            }
            )
    }
}

export const postLoginData = (formData) => {
    return (dispatch) => {
        loginAPI.postLogin(formData)
            .then(data => {
                if (data.resultCode === 0) {
                    debugger;
                    let id = data.data.userId;
                    dispatch(setAuthUserData(id, formData.email, null));
                }

            }
            )
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
                ...state, ...action.data, isAuth: true
            }
        default:
            return state;
    }
}

export default authReducer;