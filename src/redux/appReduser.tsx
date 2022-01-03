import { getAuthUserData } from "./authReduser";

const SET_INITIALIZED = 'SET_INITIALIZED';

export type InitialStateType = {
    initialized: boolean
}

export type ActionType = {type: typeof SET_INITIALIZED}

export const setInitialStatus = ():ActionType => ({ type: SET_INITIALIZED })

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => dispatch(setInitialStatus()))
}


let initialState: InitialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: ActionType): InitialStateType => {
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