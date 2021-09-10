import React from 'react';
import classes from './CreatePost.module.css';
import { Field, reduxForm } from 'redux-form'



const CreatePostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={'textarea'}
                placeholder="Do you have some news?"
                cols="90" rows="3"
                name={'newPostText'}
                className={classes.textarea}
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