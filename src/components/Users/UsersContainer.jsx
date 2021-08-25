import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, setFetchingToggle } from './../../redux/usersPageReducer';
import { useEffect } from 'react';
import Users from './Users';
import { usersAPI } from '../../api/usersAPI';

export const UsersAPI = (props) => {

    let onPageChanged = (pageNumber) => {
        props.setFetchingToggle(true);
        props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, props.pageSize)
            .then(data => {
                props.setFetchingToggle(false);
                props.setUsers(data.items)
            }
            )

    }

    useEffect(() => {
        if (props.users.length === 0) {
            props.setFetchingToggle(true);
            usersAPI.getUsers(props.currentPage, props.pageSize)
                .then(data => {
                    props.setUsers(data.items);
                    props.setTotalUsersCount(data.totalCount);
                    props.setFetchingToggle(false);
                }
                )
        };
    }, [props])

    return <>

        <Users users={props.users}
            totalUsersCount={props.totalUsersCount}
            onPageChanged={onPageChanged}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            follow={props.follow}
            unfollow={props.unfollow}
            isFetching={props.isFetching}>
        </Users>
    </>
};

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    };
};

const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, setFetchingToggle
})(UsersAPI);

export default UsersContainer;