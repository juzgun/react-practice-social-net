import React from 'react';
import classes from "./DialogMessages.module.css"
import MessageItem from './MessageItem/MessageItem';

const DialogMessages = (props) => {

    let messagesElements = props.messagesData
        .map(message => <MessageItem message={message.text} />);

    return (
        <div className={classes.dialogMessages}>
            {messagesElements};
        </div>
    )
}

export default DialogMessages;