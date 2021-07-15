import React from 'react';
import classes from "./DialogMessages.module.css"
import MessageItem from './MessageItem/MessageItem';

const DialogMessages = (props) => {

    let messagesData = [
        { id: 1, text: "Alex Alo hellow", age: 24 },
        { id: 2, text: "Kate Alo hellow", age: 21 },
        { id: 3, text: "Sara Alo hellow", age: 19 },
        { id: 4, text: "Ann Alo hellow", age: 22 },
        { id: 5, text: "Bob Alo hellow", age: 18 },
        { id: 6, text: "Nik Alo hellow", age: 26 }
    ]

    let messagesElements = messagesData
        .map(message => <MessageItem message={message.text} />);

    return (
        <div className={classes.dialogMessages}>
            {messagesElements};
        </div>
    )
}

export default DialogMessages;