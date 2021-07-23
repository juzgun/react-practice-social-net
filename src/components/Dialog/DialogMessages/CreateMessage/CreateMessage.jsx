import React from 'react';
import classes from './CreateMessage.module.css';

const CreateMessage = (props) => {


    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
        newMessageElement.current.value = '';
    }

    let clearMessageInput = () => {
        props.updateNewMessageText('');
        newMessageElement.current.value = '';
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    };


    return (
        <div className={classes.newMessage}>
            <div>
                <textarea
                    placeholder="Type your message" cols="90" rows="2"
                    className={classes.textarea}
                    onChange={onMessageChange}
                    ref={newMessageElement} />
                <div>
                    <button onClick={addMessage} >
                        Send Message
                    </button>
                    <button onClick={clearMessageInput}>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    )
};

export default CreateMessage;