import React from 'react';
import classes from './Users.module.css';
import Preloader from '../common/preloader/Preloader';
import Pages from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize, users, isFetching, followingInProgress, unfollow, follow, ...props}) => {
    let allUsers = users.map((user) => {
        return (
            <User user={user} followingInProgress={followingInProgress} unfollow={unfollow} follow={follow} props={{...props}}/>
        );
    });

    return (
        <div className={classes.users}>
            <div className={classes.mainPic}>
                <img src="https://media.istockphoto.com/vectors/retro-city-wide-banner-vector-id466052873" alt="main pic" className={classes.mainPic}></img>
            </div>
            <Pages currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalItemsCount} pageSize={pageSize} portionSize={portionSize}/>
            <div>{(isFetching) ? <Preloader /> : allUsers}</div>
        </div >
    )
}

export default Users;