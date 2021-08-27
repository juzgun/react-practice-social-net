import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/default_user_avatar.png';
import Preloader from '../common/preloader/Preloader';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const Users = (props) => {
    let allUsers = props.users.map((user) => {
        return (
            <div key={user.id} className={classes.userItem}>
                <div>
                    <NavLink to={"/profile/" + user.id}>
                        <div className={classes.avatar}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="user avatar"></img>
                        </div>
                    </NavLink>
                    <div>
                        {user.followed ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.setFollowingInProgressToggle(true, user.id);
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "444b86ce-347b-4a1a-bba0-6d746929aa7c"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(user.id);
                                    }
                                    props.setFollowingInProgressToggle(false, user.id);
                                }
                                )
                        }}>Unfollow</button> :
                            <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                props.setFollowingInProgressToggle(true, user.id);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "444b86ce-347b-4a1a-bba0-6d746929aa7c"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(user.id);
                                        }
                                        props.setFollowingInProgressToggle(false, user.id);
                                    }
                                    )
                            }}>Follow</button>}
                    </div>
                </div>
                <div>
                    <div>{user.name}</div>
                    <div>{user.followed}</div>
                    <div>{user.status}</div>
                    <div>user.location.country</div>
                    <div>user.location.city</div>
                </div>
            </div>
        );
    });

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={classes.users}>
            <div className={classes.mainPic}>
                <img src="https://media.istockphoto.com/vectors/retro-city-wide-banner-vector-id466052873" alt="main pic" className={classes.mainPic}></img>
            </div>
            <div className={classes.pages}>
                {
                    pages.map((i) => {
                        if ((i <= 10)
                        ) return <div className={props.currentPage === i && classes.selectedPage} onClick={() => { props.onPageChanged(i); }}>{i}</div>;
                    })}
            </div>
            <Preloader isFetching={props.isFetching} />
            {allUsers}
        </div>
    )
}

export default Users;