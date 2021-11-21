import { profileAPI } from "../api/profileAPI";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

export const addPost = (values) => ({ type: ADD_POST, newPostFormText: values.newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data));
}

export const getProfileStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(data.data));
}

export const updateProfileStatus = (status) => async (dispatch) => {
    const response = await  profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    };
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await  profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    };
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
                likes: 0,
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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: {...action.photos}}
            }
        }
        default:
            return state;
    }
}

export default profilePageReducer;