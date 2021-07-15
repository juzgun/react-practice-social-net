import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={classes.userInfo}>
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
    )
}

export default ProfileInfo;