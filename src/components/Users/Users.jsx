import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/default_user_avatar.png';
import loadIcon from '../../assets/images/loading.svg'
import Preloader from '../common/preloader/Preloader';

const Users = (props) => {

    let allUsers = props.users.map((user) => {
        return (
            <div key={user.id}>
                <div className={classes.avatar}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="user avatar"></img>
                </div>
                <div>
                    {user.followed ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button> :
                        <button onClick={() => { props.follow(user.id) }}>Follow</button>}
                </div>
                <div>{user.name}</div>
                <div>{user.followed}</div>
                <div>{user.status}</div>
                <div>user.location.country</div>
                <div>user.location.city</div>
                <br></br>
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
                            //  || (i >= 3496)
                        ) return <div className={props.currentPage === i && classes.selectedPage} onClick={() => { props.onPageChanged(i); }}>{i}</div>;
                    })}
            </div>
            <Preloader isFetching={props.isFetching} />
            {allUsers}
        </div>
    )
}

export default Users;