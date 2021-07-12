import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.img}>
                <img src="https://media.istockphoto.com/vectors/retro-city-wide-banner-vector-id466052873" alt="company logo"></img>
            </div>
            <div className={classes.name}>Lava Net</div>

        </header>
    )
}

export default Header;