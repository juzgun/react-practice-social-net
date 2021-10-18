import React from 'react';
import classes from './CreatePost.module.css';
import { Field, reduxForm } from 'redux-form'
import { maxLenghtCreator, required } from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/FormsControls/FormsControls';

const maxLength30 = maxLenghtCreator(30);

const CreatePostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                placeholder={'Do you have some news?'}
                cols="90" rows="3"
                name={'newPostText'}
                className={classes.textarea}
                validate={[required, maxLength30]}
            />
            <div>
                <button>Add Post</button>
                <button onClick={props.reset}>Clear</button>
            </div>
        </form>
    )
};

const CreatePostReduxForm = reduxForm({
    form: 'newPost'
})(CreatePostForm)


export default CreatePostReduxForm;