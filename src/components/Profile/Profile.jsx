import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileName from './ProfileName/ProfileName';
import Preloader from '../common/preloader/Preloader';

const Profile = (props) => {
    if (!props.profile) {
        return (
            <div className={classes.profile}>
                <Preloader />
                <p>Sorry there's no data</p>
            </div>
        )
    } else {
        return (
            <div className={classes.profile}>
                <div className={classes.mainPic}>
                    <img src="https://media.istockphoto.com/vectors/retro-city-wide-banner-vector-id466052873" alt="main pic" className={classes.mainPic}></img>
                </div>
                <div className={classes.user}>
                    <div>
                        <img src={props.profile.photos.large} alt="profile avatar" className={classes.ava}></img>
                    </div>
                    <div>
                        <ProfileName profile={props.profile} />
                        <ProfileInfo profile={props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus} />
                    </div>
                </div>
                <MyPostsContainer />
            </div>
        )
    }

}

export default Profile;