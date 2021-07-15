import React from 'react';
import classes from "./MessageItem.module.css"

const MessageItem = (props) => {
    return (
        <div className={classes.MessageItem}>
            <img src="https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg" alt="user avatar"></img>
            {props.message}
        </div>
    )
}

export default MessageItem;