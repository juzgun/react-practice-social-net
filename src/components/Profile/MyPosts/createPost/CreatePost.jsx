import React from 'react';
import classes from './CreatePost.module.css';





const CreatePost = (props) => {

    let addPost = () => {
        props.addPost();
    }

    let clearPostInput = () => {
        props.clearPostInput();
    }

    let onPostChange = (e) => {
        debugger;
        props.onPostChange(e.currentTarget.value);
    };


    return (
        <div className={classes.newPost}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea
                    onChange={onPostChange}
                    placeholder="Do you have some news?"
                    cols="90" rows="3"
                    className={classes.textarea}
                    value={props.newPostText} />
                <div>
                    <button onClick={addPost}>Add Post</button>
                    <button onClick={clearPostInput}>Clear</button>
                </div>
            </div>
        </div>
    )
};

export default CreatePost;