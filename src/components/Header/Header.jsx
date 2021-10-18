import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.img}>
                <img src="https://media.istockphoto.com/vectors/retro-city-wide-banner-vector-id466052873" alt="company logo"></img>
            </div>
            <div className={classes.name}>
                Lava Net
                <div className={classes.loginLink}>
                    {props.isAuth ? <div>{props.login} <button onClick={props.deleteLoginData}>Log Out</button></div> : <NavLink to={'/login'}>
                        Login
                    </NavLink>
                    }

                </div>
            </div>


        </header >
    )
}

export default Header;