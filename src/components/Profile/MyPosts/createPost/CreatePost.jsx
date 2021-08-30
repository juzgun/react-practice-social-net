import React from 'react';
import classes from './CreatePost.module.css';





const CreatePost = (props) => {

    return (
        <div className={classes.newPost}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea
                    onChange={props.onPostChange}
                    placeholder="Do you have some news?"
                    cols="90" rows="3"
                    className={classes.textarea}
                    value={props.newPostText} />
                <div>
                    <button onClick={props.addPost}>Add Post</button>
                    <button onClick={props.clearPostInput}>Clear</button>
                </div>
            </div>
        </div>
    )
};

export default CreatePost;