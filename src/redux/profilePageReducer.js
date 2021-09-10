import { profileAPI } from "../api/profileAPI";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

export const addPost = (values) => ({ type: ADD_POST, newPostFormText: values.newPostText })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}

export const getProfileStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setUserStatus(data.data));
            }
            )
    }
}

export const updateProfileStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                };
            }
            )
    }
}

let initialState = {
    postsData: [
        { id: 1, postMessage: "Hi, how are you?", likes: 2, shares: 12 },
        { id: 2, postMessage: "Thank I'm OK!", likes: 13, shares: 32 },
        { id: 3, postMessage: "When u'll come home?", likes: 24, shares: 2 },
        { id: 4, postMessage: "Next week, I guess...", likes: 4, shares: 1 },
        { id: 5, postMessage: "When u'll come home?", likes: 24, shares: 2 },
        { id: 6, postMessage: "Next week, I guess...", likes: 4, shares: 1 },
        { id: 7, postMessage: "When u'll come home?", likes: 24, shares: 2 },
        { id: 8, postMessage: "Next week, I guess...", likes: 4, shares: 1 }
    ],
    profile: null,
    status: ''
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postsData.length,
                postMessage: action.newPostFormText,
                lekes: 0,
                shares: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export default profilePageReducer;