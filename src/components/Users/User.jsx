import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/default_user_avatar.png';
import { NavLink } from 'react-router-dom';

const User = ({user, followingInProgress, unfollow, follow, ...props}) =>{
    return (
        <div key={user.id} className={classes.userItem}>
            <div>
                <NavLink to={"/profile/" + user.id}>
                    <div className={classes.avatar}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="user avatar"></img>
                    </div>
                </NavLink>
                <div>
                    {user.followed ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id);
                        }}>Unfollow</button> :
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id);
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
};

export default User;