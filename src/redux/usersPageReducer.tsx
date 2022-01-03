import { usersAPI } from '../api/usersAPI';
import { updateObjInArray } from "../utils/object-helpers";
import {ProfileType} from "./profilePageReducer";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';


export type FollowSucsessActionType = {
    type: typeof FOLLOW
    userId: number
}

export const followSucsess = (userId: number): FollowSucsessActionType => ({ type: FOLLOW, userId })

export type UnfollowSucsessActionType = {
    type: typeof UNFOLLOW
    userId: number
}

export const unfollowSucsess = (userId: number): UnfollowSucsessActionType => ({ type: UNFOLLOW, userId })

export type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<ProfileType>
}

export const setUsers = (users: Array<ProfileType>): SetUsersActionType => ({ type: SET_USERS, users })

export type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage })

export type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}

export const setTotalUsersCount = (count: number):SetTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, count })

export type SetFetchingToggleActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export const setFetchingToggle = (isFetching: boolean): SetFetchingToggleActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })

export type SetFollowingInProgressToggleActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

export const setFollowingInProgressToggle = (isFetching: boolean, userId: number):SetFollowingInProgressToggleActionType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const requestUsers = (currentPage:number, pageSize: number) => async (dispatch: any) => {
    dispatch(setFetchingToggle(true));
    dispatch(setFollowingInProgressToggle(true, 1));
    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(data.items));
    dispatch(setCurrentPage(currentPage));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setFetchingToggle(false));
    dispatch(setFollowingInProgressToggle(false, 1));
}

let followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(setFollowingInProgressToggle(true, userId));
    const response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(setFollowingInProgressToggle(false, userId));
}

export const unfollow = (userId: number) => async (dispatch: any) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSucsess);
}

export const follow = (userId: number) => async (dispatch: any) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSucsess);
}

let initialState = {
    users: [] as Array<ProfileType>,
    pageSize: 6,
    totalUsersCount: 20,
    currentPage: 1,
    portionSize: 10,
    isFetching: false,
    followingInProgress: [] as Array<number>
};

export type InitialStateType = typeof initialState;

const usersPageReducer = (state = initialState, action: FollowSucsessActionType |
    UnfollowSucsessActionType | SetUsersActionType | SetCurrentPageActionType |
    SetTotalUsersCountActionType | SetFetchingToggleActionType | SetFollowingInProgressToggleActionType):InitialStateType => {
    switch (action.type) {
        case 'users/FOLLOW':
            return {
                ...state,
                users: updateObjInArray(state.users, action.userId, 'id', {followed: true})
            };
        case 'users/UNFOLLOW':
            return {
                ...state,
                users:  updateObjInArray(state.users, action.userId, 'id', {followed: false})
            };
        case 'users/SET_USERS':
            return {
                ...state, users: action.users
            };
        case 'users/SET_CURRENT_PAGE':
            return {
                ...state, currentPage: action.currentPage
            };
        case 'users/SET_TOTAL_USERS_COUNT':
            return {
                ...state, totalUsersCount: action.count
            };
        case 'users/TOGGLE_IS_FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        case 'users/TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state, followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => id !== action.userId)
            }
        default:
            return state;
    }
}

export default usersPageReducer;