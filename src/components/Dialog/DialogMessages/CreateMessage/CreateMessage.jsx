import React from 'react';
import { addMessageActionCreator, clearMessageInputActionCreator, onMessageChangeActionCreator } from '../../../../redux/dialogsPageReducer';
import classes from './CreateMessage.module.css';

const CreateMessage = (props) => {


    let newMessageElement = React.createRef();

    // let addMessage = () => {
    //     props.addMessage();
    //     newMessageElement.current.value = '';
    // }

    // let clearMessageInput = () => {
    //     props.updateNewMessageText('');
    //     newMessageElement.current.value = '';
    // }

    // let onMessageChange = () => {
    //     let text = newMessageElement.current.value;
    //     props.updateNewMessageText(text);
    // };

    let addMessage = () => {
        props.onAddMessage();
    }

    let clearMessageInput = () => {
        props.clearInput();
    }

    let onMessageChange = () => {
        props.onMessageChange(newMessageElement.current.value);
    };


    return (
        <div className={classes.newMessage}>
            <div>
                <textarea
                    placeholder="Type your message" cols="90" rows="2"
                    className={classes.textarea}
                    onChange={onMessageChange}
                    ref={newMessageElement}
                    value={props.newMessageText} />
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