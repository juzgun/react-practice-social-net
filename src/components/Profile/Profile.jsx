import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileName from './ProfileName/ProfileName';

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <div className={classes.mainPic}>
                <img src="https://media.istockphoto.com/vectors/retro-city-wide-banner-vector-id466052873" alt="main pic" className={classes.mainPic}></img>
            </div>
            <div className={classes.user}>
                <div>
                    <img src="https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg" alt="profile avatar" className={classes.ava}></img>
                </div>
                <div>
                    <ProfileName />
                    <ProfileInfo />
                </div>
            </div>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;