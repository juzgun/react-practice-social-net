import React from 'react';
import classes from './CreateMessage.module.css';

const CreateMessage = (props) => {

    return (
        <div className={classes.newMessage}>
            <div>
                <textarea
                    placeholder="Type your message" cols="90" rows="2"
                    className={classes.textarea}
                    onChange={props.onMessageChange}
                    value={props.newMessageText} />
                <div>
                    <button onClick={props.onAddMessage} >
                        Send Message
                    </button>
                    <button onClick={props.clearInput}>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    )
};

export default CreateMessage;