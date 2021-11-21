import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileName from './ProfileName/ProfileName';
import Preloader from '../common/preloader/Preloader';
import userPhoto from '../../assets/images/default_user_avatar.png';

const Profile = ({profile, status, updateProfileStatus, isOwner, savePhoto}) => {
    const onAvaPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    console.log('profileRender')

    if (!profile) {
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
                        <img src={profile.photos.large || userPhoto} alt="profile avatar" className={classes.ava}></img>
                        {isOwner && <input type={'file'} onChange={(e)=>{onAvaPhotoSelected(e)}}></input>}
                    </div>
                    <div>
                        <ProfileName profile={profile} />
                        <ProfileInfo profile={profile} status={status} updateProfileStatus={updateProfileStatus} />
                    </div>
                </div>
                <MyPostsContainer />
            </div>
        )
    }

}

export default Profile;