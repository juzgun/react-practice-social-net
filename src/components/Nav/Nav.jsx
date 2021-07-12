import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item}`}>
                Profile
            </div>
            <div className={classes.item}>
                Messages
            </div>
            <div className={classes.item}>
                Friends
            </div>
            <div className={classes.item}>
                News
            </div>
            <div className={classes.item}>
                Music
            </div>
            <div className={`${classes.item} ${classes.settings}`}>
                Settings
            </div>
        </nav >
    )
}

export default Nav;