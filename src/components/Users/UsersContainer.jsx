import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, requestUsers, setFollowingInProgressToggle } from './../../redux/usersPageReducer';
import { useEffect } from 'react';
import Users from './Users';
import withAuthRedirect from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsAuth, getIsFetching, getPageSize, getTotalUsersCount, getUsersSuper } from '../../redux/users-selectors';

export const UsersAPI = (props) => {

    let onPageChanged = (pageNumber) => {
        props.requestUsers(pageNumber, props.pageSize);
    }

    useEffect(() => {
        props.requestUsers(props.currentPage, props.pageSize);
    }, [])

    return <>

        <Users users={props.users}
            totalUsersCount={props.totalUsersCount}
            onPageChanged={onPageChanged}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            follow={props.follow}
            unfollow={props.unfollow}
            isFetching={props.isFetching}
            followingInProgress={props.followingInProgress} >
        </Users>
    </>
};

let mapStateToProps = (state) => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    };
};

const UsersContainer = () => {
    return compose(withAuthRedirect, connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        setFollowingInProgressToggle, requestUsers
    }))(UsersAPI);
};

export default UsersContainer;