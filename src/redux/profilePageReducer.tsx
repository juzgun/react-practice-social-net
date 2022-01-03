import { profileAPI } from "../api/profileAPI";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


export type AddPostActionType = {
    type: typeof ADD_POST
    newPostFormText: string
}

export type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

export type SetUserStatusActionType = {
    type: typeof SET_USER_STATUS
    status: string
}

export type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS, photos: ProfilePhotosType
}

export const addPost = (values: any): AddPostActionType => ({ type: ADD_POST, newPostFormText: values.newPostText })
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status: string): SetUserStatusActionType => ({ type: SET_USER_STATUS, status })
export const savePhotoSuccess = (photos: ProfilePhotosType): SavePhotoSuccessActionType => ({ type: SAVE_PHOTO_SUCCESS, photos })


export const getProfile = (userId: number) => async (dispatch: any) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data));
}

export const getProfileStatus = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(data.data));
}

export const updateProfileStatus = (status: string) => async (dispatch: any) => {
    const response = await  profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    };
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    const response = await  profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    };
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.id;
    const response = await  profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId));
    } else {
        const error_message = response.data.messages.length > 0 ? response.data.messages[0] : "Undefined error";
        const error_key = error_message.substring(error_message.lastIndexOf(">")+1,error_message.lastIndexOf(")")).toLowerCase();
        dispatch(stopSubmit('editProfile', {"contacts": {[error_key]: error_message.substring(0, error_message.lastIndexOf(" ("))} }));
        return Promise.reject(error_message);
    }
}

export type InitialStateType = typeof initialState;

export type ProfilePhotosType = {
    small: string | null
    large: string | null
}
export type ProfileContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

export type ProfileType = {
    aboutMe?: undefined | string
    contacts?: ProfileContactsType | null | undefined
    lookingForAJob?: boolean | undefined
    lookingForAJobDescription?: string | null |undefined
    fullName?: string | undefined
    userId?: number | undefined
    photos: ProfilePhotosType | null
}

type PostDataType = {
    id: number
    postMessage: string
    likes: number
    shares: number
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
    ] as Array<PostDataType>,
    profile: null as null | ProfileType,
    status: '' ,
    newPostText: null as null | string | undefined
};

const profilePageReducer = (state = initialState, action: AddPostActionType |
    SetUserProfileActionType | SetUserStatusActionType | SavePhotoSuccessActionType):InitialStateType => {
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