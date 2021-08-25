import React from 'react';
import classes from './ProfileName.module.css';

const ProfileName = (props) => {
    return (
        <div className={classes.userName}>
            {props.profile.fullName}
        </div>
    )
}

export default ProfileName;