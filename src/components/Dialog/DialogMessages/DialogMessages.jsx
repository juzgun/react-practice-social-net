import React from 'react';
import CreateMessage from './CreateMessage/CreateMessage';
import classes from "./DialogMessages.module.css"
import MessageItem from './MessageItem/MessageItem';

const DialogMessages = (props) => {

    let messagesElements = props.messagesData
        .map(message => <MessageItem message={message.text} />);

    return (
        <div className={classes.dialogMessages}>
            {messagesElements}
            <CreateMessage
                addMessage={props.addMessage}
                updateNewMessageText={props.updateNewMessageText} />
        </div>
    )
}

export default DialogMessages;