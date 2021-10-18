import React from 'react';
import classes from './CreatePost.module.css';
import CreatePostReduxForm from './CreatePostForm';





const CreatePost = (props) => {
    return (
        <div className={classes.newPost}>
            <div>
                <h3>My posts</h3>
            </div>
            <CreatePostReduxForm onSubmit={props.addPost} />
        </div>
    )
};

export default CreatePost;