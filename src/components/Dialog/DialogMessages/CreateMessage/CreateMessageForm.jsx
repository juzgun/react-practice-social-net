import React from 'react';
import classes from './CreateMessage.module.css';
import { Field, reduxForm } from 'redux-form'

const CreateMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={'textarea'}
                placeholder="Type your message"
                cols="90" rows="2"
                className={classes.textarea}
                name={'newMessageText'} />
            <div>
                <button>
                    Send Message
                </button>
                <button onClick={props.reset}>
                    Clear
                </button>
            </div>
        </form>
    )
};

const CreateMessageReduxForm = reduxForm({
    form: 'newMessage'
})(CreateMessageForm)

export default CreateMessageReduxForm;