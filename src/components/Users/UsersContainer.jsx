import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, setFetchingToggle, setFollowingInProgressToggle, getUsersThunkCreator } from './../../redux/usersPageReducer';
import { useEffect } from 'react';
import Users from './Users';
import { usersAPI } from '../../api/usersAPI';

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
            followingInProgress={props.followingInProgress}
            setFollowingInProgressToggle={props.setFollowingInProgressToggle} >
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
        followingInProgress: state.usersPage.followingInProgress
    };
};

const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, setFetchingToggle, setFollowingInProgressToggle, getUsers: getUsersThunkCreator
})(UsersAPI);

export default UsersContainer;