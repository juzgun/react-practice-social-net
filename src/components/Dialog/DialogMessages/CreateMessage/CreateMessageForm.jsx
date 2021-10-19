import React from 'react';
import classes from './CreateMessage.module.css';
import { Field, reduxForm } from 'redux-form'
import { maxLenghtCreator, required } from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/FormsControls/FormsControls';

const maxLength50 = maxLenghtCreator(50);

const CreateMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                placeholder="Type your message"
                cols="90" rows="2"
                className={classes.textarea}
                name={'newMessageText'}
                validate={[required, maxLength50]} />
            <div>
                <button>
                    Send
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