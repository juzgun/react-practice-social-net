import React from 'react';
import classes from './CreateMessage.module.css';

const CreateMessage = () => {


    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        console.log(text);
    }

    let clearMessageInput = () => {
        console.log("Message inputform cleared")
    }


    return (
        <div className={classes.newMessage}>
            <div>
                <textarea placeholder="Type your message" cols="90" rows="2" className={classes.textarea}></textarea>
                <div>
                    <button onClick={addMessage} ref={newMessageElement}>Send Message</button>
                    <button onClick={clearMessageInput}>Clear</button>
                </div>
            </div>
        </div>
    )
};

export default CreateMessage;