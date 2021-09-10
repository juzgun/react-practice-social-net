import React from 'react';
import classes from './CreateMessage.module.css';
import CreateMessageReduxForm from './CreateMessageForm';

const CreateMessage = (props) => {

    return (
        <div className={classes.newMessage}>
            <div>
                <CreateMessageReduxForm onSubmit={props.onAddMessage} />
            </div>
        </div>
    )
};

export default CreateMessage;