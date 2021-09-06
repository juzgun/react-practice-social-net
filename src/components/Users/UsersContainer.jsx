import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, getUsers, setFollowingInProgressToggle } from './../../redux/usersPageReducer';
import { useEffect } from 'react';
import Users from './Users';
import { Redirect } from 'react-router-dom';
import withAuthRedirect from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

export const UsersAPI = (props) => {

    let onPageChanged = (pageNumber) => {
        props.getUsers(pageNumber, props.pageSize);
    }

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize);
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    };
};

const UsersContainer = () => {
    return compose(withAuthRedirect, connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        setFollowingInProgressToggle, getUsers
    }))(UsersAPI);
};

export default UsersContainer;