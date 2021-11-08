import { usersAPI } from '../api/usersAPI';
import { updateObjInArray } from "../utils/object-helpers";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';


export const followSucsess = (userId) => ({ type: FOLLOW, userId })

export const unfollowSucsess = (userId) => ({ type: UNFOLLOW, userId })

export const setUsers = (users) => ({ type: SET_USERS, users })

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count })

export const setFetchingToggle = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const setFollowingInProgressToggle = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setFetchingToggle(true));
    dispatch(setFollowingInProgressToggle(true));
    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(data.items));
    dispatch(setCurrentPage(currentPage));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setFetchingToggle(false));
    dispatch(setFollowingInProgressToggle(false));
}

let followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setFollowingInProgressToggle(true, userId));
    const response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(setFollowingInProgressToggle(false, userId));
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSucsess);
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSucsess);
}

let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 20,
    currentPage: 1,
    portionSize: 10,
    isFetching: false,
    followingInProgress: []
};

const usersPageReducer = (state = initialState, action) => {
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