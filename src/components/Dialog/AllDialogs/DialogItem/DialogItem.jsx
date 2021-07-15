import React from 'react';
import classes from "./DialogItem.module.css"
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <li className={classes.dialogUser}><NavLink to={path} activeClassName={classes.activeLink}>{props.name}</NavLink></li>
    )
}

export default DialogItem;