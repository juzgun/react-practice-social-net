import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, setFetchingToggle } from './../../redux/usersPageReducer';
import * as axios from 'axios';
import { useEffect } from 'react';
import Users from './Users';

export const UsersAPI = (props) => {

    let onPageChanged = (pageNumber) => {
        props.setFetchingToggle(true);
        props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`)
            .then(response => {
                props.setFetchingToggle(false);
                props.setUsers(response.data.items)
            }
            )
    }

    useEffect(() => {
        // props.setFetchingToggle(true)
        if (props.users.length === 0) {
            props.setFetchingToggle(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
                .then(response => {
                    props.setUsers(response.data.items);
                    props.setTotalUsersCount(response.data.totalCount);
                    props.setFetchingToggle(false);
                }
                )
        };
        // props.setFetchingToggle(false)
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