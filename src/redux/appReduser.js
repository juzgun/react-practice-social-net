import { getAuthUserData } from "./authReduser";

const SET_INITIALIZED = 'SET_INITIALIZED';


export const setInitialStatus = () => ({ type: SET_INITIALIZED })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => dispatch(setInitialStatus()))
}


let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state, initialized: true
            }
        default:
            return state;
    }
}

export default appReducer;