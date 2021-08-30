import { usersAPI } from '../api/usersAPI';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


export const followSucsess = (userId) => ({ type: FOLLOW, userId })

export const unfollowSucsess = (userId) => ({ type: UNFOLLOW, userId })

export const setUsers = (users) => ({ type: SET_USERS, users })

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count })

export const setFetchingToggle = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const setFollowingInProgressToggle = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setFetchingToggle(true));
        dispatch(setFollowingInProgressToggle(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items));
                dispatch(setCurrentPage(currentPage));
                dispatch(setTotalUsersCount(data.totalCount));
                dispatch(setFetchingToggle(false));
                dispatch(setFollowingInProgressToggle(false));
            }
            )

    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingInProgressToggle(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSucsess(userId));
                }
                dispatch(setFollowingInProgressToggle(false, userId));
            }
            )
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingInProgressToggle(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSucsess(userId));
                }
                dispatch(setFollowingInProgressToggle(false, userId));
            }
            )
    }
}

let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state, users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => id !== action.userId)
            }
        default:
            return state;
    }
}

export default usersPageReducer;