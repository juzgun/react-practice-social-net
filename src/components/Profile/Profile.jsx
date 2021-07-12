import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
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
                    <div className={classes.userName}>
                        Aleksandr Sigonin
                    </div>
                    <div className={classes.userData}>
                        <p>
                            Date of Birth: 2 january
                        </p>
                        <p>
                            City: Ul'yanovsk
                        </p>
                        <p>
                            Education: UlGTU '21
                        </p>
                        <p>
                            Web Site: https://github.com/juzgun
                        </p>
                    </div>
                </div>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;